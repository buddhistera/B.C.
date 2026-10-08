/* =====================================================================
   patthana-data.js  —  සජ්ඣායනය (Chanting) මොඩියුලය: සමන්ත පට්ඨාන
   ---------------------------------------------------------------------
   * chanting.js විසින් අදාළ tab එක පළමුවරට විවෘත කරන විට පමණක් load කරයි.
   * අලුත් සූත්‍රයක් එක් කිරීමට items තුළට එක් වස්තුවක් (object) එක් කරන්න:
       { id, num?, short?, group?, name:{si,en,tr?}, sub?, pali, translit?, sinhala?, english?, gatha? }
       - pali      : සිංහල අකුරින් පාළි   (සිංහල තිරයේ පෙන්වයි)
       - translit  : Roman / IAST පාළි    (English තිරයේ පෙන්වයි)
       - sinhala   : සිංහල අර්ථය   - english : English meaning   - gatha : ගාථාව
   ===================================================================== */
(window.ChantingModules = window.ChantingModules || {}).patthana = {
 "id": "patthana",
 "meaningToggle": true,
  "hidePaliLabel": true, 
 "intro": {
  "pali": "නමෝ තස්ස භගවතෝ අරහතෝ සම්මාසම්බුද්ධස්ස පට්ඨානදේසකස්ස !!!",
  "translit": "Namo tassa bhagavato arahato sammāsambuddhassa paṭṭhānadesakassa !!!",
  "si": [
   "අනන්ත නය සමන්නාගත සමන්ත පට්ඨාන මහා ප්‍රකරණය දේශනා කොට වදාලා වූ ඒ භාග්‍යවත් වූ අරහත් වූ සම්මා සම්බුදුරජාණන් වහන්සේට නමස්කාර වේවා "
  ],
  "en": [
   "Homage to the Arahant, the Fully Enlightened One, who taught the great Samanta Paṭṭhāna Prakaraṇa endowed with infinite modes of conditionality."
  ]
 },
 "vandana": {
  "pali": "විචිත්ත මති ගම්භීර මනන්ත නය මණ්ඩිතං පට්ඨානං සම්මසන්තස්ස විමලාමිත බුද්ධියා \n\nයස්ස දේහා නික්ඛමිංසු සුභා ඡබ්බණ්ණ රංසියෝ\nනීල පීතා රත්ත සේතා මඤ්ඡිට්ඨා ව පභස්සරා\n\nතං ලෝකනාථං සුගතං ධම්මඤ්ච ජින සේවිතං \nසංඝං නිරංගණං සෙට්ඨං නමාමි සිරසාදරං.",
  "translit": "Vicitta mati gambhīra mananta naya maṇḍitaṃ paṭṭhānaṃ sammasantassa vimalāmita buddhiyā \n\nYassa dehā nikkhamiṃsu subhā chabbaṇṇa raṃsiyo\nnīla pītā ratta setā mañjiṭṭhā va pabhassarā\n\nTaṃ lokanāthaṃ sugataṃ  dhammañca jina sevitaṃ \nsaṅghaṃ niraṅgaṇaṃ seṭṭhaṃ namāmi sirasādaraṃ."
 },
 "paccayaList": {
  "pali": "හේතුපච්චයෝ, ආරම්මණපච්චයෝ, අධිපතිපච්චයෝ, අනන්තරපච්චයෝ, සමනන්තරපච්චයෝ, සහජාතපච්චයෝ, අඤ්ඤමඤ්ඤපච්චයෝ, නිස්සයපච්චයෝ, උපනිස්සයපච්චයෝ, පුරේජාතපච්චයෝ, පච්ඡාජාතපච්චයෝ, ආසේවනපච්චයෝ, කම්මපච්චයෝ, විපාකපච්චයෝ, ආහාරපච්චයෝ, ඉන්ද්‍රියපච්චයෝ, ඣානපච්චයෝ, මග්ගපච්චයෝ, සම්පයුත්තපච්චයෝ, විප්පයුත්තපච්චයෝ, අත්ථිපච්චයෝ, නත්ථිපච්චයෝ, විගතපච්චයෝ, අවිගතපච්චයෝ'ති.",
  "translit": "Hetupaccayo, Ārammaṇapaccayo, Adhipatipaccayo, Anantarapaccayo, Samanantarapaccayo, Sahajātapaccayo, Aññamaññapaccayo, Nissayapaccayo, Upanissayapaccayo, Purejātapaccayo, Pacchājātapaccayo, Āsevanapaccayo, Kammapaccayo, Vipākapaccayo, Āhārapaccayo, Indriyapaccayo, Jhānapaccayo, Maggapaccayo, Sampayuttapaccayo, Vippayuttapaccayo, Atthipaccayo, Natthipaccayo, Vigatapaccayo, Avigatapaccayo'ti."
 },
 "items": [
  {
   "id": "p1",
   "num": "1",
   "name": {
    "si": "හේතුපච්චයෝ'ති",
    "tr": "Hetu paccayo'ti",
    "en": "Hetupaccayo'ti"
   },
   "pali": "හේතූ හේතුසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං හේතුපච්චයේන පච්චයෝ.",
   "translit": "Hetū hetusampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ hetupaccayena paccayo.",
   "sinhala": "හේතූහු හේතුසම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා හටගන්නා වූ රූපයන්ටද හේතු ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The roots (hetu) are related, by way of root condition, to the mental states associated with them and to the material phenomena arising from them.",
   "gatha": "හේතු පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "හේතු",
   "shortEn": "Hetu",
   "gathaTr": "Hetu paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p2",
   "num": "2",
   "name": {
    "si": "ආරම්මණපච්චයෝ'ති",
    "tr": "Ārammaṇa paccayo'ti",
    "en": "Ārammaṇapaccayo'ti"
   },
   "pali": "රූපායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. සද්දායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. ගන්ධායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. රසායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. ඵොට්ඨබ්බායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. රූපායතනං, සද්දායතනං, ගන්ධායතනං, රසායතනං, ඵොට්ඨබ්බායතනං මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. සබ්බේ ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ආරම්මණපච්චයේන පච්චයෝ. යං යං ධම්මං ආරබ්භ යේ යේ ධම්මා උප්පජ්ජන්ති චිත්තචේතසිකා ධම්මා, තේ තේ ධම්මා තේසං තේසං ධම්මානං ආරම්මණපච්චයේන පච්චයෝ.",
   "translit": "Rūpāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Saddāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Gandhāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Rasāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Phoṭṭhabbāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Rūpāyatanaṃ, saddāyatanaṃ, gandhāyatanaṃ, rasāyatanaṃ, phoṭṭhabbāyatanaṃ manodhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Sabbe dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ ārammaṇapaccayena paccayo. Yaṃ yaṃ dhammaṃ ārabbha ye ye dhammā uppajjanti cittacetasikā dhammā, te te dhammā tesaṃ tesaṃ dhammānaṃ ārammaṇapaccayena paccayo.",
   "sinhala": "රූපායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සද්දායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ගන්ධායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රසායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඵොට්ඨබ්බායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය, සද්දායතනය, ගන්ධායතනය, රසායතනය, ඵොට්ඨබ්බායතනය මනෝධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සියළු ධර්මයෝ මනෝවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් යම් ධර්මයක් අරමුණු කොට යම් යම් චිත්ත චෛතසික ධර්ම උපදිත්ද ඒ ඒ අරමුණ ඒ ඒ ධර්මයන්ට ආරම්මණ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Visible form, sound, smell, taste and tangible objects are related by way of object condition to eye-, ear-, nose-, tongue- and body-consciousness respectively, and to their associated states; all five are also objects for the mind-element, and all phenomena are objects for mind-consciousness and its associated states. Whatever state a mind-and-mental-factor group takes as its object, that object is an object condition for those states.",
   "gatha": "ආරම්මණ ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "ආරම්මණ",
   "shortEn": "Ārammaṇa",
   "gathaTr": "Ārammaṇa ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p3",
   "num": "3",
   "name": {
    "si": "අධිපතිපච්චයෝ'ති",
    "tr": "Adhipati paccayo'ti",
    "en": "Adhipatipaccayo'ti"
   },
   "pali": "ඡන්දාධිපති ඡන්දසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං අධිපතිපච්චයේන පච්චයෝ. විරියාධිපති විරියසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං අධිපතිපච්චයේන පච්චයෝ. චිත්තාධිපති චිත්තසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං අධිපතිපච්චයේන පච්චයෝ. වීමංසාධිපති වීමංසසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං අධිපතිපච්චයේන පච්චයෝ. යං යං ධම්මං ගරුං කත්වා යේ යේ ධම්මා උප්පජ්ජන්ති චිත්තචේතසිකා ධම්මා, තේ තේ ධම්මා තේසං තේසං ධම්මානං අධිපතිපච්චයේන පච්චයෝ.",
   "translit": "Chandādhipati chandasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ adhipatipaccayena paccayo. Viriyādhipati viriyasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ adhipatipaccayena paccayo. Cittādhipati cittasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ adhipatipaccayena paccayo. Vīmaṃsādhipati vīmaṃsasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ adhipatipaccayena paccayo. Yaṃ yaṃ dhammaṃ garuṃ katvā ye ye dhammā uppajjanti cittacetasikā dhammā, te te dhammā tesaṃ tesaṃ dhammānaṃ adhipatipaccayena paccayo.",
   "sinhala": "ඡන්දාධිපතිය ඡන්දය යෙදුන ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද අධිපති ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. විරියාධිපති වීරිය යෙදුන ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද අධිපති ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චිත්තාධිපතිය චිත්තසම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද අධිපති ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. වීමංසාධිපතිය වීමංසසම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද අධිපති ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් යම් ධර්මයක් ගරු කොට යම් යම් චිත්ත චෛතසික ධර්ම උපදිත්ද ඒ ඒ අරමුණ ඒ ඒ ධර්මයන්ට අධිපති ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Desire, energy, mind and investigation, when predominant, are related by way of predominance condition to their associated states and to the material phenomena arising from them. Whatever state is made weighty and taken as an object of predominance, it is a predominance condition for the mind and mental factors that arise.",
   "gatha": "අධිපති ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "අධිපති",
   "shortEn": "Adhipati",
   "gathaTr": "Adhipati ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p4",
   "num": "4",
   "name": {
    "si": "අනන්තරපච්චයෝ'ති",
    "tr": "Anantara paccayo'ti",
    "en": "Anantarapaccayo'ti"
   },
   "pali": "චක්ඛුවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. සෝතවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. ඝානවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. ජිව්හාවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. කායවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං අනන්තරපච්චයේන පච්චයෝ. යේසං යේසං ධම්මානං අනන්තරා යේ යේ ධම්මා උප්පජ්ජන්ති චිත්තචේතසිකා ධම්මා, තේ තේ ධම්මා තේසං තේසං ධම්මානං අනන්තරපච්චයේන පච්චයෝ.",
   "translit": "Cakkhuviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Sotaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Ghānaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Jivhāviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Kāyaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ anantarapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ anantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ anantarapaccayena paccayo. Yesaṃ yesaṃ dhammānaṃ anantarā ye ye dhammā uppajjanti cittacetasikā dhammā, te te dhammā tesaṃ tesaṃ dhammānaṃ anantarapaccayena paccayo.",
   "sinhala": "චක්ඛුවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හාවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු කුසල ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු කුසල ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් යම් ධර්මයන්ට අනතුරුව යම් යම් චිත්ත චෛතසික ධර්ම උපදිත්ද ඒ ඒ ධර්මයෝ ඒ ඒ ධර්මයන්ට අනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Each of the five sense-consciousness elements and their associated states is related by way of contiguity condition to the mind-element and its associated states; the mind-element and its associated states are likewise related to mind-consciousness. Earlier wholesome, unwholesome and indeterminate states are related to the immediately following wholesome, unwholesome and indeterminate states in the ways listed. Whatever states arise immediately after earlier ones are so conditioned.",
   "gatha": "අනන්තර ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "අනන්තර",
   "shortEn": "Anantara",
   "gathaTr": "Anantara ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p5",
   "num": "5",
   "name": {
    "si": "සමනන්තරපච්චයෝ'ති",
    "tr": "Samanantara paccayo'ti",
    "en": "Samanantarapaccayo'ti"
   },
   "pali": "චක්ඛුවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. සෝතවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. ඝානවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. ජිව්හාවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. කායවිඤ්ඤාණධාතු තං සම්පයුත්තකා ච ධම්මා මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. මනෝධාතු තං සම්පයුත්තකා ච ධම්මා මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ. යේසං යේසං ධම්මානං සමනන්තරා යේ යේ ධම්මා උප්පජ්ජන්ති චිත්තචේතසිකා ධම්මා, තේ තේ ධම්මා තේසං තේසං ධම්මානං සමනන්තරපච්චයේන පච්චයෝ.",
   "translit": "Cakkhuviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Sotaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Ghānaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Jivhāviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Kāyaviññāṇadhātu taṃ sampayuttakā ca dhammā manodhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Manodhātu taṃ sampayuttakā ca dhammā manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ samanantarapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ samanantarapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ samanantarapaccayena paccayo. Yesaṃ yesaṃ dhammānaṃ samanantarā ye ye dhammā uppajjanti cittacetasikā dhammā, te te dhammā tesaṃ tesaṃ dhammānaṃ samanantarapaccayena paccayo.",
   "sinhala": "චක්ඛුවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හාවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායවිඤ්ඤාණධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මනෝධාතුවද ඒ හා යෙදුන ධර්මයෝද මනෝවිඤ්ඤාණධාතුවට හා යෙදුන ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු කුසල ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු කුසල ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් යම් ධර්මයන්ට අනතුරුව යම් යම් චිත්ත චෛතසික ධර්ම උපදිත්ද ඒ ඒ ධර්මයෝ ඒ ඒ ධර්මයන්ට සමනන්තර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The same pattern as contiguity condition, stated as immediate-contiguity condition: the earlier sense-consciousness and its associated states condition the mind-element, the mind-element conditions mind-consciousness, and earlier wholesome, unwholesome and indeterminate states condition the immediately following ones.",
   "gatha": "සමනන්තර ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "සමනන්තර",
   "shortEn": "Samanantara",
   "gathaTr": "Samanantara ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p6",
   "num": "6",
   "name": {
    "si": "සහජාතපච්චයෝ'ති",
    "tr": "Sahajāta paccayo'ti",
    "en": "Sahajātapaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං සහජාතපච්චයේන පච්චයෝ. චත්තාරෝ මහාභූතා අඤ්ඤමඤ්ඤං සහජාතපච්චයේන පච්චයෝ. ඔක්කන්තික්ඛණේ නාමරූපං අඤ්ඤමඤ්ඤං සහජාතපච්චයේන පච්චයෝ. චිත්තචේතසිකා ධම්මා චිත්තසමුට්ඨානානං රූපානං සහජාතපච්චයේන පච්චයෝ. මහාභූතා උපාදාය රූපානං සහජාතපච්චයේන පච්චයෝ. රූපිනෝ ධම්මා අරූපීනං ධම්මානං කිඤ්චි කාලේ සහජාතපච්චයේන පච්චයෝ. කිඤ්චි කාලේ න සහජාතපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññaṃ sahajātapaccayena paccayo. Cattāro mahābhūtā aññamaññaṃ sahajātapaccayena paccayo. Okkantikkhaṇe nāmarūpaṃ aññamaññaṃ sahajātapaccayena paccayo. Cittacetasikā dhammā cittasamuṭṭhānānaṃ rūpānaṃ sahajātapaccayena paccayo. Mahābhūtā upādāya rūpānaṃ sahajātapaccayena paccayo. Rūpino dhammā arūpīnaṃ dhammānaṃ kiñci kāle sahajātapaccayena paccayo. Kiñci kāle na sahajātapaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සතර මහාධාතූහු ඔවුනොවුන්ට සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහි නාම-රූප ඔවුනොවුන්ට සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චිත්ත චෛතසික ධර්මයෝ චිත්තජ රූපයන්ට සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මහාභූත සතර උපාදායරූපයන්ට සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. වත්ථු රූපය අරූපී ධර්මයන්ට ප්‍රතිසන්ධියේදී සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රවෘත්තිකාලයේදී සහජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය නොවේ.",
   "english": "The four immaterial aggregates are related to one another by co-nascence; so are the four great elements; and at rebirth-linking mind and matter are mutually so related. Mind and mental factors are related to mind-born matter, and the great elements to derived matter. Matter sometimes conditions immaterial states by co-nascence (at rebirth-linking) and sometimes does not (in the course of life).",
   "gatha": "සහජාත ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "සහජාත",
   "shortEn": "Sahajāta",
   "gathaTr": "Sahajāta ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p7",
   "num": "7",
   "name": {
    "si": "අඤ්ඤමඤ්ඤපච්චයෝ'ති",
    "tr": "Aññamañña paccayo'ti",
    "en": "Aññamaññapaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤපච්චයේන පච්චයෝ. චත්තාරෝ මහාභූතා අඤ්ඤමඤ්ඤපච්චයේන පච්චයෝ. ඔක්කන්තික්ඛණේ නාමරූපං අඤ්ඤමඤ්ඤපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññapaccayena paccayo. Cattāro mahābhūtā aññamaññapaccayena paccayo. Okkantikkhaṇe nāmarūpaṃ aññamaññapaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට අඤ්ඤමඤ්ඤ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සතර මහාධාතූහු ඔවුනොවුන්ට අඤ්ඤමඤ්ඤ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහි නාම-රූප ඔවුනොවුන්ට අඤ්ඤමඤ්ඤ ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four immaterial aggregates are related to one another by mutuality condition; so are the four great elements; and at rebirth-linking mind and matter are mutually so related.",
   "gatha": "අඤ්ඤමඤ්ඤ ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "අඤ්ඤමඤ්ඤ",
   "shortEn": "Aññamañña",
   "gathaTr": "Aññamañña ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p8",
   "num": "8",
   "name": {
    "si": "නිස්සයපච්චයෝ'ති",
    "tr": "Nissaya paccayo'ti",
    "en": "Nissayapaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං නිස්සයපච්චයේන පච්චයෝ. චත්තාරෝ මහාභූතා අඤ්ඤමඤ්ඤං නිස්සයපච්චයේන පච්චයෝ. ඔක්කන්තික්ඛණේ නාමරූපං අඤ්ඤමඤ්ඤං නිස්සයපච්චයේන පච්චයෝ. චිත්තචේතසිකා ධම්මා චිත්තසමුට්ඨානානං රූපානං නිස්සයපච්චයේන පච්චයෝ. මහාභූතා උපාදාය රූපානං නිස්සයපච්චයේන පච්චයෝ. චක්ඛායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ. සෝතායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ. ඝානායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ. ජිව්හායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ. කායායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ. යං රූපං නිස්සාය මනෝධාතු ච මනෝවිඤ්ඤාණධාතු ච වත්තන්ති, තං රූපං මනෝධාතුයා ච මනෝවිඤ්ඤාණධාතුයා ච තං සම්පයුත්තකානඤ්ච ධම්මානං නිස්සයපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññaṃ nissayapaccayena paccayo. Cattāro mahābhūtā aññamaññaṃ nissayapaccayena paccayo. Okkantikkhaṇe nāmarūpaṃ aññamaññaṃ nissayapaccayena paccayo. Cittacetasikā dhammā cittasamuṭṭhānānaṃ rūpānaṃ nissayapaccayena paccayo. Mahābhūtā upādāya rūpānaṃ nissayapaccayena paccayo. Cakkhāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo. Sotāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo. Ghānāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo. Jivhāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo. Kāyāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo. Yaṃ rūpaṃ nissāya manodhātu ca manoviññāṇadhātu ca vattanti, taṃ rūpaṃ manodhātuyā ca manoviññāṇadhātuyā ca taṃ sampayuttakānañca dhammānaṃ nissayapaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සතර මහාධාතූහු ඔවුනොවුන්ට නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහි නාම-රූප ඔවුනොවුන්ට නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චිත්ත චෛතසික ධර්මයෝ චිත්තජ රූපයන්ට නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මහාභූත සතර උපාදායරූපයන්ට නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චක්ඛායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් රූපයක් නිශ්‍රයකොට මනෝධාතුවද මනෝවිඤ්ඤාණධාතුවද පවතිත්ද ඒ රූපය මනෝධාතුවටද මනෝවිඤ්ඤාණධාතුවටද යෙදුන ධර්මයන්ටද නිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four immaterial aggregates, the four great elements, and mind-and-matter at rebirth-linking are related to one another by dependence condition. Mind and mental factors are related to mind-born matter, and the great elements to derived matter. The five sense-bases are related to their consciousness elements and associated states, and the physical base on which mind-element and mind-consciousness occur is related to them by dependence.",
   "gatha": "නිස්සය ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "නිස්සය",
   "shortEn": "Nissaya",
   "gathaTr": "Nissaya ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p9",
   "num": "9",
   "name": {
    "si": "උපනිස්සයපච්චයෝ'ති",
    "tr": "Upanissaya paccayo'ti",
    "en": "Upanissayapaccayo'ti"
   },
   "pali": "පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං කේසඤ්චි උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං කේසඤ්චි උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අබ්‍යාකතානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. පුරිමා පුරිමා අබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං උපනිස්සයපච්චයේන පච්චයෝ. උතුභෝජනම්පි උපනිස්සයපච්චයේන පච්චයෝ. පුග්ගලෝපි උපනිස්සයපච්චයේන පච්චයෝ. සේනාසනම්පි උපනිස්සයපච්චයේන පච්චයෝ.",
   "translit": "Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ kesañci upanissayapaccayena paccayo. Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ kesañci upanissayapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ abyākatānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ upanissayapaccayena paccayo. Purimā purimā abyākatā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ upanissayapaccayena paccayo. Utubhojanampi upanissayapaccayena paccayo. Puggalopi upanissayapaccayena paccayo. Senāsanampi upanissayapaccayena paccayo.",
   "sinhala": "පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු කුසල ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට ඇතැම් උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු කුසල ධර්මයන්ට ඇතැම් උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අබ්‍යාකත ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු කුසල ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අබ්‍යාකත ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඍතු භෝජනද උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පුද්ගලයාද උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සේනාසනයද උපනිස්සය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Earlier wholesome, unwholesome and indeterminate states are related by decisive-support condition to later wholesome, unwholesome and indeterminate states in the ways listed (some of the cross-relations only in certain cases). Season, food, person and lodging are also decisive-support conditions.",
   "gatha": "උපනිස්සය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "උපනිස්සය",
   "shortEn": "Upanissaya",
   "gathaTr": "Upanissaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
    {
   "id": "p10",
   "num": "10",
   "name": {
    "si": "පුරේජාතපච්චයෝ'ති",
    "tr": "Purejāta paccayo'ti",
    "en": "Purejātapaccayo'ti"
   },
   "pali": "චක්ඛායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. සෝතායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. ඝානායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. ජිව්හායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. කායායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. රූපායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. සද්දායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. ගන්ධායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. රසායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. ඵොට්ඨබ්බායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. රූපායතනං, සද්දායතනං, ගන්ධායතනං, රසායතනං, ඵොට්ඨබ්බායතනං මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. යං රූපං නිස්සාය මනෝධාතු ච මනෝවිඤ්ඤාණධාතු ච වත්තන්ති, තං රූපං මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං පුරේජාතපච්චයේන පච්චයෝ. මනෝවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං කිඤ්චිකාලේ පුරේජාතපච්චයේන පච්චයෝ. කිඤ්චිකාලේ න පුරේජාතපච්චයේන පච්චයෝ.",
   "translit": "Cakkhāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Sotāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Ghānāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Jivhāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Kāyāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Rūpāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Saddāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Gandhāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Rasāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Phoṭṭhabbāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Rūpāyatanaṃ, saddāyatanaṃ, gandhāyatanaṃ, rasāyatanaṃ, phoṭṭhabbāyatanaṃ manodhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Yaṃ rūpaṃ nissāya manodhātu ca manoviññāṇadhātu ca vattanti, taṃ rūpaṃ manodhātuyā taṃ sampayuttakānañca dhammānaṃ purejātapaccayena paccayo. Manoviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ kiñcikāle purejātapaccayena paccayo. Kiñcikāle na purejātapaccayena paccayo.",
   "sinhala": "චක්ඛායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සද්දායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ගන්ධායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රසායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඵොට්ඨබ්බායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය, සද්දායතනය, ගන්ධායතනය, රසායතනය, ඵොට්ඨබ්බායතනය මනෝධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් රූපයක් නිසා මනෝධාතුවද මනෝවිඤ්ඤාණධාතුවද පවතිත්ද ඒ රූපය මනෝධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඒ රූපය මනෝවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ප්‍රවෘත්ති කාලයෙහි පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහිදී පුරේජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය නොවේ.",
   "english": "The five sense-bases are related by pre-nascence condition to the corresponding consciousness elements and associated states; the five sense-objects are related to the mind-element and its associated states. The physical base on which mind-element and mind-consciousness occur is pre-nascent to them; for mind-consciousness this holds in the course of life, but not at rebirth-linking.",
   "gatha": "පුරේජාත ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "පුරේජාත",
   "shortEn": "Purejāta",
   "gathaTr": "Purejāta ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p11",
   "num": "11",
   "name": {
    "si": "පච්ඡාජාතපච්චයෝ'ති",
    "tr": "Pacchājāta paccayo'ti",
    "en": "Pacchājātapaccayo'ti"
   },
   "pali": "පච්ඡාජාතා චිත්තචේතසිකා ධම්මා පුරේජාතස්ස ඉමස්ස කායස්ස පච්ඡාජාතපච්චයේන පච්චයෝ.",
   "translit": "Pacchājātā cittacetasikā dhammā purejātassa imassa kāyassa pacchājātapaccayena paccayo.",
   "sinhala": "පසුව උපන් චිත්ත චෛතසික ධර්මයෝ කලින් උපන් රූපයන්ට පච්ඡාජාත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Later-arisen mind and mental factors are related by post-nascence condition to this earlier-arisen body.",
   "gatha": "පච්ඡාජාත ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "පච්ඡාජාත",
   "shortEn": "Pacchājāta",
   "gathaTr": "Pacchājāta ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
    {
   "id": "p12",
   "num": "12",
   "name": {
    "si": "ආසේවනපච්චයෝ'ති",
    "tr": "Āsevana paccayo'ti",
    "en": "Āsevanapaccayo'ti"
   },
   "pali": "පුරිමා පුරිමා කුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං කුසලානං ධම්මානං ආසේවනපච්චයේන පච්චයෝ. පුරිමා පුරිමා අකුසලා ධම්මා පච්ඡිමානං පච්ඡිමානං අකුසලානං ධම්මානං ආසේවනපච්චයේන පච්චයෝ. පුරිමා පුරිමා කිරියාබ්‍යාකතා ධම්මා පච්ඡිමානං පච්ඡිමානං කිරියාබ්‍යාකතානං ධම්මානං ආසේවනපච්චයේන පච්චයෝ.",
   "translit": "Purimā purimā kusalā dhammā pacchimānaṃ pacchimānaṃ kusalānaṃ dhammānaṃ āsevanapaccayena paccayo. Purimā purimā akusalā dhammā pacchimānaṃ pacchimānaṃ akusalānaṃ dhammānaṃ āsevanapaccayena paccayo. Purimā purimā kiriyābyākatā dhammā pacchimānaṃ pacchimānaṃ kiriyābyākatānaṃ dhammānaṃ āsevanapaccayena paccayo.",
   "sinhala": "පූර්ව පූර්ව කුසල ධර්මයෝ පසු පසු කුසල ධර්මයන්ට ආසේවන ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව අකුසල ධර්මයෝ පසු පසු අකුසල ධර්මයන්ට ආසේවන ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. පූර්ව පූර්ව වූ ක්‍රියාඅබ්‍යාකත ධර්මයෝ පසු පසු ක්‍රියාඅබ්‍යාකත ධර්මයන්ට ආසේවන ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Earlier wholesome states are related by repetition condition to later wholesome states, earlier unwholesome states to later unwholesome states, and earlier functional-indeterminate states to later functional-indeterminate states.",
   "gatha": "ආසේවන ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "ආසේවන",
   "shortEn": "Āsevana",
   "gathaTr": "Āsevana ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p13",
   "num": "13",
   "name": {
    "si": "කම්මපච්චයෝ'ති",
    "tr": "Kamma paccayo'ti",
    "en": "Kammapaccayo'ti"
   },
   "pali": "කුසලාකුසලං කම්මං විපාකානං ඛන්ධානං කටත්තා ච රූපානං කම්මපච්චයේන පච්චයෝ. චේතනා සම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං කම්මපච්චයේන පච්චයෝ.",
   "translit": "Kusalākusalaṃ kammaṃ vipākānaṃ khandhānaṃ kaṭattā ca rūpānaṃ kammapaccayena paccayo. Cetanā sampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ kammapaccayena paccayo.",
   "sinhala": "කුසලාකුසල කර්මය විපාක ස්කන්ධයන්ට හා කර්මජ රූපයන්ට කර්ම ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චේතනාව සම්ප්‍රයුක්ත ධර්මයන්ට හා ඒ නිසා උපදින රූපයන්ට කර්ම ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Wholesome and unwholesome kamma is related by kamma condition to the resultant aggregates and to kamma-born matter; volition is related to its associated states and to the matter arising from them.",
   "gatha": "කම්ම පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "කම්ම",
   "shortEn": "Kamma",
   "gathaTr": "Kamma paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p14",
   "num": "14",
   "name": {
    "si": "විපාකපච්චයෝ'ති",
    "tr": "Vipāka paccayo'ti",
    "en": "Vipākapaccayo'ti"
   },
   "pali": "විපාකා චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං විපාකපච්චයේන පච්චයෝ.",
   "translit": "Vipākā cattāro khandhā arūpino aññamaññaṃ vipākapaccayena paccayo.",
   "sinhala": "අරූපී විපාක ස්කන්ධ සතර ඔවුනොවුන්ට විපාක ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four resultant immaterial aggregates are related to one another by result condition.",
   "gatha": "විපාක ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "විපාක",
   "shortEn": " Vipāka",
   "gathaTr": "Vipāka ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p15",
   "num": "15",
   "name": {
    "si": "ආහාරපච්චයෝ'ති",
    "tr": "Āhāra paccayo'ti",
    "en": "Āhārapaccayo'ti"
   },
   "pali": "කබළිඞ්කාරෝ ආහාරෝ ඉමස්ස කායස්ස ආහාරපච්චයේන පච්චයෝ. අරූපිනෝ ආහාරා සම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං ආහාරපච්චයේන පච්චයෝ.",
   "translit": "Kabaḷiṅkāro āhāro imassa kāyassa āhārapaccayena paccayo. Arūpino āhārā sampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ āhārapaccayena paccayo.",
   "sinhala": "කබලිංකාර ආහාරය මේ කයට ආහාර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. අරූපී ආහාර සම්ප්‍රයුක්ත ධර්මයන්ට හා ඒ නිසා උපදින රූපයන්ට ආහාර ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Edible food is related by nutriment condition to this body; the immaterial nutriments are related to their associated states and to the matter arising from them.",
   "gatha": "ආහාර ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "ආහාර",
   "shortEn": "Āhāra",
   "gathaTr": "Āhāra ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p16",
   "num": "16",
   "name": {
    "si": "ඉන්ද්‍රියපච්චයෝ'ති",
    "tr": "Indriya paccayo'ti",
    "en": "Indriyapaccayo'ti"
   },
   "pali": "චක්ඛුන්ද්‍රියං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. සෝතින්ද්‍රියං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. ඝානින්ද්‍රියං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. ජිව්හින්ද්‍රියං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. කායින්ද්‍රියං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. රූපජීවිතින්ද්‍රියං කටත්තාරූපානං ඉන්ද්‍රියපච්චයේන පච්චයෝ. අරූපිනෝ ඉන්ද්‍රියා සම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං ඉන්ද්‍රියපච්චයේන පච්චයෝ.",
   "translit": "Cakkhundriyaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ indriyapaccayena paccayo. Sotindriyaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ indriyapaccayena paccayo. Ghānindriyaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ indriyapaccayena paccayo. Jivhindriyaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ indriyapaccayena paccayo. Kāyindriyaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ indriyapaccayena paccayo. Rūpajīvitindriyaṃ kaṭattārūpānaṃ indriyapaccayena paccayo. Arūpino indriyā sampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ indriyapaccayena paccayo.",
   "sinhala": "චක්ඛුන්ද්‍රිය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතින්ද්‍රිය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානින්ද්‍රිය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හින්ද්‍රිය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායින්ද්‍රිය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපජීවිතින්ද්‍රිය කර්මජ රූපයන්ට ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. අරූපී ඉන්ද්‍රියෝ සම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද ඉන්ද්‍රිය ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The eye, ear, nose, tongue and body faculties are related by faculty condition to their consciousness elements and associated states; the material life faculty to kamma-born matter; and the immaterial faculties to their associated states and the matter arising from them.",
   "gatha": "ඉන්ද්‍රිය ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "ඉන්ද්‍රිය",
   "shortEn": "Indriya",
   "gathaTr": "Indriya ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p17",
   "num": "17",
   "name": {
    "si": "ඣානපච්චයෝ'ති",
    "tr": "Jhāna paccayo'ti",
    "en": "Jhānapaccayo'ti"
   },
   "pali": "ඣානඞ්ගානි ඣානසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං ඣානපච්චයේන පච්චයෝ.",
   "translit": "Jhānaṅgāni jhānasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ jhānapaccayena paccayo.",
   "sinhala": "ඣාන අංගයෝ ඣානසම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද ඣාන ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The jhāna factors are related by jhāna condition to the states associated with them and to the matter arising from them.",
   "gatha": "ඣාන පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "ඣාන",
   "shortEn": "Jhāna",
   "gathaTr": "Jhāna paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p18",
   "num": "18",
   "name": {
    "si": "මග්ගපච්චයෝ'ති",
    "tr": "Magga paccayo'ti",
    "en": "Maggapaccayo'ti"
   },
   "pali": "මග්ගඞ්ගානි මග්ගසම්පයුත්තකානං ධම්මානං තං සමුට්ඨානානඤ්ච රූපානං මග්ගපච්චයේන පච්චයෝ.",
   "translit": "Maggaṅgāni maggasampayuttakānaṃ dhammānaṃ taṃ samuṭṭhānānañca rūpānaṃ maggapaccayena paccayo.",
   "sinhala": "මාර්ග අංගයෝ මාර්ගසම්ප්‍රයුක්ත ධර්මයන්ටද ඒ නිසා උපදින රූපයන්ටද මාර්ග ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The path factors are related by path condition to the states associated with them and to the matter arising from them.",
   "gatha": "මග්ග පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "මග්ග",
   "shortEn": "Magga",
   "gathaTr": "Magga paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p19",
   "num": "19",
   "name": {
    "si": "සම්පයුත්තපච්චයෝ'ති",
    "tr": "Sampayutta paccayo'ti",
    "en": "Sampayuttapaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං සම්පයුත්තපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññaṃ sampayuttapaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට සම්ප්‍රයුක්ත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four immaterial aggregates are related to one another by association condition.",
   "gatha": "සම්පයුත්ත ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "සම්පයුත්ත",
   "shortEn": "Sampayutta",
   "gathaTr": "Sampayutta ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
    {
   "id": "p20",
   "num": "20",
   "name": {
    "si": "විප්පයුත්තපච්චයෝ'ති",
    "tr": "Vippayutta paccayo'ti",
    "en": "Vippayuttapaccayo'ti"
   },
   "pali": "රූපිනෝ ධම්මා අරූපීනං ධම්මානං විප්පයුත්තපච්චයේන පච්චයෝ. අරූපිනෝ ධම්මා රූපීනං ධම්මානං විප්පයුත්තපච්චයේන පච්චයෝ.",
   "translit": "Rūpino dhammā arūpīnaṃ dhammānaṃ vippayuttapaccayena paccayo. Arūpino dhammā rūpīnaṃ dhammānaṃ vippayuttapaccayena paccayo.",
   "sinhala": "රූපී ධර්ම අරූපී ධර්මයන්ට විප්පයුත්ත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. අරූපී ධර්ම රූපී ධර්මයන්ට විප්පයුත්ත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Material states are related by dissociation condition to immaterial states, and immaterial states to material states.",
   "gatha": "විප්පයුත්ත ඤාණජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "විප්පයුත්ත",
   "shortEn": "Vippayutta",
   "gathaTr": "Vippayutta ñāṇajāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p21",
   "num": "21",
   "name": {
    "si": "අත්ථිපච්චයෝ'ති",
    "tr": "Atthi paccayo'ti",
    "en": "Atthipaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං අත්ථිපච්චයේන පච්චයෝ. චත්තාරෝ මහාභූතා අඤ්ඤමඤ්ඤං අත්ථිපච්චයේන පච්චයෝ. ඔක්කන්තික්ඛණේ නාමරූපං අඤ්ඤමඤ්ඤං අත්ථිපච්චයේන පච්චයෝ. චිත්තචේතසිකා ධම්මා චිත්තසමුට්ඨානානං රූපානං අත්ථිපච්චයේන පච්චයෝ. මහාභූතා උපාදාය රූපානං අත්ථිපච්චයේන පච්චයෝ. චක්ඛායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. සෝතායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. ඝානායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. ජිව්හායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. කායායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. රූපායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. සද්දායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. ගන්ධායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. රසායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. ඵොට්ඨබ්බායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. රූපායතනං, සද්දායතනං, ගන්ධායතනං, රසායතනං, ඵොට්ඨබ්බායතනං මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ. යං රූපං නිස්සාය මනෝධාතු ච මනෝවිඤ්ඤාණධාතු ච වත්තන්ති, තං රූපං මනෝධාතුයා ච මනෝවිඤ්ඤාණධාතුයා ච තං සම්පයුත්තකානඤ්ච ධම්මානං අත්ථිපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññaṃ atthipaccayena paccayo. Cattāro mahābhūtā aññamaññaṃ atthipaccayena paccayo. Okkantikkhaṇe nāmarūpaṃ aññamaññaṃ atthipaccayena paccayo. Cittacetasikā dhammā cittasamuṭṭhānānaṃ rūpānaṃ atthipaccayena paccayo. Mahābhūtā upādāya rūpānaṃ atthipaccayena paccayo. Cakkhāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Sotāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Ghānāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Jivhāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Kāyāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Rūpāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Saddāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Gandhāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Rasāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Phoṭṭhabbāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Rūpāyatanaṃ, saddāyatanaṃ, gandhāyatanaṃ, rasāyatanaṃ, phoṭṭhabbāyatanaṃ manodhātuyā taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo. Yaṃ rūpaṃ nissāya manodhātu ca manoviññāṇadhātu ca vattanti, taṃ rūpaṃ manodhātuyā ca manoviññāṇadhātuyā ca taṃ sampayuttakānañca dhammānaṃ atthipaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සතර මහාධාතූහු ඔවුනොවුන්ට අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහි නාම-රූප ඔවුනොවුන්ට අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චිත්ත චෛතසික ධර්මයෝ චිත්තජ රූපයන්ට අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මහාභූත සතර උපාදායරූපයන්ට අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චක්ඛායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සද්දායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ගන්ධායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රසායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඵොට්ඨබ්බායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය, සද්දායතනය, ගන්ධායතනය, රසායතනය, ඵොට්ඨබ්බායතනය මනෝධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් රූපයක් නිශ්‍රයකොට මනෝධාතුවද මනෝවිඤ්ඤාණධාතුවද පවතිත්ද ඒ රූපය මනෝධාතුවටද මනෝවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four immaterial aggregates, the four great elements, and mind-and-matter at rebirth-linking are related to one another by presence condition. Mind and mental factors are related to mind-born matter, great elements to derived matter, the sense-bases to their consciousness elements, the sense-objects to mind-element, and the physical base to mind-element and mind-consciousness.",
   "gatha": "අත්ථි පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "අත්ථි",
   "shortEn": "Atthi",
   "gathaTr": "Atthi paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p22",
   "num": "22",
   "name": {
    "si": "නත්ථිපච්චයෝ'ති",
    "tr": "Natthi paccayo'ti",
    "en": "Natthipaccayo'ti"
   },
   "pali": "සමනන්තරනිරුද්ධා චිත්තචේතසිකා ධම්මා පටුප්පන්නානං චිත්තචේතසිකානං ධම්මානං නත්ථිපච්චයේන පච්චයෝ.",
   "translit": "Samanantaraniruddhā cittacetasikā dhammā paṭuppannānaṃ cittacetasikānaṃ dhammānaṃ natthipaccayena paccayo.",
   "sinhala": "සමනන්තර නිරුද්ධ වූ චිත්ත චෛතසික ධර්මයෝ වර්තමාන චිත්ත චෛතසික ධර්මයන්ට නත්ථි ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Mind and mental factors that have just ceased are related by absence condition to the present mind and mental factors.",
   "gatha": "නත්ථි පච්චය ඤාණේන\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "නත්ථි",
   "shortEn": "Natthi",
   "gathaTr": "Natthi paccaya ñāṇena\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p23",
   "num": "23",
   "name": {
    "si": "විගතපච්චයෝ'ති",
    "tr": "Vigata paccayo'ti",
    "en": "Vigatapaccayo'ti"
   },
   "pali": "සමනන්තරවිගතා චිත්තචේතසිකා ධම්මා පටුප්පන්නානං චිත්තචේතසිකානං ධම්මානං විගතපච්චයේන පච්චයෝ.",
   "translit": "Samanantaravigatā cittacetasikā dhammā paṭuppannānaṃ cittacetasikānaṃ dhammānaṃ vigatapaccayena paccayo.",
   "sinhala": "සමනන්තර විගත වූ චිත්ත චෛතසික ධර්මයෝ වර්තමාන චිත්ත චෛතසික ධර්මයන්ට විගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "Mind and mental factors that have just passed away are related by disappearance condition to the present mind and mental factors.",
   "gatha": "විගත ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "විගත",
   "shortEn": "Vigata",
   "gathaTr": "Vigata ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
  {
   "id": "p24",
   "num": "24",
   "name": {
    "si": "අවිගතපච්චයෝ'ති",
    "tr": "Avigata paccayo'ti",
    "en": "Avigatapaccayo'ti"
   },
   "pali": "චත්තාරෝ ඛන්ධා අරූපිනෝ අඤ්ඤමඤ්ඤං අවිගතපච්චයේන පච්චයෝ. චත්තාරෝ මහාභූතා අඤ්ඤමඤ්ඤං අවිගතපච්චයේන පච්චයෝ. ඔක්කන්තික්ඛණේ නාමරූපං අඤ්ඤමඤ්ඤං අවිගතපච්චයේන පච්චයෝ. චිත්තචේතසිකා ධම්මා චිත්තසමුට්ඨානානං රූපානං අවිගතපච්චයේන පච්චයෝ. මහාභූතා උපාදාය රූපානං අවිගතපච්චයේන පච්චයෝ. චක්ඛායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. සෝතායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. ඝානායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. ජිව්හායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. කායායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. රූපායතනං චක්ඛුවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. සද්දායතනං සෝතවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. ගන්ධායතනං ඝානවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. රසායතනං ජිව්හාවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. ඵොට්ඨබ්බායතනං කායවිඤ්ඤාණධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. රූපායතනං, සද්දායතනං, ගන්ධායතනං, රසායතනං, ඵොට්ඨබ්බායතනං මනෝධාතුයා තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ. යං රූපං නිස්සාය මනෝධාතු ච මනෝවිඤ්ඤාණධාතු ච වත්තන්ති, තං රූපං මනෝධාතුයා ච මනෝවිඤ්ඤාණධාතුයා ච තං සම්පයුත්තකානඤ්ච ධම්මානං අවිගතපච්චයේන පච්චයෝ.",
   "translit": "Cattāro khandhā arūpino aññamaññaṃ avigatapaccayena paccayo. Cattāro mahābhūtā aññamaññaṃ avigatapaccayena paccayo. Okkantikkhaṇe nāmarūpaṃ aññamaññaṃ avigatapaccayena paccayo. Cittacetasikā dhammā cittasamuṭṭhānānaṃ rūpānaṃ avigatapaccayena paccayo. Mahābhūtā upādāya rūpānaṃ avigatapaccayena paccayo. Cakkhāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Sotāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Ghānāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Jivhāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Kāyāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Rūpāyatanaṃ cakkhuviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Saddāyatanaṃ sotaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Gandhāyatanaṃ ghānaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Rasāyatanaṃ jivhāviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Phoṭṭhabbāyatanaṃ kāyaviññāṇadhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Rūpāyatanaṃ, saddāyatanaṃ, gandhāyatanaṃ, rasāyatanaṃ, phoṭṭhabbāyatanaṃ manodhātuyā taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo. Yaṃ rūpaṃ nissāya manodhātu ca manoviññāṇadhātu ca vattanti, taṃ rūpaṃ manodhātuyā ca manoviññāṇadhātuyā ca taṃ sampayuttakānañca dhammānaṃ avigatapaccayena paccayo.",
   "sinhala": "අරූපී ස්කන්ධ සතර ඔවුනොවුන්ට අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සතර මහාධාතූහු ඔවුනොවුන්ට අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ප්‍රතිසන්ධික්ෂණයෙහි නාම-රූප ඔවුනොවුන්ට අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චිත්ත චෛතසික ධර්මයෝ චිත්තජ රූපයන්ට අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. මහාභූත සතර උපාදායරූපයන්ට අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. චක්ඛායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සෝතායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඝානායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ජිව්හායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. කායායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය චක්ඛුවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. සද්දායතනය සෝතවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ගන්ධායතනය ඝානවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රසායතනය ජිව්හාවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. ඵොට්ඨබ්බායතනය කායවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. රූපායතනය, සද්දායතනය, ගන්ධායතනය, රසායතනය, ඵොට්ඨබ්බායතනය මනෝධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ. යම් රූපයක් නිශ්‍රයකොට මනෝධාතුවද මනෝවිඤ්ඤාණධාතුවද පවතිත්ද ඒ රූපය මනෝධාතුවටද මනෝවිඤ්ඤාණධාතුවටද ඒ හා යෙදුන ධර්මයන්ටද අවිගත ප්‍රත්‍යයෙන් ප්‍රත්‍ය වේ.",
   "english": "The four immaterial aggregates, the four great elements, and mind-and-matter at rebirth-linking are related to one another by non-disappearance condition; likewise mind to mind-born matter, great elements to derived matter, the sense-bases and objects to the consciousness elements, and the physical base to mind-element and mind-consciousness.",
   "gatha": "අවිගත ඤාණ සංජාත\nඡබ්බණ්ණ රංසි භාසුරං සම්බුද්ධං සබ්බ දස්සාවිං\nවන්දාමි පූජයාමහං",
   "short": "අවිගත",
   "shortEn": "Avigata",
   "gathaTr": "Avigata ñāṇa saṃjāta\nChabbaṇṇa raṃsi bhāsuraṃ sambuddhaṃ sabba dassāviṃ\nVandāmi pūjayāmahaṃ"
  },
 ],
 "ending": {
  "pali": "ඒතේන සච්චවජ්ජේන සොත්ථි මේ හෝතු සබ්බදා\nඒතේන සච්චවජ්ජේන සොත්ථි  තෙ හෝතු සබ්බදා\nඒතේන සච්චවජ්ජේන සොත්ථි තෙ හෝතු සබ්බදා\n\nසාධු ! සාධු ! සාධු !\n\nබුද්ධසාසනං චිරං තිට්ඨතු !!!",
  "translit": "Etena saccavajjena sotthi me hotu sabbadā\nEtena saccavajjena sotthi me hotu sabbadā\nEtena saccavajjena sotthi me hotu sabbadā\n\nSādhu! Sādhu! Sādhu!\n\nBuddhasāsanaṃ ciraṃ tiṭṭhatu!!!"
 },
 "footer": {
  "bless": {
   "si": "මෙම සමන්ත පට්ඨාන ධර්ම වන්දනාව පරිශීලනය කරන ඔබ සැමට,  චතුරාර්ය සත්‍යය අවබෝධයට නුවණ ලැබේවා!\nසියලු සත්ත්වයෝ සුවපත් වෙත්වා! තෙරුවන් සරණයි 🙏",
   "en": "May all who read this Samanta Paṭṭhāna Dhamma Vandanā attain the wisdom of the infinite modes of conditionality!\nMay all beings be well and happy! 🙏"
  },
  "thanks": {
   "si": "ඉදං මේ පුඤ්ඤං සබ්බසත්තානං හෝතු !",
   "en": "Idaṃ me puññaṃ sabbasattānaṃ hotu"
  }
 },
 "title": {
  "si": "සමන්ත පට්ඨාන ධර්ම වන්දනාව",
  "en": "Samanta Paṭṭhāna Dhamma Vandanā"
 },
 "subtitle": {
  "si": "වතුවීසති පච්චය",
  "en": "The Twenty-Four Conditional Relations"
 },
 "navLabel": {
  "si": "ප්‍රත්‍යය 24",
  "en": "24 Conditions"
 },
 "chipNum": true
};
   