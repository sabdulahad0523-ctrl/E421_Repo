const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');

const { arrivalTimes } = runInNewContext(
  readFileSync(join(__dirname, '../flight-data.js'), 'utf8') + '\nFLIGHT_DEMO;'
);

test('arrival estimates add the delay in destination-local time without changing the schedule', () => {
  for (const [destination, scheduled, estimated] of [
    ['NRT', '20:15', '20:55'],
    ['BKK', '16:55', '17:35']
  ]) {
    assert.deepEqual({ ...arrivalTimes(destination, '2026-11-15', 14 * 60 + 55, 40) }, {
      scheduledArrival: scheduled,
      scheduledArrivalDate: '2026-11-15',
      newArrival: estimated,
      newArrivalDate: '2026-11-15'
    });
  }
});

test('scheduled and delayed arrivals roll into their own dates across a year boundary', () => {
  assert.deepEqual({ ...arrivalTimes('NRT', '2026-12-31', 23 * 60 + 30, 1440) }, {
    scheduledArrival: '04:50',
    scheduledArrivalDate: '2027-01-01',
    newArrival: '04:50',
    newArrivalDate: '2027-01-02'
  });
});

test('an unavailable delay retains the scheduled arrival without inventing an estimate', () => {
  assert.deepEqual({ ...arrivalTimes('NRT', '2026-11-15', 14 * 60 + 55, null) }, {
    scheduledArrival: '20:15',
    scheduledArrivalDate: '2026-11-15',
    newArrival: null,
    newArrivalDate: null
  });
});
