# CommonX

Infrastructure utilities library for Bun and Node.js.

## Installation

```bash
bun add commonxjs
# or
npm install commonxjs
```

## Modules

### Logger

Lazy-initialized logging with pluggable backends.

```typescript
import { createLogger } from "commonxjs/logger";

const logger = createLogger("my-app");
logger.info("Hello, world!");
logger.debug("Debug message", { userId: "123" });
```

### SQLite

Unified SQLite abstraction that works with both Bun (bun:sqlite) and Node.js 22+ (node:sqlite).

```typescript
import { openDatabase } from "commonxjs/sqlite";

const db = openDatabase("./data/app.db");

db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");

const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");
stmt.run("Alice");

const users = db.prepare("SELECT * FROM users").all();
console.log(users);

db.close();
```

### Path

Cross-runtime path utilities.

```typescript
import { getModuleDir, getPackageRoot, getMonorepoRoot } from "commonxjs/path";

// Get current module directory (__dirname equivalent)
const __dirname = getModuleDir(import.meta);

// Get package root (where package.json is)
const pkgRoot = getPackageRoot(import.meta);

// Get monorepo root
const monoRoot = getMonorepoRoot(import.meta);
```

### ID

ID generation utilities.

```typescript
import { generateId, generateRequestId } from "commonxjs/id";

const msgId = generateId("msg");
// => "msg_1704067200000_a1b2c3"

const reqId = generateRequestId();
// => "req_1704067200000_x7y8z9"
```

## Requirements

- Node.js 22+ or Bun
- For SQLite: Bun (uses bun:sqlite) or Node.js 22+ (uses node:sqlite)

## License

MIT
