# SCRIPT: 03-glow — Ваше тело светится. (trend-week, ru)

Brief: `BRIEF.md` · Facts: `C:\2d\niches\trend-week\FACTS-03.md` · Niche: `C:\2d\niches\trend-week\NICHE.md` · Style: `STYLE.md`
Format: `formats/why.md` · lang `ru` · narrator ElevenLabs «Liam» (`ELEVEN_VOICE_RU`, speed 1.0, stability 0.6, style 0.1) · single video, loop ending (last frame = frame 0).
Merged from drafts A and B after two critic passes (drafts in `drafts/`): A's hook (both card lines on frame 0), B's beat order (the ×1000 bar once, at ≈ 11 s), the lamp back ON on «Глаз этого не видит», no «−120» in the voice, the clock card titled «СВЕТ ЖИВЁТ ПО ЧАСАМ». SCRIPT.md's anchors win over STYLE.md where they differ.
Estimate ≈ 37 s composition → ≈ 30 s final; measure after `audio.py`.

**One idea:** Ваше тело светится, потому что живёт: химия обмена веществ отдаёт настоящий видимый свет, примерно в тысячу раз слабее, чем может увидеть глаз.
**Retell test:** «Человек светится, потому что живёт, просто в тысячу раз слабее, чем видит глаз.»
**Chain:** светится (hook) → как это сняли (20 minutes in the dark) → лицо из света → во сколько раз слабее (the bar) → это не тепло (thermal ≠) → это химия (spark) → свет живёт по часам (16:00, payoff) → «потому что живёт» (lamp ON).

### Hook table: 03-glow
| # | formula | hook | spoken s | Q1 | Q2 | Q3 | Q4 | Q5 | pick |
|---|---|---|---|---|---|---|---|---|---|
| A | impossible fact + number (12) | Ваше тело светится. В тысячу раз слабее, чем видит глаз. | 1.2 | ✓ | ✓ | ✓ | ✓ | ✓ | CHOSEN |
| B | wrong belief (8) | Это не тепловизор. Ваше тело светится само. | 1.1 | ✗ | ✓ | ✗ | ✓ | ✓ | |
| C | impossible detail (3) | Двадцать минут в темноте — и проявилось лицо. | 2.7 | ✓ | ✓ | ✓ | ✗ | ✓ | |

- A: the gated segment is `h1` «Ваше тело светится.» (≈ 1.2 s final); `h2` «В тысячу раз слабее, чем видит глаз.» follows after a 0.15 s pause (pair ≈ 2.9 s). Both card lines are on frame 0 (critic: a glowing face with three words alone reads as an «aura» thumbnail), so the number is on screen from the first frame; the voice reaches it at ≈ 2 s. Fallback if Liam mangles «слабее глаза»: «В тысячу раз слабее, чем видит глаз.»
- B denies an objection the viewer has not formed yet and has no number (both critics).
- C is the strongest picture but runs 2.7 s and makes the dark the thumbnail.
- **Card, frame 0, top third:** «ВАШЕ ТЕЛО СВЕТИТСЯ» (cream 64) / «≈ В 1000 РАЗ» (gold 76) / «СЛАБЕЕ ГЛАЗА» (gold 62), all three lines from frame 0; line 2 scales ×1.1 with a soft flash on «тысячу». **Frame 0:** the stylised bust on the velvet under the desk lamp; the pool fills most of the frame (luma ≥ 100) but its rim is already creeping toward the bust and the cream light cools; on both cheeks and the forehead a faint coral bloom (a hue the lamp does not have). Slow push-in. Subtitles hidden while the hook card is up.

