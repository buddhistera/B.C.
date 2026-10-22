/* uposatha.js — full page "උපෝසථ දින සහ වස් කාල තොරතුරු" (replaces the two old modal cards: poyaModal + vasModal).
   Uses the SAME data and rules as script.js (poyaList, ensurePoyaDataUpTo, i18n, 14/15-day type rule, season counters,
   vas date rules) — it only reads them, nothing in the calculation is changed. The old modals stay in the DOM as a fallback.
   Background: faint slowly-turning carved mandala (three.js), stars in dark mode. Font: Noto Serif Sinhala. */
(function () {
'use strict';
var W = window, doc = document, D = Math.PI / 180;
var $ = function (i) { return doc.getElementById(i); };
var en = function () { return typeof isEnglish === 'function' ? isEnglish() : (typeof currentLang !== 'undefined' && currentLang === 'en'); };
var tr = function (s, e) { return en() ? e : s; };
var P = null, B = null, T = null, pushed = false;
var low = (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) || (W.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches);

var TX = { title: ['උපෝසථ දින සහ වස් කාලය', 'Uposatha Days & Vassa Period'], hList: ['උපෝසථ දින', 'Uposatha Days'],
  hListD: ['පසළොස්වක සහ අමාවක පෝය දින', 'Full-moon and new-moon uposatha days'],
  hVas: ['වස් කාල තොරතුරු', 'Vassa Period'], hVasD: ['පෙරවස් සහ පසුවස් සමාදන්වීම හා පවාරණ දින', 'Entering and Pavāraṇā dates of the early and late rains retreats'],
  early: ['පෙරවස්', 'Early Vassa'], late: ['පසුවස්', 'Late Vassa'], next: ['මීළඟ උපෝසථය', 'Next Uposatha'], today: ['අද', 'Today'], nxt: ['ඊළඟ', 'Next'],
  toVas: ['වස් කාලය', 'Vassa'], thisYear: ['මෙම වර්ෂයට', 'This year'], nodata: ['දත්ත නොමැත', 'No data'],
  dlBtn: ['JPG ලෙස බාගත කරන්න', 'Download as JPG'], dlPick: ['බාගත කළ යුතු ආකාරය තෝරන්න', 'Choose how to download'], dlBw: ['කළු සුදු', 'Black & White'], dlCol: ['වර්ණයෙන්', 'In colour'], dlCan: ['අවලංගු කරන්න', 'Cancel'] };
var IC = { moon: '<path d="M20 14.6A8.4 8.4 0 1 1 9.4 4a6.7 6.7 0 0 0 10.6 10.6z"/>', cloud: '<path d="M7 15a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8a3.5 3.5 0 0 1 .5 7H7z"/><path d="M8 18l-1 2.5M12 18l-1 2.5M16 18l-1 2.5"/>',
  chev: '<path d="M14.5 5.5 8 12l6.5 6.5"/>', chevR: '<path d="M9.5 5.5 16 12l-6.5 6.5"/>', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>', down: '<path d="M6 9l6 6 6-6"/>', dl: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14"/>' };
function ic(n, s) { s = s || 18; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>'; }
function es(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

var SIM = ['ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'];
var SID = ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'], EMO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], EDY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function ld(s) { var a = s.split('-'); return new Date(+a[0], +a[1] - 1, +a[2]); } // local date from 'YYYY-MM-DD'
function ds(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function mon(d) { return en() ? EMO[d.getMonth()] : SIM[d.getMonth()]; }
function md(d) { return en() ? d.getDate() + ' ' + mon(d) : mon(d) + ' ' + d.getDate(); }
function wd(d) { return en() ? EDY[d.getDay()] : SID[d.getDay()]; }
function fdt(d) { return en() ? d.getDate() + ' ' + mon(d) + ' ' + d.getFullYear() : d.getFullYear() + ' ' + mon(d) + ' ' + d.getDate(); }
function days(a, b) { return Math.round((b - a) / 864e5); }
function today0() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }

var CSS = '#upOverlay{--cd:rgba(255,253,249,.82);--bd:rgba(120,80,30,.16);--tx:#2b1a0e;--mu:#6b5a4a;--bg2:#f6ead9;--ac:#a0561d;--tl:#fbf3e6;--sh:0 6px 22px rgba(90,60,20,.09);position:fixed;left:0;top:0;right:0;bottom:0;z-index:3100;display:none;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;color:var(--tx);font-family:"Noto Serif Sinhala","Noto Serif",serif;background:linear-gradient(180deg,#f5dfc6 0%,#faf2e8 24%,#fbf6ee 100%)}' +
'body.dark-mode #upOverlay{--cd:rgba(14,20,52,.66);--bd:rgba(242,212,120,.26);--tx:#e8ecf8;--mu:#aab3d6;--bg2:rgba(242,212,120,.12);--ac:#f2d478;--tl:rgba(255,255,255,.05);--sh:0 8px 28px rgba(0,0,0,.45);background:radial-gradient(ellipse at 50% 0%,#1b2554 0%,#0b1030 45%,#04061a 100%)}' +
'#upOverlay button{font-family:inherit}.up-sky{position:fixed;left:0;top:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:0}#upBg{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:0}' +
'.up-st{display:none;position:absolute;left:0;top:0;border-radius:50%;background:transparent}body.dark-mode .up-st{display:block}' +
'.up-st.l1{width:1px;height:1px;animation:upTw 4s ease-in-out infinite}.up-st.l2{width:2px;height:2px;animation:upTw 6s ease-in-out 1.5s infinite}.up-st.l3{width:3px;height:3px;animation:upTw 8s ease-in-out 3s infinite}@keyframes upTw{50%{opacity:.3}}' +
'.up-wrap{position:relative;z-index:1;max-width:760px;margin:0 auto;padding:calc(12px + env(safe-area-inset-top,0px)) 14px calc(30px + env(safe-area-inset-bottom,0px))}.ic{display:inline-block;vertical-align:middle;flex:0 0 auto}' +
'.up-hero{position:relative;text-align:center;color:#fff;border-radius:26px;padding:18px 14px 16px;margin:0 0 16px;border:1px solid rgba(252,211,77,.28);box-shadow:0 10px 30px rgba(40,10,10,.28);background:radial-gradient(circle at 15% 0%,rgba(245,158,11,.28),transparent 55%),radial-gradient(circle at 92% 100%,rgba(168,85,247,.2),transparent 55%),linear-gradient(135deg,#2a0f14,#4a1a1a 52%,#1d0d1a)}' +
'.up-rb{position:absolute;top:12px;width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);color:#fcd34d;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}.up-rb:active{transform:scale(.93)}.up-rb.l{left:12px}.up-rb.r{right:12px}' +
'.up-hero h1{margin:2px 52px 0;font-size:1.3rem;font-weight:800;color:#fcd34d;line-height:1.35}.up-hero h1::after{content:"";display:block;height:2px;width:74%;margin:9px auto 0;border-radius:2px;background:linear-gradient(90deg,transparent,#d4a017 28%,#fde68a 50%,#d4a017 72%,transparent)}' +
'.up-nx{display:inline-flex;align-items:center;gap:9px;margin:13px auto 0;padding:8px 15px;border-radius:18px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.15);font-size:.86rem;line-height:1.5;text-align:left;max-width:100%}.up-nx .dot{flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:#fcd34d;box-shadow:0 0 0 3px rgba(252,211,77,.25)}' +
'.up-yr{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:14px}.up-yb{width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}.up-yb:disabled{opacity:.35}' +
'.up-yv{min-width:120px;font-size:1.5rem;font-weight:800;color:#fff;font-variant-numeric:tabular-nums}.up-go{display:inline-flex;align-items:center;gap:7px;margin:10px 4px 0;padding:9px 16px;border-radius:999px;font-weight:700;font-size:.86rem;cursor:pointer;color:#3b2200;border:0;background:linear-gradient(135deg,#fcd34d,#e8a317);box-shadow:0 4px 14px rgba(232,163,23,.4)}.up-go.gl{color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22);box-shadow:none}' +
'.up-card{background:var(--cd);border:1px solid var(--bd);border-radius:22px;padding:16px 14px;margin:0 0 16px;box-shadow:var(--sh);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}' +
'.up-sh{display:flex;gap:12px;align-items:center;margin:0 0 14px}.up-bd{width:46px;height:46px;border-radius:15px;background:var(--bg2);color:var(--ac);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex:0 0 auto}.up-t2{font-size:1.12rem;font-weight:800;line-height:1.3}.up-ds{font-size:.8rem;color:var(--mu);margin-top:2px;line-height:1.45}' +
'.up-sb{margin:16px 0 10px;padding:9px 12px;border-radius:12px;font-weight:800;font-size:.92rem;background:#C8E6C9;color:#1B5E20;border-left:5px solid #d4af37;box-shadow:0 2px 6px rgba(0,0,0,.08)}body.dark-mode .up-sb{background:rgba(200,230,201,.1);color:#c8e6c9;border:1px solid rgba(0,229,255,.15);border-left:5px solid #d4af37}.up-sb:first-child{margin-top:0}' +
'.up-row{display:flex;align-items:center;gap:12px;padding:11px 12px;margin:0 0 9px;border-radius:14px;background:var(--tl);border:1px solid var(--bd);transition:opacity .2s}' +
'.up-row.full{background:rgba(255,235,59,.2);border:1px solid #d4af37}.up-row.new{background:rgba(0,0,0,.12)}body.dark-mode .up-row.new{background:rgba(255,255,255,.07)}' +
'.up-row.next{background:#B8FAF9;border:1px solid #a5d6a7;border-left:6px solid #2e7d32;opacity:1;color:#1b2b2a}body.dark-mode .up-row.next{background:rgba(0,229,255,.14);color:var(--tx)}.up-row.tdy{box-shadow:0 0 0 2px #d4af37,0 0 18px rgba(212,175,55,.5);opacity:1}' +
'.up-mn{flex:0 0 auto;width:40px;height:40px;border-radius:50%}.up-mn.full{background:radial-gradient(circle at 35% 30%,#fffbe0 0%,#ffe27a 55%,#d9a826 100%);box-shadow:0 0 14px rgba(255,214,90,.7)}.up-mn.new{background:radial-gradient(circle at 35% 30%,#3a3a52,#14141f);border:1px solid rgba(255,255,255,.28)}' +
'.up-m{flex:1;min-width:0}.up-t{font-weight:800;font-size:1.02rem;line-height:1.35}.up-t .wd{font-weight:600;font-size:.76rem;opacity:.7;margin-left:4px}.up-s{font-size:.82rem;color:var(--mu);margin-top:1px}.up-row.next .up-s{color:#37514f}body.dark-mode .up-row.next .up-s{color:var(--mu)}' +
'.up-r{display:flex;flex-direction:column;align-items:flex-end;gap:5px}.up-tag{font-size:.74rem;padding:4px 11px;border-radius:20px;color:#fff;font-weight:700;min-width:84px;text-align:center;box-shadow:2px 2px 5px rgba(0,0,0,.2)}.up-tag.c{background:#c62828}.up-tag.p{background:#FF6600}' +
'.up-bg2{font-size:.7rem;font-weight:800;padding:2px 9px;border-radius:10px;background:#2e7d32;color:#fff}.up-bg2.t{background:#d4af37;color:#3b2200}' +
'.up-per{border-radius:18px;padding:13px 12px;margin:0 0 12px;background:var(--tl);border:1px solid var(--bd)}.up-per:last-child{margin:0}.up-ph{font-weight:800;font-size:1rem;color:var(--ac);margin:0 0 8px}' +
'.up-vr{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px dashed var(--bd)}.up-vr .l{font-size:.9rem;font-weight:700}.up-db{text-align:right}.up-db .b{display:inline-block;background:#43a047;color:#fff;font-weight:800;font-size:1.05rem;padding:4px 14px;border-radius:20px;font-variant-numeric:tabular-nums}.up-db .w{display:block;font-size:.72rem;color:var(--mu);margin-top:2px}' +
'.up-pb{position:relative;height:10px;border-radius:6px;margin:14px 2px 6px;background:rgba(128,128,128,.22)}.up-pb i{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:linear-gradient(90deg,#66bb6a,#fcd34d)}.up-pb u{position:absolute;top:-4px;width:4px;height:18px;border-radius:2px;background:#fff;box-shadow:0 0 6px 1px rgba(0,0,0,.45);transform:translateX(-50%)}' +
'.up-pn{font-size:.8rem;color:var(--mu);text-align:center}.up-nd{text-align:center;padding:22px;color:var(--mu)}';
CSS += '#upOverlay{--sbg:#fffaf2}body.dark-mode #upOverlay{--sbg:#141b45}' +
'.up-dlw{text-align:center;margin:4px 0 6px}.up-dl{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:13px 26px;border:0;border-radius:12px;background:#10b981;color:#fff;font-weight:800;font-size:1rem;cursor:pointer;box-shadow:0 4px 14px rgba(16,185,129,.35)}.up-dl:active{background:#059669;transform:scale(.98)}.up-dl:disabled{opacity:.6}' +
'.up-sheet{position:fixed;left:0;top:0;right:0;bottom:0;z-index:5;display:none;align-items:flex-end;justify-content:center}.up-sheet.on{display:flex}.up-shb{position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5)}' +
'.up-shc{position:relative;width:100%;max-width:520px;background:var(--sbg);color:var(--tx);border-radius:22px 22px 0 0;padding:18px 16px calc(16px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 30px rgba(0,0,0,.3)}.up-shh{font-weight:800;font-size:1.02rem;text-align:center;margin:0 0 14px}' +
'.up-shbt{display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;margin:0 0 10px;border-radius:14px;border:1px solid var(--bd);background:var(--tl);color:var(--tx);font-weight:800;font-size:1rem;cursor:pointer}.up-shbt:active{transform:scale(.98)}' +
'.up-sw{flex:0 0 auto;width:30px;height:30px;border-radius:50%;border:1px solid #888}.up-sw.bw{background:linear-gradient(90deg,#fff 50%,#111 50%)}.up-sw.co{background:linear-gradient(135deg,#fcd34d,#c62828 50%,#43a047)}' +
'.up-shx{display:block;width:100%;padding:12px;margin:2px 0 0;border:0;background:transparent;color:var(--mu);font-weight:700;font-size:.95rem;cursor:pointer}';

function css() { if ($('upStyle')) return; var s = doc.createElement('style'); s.id = 'upStyle'; s.textContent = CSS; doc.head.appendChild(s); }

/* ---------- data: same rules as script.js (renderPoyaList / openVasModal) ---------- */
function yearRows(y) {
  var t = i18n[currentLang], out = [], yp = poyaList.filter(function (p) { return p.d.startsWith(y); }); if (!yp.length) return out;
  var early = yp.filter(function (p) { return p.r === 'හේමන්ත' && ld(p.d).getMonth() < 6; }), cnt = { 'හේමන්ත': 8 - early.length + 1, 'ගිම්හාන': 1, 'වස්සාන': 1, 'නැවත හේමන්ත': 1 }, last = '';
  var fi = poyaList.findIndex(function (p) { return p.d.startsWith(y); }), prev = fi > 0 ? ld(poyaList[fi - 1].d) : null;
  yp.forEach(function (p) {
    var dt = ld(p.d), rs = p.r; if (rs === 'හේමන්ත' && dt.getMonth() >= 10) rs = 'නැවත හේමන්ත';
    var c = cnt[rs]; cnt[rs]++;
    var sk = Object.keys(i18n.si.seasons).find(function (k) { return i18n.si.seasons[k] === rs; }) || 'Hemanta', sn = t.seasons[sk];
    if (last !== sn) { last = sn; out.push({ banner: sn }); }
    var typ = 'Error', chat = false;
    if (prev) { var df = days(prev, dt); if (df === 14) { typ = en() ? 'Cātuddasī' : 'චාතුද්දසී'; chat = true; } else if (df === 15) typ = en() ? 'Paṇṇarasī' : 'පණ්ණරසී'; }
    prev = dt;
    var nm = p.t; if (en()) nm = nm.replace('පසළොස්වක', 'Full Moon').replace('අමාවක', ' New Moon');
    out.push({ d: p.d, dt: dt, c: c, name: nm + t.poyaSuffix, typ: typ, chat: chat, full: p.t.includes('පසළොස්වක'), nw: p.t.includes('අමාවක') });
  });
  return out;
}
function vasDates(y) { // identical selection rules to openVasModal(); returns local Date objects (or null)
  var yp = poyaList.filter(function (p) { return p.d.startsWith(y); }), gim = yp.filter(function (p) { return p.r === 'ගිම්හාන'; }), vas = yp.filter(function (p) { return p.r === 'වස්සාන'; }), r = [null, null, null, null], d;
  if (gim.length > 0) { d = ld(gim[gim.length - 1].d); d.setDate(d.getDate() + 1); r[0] = d; }
  if (vas.length >= 6) r[1] = ld(vas[5].d);
  if (vas.length >= 2) { d = ld(vas[1].d); d.setDate(d.getDate() + 1); r[2] = d; }
  if (vas.length >= 8) r[3] = ld(vas[7].d);
  return r;
}

/* ---------- page ---------- */
function mainYear() { var v = ($('inputDate') || {}).value, d = v ? new Date(v) : new Date(); return isNaN(d.getTime()) ? new Date().getFullYear() : d.getFullYear(); }
function build() {
  var ov = $('upOverlay'); if (!ov) { ov = doc.createElement('div'); ov.id = 'upOverlay'; doc.body.appendChild(ov); }
  ov.innerHTML = '<div class="up-sky"><i class="up-st l1"></i><i class="up-st l2"></i><i class="up-st l3"></i></div>' +
  '<div class="up-wrap"><header class="up-hero"><button class="up-rb l" id="upBack" type="button" aria-label="Back">' + ic('chev', 24) + '</button><button class="up-rb r" id="upLang" type="button" aria-label="Language">' + ic('globe', 22) + '</button>' +
  '<h1 data-k="title"></h1><div class="up-nx" id="upNx"><i class="dot"></i><div id="upNxT"></div></div>' +
  '<div class="up-yr"><button class="up-yb" id="upPrev" type="button" aria-label="Previous year">' + ic('chev', 22) + '</button><div class="up-yv" id="upY"></div><button class="up-yb" id="upNext" type="button" aria-label="Next year">' + ic('chevR', 22) + '</button></div>' +
  '<div><button class="up-go gl" id="upYr" type="button" data-k="thisYear" style="display:none"></button><button class="up-go" id="upToVas" type="button">' + ic('down', 17) + '<span data-k="toVas"></span></button></div></header>' +
  '<section class="up-card" id="upList"><div class="up-sh"><div class="up-bd">' + ic('moon', 24) + '</div><div><div class="up-t2" data-k="hList"></div><div class="up-ds" data-k="hListD"></div></div></div><div id="upRows"></div></section>' +
  '<section class="up-card" id="upVas"><div class="up-sh"><div class="up-bd">' + ic('cloud', 24) + '</div><div><div class="up-t2" data-k="hVas"></div><div class="up-ds" data-k="hVasD"></div></div></div><div id="upVasB"></div></section>' +
  '<div class="up-dlw"><button class="up-dl" id="upDl" type="button">' + ic('dl', 20) + '<span data-k="dlBtn"></span></button></div></div>' +
  '<div class="up-sheet" id="upSheet"><div class="up-shb" id="upShB"></div><div class="up-shc"><div class="up-shh" data-k="dlPick"></div>' +
  '<button class="up-shbt" id="upDlBw" type="button"><i class="up-sw bw"></i><span data-k="dlBw"></span></button>' +
  '<button class="up-shbt" id="upDlCol" type="button"><i class="up-sw co"></i><span data-k="dlCol"></span></button>' +
  '<button class="up-shx" id="upDlX" type="button" data-k="dlCan"></button></div></div>';
  var w = W.innerWidth, h = W.innerHeight, cs = ['#fff', '#cfe0ff', '#ffe9b0'], n = [90, 40, 16];
  [].forEach.call(ov.querySelectorAll('.up-st'), function (e, k) { var s = []; for (var i = 0; i < n[k]; i++) s.push((Math.random() * w | 0) + 'px ' + (Math.random() * h | 0) + 'px ' + cs[(Math.random() * 3) | 0]); e.style.boxShadow = s.join(','); });
  P = { ov: ov, open: true, y: mainYear(), sc: 0 };
  $('upBack').onclick = close; $('upLang').onclick = function () { if (typeof toggleLanguage === 'function') toggleLanguage(); };
  $('upPrev').onclick = function () { setYear(P.y - 1); }; $('upNext').onclick = function () { setYear(P.y + 1); }; $('upYr').onclick = function () { setYear(new Date().getFullYear()); };
  $('upToVas').onclick = function () { scrollTo($('upVas')); };
  $('upDl').onclick = function () { $('upSheet').classList.add('on'); };
  $('upShB').onclick = $('upDlX').onclick = closeSheet;
  $('upDlBw').onclick = function () { dlJpg(false); }; $('upDlCol').onclick = function () { dlJpg(true); };
  ov.addEventListener('scroll', function () { P.sc = ov.scrollTop; }, { passive: true });
  return ov;
}
function scrollTo(el, off) { if (!el || !P) return; var top = el.getBoundingClientRect().top - P.ov.getBoundingClientRect().top + P.ov.scrollTop - (off == null ? 12 : off); try { P.ov.scrollTo({ top: top, behavior: 'smooth' }); } catch (e) { P.ov.scrollTop = top; } }
function lab() { [].forEach.call(P.ov.querySelectorAll('[data-k]'), function (e) { var t = TX[e.getAttribute('data-k')]; if (t) e.textContent = tr(t[0], t[1]); }); }
function setYear(y) {
  var lo = typeof MIN_YEAR !== 'undefined' ? MIN_YEAR : 1900, hi = typeof MAX_YEAR !== 'undefined' ? MAX_YEAR : 3000; if (y < lo || y > hi) return; P.y = y; render(true);
}
function render(jump) {
  if (!P || !P.open) return; lab(); var y = P.y, t0 = today0(), ts = ds(t0), rows = '', nextD = null;
  try { ensurePoyaDataUpTo(y + 1); ensurePoyaDataUpTo(t0.getFullYear() + 1); } catch (e) {}
  $('upY').textContent = y; $('upPrev').disabled = y <= (typeof MIN_YEAR !== 'undefined' ? MIN_YEAR : 1900); $('upNext').disabled = y >= (typeof MAX_YEAR !== 'undefined' ? MAX_YEAR : 3000); $('upYr').style.display = y === t0.getFullYear() ? 'none' : '';
  // hero: next uposatha (from today, any year)
  var np = poyaList.find(function (p) { return p.d >= ts; });
  if (np) { var nd = ld(np.d), k = days(t0, nd), nm = np.t; if (en()) nm = nm.replace('පසළොස්වක', 'Full Moon').replace('අමාවක', ' New Moon'); nextD = np.d;
    $('upNxT').textContent = tr(TX.next[0], TX.next[1]) + ': ' + md(nd) + ' · ' + nm + i18n[currentLang].poyaSuffix + ' — ' + (k === 0 ? tr('අද', 'today') : tr('තව දින ' + k + ' යි', 'in ' + k + ' day' + (k > 1 ? 's' : ''))); } else $('upNxT').textContent = '';
  // list
  var list = yearRows(y);
  if (!list.length) rows = '<div class="up-nd">' + tr(TX.nodata[0], TX.nodata[1]) + '</div>';
  var ny = list.filter(function (r) { return r.d; }).find(function (r) { return r.d >= ts; }), nyd = ny ? ny.d : null;
  list.forEach(function (r) {
    if (r.banner) { rows += '<div class="up-sb">' + es(r.banner) + '</div>'; return; }
    var cl = 'up-row ' + (r.full ? 'full ' : r.nw ? 'new ' : '') + (r.d === nyd ? 'next ' : '') + (r.d === ts ? 'tdy ' : '');
    var badge = r.d === ts ? '<span class="up-bg2 t">' + tr(TX.today[0], TX.today[1]) + '</span>' : '';
    rows += '<div class="' + cl + '"' + (r.d === nyd ? ' id="upNextRow"' : '') + ' data-d="' + r.d + '" data-t="' + es(r.typ) + '" data-n="' + es(r.name) + '" data-c="' + r.c + '"><div class="up-mn ' + (r.full ? 'full' : 'new') + '"></div>' +
      '<div class="up-m"><div class="up-t">' + r.c + '. ' + md(r.dt) + '<span class="wd">' + wd(r.dt) + '</span></div><div class="up-s">' + es(r.name) + '</div></div>' +
      '<div class="up-r">' + badge + '<span class="up-tag ' + (r.chat ? 'c' : 'p') + '">' + es(r.typ) + '</span></div></div>';
  });
  $('upRows').innerHTML = rows;
  // vassa
  var v = vasDates(y), t = i18n[currentLang], lbl = [t.vas1, t.vas2, t.vas3, t.vas4], vb = '';
  function badge(d) { return d ? '<div class="up-db"><span class="b" data-ts="' + d.getTime() + '">' + fdt(d) + '</span><span class="w">' + wd(d) + '</span></div>' : '<div class="up-db"><span class="b">-</span></div>'; }
  function per(name, a, b, la, lb) {
    var h = '<div class="up-per"><div class="up-ph">' + name + '</div><div class="up-vr"><span class="l">' + es(la) + '</span>' + badge(a) + '</div><div class="up-vr"><span class="l">' + es(lb) + '</span>' + badge(b) + '</div>';
    if (a && b) { var tot = Math.max(1, days(a, b)), el = days(a, t0), pc = Math.max(0, Math.min(100, el / tot * 100)), s;
      s = el < 0 ? tr('ආරම්භයට තව දින ' + (-el), 'Starts in ' + (-el) + ' days') : el > tot ? tr('අවසන් වී ඇත', 'Completed') : tr('දින ' + el + ' / ' + tot + ' — ඉතිරි දින ' + (tot - el), 'Day ' + el + ' of ' + tot + ' — ' + (tot - el) + ' days left');
      h += '<div class="up-pb"><i style="width:' + pc.toFixed(1) + '%"></i>' + (el >= 0 && el <= tot ? '<u style="left:' + pc.toFixed(1) + '%"></u>' : '') + '</div><div class="up-pn">' + s + '</div>'; }
    return h + '</div>';
  }
  vb = per(tr(TX.early[0], TX.early[1]), v[0], v[1], lbl[0], lbl[1]) + per(tr(TX.late[0], TX.late[1]), v[2], v[3], lbl[2], lbl[3]);
  $('upVasB').innerHTML = vb;
  if (jump) { var nr = $('upNextRow'); if (nr && y === t0.getFullYear()) setTimeout(function () { scrollTo(nr, 170); }, 120); else P.ov.scrollTop = 0; }
}

/* ---------- three.js: faint, slowly turning carved mandala (like the umbrella carving on the thumbnails) ---------- */
function mandalaTex() {
  var S = 1024, c = doc.createElement('canvas'); c.width = c.height = S; var x = c.getContext('2d'); x.translate(S / 2, S / 2); x.strokeStyle = '#fff'; x.fillStyle = 'rgba(255,255,255,.07)'; x.lineJoin = 'round'; x.lineCap = 'round';
  function ring(r, w) { x.lineWidth = w; x.beginPath(); x.arc(0, 0, r, 0, 6.2832); x.stroke(); }
  function dots(n, r, s) { x.fillStyle = '#fff'; for (var i = 0; i < n; i++) { var a = i / n * 6.2832; x.beginPath(); x.arc(Math.cos(a) * r, Math.sin(a) * r, s, 0, 6.2832); x.fill(); } x.fillStyle = 'rgba(255,255,255,.07)'; }
  function petals(n, r0, r1, w, off) { for (var i = 0; i < n; i++) { x.save(); x.rotate(i / n * 6.2832 + (off || 0)); var m = r1 - r0; x.lineWidth = 2.2; x.beginPath(); x.moveTo(0, -r0); x.bezierCurveTo(w, -r0 - m * .3, w * .85, -r0 - m * .78, 0, -r1); x.bezierCurveTo(-w * .85, -r0 - m * .78, -w, -r0 - m * .3, 0, -r0); x.fill(); x.stroke();
    x.lineWidth = 1.4; x.beginPath(); x.moveTo(0, -r0 - m * .12); x.lineTo(0, -r1 + m * .2); x.stroke(); x.restore(); } }
  function scallop(n, r, s) { x.lineWidth = 1.8; for (var i = 0; i < n; i++) { var a = (i + .5) / n * 6.2832; x.save(); x.rotate(a); x.beginPath(); x.arc(0, -r, s, 0, Math.PI); x.stroke(); x.restore(); } }
  function star(n, r0, r1) { x.lineWidth = 2; x.beginPath(); for (var i = 0; i < n * 2; i++) { var a = i / (n * 2) * 6.2832 - 1.5708, r = i % 2 ? r0 : r1; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.closePath(); x.stroke(); }
  ring(500, 3); ring(488, 1.5); dots(72, 474, 3.2); petals(36, 392, 466, 21); scallop(36, 392, 17); ring(384, 1.6); petals(24, 296, 382, 34, Math.PI / 24); dots(24, 288, 5); ring(280, 2);
  petals(16, 190, 278, 40); for (var i = 0; i < 48; i++) { x.save(); x.rotate(i / 48 * 6.2832); x.lineWidth = 1.2; x.beginPath(); x.moveTo(0, -300); x.lineTo(0, -338); x.stroke(); x.restore(); }
  ring(182, 2.4); ring(170, 1.2); dots(48, 160, 2.6); petals(12, 66, 150, 30, Math.PI / 12); ring(60, 2.4); star(8, 28, 56); star(8, 30, 42); ring(20, 3); x.fillStyle = '#fff'; x.beginPath(); x.arc(0, 0, 9, 0, 6.2832); x.fill();
  var t = new T.CanvasTexture(c); t.anisotropy = 4; return t;
}
function dustTex() { var c = doc.createElement('canvas'); c.width = c.height = 32; var x = c.getContext('2d'), g = x.createRadialGradient(16, 16, 0, 16, 16, 16); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.4, 'rgba(255,255,255,.4)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 32, 32); return new T.CanvasTexture(c); }
function need(cb) { if (W.THREE) { T = W.THREE; return cb(); } var s = doc.createElement('script'); s.src = 'three.min.js'; s.onload = function () { T = W.THREE; cb(); }; doc.head.appendChild(s); }
function startBg() { if (B) return; need(function () { if (!P || !P.open || B) return; try { initBg(); } catch (e) { console.error(e); } }); }
function initBg() {
  var r = new T.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' }); r.setClearColor(0, 0); r.setPixelRatio(Math.min(W.devicePixelRatio || 1, 1.5)); r.domElement.id = 'upBg'; P.ov.insertBefore(r.domElement, P.ov.querySelector('.up-wrap'));
  var sc = new T.Scene(), cam = new T.OrthographicCamera(0, 1, 1, 0, -10, 10), tex = mandalaTex(), geo = new T.PlaneGeometry(1, 1);
  function mk(o) { var m = new T.Mesh(geo, new T.MeshBasicMaterial({ map: tex, transparent: true, opacity: o, depthWrite: false })); m.userData.o = o; sc.add(m); return m; }
  var m1 = mk(.17), m2 = mk(.11), m3 = mk(.07), n = 70, Pp = new Float32Array(n * 3), Sp = [];
  for (var i = 0; i < n; i++) { Pp[i * 3] = Math.random(); Pp[i * 3 + 1] = Math.random(); Pp[i * 3 + 2] = 0; Sp.push(.01 + Math.random() * .03); }
  var pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(Pp, 3));
  var pm = new T.PointsMaterial({ size: 5, map: dustTex(), transparent: true, opacity: .55, depthWrite: false, sizeAttenuation: false, blending: T.AdditiveBlending }), dust = new T.Points(pg, pm); sc.add(dust);
  B = { r: r, sc: sc, cam: cam, m1: m1, m2: m2, m3: m3, dust: dust, pm: pm, Sp: Sp, w: 0, h: 0, t: 0, raf: 0, last: 0 };
  function fit() { var w = W.innerWidth, h = W.innerHeight; if (!w || !h) return; B.w = w; B.h = h; r.setSize(w, h, false); cam.right = w; cam.top = h; cam.updateProjectionMatrix(); var L = Math.max(w, h);
    m1.scale.set(L * 1.15, L * 1.15, 1); m2.scale.set(L * .62, L * .62, 1); m3.scale.set(L * .34, L * .34, 1); tint(); frame(0); }
  B.fit = fit; fit(); W.addEventListener('resize', fit);
  if (!low) (function L(ts) { B.raf = requestAnimationFrame(L); if (doc.hidden || ts - B.last < 33) return; var dt = B.last ? Math.min((ts - B.last) / 1000, .1) : .033; B.last = ts; frame(dt); })(0);
}
function tint() { if (!B) return; var dk = doc.body.classList.contains('dark-mode'), c = dk ? 0xf2d478 : 0x8a5a14, k = dk ? 1 : 1.05; [B.m1, B.m2, B.m3].forEach(function (m) { m.material.color.set(c); m.material.opacity = m.userData.o * k; }); B.pm.color.set(dk ? 0xffe9a8 : 0xb8860b); }
function frame(dt) {
  var t = B.t += dt, w = B.w, h = B.h, s = P ? P.sc : 0;
  B.m1.position.set(w * .02, h * .46 + s * .05, 0); B.m1.rotation.z -= dt * .012; // big carving at the left edge, slowly turning to the right
  B.m2.position.set(w * .98, h * .12 - s * .03, 0); B.m2.rotation.z += dt * .02; B.m3.position.set(w * .86, h * .66 + s * .02, 0); B.m3.rotation.z -= dt * .03;
  B.m1.material.opacity = B.m1.userData.o * (doc.body.classList.contains('dark-mode') ? 1 : 1.05) * (1 + .12 * Math.sin(t * .45));
  var a = B.dust.geometry.attributes.position; for (var i = 0; i < B.Sp.length; i++) { var y = a.getY(i) + B.Sp[i] * dt; if (y > 1) { y = 0; a.setX(i, Math.random()); } a.setY(i, y); }
  // dust positions are stored 0..1 → scale to pixels via the points' scale
  B.dust.scale.set(w, h, 1); a.needsUpdate = true; B.r.render(B.sc, B.cam);
}
function killBg() { if (!B) return; cancelAnimationFrame(B.raf); W.removeEventListener('resize', B.fit); B.r.dispose(); try { B.r.forceContextLoss(); } catch (e) {} if (B.r.domElement.parentNode) B.r.domElement.parentNode.removeChild(B.r.domElement); B = null; }

/* ---------- A4 landscape JPG download (black & white / colour) ----------
   Draws the whole year (same rows as the page: yearRows + vasDates) straight onto a canvas — no extra library.
   Colour version uses the same colours as this page's light theme. Language follows the page language. */
var SIMa = ['ජන.', 'පෙබ.', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ.', 'සැප්.', 'ඔක්.', 'නොවැ.', 'දෙසැ.'];
var SIDa = ['ඉරිදා', 'සඳුදා', 'අඟහ.', 'බදාදා', 'බ්‍රහස්.', 'සිකු.', 'සෙන.'];
var EDF = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function closeSheet() { var s = $('upSheet'); if (s) s.classList.remove('on'); }
function monAbbr(d) { return en() ? EMO[d.getMonth()].slice(0, 3) : SIMa[d.getMonth()]; }
function wdAbbr(d) { return en() ? EDY[d.getDay()] : SIDa[d.getDay()]; }
function wdFull(d) { return en() ? EDF[d.getDay()] : SID[d.getDay()]; }

function drawSheet(y, list, v, color) {
  var PW = low ? 2339 : 3508, PH = Math.round(PW * 210 / 297), m = PW / 297, cv = doc.createElement('canvas'), x, t = i18n[currentLang];
  cv.width = PW; cv.height = PH; x = cv.getContext('2d');
  var F = '"Noto Serif Sinhala","Noto Serif","Iskoola Pota","Nirmala UI","Noto Sans Sinhala",serif';
  var C = color ?
    { ink: '#2b1a0e', mu: '#6b5a4a', ac: '#a0561d', bd: 'rgba(120,80,30,.28)', row: '#fbf3e6', hdr: '#f6ead9', ban: '#C8E6C9', banInk: '#1B5E20', bar: '#d4af37',
      fullBg: 'rgba(255,235,59,.2)', fullBd: '#d4af37', newBg: 'rgba(0,0,0,.12)', pc: '#c62828', pp: '#FF6600', vas: '#43a047', card: '#fbf3e6' } :
    { ink: '#000', mu: '#222', ac: '#000', bd: '#555', row: '#fff', hdr: '#e6e6e6', ban: '#d4d4d4', banInk: '#000', bar: '#000',
      fullBg: null, fullBd: '#555', newBg: '#ececec', pc: '#000', pp: '#fff', vas: '#000', card: '#fff' };

  function font(z, w) { x.font = (w || 400) + ' ' + z.toFixed(1) + 'px ' + F; }
  function tw(s, z, w) { font(z, w); return x.measureText(s).width; }
  function txt(s, px, py, z, w, col, al, mw) {
    s = String(s); if (mw) { var q = tw(s, z, w); if (q > mw) z *= mw / q; }
    font(z, w); x.fillStyle = col; x.textAlign = al || 'left'; x.textBaseline = 'middle'; x.fillText(s, px, py + z * .04);
  }
  function rr(a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
  function moon(cx, cy, r, full) {
    x.beginPath(); x.arc(cx, cy, r, 0, 6.2832);
    if (color) {
      var g = x.createRadialGradient(cx - r * .3, cy - r * .35, 0, cx, cy, r);
      if (full) { g.addColorStop(0, '#fffbe0'); g.addColorStop(.55, '#ffe27a'); g.addColorStop(1, '#d9a826'); } else { g.addColorStop(0, '#3a3a52'); g.addColorStop(1, '#14141f'); }
      x.fillStyle = g;
    } else x.fillStyle = full ? '#fff' : '#000';
    x.fill(); x.lineWidth = Math.max(1, r * .12); x.strokeStyle = color ? (full ? '#c9971a' : '#14141f') : '#000'; x.stroke();
  }
  function pad2(n) { return String(n).padStart(2, '0'); }

  /* ----- background ----- */
  if (color) { var bg = x.createLinearGradient(0, 0, 0, PH); bg.addColorStop(0, '#f5dfc6'); bg.addColorStop(.24, '#faf2e8'); bg.addColorStop(1, '#fbf6ee'); x.fillStyle = bg; } else x.fillStyle = '#fff';
  x.fillRect(0, 0, PW, PH);

  /* ----- title: full width across the top ----- */
  var mx = 9 * m, tw0 = PW - 2 * mx, th = 20 * m, ty = 8 * m, b2 = (y + 544) % 100 === 0 ? String(y + 544) : String((y + 544) % 100).padStart(2, '0'), bs = (y + 543) + ' - ' + b2,
    title = en() ? 'Buddhist Era ' + bs + ' Uposatha Days Calendar (C.E. ' + y + ')' : 'ශ්‍රී බුද්ධ වර්ෂ ' + bs + ' උපෝසථ දින දර්ශනය (ව්‍ය ව. ' + y + ')';
  if (color) {
    var hg = x.createLinearGradient(mx, ty, mx + tw0, ty + th); hg.addColorStop(0, '#fff4dc'); hg.addColorStop(.5, '#fbe5b6'); hg.addColorStop(1, '#fff0d2');
    rr(mx, ty, tw0, th, 5 * m); x.fillStyle = hg; x.fill();
    x.save(); rr(mx, ty, tw0, th, 5 * m); x.clip();
    var g1 = x.createRadialGradient(mx + tw0 * .15, ty, 0, mx + tw0 * .15, ty, tw0 * .35); g1.addColorStop(0, 'rgba(245,158,11,.16)'); g1.addColorStop(1, 'rgba(245,158,11,0)'); x.fillStyle = g1; x.fillRect(mx, ty, tw0, th);
    var g2 = x.createRadialGradient(mx + tw0 * .92, ty + th, 0, mx + tw0 * .92, ty + th, tw0 * .3); g2.addColorStop(0, 'rgba(168,85,247,.08)'); g2.addColorStop(1, 'rgba(168,85,247,0)'); x.fillStyle = g2; x.fillRect(mx, ty, tw0, th);
    x.restore();
    rr(mx, ty, tw0, th, 5 * m); x.lineWidth = .4 * m; x.strokeStyle = 'rgba(160,86,29,.4)'; x.stroke();
    x.shadowColor = 'rgba(255,214,90,.7)'; x.shadowBlur = 3 * m; moon(mx + 13 * m, ty + th / 2, 4.6 * m, true); moon(mx + tw0 - 13 * m, ty + th / 2, 4.6 * m, true); x.shadowBlur = 0;
    txt(title, PW / 2, ty + th * .42, 9 * m, 700, '#5a2410', 'center', tw0 - 50 * m);
    var ux = PW / 2 - tw0 * .3, uw = tw0 * .6, ug = x.createLinearGradient(ux, 0, ux + uw, 0);
    ug.addColorStop(0, 'rgba(160,86,29,0)'); ug.addColorStop(.28, '#c9971a'); ug.addColorStop(.5, '#a0561d'); ug.addColorStop(.72, '#c9971a'); ug.addColorStop(1, 'rgba(160,86,29,0)');
    x.fillStyle = ug; x.fillRect(ux, ty + th * .8, uw, .7 * m);
  } else {
    txt(title, PW / 2, ty + th * .42, 9 * m, 700, '#000', 'center', tw0 - 20 * m);
    x.fillStyle = '#000'; x.fillRect(mx, ty + th * .86, tw0, .8 * m); x.fillRect(mx, ty + th * .86 + 1.6 * m, tw0, .3 * m);
  }

  /* ----- layout: seasons in order, split into two balanced columns ----- */
  var G = [], cur; list.forEach(function (r) { if (r.banner) { cur = { b: r.banner, r: [] }; G.push(cur); } else { if (!cur) { cur = { b: '', r: [] }; G.push(cur); } cur.r.push(r); } });
  var uB = 1.15, uH = .9, uG = .45, uV = 3.7, uVG = .7;
  function colH(a) { var s = 0; a.forEach(function (g) { s += uB + uH + g.r.length; }); return a.length ? s + (a.length - 1) * uG : 0; }
  var bk = 0, bm = 1e9, k, mm;
  for (k = 0; k <= G.length; k++) { mm = Math.max(colH(G.slice(0, k)), colH(G.slice(k))); if (mm <= bm + 1e-9) { bm = mm; bk = k; } }
  var L = G.slice(0, bk), R = G.slice(bk), gut = 8 * m, Wt = (tw0 - gut) / 2, ct = 33 * m, cb = 202 * m;
  var u = Math.min((cb - ct) / (bm + uVG + uV), 9.2 * m);
  var cf = [.09, .23, .14, .24, .30];
  function cx(X, i) { var a = 0, j; for (j = 0; j < i; j++) a += cf[j]; return X + Wt * (a + cf[i] / 2); }
  function plabel(r) { return r.c + ' ' + (r.typ === 'Error' ? '-' : r.typ); }
  var pw = 0; list.forEach(function (r) { if (r.d) pw = Math.max(pw, tw(plabel(r), u * .44, 700)); }); pw += u * .9;
  var hd = en() ? ['Month', 'Date', 'Day', 'Uposatha'] : ['මාසය', 'දිනය', 'දවස', 'පෝය'];

  function grp(g, X, Y) {
    var gp = u * .06, h0 = u * uB;
    rr(X, Y + gp, Wt, h0 - 2 * gp, u * .26); x.fillStyle = C.ban; x.fill();
    x.save(); rr(X, Y + gp, Wt, h0 - 2 * gp, u * .26); x.clip(); x.fillStyle = C.bar; x.fillRect(X, Y, u * .22, h0); x.restore();
    if (!color) { rr(X, Y + gp, Wt, h0 - 2 * gp, u * .26); x.lineWidth = u * .04; x.strokeStyle = '#000'; x.stroke(); }
    txt(g.b, X + Wt / 2, Y + h0 / 2, u * .58, 700, C.banInk, 'center', Wt - u * 1.6);
    Y += h0;
    rr(X, Y + gp, Wt, u * uH - 2 * gp, u * .2); x.fillStyle = C.hdr; x.fill(); x.lineWidth = u * .04; x.strokeStyle = C.bd; x.stroke();
    for (var i = 1; i <= 4; i++) txt(hd[i - 1], cx(X, i), Y + u * uH / 2, u * .4, 700, C.ac, 'center', Wt * cf[i] - u * .2);
    Y += u * uH;
    g.r.forEach(function (r) {
      var mid = Y + u / 2, chat = r.chat, lab = plabel(r), ph = u * .68;
      rr(X, Y + gp, Wt, u - 2 * gp, u * .22); x.fillStyle = C.row; x.fill();
      x.lineWidth = u * .04; x.strokeStyle = C.bd; x.stroke();
      moon(cx(X, 0), mid, u * .26, r.full);
      txt(monAbbr(r.dt), cx(X, 1), mid, u * .5, 600, C.ink, 'center', Wt * cf[1] - u * .2);
      txt(pad2(r.dt.getDate()), cx(X, 2), mid, u * .54, 700, C.ink, 'center');
      txt(wdAbbr(r.dt), cx(X, 3), mid, u * .5, 400, C.ink, 'center', Wt * cf[3] - u * .2);
      var pc = cx(X, 4);
      var pcol = color ? (chat ? C.pc : C.pp) : '#000';
      rr(pc - pw / 2, mid - ph / 2, pw, ph, ph / 2); x.lineWidth = u * .04; x.strokeStyle = pcol; x.stroke();
      txt(lab, pc, mid, u * .44, 700, pcol, 'center', pw - u * .3);
      Y += u;
    });
    return Y;
  }
  var Y1 = ct, Y2 = ct;
  L.forEach(function (g) { Y1 = grp(g, mx, Y1) + u * uG; });
  R.forEach(function (g) { Y2 = grp(g, mx + Wt + gut, Y2) + u * uG; });

  /* ----- vassa information: bottom band ----- */
  var by = cb - uV * u, bh = uV * u;
  [[TX.early, v[0], v[1], t.vas1, t.vas2], [TX.late, v[2], v[3], t.vas3, t.vas4]].forEach(function (c, i) {
    var X = mx + i * (Wt + gut), ws = [c[1] ? wdFull(c[1]) : '', c[2] ? wdFull(c[2]) : ''], wmax = Math.max(tw(ws[0], u * .44, 600), tw(ws[1], u * .44, 600));
    rr(X, by, Wt, bh, u * .32); x.fillStyle = C.card; x.fill(); x.lineWidth = u * .05; x.strokeStyle = color ? C.bd : '#000'; x.stroke();
    txt(tr(c[0][0], c[0][1]), X + u * .9, by + u * .62, u * .56, 700, C.ac, 'left', Wt - u * 1.8);
    [[c[1], c[3], ws[0]], [c[2], c[4], ws[1]]].forEach(function (e, j) {
      var yy = by + u * (1.75 + j * 1.2), d = e[0], right = X + Wt - u * .9, s, pwd, ph2 = u * .8;
      txt(e[1] || '', X + u * .9, yy, u * .5, 700, C.ink, 'left', Wt * .46);
      if (d) { txt(e[2], right, yy, u * .44, 600, C.mu, 'right'); right -= wmax + u * .5; }
      s = d ? fdt(d) : '-'; pwd = tw(s, u * .5, 700) + u * 1.1;
      rr(right - pwd, yy - ph2 / 2, pwd, ph2, ph2 / 2); x.fillStyle = C.vas; x.fill();
      txt(s, right - pwd / 2, yy, u * .5, 700, '#fff', 'center');
    });
  });

  return cv;
}

function dlJpg(color) {
  closeSheet(); if (!P) return;
  var y = P.y, list = yearRows(y), btn = $('upDl');
  if (!list.length) { alert(tr(TX.nodata[0], TX.nodata[1])); return; }
  if (btn) btn.disabled = true;
  var go = function () {
    try {
      var url = drawSheet(y, list, vasDates(y), !!color).toDataURL('image/jpeg', .95), a = doc.createElement('a');
      a.href = url; a.download = 'Uposatha_' + y + (color ? '_Colour' : '_BW') + '.jpg'; doc.body.appendChild(a); a.click(); doc.body.removeChild(a);
    } catch (e) { console.error('uposatha jpg:', e); alert(tr('JPG සෑදීමට නොහැකි විය. නැවත උත්සාහ කරන්න.', 'Could not create the JPG. Please try again.')); }
    if (btn) btn.disabled = false;
  };
  try { if (doc.fonts && doc.fonts.load) Promise.all([doc.fonts.load('400 40px "Noto Serif Sinhala"', 'අඉ1A'), doc.fonts.load('700 40px "Noto Serif Sinhala"', 'අඉ1A')]).then(go, go); else go(); } catch (e) { go(); }
}

/* ---------- open / close ---------- */
function onKey(e) { if (e.key === 'Escape') { var sh = $('upSheet'); if (sh && sh.classList.contains('on')) closeSheet(); else close(); } }
function onPop() { if (pushed) { pushed = false; hide(); } }
function hide() { if (!P) return; P.open = false; killBg(); P.ov.style.display = 'none'; doc.documentElement.style.overflow = ''; doc.removeEventListener('keydown', onKey); }
function close() { if (pushed) history.back(); else hide(); }
function open(toVas) {
  try { if (typeof closeMenu === 'function') closeMenu(); } catch (e) {}
  css(); var ov = build(); ov.style.display = 'block'; ov.scrollTop = 0; doc.documentElement.style.overflow = 'hidden'; doc.addEventListener('keydown', onKey);
  try { history.pushState({ up: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  render(!toVas); startBg(); if (toVas) setTimeout(function () { scrollTo($('upVas')); }, 150);
}
function wrap(n, f) { var o = W[n]; if (typeof o !== 'function') return; W[n] = function () { var r = o.apply(this, arguments); try { f.apply(this, arguments); } catch (e) {} return r; }; }
var oPoya = W.openPoyaModal, oVas = W.openVasModal;
W.openPoyaModal = function () { try { open(false); } catch (e) { console.error('uposatha:', e); if (P) hide(); if (typeof oPoya === 'function') return oPoya.apply(this, arguments); } };
W.openVasModal = function () { try { open(true); } catch (e) { console.error('uposatha:', e); if (P) hide(); if (typeof oVas === 'function') return oVas.apply(this, arguments); } };
wrap('toggleLanguage', function () { if (P && P.open) render(false); });
wrap('toggleDarkMode', function () { if (P && P.open) tint(); });
W.addEventListener('popstate', onPop);
})();
