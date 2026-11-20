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
    { id: 'lotus',     dark: 0, sw: '#952141', deep: 1,  meta: '#86183a', n: { si: 'නෙළුම්',    en: 'Lotus',        hi: 'कमल',         my: 'ကြာ',            th: 'บัว', zh: '莲花红' } },
    { id: 'rose',      dark: 0, sw: '#ff005f', bright: 1, meta: '#ff005f', n: { si: 'රෝස',       en: 'Rose',         hi: 'गुलाबी',      my: 'ပန်းရောင်',      th: 'ชมพู', zh: '玫瑰红' } },
    { id: 'teal',      dark: 0, sw: '#00c2ae', bright: 1, meta: '#00c2ae', n: { si: 'කොළ නිල්',   en: 'Teal',         hi: 'टील',         my: 'စိမ်းပြာ',       th: 'เขียวหัวเป็ด', zh: '青绿' } },
    { id: 'olive',     dark: 0, sw: '#b2ac11', bright: 1, meta: '#b2ac11', n: { si: 'ඔලිව්',      en: 'Olive',        hi: 'जैतूनी',      my: 'သံလွင်ရောင်',    th: 'เขียวมะกอก', zh: '橄榄绿' } },
    { id: 'coral',     dark: 0, sw: '#ffafa8', bright: 1, meta: '#ffafa8', n: { si: 'කොරල්',      en: 'Coral',        hi: 'मूंगा',       my: 'သန္တာ',           th: 'ปะการัง', zh: '珊瑚色' } },
    { id: 'seafoam',   dark: 0, sw: '#b0ebd2', bright: 1, meta: '#b0ebd2', n: { si: 'මුහුදු පෙණ', en: 'Seafoam',      hi: 'समुद्री झाग', my: 'ပင်လယ်အမြှုပ်',  th: 'ฟองทะเล', zh: '海沫绿' } },
    { id: 'dark',      dark: 1, sw: ['#0b1510', '#4fc796'], meta: '#06100c', n: { si: 'අඳුරු',     en: 'Dark',         hi: 'डार्क',       my: 'အမှောင်',        th: 'มืด', zh: '深色' } },
    { id: 'midnight',  dark: 1, sw: ['#0b1030', '#e6c260'], meta: '#0b1030', n: { si: 'රාත්‍රී නිල්', en: 'Midnight',     hi: 'मध्यरात्रि',  my: 'သန်းခေါင်',      th: 'เที่ยงคืน', zh: '午夜蓝' } },
    { id: 'charcoal',  dark: 1, sw: ['#000000', '#d97757'], meta: '#000000', n: { si: 'කළු',        en: 'Black',        hi: 'काला',        my: 'အနက်',           th: 'ดำ', zh: '纯黑' } }
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
    font:   { si: 'අකුරු',        en: 'Font',         hi: 'फ़ॉन्ट',       my: 'ဖောင့်',          th: 'แบบอักษร', zh: '字体' },
    fdef:   { si: 'පෙරනිමි',      en: 'Default',      hi: 'डिफ़ॉल्ट',     my: 'မူလ',             th: 'ค่าเริ่มต้น', zh: '默认' },
    fnote:  { si: 'තෝරාගත් අකුරු පළමු වරට අන්තර්ජාලයෙන් බාගත වේ. ඉන්පසු නොබැඳිව ද ක්‍රියා කරයි.',
              en: 'A chosen font downloads once from the internet, then also works offline.',
              hi: 'चुना गया फ़ॉन्ट पहली बार इंटरनेट से डाउनलोड होता है, फिर ऑफ़लाइन भी काम करता है।',
              my: 'ရွေးထားသော ဖောင့်ကို ပထမအကြိမ် အင်တာနက်မှ ဒေါင်းလုဒ်လုပ်ပြီး နောက်ပိုင်း အော့ဖ်လိုင်းတွင်လည်း အသုံးပြုနိုင်သည်။',
              th: 'แบบอักษรที่เลือกจะดาวน์โหลดจากอินเทอร์เน็ตครั้งแรก จากนั้นใช้งานออฟไลน์ได้',
              zh: '所选字体首次需联网下载，之后可离线使用。' },
    close:  { si: 'වසන්න',        en: 'Close',        hi: 'बंद करें',     my: 'ပိတ်ရန်',         th: 'ปิด', zh: '关闭' },
    loading:{ si: 'පූරණය වෙමින්…', en: 'Loading…',     hi: 'लोड हो रहा है…', my: 'ဖွင့်နေသည်…',  th: 'กำลังโหลด…', zh: '加载中…' }
  };

  function lang() { try { return (typeof currentLang !== 'undefined' && currentLang) || 'en'; } catch (e) { return 'en'; } }
  function L(o) { var l = lang(); return o[l] || o.en; }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------------- අකුරු (font) — භාෂාව අනුව Google Fonts ----------------
     • 'appFont.<භාෂාව>' = තෝරාගත් අකුරු id (භාෂාවකට වෙනම). 'def' = දැනට පවතින Noto අකුරු.
     • තෝරාගත් අකුරු <html data-uf> + --uf මගින් සියලු පිටුවලට (සජ්ඣායනා, උපෝසථ, ගණනය…) යෙදේ;
       එහි නැති අකුරු (ඉංග්‍රීසි, emoji ආදිය) පෙරනිමි Noto අකුරුවලින් පෙන්වයි.
     • w = බාගත කරන බර (weights) — Google හි ඇති ඒවා පමණි; වැරදුණොත් බර නොමැතිව නැවත උත්සාහ කරයි.
     • src = ඇප් එක සමඟම ඇති අකුරු (fonts/*.woff2 — Pushpananda Ekanayake ගේ FM අකුරුවල Unicode
       අනුවාද, SIL OFL; pitaka.lk "Sinhala Uni fonts 2.000"). තෝරාගත් විට පමණක් බාගත වේ.
     • sz = සිංහල අකුරු පමණක් විශාල කරන ප්‍රතිශතය (size-adjust) — මෙම අකුරු Noto Sans Sinhala ට වඩා
       කුඩාවට පෙනෙන නිසා, අකුරු උස Noto හා සමාන වන ලෙස මැනීමෙන් ගත් අගය. ඉංග්‍රීසි / අංක වෙනස් නොවේ.
     • wr: '100 900' = ගංගානී / ඉමානී / සමන්තා තනිව ම තද (bold) හැඩයේ අකුරු; බොහෝ පෙළ 600–800 බරින් ඇති නිසා
       browser එක ඒවා මත තවත් ව්‍යාජ bold එකක් එක් නොකරන ලෙස එම එක් ගොනුව සියලු බර සඳහා යොදයි.
     • පැරණි id: 'abhaya' (Abhaya Libre) → 'abhayauni' (අභය Uni ද Abhaya Libre ගේ glyph මතම සාදා ඇත). */
  var FONT_ALIAS = { abhaya: 'abhayauni', yaldevi: 'def', gemunu: 'def' };
  var FONTS = {
    si: [
      { id: 'def',        base: 'Noto Sans Sinhala' },
      { id: 'abhayauni',  fam: 'Abhaya Uni',         src: 'AbhayaUni-Variable',    wr: '400 800', sz: 122, n: 'අභය',     d: 'Abhaya Uni' },
      { id: 'ganganee',   fam: 'Ganganee Uni',       src: 'GanganeeUni-Regular', wr: '100 900',   sz: 118, n: 'ගංගානී',   d: 'Ganganee Uni' },
      { id: 'imanee',     fam: 'Imanee Uni',         src: 'ImaneeUni-Regular', wr: '100 900',     sz: 122, n: 'ඉමානී',    d: 'Imanee Uni' },
      { id: 'bindumathi', fam: 'Bindumathi Uni',     src: 'BindumathiUni-Regular', sz: 122, n: 'බින්දුමතී', d: 'Bindumathi Uni' },
      { id: 'samantha',   fam: 'Samantha Uni',       src: 'SamanthaUni-Regular', wr: '100 900',   sz: 122, n: 'සමන්තා',   d: 'Samantha Uni' },
      { id: 'notoserif',  fam: 'Noto Serif Sinhala', w: '400;500;600;700;800', n: 'Noto Serif', d: 'Noto Serif Sinhala' }
    ],
    en: [
      { id: 'def',       base: 'Noto Sans' },
      { id: 'notoserif', fam: 'Noto Serif',         w: '400;500;600;700;800', n: 'Noto Serif', d: 'Classic serif' },
      { id: 'gentium',   fam: 'Gentium Book Plus',  w: '400;700',             n: 'Gentium Book Plus', d: 'Scholarly · full Pāli diacritics' },
      { id: 'charis',    fam: 'Charis SIL',         w: '400;700',             n: 'Charis SIL', d: 'Book serif' },
      { id: 'garamond',  fam: 'EB Garamond',        w: '400;500;600;700;800', n: 'EB Garamond', d: 'Old-style' }
    ],
    hi: [
      { id: 'def',       base: 'Noto Sans Devanagari' },
      { id: 'tiro',      fam: 'Tiro Devanagari Sanskrit', w: '',          n: 'Tiro Devanagari Sanskrit', d: 'संस्कृत / पालि शैली' },
      { id: 'notoserif', fam: 'Noto Serif Devanagari', w: '400;500;600;700;800', n: 'Noto Serif Devanagari', d: 'सेरिफ़' },
      { id: 'mukta',     fam: 'Mukta',              w: '400;500;600;700;800', n: 'Mukta', d: 'आधुनिक' },
      { id: 'hind',      fam: 'Hind',               w: '400;500;600;700',     n: 'Hind', d: 'सरल' }
    ],
    my: [
      { id: 'def',       base: 'Noto Sans Myanmar' },
      { id: 'padauk',    fam: 'Padauk',             w: '400;700',             n: 'Padauk', d: 'ပိတောက်' },
      { id: 'notoserif', fam: 'Noto Serif Myanmar', w: '400;500;600;700;800', n: 'Noto Serif Myanmar', d: 'Serif' }
    ],
    th: [
      { id: 'def',       base: 'Noto Sans Thai' },
      { id: 'sarabun',   fam: 'Sarabun',            w: '400;500;600;700;800', n: 'Sarabun', d: 'สารบรรณ' },
      { id: 'notoserif', fam: 'Noto Serif Thai',    w: '400;500;600;700;800', n: 'Noto Serif Thai', d: 'มีเชิง' },
      { id: 'looped',    fam: 'Noto Sans Thai Looped', w: '400;500;600;700;800', n: 'Noto Sans Thai Looped', d: 'มีหัว' }
    ],
    zh: [
      { id: 'def',       base: 'Noto Sans SC' },
      { id: 'notoserif', fam: 'Noto Serif SC',      w: '400;500;600;700;800', n: 'Noto Serif SC', d: '宋体风格' },
      { id: 'xiaowei',   fam: 'ZCOOL XiaoWei',      w: '',                    n: '站酷小薇', d: 'ZCOOL XiaoWei' },
      { id: 'mashan',    fam: 'Ma Shan Zheng',      w: '',                    n: '马善政楷书', d: '楷书风格' }
    ]
  };
  var FSAMPLE = { si: 'නමො තස්ස භගවතො අරහතො', en: 'Namo tassa · Saṃyutta Nikāya', hi: 'नमो तस्स भगवतो अरहतो',
                  my: 'နမော တဿ ဘဂဝတော အရဟတော', th: 'นะโม ตัสสะ ภะคะวะโต', zh: '南无本师释迦牟尼佛' };
  var FBACK = "'Noto Sans','Noto Sans Sinhala','Noto Sans Devanagari','Noto Sans Myanmar','Noto Sans Thai','Noto Sans SC',sans-serif";

  function fontLang() {
    var l = null;
    try { if (typeof currentLang !== 'undefined') l = currentLang; } catch (e) {}
    l = l || read('appLang') || 'en';
    return FONTS[l] ? l : 'en';
  }
  function fontFor(l) {
    var id = read('appFont.' + l), list = FONTS[l];
    if (l === 'si' && FONT_ALIAS[id]) id = FONT_ALIAS[id];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return list[0];
  }
  function fontCss(f) {
    var id = 'uf-' + f.fam.replace(/\W+/g, '');
    if (doc.getElementById(id)) return;
    if (f.src) {     // ඇප් එක සමඟ ඇති අකුරු — @font-face පමණයි (භාවිත වන තුරු බාගත නොවේ)
      var st = doc.createElement('style'); st.id = id;
      var face = function (range, adj) {
        return "@font-face{font-family:'" + f.fam + "';src:url(fonts/" + f.src + ".woff2) format('woff2');font-weight:" + (f.wr || '400') +
          ';font-style:normal;font-display:swap;unicode-range:' + range + (adj ? ';size-adjust:' + adj + '%' : '') + '}';
      };
      var SI = 'U+0D80-0DFF,U+111E1-111F4,U+200C-200D,U+25CC';     // සිංහල (+ ZWJ / ZWNJ, තිත් කවය)
      st.textContent = face('U+0000-0D7F,U+0E00-111E0,U+111F5-10FFFF', 0) + face(SI, f.sz || 0);
      (doc.head || root).appendChild(st);
      return;
    }
    var href = function (w) { return 'https://fonts.googleapis.com/css2?family=' + f.fam.replace(/ /g, '+') + (w ? ':wght@' + w : '') + '&display=swap'; };
    var ln = doc.createElement('link');
    ln.rel = 'stylesheet'; ln.id = id; ln.href = href(f.w);
    ln.onerror = function () { if (f.w && !ln.getAttribute('data-r')) { ln.setAttribute('data-r', '1'); ln.href = href(''); } };
    (doc.head || root).appendChild(ln);
  }
  function applyFont() {
    var f = fontFor(fontLang());
    if (!f.fam) { root.removeAttribute('data-uf'); root.style.removeProperty('--uf'); return; }
    fontCss(f);
    root.setAttribute('data-uf', f.id);
    root.style.setProperty('--uf', "'" + f.fam + "'," + FBACK);
  }
  (function () {   // සියලු පිටු සඳහා එක් රීතියක් (code / textarea සහ සැකසුම්වල නිදර්ශන පෙළ හැර)
    var st = doc.createElement('style'); st.id = 'ufStyle';
    st.textContent = 'html[data-uf] body,html[data-uf] body :not(code):not(pre):not(kbd):not(samp):not(textarea):not(.st-fs){font-family:var(--uf)!important}';
    (doc.head || root).appendChild(st);
  })();
  applyFont();

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
  var ov = null, pushed = false, langOpen = false, fontOpen = false, waitTimer = 0;

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
    var fl = fontLang(), fonts = FONTS[fl], fsel = fontFor(fl);
    var famOf = function (f) { return "'" + (f.fam || f.base) + "'," + FBACK; };
    var fontInfo = function (f) {
      return '<span class="st-fl"><b>' + (f.fam ? f.n : L(TX.fdef)) + '</b><small>' + (f.fam ? f.d : f.base) + '</small></span>';
    };
    /* තෝරාගත් අකුරු ඉහළින්; අනෙක් ඒවා භාෂා ලැයිස්තුව මෙන් පහළට දිගහැරේ.
       නිදර්ශන පෙළේ අකුරු යොදන්නේ ලැයිස්තුව විවෘත කළ විට පමණි (data-ff) — නැත්නම් අකුරු සියල්ල බාගත වේ */
    var fontBtn = function (f) {
      return '<button type="button" class="st-fo" data-f="' + f.id + '" role="option">' + fontInfo(f) +
        '<span class="st-fs" lang="' + fl + '" data-ff="' + famOf(f).replace(/"/g, '&quot;') + '">' + FSAMPLE[fl] + '</span></button>';
    };
    var fontBox = '<div class="st-lang st-fsel' + (fontOpen ? ' open' : '') + '">' +
      '<button type="button" class="st-cur st-fcur" aria-expanded="' + (fontOpen ? 'true' : 'false') + '" aria-controls="stFontList">' +
        '<span class="st-curn">' + fontInfo(fsel) + '<span class="st-fs" lang="' + fl + '" style="font-family:' + famOf(fsel).replace(/"/g, '&quot;') + '">' + FSAMPLE[fl] + '</span></span>' +
        '<svg class="st-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<div class="st-list" id="stFontList"><div class="st-listin" role="listbox" aria-label="' + L(TX.font) + '">' +
        fonts.filter(function (f) { return f.id !== fsel.id; }).map(fontBtn).join('') +
      '</div></div></div>';
    ov.setAttribute('lang', cl);
    ov.innerHTML =
      '<div class="st-bg" data-close="1"></div>' +
      '<section class="st-sheet" aria-labelledby="stTitle">' +
        '<header class="st-head"><h2 id="stTitle">' + L(TX.title) + '</h2>' +
          '<button type="button" class="st-x" data-close="1" aria-label="' + L(TX.close) + '" title="' + L(TX.close) + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
        '<div class="st-body">' +
          '<div class="st-col st-col1">' +                     // තිරස් (landscape) විට: වම් තීරුව
          '<h3 class="st-sec">' + L(TX.lang) + '</h3>' +
          '<div class="st-lang' + (langOpen ? ' open' : '') + '">' +
            '<button type="button" class="st-cur" aria-expanded="' + (langOpen ? 'true' : 'false') + '" aria-controls="stLangList">' +
              '<span class="st-curn" lang="' + cl + '">' + langName(cl) + '</span>' +
              '<svg class="st-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
            '<div class="st-list" id="stLangList"><div class="st-listin">' + others.map(function (k) {
              return '<button type="button" class="st-lo" data-l="' + k + '" lang="' + k + '">' + langName(k) + '</button>';
            }).join('') + '</div></div>' +
          '</div>' +
          '<h3 class="st-sec">' + L(TX.font) + '</h3>' +
          fontBox +
          '<p class="st-note">' + L(TX.fnote) + '</p>' +
          '</div><div class="st-col st-col2">' +              // දකුණු තීරුව
          '<h3 class="st-sec">' + L(TX.theme) + '</h3>' +
          '<div class="st-sub">' + L(TX.light) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.light) + '">' + light.map(swatch).join('') + '</div>' +
          '<div class="st-sub">' + L(TX.deep) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.deep) + '">' + deep.map(swatch).join('') + '</div>' +
          '<div class="st-sub">' + L(TX.bright) + '</div>' +
          '<div class="st-grid" role="radiogroup" aria-label="' + L(TX.bright) + '">' + bright.map(swatch).join('') + '</div>' +
          '</div>' +
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
    var box = ov && ov.querySelector('.st-lang:not(.st-fsel)');
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
    var fo = t.closest('.st-fo');
    if (fo) { pickFont(fo.getAttribute('data-f')); return; }
    if (t.closest('.st-fcur')) { setFontOpen(!fontOpen); return; }
    if (t.closest('.st-cur')) { setLangOpen(!langOpen); return; }
    var lo = t.closest('.st-lo');
    if (lo) { pickLang(lo.getAttribute('data-l'), lo); return; }
  }

  function setFontOpen(open) {
    fontOpen = open;
    var box = ov && ov.querySelector('.st-fsel');
    if (!box) return;
    if (open) {
      FONTS[fontLang()].forEach(function (f) { if (f.fam) fontCss(f); });
      box.querySelectorAll('.st-fs[data-ff]').forEach(function (e) { e.style.fontFamily = e.getAttribute('data-ff'); e.removeAttribute('data-ff'); });
    }
    box.classList.toggle('open', open);
    box.querySelector('.st-fcur').setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function pickFont(id) {
    store('appFont.' + fontLang(), id);
    applyFont();
    if (!ov) return;
    var body = ov.querySelector('.st-body'), y = body ? body.scrollTop : 0;
    fontOpen = false; build();                       // තෝරාගත් අකුරු ඉහළට
    body = ov.querySelector('.st-body'); if (body) body.scrollTop = y;
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
    langOpen = false; fontOpen = false;
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
  doc.addEventListener('DOMContentLoaded', function () {   // භාෂාව මාරු වූ විට එම භාෂාවේ අකුරු
    var o = W.toggleLanguage;
    if (typeof o !== 'function' || o.__uf) return;
    var w = function () { var r = o.apply(this, arguments); try { applyFont(); } catch (e) {} return r; };
    w.__uf = 1; W.toggleLanguage = w;
  });
  W.AppFont = { apply: applyFont, list: FONTS };
  W.openSettings = openSettings;
  W.closeSettings = closeSettings;
})();
