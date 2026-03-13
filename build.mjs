import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { bundle } from "lightningcss";
import { build } from "esbuild";

const root = process.cwd();
const sourceDir = resolve(root, "src");
const generatedDir = resolve(sourceDir, "generated");
const generatedUtilityFile = resolve(generatedDir, "utilities.generated.css");
const distDir = resolve(root, "dist");

const responsiveVariants = [
  { kind: "responsive", id: "sm", query: "40rem" },
  { kind: "responsive", id: "md", query: "48rem" },
  { kind: "responsive", id: "lg", query: "64rem" },
  { kind: "responsive", id: "xl", query: "80rem" },
  { kind: "responsive", id: "2xl", query: "96rem" },
];

const themeVariants = [
  {
    kind: "theme",
    id: "dark",
    selectors: [".vel-theme-dark", "[data-vel-theme=\"dark\"]", ".dark"],
  },
];

const stateVariants = [
  { kind: "state", id: "hover", pseudo: ":hover" },
  { kind: "state", id: "focus", pseudo: ":focus" },
  { kind: "state", id: "focus-visible", pseudo: ":focus-visible" },
];

const spacingScale = [
  ["0", "0"],
  ["1", "var(--vel-space-1)"],
  ["2", "var(--vel-space-2)"],
  ["3", "var(--vel-space-3)"],
  ["4", "var(--vel-space-4)"],
  ["5", "var(--vel-space-5)"],
  ["6", "var(--vel-space-6)"],
  ["7", "var(--vel-space-7)"],
  ["8", "var(--vel-space-8)"],
  ["10", "var(--vel-space-10)"],
  ["12", "var(--vel-space-12)"],
];

const widthScale = [
  ["auto", "auto"],
  ["full", "100%"],
  ["screen", "100vw"],
  ["min", "min-content"],
  ["max", "max-content"],
  ["fit", "fit-content"],
];

const heightScale = [
  ["auto", "auto"],
  ["full", "100%"],
  ["screen", "100vh"],
  ["min", "min-content"],
  ["max", "max-content"],
  ["fit", "fit-content"],
];

const maxWidthScale = [
  ["none", "none"],
  ["full", "100%"],
  ["screen-sm", "var(--vel-container-sm)"],
  ["screen-md", "var(--vel-container-md)"],
  ["screen-lg", "var(--vel-container-lg)"],
  ["screen-xl", "var(--vel-container-xl)"],
  ["screen-2xl", "var(--vel-container-2xl)"],
  ["xs", "20rem"],
  ["sm", "24rem"],
  ["md", "28rem"],
  ["lg", "32rem"],
  ["xl", "36rem"],
  ["2xl", "42rem"],
  ["3xl", "48rem"],
  ["4xl", "56rem"],
  ["5xl", "64rem"],
  ["6xl", "72rem"],
  ["7xl", "80rem"],
];

const aspectScale = [
  ["auto", "auto"],
  ["square", "1 / 1"],
  ["video", "16 / 9"],
  ["4/3", "4 / 3"],
  ["16/10", "16 / 10"],
];

const colorUtilities = [
  ["default", "var(--vel-color-text)"],
  ["muted", "var(--vel-color-text-muted)"],
  ["primary", "var(--vel-color-primary)"],
  ["primary-strong", "var(--vel-color-primary-strong)"],
  ["success", "var(--vel-color-success)"],
  ["warning", "var(--vel-color-warning)"],
  ["danger", "var(--vel-color-danger)"],
  ["info", "var(--vel-color-info)"],
];

const backgroundUtilities = [
  ["transparent", "transparent"],
  ["surface", "var(--vel-color-surface)"],
  ["elevated", "var(--vel-color-surface-elevated)"],
  ["raised", "var(--vel-color-surface-raised)"],
  ["soft", "var(--vel-color-surface-soft)"],
  ["tint", "var(--vel-color-surface-tint)"],
  ["primary", "var(--vel-color-primary)"],
  ["primary-soft", "var(--vel-color-primary-soft)"],
  ["success-soft", "var(--vel-color-success-soft)"],
  ["warning-soft", "var(--vel-color-warning-soft)"],
  ["danger-soft", "var(--vel-color-danger-soft)"],
  ["info-soft", "var(--vel-color-info-soft)"],
];

const borderColorUtilities = [
  ["transparent", "transparent"],
  ["default", "var(--vel-color-border)"],
  ["strong", "var(--vel-color-border-strong)"],
  ["primary", "var(--vel-color-primary)"],
  ["success", "var(--vel-color-success)"],
  ["warning", "var(--vel-color-warning)"],
  ["danger", "var(--vel-color-danger)"],
  ["info", "var(--vel-color-info)"],
];

const textSizeUtilities = [
  ["xs", [["font-size", "var(--vel-font-size-xs)"], ["line-height", "1rem"]]],
  ["sm", [["font-size", "var(--vel-font-size-sm)"], ["line-height", "1.25rem"]]],
  ["base", [["font-size", "var(--vel-font-size-base)"], ["line-height", "var(--vel-line-height-base)"]]],
  ["lg", [["font-size", "var(--vel-font-size-lg)"], ["line-height", "1.75rem"]]],
  ["xl", [["font-size", "var(--vel-font-size-xl)"], ["line-height", "1.9rem"]]],
  ["2xl", [["font-size", "var(--vel-font-size-2xl)"], ["line-height", "2rem"]]],
  ["3xl", [["font-size", "var(--vel-font-size-3xl)"], ["line-height", "1.12"]]],
  ["4xl", [["font-size", "var(--vel-font-size-4xl)"], ["line-height", "1.02"]]],
];

