/* sunpage.js — full-page "ඉර හා සඳෙහි පිහිටීම සහ වෙලාවන්" (replaces the old sun modal card; the old modal stays as a hidden data source + fallback).
   Also contains the former location.js logic (window.fetchLocationAndSunData), so location.js is no longer needed.
   Needs: astronomy.browser.min.js, three.min.js (lazy-loaded here if needed), visuals3d.js (optional: lit moon + textures). */
(function () {
'use strict';
var W = window, doc = document, LS = W.localStorage, D = Math.PI / 180, ER = 10, MD = 18, SD = 34, CD = 121, N = 72;
var $ = function (i) { return doc.getElementById(i); };
var en = function () { return typeof isEnglish === 'function' && isEnglish(); };
var TT = function (e) { return typeof tx === 'function' ? tx(e) : e; };   // English → හින්දි (lang/hi.js)  (T = THREE)
var F = function (e) { var a = arguments; return String(TT(e)).replace(/\{(\d)\}/g, function (m, i) { return a[+i + 1]; }); };
var tr = function (s, e) { return en() ? TT(e) : s; };
var P = null, R = null, T = null, pushed = false, busy = false;
var RC = null, TLT = 0, MC = {}, MCK = []; // RC: 3D renderer kept between opens · TLT: timeline paint token · MC: painted timeline moons (same date → same image)

var TX = { title: ['ඉර හා සඳෙහි පිහිටීම සහ වෙලාවන්', 'Sun & Moon Times'], loc: ['ස්ථානය ලබාගන්න', 'Get My Location'], now: ['දැන්', 'Now'],
  hTimes: ['අරුණෝදය හා මධ්‍යහ්න වෙලාවන්', 'Dawn & Noon Times'], hTimesD: ['තෝරාගත් දිනයේ අරුණෝදය, ඉර උදාව, මධ්‍යහ්නය සහ ඉර බැසීම', 'Dawn, sunrise, noon and sunset for the chosen day'],
  dawn: ['අරුණෝදය', 'Dawn'], sunrise: ['ඉර උදාව', 'Sunrise'], noon: ['මධ්‍යහ්නය', 'Noon'], sunset: ['ඉර බැසීම', 'Sunset'],
  hMoon: ['සඳෙහි පිහිටීම හා වෙලාවන්', 'Moon & Timings'], hMoonD: ['කලාව, දීප්තිය, සඳ උදාව/බැසීම සහ පෝය වේලාවන්', 'Phase, illumination, moonrise/set and poya times'],
  mrise: ['සඳ උදාව', 'Moonrise'], mset: ['සඳ බැසීම', 'Moonset'], pb: ['පෝය ලබන වේලාව', 'Poya Begins'], pe: ['පෝය ගෙවෙන වේලාව', 'Poya Ends'],
  tlT: ['චන්ද්‍ර කලාවන්', 'Moon Phase Timeline'], cr: ['සඳ සිතියම: NASA Scientific Visualization Studio (LROC)', "Moon map: NASA's Scientific Visualization Studio (LROC)"], lg1: ['පුර පසළොස්වක', 'Full moon'], lg2: ['අමාවක', 'New moon'],
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

var CSS = '#spOverlay{--cd:#fffdf9;--bd:rgba(120,80,30,.14);--tx:#2b1a0e;--mu:#6b5a4a;--bg2:#f6ead9;--ac:#a0561d;--tl:#fbf3e6;--sh:0 6px 22px rgba(90,60,20,.09);position:fixed;left:0;top:0;right:0;bottom:0;z-index:3100;display:none;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;color:var(--tx);font-family:"Noto Serif","Noto Serif Sinhala","Noto Serif Devanagari","Noto Sans Myanmar","Noto Sans Thai","Noto Serif SC",serif;background:linear-gradient(180deg,#f5dfc6 0%,#faf2e8 24%,#fbf6ee 100%)}' +
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
'.sp-hero p{margin:10px 6px 0;font-size:1.1rem;font-weight:700;line-height:1.5;color:rgba(255,255,255,.95)}' +
'.sp-pl{display:inline-flex;align-items:center;gap:9px;margin:13px auto 0;padding:8px 15px;border-radius:18px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.15);font-size:.84rem;line-height:1.5;text-align:left;max-width:100%;white-space:pre-line}' +
'.sp-pl .dot{flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.25)}.sp-pl.off .dot{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.25)}.sp-co{opacity:.72;font-size:.76rem}' +
'.sp-brow{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}' +
'.sp-btn{flex:1 1 120px;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:12px 16px;font:inherit;font-weight:700;font-size:.92rem;cursor:pointer;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22)}.sp-btn:disabled{opacity:.6}' +
'.sp-btn.gold{color:#3b2200;border:0;background:linear-gradient(135deg,#fcd34d,#e8a317);box-shadow:0 4px 14px rgba(232,163,23,.4)}.sp-btn.sm{flex:0 0 48px;padding:0;height:48px}' +
'.sp-card{background:var(--cd);border:1px solid var(--bd);border-radius:22px;padding:16px 14px;margin:0 0 16px;box-shadow:var(--sh)}body.dark-mode .sp-card{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}' +
'.sp-sh{display:flex;gap:12px;align-items:center;margin:0 0 14px}.sp-bd{width:46px;height:46px;border-radius:15px;background:var(--bg2);color:var(--ac);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex:0 0 auto}' +
'.sp-t2{font-size:1.1rem;font-weight:800;line-height:1.3}.sp-ds{font-size:.8rem;color:var(--mu);margin-top:2px;line-height:1.45}' +
'.sp-sh>div:nth-child(2){flex:1;min-width:0}.sp-now{flex:0 0 auto;margin-left:auto;width:46px;height:46px;border-radius:50%;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;background:var(--bg2);color:var(--ac);border:1px solid var(--bd);box-shadow:var(--sh)}.sp-now:active{transform:scale(.93)}' +
'.sp-tiles{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}@media(min-width:520px){.sp-tiles{grid-template-columns:repeat(4,1fr)}}' +
'.sp-tile{border-radius:18px;padding:13px 6px;text-align:center;background:var(--tl);border:1px solid var(--bd)}' +
'.sp-tile .i{width:46px;height:46px;margin:0 auto;border-radius:15px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.75);border:1px solid currentColor}body.dark-mode .sp-tile .i{background:rgba(255,255,255,.08)}' +
'.sp-tile .n{font-size:.62rem;line-height:1.3;color:var(--mu);margin-top:3px;opacity:.85}.sp-tile .l{font-size:.78rem;color:var(--mu);margin-top:7px}.sp-tile .t{font-size:1.12rem;font-weight:800;margin-top:3px;font-variant-numeric:tabular-nums}' +
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
'.sp-cn{position:absolute;z-index:3;display:none;align-items:center;gap:8px;padding:7px 12px;border-radius:14px;background:rgba(8,12,34,.86);border:1px solid rgba(255,214,120,.7);color:#ffe3a0;font-weight:800;font-size:.95rem;line-height:1.3;pointer-events:none;box-shadow:0 6px 18px rgba(0,0,0,.5);white-space:nowrap}.sp-cn .g{display:inline-flex;width:30px;height:30px;color:#ffd98a}.sp-cn .g svg{width:100%;height:100%}.sp-cn i{display:block;font-style:normal;font-weight:500;font-size:.72rem;color:#c9d6ff}' +
'.sp-ew{position:absolute;top:50%;z-index:2;margin-top:-26px;font-size:1rem;font-weight:800;color:#fff;text-shadow:0 1px 4px #000}.sp-ew.l{left:10px}.sp-ew.r{right:10px}' +
'.sp-clk{position:absolute;left:10px;bottom:10px;z-index:2;padding:7px 12px;border-radius:14px;background:rgba(0,0,0,.6);border:1px solid rgba(255,233,168,.35);color:#fff;line-height:1.35}.sp-clk .d{font-size:.7rem;opacity:.8}.sp-clk .t{font-size:1.08rem;font-weight:800;font-variant-numeric:tabular-nums}.sp-tm{position:absolute;right:10px;bottom:10px;z-index:2;padding:8px 11px;border-radius:14px;background:rgba(0,0,0,.6);border:1px solid rgba(255,233,168,.35);font-size:.74rem;line-height:1.6;color:#fff;min-width:150px}.sp-tm div{display:flex;justify-content:space-between;gap:14px}.sp-tm b{font-variant-numeric:tabular-nums}' +
'.sp-live{display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:6px;vertical-align:middle;animation:spPulse 1.2s ease-in-out infinite}@keyframes spPulse{50%{opacity:.25}}' +
'.sp-ctl2{margin:16px 0 0;display:flex;align-items:flex-start;gap:12px}.sp-ctl2>div:first-child{flex:1}.sp-time{min-width:118px;text-align:center;font-weight:800;font-variant-numeric:tabular-nums;margin-top:-3px}' +
'#spSl{-webkit-appearance:none;appearance:none;width:100%;height:14px;border-radius:8px;border:1px solid var(--bd);background:#0b1230;outline:none;margin:0;display:block}' +
'#spSl::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;background:#fff;border:4px solid #d4a017;box-shadow:0 2px 8px rgba(0,0,0,.4)}#spSl::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:4px solid #d4a017}' +
'.sp-read{display:grid;gap:8px;margin:14px 0 0}.sp-rd{display:flex;align-items:center;gap:9px;border-radius:14px;padding:9px 12px;font-size:.86rem;background:var(--tl);border:1px solid var(--bd)}.sp-rd .ic{color:var(--ac)}' +
'.sp-note{font-size:.74rem;color:var(--mu);margin-top:10px;text-align:center}' +
'.sp-rd{flex-wrap:wrap}.sp-zd{flex-basis:100%;display:grid;grid-template-columns:minmax(0,1.3fr) auto auto;gap:2px 8px;margin:6px 0 1px;padding-top:7px;border-top:1px dashed var(--bd);font-size:.8rem;line-height:1.45;align-items:baseline}' +
'.sp-zd .h{font-size:.7rem;font-weight:700;color:var(--mu)}.sp-zd .n{font-weight:700;display:flex;align-items:baseline;gap:5px;min-width:0}.sp-zd .n span{min-width:0;overflow-wrap:anywhere}' +
'.sp-zd .g{font-size:1.45rem;font-weight:400;line-height:1;color:var(--ac);flex:none;width:1.2em;text-align:center;display:inline-flex;align-items:center;justify-content:center}.sp-zd .g svg{width:1.25em;height:1.25em;display:block}.sp-zd .g{align-self:center}.sp-zd .k{flex:none;width:1.2em;text-align:center;color:var(--ac);font-size:1.15rem;line-height:1;align-self:center}' +
'.sp-zd .t{font-variant-numeric:tabular-nums;white-space:nowrap}.sp-zd .t.on{font-weight:800;color:var(--ac)}.sp-zd .x{grid-column:1/-1;font-size:.68rem;color:var(--mu)}';

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
function inApp() { if (typeof isNativeApp === 'function' && isNativeApp()) return false; return /FBAN|FBAV|Instagram|Viber|Line\/|; wv\)/i.test(navigator.userAgent || ''); }
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
  if (!nm) { try { var k = await tryGet('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=12&addressdetails=1&accept-language=' + (lang === 'en' ? 'en' : lang + ',en') + '&lat=' + l.lat + '&lon=' + l.lng); var a = k.address || {}; nm = a.city || a.town || a.village || a.suburb || a.county || ''; } catch (e) {} }
  if (!nm) return; LS.setItem('userLocName', nm);
  var ls = $('locationStatus'); if (ls) ls.innerHTML = (en() ? '📍 ' + TT('Location') + ': ' : '📍 ස්ථානය: ') + '<b>' + es(nm) + '</b><br><span class="loc-coords">(' + l.lat.toFixed(4) + '°, ' + l.lng.toFixed(4) + '°)</span>';
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
function tile(c, n, k) { return '<div class="sp-tile ' + c + '"><div class="i">' + ic(n, 26) + '</div><div class="l" data-k="' + k + '"></div><div class="t" id="sp_' + k + '">--</div>' + (k === 'dawn' ? '<div class="n" id="sp_dawnNote"></div>' : '') + '</div>'; }
/* අරුණෝදය ගණනය කළ ක්‍රමය (script.js → dawnRule): ශ්‍රී ලංකා 30 විනාඩි, මියන්මාර් 40 විනාඩි, තායි සිවිල් සන්ධ්‍යාව (−6°) */
function dawnNote() {
  var r = typeof dawnRule === 'function' ? dawnRule() : { min: 30 };
  if (r.alt != null) return TT('Civil twilight (Sun 6° below horizon)');
  return en() ? F('{0} min before sunrise', r.min) : 'ඉර උදාවට විනාඩි ' + r.min + ' කට පෙර';
}
function build() {
  var ov = $('spOverlay'); if (!ov) { ov = doc.createElement('div'); ov.id = 'spOverlay'; doc.body.appendChild(ov); }
  ov.innerHTML = '<div class="sp-sky"><i class="sp-st l1"></i><i class="sp-st l2"></i><i class="sp-st l3"></i></div><div class="sp-wrap">' +
  '<header class="sp-hero"><button class="sp-back" id="spBack" type="button" aria-label="Back">' + ic('chev', 24) + '</button><h1 data-k="title"></h1><p id="spSub"></p>' +
  '<div class="sp-pl off"><i class="dot"></i><div id="spStat"></div></div>' +
  '<div class="sp-brow"><button class="sp-btn gold" id="spLoc" type="button">' + ic('pin', 18) + '<span data-k="loc"></span></button><button class="sp-btn" id="spDate" type="button"></button></div></header>' +
  '<section class="sp-card">' + sh('rise', 'hTimes') + '<div class="sp-tiles">' + tile('dawn', 'dawn', 'dawn') + tile('sunrise', 'rise', 'sunrise') + tile('noon', 'sun', 'noon') + tile('sunset', 'set', 'sunset') + '</div>' +
  '<div class="sp-bar" id="spBar"><div class="sp-need" id="spNeed"></div></div><div class="sp-ax"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div></section>' +
  '<section class="sp-card">' + sh('globe', 'hSys', '<button class="sp-now" id="spNow" type="button" aria-label="Now" title="Now">' + ic('clock', 22) + '</button>') + '<div class="sp-stage" id="spStage"><div class="sp-zt" id="spZt"></div><div class="sp-zb"></div>' +
  '<span class="sp-ew l">E</span><span class="sp-ew r">W</span><div class="sp-cn" id="spCn"></div><div class="sp-clk" id="spClk"></div><div class="sp-tm" id="spTm" style="display:none"></div></div>' +
  '<div class="sp-ctl2"><div><input type="range" id="spSl" min="0" max="86399" step="1" value="43200"><div class="sp-ax"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div></div></div>' +
  '<div class="sp-read"><div class="sp-rd" id="spP1"></div><div class="sp-rd" id="spP2"></div></div><div class="sp-note" data-k="note"></div></section>' +
  '<section class="sp-card">' + sh('moon', 'hMoon') + '<div class="sp-moonrow"><canvas id="spMoonCv" width="240" height="240"></canvas><div class="sp-mi"><div class="ph" id="spPh"></div><div class="il" id="spIl"></div>' +
  '<div class="sp-kv"><span data-k="mrise"></span><b id="sp_mrise">--</b></div><div class="sp-kv"><span data-k="mset"></span><b id="sp_mset">--</b></div>' +
  '<div class="sp-kv" id="spPbL"><span data-k="pb"></span><b id="sp_pb"></b></div><div class="sp-kv" id="spPeL"><span data-k="pe"></span><b id="sp_pe"></b></div></div></div>' +
  '<div class="sp-tlh" data-k="tlT"></div><div class="sp-tl" id="spTl"></div><div class="sp-lg"><span><i style="background:#fde047"></i><span data-k="lg1"></span></span><span><i style="background:#a78bfa"></i><span data-k="lg2"></span></span></div><div class="sp-note" id="spCr" data-k="cr" style="display:none"></div></section></div>';
  var w = W.innerWidth, h = W.innerHeight, cs = ['#fff', '#cfe0ff', '#ffe9b0'], n = [90, 40, 16];
  [].forEach.call(ov.querySelectorAll('.sp-st'), function (e, k) { var s = []; for (var i = 0; i < n[k]; i++) s.push((Math.random() * w | 0) + 'px ' + (Math.random() * h | 0) + 'px ' + cs[(Math.random() * 3) | 0]); e.style.boxShadow = s.join(','); });
  P = { ov: ov, open: true, t: 43200, live: false, lm: -1, dk: '', iv: 0, mt: 0, tlk: '', tlr: 0, tmp: false, rv: false, pk: '', rn: 0, bt: 0, r3: false, tlq: null };
  $('spBack').onclick = close;
  $('spDate').onclick = function () { if (typeof openWheelPicker === 'function') openWheelPicker('sunDateInput'); };
  $('spLoc').onclick = fetchLoc;
  $('spNow').onclick = function () { var i = $('sunDateInput'); P.live = true; P.t = nowSec(); if (i && i.value !== todayStr()) { i.value = todayStr(); i.dispatchEvent(new Event('change')); } else upd(); };
  $('spSl').oninput = function () { P.t = +this.value; P.live = false; upd(); };
  return ov;
}
function lab() { [].forEach.call(P.ov.querySelectorAll('[data-k]'), function (e) { var t = TX[e.getAttribute('data-k')]; if (t) e.textContent = tr(t[0], t[1]); }); var dn = $('sp_dawnNote'); if (dn) dn.textContent = dawnNote(); }
function bar() {
  var a = mins(g('sunDawn')), b = mins(g('sunSunrise')), n = mins(g('sunNoon')), s = mins(g('sunSunset')), p = function (x) { return (x / 14.4).toFixed(2) + '%'; }, bg = '#0b1230';
  if (a < b && b < n && n < s) { var e = Math.min(1439, s + 40); bg = 'linear-gradient(90deg,#0b1230 0%,#0b1230 ' + p(a) + ',#6d3fa0 ' + p((a + b) / 2) + ',#f59e0b ' + p(b) + ',#fde68a ' + p(n) + ',#f59e0b ' + p(s) + ',#c2410c ' + p((s + e) / 2) + ',#0b1230 ' + p(e) + ',#0b1230 100%)'; }
  $('spBar').style.background = bg; $('spSl').style.background = bg;
}
function poya() { // same helper + same rule as script.js: midnight-to-midnight of the selected day
  var b = null, e = null; try { if (typeof findSpecialTithiEventsForDay === 'function' && typeof Astronomy !== 'undefined') { var ev = findSpecialTithiEventsForDay(dayStart()); b = ev.beginTime; e = ev.endTime; } } catch (x) {}
  $('sp_pb').textContent = fmtD(b); $('sp_pe').textContent = fmtD(e); $('spPbL').style.display = b ? '' : 'none'; $('spPeL').style.display = e ? '' : 'none';
}
function south() { try { return (typeof W.isSouthernViewer === 'function' && W.isSouthernViewer() ? 1 : 0) + '|' + (W.V3D && V3D.ver ? V3D.ver() : 0); } catch (e) { return 0; } } // hemisphere + moon-map version
function moonTl(cv, k) { // same image as V3D.paintMoon(cv, sdt(k), 0); a date already painted (same size/hemisphere) is copied instead of re-rendered
  var key = k + '|' + cv.width + '|' + south(), c = MC[key];
  if (c) { var x = cv.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height); x.drawImage(c, 0, 0); return; }
  V3D.paintMoon(cv, sdt(k), 0); if (!V3D.ready || !V3D.ready()) return;
  key = k + '|' + cv.width + '|' + south(); c = doc.createElement('canvas'); c.width = cv.width; c.height = cv.height; c.getContext('2d').drawImage(cv, 0, 0);
  MC[key] = c; MCK.push(key); if (MCK.length > 120) delete MC[MCK.shift()];
}
function tl() {
  var d = ymd(), box = $('spTl'); if (!d || !P.open || P.tlk === d || !box) return;
  if (!(W.V3D && V3D.paintMoon && (V3D.ready ? V3D.ready() : V3D.paintMoon(doc.createElement('canvas'), new Date(), 0)))) { if (P.tlr++ < 10) setTimeout(tl, 600); return; }
  P.tlk = d; box.innerHTML = ''; var px = Math.round(50 * Math.min(W.devicePixelRatio || 1, 2)), q = [], tok = ++TLT;
  for (var n = -14; n <= 15; n++) { var k = addK(d, n), m = mark(k), b = doc.createElement('button'); b.type = 'button'; b.className = 'sp-d' + (n ? '' : ' on') + (m ? ' m' + m : ''); b.setAttribute('data-k', k);
    b.innerHTML = '<canvas width="' + px + '" height="' + px + '" style="width:50px;height:50px"></canvas><b>' + (+k.slice(8)) + '</b>'; box.appendChild(b); q.push([b.firstChild, k, Math.abs(n)]); }
  box.onclick = function (e) { var x = e.target.closest ? e.target.closest('.sp-d') : null; if (!x) return; var i = $('sunDateInput'); i.value = x.getAttribute('data-k'); i.dispatchEvent(new Event('change')); };
  var on = box.querySelector('.on'); if (on) box.scrollLeft = on.offsetLeft - box.clientWidth / 2 + on.offsetWidth / 2;
  q.sort(function (a, b) { return a[2] - b[2]; }); // centre (visible) days first
  var step = function () { if (!P || !P.open || tok !== TLT) return; var t0 = performance.now();
    do { var it = q.shift(); moonTl(it[0], it[1]); } while (q.length && performance.now() - t0 < 10);
    if (q.length) requestAnimationFrame(step); };
  if (P.r3) requestAnimationFrame(step); else P.tlq = step; // on open: wait until the 3D stage is set up (creating it while moons are queued on the GPU stalls)
}
function go3d() { if (!P || P.r3) return; P.r3 = true; clearTimeout(P.bt); if (P.tlq) { var f = P.tlq; P.tlq = null; requestAnimationFrame(f); } }
W.addEventListener('v3dmoon', function () { MC = {}; MCK = []; if (P && P.open) { P.tlk = ''; P.mt = 0; upd(); tl(); } }); // real Moon map arrived late → repaint
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
  if (!P || !P.open) return; P.rn++; lab();
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
  if (full) { $('spCr').style.display = W.V3D && V3D.real && V3D.real() ? '' : 'none'; var cv = $('spMoonCv'); if (cv && W.V3D && V3D.paintMoon && V3D.paintMoon(cv, d, 0)) P.mt = 0; else if (P.mt++ < 8) setTimeout(function () { upd(); }, 600); }
  try {
    var hs = hz('Sun', d, l), hm = hz('Moon', d, l), sa = hs.altitude, ma = hm.altitude, a1 = Math.abs(sa).toFixed(0), a2 = Math.abs(ma).toFixed(0);
    sky(sa, hs.azimuth); place(hs, hm, d, l); if (!full) return;
    $('spP1').innerHTML = sa > .8 ? ic('sun', 17) + '<span>' + (en() ? F('Daytime — Sun altitude {0}°', a1) : 'දිවා කාලය — ඉරේ උන්නතාංශය ' + a1 + '°') + '</span>'
      : sa > -6 ? ic('dawn', 17) + '<span>' + (en() ? F('Twilight — Sun {0}° below horizon', a1) : 'සන්ධ්‍යා / අරුණ ආලෝක කාලය — ඉර ක්ෂිතිජයට පහළින් ' + a1 + '°') + '</span>'
      : ic('moon', 17) + '<span>' + (en() ? F('Night — Sun {0}° below horizon', a1) : 'රාත්‍රී කාලය — ඉර ක්ෂිතිජයට පහළින් ' + a1 + '°') + '</span>';
    try { $('spP1').innerHTML += zodHtml('Sun', d, l); } catch (e) {}
    $('spP2').innerHTML = ic('moon', 17) + '<span>' + (ma > 0 ? tr('සඳ ක්ෂිතිජයට ඉහළින් — උන්නතාංශය ', 'Moon above the horizon — altitude ') + a2 + '°' : tr('සඳ ක්ෂිතිජයට පහළින් (', 'Moon below the horizon (') + a2 + '°)') + '</span>';
    try { $('spP2').innerHTML += zodHtml('Moon', d, l); } catch (e) {}
  } catch (e) {}
}

