import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, relative } from "node:path";

const root = process.cwd();
const manifestPath = resolve(root, "dist", "velora.manifest.json");
const packagePath = resolve(root, "package.json");
const distPath = resolve(root, "dist");
const siteRoutesPath = resolve(root, "site", "src", "routes");
const rootDocTargets = [
  resolve(root, "README.md"),
  resolve(root, "API_SURFACE.md"),
  resolve(root, "index.html"),
  resolve(root, "proof.html"),
  resolve(root, "docs"),
  resolve(root, "examples"),
];
const siteDocTargets = [
  resolve(root, "site", "src", "lib", "content.js"),
  resolve(root, "site", "src", "lib", "docsContent.js"),
  resolve(root, "site", "src", "lib", "examplesContent.js"),
  resolve(root, "site", "src", "lib", "proofContent.js"),
  resolve(root, "site", "src", "lib", "homeContent.js"),
  resolve(root, "site", "src", "routes", "+page.svelte"),
  resolve(root, "site", "src", "routes", "docs", "+page.svelte"),
  resolve(root, "site", "src", "routes", "examples", "+page.svelte"),
  resolve(root, "site", "src", "routes", "proof", "+page.svelte"),
];

async function collectFiles(entryPath) {
  const entries = await readdir(entryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const childPath = resolve(entryPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(childPath)));
      continue;
    }

    files.push(childPath);
  }

  return files;
}

async function resolveDocFiles(targets, filePattern) {
  const files = [];

  for (const target of targets) {
    const targetStats = await stat(target);

    if (targetStats.isDirectory()) {
      files.push(...(await collectFiles(target)));
    } else {
      files.push(target);
    }
  }

  return files
    .filter((filePath, index, allPaths) => allPaths.indexOf(filePath) === index)
    .filter((filePath) => filePattern.test(filePath))
    .sort((left, right) => left.localeCompare(right));
}

async function resolveSiteRoutes() {
  const routeFiles = await collectFiles(siteRoutesPath);

  return new Set(
    routeFiles
      .map((filePath) => relative(siteRoutesPath, filePath).replaceAll("\\", "/"))
      .filter((filePath) => filePath === "+page.svelte" || filePath.endsWith("/+page.svelte"))
      .map((filePath) => {
        if (filePath === "+page.svelte") {
          return "/";
        }

        return `/${filePath.slice(0, -"/+page.svelte".length)}`;
      }),
  );
}

function matchKnown(reference, allowedReferences) {
  if (allowedReferences.has(reference)) {
    return true;
  }

  if (!reference.includes("*")) {
    return false;
  }

  const prefix = reference.slice(0, reference.indexOf("*"));
  return [...allowedReferences].some((candidate) => candidate.startsWith(prefix));
}

function collectClassAttributeReferences(source) {
  const references = new Set();

  for (const match of source.matchAll(/class\s*=\s*["']([^"']+)["']/gi)) {
    for (const className of match[1].split(/\s+/)) {
      if (className.startsWith("vel-")) {
        references.add(className);
      }
    }
  }

  return references;
}

