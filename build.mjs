#!/usr/bin/env node
// build.mjs - simple build to assemble CSS from src and tokens and minify with lightningcss
import fs from 'fs/promises';
import path from 'path';
import { transform } from 'lightningcss';

const root = process.cwd();
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

async function readFileSafe(p){ try { return await fs.readFile(p, 'utf8'); } catch { return ''; } }

async function main(){
  await fs.mkdir(dist, { recursive: true });

  // Read token CSS variables (simple matching from tokens JSON)
  const tokensDir = path.join(src, 'tokens');
  let cssVars = ':root {\n';
  try {
    const colors = JSON.parse(await readFileSafe(path.join(tokensDir, 'colors.json')));
    for (const [k,v] of Object.entries(colors)){
      cssVars += `  --vel-${k}: ${v};\n`;
    }
  } catch(e){ /* ignore */ }
  try {
    const spacing = JSON.parse(await readFileSafe(path.join(tokensDir, 'spacing.json')));
    for (const [k,v] of Object.entries(spacing)) {
      cssVars += `  --vel-space-${k}: ${v};\n`;
    }
  } catch(e){ /* ignore */ }
  cssVars += '}\n\n';

  // Concatenate component sources (basic)
  const components = ['components/button.css','components/nav.css','components/hero.css'];
  let compCss = '';
  for (const c of components){
    compCss += await readFileSafe(path.join(src, c));
    compCss += '\n';
  }

  // Add basic utilities (starter sample)
  const utilities = await readFileSafe(path.join(root, 'dist', 'velora.css'));
  // Compose full CSS
  const full = cssVars + utilities + '\n' + compCss;

  // Write unminified
  await fs.writeFile(path.join(dist, 'velora.css'), full, 'utf8');

  // Minify using lightningcss
  const res = transform({
    code: Buffer.from(full),
    minify: true,
    filename: 'velora.css'
  });

  await fs.writeFile(path.join(dist, 'velora.min.css'), res.code);

  // Emit a tiny manifest
  const manifest = {
    version: '0.1.1',
    files: {
      css: 'dist/velora.css',
      css_min: 'dist/velora.min.css'
    }
  };
  await fs.writeFile(path.join(dist, 'velora.manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log('Build complete: dist/velora.css, dist/velora.min.css, dist/velora.manifest.json');
}

main().catch((err)=>{ console.error(err); process.exit(1); });
