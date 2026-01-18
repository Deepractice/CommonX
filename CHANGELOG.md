# commonxjs

## 0.1.0

### Minor Changes

- 6c20c00: Initial release of CommonX - Infrastructure utilities for Bun and Node.js

  Features:

  - **sqlite**: Unified SQLite abstraction (Bun `bun:sqlite` / Node.js 22+ `node:sqlite`)
  - **logger**: Pluggable logging system with lazy initialization
  - **path**: Cross-runtime path utilities (`getModuleDir`, `getPackageRoot`, `getMonorepoRoot`)
  - **id**: ID generation utilities (`generateId`, `generateRequestId`)
