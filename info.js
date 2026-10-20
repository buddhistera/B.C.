/* =====================================================================
   info.js  —  "ℹ️ තොරතුරු / Info" page - OFFLINE INLINE QR VERSION
   * HTML + CSS + QR සියල්ල මෙම ගොනුවේම ඇත - වෙනම file නැත
   ===================================================================== */
(function () {
  'use strict';

  // --- OFFLINE QR - mint color #1E8F6C, base64 embedded ---
  var QR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAD4CAIAAABOs7xcAAAE8UlEQVR4nO3d0W3kNhRA0TjYPlJhgJQSIBVuJUoDYQAuSJOae87vGpJm9oIfzzT19TzPb/Dpfj/9APAdhE6C0EkQOglCJ0HoJAidhB+jf/jj7z+/8zl+2c+//pn6+dnPNbr+6Dqrfn7Wqs+16vqnjD6XFZ0EoZMgdBKEToLQSRA6CUInYThHH1k19501O8ddNed++7x8t7f0YEUnQegkCJ0EoZMgdBKEToLQSZieo4+smu+umsvOzrlXWbXPe3Sdt+wjv60HKzoJQidB6CQInQShkyB0EoROwrI5+lvs3j+9ai6+ah/8yO5987exopMgdBKEToLQSRA6CUInQegkfOwc/bbzWHb71M+1ihWdBKGTIHQShE6C0EkQOglCJ2HZHP22uezs87z9PJnb3NaDFZ0EoZMgdBKEToLQSRA6CUInYXqO/pZ58O796Kv2eZ86p2XV87+lBys6CUInQegkCJ0EoZMgdBKETsLX8zynn+Fb7T53fPd7RnfPv2/bR76KFZ0EoZMgdBKEToLQSRA6CUInYbgf/bb93Lvnvrvn6yO7r39qv/htPVjRSRA6CUInQegkCJ0EoZMgdBK2n49+ap466+3PP7L7nJbR9W9776kVnQShkyB0EoROgtBJEDoJQidheK6L/d////OzTu0LP3VOy23/v1Z0EoROgtBJEDoJQidB6CQInYTt56Of2n+8al/1qf3it933LfP4ESs6CUInQegkCJ0EoZMgdBKETsJ1+9FnnZpDj+x+X+nu94zOOvVe1dnnsaKTIHQShE6C0EkQOglCJ0HoJAzPRz81L989l111nVNz+ppV378VnQShkyB0EoROgtBJEDoJQifh2H70kdv2bc+67VyUkdv+3sB+dFhA6CQInQShkyB0EoROgtBJGO5H3+22OffIqfNVds+Vd3/Pp94nOmJFJ0HoJAidBKGTIHQShE6C0EmYnqPfNv9edd+3vO9z9jqzTt131mwPVnQShE6C0EkQOglCJ0HoJAidhOG5Lquc2n+8223nlsxatQ9+9/tNVz2PFZ0EoZMgdBKEToLQSRA6CUInYbgf/dR5I6Pr3HYey6r7nvKW/eurvjcrOglCJ0HoJAidBKGTIHQShE7CcI6+ex5823suZ69z2+8TTu13330e/Kr7WtFJEDoJQidB6CQInQShkyB0Eobnuuw+9+PUeS+3ne++223740+dz2NFJ0HoJAidBKGTIHQShE6C0EnYfj76Kbedy37bOein7nvq9ypWdBKEToLQSRA6CUInQegkCJ2E6fPRbzOam37qvvlV15+1+z2ju79/KzoJQidB6CQInQShkyB0EoROwnCOPnLqXI7d8+xP3bd92+edter5regkCJ0EoZMgdBKEToLQSRA6CdNz9BHnqPyaU/cd2f13CKfOs7eikyB0EoROgtBJEDoJQidB6CQsm6Pf5tQ8fmT3uS6zbnuv6u73v1rRSRA6CUInQegkCJ0EoZMgdBI+do6+6ryUU+e3jJw672XVfU+ds25FJ0HoJAidBKGTIHQShE6C0ElYNke/7XySVfPpWbvnyqv2qe/+vcGIc11gI6GTIHQShE6C0EkQOglCJ2F6jr77vJFVdu97nvWW+fTsz++e94/Yjw7/QegkCJ0EoZMgdBKEToLQSfh6nuf0M8B2VnQShE6C0EkQOglCJ0HoJAidhH8Bj4VGTcq0UyoAAAAASUVORK5CYII=";

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
        <a class="platform-btn" href="https://apkpure.com/buddhist-calendar/com.yogasrama.buddhistcalendar">බාගත කරන්න ⬇️</a>
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

    <p class="blessing"></p>

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
        <a class="platform-btn" href="https://apkpure.com/buddhist-calendar/com.yogasrama.buddhistcalendar">Download ⬇️</a>
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
    <div class="qr-label-row">
      <button type="button" class="qr-share-btn" id="qrShareBtn"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg></button>
      <div class="qr-label">Buddhist Era | බුද්ධ වර්ෂය</div>
      <button type="button" class="qr-dl-btn" id="qrDlBtn"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg></button>
    </div>
  </div>

  <button type="button" class="qr-make-btn" id="qrMakeBtn"></button>
  <div class="card qr-maker" id="qrMaker" hidden></div>

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
#infoOverlay .qr-label-row{position:relative;display:flex;align-items:center;justify-content:center;min-height:46px;margin-top:12px;padding:0 54px}
#infoOverlay .qr-label-row .qr-label{margin-top:0}
#infoOverlay .qr-dl-btn,#infoOverlay .qr-share-btn{position:absolute;right:-8px;bottom:0;width:44px;height:44px;border-radius:50%;border:2px solid #fff;padding:0;cursor:pointer;
    display:flex;align-items:center;justify-content:center;color:#fff;
    background:linear-gradient(180deg,var(--mint-mid),var(--mint-deep));
    box-shadow:0 8px 18px -6px rgba(30,143,108,.6),0 0 0 1px var(--mint-line);transition:transform .15s ease}
#infoOverlay .qr-dl-btn:active,#infoOverlay .qr-share-btn:active{transform:scale(.92)}
#infoOverlay .qr-share-btn{left:-8px;right:auto}
#infoOverlay .qm-toast{position:fixed;left:50%;bottom:calc(28px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:5200;
    padding:10px 18px;border-radius:999px;background:var(--ink);color:var(--mint-card);font-size:13.5px;font-weight:600;
    box-shadow:0 10px 24px rgba(0,0,0,.3);pointer-events:none;max-width:90%;text-align:center}
