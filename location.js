// =====================================================================
// location.js
// "Get My Location" බොත්තමේ ක්‍රියාවලිය (fetchLocationAndSunData). index.html හි
// script.js ට පසුව load වේ. script.js හි userLatitude, userLongitude, currentLang,
// isEnglish(), showCoordinatesOnly(), updateSunTimes() භාවිතා කරයි.
//
//  1. පළමුව low-accuracy (network/cached) උත්සාහ කරයි → අසමත් නම් පමණක් GPS (high accuracy)
//  2. callback කිසිවක් නොපැමිණියත් (WebView / prompt නොපෙන්වීම) බොත්තම නැවත සක්‍රීය වේ
//  3. ස්ථානය ලැබුණු සැණින් ඉර/සඳ වේලාවන් පෙන්වයි; නගර නම පසුබිමෙන් (තත්පර 6 timeout)
//  4. පෙර නගර නම (userLocName) අලුත් ස්ථානයත් සමග පටලවා නොපෙන්වයි
//  5. permission denied නම් නැවත නැවත request නොකරයි; නිවැරදි error පණිවිඩ
// =====================================================================

let locationBusy = false;

function locText(si, en) {
    return isEnglish() ? en : si;
}

// Facebook / Instagram / Viber / Android WebView ආදී in-app browsers
function isInAppWebView() {
    const ua = navigator.userAgent || '';
    return /FBAN|FBAV|Instagram|Viber|Line\/|; wv\)/i.test(ua);
}

function isTwaApp() {
    return (document.referrer || '').startsWith('android-app://');
}

// callback කිසිවක් නොපැමිණියත් reject කරන watchdog එකක් සහිතව
function getPositionOnce(options, hardLimitMs) {
    return new Promise((resolve, reject) => {
        let done = false;
        const timer = setTimeout(() => {
            if (done) return;
            done = true;
            reject({ code: 3, message: 'hard-timeout' });
        }, hardLimitMs);

        navigator.geolocation.getCurrentPosition(
            (pos) => { if (done) return; done = true; clearTimeout(timer); resolve(pos); },
            (err) => { if (done) return; done = true; clearTimeout(timer); reject(err); },
            options
        );
    });
}

function setLocationStatus(text) {
    const el = document.getElementById('locationStatus');
    if (el) el.innerText = text;
}

function showLocationError(err) {
    const code = err && err.code;
    const hasSaved = !!(localStorage.getItem('userLat') && localStorage.getItem('userLng'));
    let msg;

    if (code === 1) { // PERMISSION_DENIED
        msg = locText(
            ' අවසර නැත. Browser / දුරකථන Settings වල මෙම අඩවියට (හෝ app එකට) Location අවසරය "Allow" කර නැවත උත්සාහ කරන්න.',
            ' Permission denied. Allow Location for this site/app in browser or phone settings, then try again.'
        );
        if (isTwaApp()) {
            msg += locText(
                '\n(Android Settings → Apps → මෙම app / Chrome → Permissions → Location)',
                '\n(Android Settings → Apps → this app / Chrome → Permissions → Location)'
            );
        }
    } else if (code === 2) { // POSITION_UNAVAILABLE
        msg = locText(
            ' ස්ථානය ලබාගත නොහැක. දුරකථනයේ Location (GPS) ON කර, Wi-Fi/Mobile data සමග, හැකිනම් විවෘත ස්ථානයක සිට නැවත උත්සාහ කරන්න.',
            ' Location unavailable. Turn ON device Location, keep Wi-Fi/mobile data on, and try again (preferably outdoors).'
        );
    } else if (code === 3) { // TIMEOUT
        msg = locText(
            '⏳ කාලය ඉක්මවා ගියා. Location ON කර, විවෘත ස්ථානයකින් නැවත උත්සාහ කරන්න.',
            '⏳ Location request timed out. Make sure Location is ON and try again, preferably outdoors.'
        );
    } else {
        msg = locText(' ස්ථානය ලබා ගැනීමට නොහැකි විය.', ' Unable to retrieve location.');
    }

    if (isInAppWebView()) {
        msg += locText(
            '\n(මෙය app එකක් ඇතුළත browser එකක් විය හැක — Chrome / Safari වලින් විවෘත කරන්න.)',
            '\n(This looks like an in-app browser — please open the page in Chrome / Safari.)'
        );
    }
    if (hasSaved) {
        msg += locText(
            '\nපෙර සුරැකි ස්ථානය තවමත් භාවිතා වේ.',
            '\nThe last saved location is still being used.'
        );
    }
    setLocationStatus(msg);
}

