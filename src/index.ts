/**
 * CommonX - Infrastructure Utilities Library
 *
 * Cross-runtime utilities for Bun and Node.js.
 *
 * ## Module Structure
 *
 * | Module   | Purpose                                          |
 * |----------|--------------------------------------------------|
 * | logger/  | Lazy-initialized logging with pluggable backends |
 * | sqlite/  | Unified SQLite abstraction for Bun and Node.js   |
 * | path/    | Cross-runtime path utilities                     |
 * | id/      | ID generation utilities                          |
 *
 * ## Usage
 *
 * Import from subpaths for tree-shaking:
 *
 * ```typescript
 * import { createLogger } from "commonxjs/logger";
 * import { openDatabase } from "commonxjs/sqlite";
 * import { getModuleDir } from "commonxjs/path";
 * import { generateId } from "commonxjs/id";
 * ```
 *
 * Or import from main entry (re-exports all):
 *
 * ```typescript
 * import { createLogger, openDatabase, getModuleDir, generateId } from "commonxjs";
 * ```
 *
 * @packageDocumentation
 */

// Logger
export type { LogLevel, LogContext, Logger, LoggerFactory } from "./logger";
export {
  ConsoleLogger,
  type ConsoleLoggerOptions,
  LoggerFactoryImpl,
  type LoggerFactoryConfig,
  setLoggerFactory,
  createLogger,
} from "./logger";

// ID generation utilities
export { generateRequestId, generateId } from "./id";

// Note: SQLite and Path modules are exported separately via subpaths
// to keep the main entry browser-compatible (they use Node.js APIs)
