# @commonxjs/sqlite

## 0.2.0

### Minor Changes

- fd06d61: Restructure CommonX as monorepo with independent packages.

  - `@commonxjs/sqlite` — Unified SQLite abstraction (Bun + Node.js 22+), added `values()` method
  - `@commonxjs/logger` — Lazy-initialized logging with pluggable backends
  - `@commonxjs/path` — Cross-runtime path utilities
  - `@commonxjs/id` — ID generation utilities
  - `@commonxjs/drizzle` — Drizzle ORM driver for cross-runtime SQLite
