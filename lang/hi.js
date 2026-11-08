/* =====================================================================
   lang/hi.js — हिन्दी (Hindi) भाषा पैक
   ---------------------------------------------------------------------
   • යතුර (key) = කේතයේ ඇති ඉංග්‍රීසි පෙළම; අගය = හින්දි පෙළ.
     පරිවර්තනයක් නැති ඉංග්‍රීසි පෙළ ඇප් එකේ ඉංග්‍රීසියෙන්ම පෙනේ (කිසිවක් කැඩෙන්නේ නැත).
   • {0} {1} … = අංක / නම් ආදේශ වන ස්ථාන — ඒවා එලෙසම තබන්න.
   • පාළි වචන මෙහි ලිවීම අවශ්‍ය නැත: pali-script.js මගින් රෝම පාළිය ස්වයංක්‍රීයව දේවනාගරී කරයි.
   • මෙම ගොනුව load වන්නේ හින්දි තෝරාගත් අයට පමණි.
   ===================================================================== */
window.HI_DICT = {
  /* ---------- मुख्य पृष्ठ (script.js) ---------- */
  "Buddhist Era": "बुद्ध वर्ष",
  "Select Date (C.E.) ⇓": "दिनांक चुनें (ई.) ⇓",
  "Atikkanta\n(Elapsed)": "अतिक्कन्त\n(बीता)",
  "Avasiṭṭha\n(remaining)": "अवसिट्ठ\n(शेष)",
  "Dawn | Noon ☀️": "अरुणोदय | मध्याह्न ☀️",
  "Uposatha Days🌛": "उपोसथ दिवस🌛",
  "Vassa Season ⛈️": "वर्षावास ⛈️",
  "📖 Calculation": "📖 गणना",
  "Sun": "सूर्य", "Uposatha": "उपोसथ", "Vassa": "वर्षावास", "Chanting": "पाठ", "Calculate": "गणना", "More": "और",
  "Language": "भाषा", "Dark Mode": "डार्क मोड", "Light Mode": "लाइट मोड", "Info": "जानकारी", "ℹ️ Info": "ℹ️ जानकारी",
  "Uposatha Calendar": "उपोसथ कैलेंडर",
  "Dark Mode 🌑": "डार्क मोड 🌑", "Light Mode 💡": "लाइट मोड 💡",
  "Year": "वर्ष", "Month": "मास", "Day": "दिन",
  "Contact & Downloads": "संपर्क और डाउनलोड",
  "Entering the Early Rains Retreat": "प्रथम वर्षावास का आरंभ",
  "Early Vassa Pavāraṇā": "प्रथम वर्षावास पवारणा",
  "Entering the Late Rains Retreat": "पश्चिम वर्षावास का आरंभ",
  "Late Vassa Pavāraṇā": "पश्चिम वर्षावास पवारणा",
  "Day of Entering the Early Rains Retreat": "प्रथम वर्षावास आरंभ का दिन",
  "Early Vassa Pavāraṇā Day": "प्रथम वर्षावास पवारणा दिवस",
  "Tomorrow is Early Vassa Pavāraṇā Day": "कल प्रथम वर्षावास पवारणा दिवस है",
  "Late Hemanta": "उत्तर हेमन्त",
  "Y": "व", "M": "मा", "D": "दि", "OK": "ठीक",
  "Get My Location": "मेरा स्थान लें",
  "Full Moon": "पूर्णिमा", "New Moon": "अमावस्या",
  "Uposatha Day": "उपोसथ दिवस",
  "Tomorrow is {0} Uposatha Day": "कल {0} उपोसथ दिवस है",
  "{0} days to {1} Uposatha": "{1} उपोसथ में {0} दिन शेष",
  "Location": "स्थान",
  "Please click the 'Get My Location' button.": "कृपया 'मेरा स्थान लें' बटन दबाएँ।",
  "Please click the 'Get My Location' button first.": "कृपया पहले 'मेरा स्थान लें' बटन दबाएँ।",
  "Dawn": "अरुणोदय", "Sunrise": "सूर्योदय", "Noon": "मध्याह्न", "Sunset": "सूर्यास्त",
  "Moonrise": "चंद्रोदय", "Moonset": "चंद्रास्त",
  "Poya Begins": "पोय आरंभ", "Poya Ends": "पोय समाप्त",
  "Astronomical Position, Tithi & Timings of the Moon": "चंद्रमा की खगोलीय स्थिति, तिथि और समय",
  "No Rise/Set": "उदय/अस्त नहीं",
  "Waxing {0}": "शुक्ल {0}", "Waning {0}": "कृष्ण {0}",
  "Illumination: {0}%": "प्रकाश: {0}%",

  /* ---------- महीने / वार ---------- */
  "January": "जनवरी", "February": "फ़रवरी", "March": "मार्च", "April": "अप्रैल", "May": "मई", "June": "जून",
  "July": "जुलाई", "August": "अगस्त", "September": "सितंबर", "October": "अक्टूबर", "November": "नवंबर", "December": "दिसंबर",
  "Jan": "जन", "Feb": "फ़र", "Mar": "मार्च", "Apr": "अप्रैल", "Jun": "जून", "Jul": "जुलाई", "Aug": "अग", "Sep": "सित", "Oct": "अक्टू", "Nov": "नव", "Dec": "दिस",
  "Sunday": "रविवार", "Monday": "सोमवार", "Tuesday": "मंगलवार", "Wednesday": "बुधवार", "Thursday": "गुरुवार", "Friday": "शुक्रवार", "Saturday": "शनिवार",

  /* ---------- उपोसथ पृष्ठ (uposatha.js) ---------- */
  "Uposatha Days & Vassa Period": "उपोसथ दिवस और वर्षावास",
  "Uposatha Days": "उपोसथ दिवस",
  "Full-moon and new-moon uposatha days": "पूर्णिमा और अमावस्या के उपोसथ दिवस",
  "Vassa Period": "वर्षावास",
  "Entering and Pavāraṇā dates of the early and late rains retreats": "प्रथम और पश्चिम वर्षावास के आरंभ और पवारणा की तिथियाँ",
  "Early Vassa": "प्रथम वर्षावास", "Late Vassa": "पश्चिम वर्षावास",
  "Next Uposatha": "अगला उपोसथ", "Today": "आज", "today": "आज", "Next": "अगला",
  "This year": "इस वर्ष", "No data": "डेटा उपलब्ध नहीं",
  "Download as JPG": "JPG के रूप में डाउनलोड करें",
  "Choose how to download": "डाउनलोड का प्रकार चुनें",
  "Black & White": "श्वेत-श्याम", "In colour": "रंगीन", "Cancel": "रद्द करें",
  "Your JPG is ready": "आपकी JPG तैयार है", "💾 Save / Share": "💾 सहेजें / साझा करें", "Close": "बंद करें",
  "Tap \"Save / Share\" and choose \"Save Image\", or long-press the image and choose \"Save to Photos\".": "\"सहेजें / साझा करें\" दबाकर \"Save Image\" चुनें, या चित्र को देर तक दबाकर \"Save to Photos\" चुनें।",
  "Long-press the image and choose \"Save to Photos\".": "चित्र को देर तक दबाकर \"Save to Photos\" चुनें।",
  "in {0} days": "{0} दिन में", "in {0} day": "{0} दिन में",
  "Completed": "पूर्ण",
  "Starts in {0} days": "{0} दिन में आरंभ",
  "Day {0} of {1} — {2} days left": "{1} में से दिन {0} — {2} दिन शेष",
  "Could not create the JPG. Please try again.": "JPG नहीं बन सकी। कृपया फिर से प्रयास करें।",
  "Buddhist Era {0} Uposatha Days Calendar (C.E. {1})": "बुद्ध वर्ष {0} उपोसथ दिवस कैलेंडर (ई. {1})",
  "Date": "दिनांक", "JPG": "JPG",

  /* ---------- सूर्य-चंद्र पृष्ठ (sunpage.js) ---------- */
  "Sun & Moon Times": "सूर्य और चंद्रमा के समय",
  "Now": "अभी",
  "Dawn & Noon Times": "अरुणोदय और मध्याह्न के समय",
  "Dawn, sunrise, noon and sunset for the chosen day": "चुने गए दिन का अरुणोदय, सूर्योदय, मध्याह्न और सूर्यास्त",
  "Moon & Timings": "चंद्रमा और समय",
  "Phase, illumination, moonrise/set and poya times": "कला, प्रकाश, चंद्रोदय/अस्त और पोय के समय",
  "Moon Phase Timeline": "चंद्र कलाएँ",
  "Moon map: NASA's Scientific Visualization Studio (LROC)": "चंद्र मानचित्र: NASA's Scientific Visualization Studio (LROC)",
  "Full moon": "पूर्णिमा", "New moon": "अमावस्या",
  "Sun & Moon around the Earth": "पृथ्वी के चारों ओर सूर्य और चंद्रमा",
  "Drag the timeline to change the time": "समय बदलने के लिए समय-रेखा खिसकाएँ",
  "Real directions of the Sun and Moon for your location. Distances and sizes are not to scale.": "आपके स्थान के अनुसार सूर्य और चंद्रमा की वास्तविक दिशाएँ। दूरियाँ और आकार पैमाने पर नहीं हैं।",
  "Location not set — showing Colombo": "स्थान निर्धारित नहीं — कोलंबो के अनुसार दिखाया जा रहा है",
  "Permission denied. Allow Location for this site/app in browser or phone settings, then try again.": "अनुमति नहीं मिली। ब्राउज़र या फ़ोन की सेटिंग्स में इस साइट/ऐप के लिए Location की अनुमति दें और फिर प्रयास करें।",
  "(Android Settings → Apps → this app / Chrome → Permissions → Location)": "(Android Settings → Apps → यह ऐप / Chrome → Permissions → Location)",
  "Location unavailable. Turn ON device Location, keep Wi-Fi/mobile data on, and try again (preferably outdoors).": "स्थान उपलब्ध नहीं। फ़ोन का Location चालू करें, Wi-Fi/मोबाइल डेटा चालू रखें और फिर प्रयास करें (हो सके तो खुले स्थान से)।",
  "Location request timed out. Make sure Location is ON and try again, preferably outdoors.": "स्थान अनुरोध का समय समाप्त हो गया। Location चालू है यह सुनिश्चित करें और फिर प्रयास करें, हो सके तो खुले स्थान से।",
  "Unable to retrieve location.": "स्थान प्राप्त नहीं हो सका।",
  "(This looks like an in-app browser — please open the page in Chrome / Safari.)": "(यह किसी ऐप के भीतर का ब्राउज़र लगता है — कृपया पृष्ठ Chrome / Safari में खोलें।)",
  "The last saved location is still being used.": "पिछला सहेजा गया स्थान अभी भी उपयोग हो रहा है।",
  "GPS not supported.": "GPS समर्थित नहीं है।",
  "Detecting location (please wait)...": "स्थान खोजा जा रहा है (कृपया प्रतीक्षा करें)...",
  "Trying GPS (may take up to 30 seconds)...": "GPS से खोजा जा रहा है (30 सेकंड तक लग सकते हैं)...",
  "Moon above the horizon — altitude": "चंद्रमा क्षितिज से ऊपर — ऊँचाई",
  "Moon below the horizon (": "चंद्रमा क्षितिज से नीचे (",
  "Daytime — Sun altitude {0}°": "दिन — सूर्य की ऊँचाई {0}°",
  "Twilight — Sun {0}° below horizon": "संध्या/अरुण प्रकाश — सूर्य क्षितिज से {0}° नीचे",
  "Night — Sun {0}° below horizon": "रात्रि — सूर्य क्षितिज से {0}° नीचे",

  /* ---------- पाठ (chanting.js) ---------- */
  "rules": "शिक्षापद",
  "Meaning": "अर्थ",
  "📜 Pāḷi": "📜 पाळि",
  "🌐 Meaning": "🌐 अर्थ (अंग्रेज़ी)",
  "The Twenty-Four Conditions": "चौबीस प्रत्यय",
  "May all beings be well and happy!": "सभी प्राणी सुखी और स्वस्थ हों!",
  "Loading...": "लोड हो रहा है...",
  "coming soon.": "जल्द आ रहा है।",
  "Contents": "विषय-सूची",
  "Sections": "भाग",
  "Buddha Year": "बुद्ध वर्ष",
  "Daily Chanting": "दैनिक वंदना",

  /* ---------- बुद्ध वर्ष पाठ (buddha-recitation.js) ---------- */
  "Buddhist Era for the selected date": "चुने गए दिनांक का बुद्ध वर्ष",
  "Year (animal)": "वर्ष (नाम)", "Season": "ऋतु", "Uposatha day": "उपोसथ दिवस",
  "NAMAKĀRA": "नमस्कार", "📜 Pāḷi recitation": "📜 पाळि पाठ",
  "Buddha Varsha Recitation": "बुद्ध वर्ष पाठ",
  "For the date selected in the app": "ऐप में चुने गए दिनांक के अनुसार",
  "Could not read the selected date.": "चुना गया दिनांक पढ़ा नहीं जा सका।",
  "{0} year": "{0} वर्ष", "{0} years": "{0} वर्ष", "{0} month": "{0} मास", "{0} months": "{0} मास", "{0} day": "{0} दिन", "{0} days": "{0} दिन",
  "Now {0} have elapsed.": "अब तक {0} बीत चुके हैं।",
  "No time has yet elapsed.": "अभी तक कोई समय नहीं बीता है।",
  "{0} remain.": "{0} शेष हैं।",
  "No time remains.": "कोई समय शेष नहीं है।",
  "first": "पहला", "second": "दूसरा", "third": "तीसरा", "fourth": "चौथा", "fifth": "पाँचवाँ", "sixth": "छठा", "seventh": "सातवाँ",
  "eighth": "आठवाँ", "ninth": "नौवाँ", "tenth": "दसवाँ", "eleventh": "ग्यारहवाँ", "twelfth": "बारहवाँ", "thirteenth": "तेरहवाँ",
  "fourteenth": "चौदहवाँ", "fifteenth": "पंद्रहवाँ",
  "Sukka (waxing)": "सुक्क (शुक्ल)", "Kāla (waning)": "काल (कृष्ण)",
  "This is the <strong>{0}</strong> saṃvacchara (year), the <strong>{1}</strong> season. In this season, in the month of <strong>{2}</strong>, on the <strong>{3}</strong> day (tithi) of the {4} pakkha, a <strong>{5}</strong> — thus it should be understood.":
    "यह <strong>{0}</strong> संवच्छर (वर्ष) है, <strong>{1}</strong> ऋतु। इस ऋतु में, <strong>{2}</strong> मास में, {4} पक्ष के <strong>{3}</strong> दिन (तिथि), <strong>{5}</strong> — ऐसा समझना चाहिए।",
  "<p></strong> From the feet of Dīpaṅkara Buddha onward, our Blessed One fulfilled thirty pāramīs — the ten pāramīs (giving, virtue, renunciation, wisdom, energy, patience, truthfulness, resolution, loving-kindness, equanimity), the ten upapāramīs and the ten paramattha-pāramīs. Born in the Vessantara existence he made the five great renunciations, and was then reborn in the Tusita realm. At the request of the four great deva-kings he made the five great investigations, took conception in the womb of Queen Mahāmāyā through King Suddhodana, and after ten months was born. In his twenty-ninth year he made the Great Renunciation, strove for six years, and in his thirty-fifth year, on the Vesākha full-moon day, awakened to perfect enlightenment. After teaching for forty-five years, in the Sappa (Snake) year on the Vesākha full-moon day, a Tuesday, he attained parinibbāna. The Dispensation of that Blessed One, the Arahant, the Fully Enlightened Buddha, will endure for five thousand years.</p>":
    "<p></strong> दीपंकर बुद्ध के चरणों से आरंभ करके हमारे भगवान ने तीस पारमिताएँ पूर्ण कीं — दस पारमिताएँ (दान, शील, नैष्कर्म्य, प्रज्ञा, वीर्य, क्षान्ति, सत्य, अधिष्ठान, मैत्री, उपेक्षा), दस उपपारमिताएँ और दस परमार्थ-पारमिताएँ। वेस्सन्तर जन्म में उन्होंने पाँच महान त्याग किए, और फिर तुषित लोक में जन्म लिया। चार महान देव-राजाओं की प्रार्थना पर उन्होंने पाँच महा-विलोकन किए, राजा शुद्धोदन के द्वारा रानी महामाया के गर्भ में प्रवेश किया, और दस मास बाद जन्म लिया। उनतीसवें वर्ष में उन्होंने महाभिनिष्क्रमण किया, छह वर्ष तक प्रधान (कठोर साधना) की, और पैंतीसवें वर्ष में वेसाख पूर्णिमा के दिन सम्यक् सम्बोधि प्राप्त की। पैंतालीस वर्ष तक धर्मोपदेश देने के बाद, सप्प (सर्प) वर्ष में वेसाख पूर्णिमा के दिन, मंगलवार को, उन्होंने परिनिर्वाण प्राप्त किया। उन भगवान्, अर्हत्, सम्यक्सम्बुद्ध का शासन पाँच हज़ार वर्षों तक रहेगा।</p>"
};