const fontWeightUtilities = [
  ["normal", "400"],
  ["medium", "560"],
  ["semibold", "650"],
  ["bold", "700"],
];

const lineHeightUtilities = [
  ["none", "1"],
  ["tight", "var(--vel-line-height-tight)"],
  ["normal", "var(--vel-line-height-base)"],
  ["relaxed", "var(--vel-line-height-relaxed)"],
  ["loose", "1.85"],
];

const letterSpacingUtilities = [
  ["tighter", "-0.05em"],
  ["tight", "var(--vel-letter-spacing-tight)"],
  ["normal", "var(--vel-letter-spacing-normal)"],
  ["wide", "var(--vel-letter-spacing-wide)"],
  ["widest", "0.14em"],
];

const opacityScale = [
  ["0", "0"],
  ["25", "0.25"],
  ["50", "0.5"],
  ["75", "0.75"],
  ["100", "1"],
];

const radiusUtilities = [
  ["none", "0"],
  ["sm", "var(--vel-radius-sm)"],
  ["md", "var(--vel-radius-md)"],
  ["lg", "var(--vel-radius-lg)"],
  ["pill", "var(--vel-radius-pill)"],
  ["full", "9999px"],
];

const translateScale = [
  ["0", "0"],
  ["1", "var(--vel-space-1)"],
  ["2", "var(--vel-space-2)"],
  ["3", "var(--vel-space-3)"],
  ["4", "var(--vel-space-4)"],
  ["6", "var(--vel-space-6)"],
  ["8", "var(--vel-space-8)"],
  ["1/2", "50%"],
  ["full", "100%"],
];

const blurUtilities = [
  ["none", "0"],
  ["sm", "4px"],
  ["md", "10px"],
  ["lg", "18px"],
];

const shadowUtilities = [
  ["none", "none"],
  ["sm", "var(--vel-shadow-1)"],
  ["md", "var(--vel-shadow-2)"],
  ["lg", "var(--vel-shadow-3)"],
];

const transitionUtilities = [
  [
    "transition-none",
    [["transition-property", "none"]],
  ],
  [
    "transition",
    [
      ["transition-property", "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"],
      ["transition-duration", "var(--vel-transition-base)"],
      ["transition-timing-function", "ease"],
    ],
  ],
  [
    "transition-colors",
    [
      ["transition-property", "color, background-color, border-color, text-decoration-color, fill, stroke"],
      ["transition-duration", "var(--vel-transition-base)"],
      ["transition-timing-function", "ease"],
    ],
  ],
  [
    "transition-opacity",
    [
      ["transition-property", "opacity"],
      ["transition-duration", "var(--vel-transition-base)"],
      ["transition-timing-function", "ease"],
    ],
  ],
  [
    "transition-transform",
    [
      ["transition-property", "transform"],
      ["transition-duration", "var(--vel-transition-base)"],
      ["transition-timing-function", "ease"],
    ],
  ],
  [
    "transition-shadow",
    [
      ["transition-property", "box-shadow"],
      ["transition-duration", "var(--vel-transition-base)"],
      ["transition-timing-function", "ease"],
    ],
  ],
];

const durationUtilities = [
  ["75", "75ms"],
  ["150", "150ms"],
  ["220", "var(--vel-transition-base)"],
  ["320", "var(--vel-transition-slow)"],
  ["500", "500ms"],
];

