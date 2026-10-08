/* =====================================================================
   buddha-recitation.js  —  බුද්ධ වර්ෂ සජ්ඣායනය  /  Buddha Varsha Recitation
   ---------------------------------------------------------------------
   • සජ්ඣායනය (chanting.js) පිටුවේ පළමු tab එක ලෙස පෙනේ.
   • දිනය ඇතුළත් කිරීමක් නැත – ප්‍රධාන ඇප් එකේ තෝරා ඇති දිනයේම ගණනය
     (window.BuddhaState, script.js හි calculateAll() මගින් සකසයි) භාවිතා කරයි.
   • භාෂාව  : currentLang ('si' | 'en')     Theme : body.dark-mode
   • අන්තර්ගතය : නමස්කාරය → බුද්ධ චරිත පාළි → ගෙවුණු / ඉතිරි කාලය → අද දිනයේ ප්‍රකාශනය → අර්ථය
   ===================================================================== */
(function () {
  'use strict';

  var D = {
 "NUM": {
  "en": {
   "units": [
    "",
    "eka",
    "dve",
    "tīṇi",
    "cattāri",
    "pañca",
    "cha",
    "satta",
    "aṭṭha",
    "nava"
   ],
   "teens": [
    "dasa",
    "ekādasa",
    "dvādasa",
    "terasa",
    "cuddasa",
    "paṇṇarasa",
    "soḷasa",
    "sattarasa",
    "aṭṭhārasa",
    "ekūnavīsati"
   ],
   "tens": [
    "",
    "dasa",
    "vīsati",
    "tiṃsati",
    "cattāḷīsati",
    "paññāsa",
    "saṭṭhi",
    "sattati",
    "asīti",
    "navuti"
   ],
   "compounds": {
    "2": [
     "ekavīsati",
     "dvāvīsati",
     "tevīsati",
     "catuvīsati",
     "pañcavīsati",
     "chabbīsati",
     "sattavīsati",
     "aṭṭhavīsati"
    ],
    "3": [
     "ekatiṃsati",
     "dvattiṃsati",
     "tettiṃsati",
     "catuttiṃsati",
     "pañcatiṃsati",
     "chattiṃsati",
     "sattatiṃsati",
     "aṭṭhatiṃsati"
    ],
    "4": [
     "ekacattāḷīsati",
     "dvecattāḷīsati",
     "tecattāḷīsati",
     "catucattāḷīsati",
     "pañcacattāḷīsati",
     "chacattāḷīsati",
     "sattacattāḷīsati",
     "aṭṭhacattāḷīsati"
    ],
    "5": [
     "ekapaññāsa",
     "dvepaññāsa",
     "tepaññāsa",
     "catupaññāsa",
     "pañcapaññāsa",
     "chappaññāsa",
     "sattapaññāsa",
     "aṭṭhapaññāsa"
    ],
    "6": [
     "ekasaṭṭhi",
     "dvesaṭṭhi",
     "tesaṭṭhi",
     "catusaṭṭhi",
     "pañcasaṭṭhi",
     "chasaṭṭhi",
     "sattasaṭṭhi",
     "aṭṭhasaṭṭhi"
    ],
    "7": [
     "ekasattati",
     "dvesattati",
     "tesattati",
     "catusattati",
     "pañcasattati",
     "chasattati",
     "sattasattati",
     "aṭṭhasattati"
    ],
    "8": [
     "ekāsīti",
     "dvyāsīti",
     "tyāsīti",
     "caturāsīti",
     "pañcāsīti",
     "chaḷāsīti",
     "sattāsīti",
     "aṭṭhāsīti"
    ],
    "9": [
     "ekanavuti",
     "dvenavuti",
     "tenavuti",
     "catunavuti",
     "pañcanavuti",
     "channavuti",
     "sattanavuti",
     "aṭṭhanavuti"
    ]
   },
   "nearTens": {
    "29": "ekūnatiṃsati",
    "39": "ekūnacattāḷīsati",
    "49": "ekūnapaññāsa",
    "59": "ekūnasaṭṭhi",
    "69": "ekūnasattati",
    "79": "ekūnāsīti",
    "89": "ekūnanavuti",
    "99": "ekūnasata"
   },
   "hundreds": [
    "",
    "ekasata",
    "dvesata",
    "tisata",
    "catusata",
    "pañcasata",
    "chasata",
    "sattasata",
    "aṭṭhasata",
    "navasata"
   ],
   "thousands": [
    "",
    "ekasahassa",
    "dvesahassa",
    "tisahassa",
    "catusahassa",
    "pañcasahassa"
   ]
  },
  "si": {
   "units": [
    "",
    "ඒක",
    "ද්වේ",
    "තීණි",
    "චත්තාරි",
    "පඤ්ච",
    "ඡ",
    "සත්ත",
    "අට්ඨ",
    "නව"
   ],
   "teens": [
    "දස",
    "ඒකාදස",
    "ද්වාදස",
    "තේරස",
    "චුද්දස",
    "පණ්ණරස",
    "සෝළස",
    "සත්තරස",
    "අට්ඨාරස",
    "ඒකූනවීසති"
   ],
   "tens": [
    "",
    "දස",
    "වීසති",
    "තිංසති",
    "චත්තාළීසති",
    "පඤ්ඤාස",
    "සට්ඨි",
    "සත්තති",
    "අසීති",
    "නවුති"
   ],
   "compounds": {
    "2": [
     "ඒකවීසති",
     "ද්වාවීසති",
     "තේවීසති",
     "චතුවීසති",
     "පඤ්චවීසති",
     "ඡබ්බීසති",
     "සත්තවීසති",
     "අට්ඨවීසති"
    ],
    "3": [
     "ඒකතිංසති",
     "ද්වත්තිංසති",
     "තෙත්තිංසති",
     "චතුත්තිංසති",
     "පඤ්චතිංසති",
     "ඡත්තිංසති",
     "සත්තතිංසති",
     "අට්ඨතිංසති"
    ],
    "4": [
     "ඒකචත්තාළීසති",
     "ද්වේචත්තාළීසති",
     "තේචත්තාළීසති",
     "චතුචත්තාළීසති",
     "පඤ්චචත්තාළීසති",
     "ඡචත්තාළීසති",
     "සත්තචත්තාළීසති",
     "අට්ඨචත්තාළීසති"
    ],
    "5": [
     "ඒකපඤ්ඤාස",
     "ද්වේපඤ්ඤාස",
     "තේපඤ්ඤාස",
     "චතුපඤ්ඤාස",
     "පඤ්චපඤ්ඤාස",
     "ඡප්පඤ්ඤාස",
     "සත්තපඤ්ඤාස",
     "අට්ඨපඤ්ඤාස"
    ],
    "6": [
     "ඒකසට්ඨි",
     "ද්වේසට්ඨි",
     "තේසට්ඨි",
     "චතුසට්ඨි",
     "පඤ්චසට්ඨි",
     "ඡසට්ඨි",
     "සත්තසට්ඨි",
     "අට්ඨසට්ඨි"
    ],
    "7": [
     "ඒකසත්තති",
     "ද්වේසත්තති",
     "තේසත්තති",
     "චතුසත්තති",
     "පඤ්චසත්තති",
     "ඡසත්තති",
     "සත්තසත්තති",
     "අට්ඨසත්තති"
    ],
    "8": [
     "ඒකාසීති",
     "ද්ව්‍යාසීති",
     "ත්‍යාසීති",
     "චතුරාසීති",
     "පඤ්චාසීති",
     "ඡළාසීති",
     "සත්තාසීති",
     "අට්ඨාසීති"
    ],
    "9": [
     "ඒකනවුති",
     "ද්වේනවුති",
     "තේනවුති",
     "චතුනවුති",
     "පඤ්චනවුති",
     "ඡන්නවුති",
     "සත්තනවුති",
     "අට්ඨනවුති"
    ]
   },
   "nearTens": {
    "29": "ඒකූනතිංසති",
    "39": "ඒකූනචත්තාළීසති",
    "49": "ඒකූනපඤ්ඤාස",
    "59": "ඒකූනසට්ඨි",
    "69": "ඒකූනසත්තති",
    "79": "ඒකූනාසීති",
    "89": "ඒකූනනවුති",
    "99": "ඒකූනසත"
   },
   "hundreds": [
    "",
    "ඒකසත",
    "ද්වේසත",
    "තිසත",
    "චතුසත",
    "පඤ්චසත",
    "ඡසත",
    "සත්තසත",
    "අට්ඨසත",
    "නවසත"
   ],
   "thousands": [
    "",
    "ඒකසහස්ස",
    "ද්වේසහස්ස",
    "තිසහස්ස",
    "චතුසහස්ස",
    "පඤ්චසහස්ස"
   ]
  }
 },
 "W": {
  "si": {
   "y": "සංවච්ඡරානි",
   "m": "මාසානි",
   "d": "දිවසානි",
   "ceva": "චේව",
   "ca": "ච",
   "atk": "අතික්කන්තානි",
   "atkN": "අතික්කන්තං",
   "atkM": "අතික්කන්තෝ",
   "avs": "අවසිට්ඨානි",
   "avsN": "අවසිට්ඨං",
   "avsM": "අවසිට්ඨෝ",
   "one_d": "ඒකං දිවසං",
   "one_m": "ඒකෝ මාසෝ",
   "one_m_acc": "ඒකමාසං",
   "one_y": "ඒකං සංවච්ඡරං",
   "adh_d": "ඒකදිවසාධික",
   "adh_m": "ඒකමාසාධික",
   "adh_y": "ඒකසංවච්ඡරාධික",
   "idani": "ඉදානි ඛෝ පන",
   "ayam": "අයං",
   "samvac": "සංවච්ඡරේ",
   "utu": "උතු",
   "asmim": "අස්මිං උතුම්හි",
   "masassa": "මාසස්ස",
   "dattha": "දට්ඨබ්බං"
  },
  "en": {
   "y": "saṃvaccharāni",
   "m": "māsāni",
   "d": "divasāni",
   "ceva": "ceva",
   "ca": "ca",
   "atk": "atikkantāni",
   "atkN": "atikkantaṃ",
   "atkM": "atikkanto",
   "avs": "avasiṭṭhāni",
   "avsN": "avasiṭṭhaṃ",
   "avsM": "avasiṭṭho",
   "one_d": "ekaṃ divasaṃ",
   "one_m": "eko māso",
   "one_m_acc": "ekamāsaṃ",
   "one_y": "ekaṃ saṃvaccharaṃ",
   "adh_d": "ekadivasādhika",
   "adh_m": "ekamāsādhika",
   "adh_y": "ekasaṃvaccharādhika",
   "idani": "Idāni kho pana",
   "ayam": "Ayaṃ",
   "samvac": "saṃvacchare",
   "utu": "utu",
   "asmim": "asmiṃ utumhi",
   "masassa": "māsassa",
   "dattha": "daṭṭhabbaṃ"
  }
 },
 "ANI": {
  "en": [
   "Sappa",
   "Assa",
   "Aja",
   "Kapi",
   "Kukkuṭa",
   "Soṇa",
   "Sūkara",
   "Mūsika",
   "Vasabha",
   "Vyaggha",
   "Sasa",
   "Nāga"
  ],
  "si": [
   "සප්ප",
   "අස්ස",
   "අජ",
   "කපි",
   "කුක්කුට",
   "සෝණ",
   "සූකර",
   "මූසික",
   "වසභ",
   "ව්‍යග්ඝ",
   "සස",
   "නාග"
  ]
 },
 "UTU": {
  "en": {
   "hemanta": "Hemanta",
   "gimhana": "Gimhāna",
   "vassana": "Vassāna"
  },
  "si": {
   "hemanta": "හේමන්ත",
   "gimhana": "ගිම්හාන",
   "vassana": "වස්සාන"
  }
 },
 "MONTH_EN": {
  "ඵුස්ස": "Phussa",
  "මාඝ": "Māgha",
  "ඵග්ගුන": "Phagguṇa",
  "ඵග්ගුණ": "Phagguṇa",
  "චිත්ත": "Citta",
  "වේසාඛ": "Vesākha",
  "ජෙට්ඨ": "Jeṭṭha",
  "ආසාළ්හ": "Āsāḷha",
  "සාවන": "Sāvana",
  "පොට්ඨපාද": "Poṭṭhapāda",
  "අස්සයුජ": "Assayuja",
  "කත්තික": "Kattika",
  "මාඝසිර": "Māgasira"
 },
 "WEEK": {
  "en": [
   "ravivāram",
   "candavāram",
   "bhummavāram",
   "budhavāram",
   "guruvāram",
   "sukkavāram",
   "soravāram"
  ],
  "si": [
   "රවිවාරං",
   "චන්දවාරං",
   "භුම්මවාරං",
   "බුධවාරං",
   "ගුරුවාරං",
   "සුක්කවාරං",
   "සෝරවාරං"
  ]
 },
 "TITHI": {
  "si": [
   "",
   "පඨමං",
   "දුතියං",
   "තතියං",
   "චතුත්ථං",
   "පඤ්චමං",
   "ඡට්ඨමං",
   "සත්තමං",
   "අට්ඨමං",
   "නවමං",
   "දසමං",
   "එකාදසමං",
   "ද්වාදසමං",
   "තෙරසමං",
   "චුද්දසමං",
   "පණ්ණරසමං"
  ],
  "en": [
   "",
   "Paṭhamaṃ",
   "Dutiyaṃ",
   "Tatiyaṃ",
   "Catutthaṃ",
   "Pañcamaṃ",
   "Chaṭṭhamaṃ",
   "Sattamaṃ",
   "Aṭṭhamaṃ",
   "Navamaṃ",
   "Dasamaṃ",
   "Ekādasamaṃ",
   "Dvādasamaṃ",
   "Terasamaṃ",
   "Cuddasamaṃ",
   "Paṇṇarasamaṃ"
  ]
 },
 "STORY": {
  "si": "අම්හාකං ඛෝ පන භගවා දීපඞ්කරපාදමූලතෝ පට්ඨාය පඨමං දානපාරමී, දුතියං සීලපාරමී, තතියං නෙක්ඛම්මපාරමී, චතුත්ථං පඤ්ඤාපාරමී, පඤ්චමං විරියපාරමී, ඡට්ඨමං ඛන්තිපාරමී, සත්තමං සච්චපාරමී, අට්ඨමං අධිට්ඨානපාරමී, නවමං මෙත්තාපාරමී, දසමං උපෙක්ඛාපාරමීති දස පාරමියෝ, දස උපපාරමියෝ, දස පරමත්ථපාරමියෝති සමත්තිංස පාරමියෝ පූරෙත්වා, වෙස්සන්තරත්තභාවෙ නිබ්බත්තිත්වා පඤ්ච මහාපරිච්චාගේ කත්වා, තුසිතපුරෙ නිබ්බත්තිත්වා, චතූහි මහාදේවරාජූහි කතාරාධනං පටිච්ච පඤ්ච මහාවිලෝකනෙ විලෝකෙත්වා, සුද්ධෝදනමහාරාජානං නිස්සාය මහාමායාදේවියා කුච්ඡිස්මිං පටිසන්ධිං ගණ්හිත්වා, දසමාසච්චයේන මාතුකුච්ඡිතෝ නික්ඛමිත්වා, ඒකූනතිංසතිමේ සංවච්ඡරේ මහාභිනික්ඛමනං නික්ඛමිත්වා, ඡබ්බස්සානි මහාපධානං පදහිත්වා, පඤ්චතිංසතිමේ සංවච්ඡරේ වේසාඛපුණ්ණමියං සම්මාසම්බෝධිං අභිසම්බුජ්ඣිත්වා, පඤ්චචත්තාළීස සංවච්ඡරානි වසිත්වා, සප්පසංවච්ඡරේ වේසාඛපුණ්ණමියං භුම්මවාරේ පරිනිබ්බායි. තස්ස ඛෝ පන භගවතෝ අරහතෝ සම්මාසම්බුද්ධස්ස සාසනං පඤ්ච වස්සසහස්සානි පවත්තිස්සති.",
  "en": "Amhākaṃ kho pana bhagavā Dīpaṅkarapādamūlato paṭṭhāya paṭhamaṃ dānapāramī, dutiyaṃ sīlapāramī, tatiyaṃ nekkhammapāramī, catutthaṃ paññāpāramī, pañcamaṃ viriyapāramī, chaṭṭhamaṃ khantipāramī, sattamaṃ saccapāramī, aṭṭhamaṃ adhiṭṭhānapāramī, navamaṃ mettāpāramī, dasamaṃ upekkhāpāramīti dasa pāramiyo, dasa upapāramiyo, dasa paramatthapāramiyoti samattiṃsa pāramiyo pūretvā, Vessantarattabhāve nibbattitvā pañca mahāpariccāge katvā, Tusitapure nibbattitvā, catūhi mahādevarājūhi katārādhanaṃ paṭicca pañca mahāvilokanāne viloketvā, Suddhodanamahārājānaṃ nissāya Mahāmāyādeviyā kucchismiṃ paṭisandhiṃ gaṇhitvā, dasamāsaccayena mātukucchito nikkhamitvā, ekūnatiṃsatime saṃvacchare mahābhinikkhamanaṃ nikkhamitvā, chabbassāni mahāpadhānaṃ padahitvā, pañcatiṃsatime saṃvacchare Vesākhapuṇṇamiyaṃ sammāsambodhiṃ abhisambujjhitvā, pañcacattāḷīsa saṃvaccharāni vasitvā, Sappasaṃvacchare Vesākhapuṇṇamiyaṃ Bhummavāre parinibbāyi. Tassa kho pana Bhagavato Arahato Sammāsambuddhassa sāsanaṃ pañca vassasahassāni pavattissati."
 },
 "NAMO": {
  "si": "නමෝ තස්ස භගවතෝ අරහතෝ සම්මාසම්බුද්ධස්ස !!!",
  "en": "Namo tassa bhagavato arahato sammāsambuddhassa !!!"
 }
};

  /* ------------------------------------------------------------------
     Pali numbers
     ------------------------------------------------------------------ */
  function numToPali(n, lang) {
    if (!n) return '';
    var L = D.NUM[lang];
    if (n < 10) return L.units[n];
    if (n < 20) return L.teens[n - 10];
    if (n < 100) {
      var t = Math.floor(n / 10), o = n % 10;
      if (o === 0) return L.tens[t];
      if (o === 9 && L.nearTens[n]) return L.nearTens[n];
      return L.compounds[t][o - 1];
    }
    if (n < 1000) {
      var h = Math.floor(n / 100), r = n % 100;
      return r === 0 ? L.hundreds[h] : L.hundreds[h] + '-' + numToPali(r, lang);
    }
    var th = Math.floor(n / 1000), rest = n % 1000;
    var tw = L.thousands[th] || String(th);
    return rest === 0 ? tw : tw + '-' + numToPali(rest, lang);
  }

  /* ගෙවුණු / ඉතිරි කාලය : "2561 සංවච්ඡරානි චේව 7 මාසානි ච 18 දිවසානි අතික්කන්තානි" */
  function countPhrase(y, m, d, lang, mode) {
    var w = D.W[lang], atk = mode === 'atk';
    var pl = atk ? w.atk : w.avs, sgN = atk ? w.atkN : w.avsN, sgM = atk ? w.atkM : w.avsM;
    var n = (y > 0) + (m > 0) + (d > 0);
    if (n === 0) return '';
    if (n === 1) {                                   // එක් ඒකකයක් පමණක්
      if (d === 1) return w.one_d + ' ' + sgN;
      if (m === 1) return w.one_m + ' ' + sgM;
      if (y === 1) return w.one_y + ' ' + sgN;
      if (y) return numToPali(y, lang) + ' ' + w.y + ' ' + pl;
      if (m) return numToPali(m, lang) + ' ' + w.m + ' ' + pl;
      return numToPali(d, lang) + ' ' + w.d + ' ' + pl;
    }
    // 1 ක් වන ඒකකය "ඒක…ධික" උපසර්ගයක් ලෙස:
    //   • දින 1 ක් නම් → මාස පද ඇත්නම් ඒවාට පෙරටුව ("… සංවච්ඡරානි චේව ඒකදිවසාධික චත්තාරි මාසානි …"),
    //                     මාස නැත්නම් වර්ෂ පදයට පෙරටුව ("ඒකදිවසාධික … සංවච්ඡරානි …")
    //   • මාස 1 ක් නම් → වර්ෂ පදයට පෙරටුව ("ඒකමාසාධික … සංවච්ඡරානි …")
    var yS = y > 1 ? numToPali(y, lang) + ' ' + w.y : '';
    // මාස 1 ක් සහ දින 1 ක් එකට ඇති විට : "… සංවච්ඡරානි චේව ඒකදිවසාධික ඒකමාසං අතික්කන්තං / අවසිට්ඨං"
    if (m === 1 && d === 1 && y !== 1) {
      return ((yS ? yS + ' ' + w.ceva + ' ' : '') + w.adh_d + ' ' + w.one_m_acc + ' ' + sgN).trim();
    }
    var startPre = [];
    var mS = m > 1 ? numToPali(m, lang) + ' ' + w.m : '';
    var dS = d > 1 ? numToPali(d, lang) + ' ' + w.d : '';
    if (y === 1) startPre.push(w.adh_y);
    if (m === 1) startPre.push(w.adh_m);
    if (d === 1) {
      if (mS) mS = w.adh_d + ' ' + mS;
      else startPre.push(w.adh_d);
    }
    var body;
    if (yS && mS && dS)      body = yS + ' ' + w.ceva + ' ' + mS + ' ' + w.ca + ' ' + dS;
    else if (yS && mS)       body = yS + ' ' + w.ceva + ' ' + mS;
    else if (mS && dS)       body = mS + ' ' + w.ca + ' ' + dS;
    else if (yS && dS)       body = yS + ' ' + w.ca + ' ' + dS;
    else                     body = yS || mS || dS;
    var pre = startPre.length ? startPre.join(' ') + ' ' : '';
    return (pre + body).trim() + ' ' + pl;
  }

  /* ------------------------------------------------------------------ */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function monthName(monthSi, lang) {
    var adhi = monthSi.indexOf('අධි') === 0;
    var base = adhi ? monthSi.slice(2) : monthSi;
    if (lang === 'si') return monthSi;
    var e = D.MONTH_EN[base] || base;
    return adhi ? 'Adhi' + e.charAt(0).toLowerCase() + e.slice(1) : e;
  }
  function seasonKey(k) { return (k === 'Gimhana') ? 'gimhana' : (k === 'Vassana') ? 'vassana' : 'hemanta'; }

  /* ------------------------------------------------------------------ */
  var CSS = '\
#chOverlay .rc-card{background:linear-gradient(135deg,var(--m800),var(--m600) 60%,var(--g600));color:#f3fcf7;border-radius:16px;padding:16px 14px 14px;margin:6px 0 16px;box-shadow:var(--sh);text-align:center}\
body.dark-mode #chOverlay .rc-card{background:linear-gradient(135deg,#0d5539,#1a8558 60%,#8a6508)}\
#chOverlay .rc-card h3{margin:0 0 2px;font-family:var(--serif);font-size:1.1rem;color:#f3fcf7;line-height:1.5}\
#chOverlay .rc-date{font-size:.85rem;opacity:.92;margin-bottom:10px}\
#chOverlay .rc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\
#chOverlay .rc-box{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);border-radius:12px;padding:8px 4px}\
#chOverlay .rc-box small{display:block;font-size:.72rem;opacity:.9;font-weight:700}\
#chOverlay .rc-box b{display:block;font-size:1.55rem;line-height:1.25;color:#f9e9b8}\
#chOverlay .rc-info{margin-top:10px;font-size:.84rem;line-height:1.7}\
#chOverlay .rc-info span{display:inline-block;margin:0 6px}\
#chOverlay .rc-poya{display:inline-block;margin-top:8px;background:#f9e9b8;color:#6b4c07;font-weight:800;font-size:.8rem;padding:2px 14px;border-radius:30px}\
#chOverlay .rc-pali p{margin:0 0 14px;line-height:2.1}\
#chOverlay .rc-pali p:last-child{margin-bottom:0}\
#chOverlay .rc-today{display:block;background:linear-gradient(135deg,#fdf5db,#f9e9b8);border:2px solid var(--g500);border-radius:12px;padding:12px 12px;color:#6b4c07;font-weight:700;text-align:center}\
body.dark-mode #chOverlay .rc-today{background:linear-gradient(135deg,#3a2810,#4a3418);color:#f2d478;border-color:#b8860b}\
#chOverlay .rc-mean p{margin:0 0 10px}\
#chOverlay .rc-mean p:last-child{margin-bottom:0}\
#chOverlay .rc-mean strong{color:var(--m800)}\
body.dark-mode #chOverlay .rc-mean strong{color:var(--g400)}\
#chOverlay .rc-namo-line{font-family:var(--serif);font-size:1.12rem;font-weight:700;color:var(--m900);line-height:2}\
body.dark-mode #chOverlay .rc-namo-line{color:var(--g400)}\
#chOverlay .rc-namo-label{font-size:.74rem;font-weight:800;color:var(--g700);letter-spacing:.4px;margin-bottom:4px}';

  function injectCss() {
    if (document.getElementById('rcStyle')) return;
    var st = document.createElement('style'); st.id = 'rcStyle'; st.textContent = CSS; document.head.appendChild(st);
  }

  /* ------------------------------------------------------------------ */
  function getState() {
    var inp = document.getElementById('inputDate');
    if (typeof calculateAll === 'function' && inp && inp.value && (!window.BuddhaState || window.BuddhaState.dateStr !== inp.value)) {
      try { calculateAll(); } catch (e) {}
    }
    return window.BuddhaState || null;
  }

  function meaningHtml(st, lang, names) {
    var si = lang === 'si';
    var out = [];
    // 1. බුද්ධ චරිත අර්ථය
    out.push(si
      ? '<p></strong> අපගේ භාග්‍යවතුන් වහන්සේ දීපංකර බුදුන්ගේ පාමුල සිට දාන, සීල, නෙක්ඛම්ම, පඤ්ඤා, විරිය, ඛන්ති, සච්ච, අධිට්ඨාන, මෙත්තා, උපෙක්ඛා යන දස පාරමී, දස උපපාරමී, දස පරමත්ථ පාරමී වශයෙන් පාරමිතා තිහක් පුරා, වෙස්සන්තර අත්බවෙහි උපත ලැබ මහා පරිත්‍යාග පහක් කොට, තුසිත දෙව්ලොව උපන්නේ ය. සතර මහා දිව්‍ය රාජයන්ගේ ආරාධනය අනුව මහා විලෝකන පහ විලෝකනය කොට, සුද්ධෝදන මහරජු නිසා මහාමායා දේවියගේ කුසෙහි පිළිසිඳ ගත්තේ ය. මාස දහයක් ගතවූ පසු මවගේ කුසින් බිහි වී, විසි නව වැනි වියේ මහාභිනිෂ්ක්‍රමණය කොට, වසර හයක් මහා පධන වීර්යය කොට, තිස් පස්වන වියේ වෙසක් පුන් පොහෝ දින සම්මා සම්බෝධිය අවබෝධ කොට, වසර හතළිස් පහක් වැඩ සිට, සප්ප (සර්ප) සංවත්සරයේ වෙසක් පුන් පොහෝ දින අඟහරුවාදා පිරිනිවන් පා වදාළ සේක. ඒ අර්හත් සම්මා සම්බුද්ධ භාග්‍යවතුන් වහන්සේගේ සාසනය වසර පන්දහසක් පවතින්නේ ය.</p>'
      : '<p></strong> From the feet of Dīpaṅkara Buddha onward, our Blessed One fulfilled thirty pāramīs — the ten pāramīs (giving, virtue, renunciation, wisdom, energy, patience, truthfulness, resolution, loving-kindness, equanimity), the ten upapāramīs and the ten paramattha-pāramīs. Born in the Vessantara existence he made the five great renunciations, and was then reborn in the Tusita realm. At the request of the four great deva-kings he made the five great investigations, took conception in the womb of Queen Mahāmāyā through King Suddhodana, and after ten months was born. In his twenty-ninth year he made the Great Renunciation, strove for six years, and in his thirty-fifth year, on the Vesākha full-moon day, awakened to perfect enlightenment. After teaching for forty-five years, in the Sappa (Snake) year on the Vesākha full-moon day, a Tuesday, he attained parinibbāna. The Dispensation of that Blessed One, the Arahant, the Fully Enlightened Buddha, will endure for five thousand years.</p>');
    // 2. ගෙවුණු / ඉතිරි
    function span(o, sep) {
      var p = [];
      if (si) {
        if (o.y > 0) p.push('වසර ' + o.y + 'ක්ද');
        if (o.m > 0) p.push('මාස ' + o.m + 'ක්ද');
        if (o.d > 0) p.push('දින ' + o.d + 'ක්ද');
      } else {
        if (o.y > 0) p.push(o.y + (o.y === 1 ? ' year' : ' years'));
        if (o.m > 0) p.push(o.m + (o.m === 1 ? ' month' : ' months'));
        if (o.d > 0) p.push(o.d + (o.d === 1 ? ' day' : ' days'));
      }
      return p;
    }
    var a = span(st.atk), v = span(st.avs);
    out.push(si
      ? '<p>' + (a.length ? 'දැන් ' + a.join(' ') + ' ගෙවී ගොස් ඇත.' : 'තවම කිසිදු කාලයක් ගෙවී නොමැත.') + '</p>'
      : '<p>' + (a.length ? 'Now ' + a.join(', ') + ' have elapsed.' : 'No time has yet elapsed.') + '</p>');
    out.push(si
      ? '<p>' + (v.length ? v.join(' ') + ' ඉතිරිව ඇත.' : 'ඉතිරිව කිසිදු කාලයක් නොමැත.') + '</p>'
      : '<p>' + (v.length ? v.join(', ') + ' remain.' : 'No time remains.') + '</p>');
    // 3. අද දිනය
    var wk = (si ? ['ඉරිදා','සඳුදා','අඟහරුවාදා','බදාදා','බ්‍රහස්පතින්දා','සිකුරාදා','සෙනසුරාදා'] : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'])[st.weekIdx];
    var ord = si
      ? ['','පළමු','දෙවන','තුන්වන','සිව්වන','පස්වන','හයවන','හත්වන','අටවන','නවවන','දසවන','එකොළොස්වන','දොළොස්වන','තෙළෙස්වන','තුදුස්වන','පසළොස්වන']
      : ['','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth'];
    if (si) {
      out.push('<p>මෙය <strong>' + names.animal + '</strong> සංවත්සරයයි; <strong>' + names.utu + '</strong> ඍතුවයි; මේ ඍතුවෙහි <strong>' + names.month + '</strong> මාසයේ ' +
        (st.paksha === 'sukka' ? 'සුක්ක (පුර)' : 'කණ්හ (අව)') + ' පක්ෂයේ <strong>' + ord[st.tithi] + '</strong> දිනය (තිථිය) <strong>' + wk + '</strong> යැයි දත යුතුය.</p>');
    } else {
      out.push('<p>This is the <strong>' + names.animal + '</strong> saṃvacchara (year), the <strong>' + names.utu + '</strong> season. In this season, in the month of <strong>' + names.month + '</strong>, on the <strong>' + ord[st.tithi] + '</strong> day (tithi) of the ' +
        (st.paksha === 'sukka' ? 'Sukka (waxing)' : 'Kaṇha (waning)') + ' pakkha, a <strong>' + wk + '</strong> — thus it should be understood.</p>');
    }
    return out.join('');
  }

  function renderHtml(lang) {
    injectCss();
    var si = lang === 'si';
    var st = getState();
    if (!st) return '<div class="ch-load"><b>⚠️</b>' + (si ? 'දිනය ලබා ගත නොහැකි විය.' : 'Could not read the selected date.') + '</div>';

    var W = D.W[lang];
    var animal = D.ANI[lang][st.animalIdx];
    var utuK = seasonKey(st.season);
    var utu = D.UTU[lang][utuK];
    var month = monthName(st.monthSi, lang);
    var tithi = D.TITHI[lang][st.tithi];
    var week = D.WEEK[lang][st.weekIdx];
    var pak = si ? (st.paksha === 'sukka' ? 'සුක්ක පක්ඛෙ' : 'කණ්හ පක්ඛෙ') : (st.paksha === 'sukka' ? 'sukka-pakkhe' : 'kaṇha-pakkhe');

    // අද දිනයේ ප්‍රකාශනය
    var today;
    if (si) {
      today = W.ayam + ' ' + animal + ' ' + W.samvac + ' ' + utu + ' ' + W.utu + ', ' + W.asmim + ' ' + month + ' ' + W.masassa + ' ' + pak + ' ' + tithi + ' ' + week.slice(0, -1) + 'මිදන්ති ' + W.dattha + '.';
    } else {
      today = W.ayam + ' ' + animal + ' ' + W.samvac + ' ' + utu + '-' + W.utu + ', ' + W.asmim + ' ' + month + '-' + W.masassa + ' ' + pak + ' ' + tithi.toLowerCase() + ' ' + week.slice(0, -1) + 'midanti ' + W.dattha + '.';
    }

    var atk = countPhrase(st.atk.y, st.atk.m, st.atk.d, lang, 'atk');
    var avs = countPhrase(st.avs.y, st.avs.m, st.avs.d, lang, 'avs');

    // දිනය (ප්‍රධාන ඇප් එකේ දිනයම, කියවීමට පමණි)
    var p = st.dateStr.split('-'), gd = new Date(+p[0], +p[1] - 1, +p[2]);
    var SI_M = ['ජනවාරි','පෙබරවාරි','මාර්තු','අප්‍රේල්','මැයි','ජූනි','ජූලි','අගෝස්තු','සැප්තැම්බර්','ඔක්තෝබර්','නොවැම්බර්','දෙසැම්බර්'];
    var SI_W = ['ඉරිදා','සඳුදා','අඟහරුවාදා','බදාදා','බ්‍රහස්පතින්දා','සිකුරාදා','සෙනසුරාදා'];
    var EN_M = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var EN_W = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dateTxt = si ? (gd.getFullYear() + ' ' + SI_M[gd.getMonth()] + ' ' + gd.getDate() + ', ' + SI_W[gd.getDay()])
                     : (EN_W[gd.getDay()] + ', ' + gd.getDate() + ' ' + EN_M[gd.getMonth()] + ' ' + gd.getFullYear());

    var labels = si ? { t: 'අදට නියමිත බුද්ධ වර්ෂය', y: 'වර්ෂය', m: 'මාසය', d: 'දිනය', an: 'සංවච්ඡරය', ut: 'සෘතුව', mo: 'මාසය', poya: 'උපෝසථ දිනය', nam: 'නමස්කාරය', pal: '📜 පාළි සජ්ඣායනය', mea: '🇱🇰 සිංහල අර්ථය' }
                    : { t: 'Buddhist Era for the selected date', y: 'Year', m: 'Month', d: 'Day', an: 'Year (animal)', ut: 'Season', mo: 'Month', poya: 'Uposatha day', nam: 'NAMAKĀRA', pal: '📜 Pāḷi recitation', mea: '🌐 Meaning' };

    var html = '';
    html += '<div class="rc-card"><h3>' + labels.t + '</h3><div class="rc-date">' + esc(dateTxt) + '</div>' +
      '<div class="rc-grid"><div class="rc-box"><small>' + labels.y + '</small><b>' + st.bY + '</b></div><div class="rc-box"><small>' + labels.m + '</small><b>' + st.bM + '</b></div><div class="rc-box"><small>' + labels.d + '</small><b>' + st.bD + '</b></div></div>' +
      '<div class="rc-info"><span><strong>' + labels.an + ':</strong> ' + esc(animal) + '</span>|<span><strong>' + labels.ut + ':</strong> ' + esc(utu) + '</span>|<span><strong>' + labels.mo + ':</strong> ' + esc(month) + '</span></div>' +
      (st.isPoya ? '<div class="rc-poya">🌕 ' + labels.poya + '</div>' : '') + '</div>';

    // නමස්කාරය (සජ්ඣායනයට ඉහළින්)
            html += '<div class="ch-namo">' +
      '<div class="rc-namo-line">' + esc(D.NAMO[lang]) + '</div></div>';

    // පාළි සජ්ඣායනය
    html += '<article class="ch-card"><div class="ch-box ch-pali rc-pali" style="white-space:normal" data-l="' + labels.pal + '">' +
      '<p>' + esc(D.STORY[lang]) + '</p>' +
      '<p>' + esc(W.idani) + ' ' + esc(atk) + '.</p>' +
      '<p>' + esc(cap(avs)) + '.</p>' +
      '<p class="rc-today">' + esc(today) + '</p></div>';

    // අර්ථය
    html += '<div class="ch-box ch-mean rc-mean ' + (si ? 'si' : 'en') + '" style="white-space:normal" data-l="' + labels.mea + '">' +
      meaningHtml(st, lang, { animal: esc(animal), utu: esc(utu), month: esc(month) }) + '</div></article>';
    return html;
  }

  (window.ChantingModules = window.ChantingModules || {}).recitation = {
    id: 'recitation',
    title: { si: 'බුද්ධ වර්ෂ සජ්ඣායනය', en: 'Buddha Varsha Recitation' },
    subtitle: { si: 'ප්‍රධාන පිටුවේ තෝරා ඇති දිනයට අනුව', en: 'For the date selected in the app' },
    items: [],
    renderHtml: renderHtml,
    /* රූප රාමුවෙන් පරීක්ෂා කිරීම සඳහා */
    _numToPali: numToPali, _countPhrase: countPhrase
  };
})();
