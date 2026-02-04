---
"commonxjs": patch
---

Fix browser compatibility by building browser-safe modules (logger, id) with `target: "browser"` instead of `target: "node"`. This removes the `node:module` polyfill that was causing issues in browser environments like Next.js/Turbopack.
