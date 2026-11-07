# 2D Shorts Factory — "Под лампой" (Under the Lamp)

A studio of twelve AI agent roles that turns an idea into a finished vertical animated short with measured quality gates, built for TikTok / Shorts / Reels.
Every video is one object on a velvet table under a lamp, one sourced surprising number, one visible "verb" of light, 30–35 seconds, looping back into frame 0.
Language of the channel: Russian.

[Русская версия ниже](#русская-версия)

## What is in this repository

| folder | contents |
|---|---|
| `videos/` | two finished shorts: *The Lycurgus Cup* (a 1,600-year-old glass that changes colour) and *Your body glows* (the body emits visible light a thousand times below the eye's threshold); licences in `videos/CREDITS.md` |
| `docs/FACTORY-RU.md` | research: what holds attention in the first 2 seconds, rules for the hook, re-hooks, payoff and loop, and how to organise a factory by roles (Russian) |
| `docs/STUDIO-RU.md` | how the studio works: roles, gates, what each role hands to the next (Russian) |
| `studio/` | the role prompts: showrunner, researcher, screenwriter, script critic, Russian copy editor, director, art director, sound designer, animator, QA editor, publisher, analyst |
| `workflows/studio-preprod.js` | pre-production as a deterministic multi-agent pipeline: brief → facts → three competing scripts → adversarial critics → judge → fix loop → copy editor |
| `niche/trend-week/` | the niche profile (promise, viewer, look, voice, topics) and the full paper trail of both videos: brief, script with the hook table, storyboard, style guide, QA report with measurements, caption |
| `brand/` | the channel avatar |

## How a video is made

1. **Brief.** The showrunner turns an idea into one page: one idea, the viewer, the promise, format, length.
2. **Facts.** The researcher collects every number with a source and with *what exactly* it measures, plus unit and safety traps.
3. **Three scripts.** Three screenwriters start from different hook formulas; each delivers a beat table: the voice line, what is on screen, the action the viewer must see.
4. **Critics.** The script critic reads as a scrolling viewer: the 2-second test, the retell test, fact density, loop integrity, and a back-translation test (a Russian line must not sound like a translation from English).
5. **Judge and fix loop.** The showrunner merges the best, the critic iterates to PASS, the researcher re-verifies every number.
6. **Copy editor.** Voice lines are rewritten as living spoken Russian: one thought per sentence, verbs over nouns, spoken connectors.
7. **Director, art director, sound.** A storyboard where every event is anchored to a word of the voice; a style guide with luminance targets; ElevenLabs voice with delivery tags (whisper, excitement), word timings snapped to Whisper recognition; a licensed music track and recorded sound effects.
8. **Animator.** Remotion scenes that hang on words, never on seconds; layout lint; contact sheets.
9. **QA editor.** One render; then ×1.25 speed, −14 LUFS, luminance ≥ 100, subtitle sync checked with Whisper, loop check (last frame = frame 0), motion strips. No file leaves without passing the gate.
10. **Publisher and analyst.** Caption with search keywords and credits, posting slot and log; 48 hours later five numbers from the platform and one variable to change next.

## Rules that came out of practice

- The whole hook fits in 2 seconds; when the voice cannot, the hook becomes two short phrases and the gate measures the first.
- A visible change every ≤ 2 seconds, the camera never static; props enter in 0.3 s and leave when their word ends.
- Russian is written in Russian from the start, the way you would say it to a friend; if the word-for-word English back-translation sounds better, the line is a calque and gets rewritten.
- Numbers on screen = numbers in the voice; one number per beat; every number has a source.
- No whisper on the hook: it is the hardest line to hear over music.

## What is not here

The rendering engine (voice, mix, checks, render) and the scene templates live in a separate private repository: they grew out of a kit that is not mine alone. This repository holds only what the studio produced: roles, rules, the pipeline, the videos' documents and the videos themselves.

## Licence

Texts, role prompts and documents: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — read, learn, quote with attribution; no commercial use. Videos: portfolio display only; the ElevenLabs voice (free plan, attribution required), music and sounds are licensed as listed in `videos/CREDITS.md`.

---

## Русская версия

Студия из двенадцати ролей-агентов делает короткие анимированные ролики для TikTok / Shorts / Reels: от идеи до файла с замерами.
Один ролик = один объект на бархатном столе под лампой, один удивительный факт с источником, одно действие света, 30–35 секунд, петля в первый кадр.

Пайплайн: бриф → факты с источниками → три конкурирующих сценария → критики (тест двух секунд, тест пересказа, тест обратного перевода) → судья → цикл правок → редактор русского текста → раскадровка, привязанная к словам голоса → стиль с целями яркости → озвучка ElevenLabs с тегами подачи и таймингами слов по Whisper → сцены в Remotion → один рендер → гейты финиша (×1.25, −14 LUFS, яркость ≥ 100, синхрон субтитров, петля) → подпись и лог постов → аналитика через 48 часов.

В `videos/` два готовых ролика, в `docs/` исследование и описание студии, в `studio/` роли, в `workflows/` пайплайн препродакшена, в `niche/` профиль ниши и все документы обоих роликов. Движок и шаблоны сцен лежат в отдельном приватном репозитории. Лицензия CC BY-NC 4.0 на тексты; ролики только для показа в портфолио.
