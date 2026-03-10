import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sourceFile = resolve(__dirname, 'src', 'val.css')
const configFile = resolve(__dirname, 'val.config.js')

function toKebabCase(value) {
  return value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
}

function createRule(selector, declarations) {
  return `${selector} { ${declarations.join(' ')} }`
}

function parseRule(rule) {
  const match = rule.match(/^(\.[^\s{]+)\s*\{\s*(.*?)\s*\}$/)
  if (!match) {
    throw new Error(`Unable to parse rule: ${rule}`)
  }

  return {
    selector: match[1],
    declarations: match[2],
  }
}

function utilityNameFromSelector(selector, prefix) {
  const match = selector.match(new RegExp(`^\\.${prefix}-(.+)$`))
  return match?.[1] ?? ''
}

function readConfig() {
  return import(`${pathToFileURL(configFile).href}?t=${Date.now()}`).then(mod => mod.default ?? mod)
}

function buildRootTokens(theme) {
  const colorLines = Object.entries(theme.colors).map(([name, value]) => `  --val-color-${toKebabCase(name)}: ${value};`)
  const spacingLines = Object.entries(theme.spacing).map(([name, value]) => `  --val-space-${name}: ${value};`)
  const radiusLines = Object.entries(theme.radius).map(([name, value]) => `  --val-radius-${toKebabCase(name)}: ${value};`)
  const textLines = Object.entries(theme.text).map(([name, value]) => `  --val-text-${toKebabCase(name)}: ${value};`)
  const shadowLines = Object.entries(theme.shadow).map(([name, value]) => `  --val-shadow-${toKebabCase(name)}: ${value};`)
  const widthLines = Object.entries(theme.width).map(([name, value]) => `  --val-width-${toKebabCase(name)}: ${value};`)

  return [
    ':root {',
    `  --val-font-sans: ${theme.font.sans};`,
    `  --val-font-display: ${theme.font.display};`,
    `  --val-font-mono: ${theme.font.mono};`,
    ...colorLines,
    ...spacingLines,
    ...radiusLines,
    ...shadowLines,
    ...widthLines,
    ...textLines,
    '}',
  ].join('\n')
}

function buildSpacingUtilities(prefix) {
  const directions = [
    ['p', ['padding']],
    ['px', ['padding-inline']],
    ['py', ['padding-block']],
    ['pt', ['padding-top']],
    ['pb', ['padding-bottom']],
    ['pl', ['padding-left']],
    ['pr', ['padding-right']],
    ['m', ['margin']],
    ['mx', ['margin-inline']],
    ['my', ['margin-block']],
    ['mt', ['margin-top']],
    ['mb', ['margin-bottom']],
    ['ml', ['margin-left']],
    ['mr', ['margin-right']],
    ['gap', ['gap']],
  ]

  const lines = []
  for (const [utility, properties] of directions) {
    for (const scale of ['0', '2', '4', '6', '8', '12', '16', '20']) {
      lines.push(createRule(`.${prefix}-${utility}-${scale}`, properties.map(property => `${property}: var(--val-space-${scale});`)))
    }
  }
  lines.push(createRule(`.${prefix}-mx-auto`, ['margin-inline: auto;']))
  return lines
}

function buildColorUtilities(prefix, colors) {
  const lines = []
  for (const name of Object.keys(colors)) {
    const token = toKebabCase(name)
    lines.push(createRule(`.${prefix}-text-${token}`, [`color: var(--val-color-${token});`]))
    lines.push(createRule(`.${prefix}-bg-${token}`, [`background: var(--val-color-${token});`]))
    lines.push(createRule(`.${prefix}-border-${token}`, [`border-color: var(--val-color-${token});`]))
  }
  lines.push(createRule(`.${prefix}-bg-transparent`, ['background: transparent;']))
  return lines
}

function buildRadiusUtilities(prefix, radius) {
  return Object.keys(radius).map(name => createRule(`.${prefix}-rounded-${toKebabCase(name)}`, [`border-radius: var(--val-radius-${toKebabCase(name)});`]))
}

function buildWidthUtilities(prefix, widths) {
  const lines = [
    createRule(`.${prefix}-w-full`, ['width: 100%;']),
    createRule(`.${prefix}-min-h-screen`, ['min-height: 100vh;']),
  ]

  for (const name of Object.keys(widths)) {
    const token = toKebabCase(name)
    lines.push(createRule(`.${prefix}-max-w-${token}`, [`width: var(--val-width-${token});`]))
  }

  return lines
}

function buildTextUtilities(prefix, text) {
  return Object.keys(text).map(name => {
    const token = toKebabCase(name)
    if (token === 'hero') {
      return createRule(`.${prefix}-text-${token}`, ['font-size: var(--val-text-hero);', 'line-height: 0.95;', 'letter-spacing: -0.05em;'])
    }
    return createRule(`.${prefix}-text-${token}`, [`font-size: var(--val-text-${token});`])
  })
}

function buildShadowUtilities(prefix, shadows) {
  return Object.keys(shadows).map(name => createRule(`.${prefix}-shadow-${toKebabCase(name)}`, [`box-shadow: var(--val-shadow-${toKebabCase(name)});`]))
}

function buildUtilities(prefix, theme) {
  return [
    createRule(`.${prefix}-flex`, ['display: flex;']),
    createRule(`.${prefix}-inline-flex`, ['display: inline-flex;']),
    createRule(`.${prefix}-grid`, ['display: grid;']),
    createRule(`.${prefix}-block`, ['display: block;']),
    createRule(`.${prefix}-hidden`, ['display: none;']),
    createRule(`.${prefix}-flex-row`, ['flex-direction: row;']),
    createRule(`.${prefix}-flex-col`, ['flex-direction: column;']),
    createRule(`.${prefix}-flex-wrap`, ['flex-wrap: wrap;']),
    createRule(`.${prefix}-items-center`, ['align-items: center;']),
    createRule(`.${prefix}-items-start`, ['align-items: flex-start;']),
    createRule(`.${prefix}-justify-center`, ['justify-content: center;']),
    createRule(`.${prefix}-justify-between`, ['justify-content: space-between;']),
    createRule(`.${prefix}-justify-start`, ['justify-content: flex-start;']),
    createRule(`.${prefix}-text-center`, ['text-align: center;']),
    createRule(`.${prefix}-border`, ['border: 1px solid var(--val-color-border);']),
    createRule(`.${prefix}-border-0`, ['border: 0;']),
    createRule(`.${prefix}-font-semibold`, ['font-weight: 600;']),
    createRule(`.${prefix}-font-bold`, ['font-weight: 700;']),
    createRule(`.${prefix}-font-display`, ['font-family: var(--val-font-display);']),
    createRule(`.${prefix}-font-mono`, ['font-family: var(--val-font-mono);']),
    createRule(`.${prefix}-leading-tight`, ['line-height: 1.1;']),
    createRule(`.${prefix}-leading-copy`, ['line-height: 1.7;']),
    createRule(`.${prefix}-transition`, ['transition: all 150ms ease;']),
    createRule(`.${prefix}-cursor-pointer`, ['cursor: pointer;']),
    createRule(`.${prefix}-grid-cols-2`, ['grid-template-columns: repeat(2, minmax(0, 1fr));']),
    createRule(`.${prefix}-grid-cols-3`, ['grid-template-columns: repeat(3, minmax(0, 1fr));']),
    buildWidthUtilities(prefix, theme.width),
    buildTextUtilities(prefix, theme.text),
    buildColorUtilities(prefix, theme.colors),
    buildRadiusUtilities(prefix, theme.radius),
    buildShadowUtilities(prefix, theme.shadow),
    buildSpacingUtilities(prefix),
  ].flat()
}

function isStateVariantEligible(name) {
  return /^(bg-|text-|border($|-)|shadow-)/.test(name)
}

function buildResponsiveVariants(prefix, rules, breakpoints) {
  return Object.entries(breakpoints).map(([breakpoint, width]) => {
    const lines = rules.map(rule => {
      const { selector, declarations } = parseRule(rule)
      const variantSelector = selector.replace(`.${prefix}-`, `.${prefix}-${breakpoint}\\:`)
      return `  ${variantSelector} { ${declarations} }`
    })

    return [`@media (min-width: ${width}) {`, ...lines, '}'].join('\n')
  })
}

function buildStateVariants(prefix, rules, states) {
  const eligible = rules.filter(rule => isStateVariantEligible(utilityNameFromSelector(parseRule(rule).selector, prefix)))

  return states.flatMap(state => {
    return eligible.map(rule => {
      const { selector, declarations } = parseRule(rule)
      const variantSelector = selector.replace(`.${prefix}-`, `.${prefix}-${state}\\:`)

      if (state === 'focus') {
        return `${variantSelector}:focus, ${variantSelector}:focus-visible { ${declarations} }`
      }

      return `${variantSelector}:${state} { ${declarations} }`
    })
  })
}

function buildComponents(prefix) {
  return [
    createRule(`.${prefix}-btn`, ['display: inline-flex;', 'align-items: center;', 'justify-content: center;', 'gap: var(--val-space-2);', 'padding: 0.85rem 1.1rem;', 'border-radius: var(--val-radius-pill);', 'border: 1px solid transparent;', 'font: inherit;', 'cursor: pointer;', 'transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease, color 150ms ease;']),
    `.${prefix}-btn:hover { transform: translateY(-1px); }`,
    createRule(`.${prefix}-btn-brand`, ['background: var(--val-color-brand);', 'color: #fff;']),
    createRule(`.${prefix}-btn-accent`, ['background: var(--val-color-accent);', 'color: #0b1020;']),
    createRule(`.${prefix}-btn-ghost`, ['background: transparent;', 'border-color: var(--val-color-border);', 'color: var(--val-color-text);']),
    createRule(`.${prefix}-card`, ['border: 1px solid var(--val-color-border);', 'border-radius: var(--val-radius-xl);', 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 30%), var(--val-color-surface);', 'box-shadow: var(--val-shadow-card);']),
    createRule(`.${prefix}-card-panel`, ['background: var(--val-color-panel);']),
    createRule(`.${prefix}-badge`, ['display: inline-flex;', 'align-items: center;', 'gap: 0.4rem;', 'padding: 0.3rem 0.65rem;', 'border-radius: var(--val-radius-pill);', 'border: 1px solid rgba(255, 255, 255, 0.08);', 'background: rgba(255, 255, 255, 0.05);', 'font-size: var(--val-text-xs);', 'font-weight: 600;']),
    createRule(`.${prefix}-badge-brand`, ['color: var(--val-color-brand);', 'background: rgba(91, 124, 255, 0.1);', 'border-color: rgba(91, 124, 255, 0.25);']),
    createRule(`.${prefix}-badge-accent`, ['color: var(--val-color-accent);', 'background: rgba(142, 242, 194, 0.08);', 'border-color: rgba(142, 242, 194, 0.25);']),
    createRule(`.${prefix}-eyebrow`, ['display: inline-flex;', 'align-items: center;', 'gap: 0.5rem;', 'padding: 0.45rem 0.7rem;', 'border: 1px solid rgba(91, 124, 255, 0.25);', 'border-radius: var(--val-radius-pill);', 'color: var(--val-color-brand);', 'background: rgba(91, 124, 255, 0.08);', 'font-size: var(--val-text-sm);', 'font-weight: 600;']),
  ].join('\n')
}

async function build() {
  const config = await readConfig()
  const prefix = config.prefix ?? 'val'
  const outDir = resolve(__dirname, config.outDir ?? 'dist')
  const outFile = resolve(outDir, `${prefix}.css`)
  const sourceCss = readFileSync(sourceFile, 'utf8').trim()
  const utilityRules = buildUtilities(prefix, config.theme)
  const responsiveVariants = buildResponsiveVariants(prefix, utilityRules, config.breakpoints ?? {})
  const stateVariants = buildStateVariants(prefix, utilityRules, config.states ?? [])

  mkdirSync(outDir, { recursive: true })

  const css = [
    '/* Val Phase 1 scaffold */',
    buildRootTokens(config.theme),
    sourceCss,
    '@layer val.utilities {',
    utilityRules.join('\n'),
    '}',
    responsiveVariants.length > 0 ? ['@layer val.variants {', ...responsiveVariants, '}'].join('\n') : '',
    stateVariants.length > 0 ? ['@layer val.states {', ...stateVariants, '}'].join('\n') : '',
    '@layer val.components {',
    buildComponents(prefix),
    '}',
  ].join('\n\n')

  writeFileSync(outFile, `${css}\n`)
  console.log(`Built ${outFile}`)
}

build().catch(error => {
  console.error(error)
  process.exit(1)
})