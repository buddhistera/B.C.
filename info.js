/* =====================================================================
   info.js  —  "ℹ️ තොරතුරු / Info" page
   ---------------------------------------------------------------------
   * info.html වෙනුවට: HTML + CSS + JS සියල්ල මෙම ගොනුවේම ඇත.
   * භාෂාව  : ප්‍රධාන පිටුවේ  currentLang  ('si' | 'en')  අනුව.
   * Theme  : ප්‍රධාන පිටුවේ  body.dark-mode  අනුව.
   * Font   : Noto Sans Sinhala / Noto Serif Sinhala (Google Fonts – index.html හි link කර ඇත).
   * ඉවත් වීම: දකුණු ඉහළ ✕ බොත්තම, Esc යතුර, හෝ Back බොත්තම.
   * භාවිතය : openInfo()   /   closeInfo()
   ===================================================================== */
(function () {
  'use strict';

  var HTML = `<div class="wrap">

  <!-- ================= බෞද්ධ කොඩිය ================= -->
  <div class="buddhist-flag-wrap">
    <div class="buddhist-flag" role="img" aria-label="Buddhist flag — නීල · පීත · ලෝහිත · ඕදාත · මංජිෂ්ට · ප්‍රභාස්වර">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- ================= SINHALA ================= -->
  <div data-lang="si" class="active">

    <p class="blessing">බුදු සසුන ලොව බැබළේවා !</p>

    <div class="card">
      <p>මෙහි සඳහන් පෝය දිනයන් තායිලන්ත සහ ශ්‍රී ලංකා උපෝසථ දිනයන් මත පදනම්ව සකස් කොට ඇත. ඇතැම් විට මියන්මාර් උපෝසථ දිනයන් මීට වඩා දවසක් පමණක් වෙනස් විය හැකිය.</p>
      <p>ඔබගේ අදහස් සහ යෝජනා පහත ලිපිනයට එවන්න.</p>
      <a class="email-btn" href="mailto:bhamarawali@gmail.com">📧 bhamarawali@gmail.com</a>
    </div>

    <div class="card important">
      <span class="tag">❄️ වැදගත්</span>
      <p>ඔබ පළමු වරට ඇප් එක ඕපන් කළ පසු මෙනු එකේ ඇති <strong>අරුණ</strong> පිටුවට ගොස් ස්ථානය ලබාදෙන්න.</p>
      <p>✏️ අවශ්‍ය නම් ඔබ සිටින ස්ථානයේ දත්ත ඇතුලත් කර අරුණ මධ්‍යාහ්නය වාර්ෂික සටහන මුද්‍රණය කර ගැනීමට <a href="https://buddhistera.github.io/Dawn-Noon-calculation/" target="_blank" rel="noopener noreferrer">මෙතනින්</a> බලන්න.</p>
      </div>

    <div class="section-heading"><span class="dot"></span>ඇප් එක ලබාගන්නා ආකාරය</div>
    <div class="platform-grid">
      <div class="platform-card">
        <h3>🤖 Android සඳහා</h3>
        <p>මෙතනින් apk ගොනුව බාගත කර install කරන්න.</p>
        <a class="platform-btn" href="https://drive.google.com/file/d/1URufgqrLwAt6QBE22w-wPYKWTFvBzLrf/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">බාගත කරන්න ⬇️</a>
      </div>
      <div class="platform-card">
        <h3>🪟 Windows සඳහා</h3>
        <p>මෙතනින් apk ගොනුව බාගත කර install කරන්න.</p>
        <a class="platform-btn" href="https://drive.google.com/file/d/1ORbEqsn1KBrH58p0JDilcN0RARooi4Dy/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Windows App බාගත කරන්න</a>
      </div>
      <div class="platform-card">
        <h3>🍎 iPhone / Mac OS සඳහා</h3>
        <p>මෙම web ලිපිනය Safari බ්‍රවුසරයෙන් විවෘත කොට Share → <em>"Add to Home Screen"</em> කරන්න.</p>
        <a class="platform-btn" href="https://buddhist-era.vercel.app" target="_blank" rel="noopener noreferrer">buddhist-era.vercel.app</a>
      </div>
    </div>

    <div class="section-heading"><span class="dot"></span>ප්‍රයෝජනවත් ඉඟි</div>
    <div class="card">
      <ul class="tips">
        <li><span class="pin">✏️</span><span>අන්තර්ජාල පහසුකම නොමැති ස්ථානයක අරුණෝදය ස්ථානය ලබා ගැනීමට එළිමහනකදී උත්සාහ කිරීමෙන් ඉක්මන් ප්‍රතිඵල ලැබේ.</span></li>
        <li><span class="pin">✏️</span><span>අර්ථ, නිරුක්ති, වරනැගීම් සහිත වචන 88000 පමණ අඩංගු පාලි සිංහල ශබ්දකෝෂය ලබා ගැනීම සඳහා <a href="https://pali-sinhala-dictionary.github.io/DPSD/" target="_blank" rel="noopener noreferrer">මෙම ලිපිනය</a> භාවිතා කරන්න.</span></li>
        <li><span class="pin">✏️</span><span>අභිධර්ම මාතික අධ්‍යනය සඳහා <a href="https://pavara9803-ctrl.github.io/Matika/" target="_blank" rel="noopener noreferrer">මෙම ලිපිනය</a> භාවිතා කරන්න.</span></li>
        <li><span class="pin">✏️</span><span>මියන්මාර් පෝය දිනයන් <a href="https://docs.google.com/spreadsheets/d/1Ck5Eh3uQEbpraE0gE81fr6tNJvpX5ue9U4TluAa2K1M/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">මෙතනින්</a> බලා ගත හැකිය.</span></li>
      </ul>
    </div>

  </div>

  <!-- ================= ENGLISH ================= -->
  <div data-lang="en">

    <p class="blessing">May the Buddha's teachings spread throughout the world!</p>

    <div class="card">
      <p>The Uposatha dates mentioned here are based on the Thai and Sri Lankan uposatha dates. Sometimes Myanmar Uposatha dates may differ by only one day.</p>
      <p>Send your comments and suggestions to the below address.</p>
      <a class="email-btn" href="mailto:bhamarawali@gmail.com">📧 bhamarawali@gmail.com</a>
    </div>

    <div class="card important">
      <span class="tag">❄️ Important</span>
      <p>After you open the app for the first time, go to the <strong>Dawn/Noon</strong> page in the menu and provide your location.</p>
      <p>⬇️ If necessary, enter the data for your location and print the annual dawn/noon chart <a href="https://buddhistera.github.io/Dawn-Noon-calculation/" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>🔶 To know how to set the Buddhist year, download the pdf <a href="https://docs.google.com/document/d/1r9hgfgWlz970U-r2s6cdAdJhpn2soGnTu8TeP_3Yh1w/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>

    <div class="section-heading"><span class="dot"></span>How to get the app</div>
    <div class="platform-grid">
      <div class="platform-card">
        <h3>🤖 For Android</h3>
        <p>Download the apk file here and install it.</p>
        <a class="platform-btn" href="https://drive.google.com/file/d/1URufgqrLwAt6QBE22w-wPYKWTFvBzLrf/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download ⬇️</a>
      </div>
      <div class="platform-card">
        <h3>🪟 For Windows</h3>
        <p>Open this web address in a Chrome browser and install it by clicking the <em>"install app"</em> icon in the address bar.</p>
        <a class="platform-btn" href="https://buddhist-era.vercel.app" target="_blank" rel="noopener noreferrer">buddhist-era.vercel.app</a>
      </div>
      <div class="platform-card">
        <h3>🍎 For iPhone, Mac OS</h3>
        <p>Open this web address in Safari browser and Share → <em>"Add to Home Screen"</em>.</p>
        <a class="platform-btn" href="https://buddhist-era.vercel.app" target="_blank" rel="noopener noreferrer">buddhist-era.vercel.app</a>
      </div>
    </div>

    <div class="section-heading"><span class="dot"></span>Helpful tips</div>
    <div class="card">
      <ul class="tips">
        <li><span class="pin">✏️</span><span>Trying to get a sunrise location outdoors in a place without internet access will yield quicker results.</span></li>
        <li><span class="pin">✏️</span><span>You can check Myanmar Uposatha dates <a href="https://docs.google.com/spreadsheets/d/1Ck5Eh3uQEbpraE0gE81fr6tNJvpX5ue9U4TluAa2K1M/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">here</a>.</span></li>
      </ul>
    </div>

  </div>

  <!-- QR (shared, not language-specific) -->
  <div class="card qr-card">
    <p class="small">Scan to open ·  QR කේතය scan කරන්න</p>
    <div id="qrcode"></div>
    <div class="qr-label">Buddhist Era | බුද්ධ වර්ෂය</div>
  </div>

  <p class="footer-note">🙏 Sādhu Sādhu Sādhu 🙏</p>
</div>

`;
  var CSS  = `#infoOverlay{--mint-bg: #F1FBF6;
    --mint-card: #FFFFFF;
    --mint-deep: #1E8F6C;
    --mint-mid: #34B88A;
    --mint-soft: #DCF4E8;
    --mint-line: #C7ECDA;
    --ink: #17332A;
    --ink-soft: #56736A;
    --saffron: #C9852E;
    --saffron-soft: #FBF0DE;
    --saffron-line: #F0DCB4;}
#infoOverlay *{box-sizing:border-box;}
#infoOverlay{margin:0;
    min-height:100vh;
    background:
      radial-gradient(900px 500px at 88% -10%, #DEF6EA 0%, transparent 60%),
      radial-gradient(700px 480px at -10% 15%, #FBF0DE 0%, transparent 55%),
      var(--mint-bg);
    font-family:'Noto Sans Sinhala','Noto Sans',sans-serif;
    color:var(--ink);
    padding:34px 14px 56px;
    transition: background 0.5s ease, color 0.5s ease;}
#infoOverlay .wrap{max-width:640px;margin:0 auto;}
#infoOverlay [data-lang]{display: none;}
#infoOverlay [data-lang].active{display: block;
    animation: info-langFadeIn 0.3s ease;}
@keyframes info-langFadeIn{
    from { opacity: 0; transform: translateY(4px); }
to   { opacity: 1; transform: translateY(0); }
}
#infoOverlay .buddhist-flag-wrap{display: flex;
    justify-content: center;
    margin: 4px auto 28px;}
#infoOverlay .buddhist-flag{display: flex;
    width: clamp(200px, 50%, 320px);
    aspect-ratio: 3 / 2;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    box-shadow:
      0 12px 28px -12px rgba(20, 80, 60, 0.40),
      0 3px 8px rgba(0, 0, 0, 0.10),
      0 0 0 1px rgba(0, 0, 0, 0.05);}
#infoOverlay .buddhist-flag span{flex: 1 1 16.6667%;
    height: 100%;
    position: relative;
    overflow: hidden;}
#infoOverlay .buddhist-flag span:nth-child(1){background: linear-gradient(180deg, #1a52c9, #0b3a99);}
#infoOverlay .buddhist-flag span:nth-child(2){background: linear-gradient(180deg, #ffdc26, #ffc400);}
#infoOverlay .buddhist-flag span:nth-child(3){background: linear-gradient(180deg, #ed2f36, #c9101a);}
#infoOverlay .buddhist-flag span:nth-child(4){background: linear-gradient(180deg, #ffffff, #e8e8e8);}
#infoOverlay .buddhist-flag span:nth-child(5){background: linear-gradient(180deg, #fda83c, #ee7f0c);}
#infoOverlay .buddhist-flag span:nth-child(6){position: relative;
    overflow: hidden;
    background: #0b3a99;}
#infoOverlay .buddhist-flag span:nth-child(6)::before{content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      0deg,
      
      #0b3a99 0%,                     
      #1a52c9 4%,
      #ffdc26 10%,                    
      #ffc400 14%,
      #ed2f36 20%,                    
      #c9101a 24%,
      #ffffff 30%,                    
      #e8e8e8 34%,
      #fda83c 40%,                    
      #ee7f0c 44%,
      #0b3a99 50%,                    
      
      #1a52c9 54%,
      #ffdc26 60%,
      #ffc400 64%,
      #ed2f36 70%,
      #c9101a 74%,
      #ffffff 80%,
      #e8e8e8 84%,
      #fda83c 90%,
      #ee7f0c 94%,
      #0b3a99 100%                    
    );
    background-size: 100% 200%;        
    background-repeat: no-repeat;
    background-position: 0% 100%;      
    animation: info-prabhasvaraMove 14s linear infinite;
    will-change: background-position;}
@keyframes info-prabhasvaraMove{
    from { background-position: 0% 100%; }
to   { background-position: 0%   0%; }
}
#infoOverlay .buddhist-flag span:nth-child(6)::after{content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0.18) 0%,
      transparent 75%
    );
    mix-blend-mode: overlay;
    pointer-events: none;}
#infoOverlay .blessing{text-align:center;
    font-family:'Noto Serif Sinhala',serif;
    font-style:italic;
    font-weight:600;
    color:var(--saffron);
    font-size:19px;
    line-height:1.6;
    margin:0 0 28px;
    padding:0 6px;}
#infoOverlay .card{background:var(--mint-card);
    border:1px solid var(--mint-line);
    border-radius:20px;
    padding:22px 22px;
    margin-bottom:18px;
    box-shadow:0 16px 34px -26px rgba(20,80,60,.35);
    position:relative;
    overflow:hidden;
    transition: all 0.3s ease;}
#infoOverlay .card::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;
    background:linear-gradient(90deg,var(--mint-mid),var(--mint-deep));}
#infoOverlay .card p{margin:0 0 10px;font-size:14.8px;line-height:1.7;color:var(--ink);}
#infoOverlay .card p:last-child{margin-bottom:0;}
#infoOverlay .email-btn{display:inline-flex;align-items:center;gap:8px;
    margin-top:6px;
    padding:9px 16px;border-radius:10px;
    background:var(--mint-soft);color:var(--mint-deep);
    font-weight:600;font-size:13.5px;text-decoration:none;}
#infoOverlay .important{background:var(--saffron-soft);
    border:1px solid var(--saffron-line);}
#infoOverlay .important::before{background:linear-gradient(90deg,var(--saffron),#E0A857);}
#infoOverlay .important .tag{display:inline-flex;align-items:center;gap:6px;
    font-size:12.5px;font-weight:700;color:var(--saffron);
    letter-spacing:.02em;margin-bottom:10px;}
#infoOverlay .important a{color:var(--saffron);font-weight:600;text-decoration:underline;}
#infoOverlay .section-heading{font-size:13px;font-weight:700;color:var(--mint-deep);
    letter-spacing:.02em;margin:30px 0 12px;
    display:flex;align-items:center;gap:8px;}
#infoOverlay .section-heading .dot{width:6px;height:6px;border-radius:50%;background:var(--mint-mid);}
#infoOverlay .platform-grid{display:grid;grid-template-columns:1fr;gap:14px;}
#infoOverlay .platform-card{background:var(--mint-card);border:1px solid var(--mint-line);
    border-radius:18px;padding:18px 20px;
    box-shadow:0 14px 30px -26px rgba(20,80,60,.3);
    transition: all 0.3s ease;}
#infoOverlay .platform-card h3{margin:0 0 6px;font-size:16px;font-family:'Noto Serif Sinhala',serif;
    display:flex;align-items:center;gap:8px;}
#infoOverlay .platform-card p{margin:0 0 12px;font-size:13.8px;color:var(--ink-soft);line-height:1.6;}
#infoOverlay .platform-btn{display:inline-block;padding:10px 18px;border-radius:10px;
    background:linear-gradient(180deg,var(--mint-mid),var(--mint-deep));
    color:#fff;text-decoration:none;font-weight:700;font-size:14px;
    box-shadow:0 10px 20px -10px rgba(30,143,108,.5);
    transition: all 0.3s ease;}
#infoOverlay .tips{list-style:none;margin:0;padding:0;}
#infoOverlay .tips li{display:flex;gap:10px;padding:10px 0;
    font-size:14.3px;line-height:1.6;color:var(--ink);
    border-bottom:1px dashed var(--mint-line);}
#infoOverlay .tips li:last-child{border-bottom:none;}
#infoOverlay .tips .pin{flex:none;color:var(--mint-deep);font-weight:700;}
#infoOverlay .tips a{color:var(--mint-deep);font-weight:600;}
#infoOverlay .qr-card{text-align:center;
    background:linear-gradient(180deg,#ffffff, var(--mint-soft));}
#infoOverlay .qr-card h3{font-family:'Noto Serif Sinhala',serif;font-size:17px;margin:0 0 4px;}
#infoOverlay .qr-card p.small{font-size:12.5px;color:var(--ink-soft);margin:0 0 16px;}
#infoOverlay #qrcode{display:inline-block;padding:14px;background:#fff;border-radius:16px;
    border:1px solid var(--mint-line);}
#infoOverlay .qr-label{margin-top:12px;font-weight:700;font-size:13.5px;color:var(--mint-deep);}
#infoOverlay .footer-note{text-align:center;color:var(--ink-soft);font-size:12px;margin-top:26px;line-height:1.6;}
body.dark-mode #infoOverlay{--mint-bg: #090a10;
      --mint-card: #131724;
      --mint-deep: #00e5ff;
      --mint-mid: #b388ff;
      --mint-soft: #1a1f2e;
      --mint-line: rgba(0, 229, 255, 0.2);
      --ink: #ffffff;
      --ink-soft: #a0aec0;
      --saffron: #00e676;
      --saffron-soft: #1a1025;
      --saffron-line: rgba(0, 230, 118, 0.3);

      background: linear-gradient(-45deg, #090a10, #101426, #1a0f29, #090a10) !important;
      background-size: 400% 400% !important;
      animation: info-gradientBG 15s ease infinite !important;
      color: var(--ink);}
@keyframes info-gradientBG{
      0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
body.dark-mode #infoOverlay .card,body.dark-mode #infoOverlay .platform-card{background: rgba(19, 23, 36, 0.85) !important;
      backdrop-filter: blur(12px) !important;
      border: 1px solid var(--mint-line) !important;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 0 20px rgba(179, 136, 255, 0.05) !important;}
body.dark-mode #infoOverlay .card::before{background: linear-gradient(90deg, var(--mint-deep), var(--mint-mid)) !important;}
body.dark-mode #infoOverlay .important{background: var(--saffron-soft) !important;
      border: 1px solid var(--saffron-line) !important;}
body.dark-mode #infoOverlay .important::before{background: linear-gradient(90deg, var(--saffron), #00b0ff) !important;}
body.dark-mode #infoOverlay .email-btn{background: var(--mint-soft) !important;
      color: var(--mint-deep) !important;}
body.dark-mode #infoOverlay .platform-btn{background: linear-gradient(180deg, #00e5ff, #007bff) !important;
      box-shadow: 0 10px 20px -10px rgba(0, 229, 255, 0.5) !important;}
body.dark-mode #infoOverlay .qr-card{background: linear-gradient(180deg, #131724, #1a1f2e) !important;}
body.dark-mode #infoOverlay #qrcode{background: #fff !important;
      border: 1px solid var(--mint-line) !important;}
body.dark-mode #infoOverlay .tips li{border-bottom: 1px dashed var(--mint-line) !important;}
body.dark-mode #infoOverlay .buddhist-flag{box-shadow:
          0 14px 30px -12px rgba(0, 0, 0, 0.75),
          0 0 22px rgba(179, 136, 255, 0.20),
          0 0 0 1px rgba(255, 255, 255, 0.08);}
@media (prefers-reduced-motion: reduce){#infoOverlay .buddhist-flag span:nth-child(6)::before{animation: none;}
}

#infoOverlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:5000;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:block;padding-top:calc(34px + env(safe-area-inset-top,0px))}
#infoOverlay .info-close{position:fixed;top:calc(env(safe-area-inset-top,0px) + 10px);right:12px;z-index:5100;width:44px;height:44px;border-radius:50%;border:2px solid var(--mint-deep);background:var(--mint-card);color:var(--mint-deep);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-size:26px;line-height:1;font-family:Arial,sans-serif;box-shadow:0 6px 18px rgba(0,0,0,.25);transition:all .25s ease}
#infoOverlay .info-close:hover{background:var(--mint-deep);color:#fff;transform:rotate(90deg)}
`;
  var QR_URL = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
  var pushed = false;

  function lang() {
    return (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'en' : 'si';
  }

  function injectStyle() {
    if (document.getElementById('infoStyle')) return;
    var st = document.createElement('style');
    st.id = 'infoStyle';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function drawQR(ov) {
    var box = ov.querySelector('#qrcode');
    if (!box) return;
    function make() {
      if (typeof QRCode === 'undefined') return;
      box.innerHTML = '';
      new QRCode(box, {
        text: 'https://buddhist-era.vercel.app',
        width: 176, height: 176,
        colorDark: '#1E8F6C', colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
    }
    if (typeof QRCode !== 'undefined') return make();
    var sc = document.createElement('script');
    sc.src = QR_URL;
    sc.onload = make;
    sc.onerror = function () { box.style.display = 'none'; };   // offline: QR hide
    document.head.appendChild(sc);
  }

  function build() {
    var l = lang();
    var ov = document.getElementById('infoOverlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'infoOverlay';
      document.body.appendChild(ov);
    }
    ov.setAttribute('lang', l);
    ov.innerHTML =
      '<button class="info-close" type="button" aria-label="' + (l === 'si' ? 'ඉවත් වන්න' : 'Close') + '">&times;</button>' + HTML;
    ov.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === l);
    });
    ov.querySelector('.info-close').addEventListener('click', closeInfo);
    ov.scrollTop = 0;
    drawQR(ov);
    return ov;
  }

  function onKey(e) { if (e.key === 'Escape') closeInfo(); }
  function onPop() { if (pushed) { pushed = false; hide(); } }

  function hide() {
    var ov = document.getElementById('infoOverlay');
    if (ov) ov.style.display = 'none';
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }

  window.openInfo = function () {
    var dd = document.getElementById('myDropdown'); if (dd) dd.style.display = 'none';
    injectStyle();
    var ov = build();
    ov.style.display = 'block';
    ov.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    try { history.pushState({ info: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  };

  window.closeInfo = function () {
    if (pushed) { history.back(); }
    else hide();
  };

  window.addEventListener('popstate', onPop);
})();
