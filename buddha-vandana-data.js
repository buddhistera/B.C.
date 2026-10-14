/* =====================================================================
   buddha-vandana-data.js  —  සජ්ඣායනය (Chanting) මොඩියුලය: බුද්ධ වන්දනාව
   ---------------------------------------------------------------------
   * chanting.js විසින් අදාළ tab එක පළමුවරට විවෘත කරන විට පමණක් load කරයි.
   * ව්‍යුහය patthana-data.js හා සමානයි:
       { id, group, name:{si,en}, pali, translit, sinhala, english }
       - pali      : සිංහල අකුරින් පාළි   (සිංහල තිරයේ පෙන්වයි)
       - translit  : Roman / IAST පාළි    (English තිරයේ පෙන්වයි)
       - sinhala   : සිංහල අර්ථය   - english : English meaning
   * කොටස් 4ක්: උදෑසන / දහවල / රාත්‍රී වන්දනාව සහ බෝධි පූජාව (groups).
   ===================================================================== */
(window.ChantingModules = window.ChantingModules || {}).vandana = {
 "id": "vandana",
 "meaningToggle": true,
 "hidePaliLabel": true,
 "navMode": "groups",
 "navLabel": {
  "si": "වන්දනා කොටස්",
  "en": "Sections"
 },
 "title": {
  "si": "බුද්ධ වන්දනාව",
  "en": "Buddha Vandanā"
 },
 "subtitle": {
  "si": "ශ්‍රී කල්‍යාණී යෝගාශ්‍රමීය වන්දනා ක්‍රමය",
  "en": "Sri Kalyāṇī Yogāśramīya Vandanā Method"
 },
 "groups": [
  {
   "id": "morning",
   "label": {
    "si": "උදෑසන වන්දනාව",
    "en": "Morning Vandanā"
   },
   "short": {
    "si": "උදෑසන වන්දනාව",
    "en": "Morning Vandanā"
   }
  },
  {
   "id": "midday",
   "label": {
    "si": "දහවල වන්දනාව",
    "en": "Midday Vandanā"
   },
   "short": {
    "si": "දහවල වන්දනාව",
    "en": "Midday Vandanā"
   }
  },
  {
   "id": "evening",
   "label": {
    "si": "රාත්‍රී වන්දනාව",
    "en": "Evening Vandanā"
   },
   "short": {
    "si": "රාත්‍රී වන්දනාව",
    "en": "Evening Vandanā"
   }
  },
  {
   "id": "bodhi",
   "label": {
    "si": "බෝධි පූජාව",
    "en": "Bodhi Pūjā"
   },
   "short": {
    "si": "බෝධි වන්දනාව",
    "en": "Bodhi Vandanā"
   }
  }
 ],
 "items": [
  {
   "id": "m1",
   "group": "morning",
   "name": {
    "si": "නමස්කාරය",
    "en": "Homage"
   },
   "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස !!!",
   "translit": "Namo tassa bhagavato arahato sammā sambuddhassa !!!",
   
  },
  {
   "id": "m2",
   "group": "morning",
   "name": {
    "si": "ආරාධනාව",
    "en": "Invitation"
   },
   "pali": "යාවතා භගවා ලොකෙ - තිට්ඨෙය්‍ය තව සාසනං\nතාවතා පතිගණ්හාතු - පූජා ලොකානුකම්පයා",
   "translit": "Yāvatā bhagavā loke - tiṭṭheyya tava sāsanaṃ\ntāvatā patigaṇhātu - pūjā lokānukampayā",
   "sinhala": "භාග්‍යවතුන් වහන්ස ! යම්තාක් ඔබ ශාසනය ලොවැ පවතී නම්, ඒතාක් ලෝකානුකම්පාවෙන් සියලු පූජාවන් පිළිගන්නා සේක්වා !",
   "english": "Blessed One, for as long as Your Dispensation endures in the world, for that long may You, out of compassion for the world, accept all these offerings!"
  },
  {
   "id": "m3",
   "group": "morning",
   "name": {
    "si": "පහන් පූජාව",
    "en": "Offering of Lamps"
   },
   "pali": "ගන්ධතෙලප්ප දිත්තෙන - දීපෙන තම ධංසිනා\nතිලොක දීපං සම්බුද්ධං - පූජයාමි තමොනුදං",
   "translit": "Gandhatelappa dittena - dīpena tama dhaṃsinā\ntiloka dīpaṃ sambuddhaṃ - pūjayāmi tamonudaṃ",
   "sinhala": "සුවඳ තෙලින් දල්වූ, අදුර දුරලන්නා වූ මේ පහනින් තුන් ලොවට පහනක් වූ, මෝහාන්ධකාරය දුරුලු බුදුරජාණන් වහන්සේ පුදමි.",
   "english": "With this lamp lit with fragrant oil, which dispels the darkness, I honour the Perfectly Awakened One, the lamp of the three worlds, who has dispelled the darkness of delusion."
  },
  {
   "id": "m4",
   "group": "morning",
   "name": {
    "si": "සුවඳ පූජාව",
    "en": "Offering of Fragrance"
   },
   "pali": "සුගන්ධිකාය වදනං - අනන්ත ගුණ ගන්ධිනං\nසුගන්ධිනාහං ගන්ධෙන - පූජයාමි තථාගතං",
   "translit": "Sugandhikāya vadanaṃ - ananta guṇa gandhinaṃ\nsugandhināhaṃ gandhena - pūjayāmi tathāgataṃ",
   "sinhala": "සුවඳවත් කයක් හා ශ්‍රී මුඛයක්ද ඇති අනන්ත වූ ගුණ සුවදින් සුවඳවත් වූ තථාගත බුදුරජාණන් වහන්සේ මෙම සුවදින් පූජා කරමි. පූජා වේවා !",
   "english": "I honour the Tathāgata, whose body and face are fragrant, and who is perfumed with the fragrance of boundless virtues, with this fragrance. May this offering be accomplished!"
  },
  {
   "id": "m5",
   "group": "morning",
   "name": {
    "si": "පැන් පූජාව",
    "en": "Offering of Water"
   },
   "pali": "සුගන්ධං සීතලං කප්පං - පසන්න මධුරං සුභං\nපානීය මෙතං භගවා - පතිගණ්හාතු මුත්තම",
   "translit": "Sugandhaṃ sītalaṃ kappaṃ - pasanna madhuraṃ subhaṃ\npānīya metaṃ bhagavā - patigaṇhātu muttama",
   "sinhala": "උතුම් භාග්‍යවතුන් වහන්ස ! සුවදින් සුවඳවත් වූ ද සිහිල් වූ ද කැප වූද, පහන්, මිහිරි, පිවිතුරු මේ පැන් පිළිගන්නා සේක්වා !\n\nසාධු ! සාධු ! සාධු !",
   "english": "Supreme Blessed One, may You accept this water, which is fragrant, cool, suitable, clear, sweet and pure!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m6",
   "group": "morning",
   "name": {
    "si": "(කැඳ , තේ) ගිලන්පස පූජාව",
    "en": "Offering of Medicinal Drink (Porridge, Tea)"
   },
   "pali": "අධිවාසෙතු නො භන්තෙ (තරලං) පණීතං බීර පානකං\nඅනුකම්පං උපාදාය  පතිගණ්හාතු මුත්තම",
   "translit": "Adhivāsetu no bhante (taralaṃ) paṇītaṃ bīra pānakaṃ\nanukampaṃ upādāya  patigaṇhātu muttama",
   "sinhala": "ස්වාමීනි ! අපගේ ආරාධනාව ඉවසන සේක්වා ! අප විසින් සකස් කළ මේ ප්‍රණීත ක්ෂීරපානය අනුකම්පාවෙන් පිළිගන්නා සේක්වා !",
   "english": "Venerable Sir, may You accept our invitation! Out of compassion, may You accept this excellent milk-drink that we have prepared, O Supreme One!"
  },
  {
   "id": "m7",
   "group": "morning",
   "name": {
    "si": "මල් පූජාව",
    "en": "Offering of Flowers"
   },
   "pali": "වණ්ණ ගන්ධ ගුණොපෙතං එතං කුසුම සන්තතිං\nපූජයාමි මුනින්දස්ස - සිරිපාද සරොරුහෙ\n\nපූජෙමි බුද්ධං කුසුමෙන නෙන\nපුඤ්ඤෙන මෙතෙන ලභාමි මොක්ඛං\nපුප්ඵං මිලායාති යථා ඉදං මෙ\nකායො තථායාති විනාස භාවං",
   "translit": "Vaṇṇa gandha guṇopetaṃ etaṃ kusuma santatiṃ\npūjayāmi munindassa - siripāda saroruhe\n\nPūjemi buddhaṃ kusumena nena\npuññena metena labhāmi mokkhaṃ\npupphaṃ milāyāti yathā idaṃ me\nkāyo tathāyāti vināsa bhāvaṃ",
   "sinhala": "මනා වර්ණයන් හා සුගන්ධයෙන් යුක්ත මේ මල් සමූහයෙන් මුනීන්ද්‍රයන් වහන්සේගේ ශ්‍රී පාද පද්මයෙහි පූජා කරමි.\n\nමම මේ මලින් බුදුරජාණන් වහන්සේ පුදන්නෙමි. මේ පිනෙන් නිවන් ලබම්වා ! මේ මල මැලවෙන්නාසේ මාගේ සිරුරද විනාශයට පත්වන්නේය.",
   "english": "With this cluster of flowers, endowed with fine colour and fragrance, I make offering at the lotus-feet of the Lord of Sages.\n\nI honour the Buddha with these flowers. By this merit may I attain Nibbāna! Just as this flower withers, so too my body will go to destruction."
  },
  {
   "id": "m8",
   "group": "morning",
   "name": {
    "si": "බුද්ධ වන්දනාව",
    "en": "Buddha Vandanā"
   },
   "pali": "ඉතිපි සො භගවා අරහං සම්මා සම්බුද්ධො විජ්ජාචරණ සම්පන්නො සුගතො ලොකවිදූ අනුත්තරො පුරිසදම්ම සාරථි සත්ථා දෙව මනුස්සානං බුද්ධො භගවති.\n\nබුද්ධං ජීවිත පරියන්තං සරණං ගච්ඡාමි යෙ ච බුද්ධා අතීතා ච යෙ ච බුද්ධා අනාගතා - පච්චුප්පන්නා ච යෙ බුද්ධා අහං වන්දාමි සබ්බදා, නත්ථි මෙ සරණං අඤ්ඤං, බුද්ධො මෙ සරණං වරං - එතෙන සච්ච වජ්ජෙන හොතු මෙ ජයමංගලං. උත්තමංගෙන වන්දෙහං පාදපංසු වරුත්තමං - බුද්ධෙ යො ඛලිතො දොසො බුද්ධො ඛමතු තං මමං.",
   "translit": "Itipi so bhagavā arahaṃ sammā sambuddho vijjācaraṇa sampanno sugato lokavidū anuttaro purisadamma sārathi satthā deva manussānaṃ buddho bhagavati.\n\nBuddhaṃ jīvita pariyantaṃ saraṇaṃ gacchāmi ye ca buddhā atītā ca ye ca buddhā anāgatā - paccuppannā ca ye buddhā ahaṃ vandāmi sabbadā, natthi me saraṇaṃ aññaṃ, buddho me saraṇaṃ varaṃ - etena sacca vajjena hotu me jayamaṅgalaṃ. Uttamaṅgena vandehaṃ pādapaṃsu varuttamaṃ - buddhe yo khalito doso buddho khamatu taṃ mamaṃ.",
   "sinhala": "ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ මෙසේ ද අර්හත් වන සේක; සම්මා සම්බුද්ධ වන සේක; විද්‍යාචරණ සම්පන්න වන සේක; සුගත වන සේක; ලෝකවිදූ වන සේක; අනුත්තර පුරුෂදම්‍ය සාරථි වන සේක; දෙවි මිනිසුන්ට ශාස්තෘ වන සේක; බුද්ධ වන සේක; භාග්‍යවත් වන සේක.\n\nබුද්ධ රත්නය දිවි හිමියෙන් සරණ යමි.\n\nඅතීත බුද්ධ රත්නයද, අනාගත බුද්ධ රත්නයද වර්තමාන ගෞතම බුද්ධ රත්නයද මම සැම කල්හිම නමස්කාර කරමි. නමස්කාර වේවා!\n\nබුද්ධ රත්නය හැර මට අන් සරණක් නැත්තේ ය. බුද්ධ රත්නය මාගේ උතුම් සරණය වන්නේ ය. ඒ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යයක් වේවා.\n\nභාග්‍යවතුන් වහන්සේගේ සිරිපා පහස ලද දූවිල්ල ද මම හිස මුදුනින් වන්දනා කරමි. බුද්ධ රත්නය කෙරෙහි සිදු වූ මාගේ පමා වරදට භාග්‍යවතුන් වහන්සේ ක්ෂමාවන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "Thus indeed is that Blessed One: Worthy, Perfectly Self-Awakened, accomplished in true knowledge and conduct, Well-Gone, Knower of the worlds, the unsurpassed trainer of persons to be tamed, Teacher of gods and humans, the Awakened One, the Blessed One.\n\nI take refuge in the Buddha for as long as I live.\n\nTo the Buddhas of the past, to the Buddhas of the future, and to the present Buddha Gotama, I pay homage at all times. Homage be to them!\n\nI have no other refuge than the Buddha; the Buddha is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI revere with my head the dust of the Blessed One's holy feet. For any fault I have committed against the Buddha, may the Blessed One forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m9",
   "group": "morning",
   "name": {
    "si": "ධර්ම වන්දනාව",
    "en": "Dhamma Vandanā"
   },
   "pali": "ස්වාක්ඛාතො භගවතා ධම්මො සන්දිට්ඨිකො අකාලිකො ඒහිපස්සිකො ඔපනයිකො පච්චත්තං වෙදිතබ්බො විඤ්ඤූහීති.\n\nධම්මං ජීවිත පරියන්තං සරණං ගච්ඡාමි යෙ ච ධම්මා අතීතා ච යෙ ච ධම්මා අනාගතා - පච්චුප්පන්නා ච යෙ ධම්මා අහං වන්දාමි සබ්බදා, නත්ථි මෙ සරණං අඤ්ඤං, ධම්මො මෙ සරණං වරං - එතෙන සච්ච වජ්ජෙන හොතු මෙ ජයමංගලං. උත්තමංගෙන වන්දෙහං ධම්මං ච තිවිධං වරං - ධම්මෙ යො ඛලිතො දොසො ධම්මො ඛමතු තං මමං.",
   "translit": "Svākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opanayiko paccattaṃ veditabbo viññūhīti.\n\nDhammaṃ jīvita pariyantaṃ saraṇaṃ gacchāmi ye ca dhammā atītā ca ye ca dhammā anāgatā - paccuppannā ca ye dhammā ahaṃ vandāmi sabbadā, natthi me saraṇaṃ aññaṃ, dhammo me saraṇaṃ varaṃ - etena sacca vajjena hotu me jayamaṅgalaṃ. Uttamaṅgena vandehaṃ dhammaṃ ca tividhaṃ varaṃ - dhamme yo khalito doso dhammo khamatu taṃ mamaṃ.",
   "sinhala": "භාග්‍යවතුන් වහන්සේ විසින් ධර්මය මනාකොට දේශනා කරන ලද්දේය; සන්දිට්ඨික වන්නේය; අකාලික වන්නේය; ඒහිපස්සික වන්නේය; ඔපනයික වන්නේය; නුවණැත්තන් විසින් තම තමා තුළම අවබෝධ කළ යුත්තේය.\n\nධර්ම රත්නය දිවි හිමියෙන් සරණ යමි.\n\nඅතීත ධර්ම රත්නයද, අනාගත ධර්ම රත්නයද, වර්තමාන ධර්ම රත්නයද මම සැම කල්හි නමස්කාර කරමි. නමස්කාර වේවා!\n\nධර්ම රත්නය හැර මට අන් සරණක් නැත්තේ ය. ධර්ම රත්නය මාගේ උතුම් සරණය වන්නේ ය. මේ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යක් වේවා.\n\nලොව්තුරු මග-ඵල-නිවන යන ත්‍රිවිධ වූ ධර්ම රත්නයට, මාගේ හිස මුදුනින් නමස්කාර කරමි. නමස්කාර වේවා. ධර්ම රත්නය කෙරෙහි සිදු වූ මාගේ පමා වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "The Dhamma is well proclaimed by the Blessed One, directly visible, timeless, inviting investigation, leading onward, to be personally experienced by the wise.\n\nI take refuge in the Dhamma for as long as I live.\n\nTo the Dhamma of the past, of the future and of the present, I pay homage at all times. Homage be to it!\n\nI have no other refuge than the Dhamma; the Dhamma is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI bow with my head to the Dhamma Gem, which is threefold: the supramundane Path, Fruition and Nibbāna. For any fault I have committed against the Dhamma, may the Dhamma forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m10",
   "group": "morning",
   "name": {
    "si": "සංඝ වන්දනාව",
    "en": "Saṅgha Vandanā"
   },
   "pali": "සුපටිපන්නො භගවතො සාවක සංඝො, උජුපටිපන්නො භගවතො සාවක සංඝො, ඤායපටිපන්නො භගවතො සාවක සංඝො, සාමීචිපටිපන්නො භගවතො සාවක සංඝො යදිදං චත්තාරි පුරිස යුගානි අට්ඨ පුරිස පුග්ගලා එස භගවතො සාවක සංඝො ආහුනෙය්‍යො පාහුනෙය්‍යො දක්ඛිණෙය්‍යො අඤ්ජලිකරණීයො අනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්සාති.\n\nසංඝං ජීවිත පරියන්තං සරණං ගච්ඡාමි යෙ ච සංඝා අතීතා ච යෙ ච සංඝා අනාගතා - පච්චුප්පන්නා ච යෙ සංඝා අහං වන්දාමි සබ්බදා, නත්ථි මෙ සරණං අඤ්ඤං, සංඝො මෙ සරණං වරං - එතෙන සච්ච වජ්ජෙන හොතු මෙ ජයමංගලං. උත්තමංගෙන වන්දෙහං සංඝංච තිවිධොත්තමං - සංඝෙ යො ඛලිතො දොසො සංඝො ඛමතු තං මමං.",
   "translit": "Supaṭipanno bhagavato sāvaka saṅgho, ujupaṭipanno bhagavato sāvaka saṅgho, ñāyapaṭipanno bhagavato sāvaka saṅgho, sāmīcipaṭipanno bhagavato sāvaka saṅgho yadidaṃ cattāri purisa yugāni aṭṭha purisa puggalā esa bhagavato sāvaka saṅgho āhuneyyo pāhuneyyo dakkhiṇeyyo añjalikaraṇīyo anuttaraṃ puññakkhettaṃ lokassāti.\n\nSaṅghaṃ jīvita pariyantaṃ saraṇaṃ gacchāmi ye ca saṅghā atītā ca ye ca saṅghā anāgatā - paccuppannā ca ye saṅghā ahaṃ vandāmi sabbadā, natthi me saraṇaṃ aññaṃ, saṅgho me saraṇaṃ varaṃ - etena sacca vajjena hotu me jayamaṅgalaṃ. Uttamaṅgena vandehaṃ saṅghañca tividhottamaṃ - saṅghe yo khalito doso saṅgho khamatu taṃ mamaṃ.",
   "sinhala": "භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා මනාව පිළිපන්නේය; ඍජුව පිළිපන්නේය; නිවන් අරමුණු කොට පිළිපන්නේය; සුදුසු පිළිවෙතින් පිළිපන්නේය. එනම් සතර යුගල වශයෙන් පුරුෂ පුද්ගලයෝ අට දෙනෙක් වෙත්ද, ඒ භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා ආහුනෙය්‍ය (ආගන්තුක සත්කාරයට සුදුසු) වන්නේය; පාහුනෙය්‍ය (දුර සිට ගෙනෙන දානයට සුදුසු) වන්නේය; දක්ඛිණෙය්‍ය (දක්ෂිණාවට සුදුසු) වන්නේය; අඤ්ජලිකරණීය (දොහොත් මුදුනේ තබා වැඳීමට සුදුසු) වන්නේය; ලෝකයාගේ අනුත්තර පුණ්‍යක්ෂේත්‍රය වන්නේය.\n\nසංඝ රත්නය මම දිවි හිමියෙන් සරණ යමි.\n\nඅතීත සංඝ රත්නයද අනාගත සංඝ රත්නයද වර්තමාන සංඝ රත්නයද මම සැම කල්හී නමස්කාර කරමි. නමස්කාර වේවා!\n\nසංඝ රත්නය හැර මට අන් සරණක් නැත්තේය. සංඝ රත්නය මාගේ උතුම් සරණය වන්නේ ය. මේ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යක් වේවා!\n\nසම්මුති-සේඛ-අසේඛ යන ත්‍රිවිධ උත්තම සංඝ රත්නයට මම උත්තමංගයෙන් නමස්කාර කරමි. නමස්කාර වේවා! මාගෙන් සිදු වූ පමා වරදට සංඝරත්නය මට ක්ෂමා වන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "The Saṅgha of the Blessed One's disciples has practised well, practised uprightly, practised rightly, and practised properly — that is, the four pairs of persons, the eight types of individuals. That Saṅgha of the Blessed One's disciples is worthy of gifts, worthy of hospitality, worthy of offerings, worthy of reverential salutation, the unsurpassed field of merit for the world.\n\nI take refuge in the Saṅgha for as long as I live.\n\nTo the Saṅgha of the past, of the future and of the present, I pay homage at all times. Homage be to it!\n\nI have no other refuge than the Saṅgha; the Saṅgha is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI bow with my head to the threefold supreme Saṅgha — the conventional (sammuti) Saṅgha, the trainees (sekha) and the non-trainees (asekha). For any fault I have committed, may the Saṅgha forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m11",
   "group": "morning",
   "name": {
    "si": "තෙරුවන් ගුණ මුදුන්පත් කිරීම",
    "en": "Placing the Triple Gem's Virtues upon the Crown"
   },
   "pali": "බුද්ධ ධම්මා ච පච්චෙක  බුද්ධ සංඝා ච සාමිකා\nදාසො වාහස්මි මෙතෙසං  ගුණං ඨාතු සිරෙ සදා\n\nතිසරණං තිලක්ඛණං  උපෙක්ඛං නිබ්බානමන්තිමං\nසුවන්දෙ සිරසා නිච්චං ලභාමි තිවිධා මහං\n\nතිසරණං ච සිරෙ ඨාතු - සිරෙ ඨාතු තිලක්ඛණං\nඋපෙක්ඛා ච සිරෙ ඨාතු නනිබ්බානං ඨාතු මෙ සිරෙ.\n\nබුද්ධෙ සකරුණෙ වන්දෙ  ධම්මෙ පච්චෙක සම්බුද්ධෙ\nසංඝෙ ච සිරසායෙව  තිධා නිච්චං නමාමහං\n\nනමාමි සත්ථුනො වාදප්පමාද වචනන්තිමං\nසබ්බෙපි චෙතියෙ වන්දෙ - උපජ්ඣාචරියෙ මමං\nමය්හං පණාමතෙජෙන - චිත්තං පාපෙහි මුච්චතන්ති",
   "translit": "Buddha dhammā ca pacceka - buddha saṅghā ca sāmikā\ndāso vāhasmi metesaṃ  guṇaṃ ṭhātu sire sadā\n\nTisaraṇaṃ tilakkhaṇaṃ  upekkhaṃ nibbānamantimaṃ\nsuvande sirasā niccaṃ  labhāmi tividhā mahaṃ\n\nTisaraṇaṃ ca sire ṭhātu - sire ṭhātu tilakkhaṇaṃ\nupekkhā ca sire ṭhātu  nibbānaṃ ṭhātu me sire.\n\nBuddhe sakaruṇe vande  dhamme pacceka sambuddhe\nsaṅghe ca sirasāyeva  tidhā niccaṃ namāmahaṃ\n\nNamāmi satthuno vādappamāda vacanantimaṃ\nsabbepi cetiye vande - upajjhācariye mamaṃ\nmayhaṃ paṇāmatejena - cittaṃ pāpehi muccatanti",
   "sinhala": "බුද්ධ, ධර්ම, සංඝ, යන ත්‍රිවිධරත්නය හා පසේ බුදුවරයන් වහන්සේලා මගේ ස්වාමීහු වෙති. මම මෙහෙකරු වැනි යෙමි. උන්වහන්සේලාගේ ගුණය හැමකල්හිම මාගේ සිරසෙහි පිහිටාවා.\n\nබුද්ධ, ධර්ම, සංඝ යන සරණ තුනද අනිත්‍ය, දුක්ඛ, අනාත්ම, යන ලක්ෂණත්‍රයද, උපේක්ෂාවද, අන්තිම සැපය වූ නිර්වාණයද නිත්‍යයෙන්ම වදිමි. ඒ පිනෙන් මාර්ග ඵලය නිවන් ලබම්වා !\n\nතිසරණය ද, ත්‍රිලක්ෂණයද, උපේක්ෂාවද, නිර්වාණය ද මගේ මස්තකයෙහි පිහිටාවා.\n\nමහා කාරුණික බුදුරජාණන් වහන්සේලාද, උන්වහන්සේලා විසින් දේශිත සද්ධර්මයද පසේ බුදුවරයන් හා ශ්‍රාවක සංඝයාද ත්‍රිවිධද්වාරයෙන් නමස්කාර කරමි.\n\nශාස්තෲන් වහන්සේ වදාළ අප්‍රමාද පදයද සියළු චෛත්‍යයන්ද මාගේ උපාධ්‍යාය ආචාර්යවරයන්ද නමස්කාර කරමි. මේ වන්දනාමය කුසල තේජසින් මාගේ සිත පාපයන් කෙරෙන් මිදේවා.\n\nසාධු ! සාධු ! සාධු !",
   "english": "The Buddhas, the Dhamma, the Paccekabuddhas and the Saṅgha are each my masters; I am as their servant. May their virtues ever abide upon my head.\n\nI ever revere, with bowed head, the Three Refuges, the three characteristics, equanimity, and Nibbāna, the ultimate bliss. By this merit may I attain the Path, Fruition and Nibbāna!\n\nMay the Three Refuges abide upon my head; may the three characteristics abide upon my head; may equanimity abide upon my head; may Nibbāna abide upon my head.\n\nWith a compassionate heart I revere the Buddhas, the Dhamma, the Paccekabuddhas and the Saṅgha; with my head I bow to them ever, in the threefold way (by body, speech and mind).\n\nI revere the Teacher's last words on heedfulness, all the shrines, and my preceptor and teachers. By the power of this homage, may my mind be freed from evil!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m12",
   "group": "morning",
   "name": {
    "si": "චුද්දස බුද්ධ ඤාණ වන්දනාව",
    "en": "Veneration of the Fourteen Buddha-Knowledges"
   },
   "pali": "1. දුක්ඛෙ ඤාණං බුද්ධ ඤාණං\n2. දුක්ඛ සමුදයෙ ඤාණං බුද්ධ ඤාණං\n3. දුක්ඛ නිරොධෙ ඤාණං බුද්ධ ඤාණං\n4. දුක්ඛ නිරොධ ගාමිනි පටිපදාය ඤාණං බුද්ධ ඤාණං\n5. අත්ථ පටිසම්භිදෙ ඤාණං බුද්ධ ඤාණං\n6. ධම්ම පටිසම්භිදෙ ඤාණං බුද්ධ ඤාණං\n7. නිරුත්ති පටිසම්භිදෙ ඤාණං බුද්ධ ඤාණං\n8. පටිභාන පටිසම්භිදෙ ඤාණං බුද්ධ ඤාණං\n9. ඉන්ද්‍රිය පරොපරියත්තෙ ඤාණං බුද්ධ ඤාණං\n10. සත්තානං ආසයානුසයෙ ඤාණං බුද්ධ ඤාණං\n11. යමක පාටිහාරියෙ ඤාණං බුද්ධ ඤාණං\n12. මහාකරුණා සමාපත්තියා ඤාණං බුද්ධ ඤාණං\n13. සබ්බඤ්ඤුත ඤාණං බුද්ධ ඤාණං\n14. අනාවරණ ඤාණං බුද්ධ ඤාණං\n\nඉමානි චුද්දස බුද්ධ ඤාණානි, ඉමෙසං අට්ඨ ඤාණානි සාවකසාධාරණානි, ඡ ඤාණානි අසාධාරණානි සාවකෙහි. ඉමෙහි චුද්දස බුද්ධඤාණෙහි සමන්නාගතං සම්මා සම්බුද්ධං භගවන්තං සිරසා නමාමි.\n\nසාධු ! සාධු ! සාධු !",
   "translit": "1. Dukkhe ñāṇaṃ buddha ñāṇaṃ\n2. Dukkha samudaye ñāṇaṃ buddha ñāṇaṃ\n3. Dukkha nirodhe ñāṇaṃ buddha ñāṇaṃ\n4. Dukkha nirodha gāmini paṭipadāya ñāṇaṃ buddha ñāṇaṃ\n5. Attha paṭisambhide ñāṇaṃ buddha ñāṇaṃ\n6. Dhamma paṭisambhide ñāṇaṃ buddha ñāṇaṃ\n7. Nirutti paṭisambhide ñāṇaṃ buddha ñāṇaṃ\n8. Paṭibhāna paṭisambhide ñāṇaṃ buddha ñāṇaṃ\n9. Indriya paropariyatte ñāṇaṃ buddha ñāṇaṃ\n10. Sattānaṃ āsayānusaye ñāṇaṃ buddha ñāṇaṃ\n11. Yamaka pāṭihāriye ñāṇaṃ buddha ñāṇaṃ\n12. Mahākaruṇā samāpattiyā ñāṇaṃ buddha ñāṇaṃ\n13. Sabbaññuta ñāṇaṃ buddha ñāṇaṃ\n14. Anāvaraṇa ñāṇaṃ buddha ñāṇaṃ\n\nImāni cuddasa buddha ñāṇāni, imesaṃ aṭṭha ñāṇāni sāvakasādhāraṇāni, cha ñāṇāni asādhāraṇāni sāvakehi. Imehi cuddasa buddhañāṇehi samannāgataṃ sammā sambuddhaṃ bhagavantaṃ sirasā namāmi.\n\nSādhu ! Sādhu ! Sādhu !",
   "sinhala": "1. දුක්ඛ ආර්ය සත්‍යයෙහි ඤාණය බුද්ධ ඤාණයයි.\n2. දුක්ඛ සමුදය ආර්ය සත්‍යයෙහි ඤාණය බුද්ධ ඤාණයයි.\n3. දුක්ඛ නිරෝධ ආර්ය සත්‍යයෙහි ඤාණය බුද්ධ ඤාණයයි.\n4. දුක්ඛ නිරෝධගාමිනී ප්‍රතිපදා ආර්ය සත්‍යයෙහි ඤාණය බුද්ධ ඤාණයයි.\n5. අර්ථ ප්‍රතිසම්භිදාවෙහි ඤාණය බුද්ධ ඤාණයයි.\n6. ධර්ම ප්‍රතිසම්භිදාවෙහි ඤාණය බුද්ධ ඤාණයයි.\n7. නිරුක්ති ප්‍රතිසම්භිදාවෙහි ඤාණය බුද්ධ ඤාණයයි.\n8. ප්‍රතිභාන ප්‍රතිසම්භිදාවෙහි ඤාණය බුද්ධ ඤාණයයි.\n9. අන් සත්ත්වයන්ගේ ඉන්ද්‍රියයන්ගේ මෘදු තියුණු බව දන්නා ඤාණය බුද්ධ ඤාණයයි.\n10. සත්ත්වයන්ගේ ආශය අනුශය දන්නා ඤාණය බුද්ධ ඤාණයයි.\n11. යමක ප්‍රාතිහාර්යයෙහි ඤාණය බුද්ධ ඤාණයයි.\n12. මහා කරුණා සමාපත්තියෙහි ඤාණය බුද්ධ ඤාණයයි.\n13. සර්වඥතා ඤාණය බුද්ධ ඤාණයයි.\n14. අනාවරණ ඤාණය බුද්ධ ඤාණයයි.\n\nමේ බුද්ධ ඤාණ දහහතර වෙයි. මින් ඤාණ අටක් ශ්‍රාවකයන් හා සාධාරණ වේ; ඤාණ හයක් ශ්‍රාවකයන්ට අසාධාරණ වේ. මේ බුද්ධ ඤාණ දහහතරින් යුත් සම්මා සම්බුදු භාග්‍යවතුන් වහන්සේට හිසින් නමස්කාර කරමි.\n\nසාධු ! සාධු ! සාධු !",
   "english": "1. Knowledge of suffering is Buddha-knowledge.\n2. Knowledge of the origin of suffering is Buddha-knowledge.\n3. Knowledge of the cessation of suffering is Buddha-knowledge.\n4. Knowledge of the path leading to the cessation of suffering is Buddha-knowledge.\n5. Knowledge of the analytical insight into meaning is Buddha-knowledge.\n6. Knowledge of the analytical insight into the Dhamma is Buddha-knowledge.\n7. Knowledge of the analytical insight into language is Buddha-knowledge.\n8. Knowledge of the analytical insight into ready wit (perspicacity) is Buddha-knowledge.\n9. Knowledge of the faculties of other beings, whether keen or dull, is Buddha-knowledge.\n10. Knowledge of the inclinations and underlying tendencies of beings is Buddha-knowledge.\n11. Knowledge of the Twin Miracle is Buddha-knowledge.\n12. Knowledge of the attainment of Great Compassion is Buddha-knowledge.\n13. Omniscient knowledge is Buddha-knowledge.\n14. Unobstructed knowledge is Buddha-knowledge.\n\nThese are the fourteen Buddha-knowledges. Of these, eight are shared with the disciples and six are not shared with them. I bow with my head to the Perfectly Self-Awakened Blessed One, endowed with these fourteen Buddha-knowledges.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "m13",
   "group": "morning",
   "name": {
    "si": "සත්ත සත්තති ඤාණ වත්ථූනි (සත් සැත්තෑ ඤාණ)",
    "en": "The Seventy-Seven Knowledges"
   },
   "pali": "ජාතිපච්චයා ජරාමරණන්ති ඤාණං, අසති ජාතියා නත්ථි ජරාමරණන්ති ඤාණං, අතීතම්පි අද්ධානං ජාතිපච්චයා ජරාමරණන්ති ඤාණං, අසති ජාතියා නත්ථි ජරාමරණන්ති ඤාණං, අනාගතම්පි අද්ධානං ජාතිපච්චයා ජරාමරණන්ති ඤාණං, අසති ජාතියා නත්ථි ජරාමරණන්ති ඤාණං, යම්පිස්ස තං ධම්මට්ඨිතී ඤාණං තම්පි ඛය ධම්මං වය ධම්මං විරාග ධම්මං නිරොධ ධම්මන්ති ඤාණං\n\nභවපච්චයා ජාතීති ඤාණං, අසති භවස්මිං නත්ථි ජාතීති ඤාණං - පෙ -\n\nඋපාදාන පච්චයා භවොති ඤාණං, අසති උපාදානස්මිං නත්ථි භවොති ඤාණං - පෙ -\n\nතණ්හා පච්චයා උපාදානන්ති ඤාණං, අසති තණ්හාය නත්ථි උපාදානන්ති ඤාණං - පෙ -\n\nවෙදනා පච්චයා තණ්හාති ඤාණං, අසති වෙදනාය නත්ථි තණ්හාති ඤාණං - පෙ -\n\nඵස්ස පච්චයා වෙදනාති ඤාණං, අසති ඵස්සස්මිං නත්ථි වෙදනාති ඤාණං - පෙ -\n\nසළායතන පච්චයා ඵස්සොති ඤාණං, අසති සළායතනස්මිං නත්ථි ඵස්සොති ඤාණං - පෙ -\n\nනාම රූප පච්චයා සළායතනන්ති ඤාණං, අසති නාම රූපස්මිං නත්ථි සළායතනන්ති ඤාණං - පෙ -\n\nවිඤ්ඤාණ පච්චයා නාමරූපන්ති ඤාණං, අසති විඤ්ඤාණස්මිං නත්ථි නාමරූපන්ති ඤාණං - පෙ -\n\nසංඛාර පච්චයා විඤ්ඤාණන්ති ඤාණං, අසති සංඛාරෙසු නත්ථි විඤ්ඤාණන්ති ඤාණං - පෙ -\n\nඅවිජ්ජා පච්චයා සංඛාරාති ඤාණං, අසති අවිජ්ජාය නත්ථි සංඛාරාති ඤාණං, අතීතම්පි අද්ධානං - පෙ - අනාගතම්පි අද්ධානං අවිජ්ජා පච්චයා සංඛාරාති ඤාණං, අසති අවිජ්ජාය නත්ථි සංඛාරාති ඤාණං, යම්පිස්ස තං ධම්මට්ඨිතී ඤාණං තම්පි ඛය ධම්මං වය ධම්මං විරාග ධම්මං නිරොධ ධම්මන්ති ඤාණන්ති\n\nඉමානි සත්ත සත්තති ඤාණානි. ඉමෙහි සත්ත සත්තතියා ඤාණෙහි සමන්නාගතං සම්මා සම්බුද්ධං භගවන්තං සිරසා නමාමි.\n\nසාධු ! සාධු ! සාධු !",
   "translit": "Jātipaccayā jarāmaraṇanti ñāṇaṃ, asati jātiyā natthi jarāmaraṇanti ñāṇaṃ, atītampi addhānaṃ jātipaccayā jarāmaraṇanti ñāṇaṃ, asati jātiyā natthi jarāmaraṇanti ñāṇaṃ, anāgatampi addhānaṃ jātipaccayā jarāmaraṇanti ñāṇaṃ, asati jātiyā natthi jarāmaraṇanti ñāṇaṃ, yampissa taṃ dhammaṭṭhitī ñāṇaṃ tampi khaya dhammaṃ vaya dhammaṃ virāga dhammaṃ nirodha dhammanti ñāṇaṃ\n\nBhavapaccayā jātīti ñāṇaṃ, asati bhavasmiṃ natthi jātīti ñāṇaṃ - pe -\n\nUpādāna paccayā bhavoti ñāṇaṃ, asati upādānasmiṃ natthi bhavoti ñāṇaṃ - pe -\n\nTaṇhā paccayā upādānanti ñāṇaṃ, asati taṇhāya natthi upādānanti ñāṇaṃ - pe -\n\nVedanā paccayā taṇhāti ñāṇaṃ, asati vedanāya natthi taṇhāti ñāṇaṃ - pe -\n\nPhassa paccayā vedanāti ñāṇaṃ, asati phassasmiṃ natthi vedanāti ñāṇaṃ - pe -\n\nSaḷāyatana paccayā phassoti ñāṇaṃ, asati saḷāyatanasmiṃ natthi phassoti ñāṇaṃ - pe -\n\nNāma rūpa paccayā saḷāyatananti ñāṇaṃ, asati nāma rūpasmiṃ natthi saḷāyatananti ñāṇaṃ - pe -\n\nViññāṇa paccayā nāmarūpanti ñāṇaṃ, asati viññāṇasmiṃ natthi nāmarūpanti ñāṇaṃ - pe -\n\nSaṅkhāra paccayā viññāṇanti ñāṇaṃ, asati saṅkhāresu natthi viññāṇanti ñāṇaṃ - pe -\n\nAvijjā paccayā saṅkhārāti ñāṇaṃ, asati avijjāya natthi saṅkhārāti ñāṇaṃ, atītampi addhānaṃ - pe - anāgatampi addhānaṃ avijjā paccayā saṅkhārāti ñāṇaṃ, asati avijjāya natthi saṅkhārāti ñāṇaṃ, yampissa taṃ dhammaṭṭhitī ñāṇaṃ tampi khaya dhammaṃ vaya dhammaṃ virāga dhammaṃ nirodha dhammanti ñāṇanti\n\nImāni satta sattati ñāṇāni. Imehi satta sattatiyā ñāṇehi samannāgataṃ sammā sambuddhaṃ bhagavantaṃ sirasā namāmi.\n\nSādhu ! Sādhu ! Sādhu !",
   "sinhala": "ඉපදීම ඇති කල්හි ජරා මරණ ඇත්තේ යයි දනගන්නා ඤාණය, ඉපදීම නැති කල්හි ජරා මරණ නැත්තේ යයි දනගන්නා ඤාණය. අතීත කාලයෙහිද ඉපදීම නිසා ජරා මරණ ඇතිවී යයි දන්නා නුවණය, ඉපදීම නැති කල්හි ජරාමරණ නැතැයි දන්නා නුවණය. අනාගත කාලයෙහිද, ඉපදීම ඇති කල්හි ජරාමරණ ඇති වන්නේයයි දනගන්නා නුවණය. ඉපදීම නැති කල්හි ජරාමරණ නැතැයි දන්නා නුවණය.\n\nයම් ඒ ප්‍රත්‍යයාකාර ඤාණයක් වන්නේ නම් එය ද ක්ෂයවන සුළුය. ව්‍යය ස්වභාව ඇත්තේය. විරාග ස්වභාව ඇත්තේය. නිරෝධ ස්වභාව ඇත්තේ යයි දන්නා නුවණය.\n\nඉතිරිපද වලට ද මෙසේ සත් ආකාරයකින් නයක්‍රමය යොදා ගත යුතුය.",
   "english": "Knowledge that, when birth exists, ageing-and-death exist; and that, when birth does not exist, ageing-and-death do not exist. Knowledge that in the past too ageing-and-death came to be because of birth, and that where there was no birth there was no ageing-and-death. Knowledge that in the future too ageing-and-death will occur where birth exists, and that where there is no birth there is no ageing-and-death.\n\nWhatever knowledge there is of this stability of the Dhamma (conditionality) is itself subject to destruction, to vanishing, to fading away and to cessation — such is that knowledge.\n\nThe remaining links (becoming, clinging, craving, feeling, contact, the six sense-bases, name-and-form, consciousness, formations and ignorance) are to be treated in the same way, in the sevenfold manner."
  },
  {
   "id": "m14",
   "group": "morning",
   "name": {
    "si": "වත පිරිත් සජ්ඣායනාව",
    "en": "Recitation of the Vata Pirith"
   },
   "pali": "1. කරණීය මෙත්ත සූත්‍රය\n2. \"උදෙතයං චක්ඛුමා එකරාජා\" යනාදි මෝර පිරිතේ මුල් කොටස",
   "translit": "1. The Karaṇīya Mettā Sutta\n2. The opening portion of the Mora Paritta, beginning \"Udetayaṃ cakkhumā ekarājā\""
  },
  {
   "id": "m15",
   "group": "morning",
   "name": {
    "si": "මෛත්‍රී භාවනාව",
    "en": "Loving-kindness Meditation"
   },
   "pali": "අහං අවෙරො හොමි. අබ්‍යාපජ්ඣො හොමි. අනීඝො හොමි. සුඛී අත්තානං පරිහරාමි.\n\nඅහං විය මය්හං ආචරියුපජ්ඣායා මාතා පිතරො හිත සත්තා මජ්ඣත්තික සත්තා වෙරි සත්තා අවෙරා හොන්තු අබ්‍යාපජ්ඣා හොන්තු අනීඝා හොන්තු සුඛී අත්තානං පරිහරන්තු, දුක්ඛා මුච්චන්තු යථාලද්ධ සම්පත්තිතො මාවිගච්ඡන්තු කම්මස්සකා.\n\nඉමස්මිං විහාරෙ ඉමස්මිං ගොචර ගාමෙ ඉමස්මිං නගරෙ ඉමස්මිං ලංකාදීපෙ ඉමස්මිං ජම්බුදීපෙ ඉමස්මිං චක්කවාළෙ ඉස්සර ජනා සීමට්ඨක දෙවතා සබ්බෙ සත්තා, අවෙරා හොන්තු අබ්‍යාපජ්ඣා හොන්තු අනීඝා හොන්තු සුඛී අත්තානං පරිහරන්තු දුක්ඛා මුච්චන්තු යථා ලද්ධ සම්පත්තිතො මාවිගච්ඡන්තු කම්මස්සකා.\n\nපුරත්ථිමාය දිසාය, දක්ඛිණාය දිසාය, පච්ඡිමාය දිසාය, උත්තරාය දිසාය, පුරත්ථිමාය අනුදිසාය, දක්ඛිණාය අනුදිසාය, පච්ඡිමාය අනුදිසාය, උත්තරාය අනුදිසාය, හෙට්ඨිමාය දිසාය, උපරිමාය දිසාය.\n\nසබ්බෙ සත්තා සබ්බෙ පාණා සබ්බෙ භූතා, සබ්බෙ පුග්ගලා සබ්බෙ අත්තභාව පරියාපන්නා, සබ්බා ඉත්ථියො, සබ්බෙ පුරිසා, සබ්බෙ අරියා, සබ්බෙ අනරියා, සබ්බෙ දෙවා, සබ්බෙ මනුස්සා, සබ්බෙ විනිපාතිකා අවෙරා හොන්තු අබ්‍යාපජ්ඣා හොන්තු අනීඝා හොන්තු සුඛී අත්තානං පරිහරන්තු, දුක්ඛා මුච්චන්තු යථා ලද්ධ සම්පත්තිතො මාවිගච්ඡන්තු කම්මස්සකා.",
   "translit": "Ahaṃ avero homi. Abyāpajjho homi. Anīgho homi. Sukhī attānaṃ pariharāmi.\n\nAhaṃ viya mayhaṃ ācariyupajjhāyā mātā pitaro hita sattā majjhattika sattā veri sattā averā hontu abyāpajjhā hontu anīghā hontu sukhī attānaṃ pariharantu, dukkhā muccantu yathāladdha sampattito māvigacchantu kammassakā.\n\nImasmiṃ vihāre imasmiṃ gocara gāme imasmiṃ nagare imasmiṃ laṅkādīpe imasmiṃ jambudīpe imasmiṃ cakkavāḷe issara janā sīmaṭṭhaka devatā sabbe sattā, averā hontu abyāpajjhā hontu anīghā hontu sukhī attānaṃ pariharantu dukkhā muccantu yathā laddha sampattito māvigacchantu kammassakā.\n\nPuratthimāya disāya, dakkhiṇāya disāya, pacchimāya disāya, uttarāya disāya, puratthimāya anudisāya, dakkhiṇāya anudisāya, pacchimāya anudisāya, uttarāya anudisāya, heṭṭhimāya disāya, uparimāya disāya.\n\nSabbe sattā sabbe pāṇā sabbe bhūtā, sabbe puggalā sabbe attabhāva pariyāpannā, sabbā itthiyo, sabbe purisā, sabbe ariyā, sabbe anariyā, sabbe devā, sabbe manussā, sabbe vinipātikā averā hontu abyāpajjhā hontu anīghā hontu sukhī attānaṃ pariharantu, dukkhā muccantu yathā laddha sampattito māvigacchantu kammassakā.",
   "sinhala": "මම වෛර නොකරමි. තරහ නොවෙමි. නිදුක් වෙමි. නීරෝගී වෙමි. සුවපත් වෙමි.\n\nමා මෙන් මගේ ආචාර්ය උපාධ්‍යාය මව්පිය හිත සත්වයෝ ද මැදහත් සත්වයෝද වෛරී සත්වයෝද වෛර නොවෙත්වා. තරහ නොවෙත්වා, නිදුක් වෙත්වා, නීරෝගී වෙත්වා, සුවපත් වෙත්වා, දුකින් මිදෙත්වා, ලද සැපතින් නොපිරිහෙත්වා, කර්මය ස්වකීය කොට ඇත්තාහ.\n\nමේ විහාරයෙහි ද, මේ ගොදුරු ගමෙහි ද, මේ නුවරෙහි ද, මේ ලක්දිවෙහි ද, මේ සක්වළෙහි ද ඉසුරු ජනයෝ ද සීමාස්ථක දෙවියෝ ද, සියලු සත්වයෝ ද වෛර නොවෙත්වා. තරහ නොවෙත්වා. නිදුක් වෙත්වා. නීරෝගි වෙත්වා සුවපත් වෙත්වා. දුකින් මිදෙත්වා. ලද සැපතින් නො පිරිහෙත්වා. කර්මය ස්වකීය කොට ඇත්තාහ.\n\nනැගෙනහිර දිශාවෙහිද, දකුණු දිශාවෙහිද, බටහිර දිශාවෙහිද, උතුරු දිශාවෙහිද, නැගෙනහිර අනු දිශාවෙහිද, දකුණු අනු දිශාවෙහිද, බටහිර අනු දිශාවෙහිද, උතුරු අනු දිශාවෙහිද, යට දිශාවෙහිද, උඩ දිශාවෙහිද, සියලු සත්ත්වයෝද, සියලු ප්‍රාණීහුද, සියලු භූතයෝද, සියලු පුද්ගලයෝද, සියලු ආත්මභාව ඇත්තෝද, සියලු ස්ත්‍රීහුද, සියලු පුරුෂයෝද, සියලු ආර්යයෝද, සියලු අනාර්යයෝද, සියලු දෙවියෝද, සියලු මනුෂ්‍යයෝද, සියලු අපායික සත්වයෝද වෛර නොවෙත්වා. තරහ නොවෙත්වා, නිදුක් වෙත්වා, නිරෝගි වෙත්වා, සුවපත් වෙත්වා, දුකින් මිදෙත්වා, ලද සැපතින් නොපිරි හෙත්වා. කර්මය ස්වකීය කොට ඇත්තාහ.",
   "english": "May I be free from enmity, free from ill-will, free from distress, and may I live happily.\n\nJust as I am, may my teachers, preceptors, parents, beloved beings, neutral beings and hostile beings be free from enmity, free from ill-will, free from distress, and live happily. May they be freed from suffering and not be parted from the good fortune they have gained. All beings are owners of their kamma.\n\nIn this monastery, in this alms-resort village, in this city, in this island of Laṅkā, in Jambudīpa, in this world-system — the rulers, the people, the guardian deities of the boundary and all beings — may they be free from enmity, free from ill-will, free from distress, and live happily. May they be freed from suffering and not be parted from the good fortune they have gained. All beings are owners of their kamma.\n\nIn the east, south, west and north; in the north-east, south-east, south-west and north-west; below and above — all beings, all living creatures, all who have come to be, all individuals, all who have a personal existence, all women, all men, all noble ones, all worldlings, all devas, all humans, all those in the lower realms: may they be free from enmity, free from ill-will, free from distress, and live happily. May they be freed from suffering and not be parted from the good fortune they have gained. All beings are owners of their kamma."
  },
  {
   "id": "m16",
   "group": "morning",
   "name": {
    "si": "බුද්ධානුස්සති භාවනාව",
    "en": "Meditation on the Recollection of the Buddha"
   },
   "pali": "1. බුද්ධානුස්සති මෙත්තා ච - අසුභං මරණස්සති\nඉතිමා චතුරාරක්ඛා - භික්ඛුභාවෙය්‍ය සීලවා\n\n2. අනන්ත විත්ථාර ගුණං - ගුණතොනුස්සරං මුනිං\nභාවෙය්‍ය බුද්ධිමා භික්ඛු - බුද්ධානුස්සති ආදිතො.\n\n3. සවාසනෙ කිලෙසෙ සො - එකො සබ්බෙ නිඝාතිය\nඅච්චන්ත සුද්ධ සන්තානො - පූජානඤ්ච සදාරහො\n\n4. සබ්බකාලගතෙ ධම්මෙ - සබ්බෙ සම්මා සයං මුනී\nසබ්බාකාරෙන බුජ්ඣිත්වා - එකො සබ්බඤ්ඤුතං ගතො\n\n5. විපස්සනාදි විජ්ජාහි - සීලාදි චරණෙහි ච\nසුසමිද්ධෙහි සම්පන්නො - ගගනාභෙහි නායකො\n\n6. සම්මාගතො සුභං ඨානං - අමොඝවචනො ච සො\nතිවිධස්සාපි ලොකස්ස - ඤාතා නිරවසෙසතො\n\n7. අනෙකෙහි ගුණොඝෙහි - සබ්බසත්තුත්තමො අහු\nඅනෙකෙහි උපායෙහි - නරදම්මෙ දමෙසි ච\n\n8. එකො සබ්බස්ස ලොකස්ස - සබ්බ සත්තානුසාසකො\nභාග්‍ය ඉස්සරියාදීනං - ගුණානං පරමො නිධි\n\n9. පඤ්ඤා තස්ස සබ්බ ධම්මෙසු - කරුණා සබ්බ ජන්තුසු\nඅත්තත්ථානං පරත්ථානං - සාධිකා ගුණජෙට්ඨිකා\n\n10. දයාය පාරමී චිත්වා - පඤ්ඤාය අත්තානං උද්ධරි\nඋද්ධරි සබ්බ ධම්මෙ ච - දයායඤ්ඤෙ ච උද්ධරි\n\n11. දිස්සමානො පි තාවස්ස - රූපකායො අචින්තියො\nඅසාධාරණ ඤාණඩ්ඪෙ - ධම්මකායෙ කථාව කා",
   "translit": "1. Buddhānussati mettā ca - asubhaṃ maraṇassati\nitimā caturārakkhā - bhikkhubhāveyya sīlavā\n\n2. Ananta vitthāra guṇaṃ - guṇatonussaraṃ muniṃ\nbhāveyya buddhimā bhikkhu - buddhānussati ādito.\n\n3. Savāsane kilese so - eko sabbe nighātiya\naccanta suddha santāno - pūjānañca sadāraho\n\n4. Sabbakālagate dhamme - sabbe sammā sayaṃ munī\nsabbākārena bujjhitvā - eko sabbaññutaṃ gato\n\n5. Vipassanādi vijjāhi - sīlādi caraṇehi ca\nsusamiddhehi sampanno - gaganābhehi nāyako\n\n6. Sammāgato subhaṃ ṭhānaṃ - amoghavacano ca so\ntividhassāpi lokassa - ñātā niravasesato\n\n7. Anekehi guṇoghehi - sabbasattuttamo ahu\nanekehi upāyehi - naradamme damesi ca\n\n8. Eko sabbassa lokassa - sabba sattānusāsako\nbhāgya issariyādīnaṃ - guṇānaṃ paramo nidhi\n\n9. Paññā tassa sabba dhammesu - karuṇā sabba jantusu\nattatthānaṃ paratthānaṃ - sādhikā guṇajeṭṭhikā\n\n10. Dayāya pāramī citvā - paññāya attānaṃ uddhari\nuddhari sabba dhamme ca - dayāyaññe ca uddhari\n\n11. Dissamāno pi tāvassa - rūpakāyo acintiyo\nasādhāraṇa ñāṇaḍḍhe - dhammakāye kathāva kā",
   "sinhala": "1. සුසිල්වත් යෝගාවචරතෙම බුදුගුණ, මෛත්‍රීය, අසුභය, මරණය යන චතුරාරක්ෂක භාවනා වඩන්නේය.\n\n2. බුද්ධිමත් යෝගාවචරයා චතුරාරක්ෂක භාවනා අතුරෙන් පළමුව අනන්ත ගුණ ඇති සම්මා සම්බුදු රජාණන් වහන්සේගේ පතල ගුණස්කන්ධය භාවනා වඩන්නේය.\n\n3. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ වාසනා සහිතව සකල ක්ලේශයන් නසා අතිශයින් සුද්ධ සන්තාන ඇතියෝය, දෙවි මිනිසුන් විසින් කරනු ලබන අනේක ප්‍රකාර පූජාවන්ට ද සුදුසු වූ සේක.\n\n4. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ අතීත, අනාගත, වර්තමාන යන සර්ව කාලයන්ට අයත් වූ සියලු ධර්මයන් තමන් වහන්සේ විසින් මනාකොට අවබෝධ කර එකලාව සර්වඥත්වයට පැමිණි සේක.\n\n5. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ අතිශයින් සමෘද්ධ වූ ආකාශය බඳුවූ විදර්ශනා ඤාණාදී විද්‍යාවන්ගෙන් ද ශීලාදී චරණ ධර්මයන්ගෙන් ද යුක්තවන සේක.\n\n6. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ පරම සුන්දර නිර්වාණයට මනාකොට වැඩිය සේක. නොහිස් නොවරදින වචන ඇති සේක. ත්‍රිවිධවූම ලෝකය නිරවශේෂයෙන් දන වදාළ සේක.\n\n7. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ ශීලාදී අනේක ගුණෞඝයන් කරණකොට සකල සත්වයන්ටම උත්තම වූ සේක. අනේකෝපායයෙන් දම්‍ය පුද්ගලයන් දමනය කළ සේක.\n\n8. ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ සකල ලෝකයාට අසහාය ශාස්තෘන් සර්වසත්ත්වානු ශාසකයන් වහන්සේ ද වූ සේක. භාග්‍ය ඓශ්වර්‍යාදී ගුණයන්ගේ පරම නිධානය වූ සේක.\n\n9. ඒ භාග්‍යවතුන් වහන්සේගේ සකල ධර්මයන් කෙරෙහි පවත්නා ප්‍රඥාවද සකල සත්වයන් කෙරෙහි පවත්නා මහා කරුණාවද, ආත්මාර්ථ, පරාර්ථ දෙක සිදුකරන ප්‍රධාන ගුණ දෙකෙකි.\n\n10. ඒ භාග්‍යවතුන් වහන්සේ සකල සත්වයන් කෙරෙහි පවත්නා මහා කරුණාවෙන් සමතිස් පෙරුම් දහම් සපුරා ප්‍රඥාවෙන් තමන් සසර සයුරෙන් නගාගත් සේක. සකල ධර්ම සමූහයද දන වදාළ සේක. කරුණාවෙන් අන්‍ය සත්වයන් ද සසර සයුරෙන් ගොඩ නැගූ සේක.\n\n11. ඇසට පෙනෙන්නාවූද ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේගේ රූපකායද අචින්ත්‍යයය. අසාධාරණ ඤාණයන්ගෙන් පොහොසත් වූ උන්වහන්සේගේ ධර්මකාය ගැන කවර කථාද? එය අචින්ත්‍යමය.",
   "english": "1. A virtuous meditator should cultivate the four protective meditations: recollection of the Buddha, loving-kindness, foulness (of the body) and mindfulness of death.\n\n2. A wise meditator should first, among the four protective meditations, cultivate the recollection of the Buddha, contemplating the renowned mass of virtues of the Perfectly Self-Awakened One, whose virtues are boundless and far-reaching.\n\n3. That Blessed Buddha, having alone destroyed all defilements together with their latent traces, has a mind utterly purified, and is ever worthy of the manifold offerings made by devas and humans.\n\n4. That Blessed Buddha, having by himself fully awakened to all phenomena belonging to all times — past, future and present — in every aspect, alone attained omniscience.\n\n5. That Blessed Buddha, the Leader, is endowed with the knowledges beginning with insight, vast like the sky, and with the practices beginning with virtue.\n\n6. That Blessed Buddha has gone rightly to the supremely beautiful state (Nibbāna). His words are never empty or mistaken, and he has known the threefold world without remainder.\n\n7. Through many floods of virtue the Blessed Buddha became supreme among all beings, and by many skilful means he tamed those persons who could be tamed.\n\n8. That Blessed Buddha was the incomparable Teacher of the whole world and the instructor of all beings, the supreme treasury of virtues such as fortune and sovereignty.\n\n9. In the Blessed One, wisdom regarding all phenomena and great compassion towards all beings are the two chief virtues that accomplish his own welfare and the welfare of others.\n\n10. Out of great compassion towards all beings, having fulfilled the thirty perfections, he lifted himself out of the ocean of saṃsāra by wisdom. He understood the whole range of phenomena, and out of compassion he raised other beings too out of the ocean of saṃsāra.\n\n11. Even the visible physical body of that Blessed Buddha is inconceivable. What, then, is there to say of his Dhamma-body, rich in unique knowledges? That is beyond conception."
  },
  {
   "id": "m17",
   "group": "morning",
   "name": {
    "si": "මෛත්‍රී භාවනාව ",
    "en": "Loving-kindness "
   },
   "pali": "1. අත්තූපමාය සබ්බෙසං - සත්තානං සුඛකාමතං\nපස්සිත්වා කමතො මෙත්තං - සබ්බ සත්තෙසු භාවයෙ\n\n2. සුඛී භවෙය්‍යං නිද්දුක්ඛො - අහං නිච්චං අහං විය\nහිතා ච මෙ සුඛී හොන්තු - මජ්ඣත්තා අථ වෙරිනො\n\n3. ඉමම්හි ගාමක්ඛෙත්තම්හි - සත්තා හොන්තු සුඛී සදා\nතතො පරඤ්ච රජ්ජෙසු - චක්කවාළෙසු ජන්තුනො\n\n4. සමන්තා චක්කවාළෙසු - සත්තානන්තෙසු පාණිනො\nසුඛිනො පුග්ගලා භූතා - අත්තභාව ගතා සියුං\n\n5. තථා ඉත්ථී පුමා චෙව - අරියා අනරියා පි ච\nදෙවා නරා අපායට්ඨා - තථා දස දිසාසූ'ති.",
   "translit": "1. Attūpamāya sabbesaṃ - sattānaṃ sukhakāmataṃ\npassitvā kamato mettaṃ - sabba sattesu bhāvaye\n\n2. Sukhī bhaveyyaṃ niddukkho - ahaṃ niccaṃ ahaṃ viya\nhitā ca me sukhī hontu - majjhattā atha verino\n\n3. Imamhi gāmakkhettamhi - sattā hontu sukhī sadā\ntato parañca rajjesu - cakkavāḷesu jantuno\n\n4. Samantā cakkavāḷesu - sattānantesu pāṇino\nsukhino puggalā bhūtā - attabhāva gatā siyuṃ\n\n5. Tathā itthī pumā ceva - ariyā anariyā pi ca\ndevā narā apāyaṭṭhā - tathā dasa disāsū'ti.",
   "sinhala": "1. තමා සැපයට කැමැත්තා සේම අන් සියලු සත්වයෝ සැපයට කැමතියි තමා නිදසුනෙහි තබා සියළු සත්වයන් කෙරෙහි මෛත්‍රිය වැඩිය යුතුය.\n\n2. මම නිරන්තරයෙන් සැප ඇත්තේ වෙම්වා, දුක් නැත්තේ වෙම්වා, මා මෙන් මා හට හිත සත්වයෝද මධ්‍යස්ථයෝ ද වෛරීහුද සැමකල්හි සුවපත් වෙත්වා.\n\n3. මේ ගමෙහි සකල සත්වයෝ සැම කල්හි සුවපත් වෙත්වා. එයින් ඔබ රාජ්‍යවල සක්වළවල සත්වයෝද සැම කල්හි සුවපත් වෙත්වා.\n\n4. මේ සක්වළ හාත්පස අනන්ත චක්‍රවාටයන්හි සියලු සත්වයෝ සකල ප්‍රාණීහු සකල පුද්ගලයෝ සකල භූතයෝ සකල ආත්මභාව පර්යාපන්නයෝ සුවපත් වෙත්වා.\n\n5. එසේම සියලු ස්ත්‍රීහුද, පුරුෂයෝද, ආර්යයෝද, අනාර්යයෝද, දෙවියෝද, මනුෂ්‍යයෝද, අපායිකයෝද, සුවපත් වෙත්වා. දශ දිශාවෙහි සකල සත්වයෝද සුවපත් වෙත්වා.",
   "english": "1. Seeing that, as oneself desires happiness, so do all beings, taking oneself as the example, one should develop loving-kindness towards all beings.\n\n2. May I always be happy and free from suffering; and as I, so may my loved ones, neutral persons and those hostile to me be happy.\n\n3. May all beings in this village and region be happy always; and likewise the beings in other realms and world-systems beyond.\n\n4. May all beings, all living creatures, all individuals and all who have come to be, in the boundless world-systems all around, be happy.\n\n5. Likewise, may all women and men, noble ones and worldlings, devas, humans and beings in the lower realms be happy — and all beings in the ten directions."
  },
  {
   "id": "m18",
   "group": "morning",
   "name": {
    "si": "අසුභ භාවනාව",
    "en": "Meditation on Foulness"
   },
   "pali": "1. අවිඤ්ඤාණාසුභං යථා - සවිඤ්ඤාණාසුභං ඉමං\nකායං අසුභතො පස්සං - අසුභං භාවයෙ සතිං\n\n2. වණ්ණ සණ්ඨාන ගන්ධෙහි - ආසයො කාසතො තථා\nපටික්කූලානි කායෙ මෙ - කුණපානි ද්වි සොළස\n\n3. පතිතම්හාපි කුණපා - ජෙගුච්ඡං කාය නිස්සිතං\nආධාරො හි අසුචිස්ස - කායෙතු කුණපෙ ඨිතං\n\n4. මීළ්හෙකිමිව කායොයං - අසුචිම්හි සමුට්ඨිතො\nඅන්තො අසුචි සම්පුණ්ණො - පුණ්ණ වච්චකුටි විය\n\n5. අසුචි සන්දතෙ නිච්චං - යථා මෙදකථාලිකා\nනානා කිමිකුලාවාසො - පක්කචන්දනිකා විය\n\n6. ගණ්ඩභූතො රොගභූතො - වණභූතො සමුස්සයො\nඅතෙකිච්ඡො'ති ජෙගුච්ඡො - පභින්න කුණපූපමො'ති",
   "translit": "1. Aviññāṇāsubhaṃ yathā - saviññāṇāsubhaṃ imaṃ\nkāyaṃ asubhato passaṃ - asubhaṃ bhāvaye satiṃ\n\n2. Vaṇṇa saṇṭhāna gandhehi - āsayo kāsato tathā\npaṭikkūlāni kāye me - kuṇapāni dvi soḷasa\n\n3. Patitamhāpi kuṇapā - jegucchaṃ kāya nissitaṃ\nādhāro hi asucissa - kāyetu kuṇape ṭhitaṃ\n\n4. Mīḷhekimiva kāyoyaṃ - asucimhi samuṭṭhito\nanto asuci sampuṇṇo - puṇṇa vaccakuṭi viya\n\n5. Asuci sandate niccaṃ - yathā medakathālikā\nnānā kimikulāvāso - pakkacandanikā viya\n\n6. Gaṇḍabhūto rogabhūto - vaṇabhūto samussayo\natekiccho'ti jeguccho - pabhinna kuṇapūpamo'ti",
   "sinhala": "1. විඤ්ඤාණය පහවූ මල සිරුර යම් සෙද එසේ යෝගාවචරයා විසින් සවිඤ්ඤාණක අසුභවූ මේ කය පිළිකුල් වශයෙන් බලමින් අසුභානුස්මෘති භාවනාව වැඩිය යුතුය.\n\n2. මාගේ ශරීරයෙහි ඇති මේ කේශාදී කුණප දෙතිස පැහැයෙන්ද, සටහනින්ද, ගන්ධයෙන්ද ආශ්‍රයස්ථානයෙන් ද පිහිටි අවකාශයෙන්ද ප්‍රතික්කූලයෝය.\n\n3. ශරීරයෙන් වෙන්ව වැටුනාවූ කුණපයටද වඩා කයෙහි පවත්නා කුණපය පිළිකුල්ය. කුමක් හෙයින් ද යත්? වැටුනා වූ කුණපයාගේ ආධාරය (පවත්නා තැන) පිරිසිදුය. කයෙහි සිටි කුණපය වනාහි කුණපයෙහිම පිහිටියේය. එහෙයිනි.\n\n4. මේ කය අසූචියෙහි උපදනා පණුවකු මෙන් අසූචියෙහිම හටගත් දෙයකි. පිරුණු වැසිකිළියක් සෙයින් ඇතුළද අසූචියෙන් පිරී ඇත්තේය.\n\n5. සිදුරු ඇති අමු මස් සැලියකින් මෙන් මේ ශරීරයෙන් නිරන්තරයෙන් මලමූත්‍රාදී අසූචි ගලන්නේය. මේ ශරීරය පල්වූ ගවරවළක් සෙයින් නා නා කෘමීන්ගේ වාසස්ථානයකි.\n\n6. මේ ශරීරය ගෙඩියක් වැනිය. රෝගයක් වැනිය. වණයක් වැනිය. පිළියම් කිරීමට දුෂ්කර වුවකි. ඉතා පිළිකුලක, තැනින් තැන බිදුණු කුණපයක් වැනිය.",
   "english": "1. Just as a lifeless corpse is foul, so is this living body. Contemplating the body as foul, a meditator should develop mindfulness of foulness.\n\n2. The thirty-two parts of this body, beginning with the hairs, are repulsive, like corpses, in their colour, shape, smell, source and location.\n\n3. Even a corpse that has fallen away from the body is repulsive, but the corpse that stays in the body is more so: the ground on which a fallen corpse lies is clean, whereas the corpse in the body rests upon a corpse.\n\n4. This body is like a worm born in filth, arisen from filth itself; inside it is full of impurity, like a full latrine.\n\n5. Impurities flow from it constantly, like a pot of raw flesh with holes in it; it is a dwelling place for many kinds of worms, like a putrid cesspit.\n\n6. This body is like a boil, like a disease, like a wound; hard to cure and repulsive, like a corpse that has burst open here and there."
  },
  {
   "id": "m19",
   "group": "morning",
   "name": {
    "si": "මරණානුස්සති භාවනාව",
    "en": "Mindfulness of Death"
   },
   "pali": "1. පවාතදීප තුල්‍යාය - සායුසන්තතියාක්ඛයං\nපරූපමාය සම්පස්සං - භාවයෙ මරණස්සතිං\n\n2. මහා සම්පත්ති සම්පත්තා - යථා සත්තා මතා ඉධ\nතථා අහං මරිස්සාමි - මරණං මම හෙස්සති\n\n3. උප්පත්තියා සහෙවෙදං - මරණං ආගතං සදා\nමාරණත්ථාය ඔකාසං - වධකො විය එසති\n\n4. ඊසකං අනිවත්තන්තං - සතතං ගමනුස්සුකං\nජීවිතං උදයා අත්ථං - සුරියො විය ධාවති\n\n5. විජ්ජු බුබ්බුළ උස්සාව - ජලරාජී පරික්ඛයං\nඝාතකොව රිපු තස්ස - සබ්බත්ථාපි අවාරියො\n\n6. යසත්ථාම පුඤ්ඤිද්ධි - බුද්ධි වුද්ධි ජිනං චයං\nඝාතෙසි මරණං ඛිප්පං - කා තු මාදිසකෙ කථා\n\n7. පච්චයානඤ්ච වෙකල්ලා - බාහිරජ්ඣත්තුපද්දවා\nමරාමොරං නිමෙසාපි - මරමානො අනුක්ඛණන්ති\n\nභාවෙත්වා චතුරා රක්ඛා - ආවජ්ජෙය්‍ය අනන්තරං\nමහා සංවෙග වත්ථූනි - අට්ඨ අට්ඨිත වීරියො\n\nජාති ජරා ව්‍යාධි චුති අපායා\nඅතීත අප්පත්තක වට්ටදුක්ඛං\nඉදානි ආහාර ගවෙට්ඨි දුක්ඛං\nසංවෙග වත්ථූනි ඉමානි අට්ඨ\n\nපාතොව සායමපි චෙව ඉමං විධිඤ්ඤූ\nආසෙවතෙ සතතමත්තහිතාභිලාසී\nපප්පොති සො විපුලං හතපාරිපන්ථො\nසෙට්ඨං සුඛං මුනිවිසිට්ඨමතං සුඛෙන'ති",
   "translit": "1. Pavātadīpa tulyāya - sāyusantatiyākkhayaṃ\nparūpamāya sampassaṃ - bhāvaye maraṇassatiṃ\n\n2. Mahā sampatti sampattā - yathā sattā matā idha\ntathā ahaṃ marissāmi - maraṇaṃ mama hessati\n\n3. Uppattiyā sahevedaṃ - maraṇaṃ āgataṃ sadā\nmāraṇatthāya okāsaṃ - vadhako viya esati\n\n4. Īsakaṃ anivattantaṃ - satataṃ gamanussukaṃ\njīvitaṃ udayā atthaṃ - suriyo viya dhāvati\n\n5. Vijju bubbuḷa ussāva - jalarājī parikkhayaṃ\nghātakova ripu tassa - sabbatthāpi avāriyo\n\n6. Yasatthāma puññiddhi - buddhi vuddhi jinaṃ cayaṃ\nghātesi maraṇaṃ khippaṃ - kā tu mādisake kathā\n\n7. Paccayānañca vekallā - bāhirajjhattupaddavā\nmarāmoraṃ nimesāpi - maramāno anukkhaṇanti\n\nBhāvetvā caturā rakkhā - āvajjeyya anantaraṃ\nmahā saṃvega vatthūni - aṭṭha aṭṭhita vīriyo\n\nJāti jarā vyādhi cuti apāyā\natīta appattaka vaṭṭadukkhaṃ\nidāni āhāra gaveṭṭhi dukkhaṃ\nsaṃvega vatthūni imāni aṭṭha\n\nPātova sāyamapi ceva imaṃ vidhiññū\nāsevate satatamattahitābhilāsī\npappoti so vipulaṃ hatapāripantho\nseṭṭhaṃ sukhaṃ munivisiṭṭhamataṃ sukhena'ti",
   "sinhala": "1. මහත් වූ සුළඟට අසු වූ පහන නිවීයන්නා සේ ආයුෂ පරම්පරාවෙන් ගෙවීයාම සිහිකරමින් (මරණයට පත්) අන්‍යයන් උපමා කොට මරණානුස්මෘති භාවනාව වැඩිය යුතුය.\n\n2. මහා සම්පත්තියට පැමිණියා වූ සත්වයෝ යම් සේ මළාහුද එපරිද්දෙන් මමද මැරෙමි. මට මරණය වන්නේය.\n\n3. මේ මරණය උත්පත්තිය සමග ආ එකෙක. මාරයා සැම කල්හිම මැරීම පිණිස අවකාශයක් වධකයෙකු මෙන් සොයන්නේය.\n\n4. සැම කල්හි ගමනට උත්සාහ කරන ඇසිල්ලකුදු නො නවතින (ජීවිතය) උදාවීමෙහි සිට අස්තයට යන හිරුමෙන් ඉපදීමේ පටන් මරණය කරා දුවන්නේය.\n\n5. විදුලියක් මෙන් දිය බුබුලක් මෙන් පිනි බිඳක් මෙන් දියෙහි ඇදි ඉරක් මෙන් මේ ජීවිතය වහා ක්ෂය වන්නේය. මේ මරණය කවරාකාරයකින්වත් වැළැක්විය නොහෙන මරන්නට එන සතුරෙකු වැනිය.\n\n6. මහත් වූ යසසින්ද, බලයෙන්ද, පිනෙන්ද, නුවණින් ද වැඩුනාවූ මේ ලොව්තුරා බුදුරජාණන් වහන්සේ ද මාරයා වහා නැසුවේය. මා වැනියන් මැරීම ගැන කවර කථාද?\n\n7. ක්ෂණයක් පාසා සිදුවන නාමරූප බිඳීම නිසා ක්ෂණයක් පාසා මැරෙන්නාවූ මම ජීවත්වීමට වුවමනා ප්‍රත්‍යන් නොලැබීයාමෙන් ද බාහ්‍යාභ්‍යන්තරික උපද්‍රවයකින් ඇසිපිය හෙලීමකට ද කෙටි කලදී මැරෙමි.\n\nචතුරාරක්ෂක භාවනා වැඩූ පසු, නොපසුබට වීර්යයෙන් යුතුව මහා සංවේග වස්තු අට අනතුරුව මෙනෙහි කළ යුතුය.\n\nඉපදීම දිරීම ව්‍යාධිය මරණය හා අපාය දුක්ඛය ද අතීත සංසාර දුකද අනාගත සංසාර දුකද දනට ආහාර සැපයීමේ දුකද යන මේවා සංවේග වස්තු අට නම් වෙති.\n\nතමහට හිතවැඩ කැමැත්තෙක් උදය සවස මේ බුද්ධානුස්සති ආදි චතුරාරක්ෂක භාවනා විධිය නිතිපතා වඩන්නේ ද හෙතෙම මාරක බාධක සියල්ල ජයගෙන මුනීන්ද්‍රයන් වහන්සේ වදාළා වූ විපුල වූ ශ්‍රේෂ්ඨ වූ අමාමහ නිවනට සුවසේ පැමිණේ.",
   "english": "1. Like a lamp caught in a strong wind, the continuity of life wears away. Contemplating this, and taking others (who have died) as examples, one should develop mindfulness of death.\n\n2. Beings who had attained great prosperity have died here; just as they died, so shall I die. Death will come to me.\n\n3. This death has come together with birth. Like an executioner, it is always seeking an opportunity to kill.\n\n4. Life never turns back; it is ever eager to go, running from its rising to its setting like the sun, from birth towards death.\n\n5. Like lightning, a bubble, a dewdrop, or a line drawn on water, this life swiftly wastes away. Death is like an enemy coming to kill, one that cannot be held back in any way.\n\n6. Even the Buddha, grown great in fame, strength, merit and wisdom, was swiftly overcome by death. What, then, is there to say of the like of us?\n\n7. Because mind-and-matter break up moment by moment, I die moment by moment. Through lack of the requisites for living, and through external and internal dangers, I shall die within a span shorter than the blink of an eye.\n\nHaving developed the four protective meditations, one should next, with unflagging energy, reflect upon the eight grounds of spiritual urgency (saṃvega).\n\nBirth, ageing, sickness, death, suffering in the lower realms, the suffering of saṃsāra in the past, the suffering of saṃsāra in the future, and now the suffering of seeking food — these are the eight grounds of spiritual urgency.\n\nWhoever desires his own welfare, and practises this method of the four protective meditations, beginning with recollection of the Buddha, every morning and evening, overcomes all deadly obstacles and attains with ease the vast, excellent, deathless Nibbāna taught by the Lord of Sages."
  },
  {
   "id": "m20",
   "group": "morning",
   "name": {
    "si": "අනේකවිධ පුණ්‍යානුමෝදනා හා ප්‍රාර්ථනා ගාථා",
    "en": "Verses of Rejoicing in Merit and Aspiration"
   },
   "pali": "1. ඉමිනා පුඤ්ඤකම්මෙන - උපජ්ඣායා ගුණුත්තරා\nආචරියූපකාරා ච - මාතා පිතා පියා මමං\n\n2. සුරියො චන්දිමා රාජා - ගුණවන්තා නරා පි ච\nබ්‍රහ්මා මාරා ච ඉන්දා ච - ලොකපාලා ච දෙවතා\n\n3. යමො මිත්තා මනුස්සා ච - මජ්ඣත්තා වෙරිකා පි ච\nසබ්බෙ සත්තා සුඛී හොන්තු - පුඤ්ඤානි පකතානි මෙ\n\n4. සුඛං ච තිවිධං දෙන්තු - ඛිප්පං පාපෙථ වො මතං\nඉමිනා පුඤ්ඤ කම්මෙන - ඉමිනා උද්දිසෙන ච\n\n5. ඛිප්පාහං සුලභෙ චෙව - තණ්හූපාදාන ඡෙදනං\nයෙ සන්තානෙ හීනා ධම්මා - යාව නිබ්බානතො මමං\n\n6. නස්සන්තු සබ්බදායෙව - යත්ථ ජාතො භවෙ භවෙ\nඋජු චිත්තො සතිපඤ්ඤො - සල්ලෙඛො විරිය වාමිනා\n\n7. මාරා ලභන්තු නොකාසං - කාතුං ච විරියෙ මම\nබුද්ධො දීපවරො නාථො - ධම්මො නාථො වරුත්තමො\n\n8. නාථො පච්චෙක සම්බුද්ධො - සංඝො නාථොත්තරො මමං\nතෙසොත්තමානු භාවෙන - මාරොකාසං ලභන්තු මා\n\nභවග්ගපාදාය අවීචි හෙට්ඨතො\nඑත්ථන්තරෙ සත්ත කායූපපන්නා\nරූපී අරූපී ච අසඤ්ඤි සඤ්ඤිනො\nදුක්ඛා පමුච්චන්තු ඵුසන්තු නිබ්බුතිං\n\nදෙවො වස්සතු කාලෙන - සස්ස සම්පත්ති හොතු ච\nඵීතො භවතු ලොකො ච - රාජා භවතු ධම්මිකො",
   "translit": "1. Iminā puññakammena - upajjhāyā guṇuttarā\nācariyūpakārā ca - mātā pitā piyā mamaṃ\n\n2. Suriyo candimā rājā - guṇavantā narā pi ca\nbrahmā mārā ca indā ca - lokapālā ca devatā\n\n3. Yamo mittā manussā ca - majjhattā verikā pi ca\nsabbe sattā sukhī hontu - puññāni pakatāni me\n\n4. Sukhaṃ ca tividhaṃ dentu - khippaṃ pāpetha vo mataṃ\niminā puñña kammena - iminā uddisena ca\n\n5. Khippāhaṃ sulabhe ceva - taṇhūpādāna chedanaṃ\nye santāne hīnā dhammā - yāva nibbānato mamaṃ\n\n6. Nassantu sabbadāyeva - yattha jāto bhave bhave\nuju citto satipañño - sallekho viriya vāminā\n\n7. Mārā labhantu nokāsaṃ - kātuṃ ca viriye mama\nbuddho dīpavaro nātho - dhammo nātho varuttamo\n\n8. Nātho pacceka sambuddho - saṅgho nāthottaro mamaṃ\ntesottamānu bhāvena - mārokāsaṃ labhantu mā\n\nBhavaggapādāya avīci heṭṭhato\netthantare satta kāyūpapannā\nrūpī arūpī ca asaññi saññino\ndukkhā pamuccantu phusantu nibbutiṃ\n\nDevo vassatu kālena - sassa sampatti hotu ca\nphīto bhavatu loko ca - rājā bhavatu dhammiko",
   "sinhala": "1. මේ කුශලානුභාව බලයෙන් මාගේ ආචාර්ය උපාධ්‍යාය ගුණෝත්තම උතුමෝද, උපකාරකයෝද, ප්‍රිය මවුපිය දෙගුරුන්ද,\n\n2. චන්ද්‍ර සූර්‍ය රාජයෝද, ගුණවත් මනුෂ්‍යයෝද, බ්‍රහ්මයෝද, මාරයෝද, ඉන්ද්‍රයෝද, ලෝක පාලක දෙවියෝද,\n\n3. යම දෙවි රජු ද, මිත්‍ර මනුෂ්‍යයෝද, මධ්‍යස්ථයෝද, වෛරීහුද, සියළු සත්වයෝද සුවපත් වෙත්වා.\n\n4. මවිසින් විශේෂයෙන් රැස්කරන ලද කුශලයෝ ත්‍රිවිධ සම්පත් දෙත්වා. භවත්හු වහා නිවනට පමුණුවනු ලබත්වා.\n\n5. මේ කුශලයෙන්ද මේ උදෙසීමෙන් ද මම තෘෂ්ණා උපාදානයක් සිඳීම වහා ලබම්වා.\n\n6. නිවන දක්වා මගේ සන්තානයේ පාප ධර්ම නොපිහිටේවා. උපනුපන් භවයක් පාසා සැම කල්හි සෘජු සිත් ඇත්තේ සති ප්‍රඥා ඇත්තේ, සල්ලේඛ ප්‍රතිපදා ඇත්තේ, වීර්යය ඇත්තේද වෙම්වා!\n\n7-8. මේ කුශලයෙන් මාරයෝ අවකාශ නොලබත්වා. මා හට වීරිය කිරීම පිණිස බුද්ධරත්නය උතුම් පිහිටය. ධර්ම රත්නය ද මට උතුම් පිහිටය. ප්‍රත්‍යෙක බුද්ධ රත්නය ද ආර්ය මහා සංඝරත්නය ද මා හට උතුම් පිහිටය. ඒ උත්තම රත්නත්‍රයානුභාවයෙන් මාරයෝ අවකාශ නොලබත්වා.\n\nභවාග්‍රයෙහි පටන් අවීචිය දක්වා මේ අතර සත්ව ලෝකයට ඇතුළත් වූ රූපී අරූපී සඤ්ඤී අසඤ්ඤී සියලු සත්වයෝ දුකෙන් මිදෙත්වා. නිවන් සුව ලබත්වා.\n\nකලට වැසි වසීවා. ගොවිතැන් දියුණු වේවා. රට සශ්‍රීක වේවා. රජ දැහැමි වේවා.",
   "english": "1. By the power of this meritorious deed, may my preceptors and teachers, excellent in virtue, my benefactors, my dear mother and father,\n\n2. the sun and moon deities, virtuous humans, the Brahmās, Māra, Indra and the guardian deities of the world,\n\n3. Yama, friendly humans, neutral persons and those hostile to me — may all beings be happy.\n\n4. May the merits I have specially gathered bestow the three kinds of happiness, and may you all be swiftly led to Nibbāna.\n\n5. By this merit and this dedication, may I swiftly and easily attain the cutting off of craving and clinging.\n\n6. Until I reach Nibbāna, may the evil states in my mental continuum not take root. In every existence in which I am born, may I be upright in mind, mindful and wise, practising austerity, and energetic!\n\n7–8. By this merit, may Māra find no opportunity. For my striving, the Buddha is my supreme refuge; the Dhamma is also my supreme refuge; the Paccekabuddha and the noble Saṅgha are also my supreme refuge. By the power of these supreme Gems, may Māra gain no opportunity against me.\n\nFrom the summit of existence down to the Avīci hell, and all in between — beings who have arisen in this world, those with form and the formless, the percipient and the non-percipient — may they all be freed from suffering and attain the peace of Nibbāna.\n\nMay the rain fall in due season; may the harvests be abundant; may the country prosper; and may the king be righteous."
  },
  {
   "id": "m21",
   "group": "morning",
   "name": {
    "si": "සුගතො වාදය",
    "en": "The Sugata's Exhortation"
   },
   "pali": "1. අප්පමාදෙන භික්ඛවෙ සම්පාදෙථ\nදුල්ලභො බුද්ධුප්පාදො ලොකස්මිං\nදුල්ලභො මනුස්සත්ත පටිලාභො\nදුල්ලභා ඛණ සම්පත්ති\nදුල්ලභා පබ්බජ්ජා\nදුල්ලභං සද්ධම්ම සවණං\nදුල්ලභො සප්පුරිස සංසෙවො\n\n2. ආරභථ නික්ඛමථ - යුඤ්ජථ බුද්ධ සාසනෙ\nධුනාථ මච්චුනො සෙනං - නළාගාරංව කුඤ්ජරො\n\n3. යො ඉමස්මිං ධම්ම විනයෙ - අප්පමත්තො විහරිස්සති\nපහාය ජාති සංසාරං - දුක්ඛස්සන්තං කරිස්සති",
   "translit": "1. Appamādena bhikkhave sampādetha\ndullabho buddhuppādo lokasmiṃ\ndullabho manussatta paṭilābho\ndullabhā khaṇa sampatti\ndullabhā pabbajjā\ndullabhaṃ saddhamma savaṇaṃ\ndullabho sappurisa saṃsevo\n\n2. Ārabhatha nikkhamatha - yuñjatha buddha sāsane\ndhunātha maccuno senaṃ - naḷāgāraṃva kuñjaro\n\n3. Yo imasmiṃ dhamma vinaye - appamatto viharissati\npahāya jāti saṃsāraṃ - dukkhassantaṃ karissati",
   "sinhala": "1. මහණෙනි ! බුදු සසුන ලොව දුර්ලභය. මිනිසත් බව දුර්ලභය. ඉන්ද්‍රිය පරිපූර්ණ ක්ෂණ සම්පත්තිය දුර්ලභය. ශාසන ප්‍රවුජ්‍යාව දුර්ලභය. නෛර්යාණික සද්ධර්මශ්‍රවණය දුර්ලභය. සත් පුරුෂ ආශ්‍රය දුර්ලභය. එසේ හෙයින් නොපමාව සිහි නුවණින් පිළිවෙත් සපුරම්.\n\n2. මේ බුදු සසුනේ පිළිවෙත් පිරීමෙහි ආරම්භ ධාතු වීර්යය කරමි. නික්කම ධාතු වීර්යය ද කරමි. පරාක්‍රමධාතු වීර්යයෙන් යෙදෙමි. යම්සේද? මහා හස්තිරාජයෙකු බටකොල ගෙයක් සිඳ බිඳ දමන්නාක් මෙනි. මර සෙනග පලවාහරිමි.\n\n3. යම් නුවණැත්තෙක් මේ බුදු සස්නෙහි නොපමාව වීර්යය කෙරේ නම් ජාති සංසාරය හැරදමා දුක් කෙළවර කොට නිවන් දකින්නේය.",
   "english": "1. Monks, strive with heedfulness! The arising of a Buddha in the world is rare. Attaining human birth is rare. The fortunate opportunity, with the faculties intact, is rare. Going forth in the Dispensation is rare. Hearing the Saddhamma that leads out of saṃsāra is rare. Association with good people is rare. Therefore, with mindfulness and wisdom, I fulfil the practices without delay.\n\n2. In this Buddha's Dispensation I make the effort of beginning (ārambha), the effort of going forth (nikkama) and the effort of perseverance (parakkama). Just as a great elephant shatters a reed hut, so I shall scatter Māra's army.\n\n3. Whoever lives heedfully in this Dhamma and Discipline will abandon the cycle of birth and make an end of suffering."
  },
  {
   "id": "m22",
   "group": "morning",
   "name": {
    "si": "පටිච්චසමුප්පාද ධර්මය - අනුලෝමය",
    "en": "Dependent Origination - Forward Order"
   },
   "pali": "අවිජ්ජා පච්චයා සංඛාරා, සංඛාරා පච්චයා විඤ්ඤාණං, විඤ්ඤාණ පච්චයා නාමරූපං, නාමරූප පච්චයා සළායතනං, සළායතන පච්චයා ඵස්සො, ඵස්ස පච්චයා වෙදනා, වෙදනා පච්චයා තණ්හා, තණ්හා පච්චයා උපාදානං,\n\nඋපාදාන පච්චයා භවො, භව පච්චයා ජාති, ජාති පච්චයා ජරා මරණං, සොක පරිදෙව දුක්ඛ දොමනස්සුපායාසා සම්භවන්ති, එවමෙතස්ස කෙවලස්ස දුක්ඛක්ඛන්ධස්ස සමුදයො හොති.",
   "translit": "Avijjā paccayā saṅkhārā, saṅkhārā paccayā viññāṇaṃ, viññāṇa paccayā nāmarūpaṃ, nāmarūpa paccayā saḷāyatanaṃ, saḷāyatana paccayā phasso, phassa paccayā vedanā, vedanā paccayā taṇhā, taṇhā paccayā upādānaṃ,\n\nUpādāna paccayā bhavo, bhava paccayā jāti, jāti paccayā jarā maraṇaṃ, soka parideva dukkha domanassupāyāsā sambhavanti, evametassa kevalassa dukkhakkhandhassa samudayo hoti.",
   "sinhala": "අවිද්‍යා ප්‍රත්‍යයෙන් සංස්කාර ඇති වේ. සංස්කාර ප්‍රත්‍යයෙන් විඤ්ඤාණය ඇති වේ. විඤ්ඤාණ ප්‍රත්‍යයෙන් නාමරූප ඇති වේ. නාමරූප ප්‍රත්‍යයෙන් ෂඩායතන ඇති වේ. ෂඩායතන ප්‍රත්‍යයෙන් ස්පර්ශය ඇති වේ. ස්පර්ශ ප්‍රත්‍යයෙන් වේදනා ඇති වේ. වේදනා ප්‍රත්‍යයෙන් තෘෂ්ණාව ඇති වේ. තෘෂ්ණා ප්‍රත්‍යයෙන් උපාදාන ඇති වේ.\n\nඋපාදාන ප්‍රත්‍යයෙන් භවය ඇති වේ. භව ප්‍රත්‍යයෙන් ජාතිය ඇති වේ. ජාති ප්‍රත්‍යයෙන් ජරා මරණ ශෝක වැළපීම් දුක් දොම්නස් සහ උපායාස ඇති වේ. මෙසේ මේ සියලු දුක්ඛස්කන්ධයාගේ හටගැනීම වේ.",
   "english": "Dependent on ignorance, formations arise; dependent on formations, consciousness; dependent on consciousness, name-and-form; dependent on name-and-form, the six sense-bases; dependent on the six sense-bases, contact; dependent on contact, feeling; dependent on feeling, craving; dependent on craving, clinging.\n\nDependent on clinging, becoming; dependent on becoming, birth; dependent on birth, ageing and death, sorrow, lamentation, pain, grief and despair arise. Thus is the origin of this whole mass of suffering."
  },
  {
   "id": "m23",
   "group": "morning",
   "name": {
    "si": "පටිච්චසමුප්පාද ධර්මය - පටිලෝම වාරය",
    "en": "Dependent Origination - Reverse Order"
   },
   "pali": "අවිජ්ජායත්වෙව අසෙස විරාග නිරොධා සංඛාර නිරොධො, සංඛාර නිරොධා විඤ්ඤාණ නිරොධො, විඤ්ඤාණ නිරොධා නාමරූප නිරොධො, නාමරූප නිරොධා සළායතන නිරොධො, සළායතන නිරොධා ඵස්ස නිරොධො, ඵස්ස නිරොධා වෙදනා නිරොධො, වෙදනා නිරොධා තණ්හා නිරොධො, තණ්හා නිරොධා උපාදාන නිරොධො, උපාදාන නිරොධා භව නිරොධො, භව නිරොධා ජාති නිරොධො, ජාති නිරොධා ජරා මරණං සොක පරිදෙව දුක්ඛ දොමනස්සුපායාසා නිරුජ්ඣන්ති, එවමෙතස්ස කෙවලස්ස දුක්ඛක්ඛන්ධස්ස නිරොධො හොති.",
   "translit": "Avijjāyatveva asesa virāga nirodhā saṅkhāra nirodho, saṅkhāra nirodhā viññāṇa nirodho, viññāṇa nirodhā nāmarūpa nirodho, nāmarūpa nirodhā saḷāyatana nirodho, saḷāyatana nirodhā phassa nirodho, phassa nirodhā vedanā nirodho, vedanā nirodhā taṇhā nirodho, taṇhā nirodhā upādāna nirodho, upādāna nirodhā bhava nirodho, bhava nirodhā jāti nirodho, jāti nirodhā jarā maraṇaṃ soka parideva dukkha domanassupāyāsā nirujjhanti, evametassa kevalassa dukkhakkhandhassa nirodho hoti.",
   "sinhala": "අවිද්‍යාව සම්පූර්ණයෙන් නොඉතිරිව නිරුද්ධ වීමෙන් සංස්කාර නිරුද්ධ වේ. සංස්කාර නිරුද්ධ වීමෙන් විඤ්ඤාණය නිරුද්ධ වේ. විඤ්ඤාණය නිරුද්ධ වීමෙන් නාමරූප නිරුද්ධ වේ. නාමරූප නිරුද්ධ වීමෙන් ෂඩායතන නිරුද්ධ වේ. ෂඩායතන නිරුද්ධ වීමෙන් ස්පර්ශය නිරුද්ධ වේ. ස්පර්ශය නිරුද්ධ වීමෙන් වේදනා නිරුද්ධ වේ. වේදනා නිරුද්ධ වීමෙන් තෘෂ්ණාව නිරුද්ධ වේ. තෘෂ්ණාව නිරුද්ධ වීමෙන් උපාදාන නිරුද්ධ වේ. උපාදාන නිරුද්ධ වීමෙන් භවය නිරුද්ධ වේ. භවය නිරුද්ධ වීමෙන් ජාතිය නිරුද්ධ වේ. ජාතිය නිරුද්ධ වීමෙන් ජරා මරණ ශෝක වැළපීම් දුක් දොම්නස් සහ උපායාස නිරුද්ධ වේ. මෙසේ මේ සියලු දුක්ඛස්කන්ධයාගේ නිරුද්ධ වීම වේ.",
   "english": "Through the complete fading away and cessation of ignorance, formations cease; with the cessation of formations, consciousness ceases; with the cessation of consciousness, name-and-form ceases; with the cessation of name-and-form, the six sense-bases cease; with the cessation of the six sense-bases, contact ceases; with the cessation of contact, feeling ceases; with the cessation of feeling, craving ceases; with the cessation of craving, clinging ceases; with the cessation of clinging, becoming ceases; with the cessation of becoming, birth ceases; with the cessation of birth, ageing and death, sorrow, lamentation, pain, grief and despair cease. Thus is the cessation of this whole mass of suffering."
  },
  {
   "id": "m24",
   "group": "morning",
   "name": {
    "si": "",
    "en": ""
   },
   "pali": "අනෙක ජාති සංසාරං - සන්ධාවිස්සං අනිබ්බිසං\nගහකාරකං ගවෙසන්තො - දුක්ඛා ජාති පුනප්පුනං\n\nගහකාරක දිට්ඨොසි - පුනගෙහං න කාහසි\nසබ්බා තෙ ඵාසුකා භග්ගා - ගහකූටං විසංඛිතං\nවිසංඛාරගතං චිත්තං - තණ්හානං ඛය මජ්ඣගා'ති.",
   "translit": "Aneka jāti saṃsāraṃ - sandhāvissaṃ anibbisaṃ\ngahakārakaṃ gavesanto - dukkhā jāti punappunaṃ\n\nGahakāraka diṭṭhosi - punagehaṃ na kāhasi\nsabbā te phāsukā bhaggā - gahakūṭaṃ visaṅkhitaṃ\nvisaṅkhāragataṃ cittaṃ - taṇhānaṃ khaya majjhagā'ti.",
   "sinhala": "ගෙය සාදන්නා සොයමින්, අනේක ජාති සංසාරයෙහි නොනැවතී දිව්වෙමි. නැවත නැවත ඉපදීම දුකකි.\n\nගෙය සාදන්නාණෙනි, තා දුටිමි. නැවත ගෙයක් නොකරන්නෙහිය. තාගේ සියලු ඉණිමං බිඳී ගියේය. ගෙයි මුදුන් ගස විසිරී ගියේය. සිත සංස්කාර රහිත විය. තෘෂ්ණාවන්ගේ ක්ෂය වීම ලැබීය.",
   "english": "Through many a birth in saṃsāra I have run on, not finding the house-builder, seeking him. Painful is birth again and again.\n\nHouse-builder, you are seen! You shall not build a house again. All your rafters are broken, the ridge-pole is shattered. The mind, freed from formations, has reached the destruction of craving."
  },
  {
   "id": "m25",
   "group": "morning",
   "name": {
    "si": "සූවිසි පට්ඨාන ධර්මය",
    "en": "The Twenty-four Conditions (Paṭṭhāna)"
   },
   "pali": "හෙතු පච්චයො, ආරම්මණ පච්චයො, අධිපති පච්චයො, අනන්තර පච්චයො, සමනන්තර පච්චයො, සහජාත පච්චයො, අඤ්ඤමඤ්ඤ පච්චයො, නිස්සය පච්චයො, උපනිස්සය පච්චයො, පුරෙජාත පච්චයො, පච්ඡාජාත පච්චයො, ආසෙවන පච්චයො, කම්ම පච්චයො, විපාක පච්චයො, ආහාර පච්චයො, ඉන්ද්‍රිය පච්චයො, ඣාන පච්චයො, මග්ග පච්චයො, සම්පයුත්ත පච්චයො, විප්පයුත්ත පච්චයො, අත්ථි පච්චයො, නත්ථි පච්චයො, විගත පච්චයො, අවිගත පච්චයො'ති.\n\nඑතෙන සච්චවජ්ජෙන සොත්ථි මේ හොතු සබ්බදා",
   "translit": "Hetu paccayo, ārammaṇa paccayo, adhipati paccayo, anantara paccayo, samanantara paccayo, sahajāta paccayo, aññamañña paccayo, nissaya paccayo, upanissaya paccayo, purejāta paccayo, pacchājāta paccayo, āsevana paccayo, kamma paccayo, vipāka paccayo, āhāra paccayo, indriya paccayo, jhāna paccayo, magga paccayo, sampayutta paccayo, vippayutta paccayo, atthi paccayo, natthi paccayo, vigata paccayo, avigata paccayo'ti.\n\nEtena saccavajjena sotthi me hotu sabbadā",
   "sinhala": "හේතු ප්‍රත්‍යය, ආරම්මණ ප්‍රත්‍යය, අධිපති ප්‍රත්‍යය, අනන්තර ප්‍රත්‍යය, සමනන්තර ප්‍රත්‍යය, සහජාත ප්‍රත්‍යය, අන්‍යෝන්‍ය ප්‍රත්‍යය, නිශ්‍රය ප්‍රත්‍යය, උපනිශ්‍රය ප්‍රත්‍යය, පුරෙජාත ප්‍රත්‍යය, පශ්චාජ්ජාත ප්‍රත්‍යය, ආසේවන ප්‍රත්‍යය, කර්ම ප්‍රත්‍යය, විපාක ප්‍රත්‍යය, ආහාර ප්‍රත්‍යය, ඉන්ද්‍රිය ප්‍රත්‍යය, ධ්‍යාන ප්‍රත්‍යය, මාර්ග ප්‍රත්‍යය, සම්ප්‍රයුක්ත ප්‍රත්‍යය, විප්‍රයුක්ත ප්‍රත්‍යය, අස්ති ප්‍රත්‍යය, නාස්ති ප්‍රත්‍යය, විගත ප්‍රත්‍යය, අවිගත ප්‍රත්‍යයයි.\n\nමේ සත්‍ය වචනයෙන් මට සැමදා සැපත වේවා!",
   "english": "Root condition, object condition, predominance condition, contiguity condition, immediacy condition, co-nascence condition, mutuality condition, support condition, decisive-support condition, pre-nascence condition, post-nascence condition, repetition condition, kamma condition, result condition, nutriment condition, faculty condition, jhāna condition, path condition, association condition, dissociation condition, presence condition, absence condition, disappearance condition, non-disappearance condition.\n\nBy this declaration of truth, may I be well always!"
  },
  {
   "id": "m26",
   "group": "morning",
   "name": {
    "si": "බුද්ධ වර්ෂ සජ්ඣායනය",
    "en": "Buddha Year Recitation"
   }
  },
  {
   "id": "m27",
   "group": "morning",
   "name": {
    "si": "විනාඩි 15 පමණ භාවනාවේ යෙදීම",
    "en": "Meditation (about 15 minutes)"
   }
  },
  {
   "id": "m28",
   "group": "morning",
   "name": {
    "si": "දෙවියන්ට ඤාතීන්ට පින් අනුමෝදන් කිරීම",
    "en": "Sharing Merit with Devas and Relatives"
   },
   "pali": "එත්තාවතා ච අම්හෙහි  සම්භතං පුඤ්ඤ සම්පදං\nසබ්බෙ දෙවා අනුමොදන්තු  සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ භූතා අනුමොදන්තු  සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ සත්තා අනුමොදන්තු   සබ්බ සම්පත්ති සිද්ධියා\n\nආකාසට්ඨා ච භුම්මට්ඨා  දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ දෙසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාවකං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු මං පරං\n\nඉදං වො ඤාතීනං හොතු - සුඛිතා හොන්තු ඤාතයො\n\nඉමස්මිං විහාරෙ ආරාමෙ - අධිවත්ථා ච දෙවතා\nඅනුමොදිත්වා ඉමං පුඤ්ඤං - රක්ඛන්තු ජින සාසනං",
   "translit": "Ettāvatā ca amhehi  sambhataṃ puñña sampadaṃ\nsabbe devā anumodantu  sabba sampatti siddhiyā\nsabbe bhūtā anumodantu  sabba sampatti siddhiyā\nsabbe sattā anumodantu  sabba sampatti siddhiyā\n\nĀkāsaṭṭhā ca bhummaṭṭhā  devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāsanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha desanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāvakaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu maṃ paraṃ\n\nIdaṃ vo ñātīnaṃ hotu - sukhitā hontu ñātayo\n\nImasmiṃ vihāre ārāme - adhivatthā ca devatā\nanumoditvā imaṃ puññaṃ - rakkhantu jina sāsanaṃ",
   "sinhala": "මෙතෙකින් අප විසින් රැස් කරන ලද පුණ්‍ය සම්පත්තිය සකල සම්පත් සිදුවීම පිණිස සියළු දෙවියෝද, සියළු භූතයෝද, සියළු සත්වයෝද අනුමෝදන් වෙත්වා!\n\nඅහසෙහි විමන් හිද පොළොවෙහි වෘක්ෂ පර්වතාදියෙහි අධිගෘහිත වූද, මහත් සෘද්ධි ඇති දෙවියෝද, බ්‍රහ්මයෝද පින් අනුමෝදන්ව සාසනයද, ධර්මයද, ශ්‍රාවකයන්ද, මාද අන්‍යයන්ද යහතින් බොහෝ කල් රකිත්වා!\n\nමේ පින ඤාතීන්ට අත්වේවා! ඤාතීහු ලොව්තුරා සුවයෙන් සුවපත් වේවා!\n\nමේ විහාරාරාමයෙහි අධිගෘහිත දෙවියෝ මේ පින් අනුමෝදන්ව ජින සාසනය රකිත්වා!",
   "english": "By this accumulation of merit that we have gathered here, may all devas rejoice, for the accomplishment of every success; may all beings who have come to be rejoice, for the accomplishment of every success; may all living beings rejoice, for the accomplishment of every success.\n\nMay the mighty devas and nāgas who dwell in the sky and on the earth — in the heavenly mansions, trees, mountains and the like — rejoicing in this merit, long protect the Buddha's Dispensation, the Dhamma, the Buddha's disciples, and me and others.\n\nMay this merit be for our relatives! May our relatives be happy, with the supramundane happiness!\n\nMay the deities who dwell in this monastery and park, rejoicing in this merit, long protect the Victor's Dispensation."
  },
  {
   "id": "m29",
   "group": "morning",
   "name": {
    "si": "මෛත්‍රී බෝසතාණන් වහන්සේට පිංදීම",
    "en": "Sharing Merit with the Bodhisatta Metteyya"
   },
   "pali": "කප්ප සත සහස්සානි  සොළසාපි අසංඛියෙ\nසම්භරං බොධි සම්භාරෙ  ආගතො ජාති ජාති සො\nනියතො බුද්ධ භාවාය  භද්දකප්පෙ ඉධන්තිමෙ\nබොධි සත්තොව මෙත්තෙය්‍යො   පුඤ්ඤං මේ අනුමොදතු\n\nසබ්බෙ සත්තා ච මජ්ඣත්තා  හිතා ච අහිතා ච මෙ\nඅනුමොදිත්වා ඉමං පුඤ්ඤං  බුජ්ඣන්තු අමතං පදං",
   "translit": "Kappa sata sahassāni  soḷasāpi asaṅkhiye\nsambharaṃ bodhi sambhāre  āgato jāti jāti so\nniyato buddha bhāvāya  bhaddakappe idhantime\nbodhi sattova metteyyo  puññaṃ me anumodatu\n\nSabbe sattā ca majjhattā   hitā ca ahitā ca me\nanumoditvā imaṃ puññaṃ  bujjhantu amataṃ padaṃ",
   "sinhala": "සොළසසංඛ්‍ය කල්ප ලක්ෂයක් මුළුල්ලෙහි ජාතියක් ජාතියක් පාසා බෝධි සම්භාර ධර්ම රැස් කරමින් පැමිණියා වූ, මෙම මහා භද්‍ර කල්පයේ අන්තිම බුද්ධාන්තරයෙහි බුදුබව පිණිස නියත වූ මෛත්‍රී බෝධිසත්වයන් වහන්සේද මාගේ පින අනුමෝදන් වෙත්වා.\n\nසියළු සත්වයෝ ද, මාගේ හිත සත්වයෝ ද, මධ්‍යස්ථයෝද, අහිත සත්වයෝ ද මේ පින් අනුමෝදන්ව අමෘත පදය අවබෝධ කරත්වා!",
   "english": "For sixteen incalculable aeons and a hundred thousand aeons, birth after birth, he accumulated the requisites of enlightenment, and he is destined for Buddhahood in the last Buddha-interval of this Fortunate Aeon. May the Bodhisatta Metteyya rejoice in my merit.\n\nMay all beings   the neutral, my friends and those who are not  rejoicing in this merit, realise the Deathless state!"
  },
  {
   "id": "m30",
   "group": "morning",
   "name": {
    "si": "ප්‍රාර්ථනාව",
    "en": "Aspiration"
   },
   "pali": "ඉමිනා පුඤ්ඤ කම්මෙන  මා මේ බාල සමාගමො\nසතං සමාගමො හොතු  යාව නිබ්බාන පත්තියා",
   "translit": "Iminā puñña kammena  mā me bāla samāgamo\nsataṃ samāgamo hotu  yāva nibbāna pattiyā",
   "sinhala": "මෙම කුසලානුභාව බලයෙන් නිවන් දක්නා තුරු මා හට පාපමිත්‍ර සේවනයක් නොවේවා. කල්‍යාණ මිත්‍ර සේවනයම ලැබේවා.",
   "english": "By the power of this meritorious deed, may I never keep company with fools; may I keep company with the good until I attain Nibbāna."
  },
  {
   "id": "m31",
   "group": "morning",
   "name": {
    "si": "ප්‍රතිපත්ති පූජාව",
    "en": "Offering of Practice"
   },
   "pali": "ඉමාය ධම්මානුධම්ම පටිපත්තියා බුද්ධං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා ධම්මං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා සංඝං පූජෙමි\nඅද්ධා ඉමාය පටිපත්තියා ජාති ජරා මරණම්හා පරිමුච්චිස්සාමි",
   "translit": "Imāya dhammānudhamma paṭipattiyā buddhaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā dhammaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā saṅghaṃ pūjemi\naddhā imāya paṭipattiyā jāti jarā maraṇamhā parimuccissāmi",
   "sinhala": "මේ ධර්මානු ධර්ම ප්‍රතිපත්තියෙන් බුද්ධ රත්නය, ධර්ම රත්නය, සංඝ රත්නය පූජා කරමි. ඒකාන්තයෙන් මෙම ප්‍රතිපත්තියෙන් ජාති, ජරා මරණයෙන් අත මිදෙන්නෙමි.",
   "english": "By this practice in accordance with the Dhamma, I honour the Buddha. By this practice in accordance with the Dhamma, I honour the Dhamma. By this practice in accordance with the Dhamma, I honour the Saṅgha. Surely, by this practice I shall be freed from birth, ageing and death."
  },
  {
   "id": "m32",
   "group": "morning",
   "name": {
    "si": "තෙරුවන් කමා කරවීම",
    "en": "Asking Forgiveness of the Triple Gem"
   },
   "pali": "කායෙන වාචා චිත්තෙන  පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ භන්තෙ  භූරිපඤ්ඤ තථාගත\n\nකායෙන වාචා චිත්තෙන  පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ ධම්ම  සන්දිට්ඨික අකාලික\n\nකායෙන වාචා චිත්තෙන  පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ සංඝ  පුඤ්ඤක්ඛෙත්ත අනුත්තර",
   "translit": "Kāyena vācā cittena  pamādena mayā kataṃ\naccayaṃ khama me bhante  bhūripañña tathāgata\n\nKāyena vācā cittena  pamādena mayā kataṃ\naccayaṃ khama me dhamma  sandiṭṭhika akālika\n\nKāyena vācā cittena  pamādena mayā kataṃ\naccayaṃ khama me saṅgha  puññakkhetta anuttara",
   "sinhala": "ස්වාමිනි මහා ප්‍රඥා තථාගතයන් වහන්ස! කයින්, වචනයෙන් සිතින් කරන ලද පමා වරදට මට ක්ෂමා වන සේක්වා!\n\nසාන්දෘෂ්ටික අකාලික ශ්‍රී සද්ධර්මය කෙරෙහි කයින් වචනයෙන් සිතින් කරන ලද පම වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nඅනුත්තර දක්ෂිණාර්හ වූ මහා සංඝ රත්නය කෙරෙහි කයින් වචනයෙන් සිදු වූ පමා වරදට, සංඝ රත්නය මට ක්ෂමා වන සේක්වා!",
   "english": "By body, speech and mind, a fault was committed by me through heedlessness. Venerable Sir, Tathāgata of great wisdom, forgive me my transgression!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Dhamma, visible here and now and timeless!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Saṅgha, the unsurpassed field of merit!"
  },
  {
   "id": "m33",
   "group": "morning",
   "name": {
    "si": "වැඩිහිටි - ගුරුවරුන් වැඳීම",
    "en": "Paying Respects to Elders and Teachers"
   },
   "pali": "ඔකාස වන්දාමි භන්තෙ, ඔකාස ද්වාරත්තයෙන කතං සබ්බං අච්චයං ඛමථ මෙ භන්තෙ, ඔකාස ඛමාමි භන්තෙ",
   "translit": "Okāsa vandāmi bhante, okāsa dvārattayena kataṃ sabbaṃ accayaṃ khamatha me bhante, okāsa khamāmi bhante",
   "sinhala": "අවසරයි ස්වාමීන් වහන්ස මම වන්දනා කරමි. අවසරයි ත්‍රිවිධද්වාරයෙන් වූ යම් ප්‍රමාද දෝෂයක් වේ නම් ක්ෂමාවන සේක්වා. මම ද ක්ෂමා වෙමි. දෙවනුවද, තෙවනුවද ක්ෂමා වන සේක්වා. මම ද ක්ෂමා වෙමි.",
   "english": "With your permission, Venerable Sir, I pay homage. With your permission, Venerable Sir, please forgive me every fault committed through the three doors (body, speech and mind). With your permission, Venerable Sir, I too forgive."
  },
  {
   "id": "d1",
   "group": "midday",
   "name": {
    "si": "නමස්කාරය",
    "en": "Homage"
   },
   "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස. !!!",
   "translit": "Namo tassa bhagavato arahato sammā sambuddhassa !!!.",
   
  },
  {
   "id": "d2",
   "group": "midday",
   "name": {
    "si": "බුද්ධ ගුණ ගාථා",
    "en": "Verses on the Buddha's Virtues"
   },
   "pali": "1. අනුච්චාවච සීලස්ස - නිපකස්ස ච ඣායිනො\nචිත්තං යස්ස වසීභූතං - එකග්ගං සුසමාහිතං\n\n2. තං චෙ තමොනුදං ධීරං - තෙවිජ්ජං මච්චුහායිනං\nහිතං දෙවමනුස්සානං - ආහු සබ්බප්පහායිනං\n\n3. තීහි විජ්ජාහි සම්පන්නං - අසම්මූළ්හවිහාරිනං\nබුද්ධං අන්තිමසාරීරං - තං නමස්සාමි ගොතමං",
   "translit": "1. Anuccāvaca sīlassa - nipakassa ca jhāyino\ncittaṃ yassa vasībhūtaṃ - ekaggaṃ susamāhitaṃ\n\n2. Taṃ ce tamonudaṃ dhīraṃ - tevijjaṃ maccuhāyinaṃ\nhitaṃ devamanussānaṃ - āhu sabbappahāyinaṃ\n\n3. Tīhi vijjāhi sampannaṃ - asammūḷhavihārinaṃ\nbuddhaṃ antimasārīraṃ - taṃ namassāmi gotamaṃ",
   "sinhala": "1. වැඩි අඩු නොවන සිල් ඇති ප්‍රඥාවන්ත වූ ධ්‍යාන කරණ සුලු යම් ඒ භාග්‍යවතුන් වහන්සේගේ සිත වසී වූයෙද, මනාකොට අරමුණෙහි පිහිටියේ ද?\n\n2. ඒකාන්තයෙන් මොහඳුර දුරු කළ කෙලෙස් තවන වීර්‍ය්‍ය ඇති මරණය ඉක්මවූ දෙවි මිනිසුන්ට හිත වූ සියලු කෙලෙස් ප්‍රහාණය කළ ඒ භාග්‍යවතුන් වහන්සේ ත්‍රි විද්‍යා ඇත්තෙක් යයි බුද්ධාදී ආර්‍යයෝ කියත්.\n\n3. ත්‍රි විද්‍යාවෙන් සමන්විත වූ, නොමූලා විහරණ ඇති අන්තිම සිරුර දරණ ඒ ගෞතම බුදුරජාණන් වහන්සේට මම වදිමි.",
   "english": "1. Is not the mind of that Blessed One — whose virtue is neither deficient nor excessive, who is wise and given to jhāna — mastered, one-pointed and well established upon its object?\n\n2. The noble ones, the Buddhas and others, declare that Blessed One, who dispelled the darkness of delusion, scorched the defilements with his energy, passed beyond death, is a benefactor of devas and humans and has abandoned all defilements, to be a possessor of the three knowledges.\n\n3. I pay homage to that Gotama Buddha, who is endowed with the three knowledges, who dwells unbewildered, and who bears his final body."
  },
  {
   "id": "d3",
   "group": "midday",
   "name": {
    "si": "බුදු ගුණ වන්දනාව",
    "en": "Veneration of the Buddha's Virtues"
   },
   "pali": "ඉතිපි සො භගවා අරහං සම්මා සම්බුද්ධො විජ්ජාචරණ සම්පන්නො සුගතො ලොකවිදූ අනුත්තරො පුරිසදම්ම සාරථි සත්ථා දෙව මනුස්සානං බුද්ධො භගවති.",
   "translit": "Itipi so bhagavā arahaṃ sammā sambuddho vijjācaraṇa sampanno sugato lokavidū anuttaro purisadamma sārathi satthā deva manussānaṃ buddho bhagavati.",
   "sinhala": "ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ මෙසේ ද අර්හත් වන සේක; සම්මා සම්බුද්ධ වන සේක; විද්‍යාචරණ සම්පන්න වන සේක; සුගත වන සේක; ලෝකවිදූ වන සේක; අනුත්තර පුරුෂදම්‍ය සාරථි වන සේක; දෙවි මිනිසුන්ට ශාස්තෘ වන සේක; බුද්ධ වන සේක; භාග්‍යවත් වන සේක.",
   "english": "Thus indeed is that Blessed One: Worthy, Perfectly Self-Awakened, accomplished in true knowledge and conduct, Well-Gone, Knower of the worlds, the unsurpassed trainer of persons to be tamed, Teacher of gods and humans, the Awakened One, the Blessed One."
  },
  {
   "id": "d4",
   "group": "midday",
   "name": {
    "si": "ධර්ම වන්දනාව",
    "en": "Dhamma Vandanā"
   },
   "pali": "ස්වාක්ඛාතො භගවතා ධම්මො සන්දිට්ඨිකො අකාලිකො ඒහිපස්සිකො ඔපනයිකො පච්චත්තං වෙදිතබ්බො විඤ්ඤූහීති.",
   "translit": "Svākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opanayiko paccattaṃ veditabbo viññūhīti.",
   "sinhala": "භාග්‍යවතුන් වහන්සේ විසින් ධර්මය මනාකොට දේශනා කරන ලද්දේය; සන්දිට්ඨික වන්නේය; අකාලික වන්නේය; ඒහිපස්සික වන්නේය; ඔපනයික වන්නේය; නුවණැත්තන් විසින් තම තමා තුළම අවබෝධ කළ යුත්තේය.",
   "english": "The Dhamma is well proclaimed by the Blessed One, directly visible, timeless, inviting investigation, leading onward, to be personally experienced by the wise."
  },
  {
   "id": "d5",
   "group": "midday",
   "name": {
    "si": "සංඝ වන්දනාව",
    "en": "Saṅgha Vandanā"
   },
   "pali": "සුපටිපන්නො භගවතො සාවක සංඝො, උජුපටිපන්නො භගවතො සාවක සංඝො, ඤායපටිපන්නො භගවතො සාවක සංඝො, සාමීචිපටිපන්නො භගවතො සාවක සංඝො යදිදං චත්තාරි පුරිස යුගානි අට්ඨ පුරිස පුග්ගලා එස භගවතො සාවක සංඝො ආහුනෙය්‍යො පාහුනෙය්‍යො දක්ඛිණෙය්‍යො අඤ්ජලිකරණීයො අනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්සාති.",
   "translit": "Supaṭipanno bhagavato sāvaka saṅgho, ujupaṭipanno bhagavato sāvaka saṅgho, ñāyapaṭipanno bhagavato sāvaka saṅgho, sāmīcipaṭipanno bhagavato sāvaka saṅgho yadidaṃ cattāri purisa yugāni aṭṭha purisa puggalā esa bhagavato sāvaka saṅgho āhuneyyo pāhuneyyo dakkhiṇeyyo añjalikaraṇīyo anuttaraṃ puññakkhettaṃ lokassāti.",
   "sinhala": "භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා මනාව පිළිපන්නේය; ඍජුව පිළිපන්නේය; නිවන් අරමුණු කොට පිළිපන්නේය; සුදුසු පිළිවෙතින් පිළිපන්නේය. එනම් සතර යුගල වශයෙන් පුරුෂ පුද්ගලයෝ අට දෙනෙක් වෙත්ද, ඒ භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා ආහුනෙය්‍ය (ආගන්තුක සත්කාරයට සුදුසු) වන්නේය; පාහුනෙය්‍ය (දුර සිට ගෙනෙන දානයට සුදුසු) වන්නේය; දක්ඛිණෙය්‍ය (දක්ෂිණාවට සුදුසු) වන්නේය; අඤ්ජලිකරණීය (දොහොත් මුදුනේ තබා වැඳීමට සුදුසු) වන්නේය; ලෝකයාගේ අනුත්තර පුණ්‍යක්ෂේත්‍රය වන්නේය.",
   "english": "The Saṅgha of the Blessed One's disciples has practised well, practised uprightly, practised rightly, and practised properly — that is, the four pairs of persons, the eight types of individuals. That Saṅgha of the Blessed One's disciples is worthy of gifts, worthy of hospitality, worthy of offerings, worthy of reverential salutation, the unsurpassed field of merit for the world."
  },
  {
   "id": "d6",
   "group": "midday",
   "name": {
    "si": "දසධම්ම සූත්‍රය - අතීත ප්‍රත්‍යවෙක්ෂාව",
    "en": "Dasadhamma Sutta and Reflection on the Requisites Used"
   },
   "sinhala": "දසධම්ම සූත්‍රය සහ අතීත ප්‍රත්‍යවෙක්ෂාව සජ්ඣායනා කරන්න.",
   "english": "Recite the Dasadhamma Sutta and the reflection on the requisites that have been used (Atīta Paccavekkhaṇā)."
  },
  {
   "id": "d7",
   "group": "midday",
   "name": {
    "si": "මෛත්‍රී භාවනාව",
    "en": "Loving-kindness Meditation"
   },
   "pali": "සුඛී භවෙය්‍යං නිද්දුක්ඛො - අහං නිච්චං අහං විය\nහිතා ච මෙ සුඛී හොන්තු - මජ්ඣත්තා ච වෙරිනො\n\nඉමම්හි ගාමක්ඛෙත්තම්හි - සත්තා හොන්තු සුඛී සදා\nතතො පරඤ්ච රජ්ජෙසු - චක්කවාළෙසු ජන්තුනො\n\nසමන්තා චක්කවාළෙසු - සත්තානන්තෙසු පාණිනො\nසුඛිනො පුග්ගලා භූතා - අත්තභාව ගතා සියුං\n\nතථා ඉත්ථී පුමා චෙව - අරියා අනරියා පි ච\nදෙවා නරා අපායට්ඨා - තථා දස දිසාසූ'ති",
   "translit": "Sukhī bhaveyyaṃ niddukkho - ahaṃ niccaṃ ahaṃ viya\nhitā ca me sukhī hontu - majjhattā ca verino\n\nImamhi gāmakkhettamhi - sattā hontu sukhī sadā\ntato parañca rajjesu - cakkavāḷesu jantuno\n\nSamantā cakkavāḷesu - sattānantesu pāṇino\nsukhino puggalā bhūtā - attabhāva gatā siyuṃ\n\nTathā itthī pumā ceva - ariyā anariyā pi ca\ndevā narā apāyaṭṭhā - tathā dasa disāsū'ti",
   "sinhala": "මම නිරන්තරයෙන් සැප ඇත්තේ වෙම්වා, දුක් නැත්තේ වෙම්වා, මා මෙන් මා හට හිත සත්වයෝද මධ්‍යස්ථයෝ ද වෛරීහුද සැමකල්හි සුවපත් වෙත්වා.\n\nමේ ගමෙහි සකල සත්වයෝ සැම කල්හි සුවපත් වෙත්වා. එයින් ඔබ රාජ්‍යවල සක්වළවල සත්වයෝද සැම කල්හි සුවපත් වෙත්වා.\n\nමේ සක්වළ හාත්පස අනන්ත චක්‍රවාටයන්හි සියලු සත්වයෝ සකල ප්‍රාණීහු සකල පුද්ගලයෝ සකල භූතයෝ සකල ආත්මභාව පර්යාපන්නයෝ සුවපත් වෙත්වා.\n\nඑසේම සියලු ස්ත්‍රීහුද, පුරුෂයෝද, ආර්යයෝද, අනාර්යයෝද, දෙවියෝද, මනුෂ්‍යයෝද, අපායිකයෝද, සුවපත් වෙත්වා. දශ දිශාවෙහි සකල සත්වයෝද සුවපත් වෙත්වා.",
   "english": "May I always be happy and free from suffering; and as I, so may my loved ones, neutral persons and those hostile to me be happy.\n\nMay all beings in this village and region be happy always; and likewise the beings in other realms and world-systems beyond.\n\nMay all beings, all living creatures, all individuals and all who have come to be, in the boundless world-systems all around, be happy.\n\nLikewise, may all women and men, noble ones and worldlings, devas, humans and beings in the lower realms be happy — and all beings in the ten directions."
  },
  {
   "id": "d8",
   "group": "midday",
   "name": {
    "si": "සුගතො වාදය",
    "en": "The Sugata's Exhortation"
   },
   "pali": "1. අප්පමාදෙන භික්ඛවෙ සම්පාදෙථ\nදුල්ලභො බුද්ධුප්පාදො ලොකස්මිං\nදුල්ලභො මනුස්සත්ත පටිලාභො\nදුල්ලභා ඛණ සම්පත්ති\nදුල්ලභා පබ්බජ්ජා\nදුල්ලභං සද්ධම්ම සවණං\nදුල්ලභො සප්පුරිස සංසෙවො\n\n2. ආරභථ නික්ඛමථ - යුඤ්ජථ බුද්ධ සාසනෙ\nධුනාථ මච්චුනො සෙනං - නළාගාරංව කුඤ්ජරො\n\n3. යො ඉමස්මිං ධම්ම විනයෙ - අප්පමත්තො විහෙස්සති\nපහාය ජාති සංසාරං - දුක්ඛස්සන්තං කරිස්සති",
   "translit": "1. Appamādena bhikkhave sampādetha\ndullabho buddhuppādo lokasmiṃ\ndullabho manussatta paṭilābho\ndullabhā khaṇa sampatti\ndullabhā pabbajjā\ndullabhaṃ saddhamma savaṇaṃ\ndullabho sappurisa saṃsevo\n\n2. Ārabhatha nikkhamatha - yuñjatha buddha sāsane\ndhunātha maccuno senaṃ - naḷāgāraṃva kuñjaro\n\n3. Yo imasmiṃ dhamma vinaye - appamatto viharissati\npahāya jāti saṃsāraṃ - dukkhassantaṃ karissati",
   "sinhala": "1. මහණෙනි ! බුදු සසුන ලොව දුර්ලභය. මිනිසත් බව දුර්ලභය. ඉන්ද්‍රිය පරිපූර්ණ ක්ෂණ සම්පත්තිය දුර්ලභය. ශාසන ප්‍රවුජ්‍යාව දුර්ලභය. නෛර්යාණික සද්ධර්මශ්‍රවණය දුර්ලභය. සත් පුරුෂ ආශ්‍රය දුර්ලභය. එසේ හෙයින් නොපමාව සිහි නුවණින් පිළිවෙත් සපුරම්.\n\n2. මේ බුදු සසුනේ පිළිවෙත් පිරීමෙහි ආරම්භ ධාතු වීර්යය කරමි. නික්කම ධාතු වීර්යය ද කරමි. පරාක්‍රමධාතු වීර්යයෙන් යෙදෙමි. යම්සේද? මහා හස්තිරාජයෙකු බටකොල ගෙයක් සිඳ බිඳ දමන්නාක් මෙනි. මර සෙනග පලවාහරිමි.\n\n3. යම් නුවණැත්තෙක් මේ බුදු සස්නෙහි නොපමාව වීර්යය කෙරේ නම් ජාති සංසාරය හැරදමා දුක් කෙළවර කොට නිවන් දකින්නේය.",
   "english": "1. Monks, strive with heedfulness! The arising of a Buddha in the world is rare. Attaining human birth is rare. The fortunate opportunity, with the faculties intact, is rare. Going forth in the Dispensation is rare. Hearing the Saddhamma that leads out of saṃsāra is rare. Association with good people is rare. Therefore, with mindfulness and wisdom, I fulfil the practices without delay.\n\n2. In this Buddha's Dispensation I make the effort of beginning (ārambha), the effort of going forth (nikkama) and the effort of perseverance (parakkama). Just as a great elephant shatters a reed hut, so I shall scatter Māra's army.\n\n3. Whoever lives heedfully in this Dhamma and Discipline will abandon the cycle of birth and make an end of suffering."
  },
  {
   "id": "d9",
   "group": "midday",
   "name": {
    "si": "පටික්කූල මනසිකාරය",
    "en": "Contemplation of the Repulsive (Thirty-two Parts of the Body)"
   },
   "pali": "අත්ථි ඉමස්මිං කායෙ\n\n01. කෙසා, ලොමා, නඛා, දන්තා, තචො\nතචො, දන්තා, නඛා, ලොමා, කෙසා\n\n02. මංසං, නහාරු, අට්ඨි, අට්ඨිමිඤ්ජා, වක්කං\nවක්කං, අට්ඨිමිඤ්ජා, අට්ඨි, නහාරු, මංසං\n\n03. හදයං, යකනං, කිලොමකං, පිහකං, පප්ඵාසං\nපප්ඵාසං, පිහකං, කිලොමකං, යකනං, හදයං\n\n04. අන්තං, අන්තගුණං, උදරියං, කරීසං, මත්ථලුංගං\nමත්ථලුංගං, කරීසං, උදරියං, අන්තගුණං, අන්තං\n\n05. පිත්තං, සෙම්හං, පුබ්බො, ලොහිතං, සෙදො, මෙදො\nමෙදො, සෙදො, ලොහිතං, පුබ්බො, සෙම්හං, පිත්තං\n\n06. අස්සු, වසා, ඛෙළො, සිඞ්ඝාණිකා, ලසිකා, මුත්තං\nමුත්තං, ලසිකා, සිඞ්ඝාණිකා, ඛෙළො, වසා, අස්සු",
   "translit": "Atthi imasmiṃ kāye\n\n01. Kesā, lomā, nakhā, dantā, taco\ntaco, dantā, nakhā, lomā, kesā\n\n02. Maṃsaṃ, nahāru, aṭṭhi, aṭṭhimiñjā, vakkaṃ\nvakkaṃ, aṭṭhimiñjā, aṭṭhi, nahāru, maṃsaṃ\n\n03. Hadayaṃ, yakanaṃ, kilomakaṃ, pihakaṃ, papphāsaṃ\npapphāsaṃ, pihakaṃ, kilomakaṃ, yakanaṃ, hadayaṃ\n\n04. Antaṃ, antaguṇaṃ, udariyaṃ, karīsaṃ, matthaluṅgaṃ\nmatthaluṅgaṃ, karīsaṃ, udariyaṃ, antaguṇaṃ, antaṃ\n\n05. Pittaṃ, semhaṃ, pubbo, lohitaṃ, sedo, medo\nmedo, sedo, lohitaṃ, pubbo, semhaṃ, pittaṃ\n\n06. Assu, vasā, kheḷo, siṅghāṇikā, lasikā, muttaṃ\nmuttaṃ, lasikā, siṅghāṇikā, kheḷo, vasā, assu",
   "sinhala": "මේ කයෙහි ඇත්තේ:\n\n01. හිසකෙස්, ලොම්, නියපොතු, දත්, සම්. (පිළිවෙළ ආපසු) සම්, දත්, නියපොතු, ලොම්, හිසකෙස්.\n\n02. මස්, නහරු, ඇට, ඇටමිදුළු, වකුගඩු. (පිළිවෙළ ආපසු) වකුගඩු, ඇටමිදුළු, ඇට, නහරු, මස්.\n\n03. හදවත, අක්මාව, දළඹ (පටලය), ප්ලීහාව, පෙණහලු. (පිළිවෙළ ආපසු) පෙණහලු, ප්ලීහාව, දළඹ, අක්මාව, හදවත.\n\n04. බඩවැල, බඩවැල් බැඳි පටලය, උදරයෙහි ඇති ආහාර, අශුචි (මළ), මොළය. (පිළිවෙළ ආපසු) මොළය, අශුචි, උදරයෙහි ඇති ආහාර, බඩවැල් බැඳි පටලය, බඩවැල.\n\n05. පිත, සෙම, සැරව, ලේ, දහඩිය, මේද. (පිළිවෙළ ආපසු) මේද, දහඩිය, ලේ, සැරව, සෙම, පිත.\n\n06. කඳුළු, වසාව, කෙළ, සොටු, සන්ධි තෙල් (ලසිකා), මුත්‍රා. (පිළිවෙළ ආපසු) මුත්‍රා, සන්ධි තෙල්, සොටු, කෙළ, වසාව, කඳුළු.",
   "english": "In this body there are:\n\n01. Head-hairs, body-hairs, nails, teeth, skin. (In reverse order) skin, teeth, nails, body-hairs, head-hairs.\n\n02. Flesh, sinews, bones, bone-marrow, kidneys. (In reverse order) kidneys, bone-marrow, bones, sinews, flesh.\n\n03. Heart, liver, pleura, spleen, lungs. (In reverse order) lungs, spleen, pleura, liver, heart.\n\n04. Intestines, mesentery, undigested food, excrement, brain. (In reverse order) brain, excrement, undigested food, mesentery, intestines.\n\n05. Bile, phlegm, pus, blood, sweat, fat. (In reverse order) fat, sweat, blood, pus, phlegm, bile.\n\n06. Tears, grease, spittle, snot, synovial fluid, urine. (In reverse order) urine, synovial fluid, snot, spittle, grease, tears."
  },
  {
   "id": "d10",
   "group": "midday",
   "name": {
    "si": "දෙවියන්ට ඤාතීන්ට පින් අනුමෝදන් කිරීම",
    "en": "Sharing Merit with Devas and Relatives"
   },
   "pali": "එත්තාවතා ච අම්හෙහි - සම්භතං පුඤ්ඤ සම්පදං\nසබ්බෙ දෙවා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ භූතා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ සත්තා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\n\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ දෙසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාවකං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු මං පරං\n\nඉදං වො ඤාතීනං හොතු - සුඛිතා හොන්තු ඤාතයො\n\nඉමස්මිං විහාරෙ ආරාමෙ - අධිවත්ථා ච දෙවතා\nඅනුමොදිත්වා ඉමං පුඤ්ඤං - රක්ඛන්තු ජින සාසනං",
   "translit": "Ettāvatā ca amhehi - sambhataṃ puñña sampadaṃ\nsabbe devā anumodantu - sabba sampatti siddhiyā\nsabbe bhūtā anumodantu - sabba sampatti siddhiyā\nsabbe sattā anumodantu - sabba sampatti siddhiyā\n\nĀkāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāsanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha desanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāvakaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu maṃ paraṃ\n\nIdaṃ vo ñātīnaṃ hotu - sukhitā hontu ñātayo\n\nImasmiṃ vihāre ārāme - adhivatthā ca devatā\nanumoditvā imaṃ puññaṃ - rakkhantu jina sāsanaṃ",
   "sinhala": "මෙතෙකින් අප විසින් රැස් කරන ලද පුණ්‍ය සම්පත්තිය සකල සම්පත් සිදුවීම පිණිස සියළු දෙවියෝද, සියළු භූතයෝද, සියළු සත්වයෝද අනුමෝදන් වෙත්වා!\n\nඅහසෙහි විමන් හිද පොළොවෙහි වෘක්ෂ පර්වතාදියෙහි අධිගෘහිත වූද, මහත් සෘද්ධි ඇති දෙවියෝද, බ්‍රහ්මයෝද පින් අනුමෝදන්ව සාසනයද, ධර්මයද, ශ්‍රාවකයන්ද, මාද අන්‍යයන්ද යහතින් බොහෝ කල් රකිත්වා!\n\nමේ පින ඤාතීන්ට අත්වේවා! ඤාතීහු ලොව්තුරා සුවයෙන් සුවපත් වේවා!\n\nමේ විහාරාරාමයෙහි අධිගෘහිත දෙවියෝ මේ පින් අනුමෝදන්ව ජින සාසනය රකිත්වා!",
   "english": "By this accumulation of merit that we have gathered here, may all devas rejoice, for the accomplishment of every success; may all beings who have come to be rejoice, for the accomplishment of every success; may all living beings rejoice, for the accomplishment of every success.\n\nMay the mighty devas and nāgas who dwell in the sky and on the earth — in the heavenly mansions, trees, mountains and the like — rejoicing in this merit, long protect the Buddha's Dispensation, the Dhamma, the Buddha's disciples, and me and others.\n\nMay this merit be for our relatives! May our relatives be happy, with the supramundane happiness!\n\nMay the deities who dwell in this monastery and park, rejoicing in this merit, long protect the Victor's Dispensation."
  },
  {
   "id": "d11",
   "group": "midday",
   "name": {
    "si": "ප්‍රතිපත්ති පූජාව",
    "en": "Offering of Practice"
   },
   "pali": "ඉමාය ධම්මානුධම්ම පටිපත්තියා බුද්ධං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා ධම්මං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා සංඝං පූජෙමි\nඅද්ධා ඉමාය පටිපත්තියා ජාති ජරා මරණම්හා පරිමුච්චිස්සාමි",
   "translit": "Imāya dhammānudhamma paṭipattiyā buddhaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā dhammaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā saṅghaṃ pūjemi\naddhā imāya paṭipattiyā jāti jarā maraṇamhā parimuccissāmi",
   "sinhala": "මේ ධර්මානු ධර්ම ප්‍රතිපත්තියෙන් බුද්ධ රත්නය, ධර්ම රත්නය, සංඝ රත්නය පූජා කරමි. ඒකාන්තයෙන් මෙම ප්‍රතිපත්තියෙන් ජාති, ජරා මරණයෙන් අත මිදෙන්නෙමි.",
   "english": "By this practice in accordance with the Dhamma, I honour the Buddha. By this practice in accordance with the Dhamma, I honour the Dhamma. By this practice in accordance with the Dhamma, I honour the Saṅgha. Surely, by this practice I shall be freed from birth, ageing and death."
  },
  {
   "id": "d12",
   "group": "midday",
   "name": {
    "si": "තෙරුවන් කමා කරවීම",
    "en": "Asking Forgiveness of the Triple Gem"
   },
   "pali": "කායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ භන්තෙ - භූරිපඤ්ඤ තථාගත\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ ධම්ම - සන්දිට්ඨික අකාලික\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ සංඝ - පුඤ්ඤක්ඛෙත්ත අනුත්තර",
   "translit": "Kāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me bhante - bhūripañña tathāgata\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me dhamma - sandiṭṭhika akālika\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me saṅgha - puññakkhetta anuttara",
   "sinhala": "ස්වාමිනි මහා ප්‍රඥා තථාගතයන් වහන්ස! කයින්, වචනයෙන් සිතින් කරන ලද පමා වරදට මට ක්ෂමා වන සේක්වා!\n\nසාන්දෘෂ්ටික අකාලික ශ්‍රී සද්ධර්මය කෙරෙහි කයින් වචනයෙන් සිතින් කරන ලද පම වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nඅනුත්තර දක්ෂිණාර්හ වූ මහා සංඝ රත්නය කෙරෙහි කයින් වචනයෙන් සිදු වූ පමා වරදට, සංඝ රත්නය මට ක්ෂමා වන සේක්වා!",
   "english": "By body, speech and mind, a fault was committed by me through heedlessness. Venerable Sir, Tathāgata of great wisdom, forgive me my transgression!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Dhamma, visible here and now and timeless!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Saṅgha, the unsurpassed field of merit!"
  },
  {
   "id": "d13",
   "group": "midday",
   "name": {
    "si": "වෘද්ධාපචායන",
    "en": "Honouring the Elders"
   },
   "pali": "අභිවාදන සීලිස්ස - නිච්චං වද්ධාපචායිනො\nචත්තාරො ධම්මා වඩ්ඪන්ති - ආයු වණ්ණො සුඛං බලං",
   "translit": "Abhivādana sīlissa - niccaṃ vaddhāpacāyino\ncattāro dhammā vaḍḍhanti - āyu vaṇṇo sukhaṃ balaṃ",
   "sinhala": "ගුරුවරුන් වැඳීම ශීලයක් කොට ඇති, නිතර වැඩිහිටියන්ට ගරු කරන්නාට ආයුෂ, වර්ණය, සැපය, බලය යන ධර්ම සතර වැඩේ.",
   "english": "For one who is in the habit of paying respect and who always honours the elders, four things increase: life, beauty, happiness and strength."
  },
  {
   "id": "e1",
   "group": "evening",
   "name": {
    "si": "නමස්කාරය",
    "en": "Homage"
   },
   "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස !!!",
   "translit": "Namo tassa bhagavato arahato sammā sambuddhassa !!!",
   "sinhala": "ඒ භාග්‍යවත් අර්හත් සම්මා සම්බුදු රජාණන් වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Homage to the Blessed One, the Worthy One, the Perfectly Self-Awakened One!"
  },
  {
   "id": "e2",
   "group": "evening",
   "name": {
    "si": "ආරාධනාව",
    "en": "Invitation"
   },
   "pali": "යාවතා භගවා ලොකෙ - තිට්ඨෙය්‍ය තව සාසනං\nතාවතා පතිගණ්හාතු - පූජා ලොකානුකම්පයා",
   "translit": "Yāvatā bhagavā loke - tiṭṭheyya tava sāsanaṃ\ntāvatā patigaṇhātu - pūjā lokānukampayā",
   "sinhala": "භාග්‍යවතුන් වහන්ස ! යම්තාක් ඔබ ශාසනය ලොවැ පවතී නම්, ඒතාක් ලෝකානුකම්පාවෙන් සියලු පූජාවන් පිළිගන්නා සේක්වා !",
   "english": "Blessed One, for as long as Your Dispensation endures in the world, for that long may You, out of compassion for the world, accept all these offerings!"
  },
  {
   "id": "e3",
   "group": "evening",
   "name": {
    "si": "පහන් පූජාව",
    "en": "Offering of Lamps"
   },
   "pali": "ගන්ධතෙලප්ප දිත්තෙන - දීපෙන තම ධංසිනා\nතිලොක දීපං සම්බුද්ධං - පූජයාමි තමොනුදං",
   "translit": "Gandhatelappa dittena - dīpena tama dhaṃsinā\ntiloka dīpaṃ sambuddhaṃ - pūjayāmi tamonudaṃ",
   "sinhala": "සුවඳ තෙලින් දල්වූ, අදුර දුරලන්නා වූ මේ පහනින් තුන් ලොවට පහනක් වූ, මෝහාන්ධකාරය දුරුලු බුදුරජාණන් වහන්සේ පුදමි.",
   "english": "With this lamp lit with fragrant oil, which dispels the darkness, I honour the Perfectly Awakened One, the lamp of the three worlds, who has dispelled the darkness of delusion."
  },
  {
   "id": "e4",
   "group": "evening",
   "name": {
    "si": "සුවඳ පූජාව",
    "en": "Offering of Fragrance"
   },
   "pali": "සුගන්ධිකාය වදනං - අනන්ත ගුණ ගන්ධිනං\nසුගන්ධිනාහං ගන්ධෙන - පූජයාමි තථාගතං",
   "translit": "Sugandhikāya vadanaṃ - ananta guṇa gandhinaṃ\nsugandhināhaṃ gandhena - pūjayāmi tathāgataṃ",
   "sinhala": "සුවඳවත් කයක් හා ශ්‍රී මුඛයක්ද ඇති අනන්ත වූ ගුණ සුවදින් සුවඳවත් වූ තථාගත බුදුරජාණන් වහන්සේ මෙම සුවදින් පූජා කරමි. පූජා වේවා !",
   "english": "I honour the Tathāgata, whose body and face are fragrant, and who is perfumed with the fragrance of boundless virtues, with this fragrance. May this offering be accomplished!"
  },
  {
   "id": "e5",
   "group": "evening",
   "name": {
    "si": "පැන් පූජාව",
    "en": "Offering of Water"
   },
   "pali": "සුගන්ධං සීතලං කප්පං - පසන්න මධුරං සුභං\nපානීය මෙතං භගවා - පතිගණ්හාතු මුත්තම",
   "translit": "Sugandhaṃ sītalaṃ kappaṃ - pasanna madhuraṃ subhaṃ\npānīya metaṃ bhagavā - patigaṇhātu muttama",
   "sinhala": "උතුම් භාග්‍යවතුන් වහන්ස ! සුවදින් සුවඳවත් වූ ද සිහිල් වූ ද කැප වූද, පහන්, මිහිරි, පිවිතුරු මේ පැන් පිළිගන්නා සේක්වා !\n\nසාධු ! සාධු ! සාධු !",
   "english": "Supreme Blessed One, may You accept this water, which is fragrant, cool, suitable, clear, sweet and pure!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e6",
   "group": "evening",
   "name": {
    "si": "ගිලන්පස පූජාව",
    "en": "Offering of Medicinal Drink"
   },
   "pali": "අධිවාසෙතු නො භන්තෙ - ගිලාන පච්චයං ඉමං\nඅනුකම්පං උපාදාය - පතිගණ්හාතු මුත්තම\n\nඅධිවාසෙතු නො භන්තෙ - පානකං පරිකප්පිතං\nඅනුකම්පං උපාදාය - පතිගණ්හාතු මුත්තම",
   "translit": "Adhivāsetu no bhante - gilāna paccayaṃ imaṃ\nanukampaṃ upādāya - patigaṇhātu muttama\n\nAdhivāsetu no bhante - pānakaṃ parikappitaṃ\nanukampaṃ upādāya - patigaṇhātu muttama",
   "sinhala": "ස්වාමීනි ! අපගේ ආරාධනාව ඉවසන සේක්වා ! අනුකම්පාවෙන් ගිලන්පසට වන මේ ප්‍රත්‍යය පිළිගන්නා සේක්වා, උතුම් වූ ස්වාමීනි !\n\nස්වාමීනි ! අපගේ ආරාධනාව ඉවසන සේක්වා ! අප විසින් සකස් කළ මේ පානය අනුකම්පාවෙන් පිළිගන්නා සේක්වා, උතුම් වූ ස්වාමීනි !",
   "english": "Venerable Sir, may You accept our invitation! Out of compassion, may You accept this requisite for the sick, O Supreme One!\n\nVenerable Sir, may You accept our invitation! Out of compassion, may You accept this drink that we have prepared, O Supreme One!"
  },
  {
   "id": "e7",
   "group": "evening",
   "name": {
    "si": "මල් පූජාව",
    "en": "Offering of Flowers"
   },
   "pali": "වණ්ණ ගන්ධ ගුණොපෙතං - එතං කුසුම සන්තතිං\nපූජයාමි මුනින්දස්ස - සිරිපාද සරොරුහෙ\n\nපූජෙමි බුද්ධං කුසුමෙන නෙන\nපුඤ්ඤෙන මෙතෙන ලභාමි මොක්ඛං\nපුප්ඵං මිලායාති යථා ඉදං මෙ\nකායො තථා යාති විනාස භාවං\n\nනිරොධ සමාපත්තිතො වුට්ඨහිත්වා විය නිසින්නං භගවන්තං අරහන්තං සම්මා සම්බුද්ධං ඉමිනා පුප්ඵෙන පූජෙමි පූජෙමි පූජෙමි. අයං පුප්ඵ පූජා බුද්ධ පච්චෙක බුද්ධ අග්ගසාවක මහා සාවක අරහන්තාදීනං සභාවසීලං අහම්පි තෙසං අනුවත්තකො හොමි. ඉදං පුප්ඵං ඉදානි වණ්ණෙනපි සුවණ්ණං ගන්ධෙනපි සුගන්ධං සණ්ඨානෙනපි සුසණ්ඨානං ඛිප්පමෙව දුබ්බණ්ණං දුග්ගන්ධං දුස්සණ්ඨානං අනිච්චතං පාපුණිස්සති එවමෙව ඛො සබ්බෙ සංඛාරා අනිච්චා සබ්බෙ සංඛාරා දුක්ඛා සබ්බෙ ධම්මා අනත්තාති.",
   "translit": "Vaṇṇa gandha guṇopetaṃ - etaṃ kusuma santatiṃ\npūjayāmi munindassa - siripāda saroruhe\n\nPūjemi buddhaṃ kusumena nena\npuññena metena labhāmi mokkhaṃ\npupphaṃ milāyāti yathā idaṃ me\nkāyo tathā yāti vināsa bhāvaṃ\n\nNirodha samāpattito vuṭṭhahitvā viya nisinnaṃ bhagavantaṃ arahantaṃ sammā sambuddhaṃ iminā pupphena pūjemi pūjemi pūjemi. Ayaṃ puppha pūjā buddha pacceka buddha aggasāvaka mahā sāvaka arahantādīnaṃ sabhāvasīlaṃ ahampi tesaṃ anuvattako homi. Idaṃ pupphaṃ idāni vaṇṇenapi suvaṇṇaṃ gandhenapi sugandhaṃ saṇṭhānenapi susaṇṭhānaṃ khippameva dubbaṇṇaṃ duggandhaṃ dussaṇṭhānaṃ aniccataṃ pāpuṇissati evameva kho sabbe saṅkhārā aniccā sabbe saṅkhārā dukkhā sabbe dhammā anattāti.",
   "sinhala": "මනා වර්ණයන් හා සුගන්ධයෙන් යුක්ත මේ මල් සමූහයෙන් මුනීන්ද්‍රයන් වහන්සේගේ ශ්‍රී පාද පද්මයෙහි පූජා කරමි.\n\nමම මේ මලින් බුදුරජාණන් වහන්සේ පුදන්නෙමි. මේ පිනෙන් නිවන් ලබම්වා ! මේ මල මැලවෙන්නාසේ මාගේ සිරුරද විනාශයට පත්වන්නේය.\n\nනිරෝධ සමාපත්තියෙන් නැගී වැඩ සිටින වැනි භාග්‍යවත් අර්හත් සම්මා සම්බුදුරජාණන් වහන්සේට මේ මලින් පූජා කරමි. පූජා කරමි. පූජා කරමි. මේ මල් පූජාව බුදු පසේබුදු අගසව් මහ සව් රහත් ආදී උතුමන්ගේ ස්වභාව චාරිත්‍රයකි. මමද උන්වහන්සේලා අනුව පවතිමි.\n\nදැන් මේ මල වර්ණයෙන්ද, යහපත් වර්ණ ඇත්තේය. සුවඳිනුද, මිහිරි සුවඳ ඇත්තේය. සටහනින්, මනහර සටහන් ඇත්තේය. එහෙත් තව මොහොතකින් දුර්වර්ණයටද, දුර්ගන්ධයටද, දුස්සණ්ඨානයටද, අනිත්‍ය භාවයටද පත් වන්නේය. එපරිද්දෙන්ම සියළු සංස්කාරයෝ අනිත්‍යයහ. දුක්ඛයහ. සියලු ධර්මයෝ අනාත්මයහ.\n\n(මේ සන්ධ්‍යා වන්දනාවේදී වන්දනාවට ප්‍රථමයෙන් පූජා පවත්වන ගාථාය. මෙයින් පිට තවත් පූජාවන් ඇතොත් සුදුසු පරිදි ඒ ඒ ගාථා කියා පූජාවන් කරනු)",
   "english": "With this cluster of flowers, endowed with fine colour and fragrance, I make offering at the lotus-feet of the Lord of Sages.\n\nI honour the Buddha with these flowers. By this merit may I attain Nibbāna! Just as this flower withers, so too my body will go to destruction.\n\nAs if risen from the attainment of cessation and seated, I honour the Blessed One, the Worthy, the Perfectly Self-Awakened One, with this flower; I honour, I honour, I honour. This flower-offering is the natural practice of the Buddhas, Paccekabuddhas, chief disciples, great disciples, arahants and others; I too follow them.\n\nNow this flower is beautiful in colour, fragrant, and well-formed; yet in a moment it will become ugly in colour, foul in smell and misshapen, and will reach its end. Just so, all conditioned things are impermanent, all conditioned things are suffering, and all phenomena are not-self.\n\n(In this evening Vandanā, these are the verses for the offerings made before the veneration. If there are further offerings besides these, recite the appropriate verses for them.)"
  },
  {
   "id": "e8",
   "group": "evening",
   "name": {
    "si": "බුද්ධ වන්දනාව",
    "en": "Buddha Vandanā"
   },
   "pali": "ඉතිපි සො භගවා අරහං සම්මා සම්බුද්ධො විජ්ජාචරණ සම්පන්නො සුගතො ලොකවිදූ අනුත්තරො පුරිසදම්ම සාරථි සත්ථා දෙවමනුස්සානං බුද්ධො භගවාති.",
   "translit": "Itipi so bhagavā arahaṃ sammā sambuddho vijjācaraṇa sampanno sugato lokavidū anuttaro purisadamma sārathi satthā devamanussānaṃ buddho bhagavāti.",
   "sinhala": "ඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ මෙසේ ද අර්හත් වන සේක; සම්මා සම්බුද්ධ වන සේක; විද්‍යාචරණ සම්පන්න වන සේක; සුගත වන සේක; ලෝකවිදූ වන සේක; අනුත්තර පුරුෂදම්‍ය සාරථි වන සේක; දෙවි මිනිසුන්ට ශාස්තෘ වන සේක; බුද්ධ වන සේක; භාග්‍යවත් වන සේක.",
   "english": "Thus indeed is that Blessed One: Worthy, Perfectly Self-Awakened, accomplished in true knowledge and conduct, Well-Gone, Knower of the worlds, the unsurpassed trainer of persons to be tamed, Teacher of gods and humans, the Awakened One, the Blessed One."
  },
  {
   "id": "e9",
   "group": "evening",
   "name": {
    "si": "අරහං",
    "en": "The Worthy One (Arahaṃ)"
   },
   "pali": "සො භගවා ඉතිපි අරහං, අරහං වත සො භගවා, තං භගවන්තං අරහන්තං සිරසා නමාමි, තස්ස භගවතො අරහතො අත්තානං පරිච්චජාමි, පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො අරහතො, සාවකො හමස්මි සිස්සො හමස්මි.\n\nආරකත්තා හතත්තා ච - කිලෙසාරීන සො මුනි\nහත සංසාර චක්කාරො - පච්චයාදීන චාරහො\nන රහො කරොති පාපානි - අරහං තං නමාමහං",
   "translit": "So bhagavā itipi arahaṃ, arahaṃ vata so bhagavā, taṃ bhagavantaṃ arahantaṃ sirasā namāmi, tassa bhagavato arahato attānaṃ pariccajāmi, pariccattoyeva me attā tassa bhagavato arahato, sāvako hamasmi sisso hamasmi.\n\nĀrakattā hatattā ca - kilesārīna so muni\nhata saṃsāra cakkāro - paccayādīna cāraho\nna raho karoti pāpāni - arahaṃ taṃ namāmahaṃ",
   "sinhala": "ස්වාමීනි, භාග්‍යවතුන් වහන්ස! ඔබ වහන්සේ මෙසේද අර්හත් නම් වන සේක. ඒකාන්තයෙන් අර්හත් නම් වන සේක. ඔබ වහන්සේට මාගේ නමස්කාරය වේවා! ඔබ වහන්සේට මාගේ ජීවිතය පූජා කරමි. පූජා වේවා! මම ඔබ වහන්සේගේ ශ්‍රාවක වෙමි. ශිෂ්‍යයෙක් වෙමි.\n\nකෙලෙසුන් කෙරෙන් දුරු වූ හෙයින් ද, කෙලෙස් සතුරන් නැසූ හෙයින් ද, සංසාර චක්‍රය නැසූ හෙයින් ද, පූජාවන්ට සුදුසු වූ හෙයින් ද, රහසෙන් පවක් නැති හෙයින් ද, අර්හත් නම් වූ භාග්‍යවතුන් වහන්සේට නමස්කාර කරමි. නමස්කාර වේවා.",
   "english": "Blessed One, indeed You are the Worthy One; truly You are the Worthy One. I bow with my head to the Blessed One, the Worthy One. I give up myself to that Blessed One, the Worthy One. Given up indeed is my self to that Blessed One, the Worthy One. I am Your disciple; I am Your pupil. Homage be to You! I offer my life to You. May this offering be accomplished!\n\nBecause he is far from defilements, because he has destroyed the enemies (defilements), because he has destroyed the wheel of saṃsāra, because he is worthy of offerings, and because he does no evil even in secret, I pay homage to the Blessed One who is called Arahant. Homage be to him!"
  },
  {
   "id": "e10",
   "group": "evening",
   "name": {
    "si": "සම්මා සම්බුද්ධො",
    "en": "The Perfectly Self-Awakened One (Sammāsambuddho)"
   },
   "pali": "සො භගවා ඉතිපි සම්මා සම්බුද්ධො, සම්මා සම්බුද්ධො වත සො භගවා, තං භගවන්තං සම්මා සම්බුද්ධං සිරසා නමාමි. තස්ස භගවතො සම්මා සම්බුද්ධස්ස අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො සම්මා සම්බුද්ධස්ස, සාවකො හමස්මි සිස්සො හමස්මි.\n\nසම්මා සම්බුද්ධ සද්ධම්ම - සම්මා සම්බුද්ධ දෙසන\nසම්මා සම්බුද්ධ සෙදයස්ස - සම්මා සම්බුද්ධ තෙ නමො",
   "translit": "So bhagavā itipi sammā sambuddho, sammā sambuddho vata so bhagavā, taṃ bhagavantaṃ sammā sambuddhaṃ sirasā namāmi. Tassa bhagavato sammā sambuddhassa attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato sammā sambuddhassa, sāvako hamasmi sisso hamasmi.\n\nSammā sambuddha saddhamma - sammā sambuddha desana\nsammā sambuddha sedayassa - sammā sambuddha te namo",
   "sinhala": "සකල සද්ධර්මය සර්වාකාරයෙන් අවබෝධ කොට වදාළ සම්මා සම්බුදුරජාණන් වහන්ස! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා.",
   "english": "Blessed One, indeed You are the Perfectly Self-Awakened One. I bow with my head to the Blessed One, the Perfectly Self-Awakened One. I give up myself to him. I am Your disciple; I am Your pupil.\n\nPerfectly Self-Awakened One, who fully understood the entire true Dhamma in every aspect and taught it: homage be to You!"
  },
  {
   "id": "e11",
   "group": "evening",
   "name": {
    "si": "විජ්ජාචරණ සම්පන්නො",
    "en": "Accomplished in Knowledge and Conduct (Vijjācaraṇasampanno)"
   },
   "pali": "සො භගවා ඉතිපි විජ්ජාචරණ සම්පන්නො, විජ්ජාචරණ සම්පන්නො වත සො භගවා. තං භගවන්තං විජ්ජාචරණ සම්පන්නං සිරසා නමාමි. තස්ස භගවතො විජ්ජාචරණ සම්පන්නස්ස අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො විජ්ජාචරණ සම්පන්නස්ස. සාවකො හමස්මි සිස්සො හමස්මි.\n\nවිජ්ජාචරණ සම්පන්නො - තිස්සො විජ්ජා පකාසිතා\nඅට්ඨ විජ්ජා පඤ්චදස - චරණං තං නමාමහං",
   "translit": "So bhagavā itipi vijjācaraṇa sampanno, vijjācaraṇa sampanno vata so bhagavā. Taṃ bhagavantaṃ vijjācaraṇa sampannaṃ sirasā namāmi. Tassa bhagavato vijjācaraṇa sampannassa attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato vijjācaraṇa sampannassa. Sāvako hamasmi sisso hamasmi.\n\nVijjācaraṇa sampanno - tisso vijjā pakāsitā\naṭṭha vijjā pañcadasa - caraṇaṃ taṃ namāmahaṃ",
   "sinhala": "ත්‍රිවිද්‍යා, අෂ්ට විද්‍යා හා පසළොස් චරණ ධර්මයෙන් ද සමන්විත වූ විජ්ජාචරණ සම්පන්නයන් වහන්ස ! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Blessed One, indeed You are accomplished in knowledge and conduct. I bow with my head to the Blessed One, accomplished in knowledge and conduct. I give up myself to him. I am Your disciple; I am Your pupil.\n\nYou who are endowed with the three knowledges, the eight knowledges and the fifteen practices of conduct: homage be to You!"
  },
  {
   "id": "e12",
   "group": "evening",
   "name": {
    "si": "සුගතො",
    "en": "The Well-Gone One (Sugato)"
   },
   "pali": "සො භගවා ඉතිපි සුගතො, සුගතො වත සො භගවා. තං භගවන්තං සුගතං සිරසා නමාමි, තස්ස භගවතො සුගතස්ස අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො සුගතස්ස, සාවකො හමස්මි සිස්සො හමස්මි.\n\nසුගතත්තා සුගත්තත්තා - සොභනා යස්ස වා ගති\nගතත්තා සුන්දරං ඨානං - සුගතො නාම තෙ නමො",
   "translit": "So bhagavā itipi sugato, sugato vata so bhagavā. Taṃ bhagavantaṃ sugataṃ sirasā namāmi, tassa bhagavato sugatassa attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato sugatassa, sāvako hamasmi sisso hamasmi.\n\nSugatattā sugattattā - sobhanā yassa vā gati\ngatattā sundaraṃ ṭhānaṃ - sugato nāma te namo",
   "sinhala": "ශෝභන වචන ඇති හෙයින් ද, ශෝභන ශරීර ඇති හෙයින් ද, ශෝභන ගමන් ඇති හෙයින් ද, සුන්දර නිවනට වැඩිය හෙයින් ද, සුගත නම් වූ භාග්‍යවතුන් වහන්ස ! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා.",
   "english": "Blessed One, indeed You are the Well-Gone One. I bow with my head to the Blessed One, the Well-Gone One. I give up myself to him. I am Your disciple; I am Your pupil.\n\nBecause of beautiful speech, a beautiful body and a beautiful going, and because he has gone to the beautiful state of Nibbāna, O Blessed One called Sugata: homage be to You!"
  },
  {
   "id": "e13",
   "group": "evening",
   "name": {
    "si": "ලොකවිදූ",
    "en": "The Knower of the Worlds (Lokavidū)"
   },
   "pali": "සො භගවා ඉතිපි ලොකවිදූ, ලොකවිදූ වත සො භගවා, තං භගවන්තං ලොකවිදුං සිරසා නමාමි, තස්ස භගවතො ලොකවිදුනො අත්තානං පරිච්චජාමි, පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො ලොකවිදුනො, සාවකො හමස්මි, සිස්සො හමස්මි.\n\nසත්තාවාසාදි සංඛාතෙ - කාමරූපාදිකෙ තථා\nසංඛාර සත්ත ඔකාස - ලොකෙ යො වෙදි තං නමෙ",
   "translit": "So bhagavā itipi lokavidū, lokavidū vata so bhagavā, taṃ bhagavantaṃ lokaviduṃ sirasā namāmi, tassa bhagavato lokaviduno attānaṃ pariccajāmi, pariccattoyeva me attā tassa bhagavato lokaviduno, sāvako hamasmi, sisso hamasmi.\n\nSattāvāsādi saṅkhāte - kāmarūpādike tathā\nsaṅkhāra satta okāsa - loke yo vedi taṃ name",
   "sinhala": "සත්ත්ව - සංස්කාර අවකාශ ලෝකයන් ද කාමරූප අරූපාදී සකල ලෝකයන් ද සර්වාකාරයෙන් අවබෝධ කළ ලෝකවිදූන් වහන්ස. ඔබ වහන්සේට මාගේ නමස්කාරය වේවා.",
   "english": "Blessed One, indeed You are the Knower of the worlds. I bow with my head to the Blessed One, the Knower of the worlds. I give up myself to him. I am Your disciple; I am Your pupil.\n\nO Knower of the worlds, who fully understood the worlds of beings, of formations and of space, and all the worlds beginning with the sense-sphere and the form and formless spheres: homage be to You!"
  },
  {
   "id": "e14",
   "group": "evening",
   "name": {
    "si": "අනුත්තරො පුරිසදම්ම සාරථි",
    "en": "The Unsurpassed Trainer of Persons (Anuttaro Purisadammasārathi)"
   },
   "pali": "සො භගවා ඉතිපි අනුත්තරො පුරිසදම්ම සාරථී, අනුත්තරො පුරිසදම්ම සාරථී වත සො භගවා, තං භගවන්තං අනුත්තරං පුරිසදම්ම සාරථිං සිරසා නමාමි, තස්ස භගවතො අනුත්තරස්ස පුරිසදම්ම සාරථිනො අත්තානං පරිච්චජාමි, පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො අනුත්තරස්ස පුරිසදම්ම සාරථිනො, සාවකො හමස්මි, සිස්සො හමස්මි.\n\nයො ලොකෙ අනුත්තරො දෙව - බ්‍රහ්ම සුර නරොරගෙ\nදමෙසි දම්මෙ පුරිසෙ - සාරථිං තං නමාමහං",
   "translit": "So bhagavā itipi anuttaro purisadamma sārathī, anuttaro purisadamma sārathī vata so bhagavā, taṃ bhagavantaṃ anuttaraṃ purisadamma sārathiṃ sirasā namāmi, tassa bhagavato anuttarassa purisadamma sārathino attānaṃ pariccajāmi, pariccattoyeva me attā tassa bhagavato anuttarassa purisadamma sārathino, sāvako hamasmi, sisso hamasmi.\n\nYo loke anuttaro deva - brahma sura narorage\ndamesi damme purise - sārathiṃ taṃ namāmahaṃ",
   "sinhala": "ලොව දමනය කටයුතු වූ දෙවි බඹ සුර අසුර නර නාගාදීන් දමනය කළාවූ අනුත්තර පුරිසදම්ම සාරථීන් වහන්ස ! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Blessed One, indeed You are the unsurpassed trainer of persons to be tamed. I bow with my head to the Blessed One, the unsurpassed trainer of persons to be tamed. I give up myself to him. I am Your disciple; I am Your pupil.\n\nO unsurpassed trainer, who tamed the devas, Brahmās, asuras, humans and nāgas of the world who were fit to be tamed: homage be to You!"
  },
  {
   "id": "e15",
   "group": "evening",
   "name": {
    "si": "සත්ථා දෙවමනුස්සානං",
    "en": "The Teacher of Gods and Humans (Satthā Devamanussānaṃ)"
   },
   "pali": "සො භගවා ඉතිපි සත්ථා දෙව මනුස්සානං, සත්ථා දෙව මනුස්සානං වත සො භගවා. තං භගවන්තං සත්ථාරං දෙව මනුස්සානං සිරසා නමාමි. තස්ස භගවතො සත්ථුනො දෙව මනුස්සානං අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො සත්ථුනො දෙව මනුස්සානං සාවකො හමස්මි, සිස්සො හමස්මි.\n\nදාතා තිභව සම්පත්තිං - නෙතා සීව පුරං වරං\nසත්ථා දෙව මනුස්සානං - තං නමාමි නරුත්තමං",
   "translit": "So bhagavā itipi satthā deva manussānaṃ, satthā deva manussānaṃ vata so bhagavā. Taṃ bhagavantaṃ satthāraṃ deva manussānaṃ sirasā namāmi. Tassa bhagavato satthuno deva manussānaṃ attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato satthuno deva manussānaṃ sāvako hamasmi, sisso hamasmi.\n\nDātā tibhava sampattiṃ - netā sīva puraṃ varaṃ\nsatthā deva manussānaṃ - taṃ namāmi naruttamaṃ",
   "sinhala": "ත්‍රිභව සම්පත් ගෙන දෙන්නා වූ, ශාන්ත නිවන් පුරයට පමුණුවන්නා වූ නරෝත්තම වූ දෙවි මිනිසුන්ගේ ශාස්තෘන් වහන්ස ඔබ වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Blessed One, indeed You are the Teacher of gods and humans. I bow with my head to the Blessed One, the Teacher of gods and humans. I give up myself to him. I am Your disciple; I am Your pupil.\n\nO Teacher of gods and humans, the best of men, who bestow the prosperity of the three realms and lead beings to the excellent city of peace (Nibbāna): homage be to You!"
  },
  {
   "id": "e16",
   "group": "evening",
   "name": {
    "si": "බුද්ධො",
    "en": "The Awakened One (Buddho)"
   },
   "pali": "සො භගවා ඉතිපි බුද්ධො, බුද්ධො වත සො භගවා තං භගවන්තං බුද්ධං සිරසා නමාමි. තස්ස භගවතො බුද්ධස්ස අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො බුද්ධස්ස සාවකො හමස්මි. සිස්සො හමස්මි.\n\nචතුසච්චං අබුජ්ඣිත්ථ - බොධෙතා යො පජාය ච\nසාමං සච්චානි සම්බුජ්ඣි - තං බුද්ධං පණමාමහං",
   "translit": "So bhagavā itipi buddho, buddho vata so bhagavā taṃ bhagavantaṃ buddhaṃ sirasā namāmi. Tassa bhagavato buddhassa attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato buddhassa sāvako hamasmi. Sisso hamasmi.\n\nCatusaccaṃ abujjhittha - bodhetā yo pajāya ca\nsāmaṃ saccāni sambujjhi - taṃ buddhaṃ paṇamāmahaṃ",
   "sinhala": "චතුරාර්ය සත්‍ය අවබෝධ කළාවූද අන්‍යයන්ට අවබෝධ කරවූද, තමන් වහන්සේම සර්වප්‍රකාරයෙන් සත්‍ය අවබෝධ කළාවූ බුදුරජාණන් වහන්ස ! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Blessed One, indeed You are the Awakened One. I bow with my head to the Blessed One, the Buddha. I give up myself to him. I am Your disciple; I am Your pupil.\n\nO Buddha, who awakened to the Four Noble Truths and awakened others too, who understood the truths by yourself in every aspect: homage be to You!"
  },
  {
   "id": "e17",
   "group": "evening",
   "name": {
    "si": "භගවා",
    "en": "The Blessed One (Bhagavā)"
   },
   "pali": "සො භගවා ඉතිපි භගවා, භගවා වත සො භගවා තං භගවන්තං භගවන්තං සිරසා නමාමි. තස්ස භගවතො භගවතො අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො භගවතො, සාවකො හමස්මි, සිස්සො හමස්මි.\n\nභාග්‍යවා භග්ගවා යුත්තො - භගෙහි ච විභත්තවා\nභවෙසු වන්තගමනො - භගවා නාම තෙ නමො",
   "translit": "So bhagavā itipi bhagavā, bhagavā vata so bhagavā taṃ bhagavantaṃ bhagavantaṃ sirasā namāmi. Tassa bhagavato bhagavato attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato bhagavato, sāvako hamasmi, sisso hamasmi.\n\nBhāgyavā bhaggavā yutto - bhagehi ca vibhattavā\nbhavesu vantagamano - bhagavā nāma te namo",
   "sinhala": "පුණ්‍ය භාග්‍ය ඇත්තා වූද, මරුන් බිඳ දැමුවා වූද, භාග්‍ය ධර්මයෙන් යුක්තා වූද, ධර්මය බෙදා වදාළා වූද, භවගමන් වමාළා වූද භාග්‍යවතුන් වහන්ස ! ඔබ වහන්සේට මාගේ නමස්කාරය වේවා !",
   "english": "Blessed One, indeed You are the Blessed One. I bow with my head to the Blessed One. I give up myself to him. I am Your disciple; I am Your pupil.\n\nYou who possess fortune, who have shattered (the Māras), who are endowed with the excellent qualities, who have analysed and shared the Dhamma, and who have vomited out the going to existences: O Blessed One, homage be to You!"
  },
  {
   "id": "e18",
   "group": "evening",
   "name": {
    "si": "බුද්ධ සරණ ගමන",
    "en": "Going for Refuge to the Buddha"
   },
   "pali": "අතීතා යෙ ච සම්බුද්ධා - යෙ ච බුද්ධා අනාගතා\nපච්චුප්පන්නා ච යෙ බුද්ධා - අහං වන්දාමි සබ්බදා\n\nනත්ථි මෙ සරණං අඤ්ඤං - බුද්ධො මෙ සරණං වරං\nඑතෙන සච්ච වජ්ජෙන - හොතු මෙ ජයමංගලං\n\nඋත්තමංගෙන වන්දෙහං - පාදපංසු වරුත්තමං\nබුද්ධෙ යො ඛලිතො දොසො - බුද්ධො ඛමතු තං මමං",
   "translit": "Atītā ye ca sambuddhā - ye ca buddhā anāgatā\npaccuppannā ca ye buddhā - ahaṃ vandāmi sabbadā\n\nNatthi me saraṇaṃ aññaṃ - buddho me saraṇaṃ varaṃ\netena sacca vajjena - hotu me jayamaṅgalaṃ\n\nUttamaṅgena vandehaṃ - pādapaṃsu varuttamaṃ\nbuddhe yo khalito doso - buddho khamatu taṃ mamaṃ",
   "sinhala": "අතීත බුද්ධ රත්නයද, අනාගත බුද්ධ රත්නයද වර්තමාන ගෞතම බුද්ධ රත්නයද මම සැම කල්හිම නමස්කාර කරමි. නමස්කාර වේවා!\n\nබුද්ධ රත්නය හැර මට අන් සරණක් නැත්තේ ය. බුද්ධ රත්නය මාගේ උතුම් සරණය වන්නේ ය. ඒ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යයක් වේවා.\n\nභාග්‍යවතුන් වහන්සේගේ සිරිපා පහස ලද දූවිල්ල ද මම හිස මුදුනින් වන්දනා කරමි. බුද්ධ රත්නය කෙරෙහි සිදු වූ මාගේ පමා වරදට භාග්‍යවතුන් වහන්සේ ක්ෂමාවන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "To the Buddhas of the past, to the Buddhas of the future, and to the present Buddha Gotama, I pay homage at all times. Homage be to them!\n\nI have no other refuge than the Buddha; the Buddha is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI revere with my head the dust of the Blessed One's holy feet. For any fault I have committed against the Buddha, may the Blessed One forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e19",
   "group": "evening",
   "name": {
    "si": "ධර්ම වන්දනාව",
    "en": "Dhamma Vandanā"
   },
   "pali": "ස්වාක්ඛාතො භගවතා ධම්මො සන්දිට්ඨිකො අකාලිකො ඒහිපස්සිකො ඔපනයිකො පච්චත්තං වෙදිතබ්බො විඤ්ඤූහීති.\n\nස්වාක්ඛාතො වත තස්ස භගවතො සො ධම්මො, සන්දිට්ඨිකො වත තස්ස භගවතො සො ධම්මො, අකාලිකො වත තස්ස භගවතො සො ධම්මො, ඒහිපස්සිකො වත තස්ස භගවතො සො ධම්මො, ඔපනයිකො වත තස්ස භගවතො සො ධම්මො, පච්චත්තං වෙදිතබ්බො විඤ්ඤූහි වත තස්ස භගවතො සො ධම්මො. තං ස්වාක්ඛාතං භගවතො ධම්මං සන්දිට්ඨිකං අකාලිකං ඒහිපස්සිකං ඔපනයිකං පච්චත්තං වෙදිතබ්බං විඤ්ඤූහි සිරසා නමාමි. තස්ස භගවතො ධම්මස්ස අත්තානං පරිච්චජාමි. පරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො ධම්මස්ස සාවකො හමස්මි සිස්සො හමස්මි.",
   "translit": "Svākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opanayiko paccattaṃ veditabbo viññūhīti.\n\nSvākkhāto vata tassa bhagavato so dhammo, sandiṭṭhiko vata tassa bhagavato so dhammo, akāliko vata tassa bhagavato so dhammo, ehipassiko vata tassa bhagavato so dhammo, opanayiko vata tassa bhagavato so dhammo, paccattaṃ veditabbo viññūhi vata tassa bhagavato so dhammo. Taṃ svākkhātaṃ bhagavato dhammaṃ sandiṭṭhikaṃ akālikaṃ ehipassikaṃ opanayikaṃ paccattaṃ veditabbaṃ viññūhi sirasā namāmi. Tassa bhagavato dhammassa attānaṃ pariccajāmi. Pariccattoyeva me attā tassa bhagavato dhammassa sāvako hamasmi sisso hamasmi.",
   "sinhala": "භාග්‍යවතුන් වහන්සේ විසින් ධර්මය මනාකොට දේශනා කරන ලද්දේය; සන්දිට්ඨික වන්නේය; අකාලික වන්නේය; ඒහිපස්සික වන්නේය; ඔපනයික වන්නේය; නුවණැත්තන් විසින් තම තමා තුළම අවබෝධ කළ යුත්තේය.\n\nස්වාමීනි, භාග්‍යවතුන් වහන්ස ! ඔබ වහන්සේගේ ශ්‍රී සද්ධර්ම රත්නය ඒකාන්තයෙන් \"ස්වාක්ඛාත\" නම් වන සේක. \"සන්දිට්ඨික\" නම් වන සේක. අකාලික නම් වන සේක. \"ඒහිපස්සික\" නම් වන සේක. \"ඕපනයික\" නම් වන සේක. \"පච්චත්තං වේදිතබ්බෝ විඤ්ඤූහි\" නම් වන සේක. භාග්‍යවතුන් වහන්සේගේ ශ්‍රී සද්ධර්මරත්නයට මාගේ නමස්කාරය වේවා. මාගේ ජීවිතය ද පූජා කරමි. පූජා වේවා. මම ශ්‍රී සද්ධර්මරත්නයේ ශ්‍රාවකයෙක්මි. ශිෂ්‍යයෙක්මි.",
   "english": "The Dhamma is well proclaimed by the Blessed One, directly visible, timeless, inviting investigation, leading onward, to be personally experienced by the wise.\n\nTruly, the Dhamma of that Blessed One is well proclaimed; it is directly visible; it is timeless; it invites investigation; it leads onward; it is to be personally experienced by the wise. I bow with my head to the Blessed One's Dhamma, so well proclaimed, visible here and now, timeless, inviting investigation, leading onward and to be experienced by the wise. I give up myself to that Blessed One's Dhamma. Given up indeed is my self to the Dhamma. I am its disciple; I am its pupil.\n\nVenerable Sir, Blessed One, Your glorious Dhamma-Gem is indeed \"well proclaimed\", \"visible here and now\", \"timeless\", \"inviting investigation\", \"leading onward\", and \"to be experienced by the wise\". Homage be to the Blessed One's glorious Dhamma-Gem. I offer my life too. May the offering be accomplished. I am a disciple and pupil of the glorious Dhamma-Gem."
  },
  {
   "id": "e20",
   "group": "evening",
   "name": {
    "si": "ධර්ම සරණ ගමන",
    "en": "Going for Refuge to the Dhamma"
   },
   "pali": "අතීතා යෙ ච සද්ධම්මා - යෙ ච ධම්මා අනාගතා\nපච්චුප්පන්නා ච යෙ ධම්මා - අහං වන්දාමි සබ්බදා\n\nනත්ථි මෙ සරණං අඤ්ඤං - ධම්මො මෙ සරණං වරං\nඑතෙන සච්ච වජ්ජෙන - හොතු මෙ ජයමංගලං\n\nඋත්තමංගෙන වන්දෙහං - ධම්මං ච තිවිධං වරං\nධම්මෙ යො ඛලිතො දොසො - ධම්මො ඛමතු තං මමං",
   "translit": "Atītā ye ca saddhammā - ye ca dhammā anāgatā\npaccuppannā ca ye dhammā - ahaṃ vandāmi sabbadā\n\nNatthi me saraṇaṃ aññaṃ - dhammo me saraṇaṃ varaṃ\netena sacca vajjena - hotu me jayamaṅgalaṃ\n\nUttamaṅgena vandehaṃ - dhammaṃ ca tividhaṃ varaṃ\ndhamme yo khalito doso - dhammo khamatu taṃ mamaṃ",
   "sinhala": "අතීත ධර්ම රත්නයද, අනාගත ධර්ම රත්නයද, වර්තමාන ධර්ම රත්නයද මම සැම කල්හි නමස්කාර කරමි. නමස්කාර වේවා!\n\nධර්ම රත්නය හැර මට අන් සරණක් නැත්තේ ය. ධර්ම රත්නය මාගේ උතුම් සරණය වන්නේ ය. මේ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යක් වේවා.\n\nලොව්තුරු මග-ඵල-නිවන යන ත්‍රිවිධ වූ ධර්ම රත්නයට, මාගේ හිස මුදුනින් නමස්කාර කරමි. නමස්කාර වේවා. ධර්ම රත්නය කෙරෙහි සිදු වූ මාගේ පමා වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "To the Dhamma of the past, of the future and of the present, I pay homage at all times. Homage be to it!\n\nI have no other refuge than the Dhamma; the Dhamma is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI bow with my head to the Dhamma Gem, which is threefold: the supramundane Path, Fruition and Nibbāna. For any fault I have committed against the Dhamma, may the Dhamma forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e21",
   "group": "evening",
   "name": {
    "si": "සංඝ වන්දනාව",
    "en": "Saṅgha Vandanā"
   },
   "pali": "සුපටිපන්නො භගවතො සාවක සංඝො, උජුපටිපන්නො භගවතො සාවක සංඝො, ඤායපටිපන්නො භගවතො සාවක සංඝො, සාමීචිපටිපන්නො භගවතො සාවක සංඝො, යදිදං චත්තාරි පුරිස යුගානි අට්ඨ පුරිස පුග්ගලා එස භගවතො සාවක සංඝො ආහුනෙය්‍යො පාහුනෙය්‍යො දක්ඛිණෙය්‍යො අඤ්ජලිකරණීයො, අනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්සාති.\n\nසුපටිපන්නො වත සො භගවතො සාවක සංඝො\nඋජුපටිපන්නො වත සො භගවතො සාවක සංඝො\nඤායපටිපන්නො වත සො භගවතො සාවක සංඝො\nසාමීචිපටිපන්නො වත සො භගවතො සාවක සංඝො\nආහුනෙය්‍යො වත සො භගවතො සාවක සංඝො\nපාහුනෙය්‍යො වත සො භගවතො සාවක සංඝො\nදක්ඛිණෙය්‍යො වත සො භගවතො සාවක සංඝො\nඅඤ්ජලිකරණීයො වත සො භගවතො සාවක සංඝො\nඅනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්ස\nවත සො භගවතො සාවක සංඝො\nතං භගවතො සාවක සංඝං සුපටිපන්නං උජුපටිපන්නං\nඤායපටිපන්නං සාමීචිපටිපන්නං ආහුනෙය්‍යං\nපාහුනෙය්‍යං දක්ඛිණෙය්‍යං අඤ්ජලිකරණීයං අනුත්තරං\nපුඤ්ඤක්ඛෙත්තං ලොකස්ස සිරසා නමාමි.\n\nතස්ස භගවතො සාවක සංඝස්ස අත්තානං පරිච්චජාමි\nපරිච්චත්තොයෙව මෙ අත්තා තස්ස භගවතො සාවක\nසංඝස්ස සාවකො හමස්මි සිස්සො හමස්මි",
   "translit": "Supaṭipanno bhagavato sāvaka saṅgho, ujupaṭipanno bhagavato sāvaka saṅgho, ñāyapaṭipanno bhagavato sāvaka saṅgho, sāmīcipaṭipanno bhagavato sāvaka saṅgho, yadidaṃ cattāri purisa yugāni aṭṭha purisa puggalā esa bhagavato sāvaka saṅgho āhuneyyo pāhuneyyo dakkhiṇeyyo añjalikaraṇīyo, anuttaraṃ puññakkhettaṃ lokassāti.\n\nSupaṭipanno vata so bhagavato sāvaka saṅgho\nujupaṭipanno vata so bhagavato sāvaka saṅgho\nñāyapaṭipanno vata so bhagavato sāvaka saṅgho\nsāmīcipaṭipanno vata so bhagavato sāvaka saṅgho\nāhuneyyo vata so bhagavato sāvaka saṅgho\npāhuneyyo vata so bhagavato sāvaka saṅgho\ndakkhiṇeyyo vata so bhagavato sāvaka saṅgho\nañjalikaraṇīyo vata so bhagavato sāvaka saṅgho\nanuttaraṃ puññakkhettaṃ lokassa\nvata so bhagavato sāvaka saṅgho\ntaṃ bhagavato sāvaka saṅghaṃ supaṭipannaṃ ujupaṭipannaṃ\nñāyapaṭipannaṃ sāmīcipaṭipannaṃ āhuneyyaṃ\npāhuneyyaṃ dakkhiṇeyyaṃ añjalikaraṇīyaṃ anuttaraṃ\npuññakkhettaṃ lokassa sirasā namāmi.\n\nTassa bhagavato sāvaka saṅghassa attānaṃ pariccajāmi\npariccattoyeva me attā tassa bhagavato sāvaka\nsaṅghassa sāvako hamasmi sisso hamasmi",
   "sinhala": "භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා මනාව පිළිපන්නේය; ඍජුව පිළිපන්නේය; නිවන් අරමුණු කොට පිළිපන්නේය; සුදුසු පිළිවෙතින් පිළිපන්නේය. එනම් සතර යුගල වශයෙන් අට පුරුෂ පුද්ගලයෝ වෙත්ද, ඒ භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා ආහුනෙය්‍ය (ආගන්තුක සත්කාරයට සුදුසු) වන්නේය; පාහුනෙය්‍ය (දුර සිට ගෙනෙන දානයට සුදුසු) වන්නේය; දක්ඛිණෙය්‍ය (දක්ෂිණාවට සුදුසු) වන්නේය; අඤ්ජලිකරණීය (දොහොත් මුදුනේ තබා වැඳීමට සුදුසු) වන්නේය; ලෝකයාගේ අනුත්තර පුණ්‍යක්ෂේත්‍රය වන්නේය.\n\nස්වාමීනි, භාග්‍යවතුන් වහන්ස ! ඔබ වහන්සේගේ අෂ්ටාර්‍ය්‍ය පුද්ගල මහා සංඝරත්නය ඒකාන්තයෙන් \"සුපටිපන්න\" නම් වන සේක. \"උජුපටිපන්න\" නම් වන සේක. \"ඤායපටිපන්න\" නම් වන සේක. \"සාමීචිපටිපන්න\" නම් වන සේක. \"ආහුනෙය්‍ය\" නම් වන සේක. \"පාහුනෙය්‍ය\" නම් වන සේක. \"දක්ඛිණෙය්‍ය\" නම් වන සේක. \"අඤ්ජලිකරණීය\" නම් වන සේක. \"අනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්ස\" නම් වන සේක. ශ්‍රාවක සංඝරත්නයට මාගේ නමස්කාරය වේවා. මාගේ ජීවිතය ද පූජා කරමි. පූජා වේවා. මම සංඝරත්නයේ ශ්‍රාවකයෙක්මි. ශිෂ්‍යයෙක්මි.",
   "english": "The Saṅgha of the Blessed One's disciples has practised well, practised uprightly, practised rightly, and practised properly — that is, the four pairs of persons, the eight types of individuals. That Saṅgha of the Blessed One's disciples is worthy of gifts, worthy of hospitality, worthy of offerings, worthy of reverential salutation, the unsurpassed field of merit for the world.\n\nVenerable Sir, Blessed One, Your Saṅgha-Gem of the eight noble individuals is indeed \"practising well\", \"practising uprightly\", \"practising rightly\", \"practising properly\", \"worthy of gifts\", \"worthy of hospitality\", \"worthy of offerings\", \"worthy of reverential salutation\", and \"the unsurpassed field of merit for the world\". Homage be to the Saṅgha-Gem of disciples. I offer my life too; may the offering be accomplished. I am a disciple and pupil of the Saṅgha-Gem."
  },
  {
   "id": "e22",
   "group": "evening",
   "name": {
    "si": "සංඝ සරණ ගමන",
    "en": "Going for Refuge to the Saṅgha"
   },
   "pali": "යෙ ච සංඝා අතීතා ච - යෙ ච සංඝා අනාගතා\nපච්චුප්පන්නා ච යෙ සංඝා - අහං වන්දාමි සබ්බදා\n\nනත්ථි මෙ සරණං අඤ්ඤං - සංඝො මෙ සරණං වරං\nඑතෙන සච්ච වජ්ජෙන - හොතු මෙ ජයමංගලං\n\nඋත්තමංගෙන වන්දෙහං - සංඝං ච තිවිධොත්තමං\nසංඝෙ යො ඛලිතො දොසො - සංඝො ඛමතු තං මමං",
   "translit": "Ye ca saṅghā atītā ca - ye ca saṅghā anāgatā\npaccuppannā ca ye saṅghā - ahaṃ vandāmi sabbadā\n\nNatthi me saraṇaṃ aññaṃ - saṅgho me saraṇaṃ varaṃ\netena sacca vajjena - hotu me jayamaṅgalaṃ\n\nUttamaṅgena vandehaṃ - saṅghaṃ ca tividhottamaṃ\nsaṅghe yo khalito doso - saṅgho khamatu taṃ mamaṃ",
   "sinhala": "අතීත සංඝ රත්නයද අනාගත සංඝ රත්නයද වර්තමාන සංඝ රත්නයද මම සැම කල්හී නමස්කාර කරමි. නමස්කාර වේවා!\n\nසංඝ රත්නය හැර මට අන් සරණක් නැත්තේය. සංඝ රත්නය මාගේ උතුම් සරණය වන්නේ ය. මේ සත්‍යානුභාවයෙන් මට ජය මංගල්‍යක් වේවා!\n\nසම්මුති-සේඛ-අසේඛ යන ත්‍රිවිධ උත්තම සංඝ රත්නයට මම උත්තමංගයෙන් නමස්කාර කරමි. නමස්කාර වේවා! මාගෙන් සිදු වූ පමා වරදට සංඝරත්නය මට ක්ෂමා වන සේක්වා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "To the Saṅgha of the past, of the future and of the present, I pay homage at all times. Homage be to it!\n\nI have no other refuge than the Saṅgha; the Saṅgha is my supreme refuge. By the power of this truth, may victory and blessings be mine.\n\nI bow with my head to the threefold supreme Saṅgha — the conventional (sammuti) Saṅgha, the trainees (sekha) and the non-trainees (asekha). For any fault I have committed, may the Saṅgha forgive me!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e23",
   "group": "evening",
   "name": {
    "si": "අටලොස් බුදුගුණ වන්දනාව",
    "en": "Veneration of the Eighteen Qualities of the Buddha"
   },
   "pali": "අතීතංසෙ බුද්ධස්ස භගවතො අප්පටිහතං ඤාණං\nඅනාගතංසෙ බුද්ධස්ස භගවතො අප්පටිහතං ඤාණං\nපච්චුප්පන්නංසෙ බුද්ධස්ස භගවතො අප්පටිහතං ඤාණං\n\nඉමෙහි තීහි ධම්මෙහි සමන්නාගතස්ස බුද්ධස්ස භගවතො, සබ්බ කාය කම්මං ඤාණ පුබ්බඞ්ගමං ඤාණානුපරිවත්තං, සබ්බං වචීකම්මං ඤාණ පුබ්බඞ්ගමං ඤාණානුපරිවත්තං, සබ්බං මනො කම්මං ඤාණ පුබ්බඞ්ගමං ඤාණානුපරිවත්තං.\n\nඉමෙහි ඡහි ධම්මෙහි සමන්නාගතස්ස බුද්ධස්ස භගවතො, නත්ථි ඡන්දස්ස හානි, නත්ථි ධම්මදෙසනාය හානි, නත්ථි විරියස්ස හානි, නත්ථි සමාධිස්ස හානි, නත්ථි පඤ්ඤාය හානි, නත්ථි විමුත්තියා හානි.\n\nඉමෙහි ද්වාදසහි ධම්මෙහි සමන්නාගතස්ස බුද්ධස්ස භගවතො නත්ථි දවා, නත්ථි රවා, නත්ථි අප්ඵුටං, නත්ථි වෙගායිතත්තං, නත්ථි අබ්‍යාවටමනො, නත්ථි අප්පටිසංඛානුපෙක්ඛා.\n\nඉමෙහි අට්ඨාරසහි ධම්මෙහි සමන්නාගතං සම්මා සම්බුද්ධං භගවන්තං සිරසා නමාමි.",
   "translit": "Atītaṃse buddhassa bhagavato appaṭihataṃ ñāṇaṃ\nanāgataṃse buddhassa bhagavato appaṭihataṃ ñāṇaṃ\npaccuppannaṃse buddhassa bhagavato appaṭihataṃ ñāṇaṃ\n\nImehi tīhi dhammehi samannāgatassa buddhassa bhagavato, sabba kāya kammaṃ ñāṇa pubbaṅgamaṃ ñāṇānuparivattaṃ, sabbaṃ vacīkammaṃ ñāṇa pubbaṅgamaṃ ñāṇānuparivattaṃ, sabbaṃ mano kammaṃ ñāṇa pubbaṅgamaṃ ñāṇānuparivattaṃ.\n\nImehi chahi dhammehi samannāgatassa buddhassa bhagavato, natthi chandassa hāni, natthi dhammadesanāya hāni, natthi viriyassa hāni, natthi samādhissa hāni, natthi paññāya hāni, natthi vimuttiyā hāni.\n\nImehi dvādasahi dhammehi samannāgatassa buddhassa bhagavato natthi davā, natthi ravā, natthi apphuṭaṃ, natthi vegāyitattaṃ, natthi abyāvaṭamano, natthi appaṭisaṅkhānupekkhā.\n\nImehi aṭṭhārasahi dhammehi samannāgataṃ sammā sambuddhaṃ bhagavantaṃ sirasā namāmi.",
   "sinhala": "භාග්‍යවත් බුදුරජාණන් වහන්සේගේ ඤාණය අතීත කොට්ඨාශයෙහි නොපැකිල පැවැත්තේය. භාග්‍යවත් බුදුරජාණන් වහන්සේගේ ඤාණය අනාගත කොට්ඨාශයෙහි නොපැකිල පවතින්නේය. භාග්‍යවත් බුදුරජාණන් වහන්සේගේ ඤාණය වර්තමාන කොට්ඨාශයෙහි නොපැකිල පවත්නේය.\n\nමේ ධර්ම තුනෙන් සමන්වාගත වූ භාග්‍යවත් බුදුරජාණන් වහන්සේගේ කාය කර්මය නුවණ පෙරදරිකොට ඇත්තේය. නුවණ අනුව පවත්නේය. වාක් කර්මයද, නුවණ පෙරදරි කොට ඇත්තේය. නුවණ අනුව පවත්නේය. මනො කර්මයද නුවණ පෙරදරි කොට ඇත්තේය. නුවණ අනුව පවත්නේය.\n\nමේ ධර්ම සයෙන් සමන්වාගත වූ භාග්‍යවත් බුදුරජාණන් වහන්සේගේ ලෝවැඩ කිරීමෙහි වූ ඡන්දයේ පිරිහීමක් නැත්තේය. ධර්ම දේශනාවේ පිරිහීමක් නැත්තේය. වීර්යයේ පිරිහීමක් නැත්තේය. සමාධියේ පිරිහීමක් නැත්තේය. ප්‍රඥාවේ පිරිහීමක් නැත්තේය. අර්හත් ඵල විමුක්තියේ පිරිහීමක් නැත්තේය.\n\nමේ ධර්ම දොළොසින් සමන්වාගත වූ භාග්‍යවත් බුදුරජාණන් වහන්සේගේ නුවණින් තොර වූ කායික වාචසික ක්‍රීඩා විකාරාදියක් නැත්තේය. නුවණින් තොරවූ යුහුසුළු ක්‍රියා ද නැත්තේය. නුවණින් ස්පර්ශ නොකළ ක්‍රියාවක්ද නැත්තේය. සිහියෙන් තොරව කරනු ලබන වේගවත් ක්‍රියා නැත්තේය. නිරර්ථක චිත්ත සමුදාචාර නැත්තේය. අඥාන උපේක්ෂා නැත්තේය.\n\nමේ අටලොස් ධර්මයන්ගෙන් සමන්වාගත වූ භාග්‍යවත් බුදුරජාණන් වහන්සේට මම දොහොත් මුදුන් දී නමස්කාර කරමි.\n\nසාධු ! සාධු ! සාධු !",
   "english": "The Blessed Buddha's knowledge is unobstructed in regard to the past. The Blessed Buddha's knowledge is unobstructed in regard to the future. The Blessed Buddha's knowledge is unobstructed in regard to the present.\n\nAll bodily action of the Blessed Buddha, endowed with these three qualities, is preceded by knowledge and follows knowledge. All verbal action is preceded by knowledge and follows knowledge. All mental action is preceded by knowledge and follows knowledge.\n\nThe Blessed Buddha, endowed with these six qualities, has no decline in zeal, no decline in teaching the Dhamma, no decline in energy, no decline in concentration, no decline in wisdom, and no decline in liberation.\n\nThe Blessed Buddha, endowed with these twelve qualities, has no frivolous behaviour, no noisy speech, no stumbling, no hurried haste, no unconcerned mind, and no equanimity without reflection.\n\nI bow with my head to the Perfectly Self-Awakened Blessed One, endowed with these eighteen qualities. I raise my joined hands in homage to the Blessed Buddha endowed with these eighteen qualities.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e24",
   "group": "evening",
   "name": {
    "si": "චෛත්‍ය වන්දනාව (සතර මහා ස්ථාන)",
    "en": "Veneration of the Four Sacred Shrines"
   },
   "pali": "මායා සුතො සුගත සාකිය සීහනාථො\nජාතක්ඛණෙ සපදසා වහිසංකමිත්වා\nයස්මිං උදීරයි ගිරං වරලුම්බිණීමිහි\nතං ජාත චෙතියමහං සිරසා නමාමි\n\nයස්මිං නිසජ්ජ වජිරාසන බන්ධනෙන\nජෙත්වා සවාසන කිලෙස බලං මුනින්දො\nසම්බොධි ඤාණමවගම්ම විහාසි සම්මා\nතං බොධි චෙතියමහං සිරසා නමාමි\n\nසංකම්පයං දසසහස්සිය ලොක ධාතුං\nදෙසෙසි යත්‍ර භගවා වර ධම්ම චක්කං\nබාරාණසීපුර සමීප වනෙ මිගානං\nතං ධම්ම චෙතියමහං සිරසා නමාමි\n\nකත්වාන ලොක හිතමත්ත හිතඤ්ච නාථො\nආසීතිකොව උපවත්තන කානනම්හි\nයස්මිං නිපජ්ජ ගතවා නිරුපාධිසෙසං\nනිබ්බාන චෙතියමහං සිරසා නමාමි",
   "translit": "Māyā suto sugata sākiya sīhanātho\njātakkhaṇe sapadasā vahisaṅkamitvā\nyasmiṃ udīrayi giraṃ varalumbiṇīmihi\ntaṃ jāta cetiyamahaṃ sirasā namāmi\n\nYasmiṃ nisajja vajirāsana bandhanena\njetvā savāsana kilesa balaṃ munindo\nsambodhi ñāṇamavagamma vihāsi sammā\ntaṃ bodhi cetiyamahaṃ sirasā namāmi\n\nSaṅkampayaṃ dasasahassiya loka dhātuṃ\ndesesi yatra bhagavā vara dhamma cakkaṃ\nbārāṇasīpura samīpa vane migānaṃ\ntaṃ dhamma cetiyamahaṃ sirasā namāmi\n\nKatvāna loka hitamatta hitañca nātho\nāsītikova upavattana kānanamhi\nyasmiṃ nipajja gatavā nirupādhisesaṃ\nnibbāna cetiyamahaṃ sirasā namāmi",
   "sinhala": "මහාමායා දේවිතුමියගේ පුත් වූ ඒ ශෝභන ගමන් ඇති ශාක්‍ය සීහොත්තම වූ ඒ සිද්ධාර්ථ නම් ගෞතමයන් වහන්සේ උපන් ඇසිල්ලෙහිදී සිය පයින් උතුරට සත් පියවරක් වැඩ අවසන්හි ලුම්බිණි උයනෙහි යම් තැනක සිට අග්ගො හමස්මි යනාදි වචනයන් ප්‍රකාශ කළේද එහි කරවන ලද චෛත්‍යයද ඒ පූජා ස්ථානය ද මම මස්තක ප්‍රණාමයෙන්ම නමස්කාර කරමි.\n\nමුනීන්ද්‍රයන් වහන්සේ යම් තැනක වජ්‍රාසනය බැඳීමෙන් වැඩහිද වාසනා සහිත කෙලෙස් බලමුලුව ජයගෙන සර්වඥතා ඤානය ප්‍රත්‍යක්ෂ වශයෙන් මැනවින් අත්පත් කොට ගෙන වාසය කළ සේක් ද ඒ පූජ්‍යස්ථානයත් එහි කරවන ලද චෛත්‍යත් ශිර්ෂ ප්‍රණාමයෙන් නමස්කාර කරමි.\n\nභාග්‍යවතුන් වහන්සේ යම්තැනක වැඩ හිද ගෙන දස දහසක් ලෝක ධාතුන් කම්පා කරවමින් උතුම් වූ ධර්ම චක්‍රය දෙසූ සේක්ද, බරණැස් නුවර සමීප මුව වනයෙහි වූ ඒ පූජා ස්ථානයද එහි කරවන ලද චෛත්‍යයද ශීර්ෂ ප්‍රණාමයෙන් නමස්කාර කරමි.\n\nඒ ලෝකනාථ වූ සම්මා සම්බුදු රජාණන් වහන්සේ තම වැඩ හා සකල ලෝකවාසීන්ගේ වැඩ ද කොට සියලු බුදුකිස නිමවා, උපතින් අසූ අවුරුදු ඇතිව උපවත්තන නම් සල්වනයෙහි යම් තැනක වැඩ හිද නිරුපාදිශේෂ පරිනිර්වාණ ධාතුවට පත් වූ සේක්ද, ඒ ස්ථානයද එහි බැඳි චෛත්‍යය ද ශීර්ෂ ප්‍රණාමයෙන් නමස්කාර කරමි.\n\nසාධු ! සාධු ! සාධු !",
   "english": "At the excellent Lumbinī, where the son of Māyā, the Sugata, the Lion of the Sakyas, at the moment of his birth stepped forth seven paces and uttered his lion's roar — to that Birth Shrine I bow with my head.\n\nAt the place where the Lord of Sages sat, bound in the diamond posture, conquered the force of defilements with their latent traces, attained the knowledge of full awakening and dwelt rightly — to that Bodhi Shrine I bow with my head.\n\nAt the place in the deer park near Bārāṇasī where the Blessed One shook the ten-thousand-fold world-system and taught the supreme Wheel of the Dhamma — to that Dhamma Shrine I bow with my head.\n\nAt the place in the Upavattana sāl grove, where the Lord, having done what was beneficial to the world and to himself, at the age of eighty lay down and passed into Nibbāna without any remainder of clinging — to that Nibbāna Shrine I bow with my head.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e25",
   "group": "evening",
   "name": {
    "si": "තෙ සැත්තෑ ඤාණ වන්දනාව",
    "en": "Veneration of the Seventy-three Knowledges"
   },
   "pali": "1. සොතාවධාන පඤ්ඤා සුතමයෙ ඤාණං\n2. සුත්වාන සංවරෙ පඤ්ඤා සීලමයෙ ඤාණං\n3. සංවරිත්වා සමාදහනෙ පඤ්ඤා සමාධි භාවනාමයෙ ඤාණං\n4. පච්චය පරිග්ගහෙ පඤ්ඤා ධම්මට්ඨිති ඤාණං\n\n5. අතීතානාගත පච්චුප්පන්නානං ධම්මානං සංඛිපිත්වා වවත්ථානෙ පඤ්ඤා සම්මසනෙ ඤාණං\n6. පච්චුප්පන්නානං ධම්මානං විපරිණාමානුපස්සනෙ පඤ්ඤා උදයබ්බයානුපස්සනෙ ඤාණං\n7. ආරම්මණං පටිසංඛා භංගානුපස්සනෙ පඤ්ඤා විපස්සනෙ ඤාණං\n8. භයතුපට්ඨානෙ පඤ්ඤා ආදීනවෙ ඤාණං\n9. මුඤ්චිතුකම්‍යතා පටිසංඛා සන්තිට්ඨනා පඤ්ඤා සංඛාරුපෙක්ඛාසු ඤාණං\n10. බහිද්ධා වුට්ඨාන විවට්ටනෙ පඤ්ඤා ගොත්‍රභූ ඤාණං\n\n11. උභතො වුට්ඨාන විවට්ටනෙ පඤ්ඤා මග්ගෙ ඤාණං\n12. පයොග පටිප්පස්සද්ධි පඤ්ඤා ඵලෙ ඤාණං\n13. ඡින්න වටුමානුපස්සනෙ පඤ්ඤා විමුත්ති ඤාණං\n14. තදා සමුදාගතෙ ධම්මෙ පස්සනෙ පඤ්ඤා පච්චවෙක්ඛණෙ ඤාණං\n15. අජ්ඣත්ත වවත්ථානෙ පඤ්ඤා වත්ථු නානත්තෙ ඤාණං\n16. බහිද්ධා වවත්ථානෙ පඤ්ඤා ගොචර නානත්තෙ ඤාණං\n17. චරියා වවත්ථානෙ පඤ්ඤා චරියා නානත්තෙ ඤාණං\n18. චතු ධම්ම වවත්ථානෙ පඤ්ඤා භූමි නානත්තෙ ඤාණං\n\n19. නව ධම්ම වවත්ථානෙ පඤ්ඤා ධම්ම නානත්තෙ ඤාණං\n20. අභිඤ්ඤා පඤ්ඤා ඤාතට්ඨෙ ඤාණං\n21. පරිඤ්ඤා පඤ්ඤා තීරණට්ඨෙ ඤාණං\n22. පහානෙ පඤ්ඤා පරිච්චාගට්ඨෙ ඤාණං\n23. භාවනා පඤ්ඤා එකරසට්ඨෙ ඤාණං\n24. සච්ඡිකිරියා පඤ්ඤා ඵුසනට්ඨෙ ඤාණං\n25. අත්ථ නානත්තෙ පඤ්ඤා අත්ථ පටිසම්භිදෙ ඤාණං\n26. ධම්ම නානත්තෙ පඤ්ඤා ධම්ම පටිසම්භිදෙ ඤාණං\n\n27. නිරුත්ති නානත්තෙ පඤ්ඤා නිරුත්ති පටිසම්භිදෙ ඤාණං\n28. පටිභාන නානත්තෙ පඤ්ඤා පටිභාන පටිසම්භිදෙ ඤාණං\n29. විහාර නානත්තෙ පඤ්ඤා විහාරට්ඨෙ ඤාණං\n30. සමාපත්ති නානත්තෙ පඤ්ඤා සමාපත්තට්ඨෙ ඤාණං\n31. විහාර සමාපත්ති නානත්තෙ පඤ්ඤා විහාර සමාපත්තට්ඨෙ ඤාණං\n32. අවික්ඛෙප පරිසුද්ධත්තා ආසව සමුච්ඡෙදෙ පඤ්ඤා ආනන්තරික සමාධිම්හි ඤාණං\n33. දස්සනාධිපතෙය්‍යං සන්තොව විහාරාධිගමො පණීතාදිමුත්තතා පඤ්ඤා අරණ විහාර ඤාණං\n\n34. ද්වීහි බලෙහි සමන්නාගතත්තා තිණ්ණඤ්ච සංඛාරානං පටිප්පස්සද්ධියා සොළසහි ඤාණ චරියාහි නවහි සමාධි චරියාහි වසී භාවතා පඤ්ඤා නිරොධ සමාපත්තියා ඤාණං\n35. සම්පජානස්ස පවත්ත පරියාදානෙ පඤ්ඤා පරිනිබ්බානෙ ඤාණං\n36. සබ්බ ධම්මානං සම්මා සමුච්ඡෙදෙ නිරොධෙ ච අනුපට්ඨානතා පඤ්ඤා සමසීසට්ඨෙ ඤාණං\n37. පුථු නානත්තතෙජ පරියාදානෙ පඤ්ඤා සල්ලෙඛට්ඨෙ ඤාණං\n38. අසල්ලීනත්ත පහිතත්ත පග්ගහට්ඨෙ පඤ්ඤා විරියාරම්භෙ ඤාණං\n39. නානා ධම්මප්පකාසනතා පඤ්ඤා අත්ථ සන්දස්සනෙ ඤාණං\n\n40. සබ්බ ධම්මානං එකසංගහතා නානත්තෙකත්ත පටිවෙධෙ පඤ්ඤා දස්සන විසුද්ධි ඤාණං\n41. විදිතත්තා පඤ්ඤා ඛන්ති ඤාණං\n42. ඵුට්ඨත්තා පඤ්ඤා පරියොගාහණෙ ඤාණං\n43. සමොදහනෙ පඤ්ඤා පදෙසවිහාරෙ ඤාණං\n44. අධිපතත්තා පඤ්ඤා සඤ්ඤා විවට්ටෙ ඤාණං\n45. නානත්තෙ පඤ්ඤා චෙතො විවට්ටෙ ඤාණං\n46. අධිට්ඨානෙ පඤ්ඤා චිත්ත විවට්ටෙ ඤාණං\n47. සුඤ්ඤතෙ පඤ්ඤා ඤාණ විවට්ටෙ ඤාණං\n\n48. වොස්සග්ගෙ පඤ්ඤා විමොක්ඛ විවට්ටෙ ඤාණං\n49. තථට්ඨෙ පඤ්ඤා සච්ච විවට්ටෙ ඤාණං\n50. කායම්පි චිත්තම්පි එකවවත්ථානතා සුඛසඤ්ඤඤ්ච ලහුසඤ්ඤඤ්ච අධිට්ඨාන වසෙන ඉජ්ඣනට්ඨෙ පඤ්ඤා ඉද්ධිවිධෙ ඤාණං\n51. විතක්ක විප්ඵාර වසෙන නානත්තෙකත්ත සද්ද නිමිත්තානං පරියොගාහණෙ පඤ්ඤා සොත ධාතු විසුද්ධි ඤාණං\n52. තිණ්ණං චිත්තානං විප්ඵාරත්තා ඉන්ද්‍රියානං පසාදවසෙන නානත්තෙකත්ත විඤ්ඤාණචරියා පරියොගාහණෙ පඤ්ඤා චෙතොපරිය ඤාණං\n\n53. පච්චය පවත්තානං ධම්මානං නානත්තෙකත්ත කම්ම විප්ඵාර වසෙන පරියොගාහණෙ පඤ්ඤා පුබ්බෙ නිවාසානුස්සති ඤාණං\n54. ඔභාස වසෙන නානත්තෙකත්ත රූප නිමිත්තානං දස්සනට්ඨෙ පඤ්ඤා දිබ්බචක්ඛු ඤාණං\n55. චතුසට්ඨියා ආකාරෙහි තිණ්ණන්නං ඉන්ද්‍රියානං වසීභාවතා පඤ්ඤා ආසවානං ඛයෙ ඤාණං\n56. පරිඤ්ඤට්ඨෙ පඤ්ඤා දුක්ඛෙ ඤාණං\n57. පහානට්ඨෙ පඤ්ඤා සමුදයෙ ඤාණං\n58. සච්ඡිකිරියට්ඨෙ පඤ්ඤා නිරොධෙ ඤාණං\n\n59. භාවනට්ඨෙ පඤ්ඤා මග්ගෙ ඤාණං\n60. දුක්ඛෙ ඤාණං\n61. දුක්ඛ සමුදයෙ ඤාණං\n62. දුක්ඛ නිරොධෙ ඤාණං\n63. දුක්ඛ නිරොධ ගාමිනී පටිපදාය ඤාණං\n64. අත්ථ පටිසම්භිදෙ ඤාණං\n65. ධම්ම පටිසම්භිදෙ ඤාණං\n66. නිරුත්ති පටිසම්භිදෙ ඤාණං\n67. පටිභාන පටිසම්භිදෙ ඤාණං\n\n68. ඉන්ද්‍රිය පරොපරියත්තෙ ඤාණං\n69. සත්තානං ආසයානුසයෙ ඤාණං\n70. යමක පාටිහාරියෙ ඤාණං\n71. මහා කරුණා සමාපත්තියා ඤාණං\n72. සබ්බඤ්ඤුත ඤාණං\n73. අනාවරණ ඤාණන්ති\n\nඉමානි තෙසත්තති ඤාණානි. ඉමෙසං තෙසත්තතියා ඤාණානං සත්ත සට්ඨි ඤාණානි සාවක සාධාරණානි, ඡ ඤාණානි අසාධාරණානි සාවකෙහි. ඉමෙහි තෙසත්තතියා ඤාණෙහි සමන්නාගතං සම්මා සම්බුද්ධං භගවන්තං සිරසා නමාමි.\n\nසාධු ! සාධු ! සාධු !",
   "translit": "1. Sotāvadhāna paññā sutamaye ñāṇaṃ\n2. Sutvāna saṃvare paññā sīlamaye ñāṇaṃ\n3. Saṃvaritvā samādahane paññā samādhi bhāvanāmaye ñāṇaṃ\n4. Paccaya pariggahe paññā dhammaṭṭhiti ñāṇaṃ\n\n5. Atītānāgata paccuppannānaṃ dhammānaṃ saṅkhipitvā vavatthāne paññā sammasane ñāṇaṃ\n6. Paccuppannānaṃ dhammānaṃ vipariṇāmānupassane paññā udayabbayānupassane ñāṇaṃ\n7. Ārammaṇaṃ paṭisaṅkhā bhaṅgānupassane paññā vipassane ñāṇaṃ\n8. Bhayatupaṭṭhāne paññā ādīnave ñāṇaṃ\n9. Muñcitukamyatā paṭisaṅkhā santiṭṭhanā paññā saṅkhārupekkhāsu ñāṇaṃ\n10. Bahiddhā vuṭṭhāna vivaṭṭane paññā gotrabhū ñāṇaṃ\n\n11. Ubhato vuṭṭhāna vivaṭṭane paññā magge ñāṇaṃ\n12. Payoga paṭippassaddhi paññā phale ñāṇaṃ\n13. Chinna vaṭumānupassane paññā vimutti ñāṇaṃ\n14. Tadā samudāgate dhamme passane paññā paccavekkhaṇe ñāṇaṃ\n15. Ajjhatta vavatthāne paññā vatthu nānatte ñāṇaṃ\n16. Bahiddhā vavatthāne paññā gocara nānatte ñāṇaṃ\n17. Cariyā vavatthāne paññā cariyā nānatte ñāṇaṃ\n18. Catu dhamma vavatthāne paññā bhūmi nānatte ñāṇaṃ\n\n19. Nava dhamma vavatthāne paññā dhamma nānatte ñāṇaṃ\n20. Abhiññā paññā ñātaṭṭhe ñāṇaṃ\n21. Pariññā paññā tīraṇaṭṭhe ñāṇaṃ\n22. Pahāne paññā pariccāgaṭṭhe ñāṇaṃ\n23. Bhāvanā paññā ekarasaṭṭhe ñāṇaṃ\n24. Sacchikiriyā paññā phusanaṭṭhe ñāṇaṃ\n25. Attha nānatte paññā attha paṭisambhide ñāṇaṃ\n26. Dhamma nānatte paññā dhamma paṭisambhide ñāṇaṃ\n\n27. Nirutti nānatte paññā nirutti paṭisambhide ñāṇaṃ\n28. Paṭibhāna nānatte paññā paṭibhāna paṭisambhide ñāṇaṃ\n29. Vihāra nānatte paññā vihāraṭṭhe ñāṇaṃ\n30. Samāpatti nānatte paññā samāpattaṭṭhe ñāṇaṃ\n31. Vihāra samāpatti nānatte paññā vihāra samāpattaṭṭhe ñāṇaṃ\n32. Avikkhepa parisuddhattā āsava samucchede paññā ānantarika samādhimhi ñāṇaṃ\n33. Dassanādhipateyyaṃ santova vihārādhigamo paṇītādimuttatā paññā araṇa vihāra ñāṇaṃ\n\n34. Dvīhi balehi samannāgatattā tiṇṇañca saṅkhārānaṃ paṭippassaddhiyā soḷasahi ñāṇa cariyāhi navahi samādhi cariyāhi vasī bhāvatā paññā nirodha samāpattiyā ñāṇaṃ\n35. Sampajānassa pavatta pariyādāne paññā parinibbāne ñāṇaṃ\n36. Sabba dhammānaṃ sammā samucchede nirodhe ca anupaṭṭhānatā paññā samasīsaṭṭhe ñāṇaṃ\n37. Puthu nānattateja pariyādāne paññā sallekhaṭṭhe ñāṇaṃ\n38. Asallīnatta pahitatta paggahaṭṭhe paññā viriyārambhe ñāṇaṃ\n39. Nānā dhammappakāsanatā paññā attha sandassane ñāṇaṃ\n\n40. Sabba dhammānaṃ ekasaṅgahatā nānattekatta paṭivedhe paññā dassana visuddhi ñāṇaṃ\n41. Viditattā paññā khanti ñāṇaṃ\n42. Phuṭṭhattā paññā pariyogāhaṇe ñāṇaṃ\n43. Samodahane paññā padesavihāre ñāṇaṃ\n44. Adhipatattā paññā saññā vivaṭṭe ñāṇaṃ\n45. Nānatte paññā ceto vivaṭṭe ñāṇaṃ\n46. Adhiṭṭhāne paññā citta vivaṭṭe ñāṇaṃ\n47. Suññate paññā ñāṇa vivaṭṭe ñāṇaṃ\n\n48. Vossagge paññā vimokkha vivaṭṭe ñāṇaṃ\n49. Tathaṭṭhe paññā sacca vivaṭṭe ñāṇaṃ\n50. Kāyampi cittampi ekavavatthānatā sukhasaññañca lahusaññañca adhiṭṭhāna vasena ijjhanaṭṭhe paññā iddhividhe ñāṇaṃ\n51. Vitakka vipphāra vasena nānattekatta sadda nimittānaṃ pariyogāhaṇe paññā sota dhātu visuddhi ñāṇaṃ\n52. Tiṇṇaṃ cittānaṃ vipphārattā indriyānaṃ pasādavasena nānattekatta viññāṇacariyā pariyogāhaṇe paññā cetopariya ñāṇaṃ\n\n53. Paccaya pavattānaṃ dhammānaṃ nānattekatta kamma vipphāra vasena pariyogāhaṇe paññā pubbe nivāsānussati ñāṇaṃ\n54. Obhāsa vasena nānattekatta rūpa nimittānaṃ dassanaṭṭhe paññā dibbacakkhu ñāṇaṃ\n55. Catusaṭṭhiyā ākārehi tiṇṇannaṃ indriyānaṃ vasībhāvatā paññā āsavānaṃ khaye ñāṇaṃ\n56. Pariññaṭṭhe paññā dukkhe ñāṇaṃ\n57. Pahānaṭṭhe paññā samudaye ñāṇaṃ\n58. Sacchikiriyaṭṭhe paññā nirodhe ñāṇaṃ\n\n59. Bhāvanaṭṭhe paññā magge ñāṇaṃ\n60. Dukkhe ñāṇaṃ\n61. Dukkha samudaye ñāṇaṃ\n62. Dukkha nirodhe ñāṇaṃ\n63. Dukkha nirodha gāminī paṭipadāya ñāṇaṃ\n64. Attha paṭisambhide ñāṇaṃ\n65. Dhamma paṭisambhide ñāṇaṃ\n66. Nirutti paṭisambhide ñāṇaṃ\n67. Paṭibhāna paṭisambhide ñāṇaṃ\n\n68. Indriya paropariyatte ñāṇaṃ\n69. Sattānaṃ āsayānusaye ñāṇaṃ\n70. Yamaka pāṭihāriye ñāṇaṃ\n71. Mahā karuṇā samāpattiyā ñāṇaṃ\n72. Sabbaññuta ñāṇaṃ\n73. Anāvaraṇa ñāṇanti\n\nImāni tesattati ñāṇāni. Imesaṃ tesattatiyā ñāṇānaṃ satta saṭṭhi ñāṇāni sāvaka sādhāraṇāni, cha ñāṇāni asādhāraṇāni sāvakehi. Imehi tesattatiyā ñāṇehi samannāgataṃ sammā sambuddhaṃ bhagavantaṃ sirasā namāmi.\n\nSādhu ! Sādhu ! Sādhu !",
   "sinhala": "1. දහම් දෙසුමට කන් යොමු කිරීමේදී ප්‍රඥාව සුතමය ඤාණයයි.\n2. ඇසීමෙන් සංවරවීමේ ප්‍රඥාව සීලමය ඤාණයයි.\n3. සංවර වීමෙන් සිත තැන්පත් කිරීමේ ප්‍රඥාව සමාධි භාවනාමය ඤාණයයි.\n4. නාම රූපයන්ගේ ප්‍රත්‍ය ධර්මයන් ව්‍යවස්ථා කිරීමේ පැවැත් ප්‍රඥාව ධම්මට්ඨිති ඤාණයයි.\n\n5. අතීතවූද, අනාගතවූද, වර්තමානවූද, පඤ්චස්කන්ධ ධර්මයන් එකොලොස් තැනෙක කැටිකොට ව්‍යවස්ථා කිරීමේ ප්‍රඥාව සම්මසන ඤාණයයි.\n6. වර්තමාන වශයෙන් ලැබෙන්නා වූ පඤ්චස්කන්ධ ධර්මයන්ගේ භංගය නැවත නැවත නුවණින් බැලීමේ ප්‍රඥාව උදයබ්බයානුපස්සනා ඤාණයයි.\n7. රූපාදී ආරම්මණයන් බිඳෙන සැටි බලන ඤාණයේ භංගය නැවත නැවත නුවණින් සැලකීමේ ප්‍රඥාව භංගානුපස්සනා නම් විදර්ශනා ඤාණයයි.\n8. භය වශයෙන් වැටහීමේ ප්‍රඥාව ආදීනව ඤාණයයි.\n9. මිදෙනු කැමැත්ත, ඊට උපාය සැලකීම, උපෙක්ෂා වශයෙන් නැවතීව යන තුන් ආකාරයක් ඇති ප්‍රඥාව සංඛාරුපෙක්ඛා ඤාණයයි.\n10. බාහිර සංස්කාර නිමිත්තෙන් නැගී ආපසු හැරීමේ ප්‍රඥාව ගොත්‍රභූ ඤාණයයි.\n\n11. නිමිත්ත පවත්ත දෙකින් නැගී පරාවර්තනය වන ප්‍රඥාව මාර්ග ඤාණයයි.\n12. බලවත් යෝග ක්‍රියාවන් නිමාවෙන් වූ ප්‍රඥාව ඵල ඤාණයයි.\n13. සිඳින ලද කෙලෙස් වට නැවත සලකා බලන ප්‍රඥාව විමුක්ති ඤාණයයි.\n14. එකල එකතුවට පත් මගපල ආදී ධර්මයන් දකීමේ ප්‍රඥාව පච්චවෙක්ඛණ ඤාණයයි.\n15. අධ්‍යාත්ම ධර්මයන් ව්‍යවස්ථා කරන ප්‍රඥාව වත්ථු නානත්ත ඤාණයයි.\n16. බාහිර වූ ඔවුන්ගේ විෂයයන් ව්‍යවස්ථා කරන ප්‍රඥාව ගොචර නානත්ත ඤාණයයි.\n17. චර්යාවන් ව්‍යවස්ථා කරන ප්‍රඥාව චරියා නානත්ත ඤාණයයි.\n18. සතර සතර ප්‍රභේදවත් ධර්මයන් ව්‍යවස්ථා කරන ප්‍රඥාව භූමි නානත්ත ඤාණයයි.\n\n19. නව නව ප්‍රභේදවත් ධර්මයන් ව්‍යවස්ථාකරන ප්‍රඥාව ධම්ම නානත්ත ඤාණයයි.\n20. රුප්පනාදී ස්වභාවයෙන් පංචස්කන්ධාදි ධර්මයන් දක්නා ප්‍රඥාව ඤාතස්වභාව ඤාණයයි.\n21. සාමාන්‍ය ලක්ෂණාවබෝධයෙන් පැතිර දන්නා ප්‍රඥාව තීරණ ස්වභාව ඤාණයයි.\n22. ප්‍රහාන ප්‍රඥාන පරිත්‍යාග ස්වභාව ඤාණයයි.\n23. භාවනා ප්‍රඥාව ඒකරස ස්වභාව ඤාණයයි.\n24. ප්‍රත්‍යක්ෂ කරන ප්‍රඥාව වින්දන ස්වභාව ඤාණයයි.\n25. අර්ථයන්ගේ නානා ස්වභාවයෙහි පැවති ප්‍රඥාව අර්ථ පටිසම්භිදා ඤාණයයි.\n26. ධර්මයන්ගේ නානා ස්වභාවයෙහි පැවති ප්‍රඥාව ධර්ම ප්‍රතිසම්භිදා ඤාණයයි.\n\n27. නිරුත්තීන්ගේ නා නා ස්වභාවයෙහි පැවැති ප්‍රඥාව නිරුක්ති ප්‍රතිසම්භිදා ඤාණයයි.\n28. ප්‍රතිභානයන්ගේ නානාත්වයෙහි පැවැති ප්‍රඥාව පටිභාන ප්‍රතිසම්භිදා ඤාණයයි.\n29. නා නා විදර්ශනා විහරණ ප්‍රඥාව විහාර ස්වභාව ඤාණයයි.\n30. අනිමිත්තාදි නා නා සමාපත්ති පිළිබඳ ප්‍රඥාව සමාපත්ති ස්වභාව ඤාණයයි.\n31. විහාර සමාපත්ති දෙකම පිළිබඳව ප්‍රඥාව විහාර සමාපත්ති ස්වභාව ඤාණයයි.\n32. සමාධියේම පිරිසිදුකමින් කාමාදී ආශ්‍රවන් සිඳලන්නාවූ ප්‍රඥාව ආනන්තරික සමාධියේ ඤාණයයි.\n33. විදර්ශනාවේ අධිපති භාවය ද අධිගත වූ ශාන්ත රහත් ඵලය ද, ඵල සමවතෙහි අධිමුත්තිය ද යන මෙහි පැවති ප්‍රඥාව අරණ විහාර ඤාණයයි.\n\n34. සමථ විදසුනෙන් පිරිපුන් හෙයින් ත්‍රිවිධ සංස්කාරයන්ගේ නිරෝධය සඳහා වූ, ඤාණ පැවතුම් සොළසකින්ද, සමාධි පැවතුම් නවයකින්ද වසී භාවය ඇති ප්‍රඥාව නිරෝධ සමාපත්ති ඤාණයයි.\n35. සම්‍යක් ප්‍රකාරයෙන් දන්නා ප්‍රවර්තය සිඳින ප්‍රඥාව පරිනිබ්බානෙ ඤාණයයි.\n36. සියලු තෙබූමු දහම් පිළිබඳ සන්තතිය සිඳීමෙන් මැනවින් නිරෝධය කළ කල යලි නූපැත්මේ ප්‍රඥාව සමසීස ස්වභාව ඤාණයයි.\n37. ලොව්තුරු ගුණෙන් වෙනවූ රාගාදීන් ද, නානත්තවූ කාමච්ඡන්දාදීන් ද, තවන දුස්සීලාදීන් ගෙවාලන ප්‍රඥාව සල්ලෙඛ ඤාණයයි.\n38. නො හැකිළුනු සිතැතිවූ ද කාය ජීවිත නිරපේක්ෂායෙන් හළාවූද, තැනැත්තාගේ උත්සාහ ස්වභාවයේ ප්‍රඥාව විරියාරම්භ ඤාණයයි.\n39. නා නා ධර්මයන් ප්‍රකට කොට දක්වන ප්‍රඥාව අත්ථ සන්දස්සන ඤාණයයි.\n\n40. සියලු ධර්මයන් එකතු කොට සංග්‍රහයෙහි ද නානාත්ව ඒකත්ව ධර්මයන්ගේ ප්‍රතිවෙධයේද ප්‍රඥාව දර්ශන විසුද්ධි ඤාණයයි.\n41. රූපස්කන්ධාදිය දත් හෙයින් පැවති ප්‍රඥාව ඛන්ති ඤාණයයි.\n42. රූපස්කන්ධාදිය අනිත්‍ය සංඥාදියෙන් ස්පර්ශ කළ හෙයින් පැවති ප්‍රඥාව පරියෝගාහණ ඤාණයයි.\n43. ස්කන්ධාදීන්ගේ ඒකදේශයක් වන වේදනා ධර්මය පිඩු කොට සැලකීමේ ප්‍රඥාව ප්‍රදේශ විහාර ඤාණයයි.\n44. නෙක්ඛම්මාදිය අධික වූයෙන් තදධික භාවයෙන් පැවති ප්‍රඥාව සඤ්ඤා විවට්ට ඤාණයයි.\n45. වැඩිය යුතු ධර්මයෙන් අන්‍ය ස්වභාව වූ කාමච්ඡන්දාදියෙහි ආදීනව දැකීමෙන් පැවති ප්‍රඥාව චෙතො විවට්ට ඤාණයයි.\n46. නෙක්ඛම්මාදී වශයෙන් සිත පිහිටුවාලන ප්‍රඥාව චිත්ත විවට්ට ඤාණයයි.\n47. ආත්ම ආත්මීයත්ව ශුන්‍යතායෙන් අනාත්ම අනාත්මීයත්වයෙහි පැවති ප්‍රඥාව ඤාණ විවට්ට ඤාණයයි.\n\n48. කාමච්ඡන්දාදීන් හැරපීමෙන් නෙක්ඛම්මාදියෙහි පැවති ප්‍රඥාව විමොක්ඛ විවට්ට ඤාණයයි.\n49. එක් එක් සත්‍යයෙක සතර සතර වැදෑරුම්ව ලැබෙන අවිපරීත ස්වභාවයෙහි අසම්මෝහ කෘත්‍ය වශයෙන් පැවති ප්‍රඥාව සච්ච විවට්ට ඤාණයයි.\n(මේ විවට්ට ඤාණ ඡක්කයයි.)\n50. රූප කයත් පාදක ධ්‍යාන සිතත් එකතු කොට ව්‍යවස්ථා කිරීමෙන් හා සුඛ සඤ්ඤාවටත් ලහුසඤ්ඤාවටත් ඇතුළුව සිටීමෙන්ද සිද්ධි ස්වභාවයෙහි පැවති ප්‍රඥාව ඉද්ධිවිධ ඤාණයයි.\n51. තමාගේ විතර්ක වේගයන් අනුව නා නා ස්වභාව වූ ද ඒකස්වභාව වූද ශබ්ද නිමිත්තයනට ඇතුළුවීමේ ප්‍රඥාව සෝත ධාතු විසුද්ධි ඤාණයයි.\n52. සොමනස් දොම්නස් උපෙක්ෂා යන තුන් සිතේ වේගයෙන්ද ෂඩින්ද්‍රියන්ගේ ප්‍රසන්න භාවයෙන් ද නා නා ස්වභාවවූද එක ස්වභාව වූද විඤ්ඤාණ චරියාවනට ඇතුලු වීමේ ප්‍රඥාව චෙතොපරිය ඤාණයයි.\n\n53. නා නා ස්වභාව වූද, ඒක ස්වභාව වූද, කර්මයන්ගේ වේගය අනුව ප්‍රත්‍යයෙන් පැවති ධර්මයනට ඇතුළුවීමේ ප්‍රඥාව පුබ්බෙ නිවාසානුස්සති ඤාණයයි.\n54. කසිණාලෝකයේ බලයෙන් නා නා ස්වභාවවූද ඒක ස්වභාවවූද රූප නිමිති දන්නා ස්වභාවයෙන් පැවති ප්‍රඥාව දිබ්බචක්ඛු ඤාණයයි.\n55. සූසැට ආකාරයකින් ලෝකෝත්තර තුන් දෙනාගේ වසිභාවයෙහි පැවති ප්‍රඥාව ආසවක්ඛය ඤාණයයි.\n(මේ අභිඤ්ඤා ඤාණ සයයි.)\n56. දුකෙහි පරික්ෂා ස්වභාවයෙහි පැවති ප්‍රඥාව දුක්ඛෙ ඤාණයයි.\n57. සමුදයේ සිවුවැදැරුම් ප්‍රහාතව්‍ය ස්වභාවයේ පැවති ප්‍රඥාව සමුදයෙ ඤාණයයි.\n58. නිරෝධයේ සිවුවැදැරුම් ප්‍රත්‍යක්ෂ කළයුතු ස්වභාවයෙහි පැවති ප්‍රඥාව නිරෝධයේ ඤාණයයි.\n\n59. මාර්ගයේ සිවුවැදැරුම් ප්‍රත්‍යක්ෂ කළයුතු ස්වභාවයෙහි පැවති ප්‍රඥාව මාර්ගයේ ඤාණයයි.\n60. දුක්ඛ සත්‍යයෙහි පැවති ඤාණය\n61. දුක්ඛ සමුදයාර්‍ය සත්‍යයෙහි පැවති ඤාණය\n62. දුක්ඛ නිරෝධාර්‍ය සත්‍යයෙහි පැවති ඤාණය\n63. දුක්ඛ නිරෝධ ගාමිනී ප්‍රතිපදාර්‍ය සත්‍යයෙහි පැවති ඤාණය\n(මේ සත්‍යඤාණ චතුෂ්ක දෙකයි.)\n64. අර්ථ ප්‍රතිසම්භිදාවෙහි පැවති ඤාණය\n65. ධර්ම ප්‍රතිසම්භිදාවෙහි පැවති ඤාණය\n66. නිරුක්ති ප්‍රතිසම්භිදාවෙහි පැවති ඤාණය\n67. ප්‍රතිභාන ප්‍රතිසම්භිදාවෙහි පැවති ඤාණය\n(මේ ශුද්ධික ප්‍රතිසම්භිදා සතරයි.)\n\n68. විනෙය ජනන්ගේ ශ්‍රද්ධාදී ඉන්ද්‍රියන් පිළිබඳ උසස් පහත් බව දන්නා ඤාණය\n69. සත්වයන්ගේ ආසය අනුසය දන්නා ඤාණය\n70. යමා මහ පෙළහර දක්වීමේදී පැවති ඤාණය\n71. මහා කරුණා සමවත් ඤාණය\n72. සර්වඥතා ඤාණය\n73. අනාවරණ ඤාණය\n\nමොවුහු තුන් සැත්තුවක් ඤාණයෝය. මෙයින් සැට සතක් ඤාණයෝ ශ්‍රාවක සාධාරණයහ. ඤාණ සයක් ශ්‍රාවකයන්ට අසාධාරණයහ. මේ තුන් සැත්තුවක් ඤාණයෙන් සමන්විත වූ භාග්‍යවත් සම්මා සම්බුදුරජාණන් වහන්සේට දොහොත් මුදුන් තබා නමස්කාර කරමි.\n\nසාධු ! සාධු ! සාධු !",
   "english": "1. Wisdom in lending the ear (to the Dhamma) is knowledge consisting of learning (sutamaya-ñāṇa).\n2. Wisdom of restraint after hearing is knowledge consisting of virtue (sīlamaya-ñāṇa).\n3. Wisdom in concentrating the mind after being restrained is knowledge consisting of the development of concentration (samādhibhāvanāmaya-ñāṇa).\n4. Wisdom in discerning the conditions of mind-and-matter is knowledge of the stability of phenomena (dhammaṭṭhiti-ñāṇa).\n\n5. Wisdom in delimiting, by grouping them together, the phenomena of the past, future and present (the five aggregates, grouped under eleven headings) is knowledge of comprehension (sammasana-ñāṇa).\n6. Wisdom in contemplating the changing nature of the presently arisen phenomena is knowledge of the contemplation of rise and fall (udayabbayānupassanā-ñāṇa).\n7. Wisdom that reflects on the object and contemplates its dissolution is the insight-knowledge of the contemplation of dissolution (bhaṅgānupassanā-ñāṇa).\n8. Wisdom that appears to one as fearful is knowledge of danger (ādīnava-ñāṇa).\n9. Wisdom of three aspects — the desire for deliverance, reflection on the means thereto, and settling in equanimity — is knowledge of equanimity regarding formations (saṅkhārupekkhā-ñāṇa).\n10. Wisdom of emerging from external formations and turning away from them is change-of-lineage knowledge (gotrabhū-ñāṇa).\n\n11. Wisdom of emerging from both (the sign and the occurrence) and turning away is knowledge of the Path (magga-ñāṇa).\n12. Wisdom of the calming of powerful effort is knowledge of Fruition (phala-ñāṇa).\n13. Wisdom that reviews the round of defilements that has been cut off is knowledge of liberation (vimutti-ñāṇa).\n14. Wisdom in seeing the Path, Fruition and other states then attained is reviewing knowledge (paccavekkhaṇa-ñāṇa).\n15. Wisdom in defining internal phenomena is knowledge of the diversity of bases (vatthunānatta-ñāṇa).\n16. Wisdom in defining external phenomena, their objects, is knowledge of the diversity of ranges (gocaranānatta-ñāṇa).\n17. Wisdom in defining temperaments is knowledge of the diversity of temperaments (cariyānānatta-ñāṇa).\n18. Wisdom in defining the fourfold groups of phenomena is knowledge of the diversity of planes (bhūminānatta-ñāṇa).\n\n19. Wisdom in defining the ninefold groups of phenomena is knowledge of the diversity of phenomena (dhammanānatta-ñāṇa).\n20. Direct knowledge: the wisdom that sees the aggregates and other phenomena by their nature (such as being subject to deterioration) is knowledge in the sense of the known (ñātaṭṭha-ñāṇa).\n21. Full understanding: the wisdom that comprehends widely through the general characteristics is knowledge in the sense of investigation (tīraṇaṭṭha-ñāṇa).\n22. Abandoning: wisdom is knowledge in the sense of renunciation (pariccāgaṭṭha-ñāṇa).\n23. Development: wisdom is knowledge in the sense of single function (ekarasaṭṭha-ñāṇa).\n24. Realisation: the wisdom that experiences directly is knowledge in the sense of contact (phusanaṭṭha-ñāṇa).\n25. Wisdom regarding the diversity of meanings is analytical knowledge of meaning (attha-paṭisambhidā-ñāṇa).\n26. Wisdom regarding the diversity of phenomena is analytical knowledge of the Dhamma (dhamma-paṭisambhidā-ñāṇa).\n\n27. Wisdom regarding the diversity of language is analytical knowledge of language (nirutti-paṭisambhidā-ñāṇa).\n28. Wisdom regarding the diversity of ready wit is analytical knowledge of perspicacity (paṭibhāna-paṭisambhidā-ñāṇa).\n29. Wisdom of the various insight-dwellings is knowledge in the sense of dwelling (vihāraṭṭha-ñāṇa).\n30. Wisdom regarding the various attainments, such as the signless, is knowledge in the sense of attainment (samāpattaṭṭha-ñāṇa).\n31. Wisdom regarding both dwellings and attainments is knowledge in the sense of dwelling-attainment.\n32. Wisdom that cuts off the taints through the purity of concentration alone is knowledge of immediate concentration (ānantarika-samādhi-ñāṇa).\n33. Wisdom regarding the predominance of insight, the peaceful attainment of arahantship and the resolve on fruition-attainment is knowledge of the peaceful dwelling (araṇavihāra-ñāṇa).\n\n34. Wisdom of mastery over the sixteen modes of knowledge and the nine modes of concentration, through being endowed with the two powers (serenity and insight) and through the calming of the three kinds of formations, is knowledge of the attainment of cessation (nirodhasamāpatti-ñāṇa).\n35. Wisdom that cuts off the continuing round, knowing it fully, is knowledge of final Nibbāna (parinibbāna-ñāṇa).\n36. Wisdom of non-arising again, once the continuity of all phenomena of the three planes has been rightly cut off and brought to cessation, is knowledge in the sense of \"equal-headed\" (samasīsaṭṭha-ñāṇa).\n37. Wisdom that wears away the diverse defilements — lust and the like, sensual desire and the like, and immorality and the like, which are contrary to supramundane qualities and which burn — is knowledge of austerity (sallekhaṭṭha-ñāṇa).\n38. Wisdom of the energetic effort of one who is not sluggish, who is resolute and disregards body and life, is knowledge of the arousing of energy (viriyārambha-ñāṇa).\n39. Wisdom that makes the various phenomena manifest is knowledge of the demonstration of meaning (atthasandassana-ñāṇa).\n\n40. Wisdom in the combining of all phenomena, and in penetrating their diversity and unity, is knowledge of purification of vision (dassanavisuddhi-ñāṇa).\n41. Wisdom arising from having known the aggregates, beginning with form, is knowledge of acceptance (khanti-ñāṇa).\n42. Wisdom arising from having touched the aggregates with the perception of impermanence and the like is knowledge of immersion (pariyogāhaṇa-ñāṇa).\n43. Wisdom that views, as a lump, one portion of the aggregates — feeling — is knowledge of dwelling in a part (padesavihāra-ñāṇa).\n44. Wisdom arising from the predominance of renunciation and the like is knowledge of the turning away of perception (saññāvivaṭṭa-ñāṇa).\n45. Wisdom that sees the danger in sensual desire and the like, which are contrary to the Dhamma to be developed, is knowledge of the turning away of intention (cetovivaṭṭa-ñāṇa).\n46. Wisdom that establishes the mind through renunciation and the like is knowledge of the turning away of mind (cittavivaṭṭa-ñāṇa).\n47. Wisdom of non-self and non-belonging to self, through the emptiness of self and of what belongs to self, is knowledge of the turning away of knowledge (ñāṇavivaṭṭa-ñāṇa).\n\n48. Wisdom of renunciation and the like, through the giving up of sensual desire and the like, is knowledge of the turning away of liberation (vimokkhavivaṭṭa-ñāṇa).\n49. Wisdom of non-delusion, as the function regarding the unerring nature of each truth, each having four aspects, is knowledge of the turning away of truth (saccavivaṭṭa-ñāṇa).\n(These are the six knowledges of turning away.)\n50. Wisdom that succeeds — by determining body and mind as one and by entering into the perceptions of pleasure and lightness through resolve — is knowledge of the various supernormal powers (iddhividha-ñāṇa).\n51. Wisdom that penetrates sound-signs, both diverse and single, according to the force of one's applied thought, is knowledge of the purification of the divine ear (sotadhātuvisuddhi-ñāṇa).\n52. Wisdom that penetrates the courses of consciousness, diverse and single, through the force of the three kinds of mind (joy, displeasure and equanimity) and the clarity of the six faculties, is knowledge of the minds of others (cetopariya-ñāṇa).\n\n53. Wisdom that penetrates the conditioned phenomena, diverse and single, according to the force of kamma, is knowledge of the recollection of past lives (pubbenivāsānussati-ñāṇa).\n54. Wisdom that sees visible forms, diverse and single, by the power of the light of the kasiṇa, is knowledge of the divine eye (dibbacakkhu-ñāṇa).\n55. Wisdom of mastery over the supramundane faculties in sixty-four ways is knowledge of the destruction of the taints (āsavakkhaya-ñāṇa).\n(These are the six higher knowledges.)\n56. Wisdom in the sense of full understanding is knowledge of suffering (dukkhe ñāṇa).\n57. Wisdom in the sense of abandoning, the fourfold nature of what is to be abandoned in the origin, is knowledge of the origin (samudaye ñāṇa).\n58. Wisdom in the sense of realisation, the fourfold nature of what is to be realised in cessation, is knowledge of cessation (nirodhe ñāṇa).\n\n59. Wisdom in the sense of development is knowledge of the Path (magge ñāṇa).\n60. Knowledge of the truth of suffering.\n61. Knowledge of the truth of the origin of suffering.\n62. Knowledge of the truth of the cessation of suffering.\n63. Knowledge of the truth of the way leading to the cessation of suffering.\n(These are the two sets of four knowledges of the truths.)\n64. Knowledge in the analytical insight into meaning.\n65. Knowledge in the analytical insight into the Dhamma.\n66. Knowledge in the analytical insight into language.\n67. Knowledge in the analytical insight into ready wit.\n(These are the four pure analytical knowledges.)\n\n68. Knowledge of the superior and inferior faculties of faith and the like in those to be trained.\n69. Knowledge of the inclinations and underlying tendencies of beings.\n70. Knowledge in the displaying of the Twin Miracle.\n71. Knowledge of the attainment of Great Compassion.\n72. Omniscient knowledge.\n73. Unobstructed knowledge.\n\nThese are the seventy-three knowledges. Of these seventy-three knowledges, sixty-seven are shared with the disciples, and six are not shared with the disciples. I bow with my head to the Perfectly Self-Awakened Blessed One, endowed with these seventy-three knowledges. I raise my joined hands to the crown of my head in homage to him.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "e26",
   "group": "evening",
   "name": {
    "si": "වත පිරිත සජ්ඣායනාව",
    "en": "Recitation of the Vata Pirith"
   },
   "sinhala": "1. කරණීය මෙත්ත සූත්‍රය\n2. දසධම්ම සූත්‍රයේ සිට චුන්ද බොජ්ඣංගය තෙක් දිනකට එක සූත්‍රය බැගින් සජ්ඣායනා කරන්න.\n3. මෝර පිරිතේ අපරාර්ධය\n4. ඛන්ධ (කඳ) පිරිත - නිමවා ඉන් අනතුරුව",
   "english": "1. The Karaṇīya Mettā Sutta.\n2. From the Dasadhamma Sutta up to the Cunda Bojjhaṅga: recite one sutta each day.\n3. The latter half of the Mora Paritta.\n4. The Khandha Paritta — and when it is finished, proceed to what follows."
  },
  {
   "id": "e27",
   "group": "evening",
   "name": {
    "si": "ආරක්ෂක පිරිත් සජ්ඣායනාව",
    "en": "Recitation of the Protective Verses"
   },
   "pali": "1. විපස්සිස්ස නමත්ථු - චක්ඛුමන්තස්ස සිරීමතො\nසිඛිස්සපි නමත්ථු - සබ්බ භූතානුකම්පිනො\n\n2. වෙස්සභුස්ස නමත්ථු - නහාතකස්ස තපස්සිනො\nනමත්ථු කකුසන්ධස්ස - මාරසෙනා පමද්දිනො\n\n3. කොණාගමනස්ස නමත්ථු - බ්‍රාහ්මණස්ස වුසීමතො\nකස්සපස්ස නමත්ථු - විප්පමුත්තස්ස සබ්බධි\n\n4. අංගීරසස්ස නමත්ථු - සක්‍ය පුත්තස්ස සිරීමතො\nනමො තෙසං සත්තන්නං - සම්මා සම්බුද්ධානන්ති\n\n1. පඨවී බල සුන්දරී - සබ්බඤ්ඤු බොධි මණ්ඩලං\nඅසංඛෙය්‍යං මාරසෙනං - ජයො ජයතු මංගලං\n\n2. කකුසන්ධො කොණාගමනො - කස්සපො ගොතමො මුනී\nමෙත්තෙය්‍යො පඤ්ච බුද්ධා තෙ - සීසෙ මෙ සෙන්තු සබ්බදා\n\n3. එතෙසං අනුභාවෙන - යක්ඛා දෙවා මහිද්ධිකා\nසබ්බෙපි සුඛිතා හොන්තු - මම මිත්තා සහායකා\n\n4. සම්බුද්ධෙ අට්ඨවීසංච - ද්වාදසංච සහස්සකෙ\nපඤ්ච සත සහස්සානි - නමාමි සිරසා ධරං\n\n5. අප්පකා වාලුකා ගංගා - අනන්තා නිබ්බුතා ජිනා\nතෙසං ධම්මංච සංඝංච - ආදරෙන නමාම්‍යහං\n\n6. නමක්කාරානුභාවෙන - හිත්වා සබ්බෙ උපද්දවෙ\nඅනෙකා අන්තරායාපි - විනස්සන්තු අසෙසතො\n\n7. ඛන්ති පරමං තපො තිතික්ඛා - නිබ්බානං පරමං වදන්ති බුද්ධා\nනහි පබ්බජිතො පරූපඝාතී - සමණො හොති පරං විහෙඨයන්තො\n\n8. සබ්බ පාපස්ස අකරණං - කුසලස්ස උපසම්පදා\nසචිත්ත පරියොදපනං - එතං බුද්ධාන සාසනං\n\n9. අනූපවාදො අනූපඝාතො - පාතිමොක්ඛෙ ච සංවරො\nමත්තඤ්ඤුතා ච භත්තස්මිං - පන්තඤ්ච සයනාසනං\nඅධිචිත්තෙ ච ආයොගො - එතං බුද්ධානං සාසනං\n\n10. සබ්බෙ සංඛාරා අනිච්චාති - යදා පඤ්ඤාය පස්සති\nඅථ නිබ්බින්දති දුක්ඛෙ - එස මග්ගො විසුද්ධියා\n\n11. සබ්බෙ සංඛාරා දුක්ඛාති - යදා පඤ්ඤාය පස්සති\nඅථ නිබ්බින්දති දුක්ඛෙ - එස මග්ගො විසුද්ධියා\n\n12. සබ්බෙ ධම්මා අනත්තාති - යදා පඤ්ඤාය පස්සති\nඅථ නිබ්බින්දති දුක්ඛෙ - එස මග්ගො විසුද්ධියා",
   "translit": "1. Vipassissa namatthu - cakkhumantassa sirīmato\nsikhissapi namatthu - sabba bhūtānukampino\n\n2. Vessabhussa namatthu - nahātakassa tapassino\nnamatthu kakusandhassa - mārasenā pamaddino\n\n3. Koṇāgamanassa namatthu - brāhmaṇassa vusīmato\nkassapassa namatthu - vippamuttassa sabbadhi\n\n4. Aṅgīrasassa namatthu - sakya puttassa sirīmato\nnamo tesaṃ sattannaṃ - sammā sambuddhānanti\n\n1. Paṭhavī bala sundarī - sabbaññu bodhi maṇḍalaṃ\nasaṅkheyyaṃ mārasenaṃ - jayo jayatu maṅgalaṃ\n\n2. Kakusandho koṇāgamano - kassapo gotamo munī\nmetteyyo pañca buddhā te - sīse me sentu sabbadā\n\n3. Etesaṃ anubhāvena - yakkhā devā mahiddhikā\nsabbepi sukhitā hontu - mama mittā sahāyakā\n\n4. Sambuddhe aṭṭhavīsañca - dvādasañca sahassake\npañca sata sahassāni - namāmi sirasā dharaṃ\n\n5. Appakā vālukā gaṅgā - anantā nibbutā jinā\ntesaṃ dhammañca saṅghañca - ādarena namāmyahaṃ\n\n6. Namakkārānubhāvena - hitvā sabbe upaddave\nanekā antarāyāpi - vinassantu asesato\n\n7. Khanti paramaṃ tapo titikkhā - nibbānaṃ paramaṃ vadanti buddhā\nnahi pabbajito parūpaghātī - samaṇo hoti paraṃ viheṭhayanto\n\n8. Sabba pāpassa akaraṇaṃ - kusalassa upasampadā\nsacitta pariyodapanaṃ - etaṃ buddhāna sāsanaṃ\n\n9. Anūpavādo anūpaghāto - pātimokkhe ca saṃvaro\nmattaññutā ca bhattasmiṃ - pantañca sayanāsanaṃ\nadhicitte ca āyogo - etaṃ buddhānaṃ sāsanaṃ\n\n10. Sabbe saṅkhārā aniccāti - yadā paññāya passati\natha nibbindati dukkhe - esa maggo visuddhiyā\n\n11. Sabbe saṅkhārā dukkhāti - yadā paññāya passati\natha nibbindati dukkhe - esa maggo visuddhiyā\n\n12. Sabbe dhammā anattāti - yadā paññāya passati\natha nibbindati dukkhe - esa maggo visuddhiyā",
   "sinhala": "1. ශ්‍රී සම්පන්න, චක්ෂුමත් වූ විපස්සී බුදුන්ට නමස්කාර වේවා. සියලු සත්වයන් කෙරෙහි අනුකම්පා ඇති සිඛී බුදුන්ටත් නමස්කාර වේවා.\n\n2. කෙලෙස් සෝදා හළ තපස්වී වූ වෙස්සභූ බුදුන්ට නමස්කාර වේවා. මාර සේනාව මිරිකා දැමූ කකුසඳ බුදුන්ටත් නමස්කාර වේවා.\n\n3. වැස නිමවූ බ්‍රාහ්මණ වූ කොණාගමන බුදුන්ට නමස්කාර වේවා. සියලු අයුරින් මිදුණු කස්සප බුදුන්ටත් නමස්කාර වේවා.\n\n4. ශ්‍රී සම්පන්න, ශාක්‍ය පුත්‍ර වූ අංගීරස (ගෞතම) බුදුන්ට නමස්කාර වේවා. ඒ බුදුවරු සත් දෙනාට නමස්කාර වේවා.\n\n1. මාර සේනාව ජයගත් සර්වඥයන් වහන්සේගේ බෝමැඩ ආශ්‍රිත ජයමංගලය වේවා.\n\n2. කකුසඳ, කොණාගමන, කස්සප, ගෞතම යන මුනිවරුන් හා මෛත්‍රී බුදුන් ද යන ඒ පස් බුදුවරු සැමදා මාගේ හිස මත වැඩ සිටිත්වා.\n\n3. ඔවුන්ගේ ආනුභාවයෙන් මහත් ඍද්ධි ඇති යක්ෂයෝද දෙවියෝද, මාගේ මිත්‍රයෝද සහායකයෝද සියල්ලෝම සුවපත් වෙත්වා.\n\n4. විසි අට සම්බුදුවරුන්ටත්, දොළොස් දහසක් බුදුවරුන්ටත්, පන්සිය දහසක් බුදුවරුන්ටත් මම හිසින් නමස්කාර කරමි.\n\n5. ගංගා නදියේ වැලි කැට ටිකකි. නිවී ගිය ජිනවරයෝ අනන්තයහ. ඒ සියලු දෙනාගේ ධර්මයටත් සංඝයාටත් මම ආදරයෙන් නමස්කාර කරමි.\n\n6. නමස්කාරයේ ආනුභාවයෙන් සියලු උපද්‍රව දුරු කොට, නොයෙක් අන්තරායයන් ද සම්පූර්ණයෙන්ම විනාශ වෙත්වා.\n\n7. ඉවසීම උතුම් තපසයි. නිවන උතුම්ය යි බුදුවරු වදාරති. අන්‍යයන් පෙළන්නා පැවිද්දෙක් නොවේ. අනුන් වෙහෙසන්නා ශ්‍රමණයෙක් නොවේ.\n\n8. සියලු පාපයන් නොකිරීම, කුසල් වැඩීම, තමාගේ සිත පිරිසිදු කර ගැනීම - මෙය බුදුවරුන්ගේ අනුශාසනාවයි.\n\n9. අන්‍යයන්ට නින්දා නොකිරීම, අන්‍යයන්ට හිංසා නොකිරීම, ප්‍රාතිමෝක්ෂයෙහි සංවර වීම, ආහාරයෙහි පමණ දැනීම, හුදකලා සෙනසුන් සේවනය, අධිචිත්ත (භාවනාව) යෙහි යෙදීම - මෙය බුදුවරුන්ගේ අනුශාසනාවයි.\n\n10. \"සියලු සංස්කාර අනිත්‍යයි\" යම් කලෙක ප්‍රඥාවෙන් දකීද, එකල දුකෙහි කලකිරේ. මෙය විශුද්ධියේ මාර්ගයයි.\n\n11. \"සියලු සංස්කාර දුක්ඛයි\" යම් කලෙක ප්‍රඥාවෙන් දකීද, එකල දුකෙහි කලකිරේ. මෙය විශුද්ධියේ මාර්ගයයි.\n\n12. \"සියලු ධර්ම අනාත්මයි\" යම් කලෙක ප්‍රඥාවෙන් දකීද, එකල දුකෙහි කලකිරේ. මෙය විශුද්ධියේ මාර්ගයයි.",
   "english": "1. Homage to Vipassī, the glorious One with vision; and homage to Sikhī, compassionate towards all beings.\n\n2. Homage to Vessabhū, the purified ascetic; and homage to Kakusandha, the crusher of Māra's army.\n\n3. Homage to Koṇāgamana, the brahmin who has lived the holy life; and homage to Kassapa, wholly liberated.\n\n4. Homage to Aṅgīrasa (Gotama), the glorious son of the Sakyas. Homage to these seven Perfectly Self-Awakened Ones.\n\n1. May there be victory and blessing at the Bodhi-seat of the Omniscient One, who conquered the countless army of Māra.\n\n2. Kakusandha, Koṇāgamana, Kassapa, the sage Gotama and Metteyya — may these five Buddhas ever rest upon my head.\n\n3. By the power of these, may the mighty yakkhas and devas, and all my friends and helpers, be happy.\n\n4. I bow with my head to the twenty-eight Perfectly Self-Awakened Ones, to the twelve thousand, and to the five hundred thousand (Buddhas).\n\n5. The grains of sand in the Ganges are few; the Victors who have attained Nibbāna are countless. I reverently pay homage to their Dhamma and Saṅgha.\n\n6. By the power of this homage, having cast off all calamities, may the many dangers also be destroyed without remainder.\n\n7. Patient endurance is the supreme austerity; the Buddhas declare Nibbāna supreme. One who harms others is no renunciant; one who oppresses others is no ascetic.\n\n8. Not to do any evil, to cultivate the wholesome, to purify one's own mind — this is the teaching of the Buddhas.\n\n9. Not reviling, not harming, restraint according to the Pātimokkha, moderation in food, dwelling in secluded lodgings, devotion to the higher mind — this is the teaching of the Buddhas.\n\n10. \"All formations are impermanent\": when one sees this with wisdom, one grows weary of suffering. This is the path to purification.\n\n11. \"All formations are suffering\": when one sees this with wisdom, one grows weary of suffering. This is the path to purification.\n\n12. \"All phenomena are not-self\": when one sees this with wisdom, one grows weary of suffering. This is the path to purification."
  },
  {
   "id": "e28",
   "group": "evening",
   "name": {
    "si": "අනේකවිධ පුණ්‍යානුමෝදනා හා ප්‍රාර්ථනා ගාථා",
    "en": "Verses of Rejoicing in Merit and Aspiration"
   },
   "pali": "1. ඉමිනා පුඤ්ඤකම්මෙන - උපජ්ඣායා ගුණුත්තරා\nආචරියූපකාරා ච - මාතා පිතා පියා මමං\n\n2. සුරියො චන්දිමා රාජා - ගුණවන්තා නරා පි ච\nබ්‍රහ්මා මාරා ච ඉන්දා ච - ලොකපාලා ච දෙවතා\n\n3. යමො මිත්තා මනුස්සා ච - මජ්ඣත්තා වෙරිකා පි ච\nසබ්බෙ සත්තා සුඛී හොන්තු - පුඤ්ඤානි පකතානි මෙ\n\n4. සුඛං ච තිවිධං දෙන්තු - ඛිප්පං පාපෙථ වො මතං\nඉමිනා පුඤ්ඤ කම්මෙන - ඉමිනා උද්දිසෙන ච\n\n5. ඛිප්පාහං සුලභෙ චෙව - තණ්හූපාදාන ඡෙදනං\nයෙ සන්තානෙ හීනා ධම්මා - යාව නිබ්බානතො මමං\n\n6. නස්සන්තු සබ්බදායෙව - යත්ථ ජාතො භවෙ භවෙ\nඋජු චිත්තො සතිපඤ්ඤො - සල්ලෙඛො විරිය වාමිනා\n\n7. මාරා ලභන්තු නොකාසං - කාතුං ච විරියෙ මම\nබුද්ධො දීපවරො නාථො - ධම්මො නාථො වරුත්තමො\n\n8. නාථො පච්චෙක සම්බුද්ධො - සංඝො නාථොත්තරො මමං\nතෙසොත්තමානු භාවෙන - මාරොකාසං ලභන්තු මා\n\nභවග්ගපාදාය අවීචි හෙට්ඨතො\nඑත්ථන්තරෙ සත්ත කායූපපන්නා\nරූපී අරූපී ච අසඤ්ඤි සඤ්ඤිනො\nදුක්ඛා පමුච්චන්තු ඵුසන්තු නිබ්බුතිං\n\nදෙවො වස්සතු කාලෙන - සස්ස සම්පත්ති හොතු ච\nඵීතො භවතු ලොකො ච - රාජා භවතු ධම්මිකො",
   "translit": "1. Iminā puññakammena - upajjhāyā guṇuttarā\nācariyūpakārā ca - mātā pitā piyā mamaṃ\n\n2. Suriyo candimā rājā - guṇavantā narā pi ca\nbrahmā mārā ca indā ca - lokapālā ca devatā\n\n3. Yamo mittā manussā ca - majjhattā verikā pi ca\nsabbe sattā sukhī hontu - puññāni pakatāni me\n\n4. Sukhaṃ ca tividhaṃ dentu - khippaṃ pāpetha vo mataṃ\niminā puñña kammena - iminā uddisena ca\n\n5. Khippāhaṃ sulabhe ceva - taṇhūpādāna chedanaṃ\nye santāne hīnā dhammā - yāva nibbānato mamaṃ\n\n6. Nassantu sabbadāyeva - yattha jāto bhave bhave\nuju citto satipañño - sallekho viriya vāminā\n\n7. Mārā labhantu nokāsaṃ - kātuṃ ca viriye mama\nbuddho dīpavaro nātho - dhammo nātho varuttamo\n\n8. Nātho pacceka sambuddho - saṅgho nāthottaro mamaṃ\ntesottamānu bhāvena - mārokāsaṃ labhantu mā\n\nBhavaggapādāya avīci heṭṭhato\netthantare satta kāyūpapannā\nrūpī arūpī ca asaññi saññino\ndukkhā pamuccantu phusantu nibbutiṃ\n\nDevo vassatu kālena - sassa sampatti hotu ca\nphīto bhavatu loko ca - rājā bhavatu dhammiko",
   "sinhala": "1. මේ කුශලානුභාව බලයෙන් මාගේ ආචාර්ය උපාධ්‍යාය ගුණෝත්තම උතුමෝද, උපකාරකයෝද, ප්‍රිය මවුපිය දෙගුරුන්ද,\n\n2. චන්ද්‍ර සූර්‍ය රාජයෝද, ගුණවත් මනුෂ්‍යයෝද, බ්‍රහ්මයෝද, මාරයෝද, ඉන්ද්‍රයෝද, ලෝක පාලක දෙවියෝද,\n\n3. යම දෙවි රජු ද, මිත්‍ර මනුෂ්‍යයෝද, මධ්‍යස්ථයෝද, වෛරීහුද, සියළු සත්වයෝද සුවපත් වෙත්වා.\n\n4. මවිසින් විශේෂයෙන් රැස්කරන ලද කුශලයෝ ත්‍රිවිධ සම්පත් දෙත්වා. භවත්හු වහා නිවනට පමුණුවනු ලබත්වා.\n\n5. මේ කුශලයෙන්ද මේ උදෙසීමෙන් ද මම තෘෂ්ණා උපාදානයක් සිඳීම වහා ලබම්වා.\n\n6. නිවන දක්වා මගේ සන්තානයේ පාප ධර්ම නොපිහිටේවා. උපනුපන් භවයක් පාසා සැම කල්හි සෘජු සිත් ඇත්තේ සති ප්‍රඥා ඇත්තේ, සල්ලේඛ ප්‍රතිපදා ඇත්තේ, වීර්යය ඇත්තේද වෙම්වා!\n\n7-8. මේ කුශලයෙන් මාරයෝ අවකාශ නොලබත්වා. මා හට වීරිය කිරීම පිණිස බුද්ධරත්නය උතුම් පිහිටය. ධර්ම රත්නය ද මට උතුම් පිහිටය. ප්‍රත්‍යෙක බුද්ධ රත්නය ද ආර්ය මහා සංඝරත්නය ද මා හට උතුම් පිහිටය. ඒ උත්තම රත්නත්‍රයානුභාවයෙන් මාරයෝ අවකාශ නොලබත්වා.\n\nභවාග්‍රයෙහි පටන් අවීචිය දක්වා මේ අතර සත්ව ලෝකයට ඇතුළත් වූ රූපී අරූපී සඤ්ඤී අසඤ්ඤී සියලු සත්වයෝ දුකෙන් මිදෙත්වා. නිවන් සුව ලබත්වා.\n\nකලට වැසි වසීවා. ගොවිතැන් දියුණු වේවා. රට සශ්‍රීක වේවා. රජ දැහැමි වේවා.",
   "english": "1. By the power of this meritorious deed, may my preceptors and teachers, excellent in virtue, my benefactors, my dear mother and father,\n\n2. the sun and moon deities, virtuous humans, the Brahmās, Māra, Indra and the guardian deities of the world,\n\n3. Yama, friendly humans, neutral persons and those hostile to me — may all beings be happy.\n\n4. May the merits I have specially gathered bestow the three kinds of happiness, and may you all be swiftly led to Nibbāna.\n\n5. By this merit and this dedication, may I swiftly and easily attain the cutting off of craving and clinging.\n\n6. Until I reach Nibbāna, may the evil states in my mental continuum not take root. In every existence in which I am born, may I be upright in mind, mindful and wise, practising austerity, and energetic!\n\n7–8. By this merit, may Māra find no opportunity. For my striving, the Buddha is my supreme refuge; the Dhamma is also my supreme refuge; the Paccekabuddha and the noble Saṅgha are also my supreme refuge. By the power of these supreme Gems, may Māra gain no opportunity against me.\n\nFrom the summit of existence down to the Avīci hell, and all in between — beings who have arisen in this world, those with form and the formless, the percipient and the non-percipient — may they all be freed from suffering and attain the peace of Nibbāna.\n\nMay the rain fall in due season; may the harvests be abundant; may the country prosper; and may the king be righteous."
  },
  {
   "id": "e29",
   "group": "evening",
   "name": {
    "si": "සුගතො වාදය",
    "en": "The Sugata's Exhortation"
   },
   "pali": "1. අප්පමාදෙන භික්ඛවෙ සම්පාදෙථ\nදුල්ලභො බුද්ධුප්පාදො ලොකස්මිං\nදුල්ලභො මනුස්සත්ත පටිලාභො\nදුල්ලභා ඛණ සම්පත්ති\nදුල්ලභා පබ්බජ්ජා\nදුල්ලභං සද්ධම්ම සවණං\nදුල්ලභො සප්පුරිස සංසෙවො\n\n2. ආරභථ නික්ඛමථ - යුඤ්ජථ බුද්ධ සාසනෙ\nධුනාථ මච්චුනො සෙනං - නළාගාරංව කුඤ්ජරො\n\n3. යො ඉමස්මිං ධම්ම විනයෙ - අප්පමත්තො විහෙස්සති\nපහාය ජාති සංසාරං - දුක්ඛස්සන්තං කරිස්සති",
   "translit": "1. Appamādena bhikkhave sampādetha\ndullabho buddhuppādo lokasmiṃ\ndullabho manussatta paṭilābho\ndullabhā khaṇa sampatti\ndullabhā pabbajjā\ndullabhaṃ saddhamma savaṇaṃ\ndullabho sappurisa saṃsevo\n\n2. Ārabhatha nikkhamatha - yuñjatha buddha sāsane\ndhunātha maccuno senaṃ - naḷāgāraṃva kuñjaro\n\n3. Yo imasmiṃ dhamma vinaye - appamatto viharissati\npahāya jāti saṃsāraṃ - dukkhassantaṃ karissati",
   "sinhala": "1. මහණෙනි ! බුදු සසුන ලොව දුර්ලභය. මිනිසත් බව දුර්ලභය. ඉන්ද්‍රිය පරිපූර්ණ ක්ෂණ සම්පත්තිය දුර්ලභය. ශාසන ප්‍රවුජ්‍යාව දුර්ලභය. නෛර්යාණික සද්ධර්මශ්‍රවණය දුර්ලභය. සත් පුරුෂ ආශ්‍රය දුර්ලභය. එසේ හෙයින් නොපමාව සිහි නුවණින් පිළිවෙත් සපුරම්.\n\n2. මේ බුදු සසුනේ පිළිවෙත් පිරීමෙහි ආරම්භ ධාතු වීර්යය කරමි. නික්කම ධාතු වීර්යය ද කරමි. පරාක්‍රමධාතු වීර්යයෙන් යෙදෙමි. යම්සේද? මහා හස්තිරාජයෙකු බටකොල ගෙයක් සිඳ බිඳ දමන්නාක් මෙනි. මර සෙනග පලවාහරිමි.\n\n3. යම් නුවණැත්තෙක් මේ බුදු සස්නෙහි නොපමාව වීර්යය කෙරේ නම් ජාති සංසාරය හැරදමා දුක් කෙළවර කොට නිවන් දකින්නේය.",
   "english": "1. Monks, strive with heedfulness! The arising of a Buddha in the world is rare. Attaining human birth is rare. The fortunate opportunity, with the faculties intact, is rare. Going forth in the Dispensation is rare. Hearing the Saddhamma that leads out of saṃsāra is rare. Association with good people is rare. Therefore, with mindfulness and wisdom, I fulfil the practices without delay.\n\n2. In this Buddha's Dispensation I make the effort of beginning (ārambha), the effort of going forth (nikkama) and the effort of perseverance (parakkama). Just as a great elephant shatters a reed hut, so I shall scatter Māra's army.\n\n3. Whoever lives heedfully in this Dhamma and Discipline will abandon the cycle of birth and make an end of suffering."
  },
  {
   "id": "e30",
   "group": "evening",
   "name": {
    "si": "විනාඩි 15 පමණ භාවනාවේ යෙදීම",
    "en": "Meditation (about 15 minutes)"
   }
  },
  {
   "id": "e31",
   "group": "evening",
   "name": {
    "si": "දෙවියන්ට ඤාතීන්ට පින් අනුමෝදන් කිරීම",
    "en": "Sharing Merit with Devas and Relatives"
   },
   "pali": "එත්තාවතා ච අම්හෙහි - සම්භතං පුඤ්ඤ සම්පදං\nසබ්බෙ දෙවා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ භූතා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ සත්තා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\n\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ දෙසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාවකං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු මං පරං\n\nඉදං වො ඤාතීනං හොතු - සුඛිතා හොන්තු ඤාතයො\n\nඉමස්මිං විහාරෙ ආරාමෙ - අධිවත්ථා ච දෙවතා\nඅනුමොදිත්වා ඉමං පුඤ්ඤං - රක්ඛන්තු ජින සාසනං",
   "translit": "Ettāvatā ca amhehi - sambhataṃ puñña sampadaṃ\nsabbe devā anumodantu - sabba sampatti siddhiyā\nsabbe bhūtā anumodantu - sabba sampatti siddhiyā\nsabbe sattā anumodantu - sabba sampatti siddhiyā\n\nĀkāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāsanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha desanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāvakaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu maṃ paraṃ\n\nIdaṃ vo ñātīnaṃ hotu - sukhitā hontu ñātayo\n\nImasmiṃ vihāre ārāme - adhivatthā ca devatā\nanumoditvā imaṃ puññaṃ - rakkhantu jina sāsanaṃ",
   "sinhala": "මෙතෙකින් අප විසින් රැස් කරන ලද පුණ්‍ය සම්පත්තිය සකල සම්පත් සිදුවීම පිණිස සියළු දෙවියෝද, සියළු භූතයෝද, සියළු සත්වයෝද අනුමෝදන් වෙත්වා!\n\nඅහසෙහි විමන් හිද පොළොවෙහි වෘක්ෂ පර්වතාදියෙහි අධිගෘහිත වූද, මහත් සෘද්ධි ඇති දෙවියෝද, බ්‍රහ්මයෝද පින් අනුමෝදන්ව සාසනයද, ධර්මයද, ශ්‍රාවකයන්ද, මාද අන්‍යයන්ද යහතින් බොහෝ කල් රකිත්වා!\n\nමේ පින ඤාතීන්ට අත්වේවා! ඤාතීහු ලොව්තුරා සුවයෙන් සුවපත් වේවා!\n\nමේ විහාරාරාමයෙහි අධිගෘහිත දෙවියෝ මේ පින් අනුමෝදන්ව ජින සාසනය රකිත්වා!",
   "english": "By this accumulation of merit that we have gathered here, may all devas rejoice, for the accomplishment of every success; may all beings who have come to be rejoice, for the accomplishment of every success; may all living beings rejoice, for the accomplishment of every success.\n\nMay the mighty devas and nāgas who dwell in the sky and on the earth — in the heavenly mansions, trees, mountains and the like — rejoicing in this merit, long protect the Buddha's Dispensation, the Dhamma, the Buddha's disciples, and me and others.\n\nMay this merit be for our relatives! May our relatives be happy, with the supramundane happiness!\n\nMay the deities who dwell in this monastery and park, rejoicing in this merit, long protect the Victor's Dispensation."
  },
  {
   "id": "e32",
   "group": "evening",
   "name": {
    "si": "මෛත්‍රී බෝසතාණන් වහන්සේට පිංදීම",
    "en": "Sharing Merit with the Bodhisatta Metteyya"
   },
   "pali": "කප්ප සත සහස්සානි - සොළසාපි අසංඛියෙ\nසම්භරං බොධි සම්භාරෙ - ආගතො ජාති ජාති සො\nනියතො බුද්ධ භාවාය - භද්දකප්පෙ ඉධන්තිමෙ\nබොධි සත්තොව මෙත්තෙය්‍යො - පුඤ්ඤං මේ අනුමොදතු\n\nසබ්බෙ සත්තා ච මජ්ඣත්තා - හිතා ච අහිතා ච මෙ\nඅනුමොදිත්වා ඉමං පුඤ්ඤං - බුජ්ඣන්තු අමතං පදං",
   "translit": "Kappa sata sahassāni - soḷasāpi asaṅkhiye\nsambharaṃ bodhi sambhāre - āgato jāti jāti so\nniyato buddha bhāvāya - bhaddakappe idhantime\nbodhi sattova metteyyo - puññaṃ me anumodatu\n\nSabbe sattā ca majjhattā - hitā ca ahitā ca me\nanumoditvā imaṃ puññaṃ - bujjhantu amataṃ padaṃ",
   "sinhala": "සොළසසංඛ්‍ය කල්ප ලක්ෂයක් මුළුල්ලෙහි ජාතියක් ජාතියක් පාසා බෝධි සම්භාර ධර්ම රැස් කරමින් පැමිණියා වූ, මෙම මහා භද්‍ර කල්පයේ අන්තිම බුද්ධාන්තරයෙහි බුදුබව පිණිස නියත වූ මෛත්‍රී බෝධිසත්වයන් වහන්සේද මාගේ පින අනුමෝදන් වෙත්වා.\n\nසියළු සත්වයෝ ද, මාගේ හිත සත්වයෝ ද, මධ්‍යස්ථයෝද, අහිත සත්වයෝ ද මේ පින් අනුමෝදන්ව අමෘත පදය අවබෝධ කරත්වා!",
   "english": "For sixteen incalculable aeons and a hundred thousand aeons, birth after birth, he accumulated the requisites of enlightenment, and he is destined for Buddhahood in the last Buddha-interval of this Fortunate Aeon. May the Bodhisatta Metteyya rejoice in my merit.\n\nMay all beings — the neutral, my friends and those who are not — rejoicing in this merit, realise the Deathless state!"
  },
  {
   "id": "e33",
   "group": "evening",
   "name": {
    "si": "සද්ධර්ම ප්‍රාර්ථනා ගාථා",
    "en": "Verses of Aspiration for the True Dhamma and the Realm"
   },
   "pali": "යං පත්තං කුසලං තස්ස - ආනුභාවෙන පාණිනො\nසබ්බෙ සද්ධම්ම රාජස්ස - ඤත්වා ධම්මං සුඛාවහං\n\nපාපුණන්තු විසුද්ධාය - සුඛාය පටිපත්තියා\nඅසොක මනුපායාසං - නිබ්බාන සුඛ මුත්තමං\n\nචිරං තිට්ඨතු සද්ධම්මො - ධම්මෙ හොන්තු සගාරවා\nසබ්බෙපි සත්තා කාලෙන - සම්මා දෙවො පවස්සතු\n\nයථා රක්ඛිංසු පොරාණා - සුරාජානො තථෙවිමං\nරාජා රක්ඛතු ධම්මෙන - අත්තනොව පජං පජං\n\nචිරං තිට්ඨතු ලොකස්මිං - සම්මා සම්බුද්ධ සාසනං\nතස්මිං සගාරවා නිච්චං - හොන්තු සබ්බෙපි පාණිනො\n\nසම්මා වස්සතු කාලෙන - දෙවො ච ජගතී පති\nසද්ධම්ම නිරතො ලොකං - ධම්මෙනෙව පසාසතු",
   "translit": "Yaṃ pattaṃ kusalaṃ tassa - ānubhāvena pāṇino\nsabbe saddhamma rājassa - ñatvā dhammaṃ sukhāvahaṃ\n\nPāpuṇantu visuddhāya - sukhāya paṭipattiyā\nasoka manupāyāsaṃ - nibbāna sukha muttamaṃ\n\nCiraṃ tiṭṭhatu saddhammo - dhamme hontu sagāravā\nsabbepi sattā kālena - sammā devo pavassatu\n\nYathā rakkhiṃsu porāṇā - surājāno tathevimaṃ\nrājā rakkhatu dhammena - attanova pajaṃ pajaṃ\n\nCiraṃ tiṭṭhatu lokasmiṃ - sammā sambuddha sāsanaṃ\ntasmiṃ sagāravā niccaṃ - hontu sabbepi pāṇino\n\nSammā vassatu kālena - devo ca jagatī pati\nsaddhamma nirato lokaṃ - dhammeneva pasāsatu",
   "sinhala": "රැස්කරගනු ලැබුනා වූ යම් කුසලයක් වේ නම්, එහි ආනුභාවයෙන් සියළු සැපගෙන දෙන්නා වූ ශ්‍රී සද්ධර්මය අසා, සුවිශුද්ධ වූ සැප ප්‍රතිපදාවෙන් උතුම් වූ සැපය වූ නිර්වාණයට සියළු සත්වයෝ පැමිණෙත්වා !\n\nසද්ධර්මය බොහෝ කාලයක් ලොව පවතීවා. සියලු සත්වයෝ බුද්ධ ධර්මය කෙරෙහි ගරු ඇත්තේ වෙත්වා. යහපත් සේ වර්ශාව පවතීවා.\n\nයම් සේ අතීතයේ ධාර්මික රජවරු ජනතාව රැක්කාද, එසේම වර්තමාන රජතුමාද ස්වකීය දරුවන් මෙන් වර්තමාන ජනතාව රකීවා.\n\nසද්ධර්මය බොහෝ කාලයක් පවතිත්වා. රජු ධාර්මික වෙත්වා. සියළු ප්‍රාණීහු ධර්මයේ හැසිරෙත්වා.\n\nකාලයට වැසි වසිත්වා. රජු ධාර්මික වෙත්වා. ලෝකයාට හිත සුව පිණිස සද්ධර්මය බොහෝ කලක් ලෝකයේ පවතීවා.",
   "english": "By the power of whatever merit has been gained, may all beings, having heard the Dhamma of the King of the True Dhamma, which brings happiness, attain through pure, happy practice the supreme bliss of Nibbāna, free from sorrow and despair.\n\nMay the true Dhamma endure long; may all hold the Dhamma in reverence; may all beings have timely rain, falling well.\n\nJust as the righteous kings of old protected their people, so may the present king protect his subjects righteously, as if they were his own children.\n\nMay the Buddha's Dispensation endure long in the world, and may all beings always hold it in reverence.\n\nMay the rain fall in due season; may the king, delighting in the true Dhamma, rule the world righteously."
  },
  {
   "id": "e34",
   "group": "evening",
   "name": {
    "si": "ප්‍රාර්ථනාව",
    "en": "Aspiration"
   },
   "pali": "ඉමිනා පුඤ්ඤ කම්මෙන - මා මේ බාල සමාගමො\nසතං සමාගමො හොතු - යාව නිබ්බාන පත්තියා",
   "translit": "Iminā puñña kammena - mā me bāla samāgamo\nsataṃ samāgamo hotu - yāva nibbāna pattiyā",
   "sinhala": "මෙම කුසලානුභාව බලයෙන් නිවන් දක්නා තුරු මා හට පාපමිත්‍ර සේවනයක් නොවේවා. කල්‍යාණ මිත්‍ර සේවනයම ලැබේවා.",
   "english": "By the power of this meritorious deed, may I never keep company with fools; may I keep company with the good until I attain Nibbāna."
  },
  {
   "id": "e35",
   "group": "evening",
   "name": {
    "si": "ප්‍රතිපත්ති පූජාව",
    "en": "Offering of Practice"
   },
   "pali": "ඉමාය ධම්මානුධම්ම පටිපත්තියා බුද්ධං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා ධම්මං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා සංඝං පූජෙමි\nඅද්ධා ඉමාය පටිපත්තියා ජාති ජරා මරණම්හා පරිමුච්චිස්සාමි",
   "translit": "Imāya dhammānudhamma paṭipattiyā buddhaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā dhammaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā saṅghaṃ pūjemi\naddhā imāya paṭipattiyā jāti jarā maraṇamhā parimuccissāmi",
   "sinhala": "මේ ධර්මානු ධර්ම ප්‍රතිපත්තියෙන් බුද්ධ රත්නය, ධර්ම රත්නය, සංඝ රත්නය පූජා කරමි. ඒකාන්තයෙන් මෙම ප්‍රතිපත්තියෙන් ජාති, ජරා මරණයෙන් අත මිදෙන්නෙමි.",
   "english": "By this practice in accordance with the Dhamma, I honour the Buddha. By this practice in accordance with the Dhamma, I honour the Dhamma. By this practice in accordance with the Dhamma, I honour the Saṅgha. Surely, by this practice I shall be freed from birth, ageing and death."
  },
  {
   "id": "e36",
   "group": "evening",
   "name": {
    "si": "තෙරුවන් කමා කරවීම",
    "en": "Asking Forgiveness of the Triple Gem"
   },
   "pali": "කායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ භන්තෙ - භූරිපඤ්ඤ තථාගත\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ ධම්ම - සන්දිට්ඨික අකාලික\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ සංඝ - පුඤ්ඤක්ඛෙත්ත අනුත්තර",
   "translit": "Kāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me bhante - bhūripañña tathāgata\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me dhamma - sandiṭṭhika akālika\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me saṅgha - puññakkhetta anuttara",
   "sinhala": "ස්වාමිනි මහා ප්‍රඥා තථාගතයන් වහන්ස! කයින්, වචනයෙන් සිතින් කරන ලද පමා වරදට මට ක්ෂමා වන සේක්වා!\n\nසාන්දෘෂ්ටික අකාලික ශ්‍රී සද්ධර්මය කෙරෙහි කයින් වචනයෙන් සිතින් කරන ලද පම වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nඅනුත්තර දක්ෂිණාර්හ වූ මහා සංඝ රත්නය කෙරෙහි කයින් වචනයෙන් සිදු වූ පමා වරදට, සංඝ රත්නය මට ක්ෂමා වන සේක්වා!",
   "english": "By body, speech and mind, a fault was committed by me through heedlessness. Venerable Sir, Tathāgata of great wisdom, forgive me my transgression!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Dhamma, visible here and now and timeless!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Saṅgha, the unsurpassed field of merit!"
  },
  {
   "id": "e37",
   "group": "evening",
   "name": {
    "si": "පින් අනුමෝදන් වීම සහ අනුමෝදන් කරවීම",
    "en": "Rejoicing in Merit and Sharing Merit"
   },
   "pali": "නවක - ඔකාස වන්දාමි භන්තෙ, මයා කතං පුඤ්ඤං සාමිනා අනුමොදිතබ්බං\nවෘද්ධ - සාධු ! සාධු ! සාධු ! අනුමොදාමි.\nනවක - සාමිනා කතං පුඤ්ඤං මය්හං දාතබ්බං\nවෘද්ධ - සාධු අනුමොදාහි\nනවක - සාධු සාධු අනුමොදාමි\nඔකාස ද්වාරත්තයෙන කතං සබ්බං අච්චයං ඛමථ මෙ භන්තෙ\nවෘද්ධ - ඛමාමි ඛමිතබ්බං\nනවක - ඔකාස ඛමාමි භන්තෙ",
   "translit": "Navaka - Okāsa vandāmi bhante, mayā kataṃ puññaṃ sāminā anumoditabbaṃ\nVuḍḍha - Sādhu ! Sādhu ! Sādhu ! Anumodāmi.\nNavaka - Sāminā kataṃ puññaṃ mayhaṃ dātabbaṃ\nVuḍḍha - Sādhu anumodāhi\nNavaka - Sādhu sādhu anumodāmi\nokāsa dvārattayena kataṃ sabbaṃ accayaṃ khamatha me bhante\nVuḍḍha - Khamāmi khamitabbaṃ\nNavaka - Okāsa khamāmi bhante",
   "sinhala": "නවක - අවසරයි ස්වාමීන් වහන්ස ! මම වදිමි. මා විසින් කරන ලද පින ස්වාමීන් වහන්සේ අනුමෝදන් වන සේක්වා.\nවෘද්ධ - සාධු ! සාධු ! අනුමෝදන් වෙමි.\nනවක - ස්වාමීන් වහන්සේ විසින් කරන ලද පින මට දෙන සේක්වා.\nවෘද්ධ - සාධු ! සාධු ! සාධු ! අනුමෝදන් වන්න.\nනවක - සාධු ! සාධු ! සාධු ! අනුමෝදන් වෙමි.\nනවක - අවසරයි ස්වාමීන් වහන්ස ! මාගේ තිදොරින් යම් ප්‍රමාද දෝෂයක් වූයේ නම් ක්ෂමා වන සේක්වා.\nවෘද්ධ - ක්ෂමා වෙමි, ක්ෂමා වන්න.\nනවක - සාධු ! සාධු ! සාධු ! ක්ෂමා වෙමි. ස්වාමීන් වහන්ස!",
   "english": "Junior: With your permission, Venerable Sir, I pay homage. May the Venerable Sir rejoice in the merit made by me.\nSenior: Sādhu! Sādhu! Sādhu! I rejoice.\nJunior: May the merit made by the Venerable Sir be given to me.\nSenior: Sādhu! Rejoice (in it).\nJunior: Sādhu! Sādhu! Sādhu! I rejoice.\nJunior: With your permission, Venerable Sir, please forgive me any fault committed through my three doors (body, speech and mind).\nSenior: I forgive; (you too) be forgiven.\nJunior: Sādhu! Sādhu! Sādhu! I forgive. With your permission, Venerable Sir."
  },
  {
   "id": "b1",
   "group": "bodhi",
   "name": {
    "si": "බෝධි වන්දනාව",
    "en": "Bodhi Vandana"
   },
   "pali": "නමො තස්ස භගවතො අරහතො සම්මා සම්බුද්ධස්ස !!!\n\nඉතිපිසො භගවා අරහං සම්මාසම්බුද්ධො විජ්ජාචරණ සම්පන්නො සුගතො ලොකවිදූ අනුත්තරො පුරිසදම්ම සාරථී සත්ථා දෙවමනුස්සානං බුද්ධො භගවාති.\n\nස්වාක්ඛාතො භගවතා ධම්මො සන්දිට්ඨිකො අකාලිකො ඒහිපස්සිකො ඔපනයිකො පච්චත්තං වෙදිතබ්බො විඤ්ඤූහීති.\n\nසුපටිපන්නො භගවතො සාවකසංඝො - උජුපටිපන්නො භගවතො සාවකසංඝො - ඤායපටිපන්නො භගවතො සාවකසංඝො - සාමීචිපටිපන්නො භගවතො සාවකසංඝො - යදිදං චත්තාරි පුරිසයුගානි අට්ඨපුරිස පුග්ගලා එස භගවතො සාවක සංඝො ආහුනෙය්‍යො පාහුනෙය්‍යො දක්ඛිණෙය්‍යො අඤ්ජලිකරණීයො අනුත්තරං පුඤ්ඤක්ඛෙත්තං ලොකස්සාති.\n\nසාධු ! සාධු !! සාධු !!!",
   "translit": "Namo tassa bhagavato arahato sammā sambuddhassa !!!\n\nItipiso bhagavā arahaṃ sammāsambuddho vijjācaraṇa sampanno sugato lokavidū anuttaro purisadamma sārathī satthā devamanussānaṃ buddho bhagavāti.\n\nSvākkhāto bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko opanayiko paccattaṃ veditabbo viññūhīti.\n\nSupaṭipanno bhagavato sāvakasaṅgho - ujupaṭipanno bhagavato sāvakasaṅgho - ñāyapaṭipanno bhagavato sāvakasaṅgho - sāmīcipaṭipanno bhagavato sāvakasaṅgho - yadidaṃ cattāri purisayugāni aṭṭhapurisa puggalā esa bhagavato sāvaka saṅgho āhuneyyo pāhuneyyo dakkhiṇeyyo añjalikaraṇīyo anuttaraṃ puññakkhettaṃ lokassāti.\n\nSādhu ! Sādhu !! Sādhu !!!",
   "sinhala": "ඒ භාග්‍යවත් අර්හත් සම්මා සම්බුදු රජාණන් වහන්සේට මාගේ නමස්කාරය වේවා !\n\nඒ භාග්‍යවත් බුදුරජාණන් වහන්සේ මෙසේ ද අර්හත් වන සේක; සම්මා සම්බුද්ධ වන සේක; විද්‍යාචරණ සම්පන්න වන සේක; සුගත වන සේක; ලෝකවිදූ වන සේක; අනුත්තර පුරුෂදම්‍ය සාරථි වන සේක; දෙවි මිනිසුන්ට ශාස්තෘ වන සේක; බුද්ධ වන සේක; භාග්‍යවත් වන සේක.\n\nභාග්‍යවතුන් වහන්සේ විසින් ධර්මය මනාකොට දේශනා කරන ලද්දේය; සන්දිට්ඨික වන්නේය; අකාලික වන්නේය; ඒහිපස්සික වන්නේය; ඔපනයික වන්නේය; නුවණැත්තන් විසින් තම තමා තුළම අවබෝධ කළ යුත්තේය.\n\nභාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා මනාව පිළිපන්නේය; ඍජුව පිළිපන්නේය; නිවන් අරමුණු කොට පිළිපන්නේය; සුදුසු පිළිවෙතින් පිළිපන්නේය. එනම් සතර යුගල වශයෙන් අට පුරුෂ පුද්ගලයෝ වෙත්ද, ඒ භාග්‍යවතුන් වහන්සේගේ ශ්‍රාවක සංඝයා ආහුනෙය්‍ය (ආගන්තුක සත්කාරයට සුදුසු) වන්නේය; පාහුනෙය්‍ය (දුර සිට ගෙනෙන දානයට සුදුසු) වන්නේය; දක්ඛිණෙය්‍ය (දක්ෂිණාවට සුදුසු) වන්නේය; අඤ්ජලිකරණීය (දොහොත් මුදුනේ තබා වැඳීමට සුදුසු) වන්නේය; ලෝකයාගේ අනුත්තර පුණ්‍යක්ෂේත්‍රය වන්නේය.\n\nසාධු ! සාධු ! සාධු !",
   "english": "Homage to the Blessed One, the Worthy One, the Perfectly Self-Awakened One!\n\nThus indeed is that Blessed One: Worthy, Perfectly Self-Awakened, accomplished in true knowledge and conduct, Well-Gone, Knower of the worlds, the unsurpassed trainer of persons to be tamed, Teacher of gods and humans, the Awakened One, the Blessed One.\n\nThe Dhamma is well proclaimed by the Blessed One, directly visible, timeless, inviting investigation, leading onward, to be personally experienced by the wise.\n\nThe Saṅgha of the Blessed One's disciples has practised well, practised uprightly, practised rightly, and practised properly — that is, the four pairs of persons, the eight types of individuals. That Saṅgha of the Blessed One's disciples is worthy of gifts, worthy of hospitality, worthy of offerings, worthy of reverential salutation, the unsurpassed field of merit for the world.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "b2",
   "group": "bodhi",
   "name": {
    "si": "බෝධි වන්දනාව",
    "en": "Veneration of the Bodhi Tree"
   },
   "pali": "යස්ස මූලෙ නිසින්නොව\nසබ්බාරි විජයං අකා\nපත්තො සබ්බඤ්ඤුතං සත්ථා\nවන්දෙ තං බොධි පාදපං\n\nඉමෙ එතෙ මහා බොධි\nලොක නාථෙන පූජිතා\nඅහම්පි තෙ නමස්සාමි\nබොධි රාජා නමත්ථු තෙ\n\nපඨමං බොධි පල්ලඞ්කං\nදුතියඤ්ච අනිමිසං\nතතියං චංකමනං සෙට්ඨං\nචතුත්ථං රතනාඝරං\n\nපඤ්චමං අජපාලඤ්ච\nමුචලින්දෙන ඡට්ඨමං\nසත්තමං රාජායතනං\nවන්දෙ තං මුනි සෙවිතං\n\nමහා කාරුණාරස පතිමණ්ඩිතස්ස අනන්තඤාණස්ස අසාධාරණ පඤ්ඤස්ස දසපාරමිතා බල සමුදිතස්ස දසබල සමන්නාගතස්ස අපරිමෙය්‍ය ගුණසාගරස්ස අම්හාකං සත්ථුනො සරස රංසිජාල පරිකිණ්ණං සම්මාසම්බුද්ධ පූජිතං සිරිබොධිරාජං සිරසා නමාමි.\n\nසාධු ! සාධු !! සාධු !!!\n\nඉන්දනීල වණ්ණ පත්ත සෙත බන්ධ භාසුරං\nසත්ථු නෙත්ත පංකජාහි පූජිතග්ග සාතදං\nඅග්ගබොධි නාම චාම දෙව රුක්ඛ සන්නිභං\nතං විසාල බොධි පාදපං නමාමි සබ්බදා\n\nසුපතිට්ඨිත රට්ඨානුරාධ පුරෙ\nසමදිට්ඨිත දක්ඛිණසාඛභවං\nසුභ මේඝවනම්බර මේඝනිභං\nජය බොධිමහං පණමාමි වරං\n\nවන්දාමි චෙතියං සබ්බං - සබ්බට්ඨානෙසු පතිට්ඨිතං\nසාරීරික ධාතු මහා බොධිං - බුද්ධරූපං සකලං සදා !!!\n\nසාධු ! සාධු !! සාධු !!!\n\nසෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nවන්දාමි බොධි රාජානං - නිබ්බාන සුඛ සිද්ධියා",
   "translit": "Yassa mūle nisinnova\nsabbāri vijayaṃ akā\npatto sabbaññutaṃ satthā\nvande taṃ bodhi pādapaṃ\n\nIme ete mahā bodhi\nloka nāthena pūjitā\nahampi te namassāmi\nbodhi rājā namatthu te\n\nPaṭhamaṃ bodhi pallaṅkaṃ\ndutiyañca animisaṃ\ntatiyaṃ caṅkamanaṃ seṭṭhaṃ\ncatutthaṃ ratanāgharaṃ\n\nPañcamaṃ ajapālañca\nmucalindena chaṭṭhamaṃ\nsattamaṃ rājāyatanaṃ\nvande taṃ muni sevitaṃ\n\nMahā kāruṇārasa patimaṇḍitassa anantañāṇassa asādhāraṇa paññassa dasapāramitā bala samuditassa dasabala samannāgatassa aparimeyya guṇasāgarassa amhākaṃ satthuno sarasa raṃsijāla parikiṇṇaṃ sammāsambuddha pūjitaṃ siribodhirājaṃ sirasā namāmi.\n\nSādhu ! Sādhu !! Sādhu !!!\n\nIndanīla vaṇṇa patta seta bandha bhāsuraṃ\nsatthu netta paṅkajāhi pūjitagga sātadaṃ\naggabodhi nāma cāma deva rukkha sannibhaṃ\ntaṃ visāla bodhi pādapaṃ namāmi sabbadā\n\nSupatiṭṭhita raṭṭhānurādha pure\nsamadiṭṭhita dakkhiṇasākhabhavaṃ\nsubha meghavanambara meghanibhaṃ\njaya bodhimahaṃ paṇamāmi varaṃ\n\nVandāmi cetiyaṃ sabbaṃ - sabbaṭṭhānesu patiṭṭhitaṃ\nsārīrika dhātu mahā bodhiṃ - buddharūpaṃ sakalaṃ sadā !!!\n\nSādhu ! Sādhu !! Sādhu !!!\n\nSevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\nvandāmi bodhi rājānaṃ - nibbāna sukha siddhiyā",
   "sinhala": "යම් බෝධි වෘක්ෂයක මුල වැඩහිඳ සියලු සතුරන් (කෙලෙස් මාරයන්) ජය ගත්, සර්වඥතාවට පැමිණි ශාස්තෘන් වහන්සේගේ ඒ බෝධි වෘක්ෂය මම වදිමි.\n\nලෝකනාථයන් වහන්සේ විසින් පුදන ලද මේ මහා බෝධීහු (මේ බෝ ගස්) ය. මමත් ඔබට නමස්කාර කරමි. බෝධිරාජය, ඔබට නමස්කාර වේවා.\n\nපළමුවැන්න බෝ පල්ලංකය (වජ්‍රාසනය) ය. දෙවැන්න අනිමිස ලෝචන පූජාවය. තෙවැන්න උතුම් චංක්‍රමණය ය. සිව්වැන්න රත්නඝරය ය.\n\nපස්වැන්න අජපාල (නුග රුක) ය. සවැන්න මුචලින්ද ය. සත්වැන්න රාජායතන (ගස) ය. මුනිවරයන් වහන්සේ සේවනය කළ ඒ (ස්ථාන) මම වඳිමි.\n\nමහා කරුණා රසයෙන් සැරසුණු, අනන්ත ඤාණයෙන් යුත්, අසාධාරණ ප්‍රඥා ඇති, දස පාරමී බලයෙන් සමෘද්ධ වූ, දසබලයෙන් සමන්විත වූ, අපරිමිත ගුණ සාගරයක් වූ අපගේ ශාස්තෘන් වහන්සේගේ සුන්දර රශ්මි ජාලයෙන් වැසුණු, සම්මා සම්බුදුන් විසින් පුදන ලද ශ්‍රී බෝධිරාජයාණන් වහන්සේට මම හිසින් නමස්කාර කරමි.\n\nසාධු ! සාධු ! සාධු !\n\nඉන්ද්‍රනීල මැණික් වන් පත්‍ර ඇති, සුදු කඳින් බබළන, ශාස්තෘන් වහන්සේගේ නෙත් නෙළුම් වලින් පුදන ලද, සැප දෙන, අග්‍රබෝධි නම් වූ දෙව් රුකක් බඳු වූ ඒ විශාල බෝධි වෘක්ෂය මම සැමදා වඳිමි.\n\nමනා ලෙස පිහිටි රට වූ අනුරාධපුරයෙහි පිහිටි, (මහා බෝධියේ) දකුණු අත්තෙන් හටගත්, සුන්දර වැසි වලාකුළු වන් ආකාශය සෙයින් ශෝභමාන වූ ජය ශ්‍රී මහා බෝධිය මම උතුම් ලෙස වඳිමි.\n\nසියලු තන්හි පිහිටි සියලු චෛත්‍යයන්ද, ශාරීරික ධාතූන්ද, මහා බෝධීන්ද, සියලු බුද්ධ රූපයන්ද මම සැමදා වඳිමි !!!\n\nසාධු ! සාධු ! සාධු !\n\nධර්මරාජයාණන් වහන්සේ විසින් සේවනය කරන ලද, උතුම් සම්බෝධිය ලබනු පිණිස (පිහිටි) බෝධිරාජයාණන් වහන්සේ නිවන් සුව සිද්ධිය පිණිස මම වඳිමි.",
   "english": "I revere that Bodhi tree, seated at whose foot the Teacher conquered all enemies (the defilements and Māra) and attained omniscience.\n\nThese are the great Bodhi trees honoured by the Lord of the World. I too pay homage to you; homage to you, O King of Bodhi trees.\n\nThe first (week) was at the Bodhi-seat in the cross-legged posture; the second was the unblinking gaze; the third, the excellent walking; the fourth, the jewelled house.\n\nThe fifth was at the Ajapāla banyan; the sixth at Mucalinda; the seventh at the Rājāyatana tree. I pay homage to these places frequented by the Sage.\n\nI bow with my head to the glorious King of Bodhi trees — honoured by the Perfectly Self-Awakened One, and enveloped in the beautiful web of rays of our Teacher, who is adorned with the flavour of great compassion, possessed of infinite knowledge, of unique wisdom, enriched by the power of the ten perfections, endowed with the ten powers, an ocean of immeasurable virtues.\n\nSādhu! Sādhu! Sādhu!\n\nI ever revere that vast Bodhi tree, shining with sapphire-coloured leaves and a white trunk, honoured by the lotus-eyes of the Teacher, giving happiness, resembling a divine tree, known as Aggabodhi.\n\nI revere the supreme Jaya (Sri Mahā) Bodhi, established at Anurādhapura in a well-established land, grown from the southern branch, shining like the sky filled with beautiful rain-clouds.\n\nI ever pay homage to all shrines established in all places, to the bodily relics, the Great Bodhi trees, and all images of the Buddha!!!\n\nSādhu! Sādhu! Sādhu!\n\nI revere the King of Bodhi trees, frequented by the King of the Dhamma, for the attainment of the supreme enlightenment and for the accomplishment of the bliss of Nibbāna."
  },
  {
   "id": "b3",
   "group": "bodhi",
   "name": {
    "si": "පහන් පූජාව",
    "en": "Offering of Lamps"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - දීපාලොකෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - dīpālokena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ පහන් ආලෝකයෙන් පූජාකරමි. පූජාවේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with the light of lamps."
  },
  {
   "id": "b4",
   "group": "bodhi",
   "name": {
    "si": "සුවඳදුම් පූජාව",
    "en": "Offering of Incense"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - ගන්ධ ධූපෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - gandha dhūpena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ සුගන්ධ ධූපයෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with fragrant incense."
  },
  {
   "id": "b5",
   "group": "bodhi",
   "name": {
    "si": "මල් පූජාව",
    "en": "Offering of Flowers"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - ගන්ධ පුප්ඵෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - gandha pupphena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ සුවඳ මල් සමූහයෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with fragrant flowers."
  },
  {
   "id": "b6",
   "group": "bodhi",
   "name": {
    "si": "මල්දම් පූජාව",
    "en": "Offering of Garlands"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - පුප්ඵ දාමෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - puppha dāmena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ විසිතුරු මල්දම් සමූහයෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with garlands of flowers."
  },
  {
   "id": "b7",
   "group": "bodhi",
   "name": {
    "si": "කොඩි පූජාව",
    "en": "Offering of Flags"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - ධජෙනෙතෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - dhajenetena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ කොඩි (ධජ) පූජාවෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with flags."
  },
  {
   "id": "b8",
   "group": "bodhi",
   "name": {
    "si": "අෂ්ටපාන ගිලන්පස පූජාව",
    "en": "Offering of the Eight Beverages"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - අට්ඨ පානෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - aṭṭha pānena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ ප්‍රණීත අෂ්ටපාන ගිලන් පසෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with the eight kinds of beverages."
  },
  {
   "id": "b9",
   "group": "bodhi",
   "name": {
    "si": "සුවඳ පැන් පූජාව",
    "en": "Offering of Scented Water"
   },
   "pali": "සෙවිතං ධම්ම රාජෙන - පත්තුං සම්බොධි මුත්තමං\nපූජෙමි බොධි රාජානං - ගන්ධොදකෙන සාදරං",
   "translit": "Sevitaṃ dhamma rājena - pattuṃ sambodhi muttamaṃ\npūjemi bodhi rājānaṃ - gandhodakena sādaraṃ",
   "sinhala": "මහා කාරුණික වූ ශාන්තිනායක ධර්මරාජයාණන් වහන්සේ විසින් සර්වඥතාඥානයට පැමිණීම පිණිස සේවනය කරන ලද බෝධිරාජයාණන් වහන්සේට මේ සුවඳ පැන් අභිසේකයෙන් පූජා කරමි. පූජා වේවා.",
   "english": "Honoured by the King of the Dhamma, for the attainment of supreme enlightenment, I reverently honour the King of Bodhi trees with scented water as an anointing."
  },
  {
   "id": "b10",
   "group": "bodhi",
   "name": {
    "si": "පූජා වාක්‍ය",
    "en": "Words of Offering"
   },
   "sinhala": "මෙසේ බෝධි පූජා කිරීම බුදු පසේ බුදු අගසව් මහසව් මහරහත් ආදී මහෝත්තමයාණන් වහන්සේලාගේ චාරිත්‍ර සීලයකි. මම ද ඒ උතුම් චාරිත්‍ර සීලය මෙසේ අනුගමනය කරමි. මේ ප්‍රණීත පූජා වස්තු සමූහය ස්වල්ප මොහොතකින් අනිත්‍යත්වයට යන්නා සේ සියලු සංස්කාරයෝ අනිත්‍යයෝය. සියලු සංස්කාරයෝ දුක්ඛයෝය. සියලු ධර්මයෝ අනාත්මයෝය.\n\nමේ බෝධි පූජාමය කුශලය බුදු, පසේ බුදු, මහරහත් වහන්සේලා නිවී සැනසී පැමිණ වදාළා වූ පරමරමණීය වූ ශාන්ති ලක්ෂණ වූ නිර්වාණ අභය පුරයට පැමිණීම පිණිසම හේතු වේවා ! වාසනා වේවා !\n\nසාධු ! සාධු !! සාධු !!!",
   "english": "This Bodhi-offering is the customary practice of the Buddhas, Paccekabuddhas, chief disciples, great disciples, arahants and other great and noble ones. I too follow that noble practice in this way. Just as this group of excellent offerings will pass into impermanence within a short moment, so all conditioned things are impermanent; all conditioned things are suffering; all phenomena are not-self.\n\nMay this wholesome deed of Bodhi-offering be a cause for reaching the supremely delightful, peaceful, fearless city of Nibbāna, which the Buddhas, Paccekabuddhas and arahants reached in coolness and peace. May it be a blessing and a good habit!\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "b11",
   "group": "bodhi",
   "name": {
    "si": "සෙත් පැතීම",
    "en": "Wishing Well-being"
   },
   "pali": "1. ජයො මුනින්දස්ස සුබොධි මූලෙ\nඅහොසි මාරස්ස පරාජයො හි\nඋග්ඝොසයුං බොධි මණ්ඩෙ පමොදිතා\nජයං තදා නාග ගණා මහෙසිනො\nඑතෙන සච්චෙන සුවත්ථි හොතු\n\n2. ජයො මුනින්දස්ස සුබොධි මූලෙ\nඅහොසි මාරස්ස පරාජයො හි\nඋග්ඝොසයුං බොධි මණ්ඩෙ පමොදිතා\nසුපණ්ණ සංඝාපි ජයං මහෙසිනො\nඑතෙන සච්චෙන සුවත්ථි හොතු\n\n3. ජයො මුනින්දස්ස සුබොධි මූලෙ\nඅහොසි මාරස්ස පරාජයො හි\nඋග්ඝොසයුං බොධි මණ්ඩෙ පමොදිතා\nජයං තදා දෙව ගණා මහෙසිනො\nඑතෙන සච්චෙන සුවත්ථි හොතු\n\n4. ජයො මුනින්දස්ස සුබොධි මූලෙ\nඅහොසි මාරස්ස පරාජයො හි\nඋග්ඝොසයුං බොධි මණ්ඩෙ පමොදිතා\nජයං තදා බ්‍රහ්ම ගණාපි තාදිනො\nඑතෙන සච්චෙන සුවත්ථි හොතු\n\nසාධු ! සාධු !! සාධු !!!",
   "translit": "1. Jayo munindassa subodhi mūle\nahosi mārassa parājayo hi\nugghosayuṃ bodhi maṇḍe pamoditā\njayaṃ tadā nāga gaṇā mahesino\netena saccena suvatthi hotu\n\n2. Jayo munindassa subodhi mūle\nahosi mārassa parājayo hi\nugghosayuṃ bodhi maṇḍe pamoditā\nsupaṇṇa saṅghāpi jayaṃ mahesino\netena saccena suvatthi hotu\n\n3. Jayo munindassa subodhi mūle\nahosi mārassa parājayo hi\nugghosayuṃ bodhi maṇḍe pamoditā\njayaṃ tadā deva gaṇā mahesino\netena saccena suvatthi hotu\n\n4. Jayo munindassa subodhi mūle\nahosi mārassa parājayo hi\nugghosayuṃ bodhi maṇḍe pamoditā\njayaṃ tadā brahma gaṇāpi tādino\netena saccena suvatthi hotu\n\nSādhu ! Sādhu !! Sādhu !!!",
   "sinhala": "1. බෝ රුක මුල දී මුනීන්ද්‍රයන් වහන්සේට ජය වූයේය; මාරයාට පරාජය වූයේය. එකල බෝමැඩ සතුටු වූ නාග සමූහයෝ මහේශී බුදුරජාණන් වහන්සේගේ ජයග්‍රහණය ඝෝෂා කළහ. මේ සත්‍යයෙන් ස්වස්තිය (සෙත්) වේවා!\n\n2. බෝ රුක මුල දී මුනීන්ද්‍රයන් වහන්සේට ජය වූයේය; මාරයාට පරාජය වූයේය. එකල බෝමැඩ සතුටු වූ සුපර්ණ (ගුරුළු) සමූහයෝ ද මහේශී බුදුරජාණන් වහන්සේගේ ජයග්‍රහණය ඝෝෂා කළහ. මේ සත්‍යයෙන් ස්වස්තිය (සෙත්) වේවා!\n\n3. බෝ රුක මුල දී මුනීන්ද්‍රයන් වහන්සේට ජය වූයේය; මාරයාට පරාජය වූයේය. එකල බෝමැඩ සතුටු වූ දේව සමූහයෝ මහේශී බුදුරජාණන් වහන්සේගේ ජයග්‍රහණය ඝෝෂා කළහ. මේ සත්‍යයෙන් ස්වස්තිය (සෙත්) වේවා!\n\n4. බෝ රුක මුල දී මුනීන්ද්‍රයන් වහන්සේට ජය වූයේය; මාරයාට පරාජය වූයේය. එකල බෝමැඩ සතුටු වූ බ්‍රහ්ම සමූහයෝ ද ඒ තාදී මහේශී බුදුරජාණන් වහන්සේගේ ජයග්‍රහණය ඝෝෂා කළහ. මේ සත්‍යයෙන් ස්වස්තිය (සෙත්) වේවා!\n\nසාධු ! සාධු ! සාධු !",
   "english": "1. At the foot of the Bodhi tree, victory came to the Chief of Sages and defeat to Māra. Then, rejoicing at the Bodhi-seat, the hosts of nāgas proclaimed the great Sage's victory. By this truth, may there be well-being.\n\n2. At the foot of the Bodhi tree, victory came to the Chief of Sages and defeat to Māra. Then, rejoicing at the Bodhi-seat, the hosts of supaṇṇas (garudas) proclaimed the great Sage's victory. By this truth, may there be well-being.\n\n3. At the foot of the Bodhi tree, victory came to the Chief of Sages and defeat to Māra. Then, rejoicing at the Bodhi-seat, the hosts of devas proclaimed the great Sage's victory. By this truth, may there be well-being.\n\n4. At the foot of the Bodhi tree, victory came to the Chief of Sages and defeat to Māra. Then, rejoicing at the Bodhi-seat, the hosts of Brahmās too proclaimed the victory of the great Sage, the Unshaken One. By this truth, may there be well-being.\n\nSādhu! Sādhu! Sādhu!"
  },
  {
   "id": "b12",
   "group": "bodhi",
   "name": {
    "si": "කරණීය මෙත්ත සූත්‍රය",
    "en": "Karaṇīya Mettā Sutta"
   },
   "sinhala": "කරණීය මෙත්ත සූත්‍රය සජ්ඣායනා කරන්න.",
   "english": "Recite the Karaṇīya Mettā Sutta."
  },
  {
   "id": "b13",
   "group": "bodhi",
   "name": {
    "si": "දෙවියන්ට ඤාතීන්ට පින් අනුමෝදන් කිරීම",
    "en": "Sharing Merit with Devas and Relatives"
   },
   "pali": "එත්තාවතා ච අම්හෙහි - සම්භතං පුඤ්ඤ සම්පදං\nසබ්බෙ දෙවා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ භූතා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\nසබ්බෙ සත්තා අනුමොදන්තු - සබ්බ සම්පත්ති සිද්ධියා\n\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ දෙසනං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු සම්බුද්ධ සාවකං\nආකාසට්ඨා ච භුම්මට්ඨා - දෙවා නාගා මහිද්ධිකා\nපුඤ්ඤං තං අනුමොදිත්වා - චිරං රක්ඛන්තු මං පරං\n\nඉදං වො ඤාතීනං හොතු - සුඛිතා හොන්තු ඤාතයො\n\nඉමස්මිං විහාරෙ ආරාමෙ - අධිවත්ථා ච දෙවතා\nඅනුමොදිත්වා ඉමං පුඤ්ඤං - රක්ඛන්තු ජින සාසනං",
   "translit": "Ettāvatā ca amhehi - sambhataṃ puñña sampadaṃ\nsabbe devā anumodantu - sabba sampatti siddhiyā\nsabbe bhūtā anumodantu - sabba sampatti siddhiyā\nsabbe sattā anumodantu - sabba sampatti siddhiyā\n\nĀkāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāsanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha desanaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu sambuddha sāvakaṃ\nākāsaṭṭhā ca bhummaṭṭhā - devā nāgā mahiddhikā\npuññaṃ taṃ anumoditvā - ciraṃ rakkhantu maṃ paraṃ\n\nIdaṃ vo ñātīnaṃ hotu - sukhitā hontu ñātayo\n\nImasmiṃ vihāre ārāme - adhivatthā ca devatā\nanumoditvā imaṃ puññaṃ - rakkhantu jina sāsanaṃ",
   "sinhala": "මෙතෙකින් අප විසින් රැස් කරන ලද පුණ්‍ය සම්පත්තිය සකල සම්පත් සිදුවීම පිණිස සියළු දෙවියෝද, සියළු භූතයෝද, සියළු සත්වයෝද අනුමෝදන් වෙත්වා!\n\nඅහසෙහි විමන් හිද පොළොවෙහි වෘක්ෂ පර්වතාදියෙහි අධිගෘහිත වූද, මහත් සෘද්ධි ඇති දෙවියෝද, බ්‍රහ්මයෝද පින් අනුමෝදන්ව සාසනයද, ධර්මයද, ශ්‍රාවකයන්ද, මාද අන්‍යයන්ද යහතින් බොහෝ කල් රකිත්වා!\n\nමේ පින ඤාතීන්ට අත්වේවා! ඤාතීහු ලොව්තුරා සුවයෙන් සුවපත් වේවා!\n\nමේ විහාරාරාමයෙහි අධිගෘහිත දෙවියෝ මේ පින් අනුමෝදන්ව ජින සාසනය රකිත්වා!",
   "english": "By this accumulation of merit that we have gathered here, may all devas rejoice, for the accomplishment of every success; may all beings who have come to be rejoice, for the accomplishment of every success; may all living beings rejoice, for the accomplishment of every success.\n\nMay the mighty devas and nāgas who dwell in the sky and on the earth — in the heavenly mansions, trees, mountains and the like — rejoicing in this merit, long protect the Buddha's Dispensation, the Dhamma, the Buddha's disciples, and me and others.\n\nMay this merit be for our relatives! May our relatives be happy, with the supramundane happiness!\n\nMay the deities who dwell in this monastery and park, rejoicing in this merit, long protect the Victor's Dispensation."
  },
  {
   "id": "b14",
   "group": "bodhi",
   "name": {
    "si": "අනේකවිධ පුණ්‍යානුමෝදනා හා ප්‍රාර්ථනා ගාථා",
    "en": "Verses of Rejoicing in Merit and Aspiration"
   },
   "pali": "1. ඉමිනා පුඤ්ඤකම්මෙන - උපජ්ඣායා ගුණුත්තරා\nආචරියූපකාරා ච - මාතා පිතා පියා මමං\n\n2. සුරියො චන්දිමා රාජා - ගුණවන්තා නරා පි ච\nබ්‍රහ්මා මාරා ච ඉන්දා ච - ලොකපාලා ච දෙවතා\n\n3. යමො මිත්තා මනුස්සා ච - මජ්ඣත්තා වෙරිකා පි ච\nසබ්බෙ සත්තා සුඛී හොන්තු - පුඤ්ඤානි පකතානි මෙ\n\n4. සුඛං ච තිවිධං දෙන්තු - ඛිප්පං පාපෙථ වො මතං\nඉමිනා පුඤ්ඤ කම්මෙන - ඉමිනා උද්දිසෙන ච\n\n5. ඛිප්පාහං සුලභෙ චෙව - තණ්හූපාදාන ඡෙදනං\nයෙ සන්තානෙ හීනා ධම්මා - යාව නිබ්බානතො මමං\n\n6. නස්සන්තු සබ්බදායෙව - යත්ථ ජාතො භවෙ භවෙ\nඋජු චිත්තො සතිපඤ්ඤො - සල්ලෙඛො විරිය වාමිනා\n\n7. මාරා ලභන්තු නොකාසං - කාතුං ච විරියෙ මම\nබුද්ධො දීපවරො නාථො - ධම්මො නාථො වරුත්තමො\n\n8. නාථො පච්චෙක සම්බුද්ධො - සංඝො නාථොත්තරො මමං\nතෙසොත්තමානු භාවෙන - මාරොකාසං ලභන්තු මා\n\nභවග්ගපාදාය අවීචි හෙට්ඨතො\nඑත්ථන්තරෙ සත්ත කායූපපන්නා\nරූපී අරූපී ච අසඤ්ඤි සඤ්ඤිනො\nදුක්ඛා පමුච්චන්තු ඵුසන්තු නිබ්බුතිං\n\nදෙවො වස්සතු කාලෙන - සස්ස සම්පත්ති හොතු ච\nඵීතො භවතු ලොකො ච - රාජා භවතු ධම්මිකො",
   "translit": "1. Iminā puññakammena - upajjhāyā guṇuttarā\nācariyūpakārā ca - mātā pitā piyā mamaṃ\n\n2. Suriyo candimā rājā - guṇavantā narā pi ca\nbrahmā mārā ca indā ca - lokapālā ca devatā\n\n3. Yamo mittā manussā ca - majjhattā verikā pi ca\nsabbe sattā sukhī hontu - puññāni pakatāni me\n\n4. Sukhaṃ ca tividhaṃ dentu - khippaṃ pāpetha vo mataṃ\niminā puñña kammena - iminā uddisena ca\n\n5. Khippāhaṃ sulabhe ceva - taṇhūpādāna chedanaṃ\nye santāne hīnā dhammā - yāva nibbānato mamaṃ\n\n6. Nassantu sabbadāyeva - yattha jāto bhave bhave\nuju citto satipañño - sallekho viriya vāminā\n\n7. Mārā labhantu nokāsaṃ - kātuṃ ca viriye mama\nbuddho dīpavaro nātho - dhammo nātho varuttamo\n\n8. Nātho pacceka sambuddho - saṅgho nāthottaro mamaṃ\ntesottamānu bhāvena - mārokāsaṃ labhantu mā\n\nBhavaggapādāya avīci heṭṭhato\netthantare satta kāyūpapannā\nrūpī arūpī ca asaññi saññino\ndukkhā pamuccantu phusantu nibbutiṃ\n\nDevo vassatu kālena - sassa sampatti hotu ca\nphīto bhavatu loko ca - rājā bhavatu dhammiko",
   "sinhala": "1. මේ කුශලානුභාව බලයෙන් මාගේ ආචාර්ය උපාධ්‍යාය ගුණෝත්තම උතුමෝද, උපකාරකයෝද, ප්‍රිය මවුපිය දෙගුරුන්ද,\n\n2. චන්ද්‍ර සූර්‍ය රාජයෝද, ගුණවත් මනුෂ්‍යයෝද, බ්‍රහ්මයෝද, මාරයෝද, ඉන්ද්‍රයෝද, ලෝක පාලක දෙවියෝද,\n\n3. යම දෙවි රජු ද, මිත්‍ර මනුෂ්‍යයෝද, මධ්‍යස්ථයෝද, වෛරීහුද, සියළු සත්වයෝද සුවපත් වෙත්වා.\n\n4. මවිසින් විශේෂයෙන් රැස්කරන ලද කුශලයෝ ත්‍රිවිධ සම්පත් දෙත්වා. භවත්හු වහා නිවනට පමුණුවනු ලබත්වා.\n\n5. මේ කුශලයෙන්ද මේ උදෙසීමෙන් ද මම තෘෂ්ණා උපාදානයක් සිඳීම වහා ලබම්වා.\n\n6. නිවන දක්වා මගේ සන්තානයේ පාප ධර්ම නොපිහිටේවා. උපනුපන් භවයක් පාසා සැම කල්හි සෘජු සිත් ඇත්තේ සති ප්‍රඥා ඇත්තේ, සල්ලේඛ ප්‍රතිපදා ඇත්තේ, වීර්යය ඇත්තේද වෙම්වා!\n\n7-8. මේ කුශලයෙන් මාරයෝ අවකාශ නොලබත්වා. මා හට වීරිය කිරීම පිණිස බුද්ධරත්නය උතුම් පිහිටය. ධර්ම රත්නය ද මට උතුම් පිහිටය. ප්‍රත්‍යෙක බුද්ධ රත්නය ද ආර්ය මහා සංඝරත්නය ද මා හට උතුම් පිහිටය. ඒ උත්තම රත්නත්‍රයානුභාවයෙන් මාරයෝ අවකාශ නොලබත්වා.\n\nභවාග්‍රයෙහි පටන් අවීචිය දක්වා මේ අතර සත්ව ලෝකයට ඇතුළත් වූ රූපී අරූපී සඤ්ඤී අසඤ්ඤී සියලු සත්වයෝ දුකෙන් මිදෙත්වා. නිවන් සුව ලබත්වා.\n\nකලට වැසි වසීවා. ගොවිතැන් දියුණු වේවා. රට සශ්‍රීක වේවා. රජ දැහැමි වේවා.",
   "english": "1. By the power of this meritorious deed, may my preceptors and teachers, excellent in virtue, my benefactors, my dear mother and father,\n\n2. the sun and moon deities, virtuous humans, the Brahmās, Māra, Indra and the guardian deities of the world,\n\n3. Yama, friendly humans, neutral persons and those hostile to me — may all beings be happy.\n\n4. May the merits I have specially gathered bestow the three kinds of happiness, and may you all be swiftly led to Nibbāna.\n\n5. By this merit and this dedication, may I swiftly and easily attain the cutting off of craving and clinging.\n\n6. Until I reach Nibbāna, may the evil states in my mental continuum not take root. In every existence in which I am born, may I be upright in mind, mindful and wise, practising austerity, and energetic!\n\n7–8. By this merit, may Māra find no opportunity. For my striving, the Buddha is my supreme refuge; the Dhamma is also my supreme refuge; the Paccekabuddha and the noble Saṅgha are also my supreme refuge. By the power of these supreme Gems, may Māra gain no opportunity against me.\n\nFrom the summit of existence down to the Avīci hell, and all in between — beings who have arisen in this world, those with form and the formless, the percipient and the non-percipient — may they all be freed from suffering and attain the peace of Nibbāna.\n\nMay the rain fall in due season; may the harvests be abundant; may the country prosper; and may the king be righteous."
  },
  {
   "id": "b15",
   "group": "bodhi",
   "name": {
    "si": "ප්‍රතිපත්ති පූජාව",
    "en": "Offering of Practice"
   },
   "pali": "ඉමාය ධම්මානුධම්ම පටිපත්තියා බුද්ධං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා ධම්මං පූජෙමි\nඉමාය ධම්මානුධම්ම පටිපත්තියා සංඝං පූජෙමි\nඅද්ධා ඉමාය පටිපත්තියා ජාති ජරා මරණම්හා පරිමුච්චිස්සාමි",
   "translit": "Imāya dhammānudhamma paṭipattiyā buddhaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā dhammaṃ pūjemi\nimāya dhammānudhamma paṭipattiyā saṅghaṃ pūjemi\naddhā imāya paṭipattiyā jāti jarā maraṇamhā parimuccissāmi",
   "sinhala": "මේ ධර්මානු ධර්ම ප්‍රතිපත්තියෙන් බුද්ධ රත්නය, ධර්ම රත්නය, සංඝ රත්නය පූජා කරමි. ඒකාන්තයෙන් මෙම ප්‍රතිපත්තියෙන් ජාති, ජරා මරණයෙන් අත මිදෙන්නෙමි.",
   "english": "By this practice in accordance with the Dhamma, I honour the Buddha. By this practice in accordance with the Dhamma, I honour the Dhamma. By this practice in accordance with the Dhamma, I honour the Saṅgha. Surely, by this practice I shall be freed from birth, ageing and death."
  },
  {
   "id": "b16",
   "group": "bodhi",
   "name": {
    "si": "තෙරුවන් කමා කරවීම",
    "en": "Asking Forgiveness of the Triple Gem"
   },
   "pali": "කායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ භන්තෙ - භූරිපඤ්ඤ තථාගත\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ ධම්ම - සන්දිට්ඨික අකාලික\n\nකායෙන වාචා චිත්තෙන - පමාදෙන මයා කතං\nඅච්චයං ඛම මෙ සංඝ - පුඤ්ඤක්ඛෙත්ත අනුත්තර",
   "translit": "Kāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me bhante - bhūripañña tathāgata\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me dhamma - sandiṭṭhika akālika\n\nKāyena vācā cittena - pamādena mayā kataṃ\naccayaṃ khama me saṅgha - puññakkhetta anuttara",
   "sinhala": "ස්වාමිනි මහා ප්‍රඥා තථාගතයන් වහන්ස! කයින්, වචනයෙන් සිතින් කරන ලද පමා වරදට මට ක්ෂමා වන සේක්වා!\n\nසාන්දෘෂ්ටික අකාලික ශ්‍රී සද්ධර්මය කෙරෙහි කයින් වචනයෙන් සිතින් කරන ලද පමා වරදට ධර්ම රත්නය මට ක්ෂමා වන සේක්වා!\n\nඅනුත්තර දක්ෂිණාර්හ වූ මහා සංඝ රත්නය කෙරෙහි කයින් වචනයෙන් සිදු වූ පමා වරදට, සංඝ රත්නය මට ක්ෂමා වන සේක්වා!",
   "english": "By body, speech and mind, a fault was committed by me through heedlessness. Venerable Sir, Tathāgata of great wisdom, forgive me my transgression!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Dhamma, visible here and now and timeless!\n\nBy body, speech and mind, a fault was committed by me through heedlessness. Forgive me my transgression, O Saṅgha, the unsurpassed field of merit!"
  }
 ]
};
