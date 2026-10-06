// --- Language Settings ---
    let currentLang = localStorage.getItem('appLang') || 'en';

    const i18n = {
        si: {
            title: "බුද්ධ වර්ෂය", dateLabel: "දිනය තෝරන්න ( ක්‍රි.ව) ⇓", atikkanta: "අතික්කන්ත\n(ඉකුත් වූ)", avasittha: "අවසිට්ඨ\n(ඉතිරි)",
            langBtn: "English 🇦🇺",sunMenu: "අරුණ | මධ්‍යහ්නය ☀️", poyaMenu: "පොහොය දින🌛", vasMenu: "වස් කාලය ⛈️", calcMenu: "📖 ගණනය", navSun: "අරුණ", navPoya: "උපෝසථ", navVas: "වස්", navChant: "සජ්ඣායනය", navCalc: "ගණනය", navMore: "තව", langLbl: "English", darkLbl: "අඳුරු තිරය", lightLbl: "ආලෝකමත් තිරය", infoLbl: "තොරතුරු", contactMenu: "ℹ️ තොරතුරු", poyaTitle: "පෝය දින ලැයිස්තුව ",darkMode: "අඳුරු තිරය 🌑",lightMode: "ආලෝකමත් තිරය💡",yearLabel: "වර්ෂය",monthLabel: "මාසය",dayLabel: "දිනය",   
            vasTitle: "", contactTitle: " තොරතුරු සහ බාගත කිරීම්", poyaSuffix: " පෝය",
            vas1: "පෙරවස් සමාදන්වීම", vas2: "පෙරවස් පවාරණය", vas3: "පසුවස් සමාදන්වීම", vas4: "පසුවස් පවාරණය",
            animals: ["සප්ප","අස්ස","අජ","කපි","කුක්කුට","සෝන","සූකර","මුසික"," වසභ","ව්‍යග්ග","සස","නාග"],
            seasons: { Hemanta: "හේමන්ත", Gimhana: "ගිම්හාන", Vassana: "වස්සාන", ReHemanta: "නැවත හේමන්ත" },
            paksha: { Kanha: "කණ්හ පක්ඛෙ", Sukka: "සුක්ක පක්ඛෙ" },
            week: ["රවිවාරං","චන්දවාරං","භුම්මවාරං","බුධවාරං","ගුරුවාරං","සුක්කවාරං","සෝරවාරං"],
            paliTemplate: (a, s, m, p, t, w) => `අයං\n${a} සංවච්ඡරෙ\n${s} උතු අස්මිං උතුම්හි\n${m} මාසස්ස\n${p}\n${t}\n${w}\nඉදන්ති දට්ඨබ්බං.`
        },
        en: {
            title: "Buddhist Era", dateLabel: "Select Date (C.E.) ⇓", atikkanta: "Atikkanta\n(Elapsed)", avasittha: "Avasiṭṭha\n(remaining)",
            langBtn: "සිංහල 🇱🇰", sunMenu: "Dawn | Noon ☀️", poyaMenu: " Uposatha Days🌛", vasMenu: "Vassa Season ⛈️", calcMenu: "📖 Calculation", navSun: "Sun", navPoya: "Uposatha", navVas: "Vassa", navChant: "Chanting", navCalc: "Calculate", navMore: "More", langLbl: "සිංහල", darkLbl: "Dark Mode", lightLbl: "Light Mode", infoLbl: "Info", contactMenu: "ℹ️ Info", poyaTitle: " Uposatha Calendar",darkMode: "Dark Mode 🌑",lightMode: "Light Mode 💡",yearLabel: "Year",monthLabel: "Month",dayLabel: "Day",
            vasTitle: "", contactTitle: "Contact & Downloads", poyaSuffix: "",
            vas1: "Entering the Early Rains Retreat", vas2: "Early Vassa Pavāraṇā", vas3: "Entering the Late Rains Retreat ", vas4: "Late Vassa Pavāraṇā ",
            animals: ["Sappa","Assa","Aja","Kapi","Kukkuṭa","Sona","Sūkara","Musika"," Vasabha","Vyaggha","Sasa","Nāga"],
            seasons: { Hemanta: "Hemanta", Gimhana: "Gimhāna", Vassana: "Vassāna", ReHemanta: "Late Hemanta" },
            paksha: { Kanha: "Kaṇha pakkhe", Sukka: "Sukka pakkhe" },
            week: ["Ravivāraṃ","Candavāraṃ","Bhummavāraṃ","Budhavāraṃ","Guruvāraṃ","Sukkavāraṃ","Soravāraṃ"],
            paliTemplate: (a, s, m, p, t, w) => `Ayaṃ\n${a} saṃvacchare\n${s} utu asmiṃ utumhi\n${m} māsassa\n${p}\n${t}\n${w}\nidanti daṭṭhabbaṃ.`
        }
    };   

// Poya chain overrides 1900-3000
// රීතිය: ඕනෑම පෝයන් දෙකක් අතර පරතරය 14 හෝ 15 පමණි. 14 වන්නේ සෘතුවේ 3 සහ 7 පමණි;
// ගිම්හාන 7 වන පෝය 14→15 (+1) වසර 5 කට පමණ වරක්. ඉතිරි ඒවා ඔබේ අත්සන් කළ දින පමණි.
const manualOverrides = {
    "1903-06-23": "1903-06-24",
    "1910-07-05": "1910-07-06",
    "1914-06-21": "1914-06-22",
    "1919-06-26": "1919-06-27",
    "1926-07-08": "1926-07-09",
    "1929-07-05": "1929-07-06",
    "1935-06-29": "1935-06-30",
    "1941-06-22": "1941-06-23",
    "1946-06-27": "1946-06-28",
    "1951-07-02": "1951-07-03",
    "1956-07-06": "1956-07-07",
    "1960-06-22": "1960-06-23",
    "1965-06-27": "1965-06-28",
    "1971-06-21": "1971-06-22",
    "1978-07-03": "1978-07-04",
    "1981-06-30": "1981-07-01",
    "1987-06-24": "1987-06-25",
    "1990-06-21": "1990-06-22",
    "1998-06-22": "1998-06-23",
    "2003-06-27": "2003-06-28",
    "2008-07-01": "2008-07-02",
    "2013-07-06": "2013-07-07",
    "2017-06-22": "2017-06-23",
    "2021-07-08": "2021-07-09",
    "2025-06-24": "2025-06-25",
    "2032-07-06": "2032-07-07",
    "2035-07-04": "2035-07-05",    
    "2043-07-05": "2043-07-06",
    "2046-07-02": "2046-07-03",
    "2052-06-25": "2052-06-26",
    "2060-06-26": "2060-06-27",
    "2063-06-24": "2063-06-25",
    "2070-07-06": "2070-07-07",
    "2074-06-22": "2074-06-23",
    "2079-06-27": "2079-06-28",
    "2085-06-20": "2085-06-21",
    "2089-07-06": "2089-07-07",
    "2095-06-30": "2095-07-01",
    "2101-06-24": "2101-06-25",
    "2104-06-21": "2104-06-22",
    "2111-07-04": "2111-07-05",
    "2115-06-20": "2115-06-21",
    "2122-07-02": "2122-07-03",
    "2126-06-18": "2126-06-19",
    "2131-06-23": "2131-06-24",
    "2136-06-27": "2136-06-28",
    "2141-07-02": "2141-07-03",
    "2147-06-26": "2147-06-27",
    "2150-06-23": "2150-06-24",
    "2157-07-05": "2157-07-06",
    "2162-06-10": "2162-06-11",
    "2166-06-26": "2166-06-27",
    "2173-07-08": "2173-07-09",
    "2177-06-24": "2177-06-25",
    "2184-07-06": "2184-07-07",
    "2188-06-22": "2188-06-23",
    "2193-06-27": "2193-06-28",
    "2199-06-21": "2199-06-22",
    "2202-06-19": "2202-06-20",
    "2209-07-01": "2209-07-02",
    "2212-06-28": "2212-06-29",
    "2218-06-22": "2218-06-23",
    "2224-06-15": "2224-06-16",
    "2228-07-01": "2228-07-02",
    "2234-06-25": "2234-06-26",
    "2239-06-30": "2239-07-01",
    "2245-06-23": "2245-06-24",
    "2248-06-20": "2248-06-21",
    "2255-07-03": "2255-07-04",
    "2261-06-26": "2261-06-27",
    "2264-06-23": "2264-06-24",
    "2271-07-06": "2271-07-07",
    "2274-07-03": "2274-07-04",
    "2280-06-26": "2280-06-27",
    "2286-06-20": "2286-06-21",
    "2291-06-25": "2291-06-26",
    "2296-06-29": "2296-06-30",
    "2301-07-05": "2301-07-06",
    "2305-06-21": "2305-06-22",
    "2310-06-26": "2310-06-27",
    "2316-06-19": "2316-06-20",
    "2322-06-13": "2322-06-14",
    "2326-06-29": "2326-06-30",
    "2332-06-22": "2332-06-23",
    "2335-06-20": "2335-06-21",
    "2343-06-21": "2343-06-22",
    "2348-06-25": "2348-06-26",
    "2353-06-30": "2353-07-01",
    "2358-07-05": "2358-07-06",
    "2362-06-21": "2362-06-22",
    "2369-07-03": "2369-07-04",
    "2372-06-30": "2372-07-01",
    "2378-06-24": "2378-06-25",
    "2385-07-06": "2385-07-07",
    "2388-07-03": "2388-07-04",
    "2394-06-27": "2394-06-28",
    "2397-06-24": "2397-06-25",
    "2405-06-25": "2405-06-26",
    "2408-06-22": "2408-06-23",
    "2415-07-05": "2415-07-06",
    "2419-06-21": "2419-06-22",
    "2424-06-25": "2424-06-26",
    "2431-07-08": "2431-07-09",
    "2434-07-05": "2434-07-06",
    "2440-06-28": "2440-06-29",
    "2446-06-22": "2446-06-23",
    "2450-07-08": "2450-07-09",
    "2456-07-01": "2456-07-02",
    "2461-07-06": "2461-07-07",
    "2465-06-22": "2465-06-23",
    "2470-06-27": "2470-06-28",
    "2476-06-20": "2476-06-21",
    "2481-06-25": "2481-06-26",
    "2486-06-30": "2486-07-01",
    "2492-06-23": "2492-06-24",
    "2495-06-21": "2495-06-22",
    "2502-07-04": "2502-07-05",
    "2507-06-09": "2507-06-10",
    "2511-06-25": "2511-06-26",
    "2518-07-07": "2518-07-08",
    "2522-06-23": "2522-06-24",
    "2529-07-05": "2529-07-06",
    "2533-06-21": "2533-06-22",
    "2538-06-26": "2538-06-27",
    "2545-07-08": "2545-07-09",
    "2548-07-05": "2548-07-06",
    "2554-06-29": "2554-06-30",
    "2557-06-26": "2557-06-27",
    "2563-06-20": "2563-06-21",
    "2569-06-13": "2569-06-14",
    "2575-07-07": "2575-07-08",
    "2579-06-23": "2579-06-24",
    "2584-06-27": "2584-06-28",
    "2590-06-21": "2590-06-22",
    "2595-06-26": "2595-06-27",
    "2600-07-01": "2600-07-02",
    "2606-06-25": "2606-06-26",
    "2609-06-22": "2609-06-23",
    "2616-07-04": "2616-07-05",
    "2619-07-02": "2619-07-03",
    "2626-06-14": "2626-06-15",
    "2631-06-19": "2631-06-20",
    "2636-06-23": "2636-06-24",
    "2641-06-28": "2641-06-29",
    "2646-07-03": "2646-07-04",
    "2652-06-26": "2652-06-27",
    "2655-06-24": "2655-06-25",
    "2662-07-06": "2662-07-07",
    "2667-06-11": "2667-06-12",
    "2671-06-27": "2671-06-28",
    "2677-06-20": "2677-06-21",
    "2681-07-06": "2681-07-07",
    "2688-06-18": "2688-06-19",
    "2693-06-23": "2693-06-24",
    "2698-06-28": "2698-06-29",
    "2703-07-04": "2703-07-05",
    "2707-06-20": "2707-06-21",
    "2712-06-24": "2712-06-25",
    "2717-06-29": "2717-06-30",
    "2723-06-23": "2723-06-24",
    "2727-06-09": "2727-06-10",
    "2733-07-02": "2733-07-03",
    "2739-06-26": "2739-06-27",
    "2742-06-23": "2742-06-24",
    "2750-06-24": "2750-06-25",
    "2753-06-21": "2753-06-22",
    "2760-07-03": "2760-07-04",
    "2765-07-08": "2765-07-09",
    "2769-06-24": "2769-06-25",
    "2776-07-06": "2776-07-07",
    "2779-07-04": "2779-07-05",
    "2785-06-27": "2785-06-28",
    "2791-06-21": "2791-06-22",
    "2795-07-07": "2795-07-08",
    "2801-06-30": "2801-07-01",
    "2806-07-05": "2806-07-06",
    "2810-06-21": "2810-06-22",
    "2815-06-26": "2815-06-27",
    "2821-06-19": "2821-06-20",
    "2826-06-24": "2826-06-25",
    "2831-06-29": "2831-06-30",
    "2837-06-22": "2837-06-23",
    "2841-07-08": "2841-07-09",
    "2847-07-02": "2847-07-03",
    "2853-06-25": "2853-06-26",
    "2856-06-22": "2856-06-23",
    "2863-07-05": "2863-07-06",
    "2867-06-21": "2867-06-22",
    "2872-06-25": "2872-06-26",
    "2878-06-19": "2878-06-20",
    "2883-06-24": "2883-06-25",
    "2890-07-06": "2890-07-07",
    "2893-07-03": "2893-07-04",
    "2899-06-27": "2899-06-28",
    "2902-06-25": "2902-06-26",
    "2909-07-07": "2909-07-08",
    "2914-06-12": "2914-06-13",
    "2920-07-05": "2920-07-06",
    "2924-06-21": "2924-06-22",
    "2929-06-26": "2929-06-27",
    "2935-06-20": "2935-06-21",
    "2940-06-24": "2940-06-25",
    "2945-06-29": "2945-06-30",
    "2951-06-23": "2951-06-24",
    "2954-06-20": "2954-06-21",
    "2961-07-02": "2961-07-03",
    "2964-06-29": "2964-06-30",
    "2971-06-12": "2971-06-13",
    "2976-06-16": "2976-06-17",
    "2981-06-21": "2981-06-22",
    "2986-06-26": "2986-06-27",
    "2991-07-01": "2991-07-02",
    "2997-06-24": "2997-06-25",
};

