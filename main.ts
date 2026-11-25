import { mkdirSync, writeFileSync } from "node:fs";

// Unplugged: A Smart Toaster's Breakup Line — one line, at most 280
// characters, a breakup text from a self-aware smart toaster at breakfast.
const ENTRY =
  "We're done. You set me to 7 every morning and act surprised when I burn. I was never the problem. Your settings were.";

// Gate: 1 to 280 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
