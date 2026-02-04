/**
 * Build script for CommonX
 *
 * Uses Bun's native bundler for TypeScript compilation with declaration files.
 */

import { $ } from "bun";
import { existsSync, rmSync, mkdirSync, cpSync } from "node:fs";
import { join } from "node:path";

const ROOT = import.meta.dir;
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const TYPES_TMP = join(ROOT, ".types-tmp");

// Clean dist and temp
if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true });
}
if (existsSync(TYPES_TMP)) {
  rmSync(TYPES_TMP, { recursive: true });
}

console.log("Building CommonX...");

// Build browser-safe modules (logger, id, main index)
// These don't use Node.js APIs and can run in browsers
console.log("  Building browser-safe modules...");
await Bun.build({
  entrypoints: [
    join(SRC, "index.ts"),
    join(SRC, "logger/index.ts"),
    join(SRC, "id/index.ts"),
  ],
  outdir: DIST,
  target: "browser",
  format: "esm",
  splitting: false,
  sourcemap: "linked",
});

// Build node-only modules (sqlite, path)
// These require Node.js APIs (node:fs, node:path, node:sqlite, etc.)
console.log("  Building node-only modules...");
await Bun.build({
  entrypoints: [
    join(SRC, "sqlite/index.ts"),
    join(SRC, "path/index.ts"),
  ],
  outdir: DIST,
  target: "node",
  format: "esm",
  splitting: false,
  sourcemap: "linked",
});

console.log("Generating type declarations...");

// Generate declarations to temp directory
mkdirSync(TYPES_TMP, { recursive: true });
await $`tsc -p tsconfig.build.json --outDir ${TYPES_TMP}`.quiet();

// Copy .d.ts and .d.ts.map files to dist
async function copyDtsFiles(srcDir: string, destDir: string) {
  const entries = await Bun.file(srcDir).exists() ? [] : await $`find ${srcDir} -name "*.d.ts" -o -name "*.d.ts.map"`.text();
  const files = entries.trim().split("\n").filter(Boolean);

  for (const file of files) {
    const relativePath = file.replace(srcDir + "/", "");
    const destPath = join(destDir, relativePath);
    const destDirPath = join(destPath, "..");

    if (!existsSync(destDirPath)) {
      mkdirSync(destDirPath, { recursive: true });
    }

    cpSync(file, destPath);
  }
}

await copyDtsFiles(TYPES_TMP, DIST);

// Clean temp directory
rmSync(TYPES_TMP, { recursive: true });

console.log("Build completed!");

// List output
const files = await $`find ${DIST} -type f -name "*.js" -o -name "*.d.ts" | head -20`.text();
console.log("\nGenerated files:");
console.log(files);
