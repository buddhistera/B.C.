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

  /* ------------------------------ IAST → script ------------------------------ */
  function fromIAST(text, to) {
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
    scripts: function () { return Object.keys(SCRIPTS); },
    add: function (id, table) { SCRIPTS[id] = table; delete REV[id]; }   /* නව අක්ෂර මාලාවක් එක් කිරීමට */
  };
})(typeof window !== 'undefined' ? window : this);
