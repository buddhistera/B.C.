/* sunpage.js — full-page "ඉර හා සඳෙහි පිහිටීම සහ වෙලාවන්" (replaces the old sun modal card; the old modal stays as a hidden data source + fallback).
   Also contains the former location.js logic (window.fetchLocationAndSunData), so location.js is no longer needed.
   Needs: astronomy.browser.min.js, three.min.js (lazy-loaded here if needed), visuals3d.js (optional: lit moon + textures). */
(function () {
'use strict';
var W = window, doc = document, LS = W.localStorage, D = Math.PI / 180, ER = 10, MD = 18, SD = 34, CD = 121, N = 72;
var $ = function (i) { return doc.getElementById(i); };
var en = function () { return typeof isEnglish === 'function' && isEnglish(); };
var tr = function (s, e) { return en() ? e : s; };
var P = null, R = null, T = null, pushed = false, busy = false;

var TX = { title: ['ඉර හා සඳෙහි පිහිටීම සහ වෙලාවන්', 'Sun & Moon Times'], loc: ['ස්ථානය ලබාගන්න', 'Get My Location'], now: ['දැන්', 'Now'],
  hTimes: ['අරුණෝදය හා මධ්‍යහ්න වෙලාවන්', 'Dawn & Noon Times'], hTimesD: ['තෝරාගත් දිනයේ අරුණෝදය, ඉර උදාව, මධ්‍යහ්නය සහ ඉර බැසීම', 'Dawn, sunrise, noon and sunset for the chosen day'],
  dawn: ['අරුණෝදය', 'Dawn'], sunrise: ['ඉර උදාව', 'Sunrise'], noon: ['මධ්‍යහ්නය', 'Noon'], sunset: ['ඉර බැසීම', 'Sunset'],
  hMoon: ['සඳෙහි පිහිටීම හා වෙලාවන්', 'Moon & Timings'], hMoonD: ['කලාව, දීප්තිය, සඳ උදාව/බැසීම සහ පෝය වේලාවන්', 'Phase, illumination, moonrise/set and poya times'],
  mrise: ['සඳ උදාව', 'Moonrise'], mset: ['සඳ බැසීම', 'Moonset'], pb: ['පෝය ලබන වේලාව', 'Poya Begins'], pe: ['පෝය ගෙවෙන වේලාව', 'Poya Ends'],
  tlT: ['චන්ද්‍ර කලාවන්', 'Moon Phase Timeline'], lg1: ['පුර පසළොස්වක', 'Full moon'], lg2: ['අමාවක', 'New moon'],
  hSys: ['ඉර හා සඳෙහි තාත්වික පිහිටීම', 'Sun & Moon around the Earth'], hSysD: ['කාල රේඛාව ඇදීමෙන් වෙලාව වෙනස් කරන්න', 'Drag the timeline to change the time'],

  note: ['ඉර හා සඳෙහි සැබෑ දිශාවන් (ඔබේ ස්ථානයට අනුව). දුරවල් සහ ප්‍රමාණ සංකේතාත්මකයි.', 'Real directions of the Sun and Moon for your location. Distances and sizes are not to scale.'] };

var IC = { sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9"/>',
  rise: '<path d="M3 19h18M7 19a5 5 0 0 1 10 0M5.5 11.5l1.6 1.6M18.5 11.5l-1.6 1.6M3 15h1.8M19.2 15H21M12 3.5V9M9.7 5.8 12 3.5l2.3 2.3"/>',
  set: '<path d="M3 19h18M7 19a5 5 0 0 1 10 0M5.5 11.5l1.6 1.6M18.5 11.5l-1.6 1.6M3 15h1.8M19.2 15H21M12 3.5V9M9.7 6.7 12 9l2.3-2.3"/>',
  dawn: '<path d="M3 19h18M9 19a3 3 0 0 1 6 0M12 8.5v3.2M6 11l2 2.2M18 11l-2 2.2M3.5 15.2h2.2M18.3 15.2h2.2"/>',
  moon: '<path d="M20 14.6A8.4 8.4 0 1 1 9.4 4a6.7 6.7 0 0 0 10.6 10.6z"/>', globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3.3 3 13.7 0 17M12 3.5c-3 3.3-3 13.7 0 17"/>',
  pin: '<path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z"/><circle cx="12" cy="10" r="2.3"/>', cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  chev: '<path d="M14.5 5.5 8 12l6.5 6.5"/>', clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.3l3.3 2"/>' };
function ic(n, s) { s = s || 18; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>'; }
function es(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

var CSS = '#spOverlay{--cd:#fffdf9;--bd:rgba(120,80,30,.14);--tx:#2b1a0e;--mu:#6b5a4a;--bg2:#f6ead9;--ac:#a0561d;--tl:#fbf3e6;--sh:0 6px 22px rgba(90,60,20,.09);position:fixed;left:0;top:0;right:0;bottom:0;z-index:3100;display:none;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;color:var(--tx);font-family:"Noto Serif Sinhala","Noto Serif",serif;background:linear-gradient(180deg,#f5dfc6 0%,#faf2e8 24%,#fbf6ee 100%)}' +
'body.dark-mode #spOverlay{--cd:rgba(14,20,52,.62);--bd:rgba(242,212,120,.26);--tx:#e8ecf8;--mu:#aab3d6;--bg2:rgba(242,212,120,.12);--ac:#f2d478;--tl:rgba(255,255,255,.05);--sh:0 8px 28px rgba(0,0,0,.45);background:radial-gradient(ellipse at 50% 0%,#1b2554 0%,#0b1030 45%,#04061a 100%)}' +
'.sp-sky{position:fixed;left:0;top:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:0}' +
'.sp-st{display:none;position:absolute;left:0;top:0;border-radius:50%;background:transparent}body.dark-mode .sp-st{display:block}' +
'.sp-st.l1{width:1px;height:1px;animation:spTw 4s ease-in-out infinite}.sp-st.l2{width:2px;height:2px;animation:spTw 6s ease-in-out 1.5s infinite}.sp-st.l3{width:3px;height:3px;animation:spTw 8s ease-in-out 3s infinite}@keyframes spTw{50%{opacity:.3}}' +
'.sp-wrap{position:relative;z-index:1;max-width:760px;margin:0 auto;padding:calc(12px + env(safe-area-inset-top,0px)) 14px calc(30px + env(safe-area-inset-bottom,0px))}' +
'.ic{display:inline-block;vertical-align:middle;flex:0 0 auto}' +
'.sp-hero{position:relative;text-align:center;color:#fff;border-radius:26px;padding:18px 14px 16px;margin:0 0 16px;border:1px solid rgba(252,211,77,.28);box-shadow:0 10px 30px rgba(40,10,10,.28);background:radial-gradient(circle at 15% 0%,rgba(245,158,11,.28),transparent 55%),radial-gradient(circle at 92% 100%,rgba(168,85,247,.2),transparent 55%),linear-gradient(135deg,#2a0f14,#4a1a1a 52%,#1d0d1a)}' +
'.sp-back{position:absolute;left:12px;top:12px;width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);color:#fcd34d;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}.sp-back:active{transform:scale(.93)}' +
'.sp-hero h1{margin:2px 52px 0;font-size:1.35rem;font-weight:800;color:#fcd34d;line-height:1.3}' +
'.sp-hero h1::after{content:"";display:block;height:2px;width:74%;margin:9px auto 0;border-radius:2px;background:linear-gradient(90deg,transparent,#d4a017 28%,#fde68a 50%,#d4a017 72%,transparent)}' +
'.sp-hero p{margin:10px 6px 0;font-size:.88rem;color:rgba(255,255,255,.9)}' +
'.sp-pl{display:inline-flex;align-items:center;gap:9px;margin:13px auto 0;padding:8px 15px;border-radius:18px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.15);font-size:.84rem;line-height:1.5;text-align:left;max-width:100%;white-space:pre-line}' +
'.sp-pl .dot{flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.25)}.sp-pl.off .dot{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.25)}.sp-co{opacity:.72;font-size:.76rem}' +
'.sp-brow{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}' +
'.sp-btn{flex:1 1 120px;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:12px 16px;font:inherit;font-weight:700;font-size:.92rem;cursor:pointer;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22)}.sp-btn:disabled{opacity:.6}' +
'.sp-btn.gold{color:#3b2200;border:0;background:linear-gradient(135deg,#fcd34d,#e8a317);box-shadow:0 4px 14px rgba(232,163,23,.4)}.sp-btn.sm{flex:0 0 48px;padding:0;height:48px}' +
'.sp-card{background:var(--cd);border:1px solid var(--bd);border-radius:22px;padding:16px 14px;margin:0 0 16px;box-shadow:var(--sh);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}' +
'.sp-sh{display:flex;gap:12px;align-items:center;margin:0 0 14px}.sp-bd{width:46px;height:46px;border-radius:15px;background:var(--bg2);color:var(--ac);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex:0 0 auto}' +
'.sp-t2{font-size:1.1rem;font-weight:800;line-height:1.3}.sp-ds{font-size:.8rem;color:var(--mu);margin-top:2px;line-height:1.45}' +
'.sp-sh>div:nth-child(2){flex:1;min-width:0}.sp-now{flex:0 0 auto;margin-left:auto;width:46px;height:46px;border-radius:50%;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;background:var(--bg2);color:var(--ac);border:1px solid var(--bd);box-shadow:var(--sh)}.sp-now:active{transform:scale(.93)}' +
'.sp-tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}@media(min-width:520px){.sp-tiles{grid-template-columns:repeat(4,1fr)}}' +
'.sp-tile{border-radius:18px;padding:13px 6px;text-align:center;background:var(--tl);border:1px solid var(--bd)}' +
'.sp-tile .i{width:46px;height:46px;margin:0 auto;border-radius:15px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.75);border:1px solid currentColor}body.dark-mode .sp-tile .i{background:rgba(255,255,255,.08)}' +
'.sp-tile .l{font-size:.78rem;color:var(--mu);margin-top:7px}.sp-tile .t{font-size:1.12rem;font-weight:800;margin-top:3px;font-variant-numeric:tabular-nums}' +
'.sp-tile.dawn{color:#7e3fbf}.sp-tile.sunrise{color:#d9560b}.sp-tile.noon{color:#a16207}.sp-tile.sunset{color:#c62828}' +
'body.dark-mode .sp-tile.dawn{color:#c4a1ff}body.dark-mode .sp-tile.sunrise{color:#ffa65c}body.dark-mode .sp-tile.noon{color:#ffe082}body.dark-mode .sp-tile.sunset{color:#ff8a80}' +
'.sp-bar{position:relative;height:14px;border-radius:8px;margin-top:18px;border:1px solid var(--bd)}' +
'.sp-need{position:absolute;top:-5px;width:3px;height:24px;border-radius:2px;background:#fff;box-shadow:0 0 8px 2px rgba(255,255,255,.9),0 0 0 1px rgba(0,0,0,.45);transform:translateX(-50%)}' +
'.sp-ax{display:flex;justify-content:space-between;font-size:.68rem;color:var(--mu);margin-top:6px}' +
'.sp-moonrow{display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:center}#spMoonCv{width:120px;height:120px;border-radius:50%;box-shadow:0 0 28px 6px rgba(240,230,190,.4)}' +
'.sp-mi{flex:1 1 210px;font-size:.92rem}.sp-mi .ph{font-size:1.08rem;font-weight:800}.sp-mi .il{color:var(--mu);margin-bottom:6px}.sp-kv{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dashed var(--bd);padding:5px 0}.sp-kv b{font-variant-numeric:tabular-nums}' +
'.sp-tlh{margin:18px 0 0;font-size:.84rem;font-weight:800;color:var(--ac);text-align:center}' +
'.sp-tlh::after{content:"";display:block;height:2px;width:70%;margin:6px auto 0;border-radius:2px;background:linear-gradient(90deg,transparent,#d4a017 30%,#f2d478 50%,#d4a017 70%,transparent)}' +
'.sp-tl{display:flex;gap:8px;overflow-x:auto;padding:14px 6px 8px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}' +
'.sp-d{flex:0 0 auto;background:none;border:0;padding:0;color:inherit;text-align:center;cursor:pointer;scroll-snap-align:center;font-family:inherit}.sp-d canvas{display:block;border-radius:50%;transition:transform .25s}' +
'.sp-d b{display:block;font-size:.7rem;margin-top:4px;color:var(--mu)}.sp-d.on canvas{transform:scale(1.22);filter:drop-shadow(0 0 8px rgba(253,224,71,.75))}.sp-d.on b{color:#d4a017}' +
'.sp-d.mf canvas{box-shadow:0 0 0 2px #fde047}.sp-d.mn canvas{box-shadow:0 0 0 2px #a78bfa}' +
'.sp-lg{display:flex;gap:14px;justify-content:center;font-size:.72rem;color:var(--mu)}.sp-lg i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:5px;vertical-align:middle}' +
'.sp-stage{position:relative;width:100%;margin:0;aspect-ratio:8/7;border-radius:20px;overflow:hidden;background:#04061a;border:1px solid rgba(242,212,120,.45)}' +
'.sp-zt{position:absolute;left:0;top:0;right:0;height:50%}.sp-zb{position:absolute;left:0;bottom:0;right:0;height:50%;background:#000}' +
'.sp-stage canvas{position:absolute;left:0;top:0;width:100%;height:100%;display:block}.sp-stage::after{content:"";position:absolute;left:0;right:0;top:50%;border-top:1px dashed rgba(255,255,255,.55);pointer-events:none}' +
'.sp-ew{position:absolute;top:50%;z-index:2;margin-top:-26px;font-size:1rem;font-weight:800;color:#fff;text-shadow:0 1px 4px #000}.sp-ew.l{left:10px}.sp-ew.r{right:10px}' +
'.sp-clk{position:absolute;left:10px;bottom:10px;z-index:2;padding:7px 12px;border-radius:14px;background:rgba(0,0,0,.6);border:1px solid rgba(255,233,168,.35);color:#fff;line-height:1.35}.sp-clk .d{font-size:.7rem;opacity:.8}.sp-clk .t{font-size:1.08rem;font-weight:800;font-variant-numeric:tabular-nums}.sp-tm{position:absolute;right:10px;bottom:10px;z-index:2;padding:8px 11px;border-radius:14px;background:rgba(0,0,0,.6);border:1px solid rgba(255,233,168,.35);font-size:.74rem;line-height:1.6;color:#fff;min-width:150px}.sp-tm div{display:flex;justify-content:space-between;gap:14px}.sp-tm b{font-variant-numeric:tabular-nums}' +
'.sp-live{display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:6px;vertical-align:middle;animation:spPulse 1.2s ease-in-out infinite}@keyframes spPulse{50%{opacity:.25}}' +
'.sp-ctl2{margin:16px 0 0;display:flex;align-items:flex-start;gap:12px}.sp-ctl2>div:first-child{flex:1}.sp-time{min-width:118px;text-align:center;font-weight:800;font-variant-numeric:tabular-nums;margin-top:-3px}' +
'#spSl{-webkit-appearance:none;appearance:none;width:100%;height:14px;border-radius:8px;border:1px solid var(--bd);background:#0b1230;outline:none;margin:0;display:block}' +
'#spSl::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;background:#fff;border:4px solid #d4a017;box-shadow:0 2px 8px rgba(0,0,0,.4)}#spSl::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:4px solid #d4a017}' +
'.sp-read{display:grid;gap:8px;margin:14px 0 0}.sp-rd{display:flex;align-items:center;gap:9px;border-radius:14px;padding:9px 12px;font-size:.86rem;background:var(--tl);border:1px solid var(--bd)}.sp-rd .ic{color:var(--ac)}' +
'.sp-note{font-size:.74rem;color:var(--mu);margin-top:10px;text-align:center}';

function css() { if ($('spStyle')) return; var s = doc.createElement('style'); s.id = 'spStyle'; s.textContent = CSS; doc.head.appendChild(s); }
function g(i) { var e = $(i); return e ? e.textContent.trim() : ''; }
function mins(s) { var m = /(\d+):(\d+)\s*(AM|PM)/i.exec(s || ''); return m ? ((+m[1] % 12) + (/pm/i.test(m[3]) ? 12 : 0)) * 60 + +m[2] : NaN; }
function fmt(m) { m = Math.round(m); var h = Math.floor(m / 60) % 24, mm = m % 60, ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return h + ':' + (mm < 10 ? '0' : '') + mm + ' ' + ap; }
function fmtD(d) { return d && !isNaN(d.getTime()) ? fmt(d.getHours() * 60 + d.getMinutes()) : ''; }
function ymd() { var i = $('sunDateInput'); return i ? i.value : ''; }
function sdt(k) { return new Date(k + 'T18:00:00+05:30'); }
function addK(k, n) { var d = new Date(k + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function mark(k) { try { var a = sdt(k), p = Astronomy.MoonPhase(a), q = Astronomy.MoonPhase(new Date(a.getTime() + 864e5)); if (p < 180 && q >= 180) return 'f'; if (p > q) return 'n'; } catch (e) {} return ''; }
function dayStart() { var p = ymd().split('-').map(Number); return p.length < 3 || !p[0] ? new Date(new Date().setHours(0, 0, 0, 0)) : new Date(p[0], p[1] - 1, p[2], 0, 0, 0, 0); }
function mom() { return new Date(dayStart().getTime() + P.t * 1000); }
function nowSec() { var t = new Date(); return t.getHours() * 3600 + t.getMinutes() * 60 + t.getSeconds(); }
function fmtS(x) { x = Math.floor(x); var h = Math.floor(x / 3600) % 24, m = Math.floor(x / 60) % 60, c = x % 60, ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return h + ':' + (m < 10 ? '0' : '') + m + ':' + (c < 10 ? '0' : '') + c + ' ' + ap; }
function todayStr() { var t = new Date(); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); }
function hz(body, d, l) { var o = new Astronomy.Observer(l.lat, l.lng, 0), q = Astronomy.Equator(body, d, o, true, true); return Astronomy.Horizon(d, o, q.ra, q.dec, 'normal'); }

/* ---------- location (merged from location.js; same localStorage keys as script.js) ---------- */
function loc() {
  var la = (typeof userLatitude !== 'undefined' && userLatitude) || parseFloat(LS.getItem('userLat')), lo = (typeof userLongitude !== 'undefined' && userLongitude) || parseFloat(LS.getItem('userLng'));
  var ok = isFinite(la) && isFinite(lo) && !(P && P.tmp); return { lat: ok ? +la : 6.9271, lng: ok ? +lo : 79.8612, ok: ok };
}
function setGlobals(la, lo) { try { userLatitude = la; userLongitude = lo; } catch (e) {} }
function setStat(msg) {
  var el = $('spStat'); if (!el) return; var l = loc(), nm = LS.getItem('userLocName') || '', c = l.lat.toFixed(4) + '°, ' + l.lng.toFixed(4) + '°';
  el.parentNode.className = 'sp-pl' + (l.ok && !msg ? '' : ' off');
  if (msg) { el.textContent = msg; return; }
  el.innerHTML = l.ok ? '<b>' + es(nm || c) + '</b>' + (nm ? '<br><span class="sp-co">' + c + '</span>' : '') : tr('ස්ථානය තෝරා නැත — කොළඹ අනුව පෙන්වයි', 'Location not set — showing Colombo');
}
function twa() { return (doc.referrer || '').indexOf('android-app://') === 0; }
function inApp() { return /FBAN|FBAV|Instagram|Viber|Line\/|; wv\)/i.test(navigator.userAgent || ''); }
function once(opts, lim) { return new Promise(function (ok, no) { var done = false, t = setTimeout(function () { if (!done) { done = true; no({ code: 3 }); } }, lim);
  navigator.geolocation.getCurrentPosition(function (p) { if (!done) { done = true; clearTimeout(t); ok(p); } }, function (e) { if (!done) { done = true; clearTimeout(t); no(e); } }, opts); }); }
function locErr(err) {
  var c = err && err.code, saved = !!(LS.getItem('userLat') && LS.getItem('userLng')), m;
  if (c === 1) { m = tr('අවසර නැත. Browser / දුරකථන Settings වල මෙම අඩවියට (හෝ app එකට) Location අවසරය "Allow" කර නැවත උත්සාහ කරන්න.', 'Permission denied. Allow Location for this site/app in browser or phone settings, then try again.');
    if (twa()) m += tr('\n(Android Settings → Apps → මෙම app / Chrome → Permissions → Location)', '\n(Android Settings → Apps → this app / Chrome → Permissions → Location)'); }
  else if (c === 2) m = tr('ස්ථානය ලබාගත නොහැක. දුරකථනයේ Location (GPS) ON කර, Wi-Fi/Mobile data සමග, හැකිනම් විවෘත ස්ථානයක සිට නැවත උත්සාහ කරන්න.', 'Location unavailable. Turn ON device Location, keep Wi-Fi/mobile data on, and try again (preferably outdoors).');
  else if (c === 3) m = tr('කාලය ඉක්මවා ගියා. Location ON කර, විවෘත ස්ථානයකින් නැවත උත්සාහ කරන්න.', 'Location request timed out. Make sure Location is ON and try again, preferably outdoors.');
  else m = tr('ස්ථානය ලබා ගැනීමට නොහැකි විය.', 'Unable to retrieve location.');
  if (inApp()) m += tr('\n(මෙය app එකක් ඇතුළත browser එකක් විය හැක — Chrome / Safari වලින් විවෘත කරන්න.)', '\n(This looks like an in-app browser — please open the page in Chrome / Safari.)');
  if (saved) m += tr('\nපෙර සුරැකි ස්ථානය තවමත් භාවිතා වේ.', '\nThe last saved location is still being used.');
  setStat(m);
}
async function revName() { // BigDataCloud first (as location.js), OpenStreetMap as a fallback
  var l = loc(); if (!l.ok || !navigator.onLine) return; var lang = typeof currentLang !== 'undefined' ? currentLang : (en() ? 'en' : 'si'), nm = '';
  async function tryGet(url) { var ctl = new AbortController(), t = setTimeout(function () { ctl.abort(); }, 7000); try { var r = await fetch(url, { signal: ctl.signal }); if (!r.ok) throw 0; return await r.json(); } finally { clearTimeout(t); } }
  try { var j = await tryGet('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + l.lat + '&longitude=' + l.lng + '&localityLanguage=' + lang); nm = j.city || j.locality || j.principalSubdivision || ''; } catch (e) {}
  if (!nm) { try { var k = await tryGet('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=12&addressdetails=1&accept-language=' + (lang === 'en' ? 'en' : 'si,en') + '&lat=' + l.lat + '&lon=' + l.lng); var a = k.address || {}; nm = a.city || a.town || a.village || a.suburb || a.county || ''; } catch (e) {} }
  if (!nm) return; LS.setItem('userLocName', nm);
  var ls = $('locationStatus'); if (ls) ls.innerHTML = (en() ? '📍 Location: ' : '📍 ස්ථානය: ') + '<b>' + es(nm) + '</b><br><span class="loc-coords">(' + l.lat.toFixed(4) + '°, ' + l.lng.toFixed(4) + '°)</span>';
  if (P && P.open) setStat();
}
async function fetchLoc() {
  if (busy) return; var btn = $('spLoc') || $('getLocationBtn');
  if (!navigator.geolocation) { setStat(tr('GPS පහසුකමට සහාය නොදක්වයි.', 'GPS not supported.')); return; }
  busy = true; if (btn) btn.disabled = true; setStat(tr('ස්ථානය සොයමින් පවතී (කරුණාකර රැඳී සිටින්න)...', 'Detecting location (please wait)...'));
  try {
    try { if (navigator.permissions && navigator.permissions.query) { var pm = await navigator.permissions.query({ name: 'geolocation' }); if (pm.state === 'denied') { locErr({ code: 1 }); return; } } } catch (e) {}
    var pos;
    try { pos = await once({ enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }, 33000); }
    catch (e1) { if (e1 && e1.code === 1) throw e1; setStat(tr('GPS මගින් සොයමින් පවතී (තත්පර 30ක් පමණ ගත විය හැක)...', 'Trying GPS (may take up to 30 seconds)...')); pos = await once({ enableHighAccuracy: true, timeout: 30000, maximumAge: 0 }, 55000); }
    var la = pos.coords.latitude, lo = pos.coords.longitude; setGlobals(la, lo); LS.setItem('userLat', la); LS.setItem('userLng', lo); LS.removeItem('userLocName');
    if (P) { P.tmp = false; P.rv = true; } try { if (typeof showCoordinatesOnly === 'function') showCoordinatesOnly($('locationStatus')); } catch (e) {}
    if (typeof updateSunTimes === 'function') { try { updateSunTimes(); } catch (e) {} } if (P && P.open) { setStat(); refresh(); } revName();
  } catch (err) { locErr(err); } finally { busy = false; if (btn) btn.disabled = false; }
}
W.fetchLocationAndSunData = fetchLoc;

/* ---------- page ---------- */
function sh(i, k, x) { return '<div class="sp-sh"><div class="sp-bd">' + ic(i, 24) + '</div><div><div class="sp-t2" data-k="' + k + '"></div><div class="sp-ds" data-k="' + k + 'D"></div></div>' + (x || '') + '</div>'; }
function tile(c, n, k) { return '<div class="sp-tile ' + c + '"><div class="i">' + ic(n, 26) + '</div><div class="l" data-k="' + k + '"></div><div class="t" id="sp_' + k + '">--</div></div>'; }
function build() {
  var ov = $('spOverlay'); if (!ov) { ov = doc.createElement('div'); ov.id = 'spOverlay'; doc.body.appendChild(ov); }
  ov.innerHTML = '<div class="sp-sky"><i class="sp-st l1"></i><i class="sp-st l2"></i><i class="sp-st l3"></i></div><div class="sp-wrap">' +
  '<header class="sp-hero"><button class="sp-back" id="spBack" type="button" aria-label="Back">' + ic('chev', 24) + '</button><h1 data-k="title"></h1><p id="spSub"></p>' +
  '<div class="sp-pl off"><i class="dot"></i><div id="spStat"></div></div>' +
  '<div class="sp-brow"><button class="sp-btn gold" id="spLoc" type="button">' + ic('pin', 18) + '<span data-k="loc"></span></button><button class="sp-btn" id="spDate" type="button"></button></div></header>' +
  '<section class="sp-card">' + sh('rise', 'hTimes') + '<div class="sp-tiles">' + tile('dawn', 'dawn', 'dawn') + tile('sunrise', 'rise', 'sunrise') + tile('noon', 'sun', 'noon') + tile('sunset', 'set', 'sunset') + '</div>' +
  '<div class="sp-bar" id="spBar"><div class="sp-need" id="spNeed"></div></div><div class="sp-ax"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div></section>' +
  '<section class="sp-card">' + sh('globe', 'hSys', '<button class="sp-now" id="spNow" type="button" aria-label="Now" title="Now">' + ic('clock', 22) + '</button>') + '<div class="sp-stage" id="spStage"><div class="sp-zt" id="spZt"></div><div class="sp-zb"></div>' +
  '<span class="sp-ew l">E</span><span class="sp-ew r">W</span><div class="sp-clk" id="spClk"></div><div class="sp-tm" id="spTm" style="display:none"></div></div>' +
  '<div class="sp-ctl2"><div><input type="range" id="spSl" min="0" max="86399" step="1" value="43200"><div class="sp-ax"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div></div></div>' +
  '<div class="sp-read"><div class="sp-rd" id="spP1"></div><div class="sp-rd" id="spP2"></div></div><div class="sp-note" data-k="note"></div></section>' +
  '<section class="sp-card">' + sh('moon', 'hMoon') + '<div class="sp-moonrow"><canvas id="spMoonCv" width="240" height="240"></canvas><div class="sp-mi"><div class="ph" id="spPh"></div><div class="il" id="spIl"></div>' +
  '<div class="sp-kv"><span data-k="mrise"></span><b id="sp_mrise">--</b></div><div class="sp-kv"><span data-k="mset"></span><b id="sp_mset">--</b></div>' +
  '<div class="sp-kv" id="spPbL"><span data-k="pb"></span><b id="sp_pb"></b></div><div class="sp-kv" id="spPeL"><span data-k="pe"></span><b id="sp_pe"></b></div></div></div>' +
  '<div class="sp-tlh" data-k="tlT"></div><div class="sp-tl" id="spTl"></div><div class="sp-lg"><span><i style="background:#fde047"></i><span data-k="lg1"></span></span><span><i style="background:#a78bfa"></i><span data-k="lg2"></span></span></div></section></div>';
  var w = W.innerWidth, h = W.innerHeight, cs = ['#fff', '#cfe0ff', '#ffe9b0'], n = [90, 40, 16];
  [].forEach.call(ov.querySelectorAll('.sp-st'), function (e, k) { var s = []; for (var i = 0; i < n[k]; i++) s.push((Math.random() * w | 0) + 'px ' + (Math.random() * h | 0) + 'px ' + cs[(Math.random() * 3) | 0]); e.style.boxShadow = s.join(','); });
  P = { ov: ov, open: true, t: 43200, live: false, lm: -1, dk: '', iv: 0, mt: 0, tlk: '', tlr: 0, tmp: false, rv: false, pk: '' };
  $('spBack').onclick = close;
  $('spDate').onclick = function () { if (typeof openWheelPicker === 'function') openWheelPicker('sunDateInput'); };
  $('spLoc').onclick = fetchLoc;
  $('spNow').onclick = function () { var i = $('sunDateInput'); P.live = true; P.t = nowSec(); if (i && i.value !== todayStr()) { i.value = todayStr(); i.dispatchEvent(new Event('change')); } else upd(); };
  $('spSl').oninput = function () { P.t = +this.value; P.live = false; upd(); };
  return ov;
}
function lab() { [].forEach.call(P.ov.querySelectorAll('[data-k]'), function (e) { var t = TX[e.getAttribute('data-k')]; if (t) e.textContent = tr(t[0], t[1]); }); }
function bar() {
  var a = mins(g('sunDawn')), b = mins(g('sunSunrise')), n = mins(g('sunNoon')), s = mins(g('sunSunset')), p = function (x) { return (x / 14.4).toFixed(2) + '%'; }, bg = '#0b1230';
  if (a < b && b < n && n < s) { var e = Math.min(1439, s + 40); bg = 'linear-gradient(90deg,#0b1230 0%,#0b1230 ' + p(a) + ',#6d3fa0 ' + p((a + b) / 2) + ',#f59e0b ' + p(b) + ',#fde68a ' + p(n) + ',#f59e0b ' + p(s) + ',#c2410c ' + p((s + e) / 2) + ',#0b1230 ' + p(e) + ',#0b1230 100%)'; }
  $('spBar').style.background = bg; $('spSl').style.background = bg;
}
function poya() { // same helper + same rule as script.js: midnight-to-midnight of the selected day
  var b = null, e = null; try { if (typeof findSpecialTithiEventsForDay === 'function' && typeof Astronomy !== 'undefined') { var ev = findSpecialTithiEventsForDay(dayStart()); b = ev.beginTime; e = ev.endTime; } } catch (x) {}
  $('sp_pb').textContent = fmtD(b); $('sp_pe').textContent = fmtD(e); $('spPbL').style.display = b ? '' : 'none'; $('spPeL').style.display = e ? '' : 'none';
}
function tl() {
  var d = ymd(), box = $('spTl'); if (!d || P.tlk === d || !box) return;
  if (!(W.V3D && V3D.paintMoon && V3D.paintMoon(doc.createElement('canvas'), new Date(), 0))) { if (P.tlr++ < 10) setTimeout(tl, 600); return; }
  P.tlk = d; box.innerHTML = '';
  for (var n = -14; n <= 15; n++) { var k = addK(d, n), m = mark(k), b = doc.createElement('button'); b.type = 'button'; b.className = 'sp-d' + (n ? '' : ' on') + (m ? ' m' + m : ''); b.setAttribute('data-k', k);
    b.innerHTML = '<canvas style="width:50px;height:50px"></canvas><b>' + (+k.slice(8)) + '</b>'; box.appendChild(b); V3D.paintMoon(b.firstChild, sdt(k), 0); }
  box.onclick = function (e) { var x = e.target.closest ? e.target.closest('.sp-d') : null; if (!x) return; var i = $('sunDateInput'); i.value = x.getAttribute('data-k'); i.dispatchEvent(new Event('change')); };
  var on = box.querySelector('.on'); if (on) box.scrollLeft = on.offsetLeft - box.clientWidth / 2 + on.offsetWidth / 2;
}
var LC = { dawn: '#c4a1ff', sunrise: '#ffa65c', noon: '#ffe082', sunset: '#ff8a80' };
function legend() { P.tm = {}; P.lg = null; ['dawn', 'sunrise', 'noon', 'sunset'].forEach(function (k) { P.tm[k] = mins($('sp_' + k).textContent); }); }
function showLg() { // show a time from 5 minutes before it until 1 minute after, then hide
  var box = $('spTm'), cur = P.t / 60, h = '';
  ['dawn', 'sunrise', 'noon', 'sunset'].forEach(function (k) { var m = P.tm && P.tm[k]; if (m === m && cur >= m - 5 && cur < m + 1) h += '<div><span style="color:' + LC[k] + '">' + tr(TX[k][0], TX[k][1]) + '</span><b>' + es($('sp_' + k).textContent) + '</b></div>'; });
  if (h !== P.lg) { P.lg = h; box.innerHTML = h; box.style.display = h ? '' : 'none'; } }
function tick() {
  if (!P || !P.open || doc.hidden) return;
  if (ymd() !== P.dk && typeof updateSunTimes === 'function') { try { updateSunTimes(); } catch (e) {} }
  if (P.live) { if (ymd() !== todayStr()) P.live = false; else { P.t = nowSec(); upd(true); } }
}
function refresh() {
  if (!P || !P.open) return; lab();
  ['dawn:sunDawn', 'sunrise:sunSunrise', 'noon:sunNoon', 'sunset:sunSunset', 'mrise:sunMoonrise', 'mset:sunMoonset'].forEach(function (x) { x = x.split(':'); $('sp_' + x[0]).textContent = g(x[1]) || '--'; });
  poya(); $('spSub').textContent = g('sunModalTithiLabel'); $('spPh').textContent = g('moonPhaseLabel'); $('spIl').textContent = g('moonIllumLabel');
  setStat(); if (loc().ok && !LS.getItem('userLocName') && !P.rv) { P.rv = true; revName(); }
  $('spDate').innerHTML = ic('cal', 17) + '<span>' + es(ymd()) + '</span>'; P.dk = ymd(); if (P.live && ymd() !== todayStr()) P.live = false; bar(); legend(); upd(); tl();
}
var SKY = [[-18, '#02030c', '#05071a'], [-10, '#0a0d2e', '#1c1840'], [-5, '#161a4a', '#6a2f6e'], [-1.5, '#27336f', '#c2410c'], [1, '#3a5aa0', '#f59e0b'], [5, '#4a7cc0', '#f7c178'], [14, '#3478c6', '#b8d8f0'], [90, '#1d5aa6', '#9ccdf0']];
function hx(c) { return [1, 3, 5].map(function (i) { return parseInt(c.substr(i, 2), 16); }); }
function mix(a, b, t) { a = hx(a); b = hx(b); return 'rgb(' + a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); }).join(',') + ')'; }
function bell(x, c, w) { var t = (x - c) / w; return Math.exp(-t * t); }
function cl(x, a, b) { return Math.max(a, Math.min(b, x)); }
function sky(al, az) { // dawn: dim red → orange → white at the horizon, then blue day; dusk: dim + red glow in the west, then night
  var i = 0, a, b, t; al = cl(al, -18, 90); while (i < SKY.length - 2 && al > SKY[i + 1][0]) i++; a = SKY[i]; b = SKY[i + 1]; t = (al - a[0]) / (b[0] - a[0]);
  var base = 'linear-gradient(180deg,' + mix(a[1], b[1], t) + ' 0%,' + mix(a[2], b[2], t) + ' 100%)', L = [];
  var x = 50 - 50 * Math.sin(az * D), r = .85 * bell(al, -2.5, 4.5), o = .8 * bell(al, .5, 4.5), w = .9 * bell(al, 3, 3.2);
  if (r + o + w > .02) L.push('radial-gradient(ellipse 85% 75% at ' + x.toFixed(1) + '% 100%,rgba(255,246,222,' + w.toFixed(2) + ') 0%,rgba(255,176,84,' + o.toFixed(2) + ') 24%,rgba(210,60,52,' + r.toFixed(2) + ') 52%,rgba(120,30,70,' + (r * .4).toFixed(2) + ') 72%,rgba(0,0,0,0) 100%)');
  var dim = az > 180 && al > -4 ? cl(1 - al / 14, 0, 1) * .2 : 0; if (dim > .01) L.push('linear-gradient(rgba(0,0,0,' + dim.toFixed(2) + '),rgba(0,0,0,' + dim.toFixed(2) + '))');
  $('spZt').style.background = L.concat(base).join(',');
}
function tint(stops, v) { var i = 0; while (i < stops.length - 2 && v > stops[i + 1][0]) i++; var a = stops[i], b = stops[i + 1], t = cl((v - a[0]) / (b[0] - a[0]), 0, 1); return new T.Color(a[1]).lerp(new T.Color(b[1]), t); }
var STINT = [[0, 0xff5a2a], [5, 0xff9a4a], [14, 0xffd890], [35, 0xfff6e6], [90, 0xffffff]], MTINT = [[0, 0xffb347], [12, 0xffd877], [35, 0xffeaa8], [90, 0xfff3cc]];
function upd(light) {
  if (!P || !P.open) return; var d = mom(), l = loc(), full = !light || Math.floor(P.t / 60) !== P.lm; P.lm = Math.floor(P.t / 60);
  var ts = (P.live ? '<i class="sp-live"></i>' : '') + fmtS(P.t); $('spClk').innerHTML = '<div class="d">' + es(ymd()) + '</div><div class="t">' + ts + '</div>'; showLg(); $('spNeed').style.left = (P.t / 864) + '%'; if ($('spSl').value != Math.floor(P.t)) $('spSl').value = Math.floor(P.t);
  if (full) { var cv = $('spMoonCv'); if (cv && W.V3D && V3D.paintMoon && V3D.paintMoon(cv, d, 0)) P.mt = 0; else if (P.mt++ < 8) setTimeout(function () { upd(); }, 600); }
  try {
    var hs = hz('Sun', d, l), hm = hz('Moon', d, l), sa = hs.altitude, ma = hm.altitude, a1 = Math.abs(sa).toFixed(0), a2 = Math.abs(ma).toFixed(0);
    sky(sa, hs.azimuth); place(hs, hm, d, l); if (!full) return;
    $('spP1').innerHTML = sa > .8 ? ic('sun', 17) + '<span>' + tr('දිවා කාලය — ඉරේ උන්නතාංශය ', 'Daytime — Sun altitude ') + a1 + '°</span>'
      : sa > -6 ? ic('dawn', 17) + '<span>' + tr('සන්ධ්‍යා / අරුණ ආලෝක කාලය — ඉර ක්ෂිතිජයට ', 'Twilight — Sun ') + (en() ? a1 + '° below horizon' : 'පහළින් ' + a1 + '°') + '</span>'
      : ic('moon', 17) + '<span>' + tr('රාත්‍රී කාලය — ඉර ක්ෂිතිජයට පහළින් ', 'Night — Sun ') + (en() ? a1 + '° below horizon' : a1 + '°') + '</span>';
    $('spP2').innerHTML = ic('moon', 17) + '<span>' + (ma > 0 ? tr('සඳ ක්ෂිතිජයට ඉහළින් — උන්නතාංශය ', 'Moon above the horizon — altitude ') + a2 + '°' : tr('සඳ ක්ෂිතිජයට පහළින් (', 'Moon below the horizon (') + a2 + '°)') + '</span>';
  } catch (e) {}
}

/* ---------- 3D: Earth fixed in the middle, you on top; Sun & Moon move around it (as we see them) ---------- */
function need(cb) { if (W.THREE) { T = W.THREE; return cb(); } var s = doc.createElement('script'); s.src = 'three.min.js'; s.onload = function () { T = W.THREE; cb(); }; s.onerror = function () { var b = $('spStage'); if (b) b.style.display = 'none'; }; doc.head.appendChild(s); }
function start3d() { if (R) return; need(function () { if (!P || !P.open || R) return; try { init3d(); } catch (e) { console.error(e); var b = $('spStage'); if (b) b.style.display = 'none'; } }); }
function glowTex(c) { var cv = doc.createElement('canvas'); cv.width = cv.height = 128; var x = cv.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(' + c + ',.95)'); gr.addColorStop(.25, 'rgba(' + c + ',.5)'); gr.addColorStop(.55, 'rgba(' + c + ',.15)'); gr.addColorStop(1, 'rgba(' + c + ',0)'); x.fillStyle = gr; x.fillRect(0, 0, 128, 128); return new T.CanvasTexture(cv); }
function init3d() {
  var box = $('spStage'), r = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }), i;
  r.setPixelRatio(Math.min(W.devicePixelRatio || 1, 2)); r.setClearColor(0x000000, 0); box.insertBefore(r.domElement, box.querySelector('.sp-ew'));
  var tx = function (n) { try { return (W.V3D && V3D.tex && V3D.tex(n)) || null; } catch (e) { return null; } };
  var sc = new T.Scene(), cam = new T.PerspectiveCamera(40, 1, 1, 3000), te = tx('e'), tm = tx('m');
  cam.position.set(0, 0, CD); cam.lookAt(0, 0, 0);
  sc.add(new T.AmbientLight(0x2a3050, .5)); var dl = new T.DirectionalLight(0xfff2d0, 2.5); sc.add(dl); var hl = new T.HemisphereLight(0xfff1d0, 0x000000, 0); sc.add(hl);
  var sun = new T.Mesh(new T.SphereGeometry(4, 32, 24), new T.MeshBasicMaterial({ color: 0xffffff })); sc.add(sun);
  var gl = new T.Sprite(new T.SpriteMaterial({ map: glowTex('255,200,100'), blending: T.AdditiveBlending, transparent: true, depthWrite: false })); gl.scale.set(24, 24, 1); sun.add(gl);
  var earth = new T.Mesh(new T.SphereGeometry(ER, 48, 36), new T.MeshStandardMaterial({ map: te, color: te ? 0xffffff : 0x2e6db4, roughness: .9, metalness: .05 })); earth.rotation.set(.35, 2.2, 0); sc.add(earth);
  sc.add(new T.Mesh(new T.SphereGeometry(ER * 1.1, 36, 24), new T.MeshBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: .16, side: T.BackSide })));
  var moon = new T.Mesh(new T.SphereGeometry(2.2, 32, 24), new T.MeshStandardMaterial({ map: tm, color: 0xffe08a, roughness: 1, metalness: 0 })); sc.add(moon);
  var mg = new T.Sprite(new T.SpriteMaterial({ map: glowTex('255,226,140'), blending: T.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0 })); mg.scale.set(11, 11, 1); moon.add(mg);
  var ml = new T.DirectionalLight(0xffe6a0, 0); sc.add(ml);
  var n = 700, Pp = new Float32Array(n * 3); for (i = 0; i < n; i++) { var u = Math.random(), b = Math.random() * 6.283, q = Math.sqrt(1 - u * u), RR = 900 + Math.random() * 600; Pp[i * 3] = RR * q * Math.cos(b); Pp[i * 3 + 1] = RR * u; Pp[i * 3 + 2] = RR * q * Math.sin(b); }
  var sg = new T.BufferGeometry(); sg.setAttribute('position', new T.BufferAttribute(Pp, 3)); var stars = new T.Points(sg, new T.PointsMaterial({ color: 0xffffff, size: 1.3, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false })); sc.add(stars);
  R = { r: r, sc: sc, cam: cam, sun: sun, sgl: gl, dl: dl, hl: hl, moon: moon, mg: mg, ml: ml, stars: stars };
  function fit() { var w = box.clientWidth, h = box.clientHeight; if (!w || !h) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); r.render(sc, cam); }
  if (W.ResizeObserver) { R.ro = new ResizeObserver(fit); R.ro.observe(box); } fit(); upd();
}
function dispAlt(al, r, k) { // drawn altitude. Upper edge touches the line at the listed rise/set time (centre -0.215° apparent); the disc then clears the line within its real crossing time (~0.5° ≈ 2 min), and the extra offset fades out higher up
  var rd = Math.asin(r / k) / D, a0 = -.215, w = .5;
  if (al <= a0) return al - rd;
  if (al < a0 + w) return -rd + (al - a0) / w * 2 * rd;
  var t = cl((al - a0 - w) / 25, 0, 1); t = t * t * (3 - 2 * t); return al + (rd - a0 - w) * (1 - t); }
