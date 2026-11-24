/* =====================================================================
   calendar.js — දින දර්ශනය (මාසික / වාර්ෂික)
   ---------------------------------------------------------------------
   • ප්‍රධාන පිටුවේ දිනය තෝරන කොටුවට ඉදිරියෙන් ඇති කුඩා 📅 සලකුණෙන් මාසික දර්ශනය විවෘත වේ;
     එහි ඉහළ ▦ සලකුණෙන් වාර්ෂික දර්ශනය (මාසයක් ඔබන විට එම මාසයට).
       openCalendar('month') / openCalendar('year')
   • උපෝසථ දින: පසළොස්වක = කහ, අමාවක = කළු. අද දිනය = වළල්ලක්, තෝරාගත් දිනය = ලා පසුබිම.
   • තාරකා විද්‍යාත්මක පෝය (සැබෑ පූර්ණ / නව චන්ද්‍ර මොහොත) = දිනය වටා කොටුවක් (පසළොස්වක කහ, අමාවක කළු).
   • සිල් සමාදන් වන දින (ශ්‍රී ලංකා පෝය කමිටු ක්‍රමයට ගණනය) = ඉලක්කම වටා ත්‍රිකෝණයක් — silOf() බලන්න.
     ලොව පිළිගත් ක්‍රමය: එම මොහොත (Astronomy Engine) උපාංගයේ දේශීය වේලාවෙන් වැටෙන දින දර්ශන දිනය —
     මොහොතක් නිසා එක් කලාපයක එය සැමවිටම එක් දිනයක් පමණි (මැදියම අසල නම් කලාප අනුව දිනය වෙනස් විය හැක).
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
    full:   { si: 'පසළොස්වක පෝය', en: 'Full-moon Uposatha', hi: 'पूर्णिमा उपोसथ', my: 'လပြည့် ဥပုသ်', th: 'วันพระ จันทร์เต็มดวง', zh: '满月布萨' },
    nw:     { si: 'අමාවක පෝය', en: 'New-moon Uposatha', hi: 'अमावस्या उपोसथ', my: 'လကွယ် ဥပုသ်', th: 'วันพระ จันทร์ดับ', zh: '新月布萨' },
    upo:    { si: 'උපෝසථ දින', en: 'Uposatha days', hi: 'उपोसथ दिवस', my: 'ဥပုသ်နေ့များ', th: 'วันพระ', zh: '布萨日' },
    astro:  { si: 'තාරකා විද්‍යාත්මක පෝය දින', en: 'Astronomical full & new moon', hi: 'खगोलीय पूर्णिमा व अमावस्या', my: 'နက္ခတ္တဗေဒ လပြည့်/လကွယ်', th: 'จันทร์เต็มดวง/จันทร์ดับ ทางดาราศาสตร์', zh: '天文满月与新月' },
    fullS:  { si: 'පසළොස්වක', en: 'Full moon', hi: 'पूर्णिमा', my: 'လပြည့်', th: 'จันทร์เต็มดวง', zh: '满月' },
    newS:   { si: 'අමාවක', en: 'New moon', hi: 'अमावस्या', my: 'လကွယ်', th: 'จันทร์ดับ', zh: '新月' },
    sil:    { si: 'සිල් සමාදන් වන දින', en: 'Sil observance days', hi: 'शील पालन दिवस', my: 'သီလဆောက်တည်ရန်နေ့', th: 'วันถือศีล', zh: '持戒日' },
    silF:   { si: 'සිල් සමාදන් වන දිනය (පසළොස්වක)', en: 'Sil observance day (full moon)', hi: 'शील पालन दिवस (पूर्णिमा)', my: 'သီလဆောက်တည်ရန်နေ့ (လပြည့်)', th: 'วันถือศีล (จันทร์เต็มดวง)', zh: '持戒日（满月）' },
    silN:   { si: 'සිල් සමාදන් වන දිනය (අමාවක)', en: 'Sil observance day (new moon)', hi: 'शील पालन दिवस (अमावस्या)', my: 'သီလဆောက်တည်ရန်နေ့ (လကွယ်)', th: 'วันถือศีล (จันทร์ดับ)', zh: '持戒日（新月）' },
    noteT:  { si: 'සලකුණු පිළිබඳ', en: 'About the marks', hi: 'चिह्नों के बारे में', my: 'အမှတ်အသားများအကြောင်း', th: 'เกี่ยวกับสัญลักษณ์', zh: '标记说明' },
    noteU:  { si: 'උපෝසථ දින — ත්‍රිපිටකය, අටුවා සහ ටීකාවල දැක්වෙන ක්‍රමයට අනුව ගණනය කළ උපෝසථ දින.',
              en: 'Uposatha days — calculated according to the method given in the Tipiṭaka, its Aṭṭhakathā commentaries and Ṭīkā sub-commentaries.',
              hi: 'उपोसथ दिवस — त्रिपिटक, अट्ठकथा और टीका में बताई गई विधि के अनुसार गणना।',
              my: 'ဥပုသ်နေ့ — တိပိဋက၊ အဋ္ဌကထာနှင့် ဋီကာများပါ နည်းလမ်းအတိုင်း တွက်ချက်ထားသည်။',
              th: 'วันอุโบสถ — คำนวณตามวิธีในพระไตรปิฎก อรรถกถา และฎีกา',
              zh: '布萨日——依三藏、义注与复注所载方法推算。' },
    noteA:  { si: 'තාරකා විද්‍යාත්මක පෝය — සඳ හිරුට හරියටම ප්‍රතිවිරුද්ධ (පසළොස්වක) හෝ හිරු දිශාවටම (අමාවක) වන මොහොත (Astronomy Engine); එම මොහොත දුරකථනයේ වේලාවෙන් වැටෙන දිනය.',
              en: 'Astronomical full / new moon — the exact moment the Moon is opposite to (full) or in line with (new) the Sun (Astronomy Engine), on the date that moment falls in your device’s time zone.',
              hi: 'खगोलीय पूर्णिमा / अमावस्या — जिस क्षण चंद्रमा सूर्य के ठीक विपरीत (पूर्णिमा) या उसी दिशा में (अमावस्या) होता है; आपके डिवाइस के समय क्षेत्र में उस क्षण की तिथि।',
              my: 'နက္ခတ္တဗေဒ လပြည့်/လကွယ် — လသည် နေနှင့် တိတိကျကျ ဆန့်ကျင်ဘက် (လပြည့်) သို့မဟုတ် တစ်တန်းတည်း (လကွယ်) ဖြစ်သည့်အချိန်၏ သင့်ဖုန်းအချိန်ဇုန်ရှိ ရက်။',
              th: 'จันทร์เต็มดวง/จันทร์ดับทางดาราศาสตร์ — ขณะที่ดวงจันทร์อยู่ตรงข้าม (เต็มดวง) หรืออยู่แนวเดียวกับดวงอาทิตย์ (ดับ) พอดี ตามวันที่ในเขตเวลาของอุปกรณ์',
              zh: '天文满月／新月——月亮与太阳恰好相对（满月）或同向（新月）的时刻，按您设备时区所在的日期。' },
    noteS:  { si: 'සිල් සමාදන් වන දින — ශ්‍රී ලංකා පෝය කමිටුව භාවිත කරන ක්‍රමයට ගණනය කළ දින: පසළොස්වක / අමාවක තිථිය ලංකා වේලාවෙන් සවස 6 ට පවතින දිනය (සවස 6 දෙකකට දිව යයි නම් පළමු දිනය; කිසිදු සවස 6 කට නොවැටේ නම් තිථිය අවසන් වන දිනය).',
              en: 'Sil observance days — calculated by the method used by Sri Lanka’s Poya Committee: the day on which the full- / new-moon tithi is current at 6 PM Sri Lanka time (if it covers two 6 PMs, the first; if none, the day the tithi ends).',
              hi: 'शील पालन दिवस — श्रीलंका की पोया समिति की विधि से गणना: जिस दिन श्रीलंका समय शाम 6 बजे पूर्णिमा / अमावस्या तिथि रहती है (दो बार हो तो पहला दिन; एक बार भी न हो तो तिथि समाप्ति का दिन)।',
              my: 'သီလဆောက်တည်ရန်နေ့ — သီရိလင်္ကာ ပိုယာကော်မတီ၏ နည်းဖြင့် တွက်ချက်သည်- သီရိလင်္ကာ ညနေ ၆ နာရီတွင် လပြည့်/လကွယ် တိထိ ရှိနေသည့်နေ့ (ညနေ ၆ နာရီ နှစ်ကြိမ်ဆိုလျှင် ပထမနေ့၊ မရှိလျှင် တိထိ ပြီးဆုံးသည့်နေ့)။',
              th: 'วันถือศีล — คำนวณตามวิธีของคณะกรรมการโปยาแห่งศรีลังกา: วันที่ดิถีเพ็ญ/ดับยังคงอยู่เวลา 18:00 น. ตามเวลาศรีลังกา (ถ้าครอบคลุมสองวัน ใช้วันแรก ถ้าไม่ครอบคลุมเลย ใช้วันที่ดิถีสิ้นสุด)',
              zh: '持戒日——按斯里兰卡布萨（Poya）委员会的方法推算：斯里兰卡时间下午6时满月／新月提提（tithi）所在之日（跨两个下午6时取第一天；一个也不跨则取提提结束之日）。' },
    noteD:  { si: 'මෙම ක්‍රම තුන එකිනෙකට වෙනස් නිසා දින එකිනෙකට දවසකින් පමණ වෙනස් විය හැක. සිල් සමාදන් වන දින ගණනය කිරීමෙන් ලබාගන්නා බැවින්, පෝය කමිටුවේ තීරණය අනුව ඇතැම් විට වෙනස් විය හැක — නිල දින දර්ශනයද බලන්න.',
              en: 'Because the three methods differ, their dates can differ by about a day. Sil observance days are calculated, so they may occasionally differ from the Poya Committee’s decision — please also check the official calendar.',
              hi: 'तीनों विधियाँ भिन्न हैं, इसलिए तिथियाँ लगभग एक दिन आगे-पीछे हो सकती हैं। शील पालन दिवस गणना से निकाले गए हैं, अतः पोया समिति के निर्णय से कभी-कभी भिन्न हो सकते हैं — आधिकारिक कैलेंडर भी देखें।',
              my: 'နည်းလမ်းသုံးမျိုး ကွဲပြားသဖြင့် ရက်များ တစ်ရက်ခန့် ကွာနိုင်သည်။ သီလနေ့များကို တွက်ချက်၍ ရယူထားသဖြင့် ပိုယာကော်မတီ၏ ဆုံးဖြတ်ချက်နှင့် တစ်ခါတစ်ရံ ကွဲလွဲနိုင်သည် — တရားဝင်ပြက္ခဒိန်ကိုလည်း ကြည့်ပါ။',
              th: 'เนื่องจากทั้งสามวิธีต่างกัน วันที่จึงอาจคลาดกันราวหนึ่งวัน วันถือศีลได้จากการคำนวณ จึงอาจต่างจากมติของคณะกรรมการโปยาบ้างในบางครั้ง — โปรดตรวจสอบปฏิทินทางการด้วย',
              zh: '三种方法各不相同，日期可能相差约一天。持戒日由推算得出，偶尔可能与布萨委员会的决定不同——请同时参阅官方日历。' },
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

  /* ---- තාරකා විද්‍යාත්මක පෝය: { 'YYYY-MM-DD': { k: 'full' | 'new', t: Date } } ----
     සැබෑ පූර්ණ / නව චන්ද්‍ර මොහොත (Astronomy Engine, SearchMoonQuarter). දිනය = එම මොහොත
     උපාංගයේ දේශීය වේලාවෙන් වැටෙන දිනය (ලොව පිළිගත් ක්‍රමය — timeanddate, USNO, ජාතික පංචාංග ආදිය). */
  var AC = {};
  function astroOf(y) {
    if (AC[y]) return AC[y];
    var out = {};
    try {
      var A = W.Astronomy;
      if (!A) return out;                       // astronomy.js තවම load වී නැත — cache නොකර නැවත උත්සාහ කරයි
      var mq = A.SearchMoonQuarter(new Date(y - 1, 11, 20)), end = new Date(y + 1, 0, 10), g = 0;
      while (mq && mq.time.date < end && g++ < 80) {
        if (mq.quarter === 0 || mq.quarter === 2) {
          var dt = mq.time.date;
          if (dt.getFullYear() === y) out[iso(y, dt.getMonth(), dt.getDate())] = { k: mq.quarter === 2 ? 'full' : 'new', t: dt };
        }
        mq = A.NextMoonQuarter(mq);
      }
    } catch (e) { return out; }
    AC[y] = out;
    return out;
  }
  /* ---- සිල් සමාදන් වන දින: { 'YYYY-MM-DD' (ලංකා දිනය): 'full' | 'new' } ----
     ශ්‍රී ලංකා පෝය කමිටු ක්‍රමය (2003–2026 නිල පෝය දින 295 න් 294 ක් සමඟ ගැළපේ — script.js updateSunTimes හි එම රීතියමයි):
       1. පසළොස්වක (168°–180°) / අමාවක (348°–360°) තිථිය ලංකා වේලාවෙන් සවස 6 ට පවතින දිනය;
       2. සවස 6 දෙකක් හරහා දිව යයි නම් පළමු දිනය; 3. කිසිදු සවස 6 ක් නැත්නම් (ක්ෂය) තිථිය අවසන් වන දිනය. */
  var SC = {}, SLO = 5.5 * 3600e3;
  function slISO(t) { return new Date(t + SLO).toISOString().slice(0, 10); }
  function six(isoD) { return Date.parse(isoD + 'T18:00:00Z') - SLO; }
  function silOf(y) {
    if (SC[y]) return SC[y];
    var out = {}, A = W.Astronomy;
    if (!A) return out;
    try {
      [[180, 168, 'full'], [0, 348, 'new']].forEach(function (q) {
        var t = A.MakeTime(new Date(Date.UTC(y - 1, 11, 15))), g = 0;
        while (g++ < 16) {
          var ev = A.SearchMoonPhase(q[0], t, 40); if (!ev) break;
          var end = ev.date.getTime(); if (end > Date.UTC(y + 1, 0, 20)) break;
          var bg = A.SearchMoonPhase(q[1], A.MakeTime(new Date(end - 3 * 864e5)), 4), st = bg ? bg.date.getTime() : end - 864e5;
          var day = null, d0 = slISO(st);
          for (var k = 0; k < 3 && !day; k++) { var dk = slISO(Date.parse(d0 + 'T12:00:00Z') + k * 864e5 - SLO), t6 = six(dk); if (t6 >= st - 60e3 && t6 < end) day = dk; }
          day = day || slISO(end);
          if (+day.slice(0, 4) === y) out[day] = q[2];
          t = A.MakeTime(new Date(end + 20 * 864e5));
        }
      });
    } catch (e) { return out; }
    SC[y] = out;
    return out;
  }
  var TRI = '<svg class="cl-tri" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon class="h" points="50,4 3,96 97,96"/><polygon class="l" points="50,4 3,96 97,96"/></svg>';

  function hm(dt) { return p2(dt.getHours()) + ':' + p2(dt.getMinutes()); }

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
#calOverlay .cl-d.af::before,#calOverlay .cl-d.an::before{content:"";position:absolute;inset:-3px;border:2.5px solid #f2b705;border-radius:11px;pointer-events:none}\
#calOverlay .cl-d.an::before{border-color:#1a1a1a}\
html.theme-dark #calOverlay .cl-d.an::before{border-color:#e6e6e6}\
#calOverlay .cl-d.tdy.af,#calOverlay .cl-d.tdy.an{outline-width:2.5px;outline-offset:-5px}\
#calOverlay .cl-m.af::before,#calOverlay .cl-m.an::before{content:"";position:absolute;inset:-1px;border:1.6px solid #f2b705;border-radius:5px;pointer-events:none}\
#calOverlay .cl-m.an::before{border-color:#1a1a1a}\
html.theme-dark #calOverlay .cl-m.an::before{border-color:#e6e6e6}\
#calOverlay .cl-tri{position:absolute;left:-5px;right:-5px;top:-7px;bottom:-3px;width:calc(100% + 10px);height:calc(100% + 10px);pointer-events:none;overflow:visible;z-index:1}\
#calOverlay .cl-tri polygon{fill:none;stroke-linejoin:round;vector-effect:non-scaling-stroke}\
#calOverlay .cl-tri .h{stroke:var(--t-card,#fffdf6);stroke-width:5}\
#calOverlay .cl-tri .l{stroke:#1e63d6;stroke-width:2.4}\
html.theme-dark #calOverlay .cl-tri .h{stroke:#000}\
html.theme-dark #calOverlay .cl-tri .l{stroke:#8fbaff}\
#calOverlay .cl-d .dn,#calOverlay .cl-m .dn{position:relative;z-index:2}\
#calOverlay .cl-d.sil .dn{transform:translateY(3px)}\
#calOverlay .cl-m .cl-tri{left:-2px;right:-2px;top:-3px;bottom:-1px;width:calc(100% + 4px);height:calc(100% + 4px)}\
#calOverlay .cl-m .cl-tri .h{stroke-width:3}#calOverlay .cl-m .cl-tri .l{stroke-width:1.5}\
#calOverlay .cl-m.sil .dn{transform:translateY(1.5px)}\
#calOverlay .cl-lg i.sil{width:18px;height:17px;border-radius:0;background:none;position:relative}\
#calOverlay .cl-lg i.sil .cl-tri{left:0;top:0;width:100%;height:100%}\
#calOverlay .cl-note{margin-top:12px;padding:10px 12px;border-radius:12px;background:var(--t-elev,#fdf9f0);border:1px solid var(--t-bd,#eed8ab);font-size:.74rem;line-height:1.6;color:var(--t-mu,#816741)}\
#calOverlay .cl-note b{display:block;font-size:.8rem;color:var(--t-ac2,#6b4410);margin-bottom:4px}\
html.theme-dark #calOverlay .cl-note b{color:var(--t-ac,#f2d478)}\
#calOverlay .cl-note p{margin:0 0 5px;display:flex;gap:7px}#calOverlay .cl-note p:last-child{margin:0}\
#calOverlay .cl-note p i{flex:none;width:14px;height:14px;margin-top:3px;display:inline-block;position:relative}\
#calOverlay .cl-note i.u{border-radius:50%;background:#f7c948;box-shadow:inset 0 0 0 2px #e0a800}\
#calOverlay .cl-note i.a{border-radius:4px;border:2.2px solid #f2b705}\
#calOverlay .cl-note i.s .cl-tri{left:0;top:0;width:100%;height:100%}\
#calOverlay .cl-note i.x{width:0}\
#calOverlay .cl-d.tdy::after{content:"";position:absolute;bottom:4px;left:50%;width:5px;height:5px;margin-left:-2.5px;border-radius:50%;background:currentColor}\
#calOverlay .cl-foot{display:flex;flex-wrap:wrap;align-items:flex-end;gap:10px 18px;margin-top:12px;padding-top:10px;border-top:1px solid var(--t-bd,#eed8ab);font-size:.8rem;color:var(--t-mu,#816741)}\
#calOverlay .cl-lg{display:inline-flex;align-items:center;gap:6px}\
#calOverlay .cl-lgg{display:flex;flex-direction:column;gap:5px}\
#calOverlay .cl-lgt{font-weight:800;font-size:.76rem;color:var(--t-ac2,#6b4410)}\
html.theme-dark #calOverlay .cl-lgt{color:var(--t-ac,#f2d478)}\
#calOverlay .cl-lgr{display:flex;flex-wrap:wrap;gap:4px 12px}\
#calOverlay .cl-lg i.af,#calOverlay .cl-lg i.an{width:17px;height:17px;border-radius:5px;border:2.5px solid #f2b705;background:transparent}\
#calOverlay .cl-lg i.an{border-color:#1a1a1a}\
html.theme-dark #calOverlay .cl-lg i.an{border-color:#e6e6e6}\
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
#calOverlay .cl-m{position:relative;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:.68rem;font-weight:700;color:var(--t-tx,#2b1b08)}\
#calOverlay .cl-m.su{color:#c62828}\
html.theme-dark #calOverlay .cl-m.su{color:#ff8a80}\
#calOverlay .cl-m.tdy{outline-width:2px;outline-offset:0}\
@keyframes clU{from{transform:translate(-50%,24px);opacity:.4}to{transform:translate(-50%,0);opacity:1}}\
@keyframes clF{from{opacity:0}to{opacity:1}}\
@media (prefers-reduced-motion:reduce){#calOverlay .cl-sheet,#calOverlay .cl-bg{animation:none}}\
@media (min-width:600px){#calOverlay .cl-yr{grid-template-columns:repeat(3,minmax(0,1fr))}}\
@media (orientation:landscape) and (max-height:600px){#calOverlay .cl-sheet{top:8px;width:min(760px,calc(100% - 20px));max-height:calc(100% - 16px)}\
#calOverlay .cl-yr{grid-template-columns:repeat(4,minmax(0,1fr))}#calOverlay .cl-d{max-width:34px;font-size:.9rem}#calOverlay .cl-grid{gap:2px}}\
/* ප්‍රධාන පිටුවේ කුඩා දින දර්ශන බොත්තම (දිනය තෝරන කොටුව අසලින්) */\
.date-row .cal-ico{flex:none;width:48px;height:48px;margin-right:auto;border-radius:12px;border:1px solid var(--t-in-bd,#c8991f);background:var(--t-in-bg,linear-gradient(180deg,#fffaf0,#f4e6c4));color:var(--t-in-tx,#4a2d0a);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;box-shadow:0 1px 0 rgba(255,255,255,.6)}\
.date-row .cal-ico svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\
.date-row .cal-ico:active{transform:scale(.94)}\
body.dark-mode .date-row .cal-ico{background:var(--t-in-bg,rgba(255,255,255,.07));border-color:var(--t-in-bd,rgba(242,212,120,.4));color:var(--t-in-tx,#f2d478)}';

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
    return '<div class="cl-foot">' +
      '<div class="cl-lgg"><span class="cl-lgt">' + esc(L(TX.upo)) + '</span><div class="cl-lgr">' +
        '<span class="cl-lg"><i class="full"></i>' + esc(L(TX.fullS)) + '</span>' +
        '<span class="cl-lg"><i class="new"></i>' + esc(L(TX.newS)) + '</span></div></div>' +
      '<div class="cl-lgg"><span class="cl-lgt">' + esc(L(TX.astro)) + '</span><div class="cl-lgr">' +
        '<span class="cl-lg"><i class="af"></i>' + esc(L(TX.fullS)) + '</span>' +
        '<span class="cl-lg"><i class="an"></i>' + esc(L(TX.newS)) + '</span></div></div>' +
      '<span class="cl-lg"><i class="sil">' + TRI + '</i>' + esc(L(TX.sil)) + '</span>' +
      '<span class="cl-lg"><i class="tdy"></i>' + esc(L(TX.today)) + '</span>' +
      '<button type="button" class="cl-today" data-today="1">' + esc(L(TX.today)) + '</button></div>';
  }

  function noteHtml() {     // මාසික දර්ශනයට යටින් — සලකුණු තුනේ වෙනස
    return '<div class="cl-note"><b>' + esc(L(TX.noteT)) + '</b>' +
      '<p><i class="u"></i><span>' + esc(L(TX.noteU)) + '</span></p>' +
      '<p><i class="a"></i><span>' + esc(L(TX.noteA)) + '</span></p>' +
      '<p><i class="s">' + TRI + '</i><span>' + esc(L(TX.noteS)) + '</span></p>' +
      '<p><i class="x"></i><span>' + esc(L(TX.noteD)) + '</span></p></div>';
  }

  function monthHtml() {
    var sm = silOf(Y), pm = poyaOf(Y), am = astroOf(Y), td = todayISO(), sel = mainISO(), wd = wdNames();
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
      var a = am[s];
      if (a) c += a.k === 'full' ? ' af' : ' an';
      var sv = sm[s];
      if (sv) c += ' sil';
      if (s === td) c += ' tdy';
      if (s === sel && !k) c += ' sel';
      var t = k ? L(k === 'full' ? TX.full : TX.nw) : '';
      if (a) t += (t ? ' · ' : '') + L(TX.astro) + ': ' + L(a.k === 'full' ? TX.fullS : TX.newS) + ' ' + hm(a.t);
      if (sv) t += (t ? ' · ' : '') + L(sv === 'full' ? TX.silF : TX.silN);
      h += '<button type="button" class="' + c + '" data-d="' + s + '"' + (t ? ' title="' + esc(t) + '"' : '') + ' aria-label="' + esc(d + ' ' + monName(Y, M) + (t ? ' — ' + t : '')) + '">' + (sv ? TRI : '') + '<span class="dn">' + d + '</span></button>';
    }
    return h + '</div>' + foot() + noteHtml();
  }

  function yearHtml() {
    var sm = silOf(Y), pm = poyaOf(Y), am = astroOf(Y), td = todayISO(), wd = wdMini(), cm = new Date().getFullYear() === Y ? new Date().getMonth() : -1;
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
        if (am[s]) c += am[s].k === 'full' ? ' af' : ' an';
        if (sm[s]) c += ' sil';
        if (s === td) c += ' tdy';
        h += '<span class="' + c + '">' + (sm[s] ? TRI + '<span class="dn">' + d + '</span>' : d) + '</span>';
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

  /* ---- ප්‍රධාන පිටුවේ කුඩා දින දර්ශන සලකුණ (දිනය තෝරන කොටුවට ඉදිරියෙන්) → මාසික දර්ශනය;
         වාර්ෂික දර්ශනය එහි ඉහළ ▦ සලකුණෙන් ---- */
  function labelButtons() {
    var b = doc.getElementById('calBtn');
    if (b) { b.setAttribute('aria-label', L(TX.month)); b.title = L(TX.month); }
  }
  function addButtons() {
    injectCss();
    if (doc.getElementById('calBtn')) { labelButtons(); return; }
    var box = doc.querySelector('.date-section-wrapper .date-row .custom-date-container');
    if (!box) return;
    var b = doc.createElement('button');
    b.type = 'button'; b.className = 'cal-ico'; b.id = 'calBtn'; b.innerHTML = IC.cal;
    box.parentNode.insertBefore(b, box.nextSibling);
    b.addEventListener('click', function () { W.openCalendar('month'); });
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
