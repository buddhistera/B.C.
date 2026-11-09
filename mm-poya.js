/* =====================================================================
   mm-poya.js — මියන්මාර් (බුරුම) උපෝසථ දින (1900 – 3000)
   ---------------------------------------------------------------------
   • මියන්මාර් දින දර්ශනයේ නිල ගණනය කිරීමේ ක්‍රමය: Dr. Yan Naing Aye (Cool Emerald),
     "Myanmar Calendrical Calculations" — CC BY 4.0  (https://yan9a.github.io/mcal/)
     ඒ ඇල්ගොරිතමය (watat / full moon / month day) මෙහි සංක්ෂිප්තව යොදා ඇත.
   • පසළොස්වක = waxing 15 (mp=1),  අමාවක = මාසයේ අවසන් දිනය (waning 14/15, mp=3).
   • පරීක්ෂාව: 2026–2035 සඳහා ලබාදුන් මියන්මාර් සටහනේ පෝය 239 ම හරියටම ගැළපේ;
     1900–3000 දින 402,132 ම ප්‍රකාශිත "myanmar-calendar" පැකේජය සමඟ ගැළපේ.
   • ප්‍රතිඵලය script.js හි poyaList ආකෘතියමයි: { d:'YYYY-MM-DD', r:සෘතුව, t:පසළොස්වක/අමාවක, m:මාසය }
       සෘතු:  වස්සාන = (දෙවන) වාසෝ පසළොස්වකට පසු පෝය 8  ·  හේමන්ත = පෝය 8
              ගිම්හාන = පෝය 8 (watat / අධික වර්ෂයේ 10)
       මාස නාම පසළොස්වකින් අවසන් වන මාසයට අනුව (ශ්‍රී ලංකා ලැයිස්තුවේ ආකාරයටම).
       අධික වර්ෂයේ: පළමු වාසෝ = "පඨමාසාළ්හ" (ပဌမဝါဆို),  දෙවන වාසෝ = "දුතියාසාළ්හ" (ဒုတိယဝါဆို).
   ===================================================================== */