/* ---------- රාශි සහ නැකැත් (නිරයන — ලාහිරි / චිත්‍රපක්ෂ අයනාංශය) ----------
   • ඉරේ / සඳෙහි නිරයන ස්ඵුටය = සායන (ඍතු) දේශාංශය − අයනාංශය; රාශිය = 30°, නැකත = 13°20′.
   • රාශියක / නැකතක "උදාව" = එහි ආරම්භය නැගෙනහිර ක්ෂිතිජයට පැමිණීමේ (ලග්නය එයට පැමිණීමේ) සිට අවසානය
     පැමිණීම දක්වා; "බැසීම" = එසේම බටහිර ක්ෂිතිජයේ (සප්තම / අස්ත ලග්නය). තෝරාගත් දිනයට, ඔබේ ස්ථානයට. */
var ZSI = ['මේෂ', 'වෘෂභ', 'මිථුන', 'කටක', 'සිංහ', 'කන්‍යා', 'තුලා', 'වෘශ්චික', 'ධනු', 'මකර', 'කුම්භ', 'මීන'];
var ZEN = ['Mesha (Aries)', 'Vṛṣabha (Taurus)', 'Mithuna (Gemini)', 'Karka (Cancer)', 'Siṃha (Leo)', 'Kanyā (Virgo)', 'Tulā (Libra)', 'Vṛścika (Scorpio)', 'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Mīna (Pisces)'];
var ZL = { hi: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
  th: ['ราศีเมษ', 'ราศีพฤษภ', 'ราศีเมถุน', 'ราศีกรกฎ', 'ราศีสิงห์', 'ราศีกันย์', 'ราศีตุลย์', 'ราศีพิจิก', 'ราศีธนู', 'ราศีมังกร', 'ราศีกุมภ์', 'ราศีมีน'],
  zh: ['白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯', '水瓶', '双鱼'],
  vi: ['Bạch Dương', 'Kim Ngưu', 'Song Tử', 'Cự Giải', 'Sư Tử', 'Xử Nữ', 'Thiên Bình', 'Thiên Yết', 'Nhân Mã', 'Ma Kết', 'Bảo Bình', 'Song Ngư'],
  my: ['မိဿ', 'ပြိဿ', 'မေထုန်', 'ကရကဋ်', 'သိဟ်', 'ကန်', 'တူ', 'ဗြိစ္ဆာ', 'ဓနု', 'မကာရ', 'ကုံ', 'မိန်'] };