> v2 (2026-11-07, owner's note after v1): three lines rewritten for plain speech — the hook's second phrase keeps the full comparison («…чем видит глаз»), the heat line compares the neck with the cheeks, the clock line names the body, not the volunteers (they stay on the card's small print). Rule: `script-critic.md` → plain-speech test.

## Beat table (final s, estimates; comp = ×1.25; the verb is light)
| t final | seg | voice line | on screen | verb the viewer must see |
|---|---|---|---|---|
| 0.0–1.2 | h1 | Ваше тело светится. | hook card (three lines); bust lamp-lit; faint coral on cheeks and forehead | **lamp dims**: the pool's rim creeps toward the face, the light cools |
| 1.4–2.9 | h2 | В тысячу раз слабее, чем видит глаз. | card line 2 scales ×1.1 with a soft flash on «тысячу»; the pool is down to the face outline by «глаза» | **pool shrinks** to the face; **bloom shows through** |
| 3.2–6.9 | cam | Полная темнота: камера собирала свет двадцать минут. | on `h2.e` **the lamp clicks OFF** (click): velvet to midnight blue, bust a silhouette, viewfinder brackets + sensor noise (the dark is the camera's view); on «камера» a cooled camera icon slides in from the right and frosts over (no digits); on «собирала» the shutter opens and the ring card «20 МИНУТ · УСКОРЕНО» fills as a time-lapse (tick); grain **accumulates** on cheeks and forehead only; chip «10:00» in the viewfinder corner on «минут» (stays) | **lamp OFF**, then **light accumulates** grain by grain |
| 7.4–10.3 `RE-HOOK` | face | И проявилось лицо: ярче всего — щёки и лоб. | the ring completes in the pause; on «проявилось» the shutter fires and the grain resolves into a face of coral light (ding); labels «ЩЁКИ» and «ЛОБ» pop on their words; the upper neck glows faintly | **face of light develops** |
| 10.7–13.9 `RE-HOOK` | ratio | Примерно в тысячу раз слабее, чем видит глаз. | the light-level bar rises at the left: coral tick «ТЕЛО» at the bottom, the line «ГЛАЗ» far above, a broken axis between; on «слабее» the counter climbs and lands «≈ ×1000» on «тысячу» (boom), held ≥ 2 s | **counter climbs** the bar to the eye's line |
| 14.3–17.4 `RE-HOOK` | heat | Это не тепло: шея теплее щёк, а светится слабее. | in the pause before: chip «АУРА?» pops with ✗ beside it, silent; on «тепло» chip «ТЕПЛО?» and a thermal lens slides across the bust (false colour: neck hot, cheeks cool), then parks right: coral left, thermal right; on «шея» the hot neck flares in the lens; on «почти» the lens slides out, the neck is dark; on «светится» ✗ beside «ТЕПЛО?» | **thermal lens slides**: the hot spot and the bright spot are different places |
| 17.8–21.4 `RE-HOOK` | chem | Это химия жизни: обмен веществ возбуждает молекулы, которые отдают свет. | zoom bubble into the cheek on «химия»: molecules jitter; on «возбуждает» one shakes; on «отдают» it sparks (soft flash) and the bloom pulses; chip «ОБМЕН ВЕЩЕСТВ → СВЕТ» on «свет» | **one molecule sparks**; **bloom pulses** |
| 22.0–25.6 `PAYOFF` | clock | Ярче всего тело светится около четырёх часов дня, утром — слабее. | the clock card «СВЕТ ЖИВЁТ ПО ЧАСАМ» is up from the pause before the line (the chip «10:00» flies into its readout); the hand sweeps from 10:00 on «добровольцев»; on «четырёх» (≈ 23.9 s ≈ 76 %) it lands «≈ 16:00» and the bloom peaks (boom + ding); on «утром» a light leak, tag «← УТРО», the hand rewinds to 10:00 and the bloom sinks; small print «пять добровольцев» | **hand sweeps and stops**; **bloom rises, then sinks** |
| 26.3–28.3 | close1 | Глаз этого не видит — камера видит. | on «Глаз» **the lamp clicks ON** (click): the warm pool floods the table and the bloom drowns in lamp light (that is the sentence); an eye icon ✗ pops at the left; on «камера» the viewfinder frame slides over the lit face and inside it, and only inside it, the coral bloom is visible | **lamp ON = the glow disappears**; **the viewfinder sees it** |
| 28.7–30.3 + tail ≤ 0.8 | close2 | Ваше тело светится, потому что живёт. | under the lamp; on «живёт» the bloom inside the viewfinder pulses once; end card «ВАШЕ ТЕЛО СВЕТИТСЯ,» / «ПОТОМУ ЧТО ЖИВЁТ.» lands on «живёт»; in the tail the viewfinder fades and the pool's rim begins to creep inward → last frame = frame 0 with the hook card hard-swapped on `close2.e` | **bloom pulses in the viewfinder**; **lamp begins to dim** = frame 0 |

Re-hooks 7.4 / 10.7 / 14.3 / 17.8 s; payoff «четырёх» ≈ 23.9 of ≈ 30 s (≈ 76 %, measure; if > 78 %, lengthen the pause before `close1` to 1.0 s comp). A visible change every ≤ 4 s. Facts: 5 (rows 2+4 · 1 · 5 · 7 · 3). Numbers in the voice: 20 минут, 1000, 16:00 («около четырёх»). Digits on screen: «≈ В 1000 РАЗ», «20», «≈ ×1000», «10:00 … ≈ 16:00»; «пять добровольцев» as a word; no «−120», no «2009» (both go to the caption).
Lamp-OFF world: 2.9 → 26.4 s (≈ 78 %), readable night as the camera's view (STYLE: dark stills ≥ 95); the last ≈ 4 s are lamp-lit, so the end card and the loop frame are bright.

Cut list if the measured composition runs over 46 s: (1) «Полная темнота:» in `cam`; (2) «самая горячая кожа,» → «горячая шея» in `heat`; (3) «Примерно» in `ratio`. If it runs short of 29 s final, hold the ring (pause before `face` 0.6 → 1.0 s comp); never add a fact.

## Ending
Loop: the last line «Ваше тело светится, потому что живёт.» repeats the first line word for word and finishes it with the reason; the thought is complete at `close2`, no question in the voice (the soft question lives in the caption). The lamp is ON from «Глаз» (the glow vanishes = why you have never seen it), the end card shows the conclusion, and inside the tail the pool starts to contract again so the last frame = frame 0 (hook card hard-swapped on `close2.e`). End card ≤ 1.5 s, audio tail ≤ 1.0 s, no CTA.

## Number table
| on screen | voice | what it measures | source |
|---|---|---|---|
| «≈ В 1000 РАЗ СЛАБЕЕ, / ЧЕМ ВИДИТ ГЛАЗ» (card, v2); bar «ТЕЛО … ≈ ×1000 … ГЛАЗ» | «В тысячу раз слабее глаза»; «Примерно в тысячу раз слабее, чем видит глаз» | ratio of the body's visible emission to the dark-adapted eye's threshold, as the authors state it; «≈» on every card | FACTS row 1 · [1], [5] |
| ring «20 МИНУТ · УСКОРЕНО» | «камера собирала свет двадцать минут» | one exposure of the 2009 study (CCD at −120 °C, 15 min dark adaptation; the cold shows as frost, the number goes to the caption) | FACTS row 2 · [1] |
| labels «ЩЁКИ», «ЛОБ»; grain on cheeks, forehead, faint upper neck | «ярче всего — щёки и лоб» | spatial distribution of the photon counts over the face | FACTS row 4 · [1] |
| chips «АУРА?» ✗ (silent), «ТЕПЛО?» ✗; thermal lens, no temperatures | «Это не тепло: самая горячая кожа, шея, почти не светится» | thermographic vs photon images of the same subjects do not match; the hottest skin (side of the neck) emitted few photons | FACTS row 5 · [1], [5] |
| zoom bubble, one spark; chip «ОБМЕН ВЕЩЕСТВ → СВЕТ» | «обмен веществ возбуждает молекулы, они отдают свет» | mechanism: reactive oxygen species of metabolism excite molecules that release photons | FACTS row 7 · [6], [7], [2] |
| clock card «СВЕТ ЖИВЁТ ПО ЧАСАМ», chip/readout «10:00 → ≈ 16:00 → 10:00», small print «пять добровольцев» | «У добровольцев ярче всего — около четырёх часов дня, утром — слабее» | highest photon count at the ≈ 16:00 session, lowest at 10:00, within the measured 10:00–22:00 window; five volunteers | FACTS rows 2, 3 · [1] |

## Sources
As numbered in `C:\2d\niches\trend-week\FACTS-03.md` §5: [1] Kobayashi, Kikuchi, Okamura, PLoS ONE 2009 (open access; names in Sources only); [2] University of Calgary news 2025 (mechanism wording only); [5] Наука Mail 19 May 2026; [6] Wikipedia «Biophoton»; [7] Cifra & Pospíšil 2014.

## Safety check
- Harm on screen: none (a drawn bust, a camera icon, a lens, cards; no body below the collar, no realistic face; the mice and anything about death are not in the video)
- Advice: none; nothing to copy («Глаз этого не видит»)
- Brands / real people / minors at risk: none (researchers unnamed and undrawn; no camera brand; the bust is our own drawing)
- Medical / financial advice: none beyond nothing
- Pseudoscience: «АУРА?» only as a silent crossed chip; no aura, soul, biofield, Kirlian or «энергия» anywhere else; the glow is «химия жизни»
- Not claimed: an exact ratio («примерно», «≈»); night values («утром»); that all people share the rhythm («у добровольцев»); «впервые»; wattage, flux, wavelengths, temperatures; cortisol; cell signalling
- Copyright: own drawings; music `story1/sfx/track.wav` (POA, CC BY, credit in the caption); shutter CC BY, tick CC0, click CC0 per `story1/sfx/CREDITS.txt`; «Voice: ElevenLabs» in the caption
- Caption: soft question, no bait

## Voice segments (`story1/spec.json`, `"lang": "ru"`, `"tail": 0.8`)
```json
"voices": { "N": {"provider": "eleven", "voice": "TX3LPaxmHKxFdv7VOQHJ", "speed": 1.0, "stability": 0.6, "similarity": 0.8, "style": 0.1, "fx": "narrator"} },
"segments": [
  ["h1",     "N", 0.05, "Ваше *тело* светится."],
  ["h2",     "N", 0.15, "В *тысячу* раз слабее глаза."],
  ["cam",    "N", 0.35, "Полная темнота: камера собирала свет *двадцать* минут."],
  ["face",   "N", 1.00, "И проявилось *лицо*: ярче всего — щёки и лоб."],
  ["ratio",  "N", 0.45, "Примерно в *тысячу* раз слабее, чем видит глаз."],
  ["heat",   "N", 0.50, "Это не тепло: самая горячая кожа, *шея*, почти не светится."],
  ["chem",   "N", 0.40, "Это химия жизни: обмен веществ возбуждает *молекулы*, которые отдают свет."],
  ["clock",  "N", 0.90, "У добровольцев ярче всего — около *четырёх* часов дня, утром — слабее."],
  ["close1", "N", 0.80, "Глаз этого не видит — *камера* видит."],
  ["close2", "N", 0.45, "Ваше тело светится, потому что *живёт*."]
]
```

### Word anchors (director + sound designer)
- `h1` frame 0: lamp dim begins; `h2:ТЫСЯЧУ` card line 2 scales ×1.1 (soft pop); `h2.e` **lamp click OFF** (`file:click`), music → silent, velvet to midnight, brackets + sensor noise in
- `cam:КАМЕРА` camera icon slides in from the right (whoosh soft) + frost crawls; `cam:СОБИРАЛА` shutter (`file:shutter`), ring starts, `file:tick` until `face:ПРОЯВИЛОСЬ`, grain accumulates; `cam:МИНУТ` chip «10:00» pops in the corner
- `face:ПРОЯВИЛОСЬ` ring completes, shutter (`file:shutter`), face of light resolves (ding), music back soft; `face:ЩЁКИ` label (pop); `face:ЛОБ` label (pop)
- `ratio:ПРИМЕРНО` bar rises (whoosh soft), tick «ТЕЛО», line «ГЛАЗ»; `ratio:СЛАБЕЕ` counter climbs; `ratio:ТЫСЯЧУ` «≈ ×1000» lands (boom)
- `heat-0.5` chip «АУРА?» + ✗ (pop, errbuzz soft); `heat:ТЕПЛО` chip «ТЕПЛО?», thermal lens slides in (whoosh); `heat:ШЕЯ` neck flares in the lens; `heat:ПОЧТИ` lens slides out; `heat:СВЕТИТСЯ` ✗ beside «ТЕПЛО?» (errbuzz)
- `chem:ХИМИЯ` zoom bubble opens (whoosh soft); `chem:ВОЗБУЖДАЕТ` molecule shakes; `chem:ОТДАЮТ` spark (Flash + ding soft), bloom pulses; `chem:СВЕТ` chip «ОБМЕН ВЕЩЕСТВ → СВЕТ» (pop); `chem.e` bubble closes
- `clock-0.6` music → silent, clock card «СВЕТ ЖИВЁТ ПО ЧАСАМ» unfolds, chip flies into the readout (whoosh); `clock:ДОБРОВОЛЬЦЕВ` hand starts sweeping (`file:tick` fast), bloom rises; `clock:ЧЕТЫРЁХ` hand lands «≈ 16:00», bloom peaks (boom + ding), music back soft; `clock:УТРОМ` light leak, tag «← УТРО», hand rewinds to 10:00 (whoosh soft), bloom sinks
- `close1:ГЛАЗ` **lamp click ON** (`file:click`), pool floods, bloom drowns, eye icon ✗ (errbuzz soft); `close1:КАМЕРА` viewfinder frame slides over the face (`file:shutter` soft), bloom visible inside it only
- `close2:ЖИВЁТ` bloom pulses inside the viewfinder, end card lands (soft card hit); `close2.e` hard swap → hook card; tail ≤ 0.8 s: viewfinder fades, the pool's rim begins to creep inward → frame 0
- Music: `"file": "track"` (`story1/sfx/track.wav`, gain 0.4, duck 0.6), sections `[[0, "soft"], ["h2.e", "silent"], ["face:ПРОЯВИЛОСЬ", "soft"], ["clock-0.6", "silent"], ["clock:ЧЕТЫРЁХ", "soft"]]`, riser `[["chem", "clock:ЧЕТЫРЁХ"]]`. (Word refs: Ё = Е for the engine.)

Russian checks: ≤ 11 words per line; no mid-line periods; numbers as words in the right case («в тысячу раз», «двадцать минут», «около четырёх часов дня»); ё written («щёки», «четырёх», «живёт»); no stress marks; «собирала» not «копила»; «у добровольцев», never «у всех»; «утром», never «ночью». Listen once on the phone: «слабее глаза», «проявилось», «тепловизора» (card only now), «возбуждает», «добровольцев».

## Caption (for the publisher)
«Около четырёх дня свет ярче всего. Заметили бы?» · line 2: «Снято в 2009 году камерой, охлаждённой до −120 °C: двадцать минут в полной темноте.» · keywords: тело светится, человек светится, фотоны, тепловизор, свечение · `#наука #интересныефакты #биология #свет #физика` · «Voice: ElevenLabs» + music/SFX credits from `story1/sfx/CREDITS.txt`.

## Next videos
The cut leaf that glows brightest along the cut (Calgary 2025, plants only); Gurwitsch 1923 and ~500 failed replications; photon flux; the eye's ~10 photons per flash; the green-to-red spectrum; the cortisol correlation; the 1974 confirmation.
