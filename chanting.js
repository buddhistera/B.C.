/* =====================================================================
   chanting.js  —  සජ්ඣායනය / Chanting   (පහන් බොත්තම)
   ---------------------------------------------------------------------
   මෙය "ධාරකය" (host) ය: tab තීරුව, සූත්‍ර ලැයිස්තුව, කාඩ්පත් පෙන්වීම, භාෂාව සහ
   theme අනුගමනය, ✕ / Esc / Back මගින් ඉවත් වීම යන සියල්ල මෙහි ඇත.
   අන්තර්ගතය (දත්ත) වෙනම ගොනුවල ඇති අතර, tab එක පළමුවරට විවෘත කළ විට පමණක් load වේ:

       tab            දත්ත ගොනුව
       ─────────────  ─────────────────────────
       පිරිත්          pirith-data.js
       ප්‍රාතිමෝක්ෂය     patimokkha-data.js
       බුද්ධ වර්ෂය       buddha-recitation.js  (ගතික – ප්‍රධාන ඇප් එකේ දිනයට අනුව)
       පට්ඨානය         patthana-data.js
       සතිපට්ඨාන       satipatthana-data.js

   ► අලුත් කොටසක් එක් කරන ආකාරය
     1. අලුත් දත්ත ගොනුවක් සාදන්න (pirith-data.js ආකෘතියට සමානව –
        (window.ChantingModules = window.ChantingModules || {}).<id> = { title, subtitle,
         navLabel, groups?, items:[{id, num?, short?, name:{si,en,tr?}, pali, translit?,
         sinhala?, english?, gatha?, gathaTr?}], intro?, footer? };
     2. පහත TABS ලැයිස්තුවට පේළියක් එක් කරන්න.   (වෙනත් කිසිවක් වෙනස් කළ යුතු නැත)

   භාෂාව : ප්‍රධාන ඇප් එකේ currentLang ('si' | 'en')      Theme : body.dark-mode
   භාවිතය : openChanting([tabId])  /  closeChanting()
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     TABS — නව කොටසක් එක් කරන්නේ මෙතැනයි
     ------------------------------------------------------------------ */
  var TABS = [
    { id: 'recitation',   icon: '🗓️', title: { si: 'බුද්ධ වර්ෂය',    en: 'Buddha Year' },  src: 'buddha-recitation.js?v=1' },
    { id: 'pirith',       icon: '📖', title: { si: 'පිරිත්',        en: 'Pirith' },       src: 'pirith-data.js?v=1' },
    { id: 'patimokkha',   icon: '🪷', title: { si: 'ප්‍රාතිමෝක්ෂය',   en: 'Pātimokkha' },   src: 'patimokkha-data.js?v=1', adapt: adaptPatimokkha },
    { id: 'patthana',     icon: '✨', title: { si: 'පට්ඨානය',       en: 'Paṭṭhāna' },     src: 'patthana-data.js?v=1' },
    { id: 'satipatthana', icon: '🧘', title: { si: 'සතිපට්ඨාන',     en: 'Satipaṭṭhāna' }, src: 'satipatthana-data.js?v=1' }
  ];

  var STORE_KEY = 'chantingTab';
  var MODS = {};          // load කළ මොඩියුල (cache)
  var cur = null;         // දැනට පෙන්වන tab id
  var pushed = false;
  var spy = null;

  /* ---------------------------- helpers ---------------------------- */
  function lang() { return (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'en' : 'si'; }
  function L(o) { if (!o) return ''; if (typeof o === 'string') return o; return o[lang()] || o.si || ''; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function br(s) { return esc(s).replace(/\n/g, '<br>'); }
  function tabById(id) { for (var i = 0; i < TABS.length; i++) if (TABS[i].id === id) return TABS[i]; return TABS[0]; }
  function T(si, en) { return lang() === 'en' ? en : si; }

  /* ----------------- ප්‍රාතිමෝක්ෂ දත්ත → පොදු ආකෘතිය ----------------- */
  function adaptPatimokkha() {
    if (typeof PATIMOKKHA_DATA === 'undefined' || !Array.isArray(PATIMOKKHA_DATA)) return null;
    var groups = [], items = [];
    PATIMOKKHA_DATA.forEach(function (sec) {
      groups.push({ id: sec.id, label: { si: sec.title_si, en: sec.title_en }, short: { si: sec.si, en: sec.en }, count: sec.count });
      var split = sec.kind !== 'rules' && sec.parts.length > 1;
      var units = split ? sec.parts.map(function (p) { return [p]; }) : [sec.parts];
      units.forEach(function (parts, idx) {
        var p0 = parts[0];
        items.push({ id: 'pm-' + sec.id + '-' + idx, group: sec.id, pm: true, kind: sec.kind, parts: parts,
          title: split ? { si: p0.title_si, en: p0.title_en } : null,
          intro: idx === 0 && sec.intro_si ? { si: sec.intro_si, en: sec.intro_en } : null,
          note: idx === units.length - 1 && sec.note_si ? { si: sec.note_si, en: sec.note_en } : null });
      });
    });
    return {
      id: 'patimokkha',
      title: { si: 'භික්ඛු ප්‍රාතිමෝක්ඛය', en: 'Bhikkhu Pātimokkha' },
      subtitle: { si: 'ශික්ෂාපද 227', en: '227 Training Rules' },
      navLabel: { si: 'බණවර', en: 'Sections' },
      navMode: 'groups',
      intro: { pali: 'නමෝ තස්ස භගවතෝ අරහතෝ සම්මාසම්බුද්ධස්ස !!!', translit: 'Namo tassa bhagavato arahato sammāsambuddhassa !!!' },
      groups: groups, items: items
    };
  }

  /* ---- ප්‍රාතිමෝක්ෂ කාඩ්පත: පාලි සියල්ල එකට, තේරුම බටනයෙන් දිගහැරේ ---- */
  function pmBlocks(it, si, mean) {
    var h = '';
    it.parts.forEach(function (p) {
      var t = mean ? (si ? p.si : p.en) : (si ? p.pali : p.translit);
      if (it.kind === 'rules' && p.role === 'rule') {
        h += '<p class="pm-rule"><span class="pm-n">' + esc(p.n) + '.</span><span>' + esc(t) + '</span></p>'; return;
      }
      t.split(/\n\n+/).forEach(function (b) {
        var cls = (!mean && p.role === 'end') ? ' class="pm-end"' : '';
        h += '<p' + cls + '>' + esc(b) + '</p>';
      });
    });
    return h;
  }
  function pmItemHtml(it) {
    var si = lang() === 'si';
    var h = '<article class="ch-card" data-a="' + esc(it.id) + '" data-k="g-' + esc(it.group) + '">';
    if (it.title) h += '<div class="pm-sub">' + esc(si ? it.title.si : it.title.en) + '</div>';
    if (it.intro) h += '<p class="pm-intro">' + br(si ? it.intro.si : it.intro.en) + '</p>';
    h += '<div class="pm-pali">' + pmBlocks(it, si, false) +
      '<div class="pm-row"><button type="button" class="pm-more" aria-expanded="false" onclick="chPmToggle(this)">' +
      T('තේරුම', 'Meaning') + ' <span class="pm-arr">&#9660;</span></button></div></div>' +
      '<div class="pm-meaning' + (si ? '' : ' en') + '">' + pmBlocks(it, si, true) + '</div>';
    if (it.note) h += '<p class="pm-intro">' + br(si ? it.note.si : it.note.en) + '</p>';
    return h + '</article>';
  }
  window.chPmToggle = function (b) {
    var open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.closest('.ch-card').querySelector('.pm-meaning').classList.toggle('open', open);
  };

  /* --------------------------- loading ---------------------------- */
  function loadModule(tab) {
    return new Promise(function (resolve, reject) {
      if (MODS[tab.id]) return resolve(MODS[tab.id]);
      function done() {
        var m = tab.adapt ? tab.adapt() : (window.ChantingModules && window.ChantingModules[tab.id]);
        if (!m) return reject(new Error('empty'));
        MODS[tab.id] = m; resolve(m);
      }
      // දැනටමත් load වී ඇත්නම්
      var pre = tab.adapt ? tab.adapt() : (window.ChantingModules && window.ChantingModules[tab.id]);
      if (pre) { MODS[tab.id] = pre; return resolve(pre); }
      var sc = document.createElement('script');
      sc.src = tab.src;
      sc.onload = done;
      sc.onerror = function () { reject(new Error('load')); };
      document.head.appendChild(sc);
    });
  }

  /* ------------------------------ CSS ------------------------------ */
  var CSS = '\
#chOverlay{--m950:#042a1c;--m900:#083f2a;--m800:#0d5539;--m700:#136c48;--m600:#1a8558;--m500:#22a06b;--m400:#3eb489;--m300:#68cba3;--m200:#98ddbd;--m100:#c8edd8;--m50:#e8f8f0;\
--g700:#8a6508;--g600:#b8860b;--g500:#d4a017;--g400:#e6b944;--g300:#f2d478;--g200:#f9e9b8;--g100:#fdf5db;\
--bg:#f3fcf7;--card:#ffffff;--elev:#f8fdfa;--subtle:#e8f8f0;--tint:#e0f5e8;--pali-bg:linear-gradient(135deg,#f3fcf7,#e8f8f0);\
--tx:#0a2018;--tx2:#2a4a3a;--muted:#608a76;--bd:#c8e6d5;--bd2:#a0d4b8;--sh:0 4px 14px rgba(8,63,42,.10);--shs:0 1px 4px rgba(8,63,42,.08);\
--serif:"Noto Serif Sinhala","Noto Sans Sinhala",Georgia,serif;--sans:"Noto Sans Sinhala","Segoe UI",sans-serif}\
body.dark-mode #chOverlay{--bg:#061410;--card:#0a2118;--elev:#0e2c20;--subtle:#123828;--tint:#123828;--pali-bg:linear-gradient(135deg,#0e2c20,#143a2a);\
--tx:#e0f5e8;--tx2:#a8d4b8;--muted:#6a9a80;--bd:#1a4830;--bd2:#2a6042;--sh:0 4px 14px rgba(0,0,0,.5);--shs:0 1px 4px rgba(0,0,0,.45);\
--g700:#e6b944;--g600:#f2d478;--g500:#f9e9b8;--g400:#fdf5db;--m700:#68cba3;--m600:#98ddbd;--m500:#c8edd8;--m800:#98ddbd;--m900:#c8edd8}\
#chOverlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:5000;display:none;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;\
background:var(--bg);color:var(--tx);font-family:var(--sans);line-height:1.9;font-size:16px;text-align:left}\
#chOverlay *{box-sizing:border-box}\
#chOverlay .ch-close{position:fixed;top:calc(env(safe-area-inset-top,0px) + 8px);right:10px;z-index:5100;width:42px;height:42px;border-radius:50%;border:2px solid var(--m700);background:var(--card);color:var(--m700);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-size:26px;line-height:1;font-family:Arial,sans-serif;box-shadow:0 5px 16px rgba(0,0,0,.25);transition:all .25s ease}\
#chOverlay .ch-close:hover{background:var(--m700);color:#fff;transform:rotate(90deg)}\
/* hero */\
#chOverlay .ch-hero{background:linear-gradient(135deg,#042a1c 0%,#0d5539 40%,#22a06b 75%,#d4a017 100%);color:#f3fcf7;text-align:center;padding:calc(26px + env(safe-area-inset-top,0px)) 16px 22px;position:relative;overflow:hidden}\
#chOverlay .ch-hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:linear-gradient(90deg,transparent,#c8edd8,#f3fcf7,#c8edd8,transparent)}\
#chOverlay .ch-lamp{width:46px;height:60px;display:block;margin:0 auto 4px;filter:drop-shadow(0 0 14px rgba(249,233,184,.85))}\
#chOverlay .ch-flame{transform-origin:50% 100%;animation:chFlicker 1.6s ease-in-out infinite alternate}\
#chOverlay .ch-glow{animation:chGlow 2.4s ease-in-out infinite alternate}\
@keyframes chFlicker{0%{transform:scale(1) translateY(0);opacity:1}35%{transform:scale(1.08) translateY(-1px);opacity:.95}70%{transform:scale(.94) translateY(1px);opacity:.9}100%{transform:scale(1.05) translateY(-1px);opacity:1}}\
@keyframes chGlow{from{opacity:.35}to{opacity:.75}}\
#chOverlay .ch-hero h1{font-family:var(--serif);font-size:1.5rem;margin:4px 0 2px;font-weight:800;text-shadow:1px 2px 8px rgba(0,0,0,.45)}\
#chOverlay .ch-hero p{margin:0;font-size:.82rem;opacity:.9;line-height:1.6}\
/* tabs */\
#chOverlay .ch-tabs{position:sticky;top:0;z-index:30;background:var(--card);border-bottom:2px solid var(--bd);box-shadow:var(--shs)}\
#chOverlay .ch-tabs-in{display:flex;gap:6px;padding:9px 60px 9px 10px;overflow-x:auto;scrollbar-width:none}\
#chOverlay .ch-tabs-in::-webkit-scrollbar,#chOverlay .ch-subnav-in::-webkit-scrollbar{display:none}\
#chOverlay .ch-tab{flex:0 0 auto;display:flex;align-items:center;gap:6px;background:var(--tint);color:var(--m800);border:1.5px solid transparent;padding:8px 16px;border-radius:30px;font-family:var(--sans);font-weight:600;font-size:.88rem;cursor:pointer;white-space:nowrap;transition:all .2s ease;line-height:1.4}\
#chOverlay .ch-tab.active{background:linear-gradient(135deg,var(--m700),var(--m500));color:#fff;border-color:var(--g500);box-shadow:0 3px 10px rgba(19,108,72,.35)}\
body.dark-mode #chOverlay .ch-tab{background:var(--subtle);color:var(--m200)}\
body.dark-mode #chOverlay .ch-tab.active{background:#22a06b;color:#061410}\
/* sub nav */\
#chOverlay .ch-subnav{position:sticky;z-index:29;background:var(--elev);border-bottom:1px solid var(--bd);box-shadow:var(--shs)}\
#chOverlay .ch-subnav-in{display:flex;gap:6px;padding:7px 10px;overflow-x:auto;align-items:center;scrollbar-width:none}\
#chOverlay .ch-lbl{flex:0 0 auto;font-size:.7rem;font-weight:700;color:var(--m700);padding:3px 9px;border-radius:6px;background:var(--tint);border-left:3px solid var(--g500)}\
#chOverlay .ch-chip{flex:0 0 auto;display:flex;align-items:center;gap:5px;color:var(--m800);background:var(--tint);border:1.3px solid transparent;font-family:var(--sans);font-size:.76rem;font-weight:600;padding:5px 11px;border-radius:30px;white-space:nowrap;cursor:pointer;transition:all .2s ease;line-height:1.5}\
#chOverlay .ch-chip.active{background:var(--m600);color:#fff;border-color:var(--m800)}\
body.dark-mode #chOverlay .ch-chip{background:var(--subtle);color:var(--m200)}\
body.dark-mode #chOverlay .ch-chip.active{background:#22a06b;color:#061410}\
#chOverlay .ch-nb{background:rgba(255,255,255,.35);padding:0 6px;border-radius:20px;font-size:.66rem;font-weight:800;line-height:1.6}\
#chOverlay .ch-chip:not(.active) .ch-nb{background:rgba(26,133,88,.18)}\
/* content */\
#chOverlay .ch-main{max-width:900px;margin:0 auto;padding:16px 12px 30px}\
#chOverlay .ch-head{text-align:center;margin:8px 0 14px}\
#chOverlay .ch-head h2{font-family:var(--serif);font-size:1.3rem;color:var(--m800);margin:0 0 2px;font-weight:800;line-height:1.5}\
body.dark-mode #chOverlay .ch-head h2{color:var(--g400)}\
#chOverlay .ch-head p{margin:0;font-size:.85rem;color:var(--muted);font-style:italic}\
#chOverlay .ch-namo{text-align:center;padding:22px 16px;background:linear-gradient(135deg,var(--m50),var(--g100));border:2px solid var(--g500);border-radius:16px;margin:14px 0 18px;box-shadow:var(--sh)}\
body.dark-mode #chOverlay .ch-namo{background:linear-gradient(135deg,var(--subtle),var(--elev))}\
#chOverlay .ch-namo-pali{font-family:var(--serif);font-size:1.12rem;font-weight:700;color:var(--m900);line-height:1.9}\
body.dark-mode #chOverlay .ch-namo-pali{color:var(--g400)}\
#chOverlay .ch-namo-tr{font-family:Georgia,serif;font-style:italic;font-size:.92rem;color:var(--g700);margin-top:2px}\
#chOverlay .ch-namo-line{width:110px;height:2px;background:linear-gradient(90deg,transparent,var(--g500),transparent);margin:14px auto}\
#chOverlay .ch-namo-t{font-family:var(--serif);font-size:1rem;font-weight:700;color:var(--m800);margin:6px 0;line-height:1.9}\
body.dark-mode #chOverlay .ch-namo-t{color:var(--g400)}\
#chOverlay .ch-group{margin:30px 0 14px;padding:16px 18px;background:linear-gradient(135deg,var(--m800),var(--m600),var(--g600));border-radius:14px;color:#f3fcf7;box-shadow:var(--sh);text-align:center}\
body.dark-mode #chOverlay .ch-group{background:linear-gradient(135deg,#0d5539,#1a8558,#8a6508);color:#f3fcf7}\
#chOverlay .ch-group h3{margin:0;font-family:var(--serif);font-size:1.15rem;line-height:1.5;color:#f3fcf7}\
#chOverlay .ch-group span{display:inline-block;margin-top:6px;background:rgba(255,255,255,.22);padding:2px 12px;border-radius:30px;font-size:.76rem;font-weight:700}\
/* card */\
#chOverlay .ch-card{background:var(--card);border-radius:14px;padding:18px 15px;margin:16px 0;box-shadow:var(--sh);border:1px solid var(--bd);border-left:5px solid var(--m600)}\
#chOverlay .ch-card-h{display:flex;align-items:center;gap:11px;margin-bottom:12px;padding-bottom:10px;border-bottom:1.5px dashed var(--bd2)}\
#chOverlay .ch-num{background:linear-gradient(135deg,var(--m800),var(--m500));color:#fff;font-weight:800;font-size:.9rem;min-width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px rgba(19,108,72,.3);flex-shrink:0;border:2px solid var(--g500)}\
body.dark-mode #chOverlay .ch-num{background:linear-gradient(135deg,#136c48,#22a06b);color:#fff}\
#chOverlay .ch-num.txt{border-radius:22px;padding:0 12px;font-size:.78rem}\
#chOverlay .ch-names{flex:1;min-width:0}\
#chOverlay .ch-nm{font-family:var(--serif);font-weight:700;color:var(--m800);font-size:1.08rem;line-height:1.5}\
body.dark-mode #chOverlay .ch-nm{color:var(--g400)}\
#chOverlay .ch-nm2{font-family:Georgia,serif;font-style:italic;font-weight:600;color:var(--g700);font-size:.88rem;margin-top:2px}\
#chOverlay .ch-nm3{font-size:.8rem;color:var(--muted);font-weight:600;margin-top:1px}\
#chOverlay .ch-gl{font-size:.8rem;color:var(--muted);font-weight:600}\
#chOverlay .ch-box{position:relative;border-radius:12px;margin:20px 0 10px;white-space:pre-line;word-break:break-word}\
#chOverlay .ch-box::before{position:absolute;top:-12px;left:16px;color:#fff;font-family:var(--sans);font-style:normal;font-size:.68rem;font-weight:700;padding:2px 11px;border-radius:20px;letter-spacing:.4px;white-space:nowrap;line-height:1.7}\
#chOverlay .ch-pali{background:var(--pali-bg);border:1.5px dashed var(--m600);padding:16px 15px;font-family:var(--serif);font-weight:600;color:var(--m900);font-size:1rem;line-height:2.1}\
#chOverlay .ch-pali::before{content:attr(data-l);background:var(--m700)}\
body.dark-mode #chOverlay .ch-pali{color:var(--m200);border-color:var(--m500)}\
body.dark-mode #chOverlay .ch-pali::before{background:#1a8558}\
#chOverlay .ch-mean{background:var(--subtle);border-left:4px solid var(--m700);padding:15px 15px;font-size:.95rem;line-height:1.95;color:var(--tx);border-radius:10px}\
#chOverlay .ch-mean::before{content:attr(data-l);background:var(--m800)}\
body.dark-mode #chOverlay .ch-mean::before{background:#136c48}\
#chOverlay .ch-mean.en{font-family:Georgia,"Noto Serif",serif;font-size:.97rem;line-height:1.85}\
#chOverlay .ch-gatha{background:linear-gradient(135deg,#fdf5db,#f9e9b8);border:2px solid var(--g500);border-radius:14px;padding:16px 12px;text-align:center;font-family:var(--serif);font-style:italic;font-weight:600;color:#8a6508;margin:16px 0 2px;line-height:2.1;font-size:.95rem;white-space:pre-line;box-shadow:inset 0 0 22px rgba(212,160,23,.12)}\
body.dark-mode #chOverlay .ch-gatha{background:linear-gradient(135deg,#3a2810,#4a3418);color:#f2d478;border-color:#b8860b}\
/* misc */\
#chOverlay .ch-load{text-align:center;padding:60px 20px;color:var(--muted)}\
#chOverlay .ch-load b{display:block;font-size:2.4rem;margin-bottom:8px}\
#chOverlay .ch-retry{margin-top:12px;border:none;background:var(--m700);color:#fff;padding:9px 22px;border-radius:30px;font-family:var(--sans);font-weight:600;cursor:pointer}\
#chOverlay .ch-foot{background:linear-gradient(135deg,#042a1c 0%,#0d5539 50%,#22a06b 100%);color:#f3fcf7;padding:26px 16px 20px;text-align:center;border-radius:16px;margin:30px 0 0}\
#chOverlay .ch-foot .ls{font-size:1.4rem;letter-spacing:12px;opacity:.9;margin-bottom:8px}\
#chOverlay .ch-foot p{font-family:var(--serif);margin:0 auto 10px;max-width:640px;line-height:1.95;font-size:.98rem}\
#chOverlay .ch-foot .th{opacity:.92;font-size:.92rem}\
/* pātimokkha */\
#chOverlay .pm-sub{font-family:var(--serif);font-weight:700;color:var(--m800);font-size:1.02rem;margin:0 0 10px;line-height:1.6}\
body.dark-mode #chOverlay .pm-sub{color:var(--g400)}\
#chOverlay .pm-intro{font-size:.88rem;color:var(--muted);line-height:1.8;margin:0 0 10px;white-space:pre-line}\
#chOverlay .pm-pali{background:var(--pali-bg);border:1.5px dashed var(--m600);border-radius:12px;padding:14px 15px 8px;font-family:var(--serif);font-weight:600;color:var(--m900);font-size:1rem;line-height:2.1;word-break:break-word}\
body.dark-mode #chOverlay .pm-pali{color:var(--m200);border-color:var(--m500)}\
#chOverlay .pm-pali p{margin:0 0 .55em;white-space:pre-line}\
#chOverlay .pm-rule{display:flex;gap:.55em}\
#chOverlay .pm-n{flex:none;min-width:1.9em;font-weight:800;color:var(--m700)}\
#chOverlay .pm-pali .pm-end{text-align:center;color:var(--m700);font-weight:800}\
#chOverlay .pm-row{display:flex;justify-content:flex-end;margin:2px 0 4px}\
#chOverlay .pm-more{background:none;border:1.3px solid var(--m700);color:var(--m700);padding:2px 12px;border-radius:30px;font-family:var(--sans);font-size:.8rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:6px;line-height:1.7}\
#chOverlay .pm-more .pm-arr{font-size:.62em;display:inline-block;transition:transform .2s}\
#chOverlay .pm-more[aria-expanded=true] .pm-arr{transform:rotate(180deg)}\
#chOverlay .pm-meaning{display:none;margin-top:12px;padding:4px 4px 2px 13px;border-left:4px solid var(--m700);font-size:.95rem;line-height:1.95;color:var(--tx)}\
#chOverlay .pm-meaning.open{display:block}\
#chOverlay .pm-meaning.en{font-family:Georgia,"Noto Serif",serif;font-size:.97rem;line-height:1.85}\
#chOverlay .pm-meaning p{margin:0 0 .7em;white-space:pre-line}\
@media (min-width:720px){#chOverlay .ch-card{padding:24px 28px}#chOverlay .ch-main{padding:22px 18px 40px}#chOverlay .ch-pali{font-size:1.06rem;padding:20px 24px}}';

  function injectStyle() {
    if (document.getElementById('chStyle')) return;
    var st = document.createElement('style'); st.id = 'chStyle'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ----------------------------- rendering ----------------------------- */
  var LAMP = '<svg class="ch-lamp" viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<ellipse class="ch-glow" cx="35" cy="30" rx="22" ry="24" fill="#f9e9b8" opacity=".5"/>' +
    '<g class="ch-flame"><path d="M35 8C30 20 42 22 36 34C34 28 30 24 35 8Z" fill="#f2d478"/><path d="M35 14C32 22 38 24 35 32C33 27 32 22 35 14Z" fill="#fffbe8"/></g>' +
    '<line x1="35" y1="34" x2="35" y2="42" stroke="#4a3a20" stroke-width="1.5"/>' +
    '<path d="M12 46Q35 62 58 46Q55 58 35 62Q15 58 12 46Z" fill="#b8860b" stroke="#8a6508" stroke-width="1.2"/>' +
    '<ellipse cx="35" cy="46" rx="23" ry="4.5" fill="#d4a017" stroke="#8a6508"/><rect x="30" y="62" width="10" height="8" fill="#8a6508"/>' +
    '<ellipse cx="35" cy="72" rx="18" ry="4" fill="#b8860b" stroke="#8a6508"/></svg>';

  function shell() {
    var tabs = TABS.map(function (t) {
      return '<button type="button" class="ch-tab" data-t="' + t.id + '"><span>' + t.icon + '</span><span>' + esc(L(t.title)) + '</span></button>';
    }).join('');
    var all = TABS.map(function (t) { return L(t.title); }).join(' · ');
    return '<button class="ch-close" type="button" aria-label="' + T('ඉවත් වන්න', 'Close') + '">&times;</button>' +
      '<header class="ch-hero">' + LAMP + '<h1>' + T('සජ්ඣායනය', 'Chanting') + '</h1><p>' + esc(all) + '</p></header>' +
      '<div class="ch-tabs"><div class="ch-tabs-in">' + tabs + '</div></div>' +
      '<div class="ch-subnav"><div class="ch-subnav-in"></div></div>' +
      '<main class="ch-main"></main>';
  }

  function itemHtml(mod, it) {
    if (it.pm) return pmItemHtml(it);
    var si = lang() === 'si';
    var key = mod.navMode === 'groups' ? ('g-' + (it.group || '')) : it.id;
    var name = it.name || {};
    var title = si ? (name.si || '') : (name.en || name.si || '');
    var sec = si ? (name.tr || '') : (name.tr || '');
    var third = it.sub ? it.sub : (si ? (name.en || '') : (name.si || ''));
    var hasName = !!title;
    var numHtml = '';
    if (it.num != null && it.num !== '') {
      var isNum = /^\d+$/.test(String(it.num));
      numHtml = '<div class="ch-num' + (isNum ? '' : ' txt') + '">' + esc(it.num) + '</div>';
    }
    var glabel = '';
    if (!hasName && it.group && mod.groups) {
      for (var g = 0; g < mod.groups.length; g++) if (mod.groups[g].id === it.group) glabel = L(mod.groups[g].label);
    }
    var head = '';
    if (numHtml || hasName || glabel) {
      head = '<div class="ch-card-h">' + numHtml + '<div class="ch-names">' +
        (hasName ? '<div class="ch-nm">' + esc(title) + '</div>' : '') +
        (hasName && sec ? '<div class="ch-nm2">' + esc(sec) + '</div>' : '') +
        (hasName && third ? '<div class="ch-nm3">' + esc(third) + '</div>' : '') +
        (glabel ? '<div class="ch-gl">' + esc(glabel) + '</div>' : '') +
        '</div></div>';
    }
    var main = si ? it.pali : (it.translit || it.pali);
    var mean = si ? it.sinhala : it.english;
    var body = '';
    if (main) body += '<div class="ch-box ch-pali" data-l="' + esc(si ? '📜 පාළි' : '📜 Pāḷi') + '">' + esc(main) + '</div>';
    if (mean) body += '<div class="ch-box ch-mean ' + (si ? 'si' : 'en') + '" data-l="' + esc(si ? '🇱🇰 සිංහල අර්ථය' : '🌐 Meaning') + '">' + esc(mean) + '</div>';
    var gt = si ? it.gatha : (it.gathaTr || it.gatha);
    if (gt) body += '<div class="ch-gatha">' + esc(gt) + '</div>';
    return '<article class="ch-card" data-a="' + esc(it.id) + '" data-k="' + esc(key) + '">' + head + body + '</article>';
  }

  function render(mod) {
    var si = lang() === 'si';
    var html = '<div class="ch-head"><h2>' + esc(L(mod.title)) + '</h2>' + (mod.subtitle ? '<p>' + esc(L(mod.subtitle)) + '</p>' : '') + '</div>';

    if (mod.intro) {
      var lines = (!si && mod.intro.en && mod.intro.en.length) ? mod.intro.en : (mod.intro.si || []);
      html += '<div class="ch-namo">';
      if (mod.intro.pali) {
        html += '<div class="ch-namo-pali">' + esc(si ? mod.intro.pali : (mod.intro.translit || mod.intro.pali)) + '</div>';
      }
      if (lines.length) html += '<div class="ch-namo-line"></div>';
      lines.forEach(function (t) { html += '<p class="ch-namo-t" style="margin:6px 0">' + br(t) + '</p>'; });
      html += '</div>';
    }

    if (typeof mod.renderHtml === 'function') {      // ගතික (dynamic) මොඩියුලය – උදා: බුද්ධ වර්ෂ සජ්ඣායනය
      html += mod.renderHtml(lang());
      return html + footerHtml(mod);
    }

    var multi = mod.groups && mod.groups.length > 1;
    var lastGroup = null;
    mod.items.forEach(function (it) {
      if (multi && it.group !== lastGroup) {
        lastGroup = it.group;
        var gp = mod.groups.filter(function (g) { return g.id === it.group; })[0];
        if (gp) html += '<div class="ch-group" data-a="g-' + esc(gp.id) + '"><h3>' + esc(L(gp.label)) + '</h3>' +
          (gp.count != null ? '<span>' + esc(gp.count) + (si ? ' ශික්ෂාපද' : ' rules') + '</span>' : '') + '</div>';
      }
      html += itemHtml(mod, it);
    });

    return html + footerHtml(mod);
  }

  function footerHtml(mod) {
    var si = lang() === 'si', html = '';
    var ft = mod.footer;
    html += '<div class="ch-foot"><div class="ls">🪔 🪔 🪔</div>';
    if (ft && ft.bless) html += '<p>' + br(L(ft.bless)) + '</p>';
    else html += '<p>' + T('සියලු සත්ත්වයෝ නිවනින් සැනසීම ලබත්වා! ', 'May all beings be well and happy! ') + '</p>';
html += '<div class="th">' + esc(ft && ft.thanks ? L(ft.thanks) : T('බුද්ධ සාසනං චිරං තිට්ඨතු !', 'Buddha Sāsanaṃ ciraṃ tiṭṭhatu!')) + '</div></div>';
return html;
  }

  function buildNav(ov, mod) {
    var si = lang() === 'si';
    ov.querySelector('.ch-subnav').style.display = (mod.items && mod.items.length) ? '' : 'none';
    var chips = '';
    if (mod.navLabel) chips += '<span class="ch-lbl">' + esc(L(mod.navLabel)) + '</span>';
    if (mod.navMode === 'groups') {
      mod.groups.forEach(function (g) {
        chips += '<button type="button" class="ch-chip" data-go="g-' + esc(g.id) + '" data-k="g-' + esc(g.id) + '">' + esc(L(g.short || g.label)) +
          (g.count != null ? ' <span class="ch-nb">' + esc(g.count) + '</span>' : '') + '</button>';
      });
    } else {
      mod.items.forEach(function (it) {
        var lbl = si ? (it.short || (it.name && it.name.si)) : (it.shortEn || (it.name && (it.name.tr || it.name.en)) || it.short);
        var nb = (mod.chipNum && it.num != null && /^\d+$/.test(String(it.num))) ? '<span class="ch-nb">' + esc(it.num) + '</span>' : '';
        chips += '<button type="button" class="ch-chip" data-go="' + esc(it.id) + '" data-k="' + esc(it.id) + '">' + nb + esc(lbl) + '</button>';
      });
    }
    ov.querySelector('.ch-subnav-in').innerHTML = chips;
  }

  function stickyOffsets(ov) {
    var tabs = ov.querySelector('.ch-tabs'), sub = ov.querySelector('.ch-subnav');
    sub.style.top = tabs.offsetHeight + 'px';
    return tabs.offsetHeight + sub.offsetHeight + 10;
  }

  function scrollToAnchor(ov, a) {
    var el = ov.querySelector('[data-a="' + a + '"]');
    if (!el) return;
    var off = stickyOffsets(ov);
    var top = el.getBoundingClientRect().top - ov.getBoundingClientRect().top + ov.scrollTop - off;
    ov.scrollTo({ top: top, behavior: 'smooth' });
  }

  function setupSpy(ov) {
    if (spy) { spy.disconnect(); spy = null; }
    if (!('IntersectionObserver' in window)) return;
    var off = stickyOffsets(ov);
    var nav = ov.querySelector('.ch-subnav-in');
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var k = en.target.getAttribute('data-k');
        var chip = nav.querySelector('.ch-chip[data-k="' + k + '"]');
        if (!chip || chip.classList.contains('active')) return;
        var prev = nav.querySelector('.ch-chip.active'); if (prev) prev.classList.remove('active');
        chip.classList.add('active');
        nav.scrollTo({ left: chip.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2, behavior: 'smooth' });
      });
    }, { root: ov, threshold: 0, rootMargin: '-' + off + 'px 0px -60% 0px' });
    ov.querySelectorAll('.ch-card').forEach(function (c) { spy.observe(c); });
  }

  /* ----------------------------- tab logic ----------------------------- */
  function showTab(ov, id, keepScroll) {
    var tab = tabById(id); cur = tab.id;
    try { localStorage.setItem(STORE_KEY, cur); } catch (e) {}
    ov.querySelectorAll('.ch-tab').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-t') === cur); });
    var main = ov.querySelector('.ch-main');
    var activeTabBtn = ov.querySelector('.ch-tab.active');
    var tin = ov.querySelector('.ch-tabs-in');
    if (activeTabBtn) tin.scrollTo({ left: activeTabBtn.offsetLeft - 20, behavior: 'smooth' });
    ov.querySelector('.ch-subnav-in').innerHTML = '';
    main.innerHTML = '<div class="ch-load"><b>🪔</b>' + T('පූරණය වෙමින්...', 'Loading...') + '</div>';
    loadModule(tab).then(function (mod) {
      if (cur !== tab.id) return;                       // ඒ අතරතුර වෙනත් tab එකක් තෝරා ඇත
      main.innerHTML = render(mod);
      buildNav(ov, mod);
      if (!keepScroll) ov.scrollTop = Math.min(ov.scrollTop, ov.querySelector('.ch-hero').offsetHeight);
      setupSpy(ov);
    }).catch(function () {
      if (cur !== tab.id) return;
      main.innerHTML = '<div class="ch-load"><b>⚠️</b>' + T('අන්තර්ගතය පූරණය කළ නොහැකි විය. (අන්තර්ජාලය/ගොනුව පරීක්ෂා කරන්න)', 'Could not load this section. Please check your connection.') +
        '<br><button class="ch-retry" type="button">' + T('නැවත උත්සාහ කරන්න', 'Retry') + '</button></div>';
      main.querySelector('.ch-retry').addEventListener('click', function () { showTab(ov, tab.id, true); });
    });
  }

  function build(startTab) {
    var ov = document.getElementById('chOverlay');
    if (!ov) { ov = document.createElement('div'); ov.id = 'chOverlay'; document.body.appendChild(ov); }
    ov.setAttribute('lang', lang());
    ov.innerHTML = shell();
    ov.querySelector('.ch-close').addEventListener('click', closeChanting);
    ov.querySelectorAll('.ch-tab').forEach(function (b) {
      b.addEventListener('click', function () { showTab(ov, b.getAttribute('data-t')); });
    });
    ov.querySelector('.ch-subnav-in').addEventListener('click', function (e) {
      var c = e.target.closest('.ch-chip'); if (c) scrollToAnchor(ov, c.getAttribute('data-go'));
    });
    var saved = null; try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    ov.scrollTop = 0;
    showTab(ov, startTab || saved || TABS[0].id, true);
    return ov;
  }

  /* ----------------------- open / close / history ----------------------- */
  function onKey(e) { if (e.key === 'Escape') closeChanting(); }
  function onPop() { if (pushed) { pushed = false; hide(); } }
  function hide() {
    var ov = document.getElementById('chOverlay'); if (ov) ov.style.display = 'none';
    if (spy) { spy.disconnect(); spy = null; }
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }

  window.openChanting = function (tabId) {
    var dd = document.getElementById('myDropdown'); if (dd) dd.style.display = 'none';
    injectStyle();
    var ov = build(typeof tabId === 'string' ? tabId : null);
    ov.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    if (!pushed) { try { history.pushState({ ch: 1 }, ''); pushed = true; } catch (e) { pushed = false; } }
    setTimeout(function () { stickyOffsets(ov); }, 0);
  };
  window.closeChanting = function () { if (pushed) history.back(); else hide(); };
  window.addEventListener('popstate', onPop);
})();