var NSI = ['අස්විද', 'බෙරණ', 'කැති', 'රෙහෙණ', 'මුවසිරස', 'අද', 'පුනාවස', 'පුෂ', 'අස්ලිස', 'මා', 'පුවපල්', 'උත්‍රපල්', 'හත', 'සිත', 'සා', 'විසා', 'අනුර', 'දෙට', 'මුල', 'පුවසල', 'උත්‍රසල', 'සුවණ', 'දෙනට', 'සියාවස', 'පුවපුටුප', 'උත්‍රපුටුප', 'රේවතී'];
var NEN = ['Aśvinī', 'Bharaṇī', 'Kṛttikā', 'Rohiṇī', 'Mṛgaśirā', 'Ārdrā', 'Punarvasu', 'Puṣya', 'Āśleṣā', 'Maghā', 'Pūrva Phalgunī', 'Uttara Phalgunī', 'Hasta', 'Citrā', 'Svātī', 'Viśākhā', 'Anurādhā', 'Jyeṣṭhā', 'Mūla', 'Pūrva Āṣāḍhā', 'Uttara Āṣāḍhā', 'Śravaṇa', 'Dhaniṣṭhā', 'Śatabhiṣā', 'Pūrva Bhādrapadā', 'Uttara Bhādrapadā', 'Revatī'];
var NL = { hi: ['अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी', 'हस्त', 'चित्रा', 'स्वाति', 'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूल', 'पूर्वाषाढ़ा', 'उत्तराषाढ़ा', 'श्रवण', 'धनिष्ठा', 'शतभिषा', 'पूर्वाभाद्रपदा', 'उत्तराभाद्रपदा', 'रेवती'],
  th: ['อัศวินี', 'ภรณี', 'กฤติกา', 'โรหิณี', 'มฤคศิระ', 'อารทรา', 'ปุนัพสุ', 'ปุษยะ', 'อาศเลษา', 'มฆา', 'บุรพผลคุนี', 'อุตรผลคุนี', 'หัสตะ', 'จิตรา', 'สวาตี', 'วิศาขา', 'อนุราธา', 'เชษฐา', 'มูละ', 'บุรพาษาฒ', 'อุตราษาฒ', 'ศรวณะ', 'ธนิษฐา', 'ศตภิษัช', 'บุรพภัทรบท', 'อุตรภัทรบท', 'เรวดี'] };
