import { DEFAULT_POLICY, evaluateJob } from '../src/core/decision-engine.js';
import { sampleJobs } from '../src/data/sample-jobs.js';

const evaluated = sampleJobs.map((job) => ({ ...job, evaluation: evaluateJob(job) }));
const count = (decision) => evaluated.filter((j) => j.evaluation.decision === decision).length;

document.querySelector('#metrics').innerHTML = [
  ['Scanned', evaluated.length],
  ['Prepare', count('PREPARE_DOCUMENTS')],
  ['Review', count('REVIEW')],
  ['Rejected', count('REJECT')],
].map(([label, value]) => `<article class="metric"><div class="label">${label}</div><div class="value">${value}</div></article>`).join('');

const label = {
  PREPARE_DOCUMENTS: ['Prepare documents', 'prepare'],
  REVIEW: ['Review', 'review'],
  REJECT: ['Reject', 'reject'],
};

document.querySelector('#jobs').innerHTML = evaluated.map((job) => {
  const [decisionLabel, cls] = label[job.evaluation.decision];
  return `
    <tr>
      <td><strong>${job.company}</strong><div class="role">${job.role} · ${job.location}</div></td>
      <td>${job.workMode}</td>
      <td class="score">${job.fitScore}</td>
      <td class="score">${job.trustScore}</td>
      <td>${job.ageHours}h</td>
      <td><span class="badge ${cls}">${decisionLabel}</span><div class="reason">${job.evaluation.reasons.join(' ')}</div></td>
    </tr>`;
}).join('');

const policyEl = document.querySelector('#policy');
document.querySelector('#explainBtn').addEventListener('click', () => {
  policyEl.classList.toggle('hidden');
  policyEl.innerHTML = `
    <strong>Current policy</strong><br>
    Minimum trust: ${DEFAULT_POLICY.minTrustScore} · Auto-prepare fit: ${DEFAULT_POLICY.autoPrepareFitScore} ·
    Review fit: ${DEFAULT_POLICY.reviewFitScore} · Maximum age: ${DEFAULT_POLICY.maxJobAgeHours} hours ·
    Hybrid/remote roles must meet the demo compensation policy · Contract excluded · Verified posting date required.
  `;
});
