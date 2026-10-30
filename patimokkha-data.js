/* Bhikkhu Pātimokkha data — one continuous Pali block per section, meaning shown on demand.
 * Pali: Sinhala script (pali) + IAST (translit). Meaning: Sinhala (si) / English (en).
 * Source (Pali + Sinhala): කිතුල්ගොඩ අරණ්‍ය සේනාසනය, භික්ෂු ප්‍රාතිමෝක්ෂය. Pali in Sinhala script uses short ෙ/ො (එ/ඔ).
 * Optional part fields: notes_pali / notes_si = [{at,note,note_en?}] (book footnotes); note_si / note_en = footnote block of the whole part; vagga = chapter-end line;
 * gloss_si / source_si = extra notes; title_si/title_en = sub-heading; group_si/group_en = main heading (first part of a group);
 * speaker_si/speaker_en = who speaks (dialogues); rubric_en = English of the book's Sinhala instructions (si = the book's own Sinhala; "…" marks where the Pali goes).
 * Section fields: cat/cat_si/cat_en = category (nav + banner); split = 'none'|'title'|'part' (how a text section is cut into cards; default 'part');
 * count_si/count_en = rule count in words (rules sections). Part role 'end' = centred closing line(s) (attached to the previous card; pali may be empty).
 * vagga = {pali,translit,si,en, num,name_si,name_en,from,to,count_si,count_en}: chapter-end line carried by the LAST rule of the chapter (num/name/from/to give the chapter heading).
 * Sections from 'pavarana-pubbakarana' onward (Pavāraṇā, formal acts, Appendix) are taken from the book's later pages; all English is a new translation (the book has none). */
const PATIMOKKHA_DATA = [
 {
  "id": "pubbakarana",
  "si": "පුබ්බකරණ",
  "en": "Pubbakaraṇa",
  "kind": "text",
  "count": null,
  "title_si": "සඞ්ඝුපොසථස්ස පුබ්බකරණාදි විධි",
  "title_en": "Preliminary Procedures for the Saṅgha Uposatha",
  "parts": [
   {
    "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස!!!\nවිනය පුච්ඡා සම්මුති:-\nසුණාතු මෙ භන්තෙ සඞ්ඝො, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මන්තං....(ථෙරං/භික්ඛුං) විනයං පුච්ඡෙය්‍යං.\nවිනය විස්සජ්ජනසම්මුති:-\nසුණාතු මෙ භන්තෙ සඞ්ඝො, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මතා.... (ථෙරෙන/ භික්ඛුනා) විනයං පුට්ඨො විස්සජ්ජෙය්‍යං.\nපුච්ඡා:-\nසම්මජ්ජනී පදීපො ච - උදකං ආසනෙන ච උපොසථස්ස එතානි - පුබ්බකරණන්ති වුච්චති. ඔකාස! සම්මජ්ජනී සම්මජ්ජනකරණං කතං කිං?\nවිස්සජ්ජන:-\nසම්මජ්ජනකරණං නිට්ඨිතං.\nපුච්ඡා:-\nපදීපො ච, පදීපුජ්ජලනං කතං කිං?\nවිස්සජ්ජන:-\nපදීපුජ්ජලනං නිට්ඨිතං./ ඉදානි පන සුරියාලොකස්ස අත්ථිතාය පදීපකිච්චං ඉධ නත්ථි.\nපුච්ඡා:-\nඋදකං ආසනෙන ච, ආසනෙන සහ පානීයපරිභොජනීයඋදකට්ඨපනං කතං කිං?\nවිස්සජ්ජන:-\nආසනෙන සහ පානීයපරිභොජනීයඋදකට්ඨපනං නිට්ඨිතං.\nපුච්ඡා:-\nඋපොසථස්ස එතානි පුබ්බකරණන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nඑතානි චත්තාරි වත්තානි සම්මජ්ජනකරණාදීනි සඞ්ඝසන්නිපාතතො පඨමං කත්තබ්බත්තා, උපොසථස්ස, උපොසථකම්මස්ස පුබ්බකරණන්ති වුච්චති. පුබ්බකරණානීති අක්ඛාතානි.\nපුච්ඡා:-\nඡන්දපාරිසුද්ධි උතුක්ඛානං - භික්ඛුගණනා ච ඔවාදො, උපොසථස්ස එතානි - පුබ්බකිච්චන්ති වුච්චති. ඡන්දපාරිසුද්ධි, ඡන්දාරහානං භික්ඛූනං ඡන්දපාරිසුද්ධි ආහරණං කතං කිං?\nවිස්සජ්ජන:-\nඡන්දපාරිසුද්ධි ආහරණං ඉධ නත්ථි./ ඡන්දපාරිසුද්ධි ආහරණං නිට්ඨිතං.\nපුච්ඡා:-\nඋතුක්ඛානං, හෙමන්තාදීනං තිණ්ණං උතූනං එත්තකං අතික්කන්තං, එත්තකං අවසිට්ඨන්ති. එවං උතු ආචික්ඛනං කතං කිං?\nවිස්සජ්ජන:-\nඋතුනීධ පන සාසනෙ හෙමන්තගිම්හවස්සානානං වසෙන තීණි හොන්ති. අයං.........උතු, අස්මිං උතුම්හි අට්ඨ/දස උපොසථා, ඉමිනා පක්ඛෙන එකො උපොසථො සම්පත්තො, ....... (උපොසථා අතික්කන්තා, /උපොසථො අතික්කන්තො,) ...... (උපොසථා අවසිට්ඨා./උපොසථො අවසිට්ඨො.)\nපුච්ඡා:-\nභික්ඛුගණනා ච, ඉමස්මිං උපොසථග්ගෙ සන්නිපතිතානං භික්ඛූනං ගණනා, කිත්තකා භික්ඛූ හොන්ති?\nවිස්සජ්ජන:-\nඉමස්මිං උපොසථග්ගෙ සන්නිපතිතානං භික්ඛූනං ගණනා ..... භික්ඛූ හොන්ති.\nපුච්ඡා:-\nඔවාදො, භික්ඛුණීනං ඔවාදො දාතබ්බො දින්නො කිං?\nවිස්සජ්ජන:-\nඉදානි පන තාසං නත්ථිතාය සො ච ඔවාදො ඉධ නත්ථි.\nපුච්ඡා:-\nඋපොසථස්ස එතානි පුබ්බකිච්චන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nඑතානි පඤ්චකම්මානි ඡන්දාහරණාදීනි පාතිමොක්ඛුද්දෙසතො පඨමං කත්තබ්බත්තා උපොසථස්ස, උපොසථකම්මස්ස පුබ්බකිච්චන්ති වුච්චති. පුබ්බකිච්චානීති අක්ඛාතානි.\nපුච්ඡා:-\nඋපොසථො යාවතිකා ච භික්ඛූ කම්මප්පත්තා සභාගාපත්තියො ච, න විජ්ජන්ති වජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති පත්තකල්ලන්ති වුච්චති. උපොසථො, තීසු උපොසථ දිවසෙසු චාතුද්දසීපණ්ණරසීසාමග්ගීසු අජ්ජුපොසථො කො උපොසථො?\nවිස්සජ්ජන:-\nඅජ්ජුපොසථො (පණ්ණරසො./ චාතුද්දසො.)\nපුච්ඡා:-\nයාවතිකා ච භික්ඛූ කම්මප්පත්තාති කිං?\nවිස්සජ්ජන:-\nයත්තකා භික්ඛූ තස්ස උපොසථකම්මස්ස, පත්තා යුත්තා අනුරූපා, සබ්බන්තිමෙන පරිච්ඡෙදෙන චත්තාරො භික්ඛූ පකතත්තා. සඞ්ඝෙන අනුක්ඛිත්තා, තෙ ච ඛො හත්ථපාසං අවිජහිත්වා එකසීමායං ඨිතා.\nපුච්ඡා:-\nසභාගාපත්තියො ච න විජ්ජන්ති කිං?\nවිස්සජ්ජන:-\nවිකාලභොජනාදී වත්ථුසභාගාපත්තියො ච න විජ්ජන්ති.\nපුච්ඡා:-\nවජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති කිං?\nවිස්සජ්ජන:-\nගහට්ඨපණ්ඩකාදයො එකවීසති වජ්ජනීයපුග්ගලා හත්ථපාසතො බහිකරණවසෙන වජ්ජෙතබ්බා. තෙ අස්මිං න හොන්ති.\nපුච්ඡා:-\nපත්තකල්ලන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nසඞ්ඝස්ස උපොසථකම්මං ඉමෙහි චතූහි ලක්ඛණෙහි සඞ්ගහිතං පත්තකල්ලන්ති වුච්චති. පත්තකාලවන්තන්ති අක්ඛාතං. පුබ්බකරණපුබ්බකිච්චානි සමාපෙත්වා දෙසිතාපත්තිකස්ස සමග්ගස්ස භික්ඛුසඞ්ඝස්ස අනුමතියා පාතිමොක්ඛං උද්දිසිතුං ආරාධනං කරොමි.",
    "translit": "Namo tassa bhagavato arahato sammā sambuddhassa!!!\nVinaya pucchā sammuti:-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmantaṃ....(Theraṃ/bhikkhuṃ) vinayaṃ puccheyyaṃ.\nVinaya vissajjanasammuti:-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmatā.... (Therena/ bhikkhunā) vinayaṃ puṭṭho vissajjeyyaṃ.\nPucchā:-\nSammajjanī padīpo ca - udakaṃ āsanena ca uposathassa etāni - pubbakaraṇanti vuccati. Okāsa! Sammajjanī sammajjanakaraṇaṃ kataṃ kiṃ?\nVissajjana:-\nSammajjanakaraṇaṃ niṭṭhitaṃ.\nPucchā:-\nPadīpo ca, padīpujjalanaṃ kataṃ kiṃ?\nVissajjana:-\nPadīpujjalanaṃ niṭṭhitaṃ./ Idāni pana suriyālokassa atthitāya padīpakiccaṃ idha natthi.\nPucchā:-\nUdakaṃ āsanena ca, āsanena saha pānīyaparibhojanīyaudakaṭṭhapanaṃ kataṃ kiṃ?\nVissajjana:-\nĀsanena saha pānīyaparibhojanīyaudakaṭṭhapanaṃ niṭṭhitaṃ.\nPucchā:-\nUposathassa etāni pubbakaraṇanti vuccati kiṃ?\nVissajjana:-\nEtāni cattāri vattāni sammajjanakaraṇādīni saṅghasannipātato paṭhamaṃ kattabbattā, uposathassa, uposathakammassa pubbakaraṇanti vuccati. Pubbakaraṇānīti akkhātāni.\nPucchā:-\nChandapārisuddhi utukkhānaṃ - bhikkhugaṇanā ca ovādo, uposathassa etāni - pubbakiccanti vuccati. Chandapārisuddhi, chandārahānaṃ bhikkhūnaṃ chandapārisuddhi āharaṇaṃ kataṃ kiṃ?\nVissajjana:-\nChandapārisuddhi āharaṇaṃ idha natthi./ Chandapārisuddhi āharaṇaṃ niṭṭhitaṃ.\nPucchā:-\nUtukkhānaṃ, hemantādīnaṃ tiṇṇaṃ utūnaṃ ettakaṃ atikkantaṃ, ettakaṃ avasiṭṭhanti. Evaṃ utu ācikkhanaṃ kataṃ kiṃ?\nVissajjana:-\nUtunīdha pana sāsane hemantagimhavassānānaṃ vasena tīṇi honti. Ayaṃ.........Utu, asmiṃ utumhi aṭṭha/dasa uposathā, iminā pakkhena eko uposatho sampatto, ....... (Uposathā atikkantā, /uposatho atikkanto,) ...... (Uposathā avasiṭṭhā./Uposatho avasiṭṭho.)\nPucchā:-\nBhikkhugaṇanā ca, imasmiṃ uposathagge sannipatitānaṃ bhikkhūnaṃ gaṇanā, kittakā bhikkhū honti?\nVissajjana:-\nImasmiṃ uposathagge sannipatitānaṃ bhikkhūnaṃ gaṇanā ..... Bhikkhū honti.\nPucchā:-\nOvādo, bhikkhuṇīnaṃ ovādo dātabbo dinno kiṃ?\nVissajjana:-\nIdāni pana tāsaṃ natthitāya so ca ovādo idha natthi.\nPucchā:-\nUposathassa etāni pubbakiccanti vuccati kiṃ?\nVissajjana:-\nEtāni pañcakammāni chandāharaṇādīni pātimokkhuddesato paṭhamaṃ kattabbattā uposathassa, uposathakammassa pubbakiccanti vuccati. Pubbakiccānīti akkhātāni.\nPucchā:-\nUposatho yāvatikā ca bhikkhū kammappattā sabhāgāpattiyo ca, na vijjanti vajjanīyā ca puggalā tasmiṃ na honti pattakallanti vuccati. Uposatho, tīsu uposatha divasesu cātuddasīpaṇṇarasīsāmaggīsu ajjuposatho ko uposatho?\nVissajjana:-\nAjjuposatho (paṇṇaraso./ Cātuddaso.)\nPucchā:-\nYāvatikā ca bhikkhū kammappattāti kiṃ?\nVissajjana:-\nYattakā bhikkhū tassa uposathakammassa, pattā yuttā anurūpā, sabbantimena paricchedena cattāro bhikkhū pakatattā. Saṅghena anukkhittā, te ca kho hatthapāsaṃ avijahitvā ekasīmāyaṃ ṭhitā.\nPucchā:-\nSabhāgāpattiyo ca na vijjanti kiṃ?\nVissajjana:-\nVikālabhojanādī vatthusabhāgāpattiyo ca na vijjanti.\nPucchā:-\nVajjanīyā ca puggalā tasmiṃ na honti kiṃ?\nVissajjana:-\nGahaṭṭhapaṇḍakādayo ekavīsati vajjanīyapuggalā hatthapāsato bahikaraṇavasena vajjetabbā. Te asmiṃ na honti.\nPucchā:-\nPattakallanti vuccati kiṃ?\nVissajjana:-\nSaṅghassa uposathakammaṃ imehi catūhi lakkhaṇehi saṅgahitaṃ pattakallanti vuccati. Pattakālavantanti akkhātaṃ. Pubbakaraṇapubbakiccāni samāpetvā desitāpattikassa samaggassa bhikkhusaṅghassa anumatiyā pātimokkhaṃ uddisituṃ ārādhanaṃ karomi.",
    "si": "ඒ භාග්‍යවත් අර්හත් සම්මා සම්බුදුරජාණන් වහන්සේට නමස්කාර වේවා!!!\nවිනය ප්‍රශ්න විචාරීමේ සම්මුතිය:-\nස්වාමීනි! සංඝතෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේගෙන්/ භික්‍ෂුවගෙන්) විනය විචාරන්නෙමි.\nවිනය ප්‍රශ්න වලට පිළිතුරු ලබාදීමේ සම්මුතිය:-\nස්වාමීනි! සංඝතෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේ විසින්/භික්‍ෂුව විසින්) විනය විමසන ලද්දේ විසඳන්නෙමි.\nප්‍රශ්න විචාරීම:-\nඇමදීම ද, පහන් දැල්වීම ද, ආසන පැනවීම සමග පැන් තැබීම ද යන ඒවා උපෝසථයේ පූර්වකරණ යැයි කියනු ලැබේ. අවසරයි! ඇමදීම, කෙසේ ද? ඇමදීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඇමදීම නිමා කරන ලදී.\nප්‍රශ්න විචාරීම:-\nපහන් දැල්වීම, කෙසේ ද? පහන් දැල්වීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nපහන් දැල්වීම සිදු කරන ලදී./ දැන් සූර්යාලෝකය ඇති බැවින් පහන් දැල්වීමක් මෙහි නොමැත.\nප්‍රශ්න විචාරීම:-\nඅසුන් පැනවීම සමග පැන් තැබීම, කෙසේ ද? ආසන පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඅසුන් පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම නිමා කරන ලදී.\nප්‍රශ්න විචාරීම:-\nකුමක් නිසා ඒවා උපෝසථයෙහි පූර්වකරණ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nඋපෝසථයෙහි ඇමදීම ආදී ඒ වත් සතර සංඝරත්නයේ පැමිණීමට පළමුව කළ යුතු බැවින් පොහොය කර්මයේ පූර්වකරණ යැයි කියනු ලැබේ. පූර්වකරණය යැයි කියන ලද්දාහු වෙත්.\nප්‍රශ්න විචාරීම:-\nඡන්ද පාරිශුද්ධිය ගෙන ඒම, ඍතුව කීම, භික්‍ෂූන් වහන්සේලා ගණන් කිරීම ද, අවවාද දීම ද යන ඒවා උපෝසථයෙහි පූර්ව කෘත්‍ය යැයි කියනු ලැබේ. ඡන්ද පාරිශුද්ධිය, කෙසේ ද? ඡන්දය දීමට සුදුසු භික්‍ෂූන්ගේ ඡන්ද පාරිශුද්ධිය ගෙන ඒම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඡන්ද පාරිශුද්ධිය ගෙන ඒමක් මෙහි නොමැත./ ඡන්ද පාරිශුද්ධිය ගෙන ඒම නිම කරන ලදී.\nප්‍රශ්න විචාරීම:-\nඍතු කීම, කෙසේ ද? හේමන්ත ආදී ඍතු තුනට අනුව මෙ පමණක් ඉක්ම ගියේ, මෙ පමණක් ශේෂ වූයේ යැයි මෙසේ ඍතුව කීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nමේ ශාසනයෙහි හේමන්ත, ගිම්හාන, වස්සාන වශයෙන් ඍතු තුනක් වෙත්; මේ ......... ඍතුවයි; මේ ඍතුවෙහි අටක් වූ/දහයක් වූ උපෝසථයෝ වෙත්; මෙම පක්‍ෂයෙන් එක් පොහොයක් පැමිණියේ වෙයි; ....... (උපෝසථ ඉක්ම ගිය හ; /උපෝසථයක් ඉක්ම ගියේ ය;) ...... (උපෝසථ ශේෂ වූහ./උපෝසථයක් ශේෂ වූයේ ය.)\nප්‍රශ්න විචාරීම:-\nභික්‍ෂූන් ගණන් කිරීම, මෙම පොහොය ගෙහි රැස්වූ භික්‍ෂූන්ගේ ගණනින් කොපමණ භික්‍ෂූහු වෙත් ද?\nපිළිතුරු ලබාදීම:-\nමෙම පොහොය ගෙහි රැස්වූ භික්‍ෂූන්ගේ ගණනින් භික්‍ෂූන් වහන්සේලා ...... නමක් වෙත්.\nප්‍රශ්න විචාරීම:-\nඅවවාද දීම, කෙසේ ද? කිම භික්‍ෂුණීන්ට දිය යුතු අවවාද දෙන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nදැන් වනාහී අදාළ නොමැති බැවින් ඒ අවවාද දීමක් මෙහි නැත.\nප්‍රශ්න විචාරීම:-\nකුමක් නිසා ඒවා උපෝසථයෙහි පූර්වකරණ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nඋපෝසථයෙහි ඒ ඡන්දය රැගෙන ඒම ආදී ක්‍රියා පහ පාමොක් උදෙසීමට පළමුව කළ යුතු බැවින්, උපෝසථ කර්මයේ පූර්ව කෘත්‍ය යැයි කියනු ලැබේ. පූර්ව කෘත්‍යයෝ යැයි කියන ලද්දාහු වෙති.\nප්‍රශ්න විචාරීම:-\nපොහොය දිනය ද, පැමිණිය යුතු යම්තාක් භික්‍ෂුන් වහන්සේලා පොහොය කර්මයට පැමිණියාහු ද, සමාන ඇවැත් කිසිවක් විද්‍යමාන නො වෙත් ද, බැහැර කළ යුතු පුද්ගලයන් පොහොය ගෙයි නො වෙත් ද, එවිට එය පොහොය කර්මයට පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ. චාතුද්දසී, පණ්ණරසී, සාමග්‍රී යන උපෝසථ දින තුන අතුරින් අද උපෝසථය කවර උපෝසථයක් ද?\nපිළිතුරු ලබාදීම:-\nඅද (පණ්ණරසී/ චාතුද්දසී) පොහොයකි.\nප්‍රශ්න විචාරීම:-\nකිමෙක් ද? පැමිණිය යුතු යම්තාක් භික්‍ෂූන් වහන්සේලා පොහොය කර්මයට පැමිණියාහූ ද?\nපිළිතුරු ලබාදීම:-\nයම් පමණ භික්‍ෂූන් වහන්සේලා ඒ උපෝසථ කර්මයට පැමිණියාහූ ද, ඇතුළත් වූවාහූ ද, ගැළපුනාහූ ද, යටත් පිරිසෙයින් භික්‍ෂූන් වහන්සේලා සතර නමක්වත් ප්‍රකෘති භික්‍ෂූහූ වෙත් ද, සංඝයා විසින් උක්ෂේපණීය කර්මය නො කරන ලද්දාහූ වෙත් ද, ඒ භික්‍ෂූන් වහන්සේලා ද අත්පසින් බැහැර නො වී එක සීමාවක වැඩ සිටියාහූ වෙත්.\nප්‍රශ්න විචාරීම:-\nකිමෙක් ද? සමාන ඇවැත් විද්‍යමාන නො වෙත් ද?\nපිළිතුරු ලබාදීම:-\nවිකාල භෝජන ආදී සමාන වස්තු සහිත ඇවැත් විද්‍යමාන නො වෙත්.\nප්‍රශ්න විචාරීම:-\nකිමෙක් ද? බැහැර කළ යුතු පුද්ගලයින් පොහොය ගෙයි නො වෙත් ද?\nපිළිතුරු ලබාදීම:-\nගිහි, පණ්ඩක ආදී එක් විසි වජ්ජනීය පුද්ගලයෝ අත්පසින් බැහැර කිරීම් වශයෙන් බැහැර කළ යුත්තාහු, ඔවුහු මෙහි නො වෙත්.\nප්‍රශ්න විචාරීම:-\nකුමක් හෙයින් පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nසංඝයාගේ උපෝසථ කර්මය මෙම ලක්ෂණ සතරින් සංග්‍රහ වූයේ ප්‍රාප්ත කාලය යැයි කියනු ලැබේ. පොහොය කිරීමට සුදුසු කාලය (පැමිණියේ) වූයේ යැයි කියන ලදී. පූර්වකරණ, පූර්ව (කෘත්‍ය) කෘත්‍යයෝ නිමා කොට, දෙසන ලද ආපත්ති ඇති සමගි භික්‍ෂු සංඝයා වහන්සේලාගේ අනුමැතියෙන් පාමොක් උදෙසීමට ආරාධනා කරමි.",
    "en": "Homage to the Blessed One, the Worthy One, the Perfectly Self-awakened One!\nThe consent to ask the Vinaya questions:\nVenerable sirs, may the Saṅgha hear me. If it is the right time for the Saṅgha, I would question the Venerable .... (elder / monk) on the Vinaya.\nThe consent to answer the Vinaya questions:\nVenerable sirs, may the Saṅgha hear me. If it is the right time for the Saṅgha, when questioned on the Vinaya by the Venerable ...., I would answer.\n\nQuestion:\nSweeping, a lamp, water and seating — these are called the preliminary tasks (pubbakaraṇa) of the Uposatha.\nPermit me: Sweeping — has the sweeping been done?\nAnswer: The sweeping is finished.\nQuestion: The lamp — has the lamp been lit?\nAnswer: The lighting of the lamp is finished. / Since it is now daylight, there is no need for a lamp here.\nQuestion: Water and seating — have the seats, together with drinking water and water for use, been set out?\nAnswer: The seats, together with drinking water and water for use, have been set out.\nQuestion: Why are these called the preliminary tasks of the Uposatha?\nAnswer: These four duties, beginning with sweeping, are to be done first, before the Saṅgha assembles. Therefore they are called the preliminary tasks of the Uposatha, of the Uposatha act.\nQuestion:\nThe bringing of consent and purity, the announcing of the season, the counting of the monks, and the exhortation — these are called the preliminary duties (pubbakicca) of the Uposatha.\nBringing consent and purity — has the consent and purity of the monks entitled to give it been brought?\nAnswer: There is no bringing of consent and purity here. / The bringing of consent and purity is done.\nQuestion: Announcing the season — has it been announced how much of the three seasons, Hemanta and the rest, has passed and how much remains?\nAnswer: In this Dispensation there are three seasons: the cold, the hot and the rainy. This is the .......... season; in this season there are eight / ten Uposatha days; with this fortnight one Uposatha has arrived; ....... Uposathas have passed (one Uposatha has passed); ....... Uposathas remain (one Uposatha remains).\nQuestion: Counting the monks — how many monks are gathered in this Uposatha hall?\nAnswer: The number of monks gathered in this Uposatha hall is ..... monks.\nQuestion: The exhortation — has the exhortation of the nuns been given, as it should be?\nAnswer: Since there are none now, there is no exhortation here.\nQuestion: Why are these called the preliminary duties of the Uposatha?\nAnswer: These five tasks, beginning with bringing the consent, are to be done before the recital of the Pātimokkha. Therefore they are called the preliminary duties of the Uposatha act.\nQuestion:\nIs it the Uposatha day; have as many monks as are required for the act come; is there no shared offence; and are the persons to be avoided absent? Then it is called \"the right time\". Of the three Uposatha days — the fourteenth, the fifteenth and the day of concord — which Uposatha is today's?\nAnswer: Today's Uposatha is the fifteenth. / the fourteenth.\nQuestion: Have as many monks as are required for the act come?\nAnswer: As many monks as are fitting and proper for this Uposatha act — at least four regular monks, not suspended by the Saṅgha — have not left the arm's reach and are staying within one boundary.\nQuestion: Is there no shared offence?\nAnswer: There is no shared offence arising from the same matter, such as eating at the wrong time.\nQuestion: Are the persons to be avoided absent?\nAnswer: The twenty-one persons to be avoided, beginning with laypeople and pandakas, are to be sent beyond arm's reach. They are not present here.\nQuestion: What is meant by \"the right time\"?\nAnswer: The Uposatha act of the Saṅgha, comprised of these four characteristics, is called the right time. Having completed the preliminary tasks and duties, with the consent of the harmonious Saṅgha of monks who have confessed their offences, I invite the recital of the Pātimokkha.",
    "notes_pali": [
     {
      "at": "ලක්ඛණෙහි",
      "note": "ඇතැම් පොත්වල අංගෙහි"
     }
    ]
   },
   {
    "pali": "සාධූ ! සාධූ !! සාධූ !!!\nපුබ්බකරණාදි විධි සමත්තා.",
    "translit": "Sādhū ! Sādhū !! Sādhū !!!\nPubbakaraṇādi vidhi samattā.",
    "si": "සාදූ ! සාදූ !! සාදූ !!!\nපූර්වකරණ ආදී විධි සමාප්තයි.",
    "en": "Sādhu! Sādhu!! Sādhu!!!\nThe preliminary procedures are complete.",
    "role": "end"
   },
   {
    "pali": "\"සත්ථුකප්පං සුවිනයං\nධාරෙමි හදයෙන'හං\nනමස්සමානො විනයං\nවිහරිස්සාමි සබ්බදා\"",
    "translit": "\"Satthukappaṃ suvinayaṃ\nDhāremi hadayena'haṃ\nNamassamāno vinayaṃ\nViharissāmi sabbadā\"",
    "si": "බුදුරජාණන් වහන්සේ වැනි වූ සුන්දර වූ විනය පිටකය මම හදයෙන් දරමි. හැම කල්හි විනයට නමස්කාර කරමින් වසන්නෙමි.",
    "en": "I hold in my heart the excellent Vinaya, which is like the Teacher himself. Revering the Vinaya, I shall dwell always."
   }
  ],
  "cat": "pubba",
  "cat_si": "උපෝසථ පුබ්බකරණාදි විධි",
  "cat_en": "Uposatha preliminaries"
 },
 {
  "id": "nidana",
  "si": "නිදානුද්දෙස",
  "en": "Nidānuddesa",
  "kind": "text",
  "count": null,
  "title_si": "නිදානුද්දේසය",
  "title_en": "Nidānuddesa — The Introduction",
  "parts": [
   {
    "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස!!!\nසුණාතු මෙ භන්තෙ සඞ්ඝො, අජ්ජුපොසථො (පණ්ණරසො/ චාතුද්දසො), යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො උපොසථං කරෙය්‍ය, පාතිමොක්ඛං උද්දිසෙය්‍ය. කිං සඞ්ඝස්ස පුබ්බකිච්චං? පාරිසුද්ධිං ආයස්මන්තො ආරොචෙථ, පාතිමොක්ඛං උද්දිසිස්සාමි. තං සබ්බෙව සන්තා සාධුකං සුණොම මනසිකරොම. යස්ස සියා ආපත්ති, සො ආවිකරෙය්‍ය. අසන්තියා ආපත්තියා තුණ්හී භවිතබ්බං. තුණ්හීභාවෙන ඛො පනායස්මන්තෙ පරිසුද්ධාති වෙදිස්සාමි.\nයථා ඛො පන පච්චෙකපුට්ඨස්ස වෙය්‍යාකරණං හොති, එවමෙවං එවරූපාය පරිසාය යාවතතියං අනුසාවිතං හොති. යො පන භික්ඛු යාවතතියං අනුසාවියමානෙ, සරමානො සන්තිං ආපත්තිං නාවිකරෙය්‍ය, සම්පජානමුසාවාදස්ස හොති. සම්පජානමුසාවාදො ඛො පනායස්මන්තො අන්තරායිකො ධම්මො වුත්තො භගවතා. තස්මා සරමානෙන භික්ඛුනා ආපන්නෙන විසුද්ධාපෙක්ඛෙන සන්ති ආපත්ති ආවිකාතබ්බා, ආවිකතා හිස්ස ඵාසු හොති.\nඋද්දිට්ඨං ඛො ආයස්මන්තො නිදානං. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Namo tassa bhagavato arahato sammā sambuddhassa!!!\nSuṇātu me bhante saṅgho, ajjuposatho (paṇṇaraso/ cātuddaso), yadi saṅghassa pattakallaṃ, saṅgho uposathaṃ kareyya, pātimokkhaṃ uddiseyya. Kiṃ saṅghassa pubbakiccaṃ? Pārisuddhiṃ āyasmanto ārocetha, pātimokkhaṃ uddisissāmi. Taṃ sabbeva santā sādhukaṃ suṇoma manasikaroma. Yassa siyā āpatti, so āvikareyya. Asantiyā āpattiyā tuṇhī bhavitabbaṃ. Tuṇhībhāvena kho panāyasmante parisuddhāti vedissāmi.\nYathā kho pana paccekapuṭṭhassa veyyākaraṇaṃ hoti, evamevaṃ evarūpāya parisāya yāvatatiyaṃ anusāvitaṃ hoti. Yo pana bhikkhu yāvatatiyaṃ anusāviyamāne, saramāno santiṃ āpattiṃ nāvikareyya, sampajānamusāvādassa hoti. Sampajānamusāvādo kho panāyasmanto antarāyiko dhammo vutto bhagavatā. Tasmā saramānena bhikkhunā āpannena visuddhāpekkhena santi āpatti āvikātabbā, āvikatā hissa phāsu hoti.\nUddiṭṭhaṃ kho āyasmanto nidānaṃ. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ඒ භාග්‍යවත් අර්හත් සම්මා සම්බුදුරජාණන් වහන්සේට නමස්කාර වේවා!!!\nස්වාමීනි! සංඝ තෙමේ මාගේ කීම අසාවා. අද (පණ්ණරසී/ චාතුද්දසී) පොහොය දවසයි. ඉදින් සංඝයාට කාලය පැමිණියේ නම් සංඝ තෙමේ පොහොය කරන්නේ ය. පාමොක් උදෙසන්නේ ය. සංඝයාගේ පූර්වකෘත්‍යය කිමෙක් ද? ආයුෂ්මත්වරුනි! පිරිසිදු බව ප්‍රකාශ කරවු. පාමොක් උදෙසන්නෙමි. ඒ පාමොක් මේ පිරිසෙහි වූ අපි සියලු දෙන ම මනා කොට අසමු. මෙනෙහි කරමු. යමෙකුට ඇවැතක් වේ නම්, හෙතෙම එය කියන්නේ ය. ඇවැත් නැති කල්හි නිශ්ශබ්ද විය යුතු ය. නිහඬ බවින් ආයුෂ්මතුන් වහන්සේලා පිරිසිදු වූවහු යැයි දැනගන්නෙමි.\nයම් සේ වෙන වෙන ම අසන ලද්දහුගේ ඇසූ දේට පිළිතුරු දීමක් වේ ද? එසේ ම එබඳු පිරිසෙක්හි තුන්වරක් දක්වා අස්වන ලද්දේ වේ. යම් භික්‍ෂුවක් තුන්වර දක්වා ඇස්වීම කරනු ලබන කල්හි තමා තුළ ඇති ඇවැත සිහිකරමින් නො කියන්නේ ද, ඔහුට සම්පජානමුසාවාද ඇවැත සිදුවේ. ආයුෂ්මත්වරුනි! සම්පජානමුසාවාදය අන්තරායකර ධර්මයකැයි භාග්‍යවතුන් වහන්සේ විසින් වදාරන ලද සේක. ඒ නිසා ඇවැතට පත්වූ, එය සිහිකරන්නාවූ, පිරිසිදු බව බලාපොරොත්තු වන භික්‍ෂුව විසින් තිබෙන ඇවැත් ප්‍රකාශ කළ යුත්තාහ. එසේ ප්‍රකාශ කිරීම හේතු කොටගෙන ඒ භික්‍ෂුවට පහසු භාවය වෙයි.\nආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Homage to the Blessed One, the Worthy One, the Perfectly Self-awakened One!\nVenerable sirs, may the Saṅgha hear me. Today is the Uposatha of the fifteenth (fourteenth). If it is the right time for the Saṅgha, let the Saṅgha perform the Uposatha and recite the Pātimokkha. What is the Saṅgha's preliminary duty? Venerables, declare your purity; I shall recite the Pātimokkha. All of us who are present will listen carefully and attend to it well. Whoever has an offence should reveal it; if there is no offence, one should remain silent. By your silence I shall know that the venerables are pure.\n\nJust as one who is asked individually gives a reply, so too in an assembly such as this it is announced up to three times. If a monk, when it is announced up to three times, remembers an existing offence and does not reveal it, he incurs deliberate false speech. Venerables, deliberate false speech has been declared by the Blessed One to be an obstructive thing. Therefore a monk who has fallen into an offence, who remembers it and wishes to be pure, should reveal the existing offence; when revealed, it will be a relief for him.\n\nThe Introduction has been recited, venerables.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it."
   },
   {
    "pali": "නිදානුද්දෙසො පඨමො.",
    "translit": "Nidānuddeso paṭhamo.",
    "si": "පළමුවැනි නිදාන උද්දේසය යි.",
    "en": "The first recital, the Introduction, is finished.",
    "role": "end"
   }
  ],
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "parajika",
  "si": "පාරාජිකා",
  "en": "Pārājika",
  "kind": "rules",
  "count": 4,
  "num": 1,
  "title_si": "(1) පාරාජිකා ධම්මා",
  "title_en": "(1) Pārājika Dhammā",
  "parts": [
   {
    "pali": "තත්‍රිමෙ චත්තාරො පාරාජිකා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Tatrime cattāro pārājikā dhammā uddesaṃ āgacchanti.",
    "si": "විනයෙහි මේ සතරක් වූ පාරාජික ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these four Pārājika rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛූනං සික්ඛාසාජීවසමාපන්නො සික්ඛං අපච්චක්ඛාය දුබ්බල්‍යං අනාවිකත්වා මෙථුනං ධම්මං පතිසෙවෙය්‍ය, අන්තමසො තිරච්ඡානගතායපි, පාරාජිකො හොති අසංවාසො.",
    "translit": "Yo pana bhikkhu bhikkhūnaṃ sikkhāsājīvasamāpanno sikkhaṃ apaccakkhāya dubbalyaṃ anāvikatvā methunaṃ dhammaṃ patiseveyya, antamaso tiracchānagatāyapi, pārājiko hoti asaṃvāso.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂූන්ගේ අධිශීල සංඛ්‍යාත ශික්‍ෂාවට හා පනවන ලද සිකපදයන්හි හික්මීමට (සාජීවයට) පැමිණියේ ශික්‍ෂාව ප්‍රතික්ෂේප නො කර, සාජීවයෙහි දුර්වල බව ප්‍රකාශ නො කර, යටත් පිරිසෙයින් තිරිසන් ගත ස්ත්‍රියක් සමග හෝ මෙවුන්දම් සේවනය කළේ නම් පරිජි වූයේ ප්‍රකෘති භික්‍ෂුන් සමග සංවාසය රහිත වූයේ වෙයි.",
    "en": "Whatever monk, having undertaken the monks' training and way of life, without having abandoned the training, without having declared his weakness, should engage in sexual intercourse, even with a female animal — he is defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 1,
    "notes_si": [
     {
      "at": "අධිශීල",
      "note": "උසස් සීලය නම් වූ"
     },
     {
      "at": "ස්ත්‍රියක්",
      "note": "මනුස්ස, අමනුස්ස සහ තිරිසන් ස්ත්‍රි පුරුෂ සියල්ලන්ගේ සමතිස් මාර්ගයන් ම ඇතුලත් වේ"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු ගාමා වා අරඤ්ඤා වා අදින්නං ථෙය්‍යසංඛාතං ආදියෙය්‍ය, යථාරූපෙ අදින්නාදානෙ රාජානො චොරං ගහෙත්වා හනෙය්‍යුං වා බන්ධෙය්‍යුං වා පබ්බාජෙය්‍යුං වා; චොරොසි බාලොසි මූළ්හොසි ථෙනොසීති, තථාරූපං භික්ඛු අදින්නං ආදියමානො, අයම්පි පාරාජිකො හොති අසංවාසො.",
    "translit": "Yo pana bhikkhu gāmā vā araññā vā adinnaṃ theyyasaṃkhātaṃ ādiyeyya, yathārūpe adinnādāne rājāno coraṃ gahetvā haneyyuṃ vā bandheyyuṃ vā pabbājeyyuṃ vā; corosi bālosi mūḷhosi thenosīti, tathārūpaṃ bhikkhu adinnaṃ ādiyamāno, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්‍ෂුවක් වනාහි නුදුන් වස්තුවක් ගමෙන් හෝ වනයෙන් හෝ සොරසිතින් ගන්නේ වෙයි ද, යම්බඳු වූ නො දුන් වස්තුවක් ගැනීමෙහි රජවරු සොරා අල්ලාගෙන \"සොරෙක් හි, බාලයෙක් හි, මුලා වූවෙක් හි, සොරකමක් කළෙහි\" යැයි ඔහුව නසන්නේ වෙයි ද, සිරගත කරන්නේ ද, රටින් නෙරපන්නේ වෙයි ද, එබඳු වූ නො දුන් වස්තුවක් සොරසිතින් ගන්නා භික්‍ෂු තෙම ද පරිජි වූයේ ප්‍රකෘති භික්‍ෂූන් සමග සංවාසය රහිත වූයේ වෙයි.",
    "en": "Whatever monk, in a village or in the wilderness, should take what is not given, in the manner of theft — such that kings would arrest the thief, execute or imprison or banish him, saying 'You are a thief, you are a fool, you are mad, you are a robber' — that monk, taking what is not given, is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "යො පන භික්ඛු සඤ්චිච්ච මනුස්සවිග්ගහං ජීවිතා වොරොපෙය්‍ය, සත්ථහාරකං වාස්ස පරියෙසෙය්‍ය, මරණවණ්ණං වා සංවණ්ණෙය්‍ය, මරණාය වා සමාදපෙය්‍ය; අම්භො පුරිස, කිං තුය්හිමිනා පාපකෙන දුජ්ජීවිතෙන, මතන්තෙ ජීවිතා සෙය්‍යො ති. ඉති චිත්තමනො චිත්තසඞ්කප්පො අනෙකපරියායෙන මරණවණ්ණං වා සංවණ්ණෙය්‍ය මරණාය වා සමාදපෙය්‍ය, අයම්පි පාරාජිකො හොති අසංවාසො.",
    "translit": "Yo pana bhikkhu sañcicca manussaviggahaṃ jīvitā voropeyya, satthahārakaṃ vāssa pariyeseyya, maraṇavaṇṇaṃ vā saṃvaṇṇeyya, maraṇāya vā samādapeyya; ambho purisa, kiṃ tuyhiminā pāpakena dujjīvitena, matante jīvitā seyyo ti. Iti cittamano cittasaṅkappo anekapariyāyena maraṇavaṇṇaṃ vā saṃvaṇṇeyya maraṇāya vā samādapeyya, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන මිනිස් සිරුරක් දිවියෙන් තොර කෙරේ ද, දිවි නැති කළ හැකි අවියක් හෝ අසළ තබා නම්, \"එම්බල පුරුෂය, කිම නුඹගේ මේ ළාමක දුක්බර ජීවිතයෙන් කවර ප්‍රයෝජනයක් ද? නුඹට ජීවත් වීමට වඩා මරණයට පත්වීම උතුම්\"යැයි මරණයෙහි ගුණ හෝ වර්ණනා කරන්නේ ද, මරණයෙහි සමාදන් කරවන්නේ ද, මෙසේ මරණය පිළිබඳ සිත් ඇත්තේ මරණ සංකල්පනා ඇත්තේ නොයෙක් අයුරින් මරණයේ ගුණ කියැයි ද, මරණයට අදාළ උපාය කියැයි ද, ඒ භික්‍ෂුව පරිජි වූයේ ප්‍රකෘති භික්‍ෂුන් හා සංවාස රහිත වූයේ වෙයි.",
    "en": "Whatever monk should intentionally deprive a human being of life, or seek for a weapon for him, or praise the advantages of death, or incite him to death, saying 'O man, what is the use to you of this evil, wicked life? Death is better for you than life' — or if with this intention, with this mind, with this resolve, he should in many ways praise the advantages of death or incite him to death — he is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යො පන භික්ඛු අනභිජානං උත්තරිමනුස්සධම්මං අත්තූපනායිකං අලමරියඤාණදස්සනං සමුදාචරෙය්‍ය; ඉති ජානාමි ඉති පස්සාමීති. තතො අපරෙන සමයෙන සමනුග්ගාහියමානො වා අසමනුග්ගාහියමානො වා ආපන්නො විසුද්ධාපෙක්ඛො එවං වදෙය්‍ය; අජානමෙවං ආවුසො අවචං ජානාමි අපස්සං පස්සාමි, තුච්ඡං මුසා විලපින්ති, අඤ්ඤත්‍ර අධිමානා, අයම්පි පාරාජිකො හොති අසංවාසො.",
    "translit": "Yo pana bhikkhu anabhijānaṃ uttarimanussadhammaṃ attūpanāyikaṃ alamariyañāṇadassanaṃ samudācareyya; iti jānāmi iti passāmīti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā āpanno visuddhāpekkho evaṃ vadeyya; ajānamevaṃ āvuso avacaṃ jānāmi apassaṃ passāmi, tucchaṃ musā vilapinti, aññatra adhimānā, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්‍ෂුවක් වනාහි තමා තුල නො දන්නා වූ නො දක්නා වූ ආර්ය ඥාන දර්ශනයට යොග්‍ය වු උතුරු මිනිස්දම් තමා කෙරෙහි එළවා \"මෙසේ දනිමි; මෙසේ දකිමි\" අධිමානයෙන් තොර ව කියන්නේ ද, ඉන් පසු කලෙක විචාරනු ලබන්නේ හෝ නො විචාරනු ලබන්නේ හෝ පරිජි ඇවැතට පැමිණුනේ පිරිසිදු බැව් කැමැත්තේ \"ඇවැත්නි මම නො දන්නෙම් දනිමියි කීමි; නො දක්නෙම් දකිමියි හිස් බොරු කීමි\" යැයි මෙසේ කියන්නේ ය. මේ භික්‍ෂුව ද පරිජි වූයේ ප්‍රකෘති භික්‍ෂුන් හා සංවාස රහිත වූයේ වෙයි.",
    "en": "Whatever monk, without knowing, should lay claim to a superhuman state, to a state of noble knowledge and vision worthy of the noble ones, saying 'Thus I know, thus I see' — and later, whether questioned or not, being remorseful and seeking purification, should say 'Venerable Sirs, not knowing, I said I know; not seeing, I said I see; I spoke empty falsehood' — apart from over-estimation (adhimāna), he is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 4,
    "notes_pali": [
     {
      "at": "අජානමෙවං",
      "note": "ඇතැම් පොත්වල අජානමෙවාහං"
     }
    ],
    "notes_si": [
     {
      "at": "ව",
      "note": "උතුරු මිනිස්දම් තමා කෙරෙහි ඇතැයි යන වැරදි වැටහීම්වලින් තොර ව"
     },
     {
      "at": "පරිජි",
      "note": "ශ්‍රමණත්වයෙන් පරාද වන"
     }
    ]
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො, චත්තාරො පාරාජිකා ධම්මා. යෙසං භික්ඛු අඤ්ඤතරං වා අඤ්ඤතරං වා ආපජ්ජිත්වා න ලභති භික්ඛූහි සද්ධිං සංවාසං යථා පුරෙ තථා පච්ඡා, පාරාජිකො හොති අසංවාසො. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, cattāro pārājikā dhammā. Yesaṃ bhikkhu aññataraṃ vā aññataraṃ vā āpajjitvā na labhati bhikkhūhi saddhiṃ saṃvāsaṃ yathā pure tathā pacchā, pārājiko hoti asaṃvāso. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සතර පරිජි ඇවැත් උදෙසන ලද්දාහු ය. භික්‍ෂුවක් එයින් යම් ඇවැතකට පත් වී භික්‍ෂූන් හා ඇසුරක් නො ලබයි. ගිහිකල යම් සේ ද දැනුදු එසේ ම පැරදුනේ වෙයි. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the four Pārājika rules have been recited. A monk who has fallen into any one of them no longer has communion with the monks: as he was before, as a layman, so he is after — defeated, without communion.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාරාජිකුද්දෙසො දුතියො.",
    "translit": "Pārājikuddeso dutiyo.",
    "si": "දෙවෙනි පාරාජිකා උද්දේසය යි.",
    "en": "The second recital, the Pārājikas, is finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද හතර",
  "count_en": "Four rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "sanghadisesa",
  "si": "සඞ්ඝාදිසෙසා",
  "en": "Saṅghādisesā",
  "kind": "rules",
  "count": 13,
  "num": 2,
  "title_si": "(2) සඞ්ඝාදිසෙසා ධම්මා",
  "title_en": "(2) Saṅghādisesā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො තෙරස සඞ්ඝාදිසෙසා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto terasa saṅghādisesā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ සඟවෙසෙස් ඇවැත් දහතුන උදෙසීමට පැමිණෙත්.",
    "en": "Here these thirteen Saṅghādisesa rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "සඤ්චෙතනිකා සුක්කවිසට්ඨි අඤ්ඤත්‍ර සුපිනන්තා සඞ්ඝාදිසෙසො.",
    "translit": "Sañcetanikā sukkavisaṭṭhi aññatra supinantā saṅghādiseso.",
    "si": "සිහිනෙන් හැර දැන දැන ශුක්‍ර ධාතු මිදීමෙන් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Intentional emission of semen, except in a dream, is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "යො පන භික්ඛු ඔතිණ්ණො විපරිණතෙන චිත්තෙන මාතුගාමෙන සද්ධිං කායසංසග්ගං සමාපජ්ජෙය්‍ය, හත්ථගාහං වා වෙණිගාහං වා අඤ්ඤතරස්ස වා අඤ්ඤතරස්ස වා අඞ්ගස්ස පරාමසනං සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu otiṇṇo vipariṇatena cittena mātugāmena saddhiṃ kāyasaṃsaggaṃ samāpajjeyya, hatthagāhaṃ vā veṇigāhaṃ vā aññatarassa vā aññatarassa vā aṅgassa parāmasanaṃ saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් කාය සංසර්ග රාගයට බැසගත්තේ පෙරළී ගිය සිතින් මාගමක සමග කාය සංසර්ගයට පැමිණියේ නම්, අත ගැනීම (අත් ඇල්ලීම) හෝ කෙස් ගැනීම හෝ යම් අඟපසඟ පිරිමැදීමක් හෝ කෙරේ නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, should engage in bodily contact with a woman — taking her hand, taking her hair, or touching any part of her body — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "යො පන භික්ඛු ඔතිණ්ණො විපරිණතෙන චිත්තෙන මාතුගාමං දුට්ඨුල්ලාහි වාචාහි ඔභාසෙය්‍ය, යථා තං යුවා යුවතිං මෙථුනූපසංහිතාහි සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu otiṇṇo vipariṇatena cittena mātugāmaṃ duṭṭhullāhi vācāhi obhāseyya, yathā taṃ yuvā yuvatiṃ methunūpasaṃhitāhi saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් දුහුල් වචන කියන රාගයට බැසගත්තේ පෙරළී ගිය සිතින් මිනිස් ස්ත්‍රියකට රහස් මාර්ග විෂය කරගත් මෙවුන් දම් සේවනය පිළිබඳව වූ අසභ්‍ය වචන වලින් කාමභෝගී තරුණයෙක් තරුණියකට කියන්නාක් මෙන් කථා කරයි නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, should speak lewd words to a woman, connected with sexual intercourse, such as a youth would speak to a young girl — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යො පන භික්ඛු ඔතිණ්ණො විපරිණතෙන චිත්තෙන මාතුගාමස්ස සන්තිකෙ අත්තකාමපාරිචරියාය වණ්ණං භාසෙය්‍ය; එතදග්ගං භගිනි පාරිචරියානං, යා මාදිසං සීලවන්තං කල්‍යාණධම්මං බ්‍රහ්මචාරිං, එතෙන ධම්මෙන පරිචරෙය්‍යාති මෙථුනූපසංහිතෙන සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu otiṇṇo vipariṇatena cittena mātugāmassa santike attakāmapāricariyāya vaṇṇaṃ bhāseyya; etadaggaṃ bhagini pāricariyānaṃ, yā mādisaṃ sīlavantaṃ kalyāṇadhammaṃ brahmacāriṃ, etena dhammena paricareyyāti methunūpasaṃhitena saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් තමාට කාමයෙන් උවටැන් කරවා ගැනීමේ රාගයට බැසගත්තේ, පෙරළී ගිය සිතින් මිනිස් මාගමක් සමීපයෙහි \"නැගණිය, යම් ස්ත්‍රියක් මා බඳු සිල්වත් වූ, යහපත් ධර්ම ඇති, බ්‍රහ්මචාරීවූවකුට මෙවුන්දමින් උවටැන් කරන්නේ නම්, උවටැන් කිරීම් අතරින් මෙය ම (මෙවුන් දමින් උවටැන් කිරීම ම) අග්‍ර වේ\"යැයි මෙවුන්දම් ප්‍රතිසංයුක්ත වචනයෙන් තමාට මෙවුන්දමින් උවටැන් කිරීමේ ගුණ කියන්නේ නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, in the presence of a woman, should speak in praise of attending to himself with reference to sexual intercourse, saying 'Sister, this is the highest service: that a woman should serve with this Dhamma a virtuous, well-conducted, celibate man like myself' — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යො පන භික්ඛු සඤ්චරිත්තං සමාපජ්ජෙය්‍ය, ඉත්ථියා වා පුරිසමතිං පුරිසස්ස වා ඉත්ථිමතිං, ජායත්තනෙ වා ජාරත්තනෙ වා අන්තමසො තඞ්ඛණිකායපි සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu sañcarittaṃ samāpajjeyya, itthiyā vā purisamatiṃ purisassa vā itthimatiṃ, jāyattane vā jārattane vā antamaso taṅkhaṇikāyapi saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් අඹු බවෙහි හෝ සොර අඹු බවෙහි හෝ යටත් පිරිසෙයින් ඒ මොහොතක සේවනය කරනු කැමතිව බිරිඳ වේව යි කියා හෝ පුරුෂයාගේ අදහස ස්ත්‍රියට හෝ ස්ත්‍රියගේ අදහස පුරුෂයාට හෝ ගෙන යමින් සඤ්චරණභාවයට පැමිණේ නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk should engage in matchmaking — conveying a woman's intentions to a man, or a man's intentions to a woman, whether as a wife or a mistress, even for a moment — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 5,
    "notes_si": [
     {
      "at": "සඤ්චරණභාවයට",
      "note": "හුවමාරු කිරීම් ස්වභාවයට (පණිවුඩ ගෙන යෑම් සංඛ්‍යාත)"
     }
    ]
   },
   {
    "pali": "සඤ්ඤාචිකාය පන භික්ඛුනා කුටිං කාරයමානෙන අස්සාමිකං අත්තුද්දෙසං පමාණිකා කාරෙතබ්බා. තත්‍රිදං පමාණං; දීඝසො ද්වාදසවිදත්ථියො සුගතවිදත්ථියා, තිරියං සත්තන්තරා. භික්ඛූ අභිනෙතබ්බා වත්ථුදෙසනාය, තෙහි භික්ඛූහි වත්ථුං දෙසෙතබ්බං අනාරම්භං සපරික්කමනං. සාරම්භෙ චෙ භික්ඛු වත්ථුස්මිං අපරික්කමනෙ සඤ්ඤාචිකාය කුටිං කාරෙය්‍ය, භික්ඛූ වා අනභිනෙය්‍ය වත්ථුදෙසනාය, පමාණං වා අතික්කාමෙය්‍ය සඞ්ඝාදිසෙසො.",
    "translit": "Saññācikāya pana bhikkhunā kuṭiṃ kārayamānena assāmikaṃ attuddesaṃ pamāṇikā kāretabbā. Tatridaṃ pamāṇaṃ; dīghaso dvādasavidatthiyo sugatavidatthiyā, tiriyaṃ sattantarā. Bhikkhū abhinetabbā vatthudesanāya, tehi bhikkhūhi vatthuṃ desetabbaṃ anārambhaṃ saparikkamanaṃ. Sārambhe ce bhikkhu vatthusmiṃ aparikkamane saññācikāya kuṭiṃ kāreyya, bhikkhū vā anabhineyya vatthudesanāya, pamāṇaṃ vā atikkāmeyya saṅghādiseso.",
    "si": "අනුන්ගෙන් ඉල්ලා ගත් උපකරණ හෝ කරවා දෙන දායකයකු නැති, තමා උදෙසා කුටියක් කරවන භික්‍ෂුව විසින් ප්‍රමාණ සහිතව කරවිය යුතු වේ. එහි ලා මේ ප්‍රමාණය යි. දිගින් සුගත් වියතින් වියත් දොළොසක් ද, පළලින් සුගත් වියතින් වියත් සතක් ද විය යුතු යි. කුටිවස්තුව දේශනා කිරීම පිණිස භික්‍ෂූන් කැඳවිය යුතු අතර ඒ භික්‍ෂූන් විසින් උවදුරු රහිත වූ උපචාර සහිත වූ කුටිවස්තුව දෙසිය යුතු ය. ඉදින් භික්‍ෂු තෙම උවදුරු සහිත වූ උපචාර රහිත වූ වස්තුවෙහි ඉල්ලාගත් උපකරණයෙන් කුටියක් කරවන්නේ නම්, කුටි වස්තුව දෙසීම පිණිස භික්‍ෂූන් හෝ නො කැඳවන්නේ නම්, ප්‍රමාණය හෝ ඉක්මවන්නේ නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "When a monk is having a hut built by his own begging, with no sponsor, for himself, it must be built to the proper measure. This is the measure: in length twelve Sugata spans, in width, inside, seven spans. Monks are to be brought to designate the site, and those monks should designate a site that is free of danger and has surrounding space. If a monk, on a site that is dangerous and without surrounding space, has a hut built by his own begging, or does not bring monks to designate the site, or exceeds the measure: Saṅghādisesa.",
    "role": "rule",
    "n": 6,
    "notes_pali": [
     {
      "at": "අනාරම්භං",
      "note": "ඇතැම් පොත්වල අනාරබ්භං"
     },
     {
      "at": "සාරම්භෙ",
      "note": "ඇතැම් පොත්වල සාරබ්භෙ"
     }
    ],
    "notes_si": [
     {
      "at": "වූ",
      "note": "කුටිය වටේ එකට ඈඳූ ගොන් යුවළකට නිදහස්ව යා හැකි අවකාශයක්"
     }
    ]
   },
   {
    "pali": "මහල්ලකං පන භික්ඛුනා විහාරං කාරයමානෙන සස්සාමිකං අත්තුද්දෙසං භික්ඛූ අභිනෙතබ්බා වත්ථුදෙසනාය. තෙහි භික්ඛූහි වත්ථුං දෙසෙතබ්බං අනාරම්භං සපරික්කමනං. සාරම්භෙ චෙ භික්ඛු වත්ථුස්මිං අපරික්කමනෙ මහල්ලකං විහාරං කාරෙය්‍ය, භික්ඛූ වා අනභිනෙය්‍ය වත්ථුදෙසනාය සඞ්ඝාදිසෙසො.",
    "translit": "Mahallakaṃ pana bhikkhunā vihāraṃ kārayamānena sassāmikaṃ attuddesaṃ bhikkhū abhinetabbā vatthudesanāya. Tehi bhikkhūhi vatthuṃ desetabbaṃ anārambhaṃ saparikkamanaṃ. Sārambhe ce bhikkhu vatthusmiṃ aparikkamane mahallakaṃ vihāraṃ kāreyya, bhikkhū vā anabhineyya vatthudesanāya saṅghādiseso.",
    "si": "කරවා දෙන දායකයන් ඇති තමා උදෙසා වූ මහල්ලක විහාරයක් කරවන භික්‍ෂුව විසින් වස්තුව දේශනා කිරීම පිණිස භික්‍ෂූහු කැඳවිය යුත්තාහ. ඒ භික්‍ෂූන් විසින් උපද්‍රව රහිත වූ උපචාර සහිත වූ වස්තුව දේශනා කළ යුතු ය. ඉදින් භික්‍ෂු තෙම උපද්‍රව සහිත වූ උපචාර සහිත වූ බිමෙහි මහල්ලක විහාරයක් කරවයි නම්, වස්තු දේශනාව පිණිස භික්‍ෂූන් නො කැඳවන්නේ නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "When a monk is having a large dwelling built, with a sponsor, for himself, monks are to be brought to designate the site. Those monks should designate a site that is free of danger and has surrounding space. If a monk, on a site that is dangerous and without surrounding space, has a large dwelling built, or does not bring monks to designate the site: Saṅghādisesa.",
    "role": "rule",
    "n": 7,
    "notes_pali": [
     {
      "at": "වත්ථුං",
      "note": "ඇතැම් පොත්වල වත්ථුදෙසෙතබ්බං"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං දුට්ඨො දොසො අප්පතීතො, අමූලකෙන පාරාජිකෙන ධම්මෙන අනුද්ධංසෙය්‍ය; අප්පෙවනාම නං ඉමම්හා බ්‍රහ්මචරියා චාවෙය්‍යන්ති. තතො අපරෙන සමයෙන සමනුග්ගාහියමානො වා අසමනුග්ගාහියමානො වා අමූලකඤ්චෙව තං අධිකරණං හොති, භික්ඛු ච දොසං පතිට්ඨාති සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu bhikkhuṃ duṭṭho doso appatīto, amūlakena pārājikena dhammena anuddhaṃseyya; appevanāma naṃ imamhā brahmacariyā cāveyyanti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā amūlakañceva taṃ adhikaraṇaṃ hoti, bhikkhu ca dosaṃ patiṭṭhāti saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් ද්වේෂ සහිත වූයේ, නො සතුටු සිත් ඇත්තේ, \"මොහු සසුනෙන් නෙරපන්නෙම් නම්, යෙහෙකැ\"යි භික්‍ෂුවකට අමූලික පරිජි ඇවතකින් චෝදනා කෙරේ නම්, පසු කලෙක විචාරනු ලබන්නේ හෝ නො විචාරනු ලබන්නේ හෝ ඒ අධිකරණය මුල් රහිත වේ නම්, එම චෝදනා කළ භික්‍ෂුව ද \"මා විසින් හිස් බසක් මුසාවක්, අභූතයක්, නො දන්නක් කියන ලදැ\"යි දෝසයෙහි පිහිටා නම් සඟවෙසෙස් ඇවැතක් වේ.",
    "en": "Whatever monk, angry, displeased, should groundlessly charge a monk with a Pārājika offence, thinking 'Perhaps I may cause him to fall from this holy life' — and later, whether questioned or not, that charge is found to be groundless and the monk is established in ill-will — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං දුට්ඨො දොසො අප්පතීතො, අඤ්ඤභාගියස්ස අධිකරණස්ස කිඤ්චිදෙසං ලෙසමත්තං උපාදාය පාරාජිකෙන ධම්මෙන අනුද්ධංසෙය්‍ය; අප්පෙවනාම නං ඉමම්හා බ්‍රහ්මචරියා චාවෙය්‍යන්ති. තතො අපරෙන සමයෙන සමනුග්ගාහියමානො වා අසමනුග්ගාහියමානො වා අඤ්ඤභාගියඤ්චෙව තං අධිකරණං හොති, කොචිදෙසො ලෙසමත්තො උපාදින්නො, භික්ඛු ච දොසං පතිට්ඨාති සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu bhikkhuṃ duṭṭho doso appatīto, aññabhāgiyassa adhikaraṇassa kiñcidesaṃ lesamattaṃ upādāya pārājikena dhammena anuddhaṃseyya; appevanāma naṃ imamhā brahmacariyā cāveyyanti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā aññabhāgiyañceva taṃ adhikaraṇaṃ hoti, kocideso lesamatto upādinno, bhikkhu ca dosaṃ patiṭṭhāti saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් ද්වේෂ සහිත වූයේ, නො සතුටු සිත් ඇත්තේ \"මොහු සසුනෙන් නෙරපන්නෙම් නම් යෙහෙකැ\"යි අන්‍යභාගීය අධිකරණයකගේ ඒකදේශ ලේශමාත්‍රයක් ගෙන භික්‍ෂුවකට අමූලික පරිජි ඇවතින් චෝදනා කෙරේ නම්, පසු කලෙක විචාරනු ලබන්නේ හෝ නො විචාරනු ලබන්නේ හෝ ඒ අධිකරණය අන්‍යභාගීය වේද, ඒකදේශ වූ ලේශමාත්‍රයක් ගන්නා ලද්දේ ද, චෝදනා කළ භික්‍ෂුව, \"තෙමේ හිස්බසක්, මුසාවක්, අභූතයක්, නො දන්නක් කියන ලදැ\"යි දෝසයෙහි පිහිටා නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk, angry, displeased, should groundlessly charge a monk with some part or mere trace of a different dispute, thinking 'Perhaps I may cause him to fall from this holy life' — and later, whether questioned or not, that charge is found to belong to a different dispute and the monk is established in ill-will — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 9,
    "notes_si": [
     {
      "at": "ලේශමාත්‍රයක්",
      "note": "ඒ කාරණයෙන් ඉතා සුළු වු අවස්ථාවක්"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු සමග්ගස්ස සඞ්ඝස්ස භෙදාය පරක්කමෙය්‍ය, භෙදනසංවත්තනිකං වා අධිකරණං සමාදාය පග්ගය්හ තිට්ඨෙය්‍ය, සො භික්ඛු භික්ඛූහි එවමස්ස වචනීයො; මා ආයස්මා සමග්ගස්ස සඞ්ඝස්ස භෙදාය පරක්කමි, භෙදනසංවත්තනිකං වා අධිකරණං සමාදාය පග්ගය්හ අට්ඨාසි. සමෙතායස්මා සඞ්ඝෙන, සමග්ගො හි සඞ්ඝො සම්මොදමානො අවිවදමානො එකුද්දෙසො ඵාසු විහරතීති. එවඤ්ච සො භික්ඛු භික්ඛූහි වුච්චමානො, තථෙව පග්ගණ්හෙය්‍ය, සො භික්ඛු භික්ඛූහි යාවතතියං සමනුභාසිතබ්බො තස්ස පටිනිස්සග්ගාය, යාවතතියඤ්චෙ සමනුභාසියමානො තං පටිනිස්සජ්ජෙය්‍ය, ඉච්චෙතං කුසලං නො චෙ පටිනිස්සජ්ජෙය්‍ය සඞ්ඝාදිසෙසො.",
    "translit": "Yo pana bhikkhu samaggassa saṅghassa bhedāya parakkameyya, bhedanasaṃvattanikaṃ vā adhikaraṇaṃ samādāya paggayha tiṭṭheyya, so bhikkhu bhikkhūhi evamassa vacanīyo; mā āyasmā samaggassa saṅghassa bhedāya parakkami, bhedanasaṃvattanikaṃ vā adhikaraṇaṃ samādāya paggayha aṭṭhāsi. Sametāyasmā saṅghena, samaggo hi saṅgho sammodamāno avivadamāno ekuddeso phāsu viharatīti. Evañca so bhikkhu bhikkhūhi vuccamāno, tatheva paggaṇheyya, so bhikkhu bhikkhūhi yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya, yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ no ce paṭinissajjeyya saṅghādiseso.",
    "si": "යම් භික්‍ෂුවක් සමගි භික්‍ෂු සංඝයා බිඳවීම පිණිස උත්සාහ දරයි නම්, භේදය පිණිස හේතුවන භේදකර වස්තුවක් හෝ දැඩි ව ගෙන සිටී නම්, ඒ භික්‍ෂු තෙම සෙසු ලජ්ජී භික්‍ෂූන් විසින් \"ඇවැත්නි සමගි සංඝයාගේ බිඳවීම පිණිස උත්සාහ නො කරවූ; භේදය පිණිස හේතුවන භේදකර වස්තුවක් හෝ දැඩි ව ගෙන නො සිටිවු; ආයුෂ්මතුන් වහන්සේ සංඝයා සමග එක් වේවා! සංඝ තෙමේ සමගි වනුයේ, ඔවුනොවුන් සතුටු වනුයේ, විරුද්ධ විවාද රහිත වූයේ, සමාන උද්දේස ඇත්තේ සුවසේ වෙසේය\" යනුවෙන් මෙසේ කිය යුතු වන්නේ ය. ඒ භික්‍ෂු තෙම භික්‍ෂූන් වහන්සේලා විසින් මෙසේත් කියනු ලබන කල්හි, එසේ ම දැඩි ව ගෙන සිටින්නේ නම්, එම ලබ්ධිය දුරලීම පිණිස භික්‍ෂූන් විසින් එම භික්‍ෂු තෙම තුන්යළ දක්වා සමනුභාසනය කළ යුතු වේ. ඉදින් තුන්යළ දක්වා සමනුභාසන කර්මය කරනු ලබන්නේ ඒ ලබ්ධිය දුරලන්නේ නම් මැනවි. ඉදින් නො දුරලා නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "Whatever monk should strive for the schism of a Saṅgha that is in harmony, or should take up and persist in a legal issue conducive to schism, that monk should be spoken to by the monks thus: \"Let the venerable not strive for the schism of a harmonious Saṅgha, nor take up and persist in a legal issue conducive to schism. Let the venerable be reconciled with the Saṅgha, for a Saṅgha in harmony, rejoicing together, without quarrelling, reciting as one, dwells in comfort.\" If, though spoken to thus by the monks, that monk persists as before, he should be admonished by the monks up to three times for the sake of giving it up. If, being admonished up to three times, he gives it up, that is good. If he does not give it up: Saṅghādisesa.",
    "role": "rule",
    "n": 10,
    "notes_pali": [
     {
      "at": "පටිනිස්සජ්ජෙය්‍ය",
      "note": "ඇතැම් පොත්වල පටිනිස්සජෙය්‍ය"
     }
    ],
    "notes_si": [
     {
      "at": "කර්මය",
      "note": "ඤත්ති චතුත්ථ විනය කර්මයකි"
     }
    ]
   },
   {
    "pali": "තස්සෙව ඛො පන භික්ඛුස්ස භික්ඛූ හොන්ති අනුවත්තකා වග්ගවාදකා එකො වා ද්වෙ වා තයො වා තෙ එවං වදෙය්‍යුං; මා ආයස්මන්තො එතං භික්ඛුං කිඤ්චි අවචුත්ථ, ධම්මවාදී චෙසො භික්ඛු විනයවාදී චෙසො භික්ඛු අම්හාකඤ්චෙසො භික්ඛු ඡන්දඤ්ච රුචිඤ්ච ආදාය වොහරති. ජානාති නො භාසති අම්හාකම්පෙතං ඛමතීති. තෙ භික්ඛූ භික්ඛූහි එවමස්සු වචනීයා; මා ආයස්මන්තො එවං අවචුත්ථ, න චෙසො භික්ඛු ධම්මවාදී, න චෙසො භික්ඛු විනයවාදී, මා ආයස්මන්තානම්පි සඞ්ඝභෙදො රුච්චිත්ථ. සමෙතායස්මන්තානං සඞ්ඝෙන, සමග්ගො හි සඞ්ඝො සම්මොදමානො අවිවදමානො එකුද්දෙසො ඵාසු විහරතීති. එවඤ්ච තෙ භික්ඛූ භික්ඛූහි වුච්චමානා තථෙව පග්ගණ්හෙය්‍යුං, තෙ භික්ඛූ භික්ඛූහි යාවතතියං සමනුභාසිතබ්බා තස්ස පටිනිස්සග්ගාය. යාවතතියඤ්චෙ සමනුභාසියමානා තං පටිනිස්සජ්ජෙය්‍යුං, ඉච්චෙතං කුසලං. නො චෙ පටිනිස්සජ්ජෙය්‍යුං සඞ්ඝාදිසෙසො.",
    "translit": "Tasseva kho pana bhikkhussa bhikkhū honti anuvattakā vaggavādakā eko vā dve vā tayo vā te evaṃ vadeyyuṃ; mā āyasmanto etaṃ bhikkhuṃ kiñci avacuttha, dhammavādī ceso bhikkhu vinayavādī ceso bhikkhu amhākañceso bhikkhu chandañca ruciñca ādāya voharati. Jānāti no bhāsati amhākampetaṃ khamatīti. Te bhikkhū bhikkhūhi evamassu vacanīyā; mā āyasmanto evaṃ avacuttha, na ceso bhikkhu dhammavādī, na ceso bhikkhu vinayavādī, mā āyasmantānampi saṅghabhedo ruccittha. Sametāyasmantānaṃ saṅghena, samaggo hi saṅgho sammodamāno avivadamāno ekuddeso phāsu viharatīti. Evañca te bhikkhū bhikkhūhi vuccamānā tatheva paggaṇheyyuṃ, te bhikkhū bhikkhūhi yāvatatiyaṃ samanubhāsitabbā tassa paṭinissaggāya. Yāvatatiyañce samanubhāsiyamānā taṃ paṭinissajjeyyuṃ, iccetaṃ kusalaṃ. No ce paṭinissajjeyyuṃ saṅghādiseso.",
    "si": "සංඝභේදය සඳහා ප්‍රයත්න දරන ඒ භික්‍ෂුවට අනුවර්තනය වූ එම පක්ෂයේ වෘද්ධිය පිණිස සිටියා වූ එක් භික්‍ෂුවක් හෝ දෙදෙනෙක් හෝ තිදෙනෙක් හෝ වෙත් ද ඔවුහු \"ඇවැත්නි තෙල භික්‍ෂුවට කිසිත් නො කියවු; ඒ භික්‍ෂුව ධර්මවා දී ය, විනයවා දී ය; අපගේ ඡන්දයත් රුචියත්ගෙන ව්‍යවහාර කෙරෙයි; අපගේ ඡන්දාදිය දනි යි; අප සමග බෙණෙ යි; තෙල අපට ද රුචි වේ\" යැයි මෙසේ කියන්නාහු නම්, ඒ භික්‍ෂූහු භික්‍ෂූන් විසින් \"ඇවැත්නි මෙසේ නො කියවු; ඒ භික්‍ෂුව ධර්මවා දී නො වේය; විනයවා දී නො වේය; ආයුෂ්මතුන් වහන්සේලාට ද සංඝභේදය රුචි නො වේවා; ආයුෂ්මතුන් වහන්සේලාගේ සිත සංඝයා සමග ඒකීභාවයට යේවා; සංඝ තෙමේ සමගි වනුයේ, ඔවුනොවුන් සතුටු වනුයේ, විවාද නො කරනුයේ, සමාන උද්දේස ඇත්තේ සුවසේ වෙසේය\" යනුවෙන් මෙසේ කිය යුත්තාහ. ඒ අනුවර්තක භික්‍ෂූහු භික්‍ෂූන් විසින් මෙසේත් කියනු ලබන්නාහු, එසේ ම දැඩි කොට ගත්තාහු නම්, ඒ ලබ්ධිය දුරලීම පිණිස ඒ භික්‍ෂූහු භික්‍ෂූන් විසින් තුන්යළ දක්වා සමනුභාසනය කළ යුතු වේ. ඉදින් තුන්යළ දක්වා සමනුභාසන කර්මය කරනු ලබන්නේ, ඒ ලබ්ධිය දුරලන්නේ නම් මැනවි. ඉදින් නො දුරලා නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "A monk may have followers, partisans — one, two or three monks — who say: \"Venerables, do not say anything to that monk. He speaks in accordance with the Dhamma, he speaks in accordance with the Vinaya, he acts with our approval and our wishes in mind, he knows and speaks for us, and this is agreeable to us.\" Those monks should be told by the monks: \"Venerables, do not say so. That monk is not one who speaks in accordance with the Dhamma, nor one who speaks in accordance with the Vinaya. Let not a schism in the Saṅgha be agreeable even to you venerables. Be reconciled with the Saṅgha, for a Saṅgha in concord, rejoicing together, without quarrelling, reciting as one, dwells in comfort.\" If, though thus admonished by the monks, those monks persist as before, they should be rebuked up to three times by the monks for the sake of giving it up. If, being rebuked up to three times, they give it up, that is good. If they do not give it up: Saṅghādisesa.",
    "role": "rule",
    "n": 11,
    "notes_pali": [
     {
      "at": "තං",
      "note": "ඇතැම් පොත්වල තං නොමැති ව නං ලෙස ඇත."
     }
    ]
   },
   {
    "pali": "භික්ඛු පනෙව දුබ්බචජාතිකො හොති, උද්දෙසපරියාපන්නෙසු සික්ඛාපදෙසු භික්ඛූහි සහධම්මිකං වුච්චමානො අත්තානං අවචනීයං කරොති; මා මං ආයස්මන්තො කිඤ්චි අවචුත්ථ කල්‍යාණං වා පාපකං වා, අහම්පායස්මන්තෙ න කිඤ්චි වක්ඛාමි කල්‍යාණං වා පාපකං වා, විරමථායස්මන්තො මම වචනායාති. සො භික්ඛු භික්ඛූහි එවමස්ස වචනීයො; මා ආයස්මා අත්තානං අවචනීයං අකාසි, වචනීයමෙවායස්මා අත්තානං කරොතු, ආයස්මාපි භික්ඛූ වදෙතු සහධම්මෙන, භික්ඛූපි ආයස්මන්තං වක්ඛන්ති සහධම්මෙන, එවං සංවද්ධා හි තස්ස භගවතො පරිසා, යදිදං අඤ්ඤමඤ්ඤවචනෙන අඤ්ඤමඤ්ඤවුට්ඨාපනෙනාති. එවඤ්ච සො භික්ඛු භික්ඛූහි වුච්චමානො තථෙව පග්ගණ්හෙය්‍ය, සො භික්ඛු භික්ඛූහි යාවතතියං සමනුභාසිතබ්බො තස්ස පටිනිස්සග්ගාය, යාවතතියඤ්චෙ සමනුභාසියමානො තං පටිනිස්සජ්ජෙය්‍ය, ඉච්චෙතං කුසලං. නො චෙ පටිනිස්සජ්ජෙය්‍ය සඞ්ඝාදිසෙසො.",
    "translit": "Bhikkhu paneva dubbacajātiko hoti, uddesapariyāpannesu sikkhāpadesu bhikkhūhi sahadhammikaṃ vuccamāno attānaṃ avacanīyaṃ karoti; mā maṃ āyasmanto kiñci avacuttha kalyāṇaṃ vā pāpakaṃ vā, ahampāyasmante na kiñci vakkhāmi kalyāṇaṃ vā pāpakaṃ vā, viramathāyasmanto mama vacanāyāti. So bhikkhu bhikkhūhi evamassa vacanīyo; mā āyasmā attānaṃ avacanīyaṃ akāsi, vacanīyamevāyasmā attānaṃ karotu, āyasmāpi bhikkhū vadetu sahadhammena, bhikkhūpi āyasmantaṃ vakkhanti sahadhammena, evaṃ saṃvaddhā hi tassa bhagavato parisā, yadidaṃ aññamaññavacanena aññamaññavuṭṭhāpanenāti. Evañca so bhikkhu bhikkhūhi vuccamāno tatheva paggaṇheyya, so bhikkhu bhikkhūhi yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya, yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ. No ce paṭinissajjeyya saṅghādiseso.",
    "si": "භික්‍ෂුවක් වනාහි අකීකරු ස්වභාව ඇත්තේ වේ ද, භික්‍ෂූන් විසින් පාමොක් උදෙසීමෙහි ඇතුළත් වූ සිකපදයන්හි සහධර්මයන් (පැනවු සිකපදයෙන්) කියනු ලබන්නේ \"ආයුෂ්මතුන් වහන්සේලා මට යහපත් වූ හෝ අයහපත් වූ හෝ කිසිවක් නො කියවු; මම ද ආයුෂ්මතුන් වහන්සේලාට යහපත් වූ හෝ අයහපත් වූ හෝ කිසිවක් නො කියමි; ආයුෂ්මතුන් වහන්සේලා මට අවවාදයෙන් වෙන් වවු\" යැයි තමා නො කියයුත්තකු කරයි. ඒ භික්‍ෂු තෙම භික්‍ෂූන් විසින් \"ආයුෂ්මතුන් වහන්සේ තමාව නො කියයුත්තකු නො කෙරේවා; ආයුෂ්මත් තෙම තමාව කියයුත්තකු ම කරාවා; ආයුෂ්මත් තෙමේ ද භික්‍ෂූන්හට පැනවූ ශික්‍ෂාපදයෙන් කියාවා; භික්‍ෂූහු ද ආයුෂ්මතුන්හට පැන වූ ශික්‍ෂාපදයෙන් කියත්; මෙසේ, ඉදින් මේ ඔවුනොවුන්ගේ අනුශාසනයෙන් ඔවුනොවුන් ඇවතින් නඟාලීමෙන් ඒ භාග්‍යවතුන් වහන්සේගේ පිරිස වැඩුනේ ම වෙයි\" යනුවෙන් මෙසේ කිය යුතු වන්නේ ය. ඒ භික්‍ෂු තෙම භික්‍ෂූන් වහන්සේලා විසින් මෙසේත් කියනු ලබන කල්හි, එසේ ම දැඩි ව ගෙන සිටින්නේ නම්, එම ලබ්ධිය දුරලීම පිණිස භික්‍ෂූන් විසින් එම භික්‍ෂු තෙම තුන්යළ දක්වා සමනුභාසනය කළ යුතු වේ. ඉදින් තුන්යළ දක්වා සමනුභාසන කර්මය කරනු ලබන්නේ ඒ ලබ්ධිය දුරලන්නේ නම් මැනවි. ඉදින් නො දුරලා නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "A monk may be hard to correct. When he is spoken to by the monks in accordance with the Dhamma about the training rules included in the recitation, he makes himself unadmonishable, saying: \"Venerables, do not say anything to me, good or bad, and I shall not say anything to you, good or bad. Refrain from speaking to me.\" That monk should be told by the monks: \"Let the venerable not make himself unadmonishable; let him make himself admonishable. Let the venerable speak to the monks in accordance with the Dhamma, and the monks will speak to the venerable in accordance with the Dhamma, for the Blessed One's assembly grows in this way: by speaking to one another and by helping one another up.\" If, though thus spoken to by the monks, he persists as before, that monk should be rebuked up to three times by the monks for the sake of giving it up. If, being rebuked up to three times, he gives it up, that is good. If he does not give it up: Saṅghādisesa.",
    "role": "rule",
    "n": 12,
    "notes_pali": [
     {
      "at": "නිස්සජ්ජෙය්‍ය",
      "note": "ඇතැම් පොත්වල පටිනිස්සජෙය්‍ය"
     }
    ]
   },
   {
    "pali": "භික්ඛු පනෙව අඤ්ඤතරං ගාමං වා නිගමං වා උපනිස්සාය විහරති, කුලදූසකො පාපසමාචාරො. තස්ස ඛො පාපකා සමාචාරා දිස්සන්ති චෙව සුය්‍යන්ති ච, කුලානි ච තෙන දුට්ඨානි දිස්සන්ති චෙව සුය්‍යන්ති ච, සො භික්ඛු භික්ඛූහි එවමස්ස වචනීයො; ආයස්මා ඛො කුලදූසකො පාපසමාචාරො. ආයස්මතො ඛො පාපකා සමාචාරා දිස්සන්ති චෙව සුය්‍යන්ති ච, කුලානි චායස්මතා දුට්ඨානි දිස්සන්ති චෙව සුය්‍යන්ති ච, පක්කමතායස්මා ඉමම්හා ආවාසා, අලං තෙ ඉධ වාසෙනාති. එවඤ්ච සො භික්ඛු භික්ඛූහි වුච්චමානො තෙ භික්ඛූ එවං වදෙය්‍ය; ඡන්දගාමිනො ච භික්ඛූ දොසගාමිනො ච භික්ඛූ මොහගාමිනො ච භික්ඛූ භයගාමිනො ච භික්ඛූ, තාදිසිකාය ආපත්තියා එකච්චං පබ්බාජෙන්ති, එකච්චං න පබ්බාජෙන්තීති. සො භික්ඛු භික්ඛූහි එවමස්ස වචනීයො; මා ආයස්මා එවං අවච, න ච භික්ඛූ ඡන්දගාමිනො න ච භික්ඛූ දොසගාමිනො න ච භික්ඛූ මොහගාමිනො න ච භික්ඛූ භයගාමිනො, ආයස්මා ඛො කුලදූසකො පාපසමාචාරො, ආයස්මතො ඛො පාපකා සමාචාරා දිස්සන්ති චෙව සුය්‍යන්ති ච, කුලානි චායස්මතා දුට්ඨානි දිස්සන්ති චෙව සුය්‍යන්ති ච, පක්කමතායස්මා ඉමම්හා ආවාසා, අලං තෙ ඉධ වාසෙනාති. එවඤ්ච සො භික්ඛු භික්ඛූහි වුච්චමානො තථෙව පග්ගණ්හෙය්‍ය, සො භික්ඛු භික්ඛූහි යාවතතියං සමනුභාසිතබ්බො තස්ස පටිනිස්සග්ගාය, යාවතතියඤ්චෙ සමනුභාසියමානො තං පටිනිස්සජ්ජෙය්‍ය, ඉච්චෙතං කුසලං. නො චෙ පටිනිස්සජ්ජෙය්‍ය සඞ්ඝාදිසෙසො.",
    "translit": "Bhikkhu paneva aññataraṃ gāmaṃ vā nigamaṃ vā upanissāya viharati, kuladūsako pāpasamācāro. Tassa kho pāpakā samācārā dissanti ceva suyyanti ca, kulāni ca tena duṭṭhāni dissanti ceva suyyanti ca, so bhikkhu bhikkhūhi evamassa vacanīyo; āyasmā kho kuladūsako pāpasamācāro. Āyasmato kho pāpakā samācārā dissanti ceva suyyanti ca, kulāni cāyasmatā duṭṭhāni dissanti ceva suyyanti ca, pakkamatāyasmā imamhā āvāsā, alaṃ te idha vāsenāti. Evañca so bhikkhu bhikkhūhi vuccamāno te bhikkhū evaṃ vadeyya; chandagāmino ca bhikkhū dosagāmino ca bhikkhū mohagāmino ca bhikkhū bhayagāmino ca bhikkhū, tādisikāya āpattiyā ekaccaṃ pabbājenti, ekaccaṃ na pabbājentīti. So bhikkhu bhikkhūhi evamassa vacanīyo; mā āyasmā evaṃ avaca, na ca bhikkhū chandagāmino na ca bhikkhū dosagāmino na ca bhikkhū mohagāmino na ca bhikkhū bhayagāmino, āyasmā kho kuladūsako pāpasamācāro, āyasmato kho pāpakā samācārā dissanti ceva suyyanti ca, kulāni cāyasmatā duṭṭhāni dissanti ceva suyyanti ca, pakkamatāyasmā imamhā āvāsā, alaṃ te idha vāsenāti. Evañca so bhikkhu bhikkhūhi vuccamāno tatheva paggaṇheyya, so bhikkhu bhikkhūhi yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya, yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ. No ce paṭinissajjeyya saṅghādiseso.",
    "si": "භික්‍ෂුවක් වනාහි දායකයන්ගේ ශ්‍රද්ධාව දූෂණය කරනුයේ, ලාමක පැවතුම ඇත්තේ, එක්තරා ගමක් හෝ නියම් ගමක් ඇසුරු කොට වෙසේ නම්, ඔහුගේ ලාමක පැවතුම් දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත් ද, ඔහු විසින් දූෂිත කුලයෝ ද දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත් ද, ඒ භික්‍ෂු තෙම භික්‍ෂූන් විසින් \"ආයුෂ්මතුන් වහන්සේ කුලදූෂක ය; ලාමක හැසිරීම් ඇත්තෙහි ය; ආයුෂ්මතුන්ගේ ලාමක හැසිරීම් දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත් ය; ආයුෂ්මතුන් වහන්සේ විසින් දූෂිත කුලයෝ ද දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත්; ආයුෂ්මතුන් වහන්සේ මේ ආවාසයෙන් නික්ම යේවා; නුඹ වහන්සේගේ මෙහි විසීමෙන් කම් නැත\" යනුවෙන් මෙසේ කිය යුතු වන්නේ ය. ඒ භික්‍ෂු තෙම භික්‍ෂූන් විසින් මෙසේත් කියනු ලබන කල්හි ඒ භික්‍ෂූන්ට \"භික්‍ෂූහු ඡන්දයෙන් අගතියට ගියාහු ය; භික්‍ෂූහු ද්වේෂයෙන් අගතියට ගියාහු ය; භික්‍ෂූහු මෝහයෙන් අගතියට ගියාහු ය; භික්‍ෂූහු භයෙන් අගතියට ගියාහු ය; එබඳු වූ ඇවතින් ඇතමෙකු (ආරාමයෙන්) බැහැර කරති; සමහර අය බැහැර නො කරති\" යැයි මෙසේ කියන්නේ නම්, ඒ භික්‍ෂු තෙම අනෙක් භික්‍ෂූන් විසින් \"ආයුෂ්මතුන් වහන්සේ මෙසේ නො කියව; භික්‍ෂූහු ඡන්දයෙන් අගතියට ගියාහු නො වෙත්; භික්‍ෂූහු ද්වේෂයෙන් අගතියට ගියාහු නො වෙත්; භික්‍ෂූහු මෝහයෙන් අගතියට ගියාහු නො වෙත්; භික්‍ෂූහු භයෙන් අගතියට ගියාහු නො වෙත්; ආයුෂ්මතුන් වහන්සේ කුලදූෂක ය; ලාමක හැසිරීම් ඇත්තෙහි ය; ආයුෂ්මතුන්ගේ ලාමක හැසිරීම් දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත්; ආයුෂ්මතුන් වහන්සේ විසින් දූෂිත කුලයෝ ද දක්නා ලැබෙත් මෙන් ම අසනු ලැබෙත්; ආයුෂ්මතුන් වහන්සේ මේ ආවාසයෙන් නික්ම යේවා; නුඹ වහන්සේගේ මෙහි විසීමෙන් කම් නැත\" යැයි මෙසේ කිය යුතු වන්නේ ය. ඒ භික්‍ෂු තෙම භික්‍ෂූන් වහන්සේලා විසින් මෙ සේත් කියනු ලබන කල්හි, එසේ ම දැඩි ව ගෙන සිටින්නේ නම්, එම ලබ්ධිය දුරලීම පිණිස භික්‍ෂූන් විසින් එම භික්‍ෂු තෙම තුන්යළ දක්වා සමනුභාසනය කළ යුතු වේ. ඉදින් තුන්යළ දක්වා සමනුභාසන කර්මය කරනු ලබන්නේ ඒ ලබ්ධිය දුරලන්නේ නම් මැනවි. ඉදින් නො දුරලා නම් සඟවෙසෙස් ඇවැත් වේ.",
    "en": "A monk may live in dependence on some village or town as a corrupter of families, of bad conduct. His bad conduct is seen and heard, and the families he has corrupted are seen and heard. That monk should be told by the monks: \"You, venerable, are a corrupter of families, of bad conduct. Your bad conduct is seen and heard, and the families corrupted by you are seen and heard. Leave this residence, venerable; enough of your living here.\" If, being thus spoken to, that monk says to those monks: \"The monks are biased by desire, by hatred, by delusion, by fear; for an offence of this kind they banish some and do not banish others,\" he should be told by the monks: \"Do not say so, venerable. The monks are not biased by desire, hatred, delusion or fear. You, venerable, are a corrupter of families, of bad conduct; your bad conduct is seen and heard, and the families corrupted by you are seen and heard. Leave this residence; enough of your living here.\" If, though thus spoken to, he persists as before, that monk should be rebuked up to three times by the monks for the sake of giving it up. If, being rebuked up to three times, he gives it up, that is good. If he does not give it up: Saṅghādisesa.",
    "role": "rule",
    "n": 13,
    "notes_pali": [
     {
      "at": "නිස්සජ්ජෙය්‍ය",
      "note": "ඇතැම් පොත්වල පටිනිස්සජෙය්‍ය"
     }
    ],
    "notes_si": [
     {
      "at": "ය",
      "note": "දායකයන්ගේ ශ්‍රද්ධාව පිරිහෙළීම් වශයෙන් කරනු ලබන විනාශ"
     }
    ]
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො තෙරස සඞ්ඝාදිසෙසා ධම්මා, නව පඨමාපත්තිකා, චත්තාරො යාවතතියකා. යෙසං භික්ඛු අඤ්ඤතරං වා අඤ්ඤතරං වා ආපජ්ජිත්වා, යාවතිහං ජානං පටිච්ඡාදෙති, තාවතිහං තෙන භික්ඛුනා අකාමා පරිවත්ථබ්බං. පරිවුත්ථපරිවාසෙන භික්ඛුනා උත්තරිං ඡාරත්තං භික්ඛුමානත්තාය පටිපජ්ජිතබ්බං. චිණ්ණමානත්තො භික්ඛු යත්ථ සියා වීසතිගණො භික්ඛුසඞ්ඝො, තත්ථ සො භික්ඛු අබ්භෙතබ්බො. එකෙනපි චෙ ඌනො වීසතිගණො භික්ඛුසඞ්ඝො තං භික්ඛුං අබ්භෙය්‍ය, සො ච භික්ඛු අනබ්භිතො. තෙ ච භික්ඛූ ගාරය්හා, අයං තත්ථ සාමීචි. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto terasa saṅghādisesā dhammā, nava paṭhamāpattikā, cattāro yāvatatiyakā. Yesaṃ bhikkhu aññataraṃ vā aññataraṃ vā āpajjitvā, yāvatihaṃ jānaṃ paṭicchādeti, tāvatihaṃ tena bhikkhunā akāmā parivatthabbaṃ. Parivutthaparivāsena bhikkhunā uttariṃ chārattaṃ bhikkhumānattāya paṭipajjitabbaṃ. Ciṇṇamānatto bhikkhu yattha siyā vīsatigaṇo bhikkhusaṅgho, tattha so bhikkhu abbhetabbo. Ekenapi ce ūno vīsatigaṇo bhikkhusaṅgho taṃ bhikkhuṃ abbheyya, so ca bhikkhu anabbhito. Te ca bhikkhū gārayhā, ayaṃ tattha sāmīci. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! දහතුනක් වූ සඟවෙසෙස් ඇවැත් උදෙසන ලද්දාහු ය. ඉන් මුල් ශික්ෂාපද නවය පඨමාපත්තික නම් වේ. අන්‍ය වූ සතර යාවතතියක නම් වේ. යම් භික්‍ෂුවක් මෙයින් කුමන හෝ ඇවැතකට පත් වූයේ නම්, පත් වී දැන දැන යම්තාක් දවස් නො කියා සඟවා සිටී නම්, ඒ තාක් දින ගණනක් දඬුවම් පිණිස ඒ භික්‍ෂුව විසින් පිරිවෙස් විසිය යුතු ය. පිරිවෙස් පුරා අවසාන වූ පසු ඒ භික්‍ෂුව විසින් දින හයක් භික්‍ෂූන්ට ගරු කිරීම පිණිස මානත් පිරිය යුතු ය. මානත් පුරා අවසන් වූ පසු භික්‍ෂූන් වහන්සේලා විසිනමක්වත් ඉදිරියේ අබ්භාන විනය කර්මය සිදුකරගෙන ඇවැත් වලින් පිරිසිදු විය යුතු ය. භික්‍ෂූන් විසිනමකට අඩු තැනක අබ්භානය සිදු වූයේ නම්, ඒ භික්‍ෂුව ඇවතින් පිරිසිදු නො වූයේ, ඒ සඟ පිරිස ගර්හා කටයුතු වූවාහු ද වේ. මේ එහි අනුධර්මතාවය යි. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the thirteen Saṅghādisesa rules have been recited — nine that incur the penalty at the first offence, and four that do so only after the third admonition. A monk who has fallen into any of them must live on probation for as many days as he knowingly concealed it. Having completed probation, he must then undertake six nights of mānatta for the monks' pleasure. Having completed mānatta, the monk is to be reinstated (abbhāna) in a community of at least twenty monks. If a community of fewer than twenty reinstates him, he is not reinstated and those monks are blameworthy. This is the proper procedure here.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close",
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ],
    "notes_si": [
     {
      "at": "පඨමාපත්තික",
      "note": "පළමු කොට ම පැමිණෙන ආපත්ති"
     },
     {
      "at": "යාවතතියක",
      "note": "තුන්යළක් දක්වා දැනුම් දීමෙන් පසු පැමිණෙන ආපත්ති"
     },
     {
      "at": "පිරිවෙස්",
      "note": "පරිවාස (වත් පිළිවෙත් දැක්වීම් වශයෙන් යටතේ වාසය කිරීම යි)"
     }
    ]
   },
   {
    "pali": "සඞ්ඝාදිසෙසුද්දෙසො තතියො.",
    "translit": "Saṅghādisesuddeso tatiyo.",
    "si": "තුන්වෙනි සංඝාදිසේස උද්දේසය යි.",
    "en": "The third recital, the Saṅghādisesas, is finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද දහතුන",
  "count_en": "Thirteen rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "aniyata",
  "si": "අනියතා",
  "en": "Aniyatā",
  "kind": "rules",
  "count": 2,
  "num": 3,
  "title_si": "(3) අනියතා ධම්මා",
  "title_en": "(3) Aniyatā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො ද්වෙ අනියතා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto dve aniyatā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ අනියත ධර්මයෝ දෙදෙන උදෙසීමට පැමිණෙත්.",
    "en": "Here these two Aniyata rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමෙන සද්ධිං එකො එකාය රහො පටිච්ඡන්නෙ ආසනෙ අලංකම්මනියෙ නිසජ්ජං කප්පෙය්‍ය, තමෙනං සද්ධෙය්‍යවචසා උපාසිකා දිස්වා තිණ්ණං ධම්මානං අඤ්ඤතරෙන වදෙය්‍ය, පාරාජිකෙන වා සඞ්ඝාදිසෙසෙන වා පාචිත්තියෙන වා. නිසජ්ජං භික්ඛු පටිජානමානො තිණ්ණං ධම්මානං අඤ්ඤතරෙන කාරෙතබ්බො, පාරාජිකෙන වා සඞ්ඝාදිසෙසෙන වා පාචිත්තියෙන වා. යෙන වා සා සද්ධෙය්‍යවචසා උපාසිකා වදෙය්‍ය, තෙන සො භික්ඛු කාරෙතබ්බො අයං ධම්මො අනියතො.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ eko ekāya raho paṭicchanne āsane alaṃkammaniye nisajjaṃ kappeyya, tamenaṃ saddheyyavacasā upāsikā disvā tiṇṇaṃ dhammānaṃ aññatarena vadeyya, pārājikena vā saṅghādisesena vā pācittiyena vā. Nisajjaṃ bhikkhu paṭijānamāno tiṇṇaṃ dhammānaṃ aññatarena kāretabbo, pārājikena vā saṅghādisesena vā pācittiyena vā. Yena vā sā saddheyyavacasā upāsikā vadeyya, tena so bhikkhu kāretabbo ayaṃ dhammo aniyato.",
    "si": "යම් භික්‍ෂුවක් වනාහි මිනිස් මාගමක් සමග එකලා ව රහසිගත ව මෙවුන්දම් සේවනයට සුදුසු පිළිසන් වූ අසුනක හිඳීම කරන්නේ නම්, ඇදහිය හැකි වචන ඇති උපාසිකාවක් ඒ භික්‍ෂුව දැක පරිජියෙන් හෝ සඟවෙසෙසින් හෝ පචිතියෙන් හෝ යන තුන් ඇවැත් අතරින් එක්තරා එකකින් කියැයි නම්, හිඳීම පිළිගන්නා භික්‍ෂුව විසින් පරිජියෙන් හෝ සඟවෙසෙසින් හෝ පචිතියෙන් හෝ යන තුන් ඇවැත් අතරින් එක්තරා එකකින් ඇවැත් කරවිය යුත්තේ ය. ඇදහිය යුතු වචන ඇති ඒ උපාසිකාව යමකින් හෝ කියා නම්, ඒ භික්‍ෂුව ඒ ඇවතින් කරවිය යුතු වේ. හුදකලා වූ ස්ත්‍රියක් සමග රහසිගත ව මෙවුන් දම් සේවනයට සුදුසු තැනක හිඳ සිටී නම් ඇදහිය හැකි වචන ඇති උපාසිකාවක් විසින් ඒ භික්‍ෂුව දැක පාරාජිකා, සඟවෙසෙස් හෝ පචිති යන ඇවැත් තුනෙන් එක් ඇවතකින් දොස් තබා කථා කරයි ද ඒ බව ප්‍රතිඥා කරන භික්‍ෂුවට ඒ ඇවැත් තුනෙන් එකකින් ඇවැත් කරවිය යුතු ය. මේ ඇවැත අනියත ය",
    "en": "Whatever monk, seated in private with a woman, in a secluded place suitable for sexual relations — if a trustworthy female lay-follower should accuse him of a Pārājika, Saṅghādisesa, or Pācittiya offence — and the monk admits to the sitting, he is to be dealt with according to one of these three. Or, according to what that trustworthy female lay-follower says, the monk is to be dealt with. This rule is indefinite (aniyata).",
    "role": "rule",
    "n": 1,
    "notes_si": [
     {
      "at": "ය",
      "note": "නියත නො වන"
     }
    ]
   },
   {
    "pali": "නහෙව ඛො පන පටිච්ඡන්නං ආසනං හොති නාලංකම්මනියං, අලඤ්ච ඛො හොති මාතුගාමං දුට්ඨුල්ලාහි වාචාහි ඔභාසිතුං. යො පන භික්ඛු තථාරූපෙ ආසනෙ මාතුගාමෙන සද්ධිං එකො එකාය රහො නිසජ්ජං කප්පෙය්‍ය, තමෙනං සද්ධෙය්‍යවචසා උපාසිකා දිස්වා ද්වින්නං ධම්මානං අඤ්ඤතරෙන වදෙය්‍ය, සඞ්ඝාදිසෙසෙන වා පාචිත්තියෙන වා. නිසජ්ජං භික්ඛු පටිජානමානො ද්වින්නං ධම්මානං අඤ්ඤතරෙන කාරෙතබ්බො, සඞ්ඝාදිසෙසෙන වා පාචිත්තියෙන වා. යෙන වා සා සද්ධෙය්‍යවචසා උපාසිකා වදෙය්‍ය, තෙන සො භික්ඛු කාරෙතබ්බො අයම්පි ධම්මො අනියතො.",
    "translit": "Naheva kho pana paṭicchannaṃ āsanaṃ hoti nālaṃkammaniyaṃ, alañca kho hoti mātugāmaṃ duṭṭhullāhi vācāhi obhāsituṃ. Yo pana bhikkhu tathārūpe āsane mātugāmena saddhiṃ eko ekāya raho nisajjaṃ kappeyya, tamenaṃ saddheyyavacasā upāsikā disvā dvinnaṃ dhammānaṃ aññatarena vadeyya, saṅghādisesena vā pācittiyena vā. Nisajjaṃ bhikkhu paṭijānamāno dvinnaṃ dhammānaṃ aññatarena kāretabbo, saṅghādisesena vā pācittiyena vā. Yena vā sā saddheyyavacasā upāsikā vadeyya, tena so bhikkhu kāretabbo ayampi dhammo aniyato.",
    "si": "අසුන වැසුනක් නො වූයේ ම වෙයි ද, මෙවුන්දම් සේවනයට යෝග්‍ය නො වේ ද, මිනිස් මාගමකට දුහුල් වචන කීමට යෝග්‍යවේ ද, යම් භික්‍ෂුවක් එබඳු අසුනක මාගමක් සමග එකලා ව රහසිගත ව හිඳීම කරයි නම්, ඇදහිය හැකි වචන ඇති උපාසිකාවක් ඒ භික්‍ෂුව දැක සඟවෙසෙසින් හෝ පචිතියෙන් හෝ යන ඇවැත් දෙක අතරින් එක්තරා එකකින් කියැයි නම්, හිඳීම පිළිගන්නා භික්‍ෂුව විසින් සඟවෙසෙසින් හෝ පචිතියෙන් හෝ යන ඇවැත් දෙක අතරින් එක්තරා එකකින් ඇවැත් කරවිය යුත්තේ ය. ඇදහිය හැකි වචන ඇති ඒ උපාසිකාව යමකින් හෝ කියා නම්, ඒ භික්‍ෂුව ඒ ඇවතින් ඇවැත් කරවිය යුත්තේ ය. මේ ඇවත ද අනියත වේ.",
    "en": "But if it is not a place suitable for sexual relations, nor sufficient for speaking lewd words to a woman — and a monk sits in private alone with a woman in such a place, and a trustworthy female lay-follower accuses him of Saṅghādisesa or Pācittiya — and the monk admits to the sitting, he is to be dealt with according to one of these two. Or according to what the lay-follower says. This rule is also indefinite (aniyata).",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො ද්වෙ අනියතා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto dve aniyatā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අනියත ආපත්තීහු උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the two Aniyata rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "අනියතුද්දෙසො චතුත්ථො.",
    "translit": "Aniyatuddeso catuttho.",
    "si": "සිවුවැනි අනියත උද්දේසය යි.",
    "en": "The fourth recital, the Aniyatas, is finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද දෙක",
  "count_en": "Two rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "nissaggiya",
  "si": "නිස්සග්ගිය",
  "en": "Nissaggiya",
  "kind": "rules",
  "count": 30,
  "num": 4,
  "title_si": "(4) නිස්සග්ගියා පාචිත්තියා ධම්මා",
  "title_en": "(4) Nissaggiyā Pācittiyā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto tiṃsanissaggiyā pācittiyā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ තිහක් වු නිසඟි පචිති ඇවැත් උදෙසීමට පැමිණෙත්.",
    "en": "Here these thirty Nissaggiya Pācittiya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කඨිනෙ, දසාහපරමං අතිරෙකචීවරං ධාරෙතබ්බං. තං අතික්කාමයතො නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kaṭhine, dasāhaparamaṃ atirekacīvaraṃ dhāretabbaṃ. Taṃ atikkāmayato nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි කඨිනය උදුරන ලද කල්හි භික්‍ෂුවක් විසින් උපරිම දස දිනක් දක්වා අතිරේක සිවුරක් දැරිය යුතු ය. එම දස දින ඉක්මවන්නාට, නිසඟි පචිති වේ.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, an extra robe may be kept for at most ten days. To exceed that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 1,
    "notes_pali": [
     {
      "at": "නිට්ඨිතචීවරස්මිං",
      "note": "ඇතැම් පොත්වල නිට්ඨිතචීවරස්මිං පන"
     }
    ]
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කඨිනෙ, එකරත්තම්පි චෙ භික්ඛු තිචීවරෙන විප්පවසෙය්‍ය, අඤ්ඤත්‍ර භික්ඛුසම්මුතියා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kaṭhine, ekarattampi ce bhikkhu ticīvarena vippavaseyya, aññatra bhikkhusammutiyā nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි කඨිනය උදුරන ලද කල්හි ඉදින් භික්‍ෂුවක් විසින් භික්‍ෂු සම්මුතියකින් තොර ව එක් රැයකුදු තුන් සිවුරෙන් වෙන් ව වසන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, a monk may not stay apart from the three robes even for one night, except with the consent of the monks: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කඨිනෙ, භික්ඛුනො පනෙව අකාලචීවරං උප්පජ්ජෙය්‍ය, ආකඞ්ඛමානෙන භික්ඛුනා පටිග්ගහෙතබ්බං, පටිග්ගහෙත්වා ඛිප්පමෙව කාරෙතබ්බං. නො චස්ස පාරිපූරී, මාසපරමං තෙන භික්ඛුනා තං චීවරං නික්ඛිපිතබ්බං. ඌනස්ස පාරිපූරියා සතියා පච්චාසාය, තතො චෙ උත්තරිං නික්ඛිපෙය්‍ය සතියාපි පච්චාසාය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kaṭhine, bhikkhuno paneva akālacīvaraṃ uppajjeyya, ākaṅkhamānena bhikkhunā paṭiggahetabbaṃ, paṭiggahetvā khippameva kāretabbaṃ. No cassa pāripūrī, māsaparamaṃ tena bhikkhunā taṃ cīvaraṃ nikkhipitabbaṃ. Ūnassa pāripūriyā satiyā paccāsāya, tato ce uttariṃ nikkhipeyya satiyāpi paccāsāya nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි කඨිනය උදුරන ලද කල්හි භික්‍ෂුවකට ම නොකල් සිවුරක් උපදනේ නම්, කැමති වන්නා භික්‍ෂුව විසින් පිළිගත යුතු ය. පිළිගෙන වහා ම කරවිය යුතු වේ. ඉදින් සිවුරකට ප්‍රමාණවත් නො වේ ද සිවුරු ලැබීමේ ආශාවක් ඇති ඒ භික්‍ෂුව විසින් ඌන පූර්ණය පිණිස ඒ සිවුර උපරිම මාසයක් දක්වා තැබිය යුතු ය. චීවරය ලැබීමේ ආශාවක් ඇති කල්හිදු එයින් මත්තෙහි තබාගනී නම්, නිසඟි පචිති වේ.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, should robe-cloth arise out of season, it may be accepted by a monk who wants it. Having accepted it, it should be made up quickly. If it is not sufficient, that robe-cloth may be stored for at most one month for the purpose of making up the deficiency.",
    "role": "rule",
    "n": 3,
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා පුරාණචීවරං ධොවාපෙය්‍ය වා රජාපෙය්‍ය වා ආකොටාපෙය්‍ය වා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā purāṇacīvaraṃ dhovāpeyya vā rajāpeyya vā ākoṭāpeyya vā nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුණියක ලවා (වරක් නමුදු හඳනා හෝ පොරෝනා ලද) පැරණි සිවුරක් සෝදවයි නම්, හෝ පඬු පොවනු ලබයි නම්, හෝ අතුල්ලනු ලබයි නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should have a nun who is not a relative wash, dye or beat an old robe: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා හත්ථතො චීවරං පටිග්ගණ්හෙය්‍ය අඤ්ඤත්‍ර පාරිවට්ටකා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā hatthato cīvaraṃ paṭiggaṇheyya aññatra pārivaṭṭakā nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නො නෑ භික්‍ෂුණියක අතින් සුළු දෙයකට හෝ මාරු කර ගැනීමක් නැති ව සිවුරක් පිළිගනී නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should accept a robe from the hand of a nun who is not a relative, except in exchange: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 5,
    "notes_pali": [
     {
      "at": "පාරිවට්ටකා",
      "note": "ඇතැම් පොත්වල පරිවත්තකා"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතකං ගහපතිං වා ගහපතානිං වා චීවරං විඤ්ඤාපෙය්‍ය අඤ්ඤත්‍ර සමයා නිස්සග්ගියං පාචිත්තියං. තත්ථායං සමයො, අච්ඡින්නචීවරො වා හොති භික්ඛු නට්ඨචීවරො වා අයං තත්ථ සමයො.",
    "translit": "Yo pana bhikkhu aññātakaṃ gahapatiṃ vā gahapatāniṃ vā cīvaraṃ viññāpeyya aññatra samayā nissaggiyaṃ pācittiyaṃ. Tatthāyaṃ samayo, acchinnacīvaro vā hoti bhikkhu naṭṭhacīvaro vā ayaṃ tattha samayo.",
    "si": "යම් භික්‍ෂුවක් වනාහි නො නෑ ගෘහපතියකු හෝ ගෘහපතිනියකගෙන් හෝ සුදුසු සමය හැර සිවුරක් ඉල්ලා ගනී නම්, නිසඟි පචිති වේ. එහි මේ සුදුසු සමය වෙති; භික්‍ෂු තෙම පැහැරගන්නා ලද සිවුරු ඇත්තේ හෝ නැසුනු සිවුරු ඇත්තේ හෝ වෙති; මෙය එහි සුදුසු සමය වේ.",
    "en": "Whatever monk should request a robe from a householder or householder's wife who is not a relative, except at the proper time: Nissaggiya Pācittiya. Here the proper time is this: when the monk's robe has been seized or destroyed. This is the proper time here.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "තඤ්චෙ අඤ්ඤාතකො ගහපති වා ගහපතානී වා බහූහි චීවරෙහි අභිහට්ඨුං පවාරෙය්‍ය, සන්තරුත්තරපරමං තෙන භික්ඛුනා තතො චීවරං සාදිතබ්බං, තතො චෙ උත්තරිං සාදියෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Tañce aññātako gahapati vā gahapatānī vā bahūhi cīvarehi abhihaṭṭhuṃ pavāreyya, santaruttaraparamaṃ tena bhikkhunā tato cīvaraṃ sāditabbaṃ, tato ce uttariṃ sādiyeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "ඉදින් නො නෑ වූ ගෘහපතියෙක් හෝ ගෘහපතිනියක් හෝ බොහෝ සිවුරු වලින් භික්‍ෂුවකට කැමති තාක් ගෙන යන්නට පවරයි නම්, ඒ භික්‍ෂුව විසින් අඳනය හා උතුරු සඟල (තනිපට සිවුර) පමණක් ඉවසිය යුතු ය. ඉදින් ඉන් මත්තෙහි ඉවසා නම්, නිසඟි පචිති වේ.",
    "en": "If a householder or householder's wife who is not a relative invites a monk to take as many robes as he likes, that monk should accept at most an inner and an upper robe from them. If he accepts more than that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 7,
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ]
   },
   {
    "pali": "භික්ඛුං පනෙව උද්දිස්ස අඤ්ඤාතකස්ස ගහපතිස්ස වා ගහපතානියා වා චීවරචෙතාපන්නං උපක්ඛටං හොති; ඉමිනා චීවරචෙතාපන්නෙන චීවරං චෙතාපෙත්වා ඉත්ථන්නාමං භික්ඛුං චීවරෙන අච්ඡාදෙස්සාමීති. තත්‍ර චෙ සො භික්ඛු පුබ්බෙ අප්පවාරිතො උපසඞ්කමිත්වා චීවරෙ විකප්පං ආපජ්ජෙය්‍ය; සාධු වත මං ආයස්මා ඉමිනා චීවරචෙතාපන්නෙන එවරූපං වා එවරූපං වා චීවරං චෙතාපෙත්වා අච්ඡාදෙහීති, කල්‍යාණකම්‍යතං උපාදාය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Bhikkhuṃ paneva uddissa aññātakassa gahapatissa vā gahapatāniyā vā cīvaracetāpannaṃ upakkhaṭaṃ hoti; iminā cīvaracetāpannena cīvaraṃ cetāpetvā itthannāmaṃ bhikkhuṃ cīvarena acchādessāmīti. Tatra ce so bhikkhu pubbe appavārito upasaṅkamitvā cīvare vikappaṃ āpajjeyya; sādhu vata maṃ āyasmā iminā cīvaracetāpannena evarūpaṃ vā evarūpaṃ vā cīvaraṃ cetāpetvā acchādehīti, kalyāṇakamyataṃ upādāya nissaggiyaṃ pācittiyaṃ.",
    "si": "භික්‍ෂුවක් උදෙසා ම නො නෑ ගෘහපතියෙකු හෝ ගෘහනියක විසින් \"මේ සිවුරු මුදලින් සිවුරක් මිල දී ගෙන මෙ නම් ඇති භික්‍ෂුවට සිවුරෙන් පුදන්නෙමි\" යැයි සිවුරු මුදලින් සපයන ලද්දේ වෙයි. ඉදින් ඒ භික්‍ෂුව පෙර නො පවරන ලදුයේ එහි එළඹ \"ආයුෂ්මතුනි, මේ සිවුරු මුදලින් මෙබඳු වූ මෙබඳු වූ සිවුරක් මිල දී ගෙන මට දෙව\" යැයි (හොඳ සිවුරක් ලබනු කැමති ව) සිවුරෙහි අධික විධානයට පැමිණියේ වී නම්, නිසඟි පචිති වේ.",
    "en": "Suppose a householder or householder's wife who is not a relative has set aside robe-money for a particular monk, thinking: \"With this robe-money I will buy a robe and clothe the monk named so-and-so with it.\" If that monk, not previously invited, goes to them and makes a suggestion about the robe — \"It would be good, venerable, if you bought such-and-such a robe with this robe-money and clothed me with it\" — out of desire for a fine one: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 8,
    "notes_pali": [
     {
      "at": "චීවරචෙතාපන්නං",
      "note": "ඇතැම් පොත්වල චීවරචෙතාපනං"
     }
    ]
   },
   {
    "pali": "භික්ඛුං පනෙව උද්දිස්ස උභින්නං අඤ්ඤාතකානං ගහපතීනං වා ගහපතානීනං වා පච්චෙකචීවරචෙතාපන්නානි උපක්ඛටානි හොන්ති; ඉමෙහි මයං පච්චෙකචීවරචෙතාපන්නෙහි පච්චෙකචීවරානි චෙතාපෙත්වා ඉත්ථන්නාමං භික්ඛුං චීවරෙහි අච්ඡාදෙස්සාමාති. තත්‍ර චෙ සො භික්ඛු පුබ්බෙ අප්පවාරිතො උපසඞ්කමිත්වා චීවරෙ විකප්පං ආපජ්ජෙය්‍ය; සාධු වත මං ආයස්මන්තො ඉමෙහි පච්චෙකචීවරචෙතාපන්නෙහි එවරූපං වා එවරූපං වා චීවරං චෙතාපෙත්වා අච්ඡාදෙථ, උභොව සන්තා එකෙනාති, කල්‍යාණකම්‍යතං උපාදාය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Bhikkhuṃ paneva uddissa ubhinnaṃ aññātakānaṃ gahapatīnaṃ vā gahapatānīnaṃ vā paccekacīvaracetāpannāni upakkhaṭāni honti; imehi mayaṃ paccekacīvaracetāpannehi paccekacīvarāni cetāpetvā itthannāmaṃ bhikkhuṃ cīvarehi acchādessāmāti. Tatra ce so bhikkhu pubbe appavārito upasaṅkamitvā cīvare vikappaṃ āpajjeyya; sādhu vata maṃ āyasmanto imehi paccekacīvaracetāpannehi evarūpaṃ vā evarūpaṃ vā cīvaraṃ cetāpetvā acchādetha, ubhova santā ekenāti, kalyāṇakamyataṃ upādāya nissaggiyaṃ pācittiyaṃ.",
    "si": "නො නෑ වූ ගෘහපතියන් දෙදෙනෙකු හෝ ගෘහණියන් දෙදෙනෙකු විසින් \"අපි මේ වෙන් වෙන් වූ සිවුරු මිලයෙන් වෙන වෙන ම සිවුරු මිල දී ගෙන මෙ නම් ඇත්තා වූ භික්‍ෂුව සිවුරින් පුදමු\" යැයි යම් භික්‍ෂුවක් උදෙසා ම වෙන වෙන ම සිවුරු මුදල් රැස්කරන ලද වෙයි. එහි ලා එම භික්‍ෂුව ද පෙර නො පවරන ලදුයේ ඔවුන් වෙත ගොස් \"ආයුෂ්මත්නි, නුඹලා දෙදෙනා ම එක්ව, මේ වෙන් වෙන් වූ සිවුරු මිලයන්ගෙන් මෙබඳු වූ ද මෙබඳු වූ ද සිවුරක් මිල දී ගෙන එක් සිවුරකින් මාව පුදන්නේ නම් මැනව\" යි හොඳ සිවුරක් කැමැති ව සිවුරෙහි අධික විධානයට පැමිණියේ වී නම්, නිසඟි පචිති වේ.",
    "en": "Suppose two householders or householders' wives who are not relatives have each set aside robe-money for a particular monk, thinking: \"With this separate robe-money we will buy separate robes and clothe the monk named so-and-so with them.\" If that monk, not previously invited, goes to them and makes a suggestion about the robe — \"It would be good, venerables, if the two of you, joining together, bought one robe of such-and-such a kind with this separate robe-money and clothed me with it\" — out of desire for a fine one: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 9,
    "notes_pali": [
     {
      "at": "උපක්ඛටානි",
      "note": "ඇතැම් පොත්වල පච්චෙකචීවරචෙතාපන්නා උපක්ඛටා"
     }
    ]
   },
   {
    "pali": "භික්ඛුං පනෙව උද්දිස්ස රාජා වා රාජභොග්ගො වා බ්‍රාහ්මණො වා ගහපතිකො වා දූතෙන චීවරචෙතාපන්නං පහිණෙය්‍ය; ඉමිනා චීවරචෙතාපන්නෙන චීවරං චෙතාපෙත්වා ඉත්ථන්නාමං භික්ඛුං චීවරෙන අච්ඡාදෙහීති. සො චෙ දූතො තං භික්ඛුං උපසඞ්කමිත්වා එවං වදෙය්‍ය; ඉදං ඛො භන්තෙ ආයස්මන්තං උද්දිස්ස චීවරචෙතාපන්නං ආභතං, පතිගණ්හාතු ආයස්මා චීවරචෙතාපන්නන්ති. තෙන භික්ඛුනා සො දූතො එවමස්ස වචනීයො; න ඛො මයං ආවුසො චීවරචෙතාපන්නං පතිගණ්හාම, චීවරඤ්ච ඛො මයං පතිගණ්හාම කාලෙන කප්පියන්ති. සො චෙ දූතො තං භික්ඛුං එවං වදෙය්‍ය; අත්ථි පනායස්මතො කොචි වෙය්‍යාවච්චකරොති. චීවරත්ථිකෙන භික්ඛවෙ භික්ඛුනා වෙය්‍යාවච්චකරො නිද්දිසිතබ්බො, ආරාමිකො වා උපාසකො වා, එසො ඛො ආවුසො භික්ඛූනං වෙය්‍යාවච්චකරොති. සො චෙ දූතො තං වෙය්‍යාවච්චකරං සඤ්ඤාපෙත්වා තං භික්ඛුං උපසඞ්කමිත්වා එවං වදෙය්‍ය; යං ඛො භන්තෙ ආයස්මා වෙය්‍යාවච්චකරං නිද්දිසි, සඤ්ඤත්තො සො මයා. උපසඞ්කමතු ආයස්මා කාලෙන චීවරෙන තං අච්ඡාදෙස්සතීති. චීවරත්ථිකෙන භික්ඛවෙ භික්ඛුනා වෙය්‍යාවච්චකරො උපසඞ්කමිත්වා, ද්වත්තික්ඛත්තුං චොදෙතබ්බො සාරෙතබ්බො; අත්ථො මෙ ආවුසො චීවරෙනාති. ද්වත්තික්ඛත්තුං චොදයමානො සාරයමානො තං චීවරං අභිනිප්ඵාදෙය්‍ය ඉච්චෙතං කුසලං. නො චෙ අභිනිප්ඵාදෙය්‍ය, චතුක්ඛත්තුං පඤ්චක්ඛත්තුං ඡක්ඛත්තුපරමං තුණ්හීභූතෙන උද්දිස්ස ඨාතබ්බං. චතුක්ඛත්තුං පඤ්චක්ඛත්තුං ඡක්ඛත්තුපරමං තුණ්හීභූතො උද්දිස්ස තිට්ඨමානො තං චීවරං අභිනිප්ඵාදෙය්‍ය, ඉච්චෙතං කුසලං. තතො චෙ උත්තරිං වායමමානො තං චීවරං අභිනිප්ඵාදෙය්‍ය නිස්සග්ගියං පාචිත්තියං. නො චෙ අභිනිප්ඵාදෙය්‍ය, යතස්ස චීවරචෙතාපන්නං ආභතං, තත්ථ සාමං වා ගන්තබ්බං දූතො වා පාහෙතබ්බො; යං ඛො තුම්හෙ ආයස්මන්තො භික්ඛුං උද්දිස්ස චීවරචෙතාපන්නං පහිණිත්ථ, න තං තස්ස භික්ඛුනො කිඤ්චි අත්ථං අනුභොති. යුඤ්ජන්තායස්මන්තො සකං, මා වො සකං විනස්සාති. අයං තත්ථ සාමීචි.",
    "translit": "Bhikkhuṃ paneva uddissa rājā vā rājabhoggo vā brāhmaṇo vā gahapatiko vā dūtena cīvaracetāpannaṃ pahiṇeyya; iminā cīvaracetāpannena cīvaraṃ cetāpetvā itthannāmaṃ bhikkhuṃ cīvarena acchādehīti. So ce dūto taṃ bhikkhuṃ upasaṅkamitvā evaṃ vadeyya; idaṃ kho bhante āyasmantaṃ uddissa cīvaracetāpannaṃ ābhataṃ, patigaṇhātu āyasmā cīvaracetāpannanti. Tena bhikkhunā so dūto evamassa vacanīyo; na kho mayaṃ āvuso cīvaracetāpannaṃ patigaṇhāma, cīvarañca kho mayaṃ patigaṇhāma kālena kappiyanti. So ce dūto taṃ bhikkhuṃ evaṃ vadeyya; atthi panāyasmato koci veyyāvaccakaroti. Cīvaratthikena bhikkhave bhikkhunā veyyāvaccakaro niddisitabbo, ārāmiko vā upāsako vā, eso kho āvuso bhikkhūnaṃ veyyāvaccakaroti. So ce dūto taṃ veyyāvaccakaraṃ saññāpetvā taṃ bhikkhuṃ upasaṅkamitvā evaṃ vadeyya; yaṃ kho bhante āyasmā veyyāvaccakaraṃ niddisi, saññatto so mayā. Upasaṅkamatu āyasmā kālena cīvarena taṃ acchādessatīti. Cīvaratthikena bhikkhave bhikkhunā veyyāvaccakaro upasaṅkamitvā, dvattikkhattuṃ codetabbo sāretabbo; attho me āvuso cīvarenāti. Dvattikkhattuṃ codayamāno sārayamāno taṃ cīvaraṃ abhinipphādeyya iccetaṃ kusalaṃ. No ce abhinipphādeyya, catukkhattuṃ pañcakkhattuṃ chakkhattuparamaṃ tuṇhībhūtena uddissa ṭhātabbaṃ. Catukkhattuṃ pañcakkhattuṃ chakkhattuparamaṃ tuṇhībhūto uddissa tiṭṭhamāno taṃ cīvaraṃ abhinipphādeyya, iccetaṃ kusalaṃ. Tato ce uttariṃ vāyamamāno taṃ cīvaraṃ abhinipphādeyya nissaggiyaṃ pācittiyaṃ. No ce abhinipphādeyya, yatassa cīvaracetāpannaṃ ābhataṃ, tattha sāmaṃ vā gantabbaṃ dūto vā pāhetabbo; yaṃ kho tumhe āyasmanto bhikkhuṃ uddissa cīvaracetāpannaṃ pahiṇittha, na taṃ tassa bhikkhuno kiñci atthaṃ anubhoti. Yuñjantāyasmanto sakaṃ, mā vo sakaṃ vinassāti. Ayaṃ tattha sāmīci.",
    "si": "භික්‍ෂුවක් උදෙසාම රජු හෝ රජ ඇමතියෙක් හෝ බමුණෙක් හෝ ගෘහපතියෙක් හෝ \"මෙම සිවුරු මුදලින් සිවුරක් මිල දී ගෙන මෙ නම් ඇති භික්‍ෂුව සිවුරෙන් පුදව\"යි දූතයකු ලවා සිවුරු මුදලක් යවන්නේ නම්, ඉදින් ඒ දූතයා ඒ භික්‍ෂුව වෙත එළඹ \"ස්වාමීනි, මේ සිවුරු මුදල ආයුෂ්මතුන් උදෙසා ගෙන එන ලද ය; ආයුෂ්මත්හු සිවුරු මුදල පිළිගනිත්වා\" යි මෙසේ කියන්නේ නම්, ඒ භික්‍ෂුව විසින් එම දූත තෙම \"ඇවැත්නි, අපි සිවුරු මුදල නො පිළිගනිමු; එහෙත් අපි සුදුසු කල්හි කැප වූ සිවුරක් පිළිගනිමු\" යැයි කිය යුතු ය. ඉදින් ඒ දූත තෙම එම භික්‍ෂුවට \"ආයුෂ්මතුන්ගේ කිසියම් කැපකරුවෙක් ඇත්දැ\"යි මෙසේ කියැයි නම්, මහණෙනි, සිවුරු කැමති භික්‍ෂුව විසින් ආරාමිකයෙක් හෝ වේවා උපාසකයෙක් හෝ වේවා \"ඇවැත්නි, මේ තෙම භික්‍ෂූන්ගේ කැපකරුවා\" යැයි කැපකරු දැක්විය යුත්තේ ය. ඉදින් ඒ දූත තෙම කැපකරුවා ගිවිස්සවා ඒ භික්‍ෂුව වෙත එළඹ \"ස්වාමීනි, ආයුෂ්මතුන් වහන්සේ යම් කැපකරුවෙක් දැක්වී ද මා විසින් හෙතෙම ගිවිසගන්නා ලදී; ආයුෂ්මතුන් වහන්සේ සුදුසු කාලයෙහි එළඹෙත්වා! නුඹ වහන්සේ සිවුරෙන් පුදන්නේය\" යැයි මෙසේ කියන්නෙම් නම්, මහණෙනි, සිවුරු කැමති භික්‍ෂුව විසින් කැපකරුවා වෙත එළඹ \"ඇවැත්නි, මට සිවුරෙන් ප්‍රයෝජන ඇත\"යි දෙතුන්වරක් ඉල්විය යුතු ය. සිහි කරවිය යුතු ය. දෙතුන්වරක් ඉල්ලනු ලබන්නේ සිහි කරවනු ලබන්නේ ඒ සිවුර සපයා දෙයි නම් මෙසේ මෙය මැනවි. ඉදින් නො ම නිපදවා නම් සතර වරක්, පස් වරක්, සය වරක් උපරිම කොට එහි ගොස් නිහඬව උදෙසා සිටිය යුතු ය. සතර වරක්, පස් වරක්, සය වරක් උපරිම කොට නිහඬව උදෙසා සිටිනුයේ ඒ සිවුර සපයා දේ නම් මෙසේ මෙය මැනවි. ඉදින් ඉන් මත්තෙහි වෑයම් කරනුයේ ඒ සිවුර සපයා දේ නම්, නිසඟි පචිති වේ. ඉදින් සපයා නො දේ නම්, යමෙකු කෙරෙන් ඒ භික්‍ෂුව වෙත සිවුරු මුදල ගෙන එන ලද ද, එහි තෙමේ ම හෝ යා යුතු ය \"ඇවැත්නි, නුඹ භික්‍ෂුවක් උදෙසා යම් සිවුරු මිලක් යැවී ද එය ඒ භික්‍ෂුවට කිසි දු අර්ථයක් සිදු නො කරයි; ආයුෂ්මත්හු ස්වකීය ධනය ලබත්වා; නුඹ සතු ධනය නො වැනසේවා\"යි දූතයෙකු හෝ යැවිය යුතු ය. මේ එහි අනුධර්මතාවය යි.",
    "en": "Suppose a king, a royal official, a brahmin or a householder sends robe-money for a particular monk by a messenger, saying: \"Buy a robe with this robe-money and clothe the monk named so-and-so with it.\" If the messenger approaches that monk and says: \"Venerable sir, this robe-money has been brought for you; please accept it,\" that monk should say to the messenger: \"Friend, we do not accept robe-money; we accept a robe that is allowable, at the proper time.\" If the messenger asks: \"Does the venerable have an attendant?\", a monk in need of a robe should point out an attendant — a monastery worker or a lay follower — saying: \"Friend, he is the attendant of the monks.\" If the messenger, having instructed that attendant, approaches the monk and says: \"Venerable sir, I have instructed the attendant you pointed out; please approach him at the proper time and he will clothe you with a robe,\" then the monk in need of a robe, approaching the attendant, should prompt and remind him two or three times: \"Friend, I am in need of a robe.\" If, being prompted and reminded two or three times, he provides the robe, that is good. If he does not, the monk should stand silently before him four, five, up to six times. If, standing silently four, five or six times, he gets the robe provided, that is good. If he strives further than that and gets the robe provided: Nissaggiya Pācittiya. If he does not get it provided, he should either go himself to where the robe-money was brought from, or send a messenger, saying: \"The robe-money that you venerables sent for a certain monk has been of no use to that monk. Look to what is yours, venerables; do not let what is yours be lost.\" This is the proper procedure here.",
    "role": "rule",
    "n": 10,
    "vagga": {
     "pali": "චීවරවග්ගො පඨමො.",
     "translit": "Cīvaravaggo paṭhamo.",
     "si": "පළමුවැනි චීවර වර්ගය යි.",
     "en": "The first chapter, the Robe chapter, is finished.",
     "num": 1,
     "name_si": "චීවර වර්ගය",
     "name_en": "Robe chapter",
     "from": 1,
     "to": 10,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "පතිගණ්හාම",
      "note": "ඇතැම් පොත්වල පටිග්ගණ්හාම"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු කොසියමිස්සකං සන්ථතං කාරාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu kosiyamissakaṃ santhataṃ kārāpeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි කෝසෙය්‍ය (පටපනු) නූල් මිශ්‍රකිරීමෙන් ඇතිරියක් කරවන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should have a rug made mixed with silk: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "යො පන භික්ඛු සුද්ධකාළකානං එළකලොමානං සන්ථතං කාරාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu suddhakāḷakānaṃ eḷakalomānaṃ santhataṃ kārāpeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි හුදු කළු එළුලොම් වලින් ඇතිරියක් කරවන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should have a rug made entirely of black sheep-wool: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 12,
    "notes_pali": [
     {
      "at": "සුද්ධකාළකානං",
      "note": "ඇතැම් පොත්වල සුද්ධකාලකානං"
     }
    ]
   },
   {
    "pali": "නවං පන භික්ඛුනා සන්ථතං කාරයමානෙන, ද්වෙ භාගා සුද්ධකාළකානං එළකලොමානං ආදාතබ්බා, තතියං ඔදාතානං චතුත්ථං ගොචරියානං. අනාදා චෙ භික්ඛු ද්වෙ භාගෙ සුද්ධකාළකානං එළකලොමානං තතියං ඔදාතානං චතුත්ථං ගොචරියානං නවං සන්ථතං කාරාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā santhataṃ kārayamānena, dve bhāgā suddhakāḷakānaṃ eḷakalomānaṃ ādātabbā, tatiyaṃ odātānaṃ catutthaṃ gocariyānaṃ. Anādā ce bhikkhu dve bhāge suddhakāḷakānaṃ eḷakalomānaṃ tatiyaṃ odātānaṃ catutthaṃ gocariyānaṃ navaṃ santhataṃ kārāpeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "අලුත් ඇතිරියක් කරවන භික්‍ෂුව විසින් (ඊට අවශ්‍ය ප්‍රමාණයෙන්) දෙකොටසක් (1/2) හුදු කළු එළුලොම් ගත යුතු ය. තෙවැනි කොටස (1/4) සුදු එළුලොම් ද සිවුවන කොටස (1/4) කිඹුල්වන් පැහැ ඇති (පඬුවන්) එළුලොම් ද ගත යුතු ය. ඉදින් භික්‍ෂුවක් දෙකොටසක් කළු එළුලොම් ද තෙවැනි කොටස සුදු එළුලොම් ද සිවුවන කොටස කිඹුල්වන් එළුලොම් ද නො ගෙන අළුත් ඇතිරියක් කරවා නම්, නිසඟි පචිති වේ.",
    "en": "When a monk is having a new rug made, he should take two parts of pure black sheep's wool, a third part of white and a fourth part of reddish-brown. If a monk has a new rug made without taking two parts of pure black sheep's wool, a third of white and a fourth of reddish-brown: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "නවං පන භික්ඛුනා සන්ථතං කාරාපෙත්වා, ඡබ්බස්සානි ධාරෙතබ්බං. ඔරෙන චෙ ඡන්නං වස්සානං තං සන්ථතං විස්සජ්ජෙත්වා වා, අවිස්සජ්ජෙත්වා වා අඤ්ඤං නවං සන්ථතං කාරාපෙය්‍ය, අඤ්ඤත්‍ර භික්ඛුසම්මුතියා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā santhataṃ kārāpetvā, chabbassāni dhāretabbaṃ. Orena ce channaṃ vassānaṃ taṃ santhataṃ vissajjetvā vā, avissajjetvā vā aññaṃ navaṃ santhataṃ kārāpeyya, aññatra bhikkhusammutiyā nissaggiyaṃ pācittiyaṃ.",
    "si": "භික්‍ෂුවක් විසින් අලුත් ඇතිරියක් කරවා සවසක් (වසර 6ක්) දැරිය යුතු ය. ඉදින් සාවුරුද්දකින් මෙපිට ඒ ඇතිරිය විස්සජ්ජනය කොට (කිසිවකුට දී) හෝ විස්සජ්ජනය නො කොට (කිසිවකුට නො දී) යම් භික්‍ෂුවක් විසින් භික්‍ෂු සම්මුතියෙන් තොර ව අනෙක් අලුත් ඇතිරියක් කරවා නම්, නිසඟි පචිති වේ.",
    "en": "When a monk has had a new rug made, he should keep it for six years. If, within six years, whether he has disposed of that rug or not, he has another new rug made, except with the agreement of the monks: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 14
   },
   {
    "pali": "නිසීදනසන්ථතං පන භික්ඛුනා කාරයමානෙන, පුරාණසන්ථතස්ස සාමන්තා සුගතවිදත්ථි ආදාතබ්බා දුබ්බණ්ණකරණාය. අනාදා චෙ භික්ඛු පුරාණසන්ථතස්ස සාමන්තා සුගතවිදත්ථිං නවං නිසීදනසන්ථතං කාරාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Nisīdanasanthataṃ pana bhikkhunā kārayamānena, purāṇasanthatassa sāmantā sugatavidatthi ādātabbā dubbaṇṇakaraṇāya. Anādā ce bhikkhu purāṇasanthatassa sāmantā sugatavidatthiṃ navaṃ nisīdanasanthataṃ kārāpeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "හිඳීම පිණිස ගන්නා ඇතිරියක් කරවන භික්‍ෂුව විසින් එය දුර්වර්ණ කරනු පිණිස පැරණි ඇතිරියේ හාත්පසින් සුගත වියතක් පමණ කොටසක් ගත යුතු ය. ඉදින් භික්‍ෂුවක් පැරණි ඇතිරියේ හාත්පසින් සුගත වියතක් නො ගෙන අලුත් හිඳින ඇතිරියක් කරවා නම්, නිසඟි පචිති වේ.",
    "en": "When a monk is having a sitting rug made, he should take a piece from the border of the old rug, one Sugata-span in size, to disfigure the new one. If a monk has a new sitting rug made without taking a Sugata-span from the border of the old rug: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "භික්ඛුනො පනෙව අද්ධානමග්ගපටිපන්නස්ස එළකලොමානි උප්පජ්ජෙය්‍යුං, ආකඞ්ඛමානෙන භික්ඛුනා පටිග්ගහෙතබ්බානි. පටිග්ගහෙත්වා තියොජනපරමං සහත්ථා හරිතබ්බානි අසන්තෙ හාරකෙ. තතො චෙ උත්තරිං හරෙය්‍ය, අසන්තෙපි හාරකෙ නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Bhikkhuno paneva addhānamaggapaṭipannassa eḷakalomāni uppajjeyyuṃ, ākaṅkhamānena bhikkhunā paṭiggahetabbāni. Paṭiggahetvā tiyojanaparamaṃ sahatthā haritabbāni asante hārake. Tato ce uttariṃ hareyya, asantepi hārake nissaggiyaṃ pācittiyaṃ.",
    "si": "දිර්ඝ මාර්ගයකට පිළිපන් භික්‍ෂුවකට එළුලොම් ලැබේ නම් කැමති භික්‍ෂුවක් විසින් පිළිගත යුතු ය. පිළිගෙන ගෙන යෑමට කැපකරුවකු ද නැති නම් උපරිම තුන් යොදුනක් දක්වා සියතින් ගෙන යා යුතු ය. ඉදින් ගෙන යන්නකු නැති කල්හිදු තුන් යොදුන් ඉක්මවාගෙන යන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "If sheep's wool comes to a monk who is travelling on a long road, he may accept it if he wishes. Having accepted it, he may carry it by himself for at most three yojanas if there is no one to carry it. If he carries it further than that, even if there is no one to carry it: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 16,
    "notes_pali": [
     {
      "at": "හරිතබ්බානි",
      "note": "ඇතැම් පොත්වල හාරෙතබ්බානි"
     },
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා එළකලොමානි ධොවාපෙය්‍ය වා රජාපෙය්‍ය වා විජටාපෙය්‍ය වා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā eḷakalomāni dhovāpeyya vā rajāpeyya vā vijaṭāpeyya vā nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නො නෑ භික්‍ෂුණියක් ලවා එළුලොම් සෝදවා නම් හෝ පාට ගන්වන්නේ නම් හෝ අවුල් හරවන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should have sheep-wool washed, dyed, or combed out by a bhikkhunī who is not a relative: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "යො පන භික්ඛු ජාතරූපරජතං උග්ගණ්හෙය්‍ය වා උග්ගණ්හාපෙය්‍ය වා උපනික්ඛිත්තං වා සාදියෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jātarūparajataṃ uggaṇheyya vā uggaṇhāpeyya vā upanikkhittaṃ vā sādiyeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි රන්, රිදී, මසු කහවණු තෙමේ ගනී නම් හෝ අනෙකෙකු ලවා ගන්වා නම් හෝ ගෙනැවිත් ලඟ තබන ලද්දක් සිතින් ඉවසා නම්, හෝ නිසඟි පචිති වේ.",
    "en": "Whatever monk should accept gold and silver, or have it accepted, or consent to its being kept for him: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 18
   },
   {
    "pali": "යො පන භික්ඛු නානප්පකාරකං රූපියසංවොහාරං සමාපජ්ජෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu nānappakārakaṃ rūpiyasaṃvohāraṃ samāpajjeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නන් වැදෑරුම් මුදල් ගනුදෙනු කිරීමට පැමිණේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should engage in various types of money exchange: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 19
   },
   {
    "pali": "යො පන භික්ඛු නානප්පකාරකං කයවික්කයං සමාපජ්ජෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu nānappakārakaṃ kayavikkayaṃ samāpajjeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නන් වැදෑරුම් භාණ්ඩ හුවමාරු ගනුදෙනු කිරීමට පැමිණේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should engage in various types of buying and selling: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 20,
    "vagga": {
     "pali": "කොසියවග්ගො දුතියො.",
     "translit": "Kosiyavaggo dutiyo.",
     "si": "දෙවැනි කෝසිය වර්ගය යි.",
     "en": "The second chapter, the Silk chapter, is finished.",
     "num": 2,
     "name_si": "කෝසිය වර්ගය",
     "name_en": "Silk chapter",
     "from": 11,
     "to": 20,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "දසාහපරමං අතිරෙකපත්තො ධාරෙතබ්බො. තං අතික්කාමයතො නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Dasāhaparamaṃ atirekapatto dhāretabbo. Taṃ atikkāmayato nissaggiyaṃ pācittiyaṃ.",
    "si": "උපරිම දසදිනක් අතිරේක පාත්‍රයක් දැරිය යුතු වේ. එය ඉක්මවන්නහුට, නිසඟි පචිති වේ.",
    "en": "An extra bowl may be kept for at most ten days. To exceed that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "යො පන භික්ඛු ඌනපඤ්චබන්ධනෙන පත්තෙන අඤ්ඤං නවං පත්තං චෙතාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං. තෙන භික්ඛුනා සො පත්තො භික්ඛුපරිසාය නිස්සජ්ජිතබ්බො. යො ච තස්සා භික්ඛුපරිසාය පත්තපරියන්තො, සො තස්ස භික්ඛුනො පදාතබ්බො; අයං තෙ භික්ඛු පත්තො යාව භෙදනාය ධාරෙතබ්බොති. අයං තත්ථ සාමීචි.",
    "translit": "Yo pana bhikkhu ūnapañcabandhanena pattena aññaṃ navaṃ pattaṃ cetāpeyya nissaggiyaṃ pācittiyaṃ. Tena bhikkhunā so patto bhikkhuparisāya nissajjitabbo. Yo ca tassā bhikkhuparisāya pattapariyanto, so tassa bhikkhuno padātabbo; ayaṃ te bhikkhu patto yāva bhedanāya dhāretabboti. Ayaṃ tattha sāmīci.",
    "si": "යම් භික්‍ෂුවක් වනාහි බැඳුම් පසකට අඩුවෙන් ඇති පාත්‍රයක් සහිත ව අනික් අලුත් පාත්‍රයක් ඉල්වා ගනී නම්, නිසඟි පචිති වේ. ඒ භික්‍ෂුව විසින් ඒ ඉල්ලා ගත් පාත්‍රය භික්‍ෂූන් පිරිසෙහි නිස්සජ්ජනය කළ යුතු වේ. ඒ භික්‍ෂු පිරිස අන්තයෙහි යම් පාත්‍රයක් වේ ද එය \"මහණ මේ නුඹගේ පාත්‍රය බිඳෙන තෙක් දැරිය යුතු\" යැයි කියා එම භික්‍ෂුවට දිය යුතු වේ. මේ එහි අනුධර්මතාවය යි.",
    "en": "Whatever monk, having a bowl with fewer than five mendings, should have another new bowl made: Nissaggiya Pācittiya. That bowl is to be forfeited by that monk to the assembly of monks, and whichever bowl is the last in that assembly is to be given to that monk with the words: \"Monk, this is your bowl; keep it until it breaks.\" This is the proper procedure here.",
    "role": "rule",
    "n": 22,
    "notes_pali": [
     {
      "at": "නිස්සජ්ජිතබ්බො",
      "note": "ඇතැම් පොත්වල නිස්සජිතබ්බො"
     }
    ]
   },
   {
    "pali": "යානි ඛො පන තානි ගිලානානං භික්ඛූනං පටිසායනීයානි භෙසජ්ජානි, සෙය්‍යථිදං; සප්පි නවනීතං තෙලං මධු ඵාණිතං, තානි පටිග්ගහෙත්වා සත්තාහපරමං සන්නිධිකාරකං පරිභුඤ්ජිතබ්බානි. තං අතික්කාමයතො නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yāni kho pana tāni gilānānaṃ bhikkhūnaṃ paṭisāyanīyāni bhesajjāni, seyyathidaṃ; sappi navanītaṃ telaṃ madhu phāṇitaṃ, tāni paṭiggahetvā sattāhaparamaṃ sannidhikārakaṃ paribhuñjitabbāni. Taṃ atikkāmayato nissaggiyaṃ pācittiyaṃ.",
    "si": "ගිලන් භික්‍ෂූන් විසින් වැළඳිය යුතු වූ යම් ඒ බෙහෙත් වෙත් ද, එනම් ගිතෙල් ය, වෙඬරු ය, තෙල් ය, මී පැණි ය, උක් සකුරු ය. ඒවා පිළිගෙන සත් දිනක් උපරිම කොට ඇති කාලයක් සන්නිධි කොට වැළඳිය යුත්තාහ. එය ඉක්මවන්නහුට, නිසඟි පචිති වේ.",
    "en": "The medicines that sick monks may take — that is, ghee, fresh butter, oil, honey and molasses — having been accepted, may be stored and used for at most seven days. For one who goes beyond that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "මාසො සෙසො ගිම්හානන්ති භික්ඛුනා වස්සිකසාටිකචීවරං පරියෙසිතබ්බං. අද්ධමාසො සෙසො ගිම්හානන්ති කත්වා නිවාසෙතබ්බං. ඔරෙන චෙ මාසො සෙසො ගිම්හානන්ති වස්සිකසාටිකචීවරං පරියෙසෙය්‍ය, ඔරෙනද්ධමාසො සෙසො ගිම්හානන්ති කත්වා නිවාසෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Māso seso gimhānanti bhikkhunā vassikasāṭikacīvaraṃ pariyesitabbaṃ. Addhamāso seso gimhānanti katvā nivāsetabbaṃ. Orena ce māso seso gimhānanti vassikasāṭikacīvaraṃ pariyeseyya, orenaddhamāso seso gimhānanti katvā nivāseyya nissaggiyaṃ pācittiyaṃ.",
    "si": "භික්‍ෂුවක් විසින් ගිම්හාන ඍතුවේ අවසන් මාසය යැයි වැසි සළුව සෙවිය යුතු ය. ගිම්හාන ඍතුවේ අඩමසක් ශේෂව ඇත්තේ යැයි හැඳිය යුතු ය. ඉදින් ගිම්හාන ඍතුවේ මාසයකට වැඩිපුර ශේෂව ඇත්තේ යැයි වැසි සළුවක් සොයන්නේ නම්, ගිම්හාන ඍතුවේ අඩමසකට වැඩිපුර ශේෂව ඇතිවිට හඳියි නම්, නිසඟි පචිති වේ.",
    "en": "A monk should seek a rains-bathing cloth when one month of the hot season remains, and should wear it when half a month of the hot season remains. If, when more than a month of the hot season remains, he seeks a rains-bathing cloth, or if, when more than half a month remains, he wears it: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 24
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස සාමං චීවරං දත්වා, කුපිතො අනත්තමනො අච්ඡින්දෙය්‍ය වා අච්ඡින්දාපෙය්‍ය වා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa sāmaṃ cīvaraṃ datvā, kupito anattamano acchindeyya vā acchindāpeyya vā nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුවකට තෙමේ ම සිවුරක් දී කිපියේ, නො සතුටු සිත් ඇත්තේ පැහැර ගනී නම් හෝ අනිකකු ලවා පැහැර ගන්වන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk, having himself given a robe to a monk, should in anger and displeasure take it back or have it taken back: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 25,
    "notes_pali": [
     {
      "at": "කුපිතො",
      "note": "ඇතැම් පොත්වල පච්ඡා කුපිතො"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු සාමං සුත්තං විඤ්ඤාපෙත්වා, තන්තවායෙහි චීවරං වායාපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sāmaṃ suttaṃ viññāpetvā, tantavāyehi cīvaraṃ vāyāpeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි තෙමේ ම නූල් ඉල්වාගෙන රෙදි වියන්නන් ලවා සිවුරක් වියවන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should ask for thread himself and have robe-cloth woven by weavers: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "භික්ඛුං පනෙව උද්දිස්ස අඤ්ඤාතකො ගහපති වා ගහපතානී වා තන්තවායෙහි චීවරං වායාපෙය්‍ය, තත්‍ර චෙ සො භික්ඛු පුබ්බෙ අප්පවාරිතො තන්තවායෙ උපසඞ්කමිත්වා චීවරෙ විකප්පං ආපජ්ජෙය්‍ය; ඉදං ඛො ආවුසො චීවරං මං උද්දිස්ස විය්‍යති, ආයතඤ්ච කරොථ විත්ථතඤ්ච, අප්පිතඤ්ච, සුවීතඤ්ච, සුප්පවායිතඤ්ච, සුවිලෙඛිතඤ්ච, සුවිතච්ඡිතඤ්ච කරොථ, අප්පෙවනාම මයම්පි ආයස්මන්තානං කිඤ්චිමත්තං අනුපදජ්ජෙය්‍යාමාති. එවඤ්ච සො භික්ඛු වත්වා කිඤ්චිමත්තං අනුපදජ්ජෙය්‍ය, අන්තමසො පිණ්ඩපාතමත්තම්පි නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Bhikkhuṃ paneva uddissa aññātako gahapati vā gahapatānī vā tantavāyehi cīvaraṃ vāyāpeyya, tatra ce so bhikkhu pubbe appavārito tantavāye upasaṅkamitvā cīvare vikappaṃ āpajjeyya; idaṃ kho āvuso cīvaraṃ maṃ uddissa viyyati, āyatañca karotha vitthatañca, appitañca, suvītañca, suppavāyitañca, suvilekhitañca, suvitacchitañca karotha, appevanāma mayampi āyasmantānaṃ kiñcimattaṃ anupadajjeyyāmāti. Evañca so bhikkhu vatvā kiñcimattaṃ anupadajjeyya, antamaso piṇḍapātamattampi nissaggiyaṃ pācittiyaṃ.",
    "si": "භික්‍ෂුවක් උදෙසා ම නො නෑ ගෘහපතියකු හෝ ගෘහපතිනියක් හෝ රෙදි වියන්නන් ලවා සිවුරක් වියවන්නේ නම්, ඉදින් එහි ලා ඒ භික්‍ෂු තෙම පෙර නො පවරන ලද්දේ, රෙදි වියන්නන් වෙත එළඹ \"ඇවැත්නි, මේ සිවුර මා උදෙසා වියනු ලැබේ; දිගු ද කරවු; පළල් වූවක් ද, ඝනව නූල් එලන ලද්දක් ද, මනා කොට වියන ලද්දක් ද, සම සේ නූල් එලන ලද්දක් ද, මනා කොට හිරි අඳින ලද්දක් ද, මනා කොට මදින ලද්දක් ද කරවු; ඉදින් අපිදු ආයුෂ්මතුන්ලාට ස්වල්පමාත්‍ර දෙයකුදු දෙන්නේ නම් යෙහෙක\" යැයි සිවුරෙහි අධික විධානයට පැමිණේ නම්, ඒ භික්‍ෂුව මෙසෙත් කියා යටත් පිරිසෙයින් පිණ්ඩපාත මාත්‍රයකුදු වු ස්වල්ප මාත්‍ර දෙයකුදු දෙන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Suppose a householder or householder's wife who is not a relative has a robe woven by weavers for a particular monk. If that monk, not previously invited, goes to the weavers and makes suggestions about the robe — \"Friends, this robe is being woven for me; make it long, wide, closely set, well woven, well spread, well scraped and well combed; perhaps I might give you venerables something in return\" — and, having said that, gives them something, even a mere morsel of almsfood: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 27,
    "notes_pali": [
     {
      "at": "විය්‍යති",
      "note": "ඇතැම් පොත්වල වීයති"
     }
    ]
   },
   {
    "pali": "දසාහානාගතං කත්තිකතෙමාසිකපුණ්ණමං භික්ඛුනො පනෙව අච්චෙකචීවරං උප්පජ්ජෙය්‍ය, අච්චෙකං මඤ්ඤමානෙන භික්ඛුනා පටිග්ගහෙතබ්බං, පටිග්ගහෙත්වා යාව චීවරකාලසමයං නික්ඛිපිතබ්බං, තතො චෙ උත්තරිං නික්ඛිපෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Dasāhānāgataṃ kattikatemāsikapuṇṇamaṃ bhikkhuno paneva accekacīvaraṃ uppajjeyya, accekaṃ maññamānena bhikkhunā paṭiggahetabbaṃ, paṭiggahetvā yāva cīvarakālasamayaṃ nikkhipitabbaṃ, tato ce uttariṃ nikkhipeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "වස් පවාරණය කරනු ලබන වප් මස මැදි පොහොයට දස දිනක් තබා භික්‍ෂුවකට ඉක්මන් කටයුත්තක් සඳහා පුදන සිවුරක් උපන්නේ නම්, ඉක්මන් බව දත් භික්‍ෂුව විසින් පිළිගත යුතු ය. පිළිගෙන චීවරකාලසමය තෙක් තැබිය යුතු ය. ඉදින් ඉන්මත්තෙහි තබන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "If an urgent robe offering comes to a monk when ten days remain before the Kattika full moon (the end of the three months of the Rains), he may accept it, regarding it as urgent, and keep it until the robe season. If he keeps it beyond that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 28
   },
   {
    "pali": "උපවස්සං ඛො පන කත්තිකපුණ්ණමං, යානි ඛො පන තානි ආරඤ්ඤකානි සෙනාසනානි සාසඞ්කසම්මතානි, සප්පටිභයානි, තථාරූපෙසු භික්ඛු සෙනාසනෙසු විහරන්තො ආකඞ්ඛමානො තිණ්ණං චීවරානං අඤ්ඤතරං චීවරං අන්තරඝරෙ නික්ඛිපෙය්‍ය, සියා ච තස්ස භික්ඛුනො කොචිදෙව පච්චයො තෙන චීවරෙන විප්පවාසාය, ඡාරත්තපරමං තෙන භික්ඛුනා තෙන චීවරෙන විප්පවසිතබ්බං. තතො චෙ උත්තරිං විප්පවසෙය්‍ය, අඤ්ඤත්‍ර භික්ඛුසම්මුතියා නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Upavassaṃ kho pana kattikapuṇṇamaṃ, yāni kho pana tāni āraññakāni senāsanāni sāsaṅkasammatāni, sappaṭibhayāni, tathārūpesu bhikkhu senāsanesu viharanto ākaṅkhamāno tiṇṇaṃ cīvarānaṃ aññataraṃ cīvaraṃ antaraghare nikkhipeyya, siyā ca tassa bhikkhuno kocideva paccayo tena cīvarena vippavāsāya, chārattaparamaṃ tena bhikkhunā tena cīvarena vippavasitabbaṃ. Tato ce uttariṃ vippavaseyya, aññatra bhikkhusammutiyā nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් ඒ සැක සහිත යැයි සම්මත, බිය සහිත වූ අරණ්‍ය සේනාසන වෙත් ද, එබඳු සෙනසුන් හි වසන භික්‍ෂුවක් කැමැත්තේ නම්, වස් වැස ඉල් මස මැදි පොහොය දක්වා කාලය තුල තුන් සිවුරෙන් එක්තරා සිවුරක් ඇතුළුගම තබන්නේ ය. ඒ භික්‍ෂුවට ඒ සිවුරෙන් වෙන් ව විසීමට කිසියම් හේතුවක් ඇත්තේ නම්, ඒ භික්‍ෂුව විසින් උපරිම සය රැයක් ඒ සිවුරෙන් වෙන් ව විසිය යුතු ය. ඉදින් ඉන් මත්තේහි වෙන් ව වසන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "After the Kattika full moon, when the Rains residence is over, a monk living in such forest dwellings as are considered dubious and dangerous may, if he wishes, leave one of his three robes in a house; and if he has some reason to be separated from that robe, he may be separated from it for at most six nights. If he is separated from it for longer, except with the agreement of the monks: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "යො පන භික්ඛු ජානං සඞ්ඝිකං ලාභං පරිණතං අත්තනො පරිණාමෙය්‍ය නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ saṅghikaṃ lābhaṃ pariṇataṃ attano pariṇāmeyya nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් දැන දැන සඟසතු පිරිනැමු ලාභය තමාට පිරිනම වන්නේ නම්, නිසඟි පචිති වේ.",
    "en": "Whatever monk should knowingly appropriate to himself an offering intended for the Saṅgha: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 30,
    "vagga": {
     "pali": "පත්තවග්ගො තතියො.",
     "translit": "Pattavaggo tatiyo.",
     "si": "තෙවැනි පාත්‍ර වර්ගය යි.",
     "en": "The third chapter, the Bowl chapter, is finished.",
     "num": 3,
     "name_si": "පාත්‍ර වර්ගය",
     "name_en": "Bowl chapter",
     "from": 21,
     "to": 30,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto tiṃsanissaggiyā pācittiyā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! නිසඟි පචිති ඇවැත් තිහ උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the thirty Nissaggiya Pācittiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "නිස්සග්ගියා පාචිත්තියා ධම්මා නිට්ඨිතා.",
    "translit": "Nissaggiyā pācittiyā dhammā niṭṭhitā.",
    "si": "නිසඟි පචිති ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Nissaggiya Pācittiya rules are finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද තිහ",
  "count_en": "Thirty rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "pacittiya",
  "si": "පාචිත්තියා",
  "en": "Pācittiyā",
  "kind": "rules",
  "count": 92,
  "num": 5,
  "title_si": "(5) පාචිත්තියා ධම්මා",
  "title_en": "(5) Pācittiyā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො ද්වෙ නවුති පාචිත්තියා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto dve navuti pācittiyā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ දෙඅනූ පචිති ඇවැත්හු උදෙසීමට පැමිණෙත්.",
    "en": "Here these ninety-two Pācittiya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "සම්පජානමුසාවාදෙ පාචිත්තියං.",
    "translit": "Sampajānamusāvāde pācittiyaṃ.",
    "si": "දැන දැන බොරු කීමෙහි පචිති වේ.",
    "en": "Intentional lying: Pācittiya.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "ඔමසවාදෙ පාචිත්තියං.",
    "translit": "Omasavāde pācittiyaṃ.",
    "si": "ඔමසවාදයෙහි පචිති වේ.",
    "en": "Abusive speech toward a monk: Pācittiya.",
    "role": "rule",
    "n": 2,
    "notes_si": [
     {
      "at": "ඔමසවාදයෙහි",
      "note": "ජාති, නාම, ගෝත්‍ර ආදී දස ආකාරයන්ගෙන් ගටා ආක්‍රෝෂ කිරීමෙහි"
     }
    ]
   },
   {
    "pali": "භික්ඛුපෙසුඤ්ඤෙ පාචිත්තියං.",
    "translit": "Bhikkhupesuññe pācittiyaṃ.",
    "si": "භික්‍ෂූන්ගේ කේලාම් කීමෙහි පචිති වේ.",
    "en": "Sowing discord among monks: Pācittiya.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යො පන භික්ඛු අනුපසම්පන්නං පදසො ධම්මං වාචෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannaṃ padaso dhammaṃ vāceyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අනුපසම්පන්නයෙකුට පද වශයෙන් ධර්මය කියවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should have an unordained person recite the Dhamma word by word: Pācittiya.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යො පන භික්ඛු අනුපසම්පන්නෙන උත්තරිං දිරත්තතිරත්තං සහසෙය්‍යං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannena uttariṃ dirattatirattaṃ sahaseyyaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අනුපසම්පන්නයෙකු සමග දෙතුන් රැයක් ඉක්මවා නිදන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should lie down in the same lodging with an unordained person for more than two or three nights: Pācittiya.",
    "role": "rule",
    "n": 5,
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරිදිරත්තතිරත්තං"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමෙන සහසෙය්‍යං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena sahaseyyaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි ස්ත්‍රියක සමග නිදන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should lie down in the same lodging with a woman: Pācittiya.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමස්ස උත්තරිං ඡප්පඤ්චවාචාහි ධම්මං දෙසෙය්‍ය, අඤ්ඤත්‍ර විඤ්ඤුනා පුරිසවිග්ගහෙන පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmassa uttariṃ chappañcavācāhi dhammaṃ deseyya, aññatra viññunā purisaviggahena pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නුවණැති පුරුෂයකු නොමැති ව ස්ත්‍රියකට වචන පහ හයකට වැඩියෙන් දහම් දෙසන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should teach Dhamma to a woman in more than five or six sentences, except in the presence of an intelligent man: Pācittiya.",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "යො පන භික්ඛු අනුපසම්පන්නස්ස උත්තරිමනුස්සධම්මං ආරොචෙය්‍ය භූතස්මිං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannassa uttarimanussadhammaṃ āroceyya bhūtasmiṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අනුපසම්පන්නයෙක් හට උතුරුමිනිස්දම් කියන්නේ නම්, (ඒවා තමා වෙත) විද්‍යමාන වන කල්හි, පචිති වේ.",
    "en": "Whatever monk should declare a superhuman state to an unordained person, when it is factual: Pācittiya.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස දුට්ඨුල්ලං ආපත්තිං අනුපසම්පන්නස්ස ආරොචෙය්‍ය, අඤ්ඤත්‍ර භික්ඛුසම්මුතියා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa duṭṭhullaṃ āpattiṃ anupasampannassa āroceyya, aññatra bhikkhusammutiyā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂු සම්මුතියකින් තොර ව භික්‍ෂුවකගේ දුහුල් ඇවැතක් අනුපසම්පන්නයෙකුට කියන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should report a monk's serious offence to an unordained person, except with the agreement of the monks: Pācittiya.",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "යො පන භික්ඛු පඨවිං ඛණෙය්‍ය වා ඛණාපෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu paṭhaviṃ khaṇeyya vā khaṇāpeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි පොළොව සාරන්නේ නම් හෝ සාරවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should dig the ground or have it dug: Pācittiya.",
    "role": "rule",
    "n": 10,
    "vagga": {
     "pali": "මුසාවාදවග්ගො පඨමො.",
     "translit": "Musāvādavaggo paṭhamo.",
     "si": "පළමුවැනි මුසාවාද වර්ගය යි.",
     "en": "The first chapter, the Lying chapter, is finished.",
     "num": 1,
     "name_si": "මුසාවාද වර්ගය",
     "name_en": "Lying chapter",
     "from": 1,
     "to": 10,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "පඨවිං",
      "note": "ඇතැම් පොත්වල පථවිං"
     }
    ]
   },
   {
    "pali": "භූතගාමපාතව්‍යතාය පාචිත්තියං.",
    "translit": "Bhūtagāmapātavyatāya pācittiyaṃ.",
    "si": "වැඩෙන ගහකොල සිඳීමෙන් පචිති වේ.",
    "en": "For the destruction of plant life: Pācittiya.",
    "role": "rule",
    "n": 11,
    "notes_pali": [
     {
      "at": "භූතගාමපාතව්‍යතාය",
      "note": "ඇතැම් පොත්වල භූතගාමපාතබ්‍යතාය"
     }
    ]
   },
   {
    "pali": "අඤ්ඤවාදකෙ විහෙසකෙ පාචිත්තියං.",
    "translit": "Aññavādake vihesake pācittiyaṃ.",
    "si": "සඟ මැද විචාල දෙය හැර අනෙකක් කීමෙහි ද, නිහඬව හිඳීමෙන් සංඝයා වෙහෙස කරවීමෙහි ද පචිති වේ.",
    "en": "Evasive speech and harassment: Pācittiya.",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "උජ්ඣාපනකෙ ඛීයනකෙ පාචිත්තියං.",
    "translit": "Ujjhāpanake khīyanake pācittiyaṃ.",
    "si": "ලමු කොට සිත වීමෙහි නුගුණ කීමෙහි පචිති වේ.",
    "en": "For causing disparagement or complaint: Pācittiya.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "යො පන භික්ඛු සඞ්ඝිකං මඤ්චං වා පීඨං වා භිසිං වා කොච්ඡං වා අජ්ඣොකාසෙ සන්ථරිත්වා වා සන්ථරාපෙත්වා වා, තං පක්කමන්තො නෙව උද්ධරෙය්‍ය න උද්ධරාපෙය්‍ය, අනාපුච්ඡං වා ගච්ඡෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghikaṃ mañcaṃ vā pīṭhaṃ vā bhisiṃ vā kocchaṃ vā ajjhokāse santharitvā vā santharāpetvā vā, taṃ pakkamanto neva uddhareyya na uddharāpeyya, anāpucchaṃ vā gaccheyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සඟසතු ඇඳක් හෝ පුටුවක් හෝ මෙට්ටයක් හෝ කොච්ඡයක් හෝ එළිමහනෙහි අතුරා හෝ අනුන් ලවා අතුරවා ආරාමයෙන් පිටව යන විට නැවත තැන්පත් නො කරන්නේ නම් හෝ අනුන් ලවා තැන්පත් නො කරවන්නේ නම් හෝ අනිකකුට ඒ බව නො දන්වා පිටව යන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having spread out or had spread out in the open a Saṅgha-owned bed, bench, mattress or stool, on departing neither puts it away nor has it put away, or goes without informing anyone: Pācittiya.",
    "role": "rule",
    "n": 14,
    "notes_si": [
     {
      "at": "කොච්ඡයක්",
      "note": "කොච්ඡයක් යනු වැහැරි ආදියකින් කරන ලද, වෙළා බඳින ලද අසුනකි."
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු සඞ්ඝිකෙ විහාරෙ සෙය්‍යං සන්ථරිත්වා වා සන්ථරාපෙත්වා වා, තං පක්කමන්තො නෙව උද්ධරෙය්‍ය න උද්ධරාපෙය්‍ය, අනාපුච්ඡං වා ගච්ඡෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghike vihāre seyyaṃ santharitvā vā santharāpetvā vā, taṃ pakkamanto neva uddhareyya na uddharāpeyya, anāpucchaṃ vā gaccheyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සඟසතු විහාරයක් තුළ දී සෙනසුන් අතුරා හෝ අනුන් ලවා අතුරවා පිටව යන විට නැවත තැන්පත් නො කරන්නේ නම් හෝ අනුන් ලවා තැන්පත් නො කරවන්නේ නම් හෝ අනිකකුට ඒ බව නො දන්වා පිටව යන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having spread out or had spread out bedding in a Saṅgha-owned dwelling, on departing neither puts it away nor has it put away, or goes without informing anyone: Pācittiya.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "යො පන භික්ඛු සඞ්ඝිකෙ විහාරෙ ජානං පුබ්බූපගතං භික්ඛුං අනුපඛජ්ජ සෙය්‍යං කප්පෙය්‍ය; යස්ස සම්බාධො භවිස්සති සො පක්කමිස්සතීති, එතදෙව පච්චයං කරිත්වා අනඤ්ඤං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghike vihāre jānaṃ pubbūpagataṃ bhikkhuṃ anupakhajja seyyaṃ kappeyya; yassa sambādho bhavissati so pakkamissatīti, etadeva paccayaṃ karitvā anaññaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සඟසතු විහාරයක දැන දැන, කලින් පැමිණි භික්‍ෂූන් අතුරෙහි පිවිස \"යමෙකුට බාධා වන්නේ නම් හෙතෙම බැහැර යන්නේ\" යැයි අනෙකක් නො ව මෙය ම හේතු කොටගෙන සයනය කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, in a Saṅgha-owned dwelling, knowing that a monk arrived earlier is there, should lie down after intruding on him, thinking, \"Whoever is crowded will leave,\" for just this reason and no other: Pācittiya.",
    "role": "rule",
    "n": 16
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං කුපිතො අනත්තමනො සඞ්ඝිකා විහාරා නික්කඩ්ඪෙය්‍ය වා නික්කඩ්ඪාපෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ kupito anattamano saṅghikā vihārā nikkaḍḍheyya vā nikkaḍḍhāpeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි කෝපවූයේ නො සතුටු සිතැත්තේ භික්‍ෂුවක් සඟසතු විහාරයකින් නෙරපන්නේ නම් හෝ අනුන්ලවා නෙරපවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, angry and displeased, should expel or have expelled a monk from a Saṅgha-owned dwelling: Pācittiya.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "යො පන භික්ඛු සඞ්ඝිකෙ විහාරෙ උපරිවෙහාසකුටියා, ආහච්චපාදකං මඤ්චං වා පීඨං වා සහසා අභිනිසීදෙය්‍ය වා අභිනිපජ්ජෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghike vihāre uparivehāsakuṭiyā, āhaccapādakaṃ mañcaṃ vā pīṭhaṃ vā sahasā abhinisīdeyya vā abhinipajjeyya vā, pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සඟසතු විහාරයක උඩුමහලේ මැදුම් පුරුෂයෙකුගේ හිස නො ගැටෙන තැන ඇති කුටියක අටනියෙහි සවි කළ පා ඇති ඇඳක හෝ පුටුවක වහා හිඳගන්නේ නම් හෝ නිදන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, in a Saṅgha-owned dwelling, should abruptly sit or lie down on a bed or bench with detachable legs in an upper-storey room: Pācittiya.",
    "role": "rule",
    "n": 18,
    "notes_pali": [
     {
      "at": "වා",
      "note": "ඇතැම් පොත්වල සහසා නොමැති ව අභිනිසීදෙය්‍ය වා පමණක් ඇත."
     }
    ]
   },
   {
    "pali": "මහල්ලකං පන භික්ඛුනා විහාරං කාරයමානෙන, යාව ද්වාරකොසා අග්ගලට්ඨපනාය ආලොකසන්ධිපරිකම්මාය ද්වත්තිච්ඡදනස්ස පරියායං අප්පහරිතෙ ඨිතෙන අධිට්ඨාතබ්බං. තතො චෙ උත්තරිං අප්පහරිතෙපි ඨිතො අධිට්ඨහෙය්‍ය පාචිත්තියං.",
    "translit": "Mahallakaṃ pana bhikkhunā vihāraṃ kārayamānena, yāva dvārakosā aggalaṭṭhapanāya ālokasandhiparikammāya dvatticchadanassa pariyāyaṃ appaharite ṭhitena adhiṭṭhātabbaṃ. Tato ce uttariṃ appaharitepi ṭhito adhiṭṭhaheyya pācittiyaṃ.",
    "si": "මහත් විහාරයක් කරවන භික්‍ෂුවක් විසින් දොරගුළු තරවනු පිණිස ද වාකවුළු පිරියම් පිණිස ද, දොර උළුවහු අවට රියන් දෙකහමාරක් දක්වා බිත්තියට නැවත නැවත මැටි, බදාම ආදිය ගැසීම කළ යුතු ය. එහි සෙවිළි කරන වහළයට ද (ධාන්‍ය වගා භෝග ආදී) වැවිලි නැති තැනක සිට දෙතුන් වරක් විධාන දිය හැකි ය. ඉදින් දෙතුන් වරකට වැඩියෙන් වැවිලි නැති තැනක ද හිඳ විධාන කරන්නේ නම්, පචිති වේ.",
    "en": "When a monk is having a large dwelling built, he may, standing where there are no crops, give instructions two or three times about the covering of the roof, as far as the door-frame, the fittings for the bolt, and the window openings. If he gives instructions beyond that, even standing where there are no crops: Pācittiya.",
    "role": "rule",
    "n": 19,
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු ජානං සප්පාණකං උදකං, තිණං වා මත්තිකං වා සිඤ්චෙය්‍ය වා සිඤ්චාපෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ sappāṇakaṃ udakaṃ, tiṇaṃ vā mattikaṃ vā siñceyya vā siñcāpeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන ප්‍රාණීන් සහිත ජලය තණ කොළවලට හෝ මැටිවලට හෝ ඉසින්නේ නම් හෝ ඉස්සවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, knowing that water contains living beings, should sprinkle it on grass or clay, or cause it to be sprinkled: Pācittiya.",
    "role": "rule",
    "n": 20,
    "vagga": {
     "pali": "භූතගාමවග්ගො දුතියො.",
     "translit": "Bhūtagāmavaggo dutiyo.",
     "si": "දෙවැනි භූතගාම වර්ගය යි.",
     "en": "The second chapter, the Plant-life chapter, is finished.",
     "num": 2,
     "name_si": "භූතගාම වර්ගය",
     "name_en": "Plant-life chapter",
     "from": 11,
     "to": 20,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "යො පන භික්ඛු අසම්මතො භික්ඛුනියො ඔවදෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu asammato bhikkhuniyo ovadeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සම්මත නො කරන ලදුයේ භික්‍ෂුණීන්ට අවවාද දෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should admonish bhikkhunīs without being appointed: Pācittiya.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "සම්මතොපි චෙ භික්ඛු අත්ථඞ්ගතෙ සුරියෙ භික්ඛුනියො ඔවදෙය්‍ය පාචිත්තියං.",
    "translit": "Sammatopi ce bhikkhu atthaṅgate suriye bhikkhuniyo ovadeyya pācittiyaṃ.",
    "si": "ඉදින් සම්මුතිය ඇති භික්‍ෂුවක් ද හිරු බැස ගිය කල්හි භික්‍ෂුණීන්ට අවවාද දෙන්නේ නම්, පචිති වේ.",
    "en": "Even if a monk has been authorized, should he instruct nuns after sunset: Pācittiya.",
    "role": "rule",
    "n": 22
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුනූපස්සයං උපසඞ්කමිත්වා භික්ඛුනියො ඔවදෙය්‍ය, අඤ්ඤත්‍ර සමයා පාචිත්තියං. තත්ථායං සමයො; ගිලානා හොති භික්ඛුනී අයං තත්ථ සමයො.",
    "translit": "Yo pana bhikkhu bhikkhunūpassayaṃ upasaṅkamitvā bhikkhuniyo ovadeyya, aññatra samayā pācittiyaṃ. Tatthāyaṃ samayo; gilānā hoti bhikkhunī ayaṃ tattha samayo.",
    "si": "යම් භික්‍ෂුවක් වනාහි සුදුසු සමය හැර භික්‍ෂුණී ආරාමයට ගොස් භික්‍ෂුණීන්ට අවවාද දෙන්නේ නම්, පචිති වේ. එහි මේ සුදුසු සමය යි; භික්‍ෂුණියක් ගිලන් වූවා වේ නම්, මේ එහි සුදුසු සමය යි.",
    "en": "Whatever monk should go to the nuns' quarters and instruct nuns, except at the proper time: Pācittiya. Here the proper time is this: a nun is sick. This is the proper time here.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "යො පන භික්ඛු එවං වදෙය්‍ය; ආමිසහෙතු භික්ඛූ භික්ඛුනියො ඔවදන්තීති පාචිත්තියං.",
    "translit": "Yo pana bhikkhu evaṃ vadeyya; āmisahetu bhikkhū bhikkhuniyo ovadantīti pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි \"ආමිස හේතු කොටගෙන භික්‍ෂූහු භික්‍ෂුණීන්ට අවවාද දෙත්\" යැයි මෙසේ කියන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should say, \"The monks instruct nuns for the sake of material gain\": Pācittiya.",
    "role": "rule",
    "n": 24,
    "notes_pali": [
     {
      "at": "භික්ඛූ",
      "note": "ඇතැම් පොත්වල ආමිසහෙතු ථෙරා භික්ඛු"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා චීවරං දදෙය්‍ය, අඤ්ඤත්‍ර පාරිවට්ටකා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā cīvaraṃ dadeyya, aññatra pārivaṭṭakā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සුළු දෙයකින් හෝ මාරුකර ගැනීමක් නැති ව නො නෑ භික්‍ෂුණියකට සිවුරක් දෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should give a robe to a nun who is not a relative, except in exchange: Pācittiya.",
    "role": "rule",
    "n": 25
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා චීවරං සිබ්බෙය්‍ය වා සිබ්බාපෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā cīvaraṃ sibbeyya vā sibbāpeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නො නෑ භික්‍ෂුණියකට සිවුරක් මසන්නේ නම් හෝ, අනුන් ලවා මස්සවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should sew or have sewn a robe for a bhikkhunī who is not a relative: Pācittiya.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුනියා සද්ධිං සංවිධාය එකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, අන්තමසො ගාමන්තරම්පි, අඤ්ඤත්‍ර සමයා පාචිත්තියං. තත්ථායං සමයො; සත්ථගමනීයො හොති මග්ගො සාසඞ්කසම්මතො සප්පටිභයො අයං තත්ථ සමයො.",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, antamaso gāmantarampi, aññatra samayā pācittiyaṃ. Tatthāyaṃ samayo; satthagamanīyo hoti maggo sāsaṅkasammato sappaṭibhayo ayaṃ tattha samayo.",
    "si": "යම් භික්‍ෂුවක් වනාහි සුදුසු සමය හැර භික්‍ෂුණියක් සමග සංවිධාන වී එක් දීර්ඝ මාර්ගයකට යටත් පිරිසෙයින් ගමකින් ගමකට හෝ පිවිසෙන්නේ නම්, පචිති වේ. එහි ලා මේ සුදුසු සමය යි; මාර්ගය, ගැල් සාත්තුවක් සමග යා යුතු වෙයි; සැක සහිත යැයි සම්මත වෙයි; බිය සහිත වෙයි; මේ එහි සුදුසු සමය යි.",
    "en": "Whatever monk should, by agreement, set out on the same road with a nun, even as far as from one village to the next, except at the proper time: Pācittiya. Here the proper time is this: the road is one to be travelled with a caravan, and is considered dubious and dangerous. This is the proper time here.",
    "role": "rule",
    "n": 27
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුනියා සද්ධිං සංවිධාය එකං නාවං අභිරූහෙය්‍ය, උද්ධගාමිනිං වා අධොගාමිනිං වා, අඤ්ඤත්‍ර තිරියං තරණාය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ saṃvidhāya ekaṃ nāvaṃ abhirūheyya, uddhagāminiṃ vā adhogāminiṃ vā, aññatra tiriyaṃ taraṇāya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුණියක් සමග සංවිධාන වී ගඟ හරහා එතෙර වීම හැර උඩුගං බලා හෝ යටිගං බලා හෝ යන නැවකට නඟින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should arrange to board the same boat with a bhikkhunī, going upstream or downstream, except for crossing to the other shore: Pācittiya.",
    "role": "rule",
    "n": 28,
    "notes_pali": [
     {
      "at": "උද්ධගාමිනිං",
      "note": "ඇතැම් පොත්වල උද්ධං ගාමිනිං"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු ජානං භික්ඛුනීපරිපාචිතං පිණ්ඩපාතං භුඤ්ජෙය්‍ය, අඤ්ඤත්‍ර පුබ්බෙ ගිහීසමාරම්භා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ bhikkhunīparipācitaṃ piṇḍapātaṃ bhuñjeyya, aññatra pubbe gihīsamārambhā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන කලින් ගිහි අය පිළියෙළ කළ දෙයක් හැර භික්‍ෂුණියක විසින් පිළියෙළ කරවන ලද පිණ්ඩපාතයක් වළඳන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly eat almsfood that a nun has arranged, unless it was arranged beforehand by householders: Pācittiya.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුනියා සද්ධිං එකො එකාය රහො නිසජ්ජං කප්පෙය්‍ය පාචිත්තියං. 2",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ eko ekāya raho nisajjaṃ kappeyya pācittiyaṃ. 2",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුණියක් සමග හුදකලා ව, රහසිගත ව (වැසුණු තැනක) හිඳීම කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should sit down alone with a nun in a private place: Pācittiya.",
    "role": "rule",
    "n": 30,
    "vagga": {
     "pali": "භික්ඛුනොවාදවග්ගො තතියො.",
     "translit": "Bhikkhunovādavaggo tatiyo.",
     "si": "තෙවැනි භික්‍ඛුනෝවාද වර්ගය යි.",
     "en": "The third chapter, the Instructing-nuns chapter, is finished.",
     "num": 3,
     "name_si": "භික්‍ඛුනෝවාද වර්ගය",
     "name_en": "Instructing-nuns chapter",
     "from": 21,
     "to": 30,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "භික්ඛුනොවාදවග්ගො",
      "note": "ඇතැම් පොත්වල ඔවාදවග්ගො"
     }
    ]
   },
   {
    "pali": "අගිලානෙන භික්ඛුනා එකො ආවසථපිණ්ඩො භුඤ්ජිතබ්බො, තතො චෙ උත්තරිං භුඤ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Agilānena bhikkhunā eko āvasathapiṇḍo bhuñjitabbo, tato ce uttariṃ bhuñjeyya pācittiyaṃ.",
    "si": "නො ගිලන් භික්‍ෂුවක් විසින් එක් ආවසථ පිඬුවක් වැළඳිය යුතු ය. ඉදින් ඊට වැඩි වාරයක් වළඳන්නේ නම්, පචිති වේ.",
    "en": "A monk who is not sick may eat one meal at a public rest-house. To eat more: Pācittiya.",
    "role": "rule",
    "n": 31,
    "notes_si": [
     {
      "at": "පිඬුවක්",
      "note": "ආවස්ථ පිඬුවක් නම් පස් බොජුන් අතුරින් එක්තරා බොජුනක් යම් දොරදන් හලක කැමති තාක් තබන ලද්දේ නම් එවැනි පිණ්ඩපාතයකි."
     }
    ]
   },
   {
    "pali": "ගණභොජනෙ අඤ්ඤත්‍ර සමයා පාචිත්තියං. තත්ථායං සමයො; ගිලානසමයො චීවරදානසමයො, චීවරකාරසමයො අද්ධානගමනසමයො නාවාභිරූහනසමයො මහාසමයො සමණභත්තසමයො, අයං තත්ථ සමයො.",
    "translit": "Gaṇabhojane aññatra samayā pācittiyaṃ. Tatthāyaṃ samayo; gilānasamayo cīvaradānasamayo, cīvarakārasamayo addhānagamanasamayo nāvābhirūhanasamayo mahāsamayo samaṇabhattasamayo, ayaṃ tattha samayo.",
    "si": "සුදුසු කාලය හැර ගණ බොජුනෙහි, පචිති වේ. සුදුසු කාලය නම්, ගිලන් කාලය ය; සිවුරු දෙන කාලය ය; සිවුරු කරවන කාලය ය; දීර්ඝ ගමනකට පිළිපන් කාලය ය; නැව් නගින කාලය ය; මහාසමය ය හා ශාසනයේ හෝ ඉන්පිට පැවිද්දකු විසින් සකස් කළ දානයක් පවතින කාලය යි; මේ එහි සුදුසු කාලය යි.",
    "en": "In a group meal, except at the proper time: Pācittiya. Here the proper time is this: a time of sickness, a time of giving robes, a time of making robes, a time of travelling, a time of boarding a boat, a time of a great assembly, a time of a meal offered by wanderers. This is the proper time here.",
    "role": "rule",
    "n": 32,
    "notes_si": [
     {
      "at": "කාලය",
      "note": "චීවර මාසය"
     },
     {
      "at": "මහාසමය",
      "note": "පිරිසක් එක් වූ කල"
     }
    ]
   },
   {
    "pali": "පරම්පරභොජනෙ අඤ්ඤත්‍ර සමයා පාචිත්තියං. තත්ථායං සමයො; ගිලානසමයො චීවරදානසමයො චීවරකාරසමයො, අයං තත්ථ සමයො.",
    "translit": "Paramparabhojane aññatra samayā pācittiyaṃ. Tatthāyaṃ samayo; gilānasamayo cīvaradānasamayo cīvarakārasamayo, ayaṃ tattha samayo.",
    "si": "සුදුසු කාලය හැර පරම්පර භොජුනෙහි, පචිති වේ. සුදුසු කාලය නම්, ගිලන් කාලය ය; සිවුරු දෙන කාලය ය; සිවුරු කරවන කාලය යි; මේ එහි සුදුසු කාලය යි.",
    "en": "In a meal taken after another invitation, except at the proper time: Pācittiya. Here the proper time is this: a time of sickness, a time of giving robes, a time of making robes. This is the proper time here.",
    "role": "rule",
    "n": 33
   },
   {
    "pali": "භික්ඛුං පනෙව කුලං උපගතං පූවෙහි වා මන්ථෙහි වා අභිහට්ඨුං පවාරෙය්‍ය, ආකඞ්ඛමානෙන භික්ඛුනා ද්වත්තිපත්තපූරා පටිග්ගහෙතබ්බා. තතො චෙ උත්තරිං පටිග්ගණ්හෙය්‍ය පාචිත්තියං. ද්වත්තිපත්තපූරෙ පටිග්ගහෙත්වා තතො නීහරිත්වා භික්ඛූහි සද්ධිං සංවිභජිතබ්බං. අයං තත්ථ සාමීචි.",
    "translit": "Bhikkhuṃ paneva kulaṃ upagataṃ pūvehi vā manthehi vā abhihaṭṭhuṃ pavāreyya, ākaṅkhamānena bhikkhunā dvattipattapūrā paṭiggahetabbā. Tato ce uttariṃ paṭiggaṇheyya pācittiyaṃ. Dvattipattapūre paṭiggahetvā tato nīharitvā bhikkhūhi saddhiṃ saṃvibhajitabbaṃ. Ayaṃ tattha sāmīci.",
    "si": "කුලයකට එළඹුනාවූ භික්‍ෂුවකට කැවුම් වලින් හෝ අග්ගලා වලින් හෝ කැමතිතාක් පවරන්නේ නම්, කැමති වන්නා වූ භික්‍ෂුව විසින් පිරූ පාත්‍ර දෙක තුනක් පිළිගත යුතු ය. ඉදින් ඊට වඩා වැඩිපුර පිළිගන්නේ නම්, පචිති වේ. පිරූ පාත්‍ර දෙක තුනක් පිළිගෙන ඉන් බැහැරට ගෙන ගොස් භික්‍ෂූන් සමග බෙදා ගත යුතු ය. මේ එහි අනුධර්මතාවය යි.",
    "en": "If a monk who has gone to a family is invited to take as many cakes or sweetmeats as he likes, he may, if he wishes, accept two or three bowlfuls. If he accepts more than that: Pācittiya. Having accepted two or three bowlfuls, he should take them out and share them with the monks. This is the proper procedure here.",
    "role": "rule",
    "n": 34,
    "notes_pali": [
     {
      "at": "පටිග්ගණ්හෙය්‍ය",
      "note": "ඇතැම් පොත්වල පටිගණ්හෙය්‍ය"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භුත්තාවී පවාරිතො අනතිරිත්තං ඛාදනීයං වා භොජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhuttāvī pavārito anatirittaṃ khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි වළඳන ලදුයේ, කළ පවාරණය ඇතියේ අතිරික්ත නො කළ කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කන්නේ නම් හෝ බුදින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having eaten and been invited, should eat or consume food that is not left over: Pācittiya.",
    "role": "rule",
    "n": 35
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං භුත්තාවිං පවාරිතං, අනතිරිත්තෙන ඛාදනීයෙන වා භොජනීයෙන වා අභිහට්ඨුං පවාරෙය්‍ය; හන්ද භික්ඛු ඛාද වා භුඤ්ජ වාති, ජානං ආසාදනාපෙක්ඛො භුත්තස්මිං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ bhuttāviṃ pavāritaṃ, anatirittena khādanīyena vā bhojanīyena vā abhihaṭṭhuṃ pavāreyya; handa bhikkhu khāda vā bhuñja vāti, jānaṃ āsādanāpekkho bhuttasmiṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි වළඳා පවාරණය වූ භික්‍ෂුවකට පවාරණය වූ බව දැන දැන \"භික්‍ෂුව කව; බුදිව\" යැයි අතිරිත්ත නො කළ කෑ යුතු දෙයින් හෝ බුදිය යුතු දෙයින් කැමති තාක් ගැනීමට පිළිගන්වන්නේ නම්, වැළඳූ කෙනෙහි පචිති වේ.",
    "en": "Whatever monk should invite a monk who has eaten and been invited to eat food that is not left over, saying 'Come, monk, eat or consume', knowing and intending to cause an offence: Pācittiya in the eating.",
    "role": "rule",
    "n": 36
   },
   {
    "pali": "යො පන භික්ඛු විකාලෙ ඛාදනීයං වා භොජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu vikāle khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි විකාලයෙහි කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කන්නේ නම් හෝ බුදින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should eat or consume solid food or soft food at the wrong time (after noon and before dawn): Pācittiya.",
    "role": "rule",
    "n": 37
   },
   {
    "pali": "යො පන භික්ඛු සන්නිධිකාරකං ඛාදනීයං වා භොජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sannidhikārakaṃ khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි පිළිගෙන තැන්පත් කර තැබූ කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කන්නේ නම් හෝ බුදින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should eat or consume solid food or soft food that has been stored up (kept overnight): Pācittiya.",
    "role": "rule",
    "n": 38
   },
   {
    "pali": "යානි ඛො පන තානි පණීතභොජනානි සෙය්‍යථිදං; සප්පි නවනීතං තෙලං මධු ඵාණිතං මච්ඡො මංසං ඛීරං දධි. යො පන භික්ඛු එවරූපානි පණීතභොජනානි අගිලානො අත්තනො අත්ථාය විඤ්ඤාපෙත්වා භුඤ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Yāni kho pana tāni paṇītabhojanāni seyyathidaṃ; sappi navanītaṃ telaṃ madhu phāṇitaṃ maccho maṃsaṃ khīraṃ dadhi. Yo pana bhikkhu evarūpāni paṇītabhojanāni agilāno attano atthāya viññāpetvā bhuñjeyya pācittiyaṃ.",
    "si": "යම් ඒ ප්‍රණීත බොජුන් වෙත්, එනම් ගිතෙල්, වෙඬරු, තෙල්, මී පැණි, උක් සකුරු, දියමස්, ගොඩමස්, කිරි, දී. යම් භික්‍ෂුවක් වනාහි නො ගිලන් ව මෙබඳු ප්‍රණීත බොජුන් තමා පිණිස ඉල්ලාගෙන වළඳන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, not being sick, should request for himself and eat such superior foods as these — ghee, fresh butter, oil, honey, molasses, fish, meat, milk and curd: Pācittiya.",
    "role": "rule",
    "n": 39
   },
   {
    "pali": "යො පන භික්ඛු අදින්නං මුඛද්වාරං ආහාරං ආහරෙය්‍ය, අඤ්ඤත්‍ර උදකදන්තපොනා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu adinnaṃ mukhadvāraṃ āhāraṃ āhareyya, aññatra udakadantaponā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැහැටි සහ පැන් හැර යම් ආහාරයක් නො පිළිගෙන වළඳන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should take food into his mouth that has not been given, except water for cleaning the teeth: Pācittiya.",
    "role": "rule",
    "n": 40,
    "vagga": {
     "pali": "භොජනවග්ගො චතුත්ථො.",
     "translit": "Bhojanavaggo catuttho.",
     "si": "සිවුවැනි භෝජන වර්ගය යි.",
     "en": "The fourth chapter, the Food chapter, is finished.",
     "num": 4,
     "name_si": "භෝජන වර්ගය",
     "name_en": "Food chapter",
     "from": 31,
     "to": 40,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "යො පන භික්ඛු අචෙලකස්ස වා පරිබ්බාජකස්ස වා පරිබ්බාජිකාය වා සහත්ථා ඛාදනීයං වා භොජනීයං වා දදෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu acelakassa vā paribbājakassa vā paribbājikāya vā sahatthā khādanīyaṃ vā bhojanīyaṃ vā dadeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අචේලකයෙකුට හෝ පරිබ්‍රාජකයෙකුට හෝ පරිබ්‍රාජිකාවකට සියතින් කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් දෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should give food with his own hand to a naked ascetic, a male or female wanderer: Pācittiya.",
    "role": "rule",
    "n": 41,
    "notes_si": [
     {
      "at": "අචේලකයෙකුට",
      "note": "නිවටක් හට, නිගන්ඨයෙකු හට"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං එවං වදෙය්‍ය; එහාවුසො ගාමං වා නිගමං වා පිණ්ඩාය පවිසිස්සාමාති, තස්ස දාපෙත්වා වා අදාපෙත්වා වා උය්‍යොජෙය්‍ය; ගච්ඡාවුසො න මෙ තයා සද්ධිං කථා වා නිසජ්ජා වා ඵාසු හොති, එකකස්ස මෙ කථා වා නිසජ්ජා වා ඵාසු හොතීති, එතදෙව පච්චයං කරිත්වා අනඤ්ඤං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ evaṃ vadeyya; ehāvuso gāmaṃ vā nigamaṃ vā piṇḍāya pavisissāmāti, tassa dāpetvā vā adāpetvā vā uyyojeyya; gacchāvuso na me tayā saddhiṃ kathā vā nisajjā vā phāsu hoti, ekakassa me kathā vā nisajjā vā phāsu hotīti, etadeva paccayaṃ karitvā anaññaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුවක්හට \"ඇවැත්නි එව, ගමට හෝ නියම් ගමට හෝ පිඬු පිණිස පිවිසෙම්හ\"යි කියා ඔහුට දෙවා හෝ නො දෙවා හෝ \"ඇවැත්නි යව; නුඹ සමග කථාව හෝ හිඳීම හෝ මට පහසු නො වේ; එකලා වූ මට කථා කිරීම හෝ හිඳීම පහසු වෙයි\" යැයි අන් කරුණක් නොමැති ව මෙය ම හේතු කොටගෙන එතැනින් පිටත් කර යවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should say to another monk, \"Come, friend, let us enter the village or town for alms,\" and then, whether or not he has had food given to him, should send him away, saying, \"Go away, friend; talking or sitting with you is not pleasant for me; talking or sitting alone is pleasant for me\" — for just this reason and no other: Pācittiya.",
    "role": "rule",
    "n": 42,
    "notes_pali": [
     {
      "at": "වදෙය්‍ය",
      "note": "ඇතැම් පොත්වල එවං වදෙය්‍ය නොමැති ව භික්ඛුං පමණක් ඇත."
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු සභොජනෙ කුලෙ අනුපඛජ්ජ නිසජ්ජං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sabhojane kule anupakhajja nisajjaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් අඹු සැමි යුවළ පමණක් සිටින නිවසකට ඇතුළු වී, හිඳීම කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should intrude and sit down in a family where a couple is eating: Pācittiya.",
    "role": "rule",
    "n": 43
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමෙන සද්ධිං රහො පටිච්ඡන්නෙ ආසනෙ නිසජ්ජං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ raho paṭicchanne āsane nisajjaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් ස්ත්‍රියක් සමග රහසිගත, පිළිසන් අසුනක එකට හිඳින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should sit down with a woman in a private, screened seat: Pācittiya.",
    "role": "rule",
    "n": 44
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමෙන සද්ධිං එකො එකාය රහො නිසජ්ජං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ eko ekāya raho nisajjaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් හුදකලා වූයේ හුදකලා වු ස්ත්‍රියක සමග රහසිගත තැනක හිඳින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should sit down in private with a woman, the two of them alone: Pācittiya.",
    "role": "rule",
    "n": 45
   },
   {
    "pali": "යො පන භික්ඛු නිමන්තිතො සභත්තො සමානො සන්තං භික්ඛුං අනාපුච්ඡා පුරෙභත්තං වා පච්ඡාභත්තං වා කුලෙසු චාරිත්තං ආපජ්ජෙය්‍ය, අඤ්ඤත්‍ර සමයා, පාචිත්තියං. තත්ථායං සමයො; චීවරදානසමයො චීවරකාරසමයො, අයං තත්ථ සමයො.",
    "translit": "Yo pana bhikkhu nimantito sabhatto samāno santaṃ bhikkhuṃ anāpucchā purebhattaṃ vā pacchābhattaṃ vā kulesu cārittaṃ āpajjeyya, aññatra samayā, pācittiyaṃ. Tatthāyaṃ samayo; cīvaradānasamayo cīvarakārasamayo, ayaṃ tattha samayo.",
    "si": "යම් භික්‍ෂුවක් වනාහි නිමන්ත්‍රණ ලදුයේ බොජුන් සහිත වූයේ සුදුසු කාලයෙහි හැර විහාරයෙහි සිටින භික්‍ෂුවක් නො විචාරා පෙරබතෙහි හෝ පසුබතෙහි හෝ කුලයන්හි හැසිරීමට පැමිණේ නම්, පචිති වේ. එහි මේ සුදුසු සමය යි; සිවුරු දෙන සමය ය; සිවුරු කරන සමය ය; මේ එහි සුදුසු සමය යි.",
    "en": "Whatever monk, having been invited and having a meal arranged, should go calling on families before or after the meal without informing a monk who is present, except at the proper time: Pācittiya. Here the proper time is this: a time of giving robes, a time of making robes. This is the proper time here.",
    "role": "rule",
    "n": 46
   },
   {
    "pali": "අගිලානෙන භික්ඛුනා චාතුමාසප්පච්චයපවාරණා සාදිතබ්බා. අඤ්ඤත්‍ර පුනපවාරණාය අඤ්ඤත්‍ර නිච්චපවාරණාය, තතො චෙ උත්තරිං සාදියෙය්‍ය පාචිත්තියං.",
    "translit": "Agilānena bhikkhunā cātumāsappaccayapavāraṇā sāditabbā. Aññatra punapavāraṇāya aññatra niccapavāraṇāya, tato ce uttariṃ sādiyeyya pācittiyaṃ.",
    "si": "නො ගිලන් භික්‍ෂුවක් විසින් නැවත නැවත පැවරීම හා නිති පැවරීම හැර මාස හතරක බෙහෙතින් කරන පැවරීම පිළිගත යුතු ය. ඉදින් එයට වැඩි කාලයක් තුළ පිළිගන්නේ නම්, පචිති වේ.",
    "en": "A monk who is not sick may accept a four-month invitation to requisites, except for a repeated invitation or a permanent invitation. If he accepts for longer than that: Pācittiya.",
    "role": "rule",
    "n": 47,
    "notes_pali": [
     {
      "at": "උත්තරිං",
      "note": "ඇතැම් පොත්වල උත්තරි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු උය්‍යුත්තං සෙනං දස්සනාය ගච්ඡෙය්‍ය, අඤ්ඤත්‍ර තථාරූපප්පච්චයා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu uyyuttaṃ senaṃ dassanāya gaccheyya, aññatra tathārūpappaccayā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සුදුසු කරුණක දී හැර යුද්ධයට නික්මුණු භට සේනා දැකීමට යන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should go to see an army on the march, except for a suitable reason: Pācittiya.",
    "role": "rule",
    "n": 48
   },
   {
    "pali": "සියා ච තස්ස භික්ඛුනො කොචිදෙව පච්චයො සෙනං ගමනාය දිරත්තතිරත්තං තෙන භික්ඛුනා සෙනාය වසිතබ්බං. තතො චෙ උත්තරිං වසෙය්‍ය පාචිත්තියං.",
    "translit": "Siyā ca tassa bhikkhuno kocideva paccayo senaṃ gamanāya dirattatirattaṃ tena bhikkhunā senāya vasitabbaṃ. Tato ce uttariṃ vaseyya pācittiyaṃ.",
    "si": "යම් ඒ භික්‍ෂුවට සේනාවට යාම පිණිස කිසියම් කරුණක් වේ නම්, ඒ භික්‍ෂුව විසින් දෙතුන් රැයක් සේනාවෙහි විසිය යුතු ය. ඉදින් ඉන් මත්තෙහි වසන්නේ නම්, පචිති වේ.",
    "en": "If there is some reason for that monk to go to an army, he may stay with the army for two or three nights. If he stays longer than that: Pācittiya.",
    "role": "rule",
    "n": 49
   },
   {
    "pali": "දිරත්තතිරත්තඤ්චෙ භික්ඛු සෙනාය වසමානො උය්‍යොධිකං වා බලග්ගං වා සෙනාබ්‍යුහං වා අනීකදස්සනං වා ගච්ඡෙය්‍ය පාචිත්තියං.",
    "translit": "Dirattatirattañce bhikkhu senāya vasamāno uyyodhikaṃ vā balaggaṃ vā senābyuhaṃ vā anīkadassanaṃ vā gaccheyya pācittiyaṃ.",
    "si": "ඉදින් දෙතුන් රැයක් සේනාවෙහි වසන්නාවූ භික්‍ෂුව රණබිමට හෝ බලසෙන් ගණින තැනට හෝ සේනාව කඳවුරු බැඳි තැනට හෝ බලඇණි දැකීමට යන්නේ නම්, පචිති වේ.",
    "en": "If a monk, while staying two or three nights with an army, should go to a sham-fight, to a place where the army is drawn up, to the battle array, or to see the troops reviewed: Pācittiya.",
    "role": "rule",
    "n": 50,
    "vagga": {
     "pali": "අචෙලකවග්ගො පඤ්චමො.",
     "translit": "Acelakavaggo pañcamo.",
     "si": "පස්වැනි අචේලක වර්ගය යි.",
     "en": "The fifth chapter, the Naked-ascetic chapter, is finished.",
     "num": 5,
     "name_si": "අචේලක වර්ගය",
     "name_en": "Naked-ascetic chapter",
     "from": 41,
     "to": 50,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "සුරාමෙරයපානෙ පාචිත්තියං.",
    "translit": "Surāmerayapāne pācittiyaṃ.",
    "si": "රහමෙර බීමෙහි පචිති වේ.",
    "en": "Drinking alcohol or intoxicants: Pācittiya.",
    "role": "rule",
    "n": 51
   },
   {
    "pali": "අඞ්ගුලිපතොදකෙ පාචිත්තියං.",
    "translit": "Aṅgulipatodake pācittiyaṃ.",
    "si": "ඇඟිලිවලින් කිති කැවීමෙහි පචිති වේ.",
    "en": "Tickling with the fingers: Pācittiya.",
    "role": "rule",
    "n": 52
   },
   {
    "pali": "උදකෙ හස්සධම්මෙ පාචිත්තියං.",
    "translit": "Udake hassadhamme pācittiyaṃ.",
    "si": "ජලයෙහි ක්‍රීඩා කිරීමෙහි පචිති වේ.",
    "en": "Playing in water: Pācittiya.",
    "role": "rule",
    "n": 53,
    "notes_pali": [
     {
      "at": "හස්සධම්මෙ",
      "note": "ඇතැම් පොත්වල හසධම්මෙ"
     }
    ]
   },
   {
    "pali": "අනාදරියෙ පාචිත්තියං.",
    "translit": "Anādariye pācittiyaṃ.",
    "si": "අනදර කිරීමෙහි පචිති වේ.",
    "en": "Disrespect: Pācittiya.",
    "role": "rule",
    "n": 54,
    "notes_si": [
     {
      "at": "අනදර",
      "note": "පුද්ගල සහ ධර්ම යන දෙතැනහි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං භිංසාපෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ bhiṃsāpeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුවක බිය ගන්වන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should frighten a monk: Pācittiya.",
    "role": "rule",
    "n": 55
   },
   {
    "pali": "යො පන භික්ඛු අගිලානො විසිබ්බනාපෙක්ඛො, ජොතිං සමාදහෙය්‍ය වා සමාදහාපෙය්‍ය වා, අඤ්ඤත්‍ර තථාරූපප්පච්චයා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu agilāno visibbanāpekkho, jotiṃ samādaheyya vā samādahāpeyya vā, aññatra tathārūpappaccayā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි නො ගිලන් ව, සුදුසු කරුණක් නොමැති ව, ගිනි තපිනු කැමැත්තෙන් ගිනි දල්වන්නේ නම් හෝ දල්වවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, not being sick and wishing to warm himself, should light a fire or have one lit, without a suitable reason: Pācittiya.",
    "role": "rule",
    "n": 56,
    "notes_pali": [
     {
      "at": "පෙක්ඛො",
      "note": "ඇතැම් පොත්වල විසිබ්බනාපෙඛො"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු ඔරෙනද්ධමාසං නහායෙය්‍ය, අඤ්ඤත්‍ර සමයා පාචිත්තියං. තත්ථායං සමයො; දියඩ්ඪො මාසො සෙසො ගිම්හානන්ති වස්සානස්ස පඨමො මාසො ඉච්චෙතෙ අඩ්ඪතෙය්‍යමාසා උණ්හසමයො, පරිළාහසමයො ගිලානසමයො කම්මසමයො, අද්ධානගමනසමයො වාතවුට්ඨිසමයො. අයං තත්ථ සමයො.",
    "translit": "Yo pana bhikkhu orenaddhamāsaṃ nahāyeyya, aññatra samayā pācittiyaṃ. Tatthāyaṃ samayo; diyaḍḍho māso seso gimhānanti vassānassa paṭhamo māso iccete aḍḍhateyyamāsā uṇhasamayo, pariḷāhasamayo gilānasamayo kammasamayo, addhānagamanasamayo vātavuṭṭhisamayo. Ayaṃ tattha samayo.",
    "si": "යම් භික්‍ෂුවක් වනාහි සුදුසු කාලයේ හැර අඩමසකින් මෙපිට නහන්නේ නම්, පචිති වේ. එහි මේ සුදුසු කාලය නම්, ගිම්හාන ඍතුවේ අවසන් මාස එකහමාර, වස්සාන ඍතුවේ පළමු මාසය යන මේ මාස දෙකහමාර උණුසුම් කාලය ය; පරිදාහ කාලය ය; ගිලන් කාලය ය; නවකර්ම සිදුකරන කාලය ය; දිර්ඝ ගමන් යන කාලය ය; දුහුවිලි සහිත සුළඟ හා මඳ වැසි පවතින (වාතවුට්ඨි) කාලය යි; මේ එහි සුදුසු කාලය යි.",
    "en": "Whatever monk should bathe at intervals of less than half a month, except at the proper time: Pācittiya. Here the proper time is this: the last month and a half of the hot season and the first month of the rains — these two and a half months — the time of heat, the time of fever, a time of sickness, a time of work, a time of travelling, a time of wind and rain. This is the proper time here.",
    "role": "rule",
    "n": 57
   },
   {
    "pali": "නවං පන භික්ඛුනා චීවරලාභෙන තිණ්ණං දුබ්බණ්ණකරණානං අඤ්ඤතරං දුබ්බණ්ණකරණං ආදාතබ්බං, නීලං වා කද්දමං වා කාළසාමං වා. අනාදා චෙ භික්ඛු තිණ්ණං දුබ්බණ්ණකරණානං අඤ්ඤතරං දුබ්බණ්ණකරණං නවං චීවරං පරිභුඤ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā cīvaralābhena tiṇṇaṃ dubbaṇṇakaraṇānaṃ aññataraṃ dubbaṇṇakaraṇaṃ ādātabbaṃ, nīlaṃ vā kaddamaṃ vā kāḷasāmaṃ vā. Anādā ce bhikkhu tiṇṇaṃ dubbaṇṇakaraṇānaṃ aññataraṃ dubbaṇṇakaraṇaṃ navaṃ cīvaraṃ paribhuñjeyya pācittiyaṃ.",
    "si": "අලුත් සිවුරක් ලත් භික්‍ෂුව විසින් නිල් පැහැය, මඩ පැහැය, කළු පැහැය යන තෙවැදෑරුම් දුර්වර්ණ කිරීම් අතුරින් එක්තරා දුර්වර්ණ කිරීමක් ගත යුත්තේ ය. (කප්බිංදු තැබිය යුත්තේ ය). ඉදින් භික්‍ෂුවක් තෙවැදෑරුම් දුර්වර්ණ කිරීම් අතරින් එක්තරා දුර්වර්ණ කිරීමක් නො ගෙන අලුත් සිවුරක් පරිභෝග කරන්නේ නම්, පචිති වේ.",
    "en": "When a monk obtains a new robe, he should mark it with one of the three means of disfigurement: blue-green, mud-brown or dark brown. If a monk makes use of a new robe without marking it with one of the three means of disfigurement: Pācittiya.",
    "role": "rule",
    "n": 58,
    "notes_si": [
     {
      "at": "සිවුරක්",
      "note": "අලුත් සිවුරක් යනු කප්බිංදු නො තැබූ සිවුරකි."
     },
     {
      "at": "පැහැය",
      "note": "හුදු නිල් පැහැය නො වේ. කංස නීල හෝ පලාස නීල වේ."
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස වා භික්ඛුනියා වා සික්ඛමානාය වා සාමණෙරස්ස වා සාමණෙරියා වා සාමං චීවරං විකප්පෙත්වා, අපච්චුද්ධාරකං පරිභුඤ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa vā bhikkhuniyā vā sikkhamānāya vā sāmaṇerassa vā sāmaṇeriyā vā sāmaṃ cīvaraṃ vikappetvā, apaccuddhārakaṃ paribhuñjeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුවකට හෝ භික්‍ෂුණියකට හෝ සික්ඛමානාවකට හෝ සාමණේරයකුට හෝ සාමණේරියකට හෝ තමා විසින් සිවුරක් විකල්පනය කර නැවත පච්චුද්ධාරය නො කර පරිභෝග කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having himself assigned a robe in common to a monk, a nun, a female trainee, a novice or a female novice, should make use of it without its being formally withdrawn: Pācittiya.",
    "role": "rule",
    "n": 59,
    "notes_pali": [
     {
      "at": "අපච්චුද්ධාරකං",
      "note": "ඇතැම් පොත්වල අපච්චුද්ධාරණං"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස පත්තං වා චීවරං වා නිසීදනං වා සූචිඝරං වා කායබන්ධනං වා අපනිධෙය්‍ය වා අපනිධාපෙය්‍ය වා අන්තමසො හස්සාපෙක්ඛොපි, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa pattaṃ vā cīvaraṃ vā nisīdanaṃ vā sūcigharaṃ vā kāyabandhanaṃ vā apanidheyya vā apanidhāpeyya vā antamaso hassāpekkhopi, pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි යටත් පිරිසෙයින් ක්‍රීඩා පිණිස හෝ භික්‍ෂුවකගේ පාත්‍රයක් හෝ සිවුරක් හෝ නිසීදනයක් හෝ ඉදිකටු ගුලාවක් හෝ ඉණ පටියක් හෝ සඟවන්නේ නම් හෝ සඟවවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should hide, or have hidden, a monk's bowl, robe, sitting cloth, needle case or waist-band — even in jest: Pācittiya.",
    "role": "rule",
    "n": 60,
    "vagga": {
     "pali": "සුරාපානවග්ගො ඡට්ඨො.",
     "translit": "Surāpānavaggo chaṭṭho.",
     "si": "හයවැනි සුරාපාන වර්ගය යි.",
     "en": "The sixth chapter, the Liquor-drinking chapter, is finished.",
     "num": 6,
     "name_si": "සුරාපාන වර්ගය",
     "name_en": "Liquor-drinking chapter",
     "from": 51,
     "to": 60,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "හස්සාපෙක්ඛොපි",
      "note": "ඇතැම් පොත්වල හස්සාපෙඛොපි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු සඤ්චිච්ච පාණං ජීවිතා වොරොපෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca pāṇaṃ jīvitā voropeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන සතෙකු දිවියෙන් තොර කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should intentionally deprive a living being of life: Pācittiya.",
    "role": "rule",
    "n": 61
   },
   {
    "pali": "යො පන භික්ඛු ජානං සප්පාණකං උදකං පරිභුඤ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ sappāṇakaṃ udakaṃ paribhuñjeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන ප්‍රාණීන් සහිත ජලය පරිභෝග කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly use water containing living beings: Pācittiya.",
    "role": "rule",
    "n": 62
   },
   {
    "pali": "යො පන භික්ඛු ජානං යථාධම්මං නිහතාධිකරණං පුනකම්මාය උක්කොටෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ yathādhammaṃ nihatādhikaraṇaṃ punakammāya ukkoṭeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන ධර්මය වූ පරිද්දෙන් සන්සිඳුවන ලද අධිකරණයක් නැවත විසඳීම සඳහා මතු කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, knowing that a legal case has been properly settled, should stir it up again for a further procedure: Pācittiya.",
    "role": "rule",
    "n": 63
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස ජානං දුට්ඨුල්ලං ආපත්තිං පටිච්ඡාදෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa jānaṃ duṭṭhullaṃ āpattiṃ paṭicchādeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන භික්‍ෂුවකගේ දුහුල් ඇවැතක් සඟවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly conceal another monk's grave offence: Pācittiya.",
    "role": "rule",
    "n": 64
   },
   {
    "pali": "යො පන භික්ඛු ජානං ඌනවීසතිවස්සං පුග්ගලං උපසම්පාදෙය්‍ය, සො ච පුග්ගලො අනුපසම්පන්නො තෙ ච භික්ඛූ ගාරය්හා, ඉදං තස්මිං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ ūnavīsativassaṃ puggalaṃ upasampādeyya, so ca puggalo anupasampanno te ca bhikkhū gārayhā, idaṃ tasmiṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන වයස විස්සට අඩු පුද්ගලයෙකු උපසම්පදා කරවන්නේ නම් ඒ පුද්ගල තෙමේ ද අනුපසම්පන්න වේ. කාරක භික්‍ෂූන් වහන්සේලා ද ගැරහිය යුත්තෝ වෙත්. ඒ උපාධ්‍යායයන් වහන්සේ කෙරෙහි, මේ පචිතිය වේ.",
    "en": "Whatever monk should knowingly give the full ordination to a person under twenty years of age: that person is not ordained, and those monks are blameworthy. This is a Pācittiya for him.",
    "role": "rule",
    "n": 65
   },
   {
    "pali": "යො පන භික්ඛු ජානං ථෙය්‍යසත්ථෙන සද්ධිං සංවිධාය එකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, අන්තමසො ගාමන්තරම්පි පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ theyyasatthena saddhiṃ saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, antamaso gāmantarampi pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන සොර ගැල් කණ්ඩායමක් සමග සංවිධානය වී එක් ව දීර්ඝ මාර්ගයකට පිවිසින්නේ ද, යටත් පිරිසෙයින් අන් ගමකටදු පිළිපන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly, by agreement, set out on the same road with a caravan of thieves, even as far as from one village to the next: Pācittiya.",
    "role": "rule",
    "n": 66
   },
   {
    "pali": "යො පන භික්ඛු මාතුගාමෙන සද්ධිං සංවිධාය එකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, අන්තමසො ගාමන්තරම්පි පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, antamaso gāmantarampi pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි කාන්තාවක් සමග සංවිධානය වී එක්ව දීර්ඝ මාර්ගයකට පිළිපන්නේ ද, යටත් පිරිසෙයින් අන් ගමකටදු පිළිපන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should arrange to travel on the same road with a woman, even as far as the next village: Pācittiya.",
    "role": "rule",
    "n": 67
   },
   {
    "pali": "යො පන භික්ඛු එවං වදෙය්‍ය; තථාහං භගවතා ධම්මං දෙසිතං ආජානාමි, යථා යෙමෙ අන්තරායිකා ධම්මා වුත්තා භගවතා තෙ පටිසෙවතො නාලං අන්තරායායාති. සො භික්ඛු භික්ඛූහි එවමස්ස වචනීයො; මා ආයස්මා එවං අවච, මා භගවන්තං අබ්භාචික්ඛි, න හි සාධු භගවතො අබ්භක්ඛානං, න හි භගවා එවං වදෙය්‍ය, අනෙකපරියායෙන ආවුසො අන්තරායිකා ධම්මා අන්තරායිකා වුත්තා භගවතා, අලඤ්ච පන තෙ පටිසෙවතො අන්තරායායාති. එවඤ්ච පන සො භික්ඛු භික්ඛූහි වුච්චමානො, තථෙව පග්ගණ්හෙය්‍ය, සො භික්ඛු භික්ඛූහි යාවතතියං සමනුභාසිතබ්බො තස්ස පටිනිස්සග්ගාය, යාවතතියඤ්චෙ සමනුභාසියමානො තං පටිනිස්සජ්ජෙය්‍ය, ඉච්චෙතං කුසලං. නො චෙ පටිනිස්සජ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu evaṃ vadeyya; tathāhaṃ bhagavatā dhammaṃ desitaṃ ājānāmi, yathā yeme antarāyikā dhammā vuttā bhagavatā te paṭisevato nālaṃ antarāyāyāti. So bhikkhu bhikkhūhi evamassa vacanīyo; mā āyasmā evaṃ avaca, mā bhagavantaṃ abbhācikkhi, na hi sādhu bhagavato abbhakkhānaṃ, na hi bhagavā evaṃ vadeyya, anekapariyāyena āvuso antarāyikā dhammā antarāyikā vuttā bhagavatā, alañca pana te paṭisevato antarāyāyāti. Evañca pana so bhikkhu bhikkhūhi vuccamāno, tatheva paggaṇheyya, so bhikkhu bhikkhūhi yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya, yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ. No ce paṭinissajjeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි \"භාග්‍යවතුන් වහන්සේ විසින් යම් මේ අන්තරායකර ධර්මයක් වදාරන ලද්දාහු ද ඒ ධර්මයන් සේවනය කරන්නහුට අන්තරාය පිණිස නො වේ යැයි එසේ භාග්‍යවතුන් වහන්සේ විසින් වදාළ ධර්මය මම දනිමි\" යැයි මෙසේ කියන්නේ නම්, ඒ භික්‍ෂුව භික්‍ෂූන් විසින් \"ඇවැත්නි මෙසේ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ කීම නො මැනවි; භාග්‍යවතුන් වහන්සේ මෙසේ නො ම වදාරන්නේ ය; ඇවැත්නි නොයෙක් ආකාරයෙන් අන්තරායකර ධර්මයෝ අන්තරායකර යැයි භාග්‍යවතුන් වහන්සේ විසින් වදාරන ලද්දේ ද, ඒ ධර්මයන් සේවනය කළහුට අන්තරාය පිණිස පවතින්නේම ය\" යැයි මෙසේ කිය යුතු වන්නේ ය. මෙසේ ද වනාහි ඒ භික්‍ෂුව භික්‍ෂූන් විසින් කියනු ලබන්නේ එසේ ම දැඩි ව ගන්නේ නම් ඒ භික්‍ෂුව භික්‍ෂූන් විසින් ඒ දෘෂ්ඨිය අත්හැරීම පිණිස තුන්යළ දක්වා සමනුභාසන කර්මය කළ යුතු වේ. ඉදින් තුන්යළ දක්වා සමනුභාසන කර්මය කරනු ලබන්නේ ඒ දෘෂ්ටිය අත්හරින්නේ නම් මෙසේ මෙය මැනවි. ඉදින් අත් නො හරින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should say, \"As I understand the Dhamma taught by the Blessed One, those acts that the Blessed One called obstructive are not in fact obstructive for one who engages in them,\" that monk should be told by the monks: \"Do not say so, venerable; do not misrepresent the Blessed One; misrepresenting the Blessed One is not good; the Blessed One would not say such a thing. In many ways, friend, the Blessed One has described obstructive acts as obstructive, and they are indeed obstructive for one who engages in them.\" If, though thus spoken to by the monks, that monk persists as before, he should be rebuked up to three times by the monks for the sake of giving it up. If, being rebuked up to three times, he gives it up, that is good. If he does not give it up: Pācittiya.",
    "role": "rule",
    "n": 68,
    "notes_si": [
     {
      "at": "කර්මය",
      "note": "ඤත්ති චතුත්ථ විනය කර්මයකි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු ජානං තථාවාදිනා භික්ඛුනා අකතානුධම්මෙන තං දිට්ඨිං අප්පටිනිස්සට්ඨෙන සද්ධිං සම්භුඤ්ජෙය්‍ය වා සංවසෙය්‍ය වා සහ වා සෙය්‍යං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ tathāvādinā bhikkhunā akatānudhammena taṃ diṭṭhiṃ appaṭinissaṭṭhena saddhiṃ sambhuñjeyya vā saṃvaseyya vā saha vā seyyaṃ kappeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැන දැන එසේ ම කියන ඒ දෘෂ්ටි අත් නො හළ, උක්ෂේපණය කර ඔසාරණය නො කළ භික්‍ෂුවක් සමග ධර්මාමිෂ සම්භෝගය පවත්වන්නේ නම් හෝ උපෝසථ ආදි සංඝකර්ම කරන්නේ නම් හෝ එක වහලක් යට නිදන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly share a meal or the legal acts of the Saṅgha, or sleep under the same roof, with a monk who speaks thus, who has not given up that view and against whom the proper act of suspension has been carried out but not lifted: Pācittiya.",
    "role": "rule",
    "n": 69,
    "notes_pali": [
     {
      "at": "අකතානුධම්මෙන",
      "note": "ඇතැම් පොත්වල අකටානුධම්මෙන"
     }
    ],
    "notes_si": [
     {
      "at": "උක්ෂේපණය",
      "note": "හික්මී එනතුරු සංඝසමාජයේ සියලු සම්බන්ධකම්වලින් ඉවත් කිරීම"
     },
     {
      "at": "ඔසාරණය",
      "note": "යම් භික්‍ෂුවක් විනය කර්මයක් මගින් සංඝයා වෙතින් ඉවත් කොට, නැවත ආයති සංවරය පිහිටිය පසු සංඝයා වෙතට ඇතුලත් කිරීම"
     }
    ]
   },
   {
    "pali": "සමනුද්දෙසොපි චෙ එවං වදෙය්‍ය; තථාහං භගවතා ධම්මං දෙසිතං ආජානාමි, යථා යෙමෙ අන්තරායිකා ධම්මා වුත්තා භගවතා තෙ පටිසෙවතො නාලං අන්තරායායාති. සො සමණුද්දෙසො භික්ඛූහි එවමස්ස වචනීයො; මා ආවුසො සමණුද්දෙස එවං අවච, මා භගවන්තං අබ්භාචික්ඛි, න හි සාධු භගවතො අබ්භක්ඛානං, න හි භගවා එවං වදෙය්‍ය, අනෙකපරියායෙන ආවුසො සමණුද්දෙස, අන්තරායිකා ධම්මා අන්තරායිකා වුත්තා භගවතා, අලඤ්ච පන තෙ පටිසෙවතො අන්තරායායාති. එවඤ්ච පන සො සමණුද්දෙසො භික්ඛූහි වුච්චමානො තථෙව පග්ගණ්හෙය්‍ය, සො සමණුද්දෙසො භික්ඛූහි එවමස්ස වචනීයො; අජ්ජතග්ගෙ තෙ ආවුසො සමණුද්දෙස, න චෙව සො භගවා සත්ථා අපදිසිතබ්බො. යම්පි චඤ්ඤෙ සමණුද්දෙසා ලභන්ති භික්ඛූහි සද්ධිං දිරත්තතිරත්තං සහසෙය්‍යං, සාපි තෙ නත්ථි චර පරෙ, විනස්සාති. යො පන භික්ඛු ජානං තථා නාසිතං සමණුද්දෙසං උපලාපෙය්‍ය වා උපට්ඨාපෙය්‍ය වා සම්භුඤ්ජෙය්‍ය වා සහ වා සෙය්‍යං කප්පෙය්‍ය පාචිත්තියං.",
    "translit": "Samanuddesopi ce evaṃ vadeyya; tathāhaṃ bhagavatā dhammaṃ desitaṃ ājānāmi, yathā yeme antarāyikā dhammā vuttā bhagavatā te paṭisevato nālaṃ antarāyāyāti. So samaṇuddeso bhikkhūhi evamassa vacanīyo; mā āvuso samaṇuddesa evaṃ avaca, mā bhagavantaṃ abbhācikkhi, na hi sādhu bhagavato abbhakkhānaṃ, na hi bhagavā evaṃ vadeyya, anekapariyāyena āvuso samaṇuddesa, antarāyikā dhammā antarāyikā vuttā bhagavatā, alañca pana te paṭisevato antarāyāyāti. Evañca pana so samaṇuddeso bhikkhūhi vuccamāno tatheva paggaṇheyya, so samaṇuddeso bhikkhūhi evamassa vacanīyo; ajjatagge te āvuso samaṇuddesa, na ceva so bhagavā satthā apadisitabbo. Yampi caññe samaṇuddesā labhanti bhikkhūhi saddhiṃ dirattatirattaṃ sahaseyyaṃ, sāpi te natthi cara pare, vinassāti. Yo pana bhikkhu jānaṃ tathā nāsitaṃ samaṇuddesaṃ upalāpeyya vā upaṭṭhāpeyya vā sambhuñjeyya vā saha vā seyyaṃ kappeyya pācittiyaṃ.",
    "si": "සාමණේරයකුදු \"භාග්‍යවතුන් වහන්සේ විසින් යම් මේ අන්තරායකර ධර්මයක් වදාරන ලද්දාහු ද ඒ ධර්මයන් සේවනය කරන්නහුට අන්තරාය පිණිස නො වේ යැයි එසේ භාග්‍යවතුන් වහන්සේ විසින් වදාළ ධර්මය මම දනිමි\"යැයි මෙසේ කියන්නේ නම්, ඒ සාමණේර තෙම භික්‍ෂූන් විසින් \"ඇවැත්නි සාමණෙරයනි, මෙසේ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ කීම නො මැනවි; භාග්‍යවතුන් වහන්සේ මෙසේ නො ම වදාරන්නේ ය; ඇවැත් සාමණේරය, නොයෙක් ආකාරයෙන් අන්තරායකර ධර්මයෝ අන්තරායකර යැයි භාග්‍යවතුන් වහන්සේ විසින් වදාරන ලද්දේ ද, ඒ ධර්මයන් සේවනය කළහුට අන්තරාය පිණිස පවතින්නේ ම ය\" යැයි මෙසේ කිය යුතු වන්නේ ය. මෙසේ ද වනාහි ඒ සාමණේර තෙම භික්‍ෂූන් විසින් කියනු ලබනුයේ එසේ ම දැඩි ව ගන්නේ නම්, ඒ සාමණේර තෙම භික්‍ෂූන් විසින් \"ඇවැත් සාමණේරය අද පටන් ඒ භාග්‍යවතුන් වහන්සේ නුඹගේ ශාස්තෘන් වහන්සේ යැයි නො ම කිය යුත්තේ ය; අනෙකුත් සාමණේරයෝ භික්‍ෂූන් වහන්සේලා සමග දෙතුන් රැයකුදු එක්ව යම් සයනයක් (සහසෙය්‍යාවක්) ලබත් නම් නුඹට එය ද නැත්තේ ය; බැහැර යව; නො දැක්මට යව\" යැයි මෙසේ කිය යුතු වන්නේ ය. යම් භික්‍ෂුවක් දැන දැන එසේ නසන ලද සාමණේරයකුට සංග්‍රහ කරන්නේ නම් හෝ උපස්ථාන කරවා ගන්නේ නම් හෝ ධර්ම ආමිස සම්භෝග කරන්නේ නම් හෝ එක්ව සයනය කරන්නේ නම්, පචිති වේ.",
    "en": "If even a novice should say, \"As I understand the Dhamma taught by the Blessed One, those acts that the Blessed One called obstructive are not in fact obstructive for one who engages in them,\" that novice should be told by the monks: \"Do not say so, novice; do not misrepresent the Blessed One; misrepresenting the Blessed One is not good; the Blessed One would not say such a thing. In many ways, novice, the Blessed One has described obstructive acts as obstructive, and they are indeed obstructive for one who engages in them.\" If, though thus spoken to by the monks, that novice persists as before, he should be told by the monks: \"From today on, novice, you are not to claim the Blessed One as your teacher. And the privilege that other novices have, of sleeping in the same lodging with the monks for two or three nights, you do not have. Go away, get lost!\" Whatever monk should knowingly befriend, wait on, share a meal with, or sleep in the same lodging with a novice who has been thus expelled: Pācittiya.",
    "role": "rule",
    "n": 70,
    "vagga": {
     "pali": "සප්පාණකවග්ගො සත්තමො.",
     "translit": "Sappāṇakavaggo sattamo.",
     "si": "සත්වැනි සප්පාණක වර්ගය යි.",
     "en": "The seventh chapter, the Living-beings chapter, is finished.",
     "num": 7,
     "name_si": "සප්පාණක වර්ගය",
     "name_en": "Living-beings chapter",
     "from": 61,
     "to": 70,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "පරෙ",
      "note": "ඇතැම් පොත්වල පිරෙ"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛූහි සහධම්මිකං වුච්චමානො එවං වදෙය්‍ය; න තාවාහං ආවුසො එතස්මිං සික්ඛාපදෙ සික්ඛිස්සාමි, යාව න අඤ්ඤං භික්ඛුං ව්‍යත්තං විනයධරං පරිපුච්ඡාමීති පාචිත්තියං. සික්ඛමානෙන භික්ඛවෙ භික්ඛුනා අඤ්ඤාතබ්බං පරිපුච්ඡිතබ්බං පරිපඤ්හිතබ්බං. අයං තත්ථ සාමීචි.",
    "translit": "Yo pana bhikkhu bhikkhūhi sahadhammikaṃ vuccamāno evaṃ vadeyya; na tāvāhaṃ āvuso etasmiṃ sikkhāpade sikkhissāmi, yāva na aññaṃ bhikkhuṃ vyattaṃ vinayadharaṃ paripucchāmīti pācittiyaṃ. Sikkhamānena bhikkhave bhikkhunā aññātabbaṃ paripucchitabbaṃ paripañhitabbaṃ. Ayaṃ tattha sāmīci.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂූන් විසින් පැනවූ ශික්‍ෂා පදයන්ගෙන් කියනු ලබන්නේ \"ඇවැත්නි මම ව්‍යක්ත විනයධර භික්‍ෂුවකගෙන් විමසන තාක් ඒ සික පදයෙහි නො හික්මෙන්නෙමි\" යැයි මෙසේ කියන්නේ නම්, පචිති වේ. මහණෙනි, හික්මෙනු කැමති භික්‍ෂුව විසින් ඒවා පිළිබඳව දත යුතු ය; පිළිවිසිය යුතු ය; සිතිය යුතු ය. මේ එහි අනුධර්මතාවයි.",
    "en": "Whatever monk, when spoken to by the monks in accordance with the rules, should say, \"Friends, I will not train in this training rule until I have questioned another monk who is competent and expert in the Vinaya\": Pācittiya. A monk who is training, monks, should learn, should question, should investigate. This is the proper procedure here.",
    "role": "rule",
    "n": 71
   },
   {
    "pali": "යො පන භික්ඛු පාතිමොක්ඛෙ උද්දිස්සමානෙ එවං වදෙය්‍ය; කිං පනිමෙහි ඛුද්දානුඛුද්දකෙහි සික්ඛාපදෙහි උද්දිට්ඨෙහි, යාවදෙව කුක්කුච්චාය විහෙසාය විලෙඛාය සංවත්තන්තීති, සික්ඛාපදවිවණ්ණනකෙ පාචිත්තියං.",
    "translit": "Yo pana bhikkhu pātimokkhe uddissamāne evaṃ vadeyya; kiṃ panimehi khuddānukhuddakehi sikkhāpadehi uddiṭṭhehi, yāvadeva kukkuccāya vihesāya vilekhāya saṃvattantīti, sikkhāpadavivaṇṇanake pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි පාමොක් උදෙසනු ලබන කල්හි \"කිම, මේ කුඩා අනුකුඩා සිකපද උදෙසීමෙන් කවර වැඩක් ද? හුදෙක් ඒවා කුකුස් පිණිස, වෙහෙස පිණිස, විලේඛන පිණිස පවතියි\" යැයි සිකපද ගැරහීමෙහි පචිති වේ.",
    "en": "Whatever monk, when the Pātimokkha is being recited, should say, \"What is the use of reciting these lesser and minor training rules? They only lead to remorse, vexation and confusion,\" in disparaging a training rule: Pācittiya.",
    "role": "rule",
    "n": 72,
    "notes_pali": [
     {
      "at": "විවණ්ණනකෙ",
      "note": "ඇතැම් පොත්වල සික්ඛාපදවිවණ්ණකෙ"
     }
    ],
    "notes_si": [
     {
      "at": "කල්හි",
      "note": "උදෙසනු ලබන කල්හි යනු ආචාර්යවරයෙකු විසින් අතවැසි හිමිනමකට උගන්වනු ලබන කල්හි, ඉගෙන ගන්නා කල්හි"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු අන්වද්ධමාසං පාතිමොක්ඛෙ උද්දිස්සමානෙ එවං වදෙය්‍ය; ඉදානෙව ඛො අහං ආජානාමි, අයම්පි කිර ධම්මො සුත්තාගතො සුත්තපරියාපන්නො අන්වද්ධමාසං උද්දෙසං ආගච්ඡතීති, තඤ්චෙ භික්ඛුං අඤ්ඤෙ භික්ඛූ ජානෙය්‍යුං, නිසින්නපුබ්බං ඉමිනා භික්ඛුනා ද්වත්තික්ඛත්තුං පාතිමොක්ඛෙ උද්දිස්සමානෙ, කො පන වාදො භීය්‍යොති. න ච තස්ස භික්ඛුනො අඤ්ඤාණකෙන මුත්ති අත්ථි. යඤ්ච තත්ථ ආපත්තිං ආපන්නො, තඤ්ච යථාධම්මො කාරෙතබ්බො, උත්තරිං චස්ස මොහො ආරොපෙතබ්බො; තස්ස තෙ ආවුසො අලාභා, තස්ස තෙ දුල්ලද්ධං, යං ත්වං පාතිමොක්ඛෙ උද්දිස්සමානෙ, න සාධුකං අට්ඨිකත්වා මනසිකරොසීති, ඉදං තස්මිං මොහනකෙ පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anvaddhamāsaṃ pātimokkhe uddissamāne evaṃ vadeyya; idāneva kho ahaṃ ājānāmi, ayampi kira dhammo suttāgato suttapariyāpanno anvaddhamāsaṃ uddesaṃ āgacchatīti, tañce bhikkhuṃ aññe bhikkhū jāneyyuṃ, nisinnapubbaṃ iminā bhikkhunā dvattikkhattuṃ pātimokkhe uddissamāne, ko pana vādo bhīyyoti. Na ca tassa bhikkhuno aññāṇakena mutti atthi. Yañca tattha āpattiṃ āpanno, tañca yathādhammo kāretabbo, uttariṃ cassa moho āropetabbo; tassa te āvuso alābhā, tassa te dulladdhaṃ, yaṃ tvaṃ pātimokkhe uddissamāne, na sādhukaṃ aṭṭhikatvā manasikarosīti, idaṃ tasmiṃ mohanake pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අඩමසක් පාසා පාමොක් උදෙසනු ලබන කල්හි \"මේ ධර්මය ද විනයෙහි ආයේ ය; විනයෙහි ඇතුළත් ය; අඩමසක් පාසා උදෙසීමට පැමිණෙයි යැයි මම දැන් ම දනිමි\" යැයි මෙසේ කියන්නේ නම්, ඉදින් ඒ භික්‍ෂුව \"මේ භික්‍ෂුව විසින් දෙතුන් වරක් පාමොක් උදෙසනු ලබන කල්හි පෙර හුන්නේ\" යැයි අනෙක් භික්‍ෂූහු දන්නාහු නම්, ඒ භික්‍ෂුවට නො දැන්මෙන් මිදීමක් නැත. බොහෝ වූ කළ කවර කථා ද? එසේ ම එහි ලා යම් ඇවතකට පැමිණියේ නම්, ඒ ඇවතට ධර්මයේ වූ පරිද්දෙන් කරවිය යුතු වේ. මත්තෙහි ද ඔහුට \"ඇවැත්නි යම් හෙයකින් නුඹ පාමොක් උදෙසනු ලබන කල්හි මනා කොට අර්ථ ඇති කොට මෙනෙහි නො කරන්නෙහි ද, එහෙයින් එය තොපට අලාභයකි. ඒ තොපට නො මනා ලෙස ලැබීමකි\" යැයි මෝහාරෝපණ විනය කර්මය කළ යුතු ය. මෝහනය කරන ලද ඔහු කෙරෙහි මේ පචිතිය වේ.",
    "en": "Whatever monk, when the Pātimokkha is being recited every fortnight, should say, \"Only now do I understand that this rule, too, is handed down in the discourses, included in the discourses, and comes up for recitation every fortnight,\" and other monks know of that monk, \"This monk has already sat through the recitation of the Pātimokkha two or three times, let alone more,\" there is no release for him through ignorance. For whatever offence he has committed there he should be dealt with according to the rule, and further, his delusion should be exposed: \"Friend, it is no gain for you, it is ill-gotten by you, that when the Pātimokkha is being recited you do not pay attention, taking it to heart.\" In this case of feigned ignorance: Pācittiya.",
    "role": "rule",
    "n": 73,
    "notes_pali": [
     {
      "at": "ආජානාමි",
      "note": "ඇතැම් පොත්වල ජානාමි"
     },
     {
      "at": "භීය්‍යොති",
      "note": "ඇතැම් පොත්වල භිය්‍යො"
     },
     {
      "at": "අට්ඨිකත්වා",
      "note": "ඇතැම් පොත්වල අට්ඨිං කත්වා"
     }
    ],
    "notes_si": [
     {
      "at": "කර්මය",
      "note": "මුළාවූයෙන් පැවරිය යුතු"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස කුපිතො අනත්තමනො පහාරං දදෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa kupito anattamano pahāraṃ dadeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි කිපියේ නො සතුටු සිත් ඇතියේ භික්‍ෂුවකට පහර දෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, angry and displeased, should give a blow to a monk: Pācittiya.",
    "role": "rule",
    "n": 74
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස කුපිතො අනත්තමනො තලසත්තිකං උග්ගිරෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa kupito anattamano talasattikaṃ uggireyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි කිපියේ නො සතුටු සිත් ඇත්තේ භික්‍ෂුවකට පහර දෙන ආකාරය දක්වා කය හෝ කාය පටිබද්ධයක් නඟන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, angry and displeased, should raise the palm of his hand against a monk (as if to strike): Pācittiya.",
    "role": "rule",
    "n": 75
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුං අමූලකෙන සඞ්ඝාදිසෙසෙන අනුද්ධංසෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ amūlakena saṅghādisesena anuddhaṃseyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි භික්‍ෂුවකට අමූලික, අසත්‍ය සංඝාදිසේස ඇවතකින් චෝදනා කරන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should accuse a monk of a Saṅghādisesa offence that is groundless: Pācittiya.",
    "role": "rule",
    "n": 76
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛුස්ස සඤ්චිච්ච කුක්කුච්චං උපදහෙය්‍ය; ඉතිස්ස මුහුත්තම්පි අඵාසු භවිස්සතීති, එතදෙව පච්චයං කරිත්වා අනඤ්ඤං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa sañcicca kukkuccaṃ upadaheyya; itissa muhuttampi aphāsu bhavissatīti, etadeva paccayaṃ karitvā anaññaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි \"මෙසේ මොහුට මොහොතක් නමුදු අපහසුතාවක් වන්නේ\"යැයි භික්‍ෂුවකට දැන දැන අනෙකක් නො ව මෙය ම කරුණු කොට කුකුස් උපදවන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should deliberately cause remorse in a monk, thinking, \"In this way he will be uncomfortable, if only for a moment,\" for just this reason and no other: Pācittiya.",
    "role": "rule",
    "n": 77,
    "notes_pali": [
     {
      "at": "උපදහෙය්‍ය",
      "note": "ඇතැම් පොත්වල උප්පාදෙය්‍ය"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු භික්ඛූනං භණ්ඩනජාතානං කලහජාතානං විවාදාපන්නානං උපස්සුතිං තිට්ඨෙය්‍ය; යං ඉමෙ භණිස්සන්ති තං සොස්සාමීති, එතදෙව පච්චයං කරිත්වා අනඤ්ඤං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhūnaṃ bhaṇḍanajātānaṃ kalahajātānaṃ vivādāpannānaṃ upassutiṃ tiṭṭheyya; yaṃ ime bhaṇissanti taṃ sossāmīti, etadeva paccayaṃ karitvā anaññaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි හටගත් දබර ඇති, හටගත් කලහ ඇති, විරුද්ධ වාදයට පැමිණි භික්‍ෂූන්ගේ කථා බස් ඇසෙන තැන \"මොවුහු යමක් කියත් නම් එය අසමි\" යැයි අනෙකක් නො ව මෙය ම කරුණු කොට කියා සිටින්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should stand eavesdropping on monks who are quarrelling, disputing and engaged in a dispute, thinking, \"I will hear what they say,\" for just this reason and no other: Pācittiya.",
    "role": "rule",
    "n": 78
   },
   {
    "pali": "යො පන භික්ඛු ධම්මිකානං කම්මානං ඡන්දං දත්වා පච්ඡා ඛීයනධම්මං ආපජ්ජෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu dhammikānaṃ kammānaṃ chandaṃ datvā pacchā khīyanadhammaṃ āpajjeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි දැහැමි විනය කර්මයකට ඡන්දය දී පසුව ඒවාට දොස් කීමට පැමිණෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having given consent to a legally valid proceeding, should afterwards complain about it: Pācittiya.",
    "role": "rule",
    "n": 79
   },
   {
    "pali": "යො පන භික්ඛු සඞ්ඝෙ විනිච්ඡයකථාය වත්තමානාය ඡන්දං අදත්වා උට්ඨායාසනා පක්කමෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghe vinicchayakathāya vattamānāya chandaṃ adatvā uṭṭhāyāsanā pakkameyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සඟමැද විනය විනිශ්චයක් පවතින කල්හි ඡන්දය නො දී හුනස්නෙන් නැගිට යන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, when the Saṅgha is in the midst of a formal proceeding, should get up from his seat and leave without giving his consent: Pācittiya.",
    "role": "rule",
    "n": 80
   },
   {
    "pali": "යො පන භික්ඛු සමග්ගෙන සඞ්ඝෙන චීවරං දත්වා, පච්ඡා ඛීයනධම්මං ආපජ්ජෙය්‍ය; යථාසන්ථුතං භික්ඛූ සඞ්ඝිකං ලාභං පරිණාමෙන්තීති පාචිත්තියං.",
    "translit": "Yo pana bhikkhu samaggena saṅghena cīvaraṃ datvā, pacchā khīyanadhammaṃ āpajjeyya; yathāsanthutaṃ bhikkhū saṅghikaṃ lābhaṃ pariṇāmentīti pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි සමගි සංඝයා සමග එක් ව සිවුරක් දී භික්‍ෂූහු සංඝික ලාභය හිතවතුන්ට පිරිනමන්නේ යැයි පසුව නුගුණ කියන බවට පැමිණෙන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk, having given a robe together with a united Saṅgha, should afterwards complain, \"The monks are diverting Saṅgha property to those they are friendly with\": Pācittiya.",
    "role": "rule",
    "n": 81
   },
   {
    "pali": "යො පන භික්ඛු ජානං සඞ්ඝිකං ලාභං පරිණතං පුග්ගලස්ස පරිණාමෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ saṅghikaṃ lābhaṃ pariṇataṃ puggalassa pariṇāmeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි පිරිනමන ලද සංඝික ලාභයක් දැන දැන පුද්ගලයෙකුට පිරිනමන්නේ නම්, පචිති වේ.",
    "en": "Whatever monk should knowingly divert to an individual an offering intended for the Saṅgha: Pācittiya.",
    "role": "rule",
    "n": 82,
    "vagga": {
     "pali": "සහධම්මිකවග්ගො අට්ඨමො.",
     "translit": "Sahadhammikavaggo aṭṭhamo.",
     "si": "අටවැනි සහධම්මික වර්ගය යි.",
     "en": "The eighth chapter, the Dhamma-companions chapter, is finished.",
     "num": 8,
     "name_si": "සහධම්මික වර්ගය",
     "name_en": "Dhamma-companions chapter",
     "from": 71,
     "to": 82,
     "count_si": "ශික්ෂාපද දොළහ",
     "count_en": "Twelve rules"
    }
   },
   {
    "pali": "යො පන භික්ඛු රඤ්ඤො ඛත්තියස්ස මුද්ධාවසිත්තස්ස අනික්ඛන්තරාජකෙ අනීභතරතනකෙ පුබ්බෙ අප්පටිසංවිදිතො ඉන්දඛීලං අතික්කාමෙය්‍ය පාචිත්තියං.",
    "translit": "Yo pana bhikkhu rañño khattiyassa muddhāvasittassa anikkhantarājake anībhataratanake pubbe appaṭisaṃvidito indakhīlaṃ atikkāmeyya pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි පෙර නො දන්වන ලදුයේ, රජු නික්ම නො ගිය කල්හි මෙහෙසිය නික්ම නො ගිය කල්හි අභිෂේක ලද ක්ෂත්‍රිය රජකුගේ නිදන කාමරයේ එළිපත ඉක්මවා පිවිසීමෙන්, පචිති වේ.",
    "en": "Whatever monk, without prior notice, should cross the threshold of the royal residence of a consecrated warrior-noble king when the king has not yet gone out and the queen has not yet left: Pācittiya.",
    "role": "rule",
    "n": 83,
    "notes_pali": [
     {
      "at": "මුද්ධාවසිත්තස්ස",
      "note": "ඇතැම් පොත්වල මුද්ධාභිසිත්තස්ස"
     },
     {
      "at": "රතනකෙ",
      "note": "ඇතැම් පොත්වල අනිග්ගතරතනකෙ"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු රතනං වා රතනසම්මතං වා අඤ්ඤත්‍ර අජ්ඣාරාමා වා අජ්ඣාවසථා වා උග්ගණ්හෙය්‍ය වා උග්ගණ්හාපෙය්‍ය වා පාචිත්තියං. රතනං වා පන භික්ඛුනා රතනසම්මතං වා අජ්ඣාරාමෙ වා අජ්ඣාවසථෙ වා උග්ගහෙත්වා වා උග්ගහාපෙත්වා වා නික්ඛිපිතබ්බං, යස්ස භවිස්සති සො හරිස්සතීති. අයං තත්ථ සාමීචි.",
    "translit": "Yo pana bhikkhu ratanaṃ vā ratanasammataṃ vā aññatra ajjhārāmā vā ajjhāvasathā vā uggaṇheyya vā uggaṇhāpeyya vā pācittiyaṃ. Ratanaṃ vā pana bhikkhunā ratanasammataṃ vā ajjhārāme vā ajjhāvasathe vā uggahetvā vā uggahāpetvā vā nikkhipitabbaṃ, yassa bhavissati so harissatīti. Ayaṃ tattha sāmīci.",
    "si": "යම් භික්‍ෂුවක් වනාහි ඇතුළුආරාමය හෝ ඇතුළුආවාසය හෝ හැර අන් තැනක ඇති රත්නයක් හෝ රත්න යැයි සම්මත යමක් ගන්නේ නම් හෝ ගන්වවන්නේ නම්, පචිති වේ. භික්‍ෂුවක් විසින් ඇතුළුආරාමයේ හෝ ඇතුළුආවාසයේ රත්නයක් හෝ රත්න සම්මත දෙයක් රැගෙන හෝ ගෙන්වාගෙන යමෙකුගේ වන්නේ නම් හෙතෙම ගෙන යන්නේ යැයි තැන්පත් කර තැබිය යුතු ය. මේ එහි අනුධර්මතායි.",
    "en": "Whatever monk should pick up, or have picked up, a jewel or what is considered a jewel, except within the monastery grounds or within a dwelling: Pācittiya. A jewel or what is considered a jewel found within the monastery grounds or within a dwelling should be picked up and put aside, with the thought, \"Whoever owns it will take it.\" This is the proper procedure here.",
    "role": "rule",
    "n": 84
   },
   {
    "pali": "යො පන භික්ඛු සන්තං භික්ඛුං අනාපුච්ඡා, විකාලෙ ගාමං පවිසෙය්‍ය, අඤ්ඤත්‍ර තථාරූපා අච්චායිකා කරණීයා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu santaṃ bhikkhuṃ anāpucchā, vikāle gāmaṃ paviseyya, aññatra tathārūpā accāyikā karaṇīyā pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි එබඳු හදිසි කටයුත්තක දී හැර, සිටින භික්‍ෂුවකට නො දන්වා විකාලයෙහි ගමට ඇතුළු වීමෙන්, පචිති වේ.",
    "en": "Whatever monk should enter a village at the wrong time without informing a resident monk, except for a suitable emergency: Pācittiya.",
    "role": "rule",
    "n": 85
   },
   {
    "pali": "යො පන භික්ඛු අට්ඨිමයං වා දන්තමයං වා විසාණමයං වා සූචිඝරං කාරාපෙය්‍ය භෙදනකං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aṭṭhimayaṃ vā dantamayaṃ vā visāṇamayaṃ vā sūcigharaṃ kārāpeyya bhedanakaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි අස්ථිමය හෝ දළමය හෝ අංමය හෝ ඉදිකටු ගුලාවක් කරවන්නේ නම්, භේදනක පචිතියක් වේ.",
    "en": "Whatever monk should have a needle-case made of bone, ivory, or horn: Pācittiya requiring breaking.",
    "role": "rule",
    "n": 86,
    "notes_si": [
     {
      "at": "භේදනක",
      "note": "බිඳ දමා දෙසිය යුතු පචිතිය"
     }
    ]
   },
   {
    "pali": "නවං පන භික්ඛුනා මඤ්චං වා පීඨං වා කාරයමානෙන අට්ඨඞ්ගුලපාදකං කාරෙතබ්බං සුගතඞ්ගුලෙන, අඤ්ඤත්‍ර හෙට්ඨිමාය අටනියා. තං අතික්කාමයතො ඡෙදනකං පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā mañcaṃ vā pīṭhaṃ vā kārayamānena aṭṭhaṅgulapādakaṃ kāretabbaṃ sugataṅgulena, aññatra heṭṭhimāya aṭaniyā. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "අලුත් ඇඳක් හෝ පුටුවක් කරවන භික්‍ෂුව විසින් යට අටනිය හැර සුගත අඟලෙන් අඟල් අටක් වන සේ පාදවල උස තබා කරවිය යුතු ය. එය ඉක්මවන්නහුට ඡේදනක පචිතියක් වේ.",
    "en": "When making a new bed or chair, a monk should make the legs eight Sugata finger-breadths high, except for the lower frame. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 87,
    "notes_si": [
     {
      "at": "ඡේදනක",
      "note": "වැඩි කොටස කපා දමා දෙසිය යුතු පචිතිය"
     }
    ]
   },
   {
    "pali": "යො පන භික්ඛු මඤ්චං වා පීඨං වා තූලොනද්ධං කාරාපෙය්‍ය උද්දාලනකං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mañcaṃ vā pīṭhaṃ vā tūlonaddhaṃ kārāpeyya uddālanakaṃ pācittiyaṃ.",
    "si": "යම් භික්‍ෂුවක් වනාහි ඇඳක් හෝ පුටුවක් හෝ පුළුන් බහා කරවන්නේ නම්, උද්දාලනක පචිතියක් වේ.",
    "en": "Whatever monk should have a bed or chair upholstered with cotton: Pācittiya requiring destruction.",
    "role": "rule",
    "n": 88,
    "notes_si": [
     {
      "at": "උද්දාලනක",
      "note": "පුළුන් උදුරා දමා දෙසිය යුතු පචිතිය"
     }
    ]
   },
   {
    "pali": "නිසීදනං පන භික්ඛුනා කාරයමානෙන පමාණිකං කාරෙතබ්බං, තත්‍රිදං පමාණං; දීඝසො ද්වෙ විදත්ථියො සුගතවිදත්ථියා, තිරියං දියඩ්ඪං, දසා විදත්ථි. තං අතික්කාමයතො ඡෙදනකං පාචිත්තියං.",
    "translit": "Nisīdanaṃ pana bhikkhunā kārayamānena pamāṇikaṃ kāretabbaṃ, tatridaṃ pamāṇaṃ; dīghaso dve vidatthiyo sugatavidatthiyā, tiriyaṃ diyaḍḍhaṃ, dasā vidatthi. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "නිසීදනයක් කරවනු කැමති භික්‍ෂුව විසින් දිග ප්‍රමාණවත් කොට කරවිය යුතු ය. මේ එහි ප්‍රමාණය යි. දිගින් සුගත් වියතින් දෙවියතකි. සරසින් සුගත් වියතින් වියත් එකහමාරකි. දහවලු වියතකි. එය ඉක්මවන්නාට ඡේදනක පචිතිය වේ.",
    "en": "When making a sitting-cloth, a monk should make it to the prescribed measure. The measure is: two spans in length by the Sugata span, one and a half spans in width, one span for the border. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 89,
    "notes_si": [
     {
      "at": "වියතින්",
      "note": "මෙහි දී මධ්‍යම පුරුෂයකුගේ වියතින් වියත් 3ක් හෙවත් වඩු රියන් 1-1/2 සුගත්වියත් 1කි."
     }
    ]
   },
   {
    "pali": "කණ්ඩුපටිච්ඡාදිං පන භික්ඛුනා කාරයමානෙන, පමාණිකා කාරෙතබ්බා, තත්‍රිදං පමාණං; දීඝසො චතස්සො විදත්ථියො සුගතවිදත්ථියා, තිරියං ද්වෙ විදත්ථියො. තං අතික්කාමයතො ඡෙදනකං පාචිත්තියං.",
    "translit": "Kaṇḍupaṭicchādiṃ pana bhikkhunā kārayamānena, pamāṇikā kāretabbā, tatridaṃ pamāṇaṃ; dīghaso catasso vidatthiyo sugatavidatthiyā, tiriyaṃ dve vidatthiyo. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "කණ්ඩු පටිච්ඡාදනයක් කරවන භික්‍ෂුව විසින් ප්‍රමාණවත් ව කරවිය යුතු ය. මේ එහි ප්‍රමාණය යි. දිගින් සුගත් වියතින් සිවු වියතකි. සරසින් දෙවියතකි. එය ඉක්මවන්නහුට ඡේදනක පචිතිය වේ.",
    "en": "When making a skin-eruption covering cloth, a monk should make it to the prescribed measure: four spans in length by the Sugata span, two spans in width. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 90,
    "notes_si": [
     {
      "at": "පටිච්ඡාදනයක්",
      "note": "චර්ම රෝග වසන (හොරි, දද, කුෂ්ඨ) චීවරයක්"
     }
    ]
   },
   {
    "pali": "වස්සිකසාටිකං පන භික්ඛුනා කාරයමානෙන, පමාණිකා කාරෙතබ්බා, තත්‍රිදං පමාණං; දීඝසො ඡ විදත්ථියො සුගතවිදත්ථියා, තිරියං අඩ්ඪතෙය්‍යා. තං අතික්කාමයතො ඡෙදනකං පාචිත්තියං.",
    "translit": "Vassikasāṭikaṃ pana bhikkhunā kārayamānena, pamāṇikā kāretabbā, tatridaṃ pamāṇaṃ; dīghaso cha vidatthiyo sugatavidatthiyā, tiriyaṃ aḍḍhateyyā. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "වැසි සළුවක් කරවනු කැමති භික්‍ෂුව විසින් ප්‍රමාණවත් ව කරවිය යුතු ය. මේ එහි ප්‍රමාණය යි. දිගින් සුගත් වියතින් වියත් සයකි. පළලින් වියත් දෙකහමාරකි. එය ඉක්මවන්නහුට ඡේදනක පචිතිය වේ.",
    "en": "When making a rains-bathing cloth, a monk should make it to the prescribed measure: six spans in length by the Sugata span, two and a half spans in width. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 91
   },
   {
    "pali": "යො පන භික්ඛු සුගතචීවරප්පමාණං චීවරං කාරාපෙය්‍ය, අතිරෙකං වා ඡෙදනකං පාචිත්තියං. තත්‍රිදං සුගතස්ස සුගතචීවරප්පමාණං; දීඝසො නව විදත්ථියො සුගතවිදත්ථියා, තිරියං ඡ විදත්ථියො. ඉදං සුගතස්ස සුගතචීවරප්පමාණං. 1",
    "translit": "Yo pana bhikkhu sugatacīvarappamāṇaṃ cīvaraṃ kārāpeyya, atirekaṃ vā chedanakaṃ pācittiyaṃ. Tatridaṃ sugatassa sugatacīvarappamāṇaṃ; dīghaso nava vidatthiyo sugatavidatthiyā, tiriyaṃ cha vidatthiyo. Idaṃ sugatassa sugatacīvarappamāṇaṃ. 1",
    "si": "යම් භික්‍ෂුවක් වනාහි සුගතයන් වහන්සේගේ සිවුරේ ප්‍රමාණයේ හෝ ඊට වැඩි ප්‍රමාණයේ හෝ සිවුරක් කරවන්නේ නම්, ඡේදනක පචිතිය වේ. එහි ලා මේ සුගතයන් වහන්සේගේ සුගත සිවුරේ ප්‍රමාණය යි. දිගින් සුගත් වියතින් නව වියතකි. පළලින් වියත් සයකි. මේ සුගතයන් වහන්සේගේ සුගත සිවුරේ ප්‍රමාණය යි.",
    "en": "Whatever monk should have a robe made to the measure of the Sugata's robe or larger: it is to be cut down; Pācittiya. Here this is the Sugata's robe measure: in length nine Sugata-spans, in breadth six spans. This is the measure of the Sugata's robe.",
    "role": "rule",
    "n": 92,
    "vagga": {
     "pali": "රතනවග්ගො නවමො.",
     "translit": "Ratanavaggo navamo.",
     "si": "නවවැනි රතන වර්ගය යි.",
     "en": "The ninth chapter, the Jewel chapter, is finished.",
     "num": 9,
     "name_si": "රතන වර්ගය",
     "name_en": "Jewel chapter",
     "from": 83,
     "to": 92,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    },
    "notes_pali": [
     {
      "at": "රතනවග්ගො",
      "note": "ඇතැම් පොත්වල රාජවග්ගො"
     }
    ]
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො ද්වෙ නවුති පාචිත්තියා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto dve navuti pācittiyā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අනූදෙකක් වු පචිති ඇවැත් උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the ninety-two Pācittiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාචිත්තියා ධම්මා නිට්ඨිතා.",
    "translit": "Pācittiyā dhammā niṭṭhitā.",
    "si": "පචිති ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Pācittiya rules are finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද අනූ දෙක",
  "count_en": "Ninety-two rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "patidesaniya",
  "si": "පාටිදෙසනීයා",
  "en": "Pāṭidesanīyā",
  "kind": "rules",
  "count": 4,
  "num": 6,
  "title_si": "(6) පාටිදෙසනීයා ධම්මා",
  "title_en": "(6) Pāṭidesanīyā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො, චත්තාරො පාටිදෙසනීයා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto, cattāro pāṭidesanīyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සතර පාටිදේසනීය ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these four Pāṭidesanīya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යො පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා අන්තරඝරං පවිට්ඨාය හත්ථතො ඛාදනීයං වා භොජනීයං වා සහත්ථා පටිග්ගහෙත්වා, ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා පටිදෙසෙතබ්බං තෙන භික්ඛුනා; ගාරය්හං ආවුසො ධම්මං ආපජ්ජිං, අසප්පායං පාටිදෙසනීයං තං පටිදෙසෙමීති.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā antaragharaṃ paviṭṭhāya hatthato khādanīyaṃ vā bhojanīyaṃ vā sahatthā paṭiggahetvā, khādeyya vā bhuñjeyya vā paṭidesetabbaṃ tena bhikkhunā; gārayhaṃ āvuso dhammaṃ āpajjiṃ, asappāyaṃ pāṭidesanīyaṃ taṃ paṭidesemīti.",
    "si": "යම් භික්‍ෂුවක් වනාහි, ඇතුළුගමට පිවිසි නො නෑ වූ භික්‍ෂුණියකගේ අතින් කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් හෝ සියතින් පිළිගෙන කන්නේ නම් හෝ බුදින්නේ නම් හෝ, ඒ භික්‍ෂුව විසින් \"ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි\" යැයි පෙරළා දෙසිය යුතු ය.",
    "en": "Whatever monk should accept food from the hand of a bhikkhunī who is not a relative and who has entered a house, and eat it — he should acknowledge it: 'Venerable Sirs, I have fallen into a blameworthy offence that is unsuitable and requires acknowledgement; I acknowledge it.'",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "භික්ඛූ පනෙව කුලෙසු නිමන්තිතා භුඤ්ජන්ති, තත්‍ර චෙ සා භික්ඛුනී වොසාසමානරූපා ඨිතා හොති; ඉධ සූපං දෙථ ඉධ ඔදනං දෙථාති. තෙහි භික්ඛූහි සා භික්ඛුනී අපසාදෙතබ්බා; අපසක්ක තාව භගිනි, යාව භික්ඛූ භුඤ්ජන්තීති. එකස්සපි චෙ භික්ඛුනො නප්පටිභාසෙය්‍ය තං භික්ඛුනිං අපසාදෙතුං; අපසක්ක තාව භගිනි, යාව භික්ඛූ භුඤ්ජන්තීති, පටිදෙසෙතබ්බං තෙහි භික්ඛූහි; ගාරය්හං ආවුසො ධම්මං ආපජ්ජිම්හා, අසප්පායං පාටිදෙසනීයං තං පටිදෙසෙමාති.",
    "translit": "Bhikkhū paneva kulesu nimantitā bhuñjanti, tatra ce sā bhikkhunī vosāsamānarūpā ṭhitā hoti; idha sūpaṃ detha idha odanaṃ dethāti. Tehi bhikkhūhi sā bhikkhunī apasādetabbā; apasakka tāva bhagini, yāva bhikkhū bhuñjantīti. Ekassapi ce bhikkhuno nappaṭibhāseyya taṃ bhikkhuniṃ apasādetuṃ; apasakka tāva bhagini, yāva bhikkhū bhuñjantīti, paṭidesetabbaṃ tehi bhikkhūhi; gārayhaṃ āvuso dhammaṃ āpajjimhā, asappāyaṃ pāṭidesanīyaṃ taṃ paṭidesemāti.",
    "si": "භික්‍ෂූහු වනාහි කුලයන්හි නිමන්ත්‍රණය කරන ලද්දාහු දන් වළඳත්. ඉදින් එහි ලා භික්‍ෂුණියක් \"මෙහි සූප දෙව; මෙහි බත් දෙව\" යැයි විධාන කරමින් සිටියා වෙයි ද, එහි සිටින භික්‍ෂූන් විසින් \"නැගණියනි, භික්‍ෂූන් වහන්සේලා වළඳා අවසන් වනතුරු නුඹ මෙතනින් ඉවත් ව යව\"යැයි ඉවත් කළ යුතු ය. ඉදින් එක් භික්‍ෂුවකුදු \"නැගණියනි භික්‍ෂූන් වහන්සේලා වළඳා අවසන් වනතුරු ඉවත් ව යව\" යැයි ඒ භික්‍ෂුණිය ඉවත් කරන්නට නො වැටහෙන්නේ නම්, ඒ භික්‍ෂූහු විසින් \"ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමු; එය පෙරළා දෙසමු\"යැයි පෙරළා දෙසිය යුත්තාහු ය.",
    "en": "Suppose monks have been invited and are eating in family houses, and a nun is standing there giving directions: \"Give soup here, give rice here.\" That nun should be rebuked by those monks: \"Step back, sister, while the monks are eating.\" If not even one of the monks takes it upon himself to rebuke that nun — \"Step back, sister, while the monks are eating\" — those monks should confess: \"Friends, we have committed a blameworthy, unsuitable offence that ought to be confessed; we confess it.\"",
    "role": "rule",
    "n": 2,
    "notes_pali": [
     {
      "at": "චෙ",
      "note": "ඇතැම් පොත්වල එකස්ස චෙපි"
     }
    ]
   },
   {
    "pali": "යානි ඛො පන තානි සෙක්ඛසම්මතානි කුලානි, යො පන භික්ඛු තථාරූපෙසු සෙක්ඛසම්මතෙසු කුලෙසු පුබ්බෙ අනිමන්තිතො, අගිලානො, ඛාදනීයං වා භොජනීයං වා සහත්ථා පටිග්ගහෙත්වා, ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පටිදෙසෙතබ්බං තෙන භික්ඛුනා; ගාරය්හං ආවුසො ධම්මං ආපජ්ජිං, අසප්පායං පාටිදෙසනීයං තං පටිදෙසෙමීති.",
    "translit": "Yāni kho pana tāni sekkhasammatāni kulāni, yo pana bhikkhu tathārūpesu sekkhasammatesu kulesu pubbe animantito, agilāno, khādanīyaṃ vā bhojanīyaṃ vā sahatthā paṭiggahetvā, khādeyya vā bhuñjeyya vā, paṭidesetabbaṃ tena bhikkhunā; gārayhaṃ āvuso dhammaṃ āpajjiṃ, asappāyaṃ pāṭidesanīyaṃ taṃ paṭidesemīti.",
    "si": "යම් ඒ සේඛසම්මත කුලයෝ ඇත් ද, යම් භික්‍ෂුවක් එබඳු සේඛසම්මත කුලයන්හි පෙර නිමන්ත්‍රණය නො කරන ලදුයේ, නො ගිලන් වූයේ, කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් හෝ සියතින් පිළිගෙන කන්නේ නම් හෝ බුදින්නේ නම් හෝ, ඒ භික්‍ෂුව විසින් \"ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි\"යැයි පෙරළා දෙසිය යුතු ය.",
    "en": "There are families that are agreed upon as being in training. Whatever monk, not previously invited and not sick, should accept hard or soft food with his own hand in such families and eat it, should confess to the monks: \"Friends, I have committed a blameworthy, unsuitable offence that ought to be confessed; I confess it.\"",
    "role": "rule",
    "n": 3,
    "notes_pali": [
     {
      "at": "සෙක්ඛසම්මතානි",
      "note": "ඇතැම් පොත්වල සෙඛසම්මතානි"
     }
    ],
    "notes_si": [
     {
      "at": "කුලයෝ",
      "note": "මාර්ගඵල ලබන ලද පවුල්"
     }
    ]
   },
   {
    "pali": "යානි ඛො පන තානි ආරඤ්ඤකානි සෙනාසනානි සාසඞ්කසම්මතානි සප්පටිභයානි, යො පන භික්ඛු තථාරූපෙසු සෙනාසනෙසු විහරන්තො, පුබ්බෙ අප්පටිසංවිදිතං ඛාදනීයං වා භොජනීයං වා අජ්ඣාරාමෙ සහත්ථා පටිග්ගහෙත්වා, අගිලානො ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පටිදෙසෙතබ්බං තෙන භික්ඛුනා; ගාරය්හං ආවුසො ධම්මං ආපජ්ජිං, අසප්පායං පාටිදෙසනීයං තං පටිදෙසෙමීති.",
    "translit": "Yāni kho pana tāni āraññakāni senāsanāni sāsaṅkasammatāni sappaṭibhayāni, yo pana bhikkhu tathārūpesu senāsanesu viharanto, pubbe appaṭisaṃviditaṃ khādanīyaṃ vā bhojanīyaṃ vā ajjhārāme sahatthā paṭiggahetvā, agilāno khādeyya vā bhuñjeyya vā, paṭidesetabbaṃ tena bhikkhunā; gārayhaṃ āvuso dhammaṃ āpajjiṃ, asappāyaṃ pāṭidesanīyaṃ taṃ paṭidesemīti.",
    "si": "යම් ඒ සැක සහිත යැයි සම්මත වූ බිය සහිත වූ වන සෙනසුන් ඇත් ද, යම් භික්‍ෂුවක් එබඳු සෙනසුන්හි වාසය කරනුයේ, නො ගිලන් වූයේ, පෙර නො දන්වා ගෙනෙන ලද කෑ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් හෝ ඇතුළුආරාමයේ දී, සියතින් පිළිගෙන කන්නේ නම් හෝ බුදින්නේ නම් හෝ, ඒ භික්‍ෂුව විසින් \"ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි\"යැයි පෙරළා දෙසිය යුතු ය.",
    "en": "There are forest dwellings that are considered dubious and dangerous. Whatever monk, living in such a dwelling, not sick, should accept hard or soft food with his own hand within the monastery grounds that was not previously made known to him, and eat it, should confess to the monks: \"Friends, I have committed a blameworthy, unsuitable offence that ought to be confessed; I confess it.\"",
    "role": "rule",
    "n": 4,
    "notes_pali": [
     {
      "at": "විහරන්තො",
      "note": "ඇතැම් පොත්වල විහරන්තො නොමැති ව සෙනාසනෙසු පමණක් ඇත."
     }
    ]
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො, චත්තාරො පාටිදෙසනීයා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, cattāro pāṭidesanīyā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සතරක් වු පාටිදේසනීය ඇවැත් උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the four Pāṭidesanīya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාටිදෙසනීයා ධම්මා නිට්ඨිතා.",
    "translit": "Pāṭidesanīyā dhammā niṭṭhitā.",
    "si": "පාටිදේසනීය ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Pāṭidesanīya rules are finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද හතර",
  "count_en": "Four rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "sekhiya",
  "si": "සෙඛියා",
  "en": "Sekhiyā",
  "kind": "rules",
  "count": 75,
  "num": 7,
  "title_si": "(7) සෙඛියා ධම්මා",
  "title_en": "(7) Sekhiyā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො සෙඛියා ධම්මා උද්දෙසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto sekhiyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සේඛියා ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these Sekhiya rules (rules of training) come up for recitation.",
    "role": "open"
   },
   {
    "pali": "පරිමණ්ඩලං නිවාසෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ nivāsessāmīti sikkhā karaṇīyā.",
    "si": "හාත්පස පිරිමඬුලු කොට අඳනය අඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will wear the lower robe evenly all round.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "පරිමණ්ඩලං පාරුපිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ pārupissāmīti sikkhā karaṇīyā.",
    "si": "හාත්පස පිරිමඬුලු කොට සිවුරු පොරවන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will wear the upper robe evenly all round.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "සුපටිච්ඡන්නො අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Supaṭicchanno antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "සුපිළිසන් ව සිවුරු පොරවාගෙන ඇතුළුගමෙහි වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will go well-covered inside houses.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "සුපටිච්ඡන්නො අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Supaṭicchanno antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "සුපිළිසන් ව සිවුරු පොරවාගෙන ඇතුළුගමෙහි වැඩ හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will sit well-covered inside houses.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "සුසංවුතො අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Susaṃvuto antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "මනා සංවරයකින් යුතු ව ඇතුළුගමෙහි වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will go well-restrained inside houses.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "සුසංවුතො අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Susaṃvuto antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "මනා සංවරයකින් යුතු ව ඇතුළුගමෙහි වැඩ හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will sit well-restrained inside houses.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "ඔක්ඛිත්තචක්ඛු අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Okkhittacakkhu antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "බිමට යොමා ගත් ඇස් ඇති ව (වියදඬු පමණ දුර බලමින්) ඇතුළුගමෙහි වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will go with eyes lowered inside houses.",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "ඔක්ඛිත්තචක්ඛු අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Okkhittacakkhu antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "බිමට යොමා ගත් ඇස් ඇති ව (වියදඬු පමණ දුර බලමින්) ඇතුළුගමෙහි වැඩ හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will sit with eyes lowered inside houses.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "න උක්ඛිත්තකාය අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkhittakāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "සිවුරු ඔසවාගෙන ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go with robes hitched up inside houses.",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "න උක්ඛිත්තකාය අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkhittakāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "සිවුරු ඔසවාගෙන ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit with robes hitched up inside houses.",
    "role": "rule",
    "n": 10,
    "vagga": {
     "pali": "පරිමණ්ඩලවග්ගො පඨමො.",
     "translit": "Parimaṇḍalavaggo paṭhamo.",
     "si": "පළමුවැනි පරිමණ්ඩල වර්ගය යි.",
     "en": "The first chapter, the Well-rounded chapter, is finished.",
     "num": 1,
     "name_si": "පරිමණ්ඩල වර්ගය",
     "name_en": "Well-rounded chapter",
     "from": 1,
     "to": 10,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "න උජ්ජග්ඝිකාය අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ujjagghikāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "මහ හඬින් සිනා සෙමින් ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go laughing loudly inside houses.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "න උජ්ජග්ඝිකාය අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ujjagghikāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "මහ හඬින් සිනා සෙමින් ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit laughing loudly inside houses.",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "අප්පසද්දො අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Appasaddo antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "ශබ්ද නො කොට ඇතුළුගමෙහි වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will go making little sound inside houses.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "අප්පසද්දො අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Appasaddo antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "ශබ්ද නො කොට ඇතුළුගමෙහි හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will sit making little sound inside houses.",
    "role": "rule",
    "n": 14
   },
   {
    "pali": "න කායප්පචාලකං අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kāyappacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "කය සොලවමින් ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go swaying the body inside houses.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "න කායප්පචාලකං අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kāyappacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "කය සොලවමින් ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit swaying the body inside houses.",
    "role": "rule",
    "n": 16
   },
   {
    "pali": "න බාහුප්පචාලකං අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bāhuppacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "අත් සොලවමින් ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go swinging the arms inside houses.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "න බාහුප්පචාලකං අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bāhuppacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "අත් සොලවමින් ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit swinging the arms inside houses.",
    "role": "rule",
    "n": 18
   },
   {
    "pali": "න සීසප්පචාලකං අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sīsappacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "හිස සොලවමින් ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go shaking the head inside houses.",
    "role": "rule",
    "n": 19
   },
   {
    "pali": "න සීසප්පචාලකං අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sīsappacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "හිස සොලවමින් ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit shaking the head inside houses.",
    "role": "rule",
    "n": 20,
    "vagga": {
     "pali": "උජ්ජග්ඝිකවග්ගො දුතියො.",
     "translit": "Ujjagghikavaggo dutiyo.",
     "si": "දෙවැනි උජ්ජග්ඝික වර්ගය යි.",
     "en": "The second chapter, the Laughter chapter, is finished.",
     "num": 2,
     "name_si": "උජ්ජග්ඝික වර්ගය",
     "name_en": "Laughter chapter",
     "from": 11,
     "to": 20,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "න ඛම්භකතො අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na khambhakato antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "උකුළෙහි අත් තබාගෙන ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go with hands on hips inside houses.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "න ඛම්භකතො අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na khambhakato antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "උකුළෙහි අත් තබාගෙන ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit with hands on hips inside houses.",
    "role": "rule",
    "n": 22
   },
   {
    "pali": "න ඔගුණ්ඨිතො අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oguṇṭhito antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසා පොරවාගෙන ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not go with my head covered in inhabited areas\" is a training to be observed.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "න ඔගුණ්ඨිතො අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oguṇṭhito antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසා පොරවාගෙන ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not sit with my head covered in inhabited areas\" is a training to be observed.",
    "role": "rule",
    "n": 24
   },
   {
    "pali": "න උක්කුටිකාය අන්තරඝරෙ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkuṭikāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "විළුඹ හෝ ඇඟිලි බිම අනිමින් ඇතුළුගමෙහි නො වඩින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not go on tiptoes inside houses.",
    "role": "rule",
    "n": 25
   },
   {
    "pali": "න පල්ලත්ථිකාය අන්තරඝරෙ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pallatthikāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "අකවටු බැඳගෙන ඇතුළුගමෙහි නො හිඳින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not sit clasping the knees inside houses.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "සක්කච්චං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sakkaccaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "සිහි එළවාගෙන පිණ්ඩපාතය පිළිගන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will receive almsfood attentively.",
    "role": "rule",
    "n": 27
   },
   {
    "pali": "පත්තසඤ්ඤී පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Pattasaññī piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය යන සංඥාව ඇති ව පිණ්ඩපාතය පිළිගන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will receive almsfood with attention on the bowl.",
    "role": "rule",
    "n": 28
   },
   {
    "pali": "සමසූපකං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samasūpakaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "බතින් හතරෙන් කොටසක් (1/4) සූප ඇති සේ පිණ්ඩපාතය පිළිගන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will receive almsfood with the curry in proportion to the rice.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "සමතිත්තිකං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samatittikaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රයේ ඇතුළුමුව විටට සමවන සේ පිණ්ඩපාතය පිළිගන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will receive almsfood up to the brim of the bowl.",
    "role": "rule",
    "n": 30,
    "vagga": {
     "pali": "ඛම්භකතවග්ගො තතියො.",
     "translit": "Khambhakatavaggo tatiyo.",
     "si": "තෙවැනි ඛම්භකත වර්ගය යි.",
     "en": "The third chapter, the Arms-akimbo chapter, is finished.",
     "num": 3,
     "name_si": "ඛම්භකත වර්ගය",
     "name_en": "Arms-akimbo chapter",
     "from": 21,
     "to": 30,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "සක්කච්චං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sakkaccaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "සිහි එළවාගෙන දන් වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will eat almsfood attentively.",
    "role": "rule",
    "n": 31
   },
   {
    "pali": "පත්තසඤ්ඤී පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Pattasaññī piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය යන සංඥාව ඇති ව දන් වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will eat almsfood with attention on the bowl.",
    "role": "rule",
    "n": 32
   },
   {
    "pali": "සපදානං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sapadānaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "තමා දෙස පටන් අනුපිළිවෙළින් (පාත්‍රයේ තැනින් තැන නො ගෙන) දන් වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will eat almsfood in order, without skipping.",
    "role": "rule",
    "n": 33
   },
   {
    "pali": "සමසූපකං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samasūpakaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බතෙන් හතරෙන් කොටසක් (1/4) සූප ඇති සේ දන් වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will eat almsfood with curry in proportion to the rice.",
    "role": "rule",
    "n": 34
   },
   {
    "pali": "න ථූපතො ඔමද්දිත්වා පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na thūpato omadditvā piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත මුදුනින් අනා දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not eat almsfood pressing it down from the top\" is a training to be observed.",
    "role": "rule",
    "n": 35,
    "notes_pali": [
     {
      "at": "ථූපතො",
      "note": "ඇතැම් පොත්වල නථූපකතො"
     }
    ]
   },
   {
    "pali": "න සූපං වා බ්‍යඤ්ජනං වා ඔදනෙන පටිච්ඡාදෙස්සාමි, භිය්‍යොකම්‍යතං උපාදායාති සික්ඛා කරණීයා.",
    "translit": "Na sūpaṃ vā byañjanaṃ vā odanena paṭicchādessāmi, bhiyyokamyataṃ upādāyāti sikkhā karaṇīyā.",
    "si": "සූප, ව්‍යඤ්ජන වැඩිපුර ගනු අදහසින් ඒවා බතින් නො වසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not cover soup or a condiment with rice out of a wish to get more\" is a training to be observed.",
    "role": "rule",
    "n": 36,
    "notes_pali": [
     {
      "at": "බ්‍යඤ්ජනං",
      "note": "ඇතැම් පොත්වල ව්‍යඤ්ජනං"
     }
    ]
   },
   {
    "pali": "න සූපං වා ඔදනං වා අගිලානො අත්තනො අත්ථාය විඤ්ඤාපෙත්වා භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sūpaṃ vā odanaṃ vā agilāno attano atthāya viññāpetvā bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "නො ගිලන්ව සූප හෝ බත් හෝ තමා උදෙසා ඉල්ලාගෙන නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not, unless sick, request soup or rice for myself and eat it\" is a training to be observed.",
    "role": "rule",
    "n": 37
   },
   {
    "pali": "න උජ්ඣානසඤ්ඤී පරෙසං පත්තං ඔලොකෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ujjhānasaññī paresaṃ pattaṃ olokessāmīti sikkhā karaṇīyā.",
    "si": "ගරහනු කැමතිව අනුන්ගේ පාත්‍රය දෙස බැලීමෙන් වළකින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not look at another's bowl with a fault-finding mind\" is a training to be observed.",
    "role": "rule",
    "n": 38
   },
   {
    "pali": "නාතිමහන්තං කබළං කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Nātimahantaṃ kabaḷaṃ karissāmīti sikkhā karaṇīyā.",
    "si": "මහත් විශාලව බත් පිඬු කිරීමෙන් වළකින්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not make up too large a morsel.",
    "role": "rule",
    "n": 39
   },
   {
    "pali": "පරිමණ්ඩලං ආලොපං කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ ālopaṃ karissāmīti sikkhā karaṇīyā.",
    "si": "හාත්පසින් ගුලි කොට බත් පිඬු සකස් කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will make up a round morsel.",
    "role": "rule",
    "n": 40,
    "vagga": {
     "pali": "සක්කච්චවග්ගො චතුත්ථො.",
     "translit": "Sakkaccavaggo catuttho.",
     "si": "සිවුවැනි පිණ්ඩපාත වර්ගය යි.",
     "en": "The fourth chapter, the Attentive chapter, is finished.",
     "num": 4,
     "name_si": "පිණ්ඩපාත වර්ගය",
     "name_en": "Attentive chapter",
     "from": 31,
     "to": 40,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "න අනාහටෙ කබළෙ මුඛද්වාරං විවරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na anāhaṭe kabaḷe mukhadvāraṃ vivarissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඬ මුවට ළංකිරීමට පෙර මුව විවෘත නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not open the mouth before the morsel is brought near.",
    "role": "rule",
    "n": 41
   },
   {
    "pali": "න භුඤ්ජමානො සබ්බං හත්ථං මුඛෙ පක්ඛිපිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bhuñjamāno sabbaṃ hatthaṃ mukhe pakkhipissāmīti sikkhā karaṇīyā.",
    "si": "දන් වළඳමින් මුළු අත මුව තුලට ඇතුළු නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not put the whole hand into the mouth while eating.",
    "role": "rule",
    "n": 42
   },
   {
    "pali": "න සකබළෙන මුඛෙන බ්‍යාහරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sakabaḷena mukhena byāharissāmīti sikkhā karaṇīyā.",
    "si": "මුව තුල ආහාර තිබිය දී (කථාකිරීමට නො හැකි පමණට) කථා බස් නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not speak with a morsel in the mouth.",
    "role": "rule",
    "n": 43
   },
   {
    "pali": "න පිණ්ඩුක්ඛෙපකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na piṇḍukkhepakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඬු ආදිය මුව තුලට විසිකරමින් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat by tossing morsels into the mouth.",
    "role": "rule",
    "n": 44
   },
   {
    "pali": "න කබළාවච්ඡෙදකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kabaḷāvacchedakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඬුව කටින් කඩ කඩා නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not bite off pieces of the morsel.",
    "role": "rule",
    "n": 45
   },
   {
    "pali": "න අවගණ්ඩකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na avagaṇḍakārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "හකු පුරවාගෙන දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat stuffing the cheeks.",
    "role": "rule",
    "n": 46
   },
   {
    "pali": "න හත්ථනිද්ධුනකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na hatthaniddhunakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "අත් ගසා දමමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat shaking the hand about.",
    "role": "rule",
    "n": 47
   },
   {
    "pali": "න සිත්ථාවකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sitthāvakārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් ඇට තැන තැන විසුරුවමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat scattering rice about.",
    "role": "rule",
    "n": 48
   },
   {
    "pali": "න ජිව්හානිච්ඡාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na jivhānicchārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "දිව පිටතට නෙරමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat licking the lips (protruding the tongue).",
    "role": "rule",
    "n": 49
   },
   {
    "pali": "න චපුචපුකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na capucapukārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "'චපු චපු' යන හඬ නඟමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not eat making a 'capu-capu' sound\" is a training to be observed.",
    "role": "rule",
    "n": 50,
    "vagga": {
     "pali": "කබළවග්ගො පඤ්චමො.",
     "translit": "Kabaḷavaggo pañcamo.",
     "si": "පස්වැනි කබල වර්ගය යි.",
     "en": "The fifth chapter, the Mouthful chapter, is finished.",
     "num": 5,
     "name_si": "කබල වර්ගය",
     "name_en": "Mouthful chapter",
     "from": 41,
     "to": 50,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "න සුරුසුරුකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na surusurukārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "'සුරු සුරු' යන හඬ නඟමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat making a hissing sound.",
    "role": "rule",
    "n": 51
   },
   {
    "pali": "න හත්ථනිල්ලෙහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na hatthanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "අත ලෙවකමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat licking the hand.",
    "role": "rule",
    "n": 52
   },
   {
    "pali": "න පත්තනිල්ලෙහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pattanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය ලෙවමින් (ඇඟිලිවලින් සූර සූරා) දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat licking the bowl.",
    "role": "rule",
    "n": 53
   },
   {
    "pali": "න ඔට්ඨනිල්ලෙහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oṭṭhanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "තොල් ලෙවමින් දන් නො වළඳන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not eat licking the lips.",
    "role": "rule",
    "n": 54
   },
   {
    "pali": "න සාමිසෙන හත්ථෙන පානීයථාලකං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sāmisena hatthena pānīyathālakaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "ඉඳුල් සහිත අතින් පැන් භාජනය නො පිළිගන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not accept a water vessel with a hand soiled with food.",
    "role": "rule",
    "n": 55
   },
   {
    "pali": "න සසිත්ථකං පත්තධොවනං අන්තරඝරෙ ඡඩ්ඩෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sasitthakaṃ pattadhovanaṃ antaraghare chaḍḍessāmīti sikkhā karaṇīyā.",
    "si": "බත් ඇට, ඉඳුල් සහිත පාත්‍ර දෙවූ ජලය ඇතුළුගමෙහි හෝ ඇතුළුගෙයි නො දමන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not throw bowl-rinsing water containing rice grains into an inhabited area\" is a training to be observed.",
    "role": "rule",
    "n": 56
   },
   {
    "pali": "න ඡත්තපාණිස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na chattapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "කුඩ අතැතිව සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person holding an umbrella, who is not sick.",
    "role": "rule",
    "n": 57
   },
   {
    "pali": "න දණ්ඩපාණිස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na daṇḍapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "දඬු අතැතිව සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person holding a stick, who is not sick.",
    "role": "rule",
    "n": 58
   },
   {
    "pali": "න සත්ථපාණිස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na satthapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "සැත් අතැතිව සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person holding a knife, who is not sick.",
    "role": "rule",
    "n": 59
   },
   {
    "pali": "න ආයුධපාණිස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na āyudhapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "ආයුධ අතැතිව සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person holding a weapon, who is not sick.",
    "role": "rule",
    "n": 60,
    "vagga": {
     "pali": "සුරුසුරුවග්ගො ඡට්ඨො.",
     "translit": "Surusuruvaggo chaṭṭho.",
     "si": "සවැනි සුරුසුරු වර්ගය යි.",
     "en": "The sixth chapter, the Slurping chapter, is finished.",
     "num": 6,
     "name_si": "සුරුසුරු වර්ගය",
     "name_en": "Slurping chapter",
     "from": 51,
     "to": 60,
     "count_si": "ශික්ෂාපද දහය",
     "count_en": "Ten rules"
    }
   },
   {
    "pali": "න පාදුකාරූළ්හස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pādukārūḷhassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "පයලූ ලී සෙරෙප්පු ඇති නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person wearing sandals, who is not sick.",
    "role": "rule",
    "n": 61
   },
   {
    "pali": "න උපාහනාරූළ්හස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na upāhanārūḷhassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "පයලූ වහන් ඇති නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person wearing shoes, who is not sick.",
    "role": "rule",
    "n": 62
   },
   {
    "pali": "න යානගතස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na yānagatassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "යානයෙහි හුන්නා වූ නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person in a vehicle, who is not sick.",
    "role": "rule",
    "n": 63
   },
   {
    "pali": "න සයනගතස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sayanagatassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "යහනෙහි සයනය කරන්නා වූ නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person lying on a bed, who is not sick.",
    "role": "rule",
    "n": 64
   },
   {
    "pali": "න පල්ලත්ථිකාය නිසින්නස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pallatthikāya nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "අකවටු බැඳ සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person sitting with clasped knees, who is not sick.",
    "role": "rule",
    "n": 65
   },
   {
    "pali": "න වෙඨිතසීසස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na veṭhitasīsassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "හිස වෙළා සිටින (ජටාවක් බැඳි) නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person with a wrapped head, who is not sick.",
    "role": "rule",
    "n": 66
   },
   {
    "pali": "න ඔගුණ්ඨිතසීසස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oguṇṭhitasīsassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසාගෙන පොරවා සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person with a covered head, who is not sick.",
    "role": "rule",
    "n": 67
   },
   {
    "pali": "න ඡමාය නිසීදිත්වා ආසනෙ නිසින්නස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na chamāya nisīditvā āsane nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමන් බිම හිඳ, ආසනයක හිඳ සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person sitting on a seat, while I am sitting on the ground, who is not sick.",
    "role": "rule",
    "n": 68,
    "notes_pali": [
     {
      "at": "ඡමාය",
      "note": "ඇතැම් පොත්වල න ඡමායං"
     }
    ]
   },
   {
    "pali": "න නීචෙ ආසනෙ නිසීදිත්වා උච්චෙ ආසනෙ නිසින්නස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na nīce āsane nisīditvā ucce āsane nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමන් පහත් අසුනක හිඳ උස් අසුනක හුන් නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person sitting on a higher seat, while I am on a lower seat, who is not sick.",
    "role": "rule",
    "n": 69
   },
   {
    "pali": "න ඨිතො නිසින්නස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ṭhito nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා සිටගෙන, හිඳගෙන සිටින නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person seated while I am standing, who is not sick.",
    "role": "rule",
    "n": 70
   },
   {
    "pali": "න පච්ඡතො ගච්ඡන්තො, පුරතො ගච්ඡන්තස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pacchato gacchanto, purato gacchantassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා පිටුපසින් ගමන් කරමින්, ඉදිරියෙන් යන නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person walking in front, while I am walking behind, who is not sick.",
    "role": "rule",
    "n": 71
   },
   {
    "pali": "න උප්පථෙන ගච්ඡන්තො, පථෙන ගච්ඡන්තස්ස අගිලානස්ස ධම්මං දෙසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na uppathena gacchanto, pathena gacchantassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා නො මඟින් යමින් නියම මඟින් යන්නා වු නො ගිලනාට දහම් නො දෙසන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "I will not teach Dhamma to a person walking on the path, while I am walking off the path, who is not sick.",
    "role": "rule",
    "n": 72
   },
   {
    "pali": "න ඨිතො අගිලානො උච්චාරං වා පස්සාවං වා කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ṭhito agilāno uccāraṃ vā passāvaṃ vā karissāmīti sikkhā karaṇīyā.",
    "si": "සිටගෙන, නො ගිලන් ව වැසිකිළි හෝ කැසිකිළි හෝ නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not, unless sick, defecate or urinate while standing\" is a training to be observed.",
    "role": "rule",
    "n": 73
   },
   {
    "pali": "න හරිතෙ අගිලානො උච්චාරං වා පස්සාවං වා ඛෙළං වා කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na harite agilāno uccāraṃ vā passāvaṃ vā kheḷaṃ vā karissāmīti sikkhā karaṇīyā.",
    "si": "තණ කොළ, පැළෑටි ආදිය ඇති තැනක නො ගිලන්ව වැසිකිළි හෝ කැසිකිළි හෝ කෙළ ගැසීම හෝ නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not, unless sick, defecate, urinate or spit on green growing plants\" is a training to be observed.",
    "role": "rule",
    "n": 74
   },
   {
    "pali": "න උදකෙ අගිලානො උච්චාරං වා පස්සාවං වා ඛෙළං වා කරිස්සාමීති සික්ඛා කරණීයා. 2",
    "translit": "Na udake agilāno uccāraṃ vā passāvaṃ vā kheḷaṃ vā karissāmīti sikkhā karaṇīyā. 2",
    "si": "නො ගිලන්ව ජලයෙහි වැසිකිළි හෝ කැසිකිළි හෝ කෙළ ගැසීම හෝ නො කරන්නෙමි'යි හික්මිය යුතු ය.",
    "en": "\"I shall not, unless sick, defecate, urinate or spit in water\" is a training to be observed.",
    "role": "rule",
    "n": 75,
    "vagga": {
     "pali": "පාදුකාවග්ගො සත්තමො.",
     "translit": "Pādukāvaggo sattamo.",
     "si": "සත්වැනි පාදුකා වර්ගය යි.",
     "en": "The seventh chapter, the Footwear chapter, is finished.",
     "num": 7,
     "name_si": "පාදුකා වර්ගය",
     "name_en": "Footwear chapter",
     "from": 61,
     "to": 75,
     "count_si": "ශික්ෂාපද පහළොව",
     "count_en": "Fifteen rules"
    },
    "notes_pali": [
     {
      "at": "පාදුකාවග්ගො",
      "note": "ඇතැම් පොත්වල පාදුකවග්ගො"
     }
    ]
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො, සෙඛියා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, sekhiyā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සේඛියා ධර්ම උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the Sekhiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "සෙඛියා ධම්මා නිට්ඨිතා.",
    "translit": "Sekhiyā dhammā niṭṭhitā.",
    "si": "සේඛියා ධර්මයෝ අවසන් ය.",
    "en": "The Sekhiya rules are finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද හැත්තෑ පහ",
  "count_en": "Seventy-five rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "adhikaranasamatha",
  "si": "අධිකරණසමථා",
  "en": "Adhikaraṇasamathā",
  "kind": "rules",
  "count": 7,
  "num": 8,
  "title_si": "(8) අධිකරණසමථා ධම්මා",
  "title_en": "(8) Adhikaraṇasamathā Dhammā",
  "parts": [
   {
    "pali": "ඉමෙ ඛො පනායස්මන්තො සත්ත අධිකරණසමථා ධම්මා උද්දෙසං ආගච්ඡන්ති.\nඋප්පන්නුප්පන්නානං අධිකරණානං සමථාය වූපසමාය;\nසම්මුඛාවිනයො දාතබ්බො, සතිවිනයො දාතබ්බො, අමූළ්හවිනයො දාතබ්බො, පටිඤ්ඤාය කාරෙතබ්බං, යෙභුය්‍යසිකා, තස්සපාපිය්‍යසිකා, තිණවත්ථාරකොති.",
    "translit": "Ime kho panāyasmanto satta adhikaraṇasamathā dhammā uddesaṃ āgacchanti.\nUppannuppannānaṃ adhikaraṇānaṃ samathāya vūpasamāya;\nSammukhāvinayo dātabbo, sativinayo dātabbo, amūḷhavinayo dātabbo, paṭiññāya kāretabbaṃ, yebhuyyasikā, tassapāpiyyasikā, tiṇavatthārakoti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සතක් වු අධිකරණසමථ ධර්මයෝ උදෙසීමට පැමිණෙත්.\nඋපනුපන් අධිකරණයන් ගේ සන්සිඳීම පිණිස වූප සමනය පිණිස;\nසම්මුඛාවිනය දියයුත්තේ ය. සතිවිනය දියයුත්තේ ය. අමූළ්හවිනය දියයුත්තේ ය. ප්‍රතිඥාව අනුව කරවිය යුත්තේ ය. යෙභුය්‍යසිකා ව, තස්සපාපිය්‍යසිකා ව, තිණවත්ථාරකය යන සමථයෝ ද දියයුත්තාහු ය.",
    "en": "Here these seven rules for the settling of disputes come up for recitation.\nFor the settling and calming of legal issues as they arise:\nSettlement face-to-face is to be given; settlement by mindfulness is to be given; settlement for past insanity is to be given; action is to be done on the basis of acknowledgment; the decision of the majority; the decision for further misconduct; and covering over as with grass.",
    "role": "open",
    "notes_pali": [
     {
      "at": "තස්සපාපිය්‍යසිකා",
      "note": "ඇතැම් පොත්වල තස්සපාපියසිකා"
     }
    ]
   },
   {
    "pali": "සම්මුඛාවිනයො දාතබ්බො.",
    "translit": "Sammukhāvinayo dātabbo.",
    "si": "සම්මුඛාවිනය දියයුත්තේ ය.",
    "en": "The verdict 'in the presence of' should be given.",
    "role": "rule",
    "n": 1,
    "gloss_si": "ඉදිරියේ සිට විනය විචාරා තීරණය කිරීම"
   },
   {
    "pali": "සතිවිනයො දාතබ්බො.",
    "translit": "Sativinayo dātabbo.",
    "si": "සතිවිනය දියයුත්තේ ය.",
    "en": "The verdict 'of mindfulness' should be given.",
    "role": "rule",
    "n": 2,
    "gloss_si": "සිහියෙන් යුක්ත ව ආරෝපණය කරන ලද චෝදනාවක් අනුමත කිරීම"
   },
   {
    "pali": "අමූළ්හවිනයො දාතබ්බො.",
    "translit": "Amūḷhavinayo dātabbo.",
    "si": "අමූළ්හවිනය දියයුත්තේ ය.",
    "en": "The verdict 'of past insanity' should be given.",
    "role": "rule",
    "n": 3,
    "gloss_si": "මුළාව නැති බව පිළිගැනීම"
   },
   {
    "pali": "පටිඤ්ඤාය කාරෙතබ්බං.",
    "translit": "Paṭiññāya kāretabbaṃ.",
    "si": "ප්‍රතිඥාව අනුව කරවිය යුත්තේ ය.",
    "en": "It should be done according to the acknowledgement.",
    "role": "rule",
    "n": 4,
    "gloss_si": "චෝදකයාගේ හා චෝදිතයාගේ පිළිගැනීම අනුව"
   },
   {
    "pali": "යෙභුය්‍යසිකා.",
    "translit": "Yebhuyyasikā.",
    "si": "යෙභුය්‍යසිකා ව,",
    "en": "Decision by majority vote.",
    "role": "rule",
    "n": 5,
    "gloss_si": "බහුතරයාගේ මතය අනුව තීරණය කිරීම"
   },
   {
    "pali": "තස්සපාපිය්‍යසිකා.",
    "translit": "Tassapāpiyyasikā.",
    "si": "තස්සපාපිය්‍යසිකා ව,",
    "en": "Decision for the offender's specific offence.",
    "role": "rule",
    "n": 6,
    "notes_pali": [
     {
      "at": "තස්සපාපිය්‍යසිකා",
      "note": "ඇතැම් පොත්වල තස්සපාපියසිකා"
     }
    ],
    "gloss_si": "චෝදකයාට ද ඇවැත් විධානය කිරීම"
   },
   {
    "pali": "තිණවත්ථාරකොති.",
    "translit": "Tiṇavatthārakoti.",
    "si": "තිණවත්ථාරකය යන සමථයෝ ද දියයුත්තාහු ය.",
    "en": "Covering over with grass (settling all offences).",
    "role": "rule",
    "n": 7,
    "gloss_si": "තණකොළවලින් වසනවා සේ සියලු ඇවැත් වසා දැමීම"
   },
   {
    "pali": "උද්දිට්ඨා ඛො ආයස්මන්තො, සත්ත අධිකරණසමථා ධම්මා. තත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? දුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? තතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා? පරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, satta adhikaraṇasamathā dhammā. Tatthāyasmante pucchāmi, kaccittha parisuddhā? Dutiyampi pucchāmi, kaccittha parisuddhā? Tatiyampi pucchāmi, kaccittha parisuddhā? Parisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අධිකරණසමථ සත උදෙසන ලද්දාහු ය. එහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the seven rules for settling disputes have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "අධිකරණසමථා ධම්මා නිට්ඨිතා.",
    "translit": "Adhikaraṇasamathā dhammā niṭṭhitā.",
    "si": "අධිකරණසමථ ධර්ම අවසන් ය.",
    "en": "The rules for settling disputes are finished.",
    "role": "end"
   }
  ],
  "count_si": "ශික්ෂාපද හත",
  "count_en": "Seven rules",
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "samapti",
  "si": "සමාප්තිය",
  "en": "Conclusion",
  "kind": "text",
  "count": null,
  "title_si": "ප්‍රාතිමෝක්ෂ සමාප්තිය",
  "title_en": "Conclusion of the Pātimokkha",
  "parts": [
   {
    "pali": "උද්දිට්ඨං ඛො ආයස්මන්තො නිදානං, උද්දිට්ඨා චත්තාරො පාරාජිකා ධම්මා, උද්දිට්ඨා තෙරස සඞ්ඝාදිසෙසා ධම්මා, උද්දිට්ඨා ද්වෙ අනියතා ධම්මා, උද්දිට්ඨා තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා, උද්දිට්ඨා ද්වෙ නවුති පාචිත්තියා ධම්මා, උද්දිට්ඨා චත්තාරො පාටිදෙසනීයා ධම්මා, උද්දිට්ඨා සෙඛියා ධම්මා, උද්දිට්ඨා සත්ත අධිකරණසමථා ධම්මා. එත්තකං තස්ස භගවතො සුත්තාගතං සුත්තපරියාපන්නං අන්වද්ධමාසං උද්දෙසං ආගච්ඡති, තත්ථ සබ්බෙහෙව සමග්ගෙහි සම්මොදමානෙහි අවිවදමානෙහි සික්ඛිතබ්බන්ති.",
    "translit": "Uddiṭṭhaṃ kho āyasmanto nidānaṃ, uddiṭṭhā cattāro pārājikā dhammā, uddiṭṭhā terasa saṅghādisesā dhammā, uddiṭṭhā dve aniyatā dhammā, uddiṭṭhā tiṃsanissaggiyā pācittiyā dhammā, uddiṭṭhā dve navuti pācittiyā dhammā, uddiṭṭhā cattāro pāṭidesanīyā dhammā, uddiṭṭhā sekhiyā dhammā, uddiṭṭhā satta adhikaraṇasamathā dhammā. Ettakaṃ tassa bhagavato suttāgataṃ suttapariyāpannaṃ anvaddhamāsaṃ uddesaṃ āgacchati, tattha sabbeheva samaggehi sammodamānehi avivadamānehi sikkhitabbanti.",
    "si": "ආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී. පාරාජිකා ඇවැත් සතර උදෙසන ලද හ. සංඝාදිසේස ඇවැත් දහතුන උදෙසන ලද හ. අනියත ඇවැත් දෙක උදෙසන ලද හ. නිසඟි පචිති ඇවැත් තිහ උදෙසන ලද හ. පචිති ඇවැත් අනූදෙක උදෙසන ලද හ. පාටිදේසනීය ඇවැත් සතර උදෙසන ලද හ. සේඛියා ඇවැත් උදෙසන ලද හ. අධිකරණසමථ සත උදෙසන ලද හ. ඒ භාග්‍යවතුන් වහන්සේ ගේ සූත්‍රසංඛ්‍යාත භික්‍ෂු විභංගයෙහි ආවා වූ භික්‍ෂු විභංගයට ඇතුළත් වූ මෙතෙක් ශික්ෂා පද අඩමසක් පාසා උදෙසීමට පැමිණෙ යි. සමගි වූ, සතුටු වන විවාද නො කරන සැමදෙනා වහන්සේලා විසින් ම එහි ලා හික්මිය යුත්තාහ.",
    "en": "Venerables, the Introduction has been recited. The four Pārājika rules have been recited. The thirteen Saṅghādisesa rules have been recited. The two Aniyata rules have been recited. The thirty Nissaggiya Pācittiya rules have been recited. The ninety-two Pācittiya rules have been recited. The four Pāṭidesanīya rules have been recited. The Sekhiya rules have been recited. The seven rules for settling disputes have been recited. This much of the Blessed One's teaching, handed down in the discourses and included in the discourses, comes up for recitation every half-month. All should train in it in harmony, with mutual appreciation, without quarrelling."
   },
   {
    "pali": "විත්ථාරුද්දෙසො පඤ්චමො.\nභික්ඛුපාතිමොක්ඛං නිට්ඨිතං.\n\nසාධූ ! සාධූ !! සාධූ !!!",
    "translit": "Vitthāruddeso pañcamo.\nBhikkhupātimokkhaṃ niṭṭhitaṃ.\n\nSādhū ! Sādhū !! Sādhū !!!",
    "si": "පස්වැනි විස්තර උද්දේසය යි.\nභික්‍ෂු ප්‍රාතිමෝක්‍ෂය අවසන් ය.\n\nසාදූ ! සාදූ !! සාදූ !!!",
    "en": "The fifth, detailed recital, is finished.\nThe Bhikkhu Pātimokkha is concluded.\n\nSādhu! Sādhu!! Sādhu!!!",
    "role": "end"
   },
   {
    "pali": "\"සුඡන්නමතිවස්සති විවටං නාතිවස්සති තස්මා ඡන්නං විවරෙථ එවං තං නාතිවස්සතී'ති\".",
    "translit": "\"Suchannamativassati vivaṭaṃ nātivassati tasmā channaṃ vivaretha evaṃ taṃ nātivassatī'ti\".",
    "si": "මොනවට වසාගන්නා ලදුයේ ඉතා වසී (අවන් ඇවැත් සඟවනුයේ තව තවත් ඇවැත්නට පැමිණේ). විවෘත වූයේ ඉතා නො වසී. (අවන් ඇවැත් විවෘත කරනුයේ අන් ඇවැතකට නො පැමිණෙයි). එහෙයින් වසන ලද ඇවැත විවෘත කරන්නේය (කළ යුතු ය). මෙසේ එය ඉතා නො වසී ය යි.",
    "en": "What is well covered is rained on heavily; what is open is not rained on. Therefore uncover what is covered; thus it will not be rained on heavily.\n(Vinaya, Cūḷavagga, Pātimokkhaṭṭhapana-khandhaka)",
    "source_si": "බු. ජ. ත්‍රි. - චුල්ලවග්ගපාලි - පාතිමොක්ඛට්ඨපනඛන්ධකය - පි. 434"
   }
  ],
  "cat": "uddesa",
  "cat_si": "ප්‍රාතිමෝක්ෂ උද්දේසය",
  "cat_en": "The Pātimokkha recital"
 },
 {
  "id": "keteyen-uposatha",
  "si": "කෙටියෙන් උපෝසථය",
  "en": "Brief Uposatha",
  "kind": "text",
  "count": null,
  "title_si": "කෙටියෙන් උපෝසථය කිරීමේ පිළිවෙළ",
  "title_en": "Brief Uposatha Procedure",
  "intro_si": "දස අන්තරාවන්ගෙන් යම් අන්තරාවක් ඇති විට කෙටියෙන් පොහොය කරන පිළිවෙළ.\n(දස අන්තරාවන් නම්: රජුගෙන් වන උවදුරෙක්, සොරුන්ගෙන් වන උවදුරෙක්, ගින්නෙන් වන උවදුරෙක්, දියෙන් වන උවදුරෙක්, මිනිසුන්ගෙන් වන උවදුරෙක්, අමනුෂ්‍යයන්ගෙන් වන උවදුරෙක්, චණ්ඩමෘගයන්ගෙන් වන උවදුරෙක්, සර්පයන්ගෙන් වන උවදුරෙක්, ජීවිතයට විය හැකි උවදුරෙක් හෝ මහණදමට විය හැකි උවදුරෙක් ය.)",
  "intro_en": "The procedure for holding the Uposatha briefly when one of the ten dangers is present.\n(The ten dangers are: danger from kings, from thieves, from fire, from water, from humans, from non-humans, from wild beasts, from snakes, danger to life, or danger to the holy life.)",
  "note_si": "සැ.යු:- නිදානය සහ පාරාජිකා ධර්ම උදෙසීමෙන් අනතුරුව ඉහත පරිදි උදෙසිය යුතු ය.",
  "note_en": "Note: After reciting the Introduction and the Pārājika rules, the remainder is to be recited as above.",
  "parts": [
   {
    "pali": "උද්දිට්ඨං ඛො ආයස්මන්තො නිදානං. උද්දිට්ඨා චත්තාරො පාරාජිකා ධම්මා. සුතා ඛො පනායස්මන්තෙහි තෙරස සඞ්ඝාදිසෙසා ධම්මා. සුතා ඛො පනායස්මන්තෙහි ද්වෙ අනියතා ධම්මා. සුතා ඛො පනායස්මන්තෙහි තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා. සුතා ඛො පනායස්මන්තෙහි ද්වෙ නවුති පාචිත්තියා ධම්මා. සුතා ඛො පනායස්මන්තෙහි චත්තාරො පාටිදෙසනීයා ධම්මා. සුතා ඛො පනායස්මන්තෙහි සෙඛියා ධම්මා. සුතා ඛො පනායස්මන්තෙහි සත්ත අධිකරණසමථා ධම්මා.\n\nතත්ථායස්මන්තෙ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තො තස්මා තුණ්හී, එවමෙතං ධාරයාමීති.\n\nඑත්තකං තස්ස භගවතො සුත්තාගතං සුත්තපරියාපන්නං අන්වද්ධමාසං උද්දෙසං ආගච්ඡති. තත්ථ සබ්බෙහෙව සමග්ගෙහි සම්මොදමානෙහි අවිවදමානෙහි සික්ඛිතබ්බන්ති.",
    "translit": "Uddiṭṭhaṃ kho āyasmanto nidānaṃ. Uddiṭṭhā cattāro pārājikā dhammā. Sutā kho panāyasmantehi terasa saṅghādisesā dhammā. Sutā kho panāyasmantehi dve aniyatā dhammā. Sutā kho panāyasmantehi tiṃsanissaggiyā pācittiyā dhammā. Sutā kho panāyasmantehi dve navuti pācittiyā dhammā. Sutā kho panāyasmantehi cattāro pāṭidesanīyā dhammā. Sutā kho panāyasmantehi sekhiyā dhammā. Sutā kho panāyasmantehi satta adhikaraṇasamathā dhammā.\n\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.\n\nEttakaṃ tassa bhagavato suttāgataṃ suttapariyāpannaṃ anvaddhamāsaṃ uddesaṃ āgacchati. Tattha sabbeheva samaggehi sammodamānehi avivadamānehi sikkhitabbanti.",
    "si": "ආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී. පාරාජිකා ඇවැත් සතර උදෙසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් සංඝාදිසේස ඇවැත් දහතුන අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් අනියත ඇවැත් දෙක අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් නිසඟි පචිති ඇවැත් තිහ අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් පචිති ඇවැත් අනූදෙක අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් පාටිදේසනීය ඇවැත් සතර අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් සේඛියා ඇවැත් අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් අධිකරණසමථ සත අසන ලද්දාහු ය.\n\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධය හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි\n\nඒ භාග්‍යවතුන් වහන්සේ ගේ සූත්‍රසංඛ්‍යාත භික්‍ෂු විභංගයෙහි ආවා වූ භික්‍ෂු විභංගයට ඇතුළත් වූ මෙතෙක් ශික්ෂා පද අඩමසක් පාසා උදෙසීමට පැමිණෙ යි. සමගි වූ, සතුටු වන විවාද නො කරන සැමදෙනා වහන්සේලා විසින් ම එහි ලා හික්මිය යුතු යි.",
    "en": "Venerables, the Introduction has been recited. The four Pārājika rules have been recited. The thirteen Saṅghādisesa rules have been heard by the venerables. The two Aniyata rules have been heard by the venerables. The thirty Nissaggiya Pācittiya rules have been heard by the venerables. The ninety-two Pācittiya rules have been heard by the venerables. The four Pāṭidesanīya rules have been heard by the venerables. The Sekhiya rules have been heard by the venerables. The seven rules for settling disputes have been heard by the venerables.\n\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this? The venerables are pure in this, therefore they are silent. Thus do I hold it.\n\nThis much of the Blessed One's teaching, handed down in the discourses and included in the discourses, comes up for recitation every half-month. All should train in it in harmony, with mutual appreciation, without quarrelling."
   },
   {
    "pali": "",
    "translit": "",
    "si": "කෙටියෙන් උපෝසථය අවසන් ය.\nසාදූ ! සාදූ !! සාදූ !!!",
    "en": "The brief Uposatha is finished.\nSādhu! Sādhu!! Sādhu!!!",
    "role": "end"
   }
  ],
  "cat": "uposatha",
  "cat_si": "උපෝසථ ආශ්‍රිත විධි",
  "cat_en": "Related Uposatha procedures"
 },
 {
  "id": "parisuddhi-uposatha",
  "si": "පාරිසුද්ධි උපෝසථය",
  "en": "Pārisuddhi Uposatha",
  "kind": "text",
  "count": null,
  "title_si": "පාරිසුද්ධි උපෝසථය කිරීමේ පිළිවෙළ",
  "title_en": "Pārisuddhi Uposatha Procedure",
  "intro_si": "පාරිසුද්ධි උපෝසථය — පිරිසිදු බව සඳහා වූ පොහොය කිරීම.",
  "intro_en": "The Pārisuddhi Uposatha — an Uposatha held for the sake of purity.",
  "parts": [
   {
    "pali": "\"සුණන්තු මෙ ආයස්මන්තා අජ්ජුපොසථො (පණ්ණරසො/ චාතුද්දසො). යදායස්මන්තානං පත්තකල්ලං මයං අඤ්ඤමඤ්ඤං පාරිසුද්ධිඋපොසථං කරෙය්‍යාම\"\n\n\"පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි, පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි, පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි\"\n\n\"පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ, පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ, පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ\"",
    "translit": "\"Suṇantu me āyasmantā ajjuposatho (paṇṇaraso/ cātuddaso). Yadāyasmantānaṃ pattakallaṃ mayaṃ aññamaññaṃ pārisuddhiuposathaṃ kareyyāma\"\n\n\"Parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi\"\n\n\"Parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha\"",
    "si": "පූර්ව කෘත්‍ය සිදු කොට ඇවැත් දේශනා කොට වර්ෂය, ඍතුව, පක්‍ෂය සඳහන් කිරීමෙන් අනතුරු ව ව්‍යක්ත වූ ප්‍රතිබල භික්‍ෂුවක් විසින් නමස්කාරය ප්‍රකාශ කොට ඤත්තිය තැබිය යුතු ය.\n\"ආයුෂ්මත්වරුනි, මාගේ කීම අසත්වා. අද පණ්ණරසී/ චාතුද්දසී පොහොය දිනයි. ආයුෂ්මත්වරුනි, ඔබට කාලය පැමිණියේ නම්, අපි එකිනෙකා පාරිසුද්ධි උපෝසථය කරමු.\"\nඉන්පසු වැඩිහිටි භික්‍ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\"\nයැයි ප්‍රකාශ කළ යුතු ය.\nඉන්පසු වැඩිහිටි පිළිවෙළින් අනෙක් භික්‍ෂූන් වහන්සේලා දෙනම විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\"\nයැයි ප්‍රකාශ කළ යුතු ය.",
    "en": "After the preliminary duties, after confessing offences and stating the year, season and fortnight, a competent and capable monk, having paid homage, makes the motion:\n\"Venerables, hear me. Today is the Uposatha of the fifteenth (fourteenth). If it is the right time for the venerables, let us hold the Pārisuddhi Uposatha with one another.\"\nThen the senior monk, squatting with joined palms, pays homage three times and says:\n\"Friend, I am pure. Please remember me as pure. Friend, I am pure. Please remember me as pure. Friend, I am pure. Please remember me as pure.\"\nThen the other two monks, in order of seniority, squatting with joined palms, pay homage three times and say:\n\"Venerable sir, I am pure. Please remember me as pure. Venerable sir, I am pure. Please remember me as pure. Venerable sir, I am pure. Please remember me as pure.\"",
    "title_si": "භික්‍ෂූන් වහන්සේලා තුන් නමක් වූ විට",
    "title_en": "When there are three monks",
    "notes_pali": [
     {
      "at": "ධාරෙහි",
      "note": "ඇතැම් පොත්වල ධාරෙථ"
     }
    ],
    "notes_si": [
     {
      "at": "කෘත්‍ය",
      "note": "පොහොය කිරීමට පෙර කළ යුතු \"සීමාව\" හැමදීම් ආදී කටයුතු."
     }
    ]
   },
   {
    "pali": "\"පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි, පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි, පරිසුද්ධො අහං ආවුසො! පරිසුද්ධොති මං ධාරෙහි\"\n\"පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ, පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ, පරිසුද්ධො අහං භන්තෙ! පරිසුද්ධොති මං ධාරෙථ\"",
    "translit": "\"Parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi\"\n\"Parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha\"",
    "si": "පූර්ව කෘත්‍ය සිදු කොට ඇවැත් දේශනා කොට වර්ෂය, ඍතුව, පක්‍ෂය සඳහන් කිරීමෙන් අනතුරු ව වැඩිහිටි භික්‍ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\" (තුන් වරක්)\nයැයි ප්‍රකාශ කළ යුතු ය.\nඉන්පසු නවක භික්‍ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\" (තුන් වරක්)\nයැයි ප්‍රකාශ කළ යුතු ය.",
    "en": "After the preliminary duties, confession of offences and stating the year, season and fortnight, the senior monk, squatting with joined palms, pays homage three times and says:\n\"Friend, I am pure. Please remember me as pure.\" (three times)\nThen the junior monk, squatting with joined palms, pays homage three times and says:\n\"Venerable sir, I am pure. Please remember me as pure.\" (three times)",
    "title_si": "භික්‍ෂූන් වහන්සේලා දෙනමක් වූ විට",
    "title_en": "When there are two monks"
   },
   {
    "pali": "\"අජ්ජ මෙ උපොසථො පණ්ණරසො\" (චාතුද්දසො)",
    "translit": "\"Ajja me uposatho paṇṇaraso\" (cātuddaso)",
    "si": "උපෝසථය කරන දිනයේ දී ආවාසයේ සිටිනුයේ එක් භික්‍ෂුවක් නම් මෙහි දී ඒ භික්‍ෂුව විසින් සාමාන්‍යයෙන් උපෝසථය කරන ස්ථානය ඇමද පැන් හා පරිභෝගයට ගන්නා දිය එළවා අසුන් පනවා පහන් දල්වා හිඳිය යුතු ය. ඉදින් අන් මහණහු එහි එත් ද, ඔවුන් සමග පොහොය කළ යුතු ය. ඉදින් නො එත් නම් වැඳ නමස්කාරය ප්‍රකාශ කොට වර්ෂය, ඍතුව, පක්‍ෂය සලකාගෙන, පසළොස්වක හෝ තුදුස්වක දිනයක් නම්;\n\"අද මේ පොහොය දිනය පසළොස්වක/ තුදුස්වක\"\nයි අධිෂ්ඨානය කළ යුතු ය.",
    "en": "If only one monk is residing in the dwelling on the Uposatha day, he should sweep the usual Uposatha place, set out drinking water and water for use, spread seats and light a lamp, and wait. If other monks arrive, he should hold the Uposatha with them. If not, he pays homage, notes the year, season and fortnight, and if it is the fifteenth or fourteenth day, he resolves:\n\"Today is my Uposatha, the fifteenth (fourteenth).\"",
    "title_si": "එක් භික්‍ෂුවක් වූ විට (අධිෂ්ඨාන උපෝසථය)",
    "title_en": "When there is only one monk (the resolve-Uposatha)"
   }
  ],
  "cat": "uposatha",
  "cat_si": "උපෝසථ ආශ්‍රිත විධි",
  "cat_en": "Related Uposatha procedures"
 },
 {
  "id": "vas-adhitthana",
  "si": "වස් අධිෂ්ඨානය",
  "en": "Vassa Resolve",
  "kind": "text",
  "count": null,
  "title_si": "වස් අධිෂ්ඨානය කිරීම",
  "title_en": "Resolving the Rains Retreat (Vassa)",
  "intro_si": "වස් එළඹෙන දිනයෙහි විහාරය පිරිසිදු කොට පූර්ව කෘත්‍ය සිදු කොට උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;",
  "intro_en": "On the day the Rains Retreat begins, after cleaning the monastery and completing the preliminary duties, squat with joined palms, pay homage three times, and say three times:",
  "parts": [
   {
    "pali": "\"ඉමස්මිං විහාරෙ ඉමං තෙමාසං වස්සං උපෙමි. ඉධ වස්සං උපෙමි\"\n\n\"සචෙ මෙ කොචි අන්තරායො න භවිස්සති සත්තාහබ්භන්තරෙ පුන නිවත්තිස්සාමි\"",
    "translit": "\"Imasmiṃ vihāre imaṃ temāsaṃ vassaṃ upemi. Idha vassaṃ upemi\"\n\n\"Sace me koci antarāyo na bhavissati sattāhabbhantare puna nivattissāmi\"",
    "si": "\"මේ විහාරයෙහි මේ තෙමස වස් එළඹෙමි. මෙහි වස් එළඹෙමි\"\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.\n\nවස් අධිෂ්ඨානය කළ භික්‍ෂුවක් යම් හෙයකින් වස් විසූ ආවාසයෙන් යම් කරුණක් නිසා පිටත් ව යන්නේ නම් නැවත සත් දිනක් ඇතුළත පැමිණෙමි යි මෙසේ අධිෂ්ඨාන කළ යුතු ය.\nඉදින් යම් කිසි අනතුරක් නො වුණේ නම් සත්වන දින අරුණට පළමු නැවත පැමිණෙමි.",
    "en": "\"In this monastery I enter the Rains Retreat for these three months. Here I enter the Rains Retreat.\"\nThis is to be said three times.\n\nIf a monk who has resolved the Rains Retreat must leave the dwelling for some reason, he resolves to return within seven days:\n\"If there is no obstacle, I shall return before dawn on the seventh day.\""
   }
  ],
  "cat": "uposatha",
  "cat_si": "උපෝසථ ආශ්‍රිත විධි",
  "cat_en": "Related Uposatha procedures"
 },
 {
  "id": "pavarana-pubbakarana",
  "si": "පවාරණපුබ්බකරණ",
  "en": "Pavāraṇā Preliminaries",
  "title_si": "පවාරණපුබ්බකරණාදි විධි",
  "title_en": "Preliminary Procedures for the Pavāraṇā",
  "kind": "text",
  "parts": [
   {
    "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස!!!",
    "translit": "Namo tassa bhagavato arahato sammā sambuddhassa!!!",
    "si": "ඒ භාග්‍යවත් අර්හත් සම්මා සම්බුදුරජාණන් වහන්සේට නමස්කාර වේවා!!!",
    "en": "Homage to the Blessed One, the Worthy One, the Perfectly Self-awakened One!"
   },
   {
    "pali": "විනය පුච්ඡා සම්මුති:-\nසුණාතු මෙ භන්තෙ සඞ්ඝො, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මන්තං....(ථෙරං/භික්ඛුං) විනයං පුච්ඡෙය්‍යං.",
    "translit": "Vinaya pucchā sammuti:-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmantaṃ....(Theraṃ/bhikkhuṃ) vinayaṃ puccheyyaṃ.",
    "si": "විනය ප්‍රශ්න විචාරීමේ සම්මුතිය:-\nස්වාමීනි! සංඝ තෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේගෙන්/ භික්‍ෂුවගෙන්) විනය විචාරන්නෙමි.",
    "en": "Consent to question on the Vinaya:\nVenerable sirs, may the Saṅgha listen to me. If it is the right time for the Saṅgha, I would question the Venerable … (the elder / the monk) on the Vinaya."
   },
   {
    "pali": "විනය විස්සජ්ජන සම්මුති:-\nසුණාතු මෙ භන්තෙ සඞ්ඝො, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මතා.... (ථෙරෙන /භික්ඛුනා) විනයං පුට්ඨො විස්සජ්ජෙය්‍යං.",
    "translit": "Vinaya vissajjana sammuti:-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmatā.... (Therena /bhikkhunā) vinayaṃ puṭṭho vissajjeyyaṃ.",
    "si": "විනය ප්‍රශ්න වලට පිළිතුරු ලබාදීමේ සම්මුතිය:-\nස්වාමීනි! සංඝ තෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේ විසින්/භික්‍ෂුව විසින්) විනය විමසන ලද්දේ විසඳන්නෙමි.",
    "en": "Consent to answer on the Vinaya:\nVenerable sirs, may the Saṅgha listen to me. If it is the right time for the Saṅgha, being questioned on the Vinaya by the Venerable … (the elder / the monk), I would answer."
   },
   {
    "pali": "පුච්ඡා:-\nසම්මජ්ජනී පදීපො ච - උදකං ආසනෙන ච\nපවාරණාය එතානි - පුබ්බකරණන්ති වුච්චති.\nඔකාස! සම්මජ්ජනී සම්මජ්ජනකරණං කතං කිං?\nවිස්සජ්ජන:-\nසම්මජ්ජනකරණං නිට්ඨිතං.",
    "translit": "Pucchā:-\nSammajjanī padīpo ca - udakaṃ āsanena ca\nPavāraṇāya etāni - pubbakaraṇanti vuccati.\nOkāsa! Sammajjanī sammajjanakaraṇaṃ kataṃ kiṃ?\nVissajjana:-\nSammajjanakaraṇaṃ niṭṭhitaṃ.",
    "si": "ප්‍රශ්න විචාරීම:-\nඇමදීම ද, පහන් දැල්වීම ද, ආසන පැනවීම සමග පැන් තැබීම ද යන ඒවා පවාරණයෙහි පූර්වකරණ යැයි කියනු ලැබේ. අවසරයි! ඇමදීම, කෙසේ ද? ඇමදීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඇමදීම නිමා කරන ලදී.",
    "en": "Question:\nSweeping, a lamp, and water together with seats — these are called the preliminary duties (pubbakaraṇa) of the Pavāraṇā. Permission, sirs! Sweeping: has the sweeping been done?\nAnswer:\nThe sweeping has been completed."
   },
   {
    "pali": "පුච්ඡා:-\nපදීපො ච, පදීපුජ්ජලනං කතං කිං?\nවිස්සජ්ජන:-\nපදීපුජ්ජලනං නිට්ඨිතං/ ඉදානි පන සුරියාලොකස්ස අත්ථිතාය පදීපකිච්චං ඉධ නත්ථි.",
    "translit": "Pucchā:-\nPadīpo ca, padīpujjalanaṃ kataṃ kiṃ?\nVissajjana:-\nPadīpujjalanaṃ niṭṭhitaṃ/ idāni pana suriyālokassa atthitāya padīpakiccaṃ idha natthi.",
    "si": "ප්‍රශ්න විචාරීම:-\nපහන් දැල්වීම, කෙසේ ද? පහන් දැල්වීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nපහන් දැල්වීම සිදු කරන ලදී./ දැන් සූර්යාලෝකය ඇති බැවින් පහන් දැල්වීමක් මෙහි නොමැත.",
    "en": "Question:\nThe lamp: has the lighting of the lamp been done?\nAnswer:\nThe lighting of the lamp has been completed. / Now, since there is daylight, there is no need for a lamp here."
   },
   {
    "pali": "පුච්ඡා:-\nඋදකං ආසනෙන ච, ආසනෙන සහ පානීයපරිභොජනීයඋදකට්ඨපනං කතං කිං?\nවිස්සජ්ජන:-\nආසනෙන සහ පානීයපරිභොජනීයඋදකට්ඨපනං නිට්ඨිතං.",
    "translit": "Pucchā:-\nUdakaṃ āsanena ca, āsanena saha pānīyaparibhojanīyaudakaṭṭhapanaṃ kataṃ kiṃ?\nVissajjana:-\nĀsanena saha pānīyaparibhojanīyaudakaṭṭhapanaṃ niṭṭhitaṃ.",
    "si": "ප්‍රශ්න විචාරීම:-\nඅසුන් පැනවීම සමග පැන් තැබීම, කෙසේ ද? ආසන පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඅසුන් පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම නිමා කරන ලදී.",
    "en": "Question:\nWater and seats: has the placing of drinking and washing water, together with the seats, been done?\nAnswer:\nThe placing of drinking and washing water together with the seats has been completed."
   },
   {
    "pali": "පුච්ඡා:-\nපවාරණාය එතානි පුබ්බකරණන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nඑතානි චත්තාරි වත්තානි සම්මජ්ජනකරණාදීනි සඞ්ඝසන්නිපාතතො පඨමං කත්තබ්බත්තා, පවාරණාය, පවාරණකම්මස්ස පුබ්බකරණන්ති වුච්චති. පුබ්බකරණානීති අක්ඛාතානි.",
    "translit": "Pucchā:-\nPavāraṇāya etāni pubbakaraṇanti vuccati kiṃ?\nVissajjana:-\nEtāni cattāri vattāni sammajjanakaraṇādīni saṅghasannipātato paṭhamaṃ kattabbattā, pavāraṇāya, pavāraṇakammassa pubbakaraṇanti vuccati. Pubbakaraṇānīti akkhātāni.",
    "si": "ප්‍රශ්න විචාරීම:-\nකුමක් නිසා ඒවා පවාරණයෙහි පූර්වකරණ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nපවාරණයෙහි ඇමදීම ආදී ඒ වත් සතර සංඝරත්නයේ පැමිණීමට පළමුව කළ යුතු බැවින් පවාරණය කර්මයේ පූර්වකරණය යැයි කියනු ලැබේ. පූර්වකරණ යැයි කියන ලද්දාහු වෙත්.",
    "en": "Question:\nWhy are these called the preliminary duties of the Pavāraṇā?\nAnswer:\nThese four duties, beginning with sweeping, must be done first, before the Saṅgha assembles; therefore they are called the preliminary duties of the Pavāraṇā act. They are declared to be “preliminary duties”."
   },
   {
    "pali": "පුච්ඡා:-\nඡන්දපවාරණා උතුක්ඛානං - භික්ඛුගණනා ච ඔවාදො,\nපවාරණාය එතානි - පුබ්බකිච්චන්ති වුච්චති.\nඡන්දපවාරණා, ඡන්දපවාරණාරහානං භික්ඛූනං ඡන්දපවාරණාහරණං කතං කිං?\nවිස්සජ්ජන:-\nඡන්දපවාරණාහරණං ඉධ නත්ථි./ ඡන්දපවාරණාහරණං නිට්ඨිතං.",
    "translit": "Pucchā:-\nChandapavāraṇā utukkhānaṃ - bhikkhugaṇanā ca ovādo,\nPavāraṇāya etāni - pubbakiccanti vuccati.\nChandapavāraṇā, chandapavāraṇārahānaṃ bhikkhūnaṃ chandapavāraṇāharaṇaṃ kataṃ kiṃ?\nVissajjana:-\nChandapavāraṇāharaṇaṃ idha natthi./ Chandapavāraṇāharaṇaṃ niṭṭhitaṃ.",
    "si": "ප්‍රශ්න විචාරීම:-\nඡන්ද පවාරණය ගෙන ඒම, ඍතුව කීම, භික්‍ෂූන් වහන්සේලා ගණන් කිරීම ද, අවවාද දීම ද යන ඒවා පවාරණයෙහි පූර්ව කෘත්‍ය යැයි කියනු ලැබේ. ඡන්ද පවාරණ, කෙසේ ද? ඡන්ද පවාරණ දීමට සුදුසු භික්‍ෂූන්ගේ ඡන්ද පවාරණ ගෙන ඒම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nඡන්ද පවාරණ ගෙන ඒමක් මෙහි නොමැත./ ඡන්ද පවාරණ ගෙන ඒම නිම කරන ලදී.",
    "en": "Question:\nConsent and pavāraṇā, the announcing of the seasons, the counting of the monks, and the exhortation — these are called the preliminary tasks (pubbakicca) of the Pavāraṇā. Consent and pavāraṇā: has the bringing of the consent and pavāraṇā of the monks entitled to give them been done?\nAnswer:\nThere is no bringing of consent and pavāraṇā here. / The bringing of consent and pavāraṇā has been completed."
   },
   {
    "pali": "පුච්ඡා:-\nඋතුක්ඛානං, හෙමන්තාදීනං තිණ්ණං උතූනං එත්තකං අතික්කන්තං, එත්තකං අවසිට්ඨන්ති. එවං උතු ආචික්ඛනං කතං කිං?\nවිස්සජ්ජන:-\nඋතුනීධ පන සාසනෙ හෙමන්තගිම්හවස්සානානං වසෙන තීණි හොන්ති. අයං වස්සාන උතු, අස්මිං උතුම්හි අට්ඨ උපොසථා, ඉමිනා පක්ඛෙන එකො උපොසථො සම්පත්තො පඤ්ච උපොසථා අතික්කන්තා ද්වෙ උපොසථා අවසිට්ඨා.",
    "translit": "Pucchā:-\nUtukkhānaṃ, hemantādīnaṃ tiṇṇaṃ utūnaṃ ettakaṃ atikkantaṃ, ettakaṃ avasiṭṭhanti. Evaṃ utu ācikkhanaṃ kataṃ kiṃ?\nVissajjana:-\nUtunīdha pana sāsane hemantagimhavassānānaṃ vasena tīṇi honti. Ayaṃ vassāna utu, asmiṃ utumhi aṭṭha uposathā, iminā pakkhena eko uposatho sampatto pañca uposathā atikkantā dve uposathā avasiṭṭhā.",
    "si": "ප්‍රශ්න විචාරීම:-\nඍතු කීම, කෙසේ ද? හේමන්ත ආදී ඍතු තුනට අනුව මෙ පමණක් ඉක්ම ගියේ, මෙ පමණක් ශේෂ වූයේ යැයි මෙසේ ඍතුව කීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nමේ ශාසනයෙහි හේමන්ත, ගිම්හාන, වස්සාන වශයෙන් ඍතු තුනක් වෙත්. මේ වස්සාන ඍතුවයි, මේ ඍතුවෙහි අටක් වූ උපෝසථයෝ වෙත්, මෙම පක්‍ෂයෙන් එක් පොහොයක් පැමිණියේ වෙයි. උපෝසථ පහක් ඉක්ම ගියහ. උපෝසථ දෙකක් ශේෂ වූහ.",
    "en": "Question:\nThe seasons: has the announcing of the seasons been done — that of the three seasons beginning with the winter, this much has passed and this much remains?\nAnswer:\nIn this Dispensation there are three seasons: winter, summer and the rains. This is the rainy season; in this season there are eight uposathas. With this fortnight one uposatha has arrived; five uposathas have passed and two uposathas remain."
   },
   {
    "pali": "පුච්ඡා:-\nභික්ඛුගණනා ච, ඉමස්මිං පවාරණග්ගෙ සන්නිපතිතානං භික්ඛූනං ගණනා, කිත්තකා භික්ඛූ හොන්ති?\nවිස්සජ්ජන:-\nඉමස්මිං පවාරණග්ගෙ සන්නිපතිතානං භික්ඛූනං ගණනා..... භික්ඛූ හොන්ති.",
    "translit": "Pucchā:-\nBhikkhugaṇanā ca, imasmiṃ pavāraṇagge sannipatitānaṃ bhikkhūnaṃ gaṇanā, kittakā bhikkhū honti?\nVissajjana:-\nImasmiṃ pavāraṇagge sannipatitānaṃ bhikkhūnaṃ gaṇanā..... Bhikkhū honti.",
    "si": "ප්‍රශ්න විචාරීම:-\nභික්‍ෂූන් ගණන් කිරීම, මෙම පවාරණ ගෙහි රැස්වූ භික්‍ෂූන්ගේ ගණනින් කොපමණ භික්‍ෂූහු වෙත් ද?\nපිළිතුරු ලබාදීම:-\nමෙම පවාරණ ගෙහි රැස්වූ භික්‍ෂූන්ගේ ගණනින් භික්‍ෂූන් වහන්සේලා ...... නමක් වෙත්.",
    "en": "Question:\nThe counting of the monks: of the monks assembled in this Pavāraṇā hall, how many monks are there?\nAnswer:\nOf the monks assembled in this Pavāraṇā hall the number is … monks."
   },
   {
    "pali": "පුච්ඡා:-\nඔවාදො, භික්ඛුණීනං ඔවාදො දාතබ්බො දින්නො කිං?\nවිස්සජ්ජන:-\nඉදානි පන තාසං නත්ථිතාය සො ච ඔවාදො ඉධ නත්ථි.",
    "translit": "Pucchā:-\nOvādo, bhikkhuṇīnaṃ ovādo dātabbo dinno kiṃ?\nVissajjana:-\nIdāni pana tāsaṃ natthitāya so ca ovādo idha natthi.",
    "si": "ප්‍රශ්න විචාරීම:-\nඅවවාද දීම, කෙසේ ද? කිම භික්‍ෂුණීන්ට දිය යුතු අවවාද දෙන ලද්දේ ද?\nපිළිතුරු ලබාදීම:-\nදැන් වනාහී අදාළ නොමැති බැවින් ඒ අවවාද දීමක් මෙහි නැත.",
    "en": "Question:\nThe exhortation: has the exhortation of the nuns, which is to be given, been given?\nAnswer:\nNow, because they are not present, that exhortation does not exist here."
   },
   {
    "pali": "පුච්ඡා:-\nපවාරණාය එතානි පුබ්බකිච්චන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nඑතානි පඤ්චකම්මානි ඡන්දාහරණාදීනි පවාරණාය ඤත්ති ඨපනතො පඨමං කත්තබ්බත්තා පවාරණාය, පවාරණකම්මස්ස පුබ්බකිච්චන්ති වුච්චති. පුබ්බකිච්චානීති අක්ඛාතානි.",
    "translit": "Pucchā:-\nPavāraṇāya etāni pubbakiccanti vuccati kiṃ?\nVissajjana:-\nEtāni pañcakammāni chandāharaṇādīni pavāraṇāya ñatti ṭhapanato paṭhamaṃ kattabbattā pavāraṇāya, pavāraṇakammassa pubbakiccanti vuccati. Pubbakiccānīti akkhātāni.",
    "si": "ප්‍රශ්න විචාරීම:-\nකුමක් නිසා ඒවා පවාරණයෙහි පූර්ව කෘත්‍ය යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nපවාරණයෙහි ඒ ඡන්දය රැගෙන ඒම ආදී ක්‍රියා පහ පවාරණය පිණිස ඥත්තිය තැබීමට පළමුව කළ යුතු බැවින්, පවාරණ කර්මයේ පූර්ව කෘත්‍ය යැයි කියනු ලැබේ. පූර්ව කෘත්‍යයෝ යැයි කියන ලද්දාහු වෙති.",
    "en": "Question:\nWhy are these called the preliminary tasks of the Pavāraṇā?\nAnswer:\nThese five acts, beginning with the bringing of consent, must be done first, before the motion for the Pavāraṇā is laid down; therefore they are called the preliminary tasks of the Pavāraṇā act. They are declared to be “preliminary tasks”."
   },
   {
    "pali": "පුච්ඡා:-\nපවාරණා යාවතිකා ච භික්ඛූ කම්මප්පත්තා සභාගාපත්තියො ච, න විජ්ජන්ති වජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති පත්තකල්ලන්ති වුච්චති. පවාරණා, තීසු පවාරණදිවසෙසු චාතුද්දසීපණ්ණරසීසාමග්ගීසු අජ්ජ පවාරණා කා පවාරණා?\nවිස්සජ්ජන:-\nඅජ්ජ පවාරණා පණ්ණරසී. (චාතුද්දසී)",
    "translit": "Pucchā:-\nPavāraṇā yāvatikā ca bhikkhū kammappattā sabhāgāpattiyo ca, na vijjanti vajjanīyā ca puggalā tasmiṃ na honti pattakallanti vuccati. Pavāraṇā, tīsu pavāraṇadivasesu cātuddasīpaṇṇarasīsāmaggīsu ajja pavāraṇā kā pavāraṇā?\nVissajjana:-\nAjja pavāraṇā paṇṇarasī. (Cātuddasī)",
    "si": "ප්‍රශ්න විචාරීම:-\nපවාරණ දිනය ද, පැමිණිය යුතු යම්තාක් භික්‍ෂූන් වහන්සේලා පවාරණ කර්මයට පැමිණියාහු ද, සමාන ඇවැත් කිසිවක් විද්‍යමාන නො වෙත් ද, බැහැර කළ යුතු පුද්ගලයන් පවාරණ ගෙයි නො වෙත් ද, එවිට එය පවාරණ කර්මයට පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ. පවාරණය; චාතුද්දසී, පණ්ණරසී, සාමග්‍රී යන උපෝසථ දින තුන අතුරින් අද පවාරණය කවර පවාරණයක් ද?\nපිළිතුරු ලබාදීම:-\nඅද පවාරණය පණ්ණරසී (චාතුද්දසී) පවාරණයකි.",
    "en": "Question:\nWhen the monks entitled to the act, as many as there are, are present, when no offences in common exist, and when the persons to be avoided are not present in it, it is called “the right time” (pattakalla). The Pavāraṇā: of the three Pavāraṇā days — the fourteenth, the fifteenth and the day of harmony (sāmaggī) — which Pavāraṇā is today’s Pavāraṇā?\nAnswer:\nToday’s Pavāraṇā is the fifteenth. (the fourteenth)"
   },
   {
    "pali": "පුච්ඡා:-\nයාවතිකා ච භික්ඛූ කම්මප්පත්තාති කිං?\nවිස්සජ්ජන:-\nයත්තකා භික්ඛූ තස්ස පවාරණකම්මස්ස, පත්තා යුත්තා අනුරූපා, සබ්බන්තිමෙන පරිච්ඡෙදෙන චත්තාරො භික්ඛූ පකතත්තා. සඞ්ඝෙන අනුක්ඛිත්තා, තෙ ච ඛො හත්ථපාසං අවිජහිත්වා එකසීමායං ඨිතා.",
    "translit": "Pucchā:-\nYāvatikā ca bhikkhū kammappattāti kiṃ?\nVissajjana:-\nYattakā bhikkhū tassa pavāraṇakammassa, pattā yuttā anurūpā, sabbantimena paricchedena cattāro bhikkhū pakatattā. Saṅghena anukkhittā, te ca kho hatthapāsaṃ avijahitvā ekasīmāyaṃ ṭhitā.",
    "si": "ප්‍රශ්න විචාරීම:-\nකිමෙක් ද? පැමිණිය යුතු යම්තාක් භික්‍ෂූන් වහන්සේලා පවාරණ කර්මයට පැමිණියාහූ ද?\nපිළිතුරු ලබාදීම:-\nයම් පමණ භික්‍ෂූන් වහන්සේලා ඒ පවාරණ කර්මයට පැමිණියාහූ ද, ඇතුළත් වූවාහූ ද, ගැළපුනාහූ ද, යටත් පිරිසෙයින් භික්‍ෂූන් වහන්සේලා සතර නමක්වත් ප්‍රකෘති භික්‍ෂූහූ ද වෙත්. සංඝරත්නය විසින් උක්ෂේපණීය කර්මය නො කරන ලද්දාහූ, ඒ භික්‍ෂූන් වහන්සේලා අත්පසින් බැහැර නො වී එක සීමාවක වැඩ සිටියාහූ වෙත්.",
    "en": "Question:\nWhat is meant by “as many monks as are entitled to the act”?\nAnswer:\nAs many monks as are suitable, proper and fitting for that Pavāraṇā act: at the very least four monks who are regular members (pakatatta) and have not been suspended by the Saṅgha, and who stand within one boundary without leaving each other’s arm’s reach."
   },
   {
    "pali": "පුච්ඡා:-\nසභාගාපත්තියො ච න විජ්ජන්ති කිං?\nවිස්සජ්ජන:-\nවිකාලභොජනාදී වත්ථුසභාගාපත්තියො ච න විජ්ජන්ති.",
    "translit": "Pucchā:-\nSabhāgāpattiyo ca na vijjanti kiṃ?\nVissajjana:-\nVikālabhojanādī vatthusabhāgāpattiyo ca na vijjanti.",
    "si": "ප්‍රශ්න විචාරීම:-\nකිමෙක් ද? සමාන ඇවැත් විද්‍යමාන නො වෙත් ද?\nපිළිතුරු ලබාදීම:-\nවිකාල භෝජන ආදී සමාන වස්තු සහිත ඇවැත් විද්‍යමාන නො වෙත්.",
    "en": "Question:\nAre there no offences in common?\nAnswer:\nNo offences in common arising from the same cause, such as eating at the wrong time, exist."
   },
   {
    "pali": "පුච්ඡා:-\nවජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති කිං?\nවිස්සජ්ජන:-\nගහට්ඨපණ්ඩකාදයො එකවීසති වජ්ජනීයපුග්ගලා හත්ථපාසතො බහිකරණවසෙන වජ්ජෙතබ්බා. තෙ අස්මිං න හොන්ති.",
    "translit": "Pucchā:-\nVajjanīyā ca puggalā tasmiṃ na honti kiṃ?\nVissajjana:-\nGahaṭṭhapaṇḍakādayo ekavīsati vajjanīyapuggalā hatthapāsato bahikaraṇavasena vajjetabbā. Te asmiṃ na honti.",
    "si": "ප්‍රශ්න විචාරීම:-\nකිමෙක් ද? බැහැර කළ යුතු පුද්ගලයින් පවාරණ ගෙයි නො වෙත් ද?\nපිළිතුරු ලබාදීම:-\nගිහි, පණ්ඩක ආදී එක් විසි වජ්ජනීය පුද්ගලයෝ අත්පසින් බැහැර කිරීම් වශයෙන් බැහැර කළ යුත්තාහු ය. ඔවුහු මෙහි නො වෙත්.",
    "en": "Question:\nAre the persons to be avoided not present in it?\nAnswer:\nThe twenty-one persons to be avoided, such as householders and paṇḍakas, are to be avoided by being sent beyond arm’s reach. They are not present here."
   },
   {
    "pali": "පුච්ඡා:-\nපත්තකල්ලන්ති වුච්චති කිං?\nවිස්සජ්ජන:-\nසඞ්ඝස්ස පවාරණකම්මං ඉමෙහි චතූහි ලක්ඛණෙහි සඞ්ගහිතං පත්තකල්ලන්ති වුච්චති. පත්තකාලවන්තන්ති අක්ඛාතං. පුබ්බකරණපුබ්බකිච්චානි සමාපෙත්වා දෙසිතාපත්තිකස්ස සමග්ගස්ස භික්ඛුසඞ්ඝස්ස අනුමතියා පවාරණාය පවාරණකම්මස්ස ඤත්තිං ඨපෙතුං ආරාධනං කරොමි.",
    "translit": "Pucchā:-\nPattakallanti vuccati kiṃ?\nVissajjana:-\nSaṅghassa pavāraṇakammaṃ imehi catūhi lakkhaṇehi saṅgahitaṃ pattakallanti vuccati. Pattakālavantanti akkhātaṃ. Pubbakaraṇapubbakiccāni samāpetvā desitāpattikassa samaggassa bhikkhusaṅghassa anumatiyā pavāraṇāya pavāraṇakammassa ñattiṃ ṭhapetuṃ ārādhanaṃ karomi.",
    "si": "ප්‍රශ්න විචාරීම:-\nකුමක් හෙයින් පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම:-\nසංඝයා වහන්සේලාගේ පවාරණ කර්මය මෙම ලක්ෂණ සතරින් සංග්‍රහ වූයේ පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ. පවාරණ කර්මය සඳහා සුදුසු කාලය පැමිණියේ යැයි කියන ලදී. පූර්වකරණ, පූර්ව කෘත්‍ය නිමා කොට දෙසන ලද ආපත්ති ඇති සමගි භික්‍ෂු සංඝයා වහන්සේලාගේ අනුමැතියෙන් පවාරණය පිණිස පවාරණ කර්මයාගේ ඥත්තිය තැබීමට ආරාධනා කරමි.",
    "en": "Question:\nWhat is called “the right time” (pattakalla)?\nAnswer:\nThe Saṅgha’s Pavāraṇā act, comprised of these four characteristics, is called “timely”; it is declared to be at its proper time. Having completed the preliminary duties and tasks, with the consent of the harmonious Saṅgha of monks whose offences have been confessed, I request permission to lay down the motion (ñatti) for the Pavāraṇā act of the Pavāraṇā."
   },
   {
    "pali": "සාධූ ! සාධූ !! සාධූ !!!\nපවාරණපුබ්බකරණාදි විධි සමත්තා.",
    "translit": "Sādhū ! Sādhū !! Sādhū !!!\nPavāraṇapubbakaraṇādi vidhi samattā.",
    "si": "සාදූ ! සාදූ !! සාදූ !!!\nපවාරණයෙහි පූර්වකරණ ආදී විධි සමාප්තයි.",
    "en": "Sādhu! Sādhu!! Sādhu!!!\nThe procedure of the preliminary duties of the Pavāraṇā is concluded.",
    "role": "end"
   }
  ],
  "cat": "pavarana",
  "cat_si": "පවාරණ විධි",
  "cat_en": "Pavāraṇā procedures"
 },
 {
  "id": "sangha-pavarana",
  "si": "සඞ්ඝ පවාරණ",
  "en": "Saṅgha Pavāraṇā",
  "title_si": "සඞ්ඝ පවාරණ විධි",
  "title_en": "Procedures for the Saṅgha Pavāraṇā",
  "kind": "text",
  "parts": [
   {
    "pali": "\"සුණාතු මෙ භන්තෙ! සඞ්ඝො. අජ්ජ පවාරණා (පණ්ණරසී/චාතුද්දසී) යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො පවාරෙය්‍ය.\"",
    "translit": "\"Suṇātu me bhante! Saṅgho. Ajja pavāraṇā (paṇṇarasī/cātuddasī) yadi saṅghassa pattakallaṃ saṅgho pavāreyya.\"",
    "si": "ආවාසයෙක එදවස පවාරණ දිනයෙහි පස් නමක් හෝ ඊට වැඩි භික්‍ෂූන් ප්‍රමාණයක් වැඩ සිටී නම් ව්‍යක්ත වූ ප්‍රතිබල භික්‍ෂුනමක් විසින් පවාරණ ඤත්තිය තැබිය යුතු ය. (මෙහි ඤත්තිය තැබූ කල්හි එක් වරක් හෝ දෙවරක් හෝ තෙවරක් හෝ කියා පවාරණය කළ හැකි ය.)\nයි ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable sirs, may the Saṅgha listen to me. Today is the Pavāraṇā (the fifteenth / the fourteenth). If it is the right time for the Saṅgha, let the Saṅgha hold the Pavāraṇā.\""
   },
   {
    "pali": "\"සඞ්ඝං ආවුසො! පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තො අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි ආවුසො! සඞ්ඝං පවාරෙමි.......\nතතියම්පි ආවුසො! සඞ්ඝං පවාරෙමි.......",
    "translit": "\"Saṅghaṃ āvuso! Pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmanto anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi āvuso! Saṅghaṃ pavāremi.......\nTatiyampi āvuso! Saṅghaṃ pavāremi.......",
    "si": "ඉන්පසු වැඩිමහල් භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවාචික පවාරණයේ දී ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Friends, I invite the Saṅgha (to speak of any fault of mine). On the ground of what has been seen, heard or suspected, let the venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, friends, I invite the Saṅgha…\nA third time, friends, I invite the Saṅgha…"
   },
   {
    "pali": "\"සඞ්ඝං භන්තෙ! පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තො අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි භන්තෙ! සඞ්ඝං පවාරෙමි.......\nතතියම්පි භන්තෙ! සඞ්ඝං පවාරෙමි.......",
    "translit": "\"Saṅghaṃ bhante! Pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmanto anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi bhante! Saṅghaṃ pavāremi.......\nTatiyampi bhante! Saṅghaṃ pavāremi.......",
    "si": "ඉන්පසු නවක භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවාචික පවාරණයේ දී ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable sirs, I invite the Saṅgha (to speak of any fault of mine). On the ground of what has been seen, heard or suspected, let the venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, venerable sirs, I invite the Saṅgha…\nA third time, venerable sirs, I invite the Saṅgha…"
   },
   {
    "pali": "\"සුණන්තු මෙ ආයස්මන්තො. අජ්ජ පවාරණා (පණ්ණරසී/චාතුද්දසී). යදායස්මන්තානං පත්තකල්ලං, මයං අඤ්ඤමඤ්ඤං පවාරෙය්‍යාම.\"",
    "translit": "\"Suṇantu me āyasmanto. Ajja pavāraṇā (paṇṇarasī/cātuddasī). Yadāyasmantānaṃ pattakallaṃ, mayaṃ aññamaññaṃ pavāreyyāma.\"",
    "si": "ආවාසයෙක එදවස පවාරණ දිනයෙහි සිවු නමක් භික්‍ෂූන් වැඩ සිටී නම් ව්‍යක්ත වූ ප්‍රතිබල භික්‍ෂුනම විසින් පවාරණ ඤත්තිය තැබිය යුතු ය.\nයි ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable ones, may you listen to me. Today is the Pavāraṇā (the fifteenth / the fourteenth). If it is the right time for the venerable ones, let us invite one another.\"",
    "title_si": "ගණ පවාරණය",
    "title_en": "Group (gaṇa) Pavāraṇā"
   },
   {
    "pali": "\"අහං ආවුසො! ආයස්මන්තෙ පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තො අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං ආවුසො! ආයස්මන්තෙ .......\nතතියම්පි අහං ආවුසො! ආයස්මන්තෙ .......",
    "translit": "\"Ahaṃ āvuso! Āyasmante pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmanto anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ āvuso! Āyasmante .......\nTatiyampi ahaṃ āvuso! Āyasmante .......",
    "si": "ඉන්පසු වැඩිමහල් භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Friends, I invite the venerable ones. On the ground of what has been seen, heard or suspected, let the venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, friends, I invite the venerable ones…\nA third time, friends, I invite the venerable ones…"
   },
   {
    "pali": "\"අහං භන්තෙ! ආයස්මන්තෙ පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තො අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං භන්තෙ! ආයස්මන්තෙ .......\nතතියම්පි අහං භන්තෙ! ආයස්මන්තෙ .......",
    "translit": "\"Ahaṃ bhante! Āyasmante pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmanto anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ bhante! Āyasmante .......\nTatiyampi ahaṃ bhante! Āyasmante .......",
    "si": "ඉන්පසු නවක භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable sirs, I invite the venerable ones. On the ground of what has been seen, heard or suspected, let the venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, venerable sirs, I invite the venerable ones…\nA third time, venerable sirs, I invite the venerable ones…"
   },
   {
    "pali": "\"සුණන්තු මෙ ආයස්මන්තා. අජ්ජ පවාරණා (පණ්ණරසී/චාතුද්දසී). යදායස්මන්තානං පත්තකල්ලං, මයං අඤ්ඤමඤ්ඤං පවාරෙය්‍යාම.\"",
    "translit": "\"Suṇantu me āyasmantā. Ajja pavāraṇā (paṇṇarasī/cātuddasī). Yadāyasmantānaṃ pattakallaṃ, mayaṃ aññamaññaṃ pavāreyyāma.\"",
    "si": "ආවාසයෙක එදවස පවාරණ දිනයෙහි තුන්නමක් භික්‍ෂූන් වැඩ සිටී නම් ව්‍යක්ත වූ ප්‍රතිබල භික්‍ෂුනම විසින් පවාරණ ඤත්තිය තැබිය යුතු ය.\nයි ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable ones (two), may you both listen to me. Today is the Pavāraṇā (the fifteenth / the fourteenth). If it is the right time for the venerable ones, let us invite one another.\"",
    "title_si": "තුන්නමක් වූ විට පවාරණය",
    "title_en": "Pavāraṇā when there are three monks"
   },
   {
    "pali": "\"අහං ආවුසො! ආයස්මන්තෙ පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තා අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං ආවුසො! ආයස්මන්තෙ .......\nතතියම්පි අහං ආවුසො! ආයස්මන්තෙ .......",
    "translit": "\"Ahaṃ āvuso! Āyasmante pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmantā anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ āvuso! Āyasmante .......\nTatiyampi ahaṃ āvuso! Āyasmante .......",
    "si": "ඉන්පසු වැඩිමහල් භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Friends, I invite the venerable ones. On the ground of what has been seen, heard or suspected, let you two venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, friends, I invite the venerable ones…\nA third time, friends, I invite the venerable ones…"
   },
   {
    "pali": "\"අහං භන්තෙ! ආයස්මන්තෙ පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදන්තු මං ආයස්මන්තා අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං භන්තෙ! ආයස්මන්තෙ .......\nතතියම්පි අහං භන්තෙ! ආයස්මන්තෙ .......",
    "translit": "\"Ahaṃ bhante! Āyasmante pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadantu maṃ āyasmantā anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ bhante! Āyasmante .......\nTatiyampi ahaṃ bhante! Āyasmante .......",
    "si": "ඉන්පසු නවක භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable sirs, I invite the venerable ones. On the ground of what has been seen, heard or suspected, let you two venerable ones speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, venerable sirs, I invite the venerable ones…\nA third time, venerable sirs, I invite the venerable ones…"
   },
   {
    "pali": "\"අහං ආවුසො! ආයස්මන්තං පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදතු මං ආයස්මා අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං ආවුසො! ආයස්මන්තං .......\nතතියම්පි අහං ආවුසො! ආයස්මන්තං .......",
    "translit": "\"Ahaṃ āvuso! Āyasmantaṃ pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadatu maṃ āyasmā anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ āvuso! Āyasmantaṃ .......\nTatiyampi ahaṃ āvuso! Āyasmantaṃ .......",
    "si": "ආවාසයෙක එදවස පවාරණ දිනයෙහි දෙනමක් භික්‍ෂූන් වැඩ සිටී නම් වැඩිමහල් භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Friends, I invite the venerable one. On the ground of what has been seen, heard or suspected, let the venerable one speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, friends, I invite the venerable one…\nA third time, friends, I invite the venerable one…",
    "title_si": "දෙනමක් වූ විට පවාරණය",
    "title_en": "Pavāraṇā when there are two monks"
   },
   {
    "pali": "\"අහං භන්තෙ! ආයස්මන්තං පවාරෙමි. දිට්ඨෙන වා සුතෙන වා පරිසඞ්කාය වා වදතු මං ආයස්මා අනුකම්පං උපාදාය. පස්සන්තො පටිකරිස්සාමි.\"\nදුතියම්පි අහං භන්තෙ! ආයස්මන්තං .......\nතතියම්පි අහං භන්තෙ! ආයස්මන්තං .......",
    "translit": "\"Ahaṃ bhante! Āyasmantaṃ pavāremi. Diṭṭhena vā sutena vā parisaṅkāya vā vadatu maṃ āyasmā anukampaṃ upādāya. Passanto paṭikarissāmi.\"\nDutiyampi ahaṃ bhante! Āyasmantaṃ .......\nTatiyampi ahaṃ bhante! Āyasmantaṃ .......",
    "si": "ඉන්පසු අනෙක් භික්‍ෂුනම විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට පවාරණය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"Venerable sir, I invite the venerable one. On the ground of what has been seen, heard or suspected, let the venerable one speak to me, out of compassion. Seeing it, I shall make amends.\"\nA second time, venerable sir, I invite the venerable one…\nA third time, venerable sir, I invite the venerable one…"
   },
   {
    "pali": "\"අජ්ජ මෙ පවාරණා පණ්ණරසී\" (චාතුද්දසී)",
    "translit": "\"Ajja me pavāraṇā paṇṇarasī\" (cātuddasī)",
    "si": "ආවාසයෙක එදවස පවාරණ දිනයෙහි එක් නමක් වැඩ සිටී නම් ඒ භික්‍ෂුනම විසින් භික්‍ෂූහු උපස්ථාන ශාලාවක හෝ මණ්ඩපයෙක හෝ රුක්මුලෙක හෝ යම් තැනෙක රැස්වෙත් ද, ඒ පෙදෙස හැමද පැන් එළවා තබා අසුන් පණවා පහන් දල්වා හිඳිය යුතු ය. වෙනත් භික්‍ෂූහු එත් නම්, ඔවුන් සමග පැවරිය යුතු ය. ඉදින් නො එත් නම් වැඳ නමස්කාරය ප්‍රකාශ කොට වර්ෂය, ඍතුව, පක්‍ෂය සලකාගෙන, පසළොස්වක හෝ තුදුස්වක දිනයක් නම්;\nයි අධිෂ්ඨානය කළ යුතු ය.",
    "en": "\"Today is my Pavāraṇā, the fifteenth\" (the fourteenth)",
    "title_si": "එක්නමක් වූ විට පවාරණය",
    "title_en": "Pavāraṇā when there is one monk"
   }
  ],
  "cat": "pavarana",
  "cat_si": "පවාරණ විධි",
  "cat_en": "Pavāraṇā procedures"
 },
 {
  "id": "kathinatthara",
  "si": "කඨිනත්ථරණය",
  "en": "Kaṭhina Spreading",
  "title_si": "කඨිනත්ථරණය",
  "title_en": "Spreading the Kaṭhina",
  "kind": "text",
  "parts": [
   {
    "pali": "\"ඉමං කඨිනදුස්සං භික්ඛුසඞ්ඝස්ස දෙම.\"",
    "translit": "\"Imaṃ kaṭhinadussaṃ bhikkhusaṅghassa dema.\"",
    "si": "දායකයන් විසින් කඨින දුස්සය (වස්ත්‍රය)/ කඨින සිවුර අත්ලෙහි තබාගෙන තුන් වතාවක් නමස්කාරය කීම. ඉන්පසු උපසපන් භික්‍ෂුවක් විසින් වාක්‍ය කියවිය යුතු ය.",
    "en": "\"We give this kaṭhina cloth to the Saṅgha of monks.\"",
    "title_si": "කඨින සිවුර සාංඝික කිරීම",
    "title_en": "Making the kaṭhina cloth the Saṅgha’s property"
   },
   {
    "pali": "\"ඉමං කඨිනචීවරං භික්ඛුසඞ්ඝස්ස දෙම.\"",
    "translit": "\"Imaṃ kaṭhinacīvaraṃ bhikkhusaṅghassa dema.\"",
    "si": "හෝ ගෙනෙන්නේ චීවරයක් නම්;\nයැයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"We give this kaṭhina robe to the Saṅgha of monks.\""
   },
   {
    "pali": "\"සුණාතු මෙ භන්තෙ සඞ්ඝො, ඉදං සඞ්ඝස්ස කඨිනචීවරං/කඨිනදුස්සං උප්පන්නං, යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො, ඉමං කඨිනචීවරං/කඨිනදුස්සං (නාගස්ස) භික්ඛුනො දදෙය්‍ය කඨිනං අත්ථරිතුං එසා ඤත්ති.\"\n\"සුණාතු මෙ භන්තෙ සඞ්ඝො, ඉදං සඞ්ඝස්ස කඨිනචීවරං/කඨිනදුස්සං උප්පන්නං, සඞ්ඝො, ඉමං කඨිනචීවරං/කඨිනදුස්සං (නාගස්ස) භික්ඛුනො දෙති කඨිනං අත්ථරිතුං. යස්සායස්මතො ඛමති ඉමස්ස කඨිනචීවරස්ස/කඨිනදුස්සස්ස (නාගස්ස) භික්ඛුනො දානං කඨිනං අත්ථරිතුං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\"\n\"දින්නං ඉදං සඞ්ඝෙන කඨිනචීවරං/ කඨිනදුස්සං (නාගස්ස) භික්ඛුනො කඨිනං අත්ථරිතුං ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.\"",
    "translit": "\"Suṇātu me bhante saṅgho, idaṃ saṅghassa kaṭhinacīvaraṃ/kaṭhinadussaṃ uppannaṃ, yadi saṅghassa pattakallaṃ, saṅgho, imaṃ kaṭhinacīvaraṃ/kaṭhinadussaṃ (nāgassa) bhikkhuno dadeyya kaṭhinaṃ attharituṃ esā ñatti.\"\n\"Suṇātu me bhante saṅgho, idaṃ saṅghassa kaṭhinacīvaraṃ/kaṭhinadussaṃ uppannaṃ, saṅgho, imaṃ kaṭhinacīvaraṃ/kaṭhinadussaṃ (nāgassa) bhikkhuno deti kaṭhinaṃ attharituṃ. Yassāyasmato khamati imassa kaṭhinacīvarassa/kaṭhinadussassa (nāgassa) bhikkhuno dānaṃ kaṭhinaṃ attharituṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\"\n\"Dinnaṃ idaṃ saṅghena kaṭhinacīvaraṃ/ kaṭhinadussaṃ (nāgassa) bhikkhuno kaṭhinaṃ attharituṃ khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.\"",
    "si": "තුන් වතාවක් නමස්කාරය කියා කර්ම වාක්‍ය කීම; සැ.යු:- \"නාගස්ස\" යන තැනට කඨින චීවර ලබන භික්‍ෂුවගේ නම යොදා කියනු මැනවි. මෙහි දී වස්ත්‍රයක් නම් \"චීවරං\" වෙනුවට \"දුස්සං\" යනුවෙන් යෙදිය යුතු ය.",
    "en": "\"Venerable sirs, may the Saṅgha listen to me. This kaṭhina robe / kaṭhina cloth has come to the Saṅgha. If it is the right time for the Saṅgha, let the Saṅgha give this kaṭhina robe / kaṭhina cloth to the monk (Nāga) for spreading the kaṭhina. This is the motion.\"\n\"Venerable sirs, may the Saṅgha listen to me. This kaṭhina robe / kaṭhina cloth has come to the Saṅgha. The Saṅgha gives this kaṭhina robe / kaṭhina cloth to the monk (Nāga) for spreading the kaṭhina. Whichever venerable one approves the giving of this kaṭhina robe / kaṭhina cloth to the monk (Nāga) for spreading the kaṭhina, let him be silent. Whoever does not approve, let him speak.\"\n\"This kaṭhina robe / kaṭhina cloth has been given by the Saṅgha to the monk (Nāga) for spreading the kaṭhina. The Saṅgha approves; therefore it is silent. Thus I hold this.\"",
    "title_si": "කඨින චීවරය පැවරීමේ කර්ම වාක්‍ය",
    "title_en": "Kamma-vācā for conferring the kaṭhina robe"
   },
   {
    "pali": "\"ඉමාය සඞ්ඝාටියා කඨිනං අත්ථරාමි.\"",
    "translit": "\"Imāya saṅghāṭiyā kaṭhinaṃ attharāmi.\"",
    "si": "දායකයන් විසින් දුන් කඨින දුස්සය (වස්ත්‍රය) ඒ දවස ම සෝදා, පිරිමැද (රැලි හැර), කඩ අතු බෙදා සිඳ, ගණ්ඨිපාස, ජඞ්ඝෙය්‍ය, ගීවෙය්‍ය ආදියෙන් පිරිපුන් සිවුරක් කොට මසා පඬු පොවා කප්බිංදු තබා කඨිනය ඇතිරිය යුතු ය. ඉදින් දෙපට සිවුරක් (සඞ්ඝාටිය) මසා ගත්තේ නම් පුරාණ අධිෂ්ඨාන කළ දෙපට සිවුර පච්චුද්ධරණය කළ යුතු ය. නව දෙපට සිවුර සඞ්ඝාටිය ලෙස අධිෂ්ඨාන කළ යුතු ය. (අධිෂ්ඨානය සහ පච්චුද්ධරණය කරන ආකාරය උපග්‍රන්ථයෙහි බලනු මැනවි. පි. 210-211)\n(මේ සඞ්ඝාටියෙන් කඨිනය අතුරමි යි) තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"With this saṅghāṭi (outer robe) I spread the kaṭhina.\"",
    "title_si": "කඨිනය ඇතිරීම",
    "title_en": "Spreading the kaṭhina"
   },
   {
    "pali": "\"ඉමිනා උත්තරාසඞ්ගෙන කඨිනං අත්ථරාමි.\"",
    "translit": "\"Iminā uttarāsaṅgena kaṭhinaṃ attharāmi.\"",
    "si": "ඉදින් තනිපට සිවුරක් (උත්තරාසඞ්ගය) මසා ගත්තේ නම් පුරාණ අධිෂ්ඨාන කළ තනිපට සිවුර පච්චුද්ධරණය කළ යුතු ය. නව තනිපට සිවුර උත්තරාසඞ්ගය ලෙස අධිෂ්ඨාන කළ යුතු ය.\n(මේ උත්තරාසඞ්ගයෙන් කඨිනය අතුරමි යි) තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"With this uttarāsaṅga (upper robe) I spread the kaṭhina.\""
   },
   {
    "pali": "\"ඉමිනා අන්තරවාසකෙන කඨිනං අත්ථරාමි.\"",
    "translit": "\"Iminā antaravāsakena kaṭhinaṃ attharāmi.\"",
    "si": "ඉදින් අඳන සිවුරක් (අන්තරවාසකය) මසා ගත්තේ නම් පුරාණ අධිෂ්ඨාන කළ අඳන සිවුර පච්චුද්ධරණය කළ යුතු ය. නව අඳන සිවුර අන්තරාවාසකය ලෙස අධිෂ්ඨාන කළ යුතු ය.\n(මේ අන්තරවාසකයෙන් කඨිනය අතුරමි යි) තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"With this antaravāsaka (lower robe) I spread the kaṭhina.\""
   },
   {
    "pali": "\"අත්ථතං (ආවුසො /භන්තෙ) සඞ්ඝස්ස කඨිනං. ධම්මිකො කඨිනත්ථාරො (අනුමොදාහි/අනුමොදථ).\"",
    "translit": "\"Atthataṃ (āvuso /bhante) saṅghassa kaṭhinaṃ. Dhammiko kaṭhinatthāro (anumodāhi/anumodatha).\"",
    "si": "කඨින චීවරය ලැබූ භික්‍ෂුව තමන් සමග එකට වස් විසූ ස්වාමීන් වහන්සේලාට අනුසස් අනුමෝදන් කළ යුතු ය. කඨින චීවරය ලැබූ භික්‍ෂුව සංඝයා වෙත එළඹ සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"The Saṅgha’s kaṭhina has been spread, (friend / venerable sir). The spreading of the kaṭhina accords with the Dhamma; (rejoice in it / rejoice in it, all of you).\"",
    "title_si": "කඨිනත්ථාරණ අනුමෝදනය",
    "title_en": "Rejoicing in the kaṭhina spreading"
   },
   {
    "pali": "\"අත්ථතං (ආවුසො /භන්තෙ) සඞ්ඝස්ස කඨිනං. ධම්මිකො කඨිනත්ථාරො (අනුමොදාමි/අනුමොදාම).\"",
    "translit": "\"Atthataṃ (āvuso /bhante) saṅghassa kaṭhinaṃ. Dhammiko kaṭhinatthāro (anumodāmi/anumodāma).\"",
    "si": "අනුසස් අනුමෝදන් වන සෙසු භික්‍ෂුව/ භික්‍ෂූන් වහන්සේලා විසින් සිවුර ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "\"The Saṅgha’s kaṭhina has been spread, (friend / venerable sir). The spreading of the kaṭhina accords with the Dhamma; (I rejoice in it / we rejoice in it).\""
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "sima",
  "si": "සීමා සම්මුති",
  "en": "Sīmā Procedures",
  "title_si": "සීමා සමූහනන, සීමා සම්මුති කර්ම වාක්‍ය",
  "title_en": "Abolishing and Establishing Boundaries (Sīmā): Kamma-vācā",
  "kind": "text",
  "parts": [
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. යො සො සඞ්ඝෙන තිචීවරෙන අවිප්පවාසො සම්මතො, යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො තං තිචීවරෙන අවිප්පවාසං සමූහනෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. යො සො සඞ්ඝෙන තිචීවරෙන අවිප්පවාසො සම්මතො. සඞ්ඝො තං තිචීවරෙන අවිප්පවාසං සමූහනති. යස්සායස්මතො ඛමති එතස්ස තිචීවරෙන අවිප්පවාසස්ස සමුග්ඝාතො, සො තුණ්හස්ස යස්ස නක්ඛමති. සො භාසෙය්‍ය.\nසමූහතො සො සඞ්ඝෙන තිචීවරෙන අවිප්පවාසො, ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Yo so saṅghena ticīvarena avippavāso sammato, yadi saṅghassa pattakallaṃ, saṅgho taṃ ticīvarena avippavāsaṃ samūhaneyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Yo so saṅghena ticīvarena avippavāso sammato. Saṅgho taṃ ticīvarena avippavāsaṃ samūhanati. Yassāyasmato khamati etassa ticīvarena avippavāsassa samugghāto, so tuṇhassa yassa nakkhamati. So bhāseyya.\nSamūhato so saṅghena ticīvarena avippavāso, khamati saṅghassa, tasmā tuṇhī evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. As for the non-separation from the three robes (ticīvarena avippavāsa) that was agreed upon by the Saṅgha: if it is the right time for the Saṅgha, let the Saṅgha abolish that non-separation from the three robes. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. As for the non-separation from the three robes that was agreed upon by the Saṅgha, the Saṅgha abolishes that non-separation from the three robes. Whichever venerable one approves the abolition of this non-separation from the three robes, let him be silent; whoever does not approve, let him speak.\nThat non-separation from the three robes has been abolished by the Saṅgha. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "තිචීවර අවිප්පවාස සීමා සමූහනනය",
    "title_en": "Abolishing the ticīvara-avippavāsa boundary"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. යා සා සඞ්ඝෙන සීමා සම්මතා සමානසංවාසා එකූපොසථා, යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො තං සීමං සමූහනෙය්‍ය සමානසංවාසං එකූපොසථං. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. යා සා සඞ්ඝෙන සීමා සම්මතා සමානසංවාසා එකූපොසථා, සඞ්ඝො තං සීමං සමූහනති සමානසංවාසං එකූපොසථං. යස්සායස්මතො ඛමති එතිස්සා සීමාය සමානසංවාසාය එකූපොසථාය සමුග්ඝාතො, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nසමූහතා සා සීමා සඞ්ඝෙන සමානසංවාසා එකූපොසථා, ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Yā sā saṅghena sīmā sammatā samānasaṃvāsā ekūposathā, yadi saṅghassa pattakallaṃ, saṅgho taṃ sīmaṃ samūhaneyya samānasaṃvāsaṃ ekūposathaṃ. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Yā sā saṅghena sīmā sammatā samānasaṃvāsā ekūposathā, saṅgho taṃ sīmaṃ samūhanati samānasaṃvāsaṃ ekūposathaṃ. Yassāyasmato khamati etissā sīmāya samānasaṃvāsāya ekūposathāya samugghāto, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nSamūhatā sā sīmā saṅghena samānasaṃvāsā ekūposathā, khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. As for the boundary (sīmā) that was agreed upon by the Saṅgha as one of common communion and a single Uposatha: if it is the right time for the Saṅgha, let the Saṅgha abolish that boundary of common communion and a single Uposatha. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. As for the boundary that was agreed upon by the Saṅgha as one of common communion and a single Uposatha, the Saṅgha abolishes that boundary of common communion and a single Uposatha. Whichever venerable one approves the abolition of this boundary of common communion and a single Uposatha, let him be silent. Whoever does not approve, let him speak.\nThat boundary of common communion and a single Uposatha has been abolished by the Saṅgha. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "සමානසංවාස සීමා සමූහනනය",
    "title_en": "Abolishing the samānasaṃvāsa boundary"
   },
   {
    "pali": "පුරත්ථිමාය දිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nපුරත්ථිමාය අනුදිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nදක්ඛිණාය දිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nදක්ඛිණාය අනුදිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nපච්ඡිමාය දිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nපච්ඡිමාය අනුදිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nඋත්තරාය දිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nඋත්තරාය අනුදිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.\nපුන පුරත්ථිමාය දිසාය කිං නිමිත්තං?\nපාසාණො භන්තෙ! එසො පාසාණො නිමිත්තං.",
    "translit": "Puratthimāya disāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nPuratthimāya anudisāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nDakkhiṇāya disāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nDakkhiṇāya anudisāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nPacchimāya disāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nPacchimāya anudisāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nUttarāya disāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nUttarāya anudisāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.\nPuna puratthimāya disāya kiṃ nimittaṃ?\nPāsāṇo bhante! Eso pāsāṇo nimittaṃ.",
    "si": "(නිමිති කීර්තනයෙන් පසු)",
    "en": "In the eastern direction, what is the marker (nimitta)?\nA rock, venerable sir. That rock is the marker.\nIn the south-eastern direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the southern direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the south-western direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the western direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the north-western direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the northern direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nIn the north-eastern direction, what is the marker?\nA rock, venerable sir. That rock is the marker.\nAgain, in the eastern direction, what is the marker?\nA rock, venerable sir. That rock is the marker.",
    "title_si": "සීමා සමූහනනයෙන් පසුව නිමිති කීර්තනය",
    "title_en": "Declaring the markers (nimitta) after the abolition"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. යාවතා සමන්තා නිමිත්තා කිත්තිතා, යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො එතෙහි නිමිත්තෙහි සීමං සම්මන්නෙය්‍ය, සමානසංවාසං එකූපොසථං. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. යාවතා සමන්තා නිමිත්තා කිත්තිතා, සඞ්ඝො එතෙහි නිමිත්තෙහි සීමං සම්මන්නති සමානසංවාසං එකූපොසථං. යස්සායස්මතො ඛමති එතෙහි නිමිත්තෙහි සීමාය සම්මුති සමානසංවාසාය එකූපොසථාය, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nසම්මතා සීමා සඞ්ඝෙන එතෙහි නිමිත්තෙහි සමානසංවාසා එකූපොසථා, ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Yāvatā samantā nimittā kittitā, yadi saṅghassa pattakallaṃ, saṅgho etehi nimittehi sīmaṃ sammanneyya, samānasaṃvāsaṃ ekūposathaṃ. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Yāvatā samantā nimittā kittitā, saṅgho etehi nimittehi sīmaṃ sammannati samānasaṃvāsaṃ ekūposathaṃ. Yassāyasmato khamati etehi nimittehi sīmāya sammuti samānasaṃvāsāya ekūposathāya, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nSammatā sīmā saṅghena etehi nimittehi samānasaṃvāsā ekūposathā, khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. As many markers as have been declared all around: if it is the right time for the Saṅgha, let the Saṅgha agree upon a boundary with these markers, as one of common communion and a single Uposatha. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. As many markers as have been declared all around, the Saṅgha agrees upon a boundary with these markers, as one of common communion and a single Uposatha. Whichever venerable one approves the agreement upon a boundary with these markers, as one of common communion and a single Uposatha, let him be silent. Whoever does not approve, let him speak.\nThe boundary has been agreed upon by the Saṅgha with these markers, as one of common communion and a single Uposatha. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "සමානසංවාස සීමා සම්මුති කර්ම වාක්‍ය",
    "title_en": "Kamma-vācā for establishing the samānasaṃvāsa boundary"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. යා සා සඞ්ඝෙන සීමා සම්මතා සමානසංවාසා එකූපොසථා, යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො තං සීමං තිචීවරෙන අවිප්පවාසං සම්මන්නෙය්‍ය ඨපෙත්වා ගාමඤ්ච ගාමූපචාරඤ්ච. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. යා සා සඞ්ඝෙන සීමා සම්මතා සමානසංවාසා එකූපොසථා, සඞ්ඝො තං සීමං තිචීවරෙන අවිප්පවාසං සම්මන්නති ඨපෙත්වා ගාමඤ්ච ගාමූපචාරඤ්ච. යස්සායස්මතො ඛමති එතිස්සා සීමාය තිචීවරෙන අවිප්පවාසාය සම්මුති ඨපෙත්වා ගාමඤ්ච ගාමූපචාරඤ්ච. සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nසම්මතා සා සීමා සඞ්ඝෙන තිචීවරෙන අවිප්පවාසා ඨපෙත්වා ගාමඤ්ච ගාමූපචාරඤ්ච. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Yā sā saṅghena sīmā sammatā samānasaṃvāsā ekūposathā, yadi saṅghassa pattakallaṃ, saṅgho taṃ sīmaṃ ticīvarena avippavāsaṃ sammanneyya ṭhapetvā gāmañca gāmūpacārañca. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Yā sā saṅghena sīmā sammatā samānasaṃvāsā ekūposathā, saṅgho taṃ sīmaṃ ticīvarena avippavāsaṃ sammannati ṭhapetvā gāmañca gāmūpacārañca. Yassāyasmato khamati etissā sīmāya ticīvarena avippavāsāya sammuti ṭhapetvā gāmañca gāmūpacārañca. So tuṇhassa. Yassa nakkhamati, so bhāseyya.\nSammatā sā sīmā saṅghena ticīvarena avippavāsā ṭhapetvā gāmañca gāmūpacārañca. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "සීමා සම්මතය නිමි.",
    "en": "Venerable sirs, may the Saṅgha listen to me. As for the boundary that was agreed upon by the Saṅgha as one of common communion and a single Uposatha: if it is the right time for the Saṅgha, let the Saṅgha agree upon that boundary as non-separation from the three robes, excepting the village and the village precinct. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. As for the boundary that was agreed upon by the Saṅgha as one of common communion and a single Uposatha, the Saṅgha agrees upon that boundary as non-separation from the three robes, excepting the village and the village precinct. Whichever venerable one approves the agreement upon this boundary as non-separation from the three robes, excepting the village and the village precinct, let him be silent. Whoever does not approve, let him speak.\nThat boundary has been agreed upon by the Saṅgha as non-separation from the three robes, excepting the village and the village precinct. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "තිචීවර අවිප්පවාස සීමා සම්මුති කර්ම වාක්‍ය",
    "title_en": "Kamma-vācā for establishing the ticīvara-avippavāsa boundary"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "apatti-apaticchanna",
  "si": "අපටිච්ඡන්න ආපත්ති",
  "en": "Unconcealed Offences",
  "title_si": "අපටිච්ඡන්න ආපත්ති",
  "title_en": "Unconcealed Offences (Mānatta and Rehabilitation)",
  "kind": "text",
  "note_si": "සැ.යු:- පිරිවෙස්, මානත්, අබ්භාන කර්ම වාක්‍ය සැකසීමේ දී ආපත්ති එකක්, දෙකක්, තුනක් සිදු වී ඇත්නම් පිළිවෙළින් එකං ආපත්ති ද්වෙ ආපත්තියො තිස්සො ආපත්තියො ලෙස ද තුනට වඩා වැඩි ආපත්ති සඳහා 'සම්බහුලා' ලෙස ද විනයධර භික්‍ෂුවකට පෙල අටුවා අනුව කර්ම වාක්‍ය සැකසිය හැකි ය.",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! සඞ්ඝං ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! සඞ්ඝං ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! Saṅghaṃ ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! Saṅghaṃ ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, ask the Saṅgha for six-night mānatta for those many unconcealed offences.\nVenerable sir, I … (as above). A second time, venerable sir, I [ask] the Saṅgha …\nVenerable sir, I … (as above). A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "අපටිච්ඡන්න මානත යාචනා වාක්‍ය",
    "notes_pali": [
     {
      "at": "අපටිච්ඡන්නායො.",
      "note": "ඇතැම් පොත්වල අප්පටිච්ඡන්නායො"
     }
    ],
    "title_en": "Request (yācanā): mānatta for unconcealed offences"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු -පෙ-\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu -pe-\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many unconcealed offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for those many unconcealed offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many unconcealed offences. The Saṅgha gives the monk (so-and-so) six-night mānatta for those many unconcealed offences. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for those many unconcealed offences, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen … (as above).\nA third time I state this matter. May the Saṅgha listen … (as above).\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for those many unconcealed offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "අපටිච්ඡන්න මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta for unconcealed offences"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "මානත ලබාගත් පසු සීමාවේ දී ම එය සමාදන් වී ආරෝචනය කළ යුතු ය.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදාන වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "යි තෙවරක් සංඝයාට ආරෝචනය කළ යුතු ය.",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many unconcealed offences. The Saṅgha gave me six-night mānatta for those many unconcealed offences. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "අපටිච්ඡන්න මානත ආරෝචන වාක්‍ය",
    "notes_pali": [
     {
      "at": "වෙදියාමහං",
      "note": "ඇතැම් පොත්වල වෙදයාමහං"
     },
     {
      "at": "වෙදියතීති",
      "note": "ඇතැම් පොත්වල වෙදයතීති"
     }
    ],
    "title_en": "Announcement (ārocana): mānatta for unconcealed offences"
   },
   {
    "pali": "මානත්තං නික්ඛිපාමි. වත්තං නික්ඛිපාමි.",
    "translit": "Mānattaṃ nikkhipāmi. Vattaṃ nikkhipāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I lay down the mānatta. I lay down the observance (vatta).",
    "title_si": "මානත නික්ෂේප කරන වාක්‍ය",
    "title_en": "Laying down the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many unconcealed offences. The Saṅgha gave me six-night mānatta for those many unconcealed offences. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna).\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "අපටිච්ඡන්න අබ්භාන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after unconcealed offences"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං අපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස. තස්මා තුණ්හී, එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ apaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa. Tasmā tuṇhī, evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves. Therefore it is silent. Thus I hold this.",
    "title_si": "අපටිච්ඡන්න අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after unconcealed offences"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "aggha-samodhana",
  "si": "අග්ඝසමෝධාන පරිවාසය",
  "en": "Aggha-samodhāna Probation",
  "title_si": "අග්ඝසමෝධාන පරිවාසය",
  "title_en": "Aggha-samodhāna Probation",
  "kind": "text",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො, තාසං අග්ඝෙන සමොධානපරිවාසං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ!....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo, tāsaṃ agghena samodhānaparivāsaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante!....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. I, venerable sir, ask the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days).\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "අග්ඝසමෝධාන පරිවාස යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): aggha-samodhāna probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො, තාසං අග්ඝෙන සමොධානපරිවාසස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නො සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො, තාසං අග්ඝෙන සමොධානපරිවාසො, ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo, tāsaṃ agghena samodhānaparivāsassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinno saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo, tāsaṃ agghena samodhānaparivāso, khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asks the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asks the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gives the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). Whichever venerable one approves the giving to the monk (so-and-so) of combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "අග්ඝසමෝධාන පරිවාස දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): aggha-samodhāna probation"
   },
   {
    "pali": "පරිවාසං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Parivāsaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "පිරිවෙස ගත්පසු සමාදන් වී සංඝයාට ආරෝචනය කළ යුතු වේ.\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the probation. I undertake the observance (vatta).",
    "title_si": "සමාදන් වන වාක්‍ය",
    "title_en": "Undertaking the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සොහං පරිවසාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. Sohaṃ parivasāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. I, venerable sir, asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave me combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). I am undergoing the probation. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "අග්ඝසමෝධාන පරිවාස ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): aggha-samodhāna probation"
   },
   {
    "pali": "පරිවාසං නික්ඛිපාමි. වත්තං නික්ඛිපාමි.",
    "translit": "Parivāsaṃ nikkhipāmi. Vattaṃ nikkhipāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I lay down the probation. I lay down the observance (vatta).",
    "title_si": "පිරිවෙස නික්ෂේප කරන වාක්‍ය",
    "title_en": "Laying down the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! සඞ්ඝං....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! සඞ්ඝං....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! Saṅghaṃ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! Saṅghaṃ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. I, venerable sir, asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave me combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). I have completed the probation. Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, ask the Saṅgha for six-night mānatta for those many concealed and unconcealed offences.\nVenerable sir, I … (as above). A second time, venerable sir, I [ask] the Saṅgha …\nVenerable sir, I … (as above). A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "අග්ඝසමෝධාන මානත යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mānatta after aggha-samodhāna probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං. ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. So parivutthaparivāso, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. So parivutthaparivāso, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ. Khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). Having completed the probation, this monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). Having completed the probation, this monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gives the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for those many concealed and unconcealed offences, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "අග්ඝසමෝධාන මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta after aggha-samodhāna probation"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදන් වීමේ වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "යි තෙවරක් ආරෝචනය කළ යුතු ය.",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. I, venerable sir, asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave me combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). I have completed the probation. Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave me six-night mānatta for those many concealed and unconcealed offences. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "අග්ඝසමෝධාන මානත ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): mānatta after aggha-samodhāna probation"
   },
   {
    "pali": "මානත්තං නික්ඛිපාමි. වත්තං නික්ඛිපාමි.",
    "translit": "Mānattaṃ nikkhipāmi. Vattaṃ nikkhipāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I lay down the mānatta. I lay down the observance (vatta).",
    "title_si": "මානත නික්ෂේප කරන වාක්‍ය",
    "title_en": "Laying down the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ!....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante!....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. I, venerable sir, asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave me combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). I have completed the probation. Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave me six-night mānatta for those many concealed and unconcealed offences. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna).\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "අග්ඝසමෝධාන අබ්භාන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after aggha-samodhāna probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි සම්බහුලා ආපත්තියො එකාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ද්වීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො තීහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො චතූහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො පඤ්චාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො ඡාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො සත්තාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො අට්ඨාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො නවාහපටිච්ඡන්නායො, සම්බහුලා ආපත්තියො දසාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං යා ආපත්තියො දසාහපටිච්ඡන්නායො තාසං අග්ඝෙන සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස. තස්මා තුණ්හී, එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji sambahulā āpattiyo ekāhapaṭicchannāyo, sambahulā āpattiyo dvīhapaṭicchannāyo, sambahulā āpattiyo tīhapaṭicchannāyo, sambahulā āpattiyo catūhapaṭicchannāyo, sambahulā āpattiyo pañcāhapaṭicchannāyo, sambahulā āpattiyo chāhapaṭicchannāyo, sambahulā āpattiyo sattāhapaṭicchannāyo, sambahulā āpattiyo aṭṭhāhapaṭicchannāyo, sambahulā āpattiyo navāhapaṭicchannāyo, sambahulā āpattiyo dasāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ yā āpattiyo dasāhapaṭicchannāyo tāsaṃ agghena samodhānaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa. Tasmā tuṇhī, evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences: many offences concealed for one day, many offences concealed for two days, many offences concealed for three days, many offences concealed for four days, many offences concealed for five days, many offences concealed for six days, many offences concealed for seven days, many offences concealed for eight days, many offences concealed for nine days, many offences concealed for ten days. He asked the Saṅgha for combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). The Saṅgha gave the monk (so-and-so) combined probation by value (aggha-samodhāna) for those many offences (namely those among them concealed for ten days). He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves. Therefore it is silent. Thus I hold this.",
    "title_si": "අග්ඝසමෝධාන අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after aggha-samodhāna probation"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "suddhanta",
  "si": "සුද්ධන්ත පරිවාසය",
  "en": "Suddhanta Probation",
  "title_si": "සුද්ධන්ත පරිවාසය — පටිච්ඡන්නාපටිච්ඡන්න ආපත්ති",
  "title_en": "Suddhanta Probation — Concealed and Unconcealed Offences",
  "kind": "text",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! සඞ්ඝං ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! සඞ්ඝං ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! Saṅghaṃ ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! Saṅghaṃ ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, ask the Saṅgha for suddhanta probation for those many offences.\nVenerable sir, I … (as above). A second time, venerable sir, I [ask] the Saṅgha …\nVenerable sir, I … (as above). A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "සුද්ධන්ත පරිවාස යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): suddhanta probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නො සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසො. ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinno saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāso. Khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asks the Saṅgha for suddhanta probation for those many offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) suddhanta probation for those many offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asks the Saṅgha for suddhanta probation for those many offences. The Saṅgha gives the monk (so-and-so) suddhanta probation for those many offences. Whichever venerable one approves the giving to the monk (so-and-so) of suddhanta probation for those many offences, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) suddhanta probation for those many offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "සුද්ධන්ත පරිවාස දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): suddhanta probation"
   },
   {
    "pali": "පරිවාසං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Parivāsaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the probation. I undertake the observance (vatta).",
    "title_si": "පිරිවෙස සමාදාන වාක්‍ය",
    "title_en": "Undertaking the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවසාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivasāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "යි තෙවරක් ආරෝචනය කළ යුතු ය.",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I am undergoing the probation. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "සුද්ධන්ත පරිවාස ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): suddhanta probation"
   },
   {
    "pali": "පරිවාසං නික්ඛිපාමි. වත්තං නික්ඛිපාමි.",
    "translit": "Parivāsaṃ nikkhipāmi. Vattaṃ nikkhipāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I lay down the probation. I lay down the observance (vatta).",
    "title_si": "පිරිවෙස නික්ෂේප කරන වාක්‍ය",
    "title_en": "Laying down the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො.\nඅහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso.\nAhaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I have completed the probation.\nVenerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, ask the Saṅgha for six-night mānatta for those many concealed and unconcealed offences.\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "සුද්ධන්ත මානත යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mānatta after suddhanta probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං, ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ, khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asks the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gives the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for those many concealed and unconcealed offences, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "සුද්ධන්ත මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta after suddhanta probation"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදන් වීමේ වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "යි තෙවරක් ආරෝචනය කළ යුතු ය.",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I have completed the probation. Venerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave me six-night mānatta for those many concealed and unconcealed offences. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "සුද්ධන්ත මානත ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): mānatta after suddhanta probation"
   },
   {
    "pali": "මානත්තං නික්ඛිපාමි. වත්තං නික්ඛිපාමි.",
    "translit": "Mānattaṃ nikkhipāmi. Vattaṃ nikkhipāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I lay down the mānatta. I lay down the observance (vatta).",
    "title_si": "මානත නික්ෂේප කරන වාක්‍ය",
    "title_en": "Laying down the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො.\nඅහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං අපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso.\nAhaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ apaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I have completed the probation.\nVenerable sir, I have fallen into many Saṅghādisesa offences, which were unconcealed. I, venerable sir, asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave me six-night mānatta for those many concealed and unconcealed offences. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna).\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "සුද්ධන්ත අබ්භාන යාචන වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after suddhanta probation"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි අපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පටිච්ඡන්නානඤ්ච අපටිච්ඡන්නානඤ්ච ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස. තස්මා තුණ්හී, එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji apaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ paṭicchannānañca apaṭicchannānañca chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe- yassa nakkhamati, so bhāseyya.\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa. Tasmā tuṇhī, evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. He has completed the probation. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were unconcealed. He asked the Saṅgha for six-night mānatta for those many concealed and unconcealed offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many concealed and unconcealed offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves. Therefore it is silent. Thus I hold this.",
    "title_si": "සුද්ධන්ත අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after suddhanta probation"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "mulaya-apaticchanna",
  "si": "මූලායපටිකස්සනය (පරිවාස අපටිච්ඡන්න)",
  "en": "Mūlāya Paṭikassana (unconcealed, during probation)",
  "title_si": "මූලායපටිකස්සනය — පරිවාස අපටිච්ඡන්න මූලායපටිකස්සනය",
  "title_en": "Mūlāya Paṭikassana — an unconcealed offence committed during probation",
  "kind": "text",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං අපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචාමි. සොහං දුතියම්පි භන්තෙ! සඞ්ඝං ..... සොහං තතියම්පි භන්තෙ! සඞ්ඝං .....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ apaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yācāmi. Sohaṃ dutiyampi bhante! Saṅghaṃ ..... Sohaṃ tatiyampi bhante! Saṅghaṃ .....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave me one-day probation for those many offences concealed for one day. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, unconcealed. I, venerable sir, ask the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. A second time, venerable sir, I [ask] the Saṅgha … A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mūlāya paṭikassana (sending back to the beginning)"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනා, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nපටිකස්සිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනා. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikasseyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassati. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanā, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nPaṭikassito saṅghena (itthannāmo) bhikkhu antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanā. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. If it is the right time for the Saṅgha, let the Saṅgha send the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sends the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. Whichever venerable one approves the sending back of the monk (so-and-so) to the beginning, on account of the one unconcealed offence incurred in the interim, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been sent back to the beginning by the Saṅgha, on account of the one unconcealed offence incurred in the interim. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): mūlāya paṭikassana (sending back to the beginning)"
   },
   {
    "pali": "පරිවාසං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Parivāsaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the probation. I undertake the observance (vatta).",
    "title_si": "පිරිවෙස සමාදාන වාක්‍ය",
    "title_en": "Undertaking the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං අපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං පරිවසාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ apaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. Sohaṃ parivasāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave me one-day probation for those many offences concealed for one day. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, unconcealed. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent me back to the beginning, on account of the one unconcealed offence incurred in the interim. I am undergoing the probation. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මූලායපටිකස්සන පරිවාස ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): probation, after mūlāya paṭikassana"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං අපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචාමි. සොහං දුතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං..... සොහං තතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං.....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ apaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācāmi. Sohaṃ dutiyampi bhante! Parivutthaparivāso, saṅghaṃ..... Sohaṃ tatiyampi bhante! Parivutthaparivāso, saṅghaṃ.....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave me one-day probation for those many offences concealed for one day. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, unconcealed. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent me back to the beginning, on account of the one unconcealed offence incurred in the interim. I, venerable sir, having completed the probation, ask the Saṅgha for six-night mānatta for those many offences. A second time, venerable sir, having completed the probation, I [ask] the Saṅgha … A third time, venerable sir, having completed the probation, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන මානත යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattassa dānaṃ, so tuṇhassa yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. Having completed the probation, he asks the Saṅgha for six-night mānatta for those many offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for those many offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. Having completed the probation, he asks the Saṅgha for six-night mānatta for those many offences. The Saṅgha gives the monk (so-and-so) six-night mānatta for those many offences. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for those many offences, let him be silent; whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for those many offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදන් වීමේ වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං අපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ apaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave me one-day probation for those many offences concealed for one day. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, unconcealed. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent me back to the beginning, on account of the one unconcealed offence incurred in the interim. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මූලායපටිකස්සන මානත ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං අපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි. සොහං දුතියම්පි භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං.... සොහං තතියම්පි භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ apaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi. Sohaṃ dutiyampi bhante! Ciṇṇamānatto saṅghaṃ.... Sohaṃ tatiyampi bhante! Ciṇṇamānatto saṅghaṃ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave me one-day probation for those many offences concealed for one day. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, unconcealed. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent me back to the beginning, on account of the one unconcealed offence incurred in the interim. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna). A second time, venerable sir, having completed the mānatta, I [ask] the Saṅgha … A third time, venerable sir, having completed the mānatta, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන අබ්භාන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after mūlāya paṭikassana"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො ( ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං එකාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි අපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා අපටිච්ඡන්නාය මූලායපටිකස්සි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං, සො තුණ්හස්ස. යස්ස නක්ඛමති සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස. තස්මා තුණ්හී, එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho ( itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ ekāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji apaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā apaṭicchannāya mūlāyapaṭikassi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ, so tuṇhassa. Yassa nakkhamati so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa. Tasmā tuṇhī, evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for one-day probation for those many offences concealed for one day. The Saṅgha gave the monk (so-and-so) one-day probation for those many offences concealed for one day. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, unconcealed. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one unconcealed offence incurred in the interim. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one unconcealed offence incurred in the interim. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves. Therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after mūlāya paṭikassana"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "mulaya-paticchanna",
  "si": "මූලායපටිකස්සනය (පරිවාස පටිච්ඡන්න)",
  "en": "Mūlāya Paṭikassana (concealed, during probation)",
  "title_si": "මූලායපටිකස්සනය — පරිවාස පටිච්ඡන්න මූලායපටිකස්සනය",
  "title_en": "Mūlāya Paṭikassana — a concealed offence committed during probation",
  "kind": "text",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචාමි. සොහං දුතියම්පි භන්තෙ! සඞ්ඝං ..... සොහං තතියම්පි භන්තෙ! සඞ්ඝං .....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yācāmi. Sohaṃ dutiyampi bhante! Saṅghaṃ ..... Sohaṃ tatiyampi bhante! Saṅghaṃ .....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, ask the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. A second time, venerable sir, I [ask] the Saṅgha … A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mūlāya paṭikassana (sending back to the beginning)"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනා, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nපටිකස්සිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනා. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikasseyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassati. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanā, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nPaṭikassito saṅghena (itthannāmo) bhikkhu antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanā. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. If it is the right time for the Saṅgha, let the Saṅgha send the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sends the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. Whichever venerable one approves the sending back of the monk (so-and-so) to the beginning, on account of the one offence incurred in the interim, concealed for two days, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been sent back to the beginning by the Saṅgha, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): mūlāya paṭikassana (sending back to the beginning)"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචාමි. සොහං දුතියම්පි භන්තෙ! සඞ්ඝං.... සොහං තතියම්පි භන්තෙ! සඞ්ඝං....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yācāmi. Sohaṃ dutiyampi bhante! Saṅghaṃ.... Sohaṃ tatiyampi bhante! Saṅghaṃ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent me back to the beginning, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, ask the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. A second time, venerable sir, I [ask] the Saṅgha … A third time, venerable sir, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන සමෝධාන පරිවාස යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසස්ස දානං, සො තුණ්හස්ස යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදින්නො සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසො. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsassa dānaṃ, so tuṇhassa yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nDinno saṅghena (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāso. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asks the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asks the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gives the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. Whichever venerable one approves the giving to the monk (so-and-so) of combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days, let him be silent; whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe Saṅgha has given the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන සමෝධාන පරිවාස දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana"
   },
   {
    "pali": "පරිවාසං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Parivāsaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the probation. I undertake the observance (vatta).",
    "title_si": "පිරිවෙස සමාදාන වාක්‍ය",
    "title_en": "Undertaking the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවසාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivasāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent me back to the beginning, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. I am undergoing the probation. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මූලායපටිකස්සන සමෝධාන පරිවාස ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචාමි. සොහං දුතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං..... සොහං තතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො, සඞ්ඝං.....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ bhante! Parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācāmi. Sohaṃ dutiyampi bhante! Parivutthaparivāso, saṅghaṃ..... Sohaṃ tatiyampi bhante! Parivutthaparivāso, saṅghaṃ.....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent me back to the beginning, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, having completed the probation, ask the Saṅgha for six-night mānatta for those many offences. A second time, venerable sir, having completed the probation, I [ask] the Saṅgha … A third time, venerable sir, having completed the probation, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන මානත යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattassa dānaṃ, so tuṇhassa yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. Having completed the probation, he asks the Saṅgha for six-night mānatta for those many offences. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for those many offences. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. Having completed the probation, he asks the Saṅgha for six-night mānatta for those many offences. The Saṅgha gives the monk (so-and-so) six-night mānatta for those many offences. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for those many offences, let him be silent; whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for those many offences. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලායපටිකස්සන මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදන් වීමේ වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent me back to the beginning, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මූලායපටිකස්සන මානත ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): mānatta after mūlāya paṭikassana"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං පඤ්චාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සොහං පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජිං ද්වීහපටිච්ඡන්නං. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි. සොහං දුතියම්පි භන්තෙ! චිණ්ණමානත්තො, සඞ්ඝං..... සොහං තතියම්පි භන්තෙ! චිණ්ණමානත්තො, සඞ්ඝං.....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ pañcāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. Sohaṃ parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajjiṃ dvīhapaṭicchannaṃ. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi. Sohaṃ dutiyampi bhante! Ciṇṇamānatto, saṅghaṃ..... Sohaṃ tatiyampi bhante! Ciṇṇamānatto, saṅghaṃ.....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences, which were concealed for five days. I, venerable sir, asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave me five-day probation for those many offences concealed for five days. While undergoing probation, I fell in the interim into one Saṅghādisesa offence, concealed for two days. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent me back to the beginning, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna). A second time, venerable sir, having completed the mānatta, I [ask] the Saṅgha … A third time, venerable sir, having completed the mānatta, I [ask] the Saṅgha …",
    "title_si": "මූලායපටිකස්සන අබ්භාන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after mūlāya paṭikassana"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො. අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි පඤ්චාහපටිච්ඡන්නායො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං පඤ්චාහපටිච්ඡන්නානං පඤ්චාහපරිවාසං අදාසි. සො පරිවසන්තො අන්තරා එකං සඞ්ඝාදිසෙසං ආපත්තිං ආපජ්ජි ද්වීහපටිච්ඡන්නං. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා එකිස්සා ආපත්තියා ද්වීහපටිච්ඡන්නාය පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං. සො තුණ්හස්ස යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ භන්තෙ! -පෙ- යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස, තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho. Ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji pañcāhapaṭicchannāyo. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ pañcāhapaṭicchannānaṃ pañcāhaparivāsaṃ adāsi. So parivasanto antarā ekaṃ saṅghādisesaṃ āpattiṃ āpajji dvīhapaṭicchannaṃ. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā ekissā āpattiyā dvīhapaṭicchannāya mūlāyapaṭikassi. So saṅghaṃ antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā ekissā āpattiyā dvīhapaṭicchannāya purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ. So tuṇhassa yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nTatiyampi etamatthaṃ vadāmi. Suṇātu me bhante! -pe- yassa nakkhamati, so bhāseyya.\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa, tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences, which were concealed for five days. He asked the Saṅgha for five-day probation for those many offences concealed for five days. The Saṅgha gave the monk (so-and-so) five-day probation for those many offences concealed for five days. While undergoing probation, he fell in the interim into one Saṅghādisesa offence, concealed for two days. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the one offence incurred in the interim, concealed for two days. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the one offence incurred in the interim, concealed for two days. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the one offence incurred in the interim, concealed for two days. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent; whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nA third time I state this matter. May the Saṅgha listen to me, venerable sirs … (as above) … whoever does not approve, let him speak.\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මූලාය පටිකස්සන අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after mūlāya paṭikassana"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "mulaya-manattacarika",
  "si": "මූලායපටිකස්සනය (මානත්තචාරික)",
  "en": "Mūlāya Paṭikassana (during mānatta)",
  "title_si": "මූලායපටිකස්සනය — මානත්තචාරික පටිච්ඡන්න මූලායපටිකස්සනය",
  "title_en": "Mūlāya Paṭikassana — a concealed offence committed during mānatta",
  "kind": "text",
  "note_si": "සැ.යු:- වත් මානත් පිළිබඳව වැඩි විස්තර දැනගැනීම සඳහා පූජ්‍යපාද මකුලෑවේ සුදස්සන ස්වාමීන් වහන්සේගේ පිරිවෙස් මානත් පිරීමේ දී දතයුතු කරුණු, චතුර්විධ කර්ම යන පොත බලනු මැනවි.",
  "parts": [
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those offences. The Saṅgha gave me six-night mānatta for those offences. While practising the mānatta, I fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, ask the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day.\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "මානත්තචාරික පටිච්ඡන්න මූලායපටිකස්සන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mūlāya paṭikassana for a concealed offence committed during mānatta"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනා, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nපටිකස්සිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනා, ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikasseyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassati. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanā, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nPaṭikassito saṅghena (itthannāmo) bhikkhu antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanā, khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. If it is the right time for the Saṅgha, let the Saṅgha send the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asks the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sends the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. Whichever venerable one approves the sending back of the monk (so-and-so) to the beginning, on account of the many offences incurred in the interim, concealed for one day, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe monk (so-and-so) has been sent back to the beginning by the Saṅgha, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මානත්තචාරික පටිච්ඡන්න මූලායපටිකස්සන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): mūlāya paṭikassana for a concealed offence committed during mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සොහං භන්තෙ සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචාමි.\nඅහං භන්තෙ! -පෙ- සොහං දුතියම්පි භන්තෙ! ....\nඅහං භන්තෙ! -පෙ- සොහං තතියම්පි භන්තෙ! ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. Sohaṃ bhante saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yācāmi.\nAhaṃ bhante! -pe- sohaṃ dutiyampi bhante! ....\nAhaṃ bhante! -pe- sohaṃ tatiyampi bhante! ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. While practising the mānatta, I fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent me back to the beginning, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, ask the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day.\nVenerable sir, I … (as above). A second time, venerable sir, I …\nVenerable sir, I … (as above). A third time, venerable sir, I …",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන සමෝධාන පරිවාස යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසස්ස දානං. සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නො සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසො, ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsassa dānaṃ. So tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinno saṅghena (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāso, khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asks the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asks the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gives the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. Whichever venerable one approves the giving to the monk (so-and-so) of combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මානත්තචාරික මූලාය පටිකස්සන සමෝධාන පරිවාස දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "පරිවාසං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Parivāsaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the probation. I undertake the observance (vatta).",
    "title_si": "පිරිවෙස සමාදාන වාක්‍ය",
    "title_en": "Undertaking the probation"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවසාමි, වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivasāmi, vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. While practising the mānatta, I fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent me back to the beginning, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. I am undergoing the probation. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන සමෝධාන පරිවාස ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): combined probation (samodhāna-parivāsa) after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං භන්තෙ! පරිවුත්ථපරිවාසො. සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචාමි. සොහං දුතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො .... සොහං තතියම්පි භන්තෙ! පරිවුත්ථපරිවාසො ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ bhante! Parivutthaparivāso. Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yācāmi. Sohaṃ dutiyampi bhante! Parivutthaparivāso .... Sohaṃ tatiyampi bhante! Parivutthaparivāso ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. While practising the mānatta, I fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent me back to the beginning, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, have completed the probation. I ask the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. A second time, venerable sir, having completed the probation, I [ask] the Saṅgha … A third time, venerable sir, having completed the probation, I [ask] the Saṅgha …",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන මානත යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): mānatta after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං දදෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචති. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං දෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තස්ස දානං, සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nදින්නං සඞ්ඝෙන (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං. ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ dadeyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yācati. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ deti. Yassāyasmato khamati (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattassa dānaṃ, so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nDinnaṃ saṅghena (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ. Khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. Having completed the probation, he asks the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. If it is the right time for the Saṅgha, let the Saṅgha give the monk (so-and-so) six-night mānatta for the many offences incurred in the interim, concealed for one day. This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. Having completed the probation, he asks the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha gives the monk (so-and-so) six-night mānatta for the many offences incurred in the interim, concealed for one day. Whichever venerable one approves the giving to the monk (so-and-so) of six-night mānatta for the many offences incurred in the interim, concealed for one day, let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe Saṅgha has given the monk (so-and-so) six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන මානත දාන කර්ම වාක්‍ය",
    "title_en": "Formal act of giving (dāna kamma-vācā): mānatta after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "මානත්තං සමාදියාමි. වත්තං සමාදියාමි.",
    "translit": "Mānattaṃ samādiyāmi. Vattaṃ samādiyāmi.",
    "si": "යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I undertake the mānatta. I undertake the observance (vatta).",
    "title_si": "මානත සමාදන් වීමේ වාක්‍ය",
    "title_en": "Undertaking the mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සොහං මානත්තං චරාමි. වෙදියාමහං භන්තෙ! වෙදියතීති මං සඞ්ඝො ධාරෙතු.",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ mānattaṃ carāmi. Vediyāmahaṃ bhante! Vediyatīti maṃ saṅgho dhāretu.",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. While practising the mānatta, I fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent me back to the beginning, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. I have completed the probation. I asked the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha gave me six-night mānatta for the many offences incurred in the interim, concealed for one day. I am practising the mānatta. I make it known, venerable sir; let the Saṅgha bear me in mind as one who has made it known.",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන මානත ආරෝචන වාක්‍ය",
    "title_en": "Announcement (ārocana): mānatta after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං. ආපත්තිපරියන්තං න ජානාමි. රත්තිපරියන්තං න ජානාමි. ආපත්තිපරියන්තං නස්සරාමි. රත්තිපරියන්තං නස්සරාමි. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සොහං භන්තෙ! සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජිං එකාහපටිච්ඡන්නායො. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචිං. තං මං සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සොහං භන්තෙ! සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සොහං පරිවුත්ථපරිවාසො. සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචිං. තස්ස මෙ සඞ්ඝො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සොහං භන්තෙ! චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචාමි. සොහං දුතියම්පි භන්තෙ! චිණ්ණමානත්තො, සඞ්ඝං .... සොහං තතියම්පි භන්තෙ! චිණ්ණමානත්තො, සඞ්ඝං ....",
    "translit": "Ahaṃ bhante! Sambahulā saṅghādisesā āpattiyo āpajjiṃ. Āpattipariyantaṃ na jānāmi. Rattipariyantaṃ na jānāmi. Āpattipariyantaṃ nassarāmi. Rattipariyantaṃ nassarāmi. Āpattipariyante vematiko. Rattipariyante vematiko. Sohaṃ bhante! Saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajjiṃ ekāhapaṭicchannāyo. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāciṃ. Taṃ maṃ saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. Sohaṃ bhante! Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. Sohaṃ parivutthaparivāso. Saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yāciṃ. Tassa me saṅgho antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. Sohaṃ bhante! Ciṇṇamānatto saṅghaṃ abbhānaṃ yācāmi. Sohaṃ dutiyampi bhante! Ciṇṇamānatto, saṅghaṃ .... Sohaṃ tatiyampi bhante! Ciṇṇamānatto, saṅghaṃ ....",
    "si": "",
    "en": "Venerable sir, I have fallen into many Saṅghādisesa offences. I do not know the extent of the offences. I do not know the extent of the nights (of concealment). I do not remember the extent of the offences. I do not remember the extent of the nights (of concealment). I am in doubt about the extent of the offences. I am in doubt about the extent of the nights (of concealment). I, venerable sir, asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave me suddhanta probation for those many offences. I, venerable sir, having completed the probation, asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave me six-night mānatta for those many offences. While practising the mānatta, I, venerable sir, fell in the interim into many Saṅghādisesa offences, which were concealed for one day. I, venerable sir, asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent me back to the beginning, on account of the many offences incurred in the interim, concealed for one day. I, venerable sir, asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave me combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. I have completed the probation. I asked the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha gave me six-night mānatta for the many offences incurred in the interim, concealed for one day. I, venerable sir, having completed the mānatta, ask the Saṅgha for rehabilitation (abbhāna). A second time, venerable sir, having completed the mānatta, I [ask] the Saṅgha … A third time, venerable sir, having completed the mānatta, I [ask] the Saṅgha …",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන අබ්භාන යාචනා වාක්‍ය",
    "title_en": "Request (yācanā): rehabilitation (abbhāna) after mūlāya paṭikassana, during mānatta"
   },
   {
    "pali": "සුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙය්‍ය. එසා ඤත්ති.\nසුණාතු මෙ භන්තෙ! සඞ්ඝො, අයං (ඉත්ථන්නාමො) භික්ඛු සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි. ආපත්තිපරියන්තං න ජානාති. රත්තිපරියන්තං න ජානාති. ආපත්තිපරියන්තං නස්සරති. රත්තිපරියන්තං නස්සරති. ආපත්තිපරියන්තෙ වෙමතිකො. රත්තිපරියන්තෙ වෙමතිකො. සො සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං සුද්ධන්තපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො තාසං සම්බහුලානං ආපත්තීනං ඡාරත්තං මානත්තං අදාසි. සො මානත්තං චරන්තො අන්තරා සම්බහුලා සඞ්ඝාදිසෙසා ආපත්තියො ආපජ්ජි එකාහපටිච්ඡන්නායො. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සනං යාචි. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං මූලායපටිකස්සි. සො සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං පුරිමාසු ආපත්තීසු සමොධානපරිවාසං අදාසි. සො පරිවුත්ථපරිවාසො, සඞ්ඝං අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං යාචි. සඞ්ඝො (ඉත්ථන්නාමස්ස) භික්ඛුනො අන්තරා සම්බහුලානං ආපත්තීනං එකාහපටිච්ඡන්නානං ඡාරත්තං මානත්තං අදාසි. සො චිණ්ණමානත්තො සඞ්ඝං අබ්භානං යාචති. සඞ්ඝො (ඉත්ථන්නාමං) භික්ඛුං අබ්භෙති. යස්සායස්මතො ඛමති (ඉත්ථන්නාමස්ස) භික්ඛුනො අබ්භානං සො තුණ්හස්ස. යස්ස නක්ඛමති, සො භාසෙය්‍ය.\nදුතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nතතියම්පි එතමත්ථං වදාමි. සුණාතු මෙ -පෙ-\nඅබ්භිතො සඞ්ඝෙන (ඉත්ථන්නාමො) භික්ඛු. ඛමති සඞ්ඝස්ස තස්මා තුණ්හී. එවමෙතං ධාරයාමි.",
    "translit": "Suṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Yadi saṅghassa pattakallaṃ, saṅgho (itthannāmaṃ) bhikkhuṃ abbheyya. Esā ñatti.\nSuṇātu me bhante! Saṅgho, ayaṃ (itthannāmo) bhikkhu sambahulā saṅghādisesā āpattiyo āpajji. Āpattipariyantaṃ na jānāti. Rattipariyantaṃ na jānāti. Āpattipariyantaṃ nassarati. Rattipariyantaṃ nassarati. Āpattipariyante vematiko. Rattipariyante vematiko. So saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ suddhantaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno tāsaṃ sambahulānaṃ āpattīnaṃ chārattaṃ mānattaṃ adāsi. So mānattaṃ caranto antarā sambahulā saṅghādisesā āpattiyo āpajji ekāhapaṭicchannāyo. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassanaṃ yāci. Saṅgho (itthannāmaṃ) bhikkhuṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ mūlāyapaṭikassi. So saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ purimāsu āpattīsu samodhānaparivāsaṃ adāsi. So parivutthaparivāso, saṅghaṃ antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ yāci. Saṅgho (itthannāmassa) bhikkhuno antarā sambahulānaṃ āpattīnaṃ ekāhapaṭicchannānaṃ chārattaṃ mānattaṃ adāsi. So ciṇṇamānatto saṅghaṃ abbhānaṃ yācati. Saṅgho (itthannāmaṃ) bhikkhuṃ abbheti. Yassāyasmato khamati (itthannāmassa) bhikkhuno abbhānaṃ so tuṇhassa. Yassa nakkhamati, so bhāseyya.\nDutiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nTatiyampi etamatthaṃ vadāmi. Suṇātu me -pe-\nAbbhito saṅghena (itthannāmo) bhikkhu. Khamati saṅghassa tasmā tuṇhī. Evametaṃ dhārayāmi.",
    "si": "",
    "en": "Venerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. Having completed the probation, he asked the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) six-night mānatta for the many offences incurred in the interim, concealed for one day. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). If it is the right time for the Saṅgha, let the Saṅgha rehabilitate the monk (so-and-so). This is the motion.\nVenerable sirs, may the Saṅgha listen to me. This monk (so-and-so) has fallen into many Saṅghādisesa offences. He does not know the extent of the offences. He does not know the extent of the nights (of concealment). He does not remember the extent of the offences. He does not remember the extent of the nights (of concealment). He is in doubt about the extent of the offences. He is in doubt about the extent of the nights (of concealment). He asked the Saṅgha for suddhanta probation for those many offences. The Saṅgha gave the monk (so-and-so) suddhanta probation for those many offences. Having completed the probation, he asked the Saṅgha for six-night mānatta for those many offences. The Saṅgha gave the monk (so-and-so) six-night mānatta for those many offences. While practising the mānatta, he fell in the interim into many Saṅghādisesa offences, which were concealed for one day. He asked the Saṅgha for the sending-back to the beginning (mūlāya paṭikassana) on account of the many offences incurred in the interim, concealed for one day. The Saṅgha sent the monk (so-and-so) back to the beginning, on account of the many offences incurred in the interim, concealed for one day. He asked the Saṅgha for combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) combined probation (samodhāna) in respect of the earlier offences, on account of the many offences incurred in the interim, concealed for one day. Having completed the probation, he asked the Saṅgha for six-night mānatta for the many offences incurred in the interim, concealed for one day. The Saṅgha gave the monk (so-and-so) six-night mānatta for the many offences incurred in the interim, concealed for one day. Having completed the mānatta, he asks the Saṅgha for rehabilitation (abbhāna). The Saṅgha rehabilitates the monk (so-and-so). Whichever venerable one approves the rehabilitation of the monk (so-and-so), let him be silent. Whoever does not approve, let him speak.\nA second time I state this matter. May the Saṅgha listen to me … (as above).\nA third time I state this matter. May the Saṅgha listen to me … (as above).\nThe monk (so-and-so) has been rehabilitated by the Saṅgha. The Saṅgha approves; therefore it is silent. Thus I hold this.",
    "title_si": "මානත්තචාරික මූලායපටිකස්සන අබ්භාන කර්ම වාක්‍ය",
    "title_en": "Formal act (kamma-vācā): rehabilitation (abbhāna) after mūlāya paṭikassana, during mānatta"
   }
  ],
  "cat": "vinaya",
  "cat_si": "විනය කර්ම",
  "cat_en": "Vinaya formal acts"
 },
 {
  "id": "up-vandana",
  "si": "වන්දනා",
  "en": "Homage",
  "kind": "text",
  "count": null,
  "title_si": "වැඩිහිටි භික්‍ෂූන් වන්දනා කිරීම",
  "title_en": "Paying Respects to Senior Monks",
  "split": "none",
  "parts": [
   {
    "pali": "ඔකාස වන්දාමි භන්තෙ! මයා කතං පුඤ්ඤං සාමිනා අනුමොදිතබ්බං",
    "translit": "Okāsa vandāmi bhante! Mayā kataṃ puññaṃ sāminā anumoditabbaṃ",
    "si": "",
    "en": "Permission, venerable sir: I pay homage. The merit made by me is to be rejoiced in by the master.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk",
    "rubric_en": "Novices (sāmaṇera) and fully ordained monks who are living in dependence (nissaya) must ask leave of their preceptor or teacher before doing anything at all."
   },
   {
    "pali": "සාධු! සාධු! අනුමොදාමි",
    "translit": "Sādhu! Sādhu! Anumodāmi",
    "si": "",
    "en": "Good, good! I rejoice.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාමිනා කතං පුඤ්ඤං මය්හං දාතබ්බං",
    "translit": "Sāminā kataṃ puññaṃ mayhaṃ dātabbaṃ",
    "si": "",
    "en": "The merit made by the master is to be given to me (shared with me).",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "සාධු! සාධු! අනුමොදිතබ්බං (අනුමොදාහි/ අනුමොදථ)",
    "translit": "Sādhu! Sādhu! Anumoditabbaṃ (anumodāhi/ anumodatha)",
    "si": "",
    "en": "Good, good! It is to be rejoiced in. (Or: \"Rejoice!\" — anumodāhi to one person, anumodatha to several.)",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාධු! සාධු! අනුමොදාමි\nඔකාස ද්වාරත්තයෙන කතං සබ්බං අච්චයං ඛමථ මෙ භන්තෙ",
    "translit": "Sādhu! Sādhu! Anumodāmi\nOkāsa dvārattayena kataṃ sabbaṃ accayaṃ khamatha me bhante",
    "si": "",
    "en": "Good, good! I rejoice.\nPermission: venerable sir, please forgive me every offence done through the three doors (body, speech and mind).",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "ඛමාමි ඛමිතබ්බං!",
    "translit": "Khamāmi khamitabbaṃ!",
    "si": "",
    "en": "I forgive. It is to be forgiven!",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාධු! ඔකාස ඛමාමි භන්තෙ!",
    "translit": "Sādhu! Okāsa khamāmi bhante!",
    "si": "",
    "en": "Good! Permission, venerable sir — I forgive.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-apatti",
  "si": "ආපත්ති දේසනා",
  "en": "Confession",
  "kind": "text",
  "count": null,
  "title_si": "ආපත්ති දේසනා කිරීම",
  "title_en": "Confession of Offences (Āpatti-desanā)",
  "split": "title",
  "parts": [
   {
    "pali": "ඔකාස අහං භන්තෙ! සබ්බාපත්තියො ආරොචෙමි\nදුතියම්පි .....\nතතියම්පි .....",
    "translit": "Okāsa ahaṃ bhante! Sabbāpattiyo ārocemi\nDutiyampi .....\nTatiyampi .....",
    "si": "",
    "en": "Permission, venerable sir: I declare all my offences.\nFor the second time also .....\nFor the third time also .....",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk",
    "title_si": "නවක භික්‍ෂුව ඇවැත් දෙසීම",
    "title_en": "A junior monk confesses offences"
   },
   {
    "pali": "සාධු ආවුසො! සාධු",
    "translit": "Sādhu āvuso! Sādhu",
    "si": "",
    "en": "Good, friend! Good.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "අහං භන්තෙ! සම්බහුලා නානාවත්ථුකා සඞ්ඝාදිසෙසාදයො ආපත්තියො ආපජ්ජිං තා තුම්හපාදමූලෙ පටිදෙසෙමි",
    "translit": "Ahaṃ bhante! Sambahulā nānāvatthukā saṅghādisesādayo āpattiyo āpajjiṃ tā tumhapādamūle paṭidesemi",
    "si": "",
    "en": "Venerable sir, I have incurred many offences of various kinds, beginning with the Saṅghādisesa. I confess them at your feet.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "පස්සසි ආවුසො! තා ආපත්තියො",
    "translit": "Passasi āvuso! Tā āpattiyo",
    "si": "",
    "en": "Do you see those offences, friend?",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "ආම භන්තෙ! පස්සාමි",
    "translit": "Āma bhante! Passāmi",
    "si": "",
    "en": "Yes, venerable sir, I see them.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "ආයතිං ආවුසො! සංවරෙය්‍යාසි",
    "translit": "Āyatiṃ āvuso! Saṃvareyyāsi",
    "si": "",
    "en": "In future, friend, you should restrain yourself.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාධු සුට්ඨු අහං භන්තෙ! ආයතිං සංවරිස්සාමි\nදුතියම්පි .....\nතතියම්පි ......",
    "translit": "Sādhu suṭṭhu ahaṃ bhante! Āyatiṃ saṃvarissāmi\nDutiyampi .....\nTatiyampi ......",
    "si": "",
    "en": "Good, very good, venerable sir! I will restrain myself in future.\nFor the second time also .....\nFor the third time also ......",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "සාධු ආවුසො! සාධු",
    "translit": "Sādhu āvuso! Sādhu",
    "si": "",
    "en": "Good, friend! Good.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "අහං ආවුසො! සබ්බාපත්තියො ආරොචෙමි\nදුතියම්පි .....\nතතියම්පි .....",
    "translit": "Ahaṃ āvuso! Sabbāpattiyo ārocemi\nDutiyampi .....\nTatiyampi .....",
    "si": "",
    "en": "I, friend, declare all my offences.\nFor the second time also .....\nFor the third time also .....",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk",
    "title_si": "වැඩිමහලු භික්‍ෂුව ඇවැත් දෙසීම",
    "title_en": "A senior monk confesses offences"
   },
   {
    "pali": "සාධු භන්තෙ! සාධු",
    "translit": "Sādhu bhante! Sādhu",
    "si": "",
    "en": "Good, venerable sir! Good.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "අහං ආවුසො! සම්බහුලා නානාවත්ථුකා සඞ්ඝාදිසෙසාදයො ආපත්තියො ආපජ්ජිං තා තුය්හපාදමූලෙ පටිදෙසෙමි",
    "translit": "Ahaṃ āvuso! Sambahulā nānāvatthukā saṅghādisesādayo āpattiyo āpajjiṃ tā tuyhapādamūle paṭidesemi",
    "si": "",
    "en": "I, friend, have incurred many offences of various kinds, beginning with the Saṅghādisesa. I confess them at your feet.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "පස්සථ භන්තෙ! තා ආපත්තියො",
    "translit": "Passatha bhante! Tā āpattiyo",
    "si": "",
    "en": "Do you see those offences, venerable sir?",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "ආම ආවුසො! පස්සාමි",
    "translit": "Āma āvuso! Passāmi",
    "si": "",
    "en": "Yes, friend, I see them.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "ආයතිං භන්තෙ! සංවරෙය්‍යාථ",
    "translit": "Āyatiṃ bhante! Saṃvareyyātha",
    "si": "",
    "en": "In future, venerable sir, you should restrain yourself.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "සාධු සුට්ඨු අහං ආවුසො! ආයතිං සංවරිස්සාමි\nදුතියම්පි .....\nතතියම්පි ......",
    "translit": "Sādhu suṭṭhu ahaṃ āvuso! Āyatiṃ saṃvarissāmi\nDutiyampi .....\nTatiyampi ......",
    "si": "",
    "en": "Good, very good, friend! I will restrain myself in future.\nFor the second time also .....\nFor the third time also ......",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාධු භන්තෙ! සාධු",
    "translit": "Sādhu bhante! Sādhu",
    "si": "",
    "en": "Good, venerable sir! Good.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "අහං භන්තෙ! දෙසනා දුක්කටාපත්තිං ආපජ්ජිං තං තුම්හපාදමූලෙ පටිදෙසෙමි",
    "translit": "Ahaṃ bhante! Desanā dukkaṭāpattiṃ āpajjiṃ taṃ tumhapādamūle paṭidesemi",
    "si": "",
    "en": "Venerable sir, I have incurred a dukkaṭa offence of the kind called desanā. I confess it at your feet.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk",
    "title_si": "දේසනා දුක්කටආපත්ති දේසනය",
    "title_en": "Confessing a desanā-dukkaṭa offence"
   },
   {
    "pali": "පස්සසි ආවුසො! තං ආපත්තිං",
    "translit": "Passasi āvuso! Taṃ āpattiṃ",
    "si": "",
    "en": "Do you see that offence, friend?",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "ආම භන්තෙ! පස්සාමි",
    "translit": "Āma bhante! Passāmi",
    "si": "",
    "en": "Yes, venerable sir, I see it.",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "ආයතිං ආවුසො! සංවරෙය්‍යාසි",
    "translit": "Āyatiṃ āvuso! Saṃvareyyāsi",
    "si": "",
    "en": "In future, friend, you should restrain yourself.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   },
   {
    "pali": "සාධු සුට්ඨු අහං භන්තෙ! ආයතිං සංවරිස්සාමි\nදුතියම්පි .....\nතතියම්පි ......",
    "translit": "Sādhu suṭṭhu ahaṃ bhante! Āyatiṃ saṃvarissāmi\nDutiyampi .....\nTatiyampi ......",
    "si": "",
    "en": "Good, very good, venerable sir! I will restrain myself in future.\nFor the second time also .....\nFor the third time also ......",
    "speaker_si": "නවක භික්‍ෂුව",
    "speaker_en": "Junior monk"
   },
   {
    "pali": "සාධු ආවුසො! සාධු",
    "translit": "Sādhu āvuso! Sādhu",
    "si": "",
    "en": "Good, friend! Good.",
    "speaker_si": "වැඩිමහලු භික්‍ෂුව",
    "speaker_en": "Senior monk"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-upajjhaya",
  "si": "උපාධ්‍යාය",
  "en": "Preceptor",
  "kind": "text",
  "count": null,
  "title_si": "උපාධ්‍යායග්‍රහණය කිරීම",
  "title_en": "Taking a Preceptor (Upajjhāya)",
  "split": "none",
  "parts": [
   {
    "pali": "උපජ්ඣායො මෙ භන්තෙ! හොහි",
    "translit": "Upajjhāyo me bhante! Hohi",
    "si": "සාමණේරයන් වහන්සේ සිවුරු ඒකාංස කොට පොරවා, උපාධ්‍යායන් වහන්සේ වෙත එළඹ, උක්කුටිකයෙන් හිඳ දොහොත් මුදුන් දී වැඳගෙන මෙසේ කිය යුතු ය.",
    "en": "Venerable sir, be my preceptor.",
    "speaker_si": "සාමණේර",
    "speaker_en": "Novice",
    "rubric_en": "The novice (sāmaṇera) should arrange his robe over one shoulder, approach the preceptor, squat down, raise his joined hands to his forehead, pay homage, and say:"
   },
   {
    "pali": "පාසාදිකෙන සම්පාදෙහි හෝ සාහු/ ලහු/ ඔපායිකං/පතිරූපං",
    "translit": "Pāsādikena sampādehi or sāhu/ lahu/ opāyikaṃ/patirūpaṃ",
    "si": "\"…\" යි කියා එය පිළිගත යුතු ය.",
    "en": "Accomplish (your training) in a way that inspires confidence; or (he may say): Good! / Certainly! / It is suitable. / It is proper.",
    "speaker_si": "උපාධ්‍යාය",
    "speaker_en": "Preceptor (upajjhāya)",
    "rubric_en": "Saying this, the preceptor should accept (the request)."
   },
   {
    "pali": "සාධු! ඔකාස සම්පටිච්ඡාමි",
    "translit": "Sādhu! Okāsa sampaṭicchāmi",
    "si": "\"…\" යි මෙසේ තෙවරක් කියා උපාධ්‍යායග්‍රහණය කළ යුතු ය.",
    "en": "Good! Permission — I accept.",
    "speaker_si": "සාමණේර",
    "speaker_en": "Novice",
    "rubric_en": "Having said \"…\" thus three times, he should take the preceptor."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-acariya",
  "si": "ආචාර්ය",
  "en": "Teacher",
  "kind": "text",
  "count": null,
  "title_si": "ආචර්යග්‍රහණය කිරීම",
  "title_en": "Taking a Teacher (Ācariya)",
  "split": "none",
  "parts": [
   {
    "pali": "ආචරියො මෙ භන්තෙ! හොහි, ආයස්මතො නිස්සාය වච්ඡාමි.",
    "translit": "Ācariyo me bhante! Hohi, āyasmato nissāya vacchāmi.",
    "si": "නිස සමාදන් වන භික්‍ෂුව සිවුර ඒකාංස කොට පොරවා, ආචාර්යවරයා වෙත එළඹ, උක්කුටිකයෙන් හිඳ දොහොත් මුදුන් දී වැඳගෙන මෙසේ කිය යුතු ය.",
    "en": "Venerable sir, be my teacher; I shall live in dependence on the venerable one.",
    "speaker_si": "අන්තේවාසික",
    "speaker_en": "Pupil (antevāsika)",
    "rubric_en": "A monk who is taking up dependence (nissaya) should arrange his robe over one shoulder, approach the teacher, squat down, raise his joined hands to his forehead, pay homage, and say:"
   },
   {
    "pali": "පාසාදිකෙන සම්පාදෙහි හෝ සාහු/ ලහු/ ඔපායිකං/පතිරූපං",
    "translit": "Pāsādikena sampādehi or sāhu/ lahu/ opāyikaṃ/patirūpaṃ",
    "si": "\"…\" යි කියා එය පිළිගත යුතු ය.",
    "en": "Accomplish (your training) in a way that inspires confidence; or (he may say): Good! / Certainly! / It is suitable. / It is proper.",
    "speaker_si": "ආචාරිය",
    "speaker_en": "Teacher (ācariya)",
    "rubric_en": "Saying this, the teacher should accept (the request)."
   },
   {
    "pali": "සාධු! ඔකාස සම්පටිච්ඡාමි",
    "translit": "Sādhu! Okāsa sampaṭicchāmi",
    "si": "\"…\" යි මෙසේ තෙවරක් කියා ආචරියග්‍රහණය කළ යුතු ය.",
    "en": "Good! Permission — I accept.",
    "speaker_si": "අන්තේවාසික",
    "speaker_en": "Pupil (antevāsika)",
    "rubric_en": "Having said \"…\" thus three times, he should take the teacher."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-chanda",
  "si": "ඡන්දය දීම",
  "en": "Consent",
  "kind": "text",
  "count": null,
  "title_si": "විනය කර්ම සඳහා ඡන්දය දීම",
  "title_en": "Giving Consent (Chanda) for Vinaya Acts",
  "split": "title",
  "parts": [
   {
    "pali": "ඡන්දපාරිසුද්ධිං දම්මි, ඡන්දපාරිසුද්ධිං මෙ හර, ඡන්දපාරිසුද්ධිං මෙ ආරොචෙහි",
    "translit": "Chandapārisuddhiṃ dammi, chandapārisuddhiṃ me hara, chandapārisuddhiṃ me ārocehi",
    "si": "යම් භික්‍ෂුවක් එදින පැවැත්වෙන උපෝසථයට හෝ විනය කර්මයකට සහභාගිවීමේ අපහසුවක් ඇත්නම් (ගිලන් ව සිටී නම්) එහි දී ඡන්දය ලබා දිය යුතු ය. ඡන්දය ප්‍රකාශ කරන භික්‍ෂුව උපෝසථය හෝ විනය කර්මය සඳහා සහභාගී වන භික්‍ෂුවක් ඉදිරියේ උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\nඡන්දපාරිශුද්ධිය දෙන භික්‍ෂුව වැඩිහිටි නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my consent and purity (chandapārisuddhi); convey my chandapārisuddhi; announce my chandapārisuddhi.",
    "title_si": "උපෝසථය සඳහා ඡන්දපාරිශුද්ධිය දීම",
    "title_en": "Giving consent and purity (chandapārisuddhi) for the Uposatha",
    "rubric_en": "A monk who is unable to attend the Uposatha or a Vinaya act held that day (for example, because he is ill) should give his consent there. The monk giving his consent should squat in front of a monk who is attending the Uposatha or the Vinaya act, join his hands and pay homage three times, and then say:\nIf the monk giving chandapārisuddhi is senior: \"…\" — this is to be said."
   },
   {
    "pali": "ඡන්දපාරිසුද්ධිං දම්මි, ඡන්දපාරිසුද්ධිං මෙ හර, ඡන්දපාරිසුද්ධිං මෙ ආරොචෙථ",
    "translit": "Chandapārisuddhiṃ dammi, chandapārisuddhiṃ me hara, chandapārisuddhiṃ me ārocetha",
    "si": "ඡන්දපාරිශුද්ධිය දෙන භික්‍ෂුව නවක නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my consent and purity (chandapārisuddhi); convey my chandapārisuddhi; announce my chandapārisuddhi.",
    "rubric_en": "If the monk giving chandapārisuddhi is junior: \"…\" — this is to be said. (The respectful plural ārocetha is used.)"
   },
   {
    "pali": "ඡන්දං දම්මි, ඡන්දං මෙ හර, ඡන්දං මෙ ආරොචෙහි",
    "translit": "Chandaṃ dammi, chandaṃ me hara, chandaṃ me ārocehi",
    "si": "ඡන්දය දෙන භික්‍ෂුව වැඩිහිටි නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my consent (chanda); convey my chanda; announce my chanda.",
    "title_si": "අනෙකුත් විනය කර්ම සඳහා ඡන්දය දීම",
    "title_en": "Giving consent for other Vinaya acts",
    "rubric_en": "If the monk giving his consent is senior: \"…\" — this is to be said."
   },
   {
    "pali": "ඡන්දං දම්මි, ඡන්දං මෙ හර, ඡන්දං මෙ ආරොචෙථ",
    "translit": "Chandaṃ dammi, chandaṃ me hara, chandaṃ me ārocetha",
    "si": "ඡන්දය දෙන භික්‍ෂුව නවක නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my consent (chanda); convey my chanda; announce my chanda.",
    "rubric_en": "If the monk giving his consent is junior: \"…\" — this is to be said. (The respectful plural ārocetha is used.)"
   },
   {
    "pali": "පවාරණං දම්මි, පවාරණං මෙ හර, පවාරණං මෙ ආරොචෙහි, මමත්ථාය පවාරෙහි",
    "translit": "Pavāraṇaṃ dammi, pavāraṇaṃ me hara, pavāraṇaṃ me ārocehi, mamatthāya pavārehi",
    "si": "ඡන්දය දෙන භික්‍ෂුව වැඩිහිටි නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my pavāraṇā; convey my pavāraṇā; announce my pavāraṇā; make the pavāraṇā on my behalf.",
    "title_si": "පවාරණය සඳහා ඡන්දය දීම",
    "title_en": "Giving consent for the Pavāraṇā",
    "rubric_en": "If the monk giving his consent is senior: \"…\" — this is to be said."
   },
   {
    "pali": "පවාරණං දම්මි, පවාරණං මෙ හර, පවාරණං මෙ ආරොචෙථ, මමත්ථාය පවාරෙථ",
    "translit": "Pavāraṇaṃ dammi, pavāraṇaṃ me hara, pavāraṇaṃ me ārocetha, mamatthāya pavāretha",
    "si": "ඡන්දය දෙන භික්‍ෂුව නවක නම්;\n\"…\" යි ප්‍රකාශ කළ යුතු ය.",
    "en": "I give my pavāraṇā; convey my pavāraṇā; announce my pavāraṇā; make the pavāraṇā on my behalf.",
    "rubric_en": "If the monk giving his consent is junior: \"…\" — this is to be said. (The respectful plural ārocetha / pavārētha is used.)"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-kappabindu",
  "si": "කප්බිංදු",
  "en": "Kappa-dot",
  "kind": "text",
  "count": null,
  "title_si": "කප්බිංදු තැබීම",
  "title_en": "Placing the Kappa-dot (Kappabindu)",
  "split": "none",
  "parts": [
   {
    "pali": "කප්පබින්දුං කරොමි.",
    "translit": "Kappabinduṃ karomi.",
    "si": "කප්බිංදු නො තබන ලද අඳින පොරවන සියලු සිවුරු පරිහරණයට පෙර දුර්වර්ණ කළ යුතු ය. සිවුරෙහි කොනක් රැගෙන කප්බිංදු තැබිය යුතු ය.\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I make the kappa-dot (kappabindu).",
    "rubric_en": "Before wearing or using any robe on which no kappa-dot has been placed, it should be discoloured (dubbaṇṇa). Taking a corner of the robe, the kappa-dot should be placed.\n\"…\" — this is to be said three times."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-civara",
  "si": "සිවුරු පරිහරණය",
  "en": "Robes",
  "kind": "text",
  "count": null,
  "title_si": "සිවුරු පරිහරණය පිළිබඳ විස්තර",
  "title_en": "Details on the Use of Robes",
  "split": "title",
  "parts": [
   {
    "pali": "ඉමං සඞ්ඝාටිං අධිට්ඨාමි",
    "translit": "Imaṃ saṅghāṭiṃ adhiṭṭhāmi",
    "si": "දෙපට සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this double robe (saṅghāṭi).",
    "title_si": "සිවුරු අධිෂ්ඨානය",
    "title_en": "Determining the robes (adhiṭṭhāna)",
    "rubric_en": "Double-layered robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං උත්තරාසඞ්ගං අධිට්ඨාමි",
    "translit": "Imaṃ uttarāsaṅgaṃ adhiṭṭhāmi",
    "si": "තනිපට සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this upper robe (uttarāsaṅga).",
    "rubric_en": "Single-layered robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං අන්තරවාසකං අධිට්ඨාමි",
    "translit": "Imaṃ antaravāsakaṃ adhiṭṭhāmi",
    "si": "අඳන සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this lower robe (antaravāsaka).",
    "rubric_en": "The robe worn as a lower garment: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං වස්සිකසාටිකං අධිට්ඨාමි",
    "translit": "Imaṃ vassikasāṭikaṃ adhiṭṭhāmi",
    "si": "වැසි සළුව:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this rains-bathing cloth (vassikasāṭikā).",
    "rubric_en": "Rains-bathing cloth: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං සඞ්ඝාටිං පච්චුද්ධරාමි",
    "translit": "Imaṃ saṅghāṭiṃ paccuddharāmi",
    "si": "දෙපට සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I withdraw (the determination of) this double robe (saṅghāṭi).",
    "title_si": "සිවුරු පච්චුද්ධරණය",
    "title_en": "Withdrawing the determination (paccuddharaṇa)",
    "rubric_en": "Double-layered robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං උත්තරාසඞ්ගං පච්චුද්ධරාමි",
    "translit": "Imaṃ uttarāsaṅgaṃ paccuddharāmi",
    "si": "තනිපට සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I withdraw (the determination of) this upper robe (uttarāsaṅga).",
    "rubric_en": "Single-layered robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං අන්තරවාසකං පච්චුද්ධරාමි",
    "translit": "Imaṃ antaravāsakaṃ paccuddharāmi",
    "si": "අඳන සිවුර:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I withdraw (the determination of) this lower robe (antaravāsaka).",
    "rubric_en": "The robe worn as a lower garment: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං වස්සිකසාටිකං පච්චුද්ධරාමි",
    "translit": "Imaṃ vassikasāṭikaṃ paccuddharāmi",
    "si": "වැසි සළුව:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.\nසිවුරු අත්පසින් බහැර ව ඇත්නම් එහි දි \"ඉමං\" වෙනුවට \"එතං\"යැයි යෙදිය යුතු ය.",
    "en": "I withdraw (the determination of) this rains-bathing cloth (vassikasāṭikā).",
    "rubric_en": "Rains-bathing cloth: \"…\" — this is to be said three times.\nIf the robes are out of arm's reach, \"etaṃ\" should be used in place of \"imaṃ\"."
   },
   {
    "pali": "ඉමං චීවරං පරික්ඛාරචොළං අධිට්ඨාමි",
    "translit": "Imaṃ cīvaraṃ parikkhāracoḷaṃ adhiṭṭhāmi",
    "si": "එක සිවුරක් නම්:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this robe as a requisite-cloth (parikkhāracoḷa).",
    "title_si": "පරික්ඛාරචෝළ වශයෙන් සිවුරු අධිෂ්ඨානය",
    "title_en": "Determining robes as requisite-cloth (parikkhāracoḷa)",
    "rubric_en": "If it is a single robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමානි චීවරානි පරික්ඛාරචොළානි අධිට්ඨාමි",
    "translit": "Imāni cīvarāni parikkhāracoḷāni adhiṭṭhāmi",
    "si": "සිවුරු එකකට වැඩි නම්:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine these robes as requisite-cloths (parikkhāracoḷa).",
    "rubric_en": "If there is more than one robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං චීවරං තුය්හං විකප්පෙමි",
    "translit": "Imaṃ cīvaraṃ tuyhaṃ vikappemi",
    "si": "අතිරේක සිවුරු ළඟ තබා ගැනීමට අවශ්‍ය නම් ඒවා විකප්පනය කර තබා ගත යුතු ය. එ බැවින් උපසපන් භික්‍ෂුවක් වෙතට ගොස් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\nඑක සිවුරක් නම්:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I assign this robe to you (vikappana).",
    "title_si": "සිවුරු විකප්පනය කිරීම",
    "title_en": "Assigning robes (vikappana)",
    "rubric_en": "If one wishes to keep extra robes with him, he should have them assigned (vikappana). So he should go to a fully ordained monk, squat down, join his hands and pay homage three times, and say:\nIf it is a single robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමානි චීවරානි තුය්හං විකප්පෙමි",
    "translit": "Imāni cīvarāni tuyhaṃ vikappemi",
    "si": "සිවුරු එකකට වැඩි නම්:-\n\"…\" යි තෙවරක් කියා සිවුර හෝ සිවුරු ඒ භික්‍ෂුවට දිය යුතු ය.",
    "en": "I assign these robes to you (vikappana).",
    "rubric_en": "If there is more than one robe: \"…\" — having said this three times, the robe or robes should be given to that monk."
   },
   {
    "pali": "ඉමං චීවරං මය්හං සන්තකං පරිභුඤ්ජෙහි වා විස්සජ්ජෙහි වා යථා පච්චයං වා කරොහි / කරොථ.",
    "translit": "Imaṃ cīvaraṃ mayhaṃ santakaṃ paribhuñjehi vā vissajjehi vā yathā paccayaṃ vā karohi / karotha.",
    "si": "විකප්පනය කරන ලද සිවුරු ළඟ තබා ගත හැකි ය. නිසඟි නො වෙයි. ඒවා පරිහරණය කිරීමට නම් පච්චුද්ධාරය කළ යුතු ය. විකප්පනය ලැබූ භික්‍ෂුව එම සිවුරු අතෙහි තබාගෙන; එක සිවුරක් නම්:-\n\"…\" යි තෙවරක් කියා සිවුරු හිමියාට නැවත භාරදිය යුතු ය.",
    "en": "This robe, which belongs to me — use it, or give it away, or do with it as is fitting. (karohi to one person, karotha to several.)",
    "title_si": "පච්චුද්ධාරය",
    "title_en": "Taking back (paccuddhāra)",
    "rubric_en": "A robe that has been assigned (vikappana) may be kept; it does not become nissaggiya. To use it, paccuddhāra must be done. The monk who received the assignment should hold those robes in his hand and say:\nIf it is a single robe: \"…\" — having said this three times, the robe should be handed back to its owner."
   },
   {
    "pali": "ඉමානි චීවරානි මය්හං සන්තකානි පරිභුඤ්ජෙහි වා විස්සජ්ජෙහි වා යථා පච්චයං වා කරොහි / කරොථ",
    "translit": "Imāni cīvarāni mayhaṃ santakāni paribhuñjehi vā vissajjehi vā yathā paccayaṃ vā karohi / karotha",
    "si": "සිවුරු එකකට වැඩි නම්:-\n\"…\" යි තෙවරක් කියා සිවුරු හිමියාට නැවත භාරදිය යුතු ය.",
    "en": "These robes, which belong to me — use them, or give them away, or do with them as is fitting. (karohi to one person, karotha to several.)",
    "rubric_en": "If there is more than one robe: \"…\" — having said this three times, the robes should be handed back to their owner."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-civara-nissajjana",
  "si": "සිවුරු නිස්සජ්ජනය",
  "en": "Robe relinquishing",
  "kind": "text",
  "count": null,
  "title_si": "සිවුරු නිස්සජ්ජනය කිරීම",
  "title_en": "Relinquishing Robes (Nissajjana)",
  "split": "title",
  "parts": [
   {
    "pali": "ඉදං මෙ ආවුසො /භන්තෙ චීවරං දසහාතික්කන්තං නිස්සග්ගියං, ඉමාහං ආයස්මතො නිස්සජාමි",
    "translit": "Idaṃ me āvuso /bhante cīvaraṃ dasahātikkantaṃ nissaggiyaṃ, imāhaṃ āyasmato nissajāmi",
    "si": "උපසපන් භික්‍ෂුවක් කඨිනානිසංස ඇති කාලය හැර අධිෂ්ඨානය හෝ විකප්පනය නො කොට තමන්ට ලැබූ සිවුරක් ළඟ තබා ගත හැක්කේ දස දිනක් පමණි. එය ඉක්ම වීමෙන් නිසඟි වේ. එ සේ වූ විට නිස්සජ්ජනය කළ යුතු ය. නිසඟි වූ භික්‍ෂුව විසින් උපසපන් භික්‍ෂුවක් වෙත ගොස් සිවුරු ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\nඑක සිවුරක් නම්:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "Friend / Venerable sir, this robe of mine, kept beyond ten days, is subject to forfeiture (nissaggiya). I relinquish it to the venerable one.",
    "title_si": "දසහාතික්කන්ත චීවරය",
    "title_en": "A robe kept beyond ten days (dasāhātikkanta)",
    "rubric_en": "A fully ordained monk who, outside the period of the kathina privileges, keeps a robe he has received for more than ten days without determining or assigning it, incurs nissaggiya. In that case it should be relinquished (nissajjana). The monk who has incurred nissaggiya should go to a fully ordained monk, arrange his robe over one shoulder, squat down, join his hands and pay homage three times, and say:\nIf it is a single robe: \"…\" — this is to be said three times.",
    "notes_pali": [
     {
      "at": "නිස්සජාමි",
      "note": "ඇතැම් පොත්වල නිස්සජ්ජාමි",
      "note_en": "In some books: nissajjāmi."
     }
    ]
   },
   {
    "pali": "ඉමානි මෙ ආවුසො /භන්තෙ චීවරානි දසහාතික්කන්තානි නිස්සග්ගියානි, ඉමානාහං ආයස්මතො නිස්සජාමි",
    "translit": "Imāni me āvuso /bhante cīvarāni dasahātikkantāni nissaggiyāni, imānāhaṃ āyasmato nissajāmi",
    "si": "සිවුරු එකකට වැඩි නම්:-\n\"…\" යි තෙවරක් කියා සිවුර හෝ සිවුරු ඒ භික්‍ෂුවට දී ආපත්ති දේශනා කළ යුතු ය.",
    "en": "Friend / Venerable sir, these robes of mine, kept beyond ten days, are subject to forfeiture (nissaggiya). I relinquish them to the venerable one.",
    "rubric_en": "If there is more than one robe: \"…\" — having said this three times, the robe or robes should be given to that monk and the offence confessed."
   },
   {
    "pali": "ඉමං චීවරං ආයස්මතො දම්මි",
    "translit": "Imaṃ cīvaraṃ āyasmato dammi",
    "si": "පසු ව ඒ භික්‍ෂුව ඇවත පිළිගෙන සිවුරු හිමියාට එය භාර දිය යුතු ය.\nඑක සිවුරක් නම්:-",
    "en": "I give this robe to the venerable one.",
    "rubric_en": "Afterwards that monk should accept the confession and return the robe to its owner.\nIf it is a single robe:"
   },
   {
    "pali": "ඉමානි චීවරානි ආයස්මතො දම්මි",
    "translit": "Imāni cīvarāni āyasmato dammi",
    "si": "සිවුරු එකකට වැඩි නම්:-\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I give these robes to the venerable one.",
    "rubric_en": "If there is more than one robe: \"…\" — this is to be said three times."
   },
   {
    "pali": "ඉදං මෙ ආවුසො /භන්තෙ චීවරං රත්තිවිප්පවුත්ථං අඤ්ඤත්‍ර භික්ඛුසම්මුතියා නිස්සග්ගියං, ඉමාහං ආයස්මතො නිස්සජාමි",
    "translit": "Idaṃ me āvuso /bhante cīvaraṃ rattivippavutthaṃ aññatra bhikkhusammutiyā nissaggiyaṃ, imāhaṃ āyasmato nissajāmi",
    "si": "තුන් සිවුර අධිෂ්ඨානය කොට වාසය කරන උපසපන් භික්‍ෂුවක් කඨිනානිසංස ඇති කාලය හැර අරුණ නැගෙන විට සිවුර අත් පසින් බැහැර වූයේ නම් එම සිවුර නිසඟි වේ. එසේ වූ විට නිස්සජ්ජනය කළ යුතු ය. නිසඟි වූ භික්‍ෂුව විසින් උපසපන් භික්‍ෂුවක් වෙත ගොස් සිවුරු ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"…\" යි තෙවරක් කියා සිවුර ඒ භික්‍ෂුවට දී ආපත්ති දේශනා කළ යුතු ය.",
    "en": "Friend / Venerable sir, this robe of mine, which has spent the night apart (from me) without a bhikkhu-sammuti (agreement of the monks), is subject to forfeiture (nissaggiya). I relinquish it to the venerable one.",
    "title_si": "රත්ති විප්පවුත්ථ චීවරය නිස්සජ්ජනය කිරීම",
    "title_en": "Relinquishing a robe separated from one overnight (rattivippavuttha)",
    "rubric_en": "A fully ordained monk who lives having determined his three robes, outside the period of the kathina privileges, finds that a robe is out of arm's reach when dawn rises; that robe becomes nissaggiya. In that case it should be relinquished. The monk who has incurred nissaggiya should go to a fully ordained monk, arrange his robe over one shoulder, squat down, join his hands and pay homage three times, and say:"
   },
   {
    "pali": "ඉමං චීවරං ආයස්මතො දම්මි",
    "translit": "Imaṃ cīvaraṃ āyasmato dammi",
    "si": "පසු ව ඒ භික්‍ෂුව ඇවත පිළිගෙන සිවුරු හිමියාට එය භාර දිය යුතු ය.\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I give this robe to the venerable one."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-patta",
  "si": "පාත්‍ර පරිහරණය",
  "en": "Bowl",
  "kind": "text",
  "count": null,
  "title_si": "පාත්‍ර පරිහරණය පිළිබඳ විස්තර",
  "title_en": "Details on the Use of the Bowl",
  "split": "title",
  "parts": [
   {
    "pali": "ඉමං පත්තං අධිට්ඨාමි",
    "translit": "Imaṃ pattaṃ adhiṭṭhāmi",
    "si": "\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I determine this bowl.",
    "title_si": "පාත්‍ර අධිෂ්ඨාන කිරීම",
    "title_en": "Determining the bowl",
    "rubric_en": "\"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං පත්තං පච්චුද්ධරාමි",
    "translit": "Imaṃ pattaṃ paccuddharāmi",
    "si": "\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I withdraw (the determination of) this bowl.",
    "title_si": "පාත්‍ර පච්චුද්ධරණය කිරීම",
    "title_en": "Withdrawing the determination of the bowl",
    "rubric_en": "\"…\" — this is to be said three times."
   },
   {
    "pali": "ඉමං පත්තං තුය්හං විකප්පෙමි",
    "translit": "Imaṃ pattaṃ tuyhaṃ vikappemi",
    "si": "තමන් අධිෂ්ඨාන කර ඇති පාත්‍රයට අමතර ව අතිරේක පාත්‍රයක් ලැබුණු විට ළඟ තබා ගැනීමට අවශ්‍ය නම් එය විකප්පනය කර තබා ගත යුතු ය. නැතිනම් දස දිනක් ඇවෑමෙන් නිසඟි වේ. එ බැවින් උපසපන් භික්‍ෂුවක් වෙතට ගොස් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"…\" යි තෙවරක් කියා පාත්‍රය ඒ භික්‍ෂුවට දිය යුතු ය.",
    "en": "I assign this bowl to you (vikappana).",
    "title_si": "පාත්‍ර විකප්පනය කිරීම",
    "title_en": "Assigning the bowl (vikappana)",
    "rubric_en": "If, in addition to the bowl one has determined, one receives an extra bowl and wishes to keep it, it should be assigned (vikappana); otherwise it becomes nissaggiya after ten days. So one should go to a fully ordained monk, squat down, join his hands and pay homage three times, and say:\n\"…\" — having said this three times, the bowl should be given to that monk."
   },
   {
    "pali": "ඉමං පත්තං මය්හං සන්තකං පරිභුඤ්ජෙහි වා විස්සජ්ජෙහි වා යථාපච්චයං වා කරොහි /කරොථ",
    "translit": "Imaṃ pattaṃ mayhaṃ santakaṃ paribhuñjehi vā vissajjehi vā yathāpaccayaṃ vā karohi /karotha",
    "si": "විකප්පනය ලැබූ භික්‍ෂුව එම පාත්‍රය අතෙහි තබාගෙන:-\n\"…\" යි තෙවරක් කියා පාත්‍රය හිමියාට නැවත භාරදිය යුතු ය.",
    "en": "This bowl, which belongs to me — use it, or give it away, or do with it as is fitting. (karohi to one person, karotha to several.)",
    "rubric_en": "The monk who received the assignment should hold the bowl in his hand and say: \"…\" — having said this three times, the bowl should be handed back to its owner."
   },
   {
    "pali": "අයං මෙ ආවුසො /භන්තෙ පත්තො දසහාතික්කන්තො නිස්සග්ගියො, ඉමාහං ආයස්මතො නිස්සජාමි",
    "translit": "Ayaṃ me āvuso /bhante patto dasahātikkanto nissaggiyo, imāhaṃ āyasmato nissajāmi",
    "si": "තමන් අධිෂ්ඨාන කර ඇති පාත්‍රයට අමතර ව අතිරේක පාත්‍රයක් ලැබුණු විට එය දස දිනක් ළඟ තබා ගත හැකිය. දස දින ඉක්මවීමෙන් නිසඟි වේ. එසේ වූ විට නිස්සජ්ජනය කළ යුතු ය.\nනිසඟි වූ භික්‍ෂුව විසින් උපසපන් භික්‍ෂුවක් වෙත ගොස් සිවුරු ඒකාංස කොට පොරවා උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"…\" යි තෙවරක් කියා පාත්‍රය ඒ භික්‍ෂුවට දී ආපත්ති දේශනා කළ යුතු ය.",
    "en": "Friend / Venerable sir, this bowl of mine, kept beyond ten days, is subject to forfeiture (nissaggiya). I relinquish it to the venerable one.",
    "title_si": "පාත්‍ර නිස්සජ්ජනය කිරීම",
    "title_en": "Relinquishing the bowl (nissajjana)",
    "rubric_en": "If, in addition to the bowl one has determined, one receives an extra bowl, one may keep it for ten days. Exceeding ten days, it becomes nissaggiya. In that case it should be relinquished. The monk who has incurred nissaggiya should go to a fully ordained monk, arrange his robe over one shoulder, squat down, join his hands and pay homage three times, and say:\n\"…\" — having said this three times, the bowl should be given to that monk and the offence confessed."
   },
   {
    "pali": "ඉමං පත්තං ආයස්මතො දම්මි",
    "translit": "Imaṃ pattaṃ āyasmato dammi",
    "si": "පසු ව ඒ භික්‍ෂුව ඇවත පිළිගෙන පාත්‍රය හිමියාට එය භාර දිය යුතු ය.\n\"…\" යි තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "I give this bowl to the venerable one.",
    "rubric_en": "Afterwards that monk should accept the confession and return the bowl to its owner. \"…\" — this is to be said three times."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-bhesajja",
  "si": "භේසජ්ජ නිස්සජ්ජනය",
  "en": "Medicine",
  "kind": "text",
  "count": null,
  "title_si": "සත්තාහකාලික භේසජ්ජ නිස්සජ්ජනය",
  "title_en": "Relinquishing Seven-day Medicine (Sattāhakālika Bhesajja)",
  "split": "none",
  "parts": [
   {
    "pali": "ඉදං මෙ ආවුසො /භන්තෙ භෙසජ්ජං සත්තාහාතික්කන්තං නිස්සග්ගියං, ඉමාහං ආයස්මතො නිස්සජාමි",
    "translit": "Idaṃ me āvuso /bhante bhesajjaṃ sattāhātikkantaṃ nissaggiyaṃ, imāhaṃ āyasmato nissajāmi",
    "si": "ගිතෙල් ආදී පංච භෙසජ්ජයක් භික්‍ෂුවක් පිළිගෙන ලඟ තබාගෙන, සත්දින ඉක්ම වීමෙන් නිසඟි පචිති වේ. එම බෙහෙත එක් භික්‍ෂුවක් වෙතට ගෙන ගොස් මෙසේ නිස්සජ්ජනය කොට, පසු ව ඇවැත් දෙසිය යුතු ය.\nනිස්සජ්ජනය කළ බෙහෙත අපේක්‍ෂා සහිත ව අනුපසම්පන්නයෙකුට දුන්නේ නම්, එම භික්‍ෂුවට එය තුවාල ආදියෙහි ආලේප කිරීමට ද, වැළඳීමට ද නො වටී. පහන් දැල්වීමට හෝ කළු වර්ණ කිරීම පිණිස හෝ සුදුසු ය. අන් භික්‍ෂුවකට කායික පරිභෝගයට සුදුසු ය. ඉදින් නිස්සජ්ජනය කළ බෙහෙත අපේක්‍ෂා රහිත ව ම අනුපසම්පන්නයෙකුට දුන් පසු, එම අනුපසම්පන්න තෙමේ විසින් ම නැවත භික්‍ෂුවට ලබාදේ නම් වැළඳීමට ද සුදුසු ය.",
    "en": "Friend / Venerable sir, this medicine of mine, kept beyond seven days, is subject to forfeiture (nissaggiya). I relinquish it to the venerable one.",
    "rubric_en": "A monk who accepts one of the five medicines (bhesajja), beginning with ghee, and keeps it by him, incurs a nissaggiya pācittiya by exceeding seven days. He should take that medicine to a monk and relinquish it as follows, and afterwards confess the offence:\n[the formula]\nIf the relinquished medicine was given to an unordained person (anupasampanna) with expectation (of getting it back), it is not allowable for that monk to apply it to wounds etc. or to consume it. It is allowable for lighting lamps or for blackening (making things dark-coloured). It is allowable for another monk for bodily (external) use. If the relinquished medicine was given to an unordained person without any expectation and that person himself gives it back to the monk, it is allowable also to consume.",
    "note_si": "සැ.යු:- මේ පිළිබඳව වැඩි විස්තර සඳහා පහත සඳහන් ග්‍රන්ථ පරිශීලනය කරනු මැනවි.\n★ පාරාජිකා පාළි - භික්ඛු විභංගය (හේවාවිතාරණ මුද්‍රණය) - පි. 280\n★ සමන්තපාසාදිකා විනය අටුවා (හේවාවිතාරණ මුද්‍රණය) - පි. 522\n★ කඞ්ඛාවිතරණී මාතිකා අටුවා - පි. 76.\n★ කඞ්ඛාවිතරණී අභිනව ටීකා (භෙසජ්ජ ශික්‍ෂාව) - පි. 175\n★ උපසම්පදා ශීලය (රේරුකානේ චන්දවිමල මහනාහිමි) - පි. 166",
    "note_en": "Note: For further details on this, the following works should be consulted:\n★ Pārājikā Pāḷi — Bhikkhu-vibhaṅga (Hewavitarana edition), p. 280\n★ Samantapāsādikā Vinaya commentary (Hewavitarana edition), p. 522\n★ Kaṅkhāvitaraṇī Mātikā commentary, p. 76\n★ Kaṅkhāvitaraṇī Abhinava Ṭīkā (Bhesajja-sikkhā), p. 175\n★ Upasampadā Sīlaya (Rērukāne Candavimala Mahānāhimi), p. 166"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-kappiya",
  "si": "කැප කරවීම",
  "en": "Allowable food",
  "kind": "text",
  "count": null,
  "title_si": "ආහාර කැප කරවා ගැනීම",
  "title_en": "Making Food Allowable (Kappiya)",
  "split": "none",
  "parts": [
   {
    "pali": "කප්පියං කරොහි\nකප්පියං භන්තෙ",
    "translit": "Kappiyaṃ karohi\nKappiyaṃ bhante",
    "si": "උපසපන් භික්‍ෂුවක් නො පිසූ, පැලවෙන ස්වභාවයෙන් යුත් ආහාර (අමු කොල, පල, මල්, මුල් ආදී) හෝ නො පිසූ පැලවෙන සුළු ඇට, ඇට මිශ්‍ර ආහාර වළඳන්නේ නම්, කැප කරවාගෙන වැළඳිය යුතු ය. භික්‍ෂුව විසින් අනුපසම්පන්නයෙකුගේ අත්පස සිට කැප කරවා ගත යුතු ආහාරය අනුපසම්පන්නයාගේ අතේ තිබිය දී 'කප්පියං කරොහි' යැයි ප්‍රකාශ කළ යුතු ය. අනුපසම්පන්නයා විසින් පංචවිධ කැප කිරීම් අතුරින් (අබීජය හා නිබ්බට්ට බීජය හැර) එක්තරා ක්‍රමයකින් 'කප්පියං භන්තෙ' යැයි තෙවරක් කියා එම ආහාර කැප කළ පසු වැළඳිය හැකි ය.",
    "en": "Make it allowable (kappiya).\nIt is allowable, venerable sir.",
    "rubric_en": "A fully ordained monk who eats uncooked food of a nature that can sprout (raw leaves, fruits, flowers, roots and so on), or uncooked seeds that can sprout, or food mixed with such seeds, must have it made allowable before eating it. The food to be made allowable should be made so by standing within arm's reach of an unordained person (anupasampanna), and while the food is in the unordained person's hand saying 'kappiyaṃ karohi'.\nThe unordained person, by one of the five ways of making allowable (excluding abīja and nibbaṭṭabīja), says 'kappiyaṃ bhante' three times; after the food has been made allowable thus it may be eaten.",
    "notes_si": [
     {
      "at": "පංචවිධ",
      "note": "වැඩි විස්තර සඳහා, ★ චුල්ලවග්ග පාළි II (බු.ජ.ත්‍රි.) - පි. 14 ★ සමන්තපාසාදිකා විනය අටුවා (හේවාවිතාරණ මුද්‍රණය) - පි. 559 බලනු මැනවි.",
      "note_en": "For further details see: Cullavagga Pāḷi II (Buddha Jayanti edition), p. 14; Samantapāsādikā Vinaya commentary (Hewavitarana edition), p. 559."
     }
    ]
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-apuccha",
  "si": "ආපුච්ඡා",
  "en": "Asking leave",
  "kind": "text",
  "count": null,
  "title_si": "ආපුච්ඡා කරනය",
  "title_en": "Asking Leave (Āpucchā)",
  "split": "title",
  "parts": [
   {
    "pali": "ඔකාස අහං භන්තෙ! කෙසමස්සු ඔහරණං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Kesamassu oharaṇaṃ āpucchāmi",
    "si": "සාමණේරයන් වහන්සේලා සහ නිස සමාදන් ව සිටින උපසපන් භික්‍ෂූන් වහන්සේලා මොනයම් හෝ දෙයක් කිරීමට කලින් උපාධ්‍යායන් හෝ ආචාර්යන් වහන්සේගෙන් අවසර ගත යුතු ය.",
    "en": "Permission, venerable sir: I ask leave to shave off my hair and beard (kesamassu-oharaṇa).",
    "title_si": "හිස කෙස් රැවුල් බෑමට",
    "title_en": "To shave the head and beard"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! නඛච්ඡෙදනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Nakhacchedanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to cut my nails.",
    "title_si": "නියපොතු කැපීමට",
    "title_en": "To cut the nails"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! චීවරධොවනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Cīvaradhovanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to wash my robes.",
    "title_si": "සිවුරු සේදීමට",
    "title_en": "To wash robes"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! කෙසමස්සු ඔහරණඤ් ච නඛච්ඡෙදනඤ් ච චීවරධොවනඤ් ච ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Kesamassu oharaṇañ ca nakhacchedanañ ca cīvaradhovanañ ca āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to shave off my hair and beard, to cut my nails, and to wash my robes.",
    "title_si": "ඉහත කරුණු තුනම සඳහා මෙසේ ද කිව හැකි ය",
    "title_en": "For all three of the above, it may also be said thus"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! රජනං පචිතුං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Rajanaṃ pacituṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to boil dye (for robes).",
    "title_si": "සිවුරු සඳහා පඬු පිසීමට",
    "title_en": "To boil dye for robes"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! චීවරරජනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Cīvararajanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to dye the robes.",
    "title_si": "සිවුරු පඬු පෙවීමට",
    "title_en": "To dye robes"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! චීවරකරණං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Cīvarakaraṇaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to make (sew) a robe.",
    "title_si": "සිවුරු මැසීම සඳහා",
    "title_en": "For sewing a robe"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! පත්තපචනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Pattapacanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to fire the bowl (pattapacana).",
    "title_si": "පාත්‍ර කළු කිරීම සඳහා",
    "title_en": "For firing (blackening) the bowl"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! විකාලෙ ගාමප්පවෙසනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Vikāle gāmappavesanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to enter the village at an improper time (vikāle).",
    "title_si": "අවේලාවේ ගමට යෑම සඳහා",
    "title_en": "For entering the village at the wrong time"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! ධම්මදෙසනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Dhammadesanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to teach the Dhamma.",
    "title_si": "ධර්මය දේශනා කිරීම සඳහා",
    "title_en": "For teaching the Dhamma"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! ද්වාරවිවරණං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Dvāravivaraṇaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to open the door.",
    "title_si": "දොර විවෘත කිරීම සඳහා",
    "title_en": "For opening the door"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! ද්වාරථකනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Dvārathakanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to close the door.",
    "title_si": "දොර වැසීම සඳහා",
    "title_en": "For closing the door"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! දීපුජ්ජලනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Dīpujjalanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to light a lamp.",
    "title_si": "පහන දැල්වීම සඳහා",
    "title_en": "For lighting a lamp"
   },
   {
    "pali": "ඔකාස අහං භන්තෙ! දීපනිජ්ඣාපනං ආපුච්ඡාමි",
    "translit": "Okāsa ahaṃ bhante! Dīpanijjhāpanaṃ āpucchāmi",
    "si": "",
    "en": "Permission, venerable sir: I ask leave to extinguish a lamp.",
    "title_si": "පහන නිවීම සඳහා",
    "title_en": "For extinguishing a lamp"
   },
   {
    "pali": "",
    "translit": "",
    "si": "යි ඉහත සියලු අවසර ගැනීම් තෙවරක් ප්‍රකාශ කළ යුතු ය.",
    "en": "",
    "rubric_en": "All of the above requests for permission are to be made three times."
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-paccavekkhana",
  "si": "ප්‍රත්‍යවෙක්ෂා",
  "en": "Reflection",
  "kind": "text",
  "count": null,
  "title_si": "සිවුපසය ප්‍රත්‍යවෙක්ෂා කිරීම",
  "title_en": "Reflecting on the Four Requisites",
  "split": "title",
  "parts": [
   {
    "pali": "පටිසඞ්ඛායොනිසො චීවරං පටිසෙවාමි. යාවදෙව සීතස්ස පටිඝාතාය උණ්හස්ස පටිඝාතාය ඩංසමකසවාතාතපසිරිංසපසම්ඵස්සානං පටිඝාතාය යාවදෙව හිරිකොපීන පටිච්ඡාදනත්ථං.",
    "translit": "Paṭisaṅkhāyoniso cīvaraṃ paṭisevāmi. Yāvadeva sītassa paṭighātāya uṇhassa paṭighātāya ḍaṃsamakasavātātapasiriṃsapasamphassānaṃ paṭighātāya yāvadeva hirikopīna paṭicchādanatthaṃ.",
    "si": "මම, නුවණින් විමසා සිවුරු පරිහරණය කරමි. සීත උෂ්ණ දුරු කර ගැනීම පිණිස ය. මැසි, මදුරු, වාතය, අව්ව, සර්පාදීන්ගෙන් වන දුක් සහගත ස්පර්ශයෝ දුරු කර ගැනීම පිණිස ය. ශරීරයේ විවෘත වූ ලැජ්ජා ව උපදවන තැන් වසා ගැනීම පිණිස ය.",
    "en": "Wisely reflecting, I use the robe: only to ward off cold, to ward off heat, to ward off the touch of flies, mosquitoes, wind, sun and creeping things; only for the purpose of covering the parts of the body that arouse shame.",
    "title_si": "චීවර ප්‍රත්‍යවෙක්ෂාව",
    "title_en": "Reflection on robes"
   },
   {
    "pali": "පටිසඞ්ඛායොනිසො පිණ්ඩපාතං පටිසෙවාමි. නෙව දවාය, න මදාය, න මණ්ඩනාය, න විභූසනාය, යාවදෙව ඉමස්ස කායස්ස ඨිතියා යාපනාය විහිංසූපරතියා බ්‍රහ්මචරියානුග්ගහාය, ඉති පුරාණං ච වෙදනං පටිහංඛාමි, නවං ච වෙදනං න උප්පාදෙස්සාමි, යාත්‍රා ච මෙ භවිස්සති අනවජ්ජතා ච ඵාසුවිහාරො චාති.",
    "translit": "Paṭisaṅkhāyoniso piṇḍapātaṃ paṭisevāmi. Neva davāya, na madāya, na maṇḍanāya, na vibhūsanāya, yāvadeva imassa kāyassa ṭhitiyā yāpanāya vihiṃsūparatiyā brahmacariyānuggahāya, iti purāṇaṃ ca vedanaṃ paṭihaṃkhāmi, navaṃ ca vedanaṃ na uppādessāmi, yātrā ca me bhavissati anavajjatā ca phāsuvihāro cāti.",
    "si": "මම, නුවණින් විමසා පිණ්ඩපාතය පරිභෝග කරමි. කෙළි ක්‍රීඩා කරන ගම් දරුවන් මෙන් ජවය පිණිස නො වේ. පුරුෂ මදය පිණිස නො වේ. අන්තඃපුර ස්ත්‍රීන් මෙන් ශරීර අලංකාරය පිණිස නො වේ. නැට්ටුවන් මෙන් ශරීරය නොයෙක් ආකාරයට හැඩගස්වා ගැනීම පිණිස නො වේ. මේ සතර මහා ධාතුන්ගෙන් හටගත් කයෙහි පැවැත්ම, යැපීම පිණිස ය. බඩගිනි වේදනා දුරු කර ගැනීම පිණිස ය. සාසන බ්‍රහ්මචරියාවට අනුග්‍රහ පිණිස ය. පෙර තිබූ වේදනා දුරු කර ගැනීමත්, අලුත් වේදනා නූපදවීමත් පිණිස ය. මාගේ ජීවිත යාත්‍රා ව පිණිස ද, නිවැරදි පරිභෝගයත් පහසු විහරණයත් පිණිස ම ය.",
    "en": "Wisely reflecting, I use almsfood: not for fun, not for intoxication, not for fattening, not for beautification; but only for the endurance and continuance of this body, for the ending of discomfort, for the support of the holy life; thinking thus: \"I shall put an end to the old feeling (of hunger) and shall not arouse a new feeling (from overeating); and I shall have support for life, blamelessness, and a comfortable abiding.\"",
    "title_si": "ආහාර ප්‍රත්‍යවෙක්ෂාව",
    "title_en": "Reflection on almsfood"
   },
   {
    "pali": "පටිසඞ්ඛායොනිසො සෙනාසනං පටිසෙවාමි. යාවදෙව සීතස්ස පටිඝාතාය උණ්හස්ස පටිඝාතාය ඩංසමකසවාතාතපසිරිංසපසම්ඵස්සානං පටිඝාතාය යාවදෙව උතුපරිස්සයවිනොදනං පටිසල්ලානාරාමත්ථං.",
    "translit": "Paṭisaṅkhāyoniso senāsanaṃ paṭisevāmi. Yāvadeva sītassa paṭighātāya uṇhassa paṭighātāya ḍaṃsamakasavātātapasiriṃsapasamphassānaṃ paṭighātāya yāvadeva utuparissayavinodanaṃ paṭisallānārāmatthaṃ.",
    "si": "මම, නුවණින් විමසා සෙනසුන් පරිභෝග කරමි. සීත, උෂ්ණ දුරු කර ගැනීම පිණිස ය. මැසි, මදුරු, අව්, සුළං, සර්පාදීන්ගෙන් වන දුක් සහගත ස්පර්ශයන් දුරු කිරීම පිණිස ය. නොයෙක් ඍතු විපර්යාසයන්ගෙන් වන පීඩා දුරු කර ගැනීම පිණිස ය. එකලා ව සුව සේ විසීම පිණිස ය.",
    "en": "Wisely reflecting, I use the lodging: only to ward off cold, to ward off heat, to ward off the touch of flies, mosquitoes, wind, sun and creeping things; only for dispelling the dangers of the seasons and for delight in seclusion.",
    "title_si": "සේනාසන ප්‍රත්‍යවෙක්ෂාව",
    "title_en": "Reflection on lodgings"
   },
   {
    "pali": "පටිසඞ්ඛායොනිසො ගිලානපච්චයභෙසජ්ජපරික්ඛාරං පටිසෙවාමි. යාවදෙව උප්පන්නානං වෙය්‍යාබාධිකානං වෙදනානං පටිඝාතාය අබ්‍යාපජ්ජපරමතායාති.",
    "translit": "Paṭisaṅkhāyoniso gilānapaccayabhesajjaparikkhāraṃ paṭisevāmi. Yāvadeva uppannānaṃ veyyābādhikānaṃ vedanānaṃ paṭighātāya abyāpajjaparamatāyāti.",
    "si": "මම, නුවණින් විමසා ගිලන්පස බෙහෙත් පිරිකර පරිභෝග කරමි. උපනුපන් ආබාධයන් දුරු කිරීම පිණිස ය. වේදනාවන් දුරු කිරීම පිණිස ය.",
    "en": "Wisely reflecting, I use the requisite of medicine for the sick: only to ward off arisen painful feelings (of illness) and for the utmost freedom from affliction.",
    "title_si": "ගිලන්පස බෙහෙත් ප්‍රත්‍යවෙක්ෂාව",
    "title_en": "Reflection on medicines for the sick"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-dasadhamma",
  "si": "දසධම්ම",
  "en": "Ten subjects",
  "kind": "text",
  "count": null,
  "title_si": "පැවිද්දකු විසින් නිතර නිතර සිහිපත් කළ යුතු දසධම්ම සූත්‍රයේ එන කරුණු දසය",
  "title_en": "The Ten Subjects a Renunciant Should Often Reflect On (Dasadhamma Sutta)",
  "split": "part",
  "parts": [
   {
    "pali": "වෙවණ්ණියම්හි අජ්ඣුපගතොති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Vevaṇṇiyamhi ajjhupagatoti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "ගිහිගෙදරින් නික්ම පැවිදි බිමට පත් වූයෙමි'යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"I have entered upon a state of being without caste (vevaṇṇiya)\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(1)",
    "title_en": "(1)"
   },
   {
    "pali": "පරපටිබද්ධා මෙ ජීවිකාති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Parapaṭibaddhā me jīvikāti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "අන් අයගෙන් ලැබෙන ප්‍රත්‍ය පහසුකම්වලින් යැපෙන බැවින් මාගේ ජීවිතය අනුන්ගෙන් බැඳුණු එකක් යැයි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"My livelihood is dependent on others\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(2)",
    "title_en": "(2)"
   },
   {
    "pali": "අඤ්ඤො මෙ ආකප්පො කරණීයොති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Añño me ākappo karaṇīyoti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "ගිහියන්ට වඩා හාත්පසින් ම වෙනස් වූ ආකල්ප ඇත්තෙක්මි'යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"My deportment must be different (from that of householders)\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(3)",
    "title_en": "(3)"
   },
   {
    "pali": "කච්චි නු ඛො මෙ අත්තා සීලතො න උපවදතීති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Kacci nu kho me attā sīlato na upavadatīti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කිම? සීලය අපිරිසිදු යැයි තමා තමාට උපවාද කෙරේදැ යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"Does my own self reproach me with regard to virtue?\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(4)",
    "title_en": "(4)"
   },
   {
    "pali": "කච්චි නු ඛො මං අනුවිච්චවිඤ්ඤු සබ්‍රහ්මචාරී සීලතො න උපවදන්තීති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Kacci nu kho maṃ anuviccaviññu sabrahmacārī sīlato na upavadantīti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කිම? සීලය අපිරිසිදු යැයි සීලය හේතු කොටගෙන නුවණින් යුත් සබ්‍රහ්මචාරීන් වහන්සේලා මට උපවාද නො කෙරෙත්දැ යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"Do my wise fellow monks, having examined me, reproach me with regard to virtue?\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(5)",
    "title_en": "(5)"
   },
   {
    "pali": "සබ්බෙහි මෙ පියෙහි මනාපෙහි නානා භාවො විනා භාවො'ති පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Sabbehi me piyehi manāpehi nānā bhāvo vinā bhāvo'ti pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "ප්‍රිය වූ, මනවඩන්නා වූ සියලු දේවලින් වෙන් වීමට සිදුවන බව, විනාශ වන බව පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"There will be separation and parting from everything that is dear and pleasing to me\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(6)",
    "title_en": "(6)"
   },
   {
    "pali": "කම්මස්සකොම්හි කම්මදායාදො, කම්මයොනි කම්මබන්ධු කම්මපටිසරණො, යං කම්මං කරිස්සාමි කල්‍යාණං වා පාපකං වා, තස්ස දායාදො භවිස්සාමීති, පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Kammassakomhi kammadāyādo, kammayoni kammabandhu kammapaṭisaraṇo, yaṃ kammaṃ karissāmi kalyāṇaṃ vā pāpakaṃ vā, tassa dāyādo bhavissāmīti, pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කර්මය තමාට අයත් බව, කර්මය මාගේ දායාදයක් බව, කර්මය මාගේ ඉපදීමේ හේතු ව බව, කර්මය මාගේ නෑයා බව, කර්මය පිළිසරණ බව යම් කිසි යහපත් වූ හෝ අයහපත් වූ හෝ කර්මයක් සිදු කෙරේ නම් එය දායාද කොට ඇති බව පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"I am the owner of my kamma, the heir of my kamma, born of my kamma, bound to my kamma, with kamma as my refuge; whatever kamma I shall do, whether good or bad, of that I shall be the heir\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(7)",
    "title_en": "(7)"
   },
   {
    "pali": "කථම්භූතස්ස මෙ රත්තිං දිවා වීතිපතන්තීති, පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Kathambhūtassa me rattiṃ divā vītipatantīti, pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කෙ බඳු වූ ආකාරයකින් සිටින්නා වූ මාගේ රෑ දවල් ඉක්මෙත් දැ යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"What kind of person am I, that my nights and days are passing thus?\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(8)",
    "title_en": "(8)"
   },
   {
    "pali": "කච්චි නු ඛොහං සුඤ්ඤාගාරෙ අභිරමාමීති, පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Kacci nu khohaṃ suññāgāre abhiramāmīti, pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කිම? මම ශුන්‍යාගාරයෙහි සිත් අලවා වාසය කෙරෙත්දැ යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"Do I delight in empty places?\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(9)",
    "title_en": "(9)"
   },
   {
    "pali": "අත්ථි නු ඛො මෙ උත්තරිමනුස්සධම්මා, අලමරියඤාණදස්සන විසෙසො අධිගතො. සොහං පච්ඡිමෙ කාලෙ, සබ්‍රහ්මචාරීහි පුට්ඨො න මඞ්කු භවිස්සාමීති, පබ්බජිතෙන අභිණ්හං පච්චවෙක්ඛිතබ්බං",
    "translit": "Atthi nu kho me uttarimanussadhammā, alamariyañāṇadassana viseso adhigato. Sohaṃ pacchime kāle, sabrahmacārīhi puṭṭho na maṅku bhavissāmīti, pabbajitena abhiṇhaṃ paccavekkhitabbaṃ",
    "si": "කිම? විශේෂයෙන් ලබන ලද මාර්ගඵල සංඛ්‍යාත උතුරුමිනිස්දම් මා කෙරෙහි ඇත්දැ යි, මරණ මඤ්චකයෙහි සිටින විට සබ්‍රහ්මචාරීන් වහන්සේලා විසින් විමසන කල්හි මුහුණ යටට හරවා දුර්මුඛ නො වන්නෙමි යි පැවිද්දා විසින් නිතර මෙනෙහි කළ යුතු ය.",
    "en": "\"Have I attained any superhuman state, any distinction of knowledge and vision worthy of the noble ones, so that when I am questioned by my fellow monks in my last days I shall not be embarrassed?\" — this is to be reflected on often by one who has gone forth.",
    "title_si": "(10)",
    "title_en": "(10)"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 },
 {
  "id": "up-khamapana",
  "si": "කමා කිරීම",
  "en": "Forgiveness",
  "kind": "text",
  "count": null,
  "title_si": "තෙරුවන් කමා කිරීම",
  "title_en": "Asking Forgiveness of the Triple Gem",
  "split": "none",
  "parts": [
   {
    "pali": "කායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ භන්තෙ - භූරිපඤ්ඤතථාගත.\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ ධම්ම - සන්දිට්ඨික අකාලික.\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ සඞ්ඝ - සුපටිපන්න අනුත්තර.\nඉමාය ධම්මානුධම්මපටිපත්තියා බුද්ධං පූජෙමි,\nඉමාය ධම්මානුධම්මපටිපත්තියා ධම්මං පූජෙමි,\nඉමාය ධම්මානුධම්මපටිපත්තියා සඞ්ඝං පූජෙමි,\nඅද්ධාය ඉමාය පටිපත්තියා ජාතිජරාමරණම්හා\nපරිමුඤ්චිස්සාමි.",
    "translit": "Kāyena vācā cittena - pamādena mayā kataṃ\nAccayaṃ khama me bhante - bhūripaññatathāgata.\nKāyena vācā cittena - pamādena mayā kataṃ\nAccayaṃ khama me dhamma - sandiṭṭhika akālika.\nKāyena vācā cittena - pamādena mayā kataṃ\nAccayaṃ khama me saṅgha - supaṭipanna anuttara.\nImāya dhammānudhammapaṭipattiyā buddhaṃ pūjemi,\nImāya dhammānudhammapaṭipattiyā dhammaṃ pūjemi,\nImāya dhammānudhammapaṭipattiyā saṅghaṃ pūjemi,\nAddhāya imāya paṭipattiyā jātijarāmaraṇamhā\nParimuñcissāmi.",
    "si": "",
    "en": "Whatever offence I have committed through negligence by body, speech or mind — forgive me, venerable sir, Tathāgata of vast wisdom.\nWhatever offence I have committed through negligence by body, speech or mind — forgive me, O Dhamma, visible here and now, timeless.\nWhatever offence I have committed through negligence by body, speech or mind — forgive me, O Saṅgha, well-practising, unsurpassed.\nBy this practice in accordance with the Dhamma I honour the Buddha;\nby this practice in accordance with the Dhamma I honour the Dhamma;\nby this practice in accordance with the Dhamma I honour the Saṅgha.\nSurely by this practice I shall be freed from birth, ageing and death."
   },
   {
    "pali": "සාධූ ! සාධූ !! සාධූ !!!",
    "translit": "Sādhū ! Sādhū !! Sādhū !!!",
    "si": "",
    "en": "Sādhu! Sādhu!! Sādhu!!! (Well done!)",
    "role": "end"
   },
   {
    "pali": "සුඛා සඞ්ඝස්ස සාමග්ගි - සමග්ගානං චානුග්ගහො,\nසමග්ගරතො ධම්මට්ඨො - යොගක්ඛෙමා න ධංසති,\nසඞ්ඝං සමග්ගං කත්වාන - කප්පං සග්ගම්හි මොදතී'ති.",
    "translit": "Sukhā saṅghassa sāmaggi - samaggānaṃ cānuggaho,\nSamaggarato dhammaṭṭho - yogakkhemā na dhaṃsati,\nSaṅghaṃ samaggaṃ katvāna - kappaṃ saggamhi modatī'ti.",
    "si": "(සංඝයා ගේ සමගිය සැප ගෙනදෙයි. සමගි වූ සංඝයාට අනුබල දීම ද සැප ගෙනදෙයි. සමගි වූවනට ඇලුණු, දහමෙහි පිහිටි තැනැත්තෙක් යෝගක්ෂේමයෙන් (නිවන් ලැබීමෙන්) නො වැළකෙයි. සංඝයා සමගි කොට හේ කල්පයක් ස්වර්ගයෙහි සතුටු වේ.)",
    "en": "Happy is the concord of the Saṅgha, and the support of those in concord. One who delights in concord and is established in the Dhamma does not fall away from security (yogakkhema). Having made the Saṅgha united, one rejoices in heaven for an aeon.",
    "source_si": "බු. ජ. ත්‍රි. - චුල්ලවග්ග පාළි II - සඞ්ඝභේදක්ඛන්ධකය - පි.324"
   },
   {
    "pali": "චිරං තිට්ඨතු බුද්ධසාසනං",
    "translit": "Ciraṃ tiṭṭhatu buddhasāsanaṃ",
    "si": "",
    "en": "May the Buddha's Dispensation endure long.",
    "role": "end"
   }
  ],
  "cat": "upagrantha",
  "cat_si": "උපග්‍රන්ථය",
  "cat_en": "Appendix"
 }
];
