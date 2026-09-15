export const EvidenceClass = Object.freeze({
  EXPLICIT: 'EXPLICIT',
  SUPPORTED_INFERENCE: 'SUPPORTED_INFERENCE',
  UNSUPPORTED: 'UNSUPPORTED',
});

/**
 * Only explicit facts or defensible inferences may enter a submitted resume.
 * Unsupported claims are returned as gaps instead of being "improved" by AI.
 */
export function partitionResumeClaims(claims) {
  const usable = [];
  const gaps = [];

  for (const claim of claims) {
    if (
      claim.evidenceClass === EvidenceClass.EXPLICIT ||
      claim.evidenceClass === EvidenceClass.SUPPORTED_INFERENCE
    ) {
      usable.push(claim);
    } else {
      gaps.push(claim);
    }
  }

  return { usable, gaps };
}
