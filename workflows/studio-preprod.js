export const meta = {
  name: 'studio-preprod',
  description: 'Studio pre-production: brief, facts, 3 competing scripts, adversarial critics, a judge, a fix loop until the critic passes',
  whenToUse: 'A new short from an idea: run before the user gate on the hook table. args: {idea, project, lang, format?, constraints?}',
  phases: [{ title: 'Brief' }, { title: 'Facts' }, { title: 'Write' }, { title: 'Critique' }, { title: 'Judge' }, { title: 'Fix loop' }, { title: 'Editor', detail: 'editor-ru: living Russian, no calques (lang ru only)' }],
}
// args: { idea: string, project: "C:\\2d\\projects\\<slug>", lang: "ru"|"en", format?: string, constraints?: string }
const A = args || {}
const KIT = 'C:\\2d\\skill\\viral-shorts'
const ctx = `Kit: ${KIT}. Project folder: ${A.project}. Language: ${A.lang || 'en'}. Format: ${A.format || 'pick from formats/'}. Constraints: ${A.constraints || 'none'}.`
const FORMULAS = ['impossible fact / impossible detail', 'wrong belief / secret', 'in medias res / challenge question']

phase('Brief')
const brief = await agent(`${ctx}\nMode A: write BRIEF.md for this idea. You are read-only: return the full BRIEF.md text (the producer saves it to ${A.project}\\BRIEF.md).\nIdea: ${A.idea}`,
  { label: 'showrunner:brief', agentType: 'showrunner', phase: 'Brief' })
if (!brief) throw new Error('no brief')

phase('Facts')
const facts = await agent(`${ctx}\nWrite FACTS.md for this brief and save it as ${A.project}\\FACTS.md; return its full text.\n\n${brief}`,
  { label: 'researcher', agentType: 'researcher', phase: 'Facts' })
if (!facts) throw new Error('no facts')

const VERDICT = { type: 'object', properties: { verdict: { type: 'string', enum: ['PASS', 'FAIL'] }, report: { type: 'string' } }, required: ['verdict', 'report'] }
// three writers in parallel, each critiqued as soon as it lands
const drafts = await pipeline(FORMULAS,
  (f, _, i) => agent(`${ctx}\nWrite a complete SCRIPT.md from the brief and the facts. Lead with hook formula "${f}" (the other two variants in the hook table may use any formula). Save it as ${A.project}\\drafts\\script-${i + 1}.md and return its full text.\n\nBRIEF:\n${brief}\n\nFACTS:\n${facts}`,
    { label: `screenwriter:${i + 1}`, agentType: 'screenwriter', phase: 'Write' }),
  (script, f, i) => script ? agent(`${ctx}\nCritique this script against the brief (and the facts for numbers). Return VERDICT and the must-fix list.\n\nBRIEF:\n${brief}\n\nFACTS:\n${facts}\n\nSCRIPT:\n${script}`,
    { label: `critic:${i + 1}`, agentType: 'script-critic', phase: 'Critique', schema: VERDICT }).then(v => ({ script, critique: v })) : null)
const live = drafts.filter(Boolean)
if (!live.length) throw new Error('no drafts')
log(`${live.length} drafts critiqued: ${live.map(d => d.critique?.verdict).join(', ')}`)

phase('Judge')
let script = await agent(`${ctx}\nMode B: judge these ${live.length} scripts with their critiques. Return the scores, the winner, the merge list, the kill list, AND the merged SCRIPT.md in full (that merged text is what the studio will use).\n\nBRIEF:\n${brief}\n\n` +
  live.map((d, i) => `=== DRAFT ${i + 1} ===\n${d.script}\n--- critique ---\n${d.critique?.report}`).join('\n\n'),
  { label: 'showrunner:judge', agentType: 'showrunner', phase: 'Judge' })

phase('Fix loop')
let verdict = null
for (let round = 1; round <= 2; round++) {
  verdict = await agent(`${ctx}\nRound ${round}. Critique the merged script. Return VERDICT and the must-fix list (say which earlier items are fixed).\n\nBRIEF:\n${brief}\n\nFACTS:\n${facts}\n\nSCRIPT:\n${script}`,
    { label: `critic:final:${round}`, agentType: 'script-critic', phase: 'Fix loop', schema: VERDICT })
  if (!verdict || verdict.verdict === 'PASS') break
  script = await agent(`${ctx}\nRewrite from the critic's notes: change only what the notes name, keep ids and anchors stable. Save the result as ${A.project}\\SCRIPT.md and return the full text, then a list of what you changed and what you refused (with why).\n\nBRIEF:\n${brief}\n\nFACTS:\n${facts}\n\nCRITIC:\n${verdict.report}\n\nSCRIPT:\n${script}`,
    { label: `screenwriter:fix:${round}`, agentType: 'screenwriter', phase: 'Fix loop' }) || script
}
let edited = null
if ((A.lang || 'en') === 'ru') {                                   // Russian is speech, not translation: the editor pass is mandatory (owner, 2026-11-07)
  phase('Editor')
  edited = await agent(`${ctx}\nОтредактируй строки голоса и надписи этого сценария живым разговорным русским по правилам своей роли (калька с английского = провал). Сохрани результат в ${A.project}\\SCRIPT.md (только колонка голоса, блок сегментов и надписи) и верни полный текст SCRIPT.md, затем таблицу «было → стало → почему» и список ушедших якорных слов.\n\nFACTS:\n${facts}\n\nSCRIPT:\n${script}`,
    { label: 'editor-ru', agentType: 'editor-ru', phase: 'Editor' })
  if (edited) script = edited
}
const check = await agent(`${ctx}\nVerify every number and claim of this script against FACTS.md. Return PASS or the fix list only.\n\nFACTS:\n${facts}\n\nSCRIPT:\n${script}`,
  { label: 'researcher:verify', agentType: 'researcher', phase: 'Fix loop' })
return { brief, script, verdict, factcheck: check, edited: !!edited, drafts: live.map(d => d.critique?.verdict) }
