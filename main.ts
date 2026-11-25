// The Long Roast: Lawmakers — batch3 entry (longroastlaw)
// One satirical sentence in three diary beats, with the punch
// saved for the last few words.
// Writes the sentence to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST_LINE =
  "They voted to regulate artificial intelligence on Tuesday, spent Wednesday asking their staff how to unmute, and Thursday printing the entire internet 'for the file' — one PDF they still couldn't make.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), ROAST_LINE, "utf8");
}

main();