const DISPLAY_DAY_ADJUST_MS = -1 * 24 * 60 * 60 * 1000;
const SL_OFFSET_MS = 5.5 * 60 * 60 * 1000;

function slYear(dateObj) { return new Date(dateObj.getTime() + SL_OFFSET_MS).getUTCFullYear(); }
function slMonth(dateObj) { return new Date(dateObj.getTime() + SL_OFFSET_MS).getUTCMonth(); }
function slDay(dateObj) { return new Date(dateObj.getTime() + SL_OFFSET_MS).getUTCDate(); }
function fmtISO(dateObj) {
    let d = new Date(dateObj.getTime() + SL_OFFSET_MS);
    let y = d.getUTCFullYear(), m = String(d.getUTCMonth() + 1).padStart(2, '0'), dd = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
}
function parseISO(s) {
    let p = s.split('-');
    return new Date(Date.UTC(parseInt(p[0]), parseInt(p[1]) - 1, parseInt(p[2])));
}

function detectPoyaType(dateObj) {
    let searchStart = new Date(dateObj.getTime() - (3 * 24 * 60 * 60 * 1000));
    let fullMoon = Astronomy.SearchMoonPhase(180, searchStart, 7);
    let newMoon = Astronomy.SearchMoonPhase(0, searchStart, 7);
    let diffFull = fullMoon ? Math.abs(fullMoon.date - dateObj) : Infinity;
    let diffNew = newMoon ? Math.abs(newMoon.date - dateObj) : Infinity;
    return (diffFull < diffNew) ? 'full' : 'new';
}


function getPoyaTimes(dateObj) {
    let searchStart = new Date(dateObj.getTime() - (3 * 24 * 60 * 60 * 1000));
    let fullMoon = Astronomy.SearchMoonPhase(180, searchStart, 7);
    let newMoon = Astronomy.SearchMoonPhase(0, searchStart, 7);
    let diffFull = fullMoon ? Math.abs(fullMoon.date - dateObj) : Infinity;
    let diffNew = newMoon ? Math.abs(newMoon.date - dateObj) : Infinity;

    let type, endTime, beginAngle;
    if (diffFull < diffNew) {
        type = 'full'; endTime = fullMoon.date; beginAngle = 168;
    } else {
        type = 'new'; endTime = newMoon.date; beginAngle = 348;
    }

    let beginSearchStart = new Date(endTime.getTime() - 2 * 24 * 60 * 60 * 1000);
    let beginResult = Astronomy.SearchMoonPhase(beginAngle, beginSearchStart, 5);
    let beginTime = beginResult ? beginResult.date : endTime;

    return { type, beginTime, endTime };
}


const POYA_PHASE_BOUNDARIES = [
    { beginAngle: 84,  endAngle: 96,  phase: 'firstQuarter' },
    { beginAngle: 168, endAngle: 180, phase: 'fullMoon' },
    { beginAngle: 264, endAngle: 276, phase: 'lastQuarter' },
    { beginAngle: 348, endAngle: 0,   phase: 'newMoon' }
];

const POYA_PHASE_NAMES = {
    firstQuarter: { si: 'පුර අටවක', en: 'First Quarter' },
    fullMoon:     { si: 'පසළොස්වක', en: 'Full Moon' },
    lastQuarter:  { si: 'අව අටවක', en: 'Last Quarter' },
    newMoon:      { si: 'අමාවක', en: 'New Moon' }
};


function getPoyaEventsForDate(dateObj) {
    const dayStart = new Date(dateObj); dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
    const searchStart = new Date(dayStart.getTime() - 3 * 24 * 60 * 60 * 1000);

    let beginEvent = null, endEvent = null;

    POYA_PHASE_BOUNDARIES.forEach(b => {
        let beginResult = Astronomy.SearchMoonPhase(b.beginAngle, searchStart, 10);
        if (beginResult && beginResult.date >= dayStart && beginResult.date < dayEnd) {
            beginEvent = { phase: b.phase, time: beginResult.date };
        }
        let endResult = Astronomy.SearchMoonPhase(b.endAngle, searchStart, 10);
        if (endResult && endResult.date >= dayStart && endResult.date < dayEnd) {
            endEvent = { phase: b.phase, time: endResult.date };
        }
    });

    return { beginEvent, endEvent };
}


function fmtTime12hLocal(dateObj, isSinhala) {
    if (!dateObj) return '';
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    const isPM = hours >= 12;
    hours = hours % 12;
    hours = hours ? hours : 12;
    let mm = minutes < 10 ? '0' + minutes : minutes;
    if (isSinhala) {
        const marker = isPM ? 'අ.භා' : 'පූ.භා';
        return `${marker} ${hours}.${mm}`;
    }
    const ampm = isPM ? 'PM' : 'AM';
    return `${hours}:${mm} ${ampm}`;
}

function _findEsalaTargetRaw(year) {
    let d = new Date(Date.UTC(year, 5, 1));
    let candidates = [];
    for (let i = 0; i < 4; i++) {
        let fm = Astronomy.SearchMoonPhase(180, d, 35);
        candidates.push(fm.date);
        d = new Date(fm.date.getTime() + 20 * 24 * 60 * 60 * 1000);
    }
    let leap = candidates.find(dt => {
        let m = slMonth(dt), dd = slDay(dt), y = slYear(dt);
        return y === year && ((m === 6 && dd >= 25) || (m === 7 && dd <= 4));
    });
    let normal = candidates.find(dt => {
        let m = slMonth(dt), y = slYear(dt);
        return y === year && m === 6;
    });
    return leap || normal;
}

function _isLeapGimhanaYearRaw(year) {
    let d = new Date(Date.UTC(year, 5, 1));
    let candidates = [];
    for (let i = 0; i < 4; i++) {
        let fm = Astronomy.SearchMoonPhase(180, d, 35);
        candidates.push(fm.date);
        d = new Date(fm.date.getTime() + 20 * 24 * 60 * 60 * 1000);
    }
    return !!candidates.find(dt => {
        let m = slMonth(dt), dd = slDay(dt), y = slYear(dt);
        return y === year && ((m === 6 && dd >= 25) || (m === 7 && dd <= 4));
    });
}


function resolveEsalaGap(prevDate) {
    let est14 = new Date(prevDate.getTime() + 14 * 24 * 60 * 60 * 1000);
    let est15 = new Date(prevDate.getTime() + 15 * 24 * 60 * 60 * 1000);
    let searchStart = new Date(prevDate.getTime() + 8 * 24 * 60 * 60 * 1000);
    let nm = Astronomy.SearchMoonPhase(0, searchStart, 20);
    if (!nm) return { date: est14, days: 14 };
    let diff14 = Math.abs(nm.date - est14), diff15 = Math.abs(nm.date - est15);
    return (diff14 <= diff15) ? { date: est14, days: 14 } : { date: est15, days: 15 };
}

const CURATED_THROUGH_YEAR = 3000;

const _esalaCache = {}, _leapCache = {};
function findEsalaTarget(year) {
    if (!(year in _esalaCache)) _esalaCache[year] = _findEsalaTargetRaw(year);
    return _esalaCache[year];
}
function isLeapGimhanaYear(year) {
    if (!(year in _leapCache)) _leapCache[year] = _isLeapGimhanaYearRaw(year);
    return _leapCache[year];
}


// ගිම්හාන සෘතුව අධික මාසයක් (පෝය 10ක්) ඇති වසරක්ද යන්න තීරණය කිරීම.
// පෝය දාමයෙන්ම (14/15 රටාව + manualOverrides) ගිම්හාන 8 වන පෝය දිනය ගණනය කර
// එය ඇසළ පුරපසළොස්වක (target) ට ආසන්න නම් සාමාන්‍ය (8), නැතිනම් අධික (10) ලෙස සලකයි.
// (පෙර: ජූලි 25 - අගෝ 4 කවුළුව පමණක් බැලූ නිසා, දාමය හා සීමා දිනයන්හිදී අසමාන වූ අතර මාස නාම 1 කින් ගිලිහුණි.)
function isLeapGimhanaChain(hemantaEndDate) {
    const DAY = 24 * 60 * 60 * 1000;
    let date = hemantaEndDate;
    let prevPos = 8;                       // හේමන්ත 8
    for (let i = 1; i <= 8; i++) {
        const days = (prevPos === 3 || prevPos === 7) ? 14 : 15;
        date = new Date(date.getTime() + days * DAY);
        const est = new Date(date.getTime() + DISPLAY_DAY_ADJUST_MS);
        const key = fmtISO(est);
        if (manualOverrides[key]) {
            date = new Date(date.getTime() + (parseISO(manualOverrides[key]).getTime() - est.getTime()));
        }
        prevPos = i;
    }
    const target = findEsalaTarget(slYear(hemantaEndDate));
    if (!target) return isLeapGimhanaYear(slYear(hemantaEndDate));
    return Math.abs(date - target) >= 2 * DAY;
}

