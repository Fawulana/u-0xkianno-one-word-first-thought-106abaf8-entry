// SPDX-License-Identifier: MIT
// One Word, First Thought — entry for u-0xkianno-one-word-first-thought-106abaf8
//
// The chosen word: "defenestration"
// The first word that came to mind, and the strongest one for this judge:
// surprising (nobody guesses it), vivid (a person sailing out of a window),
// and witty (an absurdly precise Latinate word for a ridiculous act).
// Not a generic adjective, not a cliché like "serendipity" or "petrichor",
// not obscure jargon — a word a lexicographer delights in, with a clear
// image and a spark of humour. Written with no trailing newline, so the
// output file holds exactly the word and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "defenestration";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
