# commonxjs

## 0.1.1

### Patch Changes

- 561425b: Fix browser compatibility by building browser-safe modules (logger, id) with `target: "browser"` instead of `target: "node"`. This removes the `node:module` polyfill that was causing issues in browser environments like Next.js/Turbopack.

## 0.1.0

### Minor Changes

- 6c20c00: Initial release of CommonX - Infrastructure utilities for Bun and Node.js

  Features:

  - **sqlite**: Unified SQLite abstraction (Bun `bun:sqlite` / Node.js 22+ `node:sqlite`)
  - **logger**: Pluggable logging system with lazy initialization
  - **path**: Cross-runtime path utilities (`getModuleDir`, `getPackageRoot`, `getMonorepoRoot`)
  - **id**: ID generation utilities (`generateId`, `generateRequestId`)