const MONTH_CYCLE_SINHALA = ["ඵුස්ස", "මාඝ", "ඵග්ගුන", "චිත්ත", "වේසාඛ", "ජෙට්ඨ", "ආසාළ්හ", "සාවන", "පොට්ඨපාද", "අස්සයුජ", "කත්තික", "මාඝසිර"];

const SEED_DATE = new Date(Date.UTC(1899, 11, 3, 12, 0, 0)); // 1899-12-03 අමාවක (හේමන්ත 1)
const SEED_SEASON = 'hemanta';
const SEED_POS = 1;
const SEED_MONTH_IDX = 11; // හේමන්ත 1 (අමාවක) = මාඝසිර (idx 11) – සෘතු ස්ථානයට අනුව

const MIN_YEAR = 1900;
const MAX_YEAR = 3000;

const seasonNameMap = { hemanta: "හේමන්ත", gimhana: "ගිම්හාන", vassana: "වස්සාන" };
const typeNameMap = { full: "පසළොස්වක", new: "අමාවක" };

let poyaList = [];
let vesakDates = {};
let poyaListComputedUpToYear = MIN_YEAR - 1;

// poyaList දිනය අනුව ඇණවුම් කර ඇත → binary search (O(log n)); 27k ඇතුළත් කිරීම් වලදී Date parse නොකර ඉක්මනින් සොයයි
function _pLowerBound(pred) {          // pred(p) අසත්‍යයෙන් සත්‍යයට මාරුවන පළමු දර්ශකය
    let lo = 0, hi = poyaList.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (pred(poyaList[mid])) hi = mid; else lo = mid + 1; }
    return lo;
}
function _pFirstFrom(i, fn) { for (; i < poyaList.length; i++) if (fn(poyaList[i])) return poyaList[i]; return undefined; }
function _pLastBefore(i, fn) { for (i = i - 1; i >= 0; i--) if (fn(poyaList[i])) return poyaList[i]; return null; }

let _chainState = null; // { currentDate, season, posInSeason, isFirst, monthIdx, thisGimhanaLeap }

function extendPoyaDataTo(uptoYear) {
    uptoYear = Math.min(uptoYear, MAX_YEAR);
    if (uptoYear <= poyaListComputedUpToYear) return;

    if (_chainState === null) {
        _chainState = {
            currentDate: SEED_DATE,
            season: SEED_SEASON,
            posInSeason: SEED_POS,
            isFirst: true,
            monthIdx: SEED_MONTH_IDX,
            thisGimhanaLeap: false
        };
    }
    let s = _chainState;

    while (slYear(s.currentDate) <= uptoYear) {
        let prevPoyaDate = s.currentDate; 
        if (!s.isFirst) {
            let isChatPos = (s.posInSeason === 3 || s.posInSeason === 7);
            let days = isChatPos ? 14 : 15;
            s.currentDate = new Date(s.currentDate.getTime() + days * 24 * 60 * 60 * 1000);
        }
        s.isFirst = false;

        let type = (s.posInSeason % 2 === 0) ? 'full' : 'new'; // අමාවක = ඔත්තේ ස්ථාන, පසළොස්වක = ඉරට්ටේ ස්ථාන (Astronomy ඇමතුම් නැත)

        let estimatedDisplayDate = new Date(s.currentDate.getTime() + DISPLAY_DAY_ADJUST_MS);
        let isoKey = fmtISO(estimatedDisplayDate);
        if (manualOverrides[isoKey]) {

            let correctedDisplay = parseISO(manualOverrides[isoKey]);
            let deltaMs = correctedDisplay.getTime() - estimatedDisplayDate.getTime();
            s.currentDate = new Date(s.currentDate.getTime() + deltaMs);
        } else if (slYear(estimatedDisplayDate) > CURATED_THROUGH_YEAR && s.season === 'gimhana' && s.posInSeason === 7) {

            let resolved = resolveEsalaGap(prevPoyaDate);
            s.currentDate = new Date(prevPoyaDate.getTime() + resolved.days * 24 * 60 * 60 * 1000);
        }
        let displayDate = new Date(s.currentDate.getTime() + DISPLAY_DAY_ADJUST_MS);

        let monthName;
        if (s.season === 'gimhana' && s.thisGimhanaLeap && (s.posInSeason === 3 || s.posInSeason === 4)) {
            monthName = 'අධි' + MONTH_CYCLE_SINHALA[s.monthIdx];
        } else {
            monthName = MONTH_CYCLE_SINHALA[s.monthIdx];
        }

        let nextSeason, nextPos;
        if (s.season === 'hemanta' && s.posInSeason === 8) {
            nextSeason = 'gimhana'; nextPos = 1;
            s.thisGimhanaLeap = isLeapGimhanaChain(s.currentDate);
        } else if (s.season === 'gimhana') {
            let target = findEsalaTarget(slYear(s.currentDate));
            let isTarget = target && Math.abs(s.currentDate - target) < 2 * 24 * 60 * 60 * 1000;
            if (isTarget || s.posInSeason === 10) { nextSeason = 'vassana'; nextPos = 1; }
            else { nextSeason = 'gimhana'; nextPos = s.posInSeason + 1; }
        } else if (s.season === 'vassana' && s.posInSeason === 8) {
            nextSeason = 'hemanta'; nextPos = 1;
        } else if (s.season === 'vassana') {
            nextSeason = 'vassana'; nextPos = s.posInSeason + 1;
        } else {
            nextSeason = 'hemanta'; nextPos = s.posInSeason + 1;
        }

        if (slYear(displayDate) <= MAX_YEAR) {
            poyaList.push({
                d: fmtISO(displayDate),
                r: seasonNameMap[s.season],
                t: typeNameMap[type],
                m: monthName
            });
        }

        if (type === 'full') {
            let wasAdhiFull = (s.season === 'gimhana' && s.thisGimhanaLeap && s.posInSeason === 4);
            if (!wasAdhiFull) {
                s.monthIdx = (s.monthIdx + 1) % 12;
            }
        }

        s.season = nextSeason; s.posInSeason = nextPos;
    }

    poyaListComputedUpToYear = uptoYear;
   
    for (let y = MIN_YEAR; y <= poyaListComputedUpToYear; y++) {
        if (vesakDates[y]) continue;
        const candidates = poyaList.filter(p => p.t === "පසළොස්වක" && p.d >= `${y}-05-04` && p.d <= `${y}-06-04`);
        const vesak = candidates.find(p => p.m === "වේසාඛ") || candidates[0];
        if (vesak) vesakDates[y] = vesak.d;
    }
}

function ensurePoyaDataUpTo(year) {
    const target = Math.min(Math.max(year, MIN_YEAR), MAX_YEAR);
    extendPoyaDataTo(target);
}

function scheduleBackgroundPoyaExtension() {
    if (poyaListComputedUpToYear >= MAX_YEAR) return;
    const YEARS_PER_CHUNK = 15;
    const step = () => {
        extendPoyaDataTo(Math.min(poyaListComputedUpToYear + YEARS_PER_CHUNK, MAX_YEAR));
        if (poyaListComputedUpToYear < MAX_YEAR) {
            scheduleNext();
        }
    };
    function scheduleNext() {
        if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(step, { timeout: 500 });
        } else {
            setTimeout(step, 30);
        }
    }
    scheduleNext();
}

ensurePoyaDataUpTo(slYear(new Date()) + 1);
scheduleBackgroundPoyaExtension();
    const tithiPaliS = ["","පඨමං","දුතියං","තතියං","චතුත්ථං","පඤ්චමං","ඡට්ඨමං","සත්තමං","අට්ඨමං","නවමං","දසමං","එකාදසමං","ද්වාදසමං","තෙරසමං","චුද්දසමං","පණ්ණරසමං"];
    const tithiPaliE = ["","Paṭhamaṃ","Dutiyaṃ","Tatiyaṃ","Catutthaṃ","Pañcamaṃ","Chaṭṭhamaṃ","Sattamaṃ","Aṭṭhamaṃ","Navamaṃ","Dasamaṃ","Ekādasamaṃ","Dvādasamaṃ","Terasamaṃ","Cuddasamaṃ","Paṇṇarasamaṃ"];

    function toggleMenu() {
        const d = document.getElementById("myDropdown");
        d.style.display = (d.style.display === "block") ? "none" : "block";
    }
    function closeMenu() {
        const d = document.getElementById("myDropdown");
        if (d) d.style.display = "none";
    }

   
    window.onclick = function(event) {
        if (!event.target.closest('.nav-more-btn')) {
            closeMenu();
        }
    }

    function toggleLanguage() {
        currentLang = (currentLang === 'si') ? 'en' : 'si';
        localStorage.setItem('appLang', currentLang);
        updateUI();
        calculateAll();    
        updateSunTimes(); 

    if (typeof updateSinhalaAstroDate === "function") {
        updateSinhalaAstroDate();
    }
}
    function updateUI() {
    const t = i18n[currentLang];
    const isDark = document.body.classList.contains('dark-mode');

    document.getElementById('ui-title').innerHTML = t.title;
    document.getElementById('ui-label-date').innerText = t.dateLabel;
    document.getElementById('ui-label-year').innerText = t.yearLabel;
    document.getElementById('ui-label-month').innerText = t.monthLabel;
    document.getElementById('ui-label-day').innerText = t.dayLabel;
    document.getElementById('ui-menu-sun').innerText = t.navSun;
    document.getElementById('ui-menu-poya').innerText = t.navPoya;
    document.getElementById('ui-menu-vas').innerText = t.navVas;
    const calcItem = document.getElementById('ui-menu-calc');
    if (calcItem) calcItem.innerText = t.navCalc;
    const chantItem = document.getElementById('ui-menu-chant');
    if (chantItem) chantItem.innerText = t.navChant;
    const moreItem = document.getElementById('ui-menu-more');
    if (moreItem) moreItem.innerText = t.navMore;
    document.getElementById('ui-menu-contact').innerText = t.infoLbl;
    
    const darkBtn = document.getElementById('ui-dark-lbl');
    if (darkBtn) {
        darkBtn.innerText = isDark ? t.lightLbl : t.darkLbl;
    }

    const langBtn = document.getElementById('ui-lang-lbl');
    if (langBtn) {
        langBtn.innerText = t.langLbl;
    }

    document.getElementById('ui-poya-title').innerText = t.poyaTitle;
    document.getElementById('ui-vas-title').innerText = t.vasTitle;
    document.getElementById('ui-label-atikkanta').innerText = t.atikkanta;
    document.getElementById('ui-label-avasittha').innerText = t.avasittha;

    const shortY = currentLang === 'si' ? 'ව' : 'Y';
    const shortM = currentLang === 'si' ? 'මා' : 'M';
    const shortD = currentLang === 'si' ? 'දි' : 'D';

    document.getElementById('ui-short-y1').innerText = shortY;
    document.getElementById('ui-short-m1').innerText = shortM;
    document.getElementById('ui-short-d1').innerText = shortD;
    document.getElementById('ui-short-y2').innerText = shortY;
    document.getElementById('ui-short-m2').innerText = shortM;
    document.getElementById('ui-short-d2').innerText = shortD;
    
}

function openPoyaModal() { 
    closeMenu(); 
    document.getElementById("poyaModal").style.display = "flex"; 
    
    renderPoyaList(); 
    
    setTimeout(() => {
        const nextPoyaElement = document.getElementById("next-poya-item");
        const scrollContainer = document.getElementById("poyaListContent");
        
        if (nextPoyaElement && scrollContainer) {
            const topPos = nextPoyaElement.offsetTop;
            scrollContainer.scrollTo({
                top: topPos - 140, 
                behavior: 'smooth'
            });
        }
    }, 500); 
}

function openVasModal() { 
    closeMenu();
    document.getElementById("vasModal").style.display = "flex"; 
}

function closeModal(id) { 
    document.getElementById(id).style.display = "none"; 
}


