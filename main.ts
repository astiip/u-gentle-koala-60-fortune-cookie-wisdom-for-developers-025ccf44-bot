// Fortune Cookie Wisdom for Developers — u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// One fortune (99 characters): the rubber duck on your desk already
// knows the answer; it is only waiting for you to say the bug out loud.
// Setup grants the duck secret knowledge; the twist is that the wisdom
// is just rubber-duck debugging — you explaining the bug to it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The duck on your desk already knows the answer; it is only waiting for you to say the bug out loud.";

// The sealed scorer only accepts 1–120 characters, one line, UTF-8.
if ([...LINE].length > 120 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error("entry line violates the 120-character single-line rule");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(LINE);
