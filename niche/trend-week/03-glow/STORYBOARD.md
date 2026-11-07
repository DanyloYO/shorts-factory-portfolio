# STORYBOARD: 03-glow — Ваше тело светится. (trend-week, ru)

Inputs: `SCRIPT.md` (10 segments: h1 h2 cam face ratio heat chem clock close1 close2), `BRIEF.md`, `STYLE.md`, `C:\2d\niches\trend-week\NICHE.md`.
Template: this project's `src/` (math-universe structure; `Main.tsx` SCENES/HEAD/OV pattern and `keyBoxes` as in `01-video`; `fx/`; art reused from
`01-video/src/art.tsx`: `ArtDefs`, `Lamp`, `LampHead`, `lampTube`, `Plaster`, `Xmark`, `EyeIcon`, `GP`, `along`, palette; `Stars` + `poly` kept from math-universe).
Audio measured: `src/timeline1.json` (TOTAL 36.825 s comp → 29.5 s final; `LAST` = 36.8). Every time below is still a word anchor (`T("seg:WORD±s")`,
`T("seg.e")`) or a `C.<event>` derived from one; seconds in brackets are the measured values (comp unless marked "final") for reading only. Note: Liam
said «молекулы, **которые** отдают свет» (spec: «они»); the anchors ВОЗБУЖДАЕТ / МОЛЕКУЛЫ / ОТДАЮТ / СВЕТ all resolve, the subtitles follow the timeline.
Payoff `clock:ЧЕТЫРЁХ` = 27.287 / 36.825 = **74 %**.

**One world, no cuts.** A cream plaster wall, the dark-blue velvet table, the gilt gooseneck lamp (head (215, 640)), a stylised bust on a gilt
plinth. Two numbers drive every colour: `lamp` 0…1 and `glow` 0…1; the bloom is visible as `glow · (1 − lamp)` (in lamp light it is invisible — the
whole story). One component, `GlowScene`, draws the room, the lamp, the bust, the camera icon, the thermal lens, the zoom bubble, the viewfinder and
the camera's-view HUD; everything else is a card in `Main.tsx`'s `OV` list. `SCENES` has one entry; `PORTALS` and `WHIPS` are empty.