function renderPoyaList() {
    const container = document.getElementById("poyaListContent");
    const t = i18n[currentLang];
    const today = new Date().toISOString().split('T')[0];
    const selYear = new Date(document.getElementById('inputDate').value).getFullYear();
    ensurePoyaDataUpTo(selYear + 1);

    let html = `<div style='text-align:center; font-size: 1.3em; font-weight:bold; color:var(--gold); margin-bottom:15px; border-bottom: 2px solid #eee; padding-bottom:5px;'>${selYear} ${t.poyaTitle}</div>`;
    
    const yearPoyas = poyaList.filter(p => p.d.startsWith(selYear));
    
  
    if (yearPoyas.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#888;">දත්ත නොමැත / No Data</div>`;
        return;
    }

    
    const nextPoya = yearPoyas.find(p => p.d >= today);
    const nextPoyaDate = nextPoya ? nextPoya.d : null;

    const earlyHemantha = yearPoyas.filter(p => p.r === "හේමන්ත" && new Date(p.d).getMonth() < 6);
    let startCount = 8 - earlyHemantha.length + 1;
    let poyaCounters = { "හේමන්ත": startCount, "ගිම්හාන": 1, "වස්සාන": 1, "නැවත හේමන්ත": 1 };
    let lastDisplayedSeason = "";

    const firstPoyaIndexOfYear = poyaList.findIndex(p => p.d.startsWith(selYear));
    let lastPoyaDateObj = null;

    if (firstPoyaIndexOfYear > 0) {
        lastPoyaDateObj = new Date(poyaList[firstPoyaIndexOfYear - 1].d);
    }

    yearPoyas.forEach(p => {
        let dt = new Date(p.d);
        let rawSeason = p.r;
        
        if (rawSeason === "හේමන්ත" && dt.getMonth() >= 10) rawSeason = "නැවත හේමන්ත";
        
        let countInSeason = poyaCounters[rawSeason];
        poyaCounters[rawSeason]++;

        let seasonKey = Object.keys(i18n.si.seasons).find(k => i18n.si.seasons[k] === rawSeason) || "Hemanta";
        let displaySeasonName = t.seasons[seasonKey];

        if (lastDisplayedSeason !== displaySeasonName) {
            lastDisplayedSeason = displaySeasonName;
            html += `<div class="season-banner">${displaySeasonName}</div>`;
        }

        let currentPoyaDateObj = new Date(p.d); 
        let poyaType = "";

        if (lastPoyaDateObj) {
            let diffInTime = currentPoyaDateObj.getTime() - lastPoyaDateObj.getTime();
            let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

            if (diffInDays === 14) {
                poyaType = (currentLang === 'si' ? "චාතුද්දසී" : "Cātuddasī");
            } else if (diffInDays === 15) {
                poyaType = (currentLang === 'si' ? "පණ්ණරසී" : "Paṇṇarasī");
            } else {
                poyaType = "Error"; 
                isError = true;
            }
        } else {
            poyaType = "Error"; 
            isError = true;
        }

        lastPoyaDateObj = currentPoyaDateObj;

        let poyaNameDisplay = p.t;
        if (currentLang !== 'si') {
            poyaNameDisplay = poyaNameDisplay
                .replace("පසළොස්වක", "Full Moon")
                .replace("අමාවක", " New Moon");
        }

        
        const isNextPoya = (p.d === nextPoyaDate);
        const isFullMoon = p.t.includes("පසළොස්වක");
        const isNewMoon = p.t.includes("අමාවක");

        let poyaClass = "";
        let scrollIdAttribute = ""; 
        if (isNextPoya) {
            poyaClass = "next-poya-bg"; 
            scrollIdAttribute = 'id="next-poya-item"';
        } else if (isFullMoon) {
            poyaClass = "full-moon-bg";
        } else if (isNewMoon) {
            poyaClass = "new-moon-bg";
        }
               
        const sinhalaMonths = [
            "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", 
            "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
        ];

        let displayDate = currentLang === 'si' 
            ? sinhalaMonths[dt.getMonth()] + " " + dt.getDate() 
            : dt.getDate() + " " + dt.toLocaleString('en-US', { month: 'long' });
       
        html += `
            <div ${scrollIdAttribute} class="list-item ${poyaClass}">
                <div style="display: flex; flex-direction: column;">
                    <span style="font-weight: bold; color: var(--text); font-size: 1.05em;">
                        ${countInSeason}. ${displayDate}
                    </span>
                    <span class="poya-name">
                        ${poyaNameDisplay}${t.poyaSuffix} 
                    </span>
                </div>
                <div style="text-align: right;">
                    <span class="poya-tag" style="background: ${poyaType.includes("චාතුද්දසී") || poyaType.includes("Cātuddasī") ? '#c62828' : 'var(--orange)'};">
                        ${poyaType}
                    </span>
                </div>
            </div>`;
    });
 

    container.innerHTML = html;
}

    function openVasModal() {
    closeMenu(); 
    document.getElementById("vasModal").style.display = "flex";
    const t = i18n[currentLang];
    const d = new Date(document.getElementById('inputDate').value);
    const y = d.getFullYear();
    ensurePoyaDataUpTo(y + 1);

    const yearPoyas = poyaList.filter(p => p.d.startsWith(y));
    const gim = yearPoyas.filter(p => p.r === "ගිම්හාන");
    const vas = yearPoyas.filter(p => p.r === "වස්සාන");
    
    let p1="-", p2="-", p3="-", p4="-";
    const opt = { year:'numeric', month:'numeric', day:'numeric' };
    
    if(gim.length > 0) { 
        let d1 = new Date(gim[gim.length-1].d); 
        d1.setDate(d1.getDate()+1); 
        p1 = d1.toLocaleDateString(currentLang==='si'?'si-LK':'en-US', opt); 
    }
    if(vas.length >= 6) p2 = new Date(vas[5].d).toLocaleDateString(currentLang==='si'?'si-LK':'en-US', opt);
    if(vas.length >= 2) { 
        let d3 = new Date(vas[1].d); 
        d3.setDate(d3.getDate()+1); 
        p3 = d3.toLocaleDateString(currentLang==='si'?'si-LK':'en-US', opt); 
    }
    if(vas.length >= 8) p4 = new Date(vas[7].d).toLocaleDateString(currentLang==='si'?'si-LK':'en-US', opt);

    
    document.getElementById("vasContent").innerHTML = `
        <div class="vas-card">
            <span class="vas-label">${t.vas1}</span>
            <span class="vas-date-badge">${p1}</span>
        </div>
        <div class="vas-card">
            <span class="vas-label">${t.vas2}</span>
            <span class="vas-date-badge">${p2}</span>
        </div>
        <div class="vas-card">
            <span class="vas-label">${t.vas3}</span>
            <span class="vas-date-badge">${p3}</span>
        </div>
        <div class="vas-card">
            <span class="vas-label">${t.vas4}</span>
            <span class="vas-date-badge">${p4}</span>
        </div>
    `;
}