/* ---------- पाठ विभाग के नाम (chanting data) ---------- */
Object.assign(window.HI_DICT, {
  "Paritta": "परित्त (परित्राण पाठ)",
  "Buddha Vandanā": "बुद्ध वन्दना",
  "Sri Kalyāṇī Yogāśramīya Vandanā Method": "श्री कल्याणी योगाश्रम वंदना विधि",
  "Morning Vandanā": "प्रातः वंदना",
  "Midday Vandanā": "मध्याह्न वंदना",
  "Evening Vandanā": "सायं वंदना",
  "Bodhi Pūjā": "बोधि पूजा",
  "Homage": "नमस्कार",
  "Invitation": "आमंत्रण",
  "Offering of Lamps": "दीप पूजा",
  "Offering of Fragrance": "सुगंध पूजा",
  "Offering of Water": "जल पूजा",
  "Offering of Medicinal Drink (Porridge, Tea)": "गिलानपच्चय पेय पूजा (यवागु, चाय)",
  "Offering of Flowers": "पुष्प पूजा",
  "Dhamma Vandanā": "धम्म वंदना",
  "Saṅgha Vandanā": "सङ्घ वंदना",
  "Placing the Triple Gem's Virtues upon the Crown": "त्रिरत्न के गुणों को शिरोधार्य करना",
  "Veneration of the Fourteen Buddha-Knowledges": "चौदह बुद्ध-ज्ञानों की वंदना",
  "Morning Cānting": "प्रातः पाठ",
  "Midday Cānting": "मध्याह्न पाठ",
  "Evening Cānting": "सायं पाठ",
  "The Seventy-Seven Knowledges": "सतहत्तर ज्ञान",
  "Recitation of the Vata Pirith": "वत पिरित् पाठ",
  "Loving-kindness Meditation": "मैत्री भावना",
  "Meditation on the Recollection of the Buddha": "बुद्धानुस्मृति भावना",
  "Loving-kindness Verses": "मैत्री गाथाएँ",
  "Meditation on Foulness": "अशुभ भावना",
  "Mindfulness of Death": "मरणानुस्मृति",
  "Verses of Rejoicing in Merit and Aspiration": "पुण्यानुमोदन और प्रार्थना की गाथाएँ",
  "The Sugata's Exhortation": "सुगत का उपदेश",
  "Dependent Origination - Forward Order": "प्रतीत्यसमुत्पाद - अनुलोम",
  "Dependent Origination - Reverse Order": "प्रतीत्यसमुत्पाद - प्रतिलोम",
  "The Verses on the House-Builder": "गृहकारक गाथाएँ",
  "The Twenty-four Conditions (Paṭṭhāna)": "चौबीस प्रत्यय (पट्ठान)",
  "Buddha Year Recitation": "बुद्ध वर्ष पाठ",
  "Meditation (about 15 minutes)": "ध्यान (लगभग 15 मिनट)",
  "Sharing Merit with Devas and Relatives": "देवताओं और संबंधियों को पुण्यदान",
  "Sharing Merit with the Bodhisatta Metteyya": "मैत्रेय बोधिसत्व को पुण्यदान",
  "Aspiration": "प्रार्थना",
  "Offering of Practice": "प्रतिपत्ति पूजा",
  "Asking Forgiveness of the Triple Gem": "त्रिरत्न से क्षमा-याचना",
  "Paying Respects to Elders and Teachers": "बड़ों और गुरुओं को वंदना",
  "Verses on the Buddha's Virtues": "बुद्ध-गुण गाथाएँ",
  "Veneration of the Buddha's Virtues": "बुद्ध-गुण वंदना",
  "Dasadhamma Sutta and Reflection on the Requisites Used": "दसधम्म सुत्त और प्रयुक्त प्रत्ययों का प्रत्यवेक्षण",
  "Contemplation of the Repulsive (Thirty-two Parts of the Body)": "अशुभ चिंतन (शरीर के बत्तीस अंग)",
  "Honouring the Elders": "बड़ों का सम्मान",
  "Offering of Medicinal Drink": "गिलानपच्चय पेय पूजा",
  "The Worthy One (Arahaṃ)": "अर्हत् (अरहं)",
  "The Perfectly Self-Awakened One (Sammāsambuddho)": "सम्यक् स्वयं-बोधि प्राप्त (सम्मासम्बुद्धो)",
  "Accomplished in Knowledge and Conduct (Vijjācaraṇasampanno)": "विद्या और आचरण से संपन्न (विज्जाचरणसम्पन्नो)",
  "The Well-Gone One (Sugato)": "सुगत (सुगतो)",
  "The Knower of the Worlds (Lokavidū)": "लोकों के ज्ञाता (लोकविदू)",
  "The Unsurpassed Trainer of Persons (Anuttaro Purisadammasārathi)": "पुरुषों के अनुत्तर सारथी (अनुत्तरो पुरिसदम्मसारथि)",
  "The Teacher of Gods and Humans (Satthā Devamanussānaṃ)": "देवों और मनुष्यों के शास्ता (सत्था देवमनुस्सानं)",
  "The Awakened One (Buddho)": "बुद्ध (बुद्धो)",
  "The Blessed One (Bhagavā)": "भगवान (भगवा)",
  "Going for Refuge to the Buddha": "बुद्ध की शरण",
  "Going for Refuge to the Dhamma": "धम्म की शरण",
  "Going for Refuge to the Saṅgha": "सङ्घ की शरण",
  "Veneration of the Eighteen Qualities of the Buddha": "बुद्ध के अठारह गुणों की वंदना",
  "Veneration of the Four Sacred Shrines": "चार पवित्र स्थलों की वंदना",
  "Veneration of the Seventy-three Knowledges": "तिहत्तर ज्ञानों की वंदना",
  "Recitation of the Protective Verses": "रक्षा गाथाओं का पाठ",
  "Verses of Aspiration for the True Dhamma and the Realm": "सद्धम्म और देश के लिए प्रार्थना गाथाएँ",
  "Rejoicing in Merit and Sharing Merit": "पुण्यानुमोदन और पुण्यदान",
  "The Names of the Twelve Years": "बारह वर्षों के नाम",
  "Names of the Months": "मासों के नाम",
  "Names of the Days of the Week": "सप्ताह के दिनों के नाम",
  "Veneration of the Bodhi Tree": "बोधि वृक्ष की वंदना",
  "Offering of Incense": "धूप पूजा",
  "Paritta Saṅgaho · The Collection of Protective Discourses": "परित्त सङ्गहो · परित्राण सूत्र संग्रह",
  "First Bhāṇavāra": "पहला भाणवार",
  "Second Bhāṇavāra": "दूसरा भाणवार",
  "Third Bhāṇavāra": "तीसरा भाणवार",
  "Fourth Bhāṇavāra": "चौथा भाणवार",
  "Additional Suttas": "अतिरिक्त सुत्त",
  "May all who use this collection of Pirith be well, under the refuge of the Triple Gem! May all beings be well and happy! 🙏": "इस परित्राण संग्रह का उपयोग करने वाले सभी जन त्रिरत्न की शरण में सुखी रहें! सभी प्राणी सुखी और स्वस्थ हों! 🙏",
  "Pirith Suttas": "परित्राण सुत्त",
  "Āṭānāṭiya (First)": "आटानाटिय (पहला)",
  "Āṭānāṭiya (Second)": "आटानाटिय (दूसरा)",
  "Āṭānāṭiya Sutta (First )": "आटानाटिय सुत्त (पहला)",
  "Āṭānāṭiya Sutta (Second )": "आटानाटिय सुत्त (दूसरा)",
  "Pirith Pē Kirīma": "पिरित् पे किरीम (परित्राण जल अभिमंत्रण)",
  "227 Training Rules": "227 शिक्षापद",
  "Uposatha preliminaries": "उपोसथ के पूर्व-कृत्य",
  "Preliminary Procedures for the Saṅgha Uposatha": "सङ्घ उपोसथ के पूर्व-कृत्य",
  "The Pātimokkha recital": "पातिमोक्ख पाठ",
  "Nidānuddesa — The Introduction": "निदानुद्देस — परिचय",
  "Four rules": "चार शिक्षापद",
  "Thirteen rules": "तेरह शिक्षापद",
  "Two rules": "दो शिक्षापद",
  "Thirty rules": "तीस शिक्षापद",
  "Ninety-two rules": "बानवे शिक्षापद",
  "Seventy-five rules": "पचहत्तर शिक्षापद",
  "Seven rules": "सात शिक्षापद",
  "Ten rules": "दस शिक्षापद",
  "Twelve rules": "बारह शिक्षापद",
  "Fifteen rules": "पंद्रह शिक्षापद",
  "Conclusion of the Pātimokkha": "पातिमोक्ख का समापन",
  "Related Uposatha procedures": "संबंधित उपोसथ विधियाँ",
  "Brief Uposatha Procedure": "संक्षिप्त उपोसथ विधि",
  "Pārisuddhi Uposatha Procedure": "पारिसुद्धि उपोसथ विधि",
  "Resolving the Rains Retreat (Vassa)": "वर्षावास (वस्स) का अधिष्ठान",
  "Pavāraṇā procedures": "पवारणा विधियाँ",
  "Preliminary Procedures for the Pavāraṇā": "पवारणा के पूर्व-कृत्य",
  "Procedures for the Saṅgha Pavāraṇā": "सङ्घ पवारणा की विधि",
  "Vinaya formal acts": "विनय कर्म",
  "Spreading the Kaṭhina": "कठिन चीवर बिछाना",
  "Abolishing and Establishing Boundaries (Sīmā): Kamma-vācā": "सीमा हटाना और स्थापित करना: कम्म-वाचा",
  "Unconcealed Offences (Mānatta and Rehabilitation)": "अप्रच्छन्न आपत्तियाँ (मानत्त और पुनर्वास)",
  "Aggha-samodhāna Probation": "अग्घ-समोधान परिवास",
  "Suddhanta Probation — Concealed and Unconcealed Offences": "सुद्धन्त परिवास — प्रच्छन्न और अप्रच्छन्न आपत्तियाँ",
  "Mūlāya Paṭikassana — an unconcealed offence committed during probation": "मूलाय पटिकस्सन — परिवास के दौरान की गई अप्रच्छन्न आपत्ति",
  "Mūlāya Paṭikassana — a concealed offence committed during probation": "मूलाय पटिकस्सन — परिवास के दौरान की गई प्रच्छन्न आपत्ति",
  "Mūlāya Paṭikassana — a concealed offence committed during mānatta": "मूलाय पटिकस्सन — मानत्त के दौरान की गई प्रच्छन्न आपत्ति",
  "Appendix": "परिशिष्ट",
  "Paying Respects to Senior Monks": "वरिष्ठ भिक्षुओं को वंदना",
  "Confession of Offences (Āpatti-desanā)": "आपत्ति-देशना (आपत्ति-देसना)",
  "Taking a Preceptor (Upajjhāya)": "उपाध्याय ग्रहण (उपज्झाय)",
  "Taking a Teacher (Ācariya)": "आचार्य ग्रहण (आचरिय)",
  "Giving Consent (Chanda) for Vinaya Acts": "विनय कर्मों के लिए छन्द (छन्द) देना",
  "Placing the Kappa-dot (Kappabindu)": "कप्प-बिंदु लगाना (कप्पबिन्दु)",
  "Details on the Use of Robes": "चीवर उपयोग का विवरण",
  "Relinquishing Robes (Nissajjana)": "चीवर त्याग (निस्सज्जन)",
  "Details on the Use of the Bowl": "पात्र उपयोग का विवरण",
  "Relinquishing Seven-day Medicine (Sattāhakālika Bhesajja)": "सप्ताह-कालिक औषधि का त्याग (सत्ताहकालिक भेसज्ज)",
  "Making Food Allowable (Kappiya)": "भोजन को कप्पिय बनाना (कप्पिय)",
  "Asking Leave (Āpucchā)": "अनुमति लेना (आपुच्छा)",
  "Reflecting on the Four Requisites": "चार प्रत्ययों का प्रत्यवेक्षण",
  "The Ten Subjects a Renunciant Should Often Reflect On (Dasadhamma Sutta)": "प्रव्रजित को बार-बार चिंतन करने योग्य दस बातें (दसधम्म सुत्त)",
  "© Kitulgoda Aranya Senasanaya, Bhikkhu Pātimokkha.": "© कितुलगोड अरण्य सेनासन, भिक्खु पातिमोक्ख।",
  "Conclusion": "समापन",
  "Brief Uposatha": "संक्षिप्त उपोसथ",
  "Vassa Resolve": "वर्षावास अधिष्ठान",
  "Pavāraṇā Preliminaries": "पवारणा पूर्व-कृत्य",
  "Kaṭhina Spreading": "कठिन बिछाना",
  "Sīmā Procedures": "सीमा विधि",
  "Unconcealed Offences": "अप्रच्छन्न आपत्तियाँ",
  "Suddhanta Probation": "सुद्धन्त परिवास",
  "Mūlāya Paṭikassana (unconcealed, during probation)": "मूलाय पटिकस्सन (अप्रच्छन्न, परिवास में)",
  "Mūlāya Paṭikassana (concealed, during probation)": "मूलाय पटिकस्सन (प्रच्छन्न, परिवास में)",
  "Mūlāya Paṭikassana (during mānatta)": "मूलाय पटिकस्सन (मानत्त में)",
  "Confession": "आपत्ति-देशना",
  "Preceptor": "उपाध्याय",
  "Teacher": "आचार्य",
  "Consent": "छन्द",
  "Kappa-dot": "कप्प-बिंदु",
  "Robes": "चीवर",
  "Robe relinquishing": "चीवर त्याग",
  "Bowl": "पात्र",
  "Medicine": "औषधि",
  "Allowable food": "कप्पिय भोजन",
  "Asking leave": "अनुमति",
  "Reflection": "प्रत्यवेक्षण",
  "Ten subjects": "दस बातें",
  "Forgiveness": "क्षमा-याचना",
  "Robe chapter": "चीवर वर्ग",
  "Silk chapter": "कोसिय वर्ग",
  "Bowl chapter": "पात्र वर्ग",
  "Lying chapter": "मुसावाद वर्ग",
  "Plant-life chapter": "भूतगाम वर्ग",
  "Instructing-nuns chapter": "ओवाद वर्ग",
  "Food chapter": "भोजन वर्ग",
  "Naked-ascetic chapter": "अचेलक वर्ग",
  "Liquor-drinking chapter": "सुरापान वर्ग",
  "Living-beings chapter": "सप्पाणक वर्ग",
  "Dhamma-companions chapter": "सहधम्मिक वर्ग",
  "Jewel chapter": "रतन वर्ग",
  "Well-rounded chapter": "परिमण्डल वर्ग",
  "Laughter chapter": "उज्जग्घिक वर्ग",
  "Arms-akimbo chapter": "खम्भकत वर्ग",
  "Attentive chapter": "सक्कच्च वर्ग",
  "Mouthful chapter": "कबळ वर्ग",
  "Slurping chapter": "सुरुसुरु वर्ग",
  "Footwear chapter": "पादुका वर्ग",
  "The procedure for holding the Uposatha briefly when one of the ten dangers is present.": "दस संकटों में से कोई एक उपस्थित होने पर संक्षेप में उपोसथ करने की विधि।",
  "(The ten dangers are: danger from kings, from thieves, from fire, from water, from humans, from non-humans, from wild beasts, from snakes, danger to life, or danger to the holy life.)": "(दस संकट हैं: राजा से, चोरों से, अग्नि से, जल से, मनुष्यों से, अमनुष्यों से, हिंसक पशुओं से, सर्पों से संकट, जीवन का संकट, या ब्रह्मचर्य का संकट।)",
  "Note: After reciting the Introduction and the Pārājika rules, the remainder is to be recited as above.": "टिप्पणी: परिचय और पाराजिक शिक्षापदों का पाठ करने के बाद शेष भाग ऊपर बताए अनुसार पढ़ा जाए।",
  "When there are three monks": "जब तीन भिक्षु हों",
  "The Pārisuddhi Uposatha — an Uposatha held for the sake of purity.": "पारिसुद्धि उपोसथ — शुद्धि के लिए किया जाने वाला उपोसथ।",
  "When there are two monks": "जब दो भिक्षु हों",
  "When there is only one monk (the resolve-Uposatha)": "जब केवल एक भिक्षु हो (अधिष्ठान-उपोसथ)",
  "On the day the Rains Retreat begins, after cleaning the monastery and completing the preliminary duties, squat with joined palms, pay homage three times, and say three times:": "वर्षावास आरंभ होने के दिन विहार की सफ़ाई और पूर्व-कृत्य पूरे करके, उकड़ूँ बैठकर हाथ जोड़ें, तीन बार वंदना करें और तीन बार कहें:",
  "The resolution to be made when going out": "बाहर जाते समय किया जाने वाला अधिष्ठान",
  "Group (gaṇa) Pavāraṇā": "गण (गण) पवारणा",
  "The Twenty-Four Conditional Relations": "चौबीस प्रत्यय-संबंध",
  "Homage to the Arahant, the Fully Enlightened One, who taught the great Samanta Paṭṭhāna Prakaraṇa endowed with infinite modes of conditionality.": "अनंत प्रत्यय-नयों से युक्त महान समन्त पट्ठान प्रकरण का उपदेश देने वाले अर्हत्, सम्यक्सम्बुद्ध को नमस्कार।",
  "May all who read this Samanta Paṭṭhāna Dhamma Vandanā attain the wisdom of the infinite modes of conditionality!": "इस समन्त पट्ठान धम्म वंदना को पढ़ने वाले सभी जन अनंत प्रत्यय-नयों की प्रज्ञा प्राप्त करें!",
  "May all beings be well and happy! 🙏": "सभी प्राणी सुखी और स्वस्थ हों! 🙏",
  "24 Conditions": "24 प्रत्यय",
  "The Four Foundations of Mindfulness": "चार स्मृति-उपस्थान",
  "Introduction": "परिचय",
  "Section on Breathing": "आनापान पर्व",
  "Section on Postures": "ईर्यापथ पर्व",
  "Section on Clear Comprehension": "सम्प्रजन्य पर्व",
  "Section on Repulsiveness of the Body": "प्रतिकूल मनसिकार पर्व",
  "Section on Elements": "धातु मनसिकार पर्व",
  "Section on the Nine Charnel Grounds": "नव सिवथिक पर्व",
  "Contemplation of Feeling": "वेदनानुपश्यना",
  "Contemplation of Mind": "चित्तानुपश्यना",
  "Section on the Hindrances": "नीवरण पर्व",
  "Section on the Aggregates": "स्कंध पर्व",
  "Section on the Sense Bases": "आयतन पर्व",
  "Section on the Factors of Enlightenment": "बोध्यंग पर्व",
  "The Truth of Suffering": "दुःख सत्य",
  "The Truth of the Origin of Suffering": "दुःख समुदय सत्य",
  "The Truth of the Cessation of Suffering": "दुःख निरोध सत्य",
  "The Truth of the Path Leading to the Cessation of Suffering": "दुःख निरोधगामिनी प्रतिपदा सत्य",
  "Vipāka": "विपाक"
});

