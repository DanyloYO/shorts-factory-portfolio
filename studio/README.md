# The studio: roles and the pipeline

Eleven roles, each a subagent definition in this folder (`.claude/agents/*.md` format: frontmatter + system prompt). The **producer is the main session**
following `SKILL.md`; it briefs the roles, runs the user gates, and never lets a role skip a check. Copy the role files into `<kit>/.claude/agents/`
(`python tools/new_project.py` does it) so the Agent and Workflow tools can start them by name (`subagent_type` / `agentType`).

| Role | Owns | Reads | Returns |
|---|---|---|---|
| `showrunner` | the one idea; judging competing drafts | HOOKS, format, LANGUAGES | `BRIEF.md`; scores + merged pick |
| `researcher` | every number with a source; safety flags; 3 angles | SAFETY, the web | `FACTS.md`; verify → PASS / fixes |
| `screenwriter` | hook table, beat table, ending, number table, voice segments | HOOKS, format, SOUND-PACE pace, LANGUAGES | `SCRIPT.md` + segments |
| `script-critic` | the viewer's verdict: 2-s test, retell test, density, loop, sound-off, pace, safety | HOOKS, CHECKLIST gate 1 | VERDICT + ordered must-fix |
| `director` | storyboard: scenes on word anchors, verbs, camera, overlays, transitions, frame 0, loop | ANIMATION, HOOKS, template src | `STORYBOARD.md` + code tables |
| `art-director` | the look: light, palette with luma, depth, type, key art, thumbnail; sheet reviews | ANIMATION §5 §10, LESSONS look | `STYLE.md`; review table + VERDICT |
| `sound-designer` | spec.json, engine run, voice check by ASR, hook gate, levels, real SFX | engine README, SOUND-PACE, LANGUAGES | timeline + mix + timing table |
| `animator` | scenes in Remotion, tsc, lint, stills until clean | ANIMATION, LESSONS, template | files changed + lint + sheets |
| `qa-editor` | gates 2–3: strips, the one render, finish.py, captions, REPORT | CHECKLIST, CAPTIONS, tools | files + CHECKS lines + issues |
| `publisher` | packaging for the feed and search: caption with keywords, ≤ 5 hashtags, cover = frame 0, slots, hook variant per account, POSTLOG | CAPTIONS, FACTORY-RU §2 §4 | captions.json, POSTPLAN, pre-flight list |
| `analyst` | 48 h later: viewed vs swiped, watch %, saves/shares, statlog.py, the one variable to change, the lesson in HOOKS.md §9 | HOOKS §9, FACTORY-RU §1 | memo + lesson text |

## Niches
`niches/<slug>/NICHE.md` (template `NICHE-TEMPLATE.md`, `tools/new_niche.py <slug>`) is the channel's profile: promise, viewer, language, format, the signature look,
sound, never-list, keywords, account, cadence, trial table. Every role reads it before its own inputs, so switching niches is switching folders. Trial: 2–3 niches,
4–6 videos each over two weeks, own account each, medians inside a niche, then double down / stop / pivot.

## The pipeline (one video)
```
idea ─ showrunner:BRIEF ─ researcher:FACTS ─┐
                                            ├─ screenwriter ×3 (different hook formulas) ─ script-critic on each ─ showrunner:JUDGE ─ merged SCRIPT
                                            │                                                                        └─ script-critic again (≤ 2 rounds) ─ PASS
USER GATE 1 (hook table) ───────────────────┘
SCRIPT ─ director:STORYBOARD ─ art-director:STYLE ─ sound-designer: spec → audio.py → timeline + mix, hookgate, ASR check
      └─ animator: scenes on the timeline → tsc, lint, sheets ─ art-director:REVIEW (gate 2) ─ fix loop
qa-editor: strips → render (queue) → finish.py (gate 3) → captions → REPORT ─ producer delivers (files, hooks, numbers, open issues)
publisher: caption + cover + slots + hook variant per account ─ OWNER posts ─ 48 h ─ analyst: numbers → one change → lesson in HOOKS.md §9
```
Hook A/B: `"variants"` in `spec.json` + `audio.py <story> --variant B` (engine/README.md) gives a second mix and timeline from the same cached voice;
a second composition renders the same scenes with the other hook; the publisher sends each variant to a different account or day.
Pre-production (brief → approved script) is the saved workflow `.claude/workflows/studio-preprod.js` (parallel writers, adversarial critics, a judge,
a fix loop). Production runs sequentially per project: one animator on the files, one render per session.

## Handoff files in the project folder
`BRIEF.md` → `FACTS.md` → `SCRIPT.md` (hook table, beat table, numbers, sources, safety) → `STORYBOARD.md` → `STYLE.md` → `story<N>/spec.json` →
`src/timeline<N>.json` + `public/mix<N>.wav` → `src/*.tsx` → `out/<NN-slug>.mp4`, `out/CHECKS.txt`, `out/REPORT.md`, `captions.json` / `out/captions.txt`.
A role only reads the files above it and writes its own; disagreements go back through the producer, who decides.

## Why these roles (lessons from the first videos)
- **The point got lost** in a 51-s video with 10 facts: the brief's one sentence, the critic's retell test and the ≤ 6 facts rule exist for that.
- **Wrong Russian stress**: wholesale stress marks warped vowels on the edge-tts voice; the sound designer rewords and A/B-checks by ASR instead.
- **Music pumped under every syllable**: the engine now ducks with a side-chain envelope; the sound designer checks levels on the mix, not by eye.
- **Hooks written last**: the showrunner's brief fixes the promise and the payoff word before anyone writes a beat.
- **Frame 0 hidden by a hand**: the director writes frame 0 as a thumbnail spec; the art director reviews `frame0_phone.jpg`.

## Models and cost
Role definitions inherit the session model. For cheaper batches set `model: sonnet` in `researcher.md` and `qa-editor.md`; keep the showrunner,
screenwriter, critic and director on the strongest model, they decide whether the video works.
