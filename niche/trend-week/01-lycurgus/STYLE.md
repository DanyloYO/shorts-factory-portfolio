# STYLE: Кубок Ликурга (trend-week / 01-video)

Art direction for the animator. Frame 1080 × 1920, 30 fps, camera scale 1 = world units. Everything hangs on one state variable: the lamp
angle **θ** (0° = lamp in front of the cup, 180° = behind). Every surface, shadow, colour and highlight in scenes 1, 2, 4 and 6 is a
function of θ; the viewer must never see the cup change colour without seeing the lamp move. Nothing is black: the deepest value in the
video is the ruby core inside the glass (#5a0514, luma 24), and it never covers more than ~4 % of the frame.

Deviation from BRIEF.md beat 6, decided here: the loop frame must equal frame 0 (`formats/why.md`, loop ending), so scene 6 is the
**Lycurgus cup** on the table again, not the Sheffield glass. The new glass gets its colour moment in scene 5 (the batch that cools and
"self-strikes"). Scene 6: the lamp slides FRONT → BACK on «Повторить смогли только сейчас», the end card lands on «Случайность», and in the
last 0.6 s the lamp slides back to FRONT so the final frame = frame 0 (cup green, lamp in front, a card in the top slot).

---

## 1. World and light

One room, one table, one lamp. A warm plaster wall (far), a dark-blue velvet table top (stage), a gilt anglepoise lamp on the table's
back-left corner. Time of day does not exist: the lamp is the only light, so the picture is "studio at any hour". Nothing else emits light
except the furnace in scene 5 and the bulb icon in scene 3 (same lamp, drawn small).

| Surface | Material | How it takes light |
|---|---|---|
| Wall (far, d 0.32) | matte cream plaster | a soft hot spot that follows the lamp; the cup's soft shadow when the lamp is in front; in the back state the hot spot sits directly behind the cup and makes its silhouette pop |
| Table top (stage) | dark-blue velvet | a directional sheen: lighter toward the lamp (#3550b8), darker away (#132050); the cup's contact shadow skews away from the lamp; a **red pool** on the velvet in front of the cup only when the lamp is behind (transmitted light reaches the cloth) |
| Table front edge / floor (y > 1480) | warm wood | flat, dim warm (#c9a06a), nothing important lives there (app UI zone) |
| Cup body | dichroic glass | front light: opaque jade with a soft specular; back light: translucent ruby with a hot core at the lamp side and a thin white rim on the lamp-side edge |
| Cage + king | the same glass, thicker | reads lighter than the body (two-stroke lines), casts 6 px shadows on the body, catches 3 px highlight dots on the lamp side |
| Rim and foot | gilt bronze | hard specular stripe on the lamp side, deep brown shadow on the other, a warm reflection of the velvet underneath |
| Lamp shade | brass, bell shape | outside gold with a highlight stripe, inside cream (the lit interior is the brightest non-bulb thing) |
| Bulb | the light | `SunGlow` halo; `GodRays` toward the cup (front) or toward the viewer through the cup (back) |

Light direction per scene:
- Scene 1/2/4/6: from the lamp; at θ = 0 lower-left → up-right; at θ = 180 upper-right → down-left through the cup toward the camera.
- Scene 3 (inside the glass): the same lamp icon, left of the slab (front) or right of it (back); the eye icon on the left is the viewer.
- Scene 5: the furnace mouth at the upper-left; every object has a lit left edge and a warm shadow to the right.

Luma budget (measured on the final MP4 with `tools/luma.py`): target ≥ 130 in scenes 1–4, 6; ≥ 115 in scene 5. First 1.5 s ≥ 100 is safe
because when the cup goes red (darker) the wall hot spot appears behind it (brighter) at the same moment. Frame 0 estimate: wall 45 % ×
231 + hook card 11 % × 45 + cup 10 % × 95 + velvet 23 % × 70 + floor 11 % × 165 ≈ **150**.

## 2. Palette (one world, nine named colours)

| Name | Hex | Job | Luma full-frame |
|---|---|---|---|
| СВЕТ (warm light) | `#f4e6c8` | wall centre, light plates, lamp interior, hook-card text | 231 |
| ШТУКАТУРКА (wall edge) | `#e2cda0` | wall away from the lamp, scene 3 field edges | 206 |
| БАРХАТ (velvet) | `#1d2f7a` · lit `#3550b8` · shadow `#132050` | table top, dark panels (hook card, header pill, end card) | 49 · 82 · 33 |
| ЗОЛОТО (gold) | `#d9891c` · light `#ffd56a` · shadow `#7a4a10` | lamp shade, rim and foot, stamps, header pill border, the accent line of cards, timeline rail | 146 · 214 · 58 |
| НЕФРИТ (jade) | `#4f9163` · light `#8ccf9a` · deep `#1f4530` | the cup in front light; the reflected-light arrow in scene 3; the jade half of the Sheffield batch. **Means "reflected", nothing else** | 128 · 189 · 59 |
| РУБИН (ruby) | `#c8102e` · hot `#ff6a3d` · deep `#5a0514` | the cup in back light; the transmitted-light arrow; the red pool on the velvet. **Means "transmitted", nothing else** | 57 · 134 · 24 |
| ЧЕРНИЛА (charcoal) | `#2a1f1a` | line work, ✗ strikes, text on cream plates, lamp arm | 33 |
| ПОЛ (wood) | `#c9a06a` | floor below the table edge, the wainscot moulding, scene 5 bench | 165 |
| ПЕЧЬ (furnace) | `#ff8a3d` (= theme `ORANGE`) · core `#fff1c4` | scene 5 only: the furnace mouth, embers, hot batches | 157 |

Subtitles: white `#ffffff` + accent `#FFD23F` (theme `Y`), fixed. No theme `GRN`/`RED` anywhere on screen: ✓ does not exist in this video,
✗ is charcoal, "wrong" is never red (red is the ruby state).

Scene 3 field tints (the inside of the glass as the viewer sees it): jade-cream `#cfe7d0` (luma 224) when the lamp is in front, rose-cream
`#f6cfc4` (214) when behind. Hair: `#6b4423` body (74), `#b07a3e` lit edge, `#3a2412` shadow edge.

Colour helpers: `mixC(a, b, k)` from `fx/theme.ts` for every flat fill that cross-fades with θ; gradients cross-fade by opacity (§5).

## 3. Depth

Rest point `REF = {x: 540, y: 800}`. Layers under one `mkCam` camera, transforms via `layerT(cam, d, REF)`:

| d | Layer | Content |
|---|---|---|
| 0.32 | wall | cream radial gradient (centre follows the lamp's wall projection), plaster fibres (copy `Parchment` → `Plaster`: stops `#fbf3e0 / #f4e6c8 / #e2cda0`, fibre colour `#c9a06a` at 0.08, no stains), the cup's soft shadow (front state), the hot spot (back state) |
| 0.62 | wainscot | one horizontal moulding at y 1000 (`#c9a06a` 14 px with a `#7a4a10` 3 px underline): the wall/table horizon that proves parallax on the push-in |
| 1.0 | stage | velvet table top (y 1000–1480), the lamp (base, two arm bones, shade, bulb), the cup, its contact shadow, the red pool, the chips' anchor points |
| 1.35 | near | `Particles kind="dust" n=36 color="#fff1c8" wind=0.25 o=0.55` with `area` limited to the beam box (front: [120, 700, 700, 1200]; back: [400, 520, 960, 1100]); nothing else near, so the hero never gets covered |

Shadows: `Shadow` (fx/Light) under the cup, `x 540 y 1124 w 300`, `skew = -0.6·cos θ` (front light throws it back and short; back light throws it
toward the viewer, longer: scale `h = 0.18 + 0.14·k`). The lamp base gets its own `Shadow w 120`. The cage casts onto the body (§5).
God rays: `GodRays` from the bulb, `dir` = angle bulb→cup centre (front) or bulb→(540, 1500) (back), `spread 46`, `len 900`, `o 0.35`
front / `0.22` back (rays over the ruby would wash it out), `color "255,236,190"`. Vignette: `Vignette o 0.22 color "60,40,20"` (warm, not
blue). Grain `0.05`. Grade on the world group: `FxDefs grade={{warm: 0.2, sat: 1.08, contrast: 1.04}}`.

## 4. Type

Font Montserrat (kit). Cards 62–78 px per NICHE. All overlay boxes clamped by their full box into x 60–960, y 280–1260; subtitles 1330–1520.

| Slot | Zone (y) | Size | Colours and construction |
|---|---|---|---|
| Header pill | 186–230 | 28, letterSpacing 4 | cream on velvet `.72`, gold border 3 px. Texts: «КУБОК ЛИКУРГА · IV ВЕК» (scenes 1, 2, 4, 6), «ВНУТРИ СТЕКЛА» (3), «ШЕФФИЛД · 2026» (5) |
| Hook card | 290–560, width 840, centred on x 60–960 | line 1 64 px, line 2 76 px | panel velvet `rgba(29,47,122,.86)`, gold border 6 px, glow `0 0 40px #d9891c88`; line 1 «СТЕКЛУ 16 ВЕКОВ.» cream, line 2 «ОНО МЕНЯЕТ ЦВЕТ.» gold-light `#ffd56a`. Static from frame 0 (never popped in); 0.04 breathing scale for 1.2 s |
| Chips (scene 2) | 330–400, row at x 160 / 340 / 630 | 34 | cream plate `#fbf3e0`, charcoal border 4 px, charcoal text, drop shadow `0 8px 24px rgba(30,20,10,.35)`; the ✗ is a charcoal 8 px two-stroke drawn with `GP`-style progressive `p` over 0.18 s, overshooting the plate by 10 px each side, rotated −6° |
| Stamps | 430–530 (scene 2), 1120–1250 (scene 4), 1120–1250 (scene 5) | 50 / 90 / 48 | `StampFx c="#d9891c"`: «IV ВЕК · РИМСКИЕ МАСТЕРА», «1990», «ОКТЯБРЬ 2026 · ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ». Never on the object they name (the «1990» stamp sits under the lens, not on it) |
| Labels (scene 3) | 440–520 and beside objects | 30 | cream plates with charcoal border and text; «ВОЛОС» on the hair band; «ЧАСТИЦЫ ЗОЛОТА И СЕРЕБРА»; «ОТРАЖАЕТСЯ → ЗЕЛЁНЫЙ» / «ПРОХОДИТ НАСКВОЗЬ → КРАСНЫЙ» (the arrow glyph in jade / ruby, the only coloured glyphs in labels) |
| Honesty chip (scene 5) | 330–400 | 34 → answer 46 | «РИМЛЯНЕ ЗНАЛИ НАНОТЕХНОЛОГИИ?» cream plate; the answer «НЕИЗВЕСТНО» slams below it at 430 as a velvet plate with cream text, gold border |
| Timeline (scene 4) | 300–450 | years 34, tool names 26 | gold rail, station discs; labels cream-on-velvet plates; «1990» in gold-light; tool names charcoal on cream |
| End card | 290–560 | 62 / 74 | same panel as the hook; «СЛУЧАЙНОСТЬ —» cream, «ИЛИ ЗНАЛИ, ЧТО ДЕЛАЮТ?» gold-light, `Letters` per-glyph pop on the spoken word |
| Subtitles | 1330–1520 | 70 | `mkSubs` as in ui.tsx: white + `Y`; hidden during the hook card (0 → hook end) |

Outline rule on light backgrounds (scene 3 field, scene 5 wall, chips on the wall): every light plate gets a 4 px charcoal border + the
drop shadow; every text that sits directly on cream (none planned) would need the 4-direction `#0b0e18` text-shadow that `mkSubs` already uses.

## 5. Drawing the cup (SVG, world units, camera s = 1)

Geometry (height 546 px ≈ 28 % of the frame; real cup 15.9 cm tall, ≈ 13 cm wide → nearly as wide as tall):
- Lip ellipse centre `(540, 620)`, `rx 205 ry 46`; lip top at y 574 (clears the hook card bottom 560 by 14 px).
- Body outline (clip path `cupBody`): `M 335 620 C 322 720, 345 880, 420 990 C 470 1050, 610 1050, 660 990 C 735 880, 758 720, 745 620 Z`; widest ≈ y 700, rx 218.
- Gilt foot (modern mount): from the bowl bottom `(470,1040)–(610,1040)` flaring to `(375,1120)–(705,1120)`; base ellipse `(540,1120) rx 165 ry 24`; a knop band at y 1060 rx 95. Contact with the velvet at y 1120 (feet ≤ 1270).
- Interior seen through the opening: ellipse `(540, 620) rx 190 ry 38`, fill `mixC("#1f4530", "#5a0514", k)`.

The dichroic variable: `k = eInOut(prog(θ, 70, 125))` (0 = jade, 1 = ruby). Lamp-side anchor on the body in objectBoundingBox units:
`lx = clamp(0.5 + 0.42 · (lampHeadX − 540) / 540, 0.08, 0.92)`.

Layer order inside `<g clipPath="url(#cupBody)">`:
1. **Jade base**, always opaque: `linearGradient cupGreen (x1 0 → x2 1)` stops `0 #1f4530 · 0.3 #4f9163 · 0.55 #8ccf9a · 0.8 #4f9163 · 1 #1f4530`, `gradientTransform` rotated so the light stop sits at `lx` (or simply set the stops around `lx`).
2. **Jade shade**, opacity `1 − k`: radial `#0b1f14` 0.45 → 0, centred at the side opposite the lamp (`1 − lx`, 0.5), r 0.8.
3. **Ruby layer**, opacity `k`: radial `cupRed` centre `(lx, 0.35)` r 0.85: `0 #ffd1a0 · 0.12 #ff6a3d · 0.4 #c8102e · 0.8 #7a0a1e · 1 #5a0514`. Because the jade is opaque underneath, opacity `k` is a true cross-fade.
4. **Inner light** (translucency), opacity `0.45·k`: ellipse at the lamp side `rx 90 ry 160`, fill `#fff1c4`, `filter="url(#fx-soft)"`.
5. **Glass grain**: 30 bubbles r 2–5 from `hash(i)`, fill `#fff` 0.12 (jade) → `#ffb08a` 0.2 (ruby) via `mixC`; they give the dive (scene 2 → 3) content at every zoom level.
6. **Velvet bounce**: ellipse `(540, 1000) rx 150 ry 40`, `#6d87d8` 0.18, `fx-dof`.
7. **Cage shadows**: the cage paths again, translated `(6·sign(540 − lampHeadX), 4)`, stroke 14, `mixC("#0b1f14", "#3a0410", k)` 0.3, `filter="url(#fx-dof2)"`.
8. **Specular**: jade state: ellipse `rx 26 ry 110` at the lamp side (x = 335 + 410·lx), `#fff` 0.35, `fx-dof`, opacity `1 − k`; ruby state: the lamp-side edge of the body outline as a 3 px `#fff` 0.6 stroke (a `clipPath` half of the outline), opacity `k`. One of the two is always there: **the lit edge**.

Over the body (not clipped):
9. **Cage**: 9 vine curls as quadratic Béziers hugging the silhouette (e.g. `M 360 700 Q 420 760 395 840 Q 370 900 440 960`, mirrored on the right, two crossing the front), each drawn twice: under-stroke 14 px `mixC("#1f4530", "#5a0514", k)`, over-stroke 8 px `mixC("#a9dcb0", "#ff9d7a", k)`, round caps; small leaves as `Q` teardrops; bridges as 7 px discs every ~80 px (same two colours). Highlight dots 3 px `#fff` 0.5 on the lamp side of each curl (`opacity 0.5·(1 − k) + 0.35·k`). The cage is drawn progressively (`pathLength`, `p`) only in the scene-5 batch, never on the hero cup.
10. **King** (centre `(520, 800)`, 150 px tall, same cage material): a gold crown (`#ffd56a` / `#d9891c`), a round head, a curly beard of three loops, arms raised with vine curls wrapped around both wrists, legs lost in a vine spiral. Face: two dot eyes, round O-mouth, raised brows — comic surprise. No grimace, no struggle lines.
11. **Rim** (lip torus): ellipse `(540,620) rx 205 ry 46` stroke 18 with `linearGradient gilt` `0 #7a4a10 · 0.45 #d9891c · 0.55 #ffd56a · 1 #7a4a10` rotated toward the lamp; the inner ellipse `rx 190 ry 38` stroke 4 `#7a4a10` 0.6.
12. **Foot**: the flare path with the same gilt gradient, a 6 px `#ffd56a` highlight along the lamp-side edge, a `#7a4a10` 0.5 underside.
13. **Red pool** on the velvet, opacity `0.3·k`: ellipse `(540, 1180) rx 260 ry 60`, `#ff3b4a`, `fx-soft`, drawn under the foot; jade state: the same ellipse `#8ccf9a` 0.08 (a faint bounce, keeps the velvet from going flat).

The lamp (stage layer): base disc `(130, 1100) rx 60 ry 18` gilt; two arm bones from `ik([130,1100], head, 480, 440, (j) => -j[1])`
(elbow up), stroke 14 charcoal with gold 22 px joint discs; the shade a bell path pointing along head→cup, outside gilt gradient, inside
`#f4e6c8`; the bulb `SunGlow x y r=22 color="#fff6d2" flare=0.3`. Head positions (world):

| θ | head | scale | draw order |
|---|---|---|---|
| 0 FRONT | (250, 1130) | 1.15 | in front of the cup |
| 90 SIDE | (115, 800) | 1.0 | beside (cup left edge 335, ≥ 200 px clear) — the draw-order flip happens here, with zero overlap |
| 180 BACK | (790, 600) | 0.82 | behind the cup; the bulb sits just right of the lip, its halo rings the cup's right shoulder |

Path for `along()`: `[(250,1130), (90, 980), (115, 800), (200, 610), (470, 540), (790, 600)]`, u = `eInOut(θ/180)`. The arm never
crosses the cup's silhouette while in front (all of it is at x ≤ 250 at θ ≤ 90). Scale, k, shadow skew, hot-spot position and sheen are all
continuous in θ, so no frame pops; strip the SIDE frame anyway.

Wall response (far layer): front state: the cup's shadow (the body path, `#8a6a3a` 0.22, `fx-soft`, offset `(+70, −30)`), a small spill hot
spot at lower-left `(260, 980) rx 300 ry 220`; back state: hot spot `(560, 720) rx 430 ry 400` `#fffaf0` 0.9 → 0 with `mixBlendMode: screen`
(as the candle ellipse in `PaperScene`). Both blended by `k`.

## 6. Key art per scene

### Scene 1 — HOOK (0–2.5 s): the lamp slides behind the cup
Big: the cup (546 px), dead centre. Small: the lamp at lower-left, the wainscot line. Eye goes: cup → bulb glow → card. θ: `keyed([[0, 0], [0.5, 0], [1.4, 180]])`;
the cup is jade on frame 0, ruby by 1.4 s, holds. Camera `mkCam([[0, {x:540,y:800,s:1.0}], [2.5, {x:540,y:800,s:1.05}]], {drift: 0.5, seed: 2})`.
Trick: the red pool blooming on the velvet while the hot spot appears behind the cup — the viewer sees the light *go through*. SFX cue:
the lamp click on the last frame the head is at SIDE (visual ref, not the word). Helpers: `Camera`, `Parallax`, `Light.SunGlow / GodRays / Shadow`, `Particles dust`, `Post.FxDefs / Vignette / Grain`, `Rig.ik`.

### Scene 2 — wrong guesses (2.5–8 s)
Same world, no cut. θ swings 180 → 0 → 180 → 0 (`keyed`, 1.1 s per leg, holds 0.4 s), so the cup keeps flipping under the chips. Chips pop in
the row at y 330 one per guess, each gets its charcoal ✗ 0.25 s after it lands; `impulse` roll 0.3° on each ✗. Stamp «IV ВЕК · РИМСКИЕ
МАСТЕРА» at y 430 on «четвёртый», `until` the dive. Camera s 1.05 → 1.1 slow push. Helpers: as scene 1 + `Kinetic.StampFx`.

### Scene 3 — inside the glass (8–18 s)
Transition in: an iris portal exactly like `PaperScene` (`mask #iris`, camera s 1.1 → 17 in log space over 1.0 s into the beam spot on the body,
world `(690, 760)`); scene 3 is drawn under at full opacity; the glass grain gives the mid-zoom frames content.
Composition: a vertical translucent slab (the cup wall) at x 330–750, y 420–1260, fill `mixC("#cfe7d0", "#f6cfc4", k3)` with two faint
wall edges (`#8ccf9a`→`#ff9d7a` 0.5, 4 px); the field outside the slab `#f4e6c8` → `#e2cda0`. Left: the **eye icon** at `(150, 840)` (charcoal
line art, 90 px, blinks via `blink`). The **lamp icon** (the same lamp at 0.45 scale) at `(190, 1140)` for the front state, `(880, 840)` for the
back state, sliding between on a rail at y 1200 (`keyed`). Inside the slab: 56 dots r 6–8, silver body `#e8e9ef` with a gold core `#ffd56a`
and a charcoal 1.5 px edge, positions by `hash`, Brownian drift ±2 px via `fbm1`; they **appear only at «частицы»** (`pop`, staggered 0.02 s).
Hair: drops in from the top at «тоньше волоска» (y −200 → 340 in 0.45 s, `squash` on landing, camera `impulse` 6 px): a brown band y 280–380
across the whole frame, lit edge `#b07a3e` along its lower rim, cuticle arcs at 0.15; label «ВОЛОС». It stays as the horizon of the scene — the
hair is *bigger than the frame*, the dots are tiny; no drawn ratio claims 1000:1 (the voice says it, the picture says "enormous vs tiny").
Arrows (no kit helper; build with `GP` progressive draw + a 26 px arrowhead polygon at the path end): front: beam `#fff3c4` from the lamp to a dot at `(520, 820)`, then
bounces back to the eye in **jade** (`#4f9163`, w 8); label «ОТРАЖАЕТСЯ → ЗЕЛЁНЫЙ» at (560, 460). Back: beam from the right lamp passes between
the dots and exits left to the eye in **ruby** (`#c8102e`, w 8); label «ПРОХОДИТ НАСКВОЗЬ → КРАСНЫЙ». `k3` tints the slab field as the arrows change.
Camera: s 17 settles to 1.0 by the hair drop, then a 1.03 push. Helpers: `Camera.impulse`, `Rig.squash / blink`, `art.GP`, `Kinetic.Letters` for labels, `Particles dust n=20 o=0.3`.

### Scene 4 — who saw it (18–27 s), PAYOFF
Transition in: the iris reverses (camera s 17 → 1.0 out of the cup wall, 1.0 s, as `PaperScene` paper3) onto the table with the camera at
`{x: 750, y: 800, s: 1.0}` so the cup stands at screen x ≈ 330; the lamp parks at BACK (cup ruby) for the whole scene — the dots are only ever
seen in red light, which is what the microscope story is about.
Timeline strip y 300–450: gold rail from x 100 to 940 with four stations: «IV ВЕК · ГЛАЗ» (eye icon), «ЛУПА» (magnifier icon), «МИКРОСКОП»
(optical microscope icon), «ЭЛЕКТРОННЫЙ МИКРОСКОП · 1990» (tall column icon, slides in from the right on «электронным»). Only two numbers on the
strip, both spoken: IV век and 1990. A gold pointer disc walks the rail (`keyed`).
`Lens` (ui.tsx) at `(700, 860) r 220`, `wx wy` on the cup wall, `s 14`: for stations 1–3 the children are the wall gradient only with `fx-dof` (a
blurred, empty rose field — "nothing"); on «девяностом» the dots snap in (opacity 0 → 1 in 0.12 s) with `Flash color="#fff1c4" o 0.45 d 0.3`, and
`StampFx "1990" c="#d9891c" size 90 y 1120` slams under the lens (holds ≥ 1.5 s). The lens is 440 px wide = 23 % of the frame (≥ 10 % payoff rule).
Helpers: `Camera`, `ui.Lens`, `Kinetic.StampFx`, `Post.Flash`, `Light` as before.

### Scene 5 — honesty beat and the furnace (27–34 s)
Transition in: whip-pan right 0.3 s (`whipAmount` on `#fx-whip`) + `LightLeak hue "255,180,90"`; the lamp arm sweeps across the lens in the
last 4 frames before the cut so the swap hides behind a moving occluder.
Chip «РИМЛЯНЕ ЗНАЛИ НАНОТЕХНОЛОГИИ?» at y 330, answer «НЕИЗВЕСТНО» at 430 (velvet plate), both leave before the batches arrive.
World: the same cream wall with a soot gradient toward the furnace (`#e2cda0` → `#b89b6c`), a brick furnace arch at x 80–420, y 420–900 with the
mouth as a radial `#fff1c4 → #ff8a3d → #b3321c`; `GodRays` from the mouth `dir 20 spread 60 o 0.4`; `Particles kind="ember" n=30` rising from the
mouth; a wood-and-stone bench y 900–1100 running right. Batches: glass pucks (r 70, amber-orange hot `#ff8a3d` with a `#fff1c4` core) with paper tags
slide in behind the furnace and glide right along the bench (`along`, constant speed, 0.9 s each); as each passes x 620 a charcoal ✗ stamps its tag and it
keeps going off the right edge (nothing vanishes). The fourth puck stops at `(620, 980)`: its glow fades over 1.2 s (orange → clear amber `#f1d9a8`), then
"self-strikes" over 1.5 s with no lamp moving: the left half (toward the furnace) goes jade via the same `cupGreen` gradient, the right half glows ruby from the
light passing through — the dichroic duo in one object. Stamp «ОКТЯБРЬ 2026 · ПЕРВЫЙ ПОВТОРЯЕМЫЙ РЕЦЕПТ» at y 1120 size 48 on «октябре».
Helpers: `Post.whipAmount / LightLeak`, `Light.GodRays / Shadow`, `Particles ember`, `art.along`, `Kinetic.StampFx`.

### Scene 6 — LOOP (34–38 s)
Transition in: whip-pan left (mirror of 4 → 5), landing on `CAM0 = {x:540, y:800, s:1.0}` with the lamp at FRONT, cup jade — identical geometry to
frame 0. θ 0 → 180 over 1.0 s on «Повторить…» (ruby), the end card on «Случайность» (≤ 1.5 s before the end), θ 180 → 0 in the last 0.6 s so the
last frame = frame 0 (jade, lamp in front). The loop therefore replays green → red on the next pass — the same verb as the hook.

## 7. Frame 0 as a thumbnail (360 px wide)

What reads: a saturated jade bell shape with gold rims on a cream wall (≈ 150 × 180 px at thumbnail size), a brass lamp with a glowing bulb at
the lower-left, a dark velvet band below, a velvet-and-gold card on top with «ОНО МЕНЯЕТ ЦВЕТ.» in gold. The eye lands on the cup first (largest
saturated shape against cream), the bulb glow second, the card third. The card occupies y 290–560 only; the cup starts at 574; the lamp head
stays left of x 320; subtitles are hidden. Nothing covers the cup, the cage or the king — the object of curiosity is fully visible, and the
colour it is about to lose (jade) is the colour on the thumbnail.

## 8. Checks the animator owes before gate 2
- `tools/luma.py` on the final: every scene ≥ 100, first 1.5 s ≥ 100; the ruby state visibly darker than jade (≥ 30 points on the cup's box).
- Strips at the SIDE frame of every lamp pass (draw-order flip with zero overlap), at the hair landing, at the 1990 snap, at both whips.
- Layout lint: hook card vs lip (14 px clear at s 1.0; re-check at s 1.05 — the lip rises 8 px: still clear), chips row vs stamp, lens vs the cup's box, stamp «1990» ≤ 1270.
- One meaning per colour on real frames: no jade/ruby outside the cup, the arrows, the batch and the pool; ✗ always charcoal.