/* ---------- जानकारी पृष्ठ (info.js) — हिन्दी भाग ---------- */
window.HI_INFO_HTML = `
    <p class="blessing">बुद्ध का शासन संसार में प्रकाशित हो!</p>

    <div class="card">
      <p>यहाँ दिखाए गए पोय (उपोसथ) दिवस थाईलैंड और श्रीलंका के उपोसथ दिवसों पर आधारित हैं। म्यांमार के उपोसथ दिवस कभी-कभी इनसे केवल एक दिन भिन्न हो सकते हैं।</p>
      <p>अपने विचार और सुझाव कृपया नीचे दिए पते पर भेजें।</p>
      <a class="email-btn" href="mailto:bhamarawali@gmail.com">📧 bhamarawali@gmail.com</a>
    </div>

    <div class="card important">
      <span class="tag">❄️ महत्वपूर्ण</span>
      <p>ऐप पहली बार खोलने के बाद मेनू में <strong>सूर्य</strong> पृष्ठ पर जाकर अपना स्थान सेट करें।</p>
      <p>✏️ आवश्यकता हो तो अपने स्थान का विवरण डालकर वार्षिक अरुणोदय और मध्याह्न सारणी <a href="https://buddhistera.github.io/Dawn-Noon-calculation/" target="_blank" rel="noopener noreferrer">यहाँ से</a> मुद्रित कर सकते हैं।</p>
    </div>

    <div class="card rate-card">
      <h3>⭐ ऐप को रेटिंग दें</h3>
      <p>यदि यह ऐप आपके लिए उपयोगी है, तो कृपया Google Play Store पर स्टार रेटिंग और एक छोटी समीक्षा दें। इससे दूसरों को यह ऐप खोजने में सहायता मिलती है।</p>
      <div class="rate-stars" aria-hidden="true">
        <a class="rate-star" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer" tabindex="-1">★</a><a class="rate-star" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer" tabindex="-1">★</a><a class="rate-star" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer" tabindex="-1">★</a><a class="rate-star" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer" tabindex="-1">★</a><a class="rate-star" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer" tabindex="-1">★</a>
      </div>
      <a class="rate-btn" data-rate href="\${PLAY_WEB}" target="_blank" rel="noopener noreferrer">Play Store पर रेटिंग दें</a>
    </div>

    <div class="section-heading"><span class="dot"></span>ऐप कैसे प्राप्त करें</div>
    <div class="platform-grid">
      <div class="platform-card">
        <h3>🤖 Android के लिए</h3>
        <p>Google Play Store से इंस्टॉल करें।</p>
        <a class="platform-btn" href="https://play.google.com/store/apps/details?id=app.vercel.buddhist_era.twa&pcampaignid=web_share">डाउनलोड ⬇️</a>
      </div>
      <div class="platform-card">
        <h3>🪟 Windows के लिए</h3>
        <p>यह वेब पता Chrome ब्राउज़र में खोलें और पता-पट्टी में <em>"install app"</em> आइकन दबाकर इंस्टॉल करें।</p>
        <div class="link-row">
          <a class="platform-btn" href="https://buddhist-era.vercel.app" target="_blank" rel="noopener noreferrer">buddhist-era.vercel.app</a>
          <button class="copy-btn" onclick="copyLink('https://buddhist-era.vercel.app', this)" aria-label="लिंक कॉपी करें">📋</button>
        </div>
      </div>
      <div class="platform-card">
        <h3>🍎 iPhone / Mac OS के लिए</h3>
        <p>यह वेब पता Safari ब्राउज़र में खोलें और Share → <em>"Add to Home Screen"</em> करें।</p>
        <div class="link-row">
          <a class="platform-btn" href="https://buddhist-era.vercel.app" target="_blank" rel="noopener noreferrer">buddhist-era.vercel.app</a>
          <button class="copy-btn" onclick="copyLink('https://buddhist-era.vercel.app', this)" aria-label="लिंक कॉपी करें">📋</button>
        </div>
      </div>
    </div>

    <div class="section-heading"><span class="dot"></span>उपयोगी सुझाव</div>
    <div class="card">
      <ul class="tips">
        <li><span class="pin">✏️</span><span>सूर्य पृष्ठ के लिए स्थान लेते समय, इंटरनेट न होने पर भी खुले आकाश के नीचे प्रयास करने से परिणाम जल्दी मिलता है।</span></li>
        <li><span class="pin">✏️</span><span>म्यांमार के उपोसथ दिवस <a href="https://docs.google.com/spreadsheets/d/1Ck5Eh3uQEbpraE0gE81fr6tNJvpX5ue9U4TluAa2K1M/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">यहाँ</a> देखे जा सकते हैं।</span></li>
      </ul>
    </div>
`;

