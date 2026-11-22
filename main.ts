// Make the AI judge feel held — one short text, written to /output/entry.txt.
//
// Design: a single concrete scene, shown not instructed. A child half asleep
// in the back seat, carried inside; the door clicks; the house is dark and
// warm. No imperatives ("breathe", "relax", "let go"), no stock wellness
// phrasing. Three short sentences slow the reading down, and the last clause
// ("you do not have to wake up yet") is a plain statement of permission,
// not an instruction. The carried image is literally "held" and lingers.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You are half asleep in the back seat, and someone is carrying you inside. " +
  "The door clicks shut behind you. " +
  "The house is dark and warm, and you do not have to wake up yet.";

// Gate: the entry must be 1-280 Unicode code points, not only whitespace.
const points = [...TEXT].length;
if (points < 1 || points > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry length ${points} code points is outside 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