const easingUtilities = [
  ["linear", "linear"],
  ["in", "cubic-bezier(0.4, 0, 1, 1)"],
  ["out", "cubic-bezier(0, 0, 0.2, 1)"],
  ["in-out", "cubic-bezier(0.4, 0, 0.2, 1)"],
];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = resolve(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

function indentBlock(value, spaces = 2) {
  const prefix = " ".repeat(spaces);
  return value
    .split("\n")
    .map((line) => (line.length > 0 ? `${prefix}${line}` : line))
    .join("\n");
}

function escapeClassName(className) {
  let escaped = className
    .replaceAll("\\", "\\\\")
    .replaceAll(":", "\\:")
    .replaceAll("/", "\\/")
    .replaceAll(".", "\\.");

  if (/^[0-9]/.test(className)) {
    escaped = `\\${className.charCodeAt(0).toString(16)} ${escaped.slice(1)}`;
  }

  return escaped;
}

function selectorFor(className) {
  return `.${escapeClassName(className)}`;
}

function formatRule(selector, declarations) {
  return `${selector} {\n${declarations.map(([property, value]) => `  ${property}: ${value};`).join("\n")}\n}`;
}

function createTransformDeclarations(variableDeclarations) {
  return [
    ...variableDeclarations,
    [
      "transform",
      "translate3d(var(--vel-translate-x, 0), var(--vel-translate-y, 0), 0) rotate(var(--vel-rotate, 0deg)) scaleX(var(--vel-scale-x, 1)) scaleY(var(--vel-scale-y, 1))",
    ],
  ];
}

function variantPrefix(combo) {
  return combo.map((variant) => `${variant.id}:`).join("");
}

function buildVariantCombinations(groups) {
  let combinations = [[]];

  for (const group of groups) {
    const nextCombinations = [...combinations];

    for (const combination of combinations) {
      for (const variant of group) {
        nextCombinations.push([...combination, variant]);
      }
    }

    combinations = nextCombinations;
  }

  return combinations.filter((combination) => combination.length > 0);
}

function resolveVariantGroups(variants = {}) {
  const groups = [];

  if (variants.responsive) {
    groups.push(responsiveVariants);
  }

  if (variants.theme) {
    groups.push(themeVariants);
  }

  if (Array.isArray(variants.states) && variants.states.length > 0) {
    groups.push(stateVariants.filter((variant) => variants.states.includes(variant.id)));
  }

  return groups.filter((group) => group.length > 0);
}

function renderUtilityRule(className, declarations, combo = []) {
  const responsiveVariant = combo.find((variant) => variant.kind === "responsive") ?? null;
  const themeVariant = combo.find((variant) => variant.kind === "theme") ?? null;
  const stateSuffix = combo
    .filter((variant) => variant.kind === "state")
    .map((variant) => variant.pseudo)
    .join("");
  const selectorBase = `${selectorFor(`${variantPrefix(combo)}${className}`)}${stateSuffix}`;
  const selector = themeVariant
    ? themeVariant.selectors.map((themeSelector) => `${themeSelector} ${selectorBase}`).join(",\n")
    : selectorBase;
  const rule = formatRule(selector, declarations);

  if (!responsiveVariant) {
    return `${rule}\n`;
  }

  return `@media (min-width: ${responsiveVariant.query}) {\n${indentBlock(rule)}\n}\n`;
}

function createFractionScale() {
  const fractions = [];

  for (const denominator of [2, 3, 4, 5, 6, 12]) {
    for (let numerator = 1; numerator < denominator; numerator += 1) {
      fractions.push([`${numerator}/${denominator}`, `${(numerator / denominator) * 100}%`]);
    }
  }

  return fractions;
}

function pushUtility(utilities, className, declarations, variants = {}) {
  utilities.push({ className, declarations, variants });
}

function generateUtilitySurface() {
  const utilities = [];
  const responsiveOnly = { responsive: true };
  const chainedStateVariants = { responsive: true, states: ["hover", "focus", "focus-visible"] };
  const chainedSemanticVariants = { responsive: true, theme: true, states: ["hover", "focus", "focus-visible"] };
  const themeResponsive = { responsive: true, theme: true };
  const fractionScale = createFractionScale();

  for (const [name, value] of [
    ["block", "block"],
    ["inline-block", "inline-block"],
    ["inline", "inline"],
    ["flex", "flex"],
    ["inline-flex", "inline-flex"],
    ["grid", "grid"],
    ["inline-grid", "inline-grid"],
    ["contents", "contents"],
    ["hidden", "none"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["display", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["static", "static"],
    ["fixed", "fixed"],
    ["absolute", "absolute"],
    ["relative", "relative"],
    ["sticky", "sticky"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["position", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["inset-0", "0"],
    ["inset-x-0", "0"],
    ["inset-y-0", "0"],
    ["top-0", "0"],
    ["right-0", "0"],
    ["bottom-0", "0"],
    ["left-0", "0"],
    ["top-auto", "auto"],
    ["right-auto", "auto"],
    ["bottom-auto", "auto"],
    ["left-auto", "auto"],
  ]) {
    const declarations =
      name === "inset-x-0"
        ? [["left", value], ["right", value]]
        : name === "inset-y-0"
          ? [["top", value], ["bottom", value]]
          : name === "inset-0"
            ? [["inset", value]]
            : [[name.replace("-auto", "").replace("-0", ""), value]];

    pushUtility(utilities, `vel-${name}`, declarations, responsiveOnly);
  }

  for (const [name, value] of [
    ["visible", "visible"],
    ["hidden", "hidden"],
    ["clip", "clip"],
    ["scroll", "scroll"],
    ["auto", "auto"],
  ]) {
    pushUtility(utilities, `vel-overflow-${name}`, [["overflow", value]], responsiveOnly);
    pushUtility(utilities, `vel-overflow-x-${name}`, [["overflow-x", value]], responsiveOnly);
    pushUtility(utilities, `vel-overflow-y-${name}`, [["overflow-y", value]], responsiveOnly);
  }

  pushUtility(utilities, "vel-visible", [["visibility", "visible"]], responsiveOnly);
  pushUtility(utilities, "vel-invisible", [["visibility", "hidden"]], responsiveOnly);

  for (const [name, value] of aspectScale) {
    pushUtility(utilities, `vel-aspect-${name}`, [["aspect-ratio", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["flex-row", "row"],
    ["flex-row-reverse", "row-reverse"],
    ["flex-col", "column"],
    ["flex-col-reverse", "column-reverse"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["flex-direction", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["flex-wrap", "wrap"],
    ["flex-wrap-reverse", "wrap-reverse"],
    ["flex-nowrap", "nowrap"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["flex-wrap", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["flex-1", "1 1 0%"],
    ["flex-auto", "1 1 auto"],
    ["flex-initial", "0 1 auto"],
    ["flex-none", "none"],
    ["grow", "1"],
    ["grow-0", "0"],
    ["shrink", "1"],
    ["shrink-0", "0"],
  ]) {
    const property = name.startsWith("grow")
      ? "flex-grow"
      : name.startsWith("shrink")
        ? "flex-shrink"
        : "flex";
    pushUtility(utilities, `vel-${name}`, [[property, value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["order-first", "-9999"],
    ["order-last", "9999"],
    ["order-none", "0"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["order", value]], responsiveOnly);
  }

  for (let value = 1; value <= 12; value += 1) {
    pushUtility(utilities, `vel-order-${value}`, [["order", String(value)]], responsiveOnly);
  }

  for (const [name, value] of [["auto", "auto"], ["full", "100%"], ...fractionScale]) {
    pushUtility(utilities, `vel-basis-${name}`, [["flex-basis", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["justify-start", "flex-start"],
    ["justify-end", "flex-end"],
    ["justify-center", "center"],
    ["justify-between", "space-between"],
    ["justify-around", "space-around"],
    ["justify-evenly", "space-evenly"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["justify-content", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["items-start", "flex-start"],
    ["items-end", "flex-end"],
    ["items-center", "center"],
    ["items-baseline", "baseline"],
    ["items-stretch", "stretch"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["align-items", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["self-auto", "auto"],
    ["self-start", "flex-start"],
    ["self-end", "flex-end"],
    ["self-center", "center"],
    ["self-stretch", "stretch"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["align-self", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["content-start", "flex-start"],
    ["content-end", "flex-end"],
    ["content-center", "center"],
    ["content-between", "space-between"],
    ["content-around", "space-around"],
    ["content-evenly", "space-evenly"],
    ["content-stretch", "stretch"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["align-content", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["justify-items-start", "start"],
    ["justify-items-end", "end"],
    ["justify-items-center", "center"],
    ["justify-items-stretch", "stretch"],
    ["justify-self-auto", "auto"],
    ["justify-self-start", "start"],
    ["justify-self-end", "end"],
    ["justify-self-center", "center"],
    ["justify-self-stretch", "stretch"],
    ["place-items-start", "start"],
    ["place-items-end", "end"],
    ["place-items-center", "center"],
    ["place-items-stretch", "stretch"],
    ["place-content-start", "start"],
    ["place-content-end", "end"],
    ["place-content-center", "center"],
    ["place-content-between", "space-between"],
    ["place-content-around", "space-around"],
    ["place-content-evenly", "space-evenly"],
    ["place-content-stretch", "stretch"],
    ["place-self-auto", "auto"],
    ["place-self-start", "start"],
    ["place-self-end", "end"],
    ["place-self-center", "center"],
    ["place-self-stretch", "stretch"],
  ]) {
    const property = name.startsWith("justify-items")
      ? "justify-items"
      : name.startsWith("justify-self")
        ? "justify-self"
        : name.startsWith("place-items")
          ? "place-items"
          : name.startsWith("place-content")
            ? "place-content"
            : "place-self";
    pushUtility(utilities, `vel-${name}`, [[property, value]], responsiveOnly);
  }

  pushUtility(utilities, "vel-grid-cols-none", [["grid-template-columns", "none"]], responsiveOnly);
  pushUtility(utilities, "vel-grid-rows-none", [["grid-template-rows", "none"]], responsiveOnly);

  for (let value = 1; value <= 12; value += 1) {
    pushUtility(utilities, `vel-grid-cols-${value}`, [["grid-template-columns", `repeat(${value}, minmax(0, 1fr))`]], responsiveOnly);
    pushUtility(utilities, `vel-col-span-${value}`, [["grid-column", `span ${value} / span ${value}`]], responsiveOnly);
  }

  for (let value = 1; value <= 6; value += 1) {
    pushUtility(utilities, `vel-grid-rows-${value}`, [["grid-template-rows", `repeat(${value}, minmax(0, 1fr))`]], responsiveOnly);
    pushUtility(utilities, `vel-row-span-${value}`, [["grid-row", `span ${value} / span ${value}`]], responsiveOnly);
  }

  for (const [name, value] of [
    ["grid-flow-row", "row"],
    ["grid-flow-col", "column"],
    ["grid-flow-dense", "dense"],
    ["grid-flow-row-dense", "row dense"],
    ["grid-flow-col-dense", "column dense"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["grid-auto-flow", value]], responsiveOnly);
  }

  for (const [token, size] of spacingScale) {
    pushUtility(utilities, `vel-p-${token}`, [["padding", size]], responsiveOnly);
    pushUtility(utilities, `vel-px-${token}`, [["padding-inline", size]], responsiveOnly);
    pushUtility(utilities, `vel-py-${token}`, [["padding-block", size]], responsiveOnly);
    pushUtility(utilities, `vel-pt-${token}`, [["padding-top", size]], responsiveOnly);
    pushUtility(utilities, `vel-pr-${token}`, [["padding-right", size]], responsiveOnly);
    pushUtility(utilities, `vel-pb-${token}`, [["padding-bottom", size]], responsiveOnly);
    pushUtility(utilities, `vel-pl-${token}`, [["padding-left", size]], responsiveOnly);
    pushUtility(utilities, `vel-m-${token}`, [["margin", size]], responsiveOnly);
    pushUtility(utilities, `vel-mx-${token}`, [["margin-inline", size]], responsiveOnly);
    pushUtility(utilities, `vel-my-${token}`, [["margin-block", size]], responsiveOnly);
    pushUtility(utilities, `vel-mt-${token}`, [["margin-top", size]], responsiveOnly);
    pushUtility(utilities, `vel-mr-${token}`, [["margin-right", size]], responsiveOnly);
    pushUtility(utilities, `vel-mb-${token}`, [["margin-bottom", size]], responsiveOnly);
    pushUtility(utilities, `vel-ml-${token}`, [["margin-left", size]], responsiveOnly);
    pushUtility(utilities, `vel-gap-${token}`, [["gap", size]], responsiveOnly);
    pushUtility(utilities, `vel-gap-x-${token}`, [["column-gap", size]], responsiveOnly);
    pushUtility(utilities, `vel-gap-y-${token}`, [["row-gap", size]], responsiveOnly);
  }

  for (const [name, value] of [
    ["auto", "auto"],
    ["x-auto", "auto"],
    ["y-auto", "auto"],
    ["t-auto", "auto"],
    ["r-auto", "auto"],
    ["b-auto", "auto"],
    ["l-auto", "auto"],
  ]) {
    const className = `vel-m${name === "auto" ? "" : name.startsWith("-") ? name : `-${name}`}`;
    const declarations =
      className === "vel-m-auto"
        ? [["margin", value]]
        : className === "vel-m-x-auto"
          ? [["margin-inline", value]]
          : className === "vel-m-y-auto"
            ? [["margin-block", value]]
            : className === "vel-m-t-auto"
              ? [["margin-top", value]]
              : className === "vel-m-r-auto"
                ? [["margin-right", value]]
                : className === "vel-m-b-auto"
                  ? [["margin-bottom", value]]
                  : [["margin-left", value]];
    pushUtility(utilities, className.replace("vel-m-x", "vel-mx").replace("vel-m-y", "vel-my").replace("vel-m-t", "vel-mt").replace("vel-m-r", "vel-mr").replace("vel-m-b", "vel-mb").replace("vel-m-l", "vel-ml"), declarations, responsiveOnly);
  }

  for (const [name, value] of widthScale) {
    pushUtility(utilities, `vel-w-${name}`, [["width", value]], responsiveOnly);
  }

  for (const [name, value] of heightScale) {
    pushUtility(utilities, `vel-h-${name}`, [["height", value]], responsiveOnly);
  }

  for (const [name, value] of [["0", "0"], ["full", "100%"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) {
    pushUtility(utilities, `vel-min-w-${name}`, [["min-width", value]], responsiveOnly);
    pushUtility(utilities, `vel-min-h-${name}`, [["min-height", value]], responsiveOnly);
  }

  for (const [name, value] of maxWidthScale) {
    pushUtility(utilities, `vel-max-w-${name}`, [["max-width", value]], responsiveOnly);
  }

  for (const [name, value] of [["none", "none"], ["full", "100%"], ["screen", "100vh"], ["fit", "fit-content"]]) {
    pushUtility(utilities, `vel-max-h-${name}`, [["max-height", value]], responsiveOnly);
  }

  for (const [name, value] of fractionScale) {
    pushUtility(utilities, `vel-w-${name}`, [["width", value]], responsiveOnly);
    pushUtility(utilities, `vel-h-${name}`, [["height", value]], responsiveOnly);
  }

  for (const [name, value] of [
    ["z-auto", "auto"],
    ["z-0", "0"],
    ["z-10", "10"],
    ["z-20", "20"],
    ["z-30", "30"],
    ["z-40", "40"],
    ["z-50", "50"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["z-index", value]], responsiveOnly);
  }

  for (const [name, value] of colorUtilities) {
    pushUtility(utilities, `vel-text-${name}`, [["color", value]], chainedSemanticVariants);
  }

  pushUtility(utilities, "vel-font-sans", [["font-family", "var(--vel-font-sans)"]], chainedStateVariants);
  pushUtility(utilities, "vel-font-mono", [["font-family", "var(--vel-font-mono)"]], chainedStateVariants);

  for (const [name, declarations] of textSizeUtilities) {
    pushUtility(utilities, `vel-text-${name}`, declarations, chainedStateVariants);
  }

  for (const [name, value] of fontWeightUtilities) {
    pushUtility(utilities, `vel-font-${name}`, [["font-weight", value]], chainedStateVariants);
  }

  for (const [name, value] of lineHeightUtilities) {
    pushUtility(utilities, `vel-leading-${name}`, [["line-height", value]], chainedStateVariants);
  }

  for (const [name, value] of letterSpacingUtilities) {
    pushUtility(utilities, `vel-tracking-${name}`, [["letter-spacing", value]], chainedStateVariants);
  }

  for (const [name, value] of [
    ["left", "left"],
    ["center", "center"],
    ["right", "right"],
    ["justify", "justify"],
  ]) {
    pushUtility(utilities, `vel-text-${name}`, [["text-align", value]], chainedStateVariants);
  }

  for (const [name, value] of [
    ["uppercase", "uppercase"],
    ["lowercase", "lowercase"],
    ["capitalize", "capitalize"],
    ["normal-case", "none"],
  ]) {
    pushUtility(utilities, `vel-${name}`, [["text-transform", value]], chainedStateVariants);
  }

  pushUtility(utilities, "vel-italic", [["font-style", "italic"]], chainedStateVariants);
  pushUtility(utilities, "vel-not-italic", [["font-style", "normal"]], chainedStateVariants);
  pushUtility(utilities, "vel-underline", [["text-decoration-line", "underline"]], chainedStateVariants);
  pushUtility(utilities, "vel-line-through", [["text-decoration-line", "line-through"]], chainedStateVariants);
  pushUtility(utilities, "vel-no-underline", [["text-decoration-line", "none"]], chainedStateVariants);

  for (const [name, value] of [
    ["normal", "normal"],
    ["nowrap", "nowrap"],
    ["pre", "pre"],
    ["pre-line", "pre-line"],
    ["pre-wrap", "pre-wrap"],
  ]) {
    pushUtility(utilities, `vel-whitespace-${name}`, [["white-space", value]], chainedStateVariants);
  }

  pushUtility(utilities, "vel-break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]], chainedStateVariants);
  pushUtility(utilities, "vel-break-words", [["overflow-wrap", "break-word"]], chainedStateVariants);
  pushUtility(utilities, "vel-break-all", [["word-break", "break-all"]], chainedStateVariants);
  pushUtility(utilities, "vel-list-none", [["list-style-type", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-list-disc", [["list-style-type", "disc"]], chainedStateVariants);
  pushUtility(utilities, "vel-list-decimal", [["list-style-type", "decimal"]], chainedStateVariants);
  pushUtility(utilities, "vel-truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]], chainedStateVariants);

  for (const [name, value] of backgroundUtilities) {
    pushUtility(utilities, `vel-bg-${name}`, [["background-color", value]], chainedSemanticVariants);
  }

  pushUtility(utilities, "vel-border", [["border-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-0", [["border-width", "0"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-2", [["border-width", "2px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-4", [["border-width", "4px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-x", [["border-inline-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-y", [["border-block-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-t", [["border-top-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-r", [["border-right-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-b", [["border-bottom-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-l", [["border-left-width", "1px"], ["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-solid", [["border-style", "solid"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-dashed", [["border-style", "dashed"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-dotted", [["border-style", "dotted"]], chainedStateVariants);
  pushUtility(utilities, "vel-border-none", [["border-style", "none"]], chainedStateVariants);

  for (const [name, value] of radiusUtilities) {
    pushUtility(utilities, `vel-rounded-${name}`, [["border-radius", value]], chainedStateVariants);
  }

  for (const [name, value] of borderColorUtilities) {
    pushUtility(utilities, `vel-border-${name}`, [["border-color", value]], chainedSemanticVariants);
  }

  for (const [name, value] of opacityScale) {
    pushUtility(utilities, `vel-opacity-${name}`, [["opacity", value]], chainedStateVariants);
  }

  for (const [name, value] of shadowUtilities) {
    pushUtility(utilities, `vel-shadow-${name}`, [["box-shadow", value]], chainedStateVariants);
  }

  for (const [name, value] of blurUtilities) {
    pushUtility(utilities, `vel-blur-${name}`, [["filter", `blur(${value})`]], chainedStateVariants);
    pushUtility(utilities, `vel-backdrop-blur-${name}`, [["backdrop-filter", `blur(${value})`]], chainedStateVariants);
  }

  for (const [name, declarations] of transitionUtilities) {
    pushUtility(utilities, `vel-${name}`, declarations, chainedStateVariants);
  }

  for (const [name, value] of durationUtilities) {
    pushUtility(utilities, `vel-duration-${name}`, [["transition-duration", value]], chainedStateVariants);
  }

  for (const [name, value] of easingUtilities) {
    pushUtility(utilities, `vel-ease-${name}`, [["transition-timing-function", value]], chainedStateVariants);
  }

  pushUtility(utilities, "vel-animate-none", [["animation", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-animate-spin", [["animation", "vel-spin 1s linear infinite"]], chainedStateVariants);
  pushUtility(utilities, "vel-animate-pulse", [["animation", "vel-pulse 1.8s ease-in-out infinite"]], chainedStateVariants);
  pushUtility(utilities, "vel-transform-none", [["transform", "none"]], chainedStateVariants);

  for (const [name, value] of translateScale) {
    pushUtility(utilities, `vel-translate-x-${name}`, createTransformDeclarations([["--vel-translate-x", value]]), chainedStateVariants);
    pushUtility(utilities, `vel-translate-y-${name}`, createTransformDeclarations([["--vel-translate-y", value]]), chainedStateVariants);
  }

  for (const [name, value] of [["95", "0.95"], ["100", "1"], ["105", "1.05"]]) {
    pushUtility(
      utilities,
      `vel-scale-${name}`,
      createTransformDeclarations([["--vel-scale-x", value], ["--vel-scale-y", value]]),
      chainedStateVariants,
    );
  }

  for (const [name, value] of [["0", "0deg"], ["3", "3deg"], ["6", "6deg"], ["12", "12deg"], ["45", "45deg"], ["90", "90deg"]]) {
    pushUtility(utilities, `vel-rotate-${name}`, createTransformDeclarations([["--vel-rotate", value]]), chainedStateVariants);
  }

  for (const [name, value] of [
    ["center", "center"],
    ["top", "top"],
    ["top-right", "top right"],
    ["right", "right"],
    ["bottom", "bottom"],
    ["left", "left"],
  ]) {
    pushUtility(utilities, `vel-origin-${name}`, [["transform-origin", value]], chainedStateVariants);
  }

  for (const [name, value] of [
    ["auto", "auto"],
    ["default", "default"],
    ["pointer", "pointer"],
    ["not-allowed", "not-allowed"],
    ["grab", "grab"],
  ]) {
    pushUtility(utilities, `vel-cursor-${name}`, [["cursor", value]], chainedStateVariants);
  }

  pushUtility(utilities, "vel-pointer-events-none", [["pointer-events", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-pointer-events-auto", [["pointer-events", "auto"]], chainedStateVariants);

  for (const [name, value] of [
    ["none", "none"],
    ["text", "text"],
    ["all", "all"],
    ["auto", "auto"],
  ]) {
    pushUtility(utilities, `vel-select-${name}`, [["user-select", value]], chainedStateVariants);
  }

  for (const [name, value] of [
    ["none", "none"],
    ["x", "horizontal"],
    ["y", "vertical"],
  ]) {
    pushUtility(utilities, `vel-resize-${name}`, [["resize", value]], chainedStateVariants);
  }

  pushUtility(utilities, "vel-appearance-none", [["appearance", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-appearance-auto", [["appearance", "auto"]], chainedStateVariants);
  pushUtility(utilities, "vel-scroll-auto", [["scroll-behavior", "auto"]], chainedStateVariants);
  pushUtility(utilities, "vel-scroll-smooth", [["scroll-behavior", "smooth"]], chainedStateVariants);
  pushUtility(utilities, "vel-will-change-auto", [["will-change", "auto"]], chainedStateVariants);
  pushUtility(utilities, "vel-will-change-transform", [["will-change", "transform"]], chainedStateVariants);
  pushUtility(utilities, "vel-will-change-opacity", [["will-change", "opacity"]], chainedStateVariants);
  pushUtility(utilities, "vel-touch-none", [["touch-action", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-touch-pan-x", [["touch-action", "pan-x"]], chainedStateVariants);
  pushUtility(utilities, "vel-touch-pan-y", [["touch-action", "pan-y"]], chainedStateVariants);
  pushUtility(utilities, "vel-touch-manipulation", [["touch-action", "manipulation"]], chainedStateVariants);

  pushUtility(utilities, "vel-accent-current", [["accent-color", "currentColor"]], chainedSemanticVariants);
  pushUtility(utilities, "vel-caret-current", [["caret-color", "currentColor"]], chainedSemanticVariants);

  for (const [name, value] of colorUtilities) {
    pushUtility(utilities, `vel-accent-${name}`, [["accent-color", value]], chainedSemanticVariants);
    pushUtility(utilities, `vel-caret-${name}`, [["caret-color", value]], chainedSemanticVariants);
  }

  pushUtility(utilities, "vel-fill-none", [["fill", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-fill-current", [["fill", "currentColor"]], chainedSemanticVariants);
  pushUtility(utilities, "vel-stroke-none", [["stroke", "none"]], chainedStateVariants);
  pushUtility(utilities, "vel-stroke-current", [["stroke", "currentColor"]], chainedSemanticVariants);
  pushUtility(utilities, "vel-stroke-1", [["stroke-width", "1"]], chainedStateVariants);
  pushUtility(utilities, "vel-stroke-2", [["stroke-width", "2"]], chainedStateVariants);

  for (const [name, value] of colorUtilities) {
    pushUtility(utilities, `vel-fill-${name}`, [["fill", value]], chainedSemanticVariants);
    pushUtility(utilities, `vel-stroke-${name}`, [["stroke", value]], chainedSemanticVariants);
  }

  pushUtility(
    utilities,
    "vel-sr-only",
    [
      ["position", "absolute"],
      ["width", "1px"],
      ["height", "1px"],
      ["padding", "0"],
      ["margin", "-1px"],
      ["overflow", "hidden"],
      ["clip", "rect(0, 0, 0, 0)"],
      ["white-space", "nowrap"],
      ["border-width", "0"],
    ],
    responsiveOnly,
  );
  pushUtility(
    utilities,
    "vel-not-sr-only",
    [
      ["position", "static"],
      ["width", "auto"],
      ["height", "auto"],
      ["padding", "0"],
      ["margin", "0"],
      ["overflow", "visible"],
      ["clip", "auto"],
      ["white-space", "normal"],
    ],
    responsiveOnly,
  );
  pushUtility(utilities, "vel-forced-color-adjust-auto", [["forced-color-adjust", "auto"]], responsiveOnly);
  pushUtility(utilities, "vel-forced-color-adjust-none", [["forced-color-adjust", "none"]], responsiveOnly);

  let css = "/* Generated by build.mjs. Do not edit by hand. */\n\n";
  const classNames = ["vel-container"];

  css += "@keyframes vel-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n";
  css += "@keyframes vel-pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n\n";

  css += formatRule(selectorFor("vel-container"), [
    ["width", "min(100% - 2rem, var(--vel-container-2xl))"],
    ["margin-inline", "auto"],
  ]);
  css += "\n";

  for (const variant of responsiveVariants) {
    const resolvedContainer = variant.id === "sm"
      ? "var(--vel-container-sm)"
      : variant.id === "md"
        ? "var(--vel-container-md)"
        : variant.id === "lg"
          ? "var(--vel-container-lg)"
          : variant.id === "xl"
            ? "var(--vel-container-xl)"
            : "var(--vel-container-2xl)";
    css += `@media (min-width: ${variant.query}) {\n${indentBlock(formatRule(selectorFor("vel-container"), [["max-width", resolvedContainer]]))}\n}\n`;
  }

  for (const utility of utilities) {
    css += renderUtilityRule(utility.className, utility.declarations);
    classNames.push(utility.className);

    const combos = buildVariantCombinations(resolveVariantGroups(utility.variants));

    for (const combo of combos) {
      classNames.push(`${variantPrefix(combo)}${utility.className}`);
      css += renderUtilityRule(utility.className, utility.declarations, combo);
    }
  }

  return {
    css,
    classNames: uniqueSorted(classNames),
    customProperties: [],
  };
}

function extractHandwrittenClasses(source) {
  return uniqueSorted([...source.matchAll(/\.vel-[a-z0-9-]+/gi)].map((match) => match[0].slice(1)));
}

function extractCustomProperties(source) {
  return uniqueSorted([...source.matchAll(/--vel-[a-z0-9-]+/gi)].map((match) => match[0]));
}

async function writeGeneratedSources() {
  const generatedSurface = generateUtilitySurface();

  await mkdir(generatedDir, { recursive: true });
  await writeFile(generatedUtilityFile, `${generatedSurface.css.trimEnd()}\n`);

  return generatedSurface;
}

async function writeApiManifest(generatedSurface) {
  const packageJson = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));
  const sourceFiles = (await collectFiles(sourceDir)).filter((filePath) => filePath.endsWith(".css"));
  const generatedRelativePath = relative(root, generatedUtilityFile).replaceAll("\\", "/");

  const manifestFiles = [];
  const classNames = [];
  const customProperties = [];

  for (const filePath of sourceFiles) {
    const source = await readFile(filePath, "utf8");
    const relativePath = relative(root, filePath).replaceAll("\\", "/");
    const isGeneratedFile = relativePath === generatedRelativePath;
    const fileClasses = isGeneratedFile ? generatedSurface.classNames : extractHandwrittenClasses(source);
    const fileTokens = isGeneratedFile ? generatedSurface.customProperties : extractCustomProperties(source);
    const surfaceType = relativePath.includes("/components/") ? "component" : relativePath.includes("/utilities/") ? "utility" : "foundation";

    classNames.push(...fileClasses);
    customProperties.push(...fileTokens);
    manifestFiles.push({
      path: relativePath,
      type: surfaceType,
      classes: fileClasses,
      customProperties: fileTokens,
    });
  }

  const manifest = {
    name: packageJson.name,
    version: packageJson.version,
    generatedAt: new Date().toISOString(),
    publicSurface: {
      classPrefix: "vel-",
      tokenPrefix: "--vel-",
      runtimeAttributes: [
        "data-vel-toggle",
        "data-vel-open",
        "data-vel-close",
        "data-vel-theme",
        "data-vel-dropdown",
        "data-vel-modal-open",
        "data-vel-modal-close",
        "data-vel-offcanvas-open",
        "data-vel-offcanvas-close",
        "data-vel-offcanvas-placement",
        "data-vel-collapse",
        "data-vel-tab",
        "data-vel-toast",
        "data-vel-toast-close",
        "data-vel-tooltip",
        "data-vel-tooltip-placement",
      ],
      styleRule: "Velora 1.0 keeps sharp-to-moderate default geometry; pill styling remains opt-in rather than the default.",
    },
    css: {
      classNames: uniqueSorted(classNames),
      customProperties: uniqueSorted(customProperties),
      files: manifestFiles.sort((left, right) => left.path.localeCompare(right.path)),
    },
  };

  await writeFile(resolve(distDir, "velora.manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
}

await mkdir(distDir, { recursive: true });

const generatedSurface = await writeGeneratedSources();

const cssEntry = resolve(root, "src", "velora.css");
const cssBundle = bundle({
  filename: cssEntry,
  minify: false,
  sourceMap: false,
});
const cssMinBundle = bundle({
  filename: cssEntry,
  minify: true,
  sourceMap: false,
});

await writeFile(resolve(distDir, "velora.css"), cssBundle.code);
await writeFile(resolve(distDir, "velora.min.css"), cssMinBundle.code);

const jsEntry = resolve(root, "src", "velora.js");
const jsSource = await readFile(jsEntry, "utf8");

if (jsSource.trim().length > 0) {
  await build({
    entryPoints: [jsEntry],
    bundle: true,
    format: "esm",
    platform: "browser",
    outfile: resolve(distDir, "velora.js"),
    minify: false,
    logLevel: "silent",
  });

  await build({
    entryPoints: [jsEntry],
    bundle: true,
    format: "esm",
    platform: "browser",
    outfile: resolve(distDir, "velora.min.js"),
    minify: true,
    logLevel: "silent",
  });
} else {
  await writeFile(resolve(distDir, "velora.js"), "");
  await writeFile(resolve(distDir, "velora.min.js"), "");
}

await writeApiManifest(generatedSurface);

console.log("Built VeloraCSS core into dist/");
