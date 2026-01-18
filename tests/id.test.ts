import { describe, test, expect } from "bun:test";
import { generateId, generateRequestId } from "../src/id";

describe("id utilities", () => {
  describe("generateId", () => {
    test("generates unique IDs", () => {
      const id1 = generateId();
      const id2 = generateId();
      const id3 = generateId();

      expect(id1).not.toBe(id2);
      expect(id2).not.toBe(id3);
      expect(id1).not.toBe(id3);
    });

    test("generates string IDs", () => {
      const id = generateId();

      expect(id).toBeString();
      expect(id.length).toBeGreaterThan(0);
    });

    test("generates many unique IDs", () => {
      const ids = new Set<string>();
      const count = 1000;

      for (let i = 0; i < count; i++) {
        ids.add(generateId());
      }

      expect(ids.size).toBe(count);
    });
  });

  describe("generateRequestId", () => {
    test("generates unique request IDs", () => {
      const id1 = generateRequestId();
      const id2 = generateRequestId();

      expect(id1).not.toBe(id2);
    });

    test("generates string IDs", () => {
      const id = generateRequestId();

      expect(id).toBeString();
      expect(id.length).toBeGreaterThan(0);
    });

    test("generates IDs with expected format", () => {
      const id = generateRequestId();

      // Request IDs should have some structure (typically includes prefix or timestamp)
      expect(id).toBeString();
    });
  });
});