/* රාශි සලකුණු — චිත්‍ර රූප (බැටළුවා, ගවයා, යුවළ, කකුළුවා, සිංහයා, කන්‍යාව, තරාදිය, ගෝනුස්සා, දුන්න, මකරා, කලය, මසුන් දෙදෙනා).
   64×64 SVG path: [d, 's' = රේඛා | 'f' = පිරවූ | 'b' = දෙකම, රේඛා ඝනකම?] — 3D වේදිකාවේ (canvas) සහ ලැයිස්තුවේ (SVG) එකම රූප. */
var ZICO = [ /* 0 මේෂ ram head (profile, facing right) */ [['M24 25C25 19 31 16 37 18L47 26C52 30 53 36 49 39L44 41C42 46 37 50 31 48C26 46 23 40 23 33Z','s'], ['M30 21C25 12 12 14 10 25C8 36 20 41 26 35C30 31 26 25 21 27C18 28 18 32 21 33','s',5.2], ['M39 27.5a1.8 1.8 0 1 0 .1 0Z','f'], ['M45 39L47 36','s']], /* 1 වෘෂභ bull head (front) */ [['M12 12C10 22 16 27 24 27M52 12C54 22 48 27 40 27','s'], ['M24 27C21 27 18 25 15 27C17 31 21 31 23 31M40 27C43 27 46 25 49 27C47 31 43 31 41 31','s'], ['M24 27C30 25 34 25 40 27L41 42C41 50 37 54 32 54C27 54 23 50 23 42Z','s'], ['M28.5 47a1.6 1.6 0 1 0 .1 0ZM35.5 47a1.6 1.6 0 1 0 .1 0Z','f'], ['M27.5 35.5a1.6 1.6 0 1 0 .1 0ZM36.5 35.5a1.6 1.6 0 1 0 .1 0Z','f']], /* 2 මිථුන couple */ [['M21 10.5a5 5 0 1 0 .1 0ZM43 10.5a5 5 0 1 0 .1 0Z','f'], ['M21 21C16 21 14 25 14 30L13 52H29L28 30C28 25 26 21 21 21ZM43 21C38 21 36 25 36 30L35 52H51L50 30C50 25 48 21 43 21Z','f'], ['M27 31C30 34 34 34 37 31','s']], /* 3 කටක crab */ [['M32 26C22 26 15 32 15 38C15 44 22 48 32 48C42 48 49 44 49 38C49 32 42 26 32 26Z','f'], ['M20 29C14 24 12 18 15 12M44 29C50 24 52 18 49 12','s'], ['M15 12C11 11 9 15 11 18L16 16M49 12C53 11 55 15 53 18L48 16','b'], ['M17 41L8 43L5 48M17 44L10 49L9 54M47 41L56 43L59 48M47 44L54 49L55 54','s'], ['M28 26V21M36 26V21','s']], /* 4 සිංහ lion face with mane */ [['M32 6L37 11L44 9L46 16L53 18L51 25L57 30L52 35L55 42L48 44L47 51L40 50L36 57L32 52L28 57L24 50L17 51L16 44L9 42L12 35L7 30L13 25L11 18L18 16L20 9L27 11Z','s'], ['M32 17C24 17 19 23 19 31C19 40 25 46 32 46C39 46 45 40 45 31C45 23 40 17 32 17Z','s'], ['M26.5 28a2 2 0 1 0 .1 0ZM37.5 28a2 2 0 1 0 .1 0Z','f'], ['M28.5 35L35.5 35L32 39Z','f'], ['M32 39V41M28 42C30 44 34 44 36 42','s']], /* 5 කන්‍යා maiden with grain */ [['M30 8.5a5.5 5.5 0 1 0 .1 0Z','f'], ['M35 9C38 8 40 10 39 13','s'], ['M30 20C25 20 23 24 23 29L18 56H42L37 29C37 24 35 20 30 20Z','f'], ['M36 30L44 24M44 24L48 8M48 8C45 10 45 14 47 16M48 8C51 10 51 14 49 16M47 15C44 17 44 21 46 22M49 15C52 17 52 21 50 22','s']], /* 6 තුලා scales */ [['M32 8V52M20 54H44M14 16H50','s'], ['M32 7.5a2.5 2.5 0 1 0 .1 0Z','f'], ['M14 16L7 33M14 16L21 33M50 16L43 33M50 16L57 33','s'], ['M5 33H23C23 38 19 41 14 41C9 41 5 38 5 33ZM41 33H59C59 38 55 41 50 41C45 41 41 38 41 33Z','f']], /* 7 වෘශ්චික scorpion */ [['M25 38C25 34 28 32 32 32C36 32 39 34 39 38C39 43 36 46 32 46C28 46 25 43 25 38Z','f'], ['M32 46V51M32 51C32 56 36 59 41 58C47 57 50 52 49 46C48 42 45 41 43 43','s'], ['M43 43L46 39L40 41Z','f'], ['M27 33C21 28 17 22 18 14M37 33C43 28 47 22 46 14','s'], ['M18 14C14 13 12 17 14 20L19 18M46 14C50 13 52 17 50 20L45 18','b'], ['M26 37L16 36L12 40M26 41L17 43L14 48M38 37L48 36L52 40M38 41L47 43L50 48','s']], /* 8 ධනු bow & arrow */ [['M16 8C40 14 50 34 44 58','s'], ['M16 8L44 58','s'], ['M8 44L52 18','s'], ['M52 18L44 18.5L48 25Z','f'], ['M8 44L5 40M8 44L5.5 48M11 42.2L8 38M11 42.2L8.5 46','s']], /* 9 මකර goat-fish */ [['M8 23C8 18 12 15 17 16L24 19C27 21 27 25 24 27L19 28C15 28 11 27 8 23Z','s'], ['M17 16C15 10 18 5 24 4C22 8 22 12 24 18','b'], ['M17 20.5a1.6 1.6 0 1 0 .1 0Z','f'], ['M24 19C34 20 42 26 46 34C48 39 51 41 55 40M21 28C26 37 34 42 44 44C48 45 51 44 55 40','s'], ['M55 40L62 33L61 47Z','f'], ['M26 33L21 42L25 44M33 38L31 48L35 48','s'], ['M36 31C38 34 40 35 43 35','s']], /* 10 කුම්භ water pot */ [['M21 11H43','s',4.5],['M25 11V18C16 22 12 31 14 40C16 50 24 56 32 56C40 56 48 50 50 40C52 31 48 22 39 18V11','s'], ['M19 34C24 31 28 37 32 34C36 31 40 37 45 34','s'], ['M17 42C22 39 27 45 32 42C37 39 42 45 47 42','s']], /* 11 මීන two fish */ [['M12 22C18 12 34 12 42 20L48 14L48 30L42 24C34 32 18 32 12 22Z','f'], ['M52 44C46 54 30 54 22 46L16 52L16 36L22 42C30 34 46 34 52 44Z','f']] ];
function zSvg(i) { return '<svg viewBox="0 0 64 64" aria-hidden="true">' + ZICO[i].map(function (q) {
  return '<path d="' + q[0] + '" fill="' + (q[1] === 's' ? 'none' : 'currentColor') + '"' + (q[1] === 'f' ? '' : ' stroke="currentColor" stroke-width="' + (q[2] || 3.6) + '" stroke-linecap="round" stroke-linejoin="round"') + '/>'; }).join('') + '</svg>'; }
