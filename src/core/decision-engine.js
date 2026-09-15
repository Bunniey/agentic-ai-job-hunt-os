/**
 * Portfolio-safe decision engine.
 *
 * It demonstrates how business rules can be expressed as deterministic,
 * testable policy rather than hidden inside prompts or UI code.
 * All thresholds and demo data are illustrative public-showcase values.
 */

export const DEFAULT_POLICY = Object.freeze({
  minTrustScore: 85,
  autoPrepareFitScore: 85,
  reviewFitScore: 75,
  maxJobAgeHours: 36,
  excludeContract: true,
  requireVerifiedPostingDate: true,
});

/**
 * @typedef {Object} JobCandidate
 * @property {string} id
 * @property {number} fitScore
 * @property {number} trustScore
 * @property {number|null} ageHours
 * @property {boolean} postingDateVerified
 * @property {'onsite'|'hybrid'|'remote'} workMode
 * @property {'full-time'|'contract'|'internship'} employmentType
 * @property {boolean} meetsRemoteCompensationPolicy
 */

/**
 * @param {JobCandidate} job
 * @param {typeof DEFAULT_POLICY} [policy]
 */
export function evaluateJob(job, policy = DEFAULT_POLICY) {
  const reasons = [];

  if (policy.excludeContract && job.employmentType === 'contract') {
    reasons.push('Contract roles are excluded.');
  }

  if (policy.requireVerifiedPostingDate && !job.postingDateVerified) {
    reasons.push('Posting date could not be verified.');
  }

  if (job.ageHours == null || job.ageHours > policy.maxJobAgeHours) {
    reasons.push(`Vacancy exceeds the ${policy.maxJobAgeHours}-hour freshness window.`);
  }

  if (job.trustScore < policy.minTrustScore) {
    reasons.push(`Trust score is below ${policy.minTrustScore}.`);
  }

  const remoteOrHybrid = job.workMode === 'remote' || job.workMode === 'hybrid';
  if (remoteOrHybrid && !job.meetsRemoteCompensationPolicy) {
    reasons.push('Hybrid/remote role does not meet the portfolio compensation policy.');
  }

  if (reasons.length > 0) {
    return { decision: 'REJECT', reasons };
  }

  if (job.fitScore >= policy.autoPrepareFitScore) {
    return {
      decision: 'PREPARE_DOCUMENTS',
      reasons: ['Fit and trust thresholds passed.'],
    };
  }

  if (job.fitScore >= policy.reviewFitScore) {
    return {
      decision: 'REVIEW',
      reasons: ['Trust threshold passed; fit requires human review.'],
    };
  }

  return {
    decision: 'REJECT',
    reasons: [`Fit score is below ${policy.reviewFitScore}.`],
  };
}