function calculateAll() {
    const t = i18n[currentLang];
    const ds = document.getElementById('inputDate').value;
    if (!ds) return;
    
    const d = new Date(ds); 
    d.setHours(0,0,0,0);
    const time = d.getTime(); 
    const y = d.getFullYear();
    ensurePoyaDataUpTo(y + 1);

    const vD = new Date(vesakDates[y] || `${y}-05-01`).getTime();
    const bY = (time <= vD) ? (y + 543) : (y + 544);

    const iT = _pLowerBound(p => new Date(p.d).getTime() >= time);
    const lastFullMoon = _pLastBefore(iT, p => p.t === "පසළොස්වක");
    let tithi = lastFullMoon ? Math.round((time - new Date(lastFullMoon.d).getTime()) / 86400000) : 1;
    if(tithi === 0) tithi = 1;

    const nextA = _pFirstFrom(iT, p => p.t === "අමාවක");
    const nextF = _pFirstFrom(iT, p => p.t === "පසළොස්වක");
    let paksha = (nextA && (!nextF || new Date(nextA.d).getTime() <= new Date(nextF.d).getTime())) ? t.paksha.Kanha : t.paksha.Sukka;

    const lastV = time <= vD ? y-1 : y;
    const lastVD = new Date(vesakDates[lastV]).getTime();
    const nextVD = new Date(vesakDates[lastV+1]).getTime();
    const totM = Math.round((nextVD - lastVD) / 2551442400);

    
    const nextFT = _pFirstFrom(iT, p => p.t === "පසළොස්වක");
    let bM = nextFT ? Math.round((new Date(nextFT.d).getTime() - lastVD) / 2551442400) : 1;
    bM = (bM <= 0) ? totM : (bM > totM ? totM : bM);

    const nextP = poyaList[iT];

    const _iD = _pLowerBound(p => p.d >= ds);
    const todayP = (poyaList[_iD] && poyaList[_iD].d === ds) ? poyaList[_iD] : undefined;
    let poyaName = "";
    if (todayP) {
        if (currentLang === 'en') {
            poyaName = (todayP.t === "පසළොස්වක") ? "Full Moon" : "Amāvaka";
        } else {
            poyaName = todayP.t;
        }
    }
    document.getElementById('poyaStatus').innerText = poyaName ? poyaName + t.poyaSuffix : "";

    const monthMap = {
        "මාඝ": "Māgha", "ඵග්ගුන": "Phagguna", "චිත්ත": "Citta",
        "අධිවේසාඛ": "Adhivesākha", "වේසාඛ": "Vesākha", "ජෙට්ඨ": "Jeṭṭha",
        "ආසාළ්හ": "Āsāḷha", "සාවන": "Sāvana", "පොට්ඨපාද": "Poṭṭhapāda",
        "අස්සයුජ": "Assayuja", "කත්තික": "Kattika", "මාඝසිර": "Māghasira", "ඵුස්ස": "Phussa"
    };

  
    const nextSeasonEntry = poyaList[iT];
    const rawS = nextSeasonEntry ? nextSeasonEntry.r : "හේමන්ත";
    
    const seasonKey = Object.keys(i18n.si.seasons).find(k => i18n.si.seasons[k] === rawS);
    const displayS = t.seasons[seasonKey];

    
    const animal = t.animals[bY % 12];

    const sMonth = nextP ? nextP.m : "වේසාඛ"; 
    const displayMonth = (currentLang === 'en') ? (monthMap[sMonth] || sMonth) : sMonth;

    let paliIndex = tithi; 
    let finalPaksha = paksha; 

    const lastAmavaka = _pLastBefore(iT, p => p.t === "අමාවක");

    if (finalPaksha === t.paksha.Sukka && lastAmavaka) {
        const amavakaDate = new Date(lastAmavaka.d);
        amavakaDate.setHours(0,0,0,0);
        
        const diffTime = d.getTime() - amavakaDate.getTime();
        paliIndex = Math.round(diffTime / (1000 * 60 * 60 * 24));
    }

    if (paliIndex <= 0) paliIndex = 1;

        const tithiWord = currentLang === 'si' 
        ? (tithiPaliS[paliIndex] || "පණ්ණරසමං") 
        : (tithiPaliE[paliIndex] || "Paṇṇarasamaṃ");

    const weekDay = t.week[d.getDay()];

    
    document.getElementById('bYear').innerText = bY;
    document.getElementById('bMonth').innerText = bM;
    document.getElementById('bDay').innerText = tithi;
    document.getElementById('paliDisplay').innerText = t.paliTemplate(animal, displayS, displayMonth, finalPaksha, tithiWord, weekDay);

    const _iN = _pLowerBound(p => { let pDate = new Date(p.d); pDate.setHours(0,0,0,0); return pDate >= d; });
    let nextPoya = poyaList[_iN];

    
    let nextFullMoon = _pFirstFrom(_iN, p => p.t.includes("පසළොස්වක"));

    let currentAvasitthaD = 0;
    let poyaMessage = "";
    let isPoyaDay = false;
    let statusAvasitthaD = 0; 

    if (nextPoya) {
        let targetD = new Date(nextPoya.d);
        targetD.setHours(0,0,0,0);
        statusAvasitthaD = Math.round((targetD.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));

if (statusAvasitthaD === 0) {
    isPoyaDay = true;
    // ප්‍රධාන කවුන්ටරයේ පෝය දිනයේදී නිශ්චිත තිථි නාමය (අමාවක/පසළොස්වක) වෙනුවට
    // "උපෝසථ දිනය" ලෙසම පෙන්වයි - දෙකේදීම (අමාවක සහ පසළොස්වක) එකම ලෙබලය.
    poyaMessage = (currentLang === 'si') ? "උපෝසථ දිනය" : "Uposatha Day";
} else {
    if (currentLang === 'si') {
        
        if (statusAvasitthaD === 1) {
            poyaMessage = "හෙට උපෝසථ දිනය";
        } else {
            poyaMessage = `උපෝසථයට තව දින - ${statusAvasitthaD}`;
        }
    } else {
        
        let poyaNameEN = nextPoya.t.replace("පසළොස්වක", "Full Moon").replace("අමාවක", "New Moon");
        if (statusAvasitthaD === 1) {
            poyaMessage = `Tomorrow is ${poyaNameEN} Uposatha Day`;
        } else {
            poyaMessage = `${statusAvasitthaD} days to ${poyaNameEN} Uposatha`;
        }
    }
}

}
if (nextFullMoon) {
        let fullMoonD = new Date(nextFullMoon.d);
        fullMoonD.setHours(0,0,0,0);
        currentAvasitthaD = Math.round((fullMoonD.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    }

    const poyaDisplayElement = document.getElementById("poyaStatus"); 
    if (poyaDisplayElement) {
        if (isPoyaDay) {
            poyaDisplayElement.innerText = poyaMessage; 
            poyaDisplayElement.style.setProperty('color', '#c62828', 'important');
        } else {
            poyaDisplayElement.innerText = poyaMessage; 
            if (statusAvasitthaD > 0) {
                poyaDisplayElement.style.setProperty('color', '#2dbd6e', 'important');
            } else {
                poyaDisplayElement.style.setProperty('color', 'var(--text)', 'important');
            }
        }
        poyaDisplayElement.style.fontWeight = "bold";
    }

    
    document.getElementById('atikkantaY').innerText = bY - 1;
    document.getElementById('atikkantaM').innerText = bM - 1;
    document.getElementById('atikkantaD').innerText = tithi - 1;

    document.getElementById('avasitthaY').innerText = 5000 - bY;
    document.getElementById('avasitthaM').innerText = totM - bM;
    document.getElementById('avasitthaD').innerText = currentAvasitthaD;

    // ---- සජ්ඣායනය (buddha-recitation.js) සඳහා ගණනය කළ අගයන් බෙදා ගැනීම ----
    window.BuddhaState = {
        dateStr: ds, weekIdx: d.getDay(),
        bY: bY, bM: bM, bD: tithi, totM: totM,
        atk: { y: bY - 1, m: bM - 1, d: tithi - 1 },
        avs: { y: 5000 - bY, m: totM - bM, d: currentAvasitthaD },
        animalIdx: bY % 12, season: seasonKey, monthSi: sMonth,
        paksha: (finalPaksha === t.paksha.Sukka) ? 'sukka' : 'kanha',
        tithi: Math.max(1, Math.min(15, paliIndex)), isPoya: isPoyaDay
    };

    document.getElementById('ui-label-atikkanta').innerText = t.atikkanta;
    document.getElementById('ui-label-avasittha').innerText = t.avasittha;
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    
    if (typeof updateUI === "function") {
        updateUI(); 
    }
}

function updateDarkModeBtnText() {
    const btn = document.getElementById('ui-dark-lbl');
    if (btn) {
        const t = i18n[currentLang];
        const isDark = document.body.classList.contains('dark-mode');
        btn.innerText = isDark ? t.lightLbl : t.darkLbl;
    }
}
let userLatitude = null;
let userLongitude = null;

function isEnglish() {
    return typeof currentLang !== 'undefined' && currentLang === 'en';
}

document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem('selectedCalendarDate');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    if (typeof updateDarkModeBtnText === "function") updateDarkModeBtnText();
    if (typeof updateUI === "function") updateUI();
    
    const sunDateInput = document.getElementById('sunDateInput');
    if (sunDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        sunDateInput.value = `${yyyy}-${mm}-${dd}`;

        sunDateInput.addEventListener('change', function() {
            localStorage.setItem('selectedMoonPageDate', sunDateInput.value); 
            updateSunTimes(); 
        });
    }
    
    
    checkAndLoadSavedLocation();
    resetToToday();

  
    if (typeof updateSinhalaAstroDate === "function") {
        updateSinhalaAstroDate();
    }
}); 
function checkAndLoadSavedLocation() {
    const statusText = document.getElementById('locationStatus');
    
    const savedLat = localStorage.getItem('userLat');
    const savedLng = localStorage.getItem('userLng');
    const savedLocName = localStorage.getItem('userLocName');

    if (savedLat && savedLng) {        
        userLatitude = parseFloat(savedLat);
        userLongitude = parseFloat(savedLng);

        if (statusText) {
            const latFmt = userLatitude.toFixed(4);
            const lngFmt = userLongitude.toFixed(4);
            
            if (savedLocName) {
                statusText.innerHTML = isEnglish()
                    ? `📍 Location: <b>${savedLocName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`
                    : `📍 ස්ථානය: <b>${savedLocName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`;
            } else {
                statusText.innerHTML = isEnglish()
                    ? `📍 Location: <b>${latFmt}°, ${lngFmt}°</b>`
                    : `📍 ස්ථානය: <b>${latFmt}°, ${lngFmt}°</b>`;
            }
        }

        if (typeof updateSunTimes === "function") updateSunTimes();
    } else {
        if (statusText) {
            statusText.innerText = isEnglish()
                ? "ℹ️ Please click 'Get My Location' button."
                : "ℹ️ කරුණාකර 'Get My Location' බොත්තම ඔබන්න.";
        }
    }
}