/* ---------- QR कोड निर्माता (info.js) ---------- */
window.HI_QM_STR = {
  makeBtn: "✨ अपना QR कोड बनाएँ",
  title: "अपना QR कोड बनाएँ",
  type: "QR कोड का प्रकार",
  types: { text: "पाठ / वेबसाइट लिंक", contact: "संपर्क (Contact)", wifi: "Wi-Fi", email: "ईमेल", phone: "फ़ोन नंबर", sms: "SMS संदेश" },
  f: {
    text: "पाठ या वेबसाइट लिंक (URL)", textPh: "https://example.com",
    name: "नाम", phone: "फ़ोन नंबर", email: "ईमेल पता", org: "संस्था / पद", url: "वेबसाइट", address: "पता",
    ssid: "Wi-Fi नाम (SSID)", password: "पासवर्ड", security: "सुरक्षा प्रकार", secWpa: "WPA / WPA2", secWep: "WEP", secNone: "कोई नहीं (खुला)", hidden: "छिपा हुआ नेटवर्क",
    to: "प्राप्तकर्ता का ईमेल", subject: "विषय", body: "संदेश", smsNum: "फ़ोन नंबर", smsMsg: "संदेश"
  },
  color: "रंग",
  colors: ["हरा", "काला", "नीला", "लाल"],
  gen: "QR कोड बनाएँ",
  dlAria: "QR कोड डाउनलोड करें",
  shareAria: "QR कोड साझा करें",
  copied: "लिंक कॉपी हो गया",
  share: "↗️ साझा करें",
  saveHint: "यदि डाउनलोड शुरू न हो, तो चित्र को देर तक दबाकर सहेजें।",
  required: "कृपया आवश्यक जानकारी भरें।",
  tooLong: "दर्ज की गई जानकारी QR कोड के लिए बहुत लंबी है। कृपया छोटा करें।",
  note: "QR कोड आपके उपकरण पर ही बनता है। आपकी जानकारी कहीं नहीं भेजी जाती।",
  alt: "आपका बनाया QR कोड"
};