var NAKW = 360 / 27;
function lang() { try { return typeof currentLang !== 'undefined' ? currentLang : 'si'; } catch (e) { return 'si'; } }
function rName(i) { var l = lang(); return l === 'si' ? ZSI[i] : (ZL[l] || ZEN)[i]; }
function nName(i) { var l = lang(); return l === 'si' ? NSI[i] : (NL[l] || NEN)[i]; }
function nrm(x) { return (x % 360 + 360) % 360; }
function jdT(d) { return (d.getTime() / 864e5 + 2440587.5 - 2451545) / 36525; }
function ayan(d) { var t = jdT(d); return 23.85308 + (5028.796195 * t + 1.1054348 * t * t) / 3600; }     // ලාහිරි (J2000 = 23°51′11″) + අයන චලනය
function obl(d) { return 23.439291 - 0.0130042 * jdT(d); }
function lstDeg(d, l) { return nrm(Astronomy.SiderealTime(d) * 15 + l.lng); }
function ascTrop(d, l) { var th = lstDeg(d, l) * D, e = obl(d) * D, f = cl(l.lat, -66, 66) * D;
  return nrm(Math.atan2(Math.cos(th), -(Math.sin(th) * Math.cos(e) + Math.tan(f) * Math.sin(e))) / D); }
function sidLon(body, d) { var t = body === 'Sun' ? Astronomy.SunPosition(d).elon : Astronomy.EclipticGeoMoon(d).lon; return nrm(t - ayan(d)); }
/* ක්ෂිතිජයට ඉහළින් නිරයන දේශාංශය λ හි ක්‍රාන්තිවෘත්ත ලක්ෂ්‍යය: { altitude, azimuth } (වර්තනය නොසලකා) */
function eclHor(lam, d, l) { var lt = nrm(lam + ayan(d)) * D, e = obl(d) * D, f = l.lat * D;
  var dec = Math.asin(Math.sin(e) * Math.sin(lt)), ra = Math.atan2(Math.cos(e) * Math.sin(lt), Math.cos(lt)), H = lstDeg(d, l) * D - ra;
  var alt = Math.asin(Math.sin(f) * Math.sin(dec) + Math.cos(f) * Math.cos(dec) * Math.cos(H));
  var az = Math.atan2(-Math.cos(dec) * Math.sin(H), Math.sin(dec) * Math.cos(f) - Math.cos(dec) * Math.cos(H) * Math.sin(f));
  return { altitude: alt / D, azimuth: nrm(az / D) }; }
/* side 0 = නැගෙනහිර (ලග්නය), 1 = බටහිර; target (නිරයන) ලග්නයට පැමිණෙන පළමු වේලාව t0 ට පසු */
function crossAt(target, side, t0, l) {
  var f = function (t) { var d = new Date(t); return nrm(ascTrop(d, l) - ayan(d) + side * 180 - target + 180) - 180; };
  var st = 120e3, a = t0, fa = f(a);
  for (var i = 0; i < 760; i++) { var b = a + st, fb = f(b);
    if (fa < 0 && fb >= 0 && fb - fa < 90) { for (var k = 0; k < 14; k++) { var m = (a + b) / 2, fm = f(m); if (fm < 0) { a = m; fa = fm; } else b = m; } return new Date(b); }
    a = b; fa = fb; }
  return null; }
var ZC = {};
/* [start, end) ඛණ්ඩයේ උදාව / බැසීම — තෝරාගත් දිනය හා අතිච්ඡාදනය වන පළමු අවස්ථාව */
function riseSet(a, w, l) {
  var key = ymd() + '|' + l.lat.toFixed(3) + '|' + l.lng.toFixed(3) + '|' + a.toFixed(3); if (ZC[key]) return ZC[key];
  var d0 = dayStart().getTime(), out = [];
  [0, 1].forEach(function (side) {
    var t = d0 - 4 * 36e5, s = null, e = null;
    for (var n = 0; n < 3; n++) { s = crossAt(a, side, t, l); if (!s) break; e = crossAt(nrm(a + w), side, s.getTime() + 6e4, l); if (!e || e.getTime() > d0) break; t = e.getTime() + 6e4; }
    out.push([s, e]);
  });
  var ks = Object.keys(ZC); if (ks.length > 80) ZC = {};
  return (ZC[key] = out); }
function fmtR(s, e, now) {
  if (!s || !e) return '<span class="t">—</span>';
  var a = fmtD(s), b = fmtD(e), on = now >= s && now < e, sa = a.slice(-2), sb = b.slice(-2);
  return '<span class="t' + (on ? ' on' : '') + '">' + (sa === sb ? a.slice(0, -3) : a) + '–' + b + '</span>'; }
function zodHtml(body, d, l) {
  var lam = sidLon(body, d), ri = Math.floor(lam / 30), ni = Math.floor(lam / NAKW);
  var r1 = riseSet(ri * 30, 30, l), r2 = riseSet(ni * NAKW, NAKW, l);
  return '<div class="sp-zd"><span class="h"></span><span class="h">' + es(tr('උදාව', 'Rising')) + '</span><span class="h">' + es(tr('බැසීම', 'Setting')) + '</span>' +
    '<span class="n"><b class="g" aria-hidden="true">' + zSvg(ri) + '</b><span>' + es(rName(ri) + (lang() === 'si' ? ' රාශිය' : '')) + '</span></span>' + fmtR(r1[0][0], r1[0][1], d) + fmtR(r1[1][0], r1[1][1], d) +
    '<span class="n"><b class="k" aria-hidden="true">✦</b><span>' + es(nName(ni) + (lang() === 'si' ? ' නැකත' : '')) + '</span></span>' + fmtR(r2[0][0], r2[0][1], d) + fmtR(r2[1][0], r2[1][1], d) +
    '</div>'; }

/* ---------- 3D: Earth fixed in the middle, you on top; Sun & Moon move around it (as we see them) ---------- */
function needSky() { if (W.SKY || doc.querySelector('script[src="sky-data.js"]')) return; var s = doc.createElement('script'); s.src = 'sky-data.js';
  s.addEventListener('load', function () { if (RC && RC.sc && !RC.sky) RC.sky = skyObjs(RC.sc); if (R && P && P.open) upd(true); }); doc.head.appendChild(s); }
function need(cb) { needSky(); if (W.THREE) { T = W.THREE; return cb(); } var s = doc.querySelector('script[src="three.min.js"]'), nw = !s; if (nw) { s = doc.createElement('script'); s.src = 'three.min.js'; } // one download/parse even if visuals3d.js is loading it too
  s.addEventListener('load', function () { T = W.THREE; cb(); }); s.addEventListener('error', function () { var b = $('spStage'); if (b) b.style.display = 'none'; }); if (nw) doc.head.appendChild(s); }
function start3d() { if (R) return go3d(); need(function () { if (!P || !P.open || R) return; try { if (RC && !RC.lost) attach3d(); else { drop3d(); init3d(); } } catch (e) { go3d(); console.error(e); var b = $('spStage'); if (b) b.style.display = 'none'; } }); }
function glowTex(c) { var cv = doc.createElement('canvas'); cv.width = cv.height = 128; var x = cv.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(' + c + ',.95)'); gr.addColorStop(.25, 'rgba(' + c + ',.5)'); gr.addColorStop(.55, 'rgba(' + c + ',.15)'); gr.addColorStop(1, 'rgba(' + c + ',0)'); x.fillStyle = gr; x.fillRect(0, 0, 128, 128); return new T.CanvasTexture(cv); }
function init3d() {
  var r = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }), i;
  r.setClearColor(0x000000, 0);
  var tx = function (n) { try { return (W.V3D && V3D.tex && V3D.tex(n)) || null; } catch (e) { return null; } };
  var sc = new T.Scene(), cam = new T.PerspectiveCamera(40, 1, 1, 3000), te = tx('e'), tm = tx('m');
  cam.position.set(0, 0, CD); cam.lookAt(0, 0, 0);
  sc.add(new T.AmbientLight(0x2a3050, .5)); var dl = new T.DirectionalLight(0xfff2d0, 2.5); sc.add(dl); var hl = new T.HemisphereLight(0xfff1d0, 0x000000, 0); sc.add(hl);
  var sun = new T.Mesh(new T.SphereGeometry(4, 32, 24), new T.MeshBasicMaterial({ color: 0xffffff })); sc.add(sun);
  var gl = new T.Sprite(new T.SpriteMaterial({ map: glowTex('255,200,100'), blending: T.AdditiveBlending, transparent: true, depthWrite: false })); gl.scale.set(24, 24, 1); sun.add(gl);
  var earth = new T.Mesh(new T.SphereGeometry(ER, 48, 36), new T.MeshStandardMaterial({ map: te, color: te ? 0xffffff : 0x2e6db4, roughness: .9, metalness: .05 })); earth.rotation.set(.35, 2.2, 0); sc.add(earth);
  sc.add(new T.Mesh(new T.SphereGeometry(ER * 1.1, 36, 24), new T.MeshBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: .16, side: T.BackSide })));
  var moon = new T.Mesh(new T.SphereGeometry(2.2, 32, 24), new T.MeshStandardMaterial({ map: tm, color: 0xffe08a, roughness: 1, metalness: 0 })); moon.rotation.y = -Math.PI / 2; sc.add(moon); // real map: near side (lon 0) towards us
  var mg = new T.Sprite(new T.SpriteMaterial({ map: glowTex('255,226,140'), blending: T.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0 })); mg.scale.set(11, 11, 1); moon.add(mg);
  var ml = new T.DirectionalLight(0xffe6a0, 0); sc.add(ml);
  RC = { r: r, sc: sc, cam: cam, sun: sun, sgl: gl, dl: dl, hl: hl, moon: moon, mg: mg, ml: ml, zd: zodObjs(sc), sky: skyObjs(sc) };
  r.domElement.addEventListener('webglcontextlost', function () { if (RC && RC.r === r) RC.lost = true; }, false);
  attach3d();
}
function attach3d() { // reuse the same renderer/scene (no new WebGL context, no shader recompiling, no texture redrawing)
  var box = $('spStage'), r = RC.r, sc = RC.sc, cam = RC.cam; R = RC;
  if (!r.domElement.__tap) { r.domElement.__tap = 1; r.domElement.addEventListener('click', function (e) { try { skyTap(e); } catch (x) {} }); }
  r.setPixelRatio(Math.min(W.devicePixelRatio || 1, 2)); box.insertBefore(r.domElement, box.querySelector('.sp-ew'));
  function fit() { var w = box.clientWidth, h = box.clientHeight; if (!w || !h) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); r.render(sc, cam); }
  if (W.ResizeObserver) { R.ro = new ResizeObserver(fit); R.ro.observe(box); } fit(); upd(true); go3d();
}
function dispAlt(al, r, k) { // drawn altitude. Upper edge touches the line at the listed rise/set time (centre -0.215° apparent); the disc then clears the line within its real crossing time (~0.5° ≈ 2 min), and the extra offset fades out higher up
  var rd = Math.asin(r / k) / D, a0 = -.215, w = .5;
  if (al <= a0) return al - rd;
  if (al < a0 + w) return -rd + (al - a0) / w * 2 * rd;
  var t = cl((al - a0 - w) / 25, 0, 1); t = t * t * (3 - 2 * t); return al + (rd - a0 - w) * (1 - t); }