function fetchLocationAndSunData() {
    const statusText = document.getElementById('locationStatus');
    const btn = document.getElementById('getLocationBtn');
    
    if (statusText) {
        statusText.innerText = isEnglish() 
            ? "📍 Detecting location (Please wait)..." 
            : "📍 ස්ථානය සොයමින් පවතී (කරුණාකර රැඳී සිටින්න)...";
    }
        
    if(btn) btn.disabled = true;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                userLatitude = position.coords.latitude;
                userLongitude = position.coords.longitude;

                localStorage.setItem('userLat', userLatitude);
                localStorage.setItem('userLng', userLongitude);
                
                if (navigator.onLine) {
                    if (statusText) {
                        statusText.innerText = isEnglish() 
                            ? `📍 Locating: ${userLatitude.toFixed(4)}°, ${userLongitude.toFixed(4)}...`
                            : `📍 ස්ථානය සොයමින්: ${userLatitude.toFixed(4)}°, ${userLongitude.toFixed(4)}...`;
                    }
                    
                    try {
                        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userLatitude}&longitude=${userLongitude}&localityLanguage=${currentLang}`);
                        const data = await response.json();

                        const locationName = data.city || data.locality || data.principalSubdivision || "Unknown";
                        localStorage.setItem('userLocName', locationName);

                        const latFmt = userLatitude.toFixed(4);
                        const lngFmt = userLongitude.toFixed(4);
                        if (statusText) {
                            statusText.innerHTML = isEnglish()
                                ? `📍 Location: <b>${locationName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`
                                : `📍 ස්ථානය: <b>${locationName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`;
                        }

                    } catch (error) {
                        showCoordinatesOnly(statusText);
                    }
                } else {
                    showCoordinatesOnly(statusText);
                }

                if(btn) btn.disabled = false;
                if (typeof updateSunTimes === "function") updateSunTimes();
            },
            (error) => {
                if(btn) btn.disabled = false;
                if (!statusText) return;

                if (isEnglish()) {
                    switch(error.code) {
                        case error.PERMISSION_DENIED: statusText.innerText = " Permission Denied. Please enable Location Access."; break;
                        case error.POSITION_UNAVAILABLE: statusText.innerText = " Device GPS is turned off."; break;
                        case error.TIMEOUT: statusText.innerText = "⏳ Location request timed out. Please try again."; break;
                        default: statusText.innerText = " Unable to retrieve location."; break;
                    }
                } else {
                    switch(error.code) {
                        case error.PERMISSION_DENIED: statusText.innerText = " අවසර නැත. කරුණාකර ලොකේෂන් අවසර ලබා දෙන්න."; break;
                        case error.POSITION_UNAVAILABLE: statusText.innerText = " දුරකථනයේ GPS ක්‍රියා විරහිත කර ඇත."; break;
                        case error.TIMEOUT: statusText.innerText = "⏳ කාලය ඉක්මවා ගියා. නැවත උත්සාහ කරන්න."; break;
                        default: statusText.innerText = " ස්ථානය ලබා ගැනීමට නොහැකි විය."; break;
                    }
                }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        if(btn) btn.disabled = false;
        if (statusText) {
            statusText.innerText = isEnglish() ? " GPS not supported." : " GPS පහසුකමට සහාය නොදක්වයි.";
        }
    }
}

function showCoordinatesOnly(statusText) {
    if (!statusText) return;
    const lat = userLatitude || localStorage.getItem('userLat');
    const lng = userLongitude || localStorage.getItem('userLng');
    
    if (lat && lng) {
        const latFmt = parseFloat(lat).toFixed(4);
        const lngFmt = parseFloat(lng).toFixed(4);
        statusText.innerHTML = isEnglish()
            ? `📍 Location: <b>${latFmt}°, ${lngFmt}°</b>`
            : `📍 ස්ථානය: <b>${latFmt}°, ${lngFmt}°</b>`;
    } else {
        statusText.innerText = isEnglish()
            ? "ℹ️ Please click 'Get My Location' button."
            : "ℹ️ කරුණාකර 'Get My Location' බොත්තම ඔබන්න.";
    }
}

// -------------------------------------------------------------------
// විශේෂ තිථි 4 (පුර අටවක/පසළොස්වක/අව අටවක/අමාවක) ආරම්භය/අවසානය
// තෝරාගත් දිනය තුළ වැටේද කියා සොයාගැනීමට. Astronomy engine එකේ මෙය
// සෘජුවම කරන function එකක් නැති නිසා (SearchSunMoonAngle නොමැත),
// Astronomy.MoonPhase() එකෙන්ම manual bisection search එකක් හදාගෙන ඇත.
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// සෑම දිනකටම නොව - "පුර අටවක" (84°), "පසළොස්වක" (168°→180°), "අව අටවක"
// (264°→276°), "අමාවක" (348°→360°) යන විශේෂ තිථි 4 ආරම්භ/අවසන් වන මොහොත
// තෝරාගත් දිනය (midnight-to-midnight) තුළ වැටේද කියා පමණක් සොයාගනී.
// එම විශේෂ තිථියක ආරම්භය/අවසානය සමහරවිට කලින්/පසු දිනයට වැටිය හැකි නිසා,
// එදිනට අදාළ කොටස පමණක් (ලබන හෝ ගෙවෙන) මෙයින් ස්වයංක්‍රීයව හඳුනාගැනේ.
// -------------------------------------------------------------------
const SPECIAL_TITHI_BEGIN_ANGLES = [84, 168, 264, 348];  // පුර අටවක, පසළොස්වක, අව අටවක, අමාවක ආරම්භය
const SPECIAL_TITHI_END_ANGLES = [96, 180, 276, 0];      // ඒවායේම අවසානය (0 = 360°)

function findCrossingBetween(target, sampleA, sampleB) {
    let lo = sampleA.d, hi = sampleB.d;
    let baseline = sampleA.unwrapped;
    function unwrappedAngle(d) {
        let ang = Astronomy.MoonPhase(Astronomy.MakeTime(d));
        while (ang - baseline > 180) ang -= 360;
        while (ang - baseline < -180) ang += 360;
        return ang;
    }
    let fLo = unwrappedAngle(lo) - target;
    for (let k = 0; k < 40; k++) {
        let mid = new Date((lo.getTime() + hi.getTime()) / 2);
        let fMid = unwrappedAngle(mid) - target;
        if ((fMid < 0) === (fLo < 0)) { lo = mid; fLo = fMid; } else { hi = mid; }
    }
    return new Date((lo.getTime() + hi.getTime()) / 2);
}

function findSpecialTithiEventsForDay(dayStart) {
    function rawAngle(d) { return Astronomy.MoonPhase(Astronomy.MakeTime(d)); }
    const dayEnd = new Date(dayStart.getTime() + 24 * 3600000);
    const winStart = new Date(dayStart.getTime() - 8 * 3600000);
    const winEnd = new Date(dayEnd.getTime() + 8 * 3600000);

    const samples = [];
    for (let t = winStart.getTime(); t <= winEnd.getTime(); t += 2 * 3600000) {
        samples.push({ d: new Date(t), raw: null });
    }
    samples.forEach(s => { s.raw = rawAngle(s.d); });

    let unwrapped = [samples[0].raw];
    for (let i = 1; i < samples.length; i++) {
        let prev = unwrapped[i - 1];
        let cur = samples[i].raw;
        while (cur - prev > 180) cur -= 360;
        while (cur - prev < -180) cur += 360;
        unwrapped.push(cur);
    }
    samples.forEach((s, i) => { s.unwrapped = unwrapped[i]; });

    let poyaStart = null, poyaEnd = null;

    for (let i = 1; i < samples.length; i++) {
        const lo = samples[i - 1].unwrapped, hi = samples[i].unwrapped;
        const kLo = Math.ceil(lo / 12), kHi = Math.floor(hi / 12);
        for (let k = kLo; k <= kHi; k++) {
            const target = k * 12;
            if (target < lo || target > hi) continue;
            const angleMod = ((k % 30) + 30) % 30 * 12; // 0..348 exact multiple of 12
            const isBegin = SPECIAL_TITHI_BEGIN_ANGLES.includes(angleMod);
            const isEnd = SPECIAL_TITHI_END_ANGLES.includes(angleMod);
            if (!isBegin && !isEnd) continue;

            const t = findCrossingBetween(target, samples[i - 1], samples[i]);
            if (t < dayStart || t >= dayEnd) continue;

            if (isBegin) poyaStart = t;
            if (isEnd) poyaEnd = t;
        }
    }

    return { beginTime: poyaStart, endTime: poyaEnd };
}

function updateSunTimes() {
    const dateInput = document.getElementById('sunDateInput');
    const statusText = document.getElementById('locationStatus');

    if (dateInput && !dateInput.value) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
    
    if (!dateInput || !dateInput.value) return;

    const engMode = isEnglish();
    if (document.getElementById('lblDawn')) document.getElementById('lblDawn').innerText = engMode ? "Dawn" : "අරුණෝදය";
    if (document.getElementById('lblSunrise')) document.getElementById('lblSunrise').innerText = engMode ? "Sunrise" : "ඉර උදාව";
    if (document.getElementById('lblNoon')) document.getElementById('lblNoon').innerText = engMode ? "Noon" : "මධ්‍යහ්නය";
    if (document.getElementById('lblSunset')) document.getElementById('lblSunset').innerText = engMode ? "Sunset" : "ඉර බැසීම";
    if (document.getElementById('lblMoonrise')) document.getElementById('lblMoonrise').innerText = engMode ? "Moonrise" : "සඳ උදාව";
    if (document.getElementById('lblMoonset')) document.getElementById('lblMoonset').innerText = engMode ? "Moonset" : "සඳ බැසීම";
    if (document.getElementById('lblPoyaBegin')) document.getElementById('lblPoyaBegin').innerText = engMode ? "Poya Begins" : "පෝය ලබන වේලාව";
    if (document.getElementById('lblPoyaEnd')) document.getElementById('lblPoyaEnd').innerText = engMode ? "Poya Ends" : "පෝය ගෙවෙන වේලාව";
    if (document.getElementById('lblAstroTitle')) document.getElementById('lblAstroTitle').innerText = engMode ? "Astronomical Position, Tithi & Timings of the Moon" : "තාරකා විද්‍යානුකූලව සඳෙහි පිහිටීම, තිථිය සහ වෙලාවන්";

    const lat = userLatitude || localStorage.getItem('userLat');
    const lng = userLongitude || localStorage.getItem('userLng');

    if (!lat || !lng) {
        if (statusText) {
            statusText.innerText = engMode 
                ? "Please click 'Get My Location' button first." 
                : "කරුණාකර මුලින්ම 'Get My Location' බොත්තම ඔබන්න.";
        }
        return;
    }

    const selectedDate = new Date(dateInput.value);
    selectedDate.setHours(12,0,0,0); 

    let sunrise = null, solarNoon = null, sunset = null;
    let moonTimes = { rise: null, set: null };
    let fraction = 0;
    let phase = 0;
    let phaseAngle = 0;
    let stableTithiIndex = null; // කලින්/පසු දින "ක්ෂය" (kshaya) එකකින් වැදගත් තිථියක් (14/29 - පසළොස්වක/අමාවක) නොපෙනී යාම වළක්වයි

    try {
        if (typeof Astronomy !== 'undefined') {
            const observer = new Astronomy.Observer(parseFloat(lat), parseFloat(lng), 0);
            
            const startOfDay = new Date(selectedDate);
            startOfDay.setHours(0, 0, 0, 0);
            const astroStartOfDay = Astronomy.MakeTime(startOfDay);

            const sr = Astronomy.SearchRiseSet('Sun', observer, 1, astroStartOfDay, 1);
            sunrise = sr ? (sr.date || sr.time?.date || null) : null;

            const ss = Astronomy.SearchRiseSet('Sun', observer, -1, astroStartOfDay, 1);
            sunset = ss ? (ss.date || ss.time?.date || null) : null;

            if (sunrise && sunset) {
                solarNoon = new Date((sunrise.getTime() + sunset.getTime()) / 2);
            } else {
                const sn = Astronomy.SearchTransit('Sun', observer, astroStartOfDay);
                solarNoon = sn ? (sn.date || sn.time?.date || null) : null;
            }

            const mr = Astronomy.SearchRiseSet('Moon', observer, 1, astroStartOfDay, 1);
            moonTimes.rise = mr ? (mr.date || mr.time?.date || null) : null;

            const ms = Astronomy.SearchRiseSet('Moon', observer, -1, astroStartOfDay, 1);
            moonTimes.set = ms ? (ms.date || ms.time?.date || null) : null;

            // -------------------------------------------------------------
            // තිථි නාමය (phaseName) සදහා ලංකා ලිත් ක්‍රමයේම reference moment -
            // "සවස 6" (Sri Lanka Standard Time, viewer කොහේ සිටියත් සැමවිටම
            // ස්ථිරයි - මෙය location-dependent sunrise/sunset වගේ දෙයක් නොවෙයි,
            // Sri Lanka civil convention එකක් නිසා). තෝරාගත් දිනයේම YYYY-MM-DD
            // අගයෙන්ම ගණනය කරයි - browser එකේ local timezone එකට කිසිසේත්
            // සම්බන්ධ නැත, ඒ නිසා viewer කොහේ සිටියත් එකම ප්‍රතිඵලයක් ලැබේ.
            // -------------------------------------------------------------
            const SLST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
            function sixPmSLST(ymd) {
                const [yy, mm, dd] = ymd.split('-').map(Number);
                // 18:00 SLST (UTC+5:30) = 12:30 UTC ​එම දිනයේම
                return new Date(Date.UTC(yy, mm - 1, dd, 18, 0, 0) - SLST_OFFSET_MS);
            }
            const selectedYMD = dateInput.value;
            const sixPmToday = sixPmSLST(selectedYMD);
            const tomorrowYMD = (() => {
                const [yy, mm, dd] = selectedYMD.split('-').map(Number);
                const t = new Date(Date.UTC(yy, mm - 1, dd + 1));
                return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, '0')}-${String(t.getUTCDate()).padStart(2, '0')}`;
            })();
            const sixPmTomorrow = sixPmSLST(tomorrowYMD);

            const astroTithiAnchor = Astronomy.MakeTime(sixPmToday);

            phaseAngle = Astronomy.MoonPhase(astroTithiAnchor);
            phase = phaseAngle / 360.0; 
            
            fraction = (1 - Math.cos(phaseAngle * Math.PI / 180)) / 2;

            // -------------------------------------------------------------
            // ස්ථායීතා පරීක්ෂාව: "ක්ෂය" (kshaya) එකක් නිසා පසළොස්වක (14) හෝ
            // අමාවක (29) - වැදගත්ම තිථි දෙකම - කිසිම දිනකට නොපෙනී යාම වළක්වයි.
            // එදින (සවස 6 සිට ඊළඟ දිනයේ සවස 6 දක්වා) තුළදී 180° (පසළොස්වක)
            // හෝ 0°/360° (අමාවක) මොහොතම සැබවින්ම සිදුවී ඇත්නම්, 6pm-sample
            // එකෙන් ලැබෙන idx එක කුමක් වුවත්, එදිනටම පසළොස්වක/අමාවක නාමයම
            // ස්ථිරව යොදයි.
            // -------------------------------------------------------------
            let baseIdx = Math.floor(((phaseAngle % 360) + 360) % 360 / 12);

            const fmEvent = Astronomy.SearchMoonPhase(180, Astronomy.MakeTime(sixPmToday), 2);
            const fmDate = fmEvent ? fmEvent.date : null;
            if (fmDate && fmDate >= sixPmToday && fmDate < sixPmTomorrow) {
                baseIdx = 14; // පසළොස්වක
            }

            const nmEvent = Astronomy.SearchMoonPhase(0, Astronomy.MakeTime(sixPmToday), 2);
            const nmDate = nmEvent ? nmEvent.date : null;
            if (nmDate && nmDate >= sixPmToday && nmDate < sixPmTomorrow) {
                baseIdx = 29; // අමාවක
            }

            stableTithiIndex = baseIdx;
        }
    } catch (e) {
        console.error("Astronomy Engine error:", e);
    }
    
    const arunodaya = sunrise ? new Date(sunrise.getTime() - (30 * 60000)) : null;

    const formatTime = (dateObj) => {
        if(!dateObj || isNaN(dateObj.getTime())) {
            return engMode ? "No Rise/Set" : "නොමැත";
        }
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    };

    if (document.getElementById('sunDawn')) document.getElementById('sunDawn').innerText = formatTime(arunodaya);
    if (document.getElementById('sunSunrise')) document.getElementById('sunSunrise').innerText = formatTime(sunrise);
    if (document.getElementById('sunNoon')) document.getElementById('sunNoon').innerText = formatTime(solarNoon);
    if (document.getElementById('sunSunset')) document.getElementById('sunSunset').innerText = formatTime(sunset);
    if (document.getElementById('sunMoonrise')) document.getElementById('sunMoonrise').innerText = formatTime(moonTimes.rise);
    if (document.getElementById('sunMoonset')) document.getElementById('sunMoonset').innerText = formatTime(moonTimes.set);

    // ==========================================================
    // POYA BEGIN & END TIME CALCULATION (DYNAMIC)
    // පුර අටවක/පසළොස්වක/අව අටවක/අමාවක යන විශේෂ තිථි 4 ට පමණයි මෙය පෙන්වන්නේ.
    // ඒවායේ ආරම්භය/අවසානය තෝරාගත් දිනයේ (midnight-to-midnight) වැටේද කියා
    // astronomy engine එකෙන්ම සොයාගනී (poyaList එක මින් නොබලයි). විශේෂ
    // තිථියක ආරම්භය/අවසානය සමහරවිට කලින්/පසු දිනයට වැටිය හැකි නිසා, එදිනට
    // අදාළ කොටස (ආරම්භය හෝ අවසානය) පමණක් පෙන්වයි - අනෙක් දිනට අයත් කොටස hide කරයි.
    // ==========================================================
    try {
        const beginTimeEl = document.getElementById('sunPoyaBegin');
        const endTimeEl = document.getElementById('sunPoyaEnd');
        const beginLineWrap = document.getElementById('poyaBeginLine');
        const endLineWrap = document.getElementById('poyaEndLine');

        let poyaStart = null, poyaEnd = null;

        if (typeof Astronomy !== 'undefined') {
            const dayStart = new Date(selectedDate);
            dayStart.setHours(0, 0, 0, 0);
            const events = findSpecialTithiEventsForDay(dayStart);
            poyaStart = events.beginTime;
            poyaEnd = events.endTime;
        }

        if (poyaStart && beginTimeEl) {
            beginTimeEl.innerText = formatTime(poyaStart);
            if (beginLineWrap) beginLineWrap.style.display = '';
        } else if (beginLineWrap) {
            beginLineWrap.style.display = 'none';
        }

        if (poyaEnd && endTimeEl) {
            endTimeEl.innerText = formatTime(poyaEnd);
            if (endLineWrap) endLineWrap.style.display = '';
        } else if (endLineWrap) {
            endLineWrap.style.display = 'none';
        }
    } catch (poyaTimeErr) {
        console.error('Poya begin/end time error:', poyaTimeErr);
    }

    // ==========================================================
    // DYNAMIC TITHI & PHASE NAME GENERATION
    // ==========================================================
    let phaseName = "";
    const tithiSukha = ["පුර පෑලවිය", "පුර දියවක", "පුර තියවක", "පුර ජලවක", "පුර විසේනිය", "පුර සැටවක", "පුර සතවක", "පුර අටවක", "පුර නවවක", "පුර දසවක", "පුර එකොළොස්වක", "පුර දොළොස්වක", "පුර තෙළෙස්වක", "පුර තුදුස්වක", "පුර පසළොස්වක පෝය"];
    const tithiKanha = ["අව පෑලවිය", "අව දියවක", "අව තියවක", "අව ජලවක", "අව විසේනිය", "අව සැටවක", "අව සතවක", "අව අටවක", "අව නවවක", "අව දසවක", "අව එකොළොස්වක", "අව දොළොස්වක", "අව තෙළෙස්වක", "අව තුදුස්වක", "අමාවක පෝය"];

    let tithiIndex = (stableTithiIndex !== null) ? stableTithiIndex : Math.floor(phaseAngle / 12);
    
    if (tithiIndex < 15) {
        phaseName = engMode ? (tithiIndex === 14 ? "Full Moon" : `Waxing ${tithiIndex + 1}`) : tithiSukha[tithiIndex];
    } else {
        let waningIndex = tithiIndex - 15;
        phaseName = engMode ? (waningIndex === 14 ? "New Moon" : `Waning ${waningIndex + 1}`) : tithiKanha[waningIndex];
    }

    // ==========================================================
    // ASTRO CARD SUBTITLE: "[මාසය] මස [තිථිය] තිථිය ලත් [දිනය] දින"
    // ==========================================================
    const astroSubtitleEl = document.getElementById('sunModalTithiLabel');
    if (astroSubtitleEl) {
        if (engMode) {
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            astroSubtitleEl.innerText = selectedDate.toLocaleDateString('en-US', dateOptions) + (phaseName ? `, ${phaseName}` : '');
        } else {
            const traditionalMonths = [
                "දුරුතු", "නවම්", "මැදින්", "බක්", "වෙසක්", "පොසොන්",
                "ඇසළ", "නිකිණි", "බිනර", "වප්", "ඉල්", "උඳුවප්"
            ];
            const monthName = traditionalMonths[selectedDate.getMonth()];
            const dayOfWeekIndex = selectedDate.getDay();
            const sinhalaDays = ["රවි දින", "සඳු දින", "කුජ දින", "බුධ දින", "ගුරු දින", "කිවි දින", "ශනි දින"];
            const sinhalaDayName = sinhalaDays[dayOfWeekIndex];

            let tithiFormatted = '';
            if (phaseName) {
                tithiFormatted = `${phaseName.replace("පෝය", "").trim()} තිථිය ලත්`;
            }
            astroSubtitleEl.innerText = tithiFormatted
                ? `${monthName} මස ${tithiFormatted} ${sinhalaDayName}`
                : `${monthName} මස ${sinhalaDayName}`;
        }
    }

    // ==========================================================
    // MOON VISUAL RENDER (DOM Updates)
    // ==========================================================
    const moonVisual = document.getElementById('moonVisual');
    if (moonVisual) {
        moonVisual.style.boxShadow = `0 0 ${fraction * 20}px rgba(253, 224, 71, ${fraction * 0.6})`;
        moonVisual.style.position = 'relative';
        moonVisual.style.borderRadius = '50%';
        moonVisual.style.overflow = 'hidden'; 
        moonVisual.style.backgroundColor = '#222';
        moonVisual.innerHTML = ''; 

        if (fraction < 0.02) {
            moonVisual.style.boxShadow = 'none';
        } else if (fraction > 0.98) {
            moonVisual.style.backgroundColor = '#fde047';
        } else {
            const isWaxing = phase <= 0.5;
            const lightColor = '#fde047';
            const darkColor = '#222';            
            const baseHemisphere = isWaxing ? 'right: 0;' : 'left: 0;';
            const maskColor = fraction < 0.5 ? darkColor : lightColor;
            const scale = Math.abs(1 - (fraction * 2));

            moonVisual.innerHTML = `
                <div style="position: absolute; top: 0; ${baseHemisphere} width: 50%; height: 100%; background-color: ${lightColor};"></div>
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background-color: ${maskColor}; transform: scaleX(${scale});"></div>
            `;
        }
    }

    const percentage = Math.round(fraction * 100);
    const moonPhaseLabel = document.getElementById('moonPhaseLabel');
    if (moonPhaseLabel) moonPhaseLabel.innerText = phaseName;
    
    const moonIllumLabel = document.getElementById('moonIllumLabel');
    if (moonIllumLabel) moonIllumLabel.innerText = engMode ? `Illumination: ${percentage}%` : `දීප්තිය: ${percentage}%`;

    if (typeof updateSinhalaAstroDate === "function") {
        updateSinhalaAstroDate();
    }
}

