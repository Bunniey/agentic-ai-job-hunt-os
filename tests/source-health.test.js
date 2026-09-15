import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeSourceHealth } from '../src/core/source-health.js';

test('all failed sources surface an error instead of false zero-result success', () => {
  assert.throws(
    () => summarizeSourceHealth([{ source: 'Web discovery', ok: false, error: 'quota exceeded' }]),
    /All configured job sources failed/
  );
});

test('partial failure remains usable but visible', () => {
  const result = summarizeSourceHealth([
    { source: 'ATS', ok: true, jobs: [{ id: 1 }] },
    { source: 'Web discovery', ok: false, error: 'temporary failure' },
  ]);
  assert.equal(result.status, 'PARTIAL_SUCCESS');
  assert.equal(result.jobs.length, 1);
  assert.equal(result.failedSources.length, 1);
});
