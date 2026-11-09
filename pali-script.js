/* =====================================================================
   pali-script.js — පාළි අක්ෂරාන්තරීකරණය (Pali transliteration)
   ---------------------------------------------------------------------
   • මධ්‍යස්ථ (hub) ආකෘතිය: රෝම / IAST පාළිය (data ගොනුවල `translit`).
   • IAST  →  ඕනෑම අක්ෂර මාලාවක්   :  PaliScript.fromIAST(text, 'deva')
     අක්ෂර මාලාවක්  →  IAST         :  PaliScript.toIAST(text, 'sinh')
     අක්ෂර මාලා දෙකක් අතර           :  PaliScript.convert(text, 'sinh', 'deva')
   • මෙය "පරිවර්තනය" (අර්ථය) නොවේ — එකම පාළි ශබ්දය වෙනත් අකුරු වලින් ලිවීම පමණි.
   • නව අක්ෂර මාලාවක් (Myanmar, Thai, Khmer, Bengali ...) එක් කිරීමට SCRIPTS
     වස්තුවට එක් වගුවක් (පේළි 10ක් පමණ) එක් කළ හැකිය; ඉතිරි කේතය වෙනස් නොවේ.
   ===================================================================== */
(function (root) {
  'use strict';

  /* IAST ශබ්ද අනුපිළිවෙළ — සෑම වගුවකම එකම පිළිවෙළ */
  var VOW = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'e', 'o', 'ṛ'];        /* ṛ ś ṣ = සංස්කෘත වචන සඳහා පමණි */
  var CON = ['k', 'kh', 'g', 'gh', 'ṅ', 'c', 'ch', 'j', 'jh', 'ñ', 'ṭ', 'ṭh', 'ḍ', 'ḍh', 'ṇ',
             't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 's', 'h', 'ḷ', 'ś', 'ṣ'];

  var SCRIPTS = {
    /* දේවනාගරී (හින්දි) */
    deva: {
      vow:  ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ओ', 'ऋ'],
      sign: ['',  'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ो', 'ृ'],
      con:  ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण',
             'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'स', 'ह', 'ळ', 'श', 'ष'],
      virama: '्', nigg: 'ं'
    },
    /* සිංහල — පාළියේ එ/ඔ සැමවිටම කෙටි අකුරින් (ෙ / ො); ය, ර බැඳීමට ZWJ */
    sinh: {
      vow:  ['අ', 'ආ', 'ඉ', 'ඊ', 'උ', 'ඌ', 'එ', 'ඔ', 'ඍ'],
      sign: ['',  'ා', 'ි', 'ී', 'ු', 'ූ', 'ෙ', 'ො', 'ෘ'],
      con:  ['ක', 'ඛ', 'ග', 'ඝ', 'ඞ', 'ච', 'ඡ', 'ජ', 'ඣ', 'ඤ', 'ට', 'ඨ', 'ඩ', 'ඪ', 'ණ',
             'ත', 'ථ', 'ද', 'ධ', 'න', 'ප', 'ඵ', 'බ', 'භ', 'ම', 'ය', 'ර', 'ල', 'ව', 'ස', 'හ', 'ළ', 'ශ', 'ෂ'],
      virama: '්', nigg: 'ං',
      join: { 'ය': 1, 'ර': 1 },                     /* ්‍ය  ්‍ර */
      alias: { 'ඒ': 'එ', 'ඕ': 'ඔ', 'ේ': 'ෙ', 'ෝ': 'ො', 'ඟ': 'ඞ', 'ං': 'ං' }
    }
  };

  var ZWJ = '‍', ZWNJ = '‌';
  var ASP = { k: 1, g: 1, c: 1, j: 1, 'ṭ': 1, 'ḍ': 1, t: 1, d: 1, p: 1, b: 1 };
  var VI = {}, CI = {};
  VOW.forEach(function (v, i) { VI[v] = i; });
  CON.forEach(function (c, i) { CI[c] = i; });

  /* ------------------------- IAST → බුරුම (මියන්මාර් පාළි) -------------------------
     මියන්මාර් පාළි ලේඛන රීති (ඡට්ඨ සංගායනා ආකාරය):
       • සංයුක්ත අකුරු ් (U+1039) මගින් එක යට එක:  dhamma → ဓမ္မ,  dukkha → ဒုက္ခ
       • ṅ + ව්‍යඤ්ජන = කින්සි (င်္):  saṅgha → သင်္ဃ
       • ññ → ည (paññā → ပညာ),  ss → ဿ (assa → အဿ)
       • ය / ර / ව / හ (නාසික්‍ය හා අර්ධ ස්වර පසු) = මධ්‍ය සලකුණු ျ ြ ွ ှ  (tvaṃ → တွံ, amhākaṃ → အမှာကံ)
       • ā / o: ခ ဂ င ဒ ပ ဝ පසු දිගු ါ / ေါ (යට එබූ අකුරකට නොවේ: svākkhāto → သွာက္ခာတော)
       • වචනය අවසානයේ ස්වර රහිත ව්‍යඤ්ජනය = ် (asat) */
  var MY = {
    con: { k: 'က', kh: 'ခ', g: 'ဂ', gh: 'ဃ', 'ṅ': 'င', c: 'စ', ch: 'ဆ', j: 'ဇ', jh: 'ဈ', 'ñ': 'ဉ', 'ṭ': 'ဋ', 'ṭh': 'ဌ', 'ḍ': 'ဍ', 'ḍh': 'ဎ', 'ṇ': 'ဏ',
           t: 'တ', th: 'ထ', d: 'ဒ', dh: 'ဓ', n: 'န', p: 'ပ', ph: 'ဖ', b: 'ဗ', bh: 'ဘ', m: 'မ', y: 'ယ', r: 'ရ', l: 'လ', v: 'ဝ', s: 'သ', h: 'ဟ', 'ḷ': 'ဠ', 'ś': 'သ', 'ṣ': 'သ' },
    vow: { a: 'အ', 'ā': 'အာ', i: 'ဣ', 'ī': 'ဤ', u: 'ဥ', 'ū': 'ဦ', e: 'ဧ', o: 'ဩ', 'ṛ': 'ရိ' },
    sign: { a: '', 'ā': 'ာ', i: 'ိ', 'ī': 'ီ', u: 'ု', 'ū': 'ူ', e: 'ေ', o: 'ော', 'ṛ': 'ြိ' },
    tall: { 'ခ': 1, 'ဂ': 1, 'င': 1, 'ဒ': 1, 'ပ': 1, 'ဝ': 1 },
    medialH: { 'ñ': 1, 'ṇ': 1, n: 1, m: 1, y: 1, l: 1, v: 1, 'ḷ': 1, r: 1 }
  };
  function toMymr(text) {
    var s = String(text).normalize('NFC').replace(/ṁ/g, 'ṃ').replace(/Ṁ/g, 'Ṃ').replace(/ē/g, 'e').replace(/Ē/g, 'E').replace(/ō/g, 'o').replace(/Ō/g, 'O');
    var out = '', i = 0, n = s.length;
    function conAt(k) {                                   // k ස්ථානයේ ව්‍යඤ්ජනය (මහාප්‍රාණ ද ඇතුළුව) හෝ null
      var ch = s.charAt(k).toLowerCase(), nx = s.charAt(k + 1).toLowerCase();
      if (MY.con[ch] == null) return null;
      return (nx === 'h' && ASP[ch]) ? ch + 'h' : ch;
    }
    while (i < n) {
      var c0 = conAt(i);
      if (c0) {
        var cl = [c0]; i += c0.length;                    // ව්‍යඤ්ජන පොකුර (cluster)
        for (var c; (c = conAt(i)); i += c.length) cl.push(c);
        var res = MY.con[cl[0]], base = res, sub = false;   // sub = අවසන් ප්‍රධාන අකුර ් යට එබූ (stacked) එකක්ද
        for (var k = 1; k < cl.length; k++) {
          var cur = cl[k], prv = cl[k - 1];
          if (k === 1 && prv === 'ṅ') { res = 'င်္' + MY.con[cur]; base = MY.con[cur]; }
          else if (cur === 'ñ' && prv === 'ñ') { res = res.slice(0, -1) + 'ည'; base = 'ည'; }
          else if (cur === 's' && prv === 's') { res = res.slice(0, -1) + 'ဿ'; base = 'ဿ'; }
          else if (cur === 'y' && prv !== 'y') res += 'ျ';
          else if (cur === 'r' && prv !== 'r') res += 'ြ';
          else if (cur === 'v' && prv !== 'v') res += 'ွ';
          else if (cur === 'h' && MY.medialH[prv]) res += 'ှ';
          else { res += '္' + MY.con[cur]; base = MY.con[cur]; sub = true; }
        }
        var v = s.charAt(i).toLowerCase();
        if (MY.sign[v] != null) {
          var sg = MY.sign[v];
          if (MY.tall[base] && !sub && (v === 'ā' || v === 'o')) sg = v === 'ā' ? 'ါ' : 'ေါ';
          out += res + sg; i++;
        } else out += res + '်';
        if (s.charAt(i).toLowerCase() === 'ṃ') { out += 'ံ'; i++; }
        continue;
      }
      var ch = s.charAt(i).toLowerCase();
      if (MY.vow[ch] != null) { out += MY.vow[ch]; i++; continue; }
      if (ch === 'ṃ') { out += 'ံ'; i++; continue; }
      out += s.charAt(i); i++;
    }
    return out;
  }

  /* ------------------------- IAST → තායි (ไทย පාළි) -------------------------
     තායි ත්‍රිපිටකයේ සම්මත ලේඛන ක්‍රමය (පින්ථු ฺ සහිත):
       • සංයුක්ත / වචනය අවසාන ස්වර රහිත ව්‍යඤ්ජනය = ฺ (phinthu):  dhamma → ธมฺม,  buddho → พุทฺโธ
       • ṃ = ํ (nikkhahit):  buddhaṃ → พุทฺธํ
       • e / o = เ / โ ව්‍යඤ්ජනයට පෙර ලියයි: bhagavato → ภควโต;  වචනය මුල සංයුක්තයකට පෙර (dve → เทฺว)
       • ස්වාධීන ස්වර අ (อ) මතින්: a → อ, i → อิ, e → เอ, o → โอ
       • b → พ, p → ป, d → ท, t → ต (තායි පාළි සම්මතය) */
  var TH = {
    con: { k: 'ก', kh: 'ข', g: 'ค', gh: 'ฆ', 'ṅ': 'ง', c: 'จ', ch: 'ฉ', j: 'ช', jh: 'ฌ', 'ñ': 'ญ', 'ṭ': 'ฏ', 'ṭh': 'ฐ', 'ḍ': 'ฑ', 'ḍh': 'ฒ', 'ṇ': 'ณ',
           t: 'ต', th: 'ถ', d: 'ท', dh: 'ธ', n: 'น', p: 'ป', ph: 'ผ', b: 'พ', bh: 'ภ', m: 'ม', y: 'ย', r: 'ร', l: 'ล', v: 'ว', s: 'ส', h: 'ห', 'ḷ': 'ฬ', 'ś': 'ศ', 'ṣ': 'ษ' },
    vow: { a: 'อ', 'ā': 'อา', i: 'อิ', 'ī': 'อี', u: 'อุ', 'ū': 'อู', e: 'เอ', o: 'โอ', 'ṛ': 'ฤ' },
    sign: { a: '', 'ā': 'า', i: 'ิ', 'ī': 'ี', u: 'ุ', 'ū': 'ู', e: '', o: '', 'ṛ': 'ฺฤ' },
    pre: { e: 'เ', o: 'โ' }
  };
  function toThai(text) {
    var s = String(text).normalize('NFC').replace(/ṁ/g, 'ṃ').replace(/Ṁ/g, 'Ṃ').replace(/ē/g, 'e').replace(/Ē/g, 'E').replace(/ō/g, 'o').replace(/Ō/g, 'O');
    var out = '', i = 0, n = s.length;
    function conAt(k) { var ch = s.charAt(k).toLowerCase(), nx = s.charAt(k + 1).toLowerCase(); if (TH.con[ch] == null) return null; return (nx === 'h' && ASP[ch]) ? ch + 'h' : ch; }
    function isLetter(k) { var ch = s.charAt(k).toLowerCase(); return k >= 0 && (TH.con[ch] != null || TH.vow[ch] != null || ch === 'ṃ'); }
    while (i < n) {
      var c0 = conAt(i);
      if (c0) {
        var wordStart = !isLetter(i - 1), cl = [c0]; i += c0.length;
        for (var c; (c = conAt(i)); i += c.length) cl.push(c);
        var v = s.charAt(i).toLowerCase(), hasV = TH.sign[v] != null;
        var g = cl.map(function (x) { return TH.con[x]; });
        if (hasV && TH.pre[v]) {                       /* เ / โ : වචන මුල සංයුක්තයට පෙර, නැත්නම් අවසන් ව්‍යඤ්ජනයට පෙර */
          var k = wordStart ? 0 : g.length - 1;
          out += g.slice(0, k).map(function (x) { return x + 'ฺ'; }).join('') + TH.pre[v] + g.slice(k).join('ฺ');
        } else {
          out += g.join('ฺ') + (hasV ? TH.sign[v] : 'ฺ');
        }
        if (hasV) i++;
        if (s.charAt(i).toLowerCase() === 'ṃ') { out += 'ํ'; i++; }
        continue;
      }
      var ch = s.charAt(i).toLowerCase();
      if (TH.vow[ch] != null) { out += TH.vow[ch]; i++; if (s.charAt(i).toLowerCase() === 'ṃ') { out += 'ํ'; i++; } continue; }
      if (ch === 'ṃ') { out += 'ํ'; i++; continue; }
      out += s.charAt(i); i++;
    }
    return out;
  }

  /* ------------------------------ IAST → script ------------------------------ */
  function fromIAST(text, to) {
    if (to === 'mymr') return text == null ? text : toMymr(text);
    if (to === 'thai') return text == null ? text : toThai(text);
    var S = SCRIPTS[to]; if (!S || text == null) return text;
    var s = String(text).normalize('NFC').replace(/ṁ/g, 'ṃ').replace(/Ṁ/g, 'Ṃ').replace(/ē/g, 'e').replace(/Ē/g, 'E').replace(/ō/g, 'o').replace(/Ō/g, 'O');
    var out = '', pend = false, i = 0, n = s.length;
    while (i < n) {
      var ch = s.charAt(i).toLowerCase(), nx = s.charAt(i + 1).toLowerCase();
      if (CI[ch] != null) {
        var c = (nx === 'h' && ASP[ch]) ? ch + 'h' : ch, g = S.con[CI[c]];
        if (!g) { if (pend) { out += S.virama; pend = false; } out += s.substr(i, c.length); i += c.length; continue; }
        if (pend) out += S.virama + (S.join && S.join[g] ? ZWJ : '');
        out += g; pend = true; i += c.length; continue;
      }
      if (VI[ch] != null && S.vow[VI[ch]] != null) {
        out += pend ? S.sign[VI[ch]] : S.vow[VI[ch]];
        pend = false; i++; continue;
      }
      if (ch === 'ṃ') { out += S.nigg; pend = false; i++; continue; }
      if (pend) { out += S.virama; pend = false; }
      out += s.charAt(i); i++;
    }
    if (pend) out += S.virama;
    return out;
  }

  /* ------------------------------ script → IAST ------------------------------ */
  var REV = {};
  function rev(from) {
    if (REV[from]) return REV[from];
    var S = SCRIPTS[from], m = { c: {}, v: {}, s: {} };
    S.con.forEach(function (g, i) { m.c[g] = CON[i]; });
    S.vow.forEach(function (g, i) { m.v[g] = VOW[i]; });
    S.sign.forEach(function (g, i) { if (g) m.s[g] = VOW[i]; });
    return (REV[from] = m);
  }
  function toIAST(text, from) {
    var S = SCRIPTS[from]; if (!S || text == null) return text;
    var m = rev(from), al = S.alias || {}, out = '', pend = false;
    var s = String(text).normalize('NFC');
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i); if (al[ch]) ch = al[ch];
      if (ch === ZWJ || ch === ZWNJ) continue;
      if (m.c[ch] != null) { if (pend) out += 'a'; out += m.c[ch]; pend = true; continue; }
      if (ch === S.virama) { pend = false; continue; }
      if (m.s[ch] != null) { out += m.s[ch]; pend = false; continue; }
      if (m.v[ch] != null) { if (pend) out += 'a'; out += m.v[ch]; pend = false; continue; }
      if (ch === S.nigg) { if (pend) out += 'a'; out += 'ṃ'; pend = false; continue; }
      if (pend) { out += 'a'; pend = false; }
      out += ch;
    }
    if (pend) out += 'a';
    return out;
  }

  function convert(text, from, to) {
    if (from === to) return text;
    if (from === 'iast') return fromIAST(text, to);
    var r = toIAST(text, from);
    return to === 'iast' ? r : fromIAST(r, to);
  }

  root.PaliScript = {
    fromIAST: fromIAST, toIAST: toIAST, convert: convert,
    scripts: function () { return Object.keys(SCRIPTS).concat(['mymr', 'thai']); },
    add: function (id, table) { SCRIPTS[id] = table; delete REV[id]; }   /* නව අක්ෂර මාලාවක් එක් කිරීමට */
  };
})(typeof window !== 'undefined' ? window : this);