function vec(h, k, r) { var a = dispAlt(h.altitude, r, k) * D, z = h.azimuth * D; return new T.Vector3(-Math.cos(a) * Math.sin(z) * k, Math.sin(a) * k, Math.cos(a) * Math.cos(z) * k * .3); } // east = left, west = right, looking south (depth compressed)
function place(hs, hm, d, l) {
  if (!R) return; var sp = vec(hs, SD, 4), mpos = vec(hm, MD, 2.2);
  R.sun.position.copy(sp); R.dl.position.copy(sp).normalize().multiplyScalar(100); R.moon.position.copy(mpos);
  var sa = hs.altitude, ma = hm.altitude, il = 0.5, tc = tint(STINT, Math.max(0, sa));
  try { il = Astronomy.Illumination('Moon', d).phase_fraction; } catch (e) {}
  R.sun.material.color.copy(tc); R.sgl.material.color.copy(tc); R.dl.color.copy(tc).lerp(new T.Color(0xffffff), .25); R.hl.color.copy(tc).lerp(new T.Color(0xffffff), .4); R.hl.intensity = 1.1 * cl(Math.sin(sa * D) * 1.3, 0, 1); // daytime: whole upper half lit
  R.moon.material.color.copy(tint(MTINT, Math.max(0, ma))); R.mg.material.opacity = (.18 + .55 * il) * cl((ma + 4) / 8, 0, 1) * cl(1 - sa / 25, .35, 1);
  R.ml.position.copy(mpos).normalize().multiplyScalar(100); R.ml.intensity = .8 * il * cl((ma + 4) / 10, 0, 1); // pale-yellow moonlight on the Earth
  R.stars.material.opacity = cl((-sa - 3) / 10, 0, 1);
  R.r.render(R.sc, R.cam);
}
function kill3d() { if (!R) return; if (R.ro) R.ro.disconnect(); R.r.dispose(); try { R.r.forceContextLoss(); } catch (e) {} if (R.r.domElement.parentNode) R.r.domElement.parentNode.removeChild(R.r.domElement); R = null; }

