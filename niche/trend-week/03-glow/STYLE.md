# STYLE: Ваше тело светится (trend-week / 03-glow)

Art direction for the animator. Frame 1080 × 1920, 30 fps, camera scale 1 = world units. The same room as 01 and 02 (cream plaster wall,
dark-blue velvet table, the gilt gooseneck lamp with the bell head), one world, no cuts: every beat is a prop or a card sliding into the
same shot. Two continuous state variables drive every colour in the video: **lamp** 0…1 (how much the lamp gives) and **glow** 0…1 (how
much photon light the bust gives). The bloom is visible only as `(1 − lamp)`: in lamp light it is invisible, which is the whole story.
~75 % of the run is lamp-off; the dark is **the cooled camera's view** (viewfinder brackets, sensor noise, a cool cast, a lifted blue), never
night, never black. Darkest fill in the video: the bust's hair in the dark `#1f2448` (luma 39), < 4 % of the frame.

Reuse from `C:\2d\niches\trend-week\01-video\src\art.tsx` (copy into this project's `src/art.tsx`, which is still the math-universe one):
`ArtDefs` (gilt / giltV / warmGlow / hotSpot), `Lamp`, `LampHead`, `lampTube`, `Plaster` (add a prop `r`, default 1000), `Xmark`, `GP`,
`along`, the palette constants. Keep from the math-universe file only `Stars` (it becomes the sensor noise) and `poly`. The `Hand`, planets,
nebulae and parchment are not used.

Deviations from BRIEF.md decided here (producer: accept or push back):
1. The timestamp chip reads **«10:00»**, not «10:10»: one story clock drives the chip and the clock card (the card's dial starts at 10:00);
   a 10:10 chip beside a 10:00 dial is the "HUD clock and nightstand disagreeing" bug from LESSONS. The session is «около десяти».
2. On «утром» the hand does not simply swing back: time running backwards on screen needs a tag (ANIMATION §7). The hand rewinds
   anticlockwise under a `LightLeak` (the kit's rewind cue) and a tag «← УТРО» pops on the card.
3. The hook card is three lines («ВАШЕ ТЕЛО СВЕТИТСЯ» / «≈ В 1000 РАЗ» / «СЛАБЕЕ ГЛАЗА»): the brief's second line does not fit 840 px at a
   card size ≥ 62. The bust moves down 80 px (head top 590, plinth 1200) to clear it.
4. The ×1000 bar has a **broken axis** (two slanted gold strokes) between the body's tick and the «ГЛАЗ» line: a bar that drew 1000 : 1 to
   scale would hide the tick, and a bar that did not would lie; the break is the honest chart convention, the counter carries the number.

---

## 1. World and light

| Surface | Material | Lamp ON (lamp = 1) | Lamp OFF (lamp = 0): the camera's view |
|---|---|---|---|
| Wall (far, d 0.32) | matte cream plaster (`Plaster`) | hot spot behind the face, radius `1000·(0.35 + 0.65·lamp)` so the pool visibly **contracts toward the bust** as the lamp dims; the bust's soft shadow to the right | a night-blue vertical gradient `#4d5a8e` (top) → `#6b76a6` (at the wainscot) at opacity `0.92·(1 − lamp)` over the plaster (fibres still faintly through); the bust's **coral spill** behind the head (screen blend) is the only light on the wall |
| Wainscot (d 0.62) | wood moulding y 1000 | `#c9a06a` + `#7a4a10` underline | `mixC` to `#4a4a66` / `#2e2e44` |
| Table top (stage, y 1000–1480) | dark-blue velvet | sheen toward the lamp `#3550b8` → `#1d2f7a` → `#132050`, warm pool ellipse under the bust | flat **midnight** `#2f4497` (luma 71, lifted above the 01 velvet on purpose: sensor gain) + a coral pool under the plinth |
| Table front / floor (y > 1480) | warm wood | `#c9a06a` | `#5d5a6e` (02's dark floor); nothing important lives there |
| Bust: skin | matte stylised skin | `#e8b89a`, shade side `#c08a6a`, a cream rim on the lamp side, one soft specular on the forehead | silhouette `#2c2f5c` with a cool rim `#9fb4ff` 0.5 on the upper-left edge (the one lit edge); the bloom on top |
| Bust: hair, top, plinth | charcoal hair, warm-grey crew-neck, gilt plinth | `#2a1f1a` / `#b9ae9c` / gilt gradient | `#1f2448` / `#262a52` / `#5e5a4a` with the cool rim |
| Lamp | gilt bell, cream interior | `LampHead` unchanged, bulb `#fff6d2`, `glow = lamp` | bulb `#8a8070`, `glow 0`, shade keeps its cool rim |
| Camera icon | cooled CCD box, right of the bust | — | `#3a4270` body, `#dfefff` frost, lens glint `#9fb4ff` |
| Cards | cream plates / velvet panels | as 01 | the same: the cards are the other light in the dark |

Light direction: lamp ON — from the upper-left (head at (215, 640)) onto the face; every shadow falls down-right, the wall shadow of the
bust offset (+90, −20). Lamp OFF — the bust itself is the source (coral, from the cheeks and forehead outward); the velvet pool, the wall
spill and the plinth's inner rim all take coral; the viewfinder's cool rim comes from nowhere in particular (sensor gain), top-left, faint.

Luma budget (measured on the final MP4 with `tools/luma.py`: Y average at 2 fps, first 1.5 s at 10 fps, day gate avg ≥ 100 / first ≥ 100):

| State | wall 42 % | velvet 25 % | floor 11 % | bust 12 % | cards 10 % | estimate |
|---|---|---|---|---|---|---|
| Lamp ON (tail, 33–35 s) | 215 | 75 | 165 | 150 | 45 (end card, velvet) | **≈ 148** |
| Frame 0 (lamp 0.62, dimming) | 185 | 73 | 140 | 130 | 45 | **≈ 132**; first 1.5 s (lamp 0.62 → 0.3) averages ≈ 120 |
| The click frame (2.5 s, no card yet) | 108 | 72 | 92 | 95 | 0 | **≈ 91** — a 31 % drop from frame 0, ≥ 25 % (ANIMATION §5) |
| Dark beats with a card (2.9–29 s) | 108 (+ spill) | 74 | 92 | 95–110 | 230 (cream) | **≈ 100–106** |
| Thermal lens beat (10–16 s) | 108 | 74 | 92 | 95 | 230 + lens field ≈ 120 on 10 % | ≈ 110 |

Whole video ≈ (2.5·132 + 26.5·103 + 4·100 + 2·148) / 35 ≈ **108**, gate avg ≥ 100 passes without `--night`. Every dark still ≥ 85 (the brief's
floor is 70; design to 95–105). The two knobs if a dark still measures < 95: the night wall gradient toward `#7c86ad` (135) and the bust's
wall spill (0.25 → 0.4). Never the velvet base, never the hair, never the grade's contrast.

## 2. Palette (one world, ten named colours; the 01/02 anchors kept)

| Name | Hex | Job | Luma |
|---|---|---|---|
| СВЕТ (warm light) | `#f4e6c8` · edge `#e2cda0` · plate `#fbf3e0` | wall, hot spot, lamp interior, cream plates, cream text on velvet | 231 · 206 · 243 |
| БАРХАТ (velvet) | `#1d2f7a` · lit `#3550b8` · shadow `#132050` · **night `#2f4497`** | table top (lit / dark), hook and end card panel, counter panel | 49 · 82 · 33 · 71 |
| НОЧЬ (camera view) | wall top `#4d5a8e` · wall bottom `#6b76a6` · floor `#5d5a6e` · wainscot `#4a4a66` | the room with the lamp OFF. **Means "the camera is looking"** | 92 · 120 · 92 · 70 |
| СЕНСОР (cool) | `#dfefff` · rim `#9fb4ff` · icon/text `#4f7fd6` | viewfinder brackets, sensor noise, frost on the camera, cool rims, «−120 °C» digits, the camera icon's lens glint. **Never on the lamp, never on the bloom** | 237 · 181 · 123 |
| ЗОЛОТО (gold) | `#d9891c` · light `#ffd56a` · shadow `#7a4a10` · unlit `#5e5a4a` | lamp metal, plinth, stamps, card borders, the ring's fill, the bar rail, the lens frame, the clock's hour hand. **Means "the lamp / the instrument"** | 146 · 214 · 58 · 89 |
| КОЖА (skin) | `#e8b89a` · shade `#c08a6a` · dark `#2c2f5c` · top `#b9ae9c` / dark `#262a52` · hair `#2a1f1a` / dark `#1f2448` | the bust in lamp light / in the dark | 195 · 150 · 51 · 175 / 45 · 33 / 39 |
| ФОТОНЫ (coral bloom) | **`#ff7a6a`** · core `#ffb3a0` · edge `#c8463e` · grain dot `#ffd0c0` | the photon image on cheeks, forehead, upper neck; its spill on the wall and pool on the velvet; the spark in the bubble; the body's tick on the bar; the bloom-level dot on the clock card. **Means "light the body gives"**, nothing else; no yellow in it, soft-edged always | 160 · 200 · 108 · 216 |
| ТЕПЛО (thermal 5 stops) | `#3b1f6e` → `#2457c7` → `#2fbf71` → `#ff8a3d` → `#fff2b0` | only inside the thermal lens and its legend: cold → hot. Hard-banded, flat, no red stop, so it never reads as the bloom | 48 · 85 · 139 · 157 · 238 |
| ЧЕРНИЛА (charcoal) | `#2a1f1a` | line work, ✗ strikes, text on cream, the clock's minute hand, the camera icon's outline | 33 |
| ПОЛ (wood) | `#c9a06a` · `#7a4a10` | floor and wainscot in lamp light | 165 · 58 |

Subtitles: white `#ffffff` + accent `#FFD23F` (theme `Y`), fixed. No theme `RED` / `GRN` / `CY` anywhere: ✗ is charcoal, "wrong" is never red,
the coral is never used for a ✗ or a warning. `mixC` (fx/theme) for every fill that depends on `lamp`; gradients cross-fade by opacity.
Three hues must stay apart on real frames: lamp cream (yellow-white, hard pool), bloom coral (pink-red, soft discs), thermal orange/white
(hard bands inside a frame). Check them side by side on the beat-3 still.

## 3. Depth

Rest point `REF = {x: 540, y: 800}`, one `mkCam` for the whole video (`drift 0.5, seed 2`, the channel's hand), layers via `layerT(cam, d, REF)`:

| d | Layer | Content |
|---|---|---|
| 0.32 | wall | `Plaster cx 620 cy 720 r 1000·(0.35+0.65·lamp)`; the night gradient rect at `0.92·(1 − lamp)`; the bust's wall shadow (its silhouette path, `#8a6a3a` 0.22, `fx-soft`, offset (+90, −20), opacity `lamp`); the coral spill: ellipse (540, 760) rx 420 ry 380 fill radial `#ff7a6a` 0.3 → 0, `mixBlendMode: screen`, opacity `glow·(1 − lamp)` |
| 0.62 | wainscot | moulding at y 1000 (14 px + 3 px underline), colours by `lamp` |
| 1.0 | stage | the lamp (base (130, 1100), head (215, 640), aim (540, 800), drawn before the velvet so its base sits on the table edge like 01), the velvet (y 1000–1480), the wood front edge, the pools, the plinth and bust, the bust's contact shadow, the camera icon, the thermal lens, the zoom bubble (all world-anchored so they ride the push-ins) |
| 1.35 | near | lamp ON: `Particles kind="dust" n 30 color "#fff1c8" o 0.5·lamp wind 0.2 area [150, 560, 720, 1100]` (the beam box); lamp OFF: nothing near — the sensor noise is screen-space (§6.2) so it never parallaxes |

Shadows: `Shadow x 540 y 1200 w 480 h 0.14 skew 0.5 o 0.3·lamp` under the plinth; `Shadow w 120` under the lamp base; `Shadow w 160 h 0.18
skew 0.3 o 0.25` under the camera icon (in the dark its shadow is a faint coral-less `#1b2a3a` 0.18 — the icon stands on the table, it does
not float). God rays: `GodRays sx sy` from the bulb, `dir` = angle bulb → face, `spread 44 len 800 n 7 o 0.35·lamp color "255,236,190"`.
Vignette `o 0.22 color "60,40,20"` lit, cross-faded by `lamp` to `o 0.2 color "20,30,70"` (not darker: the dark beats need their luma).
Grain `0.05` lit → `0.07` dark (the §10 ceiling; the "camera" grain is the sensor noise layer, not the post grain). Grade on the world group:
lit `{warm: 0.2, sat: 1.08, contrast: 1.04}` → dark `{warm: −0.15, sat: 1.0, contrast: 1.05, lift: 0.03}` mixed by `lamp` (`lift` is the
"never black" knob: it raises the black level of everything by 3 %).

## 4. Type

Font Montserrat (kit). Cards 62–78 px per NICHE. Every overlay clamped by its full box into x 60–960, y 280–1260; subtitles 1330–1520.
Text on the velvet is cream or gold-light, never white (white is the subtitle colour). Text on cream is charcoal; «−120 °C» is the one
cool-blue text (`#4f7fd6` on a cream plate), because it is the camera's number.

| Slot | Zone (y) | Size | Colours and construction |
|---|---|---|---|
| Header pill | 186–230 | 28, letterSpacing 4 | cream on velvet `.72`, gold border 3 px: «ПОД ЛАМПОЙ · СВЕЧЕНИЕ ТЕЛА» for the whole video; no pop on frame 0 |
| Hook card | 290–570, x 120–960 | 64 / 76 / 62 | panel `rgba(29,47,122,.86)`, gold border 6 px, glow `0 0 40px #d9891c88`; «ВАШЕ ТЕЛО СВЕТИТСЯ» cream 64 (measure ≤ 800) / «≈ В 1000 РАЗ» gold-light 76 / «СЛАБЕЕ ГЛАЗА» gold-light 62. Static from frame 0, breathing 0.04 for 1.2 s; fades 0.35 s after h2 |
| «20 МИНУТ» card | 290–420, x 260–820 (560 wide) | «20» 62, «МИНУТ» 28, «УСКОРЕНО» 24 | cream plate, charcoal border 4, drop shadow; the ring (§6.4) at the left, the number and word centre, «УСКОРЕНО» small print bottom-right in charcoal 0.7 (so 20 minutes in 4 s is declared a time-lapse) |
| Stamp «2009 · ЯПОНИЯ» | 440–530 | 50 | `StampFx c="#d9891c" rot −4`; sits under the «20 МИНУТ» card, never on the bust (head top 590 at s 1.03 → screen 584; the stamp box ends at 530) |
| «−120 °C» chip | 1000–1050, x 770–950 | 30 | cream plate, charcoal border 4, digits `#4f7fd6`, a small snowflake glyph (6 strokes) before the number; above the camera icon, leaves ≥ 2 s after «двадцати» and before the lens arrives |
| Timestamp chip «10:00» | 1180–1230, x 80–230 | 30 | cream plate, charcoal border, charcoal digits, a small camera-corner glyph: planted at the camera's arrival, bottom-left of the viewfinder, stays through beats 3–4, flies up into the clock card at beat 5 (0.4 s, eInOut) |
| Chips (beat 3) | 330–400, x 120 / 400 | 34 | «АУРА?» (120, 240 wide) · «ТЕПЛО?» (400, 260 wide): cream plates, charcoal `Xmark sw 8 over 10 rot −6` drawn in 0.18 s beside / over each, roll impulse 0.3° |
| Lens label «ТЕПЛОВИЗОР» | on the lens's top edge, 530–580, x 640–880 | 28 | cream plate on the gold frame; travels with the lens |
| Bubble label «ВНУТРИ ЩЕКИ» | under the bubble, 870–920, x 110–400 | 28 | cream plate, charcoal text |
| Bar labels | «ГЛАЗ» 405–455, «ТЕЛО» 1125–1175, x 170–320 | 28 | cream plates right of the rail; «ТЕЛО» has a coral dot before the word, «ГЛАЗ» a gold dot |
| Counter panel «≈ ×1000» | 740–830, x 80–380 | 56 | velvet panel, gold border 5, gold-light digits; `Counter` with `fmt v => "×" + Math.round(v)` while counting, the «≈ » prefix appears with the final value only; holds ≥ 2 s |
| Clock card | 290–540, x 220–860 | readout 72, small print 24, tag 34 | cream plate: dial r 95 at (330, 425) with gold hour hand / charcoal minute hand, readout «10:00» … «16:00» charcoal 72 at right (x 470–820, whole hours only, `Counter`-style tick on each hour), a coral level dot on a short vertical gauge between dial and readout (the bloom's level, rises with the hand); small print «ПЯТЬ ДОБРОВОЛЬЦЕВ · 10:00–22:00» 24 charcoal 0.75 along the bottom; the tag «← УТРО» gold-light on velvet 34 at the top-right corner on the rewind |
| End card | 290–570 | 60 / 70 | the hook panel: «ВАШЕ ТЕЛО СВЕТИТСЯ,» cream 60 / «ПОТОМУ ЧТО ЖИВЁТ.» gold-light 70 (measure ≤ 800), `Letters` on «живёт»; ≤ 1.5 s before the end |
| Subtitles | 1330–1520 | 70 | `mkSubs` (ui.tsx), white + `Y`; hidden while the hook card is up and from the end card's exit |

Outline rule on light surfaces: every cream plate gets the 4 px charcoal border + the drop shadow `0 8px 24px rgba(30,20,10,.35)`; nothing
sits directly on the plaster. On the night wall, cream plates read by contrast alone (243 vs 108); on the lens's thermal field the label is
on the gold frame, not on the colours.

## 5. Drawing the bust (SVG, world units, camera s = 1; `Bust mode="lit" | "dark" | "thermal"`, `lamp`, `glow`, `t`)

A museum bust: head, neck, shoulders cut at the plinth, a crew-neck top with a visible collar line. Height 590 → 1226 (plinth bottom) =
636 px ≈ 33 % of the frame. Calm, front view, no realism, no nudity: the collar sits at the base of the neck and the shoulders are a cloth
shape, not skin. Geometry:
- Head: ellipse `(540, 780) rx 150 ry 190` (top 590, chin 970); jaw slightly squarer via a path: `M 390 780 C 390 900, 450 975, 540 975 C 630 975, 690 900, 690 780 C 690 660, 630 590, 540 590 C 450 590, 390 660, 390 780 Z` (clip `bustHead`).
- Ears: half-ellipses `(382, 785) rx 16 ry 30` and `(698, 785)`, same skin, charcoal 3 px.
- Hair: a cap `M 392 740 C 400 620, 470 580, 540 582 C 620 580, 690 620, 688 740 C 650 700, 600 680, 540 690 C 480 680, 430 700, 392 740 Z` plus a side part line; charcoal in the light, `#1f2448` in the dark.
- Neck: `M 475 940 L 605 940 L 630 1085 L 450 1085 Z`, a throat shade band `#c08a6a` 0.4 under the jaw (lit only).
- Shoulders / top: `M 300 1200 C 320 1120, 420 1085, 450 1085 L 630 1085 C 660 1085, 760 1120, 780 1200 Z`; the **collar line**: a 5 px charcoal stroke `M 452 1085 C 500 1120, 580 1120, 628 1085` (a round neckline).
- Plinth: ellipse `(540, 1200) rx 240 ry 26` gilt (`url(#gilt)`), a 6 px `#ffd56a` highlight arc on the lamp side, `#7a4a10` 0.5 underside; **the only gold on the bust**; contact y 1200 ≤ 1270.
- Face (charcoal 4 px, round caps; in the dark the same lines in `#5a62a0` 0.55 so the face still reads under the bloom): eyes as two almonds `(482, 782)` and `(598, 782)`, width 46, height `26·open` with `open = blink(t, 3, 4.1)`; irises r 9 charcoal, a 2 px `#fff` glint on the lamp side (lit) or a `#9fb4ff` glint (dark); brows gentle arcs 60 wide, 16 px above the eyes; nose: `M 540 770 C 544 810, 552 835, 528 848` + a nostril curve `M 528 848 Q 540 856 554 848`; mouth: `M 500 892 Q 540 904 580 892`, calm, closed; no teeth, no grimace.
- Life: `breathe(t, 0, 1.6)` on the shoulder group's y and 0.6 of it on the head (counter-phase), a slow head sway ±1.5° from `fbm1(t·0.2, 7)`, blinks every ≈ 4 s, a glance (irises ±4 px) toward the camera icon when it arrives and toward the lens when it slides in. Nothing on the bust pops; the face never leaves the main stage (head box y 590–975 at every camera key).

**Lit shading** (opacity `lamp`): skin fill `#e8b89a`; a lamp-side rim `#f4e6c8` 5 px stroke clipped to the head's left half; a shade overlay on the right: radial `#c08a6a` 0.55 → 0 centred (660, 820) r 0.8 in objectBoundingBox; the nose shadow: a soft triangle right of the nose `#c08a6a` 0.35 `fx-dof2`; one specular ellipse `(500, 690) rx 40 ry 18` `#fff` 0.25 `fx-dof` on the forehead's lamp side; the top `#b9ae9c` with a darker fold `#8f8574` 0.4 down the right.

**Dark state** (opacity `1 − lamp`): every fill becomes its dark hex (§2); the cool rim `#9fb4ff` 0.5, 4 px, along the head's and shoulders' upper-left edges (clip to the left half); the face lines in `#5a62a0`. Then the bloom (below) on top.

**The bloom** (`<g style={{mixBlendMode: "screen"}} opacity={glow·(1 − lamp)}>`), from the fact table: cheeks highest, then forehead, then upper neck:
1. Soft discs (`radialGradient bloomG`: `0 #ffb3a0 0.95 · 0.35 #ff7a6a 0.55 · 1 #c8463e 0`): left cheek `(470, 840) r 78`, right cheek `(610, 840) r 78`, forehead ellipse `(540, 690) rx 118 ry 62`, upper neck `(540, 1005) rx 70 ry 40` at 0.4; each with `fx-dof`, and a slow breathing of ±4 % radius from `fbm1(t·0.35, i)` so the glow is alive.
2. **Grain dots** (the photon image): 240 dots placed by `hash` inside the four shapes (rejection by ellipse test, weighted 40 / 40 / 15 / 5 %), r 1.5–3.2, fill `#ffd0c0`, opacity 0.9; dot `i` exists only while `ringP > hash(i·3.7)` — the ring (§6.4) **accumulates** them; after the ring is full they all stay; each dot twinkles 0.7–1.0 via `hash2(i, floor(t·6))`.
3. Hot cores: two `#fff` 0.18 `fx-dof` ellipses `rx 30 ry 18` at the cheek centres (so the brightest point reads at phone size).
On frame 0 (`glow 0.6`, `lamp 0.62`) the bloom shows at 0.23 of full: a faint coral on both cheeks and the forehead, visibly not lamp cream.

**Thermal copy** (`mode="thermal"`, drawn only inside the thermal lens clip): the same paths, flat 5-stop fills, `fx-dof2` on the whole group
so the bands look like a sensor map: background inside the lens violet `#3b1f6e`; top, hair, plinth blue `#2457c7`; face green `#2fbf71`; ears,
nose tip and lips blue (`#2457c7` 0.8 overlays); **cheeks a cooler blue-green** (blue 0.5 overlay ellipses at the cheek spots: cool where the
photons are); **the neck hot**: two radial blobs `#fff2b0 → #ff8a3d → transparent` at the sides of the neck under the jaw `(478, 1000) rx 60 ry
95` and `(602, 1000)`, plus a `#ff8a3d` band along the jaw line and orange dots at the inner eye corners (where thermal cameras see heat). No
bloom in this mode — the thermal camera does not see photons, which is the comparison. Legend: a 14 × 300 vertical bar inside the lens's
right edge (x 920–934, y 640–940) with the five stops bottom → top and the words «ХОЛОДНО» / «ГОРЯЧО» 20 px cream at its ends, no numbers.

## 6. Props and instruments (SVG, stage layer unless said)

### 6.1 The lamp: dim / OFF / ON
`Lamp base [130, 1100] head [215, 640] aim [540, 800] s 1.0 glow lamp` (01 drawing unchanged; the gooseneck stays at x ≤ 300, clear of the
head at 376). Bulb fill `mixC("#8a8070", "#fff6d2", lamp)`; `SunGlow x 240 y 655 r 22 o lamp flare 0.3·lamp`; the hot spot radius, the velvet
sheen, the pool, the wall shadow, god rays, dust and the grade all read `lamp` directly, so a dim is one number and no frame pops.
`lamp` keys (`keyed`, eInOut unless said): `[[0, 0.62], [0.5, 0.52], [1.5, 0.3], [C.click − 0.3, 0.3]]`, then the **click OFF**: 0.3 → 0 in 0.1 s
(linear) at `C.click` = T("dark") − 0.05 (the frame the bulb goes grey is the click SFX ref, `story1/sfx/click.wav`); OFF through beat 5; the
**click ON** on «живёт»: 0 → 1 in 0.08 s; hold 1 for 0.5 s; then dim 1 → 0.62 over the tail (eInOut) so the last frame = frame 0.
Dim = the pool's rim creeping toward the bust (the hot-spot radius), the cream cooling (the night tint rising), the bust's shade side
deepening. The click = the bulb grey, the pool gone, the wall night, the vignette blue, the grade cool, all in 3 frames; the bloom is already
there at full opacity because `(1 − lamp)` is 1 — the viewer sees the lamp go out and the face stay lit.

### 6.2 The camera's view (lamp OFF)
Screen-space, opacity `(1 − lamp)`: four L-shaped brackets `#dfefff` 0.7, 3 px, 60 px legs at the stage corners (80, 300) (1000, 300) (80, 1250)
(1000, 1250); the sensor noise = `Stars` from the math-universe art (`n 70 r [0.6, 1.4] o 0.3 color "#c9d4ff" flares 0 area [60, 280, 1020, 1270]`,
twinkle as is); the timestamp chip (§4) at the bottom-left. No cross-hair over the face. This layer is drawn under the overlays and over the
world; it does not parallax.

### 6.3 The camera icon «−120 °C» (world, right of the bust)
A boxy cooled camera 150 × 110 standing on the velvet: body `(790–940, 1080–1190)` `#3a4270` with a 3 px charcoal outline, a lens barrel on its
left face pointing at the bust (cylinder 40 long, r 26, glass `#1a2460` with a `#9fb4ff` 0.6 glint arc), a finned cooling block on top (five
`#4a5280` fins), a small `#4f7fd6` status dot. Enters by **sliding in from the right edge** (x 1180 → 865 centre, 0.5 s eOut) on «Камера», shutter
SFX (`story1/sfx/shutter.wav`) on the landing frame. **Frost** on «минус»: `frost` 0 → 1 over 0.6 s: a `#dfefff` 0.35 rim fill growing inward
from the body's edges (an inset rect stroke 0 → 26 px with `fx-dof`), 12 frost stars (6-spoke 10 px glyphs, `GP` progressive, `#dfefff`, w 2)
appearing by `hash` order, and `Particles kind="mist" n 6 o 0.5·frost color "#dfefff" area [780, 980, 960, 1100] wind −0.1` as cold vapour. The
chip «−120 °C» pops above it on «ста двадцати» − 0.05. The icon **leaves by sliding right** (0.4 s) on «Это химия» − 0.2 (beat 4 needs the frame);
it is never faded.

### 6.4 The 20-minute ring (inside the «20 МИНУТ» card)
Dial at the card's left: track circle r 46 charcoal 8 px 0.25; fill arc `GP c="#d9891c" w 8 glow 2 p=ringP` from 12 o'clock clockwise; a gold
hand from the centre to the arc's head; a tiny camera-shutter glyph at the centre. `ringP = eInOut(prog(t, T("двадцать") − 0.1, T("лицо") − 0.1))`
(≈ 4 s for 20 minutes → «УСКОРЕНО» small print); `glow = 0.15 + 0.85·eOut(ringP)` during the fill, and **the same `ringP` gates the grain dots**
(§5.2): the ring, the dots and the bloom's rise are one variable, so the picture and the counter agree. `story1/sfx/tick.wav` under the fill at
−14 dB, stops when the arc closes. The card holds ≥ 2 s after «минут», leaves before the beat-3 chips.

### 6.5 The thermal lens (world, beat 3)
A rounded rect 380 × 480, gold frame 6 px + a 2 px gold 0.5 outer line, corner radius 24, label «ТЕПЛОВИЗОР» on its top edge; inside: the
`Bust mode="thermal"` copy and the violet field, clipped by the rect (`clipPath`, same world transform as the stage so parallax matches). It
**slides in from the right edge** (centre x 1240 → 540, 0.6 s eInOut) on «тепловизора» − 0.2, fully covering the bust: the whole face in false
colour; holds 0.5 s; then **parks right** (centre x 760, 0.4 s) so the frame reads as one face, two instruments: left cheek + forehead coral
(the photon image, outside the lens), right half thermal (cheek green-blue = cool, neck orange-white = hot). Parked box x 570–950, y 600–1080
(camera `{x 560, s 1.04}` → screen 550–946). The legend bar sits inside its right edge. Leaves by sliding right on «светится» + 0.3 (0.4 s), with
the ✗ landing on «ТЕПЛО?» at «светится» − 0.05. While the lens is over the face, the grain dots under it are hidden by the clip — nothing
fades; the lens is an occluder.

### 6.6 The zoom bubble (world, beat 4a)
Centre `(215, 700) r 140` (camera `{x 500, s 1.04}` → screen 103–384, clear of the ear at 401), gold ring 6 px, field `#1a2460`, a gold dashed
leader (3 px, "6 6") from the rim to the left cheek point (470, 840) with a 9 px coral dot there (as `Callout`'s anchor); label «ВНУТРИ ЩЕКИ»
under it. Pops `pop(t, at, 0.4, 1.3)`, exits with `win` 0.25 on «свет.» + 0.4. Inside: 9 molecules = clusters of 3–5 atoms (discs r 10–16,
`#9fb4ff` with `#2c2f5c` 2.5 px edges, bonds 6 px `#6d87d8`), Brownian jitter ±4 px via `fbm1(t·0.9 + i, i)`, one slow tumble each. The centre
molecule on «возбуждает»: `squash(t, at, 0.25, 0.35)` on its group, atoms `#9fb4ff` → `#ffd0c0` for 0.25 s; on «отдают»: a coral photon
(`circle r 8 #ff7a6a` on `url(#fx-glow)` r 24) leaves it along a short wavy `GP` path (`#ff7a6a` w 4, p over 0.35 s) to the rim, `Flash t at
color "#ff9a8a" o 0.2 d 0.25` on the frame, and the main bloom pulses `glow ×1.3` for 0.4 s (`impulse`). No «энергия», no lightning glyphs: one
photon dot, one soft flash.

### 6.7 The ×1000 bar (screen-space overlay, beat 4b)
Rail x 120–150, y 400–1180, charcoal 0.8 with a gold 3 px border; the **body's tick** at y 1150: a coral dot r 10 on `fx-glow` + a 36 px coral
line, label «ТЕЛО»; the **«ГЛАЗ» line** at y 430: a gold 6 px line across the rail, label «ГЛАЗ»; between them the gold fill rises from the tick
with the counter (`eOut` over «тысячу» − 0.6 → «тысячу» + 0.1); a **broken axis** at y 790: two slanted gold 6 px strokes across the rail with a 14 px
gap (the chart convention for "much more than drawn"); the counter panel «×1» → «×1000» (`Counter keys [[t0, 1], [t1, 1000]]`) beside the break,
«≈ » appearing with the final value; the fill reaches the «ГЛАЗ» line on the frame the counter lands. The rail draws itself (`GP p` 0.4 s) on
«Примерно» − 0.1; everything holds ≥ 2 s after «глаз» and leaves before the clock card (fade 0.2).

### 6.8 The clock card (beat 5, top slot)
The «10:00» chip flies up into the card's readout position (0.4 s), the plate unfolds around it (`PlateFx`-style wipe from the left, 0.45 s).
Hour hand `keyed` 10 → 16 h over «по часам» − 0.1 → «четырёх» (eInOut), minute hand 6 turns in the same span (a time-lapse); the readout ticks
whole hours (`Counter` with `fmt h => \`${h}:00\``, ease linear so the hours land evenly); the coral level dot climbs its gauge with `glow`:
`glow = 0.55 + 0.45·eInOut(progress)`, peaking **on «четырёх»**; on «утром» − 0.1: `LightLeak at d 0.6 hue "255,200,120"`, the tag «← УТРО»
pops, the hands rewind anticlockwise 16 → 10 over 0.6 s, the readout counts down 16:00 → 10:00, `glow` sinks to 0.55 (the bloom visibly
dimmer than at 16:00 — strip both frames side by side). Small print «ПЯТЬ ДОБРОВОЛЬЦЕВ · 10:00–22:00» is on the plate from its first frame.
The card holds ≥ 2 s after «утром» and leaves (fade 0.2) before the end card.

## 7. Key art per beat (the world never cuts; one `mkCam`)

Camera keys: `[[0, CAM0 = {x 540, y 800, s 1.0}], [T("dark"), {540, 800, 1.03}], [T("heat") − 0.3, {560, 800, 1.04}], [T("chem") − 0.3, {500, 800, 1.04}],
[T("clock") − 0.3, {540, 790, 1.06}], [T("close") − 0.3, {540, 800, 1.0}]]`, `drift 0.5, seed 2`, shakes `[[C.click, 4, 0.4], [T("отдают"), 5, 0.4],
[T("тысячу"), 3], [T("четырёх"), 4, 0.4]]`; after the click ON: `handheld(t − TOTAL, 0.5, 0.33, 2)` as 01 so the last frame's drift = frame 0.

### Beat 1 — HOOK (0–2.5 s): the lamp dims, the face already glows
Big: the bust (636 px) dead centre, lamp-lit from the upper-left. Small: the gilt lamp head at the left, the gilt plinth, the wainscot. Eye
goes: the face → the bulb → the card. Verb: the pool's rim **creeps toward the bust** (hot-spot radius 1000·0.75 → 1000·0.55 in 1.5 s), the
cream cools (night tint 0.35 → 0.64), and on both cheeks and the forehead the coral shows through, stronger every frame. Camera CAM0, drift
only. Helpers: `Camera`, `Parallax`, `Light.SunGlow / GodRays / Shadow`, `Particles dust`, `Post.FxDefs / Vignette / Grain`, `Rig.blink / breathe`,
`art.Lamp / Plaster / Bust`.

### Beat 2 — the camera and the 20 minutes (2.5–10 s), small payoff at the click
`C.click`: lamp 0.3 → 0 in 3 frames (click SFX); the brackets, sensor noise and the «10:00» chip appear with `(1 − lamp)`; the bust is a
silhouette with its cool rim and the coral bloom at `glow 0.15` (faint, grain-less). On «Камера» the icon slides in from the right (shutter);
on «минус» it frosts, chip «−120 °C»; stamp «2009 · ЯПОНИЯ» at y 440 on «Камера» + 0.3; on «двадцать» the «20 МИНУТ» card unfolds and the ring
fills: the grain dots **accumulate** on the cheeks and forehead only, the discs rise, the wall spill and the velvet pool come up with them, until
on «лицо» a face made of light stands there; «щёки и лоб»: the two cheek cores pulse (`impulse` on their radius, 0.3 s) then the forehead.
Helpers: as beat 1 + `Kinetic.StampFx`, `art.GP` (ring), `Particles mist` (frost), `Stars` (sensor noise).

### Beat 3 — not heat (10–16 s), RE-HOOK
Chip «АУРА?» pops at the beat start, its ✗ at +0.45 (no word: the silence is the answer); chip «ТЕПЛО?» on «тепло»; the thermal lens slides over
the bust on «тепловизора», holds, parks right: coral left / thermal right in one frame, the neck orange-white, the cheeks green-blue; ✗ on
«ТЕПЛО?» at «светится» − 0.05; the lens slides out. The lens field is the mid-video colour lift (luma ≈ 110 on the beat). Helpers: `art.Xmark`,
`art.Bust mode="thermal"`, `Camera.impulse` (0.3° roll per ✗), `Post.FxDefs` (the lens group gets `fx-dof2`).

### Beat 4 — the chemistry and the bar (16–22.5 s), RE-HOOK
The camera icon slides out right; the camera trucks to `{500, 800, 1.04}` (bust at screen x 426–738). Bubble pops on «химия», molecules
jitter, the excitation on «возбуждает», the photon and the soft flash on «отдают», the bloom pulses; bubble leaves on «свет.» + 0.4; on
«Примерно» the rail draws, the body's tick and «ТЕЛО» pop, the «ГЛАЗ» line lands far above, the fill climbs and the counter runs into «≈ ×1000»
on «тысячу» (shake 3). Helpers: `Rig.squash`, `art.GP`, `Post.Flash`, `Kinetic.Counter`, `Camera.impulse`.

### Beat 5 — the clock (22.5–29 s), PAYOFF
Camera `{540, 790, 1.06}` (the face at ≈ 35 % of the frame height). The «10:00» chip flies into the clock card; the hands sweep, the readout
ticks 11:00 … 16:00, the bloom **rises to its peak on «четырёх»** (glow 1.0: the cores whiten, the wall spill widens, the pool brightens — the
payoff is on the face, ≥ 10 % of the frame); on «утром» the rewind: light leak, «← УТРО», hands back to 10:00, the bloom sinks to 0.55.
Helpers: `Kinetic.Counter / PlateFx`, `Post.LightLeak`, `Camera.impulse` on «четырёх».

### Beat 6 — closing and LOOP (29–35 s)
The bust alone in the camera's view, glow 0.6 (the morning level, continuity with the rewind), no cards; «Камера — видит»: the brackets pulse
once (opacity 0.7 → 1 → 0.7). On «живёт»: the **click ON** (signature SFX): lamp 0 → 1 in 0.08 s, the night tint, brackets, noise and chip go with
`(1 − lamp)`, the bloom vanishes in lamp light (its opacity is `(1 − lamp)`), the end card lands (`Letters` on the second line). Hold 0.5 s. Then
the tail: lamp 1 → 0.62 over the remaining ≤ 1.0 s, so the pool is already contracting and the coral already showing when the end card leaves
(0.15 s, scale → 0.9) and the hook card is hard-on the next frame. Last frame = frame 0: lamp 0.62, glow 0.6, CAM0 + `handheld(0)`, pill
static, subs hidden, dust at the frame-0 value.

Change cadence (≤ 4 s between picture changes): dim from 0 s · click 2.5 · camera in ≈ 3.8 · frost ≈ 5 · card + ring ≈ 6 · face ≈ 8.5 · cheeks pulse ≈ 9.5
· chips ≈ 10.5 · lens ≈ 12 · park ≈ 13.5 · ✗ ≈ 15.5 · icon out / truck ≈ 16 · bubble ≈ 16.5 · spark ≈ 18.5 · bar ≈ 20 · ×1000 ≈ 21.5 · clock ≈ 23 · peak ≈ 26
· rewind ≈ 28 · brackets ≈ 30.5 · click ON ≈ 33 · dim ≈ 33.5.

## 8. Frame 0 as a thumbnail (360 px wide)

What reads: a calm stylised face and shoulders on a gilt plinth (≈ 110 × 210 px at thumbnail size), warm-lit from a brass bell lamp at the
left whose pool is visibly a disc on the wall behind the head (its rim already inside the frame), a dark-blue velvet band below, and on both
cheeks and the forehead a coral-pink glow that is not the lamp's colour; a velvet-and-gold card on top with «≈ В 1000 РАЗ» in gold. The eye lands
on the face (the only skin tone on cream) first, the coral cheeks second, the bulb third, the card fourth. The card occupies y 290–570 only;
the head starts at 590; the lamp head stays left of x 300; the timestamp chip and brackets are at 0 (they belong to the dark); subtitles
hidden. Nothing covers the face — the object of curiosity is the glow on it, and the lamp that is about to go out is in the frame.

## 9. Checks the animator owes before gate 2
- `tools/luma.py` on the final (day gate): avg ≥ 100, first 1.5 s ≥ 100; a still from every dark beat ≥ 85 (design 95–105); the click frame ≥ 25 %
  darker than frame 0; the bloom at «четырёх» ≥ 20 luma points brighter on the face box than at «утром» + 0.8.
- Strips (6 × 0.1 s): the first 0.5 s (the rim creeping; hook card static), `C.click` (bulb grey, pool gone, bloom unchanged, brackets on — all in
  ≤ 3 frames, no white flash), the camera icon's landing, the frost, the ring's last 0.3 s (dots stop accumulating exactly when the arc closes),
  the lens's entry and park (no pop between "covering" and "parked"), the ✗ on «ТЕПЛО?», the icon's exit + truck, the spark, the «тысячу» frame
  (fill at the «ГЛАЗ» line + «≈ ×1000» in the same frame), «четырёх» (16:00 on the dial and readout + peak glow in the same frame), the rewind
  (leak + tag + anticlockwise hands), the click ON and the card swap (never both cards).
- Layout lint at 10 fps: hook / end card bottom (570) vs head top (590 at s 1.0; 577 at s 1.06 only during the clock beat, when the clock card ends
  at 540); «20 МИНУТ» card vs stamp (420 / 440); stamp vs head (530 / 584); chips vs lens label (400 / 530); «−120 °C» chip inside the lens box only
  when the chip is gone; bubble vs ear (384 / 401 on screen); counter panel vs head (380 / 426); bar labels vs the lamp arm (the arm is at x ≤ 300,
  the labels start at 170 — the rail at 120–150 crosses the gooseneck: draw the bar over it, it is an overlay); every box inside x 60–960, y 280–1260;
  no bust box inside y 1285–1530 (plinth bottom 1226 at s 1.06 → 1252).
- Number table: hook «≈ В 1000 РАЗ», counter «×1 → ≈ ×1000», «20» + «МИНУТ», «−120 °C», stamp «2009 · ЯПОНИЯ», chip «10:00», readout 10:00 … 16:00 …
  10:00, small print «10:00–22:00», «ПЯТЬ ДОБРОВОЛЬЦЕВ» as a word; no other digit anywhere (the legend has none, the bar has none).
- One meaning per colour on real frames: coral only on the bloom, its spill and pool, the photon, the body tick and the level dot; the five
  thermal stops only inside the lens and its legend; cool `#dfefff` / `#9fb4ff` only on the camera's view, the frost and rims; ✗ charcoal; no theme
  RED / GRN / CY.
- Figure/ground in the dark: the bust silhouette vs the night wall ≥ 50 luma points on its box; the plinth's rim vs the midnight velvet readable at
  360 px; the coral cheeks vs the skin silhouette ≥ 90 points; the three hues (lamp cream / coral / thermal orange) distinct on the beat-3 still.
- Pixel diff frame 0 vs the last frame ≤ 1 % (grain and sensor noise excluded).