function openSunModal() {
    const sunModal = document.getElementById("sunModal");
    if (sunModal) sunModal.style.display = "flex";
    const myDropdown = document.getElementById("myDropdown");
    if (myDropdown) myDropdown.style.display = "none";
    
    updateSunTimes();
}

function closeSunModal() {
    const sunModal = document.getElementById("sunModal");
    if (sunModal) sunModal.style.display = "none";
}

function updateDisplay() {
    let input = document.getElementById('inputDate').value;
    let dateText = document.getElementById('dateText');
    
    if (input) {
        let d = new Date(input);
        let year = d.getFullYear();
        let month = String(d.getMonth() + 1).padStart(2, '0');
        let day = String(d.getDate()).padStart(2, '0');
        
        if (dateText) {
            dateText.innerText = year + "-" + month + "-" + day;
        }
        
        localStorage.setItem('selectedCalendarDate', input);

        if (typeof updateMiniMoon === "function") {
            updateMiniMoon(d);
        }
    }
}

function resetToToday() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const today = y + "-" + m + "-" + d;

    const dateInput = document.getElementById("inputDate");
    if (dateInput) {
        localStorage.setItem('selectedCalendarDate', today);
        dateInput.value = today;
    } 

    if (typeof calculateAll === "function") calculateAll();
    if (typeof updateDisplay === "function") updateDisplay(); 
    
    if (typeof updateSinhalaAstroDate === "function") {
        updateSinhalaAstroDate();
    }
} 

const WHEEL_MIN_YEAR = 1900;
const WHEEL_MAX_YEAR = 3000;
const WHEEL_ROW_H = 44;
const WHEEL_CYCLES = 9;
const WHEEL_MID_CYCLE = 4;
let wheelTargetInputId = null;
let wheelScrollTimers = { year: null, month: null, date: null };
let wheelCurrentMaxDay = 31;

function wheelMonthNames() {
    return (typeof currentLang !== 'undefined' && currentLang === 'si')
        ? ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"]
        : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}

function daysInMonth(year, monthIndex0) {
    return new Date(year, monthIndex0 + 1, 0).getDate();
}

function buildWheelColumnBounded(colEl, values, selectedIndex, key) {
    colEl.innerHTML = values.map((v, i) =>
        `<div class="wheel-item${i === selectedIndex ? ' wheel-selected' : ''}" data-idx="${i}">${v}</div>`
    ).join('');

    colEl.scrollTop = selectedIndex * WHEEL_ROW_H;

    colEl.onscroll = function () {
        clearTimeout(wheelScrollTimers[key]);
        wheelScrollTimers[key] = setTimeout(function () {
            const idx = Math.round(colEl.scrollTop / WHEEL_ROW_H);
            highlightWheelSelection(colEl, idx);
            refreshWheelDateColumn();
        }, 90);
    };
}

function buildWheelColumnCircular(colEl, values, selectedIndex, key) {
    const n = values.length;
    let html = '';
    for (let c = 0; c < WHEEL_CYCLES; c++) {
        for (let i = 0; i < n; i++) {
            html += `<div class="wheel-item" data-idx="${i}">${values[i]}</div>`;
        }
    }
    colEl.innerHTML = html;

    const midStart = WHEEL_MID_CYCLE * n;
    colEl.scrollTop = (midStart + selectedIndex) * WHEEL_ROW_H;
    highlightWheelSelection(colEl, midStart + selectedIndex);

    colEl.onscroll = function () {
        clearTimeout(wheelScrollTimers[key]);
        wheelScrollTimers[key] = setTimeout(function () {
            let raw = Math.round(colEl.scrollTop / WHEEL_ROW_H);
            const baseIdx = ((raw % n) + n) % n;
            const currentCycle = Math.floor(raw / n);


            if (currentCycle <= 0 || currentCycle >= WHEEL_CYCLES - 1) {
                raw = midStart + baseIdx;
                colEl.scrollTop = raw * WHEEL_ROW_H;
            }

            highlightWheelSelection(colEl, raw);
            if (key === 'month') refreshWheelDateColumn();
        }, 90);
    };
}

function highlightWheelSelection(colEl, idx) {
    const items = colEl.querySelectorAll('.wheel-item');
    items.forEach((it, i) => it.classList.toggle('wheel-selected', i === idx));
}

function getWheelValueIndex(colEl, cycleLength) {
    const raw = Math.round(colEl.scrollTop / WHEEL_ROW_H);
    if (!cycleLength) return raw; // bounded column (year) - raw එකම index
    return ((raw % cycleLength) + cycleLength) % cycleLength;
}

function refreshWheelDateColumn() {
    const yearCol = document.getElementById('wheelYear');
    const monthCol = document.getElementById('wheelMonth');
    const dateCol = document.getElementById('wheelDate');

    const year = WHEEL_MIN_YEAR + getWheelValueIndex(yearCol, null);
    const monthIdx = getWheelValueIndex(monthCol, 12);
    const maxDay = daysInMonth(year, monthIdx);

    const prevDay = getWheelValueIndex(dateCol, wheelCurrentMaxDay) + 1;
    const newSelectedDay = Math.min(prevDay, maxDay);
    wheelCurrentMaxDay = maxDay;

    const dayValues = [];
    for (let d = 1; d <= maxDay; d++) dayValues.push(d);
    buildWheelColumnCircular(dateCol, dayValues, newSelectedDay - 1, 'date');
}