/* ---------- open / close ---------- */
function onKey(e) { if (e.key === 'Escape') close(); }
function onPop() { if (pushed) { pushed = false; hide(); } }
function hide() { if (!P) return; P.open = false; clearInterval(P.iv); kill3d(); P.ov.style.display = 'none'; doc.documentElement.style.overflow = ''; doc.removeEventListener('keydown', onKey); if (P.tmp) { setGlobals(null, null); P.tmp = false; } try { if (typeof updateSinhalaAstroDate === 'function') updateSinhalaAstroDate(); } catch (e) {} }
function close() { if (pushed) history.back(); else hide(); }
function open() {
  var dd = $('myDropdown'); if (dd) dd.style.display = 'none';
  css(); var ov = build(), i = $('sunDateInput'); if (i && !i.value) i.value = todayStr();
  P.live = !!(i && i.value === todayStr()); P.t = P.live ? nowSec() : 43200; $('spSl').value = Math.floor(P.t); P.iv = setInterval(tick, 1000);
  if (!loc().ok) { setGlobals(6.9271, 79.8612); P.tmp = true; } // temporary Colombo so script.js can still compute tithi / times; reset on close
  ov.style.display = 'block'; ov.scrollTop = 0; doc.documentElement.style.overflow = 'hidden'; doc.addEventListener('keydown', onKey);
  try { history.pushState({ sp: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  if (typeof updateSunTimes === 'function') { try { updateSunTimes(); } catch (e) {} } refresh(); start3d();
}
function wrap(n, f) { var o = W[n]; if (typeof o !== 'function') return; W[n] = function () { var r = o.apply(this, arguments); try { f.apply(this, arguments); } catch (e) {} return r; }; }
var oOpen = W.openSunModal;
W.openSunModal = function () { try { open(); } catch (e) { console.error('sunpage:', e); if (P) hide(); if (typeof oOpen === 'function') return oOpen.apply(this, arguments); } };
wrap('closeSunModal', function () { if (P && P.open) close(); });
wrap('updateSunTimes', function () { if (P && P.open) refresh(); });
wrap('toggleLanguage', function () { if (P && P.open) { P.tlk = ''; refresh(); } });
var oSA = W.updateSinhalaAstroDate; if (typeof oSA === 'function') W.updateSinhalaAstroDate = function () { if (P && P.open) return; return oSA.apply(this, arguments); };
W.addEventListener('popstate', onPop);
})();