(function (root) {
  'use strict';
  var SY = 1577917828 / 4320000,     // සූර්ය වර්ෂය (365.2587565)
      LM = 1577917828 / 53433336,    // චාන්ද්‍ර මාසය (29.53058795)
      MO = 1954168.050623;           // ME 0 ආරම්භය (JDN)
  /* යුග: begin = ආරම්භක මියන්මාර් වර්ෂය; fme = පසළොස්වක ව්‍යතිරේක; wte = watat ව්‍යතිරේක */
  var ERAS = [
    { eid: 1.1, begin: -999, WO: -1.1, NM: -1, fme: [[205, 1], [246, 1], [471, 1], [572, -1], [651, 1], [653, 2], [656, 1], [672, 1], [729, 1], [767, -1]], wte: [] },
    { eid: 1.2, begin: 798, WO: -1.1, NM: -1, fme: [[813, -1], [849, -1], [851, -1], [854, -1], [927, -1], [933, -1], [936, -1], [938, -1], [949, -1], [952, -1], [963, -1], [968, -1], [1039, -1]], wte: [] },
    { eid: 1.3, begin: 1100, WO: -0.85, NM: -1, fme: [[1120, 1], [1126, -1], [1150, 1], [1172, -1], [1207, 1]], wte: [[1201, 1], [1202, 0]] },
    { eid: 2, begin: 1217, WO: -1, NM: 4, fme: [[1234, 1], [1261, -1]], wte: [[1263, 1], [1264, 0]] },
    { eid: 3, begin: 1312, WO: -0.5, NM: 8, fme: [[1377, 1]], wte: [[1344, 1], [1345, 0]] }
  ];
  function find(k, A) { for (var i = 0; i < A.length; i++) if (A[i][0] === k) return i; return -1; }

  var _wc = {}, _yc = {};
  function chkWatat(my) {                      // { fm: (දෙවන) වාසෝ පසළොස්වක JDN, watat: 0/1 }
    if (_wc[my]) return _wc[my];
    for (var i = ERAS.length - 1; i > 0; i--) if (my >= ERAS[i].begin) break;
    var e = ERAS[i], TA = (SY / 12 - LM) * (12 - e.NM), ed = (SY * (my + 3739)) % LM;
    if (ed < TA) ed += LM;
    var fm = Math.round(SY * my + MO - ed + 4.5 * LM + e.WO), watat = 0;
    if (e.eid >= 2) { if (ed >= LM - (SY / 12 - LM) * e.NM) watat = 1; }
    else { watat = (my * 7 + 2) % 19; if (watat < 0) watat += 19; watat = Math.floor(watat / 12); }
    i = find(my, e.wte); if (i >= 0) watat = e.wte[i][1];
    if (watat) { i = find(my, e.fme); if (i >= 0) fm += e.fme[i][1]; }
    return (_wc[my] = { fm: fm, watat: watat });
  }
  function chkMy(my) {                         // { myt: 0 සාමාන්‍ය / 1 කුඩා watat / 2 විශාල watat, tg1: තගු 1 JDN }
    if (_yc[my]) return _yc[my];
    var yd = 0, y1, y2 = chkWatat(my), myt = y2.watat;
    do { yd++; y1 = chkWatat(my - yd); } while (y1.watat === 0 && yd < 3);
    if (myt) myt = Math.floor(((y2.fm - y1.fm) % 354) / 31) + 1;
    return (_yc[my] = { myt: myt, tg1: y1.fm + 354 * yd - 102 });
  }
  /* JDN → මියන්මාර් දිනය:  mm = මාසය [තගු=1 … තපෝං=12, පළමු වාසෝ=0, (දෙවන) වාසෝ=4], md = මාසයේ දිනය, mml = මාස දිග,
     mp = [0 පුර, 1 පසළොස්වක, 2 අව, 3 අමාවක] */
  function j2m(jdn) {
    var my = Math.floor((jdn - 0.5 - MO) / SY), yo = chkMy(my), dd = jdn - yo.tg1 + 1;
    var b = Math.floor(yo.myt / 2), c = Math.floor(1 / (yo.myt + 1)), myl = 354 + (1 - c) * 30 + b;
    dd -= Math.floor((dd - 1) / myl) * myl;
    var a = Math.floor((dd + 423) / 512), mm = Math.floor((dd - b * a + c * a * 30 + 29.26) / 29.544);
    var e = Math.floor((mm + 12) / 16), f = Math.floor((mm + 11) / 16);
    var md = dd - Math.floor(29.544 * mm - 29.26) - b * e + c * f * 30;
    mm += f * 3 - e * 4;
    var mml = 30 - mm % 2; if (mm === 3) mml += b;
    var mp = Math.floor((md + 1) / 16) + Math.floor(md / 16) + Math.floor(md / mml);
    return { my: my, myt: yo.myt, mm: mm, md: md, mml: mml, mp: mp };
  }
  /* ග්‍රෙගරියානු ↔ JDN (1900–3000 සඳහා ග්‍රෙගරියානු පමණි) */
  function w2j(y, m, d) { var a = Math.floor((14 - m) / 12); y = y + 4800 - a; m = m + 12 * a - 3; return d + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045; }
  function j2iso(jdn) {
    var j = jdn - 1721119, y = Math.floor((4 * j - 1) / 146097); j = 4 * j - 1 - 146097 * y;
    var d = Math.floor(j / 4); j = Math.floor((4 * d + 3) / 1461); d = 4 * d + 3 - 1461 * j; d = Math.floor((d + 4) / 4);
    var m = Math.floor((5 * d - 3) / 153); d = 5 * d - 3 - 153 * m; d = Math.floor((d + 5) / 5); y = 100 * y + j;
    if (m < 10) m += 3; else { m -= 9; y++; }
    return y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
  }
  function iso2j(s) { var a = s.split('-'); return w2j(+a[0], +a[1], +a[2]); }

  /* මියන්මාර් මාසය → පාළි මාස නාමය (සිංහල අකුරින්, script.js හි MONTH_CYCLE_SINHALA ආකාරයටම) */
  var PALI = { 1: 'චිත්ත', 2: 'වේසාඛ', 3: 'ජෙට්ඨ', 4: 'ආසාළ්හ', 5: 'සාවන', 6: 'පොට්ඨපාද', 7: 'අස්සයුජ', 8: 'කත්තික', 9: 'මාඝසිර', 10: 'ඵුස්ස', 11: 'මාඝ', 12: 'ඵග්ගුන' };
  var MM_NAMES = ['ပဌမဝါဆို', 'တန်ခူး', 'ကဆုန်', 'နယုန်', 'ဝါဆို', 'ဝါခေါင်', 'တော်သလင်း', 'သီတင်းကျွတ်', 'တန်ဆောင်မုန်း', 'နတ်တော်', 'ပြာသို', 'တပို့တွဲ', 'တပေါင်း'];
  function monthLabel(mm, watat) { return mm === 0 ? 'පඨමාසාළ්හ' : (mm === 4 && watat) ? 'දුතියාසාළ්හ' : PALI[mm]; }
  function season(mm) { return (mm >= 5 && mm <= 8) ? 'වස්සාන' : (mm >= 9) ? 'හේමන්ත' : 'ගිම්හාන'; }

  /* JDN දිනයේ පෝයක් නම් ඇතුළත් කිරීම: පසළොස්වක → එම මාසය; අමාවක → ඊළඟ (පසළොස්වකින් අවසන් වන) මාසය */
  function entry(jdn, m) {
    var full = m.mp === 1, L = m.mm, w = m.myt > 0;
    if (!full) L = (L === 12) ? 1 : (L === 3) ? (w ? 0 : 4) : (L === 0) ? 4 : L + 1;
    return { d: j2iso(jdn), r: season(L), t: full ? 'පසළොස්වක' : 'අමාවක', m: monthLabel(L, w), mmM: L, mmW: w ? 1 : 0 };
  }

  /* list (දිනය අනුව) අවසානයේ සිට uptoYear දෙසැම්බර් 31 දක්වා පෝය එක් කරයි.
     පෝයකින් පසු ඊළඟ පෝය දිනයට කෙලින්ම පනී (දිනකට ඇමතුම් ~2 පමණි). */
  function extend(list, uptoYear, startIso) {
    var end = w2j(uptoYear, 12, 31), j = list.length ? iso2j(list[list.length - 1].d) + 1 : iso2j(startIso || '1899-01-01');
    while (j <= end) {
      var m = j2m(j);
      if (m.mp === 1 || m.mp === 3) { list.push(entry(j, m)); j += 13; continue; }
      var go = (m.md < 15) ? 15 - m.md : m.mml - m.md;
      j += go > 0 ? go : 1;
    }
    return list;
  }

  root.MMPoya = { extend: extend, j2m: j2m, w2j: w2j, j2iso: j2iso, iso2j: iso2j, MM_NAMES: MM_NAMES,
    myanmarDate: function (iso) { var m = j2m(iso2j(iso)); m.name = MM_NAMES[m.mm]; return m; } };
})(typeof window !== 'undefined' ? window : this);
