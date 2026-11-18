/* =====================================================================
   theme.js — වර්ණ තේමා (15) + සැකසුම් පුවරුව (භාෂාව / වර්ණ තේමාව)
   ---------------------------------------------------------------------
   • <head> තුළ ඉක්මනින්ම load වේ (defer නැතිව) → පිටුව පෙන්වීමට පෙර තේමාව යෙදේ (වර්ණ "පිපිරීමක්" නැත).
   • තේමාව: <html data-theme="..."> ; අඳුරු තේමා දෙකට (dark, midnight) body.dark-mode ද යොදයි
     → පවතින dark-mode CSS / JS සියල්ල එලෙසම ක්‍රියා කරයි.
   • වර්ණ: theme.css (තේමාවකට විචල්‍ය කට්ටලයක් — සියලු පිටු ඒවායින් වර්ණ ගනී).
   • තේමාවක් වෙනස් වූ විට window එකට 'themechange' event එකක් යවයි.
   • localStorage: 'appTheme' (නව) — පැරණි 'theme' (dark / light) ද ගැළපෙන ලෙස යාවත්කාලීන කරයි.
   ===================================================================== */
(function () {
  'use strict';
  var W = window, doc = document, root = doc.documentElement;

  // sw = සැකසුම් පුවරුවේ පෙන්වන වර්ණ කවය ; meta = බ්‍රවුසර/ඇප් තීරුවේ වර්ණය
  // ලා පැහැ 5 · තද පැහැ 5 (අඳුරු 2 ඇතුළුව) · දීප්ත පැහැ 5
  var THEMES = [
    { id: 'cream',     dark: 0, sw: '#e9d6ab',           meta: '#fbf4e4', n: { si: 'ක්‍රීම්',     en: 'Cream',        hi: 'क्रीम',       my: 'ခရင်မ်',        th: 'ครีม', zh: '奶油色' } },
    { id: 'yellow',    dark: 0, sw: '#f3dc6b',           meta: '#fffbe6', n: { si: 'ලා කහ',     en: 'Light yellow', hi: 'हल्का पीला',  my: 'အဝါဖျော့',      th: 'เหลืองอ่อน', zh: '浅黄' } },
    { id: 'lightblue', dark: 0, sw: '#86b8ea',           meta: '#eef5fd', n: { si: 'ලා නිල්',    en: 'Light blue',   hi: 'हल्का नीला',  my: 'အပြာဖျော့',     th: 'ฟ้าอ่อน', zh: '浅蓝' } },
    { id: 'mint',      dark: 0, sw: '#8fdcbe',           meta: '#eefaf4', n: { si: 'ලා කොළ',    en: 'Mint',         hi: 'मिंट',        my: 'မင့်',           th: 'มินต์', zh: '薄荷绿' } },
    { id: 'lavender',  dark: 0, sw: '#bba6e6',           meta: '#f5f2fc', n: { si: 'ලා දම්',     en: 'Lavender',     hi: 'लैवेंडर',     my: 'ခရမ်းဖျော့',    th: 'ลาเวนเดอร์', zh: '薰衣草紫' } },
    { id: 'forest',    dark: 0, sw: '#1f5a3a', deep: 1,  meta: '#1b4d33', n: { si: 'තද කොළ',    en: 'Forest',       hi: 'वन हरा',      my: 'တောစိမ်း',      th: 'เขียวป่า', zh: '森林绿' } },
    { id: 'saffron',   dark: 0, sw: '#b85a17', deep: 1,  meta: '#9a4710', n: { si: 'කාෂාය',     en: 'Saffron',      hi: 'केसरिया',     my: 'လိမ္မော်ရင့်',   th: 'หญ้าฝรั่น', zh: '袈裟橙' } },
    { id: 'lotus',     dark: 0, sw: '#952141', deep: 1,  meta: '#86183a', n: { si: 'නෙළුම්',    en: 'Lotus',        hi: 'कमल',         my: 'ကြာ',            th: 'บัว', zh: '莲花红' } },
    { id: 'rose',      dark: 0, sw: '#ff005f', bright: 1, meta: '#ff005f', n: { si: 'රෝස',       en: 'Rose',         hi: 'गुलाबी',      my: 'ပန်းရောင်',      th: 'ชมพู', zh: '玫瑰红' } },
    { id: 'teal',      dark: 0, sw: '#00c2ae', bright: 1, meta: '#00c2ae', n: { si: 'කොළ නිල්',   en: 'Teal',         hi: 'टील',         my: 'စိမ်းပြာ',       th: 'เขียวหัวเป็ด', zh: '青绿' } },
    { id: 'olive',     dark: 0, sw: '#b2ac11', bright: 1, meta: '#b2ac11', n: { si: 'ඔලිව්',      en: 'Olive',        hi: 'जैतूनी',      my: 'သံလွင်ရောင်',    th: 'เขียวมะกอก', zh: '橄榄绿' } },
    { id: 'coral',     dark: 0, sw: '#ffafa8', bright: 1, meta: '#ffafa8', n: { si: 'කොරල්',      en: 'Coral',        hi: 'मूंगा',       my: 'သန္တာ',           th: 'ปะการัง', zh: '珊瑚色' } },
    { id: 'seafoam',   dark: 0, sw: '#b0ebd2', bright: 1, meta: '#b0ebd2', n: { si: 'මුහුදු පෙණ', en: 'Seafoam',      hi: 'समुद्री झाग', my: 'ပင်လယ်အမြှုပ်',  th: 'ฟองทะเล', zh: '海沫绿' } },
    { id: 'dark',      dark: 1, sw: ['#0b1510', '#4fc796'], meta: '#06100c', n: { si: 'අඳුරු',     en: 'Dark',         hi: 'डार्क',       my: 'အမှောင်',        th: 'มืด', zh: '深色' } },
    { id: 'midnight',  dark: 1, sw: ['#0b1030', '#e6c260'], meta: '#0b1030', n: { si: 'රාත්‍රී නිල්', en: 'Midnight',     hi: 'मध्यरात्रि',  my: 'သန်းခေါင်',      th: 'เที่ยงคืน', zh: '午夜蓝' } }
  ];
  var BY = {}; THEMES.forEach(function (t) { BY[t.id] = t; });
  var DEFAULT_LIGHT = 'cream', DEFAULT_DARK = 'midnight';

  var TX = {
    title:  { si: 'සැකසුම්',      en: 'Settings',     hi: 'सेटिंग्स',    my: 'ဆက်တင်များ',     th: 'การตั้งค่า', zh: '设置' },
    lang:   { si: 'භාෂාව',        en: 'Language',     hi: 'भाषा',        my: 'ဘာသာစကား',       th: 'ภาษา', zh: '语言' },
    theme:  { si: 'වර්ණ තේමාව',   en: 'Colour theme', hi: 'रंग थीम',      my: 'အရောင်',          th: 'ธีมสี', zh: '颜色主题' },
    light:  { si: 'ලා පැහැ',      en: 'Light',        hi: 'हल्के रंग',    my: 'အဖျော့ရောင်',    th: 'สีอ่อน', zh: '浅色系' },
    deep:   { si: 'තද පැහැ',      en: 'Deep',         hi: 'गहरे रंग',     my: 'အရင့်ရောင်',     th: 'สีเข้ม', zh: '深色系' },
    bright: { si: 'දීප්ත පැහැ',    en: 'Bright',       hi: 'चटक रंग',      my: 'တောက်ပရောင်',    th: 'สีสด', zh: '亮色系' },
    close:  { si: 'වසන්න',        en: 'Close',        hi: 'बंद करें',     my: 'ပိတ်ရန်',         th: 'ปิด', zh: '关闭' },
    loading:{ si: 'පූරණය වෙමින්…', en: 'Loading…',     hi: 'लोड हो रहा है…', my: 'ဖွင့်နေသည်…',  th: 'กำลังโหลด…', zh: '加载中…' }
  };

  function lang() { try { return (typeof currentLang !== 'undefined' && currentLang) || 'en'; } catch (e) { return 'en'; } }
  function L(o) { var l = lang(); return o[l] || o.en; }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------------- තේමාව තීරණය / යෙදීම ---------------- */
  function initialId() {
    var id = read('appTheme');
    if (BY[id]) return id;
    return read('theme') === 'dark' ? DEFAULT_DARK : DEFAULT_LIGHT;   // පැරණි අඳුරු/ආලෝකමත් තේරීම
  }
  var cur = initialId();

  function setMeta(t) {
    var m = doc.querySelector('meta[name="theme-color"]');
    if (!m) { m = doc.createElement('meta'); m.name = 'theme-color'; (doc.head || root).appendChild(m); }
    m.content = t.meta;
  }
  function applyBody() {
    var t = BY[cur];
    if (doc.body) doc.body.classList.toggle('dark-mode', !!t.dark);
  }
  function applyRoot() {
    var t = BY[cur];
    root.setAttribute('data-theme', t.id);
    root.classList.toggle('theme-dark', !!t.dark);
    root.classList.toggle('theme-deep', !!t.deep);
    root.classList.toggle('theme-bright', !!t.bright);
    root.style.colorScheme = t.dark ? 'dark' : 'light';
    setMeta(t);
  }

  function set(id) {
    if (!BY[id]) return;
    var was = BY[cur], t = BY[id];
    cur = id;
    store('appTheme', id);
    store('theme', t.dark ? 'dark' : 'light');                 // script.js / පැරණි කේතය සඳහා
    store(t.dark ? 'lastDarkTheme' : 'lastLightTheme', id);
    applyRoot(); applyBody();
    if (typeof W.updateUI === 'function') { try { W.updateUI(); } catch (e) {} }
    try { W.dispatchEvent(new CustomEvent('themechange', { detail: { id: id, dark: !!t.dark, darkChanged: !!was.dark !== !!t.dark } })); } catch (e) {}
    syncPanel();
  }

  applyRoot();
  if (doc.body) applyBody();
  doc.addEventListener('DOMContentLoaded', applyBody);

  W.AppTheme = {
    list: THEMES,
    get: function () { return cur; },
    isDark: function () { return !!BY[cur].dark; },
    set: set,
    applyBody: applyBody,
    // ආලෝකමත් ↔ අඳුරු මාරුව (පැරණි toggleDarkMode සඳහා): අවසන් වරට තෝරාගත් ලා / අඳුරු තේමාවට
    toggle: function () {
      if (BY[cur].dark) { var l = read('lastLightTheme'); set(BY[l] && !BY[l].dark ? l : DEFAULT_LIGHT); }
      else { var d = read('lastDarkTheme'); set(BY[d] && BY[d].dark ? d : DEFAULT_DARK); }
    }
  };

  /* ---------------- සැකසුම් පුවරුව ---------------- */
  var ov = null, pushed = false, langOpen = false, waitTimer = 0;

  function swatch(t) {
    var c = Array.isArray(t.sw)
      ? '<i class="st-dot st-split" style="--a:' + t.sw[0] + ';--b:' + t.sw[1] + '"></i>'
      : '<i class="st-dot" style="background:' + t.sw + '"></i>';
    return '<button type="button" class="st-sw" data-t="' + t.id + '" role="radio" aria-checked="false">' + c +
      '<span class="st-swl">' + L(t.n) + '</span></button>';
  }

  function langs() {
    try { if (typeof APP_LANGS !== 'undefined') return APP_LANGS; } catch (e) {}
    return ['si', 'en'];
  }
  function langName(k) {
    try { if (typeof LANG_NAMES !== 'undefined' && LANG_NAMES[k]) return LANG_NAMES[k]; } catch (e) {}
    return k;
  }

  function build() {
    if (!ov) {
      ov = doc.createElement('div');
      ov.id = 'setOverlay';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      doc.body.appendChild(ov);
      ov.addEventListener('click', onClick);
    }
    var cl = lang();
    var light = THEMES.filter(function (t) { return !t.dark && !t.deep && !t.bright; });
    var bright = THEMES.filter(function (t) { return t.bright; });
    var deep = THEMES.filter(function (t) { return t.dark || t.deep; });
    var others = langs().filter(function (k) { return k !== cl; });
    ov.setAttribute('lang', cl);
    ov.innerHTML =
      '<div class="st-bg" data-close="1"></div>' +
      '<section class="st-sheet" aria-labelledby="stTitle">' +
        '<header class="st-head"><h2 id="stTitle">' + L(TX.title) + '</h2>' +
          '<button type="button" class="st-x" data-close="1" aria-label="' + L(TX.close) + '" title="' + L(TX.close) + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
        '<div class="st-body">' +
          '<h3 class="st-sec">' + L(TX.lang) + '</h3>' +
          '<div class="st-lang' + (langOpen ? ' open' : '') + '">' +
            '<button type="button" class="st-cur" aria-expanded="' + (langOpen ? 'true' : 'false') + '" aria-controls="stLangList">' +
              '<span class="st-curn" lang="' + cl + '">' + langName(cl) + '</span>' +
              '<svg class="st-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
            '<div class="st-list" id="stLangList"><div class="st-listin">' + others.map(function (k) {
              return '<button type="button" class="st-lo" data-l="' + k + '" lang="' + k + '">' + langName(k) + '</button>';
            }).join('') + '</div></div>' +
          '</div>' +
          '<h3 class="st-sec">' + L(TX.theme) + '</h3>' +
          '<div class="st-sub">' + L(TX.light) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.light) + '">' + light.map(swatch).join('') + '</div>' +
          '<div class="st-sub">' + L(TX.deep) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.deep) + '">' + deep.map(swatch).join('') + '</div>' +
          '<div class="st-sub">' + L(TX.bright) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.bright) + '">' + bright.map(swatch).join('') + '</div>' +
        '</div>' +
      '</section>';
    syncPanel();
  }

  function syncPanel() {
    if (!ov) return;
    ov.querySelectorAll('.st-sw').forEach(function (b) {
      var on = b.getAttribute('data-t') === cur;
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  function setLangOpen(open) {
    langOpen = open;
    var box = ov && ov.querySelector('.st-lang');
    if (!box) return;
    box.classList.toggle('open', open);
    box.querySelector('.st-cur').setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function pickLang(l, btn) {
    if (typeof W.toggleLanguage !== 'function' || l === lang()) { setLangOpen(false); return; }
    W.toggleLanguage(l);                          // script.js: අවශ්‍ය නම් භාෂා ගොනුව load කර මාරු කරයි
    if (lang() === l) { langOpen = false; build(); return; }
    // භාෂා ගොනුව තවම load වෙමින් — අවසන් වූ පසු පුවරුව නැවත සාදයි
    if (btn) { btn.disabled = true; btn.classList.add('wait'); btn.setAttribute('data-wait', L(TX.loading)); }
    clearInterval(waitTimer);
    var n = 0;
    waitTimer = setInterval(function () {
      if (lang() === l) { clearInterval(waitTimer); langOpen = false; build(); }
      else if (++n > 150) { clearInterval(waitTimer); if (btn) { btn.disabled = false; btn.classList.remove('wait'); } }
    }, 100);
  }

  function onClick(e) {
    var t = e.target;
    if (t.closest('[data-close]')) { closeSettings(); return; }
    var sw = t.closest('.st-sw');
    if (sw) { set(sw.getAttribute('data-t')); return; }
    if (t.closest('.st-cur')) { setLangOpen(!langOpen); return; }
    var lo = t.closest('.st-lo');
    if (lo) { pickLang(lo.getAttribute('data-l'), lo); return; }
  }

  function onKey(e) { if (e.key === 'Escape') closeSettings(); }
  function onPop() { if (pushed) { pushed = false; hide(); } }

  function hide() {
    if (!ov) return;
    ov.classList.remove('on');
    doc.removeEventListener('keydown', onKey);
    clearInterval(waitTimer);
  }

  function openSettings() {
    langOpen = false;
    build();
    ov.classList.add('on');
    doc.addEventListener('keydown', onKey);
    if (!pushed) { try { history.pushState({ st: 1 }, ''); pushed = true; } catch (e) { pushed = false; } }
    var x = ov.querySelector('.st-x'); if (x) try { x.focus({ preventScroll: true }); } catch (e) {}
  }
  function closeSettings() {
    if (pushed) { pushed = false; hide(); try { history.back(); } catch (e) {} }
    else hide();
  }

  W.addEventListener('popstate', onPop);
  W.openSettings = openSettings;
  W.closeSettings = closeSettings;
})();
