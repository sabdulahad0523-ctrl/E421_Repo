const FLIGHT_DEMO = (function () {
  'use strict';

  const routes = {
    NRT: ['Tokyo Narita', 'Tokyo', '東京', '東京', '도쿄'],
    KIX: ['Osaka Kansai', 'Osaka', '大阪', '大阪', '오사카'],
    TPE: ['Taipei', 'Taipei', '台北', '台北', '타이베이'],
    ICN: ['Seoul Incheon', 'Seoul', '首爾', 'ソウル', '서울'],
    CTS: ['Sapporo', 'Sapporo', '札幌', '札幌', '삿포로'],
    FUK: ['Fukuoka', 'Fukuoka', '福岡', '福岡', '후쿠오카'],
    BKK: ['Bangkok', 'Bangkok', '曼谷', 'バンコク', '방콕']
  };
  const presets = {
    UO870: { to: 'NRT', day: 0, std: 14 * 60 + 55, gate: '23', pax: 188 },
    UO702: { to: 'TPE', day: 0, std: 20 * 60 + 40, gate: '31', pax: 176 },
    UO116: { to: 'CTS', day: 1, std: 8 * 60 + 30, gate: '19', pax: 220 }
  };
  const todayISO = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Hong_Kong' }).format(new Date());

  function normalizeFlightNumber(value) {
    return String(value || '').replace(/\s+/g, '').toUpperCase();
  }

  function addDays(iso, days) {
    const date = new Date(iso + 'T00:00:00Z');
    date.setUTCDate(date.getUTCDate() + days);
    return date.toISOString().slice(0, 10);
  }

  function formatTime(totalMinutes) {
    const minutes = ((totalMinutes % 1440) + 1440) % 1440;
    return String(Math.floor(minutes / 60)).padStart(2, '0') + ':' + String(minutes % 60).padStart(2, '0');
  }

  function getDefaults(flightNumber) {
    const preset = presets[normalizeFlightNumber(flightNumber)] || presets.UO870;
    return { ...preset, date: addDays(todayISO, preset.day) };
  }

  return { defaultFlightNumber: 'UO612', routes, todayISO, normalizeFlightNumber, addDays, formatTime, getDefaults };
}());
