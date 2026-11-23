/* =====================================================================
   calendar.js — දින දර්ශනය (මාසික / වාර්ෂික)
   ---------------------------------------------------------------------
   • ප්‍රධාන පිටුවේ දිනය තෝරන කොටුවට යටින් ඇති බොත්තම් දෙකෙන් විවෘත වේ:
       openCalendar('month')  — මාසික දින දර්ශනය
       openCalendar('year')   — වාර්ෂික දින දර්ශනය (මාසයක් ඔබන විට එම මාසයට)
   • පසළොස්වක පෝය = කහ, අමාවක පෝය = කළු, අද දිනය = වළල්ලක්, තෝරාගත් දිනය = ලා පසුබිම.
     පෝය දින poyaList (script.js) වෙතින් — ප්‍රධාන පිටුවේ කලාපය (ශ්‍රී ලංකා / තායි / මියන්මාර්) අනුව.
   • ඊතල (‹ ›) හෝ ඇඟිල්ලෙන් වමට / දකුණට ඇදීමෙන් මාස / වර්ෂ මාරු වේ.
   • දිනයක් ඔබූ විට එය ප්‍රධාන පිටුවේ දිනය ලෙස යොදා දින දර්ශනය වැසේ.
   • ✕ / Esc / Back මගින් වැසේ. වර්ණ theme.css හි --t-* විචල්‍යවලින් (සියලු තේමාවලට).
   ===================================================================== */