function collectTemplatePrefixReferences(source) {
  const references = new Set();

  for (const match of source.matchAll(/(?<![a-z0-9_-])(vel-[a-z0-9-]+-)\$\{/gi)) {
    references.add(`${match[1]}*`);
  }

  return references;
}

function collectTokenReferences(source, pattern) {
  return new Set([...source.matchAll(pattern)].map((match) => match[0]));
}

function collectInternalHrefReferences(source) {
  const references = new Set();

  for (const match of source.matchAll(/href\s*(?:=|:)\s*\{?\s*(["'`])([^"'`]+)\1\s*\}?/gi)) {
    const value = match[2].trim();

    if (!value.startsWith("/")) {
      continue;
    }

    references.add(value.split(/[?#]/u, 1)[0] || "/");
  }

  return references;
}

function collectInstallPackageClaims(source) {
  return new Set([...source.matchAll(/npm\s+install\s+([@a-z0-9._/-]+)/gi)].map((match) => match[1]));
}

function collectPackageImportClaims(source, packageName) {
  return new Set(
    [...source.matchAll(/["']((?:@[^/"']+\/)?[^/"']+(?:\/[^/"']+)*)["']/g)]
      .map((match) => match[1])
      .filter((specifier) => specifier === packageName || specifier.startsWith(`${packageName}/`)),
  );
}

function collectDistArtifactClaims(source) {
  return collectTokenReferences(source, /dist\/[a-z0-9._-]+/gi);
}

function collectSemverClaims(source) {
  return collectTokenReferences(source, /\b\d+\.\d+\.\d+\b/g);
}

function formatUnknowns(entries) {
  return entries.map((entry) => `  - ${entry}`).join("\n");
}

let manifest;
let packageData;

try {
  manifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.error("Velora docs audit requires dist/velora.manifest.json. Run npm run build first.");
    process.exit(1);
  }

  throw error;
}

packageData = JSON.parse(await readFile(packagePath, "utf8"));

const [rootDocFiles, siteDocFiles, knownSiteRoutes, distEntries] = await Promise.all([
  resolveDocFiles(rootDocTargets, /\.(html|md)$/i),
  resolveDocFiles(siteDocTargets, /\.(js|svelte)$/i),
  resolveSiteRoutes(),
  readdir(distPath),
]);

const shippedClasses = new Set(manifest.css.classNames);
const shippedTokens = new Set(manifest.css.customProperties);
const shippedRuntimeAttributes = new Set(manifest.publicSurface.runtimeAttributes);
const shippedArtifactPaths = new Set(distEntries.map((entry) => `dist/${entry}`));
const packageExportKeys = new Set(Object.keys(packageData.exports ?? {}));
const failures = [];

for (const filePath of [...rootDocFiles, ...siteDocFiles]) {
  const source = await readFile(filePath, "utf8");
  const isSiteDocFile = siteDocFiles.includes(filePath);
  const classReferences = new Set([
    ...collectClassAttributeReferences(source),
    ...collectTemplatePrefixReferences(source),
    ...collectTokenReferences(source, /(?<![a-z0-9_-])(vel-[a-z0-9-]+\*?)(?!\$\{)/gi),
  ]);
  const tokenReferences = collectTokenReferences(source, /--vel-[a-z0-9-]+\*?/gi);
  const runtimeAttributeReferences = collectTokenReferences(source, /data-vel-[a-z0-9-]+\*?/gi);

  const unknownClasses = [...classReferences].filter((reference) => !matchKnown(reference, shippedClasses));
  const unknownTokens = [...tokenReferences].filter((reference) => !matchKnown(reference, shippedTokens));
  const unknownRuntimeAttributes = [...runtimeAttributeReferences].filter((reference) => !matchKnown(reference, shippedRuntimeAttributes));

  const unknownInternalLinks = isSiteDocFile
    ? [...collectInternalHrefReferences(source)].filter((reference) => !knownSiteRoutes.has(reference))
    : [];
  const staleInstallPackages = isSiteDocFile
    ? [...collectInstallPackageClaims(source)].filter((reference) => reference !== packageData.name)
    : [];
  const unknownPackageImports = isSiteDocFile
    ? [...collectPackageImportClaims(source, packageData.name)].filter((reference) => {
        const exportKey = reference === packageData.name ? "." : `.${reference.slice(packageData.name.length)}`;
        return !packageExportKeys.has(exportKey);
      })
    : [];
  const staleVersionClaims = isSiteDocFile
    ? [...collectSemverClaims(source)].filter((reference) => reference !== packageData.version)
    : [];
  const unknownDistArtifacts = isSiteDocFile
    ? [...collectDistArtifactClaims(source)].filter((reference) => !shippedArtifactPaths.has(reference))
    : [];

  if (
    unknownClasses.length === 0
    && unknownTokens.length === 0
    && unknownRuntimeAttributes.length === 0
    && unknownInternalLinks.length === 0
    && staleInstallPackages.length === 0
    && unknownPackageImports.length === 0
    && staleVersionClaims.length === 0
    && unknownDistArtifacts.length === 0
  ) {
    continue;
  }

  const relativePath = relative(root, filePath).replaceAll("\\", "/");
  const errorLines = [`${relativePath}`];

  if (unknownClasses.length > 0) {
    errorLines.push(" Unknown classes:");
    errorLines.push(formatUnknowns(unknownClasses.sort()));
  }

  if (unknownTokens.length > 0) {
    errorLines.push(" Unknown tokens:");
    errorLines.push(formatUnknowns(unknownTokens.sort()));
  }

  if (unknownRuntimeAttributes.length > 0) {
    errorLines.push(" Unknown runtime attributes:");
    errorLines.push(formatUnknowns(unknownRuntimeAttributes.sort()));
  }

  if (unknownInternalLinks.length > 0) {
    errorLines.push(" Unknown internal site links:");
    errorLines.push(formatUnknowns(unknownInternalLinks.sort()));
  }

  if (staleInstallPackages.length > 0) {
    errorLines.push(" Stale install package names:");
    errorLines.push(formatUnknowns(staleInstallPackages.sort()));
  }

  if (unknownPackageImports.length > 0) {
    errorLines.push(" Unknown package import claims:");
    errorLines.push(formatUnknowns(unknownPackageImports.sort()));
  }

  if (staleVersionClaims.length > 0) {
    errorLines.push(" Stale version claims:");
    errorLines.push(formatUnknowns(staleVersionClaims.sort()));
  }

  if (unknownDistArtifacts.length > 0) {
    errorLines.push(" Unknown dist artifact claims:");
    errorLines.push(formatUnknowns(unknownDistArtifacts.sort()));
  }

  failures.push(errorLines.join("\n"));
}

if (failures.length > 0) {
  console.error("Velora docs audit failed. These root docs or site docs claims drift from the shipped framework surface:\n");
  console.error(failures.join("\n\n"));
  process.exitCode = 1;
} else {
  console.log(`Velora docs audit passed for ${rootDocFiles.length} root docs files and ${siteDocFiles.length} site docs files.`);
}