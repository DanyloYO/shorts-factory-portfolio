# NICHE: trend-week            ← one niche = one folder = one account per platform

Trial niche: one hand-drawn 2D explainer per week on the science story that is in this week's Russian digests, with one surprising sourced number
and one visible verb (something slides, counts, changes colour). First video: the Lycurgus Cup (FACTS.md).

## Promise (one sentence)
Одна вещь из новостей науки этой недели, которую можно показать так, что её захочется переслать другу.

## Viewer
- who: 18–40, both sexes, Russian-speaking; scroll past talking heads; send friends "смотри, что умели/нашли"
- language: `ru`
- what they already believe: hi-tech = 21st century; old things are crude; science news is boring

## Format
- format file: `formats/why.md` (closest) · length: 30–45 s final · parts: single, loop ending
- hook formulas that fit: #12 impossible fact + number, #8 wrong belief, #3 impossible detail
- re-hook cadence: every 8–12 s · payoff at 60–80 % · ending: loop (last frame = frame 0)
- **pace (owner, 2026-11-06): dynamic.** A visible change every ≤ 2 s; the camera never static (a continuous push + an impulse on every accented word, stamp and light event); props enter in 0.3 s with overshoot and leave when their word ends; holds ≤ 1.2 s except the payoff stamp and the hook card; the hero object moves every second; trucks/whips ≤ 0.7 s. Static frames are the failure mode of this channel.

## Look (the recognisable thing)
- template: the `projects/math-universe` structure (fx library, Russian two-colour subtitles, portal transitions) · world: one object lit on a dark-blue velvet table
- the signature: a single light source the viewer can see (a lamp, a candle, the sun) that moves and changes what the object looks like; the "verb" is always light
- palette anchors: #f4e6c8 (warm light) · #1d2f7a (velvet) · #d9891c (gold accent) · luma target ≥ 100 (bright backdrop, dark only inside objects)
- type: cards 62–78 px, two subtitle colours (white + yellow)

## Sound
- narrator: ElevenLabs "Liam" (voice_id TX3LPaxmHKxFdv7VOQHJ, env ELEVEN_VOICE_RU; free plan → caption credit «Voice: ElevenLabs»; model `eleven_v4` with delivery tags per `rules/LANGUAGES.md` «Intonation», word times snapped to Whisper by the engine; v4 speaks ≈ 15 % slower than v2 and ignores `speed`, so the hook is two short phrases), fallback edge-tts ru-RU-DmitryNeural · second voice: none
- music: a real open-licensed track under the voice (`sfx_fetch.py search … --music`), `silent` before the twist · signature SFX: a soft lamp click, a glass ring
- real recordings: glass ring / tap via sfx_fetch

## Topics (owner, 2026-11-07)
02-rovers (a record held by machines, dates and distances) — «тема так себе», not posted; 03-glow (the viewer's own body, something they
can picture on themselves) — kept. Pick topics the viewer can check on their own body, kitchen, phone or street; history-of-technology records
and dates are off this channel unless the twist lands on the viewer. The voice is written in Russian first and passes `editor-ru`
(rules/LANGUAGES.md «Russian is speech, not translation»): the owner hears calques as «дословный перевод».

## Never (beyond rules/SAFETY.md)
Living researchers named in the voice; brands; "впервые в истории" claims; politics; disasters with victims.

## Search and posting
- keywords viewers type: кубок ликурга, римское стекло, нанотехнологии, меняет цвет, древние технологии
- hashtags pool (≤ 5 per post): #наука #интересныефакты #история #космос #биология + 2 topic tags per video (01: #древниетехнологии #стекло · 02: #луноход #марсоход · 03: #телочеловека #свечение)
- channel name: «Под лампой» (handles: @podlampoy, @pod.lampoy; alt names «На просвет», «Разглядели»); avatar: brand/avatar-1024.png = a lamp over an unknown object with a «?» (SVG source brand/avatar.svg) · account(s): TBD by the owner · cadence: 1/day max, 3/week target

## Trial status (filled by the analyst)
| batch | videos | median views @48 h | median watch % | swipe/chose-to-view | saves+shares /1k | verdict |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
