/**
 * ONE DAY WORLDWIDE is a cream, one-page news edition for Thursday 19
 * November 2026.
 * The finished image treats the square canvas as a compact global broadsheet.
 * Its masthead establishes the edition and anchors the day's visual identity.
 * Forty stories carry the news from major developments to short regional briefs.
 * A stat band turns the day's notable figures into a quick scan across the page.
 * The main story area gives the strongest headlines room for fuller treatment.
 * Supporting cards widen the coverage beyond those lead stories.
 * Brief items add local voices and events from across the world's regions.
 * A region tally makes the geographic spread visible at a glance.
 * The cream paper, fine rules, and dense columns keep the page newspaper-like.
 * The date-check footer distinguishes current reporting from carryover material.
 * Together, these elements make one readable image of a single worldwide day.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
