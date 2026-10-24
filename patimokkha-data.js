/* Bhikkhu Pātimokkha data — new structure: one continuous Pali block per section, meaning shown on demand.
 * Pali: Sinhala script (pali) + IAST (translit). Meaning: Sinhala (si) / English (en).
 * Source for frames, preliminary procedures and extra Vinaya procedures: කිතුල්ගොඩ අරණ්‍ය සේනාසනය, භික්ෂු ප්‍රාතිමෝක්ෂය */
const PATIMOKKHA_DATA = [
 {
  "id": "pubbakarana",
  "si": "පුබ්බකරණ",
  "en": "Pubbakaraṇa",
  "kind": "text",
  "count": null,
  "title_si": "සඞ්ඝුපෝසථස්ස පුබ්බකරණාදි විධි",
  "title_en": "Preliminary Procedures for the Saṅgha Uposatha",
  "parts": [
   
   {
    "pali": "විනය පුච්ඡා සම්මුති :-\nසුණාතු මේ භන්තේ සඞ්ඝෝ, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මන්තං....(ථෙරං/භික්ඛුං) විනයං පුච්ඡෙය්‍යං.\nවිනය විස්සජ්ජනසම්මුති :-\nසුණාතු මේ භන්තේ සඞ්ඝෝ, යදි සඞ්ඝස්ස පත්තකල්ලං අහං ආයස්මතා.... (ථෙරේන/ භික්ඛුනා) විනයං පුට්ඨෝ විස්සජ්ජෙය්‍යං.\nපුච්ඡා :-\nසම්මජ්ජනී පදීපෝ ච - උදකං ආසනේන ච, උපෝසථස්ස එතානි - පුබ්බකරණන්ති වුච්චති.\nඕකාසෝ සම්මජ්ජනී සම්මජ්ජනකරණං කතං කිං?\nවිස්සජ්ජන :-\nසම්මජ්ජනකරණං නිට්ඨීතං.\nපුච්ඡා :-\nපදීපෝ ච, පදීපුජ්ජලනං කතං කිං?\nවිස්සජ්ජන :-\nපදීපුජ්ජලනං නිට්ඨීතං./ ඉදානි පන සූරියාලෝකස්ස අත්ථිතාය පදීපකිච්චං ඉධ නත්ථී.\nපුච්ඡා :-\nඋදකං ආසනේන ච, ආසනේන සහ පානීයපරිභෝජනීය-උදකට්ඨපනං කතං කිං?\nවිස්සජ්ජන :-\nආසනේන සහ පානීයපරිභෝජනීයඋදකට්ඨපනං නිට්ඨීතං.\nපුච්ඡා :-\nඋපෝසථස්ස ඒතානි පුබ්බකරණන්ති වුච්චති කිං?\nවිස්සජ්ජන :-\nඒතානි චත්තාරි වත්තානි සම්මජ්ජනකරණාදීනි සඞ්ඝසන්නිපාතතෝ පඨමං කත්තබ්බත්තා, උපෝසථස්ස, උපෝසථකම්මස්ස පුබ්බකරණන්ති වුච්චති. පුබ්බකරණානීති අක්ඛාතානි.\nපුච්ඡා :-\nඡන්දපාරිසුද්ධි උතුක්ඛානං - භික්ඛුගණනා ච ඕවාදෝ, උපෝසථස්ස ඒතානි - පුබ්බකිච්චන්ති වුච්චති.\nඡන්දපාරිසුද්ධි, ඡන්දාරහානං භික්ඛූනං ඡන්දපාරිසුද්ධි ආහරණං කතං කිං?\nවිස්සජ්ජන :-\nඡන්දපාරිසුද්ධි ආහරණං ඉධ නත්ථී./ ඡන්දපාරිසුද්ධි ආහරණං නිට්ඨීතං.\nපුච්ඡා :-\nඋතුක්ඛානං, හේමන්තාදීනං තිණ්ණං උතූනං එත්තකං අතික්කන්තං, එත්තකං අවසිට්ඨන්ති. ඒවං උතු ආවික්ඛනං කතං කිං?\nවිස්සජ්ජන :-\nඋතූනීධ පන සාසනේ හේමන්තගිම්හවස්සානානං වසේන තීණි හොන්ති. අයං.........උතු, අස්මිං උතුම්හි අට්ඨ/දස උපෝසථා, ඉමිනා පක්ඛේන ඒකෝ උපෝසථෝ සම්පත්තෝ, ....... (උපෝසථා අතික්කන්තා, /උපෝසථෝ අතික්කන්තෝ,) ...... (උපෝසථා අවසිට්ඨා./උපෝසථෝ අවසිට්ඨෝ.)\nපුච්ඡා :-\nභික්ඛුගණනා ච, ඉමස්මිං උපෝසථග්ගේ සන්නිපතිතානං භික්ඛූනං ගණනා, කිත්තකා භික්ඛූ හොන්ති?\nවිස්සජ්ජන :-\nඉමස්මිං උපෝසථග්ගේ සන්නිපතිතානං භික්ඛූනං ගණනා ..... භික්ඛූ හොන්ති.\nපුච්ඡා :-\nඕවාදෝ, භික්ඛුනීනං ඕවාදෝ දාතබ්බෝ දින්නෝ කිං?\nවිස්සජ්ජන :-\nඉදානි පන තාසං නත්ථිතාය සෝ ඕවාදෝ ඉධ නත්ථී.\nපුච්ඡා :-\nඋපෝසථස්ස ඒතානි පුබ්බකිච්චන්ති වුච්චති කිං?\nවිස්සජ්ජන :-\nඒතානි පඤ්චකම්මානි ඡන්දාහරණාදීනි පාතිමොක්ඛුද්දේසතෝ පඨමං කත්තබ්බත්තා උපෝසථස්ස උපෝසථකම්මස්ස පුබ්බකිච්චන්ති වුච්චති. පුබ්බකිච්චානීති අක්ඛාතානි.\nපුච්ඡා :-\nඋපෝසථෝ යාවතිකා ච භික්ඛූ කම්මප්පත්තා සභාගාපත්තියෝ ච, න විජ්ජන්ති වජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති පත්තකල්ලන්ති වුච්චති.\nඋපෝසථෝ, තීසු උපෝසථ දිවසේසු චාතුද්දසීපණ්ණරසී-සාමග්ගීසු අජ්ජුපෝසථෝ කෝ උපෝසථෝ?\nවිස්සජ්ජන :-\nඅජ්ජුපෝසථෝ (පණ්ණරසෝ./ චාතුද්දසෝ.)\nපුච්ඡා :-\nයාවතිකා ච භික්ඛූ කම්මප්පත්තාති කිං?\nවිස්සජ්ජන :-\nයත්තකා භික්ඛූ තස්ස උපෝසථකම්මස්ස, පත්තා යුත්තා අනුරූපා, සබ්බන්තිමේන පරිච්ඡේදේන චත්තාරෝ භික්ඛූ පකතත්තා. සඞ්ඝේන අනුක්ඛිත්තා, තේ ච ඛෝ හත්ථපාසං අවිජහිත්වා ඒකසීමායං ඨිතා.\nපුච්ඡා :-\nසභාගාපත්තියෝ ච න විජ්ජන්ති කිං?\nවිස්සජ්ජන :-\nවිකාලභෝජනාදී වත්ථුසභාගාපත්තියෝ ච න විජ්ජන්ති.\nපුච්ඡා :-\nවජ්ජනීයා ච පුග්ගලා තස්මිං න හොන්ති කිං?\nවිස්සජ්ජන :-\nගහට්ඨපණ්ඩකාදයෝ ඒකවීසති වජ්ජනීයපුග්ගලා හත්ථපාසතෝ බහිකරණවසේන වජ්ජේතබ්බා. තේ අස්මිං න හොන්ති.\nපුච්ඡා :-\nපත්තකල්ලන්ති වුච්චති කිං?\nවිස්සජ්ජන :-\nසඞ්ඝස්ස උපෝසථකම්මං ඉමේහි චතූහි ලක්ඛණේහි සඞ්ගහිතං පත්තකල්ලන්ති වුච්චති. පත්තකාලවන්තන්ති අක්ඛාතං. පුබ්බකරණපුබ්බකිච්චානි සමාපෙත්වා දේසිතාපත්තිකස්ස සමග්ගස්ස භික්ඛුසඞ්ඝස්ස අනුමතියා පාතිමොක්ඛං උද්දිසිතුං ආරාධනං කරෝමි.\n\nසාධු ! සාධු !! සාධු !!!\nපුබ්බකරණාදි විධි සමත්තා.",
    "translit": "Vinaya pucchā sammuti :-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmantaṃ....(Theraṃ/bhikkhuṃ) vinayaṃ puccheyyaṃ.\nVinaya vissajjanasammuti :-\nSuṇātu me bhante saṅgho, yadi saṅghassa pattakallaṃ ahaṃ āyasmatā.... (Therena/ bhikkhunā) vinayaṃ puṭṭho vissajjeyyaṃ.\nPucchā :-\nSammajjanī padīpo ca - udakaṃ āsanena ca, uposathassa etāni - pubbakaraṇanti vuccati.\nOkāso sammajjanī sammajjanakaraṇaṃ kataṃ kiṃ?\nVissajjana :-\nSammajjanakaraṇaṃ niṭṭhītaṃ.\nPucchā :-\nPadīpo ca, padīpujjalanaṃ kataṃ kiṃ?\nVissajjana :-\nPadīpujjalanaṃ niṭṭhītaṃ./ Idāni pana sūriyālokassa atthitāya padīpakiccaṃ idha natthī.\nPucchā :-\nUdakaṃ āsanena ca, āsanena saha pānīyaparibhojanīya-udakaṭṭhapanaṃ kataṃ kiṃ?\nVissajjana :-\nĀsanena saha pānīyaparibhojanīyaudakaṭṭhapanaṃ niṭṭhītaṃ.\nPucchā :-\nUposathassa etāni pubbakaraṇanti vuccati kiṃ?\nVissajjana :-\nEtāni cattāri vattāni sammajjanakaraṇādīni saṅghasannipātato paṭhamaṃ kattabbattā, uposathassa, uposathakammassa pubbakaraṇanti vuccati. Pubbakaraṇānīti akkhātāni.\nPucchā :-\nChandapārisuddhi utukkhānaṃ - bhikkhugaṇanā ca ovādo, uposathassa etāni - pubbakiccanti vuccati.\nChandapārisuddhi, chandārahānaṃ bhikkhūnaṃ chandapārisuddhi āharaṇaṃ kataṃ kiṃ?\nVissajjana :-\nChandapārisuddhi āharaṇaṃ idha natthī./ Chandapārisuddhi āharaṇaṃ niṭṭhītaṃ.\nPucchā :-\nUtukkhānaṃ, hemantādīnaṃ tiṇṇaṃ utūnaṃ ettakaṃ atikkantaṃ, ettakaṃ avasiṭṭhanti. Evaṃ utu āvikkhanaṃ kataṃ kiṃ?\nVissajjana :-\nUtūnīdha pana sāsane hemantagimhavassānānaṃ vasena tīṇi honti. Ayaṃ.........Utu, asmiṃ utumhi aṭṭha/dasa uposathā, iminā pakkhena eko uposatho sampatto, ....... (Uposathā atikkantā, /uposatho atikkanto,) ...... (Uposathā avasiṭṭhā./Uposatho avasiṭṭho.)\nPucchā :-\nBhikkhugaṇanā ca, imasmiṃ uposathagge sannipatitānaṃ bhikkhūnaṃ gaṇanā, kittakā bhikkhū honti?\nVissajjana :-\nImasmiṃ uposathagge sannipatitānaṃ bhikkhūnaṃ gaṇanā ..... Bhikkhū honti.\nPucchā :-\nOvādo, bhikkhunīnaṃ ovādo dātabbo dinno kiṃ?\nVissajjana :-\nIdāni pana tāsaṃ natthitāya so ovādo idha natthī.\nPucchā :-\nUposathassa etāni pubbakiccanti vuccati kiṃ?\nVissajjana :-\nEtāni pañcakammāni chandāharaṇādīni pātimokkhuddesato paṭhamaṃ kattabbattā uposathassa uposathakammassa pubbakiccanti vuccati. Pubbakiccānīti akkhātāni.\nPucchā :-\nUposatho yāvatikā ca bhikkhū kammappattā sabhāgāpattiyo ca, na vijjanti vajjanīyā ca puggalā tasmiṃ na honti pattakallanti vuccati.\nUposatho, tīsu uposatha divasesu cātuddasīpaṇṇarasī-sāmaggīsu ajjuposatho ko uposatho?\nVissajjana :-\nAjjuposatho (paṇṇaraso./ Cātuddaso.)\nPucchā :-\nYāvatikā ca bhikkhū kammappattāti kiṃ?\nVissajjana :-\nYattakā bhikkhū tassa uposathakammassa, pattā yuttā anurūpā, sabbantimena paricchedena cattāro bhikkhū pakatattā. Saṅghena anukkhittā, te ca kho hatthapāsaṃ avijahitvā ekasīmāyaṃ ṭhitā.\nPucchā :-\nSabhāgāpattiyo ca na vijjanti kiṃ?\nVissajjana :-\nVikālabhojanādī vatthusabhāgāpattiyo ca na vijjanti.\nPucchā :-\nVajjanīyā ca puggalā tasmiṃ na honti kiṃ?\nVissajjana :-\nGahaṭṭhapaṇḍakādayo ekavīsati vajjanīyapuggalā hatthapāsato bahikaraṇavasena vajjetabbā. Te asmiṃ na honti.\nPucchā :-\nPattakallanti vuccati kiṃ?\nVissajjana :-\nSaṅghassa uposathakammaṃ imehi catūhi lakkhaṇehi saṅgahitaṃ pattakallanti vuccati. Pattakālavantanti akkhātaṃ. Pubbakaraṇapubbakiccāni samāpetvā desitāpattikassa samaggassa bhikkhusaṅghassa anumatiyā pātimokkhaṃ uddisituṃ ārādhanaṃ karomi.\n\nSādhu ! Sādhu !! Sādhu !!!\nPubbakaraṇādi vidhi samattā.",
    "si": "විනය ප්‍රශ්න විචාරීමේ සම්මුතිය :-\nස්වාමීනි! සංඝතෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේගෙන්/ භික්ෂුවගෙන්) විනය විචාරන්නෙමි.\nවිනය ප්‍රශ්නවලට පිළිතුරු ලබාදීමේ සම්මුතිය :-\nස්වාමීනි! සංඝතෙමේ මාගේ කීම අසාවා. ඉදින් සංඝයාට ප්‍රාප්ත කාලය වී නම් මම ආයුෂ්මත්.... (තෙරුන් වහන්සේ විසින්/භික්ෂුව විසින්) විනය විමසන ලද්දේ විසඳන්නෙමි.\n\nප්‍රශ්න විචාරීම :-\nඇමදීම ද, පහන් දල්වීම ද, ආසන පැනවීම සමග පැන් තැබීම ද යන ඒවා උපෝසථයේ පූර්වකරණ යැයි කියනු ලැබේ.\nඅවසරයි! ඇමදීම, කෙසේ ද? ඇමදීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nඇමදීම නිමා කරන ලදී.\nප්‍රශ්න විචාරීම :-\nපහන් දල්වීම, කෙසේ ද? පහන් දල්වීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nපහන් දල්වීම සිදු කරන ලදී./ දැන් සූර්යාලෝකය ඇති බැවින් පහන් දල්වීමක් මෙහි නොමැත.\nප්‍රශ්න විචාරීම :-\nඅසුන් පැනවීම සමග පැන් තැබීම, කෙසේ ද? අසුන් පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nඅසුන් පැනවීම සමග පානය කළ යුතු පරිභෝග කළ යුතු පැන් තැබීම නිමා කරන ලදී.\nප්‍රශ්න විචාරීම :-\nකුමක් නිසා ඒවා උපෝසථයෙහි පූර්වකරණ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම :-\nඋපෝසථයෙහි ඇමදීම ආදී ඒ වත් සතර සංඝයාහට පැමිණීමට පළමුව කළ යුතු බැවින්, පොහොය කර්මයේ පූර්වකරණ යැයි කියනු ලැබේ. පූර්වකරණයි යැයි කියන ලද්දාහු වෙත්.\nප්‍රශ්න විචාරීම :-\nඡන්ද පාරිශුද්ධිය ගෙන ඒම, සෘතුව කීම, භික්ෂූන් වහන්සේලා ගණන් කිරීම ද, අවවාද දීම ද යන ඒවා උපෝසථයෙහි පූර්ව කෘත්‍ය යැයි කියනු ලැබේ.\nඡන්ද පාරිශුද්ධිය, කෙසේ ද? ඡන්දය දීමට සුදුසු භික්ෂූන්ගේ ඡන්ද පාරිශුද්ධිය ගෙන ඒම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nඡන්ද පාරිශුද්ධිය ගෙන ඒමක් මෙහි නොමැත./ ඡන්ද පාරිශුද්ධිය ගෙන ඒම නිම කරන ලදී.\nප්‍රශ්න විචාරීම :-\nසෘතු කීම, කෙසේ ද? හේමන්ත ආදී සෘතු තුනට අනුව මෙ පමණක් ඉක්ම ගියේ, මෙ පමණක් ශේෂ වූයේ යැයි මෙසේ සෘතුව කීම කරන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nමේ ශාසනයෙහි හේමන්ත, ගිම්හාන, වස්සාන වශයෙන් සෘතු තුනක් වෙත්; මේ ......... සෘතුවයි; මේ සෘතුවෙහි අටක් වූ/දහයක් වූ උපෝසථයෝ වෙත්; මෙම පක්ෂයෙන් එක් පොහොයක් පැමිණියේ වෙයි; ....... (උපෝසථ ඉක්ම ගිය හ; /උපෝසථයක් ඉක්ම ගියේ ය;) ...... (උපෝසථ ශේෂ වූහ./උපෝසථයක් ශේෂ වූයේ ය.)\nප්‍රශ්න විචාරීම :-\nභික්ෂූන් ගණන් කිරීම, මෙම පොහොය ගෙහි රැස්වූ භික්ෂූන්ගේ ගණනින් කොපමණ භික්ෂූහු වෙත් ද?\nපිළිතුරු ලබාදීම :-\nමෙම පොහොය ගෙහි රැස්වූ භික්ෂූන්ගේ ගණනින් භික්ෂූන් වහන්සේලා ...... නමක් වෙත්.\nප්‍රශ්න විචාරීම :-\nඅවවාද දීම, කෙසේ ද? කිම භික්ෂුණීන්ට දිය යුතු අවවාද දෙන ලද්දේ ද?\nපිළිතුරු ලබාදීම :-\nදැන් වනාහී අදාළ නොමැති බැවින් ඒ අවවාද දීමක් මෙහි නැත.\nප්‍රශ්න විචාරීම :-\nකුමක් නිසා ඒවා උපෝසථයෙහි පූර්වකෘත්‍ය යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම :-\nඋපෝසථයෙහි ඒ ඡන්දය රැගෙන ඒම ආදී ක්‍රියා පහ පාමොක් උදෙසීමට පළමුව කළ යුතු බැවින්, උපෝසථ කර්මයේ පූර්ව කෘත්‍යයෝ යැයි කියන ලද්දාහු වෙත්.\nප්‍රශ්න විචාරීම :-\nපොහොය දිනය ද, පැමිණිය යුතු යමතාක් භික්ෂූන් වහන්සේලා පොහොය කර්මයට පැමිණියාහු ද, සමාන ඇවැත් කිසිවක් විද්‍යමාන නො වෙත් ද, බැහැර කළ යුතු පුද්ගලයන් පොහොය ගෙයි නො වෙත් ද, එවිට එය පොහොය කර්මයට පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ. චාතුද්දසී, පණ්ණරසී, සාමග්ගී යන උපෝසථ දින තුන අතුරින් අද උපෝසථය කවර උපෝසථයක් ද?\nපිළිතුරු ලබාදීම :-\nඅද (පණ්ණරසී/ චාතුද්දසී) පොහොයකි.\nප්‍රශ්න විචාරීම :-\nකිමෙක් ද? පැමිණිය යුතු යමතාක් භික්ෂූන් වහන්සේලා පොහොය කර්මයට පැමිණියාහු ද?\nපිළිතුරු ලබාදීම :-\nයම් පමණ භික්ෂූන් වහන්සේලා ඒ උපෝසථ කර්මයට පැමිණියාහු ද, ඇතුළත් වූවාහු ද, ගැළපුනාහු ද, යටත් පිරිසෙයින් භික්ෂූන් වහන්සේලා සතර නමක්වත් ප්‍රකෘති භික්ෂූහු වෙත් ද, සංඝයා විසින් උක්ඛේපනීය කර්මය නො කරන ලද්දාහු වෙත් ද, ඒ භික්ෂූන් වහන්සේලා ද අත්පසින් බැහැර නො වී එක සීමාවක වැඩ සිටියාහු වෙත්.\nප්‍රශ්න විචාරීම :-\nකිමෙක් ද? සමාන ඇවැත් විද්‍යමාන නො වෙත් ද?\nපිළිතුරු ලබාදීම :-\nවිකාල භෝජන ආදී සමාන වස්තු සහිත ඇවැත් විද්‍යමාන නො වෙත්.\nප්‍රශ්න විචාරීම :-\nකිමෙක් ද? බැහැර කළ යුතු පුද්ගලයන්ගෙන් පොහොය ගෙයි නො වෙත් ද?\nපිළිතුරු ලබාදීම :-\nගිහි, පණ්ඩක ආදී එක් විසි වජ්ජනීය පුද්ගලයෝ අත්පසින් බැහැර කිරීම් වශයෙන් බැහැර කළ යුතුහු, ඔවුහු මෙහි නො වෙත්.\nප්‍රශ්න විචාරීම :-\nකුමක් හෙයින් පැමිණි කල් ඇත්තේ යැයි කියනු ලැබේ ද?\nපිළිතුරු ලබාදීම :-\nසංඝයාගේ උපෝසථ කර්මය මෙම ලක්ෂණ සතරින් සංග්‍රහ වූයේ ප්‍රාප්ත කාලය යැයි කියනු ලැබේ. පොහොය කිරීමට සුදුසු කාලය (පැමිණියේ) වූයේ යැයි කියන ලදී.\n\nපූර්වකරණ, පූර්ව (කෘත්‍ය) කෘත්‍යයෝ නිමා කොට, දෙසන ලද ආපත්ති ඇති සමගි භික්ෂු සංඝයා වහන්සේලාගේ අනුමැතියෙන් පාමොක් උදෙසීමට ආරාධනා කරමි.\n\nසාදු ! සාදු !! සාදු !!!\nපූර්වකරණ ආදී විධි සමාප්තයි.",
    "en": "The consent to ask the Vinaya questions:\nVenerable sirs, may the Saṅgha hear me. If it is the right time for the Saṅgha, I would question the Venerable .... (elder / monk) on the Vinaya.\nThe consent to answer the Vinaya questions:\nVenerable sirs, may the Saṅgha hear me. If it is the right time for the Saṅgha, when questioned on the Vinaya by the Venerable ...., I would answer.\n\nQuestion:\nSweeping, a lamp, water and seating — these are called the preliminary tasks (pubbakaraṇa) of the Uposatha.\nPermit me: Sweeping — has the sweeping been done?\nAnswer: The sweeping is finished.\nQuestion: The lamp — has the lamp been lit?\nAnswer: The lighting of the lamp is finished. / Since it is now daylight, there is no need for a lamp here.\nQuestion: Water and seating — have the seats, together with drinking water and water for use, been set out?\nAnswer: The seats, together with drinking water and water for use, have been set out.\nQuestion: Why are these called the preliminary tasks of the Uposatha?\nAnswer: These four duties, beginning with sweeping, are to be done first, before the Saṅgha assembles. Therefore they are called the preliminary tasks of the Uposatha, of the Uposatha act.\nQuestion:\nThe bringing of consent and purity, the announcing of the season, the counting of the monks, and the exhortation — these are called the preliminary duties (pubbakicca) of the Uposatha.\nBringing consent and purity — has the consent and purity of the monks entitled to give it been brought?\nAnswer: There is no bringing of consent and purity here. / The bringing of consent and purity is done.\nQuestion: Announcing the season — has it been announced how much of the three seasons, Hemanta and the rest, has passed and how much remains?\nAnswer: In this Dispensation there are three seasons: the cold, the hot and the rainy. This is the .......... season; in this season there are eight / ten Uposatha days; with this fortnight one Uposatha has arrived; ....... Uposathas have passed (one Uposatha has passed); ....... Uposathas remain (one Uposatha remains).\nQuestion: Counting the monks — how many monks are gathered in this Uposatha hall?\nAnswer: The number of monks gathered in this Uposatha hall is ..... monks.\nQuestion: The exhortation — has the exhortation of the nuns been given, as it should be?\nAnswer: Since there are none now, there is no exhortation here.\nQuestion: Why are these called the preliminary duties of the Uposatha?\nAnswer: These five tasks, beginning with bringing the consent, are to be done before the recital of the Pātimokkha. Therefore they are called the preliminary duties of the Uposatha act.\nQuestion:\nIs it the Uposatha day; have as many monks as are required for the act come; is there no shared offence; and are the persons to be avoided absent? Then it is called \"the right time\". Of the three Uposatha days — the fourteenth, the fifteenth and the day of concord — which Uposatha is today's?\nAnswer: Today's Uposatha is the fifteenth. / the fourteenth.\nQuestion: Have as many monks as are required for the act come?\nAnswer: As many monks as are fitting and proper for this Uposatha act — at least four regular monks, not suspended by the Saṅgha — have not left the arm's reach and are staying within one boundary.\nQuestion: Is there no shared offence?\nAnswer: There is no shared offence arising from the same matter, such as eating at the wrong time.\nQuestion: Are the persons to be avoided absent?\nAnswer: The twenty-one persons to be avoided, beginning with laypeople and pandakas, are to be sent beyond arm's reach. They are not present here.\nQuestion: What is meant by \"the right time\"?\nAnswer: The Uposatha act of the Saṅgha, comprised of these four characteristics, is called the right time. Having completed the preliminary tasks and duties, with the consent of the harmonious Saṅgha of monks who have confessed their offences, I invite the recital of the Pātimokkha.\n\nSādhu! Sādhu!! Sādhu!!!\nThe preliminary procedures are complete.",
    "title_si": "සඞ්ඝුපෝසථස්ස පුබ්බකරණාදි විධි",
    "title_en": "Preliminary Procedures for the Saṅgha Uposatha"
   }
   ]
},
{
 "id": "nidana",
 "si": "නිදානුද්දේස",
 "en": "Nidānuddesa",
 "kind": "text",
 "count": null,
 "title_si": "නිදානුද්දේසය",
 "title_en": "Nidānuddesa — The Introduction",
 "parts": [
  {
   "pali": "සුණාතු මේ භන්තේ සඞ්ඝෝ, අජ්ජුපෝසථෝ (පණ්ණරසෝ/ චාතුද්දසෝ), යදි සඞ්ඝස්ස පත්තකල්ලං, සඞ්ඝෝ උපෝසථං කරෙය්‍ය, පාතිමොක්ඛං උද්දිසෙය්‍ය. කිං සඞ්ඝස්ස පුබ්බකිච්චං? පාරිසුද්ධිං ආයස්මන්තෝ ආරෝචේථ, පාතිමොක්ඛං උද්දිසිස්සාමි. තං සබ්බේව සන්තා සාධුකං සුණෝම මනසි කරෝම. යස්ස සියා ආපත්ති, සෝ ආවිකරෙය්‍ය. අසන්තියා ආපත්තියා තුණ්හී භවිතබ්බං. තුණ්හීභාවේන ඛෝ පනායස්මන්තේ පරිසුද්ධාති වේදිස්සාමි.\n\nයථා ඛෝ පන පච්චේකපුට්ඨස්ස වෙය්‍යාකරණං හෝති, ඒවමේවං ඒවරූපාය පරිසාය යාවතතියං අනුසාවිතං හෝති. යෝ පන භික්ඛු යාවතතියං අනුසාවියමානේ, සරමානෝ සන්තිං ආපත්තිං නාවිකරෙය්‍ය, සම්පජානමුසාවාදස්ස හෝති. සම්පජානමුසාවාදෝ ඛෝ පනායස්මන්තෝ අන්තරායිකෝ ධම්මෝ වුත්තෝ භගවතා. තස්මා සරමානේන භික්ඛුනා ආපන්නේන විසුද්ධාපෙක්ඛේන සන්තී ආපත්ති ආවිකාතබ්බා, ආවිකතා හිස්ස ඵාසු හෝති.\n\nඋද්දිට්ඨං ඛෝ ආයස්මන්තෝ නිදානං.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
   "translit": "Suṇātu me bhante saṅgho, ajjuposatho (paṇṇaraso/ cātuddaso), yadi saṅghassa pattakallaṃ, saṅgho uposathaṃ kareyya, pātimokkhaṃ uddiseyya. Kiṃ saṅghassa pubbakiccaṃ? Pārisuddhiṃ āyasmanto ārocetha, pātimokkhaṃ uddisissāmi. Taṃ sabbeva santā sādhukaṃ suṇoma manasi karoma. Yassa siyā āpatti, so āvikareyya. Asantiyā āpattiyā tuṇhī bhavitabbaṃ. Tuṇhībhāvena kho panāyasmante parisuddhāti vedissāmi.\n\nYathā kho pana paccekapuṭṭhassa veyyākaraṇaṃ hoti, evamevaṃ evarūpāya parisāya yāvatatiyaṃ anusāvitaṃ hoti. Yo pana bhikkhu yāvatatiyaṃ anusāviyamāne, saramāno santiṃ āpattiṃ nāvikareyya, sampajānamusāvādassa hoti. Sampajānamusāvādo kho panāyasmanto antarāyiko dhammo vutto bhagavatā. Tasmā saramānena bhikkhunā āpannena visuddhāpekkhena santī āpatti āvikātabbā, āvikatā hissa phāsu hoti.\n\nUddiṭṭhaṃ kho āyasmanto nidānaṃ.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
   "si": "ස්වාමීනි! සංඝ තෙමේ මාගේ කීම අසාවා. අද (පණ්ණරසී/ චාතුද්දසී) පොහොය දවසයි. ඉදින් සංඝයාට කාලය පැමිණියේ නම් සංඝ තෙමේ පොහොය කරන්නේ ය. පාමොක් උදෙසන්නේ ය. සංඝයාගේ පූර්වකෘත්‍යය කිමෙක් ද? ආයුෂ්මත්වරුනි! පිරිසිදු බව ප්‍රකාශ කරවු. පාමොක් උදෙසන්නෙමි. ඒ පාමොක් මේ පිරිසෙහි වූ අපි සියලු දෙන ම මනා කොට අසමු. මෙනෙහි කරමු. යමෙකුට ඇවැතක් වේ නම්, හෙතෙම එය කියන්නේ ය. ඇවැත් නැති කල්හි නිශ්ශබ්ද විය යුතු ය. නිහඬ බවින් ආයුෂ්මතුන් වහන්සේලා පිරිසිදු වූවහු යැයි දැනගන්නෙමි.\n\nයම් සේ වෙන වෙන ම අසන ලද්දහුගේ ඇසූ දේට පිළිතුරු දීමක් වේ ද? එසේ ම එබඳු පිරිසෙක්හි තුන්වරක් දක්වා අස්වන ලද්දේ වේ. යම් භික්ෂුවක් තුන්වර දක්වා ඇස්වීම කරනු ලබන කල්හි තමා තුළ ඇති ඇවැත සිහිකරමින් නො කියන්නේ ද, ඔහුට සම්පජානමුසාවාද ඇවැත සිදුවේ. ආයුෂ්මත්වරුනි! සම්පජානමුසාවාදය අන්තරායකර ධර්මයකැයි භාග්‍යවතුන් වහන්සේ විසින් වදාරන ලද සේක. ඒ නිසා ඇවැතට පත්වූ, එය සිහිකරන්නාවූ, පිරිසිදු බව බලාපොරොත්තු වන භික්ෂුව විසින් තිබෙන ඇවැත් ප්‍රකාශ කළ යුත්තාහ. එසේ ප්‍රකාශ කිරීම හේතුකොටගෙන ඒ භික්ෂුවට පහසු භාවය වෙයි.\n\nආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
   "en": "Venerable sirs, may the Saṅgha hear me. Today is the Uposatha of the fifteenth (fourteenth). If it is the right time for the Saṅgha, let the Saṅgha perform the Uposatha and recite the Pātimokkha. What is the Saṅgha's preliminary duty? Venerables, declare your purity; I shall recite the Pātimokkha. All of us who are present will listen carefully and attend to it well. Whoever has an offence should reveal it; if there is no offence, one should remain silent. By your silence I shall know that the venerables are pure.\n\nJust as one who is asked individually gives a reply, so too in an assembly such as this it is announced up to three times. If a monk, when it is announced up to three times, remembers an existing offence and does not reveal it, he incurs deliberate false speech. Venerables, deliberate false speech has been declared by the Blessed One to be an obstructive thing. Therefore a monk who has fallen into an offence, who remembers it and wishes to be pure, should reveal the existing offence; when revealed, it will be a relief for him.\n\nThe Introduction has been recited, venerables.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it."
  },
  {
   "pali": "නිදානුද්දේසෝ පඨමෝ.",
   "translit": "Nidānuddeso paṭhamo.",
   "si": "පළමුවැනි නිදාන උද්දේසය යි.",
   "en": "The first recital, the Introduction, is finished.",
   "role": "end"
  }
 ]
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
    "pali": "තත්‍රිමේ චත්තාරෝ පාරාජිකා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Tatrime cattāro pārājikā dhammā uddesaṃ āgacchanti.",
    "si": "විනයෙහි මේ සතරක් වූ පාරාජික ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these four Pārājika rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛූනං සික්ඛාසාජීවසමාපන්නෝ සික්ඛං අප්පච්චක්ඛාය දුබ්බල්‍යං අනාවිකත්වා මේථුනං ධම්මං පටිසේවෙය්‍ය, අන්තමසෝ තිරච්ඡානගතායපි, පාරාජිකෝ හෝති අසංවාසෝ.",
    "translit": "Yo pana bhikkhu bhikkhūnaṃ sikkhāsājīvasamāpanno sikkhaṃ appaccakkhāya dubbalyaṃ anāvikatvā methunaṃ dhammaṃ paṭiseveyya, antamaso tiracchānagatāyapi, pārājiko hoti asaṃvāso.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂූන්ගේ ශික්ෂා සාජීව සමාපන්න වූයේ, ශික්ෂාව අත් නොහැර, දුර්වල බව නොදන්වා, මෛථුන ධර්මය සේවනය කරයි නම්, යටත් පිරිසෙයින් තිරච්ඡාන ගත සත්ත්වයකු හා වුවද, ඔහු පාරාජික වේ. අසංවාස වේ.",
    "en": "Whatever monk, having undertaken the monks' training and way of life, without having abandoned the training, without having declared his weakness, should engage in sexual intercourse, even with a female animal — he is defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "යෝ පන භික්ඛු ගාමා වා අරඤ්ඤා වා අදින්නං ථෙය්‍යසඞ්ඛාතං ආදියෙය්‍ය, යථාරූපේ අදින්නාදානේ රාජානෝ චෝරං ගහෙත්වා හනෙය්‍යුං වා බන්ධෙය්‍යුං වා පබ්බාජෙය්‍යුං වා; 'චෝරෝසි බාලෝසි මූළ්හෝසි ථෙනෝසී'ති, තථාරූපං භික්ඛු අදින්නං ආදියමානෝ, අයම්පි පාරාජිකෝ හෝති අසංවාසෝ.",
    "translit": "Yo pana bhikkhu gāmā vā araññā vā adinnaṃ theyyasaṅkhātaṃ ādiyeyya, yathārūpe adinnādāne rājāno coraṃ gahetvā haneyyuṃ vā bandheyyuṃ vā pabbājeyyuṃ vā; 'corosi bālosi mūḷhosi thenosī'ti, tathārūpaṃ bhikkhu adinnaṃ ādiyamāno, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්ෂුවක් වනාහි ගමකින් හෝ වනයකින් හෝ නොදුන් දෙයක් සොර සංඛ්‍යාත කොට ගනී නම්, එබඳු නොදුන් ගැනීමක් නිසා රජවරු අල්ලාගෙන මරත් හෝ බඳිත් හෝ රටින් පිටමං කරත් හෝ 'නුඹ සොරෙක්, නුඹ මෝඩයෙක්, නුඹ මුළාවූවෙක්, නුඹ සොරෙක්' යැයි කියත් ද, එබඳු වූ නොදුන් දෙයක් ඒ භික්ෂුව ගනී නම්, ඔහු ද පාරාජික වේ. අසංවාස වේ.",
    "en": "Whatever monk, in a village or in the wilderness, should take what is not given, in the manner of theft — such that kings would arrest the thief, execute or imprison or banish him, saying 'You are a thief, you are a fool, you are mad, you are a robber' — that monk, taking what is not given, is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච මනුස්සවිග්ගහං ජීවිතා වෝරෝපෙය්‍ය, සත්ථහාරකං වාස්ස පරියේසෙය්‍ය, මරණවණ්ණං වා සංවණ්ණෙය්‍ය, මරණාය වා සමාදපෙය්‍ය; 'අම්භෝ පුරිස, කිං තුය්හිමිනා පාපකේන දුජ්ජීවිතේන, මතං තේ ජීවිතා සෙය්‍යෝ'ති. ඉති චිත්තමනෝ චිත්තසඞ්කප්පෝ අනේකපරියායේන මරණවණ්ණං වා සංවණ්ණෙය්‍ය, මරණාය වා සමාදපෙය්‍ය, අයම්පි පාරාජිකෝ හෝති අසංවාසෝ.",
    "translit": "Yo pana bhikkhu sañcicca manussaviggahaṃ jīvitā voropeyya, satthahārakaṃ vāssa pariyeseyya, maraṇavaṇṇaṃ vā saṃvaṇṇeyya, maraṇāya vā samādapeyya; 'ambho purisa, kiṃ tuyhiminā pāpakena dujjīvitena, mataṃ te jīvitā seyyo'ti. Iti cittamano cittasaṅkappo anekapariyāyena maraṇavaṇṇaṃ vā saṃvaṇṇeyya, maraṇāya vā samādapeyya, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්ෂුවක් වනාහි දැන දැන මිනිස් සිරුරක් ජීවිතයෙන් තොර කරයි නම්, ඔහුට ආයුධයක් සපයයි නම්, මරණය වර්ණනා කරයි නම්, මරණයට සමාදන් කරවයි නම් — 'අහෝ පුරුෂය, මේ පවින් හා දුර්ජීවයෙන් ඔබට කිම? මැරීම ඔබට ජීවත් වීමට වඩා යහපත් ය' යැයි — මෙසේ සිතින් හෝ සිතුවිල්ලෙන් හෝ නොයෙක් ආකාරයෙන් මරණය වර්ණනා කරයි නම්, මරණයට සමාදන් කරවයි නම්, ඔහු ද පාරාජික වේ. අසංවාස වේ.",
    "en": "Whatever monk should intentionally deprive a human being of life, or seek for a weapon for him, or praise the advantages of death, or incite him to death, saying 'O man, what is the use to you of this evil, wicked life? Death is better for you than life' — or if with this intention, with this mind, with this resolve, he should in many ways praise the advantages of death or incite him to death — he is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යෝ පන භික්ඛු අනභිජානං උත්තරිමනුස්සධම්මං අත්තුපනායිකං අලමරියඤාණදස්සනං සමුදාචරෙය්‍ය: 'ඉති ජානාමි ඉති පස්සාමී'ති. තතෝ අපරේන සමයේන සමනුග්ගාහියමානෝ වා අසමනුග්ගාහියමානෝ වා ආපන්නෝ විසුද්ධාපේක්ඛෝ ඒවං වදෙය්‍ය: 'අජානමෙවං ආවුසෝ අවචං ජානාමි, අපස්සං පස්සාමි, තුච්ඡං මුසා විලපින්'ති, අඤ්ඤත්‍ර අධිමානා, අයම්පි පාරාජිකෝ හෝති අසංවාසෝ.",
    "translit": "Yo pana bhikkhu anabhijānaṃ uttarimanussadhammaṃ attupanāyikaṃ alamariyañāṇadassanaṃ samudācareyya: 'Iti jānāmi iti passāmī'ti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā āpanno visuddhāpekkho evaṃ vadeyya: 'Ajānamevaṃ āvuso avacaṃ jānāmi, apassaṃ passāmi, tucchaṃ musā vilapin'ti, aññatra adhimānā, ayampi pārājiko hoti asaṃvāso.",
    "si": "යම් භික්ෂුවක් වනාහි නොදන්නා වූ උත්තරිමනුෂ්‍ය ධර්මයක් (ඈනා දර්ශනයක්) ඇති බව 'මම දනිමි, මම දකිමි' යැයි ප්‍රකාශ කරයි නම්, පසු කලෙක විචාරණ ලද්දේ හෝ නොවිචාරණ ලද්දේ හෝ ඇවැතට පැමිණ පිරිසිදු බව පතන්නේ 'ඇවැත්නි මම නොදැන කීවෙමි, නොදැක දුටිමි කීවෙමි, හිස් වචනයක් බොරුවට කීවෙමි' යැයි මෙසේ කියයි නම්, මානය හැර, ඔහු ද පාරාජික වේ. අසංවාස වේ.",
    "en": "Whatever monk, without knowing, should lay claim to a superhuman state, to a state of noble knowledge and vision worthy of the noble ones, saying 'Thus I know, thus I see' — and later, whether questioned or not, being remorseful and seeking purification, should say 'Venerable Sirs, not knowing, I said I know; not seeing, I said I see; I spoke empty falsehood' — apart from over-estimation (adhimāna), he is also defeated (pārājika), and is no longer in communion.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ, චත්තාරෝ පාරාජිකා ධම්මා. යේසං භික්ඛු අඤ්ඤතරං වා අඤ්ඤතරං වා ආපජ්ජිත්වා න ලභති භික්ඛූහි සද්ධිං සංවාසං යථා පුරේ තථා පච්ඡා, පාරාජිකෝ හෝති අසංවාසෝ.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, cattāro pārājikā dhammā. Yesaṃ bhikkhu aññataraṃ vā aññataraṃ vā āpajjitvā na labhati bhikkhūhi saddhiṃ saṃvāsaṃ yathā pure tathā pacchā, pārājiko hoti asaṃvāso.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සතර පාරාජික ඇවැත් උදෙසන ලද්දාහු ය. භික්ෂුවක් එයින් යම් ඇවැතකට පත් වී භික්ෂූන් හා ඇසුරක් නො ලබයි. ගිහිකල යම් සේ ද දැන්දු එසේ ම පැරදුනේ වෙයි.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the four Pārājika rules have been recited. A monk who has fallen into any one of them no longer has communion with the monks: as he was before, as a layman, so he is after — defeated, without communion.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාරාජිකුද්දේසෝ දුතියෝ.",
    "translit": "Pārājikuddeso dutiyo.",
    "si": "දෙවෙනි පාරාජිකා උද්දේසය යි.",
    "en": "The second recital, the Pārājikas, is finished.",
    "role": "end"
   }
  ]
 },
 {
  "id": "sanghadisesa",
  "si": "සඞ්ඝාදිසේසා",
  "en": "Saṅghādisesā",
  "kind": "rules",
  "count": 13,
  "num": 2,
  "title_si": "(2) සඞ්ඝාදිසේසා ධම්මා",
  "title_en": "(2) Saṅghādisesā Dhammā",
  "parts": [
   {
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ තේරස සඞ්ඝාදිසේසා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto terasa saṅghādisesā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ සඟවෙසෙස් ඇවැත් දහතුන උදෙසීමට පැමිණෙත්.",
    "en": "Here these thirteen Saṅghādisesa rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "සඤ්චේතනිකා සුක්කවිස්සට්ඨි අඤ්ඤත්‍ර සුපිනන්තා, සඞ්ඝාදිසේසෝ.",
    "translit": "Sañcetanikā sukkavissaṭṭhi aññatra supinantā, saṅghādiseso.",
    "si": "සිහිනයෙන් තොර ව, සිතා මතා ශුක්‍ර විසර්ජනය කිරීම සංඝාදිසේස ඇවැත් වේ.",
    "en": "Intentional emission of semen, except in a dream, is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "යෝ පන භික්ඛු ඕතිණ්ණෝ විපරිණතේන චිත්තේන මාතුගාමේන සද්ධිං කායසංසග්ගං සමාපජ්ජෙය්‍ය, හත්ථගාහං වා වේණිගාහං වා අඤ්ඤතරස්ස වා අඤ්ඤතරස්ස වා අඞ්ගස්ස පරාමසනං, සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu omaṇṇo vipariṇatena cittena mātugāmena saddhiṃ kāyasaṃsaggaṃ samāpajjeyya, hatthagāhaṃ vā veṇigāhaṃ vā aññatarassa vā aññatarassa vā kāyabhāgassa parāmasanaṃ, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි රාගයෙන් මඩනා ලද, විපරීත වූ සිතින් කාන්තාවක් සමග කාය සංසර්ගයට සමවදී නම් — අත් අල්ලා ගැනීම, කෙස් ඇල්ලීම, යම් අඟපසඟ පිරිපිරිමැදීමක් හෝ කෙරේ නම් — සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, should engage in bodily contact with a woman — taking her hand, taking her hair, or touching any part of her body — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "යෝ පන භික්ඛු ඕතිණ්ණෝ විපරිණතේන චිත්තේන මාතුගාමං දුට්ඨුල්ලාහි වාචාහි ඕභාසෙය්‍ය, යථා තං යුවා යුවතිං මේථුනූපසංහිතාහි, සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu omaṇṇo vipariṇatena cittena mātugāmaṃ duṭṭhullāhi vācāhi āhāseyya, yathā taṃ yuvā yuvatiṃ methunūpasaṃhitāhi, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි රාගයෙන් මඩනා ලද විපරීත සිතින් කාන්තාවකට මෛථුන සංයුක්ත වූ අසභ්‍ය වචන කියයි නම්, තරුණයෙක් තරුණියකට කියන ආකාරයෙන් — සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, should speak lewd words to a woman, connected with sexual intercourse, such as a youth would speak to a young girl — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යෝ පන භික්ඛු ඕතිණ්ණෝ විපරිණතේන චිත්තේන මාතුගාමස්ස සන්තිකේ අත්තකාමපාරිචරියාය වණ්ණං භාසෙය්‍ය: 'ඒතදග්ගං භගිනි පාරිචරියානං, යා මාදිසං සීලවන්තං කල්‍යාණධම්මං බ්‍රහ්මචාරිං, ඒතේන ධම්මේන පරිචරෙය්‍යා'ති මේථුනූපසංහිතේන සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu omaṇṇo vipariṇatena cittena mātugāmassa santike attakāmapāricariyāya vaṇṇaṃ bhāseyya: 'Etadaggaṃ bhagini pāricariyānaṃ, yā mādisaṃ sīlavantaṃ kalyāṇadhammaṃ brahmacāriṃ, etena dhammena paricareyyā'ti, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි රාගයෙන් මඩනා ලද විපරීත සිතින් කාන්තාවකට ඇය තමාට සේවය කිරීම පිණිස කයේ වර්ණ වර්ණනා කරයි නම් — 'නැගණිය, මට සේවය කිරීමට මෙය අග්‍ර වේ. මා වැනි සිල්වත්, කල්‍යාණ ධර්ම, බ්‍රහ්මචාරී පුද්ගලයකුට මේ ධර්මයෙන් සේවය කරව' යැයි — සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk, overcome by lust, with altered mind, in the presence of a woman, should speak in praise of attending to himself with reference to sexual intercourse, saying 'Sister, this is the highest service: that a woman should serve with this Dhamma a virtuous, well-conducted, celibate man like myself' — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චරිත්තං සමාපජ්ජෙය්‍ය ඉත්ථියා වා පුරිසමතිං පුරිසස්ස වා ඉත්ථිමතිං ජායත්තනේ වා ජාරත්තනේ වා, අන්තමසෝ තඞ්ඛණිකායපි, සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu sañcarittaṃ samāpajjeyya itthiyā vā purisamati, purisassa vā itthimati, jāyattane vā jārattane vā, antamaso taṅkhaṇikāyapi, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි සඤ්චරිත්තයට සමවදී නම් — කාන්තාවක් පුරුෂයකු කැමති අයුරු, පුරුෂයෙක් කාන්තාවක් කැමති අයුරු — විවාහයෙන් හෝ ජාරයෙකු වශයෙන් හෝ, යටත් පිරිසෙයින් එක් මොහොතකට වුවද — සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk should engage in matchmaking — conveying a woman's intentions to a man, or a man's intentions to a woman, whether as a wife or a mistress, even for a moment — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "සඤ්ඤාචිකාය පන භික්ඛුනා කුටිං කාරයමානේන අස්සාමිකං අත්තුද්දේසං පමාණිකා කාරෙතබ්බා. තත්‍රිදං පමාණං: දීඝසෝ ද්වාදස විදත්ථියෝ සුගතවිදත්ථියා, තිරියං සත්තන්තරා.භික්ඛූු අභිනේතබ්බා වත්ථු දේසනාය තේහි භික්ඛූහි වත්ථුං දේසේතබ්බං අනාරම්භං සපරික්කමනං සාරම්භේ චේ භික්ඛූ වත්ථුස්මිං අපරික්කමනේ සඤ්ඤාචිකාය කුටිං කාරෙය්‍ය භික්ඛූ වා අනභිනෙය්‍ය වත්ථුු දේසනාය පමාණංවා අතික්කාමෙය්‍ය සංඝාදිසේසෝ",
    "translit": "Saññācikāya pana bhikkhunā kuṭiṃ kārayamānena assāmikaṃ attuddesaṃ pamāṇikā kāretabbā. Tatridaṃ pamāṇaṃ: Dīghaso dvādasa vidatthiyo sugatavidatthiyā, tiriyaṃ sattantarā.",
    "si": "සඤ්ඤාචික (සිතා මතා) කුටියක් කරවන භික්ෂුවක් විසින් හිමි නොමැති ව, තමා උදෙසා ප්‍රමාණයෙන් යුක්ත ව කරවිය යුතු ය. එහි පමාණය මෙසේ ය: දිගින් සුගත වියතින් වියත් දොළහකි. පළලින් වියත් සතකි.",
    "en": "When a monk has a hut built for himself, without an owner (sponsor), it must be of the prescribed measure. The measure is: twelve spans in length by the Sugata span, seven spans in width inside.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "මහල්ලකං පන භික්ඛුනා විහාරං කාරයමානේන සස්සාමිකං අත්තුද්දේසං භික්ඛූ අභිනේතබ්බා වත්ථුදේසනාය, තේහි භික්ඛූහි වත්ථුං දේසේතබ්බං අනාරම්භං සපරික්කමනං. සාරම්භේ චේ භික්ඛූ වත්ථුස්මිං අපරික්කමනේ මහල්ලකං විහාරං කාරෙය්‍ය, භික්ඛූ වා අනභිනෙය්‍ය වත්ථුු දේසනාය සංඝාදිසේසෝ",
    "translit": "Mahallakaṃ pana bhikkhunā vihāraṃ kārayamānena sassāmikaṃ attuddesaṃ bhikkhunā anuññātabbā vatthudesanāya, tattha bhikkhūhi vatthuṃ desetabbaṃ anārambhaṃ saparikkamanaṃ.",
    "si": "මහල් (විශාල) විහාරයක් කරවන භික්ෂුවක් විසින් හිමි සහිත ව, තමා උදෙසා භික්ෂූන්ගෙන් වත්ථුදේශනාව අනුමත කරවා ගත යුතු ය. එහි භික්ෂූන් විසින් වත්ථුව දේශනා කළ යුතු ය — අනාරම්භ සහ පරික්කමන සහිත ව.",
    "en": "When a monk is having a large dwelling built, with an owner (sponsor), for himself, monks must be invited for the marking of the site. The site should be marked by monks, being without danger and with a surrounding space.",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං දුට්ඨෝ දෝසෝ අප්පතීතෝ අමූලකේන පාරාජිකේන ධම්මේන අනුද්ධංසෙය්‍ය, අප්පේවනාම නං ඉමම්හා බ්‍රහ්මචරියා චාවෙය්‍යන්ති. තතෝ අපරේන සමයේන සමනුග්ගාහියමානෝ වා අසමනුග්ගාහියමානෝ වා අමූලකං චේව තං අධිකරණං හෝති, භික්ඛු ච දෝසං පතිට්ඨාති, සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu bhikkhuṃ duṭṭho doso appatīto amūlakena pārājikena dhammena anuddhaṃseyya, appevanāma naṃ imamhā brahmacariyā cāveyyanti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā amūlakaṃ taṃ adhikaraṇaṃ hoti, bhikkhu ca dosaṃ patiṭṭhāti, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි ද්වේෂ සහිත වූයේ, අසතුටු සිත් ඇත්තේ, මුල් නැති පාරාජික ධර්මයකින් භික්ෂුවකට චෝදනා කරයි නම් — 'සමහර විට මොහු මේ බ්‍රහ්මචරියාවෙන් ඉවත් කරවති' කියා ය. පසු කලෙක විචාරණ ලද්දේ හෝ නොවිචාරණ ලද්දේ හෝ එම අධිකරණය මුල් නැති බවත් භික්ෂුව ද්වේෂයෙහි පිහිටියේ බවත් ඔප්පු වේ නම්, සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk, angry, displeased, should groundlessly charge a monk with a Pārājika offence, thinking 'Perhaps I may cause him to fall from this holy life' — and later, whether questioned or not, that charge is found to be groundless and the monk is established in ill-will — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං දුට්ඨෝ දෝසෝ අප්පතීතෝ අඤ්ඤභාගියස්ස අධිකරණස්ස කිඤ්චිදේසං ලේසමත්තං උපාදාය පාරාජිකේන ධම්මේන අනුද්ධංසෙය්‍ය, අප්පේවනාම නං ඉමම්හා බ්‍රහ්මචරියා චාවෙය්‍යන්ති. තතෝ අපරේන සමයේන සමනුග්ගාහියමානෝ වා අසමනුග්ගාහියමානෝ වා අඤ්ඤභාගියඤ්චේව තං අධිකරණං හෝති, කෝචි දේසෝ ලේසමත්තෝ උපාදින්නෝ, භික්ඛු ච දෝසං පතිට්ඨාති, සඞ්ඝාදිසේසෝ.",
    "translit": "Yo pana bhikkhu bhikkhuṃ duṭṭho doso appatīto aññabhāgiyassa adhikaraṇassa kiñcidesaṃ lesamattaṃ upādāya anuddhaṃseyya, appevanāma naṃ imamhā brahmacariyā cāveyyanti. Tato aparena samayena samanuggāhiyamāno vā asamanuggāhiyamāno vā aññabhāgiyaṃ taṃ adhikaraṇaṃ hoti, bhikkhu ca dosaṃ patiṭṭhāti, saṅghādiseso.",
    "si": "යම් භික්ෂුවක් වනාහි ද්වේෂ සහිත වූයේ, අසතුටු සිත් ඇත්තේ, වෙනත් භාගයකට අයත් අධිකරණයක යම් කිසි කොටසක් හෝ ලේශ මාත්‍රයක් උපාදානය කොට චෝදනා කරයි නම් — 'සමහර විට මොහු මේ බ්‍රහ්මචරියාවෙන් ඉවත් කරවති' කියා ය. පසු කලෙක එම අධිකරණය වෙනත් භාගයකට අයත් බවත් භික්ෂුව ද්වේෂයෙහි පිහිටියේ බවත් ඔප්පු වේ නම්, සංඝාදිසේස ඇවැත් වේ.",
    "en": "Whatever monk, angry, displeased, should groundlessly charge a monk with some part or mere trace of a different dispute, thinking 'Perhaps I may cause him to fall from this holy life' — and later, whether questioned or not, that charge is found to belong to a different dispute and the monk is established in ill-will — this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "යෝ පන භික්ඛු සමග්ගස්ස සඞ්ඝස්ස භේදාය පරක්කමෙය්‍ය, භේදනසංවත්තනිකං වා අධිකරණං සමාදාය පග්ගය්හ තිට්ඨෙය්‍ය, සෝ භික්ඛු භික්ඛූහි ඒවමස්ස වචනීයෝ: 'මා ආයස්මා සමග්ගස්ස සඞ්ඝස්ස භේදාය පරක්කමි, භේදනසංවත්තනිකං වා අධිකරණං සමාදාය පග්ගය්හ අට්ඨාසි. සමේතායස්මා සඞ්ඝේන, සමග්ගෝ හි සඞ්ඝෝ සම්මෝදමානෝ අවිවදමානෝ ඒකුද්දේසෝ ඵාසු විහරතී'ති. ඒවඤ්ච සෝ භික්ඛු භික්ඛූහි වුච්චමානෝ තථේව පග්ගණ්හෙය්‍ය සෝ භික්ඛු භික්ඛූහි යාවතතියං සමනුභාසිතබ්බෝ තස්ස පටිනිස්සග්ගාය, යාවතතියඤ්චේ සමනුභාසීයමානෝ තං පටිනිස්සජ්ජෙය්‍ය ඉච්චේතං කුසලං නෝ චේ පටිනිස්සජ්ජෙය්‍ය සංඝාදිසේසෝ ",
    "translit": "Yo pana bhikkhu samaggassa saṅghassa bhedāya parakkameyya, bhedanasaṃvattanikaṃ vā adhikaraṇaṃ samādāya paggayha tiṭṭheyya, so bhikkhu bhikkhūhi evamassa vacanīyo: 'Mā āyasmā samaggassa saṅghassa bhedāya parakkami, bhedanasaṃvattanikaṃ vā adhikaraṇaṃ samādāya paggayha aṭṭhāsi. Sametāyasmā saṅghena, samaggo hi saṅgho sammodamāno avivadamāno ekuddeso phāsu viharatī'ti.",
    "si": "යම් භික්ෂුවක් වනාහි සමගි සංඝයා බිඳීම පිණිස උත්සාහ දරයි නම්, බිඳීමට හේතුවන අධිකරණයක් සමාදන් ව ගෙන එහි පිහිටයි නම්, ඒ භික්ෂුව භික්ෂූන් විසින් මෙසේ කිය යුත්තේ ය: 'ආයුෂ්මත් තෙමේ සමගි සංඝයා බිඳීම පිණිස උත්සාහ නො කරත්වා! බිඳීමට හේතුවන අධිකරණයක් සමාදන් ව ගෙන නො සිටිත්වා! ආයුෂ්මත් සංඝයා සමග එක් වේවා! සංඝ තෙමේ සමගි වේවා, සතුටු වේවා, විරුද්ධ විවාද රහිත වේවා, සමාන උද්දේස ඇත්තේ එකට වාසය කරත්වා!'",
    "en": "Whatever monk should strive for the schism of a Saṅgha that is in harmony, or should take up and persist in a legal issue conducive to schism — that monk should be spoken to by the monks thus: 'Let the venerable one not strive for the schism of a harmonious Saṅgha, nor take up and persist in a legal issue conducive to schism. Let the venerable one be reconciled with the Saṅgha, for a harmonious Saṅgha — united, rejoicing, without dispute, with a common recitation — lives in harmony.'",
    "role": "rule",
    "n": 10
   },
   {
    "pali": "තස්සේව ඛෝ පන භික්ඛුුස්ස භික්ඛූ හොන්ති අනුවත්තකා වග්ගවාදකා ඒකෝ වා ද්වේ වා තයෝ වා  තේ  ඒවං වදෙය්‍යුං මා ආයස්මන්තෝ ඒතං භික්ඛුං කිඤ්චි අවචුුත්ථ ධම්මවාදී චේ සෝ භික්ඛු විනයවාදී චේ සෝ භික්ඛු අම්හාකඤ්චේසෝ භික්ඛු  ඡන්දඤ්ච රුචිඤ්ච ආදාය වෝහරති ජානාති නො භාසති. අම්හාකම්පේතං කමතීති. තේ භික්ඛූ භික්ඛූහි ඒවමස්සු වචනීයා මා ආයස්මන්තෝ ඒවං අවචුත්ථ න චේසෝ භික්ඛු ධම්මවාදී න චේසෝ භික්ඛු විනයවාදී මා ආයස්මන්තානම්පි සංඝභේදෝ රුච්චිත්ථ. සමේතායස්මන්තානං සංඝේන සමග්ගෝහි සංඝෝ සම්මෝදමානෝ අවිවදමානෝ ඒකුද්දේසො  ඵාසු විහරතීතී. ඒවඤ්ච තේ භික්ඛු භික්‌ඛුහි වුච්චමානා තථේව පග්ගණ්හෙය්‍යුං. තේ භික්ඛූ භික්ඛූහි යාවතතියං සමනුභාසිතබ්බා තස්ස පටිනිස්සග්ගාය. යාවතතියඤ්චේ සමනුභාසියමානෝ තං පටිනිස්සජ්ජෙය්‍යුං, ඉච්චේතං කුසලං. නෝ චේ පටිනිස්සජ්ජෙය්‍යුං, සඞ්ඝාදිසේසෝ.",
    "translit": "Tasseva kho bhikkhuno bhikkhūhi samanubhāsiyamānassa tattheva tiṭṭhato yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya. Yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ. No ce paṭinissajjeyya, saṅghādiseso.",
    "si": "එම භික්ෂුව භික්ෂූන් විසින් සමනුභාෂණය කරනු ලබන කල්හි එහිම සිටින්නේ නම්, තුන්වන වර දක්වා ඔහු අත්හැරීම පිණිස සමනුභාෂණය කළ යුතු ය. තුන්වන වර දක්වා සමනුභාෂණය කරනු ලබන විට එය අත්හැරියේ නම් එය යහපත් ය. නොඅත්හැරියේ නම් සංඝාදිසේස ඇවැත් වේ.",
    "en": "That monk, being admonished by the monks, if he persists in that position, should be admonished up to three times for its relinquishment. If, being admonished up to three times, he relinquishes it, that is good. If he does not relinquish it, this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "භික්ඛු පනේව අඤ්ඤතරං ගාමං වා නිගමං වා උපනිස්සාය විහරති, කුලදූසකෝ පාපසමාචාරෝ. තස්ස ඛෝ පාපකා සමාචාරා දිස්සන්ති චේව සුය්‍යන්ති ච, කුලානි ච තේන දුට්ඨානි දිස්සන්ති චේව සුය්‍යන්ති ච. සෝ භික්ඛු භික්ඛූහි ඒවමස්ස වචනීයෝ: 'ආයස්මා ඛෝ කුලදූසකෝ පාපසමාචාරෝ...'",
    "translit": "Bhikkhu paneva aññataraṃ gāmaṃ vā nigamaṃ vā upanissāya viharati, kuladūsako pāpasamācāro. Tassa kho pāpakā samācārā dissanti ceva suyyanti ca, kulāni ca tena duṭṭhāni dissanti ceva suyyanti ca. So bhikkhu bhikkhūhi evamassa vacanīyo: 'Āyasmā kho kuladūsako pāpasamācāro...'",
    "si": "භික්ෂුවක් වනාහි යම් ගමක් හෝ නියම් ගමක් හෝ ඇසුරු කොට වාසය කරයි ද, කුල දූෂකයෙක්, පවිටු පැවතුම් ඇත්තෙක් වේ ද, ඔහුගේ පවිටු පැවතුම් පෙනෙන්නේ ද අසන්නට ලැබෙන්නේ ද, ඔහු විසින් කුලයෝ දූෂිත වූවාහු පෙනෙන්නේ ද අසන්නට ලැබෙන්නේ ද, ඒ භික්ෂුව භික්ෂූන් විසින් මෙසේ කිය යුතු ය: 'ආයුෂ්මත් තෙමේ කුල දූෂකයෙක්, පවිටු පැවතුම් ඇත්තෙක් ය...'",
    "en": "A monk might dwell in dependence on a certain village or town, and be a corrupter of families, of evil conduct. His evil conduct is seen and heard, and the families corrupted by him are seen and heard. That monk should be spoken to by the monks thus: 'The venerable one is a corrupter of families, of evil conduct...'",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "තස්සේව ඛෝ භික්ඛුනෝ භික්ඛූහි සමනුභාසියමානස්ස තත්ථේව තිට්ඨතෝ යාවතතියං සමනුභාසිතබ්බෝ තස්ස පටිනිස්සග්ගාය. යාවතතියඤ්චේ සමනුභාසියමානෝ තං පටිනිස්සජ්ජෙය්‍ය, ඉච්චේතං කුසලං. නෝ චේ පටිනිස්සජ්ජෙය්‍ය, සඞ්ඝාදිසේසෝ.",
    "translit": "Tasseva kho bhikkhuno bhikkhūhi samanubhāsiyamānassa tattheva tiṭṭhato yāvatatiyaṃ samanubhāsitabbo tassa paṭinissaggāya. Yāvatatiyañce samanubhāsiyamāno taṃ paṭinissajjeyya, iccetaṃ kusalaṃ. No ce paṭinissajjeyya, saṅghādiseso.",
    "si": "එම භික්ෂුව භික්ෂූන් විසින් සමනුභාෂණය කරනු ලබන කල්හි එහිම සිටින්නේ නම්, තුන්වන වර දක්වා ඔහු අත්හැරීම පිණිස සමනුභාෂණය කළ යුතු ය. තුන්වන වර දක්වා සමනුභාෂණය කරනු ලබන විට එය අත්හැරියේ නම් එය යහපත් ය. නොඅත්හැරියේ නම් සංඝාදිසේස ඇවැත් වේ.",
    "en": "That monk, being admonished by the monks, if he persists, should be admonished up to three times for its relinquishment. If he relinquishes it, that is good. If he does not, this is a Saṅghādisesa offence.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ තේරස සඞ්ඝාදිසේසා ධම්මා, නව පඨමාපත්තිකා, චත්තාරෝ යාවතතියකා. යේසං භික්ඛු අඤ්ඤතරං වා අඤ්ඤතරං වා ආපජ්ජිත්වා, යාවතිහං ජානං පටිච්ඡාදේති, තාවතිහං තේන භික්ඛුනා අකාමා පරිවත්ථබ්බං. පරිවුත්ථපරිවාසේන භික්ඛුනා උත්තරිං ඡාරත්තං භික්ඛුමානත්තාය පටිපජ්ජිතබ්බං. චිණ්ණමානත්තෝ භික්ඛු යත්ථ සියා වීසතිගණෝ භික්ඛුසඞ්ඝෝ, තත්ථ සෝ භික්ඛු අබ්භේතබ්බෝ. ඒකේනපි චේ ඌනෝ වීසතිගණෝ භික්ඛුසඞ්ඝෝ තං භික්ඛුං අබ්භෙය්‍ය, සෝ ච භික්ඛු අනබ්භිතෝ. තේ ච භික්ඛූ ගාරය්හා, අයං තත්ථ සාමීචි.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto terasa saṅghādisesā dhammā, nava paṭhamāpattikā, cattāro yāvatatiyakā. Yesaṃ bhikkhu aññataraṃ vā aññataraṃ vā āpajjitvā, yāvatihaṃ jānaṃ paṭicchādeti, tāvatihaṃ tena bhikkhunā akāmā parivatthabbaṃ. Parivutthaparivāsena bhikkhunā uttariṃ chārattaṃ bhikkhumānattāya paṭipajjitabbaṃ. Ciṇṇamānatto bhikkhu yattha siyā vīsatigaṇo bhikkhusaṅgho, tattha so bhikkhu abbhetabbo. Ekenapi ce ūno vīsatigaṇo bhikkhusaṅgho taṃ bhikkhuṃ abbheyya, so ca bhikkhu anabbhito. Te ca bhikkhū gārayhā, ayaṃ tattha sāmīci.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! දහතුනක් වූ සඟවෙසෙස් ඇවැත් උදෙසන ලද්දාහු ය. ඉන් මුල් ශික්ෂාපද නවය පඨමාපත්තික නම් වේ. අන්‍ය වූ සතර යාවතතියක නම් වේ. යම් භික්ෂුවක් මෙයින් කුමන හෝ ඇවැතකට පත් වූයේ නම්, පත් වී දන දන යමතාක් දවස් නො කියා සඟවා සිටී නම්, ඒ තාක් දින ගණනක් දඬුවම් පිණිස ඒ භික්ෂුව විසින් පරිවෙස් විසිය යුතු ය. පරිවෙස් පුරා අවසාන වූ පසු ඒ භික්ෂුව විසින් දින හයක් භික්ෂූන්ට ගරු කිරීම පිණිස මානත් පිරිය යුතු ය. මානත් පුරා අවසන් වූ පසු භික්ෂූන් වහන්සේලා විසිනමක්වත් ඉදිරියේ අබ්භාන විනය කර්මය සිදුකරගෙන ඇවැත් වලින් පිරිසිදු විය යුතු ය. භික්ෂූන් විසිනමකට අඩු තැනක අබ්භානය සිදු වූයේ නම්, ඒ භික්ෂුව ඇවතින් පිරිසිදු නො වූයේ ය, ඒ සඟ පිරිස ගර්හා කටයුතු වූවාහු ය. මේ එහි අනුධර්මතාවය යි.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the thirteen Saṅghādisesa rules have been recited — nine that incur the penalty at the first offence, and four that do so only after the third admonition. A monk who has fallen into any of them must live on probation for as many days as he knowingly concealed it. Having completed probation, he must then undertake six nights of mānatta for the monks' pleasure. Having completed mānatta, the monk is to be reinstated (abbhāna) in a community of at least twenty monks. If a community of fewer than twenty reinstates him, he is not reinstated and those monks are blameworthy. This is the proper procedure here.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "සඞ්ඝාදිසේසුද්දේසෝ තතියෝ.",
    "translit": "Saṅghādisesuddeso tatiyo.",
    "si": "තුන්වෙනි සංඝාදිසේස උද්දේසය යි.",
    "en": "The third recital, the Saṅghādisesas, is finished.",
    "role": "end"
   }
  ]
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
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ ද්වේ අනියතා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto dve aniyatā dhammā uddesaṃ āgacchanti.",
    "si": "ඇවැත්නි! මේ අනියත ධර්මයෝ දෙදෙන උදෙසීමට පැමිණෙත්.",
    "en": "Here these two Aniyata rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමේන සද්ධිං ඒකෝ ඒකාය රහෝ පටිච්ඡන්නේ ආසනේ අලඞ්කම්මනියේ නිසජ්ජං කප්පෙය්‍ය, තමේනං සද්ධෙය්‍යවචසා උපාසිකා දිස්වා තිණ්ණං ධම්මානං අඤ්ඤතරේන වදෙය්‍ය පාරාජිකේන වා සඞ්ඝාදිසේසේන වා පාචිත්තියේන වා; නිසජ්ජං භික්ඛු පටිජානමානෝ තිණ්ණං ධම්මානං අඤ්ඤතරේන කාරේතබ්බෝ පාරාජිකේන වා සඞ්ඝාදිසේසේන වා පාචිත්තියේන වා. යේන වා සා සද්ධෙය්‍යවචසා උපාසිකා වදෙය්‍ය, තේන සෝ භික්ඛු කාරේතබ්බෝ. අයං ධම්මෝ අනියතෝ.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ eko ekāya raho paṭicchanne āsane alaṅkammaniye nisajjaṃ kappeyya, tamenaṃ saddheyyavacasā upāsikā disvā tiṇṇaṃ dhammānaṃ aññatarena vadeyya pārājikena vā saṅghādisesena vā pācittiyena vā; nisajjaṃ bhikkhu paṭijānamāno tiṇṇaṃ dhammānaṃ aññatarena kāretabbo pārājikena vā saṅghādisesena vā pācittiyena vā. Yena vā sā saddheyyavacasā upāsikā vadeyya, tena so bhikkhu kāretabbo. Ayaṃ dhammo aniyato.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවක් සමග එකලා ව, රහසිගත ව, මෛථුනයට සුදුසු පිළිසන් ආසනයක හිදීම කරයි නම්, එහිදී ඇදහිය හැකි වචන ඇති උපාසිකාවක් ඒ භික්ෂුව පාරාජිකයෙන් හෝ සංඝාදිසේසයෙන් හෝ පාචිත්තියයෙන් හෝ චෝදනා කරයි නම්, හිදීම පිළිගන්නා භික්ෂුව තුන් ඇවැත් අතරින් එකකින් කරවිය යුතු ය. ඇදහිය හැකි වචන ඇති ඒ උපාසිකාව යමකින් කියයි නම්, එයින් ඒ භික්ෂුව කරවිය යුතු ය. මේ ධර්මය අනියත ය.",
    "en": "Whatever monk, seated in private with a woman, in a secluded place suitable for sexual relations — if a trustworthy female lay-follower should accuse him of a Pārājika, Saṅghādisesa, or Pācittiya offence — and the monk admits to the sitting, he is to be dealt with according to one of these three. Or, according to what that trustworthy female lay-follower says, the monk is to be dealt with. This rule is indefinite (aniyata).",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "න හේව ඛෝ පන පටිච්ඡන්නං ආසනං හෝති නාලඞ්කම්මනියං, අලඤ්ච ඛෝ හෝති මාතුගාමං දුට්ඨුල්ලාහි වාචාහි ඕභාසිතුං. යෝ පන භික්ඛු තථාරූපේ ආසනේ මාතුගාමේන සද්ධිං ඒකෝ ඒකාය රහෝ නිසජ්ජං කප්පෙය්‍ය, තමේනං සද්ධෙය්‍යවචසා උපාසිකා දිස්වා ද්වින්නං ධම්මානං අඤ්ඤතරේන වදෙය්‍ය සඞ්ඝාදිසේසේන වා පාචිත්තියේන වා; නිසජ්ජං භික්ඛු පටිජානමානෝ ද්වින්නං ධම්මානං අඤ්ඤතරේන කාරේතබ්බෝ සඞ්ඝාදිසේසේන වා පාචිත්තියේන වා. යේන වා සා සද්ධෙය්‍යවචසා උපාසිකා වදෙය්‍ය, තේන සෝ භික්ඛු කාරේතබ්බෝ. අයම්පි ධම්මෝ අනියතෝ.",
    "translit": "Na heva kho pana paṭicchannaṃ āsanaṃ hoti nālaṅkammaniyaṃ, alañca kho hoti mātugāmaṃ duṭṭhullāhi vācāhi obhāsituṃ. Yo pana bhikkhu tathārūpe āsane mātugāmena saddhiṃ eko ekāya raho nisajjaṃ kappeyya, tamenaṃ saddheyyavacasā upāsikā disvā dvinnaṃ dhammānaṃ aññatarena vadeyya saṅghādisesena vā pācittiyena vā; nisajjaṃ bhikkhu paṭijānamāno dvinnaṃ dhammānaṃ aññatarena kāretabbo saṅghādisesena vā pācittiyena vā. Yena vā sā saddheyyavacasā upāsikā vadeyya, tena so bhikkhu kāretabbo. Ayampi dhammo aniyato.",
    "si": "එහෙත් මෛථුනයට සුදුසු පිළිසන් නොවූ ආසනයක් වේ නම්, කාන්තාවකට අසභ්‍ය වචන කීමට නොසුදුසු වේ නම්, යම් භික්ෂුවක් එබඳු ආසනයක කාන්තාවක් සමග එකලා ව රහසිගත ව හිදීම කරයි නම්, ඇදහිය හැකි වචන ඇති උපාසිකාවක් ඒ භික්ෂුව සංඝාදිසේසයෙන් හෝ පාචිත්තියයෙන් චෝදනා කරයි නම්, හිදීම පිළිගන්නා භික්ෂුව ඇවැත් දෙකින් එකකින් කරවිය යුතු ය. ඇදහිය හැකි වචන ඇති ඒ උපාසිකාව යමකින් කියයි නම්, එයින් ඒ භික්ෂුව කරවිය යුතු ය. මේ ධර්මය ද අනියත ය.",
    "en": "But if it is not a place suitable for sexual relations, nor sufficient for speaking lewd words to a woman — and a monk sits in private alone with a woman in such a place, and a trustworthy female lay-follower accuses him of Saṅghādisesa or Pācittiya — and the monk admits to the sitting, he is to be dealt with according to one of these two. Or according to what the lay-follower says. This rule is also indefinite (aniyata).",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ ද්වේ අනියතා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto dve aniyatā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අනියත ධර්ම දෙක උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the two Aniyata rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "අනියතුද්දේසෝ චතුත්ථෝ.",
    "translit": "Aniyatuddeso catuttho.",
    "si": "සිවුවෙනි අනියත උද්දේසය යි.",
    "en": "The fourth recital, the Aniyatas, is finished.",
    "role": "end"
   }
  ]
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
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ තිංස නිස්සග්ගියා පාචිත්තියා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto tiṃsa nissaggiyā pācittiyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ තිහක් නිසගි පවිති ඇවැත් උදෙසීමට පැමිණෙත්.",
    "en": "Here these thirty Nissaggiya Pācittiya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කථිනේ, දසාහපරමං අතිරේකචීවරං ධාරෙතබ්බං. තං අතික්කාමයතෝ නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kathine, dasāhaparamaṃ atirekacīvaraṃ dhāretabbaṃ. Taṃ atikkāmayato nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි, කඨිනය උදුරන ලද කල්හි, භික්ෂුවක් විසින් උපරිම දස දිනක් දක්වා අතිරේක සිවුරක් දැරිය යුතු ය. එම දස දින ඉක්මවන්නහුට නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, an extra robe may be kept for at most ten days. To exceed that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කථිනේ, ඒකරත්තම්පි චේ භික්ඛු තිචීවරේන විප්පවසෙය්‍ය, අඤ්ඤත්‍ර භික්ඛුසම්මුතියා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kathine, ekarattampi ce bhikkhu ticīvarena vippavaseyya, aññatra bhikkhusammutiyā, nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි, කඨිනය උදුරන ලද කල්හි, භික්ෂුවක් විසින් තුන් සිවුර හැර, භික්ෂු සම්මුතියක් නොමැති ව, රාත්‍රියක් වෙන් ව වාසය කරයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, a monk may not stay apart from the three robes even for one night, except with the consent of the monks: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "නිට්ඨිතචීවරස්මිං භික්ඛුනා උබ්භතස්මිං කථිනේ, භික්ඛුනෝ පනේව අකාලචීවරං උප්පජ්ජෙය්‍ය, ආකඞ්ඛමානේන භික්ඛුනා පටිග්ගහේතබ්බං, පටිග්ගහෙත්වා ඛිප්පමේව කාරේතබ්බං, නෝ චස්ස පාරිපූරි, මාසපරමං තේන භික්ඛුනා තං චීවරං නික්ඛිපිතබ්බං ඌනස්ස පාරිපූරියා සතියා පච්චාසාය. තතෝ චේ උත්තරිං නික්ඛිපෙය්‍ය සතියාපි පච්චාසාය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Niṭṭhitacīvarasmiṃ bhikkhunā ubbhatasmiṃ kathine, bhikkhuno paneva akālacīvaraṃ uppajjeyya, ākaṅkhamānena bhikkhunā paṭiggahetabbaṃ, paṭiggahetvā khippameva kāretabbaṃ, no cassa pāripūri, māsaparamaṃ tena bhikkhunā taṃ cīvaraṃ nikkhipitabbaṃ ūnassa pāripūriyā satiyā paccāsāya. Tato ce uttariṃ nikkhipeyya satiyāpi paccāsāya, nissaggiyaṃ pācittiyaṃ.",
    "si": "සිවුර නිම වූ කල්හි, කඨිනය උදුරන ලද කල්හි, භික්ෂුවකට අකාල සිවුරක් උපදින්නේ නම්, කැමති භික්ෂුවක් විසින් පිළිගත යුතු ය. පිළිගෙන වහා ම කරවිය යුතු ය. එය පිරීමට නොහැකි නම්, ඌන පිරවීම සඳහා එම සිවුර උපරිම මාසයක් එම භික්ෂුව විසින් තැබිය යුතු ය.",
    "en": "When the robe-cloth has been finished and the Kaṭhina has been lifted, should robe-cloth arise out of season, it may be accepted by a monk who wants it. Having accepted it, it should be made up quickly. If it is not sufficient, that robe-cloth may be stored for at most one month for the purpose of making up the deficiency.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා පුරාණචීවරං ධෝවාපෙය්‍ය වා රජාපෙය්‍ය වා විලාපෙය්‍ය වා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā purāṇacīvaraṃ dhovāpeyya vā rajāpeyya vā vilāpeyya vā, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ භික්ෂුණියක ලවා පැරණි සිවුරක් සෝදවයි නම් හෝ පාට ගන්වයි නම් හෝ අවුල් හරවයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have a robe washed, dyed, or beaten out by a bhikkhunī who is not a relative: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා හත්ථතෝ චීවරං පටිග්ගණ්හෙය්‍ය, අඤ්ඤත්‍ර පාරිවත්තකා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā hatthato cīvaraṃ paṭiggaṇheyya, aññatra pārivattakā, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ භික්ෂුණියක අතින් සිවුරක් පිළිගනී නම්, මාරු කර ගැනීමක් හැර, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should accept a robe from the hand of a bhikkhunī who is not a relative, except in exchange: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතකං ගහපතිං වා ගහපතානිං වා චීවරචේතාපනං යාචෙය්‍ය, අඤ්ඤත්‍ර සමයා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātakaṃ gahapatiṃ vā gahapatāniṃ vā cīvaracetāpanaṃ yāceyya, aññatra samayā, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ ගෘහපතියකුගෙන් හෝ ගෘහණියකගෙන් හෝ සුදුසු සමය හැර සිවුරක් ඉල්වයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should ask a householder or householder's wife who is not a relative for robe-cloth, except at the proper time: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතකං ගහපතිං වා ගහපතානිං වා අතිරේකචීවරං යාචෙය්‍ය...",
    "translit": "Yo pana bhikkhu aññātakaṃ gahapatiṃ vā gahapatāniṃ vā atirekacīvaraṃ yāceyya...",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ ගෘහපතියෙකුගෙන් හෝ ගෘහණියකගෙන් හෝ අතිරේක සිවුරක් ඉල්වයි නම්...",
    "en": "Whatever monk should ask for an extra robe from a householder who is not a relative...",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "භික්ඛුං පනේව උද්දිස්ස අඤ්ඤාතකෝ ගහපති වා ගහපතානී වා චීවරචේතාපනං උපක්ඛටං හෝති. ඉමිනා චීවරචේතාපනේන ඉත්ථන්නාමං භික්ඛුං චීවරේන අවිජානිස්සාමීති.",
    "translit": "Bhikkhuṃ paneva uddissa aññātako gahapati vā gahapatānī vā cīvaracetāpanaṃ upakkhaṭaṃ hoti. Iminā cīvaracetāpanena itthannāmaṃ bhikkhuṃ cīvarena avijānissāmīti.",
    "si": "නොනෑ ගෘහපතියෙක් හෝ ගෘහණියක් හෝ භික්ෂුවක් උදෙසා සිවුරු මුදලක් සපයයි නම්...",
    "en": "If a householder who is not a relative has set aside a robe-fund for a monk...",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "භික්ඛුං පනේව උද්දිස්ස ද්වේ අඤ්ඤාතකා ගහපතී වා ගහපතානියෝ වා පාචිත්තියා.",
    "translit": "Bhikkhuṃ paneva uddissa dve aññātakā gahapatī vā gahapatāniyo vā pācittiyā.",
    "si": "නොනෑ ගෘහපතියන් හෝ ගෘහණියන් දෙදෙනකු භික්ෂුවක් උදෙසා වෙන් වෙන් ව සිවුරු මුදල් සපයත් නම්...",
    "en": "If two householders who are not relatives set aside robe-funds separately for a monk...",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "යෝ පන භික්ඛු රාජා වා රාජභොග්ගො වා බ්‍රාහ්මණෝ වා ගහපතිකෝ වා දූතේන චීවරචේතාපනං පහිණෙය්‍ය...",
    "translit": "Yo pana bhikkhu rājā vā rājabhoggo vā brāhmaṇo vā gahapatiko vā dūtena cīvaracetāpanaṃ pahiṇeyya...",
    "si": "යම් භික්ෂුවක් වනාහි රජෙක් හෝ රජ ඇමතියෙක් හෝ බමුණෙක් හෝ ගෘහපතියෙක් හෝ දූතයකු ලවා සිවුරු මුදලක් එවයි නම්...",
    "en": "Whatever monk — if a king, royal official, brahmin, or householder sends a robe-fund through a messenger...",
    "role": "rule",
    "n": 10
   },
   {
    "pali": "යෝ පන භික්ඛු කෝසියමිස්සකං සන්ථතං කාරාපෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu kosiyamissakaṃ santhataṃ kārāpeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කෝසෙය්‍ය (පටපණු) මිශ්‍ර ඇතිරියක් කරවයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have a rug made mixed with silk: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "යෝ පන භික්ඛු සුද්ධකාළකානං ඒළකලෝමානං සන්ථතං කාරාපෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu suddhakāḷakānaṃ eḷakalomānaṃ santhataṃ kārāpeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සුදු කළු එළු ලොම්වලින් ඇතිරියක් කරවයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have a rug made entirely of black sheep-wool: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "නවං පන භික්ඛුනා සන්ථතං කාරයමානේන ද්වේ භාගා සුද්ධකාළකානං ඒළකලෝමානං ආදාතබ්බා, තතියං ඕදාතානං, චතුත්ථං ගෝචරියානං.",
    "translit": "Navaṃ pana bhikkhunā santhataṃ kārayamānena dve bhāgā suddhakāḷakānaṃ eḷakalomānaṃ ādātabbā, tatiyaṃ odātānaṃ, catutthaṃ gocariyānaṃ.",
    "si": "නව ඇතිරියක් කරවන භික්ෂුවක් විසින් කොටස් දෙකක් සුදු කළු එළු ලොම්වලින් ද, තුන්වැනි කොටස සුදු ලොම්වලින් ද, සතරවැනි කොටස ගෝචරිය ලොම්වලින් ද ගත යුතු ය.",
    "en": "When making a new rug, a monk should take two parts of pure black sheep-wool, a third of white, and a fourth of brown (gochariya).",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "නවං පන භික්ඛුනා සන්ථතං කාරාපෙත්වා ඡබ්බස්සානි ධාරෙතබ්බං. ඕරේන ඡන්නං වස්සානං සන්ථතං නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā santhataṃ kārāpetvā chabbassāni dhāretabbaṃ. Orena channaṃ vassānaṃ santhataṃ nissaggiyaṃ pācittiyaṃ.",
    "si": "නව ඇතිරියක් කරවා භික්ෂුවක් විසින් හය වසක් දැරිය යුතු ය. හය වසට අඩුවෙන් ඇතිරියක් තැබුවේ නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "A newly made rug should be used for six years. To dispose of it before six years: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 14
   },
   {
    "pali": "නිසීදනසන්ථතං පන භික්ඛුනා කාරයමානේන පුරාණසන්ථතස්ස සාමන්තා සුගතවිදත්ථි ආදාතබ්බා දුබ්බණ්ණකරණාය.",
    "translit": "Nisīdanasanthataṃ pana bhikkhunā kārayamānena purāṇasanthatassa sāmantā sugatavidatthi ādātabbā dubbaṇṇakaraṇāya.",
    "si": "නිසීදන ඇතිරියක් කරවන භික්ෂුවක් විසින් දුර්වර්ණ කිරීම පිණිස පැරණි ඇතිරියේ හාත්පසින් සුගත වියතක් ගත යුතු ය.",
    "en": "When making a sitting-rug, a monk should take a border from the old rug of the Sugata span, for the purpose of disfiguring.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "භික්ඛුනෝ පනේව අද්ධානමග්ගපටිපන්නස්ස ඒළකලෝමානි උප්පජ්ජෙය්‍යුං. ආකඞ්ඛමානේන භික්ඛුනා පටිග්ගහෙතබ්බානි. පටිග්ගහෙත්වා තියෝජනපරමං සහත්ථා හරිතබ්බානි. අසන්තේ හාරකේ, තතෝ චේ උත්තරිං හරෙය්‍ය, අසන්තම්පි හාරකං, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Bhikkhuno paneva addhānamaggapaṭipannassa eḷakalomāni uppajjeyyuṃ. Ākaṅkhamānena bhikkhunā paṭiggahetabbāni. Paṭiggahetvā tiyojanaparamaṃ sahatthā haritabbāni. Asante hārake, tato ce uttariṃ hareyya, asantampi hārakaṃ, nissaggiyaṃ pācittiyaṃ.",
    "si": "දීර්ඝ මාර්ගයකට පිළිපන් භික්ෂුවකට එළු ලොම් ලැබෙන්නේ නම්, කැමති භික්ෂුවක් විසින් පිළිගත යුතු ය. පිළිගෙන උපරිම යොදුන් තුනක් තම අතින් ගෙන යා යුතු ය. ගෙන යන්නකු නොමැති ව ඊට වැඩි ව ගෙන ගියේ නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "If wool arises to a monk on a journey, he may accept it if he wishes. Having accepted it, he may carry it himself for at most three yojanas. If there is no carrier and he carries it further: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 16
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා ඒළකලෝමානි ධෝවාපෙය්‍ය වා රජාපෙය්‍ය වා විජටාපෙය්‍ය වා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā eḷakalomāni dhovāpeyya vā rajāpeyya vā vijaṭāpeyya vā, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ භික්ෂුණියක ලවා එළු ලොම් සෝදවයි නම් හෝ පාට ගන්වයි නම් හෝ අවුල් හරවයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have sheep-wool washed, dyed, or combed out by a bhikkhunī who is not a relative: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "යෝ පන භික්ඛු ජාතරූපරජතං උග්ගණ්හෙය්‍ය වා උග්ගණ්හාපෙය්‍ය වා උපනික්ඛිත්තං වා සාදියෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jātarūparajataṃ uggaṇheyya vā uggaṇhāpeyya vā upanikkhittaṃ vā sādiyeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි රන් රිදී ගනී නම් හෝ ගන්වයි නම් හෝ තැන්පත් කර තබන ලද්දක් අනුමත කරයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should accept gold and silver, or have it accepted, or consent to its being kept for him: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 18
   },
   {
    "pali": "යෝ පන භික්ඛු නානප්පකාරකං රූපියසංවෝහාරං සමාපජ්ජෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu nānappakārakaṃ rūpiyasaṃvohāraṃ samāpajjeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නන් ආකාර රිදී ගනුදෙනු කිරීමට සමවදී නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should engage in various types of money exchange: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 19
   },
   {
    "pali": "යෝ පන භික්ඛු නානප්පකාරකං කයවික්කයං සමාපජ්ජෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu nānappakārakaṃ kayavikkayaṃ samāpajjeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නන් ආකාර ගනුදෙනු කිරීමට සමවදී නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should engage in various types of buying and selling: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 20
   },
   {
    "pali": "දසාහපරමං අතිරේකපත්තෝ ධාරෙතබ්බෝ. තං අතික්කාමයතෝ නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Dasāhaparamaṃ atirekapatto dhāretabbo. Taṃ atikkāmayato nissaggiyaṃ pācittiyaṃ.",
    "si": "උපරිම දස දිනක් අතිරේක පාත්‍රයක් දැරිය යුතු ය. එය ඉක්මවන්නහුට නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "An extra bowl may be kept for at most ten days. To exceed that: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "යෝ පන භික්ඛු ඌනපඤ්චබන්ධනං පත්තං අඤ්ඤං නවං පත්තං චේතාපෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu ūnapañcabandhanaṃ pattaṃ aññaṃ navaṃ pattaṃ cetāpeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි බැඳුම් පහකට අඩු පාත්‍රයක් සහිත ව අලුත් පාත්‍රයක් ඉල්වා ගනී නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should ask for a new bowl when the old one is not yet less than five mends: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 22
   },
   {
    "pali": "යානි පන තානි භික්ඛූනං ගිලානානං පටිසායනීයානි භේසජ්ජානි, සේය්‍යථිදං: සප්පි නවනීතං තේලං මධු ඵාණිතං. තානි පටිග්ගහෙත්වා සත්තාහපරමං සන්නිධිකාරකං පරිභුඤ්ජිතබ්බානි.",
    "translit": "Yāni pana tāni bhikkhūnaṃ gilānānaṃ paṭisāyanīyāni bhesajjāni, seyyathidaṃ: Sappi navanītaṃ telaṃ madhu phāṇitaṃ. Tāni paṭiggahetvā sattāhaparamaṃ sannidhikārakaṃ paribhuñjitabbāni.",
    "si": "යම් ඒ ගිලන් භික්ෂූන්ට පිළිසඳර බෙහෙත් වේ ද, එනම්: ගිතෙල්, වෙඩිරු, තෙල්, මී පැණි, උක් සකුරු — ඒවා පිළිගෙන උපරිම සත් දිනක් තැන්පත් කර තබා වළඳා භුක්ති විඳිය යුතු ය.",
    "en": "Those medicines for the sick — ghee, fresh butter, oil, honey, molasses — may be accepted and stored for at most seven days and used.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "මාසෝ සේසෝ ගිම්හානන්ති භික්ඛුනා වස්සිකසාටිකචීවරං පරියේසිතබ්බං. අද්ධමාසෝ සේසෝ ගිම්හානන්ති කත්වා නිවාසෙතබ්බං.",
    "translit": "Māso seso gimhānanti bhikkhunā vassikasāṭikacīvaraṃ pariyesitabbaṃ. Addhamāso seso gimhānanti katvā nivāsetabbaṃ.",
    "si": "ගිම්හානය අවසන් වී මාසයක් ඉතිරි ව ඇතැයි කියා වස්සික සාටික සිවුරක් භික්ෂුවක් විසින් සොයා ගත යුතු ය. ගිම්හානය අවසන් වී අඩ මසක් ඉතිරි ව ඇතැයි කියා හැඳිය යුතු ය.",
    "en": "A monk may seek a rains-bathing cloth a month before the end of the hot season. It may be worn half a month after the hot season's end.",
    "role": "rule",
    "n": 24
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස සාමං චීවරං දත්වා තස්ස අනුත්තරේන අවහරෙය්‍ය වා අවහරාපෙය්‍ය වා, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa sāmaṃ cīvaraṃ datvā tassa anuttarena avahareyya vā avaharāpeyya vā, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි තමාම භික්ෂුවකට සිවුරක් දී, පසුව අනුත්තරේන (කෝපයෙන්) එය පැහැර ගනී නම් හෝ පැහැර ගන්වයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, having himself given a robe to a monk, should later, angered, snatch it back or have it snatched back: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 25
   },
   {
    "pali": "යෝ පන භික්ඛු සාමං සුත්තං විඤ්ඤාපෙත්වා තන්තවායේහි චීවරං වායාපෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sāmaṃ suttaṃ viññāpetvā tantavāyehi cīvaraṃ vāyāpeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි තමාම නූල් ඉල්වා ගෙන වියන්නන් ලවා සිවුරක් වියවයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should ask for thread himself and have robe-cloth woven by weavers: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "භික්ඛුං පනේව උද්දිස්ස අඤ්ඤාතකෝ ගහපති වා ගහපතානී වා තන්තවායේ උපසඞ්කමිත්වා ඉමිනා තන්තේන ඉත්ථන්නාමං භික්ඛුං චීවරං වායාපෙත්වා අවිජානිස්සාමීති.",
    "translit": "Bhikkhuṃ paneva uddissa aññātako gahapati vā gahapatānī vā tantavāye upasaṅkamitvā iminā tantena itthannāmaṃ bhikkhuṃ cīvaraṃ vāyāpetvā avijānissāmīti.",
    "si": "නොනෑ ගෘහපතියෙක් හෝ ගෘහණියක් හෝ භික්ෂුවක් උදෙසා වියන්නන් කරා එළඹ 'මේ නූලෙන් ඒ නම් ඇති භික්ෂුවට සිවුරක් වියා දෙන්නෙමි' යැයි කියයි නම්...",
    "en": "If a householder who is not a relative approaches weavers on behalf of a monk, saying 'Weave a robe with this thread for the monk named so-and-so'...",
    "role": "rule",
    "n": 27
   },
   {
    "pali": "දසාහානාගතං කත්තිකමාසිකපුණ්ණමං භික්ඛුනෝ පනේව අච්චේකචීවරං උප්පජ්ජෙය්‍ය. අච්චේකචීවරං භික්ඛුනා පටිග්ගහෙතබ්බං. පටිග්ගහෙත්වා යාව චීවරකාලසමයං නික්ඛිපිතබ්බං.",
    "translit": "Dasāhānāgataṃ kattikamāsikapuṇṇamaṃ bhikkhuno paneva accekacīvaraṃ uppajjeyya. Accekacīvaraṃ bhikkhunā paṭiggahetabbaṃ. Paṭiggahetvā yāva cīvarakālasamayaṃ nikkhipitabbaṃ.",
    "si": "පවාරණයට දස දිනක් ඇතුළත භික්ෂුවකට අච්චේකචීවර (හදිසි සිවුරක්) උපදින්නේ නම්, භික්ෂුවක් විසින් පිළිගත යුතු ය. පිළිගෙන සිවුරු කාලය දක්වා තැබිය යුතු ය.",
    "en": "When there are ten days left before the full moon of Kattika, if a robe-cloth (for immediate use) should arise for a monk, it may be accepted. Having accepted it, it may be stored until the robe-season.",
    "role": "rule",
    "n": 28
   },
   {
    "pali": "උපවස්සං ඛෝ පන කත්තිකපුණ්ණමං, යානි පන තානි ආරඤ්ඤකානි සේනාසනානි සාසඞ්කසම්මතානි සප්පටිභයානි, තථාරූපේසු සේනාසනේසු විහරන්තේන භික්ඛුනා ආකඞ්ඛමානේන තිණ්ණං චීවරානං අඤ්ඤතරං චීවරං අන්තරඝරේ නික්ඛිපිතබ්බං.",
    "translit": "Upavassaṃ kho pana kattikapuṇṇamaṃ, yāni pana tāni āraññakāni senāsanāni sāsaṅkasammatāni sappaṭibhayāni, tathārūpesu senāsanesu viharantena bhikkhunā ākaṅkhamānena tiṇṇaṃ cīvarānaṃ aññataraṃ cīvaraṃ antaraghare nikkhipitabbaṃ.",
    "si": "වස් පවාරණය කරනු ලබන වප් මස මැදි පොහොයේ සිට සැක සහිත, භය සහිත වන සෙනසුන්වල වසන භික්ෂුවක් විසින් කැමති ව තුන් සිවුරෙන් එක් සිවුරක් ඇතුළුගම තැබිය යුතු ය.",
    "en": "From the Kattika full moon, a monk dwelling in a wilderness dwelling considered risky and fearful may, if he wishes, leave one of his three robes inside a house.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං සඞ්ඝිකං ලාභං පරිණතං අත්තනෝ පරිණාමෙය්‍ය, නිස්සග්ගියං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ saṅghikaṃ lābhaṃ pariṇataṃ attano pariṇāmeyya, nissaggiyaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන සංඝික ලාභයක් තමාට පිරිනමයි නම්, නිස්සග්ගිය පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly appropriate to himself an offering intended for the Saṅgha: Nissaggiya Pācittiya.",
    "role": "rule",
    "n": 30
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto tiṃsanissaggiyā pācittiyā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! නිසගි පවිති ඇවැත් තිහ උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the thirty Nissaggiya Pācittiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "නිස්සග්ගියා පාචිත්තියා ධම්මා නිට්ඨීතා.",
    "translit": "Nissaggiyā pācittiyā dhammā niṭṭhītā.",
    "si": "නිසගි පවිති ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Nissaggiya Pācittiya rules are finished.",
    "role": "end"
   }
  ]
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
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ ද්වේනවුති පාචිත්තියා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto dvenavuti pācittiyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ දෙනවුති (අනූදෙකක්) පවිති ඇවැත් උදෙසීමට පැමිණෙත්.",
    "en": "Here these ninety-two Pācittiya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "සම්පජානමුසාවාදේ පාචිත්තියං.",
    "translit": "Sampajānamusāvāde pācittiyaṃ.",
    "si": "දැන දැන බොරු කීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Intentional lying: Pācittiya.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "ඕමසවාදේ පාචිත්තියං.",
    "translit": "Omasavāde pācittiyaṃ.",
    "si": "හික්ෂූන්ට නිගා කීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Abusive speech toward a monk: Pācittiya.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "භික්ඛුපේසුඤ්ඤේ පාචිත්තියං.",
    "translit": "Bhikkhupesuññe pācittiyaṃ.",
    "si": "භික්ෂූන් අතර පීසුණ වචන කීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Sowing discord among monks: Pācittiya.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යෝ පන භික්ඛු අනුපසම්පන්නේන පදසෝ ධම්මං වාචෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannena padaso dhammaṃ vāceyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි අනුපසම්පන්නයකුට පද සොයා ධර්මය කියවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should recite Dhamma line by line with an unordained person: Pācittiya.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යෝ පන භික්ඛු අනුපසම්පන්නේන සද්ධිං ද්වේ රත්තියෝ උත්තරිං නිදහෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannena saddhiṃ dve rattiyo uttariṃ nidaheyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි අනුපසම්පන්නයකු සමග උපරිම දෙරැයක් එකට නිදයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should lie down with an unordained person for more than two nights: Pācittiya.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමේන සද්ධිං නිදහෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ nidaheyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවක් සමග එකට නිදයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should lie down with a woman: Pācittiya.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමස්ස උත්තරිං ඡප්පඤ්චවාචාහි ධම්මං දේසෙය්‍ය, අඤ්ඤත්‍ර විඤ්ඤුනා පුරිසවිග්ගහේන, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmassa uttariṃ chappañcavācāhi dhammaṃ deseyya, aññatra viññunā purisaviggahena, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවකට දක්ෂ පුරුෂයෙකු හැර වචන පහකට හෝ හයකට හෝ වැඩි වශයෙන් ධර්මය දේශනා කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should teach Dhamma to a woman in more than five or six sentences, except in the presence of an intelligent man: Pācittiya.",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "යෝ පන භික්ඛු අනුපසම්පන්නස්ස උත්තරිමනුස්සධම්මං ආරෝචෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anupasampannassa uttarimanussadhammaṃ āroceyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි අනුපසම්පන්නයකුට උත්තරිමනුෂ්‍ය ධර්මය දන්වයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should declare a superhuman state to an unordained person: Pācittiya.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස දුට්ඨුල්ලං ආපත්තිං අනුපසම්පන්නස්ස ආරෝචෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa duṭṭhullaṃ āpattiṃ anupasampannassa āroceyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුවකගේ දුට්ඨුල්ල ඇවැතක් අනුපසම්පන්නයකුට දන්වයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should declare a monk's grave offence to an unordained person: Pācittiya.",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "යෝ පන භික්ඛු පඨවිං ඛණෙය්‍ය වා ඛණාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu paṭhaviṃ khaṇeyya vā khaṇāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි පොළොව හාරයි නම් හෝ හාරවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should dig the ground or have it dug: Pācittiya.",
    "role": "rule",
    "n": 10
   },
   {
    "pali": "භූතගාමපාතබ්‍යතාය පාචිත්තියං.",
    "translit": "Bhūtagāmapātabyatāya pācittiyaṃ.",
    "si": "ශාක භූතගාම නැසීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Destroying plant life: Pācittiya.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "අඤ්ඤවාදකේ විහේසකේ පාචිත්තියං.",
    "translit": "Aññavādake vihesake pācittiyaṃ.",
    "si": "නොකී දේ කීමෙහි, හිරිහැර කිරීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Evasive speech and harassment: Pācittiya.",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "උජ්ඣාපනකේ ඛියනකේ පාචිත්තියං.",
    "translit": "Ujjhāpanake khiyanake pācittiyaṃ.",
    "si": "චෝදනා කිරීමෙහි, නින්දා කිරීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Making formal charges and complaining: Pācittiya.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච මඤ්චං වා පීඨං වා සඞ්ඝිකං... අනාච්ඡින්දිත්වා වා අනාච්ඡින්දාපෙත්වා වා අවහරෙය්‍ය වා අවහරාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca mañcaṃ vā pīṭhaṃ vā saṅghikaṃ... Anācchinditvā vā anācchindāpetvā vā avahareyya vā avaharāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සංඝික ඇඳක් හෝ පුටුවක් හෝ ඇතුළුගෙමහි තබා පිටව ගියේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should put a Saṅgha bed or chair outside and leave without removing or having it removed: Pācittiya.",
    "role": "rule",
    "n": 14
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච සේනාසනං සඞ්ඝිකං... අනාච්ඡින්දිත්වා වා අනාච්ඡින්දාපෙත්වා වා අවහරෙය්‍ය වා අවහරාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca senāsanaṃ saṅghikaṃ... Anācchinditvā vā anācchindāpetvā vā avahareyya vā avaharāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සංඝික සේනාසනයක් අතුරා පිටව ගියේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should spread a Saṅgha dwelling place and leave: Pācittiya.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච විහාරං සඞ්ඝිකං... අනුපඛජ්ජ පවිසෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca vihāraṃ saṅghikaṃ... Anupakhajja paviseyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සංඝික විහාරයක පෙර නොදන්වා අනුන් අතරට පිවිසෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should intrude upon monks in a Saṅgha dwelling: Pācittiya.",
    "role": "rule",
    "n": 16
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං කුපිතෝ අනත්තමනෝ නික්කඩ්ඪෙය්‍ය වා නික්කඩ්ඪාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ kupito anattamano nikkaḍḍheyya vā nikkaḍḍhāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කිපී නොසතුටු ව භික්ෂුවක් සංඝික විහාරයෙන් නෙරපයි නම් හෝ නෙරපවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should, angry and displeased, expel a monk from a Saṅgha dwelling: Pācittiya.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච විහාරං සඞ්ඝිකං... උපරිවෙහාසකුටියං... ආහච්ච පාදකං අට්ඨිත්වා වා නිසීදිත්වා වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca vihāraṃ saṅghikaṃ... Uparivehāsakuṭiyaṃ... Āhacca pādakaṃ aṭṭhitvā vā nisīditvā vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි උඩුමහලේ සංඝික විහාරයේ පාද ඇති ඇඳක හෝ පුටුවක වහා හිඳගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should sit or lie on a bed or chair with removable legs in an upper storey of a Saṅgha dwelling: Pācittiya.",
    "role": "rule",
    "n": 18
   },
   {
    "pali": "මහල්ලකං පන භික්ඛුනා විහාරං කාරයමානේන... ද්වත්තික්ඛත්තුං ඡදනං ආරෝපෙතබ්බං, තතෝ චේ උත්තරිං ආරෝපෙය්‍ය, පාචිත්තියං.",
    "translit": "Mahallakaṃ pana bhikkhunā vihāraṃ kārayamānena... Dvattikkhattuṃ chadanaṃ āropetabbaṃ, tato ce uttariṃ āropeyya, pācittiyaṃ.",
    "si": "මහල් විහාරයක් කරවන භික්ෂුවක් විසින් වහලයට දෙතුන් වරක් විධාන දිය යුතු ය. ඉදින් ඊට වැඩි වශයෙන් විධාන කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "When having a large dwelling built, a monk may give instructions for roofing up to two or three layers. To exceed that: Pācittiya.",
    "role": "rule",
    "n": 19
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං සප්පාණකං උදකං තිණං වා මත්තිකං වා සිඤ්චෙය්‍ය වා සිඤ්චාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ sappāṇakaṃ udakaṃ tiṇaṃ vā mattikaṃ vā siñceyya vā siñcāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන ප්‍රාණීන් සහිත ජලය තණවලට හෝ මැටිවලට ඉසියි නම් හෝ ඉස්සවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly sprinkle water containing living beings on grass or clay: Pācittiya.",
    "role": "rule",
    "n": 20
   },
   {
    "pali": "යෝ පන භික්ඛු අසම්මතෝ භික්ඛුනියෝ ඕවදෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu asammato bhikkhuniyo ovadeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සම්මත නොවී භික්ෂුණීන්ට අවවාද දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should admonish bhikkhunīs without being appointed: Pācittiya.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "සම්මතෝපි චේ භික්ඛු අත්ථඞ්ගතේ සූරියේ භික්ඛුනියෝ ඕවදෙය්‍ය, පාචිත්තියං.",
    "translit": "Sammatopi ce bhikkhu atthaṅgate sūriye bhikkhuniyo ovadeyya, pācittiyaṃ.",
    "si": "සම්මත වූ භික්ෂුවක් වුවද හිරු බැස ගිය කල්හි භික්ෂුණීන්ට අවවාද දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Even if appointed, if a monk admonishes bhikkhunīs after sunset: Pācittiya.",
    "role": "rule",
    "n": 22
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුනුපස්සයං උපසඞ්කමිත්වා භික්ඛුනීනං ඕවාදං දදෙය්‍ය, අඤ්ඤත්‍ර සමයා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhunupassayaṃ upasaṅkamitvā bhikkhunīnaṃ ovādaṃ dadeyya, aññatra samayā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සුදුසු සමය හැර භික්ෂුණී ආරාමයට ගොස් භික්ෂුණීන්ට අවවාද දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should visit the bhikkhunīs' quarters and admonish them, except at the proper time: Pācittiya.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "යෝ පන භික්ඛු 'ආමිසහේතු භික්ඛුනියෝ ඕවදන්තී'ති පාචිත්තියං.",
    "translit": "Yo pana bhikkhu 'āmisahetu bhikkhuniyo ovadantī'ti pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි 'ආමිසය හේතු කොට භික්ෂුණීන්ට අවවාද දෙති' යැයි කියයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should say 'Monks admonish bhikkhunīs for the sake of material gain': Pācittiya.",
    "role": "rule",
    "n": 24
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා චීවරං දදෙය්‍ය, අඤ්ඤත්‍ර පාරිවත්තකා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā cīvaraṃ dadeyya, aññatra pārivattakā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ භික්ෂුණියකට මාරු කර ගැනීමක් හැර සිවුරක් දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should give a robe to a bhikkhunī who is not a relative, except in exchange: Pācittiya.",
    "role": "rule",
    "n": 25
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා චීවරං සිබ්බෙය්‍ය වා සිබ්බාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā cīvaraṃ sibbeyya vā sibbāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොනෑ භික්ෂුණියකට සිවුරක් මසයි නම් හෝ මස්සවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should sew or have sewn a robe for a bhikkhunī who is not a relative: Pācittiya.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුනියා සද්ධිං සංවිධාය ඒකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, අන්තමසෝ ගාමන්තරම්පි, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, antamaso gāmantarampi, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුණියක් සමග සංවිධාන ව එක් මාර්ගයකට පිළිපන්නේ නම්, යටත් පිරිසෙයින් ගමක් තරණය කිරීමට වුවද, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should arrange to travel on the same road with a bhikkhunī, even as far as the next village: Pācittiya.",
    "role": "rule",
    "n": 27
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුනියා සද්ධිං සංවිධාය ඒකං නාවං අභිරුහෙය්‍ය, උද්ධගාමිනිං වා අධෝගාමිනිං වා, අඤ්ඤත්‍ර තිරියං තරණාය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ saṃvidhāya ekaṃ nāvaṃ abhiruheyya, uddhagāminiṃ vā adhogāminiṃ vā, aññatra tiriyaṃ taraṇāya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුණියක් සමග සංවිධාන ව එක් නැවකට නගී නම්, ගං හරහා යාමක් හැර, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should arrange to board the same boat with a bhikkhunī, going upstream or downstream, except for crossing to the other shore: Pācittiya.",
    "role": "rule",
    "n": 28
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං භික්ඛුනීපරිපාචිතං පිණ්ඩපාතං භුඤ්ජෙය්‍ය, අඤ්ඤත්‍ර පුබ්බේ නිමන්තනා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ bhikkhunīparipācitaṃ piṇḍapātaṃ bhuñjeyya, aññatra pubbe nimantanā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන භික්ෂුණියක විසින් පිළියෙළ කරවන ලද පිණ්ඩපාතයක් පෙර නිමන්ත්‍රණය හැර වළඳයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly eat almsfood procured by a bhikkhunī, except when previously invited: Pācittiya.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුනියා සද්ධිං ඒකෝ ඒකාය රහෝ නිසජ්ජං කප්පෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuniyā saddhiṃ eko ekāya raho nisajjaṃ kappeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුණියක් සමග එකලා ව රහසිගත ව හිඳගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should sit in private alone with a bhikkhunī: Pācittiya.",
    "role": "rule",
    "n": 30
   },
   {
    "pali": "අගිලානේන භික්ඛුනා ඒකෝ ආවසථපිණ්ඩෝ භුඤ්ජිතබ්බෝ. තතෝ චේ උත්තරිං භුඤ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Agilānena bhikkhunā eko āvasathapiṇḍo bhuñjitabbo. Tato ce uttariṃ bhuñjeyya, pācittiyaṃ.",
    "si": "නොගිලන් භික්ෂුවක් විසින් එක් ආවසථ පිණ්ඩයක් වළඳා ගත යුතු ය. ඉන් මත්තෙහි වළඳයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "A monk who is not sick may eat one meal at a public rest-house. To eat more: Pācittiya.",
    "role": "rule",
    "n": 31
   },
   {
    "pali": "ගණභෝජනේ අඤ්ඤත්‍ර සමයා පාචිත්තියං.",
    "translit": "Gaṇabhojane aññatra samayā pācittiyaṃ.",
    "si": "සුදුසු සමය හැර ගණ භෝජනයෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Eating in a group, except at the proper time: Pācittiya.",
    "role": "rule",
    "n": 32
   },
   {
    "pali": "පරම්පරභෝජනේ අඤ්ඤත්‍ර සමයා පාචිත්තියං.",
    "translit": "Paramparabhojane aññatra samayā pācittiyaṃ.",
    "si": "සුදුසු සමය හැර පරම්පරා භෝජනයෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Eating successively (from several houses), except at the proper time: Pācittiya.",
    "role": "rule",
    "n": 33
   },
   {
    "pali": "භික්ඛුං පනේව කුලං උපගතං පූවේහි වා මන්ථේහි වා අභිහට්ඨුං පවාරෙය්‍ය, ආකඞ්ඛමානේන භික්ඛුනා ද්වේ වා තීණි වා පත්තපූරා පටිග්ගහෙතබ්බා. තතෝ චේ උත්තරිං පටිග්ගණ්හෙය්‍ය, පාචිත්තියං.",
    "translit": "Bhikkhuṃ paneva kulaṃ upagataṃ pūvehi vā manthehi vā abhihaṭṭhuṃ pavāreyya, ākaṅkhamānena bhikkhunā dve vā tīṇi vā pattapūrā paṭiggahetabbā. Tato ce uttariṃ paṭiggaṇheyya, pācittiyaṃ.",
    "si": "කුලයකට එළඹුණු භික්ෂුවකට කැවුම්වලින් හෝ අග්ගලාවලින් හෝ පවරයි නම්, කැමති භික්ෂුවක් විසින් පාත්‍ර දෙකක් හෝ තුනක් හෝ පිරවූ පමණ පිළිගත යුතු ය. ඉන් මත්තෙහි පිළිගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "When invited with cakes or cooked grain at a family's home, a monk may accept two or three bowlfuls if he wishes. To accept more: Pācittiya.",
    "role": "rule",
    "n": 34
   },
   {
    "pali": "යෝ පන භික්ඛු භුත්තාවී පවාරිතෝ අනතිරිත්තං ඛාදනීයං වා භෝජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhuttāvī pavārito anatirittaṃ khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි වළඳා පවාරණය ව අතිරේක නොකළ කැ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කයි නම් හෝ බුදියි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, having eaten and been invited, should eat or consume food that is not left over: Pācittiya.",
    "role": "rule",
    "n": 35
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං භුත්තාවිං පවාරිතං අනතිරිත්තෙන ඛාදනීයේන වා භෝජනීයේන වා අභිහට්ඨුං පවාරෙය්‍ය; 'හන්ද භික්ඛු ඛාද වා භුඤ්ජ වා'ති, ජානං ආසාදනාපේක්ඛෝ භුත්තස්මිං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ bhuttāviṃ pavāritaṃ anatirittena khādanīyena vā bhojanīyena vā abhihaṭṭhuṃ pavāreyya; 'handa bhikkhu khāda vā bhuñja vā'ti, jānaṃ āsādanāpekkho bhuttasmiṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි වළඳා පවාරණය වූ භික්ෂුවකට අතිරේක නොකළ කැ යුතු දෙයකින් හෝ බුදිය යුතු දෙයකින් හෝ පවරයි නම් — 'එව භික්ෂුව, කන්න හෝ බුදින්න' කියා — දැන දැන ඇවැතට පැමිණවීම අපේක්ෂා කරමින් වළඳන ලද්දේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should invite a monk who has eaten and been invited to eat food that is not left over, saying 'Come, monk, eat or consume', knowing and intending to cause an offence: Pācittiya in the eating.",
    "role": "rule",
    "n": 36
   },
   {
    "pali": "යෝ පන භික්ඛු විකාලේ ඛාදනීයං වා භෝජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu vikāle khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි විකාලයෙහි කැ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කයි නම් හෝ බුදියි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should eat or consume food at the wrong time: Pācittiya.",
    "role": "rule",
    "n": 37
   },
   {
    "pali": "යෝ පන භික්ඛු සන්නිධිකාරකං ඛාදනීයං වා භෝජනීයං වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sannidhikārakaṃ khādanīyaṃ vā bhojanīyaṃ vā khādeyya vā bhuñjeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි තැන්පත් කර තබා ගත් කැ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් කයි නම් හෝ බුදියි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should eat or consume stored-up food: Pācittiya.",
    "role": "rule",
    "n": 38
   },
   {
    "pali": "යානි පන තානි පණීතභෝජනානි, සේය්‍යථිදං: සප්පි නවනීතං තේලං මධු ඵාණිතං මච්ඡං මංසං ඛීරං දධි. යෝ පන භික්ඛු ඒවරූපානි පණීතභෝජනානි අගිලානෝ අත්තනෝ අත්ථාය විඤ්ඤාපෙත්වා භුඤ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Yāni pana tāni paṇītabhojanāni, seyyathidaṃ: Sappi navanītaṃ telaṃ madhu phāṇitaṃ macchaṃ maṃsaṃ khīraṃ dadhi. Yo pana bhikkhu evarūpāni paṇītabhojanāni agilāno attano atthāya viññāpetvā bhuñjeyya, pācittiyaṃ.",
    "si": "යම් ඒ ප්‍රණීත භෝජනයෝ වේ ද, එනම්: ගිතෙල්, වෙඩිරු, තෙල්, මී පැණි, උක් සකුරු, මාළු, මස්, කිරි, දී — යම් භික්ෂුවක් එබඳු ප්‍රණීත භෝජන ගිලන් නොව තමා උදෙසා ඉල්ලා ගෙන වළඳයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Those choice foods — ghee, fresh butter, oil, honey, molasses, fish, meat, milk, curd — whatever monk, not sick, should ask for such choice foods for himself and eat them: Pācittiya.",
    "role": "rule",
    "n": 39
   },
   {
    "pali": "යෝ පන භික්ඛු අදින්නං මුඛද්වාරං ආහාරං ආහරෙය්‍ය, අඤ්ඤත්‍ර උදකදන්තපෝනා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu adinnaṃ mukhadvāraṃ āhāraṃ āhareyya, aññatra udakadantaponā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දත් මදින පැන් හැර නොදුන් ආහාරයක් මුඛයෙන් ගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should take food into his mouth that has not been given, except water for cleaning the teeth: Pācittiya.",
    "role": "rule",
    "n": 40
   },
   {
    "pali": "යෝ පන භික්ඛු අචේලකස්ස වා පරිබ්බාජකස්ස වා පරිබ්බාජිකාය වා සහත්ථා ඛාදනීයං වා භෝජනීයං වා දදෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu acelakassa vā paribbājakassa vā paribbājikāya vā sahatthā khādanīyaṃ vā bhojanīyaṃ vā dadeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නිර්වස්ත්‍රකයකුට හෝ පරිබ්‍රාජකයකුට හෝ පරිබ්‍රාජිකාවකට සියතින් කැ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should give food with his own hand to a naked ascetic, a male or female wanderer: Pācittiya.",
    "role": "rule",
    "n": 41
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං 'ඒහාවුසෝ ගාමං වා නිගමං වා පිණ්ඩාය පවිසිස්සාමා'ති, තස්ස දාපෙත්වා වා අදාපෙත්වා වා උය්‍යෝජෙය්‍ය; 'ගච්ඡාවුසෝ, න මේ තයා සද්ධිං කථා වා නිසජ්ජා වා ඵාසු හෝති, ඒකකස්ස මේ කථා වා නිසජ්ජා වා ඵාසු හෝතී'ති, ඉති චේ ඒතදේව පච්චයං කරිත්වා අනඤ්ඤං, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ 'ehāvuso gāmaṃ vā nigamaṃ vā piṇḍāya pavisissāmā'ti, tassa dāpetvā vā adāpetvā vā uyyojeyya; 'gacchāvuso, na me tayā saddhiṃ kathā vā nisajjā vā phāsu hoti, ekakassa me kathā vā nisajjā vā phāsu hotī'ti, iti ce etadeva paccayaṃ karitvā anaññaṃ, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුවකට 'එව, ඇවැත්නි, ගමට හෝ නියම් ගමට පිඬු පිණිස පිවිසෙමු' යැයි කියා, ඔහුට දෙවා හෝ නොදෙවා හෝ ඔහු පිටත් කර යවයි නම් — 'ඇවැත්නි යව, නුඹ සමග කථාව හෝ හිදීම හෝ මට පහසු නොවේ; එකලා වූ මට කථා කිරීම හෝ හිදීම පහසු වේ' කියා — අන් කරුණක් නොමැති ව මෙය ම හේතු කොටගෙන එතැනින් පිටත් කර යවන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should say to a monk 'Come, let us enter the village for alms', then dismiss him, saying 'Go away, Venerable, I find no comfort in talking or sitting with you; I find comfort in talking or sitting alone' — if he does this for this reason alone and no other: Pācittiya.",
    "role": "rule",
    "n": 42
   },
   {
    "pali": "යෝ පන භික්ඛු සභෝජනේ කුලේ අනුපඛජ්ජ නිසජ්ජං කප්පෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sabhojane kule anupakhajja nisajjaṃ kappeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භෝජන සහිත කුලයක අනුපඛජ්ජ (අනුන් අතරට රිංගා) හිඳගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should intrude and sit down in a family where a couple is eating: Pācittiya.",
    "role": "rule",
    "n": 43
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමේන සද්ධිං ඒකෝ ඒකාය රහෝ පටිච්ඡන්නේ ආසනේ නිසජ්ජං කප්පෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ eko ekāya raho paṭicchanne āsane nisajjaṃ kappeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවක් සමග එකලා ව, රහසිගත ව, පිළිසන් ආසනයක හිඳගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should sit down in private alone with a woman in a secluded place: Pācittiya.",
    "role": "rule",
    "n": 44
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමේන සද්ධිං ඒකෝ ඒකාය රහෝ නිසජ්ජං කප්පෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ eko ekāya raho nisajjaṃ kappeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවක් සමග එකලා ව රහසිගත ව හිඳගනී නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should sit in private alone with a woman: Pācittiya.",
    "role": "rule",
    "n": 45
   },
   {
    "pali": "යෝ පන භික්ඛු නිමන්තිතෝ සන්තේ සභෝජනේ... අඤ්ඤත්‍ර සමයා පාචිත්තියං.",
    "translit": "Yo pana bhikkhu nimantito sante sabhojane... Aññatra samayā pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නිමන්ත්‍රණ ලදුව, සුදුසු සමය හැර, විහාරයෙහි සිටින භික්ෂූන් නොවිචාරා කුලයන්හි හැසිරෙන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, being invited, should go to families before or after the meal without informing the monks in the monastery, except at the proper time: Pācittiya.",
    "role": "rule",
    "n": 46
   },
   {
    "pali": "අගිලානේන භික්ඛුනා චාතුමාසප්පවාරණා සාදිතබ්බා, අඤ්ඤත්‍ර පුනප්පවාරණාය, අඤ්ඤත්‍ර නිච්චපවාරණාය. තතෝ චේ උත්තරිං සාදියෙය්‍ය, පාචිත්තියං.",
    "translit": "Agilānena bhikkhunā cātumāsappavāraṇā sāditabbā, aññatra punappavāraṇāya, aññatra niccapavāraṇāya. Tato ce uttariṃ sādiyeyya, pācittiyaṃ.",
    "si": "නොගිලන් භික්ෂුවක් විසින් මාස හතරක බෙහෙත් පවරණය පිළිගත යුතු ය. නැවත පවරණයක් හෝ නිත්‍ය පවරණයක් හැර. ඉන් මත්තෙහි පිළිගන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "A monk who is not sick may accept an invitation for medicines for four months, except for a repeated invitation or a permanent invitation. To accept longer: Pācittiya.",
    "role": "rule",
    "n": 47
   },
   {
    "pali": "යෝ පන භික්ඛු උය්‍යුත්තං සේනං දස්සනාය ගච්ඡෙය්‍ය, අඤ්ඤත්‍ර තථාරූපප්පච්චයා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu uyyuttaṃ senaṃ dassanāya gaccheyya, aññatra tathārūpappaccayā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි එබඳු අවස්ථාවක් හැර යුද්ධ සේනාවක් බැලීමට යයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should go to see an army on the march, except for a suitable reason: Pācittiya.",
    "role": "rule",
    "n": 48
   },
   {
    "pali": "සියා ව තස්ස භික්ඛුනෝ කෝචිදේව පච්චයෝ සේනාය ගමනාය, ද්වේ රත්තියෝ වා තීණි වා රත්තියෝ වා වසිතබ්බං, තතෝ චේ උත්තරිං වසෙය්‍ය, පාචිත්තියං.",
    "translit": "Siyā va tassa bhikkhuno kocideva paccayo senāya gamanāya, dve rattiyo vā tīṇi vā rattiyo vā vasitabbaṃ, tato ce uttariṃ vaseyya, pācittiyaṃ.",
    "si": "එම භික්ෂුවට සේනාවට යාමට යම් කිසි කරුණක් වේ නම්, දෙරැයක් හෝ තුන්රැයක් හෝ සේනාවෙහි විසිය යුතු ය. ඉන් මත්තෙහි වසන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "If there is some reason for that monk to go to the army, he may stay with the army for two or three nights. To stay longer: Pācittiya.",
    "role": "rule",
    "n": 49
   },
   {
    "pali": "ද්වේ රත්ති තිරත්තං චේ භික්ඛු සේනාය වසමානෝ උය්‍යෝධිකං වා බලග්ගං වා සේනාබ්‍යූහං වා අනීකදස්සනං වා ගච්ඡෙය්‍ය, පාචිත්තියං.",
    "translit": "Dve ratti tirattaṃ ce bhikkhu senāya vasamāno uyyodhikaṃ vā balaggaṃ vā senābyūhaṃ vā anīkadassanaṃ vā gaccheyya, pācittiyaṃ.",
    "si": "දෙරැයක් හෝ තුන්රැයක් හෝ සේනාවෙහි වසන භික්ෂුවක් යුද්ධ භූමියට හෝ බලඇණි ගැසූ තැනට හෝ සේනාව කැළඹුණු තැනට හෝ බලඇණි දකින්නට යයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "If a monk staying with an army for two or three nights should go to a battlefield, a parade, a battle array, or a review of the troops: Pācittiya.",
    "role": "rule",
    "n": 50
   },
   {
    "pali": "සුරාමේරයපානේ පාචිත්තියං.",
    "translit": "Surāmerayapāne pācittiyaṃ.",
    "si": "මත්පැන් පානය කිරීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Drinking alcohol or intoxicants: Pācittiya.",
    "role": "rule",
    "n": 51
   },
   {
    "pali": "අඞ්ගුලිපතෝදකේ පාචිත්තියං.",
    "translit": "Aṅgulipatodake pācittiyaṃ.",
    "si": "ඇඟිල්ලෙන් අනිනු ලැබීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Tickling with the fingers: Pācittiya.",
    "role": "rule",
    "n": 52
   },
   {
    "pali": "උදකේ හස්සධම්මේ පාචිත්තියං.",
    "translit": "Udake hassadhamme pācittiyaṃ.",
    "si": "ජලයෙහි කෙළි කෙළ සිනාසීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Playing in water: Pācittiya.",
    "role": "rule",
    "n": 53
   },
   {
    "pali": "අනාදරියේ පාචිත්තියං.",
    "translit": "Anādariye pācittiyaṃ.",
    "si": "අනාදරයෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Disrespect: Pācittiya.",
    "role": "rule",
    "n": 54
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං හස්සපේය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ hassapeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුවක් බිය ගන්වයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should frighten another monk: Pācittiya.",
    "role": "rule",
    "n": 55
   },
   {
    "pali": "යෝ පන භික්ඛු අගිලානෝ විසිබ්බනපච්චයා ජෝතිං සමාදහෙය්‍ය වා සමාදහාපෙය්‍ය වා, අඤ්ඤත්‍ර තථාරූපප්පච්චයා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu agilāno visibbanapaccayā jotiṃ samādaheyya vā samādahāpeyya vā, aññatra tathārūpappaccayā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි නොගිලන් ව, එබඳු කරුණක් හැර, උණුසුම් වීම පිණිස ගිනි දල්වයි නම් හෝ දල්වවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, not sick, should kindle a fire or have one kindled for warmth, except for a suitable reason: Pācittiya.",
    "role": "rule",
    "n": 56
   },
   {
    "pali": "යෝ පන භික්ඛු මාසේන අද්ධමාසං නහායෙය්‍ය, අඤ්ඤත්‍ර සමයා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu māsena addhamāsaṃ nahāyeyya, aññatra samayā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සුදුසු කාලය හැර මාසයකට අඩමසකින් නහයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should bathe at intervals of less than half a month, except at the proper time: Pācittiya.",
    "role": "rule",
    "n": 57
   },
   {
    "pali": "නවං පන භික්ඛුනා චීවරලාභේන දුබ්බණ්ණකරණං අඤ්ඤතරං දුබ්බණ්ණකරණං ආදාතබ්බං නීලං වා කද්දමං වා කාළසාමං වා. අනාදා චේ භික්ඛු චීවරලාභේන දුබ්බණ්ණකරණං අඤ්ඤතරං දුබ්බණ්ණකරණං නවං චීවරං පරිභුඤ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā cīvaralābhena dubbaṇṇakaraṇaṃ aññataraṃ dubbaṇṇakaraṇaṃ ādātabbaṃ nīlaṃ vā kaddamaṃ vā kāḷasāmaṃ vā. Anādā ce bhikkhu cīvaralābhena dubbaṇṇakaraṇaṃ aññataraṃ dubbaṇṇakaraṇaṃ navaṃ cīvaraṃ paribhuñjeyya, pācittiyaṃ.",
    "si": "අලුත් සිවුරක් ලත් භික්ෂුවක් විසින් තුන් ආකාර දුර්වර්ණ කිරීම් අතරින් එකක් — නිල්, මඩ, කළු — ගත යුතු ය. නොගෙන අලුත් සිවුරක් පරිභෝග කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "When a monk has obtained a new robe, he should apply one of the three disfiguring colours — blue, mud, or black. If he uses it without applying a disfiguring colour: Pācittiya.",
    "role": "rule",
    "n": 58
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස වා භික්ඛුනියා වා සික්ඛමානාය වා සාමණේරස්ස වා සාමණේරියා වා සාමං චීවරං විකප්පෙත්වා අපවිවුද්ධාරකං පරිභුඤ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa vā bhikkhuniyā vā sikkhamānāya vā sāmaṇerassa vā sāmaṇeriyā vā sāmaṃ cīvaraṃ vikappetvā apavivuddhārakaṃ paribhuñjeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුවකට හෝ භික්ෂුණියකට හෝ සික්ඛමානාවකට හෝ සාමණේරයකුට හෝ සාමණේරියකට හෝ තමාම සිවුරක් විකප්පනය කොට, නැවත පවිවුද්ධාරය නොකර පරිභෝග කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should himself assign a robe to a monk, bhikkhunī, probationer, novice, or female novice, and then use it without having it relinquished: Pācittiya.",
    "role": "rule",
    "n": 59
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස පත්තං වා චීවරං වා නිසීදනං වා සූචිඝරං වා කායබන්ධනං වා අපනිධාය වා අපනිධාපෙය්‍ය වා අන්තමසෝ හස්සාපේක්ඛෝපි, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa pattaṃ vā cīvaraṃ vā nisīdanaṃ vā sūcigharaṃ vā kāyabandhanaṃ vā apanidhāya vā apanidhāpeyya vā antamaso hassāpekkhopi, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂුවකගේ පාත්‍රයක් හෝ සිවුරක් හෝ නිසීදනයක් හෝ ඉදිකටු ගුලාවක් හෝ ඉණ පටියක් හෝ යටත් පිරිසෙයින් කෙළි සිනාවක් පිණිස වුවද සඟවයි නම් හෝ සඟවවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should hide or have hidden another monk's bowl, robe, sitting-cloth, needle-case, or waist-band, even in jest: Pācittiya.",
    "role": "rule",
    "n": 60
   },
   {
    "pali": "යෝ පන භික්ඛු සඤ්චිච්ච පාණං ජීවිතා වෝරෝපෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu sañcicca pāṇaṃ jīvitā voropeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දැන දැන සතෙකු දිවියෙන් තොර කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should intentionally deprive a living being of life: Pācittiya.",
    "role": "rule",
    "n": 61
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං සප්පාණකං උදකං පරිභුඤ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ sappāṇakaṃ udakaṃ paribhuñjeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දැන දැන ප්‍රාණීන් සහිත ජලය පරිභෝග කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly use water containing living beings: Pācittiya.",
    "role": "rule",
    "n": 62
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං යථාධම්මා නිහතාධිකරණං පුනකම්මාය උක්කෝටෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ yathādhammā nihatādhikaraṇaṃ punakammāya ukkoṭeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දැන දැන ධර්මය වූ පරිද්දෙන් සන්සිඳුවන ලද අධිකරණයක් නැවත විසඳීම සඳහා මතු කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly reopen a legal issue that has been settled according to Dhamma: Pācittiya.",
    "role": "rule",
    "n": 63
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස ජානං දුට්ඨුල්ලං ආපත්තිං පටිච්ඡාදෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa jānaṃ duṭṭhullaṃ āpattiṃ paṭicchādeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන භික්ෂුවකගේ දුට්ඨුල්ල ඇවැතක් වසා තබයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly conceal another monk's grave offence: Pācittiya.",
    "role": "rule",
    "n": 64
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං ඌනවීසතිවස්සං පුග්ගලං උපසම්පාදෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ ūnavīsativassaṃ puggalaṃ upasampādeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන වයස අවුරුදු විස්සට අඩු පුද්ගලයකු උපසම්පදා කරවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly ordain a person under twenty years of age: Pācittiya.",
    "role": "rule",
    "n": 65
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං ථේය්‍යසංවාසකං ලිඞ්ගසංවාසකං... අන්තමසෝ ගාමන්තරම්පි සංවිධාය ඒකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ theyyasaṃvāsakaṃ liṅgasaṃvāsakaṃ... Antamaso gāmantarampi saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන සොර සංවාසයක් හෝ ලිංග සංවාසයක් සමග සංවිධාන ව එක් මාර්ගයකට පිළිපන්නේ නම්, යටත් පිරිසෙයින් ගමක් තරණය කිරීමට වුවද, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly travel on the same road with a thief or a false monk, even as far as the next village: Pācittiya.",
    "role": "rule",
    "n": 66
   },
   {
    "pali": "යෝ පන භික්ඛු මාතුගාමේන සද්ධිං සංවිධාය ඒකද්ධානමග්ගං පටිපජ්ජෙය්‍ය, අන්තමසෝ ගාමන්තරම්පි, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mātugāmena saddhiṃ saṃvidhāya ekaddhānamaggaṃ paṭipajjeyya, antamaso gāmantarampi, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කාන්තාවක් සමග සංවිධාන ව එක් මාර්ගයකට පිළිපන්නේ නම්, යටත් පිරිසෙයින් ගමක් තරණය කිරීමට වුවද, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should arrange to travel on the same road with a woman, even as far as the next village: Pācittiya.",
    "role": "rule",
    "n": 67
   },
   {
    "pali": "යෝ පන භික්ඛු ඒවං වදෙය්‍ය: 'තථාහං භගවතා ධම්මං දේසිතං ආජානාමි, යථා යේමේ අන්තරායිකා ධම්මා වුත්තා භගවතා, තේ පටිසේවතෝ නාලං අන්තරායායා'ති. සෝ භික්ඛු භික්ඛූහි ඒවමස්ස වචනීයෝ: 'මා ආයස්මා ඒවං අවච, මා භගවන්තං අබ්භාචික්ඛි, න හි සාධු භගවතෝ අබ්භක්ඛානං...'ති.",
    "translit": "Yo pana bhikkhu evaṃ vadeyya: 'Tathāhaṃ bhagavatā dhammaṃ desitaṃ ājānāmi, yathā yeme antarāyikā dhammā vuttā bhagavatā, te paṭisevato nālaṃ antarāyāyā'ti. So bhikkhu bhikkhūhi evamassa vacanīyo: 'Mā āyasmā evaṃ avaca, mā bhagavantaṃ abbhācikkhi, na hi sādhu bhagavato abbhakkhānaṃ...'Ti.",
    "si": "යම් භික්ෂුවක් වනාහි 'භාග්‍යවතුන් වහන්සේ විසින් යම් මේ අන්තරායකර ධර්මයක් වදාරන ලද්දාහු ද ඒ ධර්මයන් සේවනය කරන්නහුට අන්තරාය පිණිස නොවේ යැයි එසේ භාග්‍යවතුන් වහන්සේ විසින් වදාළ ධර්මය මම දනිමි' යැයි මෙසේ කියයි නම්, ඒ භික්ෂුව භික්ෂූන් විසින් මෙසේ කිය යුත්තේ ය: 'ආයුෂ්මත් තෙමේ එසේ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ කීම නො මැනවි...'",
    "en": "Whatever monk should say 'Thus I understand the Dhamma taught by the Blessed One — that the things called obstructions by the Blessed One are not sufficient to obstruct one who practises them': that monk should be spoken to by the monks thus: 'Do not say so, Venerable; do not misrepresent the Blessed One; for it is not good to misrepresent the Blessed One...'",
    "role": "rule",
    "n": 68
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං තථාවාදිනා භික්ඛුනා අකතානුධම්මිකාය තං දිට්ඨිං අප්පටිනිස්සට්ඨේන සද්ධිං සම්භුඤ්ජෙය්‍ය වා සංවසෙය්‍ය වා සහ වා සෙය්‍යං කප්පෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ tathāvādinā bhikkhunā akatānudhammikāya taṃ diṭṭhiṃ appaṭinissaṭṭhena saddhiṃ sambhuñjeyya vā saṃvaseyya vā saha vā seyyaṃ kappeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන එසේ කියන ඒ දෘෂ්ටිය අත් නොහැර, උක්ෂේපණීය කර්මයෙන් මිදී නොගත් භික්ෂුවක් සමග ධර්මාමිෂ සම්භෝගය පවත්වයි නම් හෝ වාසය කරයි නම් හෝ එකට නිදයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should associate, dwell, or lie down with a monk who holds such a view and has not been dealt with according to the Dhamma: Pācittiya.",
    "role": "rule",
    "n": 69
   },
   {
    "pali": "සමනුද්දේසෝපි චේ ඒවං වදෙය්‍ය, සෝ භික්ඛු භික්ඛූහි ඒවමස්ස වචනීයෝ: 'මා ආවුසෝ සමනුද්දේස ඒවං අවච, මා භගවන්තං අබ්භාචික්ඛි...'ති. ඒවඤ්ච පන සෝ සමනුද්දේසෝ භික්ඛූහි වුච්චමානෝ තථේව පග්ගණ්හෙය්‍ය, සමනුද්දේසෝ භික්ඛූහි ඒවමස්ස වචනීයෝ: 'අජ්ජතග්ගේ තේ ආවුසෝ සමනුද්දේස න සේවිතබ්බං...'ති.",
    "translit": "Samanuddesopi ce evaṃ vadeyya, so bhikkhu bhikkhūhi evamassa vacanīyo: 'Mā āvuso samanuddesa evaṃ avaca, mā bhagavantaṃ abbhācikkhi...'Ti. Evañca pana so samanuddeso bhikkhūhi vuccamāno tatheva paggaṇheyya, samanuddeso bhikkhūhi evamassa vacanīyo: 'Ajjatagge te āvuso samanuddesa na sevitabbaṃ...'Ti.",
    "si": "සාමණේරයෙක් වුවද එසේ කියයි නම්, ඒ සාමණේරයා භික්ෂූන් විසින් මෙසේ කිය යුත්තේ ය: 'ඇවැත් සාමණේරය, එසේ නො කියව; භාග්‍යවතුන් වහන්සේට නුගුණ නො කියව...' එසේ කියනු ලබන විට එහිම දැඩි ව ගන්නේ නම්, ඔහුට මෙසේ කිය යුත්තේ ය: 'අද පටන් සාමණේරය, නුඹ භික්ෂූන් සමග එකට නො විසිය යුතු ය...'",
    "en": "If even a novice should say such a thing, that novice should be spoken to by the monks thus: 'Do not say so, novice; do not misrepresent the Blessed One...' And if that novice, being spoken to, persists, the monks should say to him: 'From today on, novice, you should not live with the monks...'",
    "role": "rule",
    "n": 70
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛූහි සහධම්මිකං වුච්චමානෝ ඒවං වදෙය්‍ය: 'න කාවාහං ආවුසෝ ඒකස්මිං සික්ඛාපදේ සික්ඛිස්සාමි, යාව න අඤ්ඤං භික්ඛුං බ්‍යත්තං විනයධරං පරිපුච්ඡාමී'ති, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhūhi sahadhammikaṃ vuccamāno evaṃ vadeyya: 'Na kāvāhaṃ āvuso ekasmiṃ sikkhāpade sikkhissāmi, yāva na aññaṃ bhikkhuṃ byattaṃ vinayadharaṃ paripucchāmī'ti, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි භික්ෂූන් විසින් සහධර්මික ව කියනු ලබන්නේ 'ඇවැත්නි මම ව්‍යක්ත විනයධර භික්ෂුවකගෙන් විමසන තාක් ඒ ශික්ෂාපදයෙහි නො හික්මෙන්නෙමි' යැයි මෙසේ කියයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, being admonished by monks according to the Dhamma, should say 'I will not train in this training rule until I have questioned another learned monk, an expert in the Vinaya': Pācittiya.",
    "role": "rule",
    "n": 71
   },
   {
    "pali": "සික්ඛමානාය භික්ඛුනියා භික්ඛුනා අඤ්ඤාතබ්බං පරිපුච්ඡිතබ්බං පරිජානිතබ්බං අයං තත්ථ සාමීචි.",
    "translit": "Sikkhamānāya bhikkhuniyā bhikkhunā aññātabbaṃ paripucchitabbaṃ parijānitabbaṃ ayaṃ tattha sāmīci.",
    "si": "ශික්ෂමානා භික්ෂුණියට භික්ෂුවක් විසින් දැනගත යුතු ය, විචාරිය යුතු ය, අවබෝධ කර ගත යුතු ය. මෙය එහි අනුධර්මතාව යි.",
    "en": "A probationer bhikkhunī should be known, questioned, and examined by the monk. This is the proper procedure here.",
    "role": "rule",
    "n": 72
   },
   {
    "pali": "යෝ පන භික්ඛු ජානමානෝ උද්දිස්සමානං ඒවං වදෙය්‍ය: 'කිං පනිමේහි බුද්ධානුබුද්ධේහි සික්ඛාපදේහි උද්දිට්ඨේහි, යාවදේව කුක්කුච්චාය විහේසාය විලේඛාය සංවත්තන්තී'ති, සික්ඛාපදවිවණ්ණකේ පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānamāno uddissamānaṃ evaṃ vadeyya: 'Kiṃ panimehi buddhānubuddhehi sikkhāpadehi uddiṭṭhehi, yāvadeva kukkuccāya vihesāya vilekhāya saṃvattantī'ti, sikkhāpadavivaṇṇake pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන පොහොය උදෙසනු ලබන කල්හි 'කිම, මේ කුඩා අනුකුඩා ශික්ෂාපද උදෙසීමෙන් කවර වැඩක් ද? භික්ෂූන් ඒවා කුකුස් පිණිස, වෙහෙස පිණිස, විලේඛන පිණිස පවතියි' යැයි ශික්ෂාපද ගැරහීමෙහි පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, while the Pātimokkha is being recited, should say 'What is the use of reciting these minor training rules? They only lead to remorse, distress, and perplexity': Pācittiya, for disparaging the training rules.",
    "role": "rule",
    "n": 73
   },
   {
    "pali": "යෝ පන භික්ඛු අන්වද්ධමාසං පාතිමොක්ඛේ උද්දිස්සමානේ ඒවං වදෙය්‍ය: 'ඉදානේව ඛෝ අහං ආජානාමි, අයම්පි කිර ධම්මෝ සුත්තාගතෝ සුත්තපරියාපන්නෝ අන්වද්ධමාසං උද්දේසං ආගච්ඡතී'ති, තඤ්චේ භික්ඛුං අඤ්ඤේ භික්ඛූ ජානෙය්‍යුං: 'නිසින්නපුබ්බං ඉමිනා භික්ඛුනා ද්වත්තික්ඛත්තුං පාතිමොක්ඛේ උද්දිස්සමානේ', අඤ්ඤත්‍ර අඤ්ඤාණා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu anvaddhamāsaṃ pātimokkhe uddissamāne evaṃ vadeyya: 'Idāneva kho ahaṃ ājānāmi, ayampi kira dhammo suttāgato suttapariyāpanno anvaddhamāsaṃ uddesaṃ āgacchatī'ti, tañce bhikkhuṃ aññe bhikkhū jāneyyuṃ: 'Nisinnapubbaṃ iminā bhikkhunā dvattikkhattuṃ pātimokkhe uddissamāne', aññatra aññāṇā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි අඩමසක් පාසා පාතිමොක්ඛ උදෙසනු ලබන කල්හි 'දැන් මම මේ ධර්මය දනිමි; මේ ධර්මය ද විනයෙහි ඇතුළත් ය, අඩමසක් පාසා උදෙසීමට පැමිණේ ය' යැයි කියයි නම්, අඤ්ඤාණය හැර, අනෙක් භික්ෂූන් විසින් 'මේ භික්ෂුව මීට පෙර දෙතුන් වරක් පාතිමොක්ඛ උදෙසනු ලබන කල්හි හුන්නේ ය' යැයි දන්නාහු නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, while the Pātimokkha is being recited every half-month, should say 'Only now do I understand that this rule is also included in the Suttas and recited every half-month' — if other monks know of that monk 'This monk has already sat through the Pātimokkha recitation two or three times' — apart from ignorance: Pācittiya.",
    "role": "rule",
    "n": 74
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස කුපිතෝ අනත්තමනෝ පහාරං දදෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa kupito anattamano pahāraṃ dadeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කිපී නොසතුටු ව භික්ෂුවකට පහර දෙයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, angry and displeased, should strike a monk: Pācittiya.",
    "role": "rule",
    "n": 75
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුස්ස කුපිතෝ අනත්තමනෝ තලසත්තිකං උග්ගිරෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhussa kupito anattamano talasattikaṃ uggireyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි කිපී නොසතුටු ව භික්ෂුවකට පහර දෙන ආකාරය දක්වා අත ඔසවයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, angry and displeased, should raise his hand against a monk: Pācittiya.",
    "role": "rule",
    "n": 76
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛුං අමූලකේන සඞ්ඝාදිසේසේන අනුද්ධංසෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhuṃ amūlakena saṅghādisesena anuddhaṃseyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි මුල් නැති සංඝාදිසේස ඇවතකින් භික්ෂුවකට චෝදනා කරයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should groundlessly charge a monk with a Saṅghādisesa offence: Pācittiya.",
    "role": "rule",
    "n": 77
   },
   {
    "pali": "යෝ පන භික්ඛු භික්ඛූනං භණ්ඩනජාතානං කලහජාතානං විවාදාපන්නානං උපස්සුතිං තිට්ඨෙය්‍ය: 'යං ඉමේ භණිස්සන්ති තං සෝස්සාමී'ති, ඉති චේ ඒතදේව පච්චයං කරිත්වා අනඤ්ඤං, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu bhikkhūnaṃ bhaṇḍanajātānaṃ kalahajātānaṃ vivādāpannānaṃ upassutiṃ tiṭṭheyya: 'Yaṃ ime bhaṇissanti taṃ sossāmī'ti, iti ce etadeva paccayaṃ karitvā anaññaṃ, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි හටගත් දබර ඇති, හටගත් කලහ ඇති, විරුද්ධ වාදයට පැමිණි භික්ෂූන්ගේ කථා බස් අසන තැන 'මොවුහු යමක් කියත් නම් එය අසම්' යැයි අනෙකක් නො ව මෙය ම කරුණු කොට කියා සිටියේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should stand eavesdropping on monks who are quarrelling, disputing, or engaged in a legal issue, thinking 'I will hear what they say' — if he does this for this reason alone and no other: Pācittiya.",
    "role": "rule",
    "n": 78
   },
   {
    "pali": "යෝ පන භික්ඛු ධම්මිකානං කම්මානං ඡන්දං දත්වා පච්ඡා ඛීයනධම්මං ආපජ්ජෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu dhammikānaṃ kammānaṃ chandaṃ datvā pacchā khīyanadhammaṃ āpajjeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි ධාර්මික විනය කර්මයකට ඡන්දය දී පසුව ඒවාට දොස් කීමට පැමිණෙන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, having given consent to a legally valid proceeding, should afterwards complain about it: Pācittiya.",
    "role": "rule",
    "n": 79
   },
   {
    "pali": "යෝ පන භික්ඛු සඞ්ඝේ විනිච්ඡයකථාය වත්තමානාය ඡන්දං අදත්වා උට්ඨායාසනා පක්කමෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu saṅghe vinicchayakathāya vattamānāya chandaṃ adatvā uṭṭhāyāsanā pakkameyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සඟ මැද විනය විනිශ්චයක් පවතින කල්හි ඡන්දය නොදී හුන් අස්නෙන් නැගිට යන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, when the Saṅgha is in the midst of a formal proceeding, should get up from his seat and leave without giving his consent: Pācittiya.",
    "role": "rule",
    "n": 80
   },
   {
    "pali": "යෝ පන භික්ඛු සමග්ගේන සඞ්ඝේන චීවරං දත්වා පච්ඡා ඛීයනධම්මං ආපජ්ජෙය්‍ය: 'යථාසන්තුතා භික්ඛූ සඞ්ඝිකා ලාභා පරිණාමෙන්තී'ති, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu samaggena saṅghena cīvaraṃ datvā pacchā khīyanadhammaṃ āpajjeyya: 'Yathāsantutā bhikkhū saṅghikā lābhā pariṇāmentī'ti, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සමගි සංඝයා සමග එක් ව සිවුරක් දී පසුව 'කැමති ලෙස භික්ෂූහු සංඝික ලාභය පිරිනමති' යැයි නුගුණ කියන බවට පැමිණෙන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk, having agreed with the harmonious Saṅgha to give a robe, should afterwards complain: 'The monks divert the Saṅgha's gains according to their liking': Pācittiya.",
    "role": "rule",
    "n": 81
   },
   {
    "pali": "යෝ පන භික්ඛු ජානං සඞ්ඝිකං ලාභං පරිණතං පුග්ගලස්ස පරිණාමෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu jānaṃ saṅghikaṃ lābhaṃ pariṇataṃ puggalassa pariṇāmeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි දන දන සංඝික ලාභයක් පුද්ගලයෙකුට පිරිනමයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should knowingly divert to an individual an offering intended for the Saṅgha: Pācittiya.",
    "role": "rule",
    "n": 82
   },
   {
    "pali": "යෝ පන භික්ඛු රඤ්ඤෝ ඛත්තියස්ස මුද්ධාවසිත්තස්ස අනික්ඛන්තරාජකේ අනීහතරට්ඨකේ පුබ්බේ අප්පටිසංවිදිතෝ ඉන්දඛීලං අතික්කාමෙය්‍ය, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu rañño khattiyassa muddhāvasittassa anikkhantarājake anīhataraṭṭhake pubbe appaṭisaṃvidito indakhīlaṃ atikkāmeyya, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි රජු නික්ම නොගිය කල්හි, රත්නය ඉවත් නොකළ කල්හි, පෙර නොදන්වා ක්ෂත්‍රිය රජකුගේ නිදන කාමරයේ එළිපත ඉක්මවා පිවිසීමෙන්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should cross the threshold of a king's bedchamber without having announced himself beforehand, when the king has not yet departed and the precious things have not been removed: Pācittiya.",
    "role": "rule",
    "n": 83
   },
   {
    "pali": "යෝ පන භික්ඛු රතනං වා රතනසම්මතං වා අඤ්ඤත්‍ර අජ්ඣාරාමා වා අජ්ඣාවසථා වා උග්ගණ්හෙය්‍ය වා උග්ගණ්හාපෙය්‍ය වා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu ratanaṃ vā ratanasammataṃ vā aññatra ajjhārāmā vā ajjhāvasathā vā uggaṇheyya vā uggaṇhāpeyya vā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි ඇතුළු ආරාමය හෝ ඇතුළු ආවාසය හැර රත්නයක් හෝ රත්න සම්මත යමක් ගනී නම් හෝ ගන්වයි නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should pick up or have picked up a treasure or something considered a treasure, except within the monastery or dwelling: Pācittiya.",
    "role": "rule",
    "n": 84
   },
   {
    "pali": "යෝ පන භික්ඛු සන්තං භික්ඛුං අනාපුච්ඡා විකාලේ ගාමං පවිසෙය්‍ය, අඤ්ඤත්‍ර තථාරූපා අච්චායිකා කරණීයා, පාචිත්තියං.",
    "translit": "Yo pana bhikkhu santaṃ bhikkhuṃ anāpucchā vikāle gāmaṃ paviseyya, aññatra tathārūpā accāyikā karaṇīyā, pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි එබඳු හදිසි කටයුත්තක් හැර, සිටින භික්ෂුවකට නොදන්වා විකාලයෙහි ගමට පිවිසෙන්නේ නම්, පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should enter a village at the wrong time without informing a resident monk, except for a suitable emergency: Pācittiya.",
    "role": "rule",
    "n": 85
   },
   {
    "pali": "යෝ පන භික්ඛු අට්ඨිමයං වා දන්තමයං වා විසාණමයං වා සූචිඝරං කාරාපෙය්‍ය, භේදනකං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu aṭṭhimayaṃ vā dantamayaṃ vā visāṇamayaṃ vā sūcigharaṃ kārāpeyya, bhedanakaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි අට්ඨිමය හෝ දන්තමය හෝ විසාණමය හෝ ඉදිකටු ගුලාවක් කරවයි නම්, භේදනක පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have a needle-case made of bone, ivory, or horn: Pācittiya requiring breaking.",
    "role": "rule",
    "n": 86
   },
   {
    "pali": "නවං පන භික්ඛුනා මඤ්චං වා පීඨං වා කාරයමානේන අට්ඨඞ්ගුලපාදකං කාරෙතබ්බං සුගතඞ්ගුලේන, අඤ්ඤත්‍ර හේට්ඨිමාය අටනියා. තං අතික්කාමයතෝ ඡේදනකං පාචිත්තියං.",
    "translit": "Navaṃ pana bhikkhunā mañcaṃ vā pīṭhaṃ vā kārayamānena aṭṭhaṅgulapādakaṃ kāretabbaṃ sugataṅgulena, aññatra heṭṭhimāya aṭaniyā. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "නව ඇඳක් හෝ පුටුවක් කරවන භික්ෂුවක් විසින් යට අටනිය හැර සුගත අඟුලින් අඟුල් අටක් වන සේ පාදවල උස තබා කරවිය යුතු ය. එය ඉක්මවන්නහුට ඡේදනක පාචිත්තිය ඇවැත් වේ.",
    "en": "When making a new bed or chair, a monk should make the legs eight Sugata finger-breadths high, except for the lower frame. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 87
   },
   {
    "pali": "යෝ පන භික්ඛු මඤ්චං වා පීඨං වා තූලෝනද්ධං කාරාපෙය්‍ය, උද්දාලනකං පාචිත්තියං.",
    "translit": "Yo pana bhikkhu mañcaṃ vā pīṭhaṃ vā tūlonaddhaṃ kārāpeyya, uddālanakaṃ pācittiyaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි ඇඳක් හෝ පුටුවක් හෝ පුළුන් බහා කරවයි නම්, උද්දාලනක පාචිත්තිය ඇවැත් වේ.",
    "en": "Whatever monk should have a bed or chair upholstered with cotton: Pācittiya requiring destruction.",
    "role": "rule",
    "n": 88
   },
   {
    "pali": "නිසීදනං පන භික්ඛුනා කාරයමානේන පමාණිකං කාරෙතබ්බං. තත්‍රිදං පමාණං: දීඝසෝ ද්වේ විදත්ථියෝ සුගතවිදත්ථියා, තිරියං දියඩ්ඪං, දසා විදත්ථි. තං අතික්කාමයතෝ ඡේදනකං පාචිත්තියං.",
    "translit": "Nisīdanaṃ pana bhikkhunā kārayamānena pamāṇikaṃ kāretabbaṃ. Tatridaṃ pamāṇaṃ: Dīghaso dve vidatthiyo sugatavidatthiyā, tiriyaṃ diyaḍḍhaṃ, dasā vidatthi. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "නිසීදනයක් කරවන භික්ෂුවක් විසින් පමාණවත් කොට කරවිය යුතු ය. එහි පමාණය මෙසේ ය: දිගින් සුගත වියතින් වියත් දෙකකි. පළලින් වියත් එකහමාරකි. දාවල්ලු වියතකි. එය ඉක්මවන්නහුට ඡේදනක පාචිත්තිය ඇවැත් වේ.",
    "en": "When making a sitting-cloth, a monk should make it to the prescribed measure. The measure is: two spans in length by the Sugata span, one and a half spans in width, one span for the border. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 89
   },
   {
    "pali": "කණ්ඩුපටිච්ඡාදිං පන භික්ඛුනා කාරයමානේන පමාණිකා කාරෙතබ්බා. තත්‍රිදං පමාණං: දීඝසෝ චතස්සෝ විදත්ථියෝ සුගතවිදත්ථියා, තිරියං ද්වේ විදත්ථියෝ. තං අතික්කාමයතෝ ඡේදනකං පාචිත්තියං.",
    "translit": "Kaṇḍupaṭicchādiṃ pana bhikkhunā kārayamānena pamāṇikā kāretabbā. Tatridaṃ pamāṇaṃ: Dīghaso catasso vidatthiyo sugatavidatthiyā, tiriyaṃ dve vidatthiyo. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "කණ්ඩුපටිච්ඡාදියක් (වර්ම රෝග වසන වස්ත්‍රයක්) කරවන භික්ෂුවක් විසින් පමාණවත් කොට කරවිය යුතු ය. දිගින් සුගත වියතින් වියත් හතරකි. පළලින් වියත් දෙකකි. එය ඉක්මවන්නහුට ඡේදනක පාචිත්තිය ඇවැත් වේ.",
    "en": "When making a skin-eruption covering cloth, a monk should make it to the prescribed measure: four spans in length by the Sugata span, two spans in width. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 90
   },
   {
    "pali": "වස්සිකසාටිකං පන භික්ඛුනා කාරයමානේන පමාණිකා කාරෙතබ්බා. තත්‍රිදං පමාණං: දීඝසෝ ඡ විදත්ථියෝ සුගතවිදත්ථියා, තිරියං අඩ්ඪතෙය්‍යා. තං අතික්කාමයතෝ ඡේදනකං පාචිත්තියං.",
    "translit": "Vassikasāṭikaṃ pana bhikkhunā kārayamānena pamāṇikā kāretabbā. Tatridaṃ pamāṇaṃ: Dīghaso cha vidatthiyo sugatavidatthiyā, tiriyaṃ aḍḍhateyyā. Taṃ atikkāmayato chedanakaṃ pācittiyaṃ.",
    "si": "වස්සික සාටිකයක් කරවන භික්ෂුවක් විසින් පමාණවත් කොට කරවිය යුතු ය. දිගින් සුගත වියතින් වියත් හයකි. පළලින් වියත් දෙකහමාරකි. එය ඉක්මවන්නහුට ඡේදනක පාචිත්තිය ඇවැත් වේ.",
    "en": "When making a rains-bathing cloth, a monk should make it to the prescribed measure: six spans in length by the Sugata span, two and a half spans in width. To exceed that: Pācittiya requiring cutting.",
    "role": "rule",
    "n": 91
   },
   {
    "pali": "යෝ පන භික්ඛු සුගතචීවරප්පමාණං චීවරං කාරාපෙය්‍ය, අතිරේකං වා, ඡේදනකං පාචිත්තියං. තත්‍රිදං සුගතස්ස සුගතචීවරප්පමාණං: දීඝසෝ නව විදත්ථියෝ සුගතවිදත්ථියා, තිරියං ඡ විදත්ථියෝ. ඉදං සුගතස්ස සුගතචීවරප්පමාණං.",
    "translit": "Yo pana bhikkhu sugatacīvarappamāṇaṃ cīvaraṃ kārāpeyya, atirekaṃ vā, chedanakaṃ pācittiyaṃ. Tatridaṃ sugatassa sugatacīvarappamāṇaṃ: Dīghaso nava vidatthiyo sugatavidatthiyā, tiriyaṃ cha vidatthiyo. Idaṃ sugatassa sugatacīvarappamāṇaṃ.",
    "si": "යම් භික්ෂුවක් වනාහි සුගතයන් වහන්සේගේ සිවුරේ ප්‍රමාණයෙන් හෝ ඊට වැඩි ප්‍රමාණයෙන් හෝ සිවුරක් කරවයි නම්, ඡේදනක පාචිත්තිය ඇවැත් වේ. එහි සුගතයන් වහන්සේගේ සුගත සිවුරේ ප්‍රමාණය මෙසේ ය: දිගින් සුගත වියතින් වියත් නවයකි. පළලින් වියත් හයකි. මෙය සුගතයන් වහන්සේගේ සුගත සිවුරේ ප්‍රමාණය යි.",
    "en": "Whatever monk should have a robe made the size of the Sugata's robe or larger: Pācittiya requiring cutting. The size of the Sugata's robe is: nine spans in length by the Sugata span, six spans in width. This is the size of the Sugata's robe.",
    "role": "rule",
    "n": 92
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ ද්වේනවුති පාචිත්තියා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto dvenavuti pācittiyā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අනූදෙකක් වූ පවිති ඇවැත් උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the ninety-two Pācittiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාචිත්තියා ධම්මා නිට්ඨීතා.",
    "translit": "Pācittiyā dhammā niṭṭhītā.",
    "si": "පවිති ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Pācittiya rules are finished.",
    "role": "end"
   }
  ]
 },
 {
  "id": "patidesaniya",
  "si": "පාටිදේසනීයා",
  "en": "Pāṭidesanīyā",
  "kind": "rules",
  "count": 4,
  "num": 6,
  "title_si": "(6) පාටිදේසනීයා ධම්මා",
  "title_en": "(6) Pāṭidesanīyā Dhammā",
  "parts": [
   {
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ, චත්තාරෝ පාටිදේසනීයා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto, cattāro pāṭidesanīyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සතර පාටිදේසනීය ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these four Pāṭidesanīya rules come up for recitation.",
    "role": "open"
   },
   {
    "pali": "යෝ පන භික්ඛු අඤ්ඤාතිකාය භික්ඛුනියා අන්තරඝරං පවිට්ඨාය හත්ථතෝ ඛාදනීයං වා භෝජනීයං වා සහත්ථා පටිග්ගහෙත්වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පටිදේසෙතබ්බං තේන භික්ඛුනා: 'ගාරය්හං ආවුසෝ ධම්මං ආපජ්ජිං අසප්පායං පාටිදේසනීයං, තං පටිදේසේමී'ති.",
    "translit": "Yo pana bhikkhu aññātikāya bhikkhuniyā antaragharaṃ paviṭṭhāya hatthato khādanīyaṃ vā bhojanīyaṃ vā sahatthā paṭiggahetvā khādeyya vā bhuñjeyya vā, paṭidesetabbaṃ tena bhikkhunā: 'Gārayhaṃ āvuso dhammaṃ āpajjiṃ asappāyaṃ pāṭidesanīyaṃ, taṃ paṭidesemī'ti.",
    "si": "යම් භික්ෂුවක් වනාහි අතුළුගෙට පිවිසුණු නොනෑ භික්ෂුණියක අතින් කැ යුතු දෙයක් හෝ බුදිය යුතු දෙයක් සියතින් පිළිගෙන කයි නම් හෝ බුදියි නම්, ඒ භික්ෂුව විසින් 'ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි' යැයි පෙරළා දෙසිය යුතු ය.",
    "en": "Whatever monk should accept food from the hand of a bhikkhunī who is not a relative and who has entered a house, and eat it — he should acknowledge it: 'Venerable Sirs, I have fallen into a blameworthy offence that is unsuitable and requires acknowledgement; I acknowledge it.'",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "භික්ඛු පනේව කුලේසු නිමන්තිතේසු ද්වේ භික්ඛූ දෙති, ඉද්ධං ඛෝ පන තේන භික්ඛුනා... පටිදේසෙතබ්බං තේන භික්ඛුනා: 'ගාරය්හං ආවුසෝ ධම්මං ආපජ්ජිං අසප්පායං පාටිදේසනීයං, තං පටිදේසේමී'ති.",
    "translit": "Bhikkhu paneva kulesu nimantitesu dve bhikkhū deti, iddhaṃ kho pana tena bhikkhunā... Paṭidesetabbaṃ tena bhikkhunā: 'Gārayhaṃ āvuso dhammaṃ āpajjiṃ asappāyaṃ pāṭidesanīyaṃ, taṃ paṭidesemī'ti.",
    "si": "කුලයන්හි නිමන්ත්‍රණය කරන ලද භික්ෂූන් දෙදෙනකු භික්ෂුණියක් විසින් දෙදෙනාට වඩා වැඩි වශයෙන් දෙයි නම්, ඒ භික්ෂුව විසින් පෙරළා දෙසිය යුතු ය: 'ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි.'",
    "en": "When monks are invited at a family's home and a bhikkhunī offers food, saying 'Give to both', if that monk should accept more than suffices — he should acknowledge it: 'Venerable Sirs, I have fallen into a blameworthy offence that is unsuitable and requires acknowledgement; I acknowledge it.'",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "යානි පන තානි සේඛියසම්මතානි කුලානි... යෝ පන භික්ඛු තථාරූපේසු කුලේසු පුබ්බේ අනිමන්තිතෝ අගිලානෝ ඛාදනීයං වා භෝජනීයං වා සහත්ථා පටිග්ගහෙත්වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පටිදේසෙතබ්බං තේන භික්ඛුනා: 'ගාරය්හං ආවුසෝ ධම්මං ආපජ්ජිං අසප්පායං පාටිදේසනීයං, තං පටිදේසේමී'ති.",
    "translit": "Yāni pana tāni sekhiyasammatāni kulāni... Yo pana bhikkhu tathārūpesu kulesu pubbe animantito agilāno khādanīyaṃ vā bhojanīyaṃ vā sahatthā paṭiggahetvā khādeyya vā bhuñjeyya vā, paṭidesetabbaṃ tena bhikkhunā: 'Gārayhaṃ āvuso dhammaṃ āpajjiṃ asappāyaṃ pāṭidesanīyaṃ, taṃ paṭidesemī'ti.",
    "si": "යම් ඒ ශෛක්ෂ සම්මත කුලයෝ වෙත් ද, යම් භික්ෂුවක් එබඳු කුලයන්හි පෙර නිමන්ත්‍රණය නොකරන ලදුව, ගිලන් නොව, සියතින් පිළිගෙන කයි නම් හෝ බුදියි නම්, ඒ භික්ෂුව විසින් පෙරළා දෙසිය යුතු ය: 'ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි.'",
    "en": "In the families designated as 'trainee' families, whatever monk, without prior invitation, being not sick, should accept and eat food with his own hand — he should acknowledge it: 'Venerable Sirs, I have fallen into a blameworthy offence that is unsuitable and requires acknowledgement; I acknowledge it.'",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "යානි පන තානි ආරඤ්ඤකානි සේනාසනානි සාසඞ්කසම්මතානි සප්පටිභයානි. යෝ පන භික්ඛු තථාරූපේසු සේනාසනේසු විහරන්තෝ පුබ්බේ අප්පටිසංවිදිතෝ අජ්ඣාරාමේ ඛාදනීයං වා භෝජනීයං වා සහත්ථා පටිග්ගහෙත්වා ඛාදෙය්‍ය වා භුඤ්ජෙය්‍ය වා, පටිදේසෙතබ්බං තේන භික්ඛුනා: 'ගාරය්හං ආවුසෝ ධම්මං ආපජ්ජිං අසප්පායං පාටිදේසනීයං, තං පටිදේසේමී'ති.",
    "translit": "Yāni pana tāni āraññakāni senāsanāni sāsaṅkasammatāni sappaṭibhayāni. Yo pana bhikkhu tathārūpesu senāsanesu viharanto pubbe appaṭisaṃvidito ajjhārāme khādanīyaṃ vā bhojanīyaṃ vā sahatthā paṭiggahetvā khādeyya vā bhuñjeyya vā, paṭidesetabbaṃ tena bhikkhunā: 'Gārayhaṃ āvuso dhammaṃ āpajjiṃ asappāyaṃ pāṭidesanīyaṃ, taṃ paṭidesemī'ti.",
    "si": "යම් ඒ සැක සහිත යැයි සම්මත වූ බිය සහිත වූ වන සෙනසුන් වෙත් ද, යම් භික්ෂුවක් එබඳු සෙනසුන්හි වාසය කරමින් පෙර නොදන්වා ඇතුළු ආරාමයෙහි දී සියතින් පිළිගෙන කයි නම් හෝ බුදියි නම්, ඒ භික්ෂුව විසින් පෙරළා දෙසිය යුතු ය: 'ඇවැත්නි, ගැරහිය යුතු වූ අසත්ප්‍රාය වූ නැවත දෙසිය යුතු ඇවතකට පැමිණියෙමි; එය පෙරළා දෙසමි.'",
    "en": "In those wilderness dwellings considered risky and fearful, whatever monk dwelling there should, without prior announcement, accept food within the monastery with his own hand and eat — he should acknowledge it: 'Venerable Sirs, I have fallen into a blameworthy offence that is unsuitable and requires acknowledgement; I acknowledge it.'",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ, චත්තාරෝ පාටිදේසනීයා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, cattāro pāṭidesanīyā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සතර පාටිදේසනීය ඇවැත් උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the four Pāṭidesanīya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "පාටිදේසනීයා ධම්මා නිට්ඨීතා.",
    "translit": "Pāṭidesanīyā dhammā niṭṭhītā.",
    "si": "පාටිදේසනීය ඇවැත් ධර්ම අවසන් ය.",
    "en": "The Pāṭidesanīya rules are finished.",
    "role": "end"
   }
  ]
 },
 {
  "id": "sekhiya",
  "si": "සේඛියා",
  "en": "Sekhiyā",
  "kind": "rules",
  "count": 75,
  "num": 7,
  "title_si": "(7) සේඛියා ධම්මා",
  "title_en": "(7) Sekhiyā Dhammā",
  "parts": [
   {
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ සේඛියා ධම්මා උද්දේසං ආගච්ඡන්ති.",
    "translit": "Ime kho panāyasmanto sekhiyā dhammā uddesaṃ āgacchanti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සේඛිය ධර්මයෝ උදෙසීමට පැමිණෙත්.",
    "en": "Here these Sekhiya rules (rules of training) come up for recitation.",
    "role": "open"
   },
   {
    "pali": "පරිමණ්ඩලං නිවාසෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ nivāsessāmīti sikkhā karaṇīyā.",
    "si": "හාත්පස පිරිමඬල කොට අඳනය අඳින්නෙමි.",
    "en": "I will wear the lower robe evenly all round.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "පරිමණ්ඩලං පාරුපිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ pārupissāmīti sikkhā karaṇīyā.",
    "si": "හාත්පස පිරිමඬල කොට සිවුරු පොරවන්නෙමි.",
    "en": "I will wear the upper robe evenly all round.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "සුප්පටිච්ඡන්නෝ අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Suppaṭicchanno antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "සුපිළිසන් ව සිවුරු පොරවාගෙන ඇතුළුගෙමහි වඩින්නෙමි.",
    "en": "I will go well-covered inside houses.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "සුප්පටිච්ඡන්නෝ අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Suppaṭicchanno antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "සුපිළිසන් ව සිවුරු පොරවාගෙන ඇතුළුගෙමහි වැඩ නිදින්නෙමි.",
    "en": "I will sit well-covered inside houses.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "සුසංවුතෝ අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Susaṃvuto antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "මනා සංවරයකින් යුතු ව ඇතුළුගෙමහි වඩින්නෙමි.",
    "en": "I will go well-restrained inside houses.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "සුසංවුතෝ අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Susaṃvuto antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "මනා සංවරයකින් යුතු ව ඇතුළුගෙමහි වැඩ නිදින්නෙමි.",
    "en": "I will sit well-restrained inside houses.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "ඕක්ඛිත්තචක්ඛු අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Okkhittacakkhu antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "බිමට යොමා ගත් ඇස් ඇති ව ඇතුළුගෙමහි වඩින්නෙමි.",
    "en": "I will go with eyes lowered inside houses.",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "ඕක්ඛිත්තචක්ඛු අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Okkhittacakkhu antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "බිමට යොමා ගත් ඇස් ඇති ව ඇතුළුගෙමහි වැඩ නිදින්නෙමි.",
    "en": "I will sit with eyes lowered inside houses.",
    "role": "rule",
    "n": 8
   },
   {
    "pali": "න උක්ඛිත්තකාය අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkhittakāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "සිවුරු මසවාගෙන ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go with robes hitched up inside houses.",
    "role": "rule",
    "n": 9
   },
   {
    "pali": "න උක්ඛිත්තකාය අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkhittakāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "සිවුරු මසවාගෙන ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit with robes hitched up inside houses.",
    "role": "rule",
    "n": 10
   },
   {
    "pali": "න උජ්ජග්ඝිකාය අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ujjagghikāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "මහ හඬින් සිනා සෙමින් ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go laughing loudly inside houses.",
    "role": "rule",
    "n": 11
   },
   {
    "pali": "න උජ්ජග්ඝිකාය අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ujjagghikāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "මහ හඬින් සිනා සෙමින් ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit laughing loudly inside houses.",
    "role": "rule",
    "n": 12
   },
   {
    "pali": "අප්පසද්දෝ අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Appasaddo antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "හඬ නොකොට ඇතුළුගෙමහි වඩින්නෙමි.",
    "en": "I will go making little sound inside houses.",
    "role": "rule",
    "n": 13
   },
   {
    "pali": "අප්පසද්දෝ අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Appasaddo antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "හඬ නොකොට ඇතුළුගෙමහි නිදින්නෙමි.",
    "en": "I will sit making little sound inside houses.",
    "role": "rule",
    "n": 14
   },
   {
    "pali": "න කායප්පචාලකං අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kāyappacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "කය සොලවමින් ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go swaying the body inside houses.",
    "role": "rule",
    "n": 15
   },
   {
    "pali": "න කායප්පචාලකං අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kāyappacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "කය සොලවමින් ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit swaying the body inside houses.",
    "role": "rule",
    "n": 16
   },
   {
    "pali": "න බාහුප්පචාලකං අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bāhuppacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "අත් සොලවමින් ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go swinging the arms inside houses.",
    "role": "rule",
    "n": 17
   },
   {
    "pali": "න බාහුප්පචාලකං අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bāhuppacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "අත් සොලවමින් ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit swinging the arms inside houses.",
    "role": "rule",
    "n": 18
   },
   {
    "pali": "න සීසප්පචාලකං අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sīsappacālakaṃ antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "හිස සොලවමින් ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go shaking the head inside houses.",
    "role": "rule",
    "n": 19
   },
   {
    "pali": "න සීසප්පචාලකං අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sīsappacālakaṃ antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "හිස සොලවමින් ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit shaking the head inside houses.",
    "role": "rule",
    "n": 20
   },
   {
    "pali": "න ඛම්භකතෝ අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na khambhakato antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "උකුළෙහි අත් තබාගෙන ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go with hands on hips inside houses.",
    "role": "rule",
    "n": 21
   },
   {
    "pali": "න ඛම්භකතෝ අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na khambhakato antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "උකුළෙහි අත් තබාගෙන ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit with hands on hips inside houses.",
    "role": "rule",
    "n": 22
   },
   {
    "pali": "න සසීසං පාරුපිත්වා අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sasīsaṃ pārupitvā antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසා පොරවාගෙන ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go with head covered inside houses.",
    "role": "rule",
    "n": 23
   },
   {
    "pali": "න සසීසං පාරුපිත්වා අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sasīsaṃ pārupitvā antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසා පොරවාගෙන ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit with head covered inside houses.",
    "role": "rule",
    "n": 24
   },
   {
    "pali": "න උක්කුටිකාය අන්තරඝරේ ගමිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ukkuṭikāya antaraghare gamissāmīti sikkhā karaṇīyā.",
    "si": "විඩඹ හෝ ඇඩිලි බිම අනිමින් ඇතුළුගෙමහි නො වඩින්නෙමි.",
    "en": "I will not go on tiptoes inside houses.",
    "role": "rule",
    "n": 25
   },
   {
    "pali": "න පල්ලත්ථිකාය අන්තරඝරේ නිසීදිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pallatthikāya antaraghare nisīdissāmīti sikkhā karaṇīyā.",
    "si": "අත් දෙකින් දණහිස් බදාගෙන ඇතුළුගෙමහි නො නිදින්නෙමි.",
    "en": "I will not sit clasping the knees inside houses.",
    "role": "rule",
    "n": 26
   },
   {
    "pali": "සක්කච්චං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sakkaccaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "සිහි එළවාගෙන පිණ්ඩපාතය පිළිගන්නෙමි.",
    "en": "I will receive almsfood attentively.",
    "role": "rule",
    "n": 27
   },
   {
    "pali": "පත්තසඤ්ඤී පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Pattasaññī piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය යන සංඥාව ඇති ව පිණ්ඩපාතය පිළිගන්නෙමි.",
    "en": "I will receive almsfood with attention on the bowl.",
    "role": "rule",
    "n": 28
   },
   {
    "pali": "සමසූපකං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samasūpakaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "බතින් හතරෙන් කොටසක් සූප ඇති සේ පිණ්ඩපාතය පිළිගන්නෙමි.",
    "en": "I will receive almsfood with the curry in proportion to the rice.",
    "role": "rule",
    "n": 29
   },
   {
    "pali": "සමතිත්තිකං පිණ්ඩපාතං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samatittikaṃ piṇḍapātaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රයේ ඇතුළුමුව විටට සමවන සේ පිණ්ඩපාතය පිළිගන්නෙමි.",
    "en": "I will receive almsfood up to the brim of the bowl.",
    "role": "rule",
    "n": 30
   },
   {
    "pali": "සක්කච්චං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sakkaccaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "සිහි එළවාගෙන දන් වළඳන්නෙමි.",
    "en": "I will eat almsfood attentively.",
    "role": "rule",
    "n": 31
   },
   {
    "pali": "පත්තසඤ්ඤී පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Pattasaññī piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය යන සංඥාව ඇති ව දන් වළඳන්නෙමි.",
    "en": "I will eat almsfood with attention on the bowl.",
    "role": "rule",
    "n": 32
   },
   {
    "pali": "සපදානං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Sapadānaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "තමා දෙස පටන් අනුපිළිවෙළින් දන් වළඳන්නෙමි.",
    "en": "I will eat almsfood in order, without skipping.",
    "role": "rule",
    "n": 33
   },
   {
    "pali": "සමසූපකං පිණ්ඩපාතං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Samasūpakaṃ piṇḍapātaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බතින් හතරෙන් කොටසක් සූප ඇති සේ දන් වළඳන්නෙමි.",
    "en": "I will eat almsfood with curry in proportion to the rice.",
    "role": "rule",
    "n": 34
   },
   {
    "pali": "න ථූපකතෝ මුඛද්වාරං විවරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na thūpakato mukhadvāraṃ vivarissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඩ මුවට ලං කිරීමට පෙර මුව විවෘත නො කරන්නෙමි.",
    "en": "I will not open the mouth before the morsel is brought near.",
    "role": "rule",
    "n": 35
   },
   {
    "pali": "න සකබළං වා බ්‍යඤ්ජනං වා මිස්සං මුඛද්වාරං පක්ඛිපිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sakabaḷaṃ vā byañjanaṃ vā missaṃ mukhadvāraṃ pakkhipissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඩ හෝ ව්‍යඤ්ජනය හෝ මිශ්‍ර කොට මුව දොරෙහි නො දමන්නෙමි.",
    "en": "I will not put a whole morsel or curry mixed into the mouth.",
    "role": "rule",
    "n": 36
   },
   {
    "pali": "න අගිලානෝ අත්තනෝ අත්ථාය භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na agilāno attano atthāya bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "නො ගිලන් ව සූප හෝ බත් හෝ තමා උදෙසා ඉල්ලාගෙන නො වළඳන්නෙමි.",
    "en": "I will not eat for my own sake, when not sick, having asked for curry or rice.",
    "role": "rule",
    "n": 37
   },
   {
    "pali": "න උපනීතං පරස්ස පත්තං ඕලෝකෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na upanītaṃ parassa pattaṃ olokessāmīti sikkhā karaṇīyā.",
    "si": "ගරහනු කැමති ව අනුන්ගේ පාත්‍රය දෙස බැලීමෙන් වළකින්නෙමි.",
    "en": "I will not look into another's bowl with the intent to find fault.",
    "role": "rule",
    "n": 38
   },
   {
    "pali": "නාතිමහන්තං කබළං කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Nātimahantaṃ kabaḷaṃ karissāmīti sikkhā karaṇīyā.",
    "si": "මහත් විශාල ව බත් පිඩු නො කරන්නෙමි.",
    "en": "I will not make up too large a morsel.",
    "role": "rule",
    "n": 39
   },
   {
    "pali": "පරිමණ්ඩලං ආලෝපං කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Parimaṇḍalaṃ ālopaṃ karissāmīti sikkhā karaṇīyā.",
    "si": "හාත්පස පිරිමඬල කොට බත් පිඩු කරන්නෙමි.",
    "en": "I will make up a round morsel.",
    "role": "rule",
    "n": 40
   },
   {
    "pali": "න අනාහටේ කබළේ මුඛද්වාරං විවරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na anāhaṭe kabaḷe mukhadvāraṃ vivarissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඩ මුවට ලං කිරීමට පෙර මුව විවෘත නො කරන්නෙමි.",
    "en": "I will not open the mouth before the morsel is brought near.",
    "role": "rule",
    "n": 41
   },
   {
    "pali": "න භුඤ්ජමානෝ සබ්බං හත්ථං මුඛේ පක්ඛිපිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na bhuñjamāno sabbaṃ hatthaṃ mukhe pakkhipissāmīti sikkhā karaṇīyā.",
    "si": "දන් වළඳමින් මුළු අත මුව තුළට ඇතුළු නො කරන්නෙමි.",
    "en": "I will not put the whole hand into the mouth while eating.",
    "role": "rule",
    "n": 42
   },
   {
    "pali": "න සකබළේන මුඛෙන බ්‍යාහරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sakabaḷena mukhena byāharissāmīti sikkhā karaṇīyā.",
    "si": "මුව තුළ ආහාර තිබිය දී කථා බස් නො කරන්නෙමි.",
    "en": "I will not speak with a morsel in the mouth.",
    "role": "rule",
    "n": 43
   },
   {
    "pali": "න පිණ්ඩුක්ඛේපකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na piṇḍukkhepakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඩු ආදිය මුව තුළට විසිකරමින් නො වළඳන්නෙමි.",
    "en": "I will not eat by tossing morsels into the mouth.",
    "role": "rule",
    "n": 44
   },
   {
    "pali": "න කබළාවච්ඡේදකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na kabaḷāvacchedakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් පිඩුව කටින් කඩ කඩා නො වළඳන්නෙමි.",
    "en": "I will not bite off pieces of the morsel.",
    "role": "rule",
    "n": 45
   },
   {
    "pali": "න අවගණ්ඩකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na avagaṇḍakārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "හකු පුරවාගෙන දන් නො වළඳන්නෙමි.",
    "en": "I will not eat stuffing the cheeks.",
    "role": "rule",
    "n": 46
   },
   {
    "pali": "න හත්ථනිද්ධුනකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na hatthaniddhunakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "අත් ගසා දමමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat shaking the hand about.",
    "role": "rule",
    "n": 47
   },
   {
    "pali": "න සිත්ථාවකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sitthāvakārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "බත් ඇට තැන තැන විසුරවමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat scattering rice about.",
    "role": "rule",
    "n": 48
   },
   {
    "pali": "න ජිව්හානිච්ඡාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na jivhānicchārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "දිව පිටතට තෙරමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat licking the lips (protruding the tongue).",
    "role": "rule",
    "n": 49
   },
   {
    "pali": "න සුරුසුරුකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na surusurukārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "'සුරු සුරු' යන හඬ නගමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat making a slurping/hissing sound.",
    "role": "rule",
    "n": 50
   },
   {
    "pali": "න සුරුසුරුකාරකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na surusurukārakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "'සුරු සුරු' යන හඬ නගමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat making a hissing sound.",
    "role": "rule",
    "n": 51
   },
   {
    "pali": "න හත්ථනිල්ලේහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na hatthanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "අත ලෙවකමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat licking the hand.",
    "role": "rule",
    "n": 52
   },
   {
    "pali": "න පත්තනිල්ලේහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pattanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "පාත්‍රය ලෙවකමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat licking the bowl.",
    "role": "rule",
    "n": 53
   },
   {
    "pali": "න ඕට්ඨනිල්ලේහකං භුඤ්ජිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oṭṭhanillehakaṃ bhuñjissāmīti sikkhā karaṇīyā.",
    "si": "තොල් ලෙවකමින් දන් නො වළඳන්නෙමි.",
    "en": "I will not eat licking the lips.",
    "role": "rule",
    "n": 54
   },
   {
    "pali": "න සාමිසේන හත්ථේන පානීයථාලකං පටිග්ගහෙස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sāmisena hatthena pānīyathālakaṃ paṭiggahessāmīti sikkhā karaṇīyā.",
    "si": "ඉළුල් සහිත අතින් පැන් භාජනය නො පිළිගන්නෙමි.",
    "en": "I will not accept a water vessel with a hand soiled with food.",
    "role": "rule",
    "n": 55
   },
   {
    "pali": "න සසිත්ථකං පත්තධෝවනං අන්තරඝරේ ඡඩ්ඩිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sasitthakaṃ pattadhovanaṃ antaraghare chaḍḍissāmīti sikkhā karaṇīyā.",
    "si": "බත් ඇට සහිත පාත්‍ර දෙවූ ජලය ඇතුළුගෙමහි හෝ ඇතුළුගෙයි නො දමන්නෙමි.",
    "en": "I will not throw away bowl-washing water containing rice inside houses.",
    "role": "rule",
    "n": 56
   },
   {
    "pali": "න ඡත්තපාණිස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na chattapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "කුඩ අතැතිව සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person holding an umbrella, who is not sick.",
    "role": "rule",
    "n": 57
   },
   {
    "pali": "න දණ්ඩපාණිස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na daṇḍapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "දඬු අතැතිව සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person holding a stick, who is not sick.",
    "role": "rule",
    "n": 58
   },
   {
    "pali": "න සත්ථපාණිස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na satthapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "සැතැතිව සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person holding a knife, who is not sick.",
    "role": "rule",
    "n": 59
   },
   {
    "pali": "න ආයුධපාණිස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na āyudhapāṇissa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "ආයුධ අතැතිව සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person holding a weapon, who is not sick.",
    "role": "rule",
    "n": 60
   },
   {
    "pali": "න පාදුකාරූළ්හස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pādukārūḷhassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "පාවහන් පැළඳ සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person wearing sandals, who is not sick.",
    "role": "rule",
    "n": 61
   },
   {
    "pali": "න උපාහනාරූළ්හස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na upāhanārūḷhassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "සපත්තු පැළඳ සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person wearing shoes, who is not sick.",
    "role": "rule",
    "n": 62
   },
   {
    "pali": "න යානගතස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na yānagatassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "යානයෙහි ගොස් සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person in a vehicle, who is not sick.",
    "role": "rule",
    "n": 63
   },
   {
    "pali": "න සයනගතස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na sayanagatassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "යහනෙහි සයනය කරන්නා වූ නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person lying on a bed, who is not sick.",
    "role": "rule",
    "n": 64
   },
   {
    "pali": "න පල්ලත්ථිකාය නිසින්නස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pallatthikāya nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "අත් දෙකින් දණහිස් බදාගෙන හිඳගත් නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person sitting with clasped knees, who is not sick.",
    "role": "rule",
    "n": 65
   },
   {
    "pali": "න වේඨිතසීසස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na veṭhitasīsassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "හිස වෙළා සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person with a wrapped head, who is not sick.",
    "role": "rule",
    "n": 66
   },
   {
    "pali": "න ඕගුණ්ඨිතසීසස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na oguṇṭhitasīsassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "හිස වසාගෙන පොරවා සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person with a covered head, who is not sick.",
    "role": "rule",
    "n": 67
   },
   {
    "pali": "න ඡමායං නිසීදිත්වා ආසනේ නිසින්නස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na chamāyaṃ nisīditvā āsane nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමන් බිම හිඳ, ආසනයක හිඳ සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person sitting on a seat, while I am sitting on the ground, who is not sick.",
    "role": "rule",
    "n": 68
   },
   {
    "pali": "න නීචේ ආසනේ නිසීදිත්වා උච්චේ ආසනේ නිසින්නස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na nīce āsane nisīditvā ucce āsane nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමන් පහත් අසුනක හිඳ උස් අසුනක හිඳ සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person sitting on a higher seat, while I am on a lower seat, who is not sick.",
    "role": "rule",
    "n": 69
   },
   {
    "pali": "න ඨිතෝ නිසින්නස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ṭhito nisinnassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා සිටගෙන හිඳ සිටින නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person seated while I am standing, who is not sick.",
    "role": "rule",
    "n": 70
   },
   {
    "pali": "න පච්ඡතෝ ගච්ඡන්තෝ පුරතෝ ගච්ඡන්තස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na pacchato gacchanto purato gacchantassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා පිටුපසින් ගමන් කරමින් ඉදිරියෙන් යන නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person walking in front, while I am walking behind, who is not sick.",
    "role": "rule",
    "n": 71
   },
   {
    "pali": "න උප්පථේන ගච්ඡන්තෝ පථේන ගච්ඡන්තස්ස අගිලානස්ස ධම්මං දේසිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na uppathena gacchanto pathena gacchantassa agilānassa dhammaṃ desissāmīti sikkhā karaṇīyā.",
    "si": "තමා මග හැර ගොස් නියම මගින් යන්නා වූ නොගිලනාට දහම් නො දෙසන්නෙමි.",
    "en": "I will not teach Dhamma to a person walking on the path, while I am walking off the path, who is not sick.",
    "role": "rule",
    "n": 72
   },
   {
    "pali": "න ඨිතෝ උච්චාරං වා පස්සාවං වා කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na ṭhito uccāraṃ vā passāvaṃ vā karissāmīti sikkhā karaṇīyā.",
    "si": "සිටගෙන නොගිලන් ව මළමුත්‍රා හෝ කැසිකිළි හෝ නො කරන්නෙමි.",
    "en": "I will not defecate or urinate while standing, when not sick.",
    "role": "rule",
    "n": 73
   },
   {
    "pali": "න හරිතේ උච්චාරං වා පස්සාවං වා ඛේළං වා කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na harite uccāraṃ vā passāvaṃ vā kheḷaṃ vā karissāmīti sikkhā karaṇīyā.",
    "si": "තණ කොළ, පැළැටි ආදිය ඇති තැනක නොගිලන් ව මළමුත්‍රා හෝ කැසිකිළි හෝ කෙළ ගැසීම හෝ නො කරන්නෙමි.",
    "en": "I will not defecate, urinate, or spit on green vegetation, when not sick.",
    "role": "rule",
    "n": 74
   },
   {
    "pali": "න උදකේ උච්චාරං වා පස්සාවං වා ඛේළං වා කරිස්සාමීති සික්ඛා කරණීයා.",
    "translit": "Na udake uccāraṃ vā passāvaṃ vā kheḷaṃ vā karissāmīti sikkhā karaṇīyā.",
    "si": "නොගිලන් ව ජලයෙහි මළමුත්‍රා හෝ කැසිකිළි හෝ කෙළ ගැසීම හෝ නො කරන්නෙමි.",
    "en": "I will not defecate, urinate, or spit in water, when not sick.",
    "role": "rule",
    "n": 75
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ, සේඛියා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, sekhiyā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! සේඛියා ධර්ම උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the Sekhiya rules have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "සේඛියා ධම්මා නිට්ඨීතා.",
    "translit": "Sekhiyā dhammā niṭṭhītā.",
    "si": "සේඛියා ධර්මයෝ අවසන් ය.",
    "en": "The Sekhiya rules are finished.",
    "role": "end"
   }
  ]
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
    "pali": "ඉමේ ඛෝ පනායස්මන්තෝ සත්ත අධිකරණසමථා ධම්මා උද්දේසං ආගච්ඡන්ති.\nඋප්පන්නුප්පන්නානං අධිකරණානං සමථාය වූපසමාය;\nසම්මුඛාවිනයෝ දාතබ්බෝ, සතිවිනයෝ දාතබ්බෝ,\nඅමූළ්හවිනයෝ දාතබ්බෝ,\nපටිඤ්ඤාය කාරේතබ්බං, යේභුය්‍යසිකා,\nතස්සපාපියසිකා, තිණවත්ථාරකෝති.",
    "translit": "Ime kho panāyasmanto satta adhikaraṇasamathā dhammā uddesaṃ āgacchanti.\nUppannuppannānaṃ adhikaraṇānaṃ samathāya vūpasamāya;\nSammukhāvinayo dātabbo, sativinayo dātabbo,\nAmūḷhavinayo dātabbo,\nPaṭiññāya kāretabbaṃ, yebhuyyasikā,\nTassapāpiyasikā, tiṇavatthārakoti.",
    "si": "ආයුෂ්මත්වරුනි! මේ සතක් වූ අධිකරණසමථ ධර්මයෝ උදෙසීමට පැමිණෙත්.\nඋපන් උපන් අධිකරණයන්ගේ සන්සිඳීම පිණිස, වූපසමනය පිණිස;\nසම්මුඛාවිනය දියයුත්තේ ය. සතිවිනය දියයුත්තේ ය. අමූළ්හවිනය දියයුත්තේ ය. ප්‍රතිඥාව අනුව කරවිය යුත්තේ ය. යෙභුය්‍යසිකා ව, තස්සපාපියසිකා ව, තිණවත්ථාරකය යන සමථයෝ ද දියයුත්තාහු ය.",
    "en": "Here these seven rules for the settling of disputes come up for recitation.\nFor the settling and calming of legal issues as they arise:\nSettlement face-to-face is to be given; settlement by mindfulness is to be given; settlement for past insanity is to be given; action is to be done on the basis of acknowledgment; the decision of the majority; the decision for further misconduct; and covering over as with grass.",
    "role": "open"
   },
   {
    "pali": "සම්මුඛාවිනයෝ දාතබ්බෝ.",
    "translit": "Sammukhāvinayo dātabbo.",
    "si": "සම්මුඛාවිනය දිය යුතු ය (ඉදිරියේ සිට විනය විචාරා තීරණය කිරීම).",
    "en": "The verdict 'in the presence of' should be given.",
    "role": "rule",
    "n": 1
   },
   {
    "pali": "සතිවිනයෝ දාතබ්බෝ.",
    "translit": "Sativinayo dātabbo.",
    "si": "සතිවිනය දිය යුතු ය (සිහියෙන් යුක්ත ව ආරෝපණය කරන ලද චෝදනාවක් අනුමත කිරීම).",
    "en": "The verdict 'of mindfulness' should be given.",
    "role": "rule",
    "n": 2
   },
   {
    "pali": "අමූළ්හවිනයෝ දාතබ්බෝ.",
    "translit": "Amūḷhavinayo dātabbo.",
    "si": "අමූළ්හවිනය දිය යුතු ය (මුළාව නැති බව පිළිගැනීම).",
    "en": "The verdict 'of past insanity' should be given.",
    "role": "rule",
    "n": 3
   },
   {
    "pali": "පටිඤ්ඤාය කාරෙතබ්බං.",
    "translit": "Paṭiññāya kāretabbaṃ.",
    "si": "ප්‍රතිඥාව අනුව කරවිය යුතු ය (චෝදකයාගේ හා චෝදිතයාගේ පිළිගැනීම අනුව).",
    "en": "It should be done according to the acknowledgement.",
    "role": "rule",
    "n": 4
   },
   {
    "pali": "යේභුය්‍යසිකා.",
    "translit": "Yebhuyyasikā.",
    "si": "යේභුය්‍යසිකා (බහුතරයාගේ මතය අනුව තීරණය කිරීම).",
    "en": "Decision by majority vote.",
    "role": "rule",
    "n": 5
   },
   {
    "pali": "තස්සපාපියසිකා.",
    "translit": "Tassapāpiyasikā.",
    "si": "තස්සපාපියසිකා (චෝදකයාට ද ඇවැත් විධානය කිරීම).",
    "en": "Decision for the offender's specific offence.",
    "role": "rule",
    "n": 6
   },
   {
    "pali": "තිණවත්ථාරකෝ.",
    "translit": "Tiṇavatthārako.",
    "si": "තිණවත්ථාරක (තණකොළවලින් වසනවා සේ සියලු ඇවැත් වසා දැමීම).",
    "en": "Covering over with grass (settling all offences).",
    "role": "rule",
    "n": 7
   },
   {
    "pali": "උද්දිට්ඨා ඛෝ ආයස්මන්තෝ, සත්ත අධිකරණසමථා ධම්මා.\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.",
    "translit": "Uddiṭṭhā kho āyasmanto, satta adhikaraṇasamathā dhammā.\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.",
    "si": "ආයුෂ්මත්වරුනි! අධිකරණසමථ සත උදෙසන ලද්දාහු ය.\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද?\nමෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි",
    "en": "Venerables, the seven rules for settling disputes have been recited.\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this?\nThe venerables are pure in this, therefore they are silent. Thus do I hold it.",
    "role": "close"
   },
   {
    "pali": "අධිකරණසමථා ධම්මා නිට්ඨීතා.",
    "translit": "Adhikaraṇasamathā dhammā niṭṭhītā.",
    "si": "අධිකරණසමථ ධර්ම අවසන් ය.",
    "en": "The rules for settling disputes are finished.",
    "role": "end"
   }
  ]
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
    "pali": "උද්දිට්ඨං ඛෝ ආයස්මන්තෝ නිදානං, උද්දිට්ඨා චත්තාරෝ පාරාජිකා ධම්මා, උද්දිට්ඨා තේරස සඞ්ඝාදිසේසා ධම්මා, උද්දිට්ඨා ද්වේ අනියතා ධම්මා, උද්දිට්ඨා තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා, උද්දිට්ඨා ද්වේනවුති පාචිත්තියා ධම්මා, උද්දිට්ඨා චත්තාරෝ පාටිදේසනීයා ධම්මා, උද්දිට්ඨා සේඛියා ධම්මා, උද්දිට්ඨා සත්ත අධිකරණසමථා ධම්මා. එත්තකං තස්ස භගවතෝ සුත්තාගතං සුත්තපරියාපන්නං අන්වද්ධමාසං උද්දේසං ආගච්ඡති, තත්ථ සබ්බේහේව සමග්ගේහි සම්මෝදමානේහි අවිවදමානේහි සික්ඛිතබ්බන්ති.\n\nවිත්ථාරුද්දේසෝ පඤ්චමෝ.\nභික්ඛුපාතිමොක්ඛං නිට්ඨීතං.\n\nසාධු ! සාධු !! සාධු !!!",
    "translit": "Uddiṭṭhaṃ kho āyasmanto nidānaṃ, uddiṭṭhā cattāro pārājikā dhammā, uddiṭṭhā terasa saṅghādisesā dhammā, uddiṭṭhā dve aniyatā dhammā, uddiṭṭhā tiṃsanissaggiyā pācittiyā dhammā, uddiṭṭhā dvenavuti pācittiyā dhammā, uddiṭṭhā cattāro pāṭidesanīyā dhammā, uddiṭṭhā sekhiyā dhammā, uddiṭṭhā satta adhikaraṇasamathā dhammā. Ettakaṃ tassa bhagavato suttāgataṃ suttapariyāpannaṃ anvaddhamāsaṃ uddesaṃ āgacchati, tattha sabbeheva samaggehi sammodamānehi avivadamānehi sikkhitabbanti.\n\nVitthāruddeso pañcamo.\nBhikkhupātimokkhaṃ niṭṭhītaṃ.\n\nSādhu ! Sādhu !! Sādhu !!!",
    "si": "ආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී. පාරාජිකා ඇවැත් සතර උදෙසන ලද හ. සංඝාදිසේස ඇවැත් දහතුන උදෙසන ලද හ. අනියත ඇවැත් දෙක උදෙසන ලද හ. නිසගි පවිති ඇවැත් තිහ උදෙසන ලද හ. පවිති ඇවැත් අනූදෙක උදෙසන ලද හ. පාටිදේසනීය ඇවැත් සතර උදෙසන ලද හ. සේඛියා ඇවැත් උදෙසන ලද හ. අධිකරණසමථ සත උදෙසන ලද හ. ඒ භාග්‍යවතුන් වහන්සේ ගේ සූත්‍රසංඛ්‍යාත භික්ෂු විභංගයෙහි ආවා වූ, භික්ෂු විභංගයට ඇතුළත් වූ මෙතෙක් ශික්ෂා පද අඩමසක් පාසා උදෙසීමට පැමිණෙ යි. සමගි වූ, සතුටු වන, විවාද නො කරන සැමදෙනා වහන්සේලා විසින් ම එහි ලා හික්මිය යුත්තාහ.\n\nපස්වැනි විස්තර උද්දේසය යි.\nභික්ෂු ප්‍රාතිමෝක්ෂය අවසන් ය.\n\nසාදු ! සාදු !! සාදු !!!",
    "en": "Venerables, the Introduction has been recited. The four Pārājika rules have been recited. The thirteen Saṅghādisesa rules have been recited. The two Aniyata rules have been recited. The thirty Nissaggiya Pācittiya rules have been recited. The ninety-two Pācittiya rules have been recited. The four Pāṭidesanīya rules have been recited. The Sekhiya rules have been recited. The seven rules for settling disputes have been recited. This much of the Blessed One's teaching, handed down in the discourses and included in the discourses, comes up for recitation every half-month. All should train in it in harmony, with mutual appreciation, without quarrelling.\n\nThe fifth, detailed recital, is finished.\nThe Bhikkhu Pātimokkha is concluded.\n\nSādhu! Sādhu!! Sādhu!!!"
   },
   {
    "pali": "\"සුඡන්නමතිවස්සති විවටං නාතිවස්සති\nතස්මා ඡන්නං විවරේථ ඒවං තං නාතිවස්සතී'ති\".",
    "translit": "\"Suchannamativassati vivaṭaṃ nātivassati\nTasmā channaṃ vivaretha evaṃ taṃ nātivassatī'ti\".",
    "si": "මොනවට වසාගන්නා ලදුයේ ඉතා වසී (අවන් ඇවැත් සඟවනුයේ තව තවත් ඇවැත්නට පැමිණේ). විවෘත වූයේ ඉතා නො වසී. (අවන් ඇවැත් විවෘත කරනුයේ අන් ඇවැතකට නො පැමිණෙයි). එහෙයින් වසන ලද ඇවැත විවෘත කරන්නේය (කළ යුතු ය). මෙසේ එය ඉතා නො වසී ය යි.",
    "en": "What is well covered is rained on heavily; what is open is not rained on. Therefore uncover what is covered; thus it will not be rained on heavily.\n(Vinaya, Cūḷavagga, Pātimokkhaṭṭhapana-khandhaka)"
   }
  ]
 },
 {
  "id": "keteyen-uposatha",
  "si": "කෙටියෙන් උපෝසථය",
  "en": "Brief Uposatha",
  "kind": "text",
  "count": null,
  "title_si": "කෙටියෙන් උපෝසථය කිරීමේ පිළිවෙළ",
  "title_en": "Brief Uposatha Procedure",
  "intro_si": "දස අන්තරාවන්ගෙන් යම් අන්තරාවක් ඇති විට කෙටියෙන් පොහොය කරන පිළිවෙළ.\n(දස අන්තරාවන් නම් : රජුගෙන් වන උවදුරෙක්, සොරුන්ගෙන් වන උවදුරෙක්, ගින්නෙන් වන උවදුරෙක්, දියෙන් වන උවදුරෙක්, මිනිසුන්ගෙන් වන උවදුරෙක්, අමනුෂ්‍යයන්ගෙන් වන උවදුරෙක්, චණ්ඩමෘගයන්ගෙන් වන උවදුරෙක්, සර්පයන්ගෙන් වන උවදුරෙක්, ජීවිතයට විය හැකි උවදුරෙක් හෝ මහණදමට විය හැකි උවදුරෙක් ය.)",
  "intro_en": "The procedure for holding the Uposatha briefly when one of the ten dangers is present.\n(The ten dangers are: danger from kings, from thieves, from fire, from water, from humans, from non-humans, from wild beasts, from snakes, danger to life, or danger to the holy life.)",
  "parts": [
   {
    "pali": "උද්දිට්ඨං ඛෝ ආයස්මන්තෝ නිදානං. උද්දිට්ඨා චත්තාරෝ පාරාජිකා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි තේරස සඞ්ඝාදිසේසා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි ද්වේ අනියතා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි තිංසනිස්සග්ගියා පාචිත්තියා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි ද්වේනවුති පාචිත්තියා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි චත්තාරෝ පාටිදේසනීයා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි සේඛියා ධම්මා. සුතා ඛෝ පනායස්මන්තේහි සත්ත අධිකරණසමථා ධම්මා.\n\nතත්ථායස්මන්තේ පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nදුතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nතතියම්පි පුච්ඡාමි, කච්චිත්ථ පරිසුද්ධා?\nපරිසුද්ධෙත්ථායස්මන්තෝ තස්මා තුණ්හී, ඒවමේතං ධාරයාමීති.\n\nඑත්තකං තස්ස භගවතෝ සුත්තාගතං සුත්තපරියාපන්නං අන්වද්ධමාසං උද්දේසං ආගච්ඡති. තත්ථ සබ්බේහේව සමග්ගේහි සම්මෝදමානේහි අවිවදමානේහි සික්ඛිතබ්බන්ති.",
    "translit": "Uddiṭṭhaṃ kho āyasmanto nidānaṃ. Uddiṭṭhā cattāro pārājikā dhammā. Sutā kho panāyasmantehi terasa saṅghādisesā dhammā. Sutā kho panāyasmantehi dve aniyatā dhammā. Sutā kho panāyasmantehi tiṃsanissaggiyā pācittiyā dhammā. Sutā kho panāyasmantehi dvenavuti pācittiyā dhammā. Sutā kho panāyasmantehi cattāro pāṭidesanīyā dhammā. Sutā kho panāyasmantehi sekhiyā dhammā. Sutā kho panāyasmantehi satta adhikaraṇasamathā dhammā.\n\nTatthāyasmante pucchāmi, kaccittha parisuddhā?\nDutiyampi pucchāmi, kaccittha parisuddhā?\nTatiyampi pucchāmi, kaccittha parisuddhā?\nParisuddhetthāyasmanto tasmā tuṇhī, evametaṃ dhārayāmīti.\n\nEttakaṃ tassa bhagavato suttāgataṃ suttapariyāpannaṃ anvaddhamāsaṃ uddesaṃ āgacchati. Tattha sabbeheva samaggehi sammodamānehi avivadamānehi sikkhitabbanti.",
    "si": "ආයුෂ්මත්වරුනි! නිදානය උදෙසන ලදී. පාරාජිකා ඇවැත් සතර උදෙසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් සංඝාදිසේස ඇවැත් දහතුන අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් අනියත ඇවැත් දෙක අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් නිසගි පවිති ඇවැත් තිහ අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් පවිති ඇවැත් අනූදෙක අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් පාටිදේසනීය ඇවැත් සතර අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් සේඛිය ඇවැත් අසන ලද්දාහු ය. ආයුෂ්මත්වරුන් විසින් අධිකරණසමථ සත අසන ලද්දාහු ය.\n\nඑහි ලා ආයුෂ්මතුන් වහන්සේලා විචාරමි; කිම, පිරිසිදු වූවහු ද? දෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? තෙවනුව ද විචාරමි; කිම, පිරිසිදු වූවහු ද? මෙහි ලා ආයුෂ්මත්හු පරිශුද්ධ හ. නිහඬ එබැවිනි. 'මෙසේ මෙය ධරමි' යැයි\n\nඒ භාග්‍යවතුන් වහන්සේ ගේ සූත්‍රසංඛ්‍යාත භික්ෂු විභංගයෙහි ආවා වූ භික්ෂු විභංගයට ඇතුළත් වූ මෙතෙක් ශික්ෂා පද අඩමසක් පාසා උදෙසීමට පැමිණෙ යි. සමගි වූ, සතුටු වන, විවාද නො කරන සැමදෙනා වහන්සේලා විසින් ම එහි ලා හික්මිය යුතු යි.\n\nකෙටියෙන් උපෝසථය අවසන් ය.\nසාදු ! සාදු !! සාදු !!!",
    "en": "Venerables, the Introduction has been recited. The four Pārājika rules have been recited. The thirteen Saṅghādisesa rules have been heard by the venerables. The two Aniyata rules have been heard by the venerables. The thirty Nissaggiya Pācittiya rules have been heard by the venerables. The ninety-two Pācittiya rules have been heard by the venerables. The four Pāṭidesanīya rules have been heard by the venerables. The Sekhiya rules have been heard by the venerables. The seven rules for settling disputes have been heard by the venerables.\n\nHere I ask the venerables: Are you pure in this? A second time I ask: Are you pure in this? A third time I ask: Are you pure in this? The venerables are pure in this, therefore they are silent. Thus do I hold it.\n\nThis much of the Blessed One's teaching, handed down in the discourses and included in the discourses, comes up for recitation every half-month. All should train in it in harmony, with mutual appreciation, without quarrelling.\n\nThe brief Uposatha is finished.\nSādhu! Sādhu!! Sādhu!!!"
   }
  ],
  "note_si": "සැ.යු:- නිදානය සහ පාරාජිකා ධර්ම උදෙසීමෙන් අනතුරුව ඉහත පරිදි උදෙසිය යුතු ය.",
  "note_en": "Note: After reciting the Introduction and the Pārājika rules, the remainder is to be recited as above."
 },
 {
  "id": "parisuddhi-uposatha",
  "si": "පාරිසුද්ධි උපෝසථය",
  "en": "Pārisuddhi Uposatha",
  "kind": "text",
  "count": null,
  "title_si": "පාරිසුද්ධි උපෝසථය කිරීමේ පිළිවෙළ",
  "title_en": "Pārisuddhi Uposatha Procedure",
  "intro_si": "පාරිසුද්ධි උපෝසථය — පිරිසිදු බව සඳහා වූ පොහොය කිරීම. (පූර්ව කෘත්‍ය සිදු කොට ඇවැත් දේශනා කොට වර්ෂය, සෘතුව, පක්ෂය සඳහන් කිරීමෙන් අනතුරුව කළ යුතු ය.)",
  "intro_en": "The Uposatha of purity. (To be done after the preliminary duties, after confessing offences and stating the year, season and fortnight.)",
  "parts": [
   {
    "pali": "සුණන්තු මේ ආයස්මන්තා අජ්ජුපෝසථෝ (පණ්ණරසෝ/ චාතුද්දසෝ). යදායස්මන්තානං පත්තකල්ලං මයං අඤ්ඤමඤ්ඤං පාරිසුද්ධි-උපෝසථං කරෙය්‍යාම.\n\n\"පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි, පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි, පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි\"\n\n\"පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ, පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ, පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ\"",
    "translit": "Suṇantu me āyasmantā ajjuposatho (paṇṇaraso/ cātuddaso). Yadāyasmantānaṃ pattakallaṃ mayaṃ aññamaññaṃ pārisuddhi-uposathaṃ kareyyāma.\n\n\"Parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi\"\n\n\"Parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha\"",
    "si": "පූර්ව කෘත්‍ය සිදු කොට ඇවැත් දේශනා කොට වර්ෂය, සෘතුව, පක්ෂය සඳහන් කිරීමෙන් අනතුරුව ව්‍යක්ත වූ ප්‍රතිබල භික්ෂුවක් විසින් නමස්කාරය ප්‍රකාශ කොට ඤත්තිය තැබිය යුතු ය:\n\"ආයුෂ්මත්වරුනි, මාගේ කීම අසත්වා. අද පණ්ණරසී/ චාතුද්දසී පොහොය දිනයි. ආයුෂ්මත්වරුනි, ඔබට කාලය පැමිණියේ නම්, අපි එකිනෙකා පාරිසුද්ධි උපෝසථය කරමු.\"\nඉන්පසු වැඩිහිටි භික්ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\"\nයැයි ප්‍රකාශ කළ යුතු ය.\nඉන්පසු වැඩිහිටි පිළිවෙලින් අනෙක් භික්ෂූන් වහන්සේලා දෙනම විසින් ම උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න. ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\"\nයැයි ප්‍රකාශ කළ යුතු ය.",
    "en": "After the preliminary duties, after confessing offences and stating the year, season and fortnight, a competent and capable monk, having paid homage, makes the motion:\n\"Venerables, hear me. Today is the Uposatha of the fifteenth (fourteenth). If it is the right time for the venerables, let us hold the Pārisuddhi Uposatha with one another.\"\nThen the senior monk, squatting with joined palms, pays homage three times and says:\n\"Friend, I am pure. Please remember me as pure. Friend, I am pure. Please remember me as pure. Friend, I am pure. Please remember me as pure.\"\nThen the other two monks, in order of seniority, squatting with joined palms, pay homage three times and say:\n\"Venerable sir, I am pure. Please remember me as pure. Venerable sir, I am pure. Please remember me as pure. Venerable sir, I am pure. Please remember me as pure.\"",
    "title_si": "භික්ෂූන් වහන්සේලා තුන් නමක් වූ විට",
    "title_en": "When there are three monks"
   },
   {
    "pali": "\"පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි, පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි, පරිසුද්ධෝ අහං ආවුසෝ! පරිසුද්ධෝති මං ධාරේහි\"\n\"පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ, පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ, පරිසුද්ධෝ අහං භන්තේ! පරිසුද්ධෝති මං ධාරේථ\"",
    "translit": "\"Parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi, parisuddho ahaṃ āvuso! Parisuddhoti maṃ dhārehi\"\n\"Parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha, parisuddho ahaṃ bhante! Parisuddhoti maṃ dhāretha\"",
    "si": "පූර්ව කෘත්‍ය සිදු කොට ඇවැත් දේශනා කොට වර්ෂය, සෘතුව, පක්ෂය සඳහන් කිරීමෙන් අනතුරුව වැඩිහිටි භික්ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ඇවැත්නි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\" (තුන් වරක්)\nයැයි ප්‍රකාශ කළ යුතු ය.\nඉන්පසු නවක භික්ෂුව විසින් උක්කුටිකයෙන් හිඳ ඇඳිලි බැඳ තෙවරක් නමස්කාරය ප්‍රකාශ කොට;\n\"ස්වාමීනි, මම පිරිසිදු වෙමි. මා පිරිසිදු යැයි දරන්න\" (තුන් වරක්)\nයැයි ප්‍රකාශ කළ යුතු ය.",
    "en": "After the preliminary duties, confession of offences and stating the year, season and fortnight, the senior monk, squatting with joined palms, pays homage three times and says:\n\"Friend, I am pure. Please remember me as pure.\" (three times)\nThen the junior monk, squatting with joined palms, pays homage three times and says:\n\"Venerable sir, I am pure. Please remember me as pure.\" (three times)",
    "title_si": "භික්ෂූන් වහන්සේලා දෙනමක් වූ විට",
    "title_en": "When there are two monks"
   },
   {
    "pali": "\"අජ්ජ මේ උපෝසථෝ පණ්ණරසෝ\" (චාතුද්දසෝ)",
    "translit": "\"Ajja me uposatho paṇṇaraso\" (cātuddaso)",
    "si": "උපෝසථය කරන දිනයේ දී ආවාසයේ සිටිනුයේ එක් භික්ෂුවක් නම් මෙහි දී ඒ භික්ෂුව විසින් සාමාන්‍යයෙන් උපෝසථය කරන ස්ථානය ඇමදූ පැන් හා පරිභෝගයට ගන්නා දිය එළවා අසුන් පනවා පහන් දල්වා හිඳිය යුතු ය. ඉදින් අන් මහණහු එහි එත් ද, ඔවුන් සමග පොහොය කළ යුතු ය. ඉදින් නො එත් නම් වැඳ නමස්කාරය ප්‍රකාශ කොට වර්ෂය, සෘතුව, පක්ෂය සලකාගෙන, පසළොස්වක හෝ තුදුස්වක දිනයක් නම්;\n\"අද මේ පොහොය දිනය පසළොස්වක/ තුදුස්වක\"\nයි අධිෂ්ඨාන කළ යුතු ය.",
    "en": "If only one monk is residing in the dwelling on the Uposatha day, he should sweep the usual Uposatha place, set out drinking water and water for use, spread seats and light a lamp, and wait. If other monks arrive, he should hold the Uposatha with them. If not, he pays homage, notes the year, season and fortnight, and if it is the fifteenth or fourteenth day, he resolves:\n\"Today is my Uposatha, the fifteenth (fourteenth).\"",
    "title_si": "භික්ෂුවක් පමණක් වූ විට (අධිෂ්ඨාන උපෝසථය)",
    "title_en": "When there is only one monk (the resolve-Uposatha)"
   }
  ]
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
    "pali": "\"ඉමස්මිං විහාරේ ඉමං තේමාසං වස්සං උපේමි. ඉධ වස්සං උපේමි\"\n\n\"සචේ මේ කෝචි අන්තරායෝ න භවිස්සති සත්තාහබ්භන්තරේ පුන නිවත්තිස්සාමි\"",
    "translit": "\"Imasmiṃ vihāre imaṃ temāsaṃ vassaṃ upemi. Idha vassaṃ upemi\"\n\n\"Sace me koci antarāyo na bhavissati sattāhabbhantare puna nivattissāmi\"",
    "si": "\"මේ විහාරයෙහි මේ තෙමස වස් එළඹෙමි. මෙහි වස් එළඹෙමි\"\nයි තෙවරක් ප්‍රකාශ කළ යුතු ය.\n\nවස් අධිෂ්ඨාන කළ භික්ෂුවක් යම් හෙයකින් වස් විසූ ආවාසයෙන් යම් කරුණක් නිසා පිටත් ව යන්නේ නම් නැවත සත් දිනක් ඇතුළත පැමිණෙමි යි මෙසේ අධිෂ්ඨාන කළ යුතු ය.\n\"ඉදින් කිසි අනතුරක් නො වුණේ නම් සත්වන දින අරුණට පළමු නැවත පැමිණෙමි\"",
    "en": "\"In this monastery I enter the Rains Retreat for these three months. Here I enter the Rains Retreat.\"\nThis is to be said three times.\n\nIf a monk who has resolved the Rains Retreat must leave the dwelling for some reason, he resolves to return within seven days:\n\"If there is no obstacle, I shall return before dawn on the seventh day.\""
   }
  ]
 }
];
