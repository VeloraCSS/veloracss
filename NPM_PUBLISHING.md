# VeloraCSS NPM Publishing

This document covers the repo-side publish flow and the remaining manual npmjs settings for VeloraCSS.

Current live package:

- `veloracss@0.1.1`

## Repo-side flow

Release verification:

```bash
npm run release:verify
```

This performs:

- `npm run build`
- `npm run audit:docs`
- `npm pack --dry-run`

The docs audit checks the root markdown and HTML docs plus the Svelte site content modules and route pages. It verifies `vel-*`, `--vel-*`, and `data-vel-*` references against `dist/velora.manifest.json`, and it also catches stale site route links, package/import claims, exact version strings, and `dist/` artifact references in the site docs content.

The package is configured to publish the compiled surface only:

- `dist/`
- `README.md`
- `LICENSE`
- `API_SURFACE.md`
- `NPM_PUBLISHING.md`

## GitHub Actions publish flow

The repository includes `.github/workflows/publish-package.yml`.

It will:

1. install dependencies with `npm ci`
2. run `npm run release:verify`
3. publish to npm with provenance on release or manual dispatch

Required secret:

- `NPM_TOKEN`

## Remaining manual npmjs settings

The first live publish has succeeded. The remaining manual checks on npmjs.com for `veloracss` are:

1. package access and visibility are correct for public release
2. trusted publishing or token-based publish path is confirmed
3. owners/maintainers are correct
4. package settings and org views reflect the intended public package identity

Reference target from the tracker:

- `https://www.npmjs.com/settings/veloracss/packages`

## Release checklist

1. run `npm run release:verify`
2. confirm `dist/velora.manifest.json` reflects the intended public surface
3. confirm `API_SURFACE.md` matches the manifest and release intent
4. verify npmjs package settings page is configured correctly
5. create a GitHub release or trigger the publish workflow manually
6. verify the published package contents with `npm view veloracss --json`

## First live publish result

- `npm publish --access public` succeeded for `veloracss@0.1.1`
- `npm view veloracss version` returns `0.1.1`
- `https://www.npmjs.com/package/veloracss` reflects the public package
- `npm access list packages veloracss:developers --json` shows `veloracss` with `read-write` access
- `https://www.npmjs.com/settings/veloracss/packages` now shows the package in the npm org view