#infoOverlay .qr-make-btn{display:block;width:100%;margin:0 0 18px;padding:14px 16px;border:1.5px dashed var(--mint-mid);border-radius:18px;cursor:pointer;
    background:linear-gradient(180deg,var(--mint-card),var(--mint-bg));color:var(--mint-deep);font:inherit;font-weight:700;font-size:14.5px;line-height:1.5;transition:all .25s ease}
#infoOverlay .qr-make-btn:active{transform:scale(.99)}
#infoOverlay .qr-maker{text-align:left}
#infoOverlay .qr-maker[hidden]{display:none}
#infoOverlay .qm-title{font-family:'Noto Serif Sinhala',serif;font-size:17px;margin:0 0 6px;text-align:center}
#infoOverlay .qm-label{display:block;margin:14px 0 6px;font-size:13px;font-weight:700;color:var(--mint-deep)}
#infoOverlay .qm-input{display:block;width:100%;padding:10px 12px;border-radius:10px;border:1px solid var(--mint-line);
    background:var(--mint-card);color:var(--ink);font:inherit;font-size:16px;line-height:1.5}
#infoOverlay textarea.qm-input{resize:vertical;min-height:84px}
#infoOverlay .qm-input:focus{outline:2px solid var(--mint-mid);outline-offset:1px}
#infoOverlay .qm-check{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:14px}
#infoOverlay .qm-check input{width:18px;height:18px;accent-color:var(--mint-deep)}
#infoOverlay .qm-colors{display:flex;gap:12px;flex-wrap:wrap;padding:4px 4px 0}
#infoOverlay .qm-sw{width:34px;height:34px;border-radius:50%;border:2px solid #fff;cursor:pointer;padding:0;
    box-shadow:0 0 0 1px var(--mint-line);transition:transform .15s ease}
#infoOverlay .qm-sw.sel{box-shadow:0 0 0 3px var(--mint-deep);transform:scale(1.1)}
#infoOverlay .qm-gen{display:block;width:100%;margin-top:20px;padding:12px 16px;border:none;border-radius:12px;cursor:pointer;
    background:linear-gradient(180deg,var(--mint-mid),var(--mint-deep));color:#fff;font:inherit;font-weight:700;font-size:15px;
    box-shadow:0 10px 20px -10px rgba(30,143,108,.5)}
#infoOverlay .qm-error{min-height:0;margin-top:10px;color:#C0392B;font-size:13.5px;font-weight:600;text-align:center}
#infoOverlay .qm-result{text-align:center}
#infoOverlay .qm-img{display:block;width:240px;max-width:100%;height:auto;margin:16px auto 0;border-radius:12px;
    border:1px solid var(--mint-line);background:#fff;image-rendering:pixelated}
#infoOverlay .qm-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px}
#infoOverlay .qm-sec{padding:10px 16px;border-radius:10px;border:1px solid var(--mint-deep);background:var(--mint-soft);
    color:var(--mint-deep);font:inherit;font-weight:700;font-size:13.5px;cursor:pointer}
