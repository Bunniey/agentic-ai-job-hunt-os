/**
 * Converts multiple discovery-source outcomes into a user-facing sync result.
 * This pattern prevents a complete provider outage from being reported as a
 * successful scan with zero jobs.
 */
export function summarizeSourceHealth(results) {
  const successful = results.filter((result) => result.ok);
  const failed = results.filter((result) => !result.ok);

  if (results.length === 0) {
    throw new Error('No job sources are configured.');
  }

  if (successful.length === 0) {
    const detail = failed
      .map((item) => `${item.source}: ${item.error || 'unknown error'}`)
      .join('; ');
    throw new Error(`All configured job sources failed. ${detail}`);
  }

  return {
    status: failed.length ? 'PARTIAL_SUCCESS' : 'SUCCESS',
    successfulSources: successful.map((item) => item.source),
    failedSources: failed.map((item) => ({ source: item.source, error: item.error })),
    jobs: successful.flatMap((item) => item.jobs || []),
  };
}
