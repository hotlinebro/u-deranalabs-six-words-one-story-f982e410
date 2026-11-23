// Six Words, One Story — make.fun entry
// u-deranalabs-six-words-one-story-f982e410
//
// The program writes one complete story in exactly six words to
// /output/entry.txt (the artifact the judge reads). Node 22+, stdlib only.
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "The ring fit. The marriage didn't.";

// The gate: UTF-8 text of 1 to 60 characters, and the brief demands
// exactly six words. Fail loudly instead of writing an invalid entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

function main(): void {
  const out = process.argv[2] ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, STORY, "utf8");
  console.log(STORY);
}

main();