#infoOverlay .qr-maker .qm-note{margin:12px 0 0;font-size:12px;color:var(--ink-soft);text-align:center;line-height:1.6}
body.dark-mode #infoOverlay .qm-input{background:#0e1220;border-color:var(--mint-line)}
body.dark-mode #infoOverlay .qm-gen,body.dark-mode #infoOverlay .qr-dl-btn,body.dark-mode #infoOverlay .qr-share-btn{background:linear-gradient(180deg,#00e5ff,#007bff);color:#fff}
body.dark-mode #infoOverlay .qr-make-btn{background:rgba(19,23,36,.85);border-color:var(--mint-deep);color:var(--mint-deep)}
body.dark-mode #infoOverlay .qm-sw.sel{box-shadow:0 0 0 3px var(--mint-deep)}
`;

  /* ---------- QR encoder (offline, byte mode / UTF-8, versions 1-40) ---------- */
  var QRCore = (function () {
    var ECC_CPB = [
      [-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
      [-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],
      [-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
      [-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
    ];
    var ECC_BLOCKS = [
      [-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],
      [-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],
      [-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],
      [-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]
    ];
    var ECL = { L: 0, M: 1, Q: 2, H: 3 };
    var FORMAT_BITS = [1, 0, 3, 2];

    function rawModules(ver) {
      var r = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        var na = Math.floor(ver / 7) + 2;
        r -= (25 * na - 10) * na - 55;
        if (ver >= 7) r -= 36;
      }
      return r;
    }
    function dataCodewords(ver, e) {
      return Math.floor(rawModules(ver) / 8) - ECC_CPB[e][ver] * ECC_BLOCKS[e][ver];
    }
    function gfMul(x, y) {
      var z = 0;
      for (var i = 7; i >= 0; i--) {
        z = (z << 1) ^ ((z >>> 7) * 0x11D);
        z ^= ((y >>> i) & 1) * x;
      }
      return z;
    }
    function rsDivisor(degree) {
      var res = [], i, j;
      for (i = 0; i < degree - 1; i++) res.push(0);
      res.push(1);
      var root = 1;
      for (i = 0; i < degree; i++) {
        for (j = 0; j < res.length; j++) {
          res[j] = gfMul(res[j], root);
          if (j + 1 < res.length) res[j] ^= res[j + 1];
        }
        root = gfMul(root, 0x02);
      }
      return res;
    }
    function rsRemainder(data, div) {
      var res = div.map(function () { return 0; });
      data.forEach(function (b) {
        var f = b ^ res.shift();
        res.push(0);
        div.forEach(function (c, i) { res[i] ^= gfMul(c, f); });
      });
      return res;
    }
    function utf8(str) {
      var enc = unescape(encodeURIComponent(str)), out = [];
      for (var i = 0; i < enc.length; i++) out.push(enc.charCodeAt(i));
      return out;
    }
    function bit(x, i) { return ((x >>> i) & 1) !== 0; }

    function encode(text, eccName) {
      var e = ECL[eccName] === undefined ? 1 : ECL[eccName];
      var bytes = utf8(text), ver, usedBits, cap;
      for (ver = 1; ; ver++) {
        cap = dataCodewords(ver, e) * 8;
        var ccBits = ver <= 9 ? 8 : 16;
        usedBits = 4 + ccBits + bytes.length * 8;
        if (bytes.length >= (1 << ccBits)) usedBits = Infinity;
        if (usedBits <= cap) break;
        if (ver >= 40) return null;
      }
      /* ඉඩ ඇත්නම් ECC මට්ටම ඉහළ දමයි */
      [2, 3].forEach(function (ne) {
        if (ne > e && usedBits <= dataCodewords(ver, ne) * 8) e = ne;
      });
      cap = dataCodewords(ver, e) * 8;

      var bits = [];
      function put(val, len) { for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); }
      put(4, 4);
      put(bytes.length, ver <= 9 ? 8 : 16);
      bytes.forEach(function (b) { put(b, 8); });
      put(0, Math.min(4, cap - bits.length));
      put(0, (8 - bits.length % 8) % 8);
      for (var pad = 0xEC; bits.length < cap; pad ^= 0xEC ^ 0x11) put(pad, 8);
      var data = [];
      for (var i = 0; i < bits.length; i++) {
        if (i % 8 === 0) data.push(0);
        data[i >>> 3] |= bits[i] << (7 - (i & 7));
      }

      /* ECC + interleave */
      var nBlocks = ECC_BLOCKS[e][ver], eccLen = ECC_CPB[e][ver];
      var rawCw = Math.floor(rawModules(ver) / 8);
      var nShort = nBlocks - rawCw % nBlocks, shortLen = Math.floor(rawCw / nBlocks);
      var blocks = [], div = rsDivisor(eccLen), k = 0;
      for (i = 0; i < nBlocks; i++) {
        var dat = data.slice(k, k + shortLen - eccLen + (i < nShort ? 0 : 1));
        k += dat.length;
        var ecc = rsRemainder(dat, div);
        if (i < nShort) dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      var all = [];
      for (i = 0; i < blocks[0].length; i++) {
        blocks.forEach(function (blk, j) {
          if (i !== shortLen - eccLen || j >= nShort) all.push(blk[i]);
        });
      }

      /* matrix */
      var size = ver * 4 + 17, mod = [], fn = [], x, y;
      for (y = 0; y < size; y++) { mod.push([]); fn.push([]); for (x = 0; x < size; x++) { mod[y].push(false); fn[y].push(false); } }
      function setFn(px, py, dark) { mod[py][px] = dark; fn[py][px] = true; }
      for (i = 0; i < size; i++) { setFn(6, i, i % 2 === 0); setFn(i, 6, i % 2 === 0); }
      function finder(cx, cy) {
        for (var dy = -4; dy <= 4; dy++) for (var dx = -4; dx <= 4; dx++) {
          var d = Math.max(Math.abs(dx), Math.abs(dy)), xx = cx + dx, yy = cy + dy;
          if (xx >= 0 && xx < size && yy >= 0 && yy < size) setFn(xx, yy, d !== 2 && d !== 4);
        }
      }
      finder(3, 3); finder(size - 4, 3); finder(3, size - 4);
      var ap = [];
      if (ver > 1) {
        var na = Math.floor(ver / 7) + 2;
        var step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (na * 2 - 2)) * 2;
        ap = [6];
        for (var pos = size - 7; ap.length < na; pos -= step) ap.splice(1, 0, pos);
      }
      ap.forEach(function (ax, ia) {
        ap.forEach(function (ay, ib) {
          if ((ia === 0 && ib === 0) || (ia === 0 && ib === ap.length - 1) || (ia === ap.length - 1 && ib === 0)) return;
          for (var dy = -2; dy <= 2; dy++) for (var dx = -2; dx <= 2; dx++)
            setFn(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        });
      });
      function formatBits(mask) {
        var d = FORMAT_BITS[e] << 3 | mask, rem = d, n;
        for (n = 0; n < 10; n++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
        var b = (d << 10 | rem) ^ 0x5412;
        for (n = 0; n <= 5; n++) setFn(8, n, bit(b, n));
        setFn(8, 7, bit(b, 6)); setFn(8, 8, bit(b, 7)); setFn(7, 8, bit(b, 8));
        for (n = 9; n < 15; n++) setFn(14 - n, 8, bit(b, n));
        for (n = 0; n < 8; n++) setFn(size - 1 - n, 8, bit(b, n));
        for (n = 8; n < 15; n++) setFn(8, size - 15 + n, bit(b, n));
        setFn(8, size - 8, true);
      }
      formatBits(0);
      if (ver >= 7) {
        var vr = ver, n2;
        for (n2 = 0; n2 < 12; n2++) vr = (vr << 1) ^ ((vr >>> 11) * 0x1F25);
        var vb = ver << 12 | vr;
        for (n2 = 0; n2 < 18; n2++) {
          var c = bit(vb, n2), a = size - 11 + n2 % 3, b2 = Math.floor(n2 / 3);
          setFn(a, b2, c); setFn(b2, a, c);
        }
      }
      var idx = 0;
      for (var right = size - 1; right >= 1; right -= 2) {
        if (right === 6) right = 5;
        for (var vert = 0; vert < size; vert++) for (var j = 0; j < 2; j++) {
          var xx2 = right - j, upward = ((right + 1) & 2) === 0, yy2 = upward ? size - 1 - vert : vert;
          if (!fn[yy2][xx2] && idx < all.length * 8) { mod[yy2][xx2] = bit(all[idx >>> 3], 7 - (idx & 7)); idx++; }
        }
      }
      function applyMask(m) {
        for (var yy = 0; yy < size; yy++) for (var xx = 0; xx < size; xx++) {
          var inv;
          switch (m) {
            case 0: inv = (xx + yy) % 2 === 0; break;
            case 1: inv = yy % 2 === 0; break;
            case 2: inv = xx % 3 === 0; break;
            case 3: inv = (xx + yy) % 3 === 0; break;
            case 4: inv = (Math.floor(xx / 3) + Math.floor(yy / 2)) % 2 === 0; break;
            case 5: inv = xx * yy % 2 + xx * yy % 3 === 0; break;
            case 6: inv = (xx * yy % 2 + xx * yy % 3) % 2 === 0; break;
            default: inv = ((xx + yy) % 2 + xx * yy % 3) % 2 === 0;
          }
          if (!fn[yy][xx] && inv) mod[yy][xx] = !mod[yy][xx];
        }
      }
      function addHist(run, h) { if (h[0] === 0) run += size; h.pop(); h.unshift(run); }
      function countPat(h) {
        var n = h[1], core = n > 0 && h[2] === n && h[3] === n * 3 && h[4] === n && h[5] === n;
        return (core && h[0] >= n * 4 && h[6] >= n ? 1 : 0) + (core && h[6] >= n * 4 && h[0] >= n ? 1 : 0);
      }
      function endCount(color, run, h) {
        if (color) { addHist(run, h); run = 0; }
        run += size; addHist(run, h);
        return countPat(h);
      }
      function penalty() {
        var res = 0, a, b, color, run, h;
        for (a = 0; a < size; a++) {
          color = false; run = 0; h = [0, 0, 0, 0, 0, 0, 0];
          for (b = 0; b < size; b++) {
            if (mod[a][b] === color) { run++; if (run === 5) res += 3; else if (run > 5) res++; }
            else { addHist(run, h); if (!color) res += countPat(h) * 40; color = mod[a][b]; run = 1; }
          }
          res += endCount(color, run, h) * 40;
        }
        for (b = 0; b < size; b++) {
          color = false; run = 0; h = [0, 0, 0, 0, 0, 0, 0];
          for (a = 0; a < size; a++) {
            if (mod[a][b] === color) { run++; if (run === 5) res += 3; else if (run > 5) res++; }
            else { addHist(run, h); if (!color) res += countPat(h) * 40; color = mod[a][b]; run = 1; }
          }
          res += endCount(color, run, h) * 40;
        }
        for (a = 0; a < size - 1; a++) for (b = 0; b < size - 1; b++) {
          var cc = mod[a][b];
          if (cc === mod[a][b + 1] && cc === mod[a + 1][b] && cc === mod[a + 1][b + 1]) res += 3;
        }
        var dark = 0;
        mod.forEach(function (row) { row.forEach(function (v) { if (v) dark++; }); });
        var total = size * size;
        res += (Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1) * 10;
        return res;
      }
      var best = 0, minPen = Infinity;
      for (var m = 0; m < 8; m++) {
        applyMask(m); formatBits(m);
        var p = penalty();
        if (p < minPen) { minPen = p; best = m; }
        applyMask(m);
      }
      applyMask(best); formatBits(best);
      return { size: size, modules: mod, version: ver, ecc: e };
    }
    return { encode: encode, capacity: function (ver, e) { return dataCodewords(ver, e); } };
  })();

  /* ---------- Custom QR maker UI ---------- */
  var QM_STR = {
    si: {
      makeBtn: "✨ ඔබට අවශ්‍ය QR කේතයක් සකස් කරගන්න",
      title: "ඔබේම QR කේතය සාදන්න",
      type: "QR කේතයේ වර්ගය",
      types: { text: "පෙළ / වෙබ් ලිපිනය", contact: "සම්බන්ධතා (Contact)", wifi: "Wi-Fi", email: "ඊමේල්", phone: "දුරකථන අංකය", sms: "SMS පණිවිඩය" },
      f: {
        text: "පෙළ හෝ වෙබ් ලිපිනය (URL)", textPh: "https://example.com",
        name: "නම", phone: "දුරකථන අංකය", email: "ඊමේල් ලිපිනය", org: "ආයතනය / රැකියාව", url: "වෙබ් අඩවිය", address: "ලිපිනය",
        ssid: "Wi-Fi නම (SSID)", password: "මුරපදය", security: "ආරක්ෂණ වර්ගය", secWpa: "WPA / WPA2", secWep: "WEP", secNone: "නැත (විවෘත)", hidden: "සැඟවුණු ජාලයකි",
        to: "ලබන්නාගේ ඊමේල්", subject: "මාතෘකාව", body: "පණිවිඩය", smsNum: "දුරකථන අංකය", smsMsg: "පණිවිඩය"
      },
      color: "වර්ණය",
      colors: ["කොළ", "කළු", "නිල්", "රතු"],
      gen: "QR කේතය සාදන්න",
      dlAria: "QR කේතය බාගන්න",
      shareAria: "QR කේතය බෙදාගන්න",
      copied: "ලිපිනය පිටපත් කළා",
      share: "↗️ බෙදාගන්න",
      saveHint: "බාගත නොවේ නම්, රූපය දිගු වේලාවක් ඔබා සුරකින්න.",
      required: "කරුණාකර අවශ්‍ය තොරතුරු ඇතුළත් කරන්න.",
      tooLong: "ඇතුළත් කළ තොරතුරු ප්‍රමාණය QR කේතයකට වැඩියි. කෙටි කරන්න.",
      note: "QR කේතය ඔබේ උපාංගයේම සාදනු ලැබේ. ඔබේ තොරතුරු කිසිවෙකුට යවන්නේ නැත.",
      alt: "ඔබ සැදූ QR කේතය"
    },
    en: {
      makeBtn: "✨ Create your own QR code",
      title: "Create your own QR code",
      type: "QR code type",
      types: { text: "Text / Website link", contact: "Contact", wifi: "Wi-Fi", email: "Email", phone: "Phone number", sms: "SMS message" },
      f: {
        text: "Text or website link (URL)", textPh: "https://example.com",
        name: "Name", phone: "Phone number", email: "Email address", org: "Organization / Job title", url: "Website", address: "Address",
        ssid: "Wi-Fi name (SSID)", password: "Password", security: "Security type", secWpa: "WPA / WPA2", secWep: "WEP", secNone: "None (open)", hidden: "Hidden network",
        to: "Recipient email", subject: "Subject", body: "Message", smsNum: "Phone number", smsMsg: "Message"
      },
      color: "Color",
      colors: ["Green", "Black", "Blue", "Red"],
      gen: "Generate QR code",
      dlAria: "Download QR code",
      shareAria: "Share QR code",
      copied: "Link copied",
      share: "↗️ Share",
      saveHint: "If the download does not start, long-press the image to save it.",
      required: "Please fill in the required details.",
      tooLong: "The entered content is too long for a QR code. Please shorten it.",
      note: "The QR code is created on your device. Your information is not sent anywhere.",
      alt: "Your generated QR code"
    }
  };
  var QM_COLORS = ["#1E8F6C", "#000000", "#0B3A99", "#8B1A1A"];

  var QM_DL_ICON = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></svg>';

  function qmSave(cv, name) {
    function viaUrl(url, revoke) {
      var a = document.createElement('a');
      a.href = url; a.download = name; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      if (revoke) setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    }
    if (cv.toBlob && window.URL && URL.createObjectURL) {
      cv.toBlob(function (b) { if (b) viaUrl(URL.createObjectURL(b), true); else viaUrl(cv.toDataURL('image/png')); }, 'image/png');
    } else { viaUrl(cv.toDataURL('image/png')); }
  }

  var QM_SITE = 'https://buddhist-era.vercel.app';

  /* දැනට ඇති (embedded) QR කේතය තියුණු 1024px canvas එකක් ලෙස සාදයි */
  function qmStaticCanvas(cb) {
    var img = new Image();
    img.onload = function () {
      var sz = 1024, cv = document.createElement('canvas');
      cv.width = cv.height = sz;
      var ctx = cv.getContext('2d');
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, sz, sz);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, sz, sz);
      cb(cv);
    };
    img.onerror = function () { cb(null); };
    img.src = QR_DATA_URL;
  }

  function qmDownloadStatic() {
    qmStaticCanvas(function (cv) {
      if (cv) { qmSave(cv, 'buddhist-era-qr.png'); return; }
      var a = document.createElement('a');
      a.href = QR_DATA_URL; a.download = 'buddhist-era-qr.png';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    });
  }

  function qmToast(ov, msg) {
    var old = ov.querySelector('.qm-toast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.className = 'qm-toast';
    el.setAttribute('role', 'status');
    el.textContent = msg;
    ov.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2200);
  }

  /* Share: රූපය + ලිපිනය; කළ නොහැකි නම් ලිපිනය පිටපත් කරයි */
  function qmShareStatic(ov, t) {
    var title = 'Buddhist Era | බුද්ධ වර්ෂය';
    function fallback() {
      if (navigator.share) {
        navigator.share({ title: title, text: title, url: QM_SITE }).catch(function () {});
        return;
      }
      var done = function () { qmToast(ov, t.copied); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(QM_SITE).then(done, function () { window.prompt('', QM_SITE); });
      } else { window.prompt('', QM_SITE); }
    }
    if (!navigator.share || !window.File) { fallback(); return; }
    qmStaticCanvas(function (cv) {
      if (!cv || !cv.toBlob) { fallback(); return; }
      cv.toBlob(function (blob) {
        if (!blob) { fallback(); return; }
        var file = new File([blob], 'buddhist-era-qr.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({ files: [file], title: title, text: QM_SITE }).catch(function () {});
        } else { fallback(); }
      }, 'image/png');
    });
  }

  function qmField(id, label, kind, ph) {
    var inp = kind === 'area'
      ? '<textarea class="qm-input" id="qm-' + id + '" rows="3"' + (ph ? ' placeholder="' + ph + '"' : '') + '></textarea>'
      : '<input class="qm-input" id="qm-' + id + '" type="' + (kind || 'text') + '"' + (ph ? ' placeholder="' + ph + '"' : '') + ' autocomplete="off">';
    return '<label class="qm-label" for="qm-' + id + '">' + label + '</label>' + inp;
  }

  function qmFields(type, t) {
    var f = t.f;
    switch (type) {
      case 'contact':
        return qmField('name', f.name) + qmField('phone', f.phone, 'tel') + qmField('email', f.email, 'email') +
          qmField('org', f.org) + qmField('url', f.url, 'url') + qmField('address', f.address);
      case 'wifi':
        return qmField('ssid', f.ssid) + qmField('password', f.password) +
          '<label class="qm-label" for="qm-security">' + f.security + '</label>' +
          '<select class="qm-input" id="qm-security"><option value="WPA">' + f.secWpa + '</option><option value="WEP">' + f.secWep + '</option><option value="nopass">' + f.secNone + '</option></select>' +
          '<label class="qm-check"><input type="checkbox" id="qm-hidden"> <span>' + f.hidden + '</span></label>';
      case 'email':
        return qmField('to', f.to, 'email') + qmField('subject', f.subject) + qmField('body', f.body, 'area');
      case 'phone':
        return qmField('phone', f.phone, 'tel');
      case 'sms':
        return qmField('smsnum', f.smsNum, 'tel') + qmField('smsmsg', f.smsMsg, 'area');
      default:
        return qmField('text', f.text, 'area', f.textPh);
    }
  }

  function qmVal(box, id) {
    var el = box.querySelector('#qm-' + id);
    return el ? String(el.value || '').trim() : '';
  }
  function qmWifiEsc(s) { return s.replace(/([\\;,:"])/g, '\\$1'); }
  function qmVcEsc(s) { return s.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/([,;])/g, '\\$1'); }

  function qmPayload(type, box) {
    var v = function (id) { return qmVal(box, id); };
    switch (type) {
      case 'contact':
        if (!v('name') && !v('phone')) return null;
        var nm = v('name'), parts = nm.split(/\s+/), last = parts.length > 1 ? parts.pop() : '', first = parts.join(' ');
        var lines = ['BEGIN:VCARD', 'VERSION:3.0',
          'N:' + qmVcEsc(last) + ';' + qmVcEsc(first) + ';;;', 'FN:' + qmVcEsc(nm)];
        if (v('org')) lines.push('ORG:' + qmVcEsc(v('org')));
        if (v('phone')) lines.push('TEL:' + v('phone'));
        if (v('email')) lines.push('EMAIL:' + v('email'));
        if (v('url')) lines.push('URL:' + v('url'));
        if (v('address')) lines.push('ADR:;;' + qmVcEsc(v('address')) + ';;;;');
        lines.push('END:VCARD');
        return lines.join('\n');
      case 'wifi':
        if (!v('ssid')) return null;
        var sec = box.querySelector('#qm-security').value;
        return 'WIFI:T:' + sec + ';S:' + qmWifiEsc(v('ssid')) + ';' +
          (sec !== 'nopass' ? 'P:' + qmWifiEsc(box.querySelector('#qm-password').value) + ';' : '') +
          (box.querySelector('#qm-hidden').checked ? 'H:true;' : '') + ';';
      case 'email':
        if (!v('to')) return null;
        var q = [];
        if (v('subject')) q.push('subject=' + encodeURIComponent(v('subject')));
        if (v('body')) q.push('body=' + encodeURIComponent(v('body')));
        return 'mailto:' + v('to') + (q.length ? '?' + q.join('&') : '');
      case 'phone':
        if (!v('phone')) return null;
        return 'tel:' + v('phone').replace(/[^\d+]/g, '');
      case 'sms':
        if (!v('smsnum')) return null;
        return 'SMSTO:' + v('smsnum').replace(/[^\d+]/g, '') + ':' + v('smsmsg');
      default:
        var s = v('text');
        if (!s) return null;
        if (/^www\.[^\s]+$/i.test(s)) s = 'https://' + s;
        return s;
    }
  }

  function qmDraw(qr, color) {
    var quiet = 4, scale = Math.max(4, Math.floor(640 / (qr.size + quiet * 2)));
    var px = (qr.size + quiet * 2) * scale;
    var cv = document.createElement('canvas');
    cv.width = cv.height = px;
    var ctx = cv.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = color;
    for (var y = 0; y < qr.size; y++) for (var x = 0; x < qr.size; x++) {
      if (qr.modules[y][x]) ctx.fillRect((x + quiet) * scale, (y + quiet) * scale, scale, scale);
    }
    return cv;
  }

  function initMaker(ov, l) {
    var t = QM_STR[l] || QM_STR.si;
    var btn = ov.querySelector('#qrMakeBtn'), box = ov.querySelector('#qrMaker');
    if (!btn || !box) return;
    btn.textContent = t.makeBtn;
    btn.setAttribute('aria-expanded', 'false');
    var dlb = ov.querySelector('#qrDlBtn');
    if (dlb) { dlb.setAttribute('aria-label', t.dlAria); dlb.title = t.dlAria; dlb.addEventListener('click', qmDownloadStatic); }
    var shb = ov.querySelector('#qrShareBtn');
    if (shb) { shb.setAttribute('aria-label', t.shareAria); shb.title = t.shareAria; shb.addEventListener('click', function () { qmShareStatic(ov, t); }); }

    var types = ['text', 'contact', 'wifi', 'email', 'phone', 'sms'];
    var opts = types.map(function (k) { return '<option value="' + k + '">' + t.types[k] + '</option>'; }).join('');
    var sw = QM_COLORS.map(function (c, i) {
      return '<button type="button" class="qm-sw' + (i === 0 ? ' sel' : '') + '" data-color="' + c + '" aria-label="' + t.colors[i] + '" style="background:' + c + '"></button>';
    }).join('');
    box.innerHTML =
      '<h3 class="qm-title">' + t.title + '</h3>' +
      '<label class="qm-label" for="qm-type">' + t.type + '</label>' +
      '<select class="qm-input" id="qm-type">' + opts + '</select>' +
      '<div id="qm-fields">' + qmFields('text', t) + '</div>' +
      '<div class="qm-label">' + t.color + '</div><div class="qm-colors">' + sw + '</div>' +
      '<button type="button" class="qm-gen" id="qm-gen">' + t.gen + '</button>' +
      '<div class="qm-error" id="qm-error" role="alert"></div>' +
      '<div class="qm-result" id="qm-result"></div>' +
      '<p class="qm-note">' + t.note + '</p>';

    var color = QM_COLORS[0], lastCanvas = null;
    var fieldsBox = box.querySelector('#qm-fields'), typeSel = box.querySelector('#qm-type');
    var errBox = box.querySelector('#qm-error'), resBox = box.querySelector('#qm-result');

    btn.addEventListener('click', function () {
      var open = box.hasAttribute('hidden');
      if (open) box.removeAttribute('hidden'); else box.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) { try { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { box.scrollIntoView(); } }
    });

    typeSel.addEventListener('change', function () {
      fieldsBox.innerHTML = qmFields(typeSel.value, t);
      errBox.textContent = '';
      resBox.innerHTML = '';
      lastCanvas = null;
    });

    box.querySelector('.qm-colors').addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.qm-sw') : null;
      if (!b) return;
      color = b.getAttribute('data-color');
      box.querySelectorAll('.qm-sw').forEach(function (x) { x.classList.toggle('sel', x === b); });
    });

    box.querySelector('#qm-gen').addEventListener('click', function () {
      errBox.textContent = '';
      resBox.innerHTML = '';
      lastCanvas = null;
      var data = qmPayload(typeSel.value, box);
      if (!data) { errBox.textContent = t.required; return; }
      var qr = QRCore.encode(data, 'M');
      if (!qr) { errBox.textContent = t.tooLong; return; }
      lastCanvas = qmDraw(qr, color);
      var canShare = !!(navigator.share && window.File);
      var typeName = t.types[typeSel.value];
      resBox.innerHTML =
        '<img class="qm-img" alt="' + t.alt + '" src="' + lastCanvas.toDataURL('image/png') + '">' +
        '<div class="qr-label-row"><div class="qr-label">' + typeName + '</div>' +
        '<button type="button" class="qr-dl-btn" id="qm-dl" aria-label="' + t.dlAria + '" title="' + t.dlAria + '">' + QM_DL_ICON + '</button></div>' +
        (canShare ? '<div class="qm-actions"><button type="button" class="qm-sec" id="qm-share">' + t.share + '</button></div>' : '') +
        '<p class="qm-note">' + t.saveHint + '</p>';
      resBox.querySelector('#qm-dl').addEventListener('click', function () { qmSave(lastCanvas, 'qr-code.png'); });
      var sh = resBox.querySelector('#qm-share');
      if (sh) sh.addEventListener('click', function () {
        lastCanvas.toBlob(function (blob) {
          if (!blob) return;
          var file = new File([blob], 'qr-code.png', { type: 'image/png' });
          var p = (navigator.canShare && navigator.canShare({ files: [file] })) ? navigator.share({ files: [file] }) : navigator.share({ title: 'QR', text: data });
          if (p && p.catch) p.catch(function () {});
        }, 'image/png');
      });
      try { resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {}
    });
  }

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
    // 100% OFFLINE - mint color embedded, no external script
    box.innerHTML = '<img src="' + QR_DATA_URL + '" alt="QR Code" width="176" height="176" style="display:block; width:176px; height:176px; image-rendering:pixelated; border-radius:8px;">';
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
    initMaker(ov, l);
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