function openWheelPicker(inputId) {
    wheelTargetInputId = inputId;
    const inputEl = document.getElementById(inputId);
    
    let baseDate = new Date();

    if (inputEl && inputEl.value) {
        const parsedDate = new Date(inputEl.value + 'T00:00:00');
        if (!isNaN(parsedDate.getTime())) {
            baseDate = parsedDate;
        }
    }

    const selYear = baseDate.getFullYear();
    const selMonth = baseDate.getMonth();
    const selDay = baseDate.getDate();

    document.getElementById('wheelPickerModal').style.display = 'flex';

    requestAnimationFrame(function () {
        const years = [];
        for (let y = WHEEL_MIN_YEAR; y <= WHEEL_MAX_YEAR; y++) years.push(y);
        
        // Year index එක safe bounds ඇතුළත පිහිටුවයි
        const yearIndex = Math.max(0, Math.min(selYear - WHEEL_MIN_YEAR, years.length - 1));
        buildWheelColumnBounded(document.getElementById('wheelYear'), years, yearIndex, 'year');

        buildWheelColumnCircular(document.getElementById('wheelMonth'), wheelMonthNames(), selMonth, 'month');

        const maxDay = daysInMonth(selYear, selMonth);
        wheelCurrentMaxDay = maxDay;
        const dayValues = [];
        for (let d = 1; d <= maxDay; d++) dayValues.push(d);
        buildWheelColumnCircular(document.getElementById('wheelDate'), dayValues, Math.min(selDay, maxDay) - 1, 'date');
    });
}

function closeWheelPicker() {
    document.getElementById('wheelPickerModal').style.display = 'none';
    wheelTargetInputId = null;
}

function confirmWheelPicker() {
    if (!wheelTargetInputId) { closeWheelPicker(); return; }

    const yearCol = document.getElementById('wheelYear');
    const monthCol = document.getElementById('wheelMonth');
    const dateCol = document.getElementById('wheelDate');

    const year = WHEEL_MIN_YEAR + getWheelValueIndex(yearCol, null);
    const monthIdx = getWheelValueIndex(monthCol, 12);
    const day = getWheelValueIndex(dateCol, wheelCurrentMaxDay) + 1;

    const mm = String(monthIdx + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const value = `${year}-${mm}-${dd}`;

    const targetInput = document.getElementById(wheelTargetInputId);
    if (targetInput) {
        targetInput.value = value;
        targetInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    closeWheelPicker();
}

function updateMiniMoon(dateObj) {
    const miniMoonVisual = document.getElementById('miniMoonVisual');
    
    if (!miniMoonVisual) return;

    try {
        if (typeof Astronomy !== 'undefined') {
            const moonPhaseAngle = Astronomy.MoonPhase(dateObj);
            const phase = moonPhaseAngle / 360.0;
            
            const illumInfo = Astronomy.Illumination('Moon', dateObj);
            const fraction = illumInfo.phase_fraction;

            miniMoonVisual.innerHTML = ''; 

            if (fraction > 0.98) {
                miniMoonVisual.className = 'full-moon';
            } else if (fraction > 0.02) {
                miniMoonVisual.className = 'phase-moon';
                const isWaxing = phase <= 0.5;
                const scale = Math.abs(1 - (fraction * 2));
                const baseHemisphere = isWaxing ? 'right: 0;' : 'left: 0;';
                const maskColor = fraction < 0.5 ? '#000000' : '#fde047';
                
                miniMoonVisual.innerHTML = `
                    <div style="position: absolute; top: 0; ${baseHemisphere} width: 50%; height: 100%; background-color: #fde047;"></div>
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background-color: ${maskColor}; transform: scaleX(${scale});"></div>
                `;
            } else {
                miniMoonVisual.className = 'new-moon';
            }
        }
    } catch (e) {
        console.error("Astronomy Engine error:", e);
    }
}

let isAstroUpdating = false;

function updateSinhalaAstroDate() {
    if (isAstroUpdating) return;

    const mainDateInput = document.getElementById('inputDate');
    const sunDateInput = document.getElementById('sunDateInput'); 
    const tithiLabelElement = document.getElementById('sinhalaTithiLabel');
    const moonPhaseLabel = document.getElementById('moonPhaseLabel');
    const engMode = typeof isEnglish === "function" ? isEnglish() : false;

    const sunModal = document.getElementById("sunModal");
    const isModalOpen = sunModal && (sunModal.style.display === "flex" || sunModal.style.display === "block");

    if (!isModalOpen && mainDateInput && sunDateInput && mainDateInput.value !== sunDateInput.value) {
        try {
            isAstroUpdating = true; 
            sunDateInput.value = mainDateInput.value;
            
            if (typeof updateSunTimes === "function") {
                updateSunTimes(); 
            }
        } catch (error) {
            console.error("Error updating sun times:", error);
        } finally {
            isAstroUpdating = false; 
        }
    }

    if (tithiLabelElement && mainDateInput && mainDateInput.value) {
        const selectedDateObj = new Date(mainDateInput.value);
        
        let currentTithi = '';
        if (moonPhaseLabel && moonPhaseLabel.innerText && moonPhaseLabel.innerText !== '--') {
            currentTithi = moonPhaseLabel.innerText;
        } else if (typeof phaseName !== 'undefined' && phaseName !== '') {
            currentTithi = phaseName;
        }

        if (engMode) {
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const formattedDate = selectedDateObj.toLocaleDateString('en-US', dateOptions);
            
            if (currentTithi && currentTithi !== '--') {
                tithiLabelElement.innerText = `${formattedDate}, ${currentTithi}`;
            } else {
                tithiLabelElement.innerText = formattedDate;
            }
        } else {
            
            const traditionalMonths = [
                "දුරුතු", "නවම්", "මැදින්", "බක්", "වෙසක්", "පොසොන්", 
                "ඇසළ", "නිකිණි", "බිනර", "වප්", "ඉල්", "උඳුවප්"
            ];

            const monthName = traditionalMonths[selectedDateObj.getMonth()];
            
            let tithiFormatted = '';
            if (currentTithi && currentTithi !== '--') {
                if (currentTithi.startsWith("Waxing") || currentTithi.startsWith("Waning")) {
                    tithiFormatted = ''; 
                } else {
                    tithiFormatted = `${currentTithi.replace("පෝය", "").trim()} ලත්`;
                }
            }

            const dayOfWeekIndex = selectedDateObj.getDay();
            const sinhalaDays = ["රවි දින", "සඳු දින", "කුජ දින", "බුධ දින", "ගුරු දින", "කිවි දින", "ශනි දින"];
            const sinhalaDayName = sinhalaDays[dayOfWeekIndex];

            if (tithiFormatted !== '') {
                tithiLabelElement.innerText = `${monthName} මස ${tithiFormatted} ${sinhalaDayName}`;
            } else {
                tithiLabelElement.innerText = `${monthName} මස ${sinhalaDayName}`;
            }
        }
    }
}

function openModal() {
    const modal = document.getElementById("infoModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal(modalId) {

    const idToClose = modalId ? modalId : "infoModal";
    const modal = document.getElementById(idToClose);
    if (modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('click', function(e) {

    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-sun')) {
        e.target.style.display = "none";
    }

    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown && !e.target.closest('.nav-more-btn')) {
        myDropdown.style.display = "none";
    }
});

function setupAutoDateUpdater() {
    const mainDateInput = document.getElementById('inputDate');
    if (!mainDateInput) return; 

    function getTodayDateString() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function checkAndUpdateDate() {
        const currentDateString = getTodayDateString();

        if (mainDateInput.value !== currentDateString) {

            mainDateInput.value = currentDateString;
            
            const changeEvent = new Event('change', { bubbles: true });
            mainDateInput.dispatchEvent(changeEvent);
        }
    }

    setInterval(checkAndUpdateDate, 3600000); 

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            checkAndUpdateDate();
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setupAutoDateUpdater();

    const mainDateInput = document.getElementById('inputDate');
    if (mainDateInput) {
        // Date Picker එකෙහි මුල් අගය අද දිනයට (YYYY-MM-DD) සැකසීම
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        // අද දිනය ඇතුළත් කර අදාළ ගණනය කිරීම් update කිරීම
        mainDateInput.value = todayStr;

        mainDateInput.addEventListener('change', function() {
            if (typeof updateSinhalaAstroDate === "function") {
                updateSinhalaAstroDate();
            }
        });

        if (typeof updateSinhalaAstroDate === "function") {
            updateSinhalaAstroDate();
        }
    }
});



if ('serviceWorker' in navigator) {

  window.addEventListener('load', async () => {

    try {

      const reg =
        await navigator.serviceWorker.register('./sw.js');

      console.log('Service Worker Registered');

      navigator.serviceWorker.addEventListener(
        'controllerchange',
        () => {
          window.location.reload();
        }
      );

    } catch (err) {

      console.error('SW Error:', err);

    }

  });

}
// =========================================================
// PWA Install Banner (Android / Desktop / iOS)
// =========================================================
(function () {
    const STORAGE_KEY = 'beInstallBannerSeen';
    let deferredPrompt = null;

    function isStandalone() {
        return window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true || // iOS Safari
            document.referrer.startsWith('android-app://');
    }

    function isIOS() {
        const ua = window.navigator.userAgent;
        const iOSDevice = /iPad|iPhone|iPod/.test(ua);
        const iPadOS13Up = ua.includes('Macintosh') && 'ontouchend' in document;
        return iOSDevice || iPadOS13Up;
    }

    function alreadySeen() {
        try { return localStorage.getItem(STORAGE_KEY) === '1'; }
        catch (e) { return false; }
    }

    function markSeen() {
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    }

    function initInstallBanner() {
        // Already installed, or user has already been shown the banner once: do nothing.
        if (isStandalone() || alreadySeen()) return;

        const banner = document.getElementById('pwa-install-banner');
        const iosTip = document.getElementById('pwa-ios-tip');
        const installBtn = document.getElementById('pwaInstallBtn');
        const dismissBtn = document.getElementById('pwaDismissBtn');
        const iosTipClose = document.getElementById('pwaIosTipClose');
        const subText = document.getElementById('pwaBannerSub');
        if (!banner) return;

        function showBanner() {
            if (alreadySeen()) return;
            banner.classList.add('show');
        }

        function hideBanner() {
            banner.classList.remove('show');
            iosTip.classList.remove('show');
            markSeen();
        }

        if (isIOS()) {
            // iOS has no beforeinstallprompt — show manual instructions on tap.
            subText.textContent = 'Home Screen එකට එක් කර, App එකක් ලෙසම භාවිතා කරන්න';
            installBtn.textContent = 'Install';
            installBtn.addEventListener('click', () => {
                iosTip.classList.add('show');
            });
            iosTipClose.addEventListener('click', () => {
                hideBanner();
            });
            // Show after a short delay so it doesn't collide with the splash/load.
            setTimeout(showBanner, 2500);
        } else {
            // Android / Desktop Chrome, Edge, etc.
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                setTimeout(showBanner, 1200);
            });

            installBtn.addEventListener('click', async () => {
                if (!deferredPrompt) {
                    hideBanner();
                    return;
                }
                deferredPrompt.prompt();
                await deferredPrompt.userChoice;
                deferredPrompt = null;
                hideBanner();
            });
        }

        dismissBtn.addEventListener('click', hideBanner);

        window.addEventListener('appinstalled', () => {
            hideBanner();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInstallBanner);
    } else {
        initInstallBanner();
    }
})();


// Bottom nav: always attach directly to <body> so that it stays fixed to the screen
// (a parent with backdrop-filter / transform – e.g. dark-mode .app-container – would otherwise move it).
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('bottomNav');
    if (nav && nav.parentElement !== document.body) document.body.appendChild(nav);
});