/* අහසේ ප්‍රක්ෂේපණය: දකුණු ක්ෂිතිජ ලක්ෂ්‍යය මධ්‍යයේ ඇති සමදුර (azimuthal equidistant) — නැගෙනහිර වමට, බටහිර දකුණට,
   ශීර්ෂය උඩට; දකුණු අර්ධ ගෝලය අර්ධ වෘත්තය තුළ, උතුරු අහස ඉන් පිටත (ශීර්ෂයෙන් ඔබ්බට) — තරු එකිනෙක මතට නොවැටේ.
   N = උතුර, E = නැගෙනහිර, U = ඉහළ (ඒකක දෛශිකය); ගැඹුර (z) පෙර පරිදිම — පෘථිවිය පිටුපස / ඉදිරිපස. */
function hpXYZ(N, E, U, k, out, o) { var rho = Math.acos(cl(-N, -1, 1)), s = Math.sqrt(E * E + U * U), f = s > 1e-9 ? rho / (Math.PI / 2) / s * k : 0;
  out[o] = -E * f; out[o + 1] = U * f; out[o + 2] = N * k * .3; }
var HPT = [0, 0, 0];
function hp(a, z, k) { var ca = Math.cos(a); hpXYZ(ca * Math.cos(z), ca * Math.sin(z), Math.sin(a), k, HPT, 0); return new T.Vector3(HPT[0], HPT[1], HPT[2]); }
function vec(h, k, r) { return hp(dispAlt(h.altitude, r, k) * D, h.azimuth * D, k); } // east = left, west = right, looking south (depth compressed)
function place(hs, hm, d, l) {
  if (!R) return; var sp = vec(hs, SD, 4), mpos = vec(hm, MD, 2.2);
  R.sun.position.copy(sp); R.dl.position.copy(sp).normalize().multiplyScalar(100); R.moon.position.copy(mpos);
  var sa = hs.altitude, ma = hm.altitude, il = 0.5, tc = tint(STINT, Math.max(0, sa));
  try { il = Astronomy.Illumination('Moon', d).phase_fraction; } catch (e) {}
  R.sun.material.color.copy(tc); R.sgl.material.color.copy(tc); R.dl.color.copy(tc).lerp(new T.Color(0xffffff), .25); R.hl.color.copy(tc).lerp(new T.Color(0xffffff), .4); R.hl.intensity = 1.1 * cl(Math.sin(sa * D) * 1.3, 0, 1); // daytime: whole upper half lit
  R.moon.material.color.copy(tint(MTINT, Math.max(0, ma))); R.mg.material.opacity = (.18 + .55 * il) * cl((ma + 4) / 8, 0, 1) * cl(1 - sa / 25, .35, 1);
  R.ml.position.copy(mpos).normalize().multiplyScalar(100); R.ml.intensity = .8 * il * cl((ma + 4) / 10, 0, 1); // pale-yellow moonlight on the Earth
  try { skyPlace(d, l, cl((-sa - 3) / 10, 0, 1)); } catch (e) {}
  try { zplace(d, l, hs, hm); } catch (e) {}
  R.r.render(R.sc, R.cam);
}
/* රූපයේ යාන්තමින්: ක්‍රාන්තිවෘත්තය (ඉර ගමන් කරන මාර්ගය), රාශි සලකුණු 12, ඉරේ හා සඳෙහි නැකත් නම් — ක්ෂිතිජයට ඉහළින් පමණි */
function txtTex(txt, font, px, col) {
  var cv = doc.createElement('canvas'), x = cv.getContext('2d'); x.font = font;
  var w = Math.ceil(x.measureText(txt).width) + 12, h = Math.ceil(px * 1.5); cv.width = w; cv.height = h;
  x.font = font; x.fillStyle = col || '#ffe3a0'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, w / 2, h / 2);
  var t = new T.CanvasTexture(cv); t.minFilter = T.LinearFilter; return { t: t, a: w / h }; }
function icoTex(i) { var n = 144, cv = doc.createElement('canvas'); cv.width = cv.height = n; var x = cv.getContext('2d');
  x.translate(8, 8); x.scale(2, 2); x.strokeStyle = x.fillStyle = '#ffe3a0'; x.lineCap = x.lineJoin = 'round';
  x.shadowColor = 'rgba(0,0,0,.65)'; x.shadowBlur = 3;
  ZICO[i].forEach(function (q) { var pa = new Path2D(q[0]); x.lineWidth = q[2] || 3.6; if (q[1] !== 's') x.fill(pa); if (q[1] !== 'f') x.stroke(pa); });
  var t = new T.CanvasTexture(cv); t.minFilter = T.LinearFilter; return { t: t, a: 1 }; }
function zsprite(ht) { var s = new T.Sprite(new T.SpriteMaterial({ transparent: true, depthWrite: false, opacity: 0 })); s.userData.h = ht; s.visible = false; return s; }
function zsetTex(s, tx) { if (s.material.map) s.material.map.dispose(); s.material.map = tx.t; s.material.needsUpdate = true; s.scale.set(s.userData.h * tx.a, s.userData.h, 1); }
/* ---------- රාත්‍රී අහසේ සැබෑ තරු සහ තාරකා රටා (sky-data.js — d3-celestial / HYG) ----------
   • J2000 තරු දිශා → Astronomy.Rotation_EQJ_HOR (අයන චලනය, නුටේෂන් සහිතව) → ක්ෂිතිජ → hp() (ඉර / සඳ / රාශි හා එකම ප්‍රක්ෂේපණය)
     — එබැවින් ක්‍රාන්තිවෘත්තය සමඟ හරියටම ගැළපේ; වේලාව අනුව චලනය වේ. ඉහළ අර්ධ ගෝලය පුරාම (උතුරු අහසද) පෙන්වයි.
   • තාරකා රටාවල තරු දීප්තිමත්ව / විශාලව; අනෙක් තරු (mag ≤ 4.2) කුඩාවට, අඳුරුව. දීප්තිමත්ම තරුවලට කිරණ (✦).
   • රටා රේඛා සාමාන්‍යයෙන් නොපෙන්වයි (සැබෑ අහසක මෙන් තරු පමණි). තරු රටාවක් ඔබූ විට පමණක් එහි රේඛා රන්වන් පැහැයෙන් ඇඳ,
     නම (රාශි මණ්ඩලවලට රාශි නාමය සහ සලකුණ) පෙන්වයි.
   • ක්ෂිතිජයට පහළ තරු නොපෙන්වයි; ඉර ක්ෂිතිජයට 3° ට වඩා පහළට යන විට ක්‍රමයෙන් දිස්වේ. */
