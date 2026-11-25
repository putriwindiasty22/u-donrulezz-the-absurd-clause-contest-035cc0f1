import { mkdirSync, writeFileSync } from "node:fs";

// The Absurd Clause Contest — an absurd clause buried in a terms-of-service agreement.
const ENTRY =
  "12.7 The user agrees that, upon sneezing within the app, they owe the company one (1) sincere apology, payable in person, in writing, or by carrier pigeon.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 200-char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