(function () {
  'use strict';
  var W = window, doc = document;

  var TX = {
    month:  { si: 'මාසික දින දර්ශනය', en: 'Monthly calendar', hi: 'मासिक कैलेंडर', my: 'လစဉ် ပြက္ခဒိန်', th: 'ปฏิทินรายเดือน', zh: '月历' },
    year:   { si: 'වාර්ෂික දින දර්ශනය', en: 'Yearly calendar', hi: 'वार्षिक कैलेंडर', my: 'နှစ်စဉ် ပြက္ခဒိန်', th: 'ปฏิทินรายปี', zh: '年历' },
    btnM:   { si: 'මාසික', en: 'Month', hi: 'मासिक', my: 'လစဉ်', th: 'รายเดือน', zh: '月历' },
    btnY:   { si: 'වාර්ෂික', en: 'Year', hi: 'वार्षिक', my: 'နှစ်စဉ်', th: 'รายปี', zh: '年历' },
    full:   { si: 'පසළොස්වක පෝය', en: 'Full-moon Uposatha', hi: 'पूर्णिमा उपोसथ', my: 'လပြည့် ဥပုသ်', th: 'วันพระ จันทร์เต็มดวง', zh: '满月布萨' },
    nw:     { si: 'අමාවක පෝය', en: 'New-moon Uposatha', hi: 'अमावस्या उपोसथ', my: 'လကွယ် ဥပုသ်', th: 'วันพระ จันทร์ดับ', zh: '新月布萨' },
    today:  { si: 'අද', en: 'Today', hi: 'आज', my: 'ယနေ့', th: 'วันนี้', zh: '今天' },
    close:  { si: 'වසන්න', en: 'Close', hi: 'बंद करें', my: 'ပိတ်ရန်', th: 'ปิด', zh: '关闭' },
    toYear: { si: 'වාර්ෂික දින දර්ශනය', en: 'Yearly calendar', hi: 'वार्षिक कैलेंडर', my: 'နှစ်စဉ် ပြက္ခဒိန်', th: 'ปฏิทินรายปี', zh: '年历' },
    toMon:  { si: 'මාසික දින දර්ශනය', en: 'Monthly calendar', hi: 'मासिक कैलेंडर', my: 'လစဉ် ပြက္ခဒိန်', th: 'ปฏิทินรายเดือน', zh: '月历' },
    prevY:  { si: 'පෙර වර්ෂය', en: 'Previous year', hi: 'पिछला वर्ष', my: 'ယခင်နှစ်', th: 'ปีก่อน', zh: '上一年' },
    nextY:  { si: 'ඊළඟ වර්ෂය', en: 'Next year', hi: 'अगला वर्ष', my: 'နောက်နှစ်', th: 'ปีถัดไป', zh: '下一年' },
    prevM:  { si: 'පෙර මාසය', en: 'Previous month', hi: 'पिछला माह', my: 'ယခင်လ', th: 'เดือนก่อน', zh: '上个月' },
    nextM:  { si: 'ඊළඟ මාසය', en: 'Next month', hi: 'अगला माह', my: 'နောက်လ', th: 'เดือนถัดไป', zh: '下个月' }
  };
  var SIM = ['ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'];
  var SIW = ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'];
  var ENM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var ENW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var YMIN = 1900, YMAX = 3000;

  function lang() { try { return (typeof currentLang !== 'undefined' && currentLang) || 'en'; } catch (e) { return 'en'; } }
  function L(o) { return o[lang()] || o.en; }
  function loc() { try { return typeof langLocale === 'function' ? langLocale() : 'en-US'; } catch (e) { return 'en-US'; } }
  function p2(n) { return (n < 10 ? '0' : '') + n; }
  function iso(y, m, d) { return y + '-' + p2(m + 1) + '-' + p2(d); }
  function todayISO() { var t = new Date(); return iso(t.getFullYear(), t.getMonth(), t.getDate()); }
  function monName(y, m) {
    var l = lang();
    if (l === 'si') return SIM[m];
    if (l === 'en') return ENM[m];
    try { return new Intl.DateTimeFormat(loc(), { month: 'long' }).format(new Date(y, m, 15)); } catch (e) { return ENM[m]; }
  }
  function wdNames() {
    var l = lang();
    if (l === 'si') return SIW;
    if (l === 'en') return ENW;
    try { var f = new Intl.DateTimeFormat(loc(), { weekday: 'short' }); return [0, 1, 2, 3, 4, 5, 6].map(function (i) { return f.format(new Date(2023, 0, 1 + i)); }); }
    catch (e) { return ENW; }
  }
  function wdMini() {       // වාර්ෂික දසුනේ කුඩා දින නම්
    var l = lang();
    if (l === 'si') return ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'];
    if (l === 'en') return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    try { var f = new Intl.DateTimeFormat(loc(), { weekday: 'narrow' }); return [0, 1, 2, 3, 4, 5, 6].map(function (i) { return f.format(new Date(2023, 0, 1 + i)); }); }
    catch (e) { return ['S', 'M', 'T', 'W', 'T', 'F', 'S']; }
  }
  function yearText(y) { return lang() === 'zh' ? y + '年' : String(y); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---- පෝය දින: { 'YYYY-MM-DD': 'full' | 'new' } (වර්ෂයකට, කලාපයට අනුව cache) ---- */
  var PC = {};
  function poyaOf(y) {
    var rg = (typeof poyaRegion !== 'undefined') ? poyaRegion : 'lk', key = rg + y;
    if (PC[key]) return PC[key];
    var out = {};
    try {
      if (typeof ensurePoyaDataUpTo === 'function') ensurePoyaDataUpTo(Math.min(y + 1, YMAX));
      var s = String(y), list = (typeof poyaList !== 'undefined') ? poyaList : [];
      var i = typeof _pLowerBound === 'function' ? _pLowerBound(function (p) { return p.d >= s; }) : 0;
      for (; i < list.length; i++) {
        var p = list[i];
        if (p.d.slice(0, 4) !== s) { if (p.d > s) break; continue; }
        if (p.t.indexOf('පසළොස්වක') >= 0) out[p.d] = 'full';
        else if (p.t.indexOf('අමාවක') >= 0) out[p.d] = 'new';
      }
    } catch (e) {}
    PC[key] = out;
    return out;
  }

  /* ---------------------------- CSS ---------------------------- */
  var CSS = '\
#calOverlay{position:fixed;inset:0;z-index:4800;display:none}\
#calOverlay.on{display:block}\
#calOverlay *{box-sizing:border-box}\
#calOverlay .cl-bg{position:absolute;inset:0;background:var(--t-scrim,rgba(0,0,0,.45));animation:clF .2s ease}\
#calOverlay .cl-sheet{position:absolute;left:50%;top:calc(env(safe-area-inset-top,0px) + 14px);transform:translateX(-50%);width:min(440px,calc(100% - 20px));max-height:calc(100% - 28px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;background:var(--t-card,#fffdf6);color:var(--t-tx,#2b1b08);border:1px solid var(--t-bd2,#d7b160);border-radius:22px;box-shadow:0 20px 50px rgba(0,0,0,.35);overflow:hidden;animation:clU .22s ease}\
#calOverlay .cl-head{flex:none;display:flex;align-items:center;gap:8px;padding:10px 10px 10px 18px;border-bottom:1px solid var(--t-bd,#eed8ab);background:var(--t-elev,#fdf9f0)}\
#calOverlay .cl-head h2{flex:1;min-width:0;margin:0;font-size:1.08rem;font-weight:800;color:var(--t-ac2,#6b4410);line-height:1.4}\
html.theme-dark #calOverlay .cl-head h2{color:var(--t-ac,#f2d478)}\
#calOverlay .cl-ib{flex:none;width:40px;height:40px;border-radius:50%;border:1.5px solid var(--t-bd2,#d7b160);background:transparent;color:var(--t-ac,#8a5a14);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}\
#calOverlay .cl-ib svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\
#calOverlay .cl-ib:active,#calOverlay .cl-ar:active{transform:scale(.93)}\
#calOverlay .cl-ib:disabled,#calOverlay .cl-ar:disabled{opacity:.35;cursor:default}\
#calOverlay .cl-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:8px 14px 14px;touch-action:pan-y}\
#calOverlay .cl-nav{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:4px 0}\
#calOverlay .cl-nv{flex:1;text-align:center;font-weight:800;font-size:1.15rem;color:var(--t-tx,#2b1b08)}\
#calOverlay .cl-nav.y .cl-nv{font-size:1.02rem;color:var(--t-mu,#816741)}\
#calOverlay .cl-ar{flex:none;width:42px;height:38px;border-radius:12px;border:1.5px solid var(--t-bd2,#d7b160);background:var(--t-elev,#fdf9f0);color:var(--t-ac,#8a5a14);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}\
#calOverlay .cl-ar svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}\
#calOverlay .cl-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px;margin-top:8px}\
#calOverlay .cl-wd{text-align:center;font-size:.74rem;font-weight:800;color:var(--t-mu,#816741);padding:2px 0 4px;white-space:nowrap;overflow:hidden}\
#calOverlay .cl-wd.su,#calOverlay .cl-d.su{color:#c62828}\
html.theme-dark #calOverlay .cl-wd.su,html.theme-dark #calOverlay .cl-d.su{color:#ff8a80}\
#calOverlay .cl-d{aspect-ratio:1/1;width:100%;max-width:48px;justify-self:center;border:0;border-radius:50%;background:transparent;color:var(--t-tx,#2b1b08);font:inherit;font-size:1.02rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;position:relative}\
#calOverlay .cl-d:active{transform:scale(.92)}\
#calOverlay .cl-d.sel{background:var(--t-acs,rgba(192,138,40,.16))}\
#calOverlay .cl-d.full,#calOverlay .cl-m.full{background:#f7c948;color:#3a2a00!important;box-shadow:inset 0 0 0 2px #e0a800}\
#calOverlay .cl-d.new,#calOverlay .cl-m.new{background:#111;color:#fff!important}\
html.theme-dark #calOverlay .cl-d.new,html.theme-dark #calOverlay .cl-m.new{background:#000;box-shadow:inset 0 0 0 2px #bdbdbd}\
#calOverlay .cl-d.tdy,#calOverlay .cl-m.tdy{outline:3px solid var(--t-sw-on,#c08a28);outline-offset:2px;font-weight:900}\
#calOverlay .cl-d.tdy::after{content:"";position:absolute;bottom:4px;left:50%;width:5px;height:5px;margin-left:-2.5px;border-radius:50%;background:currentColor}\
#calOverlay .cl-foot{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:12px;padding-top:10px;border-top:1px solid var(--t-bd,#eed8ab);font-size:.8rem;color:var(--t-mu,#816741)}\
#calOverlay .cl-lg{display:inline-flex;align-items:center;gap:6px}\
#calOverlay .cl-lg i{width:16px;height:16px;border-radius:50%;display:inline-block;flex:none}\
#calOverlay .cl-lg i.full{background:#f7c948;box-shadow:inset 0 0 0 2px #e0a800}\
#calOverlay .cl-lg i.new{background:#111}\
html.theme-dark #calOverlay .cl-lg i.new{background:#000;box-shadow:inset 0 0 0 2px #bdbdbd}\
#calOverlay .cl-lg i.tdy{outline:2.5px solid var(--t-sw-on,#c08a28);outline-offset:1px}\
#calOverlay .cl-today{margin-left:auto;border:1.5px solid var(--t-sw-on,#c08a28);background:transparent;color:var(--t-ac,#8a5a14);font:inherit;font-weight:800;font-size:.85rem;padding:5px 14px;border-radius:999px;cursor:pointer}\
#calOverlay .cl-yr{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:8px}\
#calOverlay .cl-mo{border:1px solid var(--t-bd,#eed8ab);border-radius:14px;background:var(--t-elev,#fdf9f0);padding:6px 6px 8px;cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%}\
#calOverlay .cl-mo.cur{border:2px solid var(--t-sw-on,#c08a28)}\
#calOverlay .cl-mo h4{margin:0 0 4px;text-align:center;font-size:.86rem;font-weight:800;color:var(--t-ac2,#6b4410)}\
html.theme-dark #calOverlay .cl-mo h4{color:var(--t-ac,#f2d478)}\
#calOverlay .cl-mg{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px}\
#calOverlay .cl-mw{text-align:center;font-size:.55rem;font-weight:800;color:var(--t-mu,#816741);overflow:hidden;white-space:nowrap}\
#calOverlay .cl-m{aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:.68rem;font-weight:700;color:var(--t-tx,#2b1b08)}\
#calOverlay .cl-m.su{color:#c62828}\
html.theme-dark #calOverlay .cl-m.su{color:#ff8a80}\
#calOverlay .cl-m.tdy{outline-width:2px;outline-offset:0}\
@keyframes clU{from{transform:translate(-50%,24px);opacity:.4}to{transform:translate(-50%,0);opacity:1}}\
@keyframes clF{from{opacity:0}to{opacity:1}}\
@media (prefers-reduced-motion:reduce){#calOverlay .cl-sheet,#calOverlay .cl-bg{animation:none}}\
@media (min-width:600px){#calOverlay .cl-yr{grid-template-columns:repeat(3,minmax(0,1fr))}}\
@media (orientation:landscape) and (max-height:600px){#calOverlay .cl-sheet{top:8px;width:min(760px,calc(100% - 20px));max-height:calc(100% - 16px)}\
#calOverlay .cl-yr{grid-template-columns:repeat(4,minmax(0,1fr))}#calOverlay .cl-d{max-width:34px;font-size:.9rem}#calOverlay .cl-grid{gap:2px}}\
/* ප්‍රධාන පිටුවේ බොත්තම් */\
.cal-row{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}\
.cal-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 13px 6px 10px;border-radius:999px;border:1px solid var(--t-chip-bd,rgba(180,128,28,.45));background:var(--t-chip-bg,rgba(255,255,255,.55));color:var(--t-chip-tx,var(--t-hero-lb,#7a5210));font:inherit;font-size:.82rem;font-weight:800;cursor:pointer;line-height:1.3}\
.cal-btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}\
.cal-btn:active{transform:scale(.96)}\
body.dark-mode .cal-btn{background:var(--t-chip-bg,rgba(255,255,255,.07));color:var(--t-chip-tx,var(--t-hero-lb,#f2d478));border-color:var(--t-chip-bd,rgba(242,212,120,.4))}';

  var IC = {
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="12" cy="15" r="1.6" fill="currentColor" stroke="none"/></svg>',
    year: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/></svg>',
    l: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5"/></svg>',
    r: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  function injectCss() {
    if (doc.getElementById('calStyle')) return;
    var st = doc.createElement('style'); st.id = 'calStyle'; st.textContent = CSS;
    (doc.head || doc.documentElement).appendChild(st);
  }

  /* ---------------------------- state ---------------------------- */
  var ov = null, view = 'month', Y = 2026, M = 0, pushed = false;

  function mainISO() { var e = doc.getElementById('inputDate'); return (e && e.value) || todayISO(); }

  function navRow(cls, label, prev, next, prevDis, nextDis, prevLbl, nextLbl) {
    return '<div class="cl-nav ' + cls + '"><button type="button" class="cl-ar" data-go="' + prev + '"' + (prevDis ? ' disabled' : '') + ' aria-label="' + esc(prevLbl) + '">' + IC.l + '</button>' +
      '<div class="cl-nv">' + esc(label) + '</div>' +
      '<button type="button" class="cl-ar" data-go="' + next + '"' + (nextDis ? ' disabled' : '') + ' aria-label="' + esc(nextLbl) + '">' + IC.r + '</button></div>';
  }

  function foot() {
    return '<div class="cl-foot"><span class="cl-lg"><i class="full"></i>' + esc(L(TX.full)) + '</span>' +
      '<span class="cl-lg"><i class="new"></i>' + esc(L(TX.nw)) + '</span>' +
      '<span class="cl-lg"><i class="tdy"></i>' + esc(L(TX.today)) + '</span>' +
      '<button type="button" class="cl-today" data-today="1">' + esc(L(TX.today)) + '</button></div>';
  }

  function monthHtml() {
    var pm = poyaOf(Y), td = todayISO(), sel = mainISO(), wd = wdNames();
    var first = new Date(Y, M, 1).getDay(), n = new Date(Y, M + 1, 0).getDate();
    var h = navRow('y', yearText(Y), 'y-1', 'y+1', Y <= YMIN, Y >= YMAX, L(TX.prevY), L(TX.nextY)) +
      navRow('m', monName(Y, M), 'm-1', 'm+1', Y <= YMIN && M === 0, Y >= YMAX && M === 11, L(TX.prevM), L(TX.nextM)) +
      '<div class="cl-grid" role="grid">';
    for (var i = 0; i < 7; i++) h += '<div class="cl-wd' + (i === 0 ? ' su' : '') + '">' + esc(wd[i]) + '</div>';
    for (i = 0; i < first; i++) h += '<span></span>';
    for (var d = 1; d <= n; d++) {
      var s = iso(Y, M, d), k = pm[s], c = 'cl-d';
      if ((first + d - 1) % 7 === 0) c += ' su';
      if (k) c += ' ' + k;
      if (s === td) c += ' tdy';
      if (s === sel && !k) c += ' sel';
      var t = k ? L(k === 'full' ? TX.full : TX.nw) : '';
      h += '<button type="button" class="' + c + '" data-d="' + s + '"' + (t ? ' title="' + esc(t) + '"' : '') + ' aria-label="' + esc(d + ' ' + monName(Y, M) + (t ? ' — ' + t : '')) + '">' + d + '</button>';
    }
    return h + '</div>' + foot();
  }

  function yearHtml() {
    var pm = poyaOf(Y), td = todayISO(), wd = wdMini(), cm = new Date().getFullYear() === Y ? new Date().getMonth() : -1;
    var h = navRow('m', yearText(Y), 'y-1', 'y+1', Y <= YMIN, Y >= YMAX, L(TX.prevY), L(TX.nextY)) + '<div class="cl-yr">';
    for (var m = 0; m < 12; m++) {
      var first = new Date(Y, m, 1).getDay(), n = new Date(Y, m + 1, 0).getDate();
      h += '<button type="button" class="cl-mo' + (m === cm ? ' cur' : '') + '" data-mo="' + m + '"><h4>' + esc(monName(Y, m)) + '</h4><div class="cl-mg">';
      for (var i = 0; i < 7; i++) h += '<span class="cl-mw">' + esc(wd[i]) + '</span>';
      for (i = 0; i < first; i++) h += '<span></span>';
      for (var d = 1; d <= n; d++) {
        var s = iso(Y, m, d), k = pm[s], c = 'cl-m';
        if ((first + d - 1) % 7 === 0) c += ' su';
        if (k) c += ' ' + k;
        if (s === td) c += ' tdy';
        h += '<span class="' + c + '">' + d + '</span>';
      }
      h += '</div></button>';
    }
    return h + '</div>' + foot();
  }

  function render() {
    if (!ov) return;
    ov.setAttribute('lang', lang());
    ov.querySelector('.cl-head h2').textContent = L(view === 'month' ? TX.month : TX.year);
    var sw = ov.querySelector('[data-sw]');
    sw.innerHTML = view === 'month' ? IC.year : IC.cal;
    sw.setAttribute('aria-label', L(view === 'month' ? TX.toYear : TX.toMon));
    sw.title = sw.getAttribute('aria-label');
    var x = ov.querySelector('[data-x].cl-ib'); x.setAttribute('aria-label', L(TX.close)); x.title = L(TX.close);
    var body = ov.querySelector('.cl-body');
    body.innerHTML = view === 'month' ? monthHtml() : yearHtml();
  }

  function go(code) {
    if (code === 'y-1') Y--; else if (code === 'y+1') Y++;
    else if (code === 'm-1') { if (--M < 0) { M = 11; Y--; } }
    else if (code === 'm+1') { if (++M > 11) { M = 0; Y++; } }
    if (Y < YMIN) { Y = YMIN; M = 0; }
    if (Y > YMAX) { Y = YMAX; M = 11; }
    render();
  }

  function pickDay(s) {
    var e = doc.getElementById('inputDate');
    if (e && e.value !== s) { e.value = s; e.dispatchEvent(new Event('change', { bubbles: true })); }
    closeCalendar();
  }

  function onClick(e) {
    var t = e.target;
    if (t.closest('[data-x]')) { closeCalendar(); return; }
    if (t.closest('[data-sw]')) { view = view === 'month' ? 'year' : 'month'; render(); return; }
    var b = t.closest('[data-go]'); if (b && !b.disabled) { go(b.getAttribute('data-go')); return; }
    if (t.closest('[data-today]')) { var n = new Date(); Y = n.getFullYear(); M = n.getMonth(); render(); return; }
    var d = t.closest('[data-d]'); if (d) { pickDay(d.getAttribute('data-d')); return; }
    var mo = t.closest('[data-mo]'); if (mo) { M = +mo.getAttribute('data-mo'); view = 'month'; render(); return; }
  }

  /* ඇඟිල්ලෙන් ඇදීම: වමට = ඊළඟ, දකුණට = පෙර (මාසික → මාසය, වාර්ෂික → වර්ෂය) */
  var sx = 0, sy = 0, st = 0;
  function onTS(e) { var p = e.touches[0]; sx = p.clientX; sy = p.clientY; st = Date.now(); }
  function onTE(e) {
    var p = e.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy;
    if (Date.now() - st > 700 || Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (view === 'month') go(dx < 0 ? 'm+1' : 'm-1'); else go(dx < 0 ? 'y+1' : 'y-1');
  }

  function build() {
    if (ov) return ov;
    injectCss();
    ov = doc.createElement('div');
    ov.id = 'calOverlay';
    ov.innerHTML = '<div class="cl-bg" data-x="1"></div><section class="cl-sheet" role="dialog" aria-modal="true">' +
      '<header class="cl-head"><h2></h2><button type="button" class="cl-ib" data-sw="1"></button>' +
      '<button type="button" class="cl-ib" data-x="1">' + IC.x + '</button></header><div class="cl-body"></div></section>';
    doc.body.appendChild(ov);
    ov.addEventListener('click', onClick);
    var body = ov.querySelector('.cl-body');
    body.addEventListener('touchstart', onTS, { passive: true });
    body.addEventListener('touchend', onTE, { passive: true });
    return ov;
  }

  function onKey(e) {
    if (e.key === 'Escape') closeCalendar();
    else if (e.key === 'ArrowLeft') go(view === 'month' ? 'm-1' : 'y-1');
    else if (e.key === 'ArrowRight') go(view === 'month' ? 'm+1' : 'y+1');
  }
  function hide() { if (!ov) return; ov.classList.remove('on'); doc.removeEventListener('keydown', onKey); }
  function onPop() { if (pushed) { pushed = false; hide(); } }

  W.openCalendar = function (v) {
    build();
    view = v === 'year' ? 'year' : 'month';
    var a = mainISO().split('-');
    Y = Math.min(YMAX, Math.max(YMIN, +a[0] || new Date().getFullYear()));
    M = Math.min(11, Math.max(0, (+a[1] || 1) - 1));
    render();
    ov.classList.add('on');
    doc.addEventListener('keydown', onKey);
    if (!pushed) { try { history.pushState({ cal: 1 }, ''); pushed = true; } catch (e) { pushed = false; } }
  };
  W.closeCalendar = function () { if (pushed) history.back(); else hide(); };
  W.addEventListener('popstate', onPop);

  /* ---- ප්‍රධාන පිටුවේ බොත්තම් (දිනය තෝරන කොටුවට යටින්) ---- */
  function labelButtons() {
    var m = doc.getElementById('calBtnM'), y = doc.getElementById('calBtnY');
    if (m) { m.querySelector('span').textContent = L(TX.btnM); m.setAttribute('aria-label', L(TX.month)); m.title = L(TX.month); }
    if (y) { y.querySelector('span').textContent = L(TX.btnY); y.setAttribute('aria-label', L(TX.year)); y.title = L(TX.year); }
  }
  function addButtons() {
    injectCss();
    if (doc.getElementById('calBtnM')) { labelButtons(); return; }
    var row = doc.querySelector('.date-section-wrapper .date-row');
    if (!row) return;
    var box = doc.createElement('div');
    box.className = 'cal-row';
    box.innerHTML = '<button type="button" class="cal-btn" id="calBtnM">' + IC.cal + '<span></span></button>' +
      '<button type="button" class="cal-btn" id="calBtnY">' + IC.year + '<span></span></button>';
    row.parentNode.insertBefore(box, row.nextSibling);
    doc.getElementById('calBtnM').addEventListener('click', function () { W.openCalendar('month'); });
    doc.getElementById('calBtnY').addEventListener('click', function () { W.openCalendar('year'); });
    labelButtons();
  }
  function init() {
    addButtons();
    var o = W.toggleLanguage;      // භාෂාව මාරු වූ විට බොත්තම් නම් සහ (විවෘතව ඇත්නම්) දින දර්ශනය
    if (typeof o === 'function' && !o.__cal) {
      var w = function () { var r = o.apply(this, arguments); try { PC = {}; labelButtons(); if (ov && ov.classList.contains('on')) render(); } catch (e) {} return r; };
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) w[k] = o[k];
      w.__cal = 1; W.toggleLanguage = w;
    }
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