var SKYB = [[1, -9, 1.5, 11, 1], [1, 1.5, 2.5, 5.6, 0], [1, 2.5, 3.5, 4.3, 0], [1, 3.5, 9, 3.2, 0], [0, -9, 9, 2.2, 0]];   // [රටාවේද, mag සිට, දක්වා, පික්සල, කිරණ]
var ZIAU = { Ari: 0, Tau: 1, Gem: 2, Cnc: 3, Leo: 4, Vir: 5, Lib: 6, Sco: 7, Sgr: 8, Cap: 9, Aqr: 10, Psc: 11 };   // රාශි මණ්ඩල → රාශි අංකය
var DOT = {};
function dotTex(spk) { if (DOT[spk]) return DOT[spk]; var n = spk ? 64 : 32, h = n / 2, cv = doc.createElement('canvas'); cv.width = cv.height = n; var x = cv.getContext('2d');
  var gr = x.createRadialGradient(h, h, 0, h, h, spk ? h * .45 : h); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.9)'); gr.addColorStop(.6, 'rgba(255,255,255,.25)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, n, n);
  if (spk) { [[1, 0], [0, 1]].forEach(function (q) { var g2 = q[0] ? x.createLinearGradient(0, h, n, h) : x.createLinearGradient(h, 0, h, n);
      g2.addColorStop(0, 'rgba(255,255,255,0)'); g2.addColorStop(.5, 'rgba(255,255,255,.95)'); g2.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g2;
      if (q[0]) x.fillRect(0, h - 1, n, 2); else x.fillRect(h - 1, 0, 2, n); }); }   // ✦ කිරණ
  return (DOT[spk] = new T.CanvasTexture(cv)); }
function bvCol(bv) { var t = cl((bv + .3) / 2.2, 0, 1); return [cl(.72 + .5 * t, 0, 1), cl(.82 + .12 * (1 - Math.abs(t - .35) * 2), 0, 1), cl(1.1 - .75 * t, 0, 1)]; } // නිල්-සුදු → කහ → තැඹිලි
function skyObjs(sc) {
  var K = W.SKY; if (!K || !T) return null;
  var S = K.S, L = K.L, g = new T.Group(), bins = [], i, j;
  SKYB.forEach(function (b) {
    var idx = []; for (i = 0; i < S.length; i += 5) if (S[i + 4] === b[0] && S[i + 2] >= b[1] && S[i + 2] < b[2]) idx.push(i);
    var n = idx.length, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), base = new Float32Array(n * 3), uv = new Float32Array(n * 3), dim = b[0] ? 1 : .5;
    idx.forEach(function (k, q) { var ra = S[k] * D, de = S[k + 1] * D, c = bvCol(S[k + 3]);
      uv[q * 3] = Math.cos(de) * Math.cos(ra); uv[q * 3 + 1] = Math.cos(de) * Math.sin(ra); uv[q * 3 + 2] = Math.sin(de);
      base[q * 3] = c[0] * dim; base[q * 3 + 1] = c[1] * dim; base[q * 3 + 2] = c[2] * dim; });
    var geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(pos, 3)); geo.setAttribute('color', new T.BufferAttribute(col, 3));
    var pts = new T.Points(geo, new T.PointsMaterial({ size: b[3], sizeAttenuation: false, vertexColors: true, map: dotTex(b[4]), transparent: true, opacity: 0, depthWrite: false }));
    pts.frustumCulled = false; g.add(pts); bins.push({ p: pts, pos: pos, col: col, base: base, uv: uv, n: n });
  });
  var m = L.length / 4, lp = new Float32Array(m * 6), lc = new Float32Array(m * 6), lu = new Float32Array(m * 6), cs = new Int16Array(m), c0 = 0;
  K.C.forEach(function (c, ci) { for (j = 0; j < c[3]; j++) cs[c0 + j] = ci; c0 += c[3]; });   // රේඛාව → තාරකා මණ්ඩලය
  for (i = 0; i < m; i++) for (j = 0; j < 2; j++) { var ra2 = L[i * 4 + j * 2] * D, de2 = L[i * 4 + j * 2 + 1] * D, o = i * 6 + j * 3;
    lu[o] = Math.cos(de2) * Math.cos(ra2); lu[o + 1] = Math.cos(de2) * Math.sin(ra2); lu[o + 2] = Math.sin(de2); }
  var lg = new T.BufferGeometry(); lg.setAttribute('position', new T.BufferAttribute(lp, 3)); lg.setAttribute('color', new T.BufferAttribute(lc, 3));
  var lines = new T.LineSegments(lg, new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, depthWrite: false })); lines.frustumCulled = false; g.add(lines);
  var hp2 = new Float32Array(m * 6), hg = new T.BufferGeometry(); hg.setAttribute('position', new T.BufferAttribute(hp2, 3));
  var hl = new T.LineSegments(hg, new T.LineBasicMaterial({ color: 0xffd36b, transparent: true, opacity: 0, depthWrite: false })); hl.frustumCulled = false; g.add(hl);   // ඔබූ රටාව — රන්වන්
  sc.add(g); return { g: g, bins: bins, lines: lines, lp: lp, lc: lc, lu: lu, cs: cs, m: m, hl: hl, hp: hp2, sel: -1, op: 0 };
}
function skyHor(r, x, y, z, out, o) { // J2000 ඒකක දෛශිකය → වේදිකාවේ පිහිටීම; ක්ෂිතිජයට පහළ නම් 0, නැතිනම් දීප්තියේ සාධකය
  var X = r[0][0] * x + r[1][0] * y + r[2][0] * z, Y = r[0][1] * x + r[1][1] * y + r[2][1] * z, Z = r[0][2] * x + r[1][2] * y + r[2][2] * z;   // HOR: x = උතුර, y = බටහිර, z = ශීර්ෂය
  if (Z <= 0) { out[o] = 0; out[o + 1] = -9999; out[o + 2] = 0; return 0; }
  hpXYZ(X, -Y, Z, SD, out, o); return cl(Z * 12, .35, 1); }   // ක්ෂිතිජය අසල මදක් අඳුරු
function skyPlace(d, l, op) {
  var K = R && R.sky; if (!K && W.SKY && R) K = R.sky = RC.sky = skyObjs(R.sc); if (!K) return;
  K.op = op; K.g.visible = op > 0.01; if (!K.g.visible) return;
  var r = Astronomy.Rotation_EQJ_HOR(Astronomy.MakeTime(d), new Astronomy.Observer(l.lat, l.lng, 0)).rot, i, j;
  K.bins.forEach(function (b) { for (i = 0; i < b.n; i++) { var o = i * 3, f = skyHor(r, b.uv[o], b.uv[o + 1], b.uv[o + 2], b.pos, o); b.col[o] = b.base[o] * f; b.col[o + 1] = b.base[o + 1] * f; b.col[o + 2] = b.base[o + 2] * f; }
    b.p.geometry.attributes.position.needsUpdate = true; b.p.geometry.attributes.color.needsUpdate = true; b.p.material.opacity = op; });
  var lp = K.lp, lc = K.lc, lu = K.lu, tmp = [0, 0, 0, 0, 0, 0], lim = SD * .6;
  for (i = 0; i < K.m; i++) { var o2 = i * 6, a = skyHor(r, lu[o2], lu[o2 + 1], lu[o2 + 2], tmp, 0), b2 = skyHor(r, lu[o2 + 3], lu[o2 + 4], lu[o2 + 5], tmp, 3), f2 = a && b2 ? Math.min(a, b2) : 0;
    if (f2 && Math.hypot(tmp[0] - tmp[3], tmp[1] - tmp[4]) > lim) f2 = 0;   // උතුරු ක්ෂිතිජ දාරය හරහා පනින රේඛා නොඅඳියි
    var sel = K.cs[i] === K.sel;
    for (j = 0; j < 6; j++) { lp[o2 + j] = f2 ? tmp[j] : 0; K.hp[o2 + j] = f2 && sel ? tmp[j] : 0; }
    for (j = 0; j < 6; j += 3) { lc[o2 + j] = .55 * f2; lc[o2 + j + 1] = .7 * f2; lc[o2 + j + 2] = .95 * f2; } }
  K.lines.geometry.attributes.position.needsUpdate = true; K.lines.geometry.attributes.color.needsUpdate = true; K.lines.material.opacity = 0;   // රටා රේඛා සාමාන්‍යයෙන් නොපෙන්වයි — සැබෑ අහසක මෙන් තරු පමණි (ඔබූ රටාව පමණක් hl මගින්)
  K.hl.geometry.attributes.position.needsUpdate = true; K.hl.material.opacity = K.sel >= 0 ? op * .95 : 0; }