// නගර නම ලබාගැනීම — අසමත් වුවත් coordinates දැනටමත් පෙන්වා ඇත
async function reverseGeocodeInBackground() {
    if (!navigator.onLine) return;
    const statusText = document.getElementById('locationStatus');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    try {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userLatitude}&longitude=${userLongitude}&localityLanguage=${currentLang}`;
        const response = await fetch(url, { signal: ctrl.signal });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();

        const locationName = data.city || data.locality || data.principalSubdivision;
        if (!locationName) return;
        localStorage.setItem('userLocName', locationName);

        if (statusText) {
            const latFmt = userLatitude.toFixed(4);
            const lngFmt = userLongitude.toFixed(4);
            statusText.innerHTML = isEnglish()
                ? `📍 Location: <b>${locationName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`
                : `📍 ස්ථානය: <b>${locationName}</b><br><span class="loc-coords">(${latFmt}°, ${lngFmt}°)</span>`;
        }
    } catch (e) {
        // නගර නම නොලැබුණත් coordinates දැනටමත් පෙන්වා ඇත
    } finally {
        clearTimeout(timer);
    }
}

async function fetchLocationAndSunData() {
    if (locationBusy) return;

    const btn = document.getElementById('getLocationBtn');

    if (!navigator.geolocation) {
        setLocationStatus(locText(' GPS පහසුකමට සහාය නොදක්වයි.', ' GPS not supported.'));
        return;
    }

    locationBusy = true;
    if (btn) btn.disabled = true;
    setLocationStatus(locText(
        '📍 ස්ථානය සොයමින් පවතී (කරුණාකර රැඳී සිටින්න)...',
        '📍 Detecting location (Please wait)...'
    ));

    try {
        // දැනටමත් "denied" නම් නැවත request කිරීමෙන් වැඩක් නැත
        try {
            if (navigator.permissions && navigator.permissions.query) {
                const perm = await navigator.permissions.query({ name: 'geolocation' });
                if (perm.state === 'denied') {
                    showLocationError({ code: 1 });
                    return;
                }
            }
        } catch (e) { /* සමහර browsers වල Permissions API නැත */ }

        let pos;
        try {
            // 1 වන උත්සාහය: වේගවත් — network / cache (ඉර-සඳ වේලාවන්ට km කිහිපයක නිරවද්‍යතාව ප්‍රමාණවත්)
            pos = await getPositionOnce(
                { enableHighAccuracy: false, timeout: 8000, maximumAge: 10 * 60 * 1000 },
                33000
            );
        } catch (e1) {
            if (e1 && e1.code === 1) throw e1; // අවසර නැත — දෙවන උත්සාහය අනවශ්‍යයි
            setLocationStatus(locText(
                '📍 GPS මගින් සොයමින් පවතී (තත්පර 30ක් පමණ ගත විය හැක)...',
                '📍 Trying GPS (may take up to 30 seconds)...'
            ));
            // 2 වන උත්සාහය: GPS (cold start එකට ප්‍රමාණවත් කාලයක් සමග)
            pos = await getPositionOnce(
                { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 },
                55000
            );
        }

        userLatitude = pos.coords.latitude;
        userLongitude = pos.coords.longitude;
        localStorage.setItem('userLat', userLatitude);
        localStorage.setItem('userLng', userLongitude);
        localStorage.removeItem('userLocName'); // පරණ නම අලුත් coordinates සමග නොපෙන්වීමට

        showCoordinatesOnly(document.getElementById('locationStatus'));
        if (typeof updateSunTimes === "function") updateSunTimes(); // වහාම වේලාවන් පෙන්වයි

        reverseGeocodeInBackground(); // await නොකරයි
    } catch (err) {
        showLocationError(err);
    } finally {
        locationBusy = false;
        if (btn) btn.disabled = false;
    }
}
