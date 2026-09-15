import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateJob } from '../src/core/decision-engine.js';

const base = {
  id: 'TEST',
  fitScore: 90,
  trustScore: 90,
  ageHours: 10,
  postingDateVerified: true,
  workMode: 'onsite',
  employmentType: 'full-time',
  meetsRemoteCompensationPolicy: true,
};

test('high fit + high trust is eligible for document preparation', () => {
  assert.equal(evaluateJob(base).decision, 'PREPARE_DOCUMENTS');
});

test('fit 75-84 with sufficient trust enters review', () => {
  assert.equal(evaluateJob({ ...base, fitScore: 80 }).decision, 'REVIEW');
});

test('trust below threshold rejects the vacancy', () => {
  assert.equal(evaluateJob({ ...base, trustScore: 84 }).decision, 'REJECT');
});

test('unverified posting date rejects the vacancy', () => {
  assert.equal(evaluateJob({ ...base, postingDateVerified: false }).decision, 'REJECT');
});

test('old vacancy rejects the vacancy', () => {
  assert.equal(evaluateJob({ ...base, ageHours: 37 }).decision, 'REJECT');
});

test('contract role rejects the vacancy', () => {
  assert.equal(evaluateJob({ ...base, employmentType: 'contract' }).decision, 'REJECT');
});

test('remote role failing compensation policy is rejected', () => {
  assert.equal(
    evaluateJob({ ...base, workMode: 'remote', meetsRemoteCompensationPolicy: false }).decision,
    'REJECT'
  );
});

test('remote role meeting compensation policy can pass', () => {
  assert.equal(
    evaluateJob({ ...base, workMode: 'remote', meetsRemoteCompensationPolicy: true }).decision,
    'PREPARE_DOCUMENTS'
  );
});