/* තාරකා රටාවක් ඔබූ විට: තිරයේ ළඟම රේඛාව සොයා එහි නම පෙන්වයි */
function skyTap(e) {
  var K = R && R.sky, box = $('spStage'), tip = $('spCn'); if (!K || !box || !tip) return;
  var rc = R.r.domElement.getBoundingClientRect(), px = e.clientX - rc.left, py = e.clientY - rc.top, best = -1, bd = 22, v = new T.Vector3(), w = new T.Vector3(), i;
  function scr(o, out) { out.set(K.lp[o], K.lp[o + 1], K.lp[o + 2]).project(R.cam); out.x = (out.x + 1) / 2 * rc.width; out.y = (1 - out.y) / 2 * rc.height; }
  if (K.op > .05) for (i = 0; i < K.m; i++) { var o = i * 6; if (!K.lp[o] && !K.lp[o + 1] && !K.lp[o + 3] && !K.lp[o + 4]) continue;
    scr(o, v); scr(o + 3, w); var dx = w.x - v.x, dy = w.y - v.y, t = cl(((px - v.x) * dx + (py - v.y) * dy) / ((dx * dx + dy * dy) || 1), 0, 1), dd = Math.hypot(px - v.x - t * dx, py - v.y - t * dy);
    if (dd < bd) { bd = dd; best = K.cs[i]; } }
  K.sel = best; clearTimeout(K.tt);
  if (best < 0) { tip.style.display = 'none'; upd(true); return; }
  /* සිංහලෙන්: සිංහල නම (රාශි මණ්ඩලවලට රාශි නාමය + සලකුණ) සහ යටින් ලතින් (IAU) නම; අනෙක් භාෂාවලින්: රාශි නාමය හෝ ලතින් නම */
  var c = W.SKY.C[best], zi = ZIAU[c[0]], si = lang() === 'si', nm = zi != null ? rName(zi) + (si ? ' රාශිය' : '') : (si && c[2] ? c[2] : c[1]);
  tip.innerHTML = (zi != null ? '<b class="g">' + zSvg(zi) + '</b>' : '') + '<span>' + es(nm) + ((zi != null || (si && c[2])) && nm !== c[1] ? '<i>' + es(c[1]) + '</i>' : '') + '</span>';
  tip.style.display = 'flex'; var tw = tip.offsetWidth, th = tip.offsetHeight;
  var ty = py - th - 46 >= 6 ? py - th - 46 : py + 46;   // රටාව වසා නොදමන්න ඔබූ තැනින් මදක් ඈතින්
  tip.style.left = cl(px - tw / 2, 6, rc.width - tw - 6) + 'px'; tip.style.top = cl(ty, 6, rc.height - th - 6) + 'px';
  K.tt = setTimeout(function () { if (R && R.sky) { R.sky.sel = -1; tip.style.display = 'none'; upd(true); } }, 6000);
  upd(true); }
function zodObjs(sc) {
  var g = new T.Group(), pos = new Float32Array(360 * 6), lg = new T.BufferGeometry(); lg.setAttribute('position', new T.BufferAttribute(pos, 3));
  var line = new T.LineSegments(lg, new T.LineBasicMaterial({ color: 0xffd98a, transparent: true, opacity: .5, depthWrite: false })); line.frustumCulled = false; g.add(line);
  /* ක්ෂිතිජයට පහළ (යටි අර්ධ ගෝලය) කොටස — මදක් අඳුරු රේඛාවකින් */
  var pos2 = new Float32Array(360 * 6), lg2 = new T.BufferGeometry(); lg2.setAttribute('position', new T.BufferAttribute(pos2, 3));
  var line2 = new T.LineSegments(lg2, new T.LineBasicMaterial({ color: 0xffd98a, transparent: true, opacity: .3, depthWrite: false })); line2.frustumCulled = false; g.add(line2);
  var Z = { g: g, line: line, pos: pos, line2: line2, pos2: pos2, signs: [], nk: [zsprite(2.8), zsprite(2.8)], nki: [-1, -1], nkl: '' };
  for (var i = 0; i < 12; i++) { var sp = zsprite(5.2); Z.signs.push(sp); g.add(sp); }
  g.add(Z.nk[0]); g.add(Z.nk[1]);
  Z.signs.forEach(function (sp, i) { zsetTex(sp, icoTex(i)); });
  sc.add(g); return Z; }
function zvec(h, k) { return hp(h.altitude * D, h.azimuth * D, k); }
function zplace(d, l, hs, hm) {
  var Z = R && R.zd; if (!Z) return;
  var pos = Z.pos, pos2 = Z.pos2, k = SD, prev = eclHor(0, d, l), i, j;
  for (i = 0; i < 360; i++) { var nx = eclHor(i + 1, d, l), o = i * 6, up = prev.altitude + nx.altitude >= 0, A = zvec(prev, k), B = zvec(nx, k),
      a = up ? pos : pos2, b = up ? pos2 : pos;     // ඉහළ කොටස දීප්තිමත් රේඛාවට, පහළ කොටස අඳුරු රේඛාවට
    if (A.distanceTo(B) > k * .6) a = b;           // ප්‍රක්ෂේපණයේ දාරය හරහා පනින කොටස නොඅඳියි
    a[o] = A.x; a[o + 1] = A.y; a[o + 2] = A.z; a[o + 3] = B.x; a[o + 4] = B.y; a[o + 5] = B.z;
    for (j = 0; j < 6; j++) b[o + j] = 0;
    prev = nx; }
  Z.line.geometry.attributes.position.needsUpdate = true; Z.line2.geometry.attributes.position.needsUpdate = true;
  /* රාශි සලකුණු සහ ඉර / සඳ අසල නැකත් නම් තවදුරටත් ස්ථිරව නොපෙන්වයි — රාශි මණ්ඩලයක් (තාරකා රටාව) ඔබූ විට skyTap() නම සහ සලකුණ පෙන්වයි */
  Z.signs.forEach(function (sp) { sp.visible = false; }); Z.nk[0].visible = Z.nk[1].visible = false; }
function kill3d() { if (!R) return; if (R.ro) { R.ro.disconnect(); R.ro = null; } if (R.r.domElement.parentNode) R.r.domElement.parentNode.removeChild(R.r.domElement); R = null; } // keep RC for the next open
function drop3d() { if (!RC) return; try { RC.r.dispose(); RC.r.forceContextLoss(); } catch (e) {} RC = null; }

/* ---------- open / close ---------- */
function onKey(e) { if (e.key === 'Escape') close(); }
function onPop() { if (pushed) { pushed = false; hide(); } }
function hide() { if (!P) return; P.open = false; clearInterval(P.iv); clearTimeout(P.bt); kill3d(); P.ov.style.display = 'none'; doc.documentElement.style.overflow = ''; doc.removeEventListener('keydown', onKey); if (P.tmp) { setGlobals(null, null); P.tmp = false; } try { if (typeof updateSinhalaAstroDate === 'function') updateSinhalaAstroDate(); } catch (e) {} }
function close() { if (pushed) history.back(); else hide(); }
function open() {
  if (P && P.open) return;
  var dd = $('myDropdown'); if (dd) dd.style.display = 'none';
  css(); var ov = build(), i = $('sunDateInput'); if (i && !i.value) i.value = todayStr();
  P.live = !!(i && i.value === todayStr()); P.t = P.live ? nowSec() : 43200; $('spSl').value = Math.floor(P.t); P.iv = setInterval(tick, 1000);
  if (!loc().ok) { setGlobals(6.9271, 79.8612); P.tmp = true; } // temporary Colombo so script.js can still compute tithi / times; reset on close
  ov.style.display = 'block'; ov.scrollTop = 0; doc.documentElement.style.overflow = 'hidden'; doc.addEventListener('keydown', onKey);
  try { history.pushState({ sp: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  lab(); $('spDate').innerHTML = ic('cal', 17) + '<span>' + es(ymd()) + '</span>'; // page + headings appear at once
  var me = P; afterPaint(function () { if (P !== me || !P.open) return;
    var n0 = P.rn; if (typeof updateSunTimes === 'function') { try { updateSunTimes(); } catch (e) {} } // its wrapper (below) already runs refresh()
    if (P.rn === n0) refresh();
    afterPaint(function () { if (P === me && P.open) start3d(); }); P.bt = setTimeout(go3d, 1500); }); // times first, then the 3D stage, then the moon timeline
}
function afterPaint(f) { var done = false, go = function () { if (!done) { done = true; f(); } }; requestAnimationFrame(function () { setTimeout(go, 0); }); setTimeout(go, 250); } // run f once the opened page has been drawn
function wrap(n, f) { var o = W[n]; if (typeof o !== 'function') return; W[n] = function () { var r = o.apply(this, arguments); try { f.apply(this, arguments); } catch (e) {} return r; }; }
var oOpen = W.openSunModal;
/* පැරණි කාඩ්පත් පිටුව (#sunModal) තවදුරටත් නොපෙන්වයි (එහි අංග වෙලාවන් ගණනයට පමණක් භාවිත වේ).
   දෝෂයක් වුවහොත් නැවත වරක් උත්සාහ කරයි. */
W.openSunModal = function () {
  try { open(); }
  catch (e) { console.error('sunpage:', e); try { if (P) hide(); } catch (x) {} setTimeout(function () { try { open(); } catch (x) { console.error('sunpage:', x); } }, 400); } };
if (W.__spPending) { W.__spPending = false; setTimeout(W.openSunModal, 0); }   // sunpage.js load වීමට පෙර "අරුණ" එබූ විට
wrap('closeSunModal', function () { if (P && P.open) close(); });
wrap('updateSunTimes', function () { if (P && P.open) refresh(); });
wrap('toggleLanguage', function () { if (P && P.open) { P.tlk = ''; refresh(); } });
var oSA = W.updateSinhalaAstroDate; if (typeof oSA === 'function') W.updateSinhalaAstroDate = function () { if (P && P.open) return; return oSA.apply(this, arguments); };
W.addEventListener('popstate', onPop);
})();
