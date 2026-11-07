# STORYBOARD: 01-lycurgus — Стеклу шестнадцать веков. Оно меняет цвет. (trend-week, ru)

Inputs: `SCRIPT.md` (11 segments: h1 h2 no in hair light see y1990 unk rec q), `BRIEF.md`, `STYLE.md`, `C:\2d\niches\trend-week\NICHE.md`.
Template: this project's `src/` (math-universe structure: `PaperScene` iris, `Main.tsx` SCENES/PORTALS/HEAD/OV, `ui.Lens`, `fx/`).
No audio yet: every time below is a word anchor (`T("seg:WORD±s")`, `T("seg.e")`) or a `C.<cut>` derived from one. Seconds in brackets are
composition estimates (≈2.5 words/s + the spec pauses, ≈ 34–39 s comp → ≈ 28–31 s final) for reading only; nothing is hard-coded to them.

One world: a cream plaster wall, a dark-blue velvet table, one gilt anglepoise lamp, the cage cup. Everything the viewer sees change is
the lamp moving (θ, 0 = front, 180 = behind) — except inside the glass (the same lamp, drawn small) and in the furnace (the mouth is the light).
Three components, five scenes: `TableScene` (modes hook · lens · loop, picked from `t` like `PaperScene` picks hook/lev/paper3),
`InsideScene`, `FurnaceScene`.

## 0. Fix to STYLE.md beat timings (the script moved under it)
- No «Так как?» beat. «Как?» is the first word of `in`; the chip «КАК?» pops on `in:КАК` in the chip row and the dive goes on `in:ВНУТРИ`.
- The stamp «IV ВЕК · РИМСКИЕ МАСТЕРА» has its word again: `no:ЧЕТВЁРТЫЙ` (`no` = «Не краска, не подделка: римское стекло, четвёртый век.»); the chips are «КРАСКА?» «ПОДДЕЛКА?» (`no:КРАСКА`, `no:ПОДДЕЛКА`), not «ПОДСВЕТКА?».
- The hair is its own segment `hair` («Примерно в тысячу раз тоньше волоска.»): hair lands on `hair:ВОЛОСКА`, the ding on `hair:ТЫСЯЧУ` gets a picture (the dots pulse).
- The honesty verdict `unk` comes AFTER the payoff and stays on the table (scene 4, lens mode), not in the furnace; it is not a re-hook. `rec` is the re-hook (the whip to the furnace).
- `rec` = «Точно повторить удалось только сейчас — шестнадцать веков спустя.»: three batches ✗ on ТОЧНО / ПОВТОРИТЬ / УДАЛОСЬ, the fourth stops on СЕЙЧАС, self-strikes on ВЕКОВ → СПУСТЯ. No chip «16 ВЕКОВ СПУСТЯ» (the script dropped it); the stamp is a two-line stamp «ОКТЯБРЬ 2026» / «ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ».
- Loop (STYLE §6 rewritten): the lamp goes behind on `q:СЛУЧАЙНОСТЬ` (with the end card), returns to the front on `q:ЧТО` (≈1.0 s) and holds jade through the tail; at `q.e` the end card leaves in 0.15 s and the hook card appears on the next frame (never both). No cross-fade, no "last 0.6 s" pass.
- Lens mode camera is `{x: 800, y: 800, s: 1.0}` (cup at screen x ≈ 280) so the «1990» stamp fits right of the cup under the lens (§3).
- ≈ 31 s final; payoff «девяностом» ≈ 68 %.

## 1. Frame 0 (= thumbnail, = last frame)
Camera `CAM0 = {x: 540, y: 800, s: 1.0}`, θ = 0. What a stranger sees at 360 px: a big jade-green bell-shaped cup with gold rim and foot
(546 px tall, centred, lip at y 574, foot on the velvet at 1120), a cartoon king in vines on its belly; a brass lamp at the lower left,
head at (250, 1130), bulb glowing, its beam on the cup's left side, a soft cup shadow on the cream wall behind-right; a dark-blue velvet band
(y 1000–1480) with a wood edge below; the header pill «КУБОК ЛИКУРГА · IV ВЕК» (y 186–230, static, no pop on frame 0); the hook card in the
top slot (x 90–930, y 290–560): «СТЕКЛУ 16 ВЕКОВ.» cream 64 px / «ОНО МЕНЯЕТ ЦВЕТ.» gold-light 72 px (measure: ≤ 820 px wide), velvet panel,
gold border, static from frame 0 with the 0.04 breathing for 1.2 s. Subtitles hidden. Eye path: cup → bulb → card.
Motion in the first 0.5 s: the lamp head starts along its arc at 0.2 s (θ = 180·eInOut(prog(t, 0.2, T("h2:ЦВЕТ+0.3")))), the beam and the
wall hot spot travel with it; dust in the beam fades in 0 → 0.55 over the first 0.4 s. Luma ≈ 150 (STYLE §1 budget); first 1.5 s stays ≥ 100
because the wall hot spot (bright) appears behind the cup as the cup goes ruby (dark).

