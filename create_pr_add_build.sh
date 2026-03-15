#!/usr/bin/env bash
set -euo pipefail

REPO="VeloraCSS/veloracss"
REMOTE_URL="git@github.com:${REPO}.git"   # change to https://github.com/VeloraCSS/veloracss.git if you prefer HTTPS
BRANCH="chore/add-build"
PR_TITLE="chore: add build pipeline (build.mjs + CI updates)"
PR_BODY="Add a simple build.mjs that compiles token-driven CSS into dist/velora.css and dist/velora.min.css, update package.json with a build script and devDependencies, and update CI to run the build."

TMPDIR="$(mktemp -d)"
echo "Using temp dir: $TMPDIR"

git clone "$REMOTE_URL" "$TMPDIR/repo"
cd "$TMPDIR/repo"

git fetch origin
git checkout -b "$BRANCH" origin/main

# Add build.mjs - simple token-driven CSS assembler and minifier using esbuild + lightningcss
cat > build.mjs <<'JS'
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
JS
chmod +x build.mjs

# Update package.json: add build script and devDependencies if missing
node -e "
const fs=require('fs');
const p='package.json';
const pkg=JSON.parse(fs.readFileSync(p,'utf8'));
pkg.scripts = pkg.scripts || {};
pkg.scripts.build = pkg.scripts.build || 'node build.mjs';
pkg.scripts['release:verify'] = pkg.scripts['release:verify'] || 'npm run build && npm run audit:docs && npm run pack:check';
pkg.devDependencies = pkg.devDependencies || {};
pkg.devDependencies.esbuild = pkg.devDependencies.esbuild || '^0.25.1';
pkg.devDependencies.lightningcss = pkg.devDependencies.lightningcss || '^1.29.2';
fs.writeFileSync(p,JSON.stringify(pkg,null,2));
console.log('package.json updated');
"

# Add CI workflow that runs npm ci and npm run build
cat > .github/workflows/ci-build.yml <<'YAML'
name: CI Build

on:
  pull_request:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: List dist
        run: ls -la dist || true
YAML

git add build.mjs package.json .github/workflows/ci-build.yml
git commit -m "chore: add build.mjs and CI build workflow; update package.json scripts and devDependencies"
git push --set-upstream origin "$BRANCH"

# Create PR
gh pr create --title "$PR_TITLE" --body "$PR_BODY" --base main --head "$BRANCH"
echo "PR created. Please review at: https://github.com/${REPO}/pulls"