## 0. Decisions on top of SCRIPT.md / STYLE.md (producer: accept or push back)
1. SCRIPT wins over STYLE: no «−120 °C» chip, no «2009 · ЯПОНИЯ» stamp (both in the caption); the lamp clicks OFF at `C.click = T("h2.e")` and ON at
   `C.on = T("close1:ГЛАЗ-0.05")` (bulb fully lit on the word's first frame); the viewfinder slides over the lit face on `close1:КАМЕРА`; the end card
   reads «ВАШЕ ТЕЛО СВЕТИТСЯ,» / «ПОТОМУ ЧТО ЖИВЁТ.»; the hook card has three lines from frame 0; the chip reads «10:00».
2. Word order in `ratio` («Примерно в тысячу раз слабее, чем видит глаз»): ТЫСЯЧУ comes before СЛАБЕЕ, so the counter runs `ПРИМЕРНО+0.05 → ТЫСЯЧУ`
   and lands on the boom cue (12.646); СЛАБЕЕ gets the body tick's pulse, ГЛАЗ the «ГЛАЗ» line's pulse. (SCRIPT's «on слабее the counter climbs» cannot happen.)
3. The camera icon leaves after the shutter (`face:ПРОЯВИЛОСЬ+0.5`, slides right), not on «Это химия»: the exposure is done, the photo exists; the right
   side is then free for the labels and the lens. Owner's rule: a prop leaves when its event is over.
4. «ОБМЕН ВЕЩЕСТВ → СВЕТ» is a two-line plate **under the bubble** (left), not in the top slot: the clock card unfolds at `clock-0.6` = 24.42, only
   0.9 s after «свет» starts (23.52), so a top-slot chip could not hold ≥ 1 s after its word; under the bubble it holds to `clock:ДОБРОВОЛЬЦЕВ+0.2` (1.9 s).
5. «≈ 16:00» is a stamp **«ЯРЧЕ ВСЕГО ≈ 16:00»** (both words spoken: «ярче всего — около четырёх часов дня») on the clock card, separate from the ticking
   readout; it slams on ЧЕТЫРЁХ and holds ≥ 2 s across the rewind while the readout honestly runs back to 10:00 under the «← УТРО» tag.
6. Small print «ПЯТЬ ДОБРОВОЛЬЦЕВ» only (SCRIPT's digit list has no 22:00).
7. `glow` scale: 1.0 = the 16:00 peak. The 20-minute image (the ≈ 10:00 session, chip «10:00») tops at **0.6**, which is also frame 0's glow and the
   level the rewind returns to — one level per hour, one story clock. Keys in §2.
8. Camera (owner: never static): one continuous push-in 1.0 → 1.08 to the payoff with small dollies for the bar, the lens and the bubble, then a 4 s
   pull-back to `CAM0` landing exactly at `LAST`; the hand-held drift blends into `handheld(t − LAST)` over the close so the last frame = frame 0 (§6).
   Peak zoom is 1.08 (not STYLE's 1.10): at 1.10 the plinth bottom (1226) would project to 1290, inside the forbidden 1285–1530 band.
9. Owner's dynamics applied everywhere: a visible change every ≤ 2 s (cadence list in §2), props slide in 0.3–0.4 s with an `eBack` overshoot and
   leave as soon as their word is over (holds ≤ 1.2 s except the ×1000 counter, the clock card and the «ЯРЧЕ ВСЕГО ≈ 16:00» stamp), the bloom is never
   still (disc breathing, grain twinkle, word pulses), the ring fills in 20 visible ticks, the lens moves continuously, the rewind is a 0.25 s snap,
   the click OFF/ON are 3-frame events with a camera shake. A "what moves every second" line per beat is in §2b.
10. The right viewfinder brackets sit at x 960 (not 1000): the right strip (x > 975) stays empty.
11. Labels «ЩЁКИ» / «ЛОБ» are world-anchored plates right of the face (they ride the push-in and the dolly), listed for the lint via `worldTexts(t)`.

## 1. Frame 0 (= thumbnail, = last frame)
Camera `CAM0 = {x: 540, y: 800, s: 1.0}` + `handheld(0, 0.5, 0.33, 2)`; `lamp = 0.62`, `glow = 0.6`. What a stranger sees at 360 px: a calm stylised
face and shoulders on a gilt plinth (head top 590, chin 970, plinth 1200; bust 636 px ≈ 33 % of the frame, centred), warm-lit from a brass bell lamp at
the left (head (215, 640), bulb cream, god rays toward the face), its pool a disc on the cream wall behind the head with the rim already inside the frame
(hot-spot radius 1000·(0.35 + 0.65·0.62) = 753); a dark-blue velvet band y 1000–1480 with a warm pool ellipse under the plinth; a wood edge below; on both
cheeks and the forehead a **coral-pink glow** (`#ff7a6a` discs at 0.6·0.38 = 0.23) that is visibly not the lamp's cream; the header pill «ПОД ЛАМПОЙ ·
СВЕЧЕНИЕ ТЕЛА» (y 186–230, static, no pop); the hook card in the top slot (x 90–930, y 290–570): «ВАШЕ ТЕЛО СВЕТИТСЯ» cream 64 / «≈ В 1000 РАЗ»
gold-light 76 / «СЛАБЕЕ ГЛАЗА» gold-light 62 (measure: every line ≤ 800 px), velvet panel, gold border 6, static from frame 0 with the 0.04 breathing for
1.2 s. Subtitles hidden; brackets, sensor noise and the «10:00» chip at opacity 0 (they belong to the dark). Eye path: face → coral cheeks → bulb → card.
Motion in the first 0.5 s: the lamp dims 0.62 → 0.52 by `h1:СВЕТИТСЯ` (0.78 s; the pool's rim creeps ≈ 65 px toward the bust, ≈ 45 px of it inside the
first 0.5 s; the cream cools, the shade side deepens, the coral strengthens every frame), the camera's push-in has begun (s 1.0 → 1.02 by `C.click`), dust fades in 0 → 0.5·lamp over 0.4 s, the bloom
discs breathe (±4 % radius) and pulse ×1.08 on `h1:ТЕЛО`, ×1.1 on `h1:СВЕТИТСЯ`. Luma ≈ 132 (STYLE §1 budget); first 1.5 s ≈ 120 ≥ 100.

## 2. Scene list (one scene; the rows are the beats)
| # | beat / seg | from → to | world state | the verb the viewer must see | camera (x, y, s; impulses) | continuity |
|---|---|---|---|---|---|---|
| 1 | HOOK `h1` + `h2` [0–3.54] | 0 → `C.click` = T("h2.e") | lamp 0.62 → 0.30, bust lit, bloom showing through at 0.23 → 0.31 | the **lamp dims** in word steps: `lamp` keys `[[0, .62], [T("h1:СВЕТИТСЯ"), .52], [T("h2:ТЫСЯЧУ"), .42], [T("h2:ГЛАЗА"), .30]]` (eInOut) — the hot-spot rim creeps toward the face (753 → 545 px), the night tint rises 0.35 → 0.64, the shade side deepens, the pool under the plinth shrinks; `glow` keys `[[0, .6], [T("h2:ГЛАЗА"), .45], [C.click, .35]]` so the visible bloom `glow·(1−lamp)` rises monotonically 0.23 → 0.31 → 0.35 at the click (no jump); card line 2 «≈ В 1000 РАЗ» scales ×1.1 with a glow pulse on `h2:ТЫСЯЧУ` | push-in `[0, CAM0] → [C.click, {540, 800, 1.02}]`; shakes `[T("h2:ТЫСЯЧУ"), 2, 0.3]` | the click frame inherits lamp 0.30 → 0 in 3 frames (linear) at `C.click`: bulb grey, pool gone, wall night, vignette blue, grade cool; the bloom stays where it was (0.35) — "the lamp goes out, the face stays lit"; the hook card is still up (fades `C.click+0.1 → +0.3`) |
| 2 | `cam` [3.54–8.17] | `C.click` → T("face:ПРОЯВИЛОСЬ") | lamp 0; the camera's view: brackets `#dfefff` 0.7 at (80, 300) (960, 300) (80, 1250) (960, 1250), sensor noise `Stars n 70`, night wall, midnight velvet; the bust a silhouette `#2c2f5c` with the cool rim and the faint bloom | `C.click` shake 4 px; on `cam:КАМЕРА-0.05 → +0.35` the **camera icon slides in from the right edge** (centre x 1180 → 865, eBack overshoot 15 px, the bust glances at it); `+0.35 → +0.95` it **frosts** (rim fill, 12 frost stars by hash order, mist); on `cam:СОБИРАЛА-0.1` the ring card drops into the top slot and on `cam:СОБИРАЛА` the icon's glass blinks `#dfefff` (shutter) and the **ring starts filling**: `ringP = prog(t, T("cam:СОБИРАЛА"), T("face:ПРОЯВИЛОСЬ-0.05"))` linear, the arc head continuous, the gold hand snapping in 20 steps (`floor(ringP·20)/20`, one tick SFX each: 2.8 s comp → a tick every 0.14 s); **grain dots accumulate** (dot i exists while `ringP > hash(i·3.7)`: 240 dots over 2.8 s ≈ 85 new dots per second, readable second by second), `glow = lerp(0.35, 0.6, eOut(ringP))`, the wall spill and the velvet pool rise with it; «20 МИНУТ» glyphs pop on `cam:ДВАДЦАТЬ-0.05`; chip «10:00» pops at the viewfinder's bottom-left on `cam:МИНУТ-0.05` | `[C.click, {540, 800, 1.02}] → [T("face:ПРОЯВИЛОСЬ"), {540, 800, 1.035}]`; shakes `[C.click, 4, 0.4]`, `[T("cam:КАМЕРА+0.35"), 3, 0.3]`, `[T("cam:ДВАДЦАТЬ"), 2, 0.3]` | the icon stands on the velvet (its own contact shadow); the «10:00» chip stays through beats 3–5 (it is the clock's seed); the ring card stays until the shutter (it is the counter) |
| 3 | `face` [8.17–11.93] `RE-HOOK` | T("face:ПРОЯВИЛОСЬ") → T("ratio:ПРИМЕРНО-0.15") | lamp 0; glow 0.6, all 240 dots present | on `face:ПРОЯВИЛОСЬ-0.05` the arc closes; on `face:ПРОЯВИЛОСЬ` the **shutter blink** (brackets thicken 3 → 6 px and the sensor noise freezes for 2 frames, the icon's glass blinks), the two hot cores snap on (`#fff` 0.18 ellipses) and the bloom pulses ×1.12 — a face made of light stands there; `face:ПРОЯВИЛОСЬ+0.5 → +0.85` the **camera icon slides out right** (its photo is taken); `face:ЩЁКИ-0.05` plate «ЩЁКИ» pops right of the right cheek and both cheek discs pulse ×1.2 (0.3 s); `face:ЛОБ-0.05` plate «ЛОБ» pops right of the forehead, the forehead disc pulses ×1.2; the upper-neck disc stays faint (0.25) | `→ [T("ratio:ПРИМЕРНО-0.3"), {510, 800, 1.045}]` (a 3 s drift 30 px right so the bar has room); shakes `[T("face:ПРОЯВИЛОСЬ"), 3, 0.35]`, `[T("face:ЛИЦО"), 2, 0.3]` | the labels are world plates at (745–895, 640–700) and (745–907, 810–870) with 24 px gold leaders to the face edge, so they ride the camera; the ring card has left (`ПРОЯВИЛОСЬ+0.45`, slides up) before the labels pop |
| 4 | `ratio` [12.08–14.91] `RE-HOOK` | T("ratio:ПРИМЕРНО-0.15") → T("heat-0.5") | lamp 0; glow 0.6 | the **rail draws itself** (`GP p` 0.4 s, x 100–130, y 410–1180) on `ПРИМЕРНО-0.15`; the body's tick (coral dot r 10 + line) and «ТЕЛО» pop at `ПРИМЕРНО+0.15`, the «ГЛАЗ» line + label land at `ПРИМЕРНО+0.3`; the **gold fill climbs** from the tick and the **counter runs** `×1 → ≈ ×1000` (`ПРИМЕРНО+0.05 → ТЫСЯЧУ` = 12.13 → 12.65, eOut) through the **broken axis** at y 790, reaching the «ГЛАЗ» line on the frame the counter lands (boom cue 12.646, shake 3); on `ratio:СЛАБЕЕ` the body tick and the cheek discs pulse ×1.1; on `ratio:ГЛАЗ` the «ГЛАЗ» line and label pulse ×1.15 (ding); the labels «ЩЁКИ» / «ЛОБ» slide out right at `ПРИМЕРНО+0.3` | `[T("ratio:ПРИМЕРНО-0.3"), {510, 800, 1.045}] → [T("heat:ТЕПЛО-0.2"), {560, 800, 1.05}]` (drifts 50 px left for the lens); shakes `[T("ratio:ТЫСЯЧУ"), 3, 0.35]` | the bar is screen-space and drawn over the dark lamp (STYLE §9); counter panel (140–400, 745–835) stays ≥ 15 px left of the head (415 at this camera); everything holds ≥ 2 s after ТЫСЯЧУ (12.65 → 14.65) and fades (0.2) by `heat-0.5` = 14.91, the frame «АУРА?» pops in the chip row (y ≤ 400; the rail starts at 410, so the two never touch) |
| 5 | `heat` [15.41–18.89] `RE-HOOK` | T("heat-0.5") → T("chem:ХИМИЯ-0.1") | lamp 0; glow 0.6; the lens = the mid-video colour lift | chip «АУРА?» pops at `heat-0.5`, its ✗ at `heat-0.25` (silent — the silence is the answer); chip «ТЕПЛО?» pops on `heat:ТЕПЛО-0.1`; the **thermal lens slides in from the right edge** (centre x `keyed [[T("heat:ТЕПЛО-0.1"), 1240], [T("heat:ТЕПЛО+0.5"), 540], [T("heat:ШЕЯ-0.1"), 760], [T("heat:ПОЧТИ"), 760], [T("heat:ПОЧТИ+0.4"), 1240]]`): covers the whole face in false colour, then **drifts right without stopping** and parks with a ±3 px fbm bob — one face, two instruments: coral left (photons), thermal right (cheek green-blue = cool, neck orange-white = hot); on `heat:ШЕЯ` the **neck blobs flare** (×1.2, whiten 0.3 s); on `heat:ПОЧТИ` the lens **slides out right** and the real neck under it is nearly dark (disc 0.25, 5 % of the dots); on `heat:СВЕТИТСЯ` the ✗ lands on «ТЕПЛО?» (errbuzz cue 18.011); «АУРА?» slides out left at `heat:ШЕЯ-0.2`, «ТЕПЛО?» at `heat:СВЕТИТСЯ+0.8` | `[T("heat:ТЕПЛО-0.2"), {560, 800, 1.05}] → [T("heat:ТЕПЛО+0.45"), {545, 800, 1.053}]` (dolly left with the lens's arrival) `→ [T("heat:ШЕЯ-0.1"), {565, 800, 1.056}]` (dolly right as it parks) `→ [T("heat:ПОЧТИ+0.4"), {560, 800, 1.06}]`; shakes `[T("heat:ШЕЯ"), 2, 0.3]`; chip ✗ = roll impulse 0.3° on the chip | the lens is an occluder (clip): the dots under it are hidden, nothing fades; the bust glances toward the lens as it arrives; the lens label «ТЕПЛОВИЗОР» rides its top edge (world y 530–580) |
| 6 | `chem` [19.29–24.12] `RE-HOOK` | T("chem:ХИМИЯ-0.1") → T("clock-0.6") | lamp 0; glow 0.6 (pulse to 0.78 on ОТДАЮТ) | the **zoom bubble pops** at world (215, 700) r 140 on `chem:ХИМИЯ-0.05` (`pop 0.4, 1.3`), its gold dashed leader draws to the left cheek point (470, 840) with a 9 px coral dot; label «ВНУТРИ ЩЕКИ» under it at `ХИМИЯ+0.2`; 9 molecules **jitter** (fbm ±4 px) and tumble; on `chem:ОБМЕН` two neighbouring molecules trade a gold bond flash (0.2 s — the «обмен»); on `chem:ВОЗБУЖДАЕТ` the centre molecule **squashes** (0.25, 0.35) and its atoms whiten `#9fb4ff → #ffd0c0`; on `chem:ОТДАЮТ` a **coral photon leaves it** along a wavy GP path to the rim (0.35 s), `Flash "#ff9a8a" o 0.2 d 0.25`, and the **bloom pulses ×1.3** (0.4 s) with the wall spill; the label swaps for the two-line plate «ОБМЕН ВЕЩЕСТВ» / «→ СВЕТ» on `chem:СВЕТ-0.05`; the bubble **closes** (reverse pop, scale → 0 over 0.25 s) at `chem.e-0.3 → -0.05` | `[T("heat:ПОЧТИ+0.4"), {560, 800, 1.06}] → [T("chem:ХИМИЯ+0.3"), {500, 795, 1.062}]` (dolly left for the bubble) `→ [T("chem:СВЕТ"), {505, 795, 1.068}]`; shakes `[T("chem:ОТДАЮТ"), 5, 0.4]`, `[T("chem:МОЛЕКУЛЫ"), 2, 0.3]` | bubble screen box 88–386 × 548–848, 12 px clear of the ear (398); the photon is the only coral outside the face: it is the body's light |
| 7 | `clock` [24.42–30.63] `PAYOFF` | T("clock-0.6") → T("close1-0.3") | lamp 0; glow 0.6 → **1.0** → 0.6 | the **«10:00» chip flies up** (0.4 s eInOut, scaling 30 → 64 px) into the readout position while the **clock card wipes open** around it (0.45 s from the left) with the title «СВЕТ ЖИВЁТ ПО ЧАСАМ» and the small print; on `clock:ДОБРОВОЛЬЦЕВ` the **hour hand sweeps** 10 → 16 (eInOut to ЧЕТЫРЁХ), the minute hand does 6 turns, the readout **ticks** 11:00 … 16:00 (linear, one tick SFX per hour), the coral level dot climbs its gauge and the **bloom rises with it** (`glow = lerp(.6, 1, eInOut(prog(t, ДОБРОВОЛЬЦЕВ, ЧЕТЫРЁХ)))`: cores whiten, spill widens, pool brightens); on `clock:ЧЕТЫРЁХ` the hand lands, the stamp «ЯРЧЕ ВСЕГО ≈ 16:00» slams (boom + ding, shake 4) and the bloom is at its peak — the biggest picture change of the video; on `clock:УТРОМ-0.1` `LightLeak d 0.5`, the tag «← УТРО» pops, the hands **snap back anticlockwise** 16 → 10 in 0.25 s with the readout counting down, and the **bloom sinks** to 0.6 by `УТРОМ+0.3` (visibly dimmer than at 16:00); on `clock:СЛАБЕЕ` the level dot and the cheek discs dip ×0.9 for 0.3 s | `[T("chem:СВЕТ"), {505, 795, 1.068}] → [T("clock-0.6"), {540, 785, 1.072}] → [T("clock:ЧЕТЫРЁХ"), {540, 780, 1.08}] → [T("clock:УТРОМ+0.3"), {540, 782, 1.078}] → [T("close1-0.3"), {540, 785, 1.075}]`; shakes `[T("clock:ЧЕТЫРЁХ"), 4, 0.4]`, `[T("clock:УТРОМ"), 3, 0.3]` | one story clock: chip 10:00 → dial 10:00 → readout 10:00 … 16:00 → 10:00; the stamp carries the number through the rewind; the card leaves (slides up, 0.25 s) by `close1-0.3` so the click ON lands on a clean frame; head top at s 1.08 / y 780 = 595 vs card bottom 566 |
| 8 | `close1` [30.63–35.40] | T("close1-0.3") → T("close2:ЖИВЁТ-0.05") | lamp **0 → 1** at `C.on` (3 frames, shake 4): pool floods the table, wall cream, dust back, the bloom drowns (`1 − lamp` → 0) — that is the sentence | on `close1:ГЛАЗ-0.05` the **click ON** (bulb full on the word's first frame, click cue 30.931); `close1:ГЛАЗ+0.1` the eye plate pops at the left (an `EyeIcon`), its charcoal ✗ drawn at `ГЛАЗ+0.3` (errbuzz cue 31.231); on `close1:КАМЕРА-0.35 → КАМЕРА` the **viewfinder slides in from the right edge** (world rect 420 × 480 centred (540, 800), eBack overshoot, lands on the word = the shutter cue 32.208) over the lit face: inside it the camera's view (night tint, brackets, noise, **the bloom at glow·1**), outside the lamp-lit bust — "the camera sees it"; on `close1:ВИДИТ#2` the brackets pulse 0.7 → 1 → 0.7 | `[T("close1-0.3"), {540, 785, 1.075}] → [LAST, CAM0]` (the pull-back as the lamp comes on; the drift blends into the loop drift, §6); shakes `[C.on, 4, 0.4]`, `[T("close1:КАМЕРА"), 3, 0.3]` | the viewfinder is the camera icon's view (same cool palette, same side of entry); the eye-✗ leaves at `close1:КАМЕРА-0.05` (slides left); subtitles on |
| 9 | `close2` + tail [33.66–36.03 + 0.8 → LAST 36.8] | T("close2:ЖИВЁТ-0.05") → LAST | lamp 1 → 0.62 over the tail; glow 0.6 | on `close2:ТЕЛО` a 2 px impulse, on `close2:СВЕТИТСЯ` the bloom inside the viewfinder pulses ×1.2 and the brackets blink (the word gets its picture); on `close2:ЖИВЁТ` the **bloom inside the viewfinder pulses ×1.3** and the end card lands (Glyphs per line, stamp cue 35.445); `ЖИВЁТ+0.35 → +0.65` the **viewfinder slides out right**; from `ЖИВЁТ+0.45` the **lamp dims** 1 → 0.62 (eInOut to LAST, 0.9 s): the pool's rim starts creeping inward, the coral starts showing through on the whole face; at `close2.e → +0.15` the end card scales to 0.9 and fades; `close2.e+0.19` the hook card is simply there | `→ [LAST, CAM0]`; shakes `[T("close2:ТЕЛО"), 2, 0.3]`, nothing after `close2:ЖИВЁТ` | last frame == frame 0: lamp 0.62, glow 0.6, camera CAM0 + handheld(0), pill static, subs hidden, dust at the frame-0 value, no viewfinder, no icon |

### 2b. What moves in every second of each beat (owner's rule: never a still frame; offsets = comp seconds from the beat's first anchor)
- **HOOK** (0 → 3.54): every frame the hot-spot rim shrinks (753 → 545 px over 2.8 s), the night tint rises, the push-in runs (1.0 → 1.02), the bloom discs breathe and pulse on ТЕЛО (0.51) / СВЕТИТСЯ (0.78), the dust drifts in the beam, card line 2 pops on ТЫСЯЧУ (1.84), the bust breathes, sways ±1.5° and blinks; 3.44–3.54 the 3-frame click.
- **cam** (3.54 → 8.17): 0–0.4 the shake and the brackets / noise / night fading in with `1 − lamp`; 1.35–1.75 the icon slides in and overshoots, the bust glances at it; 1.75–2.35 the frost crawls and mist rises; 1.68 the ring card drops into the top slot; 1.78 the shutter blink; 1.78–4.58 the ring ticks every 0.14 s, ≈ 85 dots appear per second (240 over 2.8 s), the discs brighten 0.35 → 0.6, the wall spill and pool come up; 2.42 «20 МИНУТ» pops; 2.85 the chip pops; the sensor noise twinkles throughout.
- **face** (8.17 → 12.08): 0 the shutter blink + cores + ×1.12 pulse; 0.5–0.85 the icon leaves right; 2.32 «ЩЁКИ» + cheek pulse; 2.86 «ЛОБ» + forehead pulse; between them the 240 dots twinkle (6 Hz), the discs breathe, the camera drifts right 30 px; 0.55 (ЛИЦО) a 2 px impulse; the labels slide out at 4.2.
- **ratio** (12.08 → 15.41): −0.15–0.25 the rail draws; 0.05–0.57 the counter runs and the fill climbs through the break; 0.57 the boom lands «≈ ×1000» (fill at the «ГЛАЗ» line); 1.13 СЛАБЕЕ: tick + cheeks pulse; 2.14 ГЛАЗ: line + label pulse; the camera drifts left 50 px all beat; the fill's head glints (fbm) while it holds; 2.63–2.83 the bar fades, 2.83 «АУРА?» pops.
- **heat** (15.41 → 19.29): −0.5 «АУРА?», −0.25 its ✗; 0.27 «ТЕПЛО?» + the lens enters from the right; 0.27–0.87 the lens covers the face; 0.87–1.83 it drifts to park (the camera dollies left, then right with it); 1.73 «АУРА?» leaves; 1.93 the neck flares; 2.19–2.59 the lens leaves right; 2.60 the ✗ on «ТЕПЛО?»; 3.40 «ТЕПЛО?» leaves; the thermal bands shimmer (`fx-dof2` + a 1 px fbm wobble) whenever the lens is on screen; the lens bobs ±3 px while parked.
- **chem** (19.29 → 25.02): 0.22 the bubble pops, its leader draws; the camera dollies 60 px left; molecules jitter every frame; 0.47 «ВНУТРИ ЩЕКИ»; 1.42 ОБМЕН bond flash; 2.28 ВОЗБУЖДАЕТ squash + whitening; 2.87 МОЛЕКУЛЫ 2 px impulse; 3.79 ОТДАЮТ: photon + flash + bloom ×1.3; 4.18 the plate swap; 4.53–4.78 the bubble closes; 5.13 the chip flies (clock card).
- **clock** (25.02 → 30.93): −0.6 → −0.2 the chip flies and grows, the plate wipes open; 0.16–2.26 the hands sweep (the minute hand 6 turns), the readout ticks 11 … 16, the level dot and the bloom climb 0.6 → 1.0, the camera pushes to 1.08; 2.26 the stamp slams + peak + shake; 3.65 the leak + 0.25 s snap rewind + «← УТРО», the bloom sinks over 0.4 s; 4.24 СЛАБЕЕ dip; 5.36–5.61 the plate under the bubble is long gone (it left at 0.36), the card slides up; the camera eases back 2 px.
- **close1** (30.93 → 33.66): −0.05–0.05 the click ON + shake + pool flood + dust back; 0.1 the eye plate pops, 0.3 its ✗; 0.93–1.28 the viewfinder slides in and overshoots; 1.23 the eye plate leaves left; 1.71 the brackets pulse (ВИДИТ#2); the camera pulls back all beat; the viewfinder bobs ±2 px; the lit bust breathes and blinks.
- **close2 + tail** (33.66 → 36.8): 0.48 ТЕЛО impulse; 0.74 СВЕТИТСЯ: VF bloom ×1.2 + bracket blink; 1.74 ЖИВЁТ: VF bloom ×1.3 + the end card glyphs; 2.14–2.44 the VF leaves right; from 2.24 the lamp dims 1 → 0.62 (rim creeping in, coral returning on the whole face); 2.37–2.52 the end card shrinks out; 2.56 the hook card is on. Nothing is still until the last frame — and the last frame is frame 0, which is itself mid-dim.

Change cadence (measured, **final** s = comp / 1.25; ≤ 2 s between picture changes): dim 0 · ТЫСЯЧУ pop 1.47 · click 2.84 · ring card 4.18 · icon lands 4.23 · ring ticks 4.26–6.49 · frost 4.2–4.7 · «20» 4.77 · chip 5.11 · shutter + face 6.53 · icon out 6.9–7.2 · ЩЁКИ 8.39 · ЛОБ 8.83 · rail 9.54 · labels out 9.9 · ×1000 10.12 · СЛАБЕЕ 10.56 · ГЛАЗ 11.37 · АУРА? 11.93 · ✗ 12.13 · ТЕПЛО? + lens 12.55 · cover 13.02 · АУРА? out 13.7 · park 13.79 · flare 13.87 · lens out 14.1–14.4 · ✗ 14.41 · ТЕПЛО? out 15.05 · bubble 15.61 · label 15.8 · ОБМЕН 16.57 · squash 17.26 · spark 18.46 · plate 18.78 · bubble out 19.1–19.3 · clock card 19.54 · sweep 20.15–21.83 · peak 21.83 (74 %) · rewind 22.94 · СЛАБЕЕ dip 23.41 · card out 24.5 · click ON 24.7 · eye 24.8 · VF 25.5–25.77 · brackets 26.11 · ТЕЛО 27.31 · СВЕТИТСЯ 27.52 · end card 28.32 · VF out 28.6–28.9 · dim from 28.7 · card swap 28.97 · LAST 29.44.

## 3. Overlays
Slots: header pill y 186–230 · top card y 290–570 · chip row y 330–400 · world label band (right of the face) y 640–870 · bar column x 95–400 ·
bubble label slot x 70–400, y 870–970 · bottom-left HUD chip x 80–230, y 1180–1230 · eye plate x 110–260, y 790–880. All boxes inside x 60–960,
y 280–1260; subtitles own y 1330–1520 (hidden `t < T("cam-0.05")` and `t ≥ T("close2.e+0.15")`); the right strip (x > 975) and y > 1550 stay empty.
`ctr(w) = (1080 − w)/2 − 30`. Text on the velvet is cream or gold-light, never white; text on cream is charcoal; every cream plate has the 4 px
charcoal border + the drop shadow. Enter = slide/pop 0.3–0.4 s with `eBack` overshoot; exit = the reverse move (slide back the way it came or a
reverse pop) unless marked fade.

| name | at | until | slot / box (x, y, w, h) | text exactly as drawn | enter / exit |
|---|---|---|---|---|---|
| HOOK | 0 | T("cam-0.05") | top card · ctr(840), 290, 840, 280 | «ВАШЕ ТЕЛО СВЕТИТСЯ» (cream 64) / «≈ В 1000 РАЗ» (#ffd56a 76) / «СЛАБЕЕ ГЛАЗА» (#ffd56a 62); every line ≤ 800 px | static from frame 0, breathing 0.04 for 1.2 s; line 2 scale ×1.1 + text-shadow bloom (impulse 0.4 s) at T("h2:ТЫСЯЧУ-0.05"); fade 0.2 (Main's HOOK rule), gone before `cam` |
| RING | T("cam:СОБИРАЛА-0.1") | T("face:ПРОЯВИЛОСЬ+0.45") | top card · 260, 290, 560, 130 | dial at the left (track r 46 charcoal 8 px 0.25, 20 tick marks, gold arc `GP w 8 glow 2 p=ringP`, gold hand stepping 20×, shutter glyph at the centre); «20» (62) «МИНУТ» (28) centre; «УСКОРЕНО» (24, charcoal 0.7) bottom-right | slides down from y −140 (0.35 s eBack); the «20 МИНУТ» glyphs pop at T("cam:ДВАДЦАТЬ-0.05") (Glyphs stagger 0.02) and «20» pulses ×1.15 on the word; the dial alone is on the card before that (no digit before its word); slides up out (0.3 s) |
| CHIP-TIME | T("cam:МИНУТ-0.05") | T("clock-0.6") (hard) | HUD chip · 80, 1180, 150, 50 | «10:00» (30, charcoal on cream, a camera-corner glyph before it) | pop 0.3; at `until` it is taken over by CLOCK (the flight is drawn by CLOCK from the same box; never both) |
| LBL-CHEEKS (world) | T("face:ЩЁКИ-0.05") | T("ratio:ПРИМЕРНО+0.3") | world plate (745, 810)–(907, 870) → screen ≈ 752–920 at cam 540/1.035, 785–955 at cam 510/1.045 | «ЩЁКИ» (28) with a 24 px gold leader + 6 px gold dot to the cheek's edge | pop 0.3 (eBack); slides right 0.25 |
| LBL-BROW (world) | T("face:ЛОБ-0.05") | T("ratio:ПРИМЕРНО+0.3") | world plate (745, 640)–(895, 700) | «ЛОБ» (28) + leader to the forehead's edge | same |
| BAR | T("ratio:ПРИМЕРНО-0.15") | T("heat-0.5") | bar column · 95, 410, 40, 770 (the rail only) | rail x 100–130 charcoal 0.8 + gold 3 px border; «ГЛАЗ» line y 440 (gold 6 px across the rail); broken axis at y 790 (two slanted gold 6 px strokes, 14 px gap, drawn over the fill in the rail colour); body tick at y 1150 (coral dot r 10 on `fx-glow` + a 36 px coral line); gold fill from 1150 up to 440 by `eOut(prog(t, ПРИМЕРНО+0.05, ТЫСЯЧУ))` | rail `GP p` 0.4 s from ПРИМЕРНО−0.15; tick pops at +0.15, line at +0.3; the tick pulses ×1.15 on `ratio:СЛАБЕЕ`, the line on `ratio:ГЛАЗ`; fade 0.2 |
| BAR-EYE | T("ratio:ПРИМЕРНО+0.3") | T("heat-0.5") | 150, 415, 150, 50 | «ГЛАЗ» (28, gold dot before the word) | pop 0.3; impulse ×1.15 at `ratio:ГЛАЗ`; fade 0.2 |
| BAR-BODY | T("ratio:ПРИМЕРНО+0.15") | T("heat-0.5") | 150, 1120, 150, 50 | «ТЕЛО» (28, coral dot before the word) | pop 0.3; impulse at `ratio:СЛАБЕЕ`; fade 0.2 |
| BAR-COUNT | T("ratio:ПРИМЕРНО+0.05") | T("heat-0.5") | 140, 745, 260, 90 | velvet panel, gold border 5: `Counter keys [[T("ratio:ПРИМЕРНО+0.05"), 1], [T("ratio:ТЫСЯЧУ"), 1000]] ease eOut size 50 color #ffd56a fmt v => v ≥ 999.5 ? "≈ ×1000" : "×" + Math.round(v)` — «×1 … ×999» while counting, «≈ ×1000» on landing | pop 0.3; the panel kicks ×1.1 on landing (impulse); holds ≥ 2 s (12.65 → 14.71); fade 0.2 |
| CHIP-AURA | T("heat-0.5") | T("heat:ШЕЯ-0.2") | chip row · 120, 330, 240, 70 | «АУРА?» (34) | `ChipX`: pop 0.35, charcoal ✗ draws itself over 0.18 s from at+0.25 (−6°, 10 px overshoot), roll impulse 0.3°; slides left out 0.25 |
| CHIP-HEAT | T("heat:ТЕПЛО-0.1") | T("heat:СВЕТИТСЯ+0.8") | chip row · 400, 330, 260, 70 | «ТЕПЛО?» (34) | `ChipX` with `xAt = T("heat:СВЕТИТСЯ")` (the ✗ waits for the word); slides left out 0.25 |
| LBL-THERMAL (world, on the lens) | lens visible | lens visible | plate on the lens's top edge, world (lensX − 120, 530)–(lensX + 120, 580) | «ТЕПЛОВИЗОР» (28, charcoal on cream, on the gold frame) | travels with the lens; no own enter/exit |
| LBL-BUBBLE | T("chem:ХИМИЯ+0.2") | T("chem:СВЕТ-0.2") | 80, 870, 300, 56 | «ВНУТРИ ЩЕКИ» (28) | pop 0.3; fade 0.18 |
| CHIP-MECH | T("chem:СВЕТ-0.05") | T("clock:ДОБРОВОЛЬЦЕВ+0.2") | 70, 870, 330, 100 | «ОБМЕН ВЕЩЕСТВ» (28) / «→ СВЕТ» (28, the → a gold inline svg as 01's `ArrowLabel`) | slides up 20 px + pop 0.3; slides down out 0.25 |
| CLOCK | T("clock-0.6") (hard) | T("close1-0.3") | top card · 220, 290, 640, 276 | cream plate: title «СВЕТ ЖИВЁТ ПО ЧАСАМ» (32, letterSpacing 2, left-aligned at local x 24, y 10–46); dial r 80 at local (115, 160): gold hour hand, charcoal minute hand, 12 ticks; a coral level dot on a short vertical gauge at local x 205 (y 100–220); readout `Counter keys [[T("clock:ДОБРОВОЛЬЦЕВ"), 10], [T("clock:ЧЕТЫРЁХ"), 16]] ease linear fmt h => Math.floor(h + 1e-6) + ":00" size 64 color #2a1f1a` at local (230–620, 85–155): «10:00» … «16:00», then the rewind `Counter keys [[T("clock:УТРОМ-0.1"), 16], [T("clock:УТРОМ+0.15"), 10]]`; stamp «ЯРЧЕ ВСЕГО ≈ 16:00» (velvet panel, gold border 5, #ffd56a 40 / «ЯРЧЕ ВСЕГО» 26 cream) at local (230–620, 168–232); tag «← УТРО» (#ffd56a 34 on velvet) at local (470–620, 8–52); small print «ПЯТЬ ДОБРОВОЛЬЦЕВ» (24, charcoal 0.75) at local (24–600, 240–268) | the «10:00» chip flies from (80, 1180) to the readout box over clock−0.6 → −0.2 (eInOut, scale 30 → 64 px) while the plate wipes in from the left (clock−0.35 → +0.1, `clip-path inset`); the stamp slams (`Stamp2`-style 2.2 → 1 eBack + dust ring) at T("clock:ЧЕТЫРЁХ-0.05") and stays; the tag pops at T("clock:УТРОМ-0.1"); hands `keyed [[ДОБРОВОЛЬЦЕВ, 10], [ЧЕТЫРЁХ, 16], [УТРОМ-0.1, 16], [УТРОМ+0.15, 10]]` (the rewind leg anticlockwise, eOut); the card slides up out (0.25 s) at `until` |
| EYE-X | T("close1:ГЛАЗ+0.1") | T("close1:КАМЕРА-0.05") | 110, 790, 150, 90 | cream plate with `EyeIcon size 60` (charcoal, blinking `blink`) and the charcoal ✗ (`Xmark sw 8 over 10 rot −6`) drawn at T("close1:ГЛАЗ+0.3") over 0.18 s | pop 0.3 (eBack); slides left out 0.25 |
| END | T("close2:ЖИВЁТ-0.05") (hard) | T("close2.e+0.16") | top card · ctr(840), 290, 840, 270 (same panel as HOOK) | «ВАШЕ ТЕЛО СВЕТИТСЯ,» (cream 60) / «ПОТОМУ ЧТО ЖИВЁТ.» (#ffd56a 70); measure ≤ 800 | panel `eBack` in over 0.25 s; Glyphs stagger 0.03: line 1 at ЖИВЁТ−0.05, line 2 at ЖИВЁТ+0.1; exit over close2.e → close2.e+0.15: scale → 0.9, opacity → 0 |
| HOOK2 | T("close2.e+0.19") (hard) | TOTAL + 1 | top card · same box as HOOK | identical to HOOK, `t = 0` | hard on (no fade, no pop) so the last frame = frame 0 |

World props that are not text (listed for the lint as `objs`): CAMICON (750–940, 1040–1190 world, present `cam:КАМЕРА-0.05 → face:ПРОЯВИЛОСЬ+0.85`),
LENS (lensX ± 190, 600–1080 world, present `heat:ТЕПЛО-0.1 → heat:ПОЧТИ+0.4`), BUBBLE (215 ± 140, 700 ± 140 world, `chem:ХИМИЯ-0.05 → chem.e-0.05`),
VF (vfX ± 210, 560–1040 world, `close1:КАМЕРА-0.35 → close2:ЖИВЁТ+0.65`), BUST (300–780, 590–1226 world, always), LAMP (head bell 145–285, 580–700 world, always).

Collisions checked (screen, at the camera of the moment): HOOK (bottom 570) vs head top (590 at s 1.0, 586 at s 1.02) ✓; HOOK leaves 0.4 s before RING arrives
in the same slot ✓ (3.49 vs 5.22); RING (290–420) vs head top 584 at s 1.035 ✓; CHIP-TIME (80–230 × 1180–1230) vs plinth (300–780) ✓ and vs the lamp base
(130, 1100: base disc ≈ 70–190 × 1085–1115) ✓ — the chip sits 65 px below the base; LBL-CHEEKS right edge ≤ 955 at cam 510 ✓; RING leaves (8.62) before
LBL-CHEEKS pops (10.49) ✓; BAR column (≤ 400) vs head (≥ 415 at cam 510/1.045) ✓, vs LAMP head box (159–305 × 570–695): BAR rail 95–135 ✓, BAR-EYE y ≤ 465 ✓,
BAR-COUNT y ≥ 745 ✓, BAR-BODY y ≥ 1120 ✓; BAR fades out (14.71–14.91) as CHIP-AURA pops (14.91) in a different zone ✓; chips (330–400) vs LBL-THERMAL (screen
≥ 515) ✓ and vs head (≥ 589 at s 1.056) ✓; LENS parked box 546–946 ✓ (< 960); BUBBLE (88–386) vs ear (398) ✓, vs LBL-BUBBLE (y ≥ 870 vs bubble bottom 848) ✓;
LBL-BUBBLE → CHIP-MECH in one slot with a 0.15 s gap ✓; CLOCK (bottom 566) vs head top (595 at s 1.08 / y 780) ✓; CHIP-MECH (y ≥ 870, x ≤ 400) vs CLOCK
(y ≤ 566) ✓ and vs BUST shoulders (x ≥ 320 only below y 1112) ✓; CLOCK leaves (30.63) before C.on (30.88) ✓; EYE-X (110–260 × 790–880) vs LAMP head (screen
109–262 × 566–696 at s 1.09) ✓ 94 px below it, vs VF (screen left edge ≥ 317) ✓; END/HOOK2 (bottom 570) vs head top (≥ 588 at s ≤ 1.01) ✓; END leaves 0.04 s +
1 frame before HOOK2 (never both). Every number on screen is spoken at that moment (1000 / 20 / ×1000 / 10:00 → 16:00 → 10:00); «пять добровольцев» as a word.

## 4. Transitions
There are no cuts: one scene, one camera. The picture changes by **light events** and by **props that move**.
| event | kind | justified by |
|---|---|---|
| `C.click` = T("h2.e") | **click OFF**: `lamp` 0.30 → 0 linear over 3 frames (bulb grey, pool gone, wall night, vignette blue, grade cool, brackets + noise in with `1 − lamp`); shake 4 px; no flash, no fade | «Полная темнота»: the lamp is the only thing that changes, and the face stays lit — the hook paid off at 2.8 s final |
| `C.on` = T("close1:ГЛАЗ-0.05") | **click ON**: `lamp` 0 → 1 over 3 frames (everything above in reverse; the bloom drowns because its opacity is `1 − lamp`); shake 4 px | «Глаз этого не видит» — in lamp light the glow is invisible; the sentence is the picture |
| T("face:ПРОЯВИЛОСЬ") | **shutter blink**: brackets 3 → 6 px and the sensor noise frozen for 2 frames; the icon's glass flashes `#dfefff`; not a screen flash | the exposure ends, the photo is "taken" |
| T("chem:ОТДАЮТ") | `Flash color "#ff9a8a" o 0.2 d 0.25` (the only screen flash; coral, never white) | the photon leaving the molecule |
| T("clock:УТРОМ-0.1") | `LightLeak d 0.5 hue "255,200,120"` + the hands snapping anticlockwise + tag «← УТРО» | time runs backwards on screen → the kit's rewind cue and a tag (ANIMATION §7) |
| props | camera icon, lens, bubble, viewfinder, cards: each **enters by moving** (slide from the right edge / pop / drop) and **leaves by moving** the same way; the lens hides the dots as an occluder (clip), nothing on the bust ever fades | ANIMATION §3: nothing vanishes on camera |
`XF` is irrelevant (one scene); `PORTALS = []`, `WHIPS = []`. No white flash anywhere.

## 5. Sound cues the picture needs (SFX bound to the visual event's ref; music = `story1/sfx/track.wav` under the voice ≥ 10 dB down)
| ref (comp s) | visual event that owns the sound | sound |
|---|---|---|
| 0 | frame 0, the lamp already dimming | music soft; a faint lamp hum (−30 dB) that dies with the click |
| T("h2:ТЫСЯЧУ-0.05") (1.79) | card line 2 scales ×1.1 | soft pop (cue 1.837) |
| `C.click` (3.544) | the bulb goes grey (first of the 3 frames) | **lamp click** (`file:click`, signature); music → **silent**; the hum stops; a cold room tone (−34 dB) under the dark beats |
| T("cam:КАМЕРА-0.05") → +0.35 | the icon slides in; lands at +0.35 (5.29) | whoosh soft (cue 4.939) → a small metal thud on the landing frame; frost crackle (synth shimmer) 5.29–5.89 |
| T("cam:СОБИРАЛА-0.1") (5.22) | the ring card drops | soft card hit |
| T("cam:СОБИРАЛА") (5.322) | the icon's glass blinks, the arc starts | **shutter** (`file:shutter`); `file:tick` −14 dB on each of the 20 hand steps (every 0.14 s) until the arc closes at 8.12 |
| T("cam:ДВАДЦАТЬ-0.05") (5.96) | «20 МИНУТ» glyphs pop | pop |
| T("cam:МИНУТ-0.05") (6.39) | chip «10:00» pops | pop soft (cue 6.437) |
| T("face:ПРОЯВИЛОСЬ") (8.168) | shutter blink + the hot cores + the ×1.12 pulse — **RE-HOOK 1** | **shutter** + ding (cues); music **back soft** |
| T("face:ПРОЯВИЛОСЬ+0.5") | the icon slides out | whoosh soft, descending |
| T("face:ЩЁКИ-0.05") / T("face:ЛОБ-0.05") | labels pop + disc pulses | pop ×2 (cues 10.536 / 11.082) |
| T("ratio:ПРИМЕРНО-0.15") (11.93) | the rail draws | whoosh soft rising (cue 12.077) |
| T("ratio:ПРИМЕРНО+0.05") → T("ratio:ТЫСЯЧУ") | the counter runs, the fill climbs | a soft counter tick-roll (synth) |
| T("ratio:ТЫСЯЧУ") (12.646) | «≈ ×1000» lands, fill at the «ГЛАЗ» line, shake — **RE-HOOK 2** | **boom** (cue) |
| T("ratio:СЛАБЕЕ") / T("ratio:ГЛАЗ") | tick pulse / line pulse | tick soft / ding soft |
| T("heat-0.5") (14.91) · T("heat-0.25") (15.16) | «АУРА?» pops · its ✗ | pop (cue 14.91) · **errbuzz soft** (cue 15.16) — in the voice's silence |
| T("heat:ТЕПЛО-0.1") → +0.5 | «ТЕПЛО?» pops; the lens slides in — **RE-HOOK 3** | pop; whoosh (cue 15.782) |
| T("heat:ШЕЯ") (17.337) | the neck blobs flare | a low ding / heat "bloom" tone |
| T("heat:ПОЧТИ") (17.604) | the lens slides out | whoosh soft |
| T("heat:СВЕТИТСЯ") (18.011) | ✗ on «ТЕПЛО?» | **errbuzz** (cue) |
| T("chem:ХИМИЯ-0.05") (19.51) | the bubble pops — **RE-HOOK 4** | whoosh soft (cue 19.56) + a tiny glass pop; **riser** from here to ЧЕТЫРЁХ (spec `riser [["chem", "clock:ЧЕТЫРЁХ"]]`) |
| T("chem:ОБМЕН") (20.709) | the bond flash | tick soft |
| T("chem:ВОЗБУЖДАЕТ") (21.569) | the molecule squashes | a short squeak-tick (synth) |
| T("chem:ОТДАЮТ") (23.078) | photon + coral flash + bloom pulse | **ding soft** (cue) |
| T("chem:СВЕТ-0.05") (23.47) | plate «ОБМЕН ВЕЩЕСТВ → СВЕТ» | pop (cue 23.519) |
| T("clock-0.6") (24.423) | the chip flies up, the plate wipes open | whoosh (cue); music → **silent** (the silence before the twist) |
| T("clock:ДОБРОВОЛЬЦЕВ") → T("clock:ЧЕТЫРЁХ") | the hands sweep, the readout ticks 11 … 16 | `file:tick` on each hour tick (6 ticks, accelerating with the eInOut sweep: cue 25.186 starts them) |
| T("clock:ЧЕТЫРЁХ") (27.287) | hand lands, stamp «ЯРЧЕ ВСЕГО ≈ 16:00» slams, bloom peak, shake — **PAYOFF** | **boom + ding** (cues); music **back soft** |
| T("clock:УТРОМ-0.1") (28.67) | light leak + 0.25 s anticlockwise snap + tag | reversed whoosh soft (cue 28.773) + a fast reverse tick-roll |
| T("clock:СЛАБЕЕ") | the level dot dips | nothing (the voice carries it) |
| T("close1-0.3") (30.63) | the clock card slides up out | whoosh soft |
| `C.on` = T("close1:ГЛАЗ-0.05") (30.88) | the bulb lights (3 frames), pool floods | **lamp click** (`file:click`, cue 30.931) — the signature, second time; the warm hum returns |
| T("close1:ГЛАЗ+0.3") (31.23) | ✗ on the eye plate | errbuzz soft (cue 31.231) |
| T("close1:КАМЕРА") (32.208) | the viewfinder lands over the face | **shutter soft** (cue) |
| T("close1:ВИДИТ#2") (32.638) | brackets pulse | a tiny HUD blip |
| T("close2:СВЕТИТСЯ") (34.4) | VF bloom ×1.2 | nothing |
| T("close2:ЖИВЁТ") (35.445) | VF bloom ×1.3 + end card | soft card hit (cue "stamp" 35.445) |
| T("close2.e") → LAST (36.025 → 36.8) | the card swap, the lamp dimming | music resolves; audio tail ≤ 0.8 s, no stinger; the hum fades with the lamp |

Spec music sections stay as SCRIPT: `[[0, "soft"], ["h2.e", "silent"], ["face:ПРОЯВИЛОСЬ", "soft"], ["clock-0.6", "silent"], ["clock:ЧЕТЫРЁХ", "soft"]]`.

## 6. The ending: loop frame = frame 0
1. `close1-0.3` (30.63): the clock card has slid out; the bust glows alone (glow 0.6, the morning level) in the camera's view; the camera is at
   {540, 785, 1.075} and begins its pull-back to CAM0 (ends exactly at LAST).
2. `C.on` = ГЛАЗ−0.05 (30.88): the click ON — lamp 0 → 1 in 3 frames; the night tint, brackets, noise and the «10:00»-less HUD go with `1 − lamp`; the bloom
   vanishes (opacity `glow·(1 − lamp)` → 0); dust back; shake 4 px. The eye plate + ✗ (31.03 / 31.23), leaves at 32.16.
3. КАМЕРА−0.35 → КАМЕРА (31.86 → 32.21): the viewfinder slides in from the right and lands over the face; inside it `lampEff = 0`: the night wall, the
   silhouette bust and the bloom at glow·1 (0.6), brackets + noise clipped to the rect; outside, the lamp-lit bust. Brackets pulse on ВИДИТ#2.
4. `close2:СВЕТИТСЯ` / `close2:ЖИВЁТ` (34.4 / 35.445): the bloom inside the viewfinder pulses ×1.2 / ×1.3; on ЖИВЁТ the end card lands (Glyphs).
5. ЖИВЁТ+0.35 → +0.65 (35.80 → 36.10): the viewfinder slides out right. From ЖИВЁТ+0.45 (35.90) the lamp dims 1 → 0.62 (eInOut to LAST): the pool's rim
   creeps inward, the coral shows through on the whole face again — the loop's story: "the lamp is going out, the glow is starting to show".
6. `close2.e → +0.15` (36.025 → 36.175): the end card scales to 0.9 and fades; `close2.e+0.19` (36.215): the hook card is simply there (hard on). Subtitles
   hidden from `close2.e+0.15`.
7. Exactness at LAST = 36.8: `lamp(LAST) = 0.62`, `glow(LAST) = 0.6`, camera key `[LAST, CAM0]` with the drift `handheld(loopT(t), 0.5, 0.33, 2)` where
   `loopT(t) = lerp(t, t − LAST, eInOut(prog(t, C.on, LAST − 0.3)))` — a smooth blend over the close from the running drift to the loop drift, so
   `loopT(LAST) = 0 = loopT(0)` and the camera, the bust's breathe/sway/blink, the disc breathing, the dust, the god-ray flicker and the grain twinkle all
   evaluate the same noise as frame 0 (every life-noise reads `loopT(t)`, not `t`); shakes are all over by ЖИВЁТ+0.3; the header pill never pops (one entry at 0);
   HOOK2 renders `HookCard3 t={0}` (breathing = 1); dust opacity `0.5·lamp·min(prog(t, 0, 0.4), 1)`, and since lamp(LAST) = lamp(0) it matches. The animator
   proves it with a pixel diff of frame 0 vs the last frame (≤ 1 % differing pixels, grain and sensor noise excluded).

## 7. Code tables

### 7a. `src/time.ts` — the event table (there are no cuts; these are the light events and the prop moves everything else keys off)
```ts
import raw from "./timeline1.json";
import { mkT, TLData, FPS } from "./tl";
export const TL = raw as unknown as TLData;
export const TOTAL = TL.total;                                    // 36.825
export const T = mkT(TL);
/** the last rendered frame (durationInFrames = ceil(TOTAL·FPS)): the loop frame, which must equal frame 0 */
export const LAST = (Math.ceil(TOTAL * FPS) - 1) / FPS;           // 36.8

export const C = {
  click:    T("h2.e"),                    // 3.544  lamp click OFF: 0.30 → 0 linear over the 3 frames ending here (bulb grey on this frame = click SFX)
  shutter1: T("cam:СОБИРАЛА"),            // 5.322  exposure opens: the icon's glass blinks, the ring starts (shutter + ticks)
  shutter2: T("face:ПРОЯВИЛОСЬ"),         // 8.168  exposure closes: shutter blink, hot cores, bloom ×1.12 — RE-HOOK 1
  boom:     T("ratio:ТЫСЯЧУ"),            // 12.646 «≈ ×1000» lands, the fill reaches the «ГЛАЗ» line — RE-HOOK 2
  lensIn:   T("heat:ТЕПЛО-0.1"),          // 15.682 the thermal lens starts sliding in — RE-HOOK 3
  spark:    T("chem:ОТДАЮТ"),             // 23.078 the photon leaves the molecule: Flash, bloom ×1.3
  clockIn:  T("clock-0.6"),               // 24.423 the «10:00» chip flies up, the clock card wipes open; music silent
  peak:     T("clock:ЧЕТЫРЁХ"),           // 27.287 PAYOFF: hand at 16:00, stamp «ЯРЧЕ ВСЕГО ≈ 16:00», glow 1.0
  rewind:   T("clock:УТРОМ-0.1"),         // 28.673 LightLeak + the 0.25 s anticlockwise snap + tag «← УТРО»
  on:       T("close1:ГЛАЗ-0.05"),        // 30.881 lamp click ON: 0 → 1 linear over 3 frames (full on the word's first frame)
  vfIn:     T("close1:КАМЕРА-0.35"),      // 31.858 the viewfinder slides in; lands on the word (shutter SFX)
  end:      T("close2:ЖИВЁТ-0.05"),       // 35.395 end card
  swap:     T("close2.e+0.19"),           // 36.215 hook card hard on (END gone at close2.e+0.15)
};
export const CAM0 = { x: 540, y: 800, s: 1.0 };
export const REF = { x: 540, y: 800 };
```
Word refs used (all exist in `timeline1.json`; `norm` folds Ё→Е so ЩЁКИ / ЧЕТЫРЁХ / ЖИВЁТ resolve; `#2` picks the second occurrence): `h1:ТЕЛО`, `h1:СВЕТИТСЯ`,
`h2:ТЫСЯЧУ`, `h2:ГЛАЗА`, `h2.e`, `cam`, `cam:КАМЕРА`, `cam:СОБИРАЛА`, `cam:ДВАДЦАТЬ`, `cam:МИНУТ`, `face:ПРОЯВИЛОСЬ`, `face:ЛИЦО`, `face:ЩЁКИ`, `face:ЛОБ`, `ratio:ПРИМЕРНО`,
`ratio:ТЫСЯЧУ`, `ratio:СЛАБЕЕ`, `ratio:ГЛАЗ`, `heat`, `heat:ТЕПЛО`, `heat:ШЕЯ`, `heat:ПОЧТИ`, `heat:СВЕТИТСЯ`, `chem:ХИМИЯ`, `chem:ОБМЕН`, `chem:ВОЗБУЖДАЕТ`, `chem:МОЛЕКУЛЫ`,
`chem:ОТДАЮТ`, `chem:СВЕТ`, `chem.e`, `clock`, `clock:ДОБРОВОЛЬЦЕВ`, `clock:ЧЕТЫРЁХ`, `clock:УТРОМ`, `clock:СЛАБЕЕ`, `close1`, `close1:ГЛАЗ`, `close1:КАМЕРА`, `close1:ВИДИТ#2`,
`close2:ТЕЛО`, `close2:СВЕТИТСЯ`, `close2:ЖИВЁТ`, `close2.e`. (Avoid `ratio:В` and `clock:У`: single letters match the first word only by luck.)

### 7b. `src/state.ts` — the two light variables, the ring, the loop time, the camera, the prop positions (imported by scenes.tsx and Main.tsx)
```ts
import { T, C, LAST, CAM0 } from "./time";
import { clamp, lerp, prog, eOut, eIn, eInOut, eBack, keyed, pop } from "./tl";
import { mkCam, handheld, impulse, Cam, CamKey, Shake } from "./fx/Camera";
import { fbm1 } from "./fx/noise";

/** loop time: t for most of the video, blending into t − LAST over the close so that loopT(LAST) === loopT(0) === 0.
 *  Every life-noise (hand-held drift, breathe, sway, blink seed, disc breathing, dust, god-ray flicker, grain twinkle) reads loopT(t), never t. */
export const loopT = (t: number) => lerp(t, t - LAST, eInOut(prog(t, C.on, LAST - 0.3)));

// ---- lamp 0…1 ----
const DIM: [number, number][] = [[0, 0.62], [T("h1:СВЕТИТСЯ"), 0.52], [T("h2:ТЫСЯЧУ"), 0.42], [T("h2:ГЛАЗА"), 0.30]];
export function lamp(t: number): number {
  if (t < C.click) return keyed(t, DIM) * (1 - prog(t, C.click - 0.1, C.click));           // the click OFF: 0.30 → 0, linear, 3 frames
  if (t < C.on) return 0;
  const on = prog(t, C.on, C.on + 0.1);                                                    // the click ON: 0 → 1, linear, 3 frames
  return on < 1 ? on : keyed(t, [[T("close2:ЖИВЁТ+0.45"), 1], [LAST, 0.62]]);              // the tail dim → frame 0
}
// ---- the 20-minute ring (linear so the 20 ticks are even; gates the grain dots: dot i exists while ringP > hash(i·3.7)) ----
export const ringP = (t: number) => prog(t, C.shutter1, T("face:ПРОЯВИЛОСЬ-0.05"));
export const ringStep = (t: number) => Math.floor(ringP(t) * 20 + 1e-6) / 20;              // the hand and the tick SFX
// ---- glow 0…1 (1.0 = the 16:00 peak; 0.6 = the 10:00 level = the 20-minute image = frame 0) ----
export function glowBase(t: number): number {
  if (t < C.shutter1) return keyed(t, [[0, 0.6], [T("h2:ГЛАЗА"), 0.45], [C.click, 0.35]]);
  if (t < T("clock:ДОБРОВОЛЬЦЕВ")) return lerp(0.35, 0.6, eOut(ringP(t)));
  if (t < C.rewind) return lerp(0.6, 1.0, eInOut(prog(t, T("clock:ДОБРОВОЛЬЦЕВ"), C.peak)));
  return lerp(1.0, 0.6, eOut(prog(t, C.rewind, T("clock:УТРОМ+0.3"))));
}
const PULSES: [number, number][] = [[T("h1:ТЕЛО"), 0.08], [T("h1:СВЕТИТСЯ"), 0.10], [C.shutter2, 0.12], [T("ratio:СЛАБЕЕ"), 0.10], [T("heat:СВЕТИТСЯ"), 0.10], [C.spark, 0.30], [T("close2:СВЕТИТСЯ"), 0.20], [T("close2:ЖИВЁТ"), 0.30]];
const bump = (t: number, at: number, dur = 0.5) => Math.max(0, impulse(t, at, 1, 4, 5, dur));
export function glow(t: number): number {
  const p = PULSES.reduce((a, [at, k]) => a + k * bump(t, at), 0) - 0.1 * bump(t, T("clock:СЛАБЕЕ"), 0.4);
  return clamp(glowBase(t) * (1 + p) + 0.02 * fbm1(loopT(t) * 0.5, 9), 0, 1.3);           // never still (fbm on loopT → identical at 0 and LAST)
}
/** per-disc radius factors (the Bust reads them): cheeks on ЩЁКИ / СЛАБЕЕ, forehead on ЛОБ */
export const cheekK = (t: number) => 1 + 0.2 * bump(t, T("face:ЩЁКИ"), 0.4) + 0.1 * bump(t, T("ratio:СЛАБЕЕ"), 0.4);
export const browK = (t: number) => 1 + 0.2 * bump(t, T("face:ЛОБ"), 0.4);
export const neckFlare = (t: number) => 0.2 * bump(t, T("heat:ШЕЯ"), 0.4);                 // thermal copy only

// ---- the camera: one continuous push-in to the payoff, a pull-back to CAM0 at LAST; drift on loopT ----
const CAM_KEYS: CamKey[] = [
  [0, CAM0],
  [C.click, { x: 540, y: 800, s: 1.02 }],
  [C.shutter2, { x: 540, y: 800, s: 1.035 }],
  [T("ratio:ПРИМЕРНО-0.3"), { x: 510, y: 800, s: 1.045 }],       // bust 30 px right: room for the bar
  [T("heat:ТЕПЛО-0.2"), { x: 560, y: 800, s: 1.05 }],            // bust left: the lens parks right
  [T("heat:ТЕПЛО+0.45"), { x: 545, y: 800, s: 1.053 }],          // dolly left with the lens's arrival
  [T("heat:ШЕЯ-0.1"), { x: 565, y: 800, s: 1.056 }],             // dolly right as it parks
  [T("heat:ПОЧТИ+0.4"), { x: 560, y: 800, s: 1.06 }],
  [T("chem:ХИМИЯ+0.3"), { x: 500, y: 795, s: 1.062 }],           // dolly left for the bubble
  [T("chem:СВЕТ"), { x: 505, y: 795, s: 1.068 }],
  [C.clockIn, { x: 540, y: 785, s: 1.072 }],
  [C.peak, { x: 540, y: 780, s: 1.08 }],                         // the payoff framing (plinth bottom → 1282 < 1285)
  [T("clock:УТРОМ+0.3"), { x: 540, y: 782, s: 1.078 }],
  [T("close1-0.3"), { x: 540, y: 785, s: 1.075 }],
  [LAST, CAM0],                                                  // the pull-back as the lamp comes on
];
const SHAKES: Shake[] = [[T("h2:ТЫСЯЧУ"), 2, 0.3], [C.click, 4, 0.4], [T("cam:КАМЕРА+0.35"), 3, 0.3], [T("cam:ДВАДЦАТЬ"), 2, 0.3], [C.shutter2, 3, 0.35], [T("face:ЛИЦО"), 2, 0.3],
  [C.boom, 3, 0.35], [T("heat:ШЕЯ"), 2, 0.3], [T("chem:МОЛЕКУЛЫ"), 2, 0.3], [C.spark, 5, 0.4], [C.peak, 4, 0.4], [T("clock:УТРОМ"), 3, 0.3], [C.on, 4, 0.4], [T("close1:КАМЕРА"), 3, 0.3], [T("close2:ТЕЛО"), 2, 0.3]];
const camBase = mkCam(CAM_KEYS, { drift: 0, shakes: SHAKES });
export function cam(t: number): Cam {
  const c = camBase(t), h = handheld(loopT(t), 0.5, 0.33, 2);                               // the channel's hand (01: drift 0.5, seed 2)
  return { x: c.x + h.dx / c.s, y: c.y + h.dy / c.s, s: c.s, r: (c.r || 0) + h.rot };
}

// ---- props (world x of the centre; every entry has an eBack overshoot, every exit is the reverse move) ----
const slide = (t: number, a: number, b: number, from: number, to: number) => lerp(from, to, eBack(prog(t, a, b), 1.2));
export function iconX(t: number): number {                                                  // the cooled camera, right of the bust
  if (t < T("face:ПРОЯВИЛОСЬ+0.5")) return slide(t, T("cam:КАМЕРА-0.05"), T("cam:КАМЕРА+0.35"), 1180, 865);
  return lerp(865, 1180, eIn(prog(t, T("face:ПРОЯВИЛОСЬ+0.5"), T("face:ПРОЯВИЛОСЬ+0.85"))));
}
export const iconOn = (t: number) => t >= T("cam:КАМЕРА-0.05") && t < T("face:ПРОЯВИЛОСЬ+0.85");
export const frost = (t: number) => prog(t, T("cam:КАМЕРА+0.35"), T("cam:КАМЕРА+0.95"));
export const lensOn = (t: number) => t >= C.lensIn && t < T("heat:ПОЧТИ+0.4");
export function lensX(t: number): number {                                                  // slide in → cover → drift to park → out; never still
  const x = keyed(t, [[C.lensIn, 1240], [T("heat:ТЕПЛО+0.5"), 540], [T("heat:ШЕЯ-0.1"), 760], [T("heat:ПОЧТИ"), 760], [T("heat:ПОЧТИ+0.4"), 1240]]);
  return x + 3 * fbm1(t * 1.1, 21) * prog(t, T("heat:ШЕЯ-0.1"), T("heat:ШЕЯ"));
}
export const bubbleOn = (t: number) => t >= T("chem:ХИМИЯ-0.05") && t < T("chem.e-0.05");
export const bubbleK = (t: number) => Math.max(0, pop(t, T("chem:ХИМИЯ-0.05"), 0.4, 1.3)) * (1 - eIn(prog(t, T("chem.e-0.3"), T("chem.e-0.05"))));
export const vfOn = (t: number) => t >= C.vfIn && t < T("close2:ЖИВЁТ+0.65");
export function vfX(t: number): number {                                                    // the viewfinder over the lit face
  if (t < T("close2:ЖИВЁТ+0.35")) return slide(t, C.vfIn, T("close1:КАМЕРА"), 1300, 540) + 2 * fbm1(t * 0.9, 31) * prog(t, T("close1:КАМЕРА"), T("close1:КАМЕРА+0.2"));
  return lerp(540, 1300, eIn(prog(t, T("close2:ЖИВЁТ+0.35"), T("close2:ЖИВЁТ+0.65"))));
}
export const hourHand = (t: number) => keyed(t, [[T("clock:ДОБРОВОЛЬЦЕВ"), 10], [C.peak, 16], [C.rewind, 16], [T("clock:УТРОМ+0.15"), 10]]);   // 16 → 10 = anticlockwise
export const minuteTurns = (t: number) => (hourHand(t) - 10) * 6;                                                                            // 6 turns over the sweep
```

### 7c. `Main.tsx` — scenes, header, post
```ts
const SCENES: Sc[] = [{ a: 0, b: TOTAL + 1, C: GlowScene }];     // one world, no cuts
const XF = 0.15; const PORTALS: number[] = []; const WHIPS: number[] = [];
const HEAD: [number, string][] = [[0, "ПОД ЛАМПОЙ · СВЕЧЕНИЕ ТЕЛА"]];   // one entry at 0 → k = 1, never pops (01's Header rule)
// post, in this order after the scene:
<Flash t={t} at={C.spark} d={0.25} color="#ff9a8a" o={0.2} />                 // the only screen flash: coral, the photon
<LightLeak t={t} at={C.rewind} d={0.5} hue="255,200,120" />                   // the rewind cue
<Vignette o={0.22 * lamp(t)} color="60,40,20" />                              // lit vignette …
<Vignette o={0.2 * (1 - lamp(t))} color="20,30,70" />                         // … cross-faded to the camera's-view vignette by lamp
<Header t={t} />
{OV …}                                                                          // §7d
<Subs t={t} hide={t < T("cam-0.05") || t >= T("close2.e+0.15")} />
<Grain frame={frame} o={0.05 + 0.02 * (1 - lamp(t))} />                       // 0.05 lit → 0.07 dark (the §10 ceiling)
<Audio src={staticFile("mix1.wav")} />
```
Inside `GlowScene` (scenes.tsx): `const L = lamp(t), G = glow(t), c = cam(t), tt = loopT(t);` grade on the world group `mixed by L`: lit `{warm: 0.2, sat: 1.08,
contrast: 1.04}` ↔ dark `{warm: −0.15, sat: 1.0, contrast: 1.05, lift: 0.03}`; layers `layerT(c, 0.32 | 0.62 | 1.0 | 1.35, REF)` per STYLE §3; the HUD (brackets at
(80, 300) (960, 300) (80, 1250) (960, 1250), `Stars n 70 r [0.6, 1.4] o 0.3 color "#c9d4ff" flares 0 area [60, 280, 960, 1270]`) is screen-space at opacity `1 − L`,
drawn after the world group, with the shutter blink at `C.shutter2` (2 frames: strokes 3 → 6 px, noise seed frozen) and the bracket pulses at `close1:ВИДИТ#2` and
`close2:СВЕТИТСЯ`; the viewfinder = a world rect `vfX ± 210 × 560–1040` inside which the bust/wall are drawn again with `lampEff = 0` (clipPath), plus its own
brackets and noise; `Bust mode="lit" | "dark" | "thermal"` as STYLE §5 with `cheekK / browK` on the disc radii and `glow·(1 − L)` on the bloom group; the thermal copy
only inside the lens clip (`mode="thermal"`, `neckFlare(t)` on the neck blobs); the icon, the lens, the bubble and the viewfinder are stage-layer world objects.

### 7d. Overlays (`OV`, Main.tsx shape; `hard` = no fade window; `ctr(w) = (1080 − w)/2 − 30`)
```ts
type Ov = { at: number; until: number; x: number; y: number; w: number; h: number; name: string; hard?: boolean; el: (t: number, o: number) => React.ReactNode };
// panel() / plate() / Glyphs / ChipX / Stamp2 copied from 01-video Main.tsx; ChipX gets an optional `xAt` (default at+0.25) for the ✗
const OV: Ov[] = [
  { name: "HOOK",       at: 0,                             until: T("cam-0.05"),                x: ctr(840), y: 290,  w: 840, h: 280, el: (t, o) => <HookCard3 t={t} o={o} /> },                 // 3 lines; line 2 pulse at h2:ТЫСЯЧУ-0.05
  { name: "RING",       at: T("cam:СОБИРАЛА-0.1"),         until: T("face:ПРОЯВИЛОСЬ+0.45"),    x: 260,      y: 290,  w: 560, h: 130, el: (t, o) => <RingCard t={t} o={o} /> },                  // dial + «20 МИНУТ» (glyphs at cam:ДВАДЦАТЬ-0.05) + «УСКОРЕНО»; slides down in / up out
  { name: "CHIP-TIME",  at: T("cam:МИНУТ-0.05"), hard: true, until: C.clockIn,                  x: 80,       y: 1180, w: 150, h: 50,  el: (t) => <ChipTime t={t} at={T("cam:МИНУТ-0.05")} /> },   // «10:00»; CLOCK takes over on the next frame
  { name: "BAR",        at: T("ratio:ПРИМЕРНО-0.15"),      until: T("heat-0.5"),                x: 95,       y: 410,  w: 40,  h: 770, el: (t, o) => <BarRail t={t} o={o} /> },                   // rail, «ГЛАЗ» line y 440, break y 790, body tick y 1150, fill
  { name: "BAR-EYE",    at: T("ratio:ПРИМЕРНО+0.3"),       until: T("heat-0.5"),                x: 150,      y: 415,  w: 150, h: 50,  el: (t, o) => <BarLabel t={t} at={T("ratio:ПРИМЕРНО+0.3")} o={o} text="ГЛАЗ" dot={GOLD} kick={T("ratio:ГЛАЗ")} /> },
  { name: "BAR-BODY",   at: T("ratio:ПРИМЕРНО+0.15"),      until: T("heat-0.5"),                x: 150,      y: 1120, w: 150, h: 50,  el: (t, o) => <BarLabel t={t} at={T("ratio:ПРИМЕРНО+0.15")} o={o} text="ТЕЛО" dot={CORAL} kick={T("ratio:СЛАБЕЕ")} /> },
  { name: "BAR-COUNT",  at: T("ratio:ПРИМЕРНО+0.05"),      until: T("heat-0.5"),                x: 140,      y: 745,  w: 260, h: 90,  el: (t, o) => <div style={{ ...panel(), borderWidth: 5, borderRadius: 16, padding: "10px 18px", opacity: o, scale: String(pop(t, T("ratio:ПРИМЕРНО+0.05"), 0.3) * (1 + 0.1 * impulse(t, C.boom, 1, 6, 6, 0.4))) }}>
      <Counter t={t} keys={[[T("ratio:ПРИМЕРНО+0.05"), 1], [C.boom, 1000]]} ease={eOut} size={50} color={GOLD_L} fmt={(v) => (v >= 999.5 ? "≈ ×1000" : "×" + Math.round(v))} /></div> },
  { name: "CHIP-AURA",  at: T("heat-0.5"),                 until: T("heat:ШЕЯ-0.2"),            x: 120,      y: 330,  w: 240, h: 70,  el: (t, o) => <ChipX t={t} at={T("heat-0.5")} o={o} text="АУРА?" w={240} /> },
  { name: "CHIP-HEAT",  at: T("heat:ТЕПЛО-0.1"),           until: T("heat:СВЕТИТСЯ+0.8"),       x: 400,      y: 330,  w: 260, h: 70,  el: (t, o) => <ChipX t={t} at={T("heat:ТЕПЛО-0.1")} xAt={T("heat:СВЕТИТСЯ")} o={o} text="ТЕПЛО?" w={260} /> },
  { name: "LBL-BUBBLE", at: T("chem:ХИМИЯ+0.2"),           until: T("chem:СВЕТ-0.2"),           x: 80,       y: 870,  w: 300, h: 56,  el: (t, o) => <div style={{ ...plate(), fontSize: 28, padding: "8px 22px", opacity: o, scale: String(pop(t, T("chem:ХИМИЯ+0.2"), 0.3)) }}>ВНУТРИ ЩЕКИ</div> },
  { name: "CHIP-MECH",  at: T("chem:СВЕТ-0.05"),           until: T("clock:ДОБРОВОЛЬЦЕВ+0.2"),  x: 70,       y: 870,  w: 330, h: 100, el: (t, o) => <MechChip t={t} at={T("chem:СВЕТ-0.05")} o={o} /> },   // «ОБМЕН ВЕЩЕСТВ» / «→ СВЕТ» (gold arrow svg)
  { name: "CLOCK",      at: C.clockIn, hard: true,         until: T("close1-0.3"),              x: 220,      y: 290,  w: 640, h: 276, el: (t) => <ClockCard t={t} /> },                        // chip flight + wipe + dial + readout + stamp + tag + small print (§3)
  { name: "EYE-X",      at: T("close1:ГЛАЗ+0.1"),          until: T("close1:КАМЕРА-0.05"),      x: 110,      y: 790,  w: 150, h: 90,  el: (t, o) => <EyeX t={t} at={T("close1:ГЛАЗ+0.1")} xAt={T("close1:ГЛАЗ+0.3")} o={o} /> },
  { name: "END",        at: C.end, hard: true,             until: T("close2.e+0.16"),           x: ctr(840), y: 290,  w: 840, h: 270, el: (t) => {
      const x = prog(t, T("close2.e"), T("close2.e+0.15")), kin = eBack(prog(t, C.end, C.end + 0.25), 1.3);
      return <div style={{ ...panel(), width: 840, opacity: clamp(kin * 3) * (1 - x), scale: String(kin * (1 - 0.1 * x)), padding: "14px 10px 16px" }}>
        <Glyphs t={t} at={C.end} text="ВАШЕ ТЕЛО СВЕТИТСЯ," size={60} color={LIGHT} stagger={0.03} /><br /><Glyphs t={t} at={T("close2:ЖИВЁТ+0.1")} text="ПОТОМУ ЧТО ЖИВЁТ." size={70} color={GOLD_L} stagger={0.03} /></div>; } },
  { name: "HOOK2",      at: C.swap, hard: true,            until: TOTAL + 1,                    x: ctr(840), y: 290,  w: 840, h: 280, el: () => <HookCard3 t={0} o={1} /> },               // t = 0 → identical to frame 0
];
// render (as 01): const o = b.hard ? (t >= b.at && t <= b.until ? 1 : 0) : b.at <= 0 ? (t <= b.until ? 1 : 0) : win(t, b.at, b.until, 0.18);
// HOOK keeps 01's own fade: b.el(t, b.name === "HOOK" ? 1 - prog(t, b.until - 0.2, b.until) : o). Components with a slide exit (RING, chips, labels, CLOCK) do it inside `el`
// over the last 0.25 s before `until` and pass `o` through for the lint window.
```
`HookCard3` = 01's `HookCardL` with three lines (64 cream / 76 #ffd56a / 62 #ffd56a; line 2 gets `scale 1 + 0.1·bump(t, T("h2:ТЫСЯЧУ-0.05"))` and a text-shadow bloom);
`RingCard` = cream plate 560 × 130 with the dial (track, 20 ticks, `GP` arc `p = ringP(t)`, hand at `ringStep(t)`, shutter glyph), «20 МИНУТ» via `Glyphs` from `cam:ДВАДЦАТЬ-0.05`,
«УСКОРЕНО» 24 charcoal 0.7; `ChipTime` = cream chip «10:00» 30 px with a camera-corner glyph; `BarRail` / `BarLabel` per §3; `MechChip` = two-line plate with 01's arrow svg
in gold; `ClockCard` per §3 (readout `Counter` linear `fmt h => Math.floor(h + 1e-6) + ":00"`, the rewind `Counter` from `C.rewind`, `Stamp2`-style stamp «ЯРЧЕ ВСЕГО ≈ 16:00»
at `C.peak − 0.05`, tag «← УТРО» pop at `C.rewind`); `EyeX` = cream plate with `EyeIcon size 60 open={blink(loopT(t), 5)}` + `Xmark` drawn from `xAt` over 0.18 s.

### 7e. Lint key boxes (`keyBoxes(t)` and `worldTexts(t)` in scenes.tsx; screen coords via `proj(cam(t), …)`)
```ts
type Box = [number, number, number, number];
const box = (c: Cam, x0: number, y0: number, x1: number, y1: number): Box => { const a = proj(c, x0, y0), b = proj(c, x1, y1); return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])]; };
export function keyBoxes(t: number): [string, Box][] {
  const c = cam(t);
  const out: [string, Box][] = [["BUST", box(c, 300, 590, 780, 1226)], ["LAMP", box(c, 145, 580, 285, 700)]];      // the bust incl. plinth; the lamp's bell
  if (iconOn(t)) { const x = iconX(t); out.push(["CAMICON", box(c, x - 115, 1040, x + 75, 1190)]); }               // body + lens barrel + fins
  if (lensOn(t)) { const x = lensX(t); out.push(["LENS", box(c, x - 190, 600, x + 190, 1080)]); }                   // the frame only; its label is a text (below)
  if (bubbleOn(t)) out.push(["BUBBLE", box(c, 75, 560, 355, 840)]);
  if (vfOn(t)) { const x = vfX(t); out.push(["VF", box(c, x - 210, 560, x + 210, 1040)]); }
  return out.filter(([, b]) => b[0] < 1080);                                                                         // a prop still off the right edge does not count
}
/** world-anchored text plates (merged into debug1's `texts`) */
export function worldTexts(t: number): [string, Box][] {
  const c = cam(t), out: [string, Box][] = [];
  if (t >= T("face:ЩЁКИ-0.05") && t < T("ratio:ПРИМЕРНО+0.3")) out.push(["LBL-CHEEKS", box(c, 745, 810, 907, 870)]);
  if (t >= T("face:ЛОБ-0.05") && t < T("ratio:ПРИМЕРНО+0.3")) out.push(["LBL-BROW", box(c, 745, 640, 895, 700)]);
  if (lensOn(t)) { const x = lensX(t); if (x < 1000) out.push(["LBL-THERMAL", box(c, x - 120, 530, x + 120, 580)]); }
  return out;
}
// Main.tsx: export function debug1(t: number) { return { texts: [...OV.filter((b) => t >= b.at + 0.2 && t <= b.until - 0.2).map((b) => [b.name, [b.x, b.y, b.x + b.w, b.y + b.h]] as [string, number[]]), ...worldTexts(t)], objs: keyBoxes(t) }; }
```
Expected screen boxes to sanity-check (drift excluded): frame 0 BUST [300, 590, 780, 1226], LAMP [145, 580, 285, 700] (hook card bottom 570: 10 px clear; 5.6 px at
s 1.02); at cam 540/1.035 (face) BUST [292, 583, 788, 1241], CAMICON [757, 1048, 954, 1204] (≤ 960), LBL-BROW [752, 634, 907, 697], LBL-CHEEKS [752, 810, 920, 872];
at cam 510/1.045 (ratio) BUST [321, 581, 822, 1245], LAMP [159, 570, 305, 696] → BAR-COUNT [140, 745, 400, 835] clear of both; at cam 565/1.056 (lens parked) LENS
[546, 589, 946, 1096], LBL-THERMAL [619, 515, 873, 568], chips bottom 400; at cam 500/1.062 (bubble) BUBBLE [88, 550, 386, 848], ear edge 398; at cam 540/1.08/y 780
(peak) BUST [281, 595, 799, 1282] (plinth bottom < 1285), CLOCK bottom 566; at cam 540/≈1.085 (close1) VF [≈ 312, 550, 768, 1071], EYE-X [110, 790, 260, 880], LAMP
[111, 572, 263, 702]. No hero box ever enters y 1285–1530.

## 8. Strips and checks the animator owes before gate 2
- Strips (6 × 0.1 s) at: the first 0.5 s (the rim creeping, the card static, no pop on the pill); `C.click` (bulb grey, pool gone, wall night, brackets on, bloom unchanged
  at 0.35 — all in ≤ 3 frames, no white flash, the hook card still up); the icon's landing (overshoot, contact shadow, the glance); the frost; `C.shutter1` (glass blink + the
  first tick); the ring's last 0.3 s (the dots stop accumulating on the frame the arc closes, then the shutter blink + cores); the icon's exit; «ЩЁКИ» / «ЛОБ» pops with their
  disc pulses; `C.boom` (fill at the «ГЛАЗ» line + «≈ ×1000» in the same frame); the lens's entry → cover → park (no pop, no still frame, the dots hidden by the clip);
  `heat:ШЕЯ` (the flare inside the lens, the real neck nearly dark outside); the ✗ on «ТЕПЛО?»; the bubble pop + the dolly; `C.spark` (photon, coral flash, bloom pulse);
  `C.clockIn` (the chip in flight, the plate wiping, never two «10:00»); `C.peak` (16:00 on the dial and the readout + the stamp + the peak glow in one frame); `C.rewind`
  (leak + anticlockwise snap + tag + the readout counting down); `C.on` (3 frames, bloom gone, dust back, no card); the viewfinder's landing (bloom visible only inside);
  `close2:ЖИВЁТ` (VF pulse + card); `C.swap` ± 0.2 (never both cards; the VF already gone).
- `tools/luma.py` on the final MP4 (day gate): avg ≥ 100 (design ≈ 108), first 1.5 s ≥ 100 (≈ 120); the click frame ≥ 25 % darker than frame 0 (≈ 89 vs 132, with the
  velvet hook card still up); every dark still ≥ 85 (design 95–105; the 1.3 s between the click and the ring card is the darkest stretch ≈ 89 — the knobs are the night wall
  gradient toward `#7c86ad` and the wall spill 0.25 → 0.4, never the velvet, never the hair); the face box at `C.peak` ≥ 20 luma points brighter than at `УТРОМ+0.8`.
- Layout lint at 10 fps (no cuts to skip; skip ±0.2 s around `C.click` and `C.on` only): HOOK vs LAMP bell (570 vs 575.6 at s 1.02); RING vs head (420 vs 584); BAR-COUNT vs
  head (400 vs 415) and vs LAMP (745 vs 696); chips vs LBL-THERMAL (400 vs 515); LENS right edge ≤ 946; BUBBLE vs ear (386 vs 398); LBL-BUBBLE/CHIP-MECH vs BUBBLE
  (870 vs 848); CLOCK vs head (566 vs 595); EYE-X vs LAMP (790 vs 702) and vs VF (260 vs 312); END/HOOK2 vs head (570 vs ≥ 588); every box inside x 60–960, y 280–1260;
  no bust box inside y 1285–1530 (worst case 1282 at the peak).
- Number table: hook «≈ В 1000 РАЗ» (↔ «в тысячу раз»), «20 МИНУТ» (↔ «двадцать минут», glyphs on the word), counter «×1 → ≈ ×1000» (↔ «примерно в тысячу раз»),
  chip «10:00» (↔ «около» the session, FACTS row 2), readout «10:00 … 16:00 … 10:00» + stamp «ЯРЧЕ ВСЕГО ≈ 16:00» (↔ «ярче всего — около четырёх часов дня»), «← УТРО»
  (↔ «утром»), «ПЯТЬ ДОБРОВОЛЬЦЕВ» as a word; no other digit anywhere (the thermal legend has none, the bar has none, no «−120», no «2009»).
- One meaning per colour on real frames: coral only on the bloom, its spill and pool, the photon, the body tick and the level dot; the five thermal stops only inside the
  lens and its legend; cool `#dfefff` / `#9fb4ff` only on the camera's view, the frost, the viewfinder and the rims; every ✗ charcoal; no theme RED / GRN / CY; the hook
  card's gold, the lamp's cream and the bloom's coral distinct side by side on the frame-0 and beat-5 stills.
- Figure/ground in the dark: silhouette vs night wall ≥ 50 luma points on the bust box; the plinth rim readable at 360 px; coral cheeks vs the skin silhouette ≥ 90 points.
- Truth pass per claim: «Полная темнота» = lamp 0 and the camera's view; «собирала свет двадцать минут» = the arc fills over 2.8 s with «УСКОРЕНО» on the card and the dots
  accumulate; «проявилось лицо» = the cores + the full dot set on that frame; «щёки и лоб» = those discs pulse, the neck stays faint; «в тысячу раз слабее» = the counter
  lands on the word with the fill at the eye's line and a broken axis; «не тепло … шея почти не светится» = the thermal neck is the hottest band while the photon neck is
  the faintest disc; «молекулы … отдают свет» = one squash, one photon, one soft flash; «ярче всего — около четырёх» = 16:00 on dial + readout + the peak glow in one frame;
  «утром — слабее» = the tagged rewind to 10:00 and a visibly dimmer face; «Глаз этого не видит — камера видит» = the lamp ON drowns the bloom, the viewfinder shows it;
  «потому что живёт» = the bloom pulses as the card lands, and the lamp begins to dim again so the loop promises the same thing it just explained.
- Pixel diff frame 0 vs the last frame ≤ 1 % (grain and sensor noise excluded).