## 2. Scene list
| # | scene / mode | from → to | world | the verb the viewer must see | camera (x, y, s; drift / impulse) | continuity |
|---|---|---|---|---|---|---|
| 1 | TableScene **hook** [0–9 s] | 0 → `C.dive` = T("in:ВНУТРИ+0.15") | table, lamp, cup | h1: **lamp slides** on its arc from 0.2 s · h2: **cup flips** jade → ruby (θ reaches 180 at `h2:ЦВЕТ+0.3`; the red pool blooms on the velvet, the hot spot appears behind the cup) · no: **lamp swings back** 180 → 0 on «не краска» (cup goes jade under the chip — the colour is the glass's own), **forward again** 0 → 180 on «не подделка: римское стекло» (ruby), holds; chips pop and get a charcoal ✗ each; stamp «IV ВЕК · РИМСКИЕ МАСТЕРА» slams on ЧЕТВЁРТЫЙ · in: chip «КАК?» on the red cup, then the **camera dives** into the lit spot on the cup wall, world (690, 760) | `mkCam([[0, CAM0], [T("no"), {540, 800, 1.03}], [T("in:ВНУТРИ-0.85"), {560, 790, 1.1}], [C.dive, {690, 760, 17}]], {drift: 0.5, seed: 2, shakes: [[T("no:ЧЕТВЁРТЫЙ"), 5, 0.4]]})`; chip ✗ = roll impulse 0.3° on the chip, not the camera | θ keys: `[[0.2, 0], [T("h2:ЦВЕТ+0.3"), 180], [T("no:КРАСКА-0.2"), 180], [T("no:КРАСКА+0.6"), 0], [T("no:ПОДДЕЛКА-0.05"), 0], [T("no:ПОДДЕЛКА+0.85"), 180]]` (if ПОДДЕЛКА−0.05 < КРАСКА+0.6 after measuring, end the first leg at ПОДДЕЛКА−0.1). Lamp at BACK (790, 600), cup ruby, at the dive. The hot spot at (690, 760) is a specular that brightens from `in:КАК` (the viewer knows where the dive goes) |
| 2 | InsideScene [9–17 s] | `C.dive` → `C.out` = T("see-0.1") (drawn from C.dive−0.9 under the iris, until C.out+1.4) | inside the glass wall: a vertical slab x 330–750, y 420–1260, rose-cream field (k3 = 1, we dove into a red cup); eye icon left (150, 840); lamp icon right (880, 840) | in: **dots pop** on ЧАСТИЦЫ (56 silver-gold dots, stagger 0.012 s, only at y 560–1260, none within ±14 px of y 840) · hair: on ТЫСЯЧУ the **dots pulse** (scale 1 → 1.3 → 1 in 0.25 s, the ding's picture); on ВОЛОСКА a brown **hair band drops in** (y −200 → 340 centre, 0.45 s, `squash` on landing, camera impulse 6 px), bigger than the frame, the dots tiny beside it · light: the **lamp icon slides** right → left along `[(880,840),(760,1120),(470,1200),(190,1140)]` on СПЕРЕДИ−0.1 → СВЕТ+0.3, field tint rose → jade-cream (k3 1 → 0); on ОТРАЖАЕТСЯ−0.2 a cream beam draws lamp → dot (520, 820), then **bounces to the eye in jade** (done by ЗЕЛЁНЫЙ+0.1); on СЗАДИ−0.1 the lamp icon slides back right (k3 → 1), the jade arrow un-draws (p 1 → 0, 0.3 s); on НАСКВОЗЬ−0.1 a ruby beam **passes between the dots** from the right lamp straight to the eye (done by КРАСНЫЙ+0.1) · see: the camera pushes into the dot cluster while the iris closes | `mkCam([[C.dive-0.8, {540, 840, 4}], [T("in:ЧАСТИЦЫ-0.1"), {540, 840, 1.0}], [T("light:КРАСНЫЙ"), {540, 840, 1.03}], [C.out+1.0, {520, 840, 3.2}]], {drift: 0.45, seed: 13, shakes: [[T("hair:ВОЛОСКА+0.15"), 6, 0.5]]})`; the dolly continues through both portals (PlanetScene pattern) | Glass bubbles r 20–40 on the slab give the s 4 → 1 frames content. The lamp icon = the table lamp at 0.45 scale (same shade, same bulb glow). Eye blinks (`blink`). Nothing leaves: hair stays as the horizon until the iris closes over it |
| 3 | TableScene **lens** [17–27 s] | `C.out` → `C.furnace` = T("rec-0.12") | table again, camera parked right so the cup stands at screen x 75–485; lamp at BACK, cup ruby for the whole scene (the dots are only ever seen in red light) | see: iris closes onto the cup wall, the camera pulls back (1.0 s); the **timeline rail draws itself** (ВЕКОВ−0.2 → +0.3), stations ГЛАЗ · ЛУПА · МИКРОСКОП · an empty fourth disc; the pointer walks ГЛАЗ (ВЕКОВ) → ЛУПА (НИКТО) → МИКРОСКОП (ВИДЕЛ); the **Lens pops over the cup wall** at НИКТО−0.2 (s 3, blurred empty rose field), **jumps to s 14** at ВИДЕЛ+0.05 (pop 1.08): still nothing; plate «НЕ ВИДНО» pops at НИКТО+0.15, re-pops at ВИДЕЛ+0.1 and РАЗГЛЯДЕЛИ+0.1 · y1990: pointer walks to the empty fourth station on РАЗГЛЯДЕЛИ, the lens jumps to s 40 (still empty, blurred); on **ДЕВЯНОСТОМ the dots snap into view** inside the lens (opacity 0 → 1 in 0.12 s), `Flash #fff1c4 o 0.45 d 0.3`, camera impulse 8 px, stamp «1990» slams under the lens, the station «1990» lights up gold-light; on ЭЛЕКТРОННЫМ the tool name «ЭЛЕКТРОННЫЙ / МИКРОСКОП» appears under that station · unk: rail leaves; chip «КАК ДЕЛАЛИ РИМЛЯНЕ?» pops on КАК; the velvet plate «НЕИЗВЕСТНО» **slams below it** on НЕИЗВЕСТНО (impulse 4 px) · last 4 frames: the lamp head **sweeps right across the lens** (790,600) → (1150, 850) and the camera whips after it | `mkCam([[C.out, {690, 760, 17}], [C.out+1.0, {800, 800, 1.0}], [T("unk"), {800, 800, 1.04}], [C.furnace-0.22, {800, 800, 1.04}], [C.furnace, {1600, 800, 1.04}]], {drift: 0.5, seed: 2, shakes: [[C.snap, 8, 0.5], [T("unk:НЕИЗВЕСТНО"), 4, 0.4]]})` | Same cup, same lamp side (BACK, screen (530, 600)); the hot spot (690, 760) the iris closes onto is where the lens looks (screen (430, 760), gold dashed leader to the lens rim). The lamp is re-parented behind → near group on the first sweep frame, when its head has zero overlap with the cup (strip it). Lens drawn inside TableScene's svg (scene element), so the lamp can cross it |
| 4 | FurnaceScene [27–31 s] | `C.furnace` → `C.loop` = T("q-0.1") | a workshop: the same cream wall with soot toward a brick furnace arch (x 80–420, y 420–900), its mouth the light; wood-and-stone bench y 900–1100 running right; header «ШЕФФИЛД · 2026» | **batches glide** out from behind the arch along the bench (r 70 hot pucks with paper tags, `along`, constant speed 355 px/s): puck 1 crosses x 620 on ТОЧНО, puck 2 on ПОВТОРИТЬ, puck 3 on УДАЛОСЬ — each gets a charcoal ✗ stamped on its tag at x 620 and keeps gliding off the right edge; puck 4 appears on ТОЛЬКО−0.3 and **decelerates to a stop at (620, 980)** on СЕЙЧАС−0.05 — the ✗ never comes; stamp «ОКТЯБРЬ 2026 / ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ» slams on СЕЙЧАС; the glow **cools** (orange → clear amber) СЕЙЧАС → ШЕСТНАДЦАТЬ; then with no lamp moving it **self-strikes** ВЕКОВ−0.1 → СПУСТЯ+0.25: left half jade (`cupGreen`), right half ruby — the dichroic pair in one object; holds to the whip | `mkCam([[C.furnace-0.02, {-260, 820, 1.0}], [C.furnace+0.22, {540, 820, 1.0}], [T("rec:СЕЙЧАС"), {560, 830, 1.05}], [C.loop-0.22, {580, 840, 1.1}], [C.loop, {-300, 840, 1.1}]], {drift: 0.6, seed: 5, shakes: [[T("rec:ТОЧНО"), 3], [T("rec:ПОВТОРИТЬ"), 3], [T("rec:УДАЛОСЬ"), 3], [T("rec:СЕЙЧАС"), 5, 0.4]]})` | Entered and left by whips (the lamp's new position is allowed to change behind them). Light from the upper-left mouth: every object lit left, warm shadow right. The ✗ is the same charcoal two-stroke as the chips' |
| 5 | TableScene **loop** [31–34 s] | `C.loop` → TOTAL+1 | table, CAM0 geometry, lamp FRONT, cup jade — frame 0 without the hook card | q: the whip lands; on СЛУЧАЙНОСТЬ the end card lands (Letters) and the **lamp slides behind** (ruby by СЛУЧАЙНОСТЬ+0.85); holds; on ЧТО the **lamp returns to the front** (jade by ЧТО+0.95) and **holds still** for the tail; at `q.e` the end card leaves in 0.15 s (scale → 0.9, opacity → 0), the hook card is on screen from the next frame, dust fades out over the last 0.4 s | `{x: 540 + 760·(1 − eOut(prog(t, C.loop−0.02, C.loop+0.22))), y: 800, s: 1.0}` + `handheld(t − TOTAL, 0.5, 0.33, 2)` — the hook's own drift re-timed so it equals `handheld(0)` on the last frame | θ keys `[[C.loop, 0], [T("q:СЛУЧАЙНОСТЬ-0.05"), 0], [T("q:СЛУЧАЙНОСТЬ+0.85"), 180], [T("q:ЧТО-0.05"), 180], [T("q:ЧТО+0.95"), 0]]`. Last frame == frame 0: same θ, same camera (incl. drift value), pill at scale 1 (see §6), subs hidden, dust at 0 |

Change cadence (≤ 4 s between picture changes): lamp 0.2 s · flip ≈1.3 · swing back ≈2.9 · swing forward ≈3.7 · stamp ≈5.5 · chip КАК ≈6.4 · dive ≈7.2 · dots ≈8.0 · pulse ≈9.8 · hair ≈11 · arrow 1 ≈13 · arrow 2 ≈15 · iris out ≈16.7 · rail/lens ≈17.5 · lens jump ≈18.8 · pointer ≈20 · snap ≈22.2 · verdict ≈25.8 · whip ≈26.7 · ✗ ×3 · stop ≈28.5 · strike ≈30 · whip ≈31 · card + lamp ≈31.1 · lamp back ≈33.

## 3. Overlays
Slots: header pill y 186–230 · top card y 290–560 · chip row y 330–400 · stamp row (scene 1) y 430–530 · label band (scene 2) y 440–520 · rail y 300–450 · bottom plate y 1120–1260. All boxes inside x 60–960, y 280–1260; subtitles own y 1330–1520 (hidden `t < T("no-0.05")` and `t ≥ T("q.e+0.15")`); the right strip (x > 975) and y > 1550 stay empty. `ctr(w) = (1080 − w)/2 − 30`.

| name | at | until | slot / box (x, y, w, h) | text exactly as drawn | enter / exit |
|---|---|---|---|---|---|
| HOOK | 0 | T("no:КРАСКА-0.35") | top card · 90, 290, 840, 270 | «СТЕКЛУ 16 ВЕКОВ.» (cream 64) / «ОНО МЕНЯЕТ ЦВЕТ.» (#ffd56a 72) | static from frame 0, breathing 0.04 for 1.2 s; fade 0.2 (Main's HOOK rule) |
| CHIP-PAINT | T("no:КРАСКА-0.1") | T("in:КАК-0.4") | chip row · 120, 330, 240, 70 | «КРАСКА?» (34, charcoal on cream plate) | pop 0.35; charcoal ✗ draws itself at +0.25 over 0.18 s (GP p), −6°, overshoots the plate 10 px; roll impulse 0.3° |
| CHIP-FAKE | T("no:ПОДДЕЛКА-0.1") | T("in:КАК-0.4") | chip row · 400, 330, 300, 70 | «ПОДДЕЛКА?» | same |
| STAMP-IV | T("no:ЧЕТВЁРТЫЙ-0.05") | C.dive−0.15 | stamp row · 100, 430, 880, 100 | «IV ВЕК · РИМСКИЕ МАСТЕРА» (`StampFx c="#d9891c"` size 46, measure ≤ 840) | slam + dust ring; fade 0.15 |
| CHIP-HOW | T("in:КАК-0.05") | C.dive−0.1 | chip row · 410, 330, 260, 80 | «КАК?» (46) | pop 0.3 (s 1.9); fade 0.15 |
| LBL-PART | T("in:ЧАСТИЦЫ-0.05") | T("light:СПЕРЕДИ-0.3") | label band · 160, 440, 760, 80 | «ЧАСТИЦЫ ЗОЛОТА И СЕРЕБРА» (30, cream plate, charcoal border 4) | Letters stagger 0.02; fade 0.18 |
| LBL-HAIR | T("hair:ВОЛОСКА+0.2") | C.out−0.2 | on the band's lower edge · 90, 350, 200, 60 | «ВОЛОС» (30) | pop 0.3; fade 0.18 |
| LBL-REFL | T("light:ЗЕЛЁНЫЙ-0.1") | T("light:СЗАДИ-0.3") | label band · 160, 440, 760, 80 | «ОТРАЖАЕТСЯ → ЗЕЛЁНЫЙ» (30; the → in jade #4f9163) | Letters; fade 0.18 |
| LBL-PASS | T("light:КРАСНЫЙ-0.1") | C.out−0.2 | label band · 160, 440, 760, 80 | «ПРОХОДИТ НАСКВОЗЬ → КРАСНЫЙ» (30; the → in ruby #c8102e) | Letters; fade 0.18 |
| RAIL | T("see:ВЕКОВ-0.2") | T("unk-0.35") | rail · 90, 300, 840, 150 | gold rail x 130 → 900 at y 340; stations x 130 «IV ВЕК» (34 above) / «ГЛАЗ» (26 below, eye icon) · 390 «ЛУПА» (magnifier) · 650 «МИКРОСКОП» (optical microscope) · 900 empty disc → «1990» (34, #ffd56a, at T("y1990:ДЕВЯНОСТОМ-0.05")) + «ЭЛЕКТРОННЫЙ» / «МИКРОСКОП» two lines (26, right-aligned ≤ x 930, at T("y1990:ЭЛЕКТРОННЫМ-0.05")); pointer disc keyed ВЕКОВ → НИКТО → ВИДЕЛ → РАЗГЛЯДЕЛИ | rail draws (GP 0.5 s), stations pop as the pointer arrives; fade 0.18 |
| NOTSEEN | T("see:НИКТО+0.15") | T("y1990:ДЕВЯНОСТОМ-0.35") | bottom plate · 580, 1120, 280, 60 | «НЕ ВИДНО» (34, cream plate) | pop; re-pop (scale 1.15) at T("see:ВИДЕЛ+0.1") and T("y1990:РАЗГЛЯДЕЛИ+0.1"); fade 0.18 |
| Y1990 | T("y1990:ДЕВЯНОСТОМ-0.05") | C.furnace−0.25 | bottom plate, right of the cup · 555, 1120, 330, 130 | «1990» (`StampFx c="#d9891c"` size 90, `y=0` inside the box) | slam + ring; holds ≥ 1.5 s (≈ 4 s); fade 0.15 |
| ASK | T("unk:КАК-0.05") | C.furnace−0.25 | chip row · 230, 330, 620, 70 | «КАК ДЕЛАЛИ РИМЛЯНЕ?» (34, cream plate) | pop; fade 0.15 |
| VERDICT | T("unk:НЕИЗВЕСТНО-0.05") | C.furnace−0.25 | 250, 430, 520, 80 | «НЕИЗВЕСТНО» (46, cream on velvet, gold border 5) | slam (scale 1.6 → 1 eBack, rot 0); fade 0.15 |
| OCT | T("rec:СЕЙЧАС-0.05") | C.loop−0.25 | bottom plate · 190, 1120, 640, 140 | «ОКТЯБРЬ 2026» (56, #ffd56a) / «ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ» (26, letterSpacing 3, cream) — a two-line `Stamp2` (copy from math-universe Main.tsx, gold border, velvet bg) | slam + ring; fade 0.15 |
| END | T("q:СЛУЧАЙНОСТЬ-0.05") | T("q.e") | top card · 90, 290, 840, 270 (same panel as HOOK) | «СЛУЧАЙНОСТЬ —» (62 cream) / «ИЛИ ЗНАЛИ,» (70 #ffd56a) / «ЧТО ДЕЛАЮТ?» (70 #ffd56a) — three lines; two don't fit 840 px | Letters per line at q:СЛУЧАЙНОСТЬ−0.05 / q:ИЛИ−0.1 / q:ЧТО−0.1; exit over 0.15 s: scale → 0.9, opacity → 0 |
| HOOK2 | T("q.e+0.19") | TOTAL+1 | top card · same box | identical to HOOK | hard on (no fade, no pop), so the last frame = frame 0 |

Collisions checked: HOOK leaves ≥ 0.2 s before CHIP-PAINT; chips leave 0.35 s before CHIP-HOW; STAMP-IV (430–530) under the chip row; LBL-PART → LBL-REFL → LBL-PASS share the band with ≥ 0.2 s gaps; RAIL leaves 0.3 s before ASK; NOTSEEN leaves 0.3 s before Y1990 in the same box; END leaves 0.04 s + 1 frame before HOOK2 (same panel, never both). Every number on screen is spoken at that moment (16, IV, 1990, октябрь 2026 ↔ «только сейчас» as its date tag per the script's number table); the hair ratio is a picture, not a digit.

## 4. Transitions
| cut | kind | justified by |
|---|---|---|
| `C.dive` | **iris portal through the glass wall** — exactly `PaperScene`'s `mask #iris`: TableScene (drawn last, on top) zooms 1.1 → 17 in log space over 1.0 s into world (690, 760); the hole radius `Rs = lerp(0, 1350, open^1.6)`, `open = prog(cam.s, 5, 17)` (base radius 0: no porthole); InsideScene drawn under at full opacity from C.dive−0.9 with its camera at s 4 → 1.0 | «Внутри —»: the voice goes inside, the camera goes inside; the cup's glass bubbles give the s 5–17 frames content |
| `C.out` | **iris back out**: TableScene lens mode on top, camera (690, 760) s 17 → (800, 800) s 1.0 over 1.0 s (the hole shrinks to 0 during the first ≈0.45 s), InsideScene under, pushing into the dots, drawn until C.out+1.4 | «Шестнадцать веков никто не видел, что внутри»: we leave the inside the way we came, onto the spot nobody could see into |
| `C.furnace` | **whip-pan right** (`whipAmount(t, C.furnace)` → `FxDefs blur` + `filter="url(#fx-whip)"` on the world group of both scenes; `LightLeak at C.furnace−0.2 d 0.5 hue "255,180,90"`); the lamp sweeps right over the lens in the last 4 frames, the camera follows it | `rec` re-hook: a new place (the Sheffield furnace) |
| `C.loop` | **whip-pan left** (mirror; LightLeak at C.loop−0.2) landing on CAM0 | back to the cup for the question |
| `C.snap` | `Flash color="#fff1c4" o 0.45 d 0.3` (not a transition: the microscope image appearing) | the only flash in the video; no white flash anywhere else |
SCENES cross-dissolve XF 0.15 only at non-portal, non-whip cuts (there are none); at whips use XF 0.06 (the blur hides it).

## 5. Sound cues the picture needs (SFX bound to the visual event's ref; music a real open-licensed track under the voice, ≥ 10 dB down)
| ref | visual event that owns the sound | sound |
|---|---|---|
| `C.side1` = T("h2:ЦВЕТ")/2 + 0.25 | hook pass: the lamp head at SIDE (θ 90, the draw-order flip frame) | soft lamp click (signature) |
| `C.ring1` = C.side1 + 0.03 | k crosses 0.5 — the cup is half ruby | glass ring (real recording) |
| T("no:КРАСКА-0.1") / T("no:ПОДДЕЛКА-0.1") | chip pops | pop; ✗ scratch at +0.25 each |
| T("no:КРАСКА+0.2"), T("no:ПОДДЕЛКА+0.4") | the two SIDE frames of the `no` swings | lamp click −6 dB; glass ring −6 dB 0.03 s after each |
| T("no:ЧЕТВЁРТЫЙ-0.05") | stamp slam | stamp hit (**re-hook 1**) |
| T("in:КАК-0.05") | chip КАК? | pop |
| C.dive−0.6 → C.dive | the dive | whoosh rising into the iris (**re-hook 2**) |
| T("in:ЧАСТИЦЫ") | dots pop | soft shimmer (synth) |
| T("hair:ТЫСЯЧУ") | the dots pulse | ding |
| T("hair:ВОЛОСКА+0.15") | hair lands (squash + impulse) | low thud |
| T("light:ОТРАЖАЕТСЯ-0.2") / T("light:НАСКВОЗЬ-0.1") | arrows draw | ping (jade bounce) / airy pass-through whoosh |
| C.out → C.out+0.5 | iris closes (**re-hook 3**) | reversed whoosh |
| T("see:НИКТО") | lens over the glass shows nothing | **music out** (silent until C.snap); a faint lamp hum stays; lens ticks at НИКТО−0.2, ВИДЕЛ+0.05, РАЗГЛЯДЕЛИ+0.05 |
| `C.snap` = T("y1990:ДЕВЯНОСТОМ") | dots snap in + flash + stamp «1990» | stamp slam + bright hit; **music back** (payoff) |
| T("unk:НЕИЗВЕСТНО-0.05") | verdict plate slam | plate hit |
| `C.furnace` | whip + the furnace | whoosh (**re-hook 4**), then a real fire-crackle bed under the scene |
| T("rec:ТОЧНО"), T("rec:ПОВТОРИТЬ"), T("rec:УДАЛОСЬ") | ✗ on each passing batch | three ✗ scratches |
| T("rec:СЕЙЧАС-0.05") | the batch stops, stamp | stamp slam |
| T("rec:СПУСТЯ") | the batch self-strikes | the same glass ring as the hook, pitched up |
| `C.loop` | whip back | whoosh |
| T("q:СЛУЧАЙНОСТЬ-0.05") | end card letters | soft card hit |
| T("q:СЛУЧАЙНОСТЬ+0.4") / T("q:ЧТО+0.45") | loop pass SIDE frames (behind / back to front) | lamp click; glass ring 0.03 s after the first only |
| T("q.e") … TOTAL | nothing moves; audio tail ≤ 1.0 s | music resolves, no stinger |

## 6. The ending: loop frame = frame 0
1. Whip lands on `CAM0` at C.loop+0.22, lamp FRONT, cup jade, pill «КУБОК ЛИКУРГА · IV ВЕК», no card.
2. `q:СЛУЧАЙНОСТЬ−0.05`: the end card lands (Letters), the lamp slides behind (θ 0 → 180 by +0.85, cup ruby, red pool, hot spot) — the hook's verb once more.
3. `q:ЧТО−0.05 → +0.95`: the lamp slides back to the front, cup jade; then it holds still for the tail (no further motion; the only motion across the seam is the hook's own slide at 0.2 s of the next pass).
4. `q.e → q.e+0.15`: the end card scales to 0.9 and fades to 0; `q.e+0.19`: the hook card is simply there (hard on). Subtitles hidden from `q.e+0.15`.
5. Exactness: camera = CAM0 + `handheld(t − TOTAL, 0.5, 0.33, 2)` (hook mode uses `handheld(t, 0.5, 0.33, 2)`, so both ends evaluate the same noise at 0); dust opacity 0.55·min(prog(t, 0, 0.4), 1 − prog(t, TOTAL−0.4, TOTAL)); GodRays flicker gets `t − TOTAL` in loop mode; the header pill's first entry never pops (`k = 1` when `HEAD[i][0] <= 0`), the C.loop entry has finished its pop by TOTAL; the hook-card breathing is 1.0 at t = 0. The animator proves it with a pixel diff of frame 0 vs the last frame (≤ 1 % differing pixels, grain excluded).

## 7. Code tables

### 7a. `src/time.ts` — the cut table
```ts
export const C = {
  dive:    T("in:ВНУТРИ+0.15"),            // table → inside the glass wall (iris open finishes here)
  out:     T("see-0.1"),                   // inside → table, lens mode (iris closes from here)
  furnace: T("rec-0.12"),                  // whip right to the Sheffield furnace
  loop:    T("q-0.1"),                     // whip left back to the cup (frame-0 geometry)
  snap:    T("y1990:ДЕВЯНОСТОМ"),          // PAYOFF: dots snap in the lens, flash, stamp 1990, music back
  strike:  T("rec:ВЕКОВ-0.1"),             // the fourth batch starts to self-strike (done by rec:СПУСТЯ+0.25)
  side1:   T("h2:ЦВЕТ") / 2 + 0.25,        // hook pass: lamp at SIDE (θ 90) → lamp click, draw-order flip
  ring1:   T("h2:ЦВЕТ") / 2 + 0.28,        // k crosses 0.5 → glass ring
};
/** the lit spot on the cup wall: every iris in / out aims here (world) */
export const SPOT: [number, number] = [690, 760];
export const CAM0 = { x: 540, y: 800, s: 1.0 };
```
Word refs used elsewhere (all exist in the spec; `norm` folds Ё→Е so `ЧЕТВЁРТЫЙ`/`ЗЕЛЁНЫЙ` resolve): `h2:ЦВЕТ`, `no:КРАСКА`, `no:ПОДДЕЛКА`, `no:РИМСКОЕ`, `no:ЧЕТВЁРТЫЙ`, `in:КАК`, `in:ВНУТРИ`, `in:ЧАСТИЦЫ`, `hair:ТЫСЯЧУ`, `hair:ВОЛОСКА`, `light:СПЕРЕДИ`, `light:СВЕТ`, `light:ОТРАЖАЕТСЯ`, `light:ЗЕЛЁНЫЙ`, `light:СЗАДИ`, `light:НАСКВОЗЬ`, `light:КРАСНЫЙ`, `see:ВЕКОВ`, `see:НИКТО`, `see:ВИДЕЛ`, `y1990:РАЗГЛЯДЕЛИ`, `y1990:ДЕВЯНОСТОМ`, `y1990:ЭЛЕКТРОННЫМ`, `unk:КАК`, `unk:НЕИЗВЕСТНО`, `rec:ТОЧНО`, `rec:ПОВТОРИТЬ`, `rec:УДАЛОСЬ`, `rec:ТОЛЬКО`, `rec:СЕЙЧАС`, `rec:ШЕСТНАДЦАТЬ`, `rec:ВЕКОВ`, `rec:СПУСТЯ`, `q:СЛУЧАЙНОСТЬ`, `q:ИЛИ`, `q:ЧТО`, `q.e`.

### 7b. `Main.tsx` — scenes, portals, whips
```ts
const SCENES: Sc[] = [
  { a: 0,         b: C.dive,    C: TableScene },     // hook mode (t < C.dive)
  { a: C.dive,    b: C.out,     C: InsideScene },
  { a: C.out,     b: C.furnace, C: TableScene },     // lens mode (C.out ≤ t < C.furnace)
  { a: C.furnace, b: C.loop,    C: FurnaceScene },
  { a: C.loop,    b: TOTAL + 1, C: TableScene },     // loop mode (t ≥ C.loop)
];
const XF = 0.15;
const PORTALS = [C.dive, C.out];                     // TableScene plays PaperScene's part: sorted last, drawn on top with mask #iris
const WHIPS = [C.furnace, C.loop];                   // xf 0.06 at these cuts; blur from whipAmount hides the swap
// in the render loop: const paper = s.C === TableScene; const xf = WHIPS.includes(s.a) || WHIPS.includes(s.b) ? 0.06 : XF;  (rest as math-universe)
<LightLeak t={t} at={C.furnace - 0.2} d={0.5} hue="255,180,90" />
<LightLeak t={t} at={C.loop - 0.2} d={0.5} hue="255,180,90" />
<Flash t={t} at={C.snap} d={0.3} color="#fff1c4" o={0.45} />
<Vignette o={0.22} color="60,40,20" />
<Subs t={t} hide={t < T("no-0.05") || t >= T("q.e+0.15")} />
```

### 7c. Header pill
```ts
const HEAD: [number, string][] = [
  [0,         "КУБОК ЛИКУРГА · IV ВЕК"],
  [C.dive,    "ВНУТРИ СТЕКЛА"],
  [C.out,     "КУБОК ЛИКУРГА · IV ВЕК"],
  [C.furnace, "ШЕФФИЛД · 2026"],
  [C.loop,    "КУБОК ЛИКУРГА · IV ВЕК"],
];
// Header: const k = HEAD[i][0] <= 0 ? 1 : eBack(prog(t, HEAD[i][0], HEAD[i][0] + 0.3), 1.4);   ← no pop on frame 0 (loop frame must match)
// style per STYLE §4: cream on velvet .72, gold border 3 px, 28 px, letterSpacing 4
```

### 7d. Overlays (`OV`, Main.tsx shape; `hard` = no fade window)
```ts
type Ov = { at: number; until: number; x: number; y: number; w: number; h: number; name: string; hard?: boolean; el: (t: number, o: number) => React.ReactNode };
const panel = (): React.CSSProperties => ({ border: "6px solid #d9891c", borderRadius: 30, background: "rgba(29,47,122,.86)", boxShadow: "0 0 40px #d9891c88", color: "#f4e6c8", fontFamily: font, textAlign: "center", boxSizing: "border-box" });
const plate = (): React.CSSProperties => ({ border: "4px solid #2a1f1a", borderRadius: 14, background: "#fbf3e0", color: "#2a1f1a", fontFamily: font, fontWeight: 900, boxShadow: "0 8px 24px rgba(30,20,10,.35)", whiteSpace: "nowrap" });
const OV: Ov[] = [
  { name: "HOOK",       at: 0,                                until: T("no:КРАСКА-0.35"),        x: ctr(840), y: 290,  w: 840, h: 270, el: (t, o) => <HookCardL t={t} o={o} /> },               // static; breathing 0.04 for 1.2 s
  { name: "CHIP-PAINT", at: T("no:КРАСКА-0.1"),               until: T("in:КАК-0.4"),            x: 120,      y: 330,  w: 240, h: 70,  el: (t, o) => <ChipX t={t} at={T("no:КРАСКА-0.1")} o={o} text="КРАСКА?" /> },
  { name: "CHIP-FAKE",  at: T("no:ПОДДЕЛКА-0.1"),             until: T("in:КАК-0.4"),            x: 400,      y: 330,  w: 300, h: 70,  el: (t, o) => <ChipX t={t} at={T("no:ПОДДЕЛКА-0.1")} o={o} text="ПОДДЕЛКА?" /> },
  { name: "STAMP-IV",   at: T("no:ЧЕТВЁРТЫЙ-0.05"),           until: C.dive - 0.15,              x: 100,      y: 430,  w: 880, h: 100, el: (t, o) => <div style={{ opacity: o }}><StampFx t={t} at={T("no:ЧЕТВЁРТЫЙ-0.05")} until={C.dive} text="IV ВЕК · РИМСКИЕ МАСТЕРА" y={0} c="#d9891c" size={46} rot={-4} /></div> },
  { name: "CHIP-HOW",   at: T("in:КАК-0.05"),                 until: C.dive - 0.1,               x: 410,      y: 330,  w: 260, h: 80,  el: (t, o) => <div style={{ ...plate(), fontSize: 46, padding: "6px 24px", opacity: o, scale: String(pop(t, T("in:КАК-0.05"), 0.3, 1.9)) }}>КАК?</div> },
  { name: "LBL-PART",   at: T("in:ЧАСТИЦЫ-0.05"),             until: T("light:СПЕРЕДИ-0.3"),     x: 160,      y: 440,  w: 760, h: 80,  el: (t, o) => <div style={{ ...plate(), fontSize: 30, padding: "10px 24px", opacity: o }}><Letters t={t} at={T("in:ЧАСТИЦЫ-0.05")} text="ЧАСТИЦЫ ЗОЛОТА И СЕРЕБРА" size={30} color="#2a1f1a" stagger={0.02} /></div> },
  { name: "LBL-HAIR",   at: T("hair:ВОЛОСКА+0.2"),            until: C.out - 0.2,                x: 90,       y: 350,  w: 200, h: 60,  el: (t, o) => <div style={{ ...plate(), fontSize: 30, padding: "8px 20px", opacity: o, scale: String(pop(t, T("hair:ВОЛОСКА+0.2"), 0.3)) }}>ВОЛОС</div> },
  { name: "LBL-REFL",   at: T("light:ЗЕЛЁНЫЙ-0.1"),           until: T("light:СЗАДИ-0.3"),       x: 160,      y: 440,  w: 760, h: 80,  el: (t, o) => <ArrowLabel t={t} at={T("light:ЗЕЛЁНЫЙ-0.1")} o={o} a="ОТРАЖАЕТСЯ" b="ЗЕЛЁНЫЙ" c="#4f9163" /> },
  { name: "LBL-PASS",   at: T("light:КРАСНЫЙ-0.1"),           until: C.out - 0.2,                x: 160,      y: 440,  w: 760, h: 80,  el: (t, o) => <ArrowLabel t={t} at={T("light:КРАСНЫЙ-0.1")} o={o} a="ПРОХОДИТ НАСКВОЗЬ" b="КРАСНЫЙ" c="#c8102e" /> },
  { name: "RAIL",       at: T("see:ВЕКОВ-0.2"),               until: T("unk-0.35"),              x: ctr(840), y: 300,  w: 840, h: 150, el: (t, o) => <Rail t={t} o={o} /> },                     // stations + pointer keys in §3
  { name: "NOTSEEN",    at: T("see:НИКТО+0.15"),              until: T("y1990:ДЕВЯНОСТОМ-0.35"), x: 580,      y: 1120, w: 280, h: 60,  el: (t, o) => <div style={{ ...plate(), fontSize: 34, padding: "8px 24px", opacity: o, scale: String(pop(t, T("see:НИКТО+0.15"), 0.3) * (1 + 0.15 * (impulse(t, T("see:ВИДЕЛ+0.1"), 1, 6, 6, 0.4) + impulse(t, T("y1990:РАЗГЛЯДЕЛИ+0.1"), 1, 6, 6, 0.4)))) }}>НЕ ВИДНО</div> },
  { name: "Y1990",      at: T("y1990:ДЕВЯНОСТОМ-0.05"),       until: C.furnace - 0.25,           x: 555,      y: 1120, w: 330, h: 130, el: (t, o) => <div style={{ opacity: o, width: 330 }}><StampFx t={t} at={T("y1990:ДЕВЯНОСТОМ-0.05")} until={C.furnace} text="1990" y={0} c="#d9891c" size={90} rot={-6} /></div> },   // StampFx spans left:0/right:0 of its parent → the parent box is 330 wide, so it centres at x 720 under the lens
  { name: "ASK",        at: T("unk:КАК-0.05"),                until: C.furnace - 0.25,           x: 230,      y: 330,  w: 620, h: 70,  el: (t, o) => <div style={{ ...plate(), fontSize: 34, padding: "8px 24px", opacity: o, scale: String(pop(t, T("unk:КАК-0.05"), 0.3)) }}>КАК ДЕЛАЛИ РИМЛЯНЕ?</div> },
  { name: "VERDICT",    at: T("unk:НЕИЗВЕСТНО-0.05"),         until: C.furnace - 0.25,           x: 250,      y: 430,  w: 520, h: 80,  el: (t, o) => <div style={{ ...panel(), borderWidth: 5, borderRadius: 16, fontSize: 46, fontWeight: 900, padding: "8px 24px", opacity: o, scale: String(2.0 - 1.0 * eBack(prog(t, T("unk:НЕИЗВЕСТНО-0.05"), T("unk:НЕИЗВЕСТНО+0.2")), 1.3)) }}>НЕИЗВЕСТНО</div> },
  { name: "OCT",        at: T("rec:СЕЙЧАС-0.05"),             until: C.loop - 0.25,              x: ctr(640), y: 1120, w: 640, h: 140, el: (t, o) => <Stamp2 t={t} at={T("rec:СЕЙЧАС-0.05")} o={o} title="ОКТЯБРЬ 2026" sub="ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ" c="#d9891c" /> },
  { name: "END",        at: T("q:СЛУЧАЙНОСТЬ-0.05"),          until: T("q.e"),                   x: ctr(840), y: 290,  w: 840, h: 270, el: (t, o) => { const x = prog(t, T("q.e"), T("q.e+0.15")); return <div style={{ ...panel(), width: 840, opacity: o * (1 - x), scale: String(1 - 0.1 * x), padding: "16px 10px 18px" }}>
      <Letters t={t} at={T("q:СЛУЧАЙНОСТЬ-0.05")} text="СЛУЧАЙНОСТЬ —" size={62} color="#f4e6c8" /><br /><Letters t={t} at={T("q:ИЛИ-0.1")} text="ИЛИ ЗНАЛИ," size={70} color="#ffd56a" /><br /><Letters t={t} at={T("q:ЧТО-0.1")} text="ЧТО ДЕЛАЮТ?" size={70} color="#ffd56a" /></div>; } },
  { name: "HOOK2",      at: T("q.e+0.19"), hard: true,        until: TOTAL + 1,                  x: ctr(840), y: 290,  w: 840, h: 270, el: (t, o) => <HookCardL t={0} o={1} /> },               // t=0 → breathing = 1, identical to frame 0
];
// render: const o = b.hard ? (t >= b.at && t <= b.until ? 1 : 0) : b.at <= 0 ? (t <= b.until ? 1 : 0) : win(t, b.at, b.until, 0.18);
// END's own exit (scale/opacity over q.e → q.e+0.15) replaces win's fade: give END `hard: true` too and let `el` handle it.
```
`HookCardL` = the math-universe HOOK panel with the two lines «СТЕКЛУ 16 ВЕКОВ.» (64, #f4e6c8) / «ОНО МЕНЯЕТ ЦВЕТ.» (72, #ffd56a), velvet panel;
`ChipX` = cream plate 34 px + the charcoal ✗ (two 8 px strokes, `GP`-style `p` over 0.18 s from at+0.25, −6°, 10 px overshoot) + roll impulse 0.3°;
`ArrowLabel` = plate with `a`, a coloured «→» (`c`), `b`; `Rail` per §3; `Stamp2` copied from math-universe Main.tsx (gold border, velvet bg, cream text).

### 7e. Lint key boxes (`keyBoxes(t)` in scenes.tsx; screen coords via `proj(cam, …)`)
```ts
export function keyBoxes(t: number): [string, [number, number, number, number]][] {
  const box = (cam: Cam, x0: number, y0: number, x1: number, y1: number) => /* as math-universe */;
  if (t < C.dive || (t >= C.out && t < C.furnace) || t >= C.loop) {           // TableScene (hook / lens / loop)
    const cam = camTable(t), h = lampHead(theta(t));                           // lampHead: along() on the arc; lens mode: BACK (790, 600), then the sweep
    const out: [string, [number, number, number, number]][] = [["CUP", box(cam, 335, 574, 745, 1144)], ["LAMP", box(cam, h[0] - 70, h[1] - 60, h[0] + 70, h[1] + 60)]];
    if (t >= T("see:НИКТО-0.2") && t < C.furnace) out.push(["LENS", [515, 655, 925, 1065]]);   // screen-space: cx 720, cy 860, r 205
    return out;
  }
  if (t < C.out) {                                                             // InsideScene
    const li = lampIconPos(t), hy = hairY(t);                                  // hair centre y: −200 → 340 on hair:ВОЛОСКА−0.3 → +0.15
    return [["HAIR", [0, hy - 50, 1080, hy + 50]], ["EYE", [100, 790, 200, 890]], ["LAMPICON", [li[0] - 60, li[1] - 60, li[0] + 60, li[1] + 60]], ["DOTS", [330, 560, 750, 1260]]];
  }
  const cam = camFurnace(t);                                                   // FurnaceScene
  return [["FURNACE", box(cam, 80, 420, 420, 900)], ...pucks(t).map((p, i) => ["BATCH" + i, box(cam, p[0] - 75, 905, p[0] + 75, 1055)] as [string, [number, number, number, number]])];
}
```
Expected screen boxes to sanity-check: hook/loop CUP [335, 574, 745, 1144], LAMP front [180, 1070, 320, 1190] / back [720, 540, 860, 660]; lens mode CUP [75, 574, 485, 1144], LAMP [460, 540, 600, 660], LENS [515, 655, 925, 1065], stamp «1990» [555, 1120, 885, 1250] (clear of CUP in x, of LENS in y); furnace BATCH4 [545, 905, 695, 1055] under OCT [190, 1120, 830, 1260]. No hero box ever enters y 1285–1530 (the lamp icon's arc bottoms at y 1200 + 60).

## 8. Strips and checks the animator owes before gate 2
- Strips (6 × 0.1 s) at: `C.side1` (draw-order flip with zero overlap), `no:КРАСКА+0.2`, `no:ПОДДЕЛКА+0.4`, the hair landing, `C.snap`, both whips (the lamp sweep frame: head outside the cup silhouette), `q:СЛУЧАЙНОСТЬ+0.4`, `q:ЧТО+0.45`, `q.e` → `q.e+0.2` (card swap, never both).
- Luma on the final MP4: every scene ≥ 100 (target ≥ 130, furnace ≥ 115), first 1.5 s ≥ 100; the ruby cup ≥ 30 points darker than the jade cup on its box.
- Pixel diff frame 0 vs the last frame ≤ 1 % (grain excluded).
- Layout lint at 10 fps (skip ±0.4 s around cuts): hook card vs lip (≥ 8 px at s 1.03), chips vs STAMP-IV, LBL-* vs HAIR (the «ВОЛОС» plate may touch the band: it is its tag), RAIL vs LAMP in lens mode, Y1990 vs CUP/LENS, OCT vs BATCH, END/HOOK2 vs lip.
- Text widths measured once (hook line 2 at 72 px ≤ 820; STAMP-IV at 46 ≤ 840; END lines at 62/70/70).
- One meaning per colour on real frames: jade/ruby only on the cup, the arrows, the batch halves and the pool; every ✗ charcoal; no theme RED/GRN anywhere.
