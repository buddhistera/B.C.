(function () {
  'use strict';

  var CONTENT = {
    si: `<header class="hero">
  <svg class="hero-orbit" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="heroSpaceGrad" cx="55%" cy="50%" r="85%">
        <stop offset="0%" stop-color="#1a0f30"/>
        <stop offset="55%" stop-color="#0a0518"/>
        <stop offset="100%" stop-color="#030108"/>
      </radialGradient>
      <radialGradient id="heroSunGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffef0"/>
        <stop offset="35%" stop-color="#ffe98a"/>
        <stop offset="75%" stop-color="#f5b342"/>
        <stop offset="100%" stop-color="#e88a1a"/>
      </radialGradient>
      <radialGradient id="heroSunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd966" stop-opacity="0.55"/>
        <stop offset="55%" stop-color="#ffb84d" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#ffb84d" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="heroEarthGrad" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#79b8f0"/>
        <stop offset="55%" stop-color="#2e6db4"/>
        <stop offset="100%" stop-color="#0d3a6b"/>
      </radialGradient>
      <radialGradient id="heroMoonGrad" cx="38%" cy="32%" r="72%">
        <stop offset="0%" stop-color="#fffde8"/>
        <stop offset="70%" stop-color="#e8dca8"/>
        <stop offset="100%" stop-color="#b0a070"/>
      </radialGradient>
      <clipPath id="heroEarthClip"><circle cx="380" cy="210" r="42"/></clipPath>
      <path id="heroMoonOrbit" d="M 560,210 A 180,120 0 1,1 200,210 A 180,120 0 1,1 560,210" fill="none"/>
    </defs>

    <rect width="900" height="420" fill="url(#heroSpaceGrad)"/>

    <g fill="#ffffff">
      <circle cx="48" cy="42" r="1.4" opacity="0.9"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.8s" repeatCount="indefinite"/></circle>
      <circle cx="130" cy="88" r="1" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.4s" repeatCount="indefinite"/></circle>
      <circle cx="210" cy="35" r="1.6" opacity="0.85"><animate attributeName="opacity" values="0.85;0.35;0.85" dur="4.1s" repeatCount="indefinite"/></circle>
      <circle cx="90" cy="180" r="1.1" opacity="0.75"/>
      <circle cx="42" cy="270" r="1.4" opacity="0.85"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="3.7s" repeatCount="indefinite"/></circle>
      <circle cx="160" cy="330" r="1.2" opacity="0.7"/>
      <circle cx="270" cy="380" r="1.4" opacity="0.8"><animate attributeName="opacity" values="0.8;0.25;0.8" dur="3.1s" repeatCount="indefinite"/></circle>
      <circle cx="95" cy="395" r="1" opacity="0.7"/>
      <circle cx="330" cy="55" r="1.2" opacity="0.8"/>
      <circle cx="370" cy="370" r="1.1" opacity="0.75"/>
      <circle cx="460" cy="45" r="1.5" opacity="0.85"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="2.9s" repeatCount="indefinite"/></circle>
      <circle cx="520" cy="90" r="1" opacity="0.7"/>
      <circle cx="600" cy="50" r="1.3" opacity="0.8"/>
      <circle cx="660" cy="120" r="1.1" opacity="0.75"><animate attributeName="opacity" values="0.75;0.25;0.75" dur="3.6s" repeatCount="indefinite"/></circle>
      <circle cx="710" cy="65" r="1.4" opacity="0.85"/>
      <circle cx="590" cy="370" r="1.2" opacity="0.75"/>
      <circle cx="680" cy="390" r="1" opacity="0.7"/>
      <circle cx="760" cy="360" r="1.3" opacity="0.8"/>
      <circle cx="820" cy="50" r="1.1" opacity="0.75"/>
      <circle cx="500" cy="395" r="1.2" opacity="0.75"/>
      <circle cx="180" cy="120" r="1" opacity="0.6"/>
      <circle cx="760" cy="180" r="1.1" opacity="0.65"><animate attributeName="opacity" values="0.65;0.2;0.65" dur="4.3s" repeatCount="indefinite"/></circle>
      <circle cx="350" cy="20" r="1" opacity="0.7"/>
      <circle cx="440" cy="410" r="1.1" opacity="0.7"/>
      <circle cx="280" cy="150" r="1" opacity="0.65"/>
      <circle cx="150" cy="240" r="1.2" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.9s" repeatCount="indefinite"/></circle>
    </g>

    <circle cx="845" cy="210" r="150" fill="url(#heroSunGlow)"/>
    <circle cx="845" cy="210" r="52" fill="url(#heroSunGrad)"/>

    <use href="#heroMoonOrbit" stroke="#c9a227" stroke-width="1.2" stroke-dasharray="7 9" opacity="0.5"/>

    <g>
      <circle cx="380" cy="210" r="42" fill="url(#heroEarthGrad)"/>
      <g clip-path="url(#heroEarthClip)">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 380 210" to="360 380 210" dur="26s" repeatCount="indefinite"/>
          <ellipse cx="362" cy="196" rx="16" ry="11" fill="#3d8b5f" opacity="0.85"/>
          <ellipse cx="395" cy="232" rx="13" ry="8" fill="#3d8b5f" opacity="0.85"/>
          <ellipse cx="404" cy="188" rx="9" ry="6" fill="#3d8b5f" opacity="0.75"/>
          <ellipse cx="366" cy="234" rx="11" ry="7" fill="#3d8b5f" opacity="0.75"/>
          <ellipse cx="343" cy="216" rx="7" ry="9" fill="#3d8b5f" opacity="0.7"/>
          <ellipse cx="419" cy="214" rx="8" ry="10" fill="#3d8b5f" opacity="0.7"/>
        </g>
      </g>
      <path d="M 380,168 A 42,42 0 0,0 380,252 Z" fill="rgba(2,4,18,0.66)"/>
      <circle cx="380" cy="210" r="42" fill="none" stroke="rgba(140,200,255,0.45)" stroke-width="1.3"/>
    </g>

    <g>
      <animateMotion dur="18s" repeatCount="indefinite" rotate="0">
        <mpath href="#heroMoonOrbit"/>
      </animateMotion>
      <circle r="18" fill="url(#heroMoonGrad)"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="80s" repeatCount="indefinite"/>
        <circle cx="-5" cy="-4" r="2.8" fill="#a89a70" opacity="0.55"/>
        <circle cx="4" cy="6" r="2.1" fill="#a89a70" opacity="0.5"/>
        <circle cx="7" cy="-5" r="1.6" fill="#a89a70" opacity="0.5"/>
        <circle cx="-3" cy="7" r="2.3" fill="#a89a70" opacity="0.45"/>
      </g>
      <path d="M 0,-18 A 18,18 0 0,0 0,18 Z" fill="rgba(2,4,18,0.75)"/>
      <circle r="18" fill="none" stroke="rgba(255,250,220,0.35)" stroke-width="1"/>
    </g>
  </svg>
  <p class="subtitle">ශ්‍රී සම්බුද්ධ ශාසනයේ කාල ගණනය පිළිබඳ ශාස්ත්‍රීය අත්පොත</p>
</header>
<div class="topbar"><div class="topbar-inner"><nav class="toc" aria-label="පටුන">
      <a href="#intro">හැඳින්වීම</a>
      <a href="#varsha">වර්ෂ දොළොස</a>
      <a href="#masa">මාස හා සෘතු</a>
      <a href="#paksha">පක්ෂ හා දින</a>
      <a href="#sankhya">සංඛ්‍යා</a>
      <a href="#gananaya">ගණනය කිරීම</a>
      <a href="#atikranta">අතික්කන්ත</a>
      <a href="#vagu">වගු 1–4</a>
      <a href="#chandra">චන්ද්‍ර කලාප</a>
      <a href="#masa-krama">මාස ක්‍රම</a>
      <a href="#uposatha">උපෝසථ</a>
      <a href="#adhimasa">අධිමාසය</a>
      <a href="#meton">මෙටෝනික්</a>
      <a href="#nishchaya">නිශ්චය</a>
      <a href="#pali">පාළි</a>
    </nav></div></div>
<main>

<!-- ============================================================
     1. හැඳින්වීම (PDF page 1)
     ============================================================ -->
<section class="card" id="intro">
  <h2>බුද්ධ වර්ෂය ගණනය කිරීම</h2>
  <p>
    බුද්ධ වර්ෂය බුදුරජාණන් වහන්සේගේ පරිනිර්වාණයෙන් පසු ආරම්භ වේ.
    බුදුරජාණන් වහන්සේගේ පරිනිර්වාණය <strong>වෙසක් පුර පසළොස්වක පෝය දිනයේදී</strong>
    සිදු වූ අතර බුදු සසුනේ ආයුෂය අවුරුදු <strong>5000</strong> ක් කල් පවතින්නේය.
    මෙම කාලය බුද්ධ වර්ෂයයි.
  </p>
  <div class="info-box">
    බුද්ධ වර්ෂය <strong>චන්ද්‍රයාගේ ගමන අනුව</strong> ගණනය කරනු ලබන බැවින්
    බුදුරජාණන් වහන්සේගේ පරිනිර්වාණයෙන් පසු කොපමණ වර්ෂ, මාස, දින ඉක්ම ගියේ ද,
    කොපමණ ඉතිරි වන්නේ ද, වර්තමාන වර්ෂය, සෘතුව, පක්ෂය, මාසය, දිනය කුමක් ද යන
    මේවා ගණනය කිරීම සඳහා පහත සඳහන් වන මූලික තොරතුරු දැන ගත යුතුය.
  </div>
</section>

<!-- ============================================================
     2. වර්ෂ දොළොස (PDF page 1–2)
     ============================================================ -->
<section class="card" id="varsha">
  <h2>වර්ෂ දොළොස</h2>
  <div class="verse">
    මූසිකෝ වසභෝ ව්‍යග්ඝ<br>
    සස නාගානි මේවච<br>
    සප්පස්සජ කපී වේව<br>
    කුක්කුටෝ සෝණ සූකරෝ
  </div>
  <p>බුද්ධ වර්ෂයේ වර්ෂ නාම දොළොසකි. ඒවා චක්‍රයක් ලෙස පවතී:</p>

  <div class="year-grid">
    <div class="year-card"><div class="num">01</div><div class="name">මූසිකෝ</div><div class="meaning">මියා</div></div>
    <div class="year-card"><div class="num">02</div><div class="name">වසභෝ</div><div class="meaning">ගොනා</div></div>
    <div class="year-card"><div class="num">03</div><div class="name">ව්‍යග්ඝෝ</div><div class="meaning">ව්‍යාඝ්‍රයා</div></div>
    <div class="year-card"><div class="num">04</div><div class="name">සසෝ</div><div class="meaning">හාවා</div></div>
    <div class="year-card"><div class="num">05</div><div class="name">නාගෝ</div><div class="meaning">නාගයා</div></div>
    <div class="year-card"><div class="num">06</div><div class="name">සප්පෝ</div><div class="meaning">සර්පයා</div></div>
    <div class="year-card"><div class="num">07</div><div class="name">අජෝ</div><div class="meaning">එළුවා</div></div>
    <div class="year-card"><div class="num">08</div><div class="name">කපි</div><div class="meaning">වඳුරා</div></div>
    <div class="year-card"><div class="num">09</div><div class="name">කුක්කුටෝ</div><div class="meaning">කුකුළා</div></div>
    <div class="year-card"><div class="num">10</div><div class="name">සෝණෝ</div><div class="meaning">බල්ලා</div></div>
    <div class="year-card"><div class="num">11</div><div class="name">සූකරෝ</div><div class="meaning">ඌරා</div></div>
    <div class="year-card"><div class="num">12</div><div class="name">අස්සෝ</div><div class="meaning">අශ්වයා</div></div>
  </div>
</section>
<section class="card" id="masa">
  <h2>මාස දොළොස හා සෘතු තුන</h2>
  <p>
    බුද්ධ වර්ෂයේ පළමු මාසය <strong>ජෙට්ඨ (පොසොන්)</strong> යි. එය වෙසක් පුර පසළොස්වක
    පෝය දිනයට පසු දින සිට ආරම්භ වේ. මාස දොළොස සෘතු තුනකට බෙදී ඇත:
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>අංකය</th>
          <th>මාසය (පාළි)</th>
          <th>මාසය (සිංහල)</th>
          <th>ග්‍රෙගෝරියානු</th>
          <th>සෘතුව</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>ජෙට්ඨ</td><td>පොසොන්</td><td>මැයි – ජුනි</td><td class="season-hot" rowspan="2">ගිම්හාන</td></tr>
        <tr><td>2</td><td>ආසාළ්හ</td><td>ඇසළ</td><td>ජුනි – ජූලි</td></tr>
        <tr><td>3</td><td>සාවන</td><td>නිකිණි</td><td>ජූලි – අගෝස්තු</td><td class="season-rain" rowspan="4">වස්සාන</td></tr>
        <tr><td>4</td><td>පොට්ඨපාද</td><td>බිනර</td><td>අගෝස්තු – සැප්.</td></tr>
        <tr><td>5</td><td>අස්සයුජ</td><td>වප්</td><td>සැප්. – ඔක්.</td></tr>
        <tr><td>6</td><td>කත්තික</td><td>ඉල්</td><td>ඔක්. – නොවැ.</td></tr>
        <tr><td>7</td><td>මාගසිර</td><td>උඳුවප්</td><td>නොවැ. – දෙසැ.</td><td class="season-cold" rowspan="4">හේමන්ත</td></tr>
        <tr><td>8</td><td>ඵුස්ස</td><td>දුරුතු</td><td>දෙසැ. – ජනවාරි</td></tr>
        <tr><td>9</td><td>මාඝ</td><td>නවම්</td><td>ජනවාරි – පෙබ.</td></tr>
        <tr><td>10</td><td>ඵග්ගුණ</td><td>මැදින්</td><td>පෙබ. – මාර්තු</td></tr>
        <tr><td>11</td><td>චිත්ත</td><td>බක්</td><td>මාර්තු – අප්‍රේල්</td><td class="season-hot" rowspan="2">ගිම්හාන</td></tr>
        <tr><td>12</td><td>වේසාඛ</td><td>වෙසක්</td><td>අප්‍රේල් – මැයි</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     4. පක්ෂ දෙක, උපෝසථ දෙක, දින හත (PDF page 2)
     ============================================================ -->
<section class="card" id="paksha">
  <h2>පක්ෂ දෙක, උපෝසථ දෙක හා දින හත</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>පක්ෂ දෙක</h4>
      <table>
        <tr><td>1. සුක්කපක්ඛෝ</td><td>ශුක්ල පක්ෂය (පුර පක්ෂය)</td></tr>
        <tr><td>2. කාලපක්ඛෝ</td><td>කාල පක්ෂය (අව පක්ෂය)</td></tr>
      </table>
    </div>
    <div class="paksha-card kala">
      <h4>උපෝසථ දෙක</h4>
      <table>
        <tr><td>1. පණ්ණරසී</td><td>පසළොස්වක පෝය</td></tr>
        <tr><td>2. චාතුද්දසී</td><td>තුදුස්වක පෝය</td></tr>
      </table>
    </div>
  </div>

  <h3>දින හත</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>අංකය</th><th>පාළි නාමය</th><th>සිංහල</th><th>දිනය</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>රවිවාරෝ</td><td>රවි දින</td><td>ඉරිදා</td></tr>
        <tr><td>2</td><td>චන්දවාරෝ</td><td>සඳු දින</td><td>සඳුදා</td></tr>
        <tr><td>3</td><td>භුම්මවාරෝ</td><td>කුජ දින</td><td>අඟහරුවාදා</td></tr>
        <tr><td>4</td><td>බුධවාරෝ</td><td>බුධ දින</td><td>බදාදා</td></tr>
        <tr><td>5</td><td>ගුරුවාරෝ</td><td>ගුරු දින</td><td>බ්‍රහස්පතින්දා</td></tr>
        <tr><td>6</td><td>සුක්කවාරෝ</td><td>කිවි දින</td><td>සිකුරාදා</td></tr>
        <tr><td>7</td><td>සෝරවාරෝ</td><td>ශනි දින</td><td>සෙනසුරාදා</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     5. සංඛ්‍යා සහ ක්‍රම සංඛ්‍යා (PDF page 3)
     ============================================================ -->
<section class="card" id="sankhya">
  <h2>සංඛ්‍යා සහ ක්‍රම සංඛ්‍යා</h2>
  <p>පාළි භාෂාවෙන් සංඛ්‍යා ලිවීමේදී භාවිතා වන මූලික සංඛ්‍යා:</p>

  <div class="num-grid">
    <div class="num-cell"><span class="n">1</span><span class="p">ඒක</span></div>
    <div class="num-cell"><span class="n">2</span><span class="p">ද්වි</span></div>
    <div class="num-cell"><span class="n">3</span><span class="p">ති</span></div>
    <div class="num-cell"><span class="n">4</span><span class="p">චතු</span></div>
    <div class="num-cell"><span class="n">5</span><span class="p">පඤ්ච</span></div>
    <div class="num-cell"><span class="n">6</span><span class="p">ඡ</span></div>
    <div class="num-cell"><span class="n">7</span><span class="p">සත්ත</span></div>
    <div class="num-cell"><span class="n">8</span><span class="p">අට්ඨ</span></div>
    <div class="num-cell"><span class="n">9</span><span class="p">නව</span></div>
    <div class="num-cell"><span class="n">10</span><span class="p">දස</span></div>
    <div class="num-cell"><span class="n">11</span><span class="p">ඒකාදස</span></div>
    <div class="num-cell"><span class="n">12</span><span class="p">ද්වාදස</span></div>
    <div class="num-cell"><span class="n">13</span><span class="p">තේරස</span></div>
    <div class="num-cell"><span class="n">14</span><span class="p">චුද්දස</span></div>
    <div class="num-cell"><span class="n">15</span><span class="p">පණ්ණරස</span></div>
    <div class="num-cell"><span class="n">16</span><span class="p">සෝළස</span></div>
    <div class="num-cell"><span class="n">17</span><span class="p">සත්තරස</span></div>
    <div class="num-cell"><span class="n">18</span><span class="p">අට්ඨාරස</span></div>
    <div class="num-cell"><span class="n">19</span><span class="p">ඒකූනවීසති</span></div>
    <div class="num-cell"><span class="n">20</span><span class="p">වීසති</span></div>
    <div class="num-cell"><span class="n">21</span><span class="p">ඒකවීසති</span></div>
    <div class="num-cell"><span class="n">22</span><span class="p">ද්විවීසති</span></div>
    <div class="num-cell"><span class="n">23</span><span class="p">තේවීසති</span></div>
    <div class="num-cell"><span class="n">24</span><span class="p">චතුවීසති</span></div>
    <div class="num-cell"><span class="n">25</span><span class="p">පඤ්චවීසති</span></div>
    <div class="num-cell"><span class="n">26</span><span class="p">ඡබ්බීසති</span></div>
    <div class="num-cell"><span class="n">27</span><span class="p">සත්තවීසති</span></div>
    <div class="num-cell"><span class="n">28</span><span class="p">අට්ඨවීසති</span></div>
    <div class="num-cell"><span class="n">29</span><span class="p">ඒකූනතිංසති</span></div>
    <div class="num-cell"><span class="n">30</span><span class="p">තිංසති</span></div>
    <div class="num-cell"><span class="n">31</span><span class="p">ඒකතිංසති</span></div>
    <div class="num-cell"><span class="n">32</span><span class="p">ද්වත්තිංසති</span></div>
    <div class="num-cell"><span class="n">33</span><span class="p">තේත්තිංසති</span></div>
    <div class="num-cell"><span class="n">34</span><span class="p">චතුත්තිංසති</span></div>
    <div class="num-cell"><span class="n">35</span><span class="p">පඤ්චතිංසති</span></div>
    <div class="num-cell"><span class="n">36</span><span class="p">ඡත්තිංසති</span></div>
    <div class="num-cell"><span class="n">37</span><span class="p">සත්තතිංසති</span></div>
    <div class="num-cell"><span class="n">38</span><span class="p">අට්ඨතිංසති</span></div>
    <div class="num-cell"><span class="n">39</span><span class="p">ඒකූනචත්තාළීසති</span></div>
    <div class="num-cell"><span class="n">40</span><span class="p">චත්තාළීසති</span></div>
    <div class="num-cell"><span class="n">50</span><span class="p">පඤ්ඤාස</span></div>
    <div class="num-cell"><span class="n">60</span><span class="p">සට්ඨි</span></div>
    <div class="num-cell"><span class="n">70</span><span class="p">සත්තති</span></div>
    <div class="num-cell"><span class="n">80</span><span class="p">අසීති</span></div>
    <div class="num-cell"><span class="n">90</span><span class="p">නවුති</span></div>
    <div class="num-cell"><span class="n">100</span><span class="p">සතං</span></div>
    <div class="num-cell"><span class="n">1000</span><span class="p">සහස්සං</span></div>
    <div class="num-cell"><span class="n">2000</span><span class="p">ද්විසහස්සං</span></div>
    <div class="num-cell"><span class="n">3000</span><span class="p">තිසහස්සං</span></div>
    <div class="num-cell"><span class="n">4000</span><span class="p">චතුසහස්සං</span></div>
    <div class="num-cell"><span class="n">5000</span><span class="p">පඤ්චසහස්සං</span></div>
  </div>

  <h3>ක්‍රම සංඛ්‍යා (Ordinals)</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>දිනය</th><th>පාළි</th><th>සිංහල</th></tr></thead>
      <tbody>
        <tr><td>1 වැනි</td><td>පඨමං</td><td>පළමුවැනි</td></tr>
        <tr><td>2 වැනි</td><td>දුතියං</td><td>දෙවැනි</td></tr>
        <tr><td>3 වැනි</td><td>තතියං</td><td>තුන්වැනි</td></tr>
        <tr><td>4 වැනි</td><td>චතුත්ථං</td><td>සතරවැනි</td></tr>
        <tr><td>5 වැනි</td><td>පඤ්චමං</td><td>පස්වැනි</td></tr>
        <tr><td>6 වැනි</td><td>ඡට්ඨමං</td><td>සවැනි</td></tr>
        <tr><td>7 වැනි</td><td>සත්තමං</td><td>සත්වැනි</td></tr>
        <tr><td>8 වැනි</td><td>අට්ඨමං</td><td>අටවැනි</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     6. පවත්නා කාලය ගණනය කරන හැටි (PDF page 4–5)
     ============================================================ -->
<section class="card" id="gananaya">
  <h2>පවත්නා කාලය ගණනය කරන හැටි</h2>
  <p>
    පවත්නා කාලය ගණනය කිරීම සඳහා, ශුක්ල පක්ෂය, කාල පක්ෂය, පණ්ණරසී (පසළොස්වක) හා
    චාතුද්දසී (තුදුස්වක) යනාදී පොහෝ දින දක්වන <strong>ව්‍ය.ව. 2015</strong> වර්ෂයේ
    වස්සාන කාලය උදාහරණයක් ලෙස ගෙන උපෝසථ දින දර්ශනයක් දක්වනු ලැබේ.
  </p>

  <p style="text-align:center; font-weight:700; color:var(--burgundy-700); margin:14px 0;">
    ශ්‍රී බු.ව. 2558–59 &nbsp;|&nbsp; උපෝසථ දින දර්ශනය &nbsp;|&nbsp; ව්‍ය.ව. 2015
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>සෘතුව</th><th>මාසය</th><th>දිනය</th><th>දවස</th><th>පක්ෂය</th><th>පොහොය</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">වස්සාන</td><td>ජූලි</td><td>30</td><td>බ්‍රහස්පතින්දා</td><td>ශුක්ල</td><td>0 පණ්ණරසී</td></tr>
        <tr><td>අගෝස්තු</td><td>14</td><td>සිකුරාදා</td><td>කාල</td><td>1 පණ්ණරසී</td></tr>
        <tr><td>අගෝස්තු</td><td>29</td><td>සෙනසුරාදා</td><td>ශුක්ල</td><td>2 පණ්ණරසී</td></tr>
        <tr><td>සැප්තැම්බර්</td><td>12</td><td>සෙනසුරාදා</td><td>කාල</td><td>3 චාතුද්දසී</td></tr>
        <tr><td>සැප්තැම්බර්</td><td>27</td><td>ඉරිදා</td><td>ශුක්ල</td><td>4 පණ්ණරසී</td></tr>
        <tr><td>ඔක්තෝබර්</td><td>12</td><td>සඳුදා</td><td>කාල</td><td>5 පණ්ණරසී</td></tr>
        <tr><td>ඔක්තෝබර්</td><td>27</td><td>අඟහරුවාදා</td><td>ශුක්ල</td><td>6 පණ්ණරසී</td></tr>
        <tr><td>නොවැම්බර්</td><td>10</td><td>අඟහරුවාදා</td><td>කාල</td><td>7 චාතුද්දසී</td></tr>
        <tr><td>නොවැම්බර්</td><td>25</td><td>බදාදා</td><td>ශුක්ල</td><td>8 පණ්ණරසී</td></tr>
      </tbody>
    </table>
  </div>

  <p>
    මෙහි සැප්තැම්බර් 12 වන සෙනසුරාදා, අමාවක පොහොය චාතුද්දසියක් වන බව දැකිය හැකිය.
    දැන් උදාහරණයක් ලෙස, සැප්තැම්බර් 15 වන දිනය ගැන විස්තර සොයා ගැනීමට අවශ්‍ය නම්,
    එම දිනය අමාවක පොහොයෙන් දින තුනකට පසුව සිදු වන බවද අඟහරුවාදා දිනයක් වන බවද
    ශුක්ල පක්ෂයේ තුන්වැනි දිනය වන බවද ඉන් අදහස් වේ.
  </p>

  <div class="table-wrap">
    <table>
      <thead><tr><th>සෘතුව</th><th>දිනය</th><th>දවස</th><th>විස්තරය</th></tr></thead>
      <tbody>
        <tr><td>වස්සාන</td><td>සැප්තැම්බර් 12</td><td>සෙනසුරාදා</td><td>අමාවක දිනය</td></tr>
        <tr><td>වස්සාන</td><td>සැප්තැම්බර් 13</td><td>ඉරිදා</td><td>පළමු වැනි දිනය</td></tr>
        <tr><td>වස්සාන</td><td>සැප්තැම්බර් 14</td><td>සඳුදා</td><td>දෙවැනි දිනය</td></tr>
        <tr><td>වස්සාන</td><td>සැප්තැම්බර් 15</td><td>අඟහරුවාදා</td><td><strong>තුන්වැනි දිනය</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>
    දැන් සැප්තැම්බර් 15 වෙනි දිනය ගැන විස්තර පාළි භාෂාවෙන් මෙසේ කිය යුතු:
  </p>

  <div class="gn-pali-box">
    අයං වස්සානඋතු (මෙය වස්සාන සෘතුව). අස්මිං උතුම්හි (මෙම සෘතුවෙහි)
    පොට්ඨපාදමාසස්ස (සැප්තැම්බර් මාසයේ) සුක්කපක්ඛේ (ශුක්ල පක්ෂයෙහි)
    තතියං (තුන්වැනි දිනය), භුම්මවාරමිදං (මෙය අඟහරුවාදා) ඉති දට්ඨබ්බං
    (මෙසේ දත යුතුයි).
  </div>
</section>

<!-- ============================================================
     7. ගෙවී ඇති කාලය සහ ඉතිරි කාලය (PDF page 6)
     ============================================================ -->
<section class="card" id="atikranta">
  <h2>ගෙවී ඇති කාලය (අතික්කන්ත) සහ ඉතිරිව ඇති කාලය (අවසිට්ඨ)</h2>

  <h3>ගෙවී ඇති කාලය</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ඒකකය</th><th>ගණන</th><th class="left">විස්තරය</th></tr></thead>
      <tbody>
        <tr>
          <td>වර්ෂ</td><td>2558</td>
          <td class="left">ව්‍ය. 2015 මැයි 3 වන ඉරිදා වෙසක් පුර පසළොස්වක පොහොයට පසු දිනයේදී නව බු.ව. 2559 ආරම්භ විය. එබැවින් බු.ව. 2558 ගෙවී ගොස් ඇත.</td>
        </tr>
        <tr>
          <td>මාස</td><td>3</td>
          <td class="left">සාවන (අගෝස්තු) මස 29 වන දින පුර පසළොස්වක පොහොයට පසු දිනයේදී පොට්ඨපාද (සැප්තැම්බර්) මාසය ආරම්භ විය. එබැවින් වෙසක් පුර පසළොස්වක පොහොය සිට පොට්ඨපාද මාසය තෙක් මාස 3ක් ගෙවී ගොස් ඇත.</td>
        </tr>
        <tr>
          <td>දින</td><td>16</td>
          <td class="left">සාවන (අගෝස්තු) මස 29 වන දින පුර පසළොස්වක පොහොයට පසු දිනය සිට පොට්ඨපාද (සැප්තැම්බර්) මස 15 දින තෙක් දින 16ක් ගෙවී ගොස් ඇත.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>ඉතිරිව ඇති කාලය</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ඒකකය</th><th>ගණන</th><th class="left">විස්තරය</th></tr></thead>
      <tbody>
        <tr>
          <td>වර්ෂ</td><td>2441</td>
          <td class="left">බුද්ධ වර්ෂ 5000 න් වර්ෂ 2558 අඩුකළ විට වර්ෂ 2442කි. දැන් පවත්නා වර්ෂය එයින් අඩු කිරීමෙන් වර්ෂ 2441ක් ලැබේ. මෙය ගෙවියාමට ඉතිරිව ඇති වර්ෂයෝය.</td>
        </tr>
        <tr>
          <td>මාස</td><td>9</td>
          <td class="left">බු.ව. 2559 වර්ෂය අධිමාසයක් ඇති වර්ෂයක් බැවින් මාස 13ක් ලැබේ. මාස 13න් මාස 3ක් අඩුකළ විට මාස 10කි. එයින් දැන් පවත්නා මාසය අඩු කිරීමෙන් මාස 9ක් ලැබේ.</td>
        </tr>
        <tr>
          <td>දින</td><td>12</td>
          <td class="left">පොට්ඨපාද (සැප්තැම්බර්) මාසයේ අමාවක පොහොය චාතුද්දසී වූ බැවින් එම මාසය දින 29කින් යුක්ත විය. දින 29න් දින 16 අඩුකළ විට දින 13කි. දැන් පවත්නා දිනය එයින් අඩු කිරීමෙන් දින 12ක් ගෙවියාමට ඉතිරිව ඇත.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     8. වගු 1–4 (PDF pages 8–13)
     ============================================================ -->
<section class="card" id="vagu">
  <h2>වගුව 1 – වර්ෂ (සංවච්ඡරාති)</h2>
  <p>පවත්නා බුද්ධ වර්ෂය, ගෙවී ඇති/ඉතිරි වර්ෂ ගණන සහ වර්ෂයේ නාමය:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>පවත්නා වර්ෂය</th><th>වර්ෂ නාමය</th><th>ව්‍ය.ව.</th><th>ගෙවී ඇති (අතික්කන්ත)</th><th>ඉතිරි (අවසිට්ඨ)</th></tr>
      </thead>
      <tbody>
        <tr><td>බු.ව. 2559</td><td>කපි</td><td>2015 මැයි</td><td>2558</td><td>2441</td></tr>
        <tr><td>බු.ව. 2560</td><td>කුක්කුට</td><td>2016 මැයි</td><td>2559</td><td>2440</td></tr>
        <tr><td>බු.ව. 2561</td><td>සෝණ</td><td>2017 මැයි</td><td>2560</td><td>2439</td></tr>
        <tr><td>බු.ව. 2562</td><td>සූකර</td><td>2018 මැයි</td><td>2561</td><td>2438</td></tr>
        <tr><td>බු.ව. 2563</td><td>මූසික</td><td>2019 මැයි</td><td>2562</td><td>2437</td></tr>
        <tr><td>බු.ව. 2564</td><td>වසභ</td><td>2020 මැයි</td><td>2563</td><td>2436</td></tr>
        <tr><td>බු.ව. 2565</td><td>ව්‍යග්ඝ</td><td>2021 මැයි</td><td>2564</td><td>2435</td></tr>
        <tr><td>බු.ව. 2566</td><td>සස</td><td>2022 මැයි</td><td>2565</td><td>2434</td></tr>
        <tr><td>බු.ව. 2567</td><td>නාග</td><td>2023 මැයි</td><td>2566</td><td>2433</td></tr>
        <tr><td>බු.ව. 2568</td><td>සප්ප</td><td>2024 මැයි</td><td>2567</td><td>2432</td></tr>
        <tr><td>බු.ව. 2569</td><td>අස්ස</td><td>2025 මැයි</td><td>2568</td><td>2431</td></tr>
        <tr><td>බු.ව. 2570</td><td>අජ</td><td>2026 මැයි</td><td>2569</td><td>2430</td></tr>
        <tr><td>බු.ව. 2571</td><td>කපි</td><td>2027 මැයි</td><td>2570</td><td>2429</td></tr>
        <tr><td>බු.ව. 2572</td><td>කුක්කුට</td><td>2028 මැයි</td><td>2571</td><td>2428</td></tr>
        <tr><td>බු.ව. 2573</td><td>සෝණ</td><td>2029 මැයි</td><td>2572</td><td>2427</td></tr>
        <tr><td>බු.ව. 2574</td><td>සූකර</td><td>2030 මැයි</td><td>2573</td><td>2426</td></tr>
      </tbody>
    </table>
  </div>

  <h2>වගුව 2 – මාස හා සෘතු</h2>
  <p>සෑම මාසයක්ම පුර පසළොස්වක පොහොය දිනට පසු දින සිට ආරම්භ වේ. එබැවින් සෑම වර්ෂයේම පළමුවන මාසය <strong>ජෙට්ඨ (පොසොන්)</strong> යි.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>පවත්නා මාසය</th><th>ගෙවී ඇති මාස</th><th>ඉතිරිව ඇති මාස</th><th>සෘතුව</th></tr>
      </thead>
      <tbody>
        <tr><td>1. ජෙට්ඨ – පොසොන් (මැයි–ජුනි)</td><td>0</td><td>11 (ඒකාදස)</td><td class="season-hot" rowspan="2">ගිම්හාන</td></tr>
        <tr><td>2. ආසාළ්හ – ඇසළ (ජුනි–ජූලි)</td><td>1 (ඒක)</td><td>10 (දස)</td></tr>
        <tr><td>3. සාවන – නිකිණි (ජූලි–අගෝ.)</td><td>2 (ද්වේ)</td><td>9 (නව)</td><td class="season-rain" rowspan="4">වස්සාන</td></tr>
        <tr><td>4. පොට්ඨපාද – බිනර (අගෝ.–සැප්.)</td><td>3 (තී)</td><td>8 (අට්ඨ)</td></tr>
        <tr><td>5. අස්සයුජ – වප් (සැප්.–ඔක්.)</td><td>4 (චතු)</td><td>7 (සත්ත)</td></tr>
        <tr><td>6. කත්තික – ඉල් (ඔක්.–නොවැ.)</td><td>5 (පඤ්ච)</td><td>6 (ඡ)</td></tr>
        <tr><td>7. මාගසිර – උඳුවප් (නොවැ.–දෙසැ.)</td><td>6 (ඡ)</td><td>5 (පඤ්ච)</td><td class="season-cold" rowspan="4">හේමන්ත</td></tr>
        <tr><td>8. ඵුස්ස – දුරුතු (දෙසැ.–ජන.)</td><td>7 (සත්ත)</td><td>4 (චතු)</td></tr>
        <tr><td>9. මාඝ – නවම් (ජන.–පෙබ.)</td><td>8 (අට්ඨ)</td><td>3 (තී)</td></tr>
        <tr><td>10. ඵග්ගුණ – මැදින් (පෙබ.–මාර්.)</td><td>9 (නව)</td><td>2 (ද්වේ)</td></tr>
        <tr><td>11. චිත්ත – බක් (මාර්.–අප්‍රේ.)</td><td>10 (දස)</td><td>1 (ඒක)</td><td class="season-hot" rowspan="2">ගිම්හාන</td></tr>
        <tr><td>12. වේසාඛ – වෙසක් (අප්‍රේ.–මැයි)</td><td>11 (ඒකාදස)</td><td>0</td></tr>
      </tbody>
    </table>
  </div>
    <h2>වගුව 3 – දින (දිවසානි)</h2>
  <p>පවත්නා දිනය අනුව ගෙවී ඇති දින සහ ඉතිරි දින ගණනය:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>දින අංකය</th><th>ගෙවී ඇති දින</th><th>ඉතිරි දින</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>0</td><td>29 ඒකූනතිංසති</td></tr>
        <tr><td>2</td><td>1 ඒක</td><td>28 අට්ඨවීසති</td></tr>
        <tr><td>3</td><td>2 ද්වේ</td><td>27 සත්තවීසති</td></tr>
        <tr><td>4</td><td>3 තී</td><td>26 ඡබ්බීසති</td></tr>
        <tr><td>5</td><td>4 චතු</td><td>25 පඤ්චවීසති</td></tr>
        <tr><td>6</td><td>5 පඤ්ච</td><td>24 චතුවීසති</td></tr>
        <tr><td>7</td><td>6 ඡ</td><td>23 තේවීසති</td></tr>
        <tr><td>8</td><td>7 සත්ත</td><td>22 ද්විවීසති</td></tr>
        <tr><td>9</td><td>8 අට්ඨ</td><td>21 ඒකවීසති</td></tr>
        <tr><td>10</td><td>9 නව</td><td>20 වීසති</td></tr>
        <tr><td>11</td><td>10 දස</td><td>19 ඒකූනවීසති</td></tr>
        <tr><td>12</td><td>11 ඒකාදස</td><td>18 අට්ඨාරස</td></tr>
        <tr><td>13</td><td>12 ද්වාදස</td><td>17 සත්තරස</td></tr>
        <tr><td>14</td><td>13 තේරස</td><td>16 සෝළස</td></tr>
        <tr><td>15</td><td>14 චුද්දස</td><td>15 පණ්ණරස</td></tr>
        <tr><td>16</td><td>15 පණ්ණරස</td><td>14 චුද්දස</td></tr>
        <tr><td>17</td><td>16 සෝළස</td><td>13 තේරස</td></tr>
        <tr><td>18</td><td>17 සත්තරස</td><td>12 ද්වාදස</td></tr>
        <tr><td>19</td><td>18 අට්ඨාරස</td><td>11 ඒකාදස</td></tr>
        <tr><td>20</td><td>19 ඒකූනවීසති</td><td>10 දස</td></tr>
        <tr><td>21</td><td>20 වීසති</td><td>9 නව</td></tr>
        <tr><td>22</td><td>21 ඒකවීසති</td><td>8 අට්ඨ</td></tr>
        <tr><td>23</td><td>22 ද්විවීසති</td><td>7 සත්ත</td></tr>
        <tr><td>24</td><td>23 තේවීසති</td><td>6 ඡ</td></tr>
        <tr><td>25</td><td>24 චතුවීසති</td><td>5 පඤ්ච</td></tr>
        <tr><td>26</td><td>25 පඤ්චවීසති</td><td>4 චතු</td></tr>
        <tr><td>27</td><td>26 ඡබ්බීසති</td><td>3 තී</td></tr>
        <tr><td>28</td><td>27 සත්තවීසති</td><td>2 ද්වේ</td></tr>
        <tr><td>29</td><td>28 අට්ඨවීසති</td><td>1 ඒක</td></tr>
        <tr><td>30</td><td>29 ඒකූනතිංසති</td><td>0</td></tr>
      </tbody>
    </table>
  </div>

  <h2>වගුව 4 – පක්ෂයේ දින (තිථි / ස්තිථි)</h2>
  <p>පුර පසළොස්වක හෝ අමාවක පොහොය දිනට පසු දින සිට තිථි ආරම්භ වේ.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>දිනය</th><th>පාළි</th><th>පුර පක්ෂය</th><th>අව පක්ෂය</th></tr>
      </thead>
      <tbody>
        <tr><td>—</td><td>—</td><td><strong>පුර පෝය</strong></td><td><strong>අමාවක පෝය</strong></td></tr>
        <tr><td>1</td><td>පඨමා</td><td>පුර පෑළවිය</td><td>අව පෑළවිය</td></tr>
        <tr><td>2</td><td>දුතියා</td><td>පුර දියවක</td><td>අව දියවක</td></tr>
        <tr><td>3</td><td>තතියා</td><td>පුර තියවක</td><td>අව තියවක</td></tr>
        <tr><td>4</td><td>චතුත්ථා</td><td>පුර ජලවක</td><td>අව ජලවක</td></tr>
        <tr><td>5</td><td>පඤ්චමා</td><td>පුර විසේනිය</td><td>අව විසේනිය</td></tr>
        <tr><td>6</td><td>ඡට්ඨමා</td><td>පුර සැටවක</td><td>අව සැටවක</td></tr>
        <tr><td>7</td><td>සත්තමා</td><td>පුර සතවක</td><td>අව සතවක</td></tr>
        <tr><td>8</td><td>අට්ඨමා</td><td>පුර අටවක</td><td>අව අටවක</td></tr>
        <tr><td>9</td><td>නවමා</td><td>පුර නවවක</td><td>අව නවවක</td></tr>
        <tr><td>10</td><td>දසමා</td><td>පුර දසවක</td><td>අව දසවක</td></tr>
        <tr><td>11</td><td>ඒකාදසමා</td><td>පුර එකොළොස්වක</td><td>අව එකොළොස්වක</td></tr>
        <tr><td>12</td><td>ද්වාදසමා</td><td>පුර දොළොස්වක</td><td>අව දොළොස්වක</td></tr>
        <tr><td>13</td><td>තේරසමා</td><td>පුර තෙළෙස්වක</td><td>අව තෙළෙස්වක</td></tr>
        <tr><td>14</td><td>චුද්දසමා</td><td>පුර තුදුස්වක</td><td>අව තුදුස්වක</td></tr>
        <tr><td>15</td><td>පණ්ණරසමා</td><td>පුර පසළොස්වක</td><td>අව පසළොස්වක</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     9. චන්ද්‍රයාගේ පක්ෂ හා දින ගණනය (PDF pages 14–15)
     ============================================================ -->
<section class="card" id="chandra">
  <h2>දින, පක්ෂ, මාස, සෘතු සහ වර්ෂ</h2>

  <h3>චන්ද්‍රයාගේ පක්ෂ</h3>
  <p>එක් එක් මාසය පක්ෂ දෙකකට වෙන් කර ඇත, එනම්:</p>

  <div class="moon-wrapper">
    <div class="moon-svg-wrap">
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-label="චන්ද්‍ර කලාප රූප සටහන">
        <defs>
          <radialGradient id="earthGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#4a90e2"/>
            <stop offset="65%" stop-color="#1e5faa"/>
            <stop offset="100%" stop-color="#0d3a6b"/>
          </radialGradient>
          <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#4a90e2" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#4a90e2" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="moonClipRight">
            <circle cx="0" cy="0" r="26"/>
          </clipPath>
          <clipPath id="moonClipLeft">
            <circle cx="0" cy="0" r="26"/>
          </clipPath>
          <marker id="arrowGold" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" fill="#ffd966"/>
          </marker>
          <marker id="arrowGray" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" fill="#95a5a6"/>
          </marker>
        </defs>

        <!-- Background stars -->
        <g fill="#fff" opacity="0.55">
          <circle cx="50" cy="70" r="1.3"/>
          <circle cx="130" cy="40" r="1"/>
          <circle cx="480" cy="85" r="1.4"/>
          <circle cx="545" cy="170" r="1"/>
          <circle cx="560" cy="460" r="1.2"/>
          <circle cx="65" cy="530" r="1"/>
          <circle cx="510" cy="545" r="1.3"/>
          <circle cx="115" cy="395" r="1"/>
          <circle cx="410" cy="30" r="1.1"/>
          <circle cx="230" cy="580" r="1"/>
        </g>

        <!-- Earth glow -->
        <circle cx="300" cy="300" r="130" fill="url(#earthGlow)"/>

        <!-- Orbit ring -->
        <circle cx="300" cy="300" r="175" fill="none" stroke="#c9a227" stroke-width="1.2" stroke-dasharray="6 8" opacity="0.55"/>

        <!-- ============================================================
             PAKSHA LABELS
             TOP HALF   = ශුක්ල පක්ෂය  (Waxing — right to left via top)
             BOTTOM HALF = කාල පක්ෂය  (Waning — left to right via bottom)
             RIGHT SIDE = අමාවක (New Moon)
             LEFT SIDE  = පුර පසළොස්වක (Full Moon)
             ============================================================ -->

        <!-- Top: ශුක්ල පක්ෂය -->
        <text x="300" y="52" text-anchor="middle" fill="#ffd966" font-size="17" font-weight="bold" font-family="Noto Sans Sinhala">ශුක්ල පක්ෂය (පුර පක්ෂය)</text>
        <text x="300" y="72" text-anchor="middle" fill="#e8c97a" font-size="12" font-family="Noto Sans Sinhala">අමාවක සිට පසළොස්වක දක්වා</text>

        <!-- Bottom: කාල පක්ෂය -->
        <text x="300" y="558" text-anchor="middle" fill="#c8d0d8" font-size="17" font-weight="bold" font-family="Noto Sans Sinhala">කාල පක්ෂය (අව පක්ෂය)</text>
        <text x="300" y="578" text-anchor="middle" fill="#a8b0b8" font-size="12" font-family="Noto Sans Sinhala">පසළොස්වක සිට අමාවක දක්වා</text>

        <!-- Arrows: waxing (top, right → left) -->
        <path d="M 420 175 Q 300 80 180 175" fill="none" stroke="#ffd966" stroke-width="2" opacity="0.7" marker-end="url(#arrowGold)"/>

        <!-- Arrows: waning (bottom, left → right) -->
        <path d="M 180 425 Q 300 520 420 425" fill="none" stroke="#95a5a6" stroke-width="2" opacity="0.7" marker-end="url(#arrowGray)"/>

        <!-- ============================================================
             MOON PHASES AROUND ORBIT
             ============================================================ -->

        <!-- RIGHT: අමාවක (New Moon) — dark -->
        <g transform="translate(475 300)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <circle r="26" fill="none" stroke="#333" stroke-width="0.5"/>
        </g>
        <text x="475" y="352" text-anchor="middle" fill="#c0c8d0" font-size="13" font-weight="bold" font-family="Noto Sans Sinhala">අමාවක</text>
        <text x="475" y="369" text-anchor="middle" fill="#8890a0" font-size="10.5" font-family="Noto Sans Sinhala">දින 0</text>

        <!-- Top-right (45°): Waxing crescent — පුර පෑළවිය -->
        <g transform="translate(425 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)">
            <circle cx="32" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="452" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Noto Sans Sinhala">පුර පෑළවිය</text>

        <!-- TOP (90°): First quarter — පුර අටවක -->
        <g transform="translate(300 125)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)">
            <circle cx="26" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="300" y="88" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Noto Sans Sinhala">පුර අටවක</text>

        <!-- Top-left (135°): Waxing gibbous -->
        <g transform="translate(175 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)">
            <circle cx="13" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="148" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Noto Sans Sinhala">පුර තුදුස්වක</text>

        <!-- LEFT (180°): FULL MOON — පුර පසළොස්වක -->
        <g transform="translate(125 300)">
          <circle r="26" fill="#fdfbd3" stroke="#ffd966" stroke-width="2"/>
          <circle r="15" fill="#fffbe0" opacity="0.7"/>
          <circle r="8" fill="#fffef0" opacity="0.5"/>
        </g>
        <text x="125" y="352" text-anchor="middle" fill="#ffd966" font-size="13" font-weight="bold" font-family="Noto Sans Sinhala">පුර පසළොස්වක</text>
        <text x="125" y="369" text-anchor="middle" fill="#d4a860" font-size="10.5" font-family="Noto Sans Sinhala">දින 15</text>

        <!-- Bottom-left (225°): Waning gibbous — අව තුදුස්වක -->
        <g transform="translate(175 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)">
            <circle cx="-13" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="148" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Noto Sans Sinhala">අව තුදුස්වක</text>

        <!-- BOTTOM (270°): Last quarter — අව අටවක -->
        <g transform="translate(300 475)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)">
            <circle cx="-26" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="300" y="522" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Noto Sans Sinhala">අව අටවක</text>

        <!-- Bottom-right (315°): Waning crescent — අව පෑළවිය -->
        <g transform="translate(425 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)">
            <circle cx="-32" cy="0" r="26" fill="#fdfbd3"/>
          </g>
        </g>
        <text x="452" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Noto Sans Sinhala">අව පෑළවිය</text>

        <!-- Earth in center -->
        <circle cx="300" cy="300" r="58" fill="url(#earthGrad)" stroke="#fdf5e8" stroke-width="2"/>
        <ellipse cx="283" cy="283" rx="19" ry="13" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="317" cy="320" rx="15" ry="11" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="322" cy="270" rx="10" ry="7" fill="#2d6a4f" opacity="0.55"/>
        <ellipse cx="285" cy="325" rx="12" ry="8" fill="#2d6a4f" opacity="0.55"/>
        <text x="300" y="305" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Noto Sans Sinhala">පෘථිවිය</text>
      </svg>
    </div>
    
        <div class="moon-legend">
      <div class="legend-item">
        <div class="dot" style="background: #fdfbd3;"></div>
        <div><strong>ශුක්ල පක්ෂය (පුර):</strong> අමාවක පෝයට පසු දින සිට පුර පසළොස්වක දක්වා සඳ වැඩෙන කාලයයි. දින 15කින් සම්පූර්ණ වේ.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: #0d0d1a; border-color:#666;"></div>
        <div><strong>කාල පක්ෂය (අව):</strong> පුර පසළොස්වක පෝයට පසු දින සිට අමාවක දක්වා සඳ බැසයන කාලයයි. දින 14ක් හෝ 15කි.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: linear-gradient(90deg, #0d0d1a 50%, #fdfbd3 50%);"></div>
        <div><strong>අටවක්:</strong> පක්ෂයේ 8 වන දිනයයි. සඳෙහි එක් අඩක් ආලෝකමත් වේ.</div>
      </div>
    </div>
  </div>

  <h3>දින</h3>
  <p>
    පක්ෂ දෙක නම් පෘථිවිය වටා චන්ද්‍රයාගේ එක් පූර්ණ ගමන් වාරයකි. චන්ද්‍රයා දින 30ක් හෝ 29ක්,
    එනම් මාසයක් සම්පූර්ණ කරමින්, යන මෙම ගමන 360° පමණ චක්‍රයකි. මේ අනුව දිනයක් යනු
    චන්ද්‍රයා පෘථිවිය වටා යන ගමනින් 1/30 (තිහෙන් එකක) පමණ කාලයකි. එම නිසා
    චන්ද්‍රයාගේ එක් දිනයක් දේශාංශ <strong>12°</strong> කි.
  </p>
  <div class="calc-box">
    <div class="formula">360° ÷ 30 = 12°</div>
  </div>

  <h3>තිථි — චන්ද්‍ර කලා</h3>
  <p>චන්ද්‍රයා හිරු එළිය පරාවර්තනය කරන බැවින්, එය අහසේ ගමන් කිරීම අනුව පෘථිවියට දෘශ්‍යමාන වන සඳ විවිධ අංශයෙන් හා හැඩයෙන් පෙනේ.</p>
  <div class="moon-wrapper"><div class="moon-svg-wrap" style="max-width:700px;overflow-x:auto;-webkit-overflow-scrolling:touch"><svg viewBox="0 0 700 600" style="min-width:560px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="තිථි සහ චන්ද්‍ර කලා රූප සටහන">
<circle cx="350" cy="300" r="175" fill="none" stroke="#6b6b85" stroke-width="1" stroke-dasharray="4 5"/>
<polygon points="474.0,176.2 487.1,183.3 479.7,190.0" fill="#f2d478"/>
<polygon points="226.0,423.8 212.9,416.7 220.3,410.0" fill="#f2d478"/>
<circle cx="521.2" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 248.6 A 15 15 0 0 1 521.2 278.6 A 14.67 15 0 0 0 521.2 248.6 Z" fill="#fdfbd3"/>
<text x="544.2" y="267.6" text-anchor="start" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">1. පඨමං</text>
<circle cx="509.9" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 213.8 A 15 15 0 0 1 509.9 243.8 A 13.70 15 0 0 0 509.9 213.8 Z" fill="#fdfbd3"/>
<text x="532.9" y="232.8" text-anchor="start" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">2. දුතියං</text>
<circle cx="491.6" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 182.1 A 15 15 0 0 1 491.6 212.1 A 12.14 15 0 0 0 491.6 182.1 Z" fill="#fdfbd3"/>
<text x="514.6" y="201.1" text-anchor="start" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">3. තතියං</text>
<circle cx="467.1" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 154.9 A 15 15 0 0 1 467.1 184.9 A 10.04 15 0 0 0 467.1 154.9 Z" fill="#fdfbd3"/>
<text x="490.1" y="173.9" text-anchor="start" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">4. චතුත්ථං</text>
<circle cx="437.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 133.4 A 15 15 0 0 1 437.5 163.4 A 7.50 15 0 0 0 437.5 133.4 Z" fill="#fdfbd3"/>
<text x="460.5" y="152.4" text-anchor="start" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">5. පඤ්චමං</text>
<circle cx="404.1" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 118.6 A 15 15 0 0 1 404.1 148.6 A 4.64 15 0 0 0 404.1 118.6 Z" fill="#fdfbd3"/>
<line x1="404.1" y1="118.6" x2="404.1" y2="111.6" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="107.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">6. ඡට්ඨමං</text>
<circle cx="368.3" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 111.0 A 15 15 0 0 1 368.3 141.0 A 1.57 15 0 0 0 368.3 111.0 Z" fill="#fdfbd3"/>
<line x1="368.3" y1="111.0" x2="368.3" y2="82.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="78.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">7. සත්තමං</text>
<circle cx="331.7" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 111.0 A 15 15 0 0 1 331.7 141.0 A 1.57 15 0 0 1 331.7 111.0 Z" fill="#fdfbd3"/>
<line x1="331.7" y1="111.0" x2="331.7" y2="104.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="100.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">8. අට්ඨමං</text>
<circle cx="295.9" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 118.6 A 15 15 0 0 1 295.9 148.6 A 4.64 15 0 0 1 295.9 118.6 Z" fill="#fdfbd3"/>
<line x1="295.9" y1="118.6" x2="295.9" y2="89.6" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="85.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">9. නවමං</text>
<circle cx="262.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 133.4 A 15 15 0 0 1 262.5 163.4 A 7.50 15 0 0 1 262.5 133.4 Z" fill="#fdfbd3"/>
<text x="239.5" y="152.4" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">10. දසමං</text>
<circle cx="232.9" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 154.9 A 15 15 0 0 1 232.9 184.9 A 10.04 15 0 0 1 232.9 154.9 Z" fill="#fdfbd3"/>
<text x="209.9" y="173.9" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">11. එකාදසමං</text>
<circle cx="208.4" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 182.1 A 15 15 0 0 1 208.4 212.1 A 12.14 15 0 0 1 208.4 182.1 Z" fill="#fdfbd3"/>
<text x="185.4" y="201.1" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">12. ද්වාදසමං</text>
<circle cx="190.1" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 213.8 A 15 15 0 0 1 190.1 243.8 A 13.70 15 0 0 1 190.1 213.8 Z" fill="#fdfbd3"/>
<text x="167.1" y="232.8" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">13. තෙරසමං</text>
<circle cx="178.8" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 248.6 A 15 15 0 0 1 178.8 278.6 A 14.67 15 0 0 1 178.8 248.6 Z" fill="#fdfbd3"/>
<text x="155.8" y="267.6" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">14. චුද්දසමං</text>
<circle cx="175.0" cy="300.0" r="15" fill="#fdfbd3" stroke="#7a7a90" stroke-width="1"/>
<text x="152.0" y="304.0" text-anchor="end" fill="#f2d478" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">15. පණ්ණරසමං</text>
<circle cx="178.8" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 321.4 A 15 15 0 0 1 178.8 351.4 A 14.67 15 0 0 1 178.8 321.4 Z" fill="#fdfbd3" transform="translate(357.6 0) scale(-1 1)"/>
<text x="155.8" y="340.4" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">1. පඨමං</text>
<circle cx="190.1" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 356.2 A 15 15 0 0 1 190.1 386.2 A 13.70 15 0 0 1 190.1 356.2 Z" fill="#fdfbd3" transform="translate(380.3 0) scale(-1 1)"/>
<text x="167.1" y="375.2" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">2. දුතියං</text>
<circle cx="208.4" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 387.9 A 15 15 0 0 1 208.4 417.9 A 12.14 15 0 0 1 208.4 387.9 Z" fill="#fdfbd3" transform="translate(416.8 0) scale(-1 1)"/>
<text x="185.4" y="406.9" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">3. තතියං</text>
<circle cx="232.9" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 415.1 A 15 15 0 0 1 232.9 445.1 A 10.04 15 0 0 1 232.9 415.1 Z" fill="#fdfbd3" transform="translate(465.8 0) scale(-1 1)"/>
<text x="209.9" y="434.1" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">4. චතුත්ථං</text>
<circle cx="262.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 436.6 A 15 15 0 0 1 262.5 466.6 A 7.50 15 0 0 1 262.5 436.6 Z" fill="#fdfbd3" transform="translate(525.0 0) scale(-1 1)"/>
<text x="239.5" y="455.6" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">5. පඤ්චමං</text>
<circle cx="295.9" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 451.4 A 15 15 0 0 1 295.9 481.4 A 4.64 15 0 0 1 295.9 451.4 Z" fill="#fdfbd3" transform="translate(591.8 0) scale(-1 1)"/>
<line x1="295.9" y1="481.4" x2="295.9" y2="487.4" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="502.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">6. ඡට්ඨමං</text>
<circle cx="331.7" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 459.0 A 15 15 0 0 1 331.7 489.0 A 1.57 15 0 0 1 331.7 459.0 Z" fill="#fdfbd3" transform="translate(663.4 0) scale(-1 1)"/>
<line x1="331.7" y1="489.0" x2="331.7" y2="517.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="532.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">7. සත්තමං</text>
<circle cx="368.3" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 459.0 A 15 15 0 0 1 368.3 489.0 A 1.57 15 0 0 0 368.3 459.0 Z" fill="#fdfbd3" transform="translate(736.6 0) scale(-1 1)"/>
<line x1="368.3" y1="489.0" x2="368.3" y2="495.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="510.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">8. අට්ඨමං</text>
<circle cx="404.1" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 451.4 A 15 15 0 0 1 404.1 481.4 A 4.64 15 0 0 0 404.1 451.4 Z" fill="#fdfbd3" transform="translate(808.2 0) scale(-1 1)"/>
<line x1="404.1" y1="481.4" x2="404.1" y2="509.4" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="524.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">9. නවමං</text>
<circle cx="437.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 436.6 A 15 15 0 0 1 437.5 466.6 A 7.50 15 0 0 0 437.5 436.6 Z" fill="#fdfbd3" transform="translate(875.0 0) scale(-1 1)"/>
<text x="460.5" y="455.6" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">10. දසමං</text>
<circle cx="467.1" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 415.1 A 15 15 0 0 1 467.1 445.1 A 10.04 15 0 0 0 467.1 415.1 Z" fill="#fdfbd3" transform="translate(934.2 0) scale(-1 1)"/>
<text x="490.1" y="434.1" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">11. එකාදසමං</text>
<circle cx="491.6" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 387.9 A 15 15 0 0 1 491.6 417.9 A 12.14 15 0 0 0 491.6 387.9 Z" fill="#fdfbd3" transform="translate(983.2 0) scale(-1 1)"/>
<text x="514.6" y="406.9" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">12. ද්වාදසමං</text>
<circle cx="509.9" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 356.2 A 15 15 0 0 1 509.9 386.2 A 13.70 15 0 0 0 509.9 356.2 Z" fill="#fdfbd3" transform="translate(1019.7 0) scale(-1 1)"/>
<text x="532.9" y="375.2" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">13. තෙරසමං</text>
<circle cx="521.2" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 321.4 A 15 15 0 0 1 521.2 351.4 A 14.67 15 0 0 0 521.2 321.4 Z" fill="#fdfbd3" transform="translate(1042.4 0) scale(-1 1)"/>
<text x="544.2" y="340.4" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">14. චුද්දසමං</text>
<circle cx="525.0" cy="300.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/>
<text x="548.0" y="304.0" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="'Noto Sans Sinhala',sans-serif">15. පණ්ණරසමං</text>
<circle cx="350" cy="300" r="40" fill="#1e5faa" stroke="#fdf5e8" stroke-width="2"/>
<ellipse cx="338" cy="288" rx="13" ry="9" fill="#2d6a4f" opacity=".65"/><ellipse cx="362" cy="313" rx="10" ry="7" fill="#2d6a4f" opacity=".6"/>
<text x="350" y="304" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="'Noto Sans Sinhala',sans-serif">පෘථිවිය</text>
<rect x="298" y="212" width="104" height="26" rx="7" fill="#15152a" stroke="#f2d478" stroke-width="1.2"/>
<text x="350" y="230" text-anchor="middle" fill="#f2d478" font-size="12.5" font-weight="bold" font-family="'Noto Sans Sinhala',sans-serif">ශුක්ල පක්ෂය</text>
<rect x="298" y="368" width="104" height="26" rx="7" fill="#15152a" stroke="#c8d0d8" stroke-width="1.2"/>
<text x="350" y="386" text-anchor="middle" fill="#c8d0d8" font-size="12.5" font-weight="bold" font-family="'Noto Sans Sinhala',sans-serif">කාල පක්ෂය</text>
</svg></div></div>
  <p style="text-align:center;font-size:.85em;opacity:.75;margin-top:-6px">↔ රූපය දෙපසට ඇදිය හැක</p>
  <p>ඉහත දැක්වෙන රූපයෙන් එක් එක් දිනයක් අනුව හඳ එළිය හෝ ඡායාව <strong>12°</strong> දේශාංශ බැගින් වැඩි වන බව හා එක් එක් පක්ෂයේ දින පෙන්නුම් කරයි. එම දින <strong>'තිථි'</strong> යැයි කියනු ලැබේ. මේවා පිළිවෙලින් <em class="pali">'පඨමං'</em> (පළමුවෙනි) සිට <em class="pali">'පණ්ණරසමං'</em> (පසළොස්වෙනි) දක්වා ගණන් කරනු ලැබේ.</p>
</section>

<!-- ============================================================
     10. මාස (Amanta / Purnimanta) (PDF page 16)
     ============================================================ -->
<section class="card" id="masa-krama">
  <h2>මාස</h2>
  <p>ඉහත විස්තර කළ පරිදි පක්ෂ දෙකක් එකතු වී එක් චන්ද්‍ර මාසයක් සෑදේ. පක්ෂය අනුව මාසයකට දින 29ක් හෝ 30ක් ඇත. මෙය ක්‍රම දෙකකින් ගණනය කරනු ලැබේ:</p>

  <div class="tithi-row">
    <div class="paksha-card kala">
      <h4>1. අමාන්ත ක්‍රමය</h4>
      <p>මෙම ක්‍රමය අමාවක පොහොයට පසු දින සිට ඊළඟ අමාවක පොහොය දක්වා කාලය ගණනය කරන බැවින් 'අමාන්ත' එනම් අමාවක පෝය දිනයේදී අවසන් වන මාස ක්‍රමයක් ලෙස හැඳින්වේ. මෙම අනුව චන්ද්‍ර මාසයක් අමාවක පොහොය දිනට පසු දින සිට ආරම්භ වන අතර ඊළඟ අමාවක පොහොය දිනයේදී අවසන් වේ.</p>
    </div>
    <div class="paksha-card sukka">
      <h4>2. පූර්ණිමාන්ත ක්‍රමය</h4>
      <p>මෙම ක්‍රමය පුර පසළොස්වක පොහොය දිනට පසු දින සිට ඊළඟ පුර පසළොස්වක පොහොය දක්වා කාලය ගණනය කරනු ලැබේ. 'පූර්ණිමාන්ත' නම් වේ. <strong>බුද්ධ වර්ෂයේදී භාවිතා වන්නේ මෙම පූර්ණිමාන්ත ක්‍රමයයි.</strong></p>
    </div>
  </div>
</section>

<!-- ============================================================
     11. සෘතු හා උපෝසථ (PDF pages 16–17)
     ============================================================ -->
<section class="card" id="uposatha">
  <h2>සෘතු හා උපෝසථ (පොහොය)</h2>
  <p>පූර්ණිමාන්ත ක්‍රමය සෘතු හා උපෝසථ ගණනය කිරීමට භාවිතා වේ. එක් එක් සෘතුවේ උපෝසථ 8ක් ඇත.</p>

  <div class="note-box">
    <ul style="margin:0; padding-left:22px;">
      <li>එයින් උපෝසථ දෙකක් — <strong>තුන්වැනි සහ හත්වැනි උපෝසථය</strong> — චාතුද්දසී (තුදුස්වක) වේ.</li>
      <li>අනික් උපෝසථ හය <strong>පණ්ණරසී (පසළොස්වක)</strong> වේ.</li>
      <li>පණ්ණරසී උපෝසථ දෙකක් ඇති මාසයක දින ගණන: <strong>15 + 15 = 30</strong></li>
      <li>චාතුද්දසී උපෝසථ එකක් ඇති මාසයක දින ගණන: <strong>14 + 15 = 29</strong></li>
    </ul>
  </div>

  <h3>උදාහරණයක් ලෙස ව්‍ය.ව. 2016 දී වස්සාන සෘතුව</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>සෘතුව</th><th>මාසය</th><th>දිනය</th><th>පක්ෂය</th><th>උපෝසථය</th><th>පූර්ණිමාන්ත මාසය</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">වස්සාන</td><td>ජූලි</td><td>18</td><td>ශුක්ල</td><td>0 පණ්ණරසී</td><td rowspan="2">සාවන, දින 30</td></tr>
        <tr><td>අගෝ.</td><td>02</td><td>කාල</td><td>1 වන පණ්ණරසී</td></tr>
        <tr><td>අගෝ.</td><td>17</td><td>ශුක්ල</td><td>2 වන පණ්ණරසී</td><td rowspan="2">පොට්ඨපාද, දින 29</td></tr>
        <tr><td>අගෝ.</td><td>31</td><td>කාල</td><td><strong>3 වන චාතුද්දසී</strong></td></tr>
        <tr><td>සැප්.</td><td>15</td><td>ශුක්ල</td><td>4 වන පණ්ණරසී</td><td rowspan="2">අස්සයුජ, දින 30</td></tr>
        <tr><td>සැප්.</td><td>30</td><td>කාල</td><td>5 වන පණ්ණරසී</td></tr>
        <tr><td>ඔක්.</td><td>15</td><td>ශුක්ල</td><td>6 වන පණ්ණරසී</td><td rowspan="2">කත්තික, දින 29</td></tr>
        <tr><td>ඔක්.</td><td>29</td><td>කාල</td><td><strong>7 වන චාතුද්දසී</strong></td></tr>
        <tr><td>නොවැ.</td><td>13</td><td>ශුක්ල</td><td>8 වන පණ්ණරසී</td><td>—</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight-box">
    වස්සාන සෘතුවේ පූර්ණිමාන්ත මාස 4ක් සහ උපෝසථ 8කි.
  </div>
</section>

<!-- ============================================================
     12. අධිමාසය හා අධිවර්ෂය (PDF pages 17–18)
     ============================================================ -->
<section class="card" id="adhimasa">
  <h2>අධිමාසය හා අධිවර්ෂය</h2>
  <p>
    බුද්ධ වර්ෂයට වඩා සූර්ය වර්ෂයක් තරමක් දිගය. එබැවින් සූර්ය වර්ෂයට සම කිරීම සඳහා
    බුද්ධ වර්ෂ තුනකට එක් වරක් ගිම්හාන සෘතුවේ අවසානයේ මාසයක් එකතු කරනු ලැබේ.
    මෙම මාසය <strong>'අධිමාසය'</strong> ලෙස හැඳින්වේ. එවිට පුරුදු උපෝසථ 8 වෙනුවට
    උපෝසථ 10ක් ලැබෙන අතර වස්සාන සෘතුව මාසයකට පසුව ආරම්භ වේ. එම වර්ෂයේදී
    මාස 12ක් වෙනුවට මාස 13ක් ඇත. එය <strong>'අධිවර්ෂය'</strong> යැයි කියනු ලැබේ.
    අධිවර්ෂයක් ව්‍ය.ව. 2015 දී සිදු විය. ඊළඟ අධිවර්ෂය වසර තුනකට පසුව එනම් ව්‍ය.ව. 2018 දී සිදු විය.
  </p>

  <h3>අධිමාසයක් සිදුවන ආකාරය</h3>
  <div class="calc-box">
    <p>බුද්ධ වර්ෂයට දින 354ක් පමණ ඇත. මේ දින උපෝසථ හා සෘතු අනුව ගණනය කරනු ලැබේ.</p>
    <p>ඉහත සඳහන් කළ පරිදි, එක් බුද්ධ වර්ෂයක් තුළ සෘතු 3ක් ද එක් එක් සෘතුවේ උපෝසථ 8ක් ද පණ්ණරසී උපෝසථ 18ක් ද චාතුද්දසී උපෝසථ 6ක් ද වශයෙන් උපෝසථ 3 × 8 = 24ක් ලැබේ.</p>
    <p>එය මෙසේ ගණන් කළ යුතුය:</p>
    <ul style="list-style:none; padding-left:0;">
      <li>🌕 පණ්ණරසී උපෝසථ 18ක් × දින 15 = <strong>දින 270</strong></li>
      <li>🌑 චාතුද්දසී උපෝසථ 6ක් × දින 14 = <strong>දින 84</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:8px; padding-top:8px;">📊 මුළු ගණන = <strong>දින 354</strong></li>
    </ul>
    <p style="margin-top:14px;">එහෙත් එක් සූර්ය වර්ෂයකට දින <strong>365¼</strong> ක් පමණ ඇත. සූර්ය හා චන්ද්‍ර (බුද්ධ) වර්ෂය අතර වෙනස මෙසේය.</p>
    <div class="formula">සූර්ය වර්ෂය − චන්ද්‍ර වර්ෂය = දින 365¼ − 354 = දින 11¼</div>
    <p>වර්ෂ 3ක් යන විට දින <strong>33¾</strong> ක් අඩුය. එනම් මාසයක් පමණ අඩුය. එබැවින් සූර්ය වර්ෂයට සම වීම සඳහා චන්ද්‍ර වර්ෂ තුනකට එක් වරක් අධික මාසයක් එකතු වේ.</p>
    <p>එක් චන්ද්‍ර මාසයකට දින 30ට වඩා වැඩි දින ගණන් නොලැබෙන නිසා සෑම වසර 3ට දින 3¾ක් ඉතිරි වේ. මෙම දින 3¾ එකතු වීමෙන් 19 වැනි චන්ද්‍ර වර්ෂයේදී අධිමාසයක් සිදු වේ.</p>
    <p style="margin-top:12px;">සාමාන්‍ය වසරකට ගතවන කාලය <strong>දින 365.24199</strong>කි. චන්ද්‍ර මාස 12ට ගතවන කාලය <strong>දින 354.36706</strong>කි. වෙනස <strong>දින 10.87493</strong>කි.</p>
  </div>

  <h3>අධිමාසයක් යෙදෙන වර්ෂය හඳුනාගන්නා ක්‍රමය</h3>
  <p>චන්ද්‍ර මාස ක්‍රමය උපයෝගී කරගෙන දින දර්ශනයක් සැකසීමේදී, මෙම වෙනස නිසා අධිමාස යෙදීමට සිදුවී ඇත. ලිත් පරීක්ෂා කිරීමේදී චන්ද්‍ර මාස 32න් හා 33න් අධිමාස යෙදී ඇත. මෙම සංසිද්ධිය මෙසේ පැහැදිලි කළ හැක.</p>

  <div class="calc-box">
    <div class="formula">බුද්ධ වර්ෂය ÷ 19 → ශේෂය = 2, 4, 7, 10, 13, 15, 18</div>
    <p style="text-align:center;">මෙම ශේෂයන්ගෙන් එකක් ලැබේ නම්, එම වර්ෂය අධිමාස සහිත වර්ෂයකි.</p>
  </div>

  <p>
    වන්ද්‍රමාස 32න් හා 33න් අධිමාස වැටෙන විට එය සෘතු තුනෙන්ම වැටේ. එහෙත් ටිකාවේ
    එය හිම්හාන සෘතුවට යෙදිය යුතු බව් කියවේ. ඒ අනුව හිම්හාන සෘතුව තුළම අධිමාස යොදයි.
    මේ අයුරින් අධිමාස යෙදෙන වර්ෂය ගණනය කල හැකි වුවද, රජයේ පොහොය කමිටුවේ
    තීරණය අවසන් තීරණය වේ. 2018 වර්ෂයේ අධිමාසයක් යෙදී තිබිණි. එය සැබැවින්ම වැටිය
    යුත්තේ බුද්ධ වර්ෂ 2561ටය. එහෙත් එය බුද්ධ වර්ෂ 2562ට යොදා ඇත.
  </p>
</section>

<!-- ============================================================
     13. මෙටෝනික් චක්‍රය (PDF page 19)
     ============================================================ -->
<section class="card" id="meton">
  <h2>මෙටෝනික් (Metonic) චක්‍රය</h2>
  <p>
    වසර 19ක කාලය චන්ද්‍ර මාස 235ක කාලයට සමාන බව තාරකා විද්‍යාඥ <strong>මිටෝන්
    (Meton 432 BC)</strong> සොයා ගෙන ඇත. (විශ්ව කෝෂය)
  </p>

  <h3>මූලික ගණනය</h3>
  <div class="calc-box">
    <p>වසර 19ට ගතවන කාලය = 365.24199 × 19 = <strong>6939.59781 දින</strong></p>
    <p>චන්ද්‍ර මාස 235ට ගතවන කාලය = 354.36706 ÷ 12 × 235 = <strong>6939.688258 දින</strong></p>
    <p>එනම් වසර 19ක කාලයක් තුළදී චන්ද්‍ර මාස 235ක් සම්පූර්ණ වේ.</p>
    <div class="formula">වසර 19 = චන්ද්‍ර මාස 235</div>
    <p>වසර 19ට ඇති සාමාන්‍ය මාස ගණන = 12 × 19 = <strong>228</strong></p>
    <p>වසර 19ට ඇති චන්ද්‍ර මාස ගණන = <strong>235</strong></p>
    <p>වෙනස = 235 − 228 = <strong>අධිමාස 7ක්</strong></p>
  </div>

  <h3>මෙටෝනික් චක්‍රයේ අතිරික්තය (Residual Excess)</h3>
  <p>
    ඉහත ගණනයෙන් පෙනෙන පරිදි <strong>"වසර 19ක් = චන්ද්‍ර මාස 235ක්"</strong> යැයි 
    පැවසුවද, සැබවින්ම මෙම දෙක අතර ඉතා සියුම් වෙනසක් පවතී. එනම් චන්ද්‍ර මාස 235ක් 
    සම්පූර්ණ වීමට ගතවන කාලය, සූර්ය වර්ෂ 19ක් ගතවන කාලයට වඩා තරමක් දිගුය. මෙම 
    අතිරික්තය මෙසේ ගණනය කළ හැක:
  </p>

  <div class="calc-box">
    <p>චන්ද්‍ර මාස 235ට ගතවන කාලය = <strong>6939.688258 දින</strong></p>
    <p>සූර්ය වසර 19කට ගතවන කාලය = <strong>6939.59781 දින</strong></p>
    <div class="formula">අතිරික්තය = 6939.688258 − 6939.59781 = <strong>0.090448 දින</strong></div>
    <p>මෙම අගය පැය හා මිනිත්තු වලට පරිවර්තනය කළ විට:</p>
    <div class="formula">0.090448 දින × 24 = <strong>පැය 2, මිනිත්තු 10 (≈ 2.17 පැය)</strong></div>
    <p style="margin-top:14px;">
      එනම් <strong>සෑම මෙටෝනික් චක්‍රයක් (වසර 19ක්) අවසානයේදීම චන්ද්‍ර ගණනය
      සූර්ය ගණනයට වඩා පැය 2කින් හා මිනිත්තු 10කින් පමණ ඉදිරියෙන්</strong>
      පවතී. මෙය කුඩා අගයක් වුවද, වසර සිය ගණනක් ගතවන විට මෙය දින ගණනක් බවට 
      පත්වේ.
    </p>
  </div>

  <h3>නවීන විද්‍යාත්මක අගයන් සමඟ සැසඳීම</h3>
  <p>
    නවීන තාරකා විද්‍යාව අනුව නිවැරදි අගයන් මෙසේය:
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>ඒකකය</th>
          <th>නිවැරදි අගය (දින)</th>
          <th class="left">සටහන</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>සූර්ය වර්ෂයක් (Tropical Year)</td>
          <td>365.24219</td>
          <td class="left">නිරයන වර්ෂය (2024 අගය)</td>
        </tr>
        <tr>
          <td>චන්ද්‍ර මාසයක් (Synodic Month)</td>
          <td>29.530588</td>
          <td class="left">අමාවක සිට අමාවක දක්වා</td>
        </tr>
        <tr>
          <td>සූර්ය වසර 19</td>
          <td>6939.60161</td>
          <td class="left">365.24219 × 19</td>
        </tr>
        <tr>
          <td>චන්ද්‍ර මාස 235</td>
          <td>6939.68818</td>
          <td class="left">29.530588 × 235</td>
        </tr>
        <tr>
          <td><strong>අතිරික්තය</strong></td>
          <td><strong>0.08657</strong></td>
          <td class="left"><strong>≈ පැය 2, මිනිත්තු 5</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="info-box">
    <strong>සැසඳීම:</strong> මෙම ග්‍රන්ථයේ භාවිතා කරන ලද අගයන් අනුව අතිරික්තය 
    දින 0.090448ක් (පැය 2 මිනිත්තු 10ක්) වන අතර, නවීන විද්‍යාත්මක අගයන් අනුව 
    එය දින 0.08657ක් (පැය 2 මිනිත්තු 5ක්) වේ. දෙකම ආසන්න වශයෙන් එකම අගයක් 
    පෙන්නුම් කරයි.
  </div>

  <h3>දිනයක් එකතු කිරීමට අවශ්‍ය කාලය</h3>
  <p>
    එක් මෙටෝනික් චක්‍රයක් තුළ අපට පැය 2ක පමණ අතිරික්තයක් ලැබෙන බැවින්, 
    මෙය සම්පූර්ණ දිනයක් බවට පත්වීමට කොපමණ කාලයක් ගතවේද යන්න මෙසේ 
    ගණනය කළ හැක:
  </p>

  <div class="calc-box">
    <p>එක් මෙටෝනික් චක්‍රයක අතිරික්තය = <strong>0.08657 දින</strong></p>
    <p>දිනයක් සම්පූර්ණ වීමට අවශ්‍ය මෙටෝනික් චක්‍ර ගණන:</p>
    <div class="formula">1 ÷ 0.08657 ≈ 11.55 මෙටෝනික් චක්‍ර</div>
    <p>එය වර්ෂ වලින්:</p>
    <div class="formula">11.55 × 19 ≈ <strong>වර්ෂ 219.5</strong></div>
    <p style="margin-top:14px;">
      එනම් <strong>වර්ෂ 219කට වරක් පමණ දිනයක් එකතු කළ යුතුය</strong> 
      (හෝ ගණනයෙන් ඉවත් කළ යුතුය). මෙසේ නොකළහොත් වසර සිය ගණනක් ගතවන විට 
      චන්ද්‍ර දිනය සූර්ය දිනයෙන් දින 1කින් හෝ වැඩි ගණනකින් බැහැර වේ.
    </p>
  </div>

  <h3>ව්‍යවහාරයේදී මෙම අතිරික්තය හසුරුවන ආකාරය</h3>
  <div class="note-box">
    <p>
      බුද්ධ වර්ෂ ගණනය සහ දින දර්ශන සකස් කිරීමේදී මෙම සියුම් අතිරික්තය 
      පහත ආකාරවලින් හසුරුවනු ලැබේ:
    </p>
    <ul style="margin:10px 0; padding-left:22px;">
      <li>
        <strong>අධිමාස යෙදීම (ප්‍රධාන ක්‍රමය):</strong> සෑම වසර 3කට වරක් හෝ 
        19 වසරක කාලය තුළ වාර 7ක් අධිමාස මාසයක් එකතු කිරීමෙන් මෙම වෙනස 
        ප්‍රධාන වශයෙන් නිවැරදි වේ.
      </li>
      <li>
        <strong>දින එකතු කිරීම හෝ ඉවත් කිරීම (දිගු කාලීන නිවැරදි කිරීම):</strong> 
        දිගු කාලීනව (වර්ෂ 200+ පසු) ඉතිරි වන කුඩා අතිරික්තය නිසා අවශ්‍ය විටෙක 
        දිනයක් එකතු කිරීමට හෝ ඉවත් කිරීමට සිදුවේ.
      </li>
      <li>
        <strong>රජයේ පොහොය කමිටුවේ තීරණය:</strong> මෙම සියුම් ගණනයන් 
        සම්බන්ධයෙන් අවසන් තීරණය ශ්‍රී ලංකා රජයේ පොහොය කමිටුව විසින් 
        ගනු ලැබේ.
      </li>
    </ul>
  </div>

  <h3>මෙම අධිමාස 7 බෙදී යන ආකාරය</h3>
  <div class="calc-box">
    <p style="text-align:center; font-family:'Courier New', monospace;">228 ÷ 7 = 32 <sup>4</sup>⁄<sub>7</sub></p>
    <p>ඒ අනුව චන්ද්‍ර මාස 32ට වරක් හෝ 33ට වරක් අධිමාස යෙදිය යුතුය. අධිමාස වගු පරීක්ෂා කිරීමේදී වසර 19ට, මාස 32න් වාර තුනක් සහ මාස 33න් වාර සතරක් වන ආකාරයකට වර්ෂ සම්පූර්ණ වී ඇත.</p>
    <ul style="list-style:none; padding-left:0; text-align:center;">
      <li>33 × 4 = <strong>132</strong></li>
      <li>32 × 3 = <strong>96</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:6px; padding-top:6px;">එකතුව = <strong>228</strong></li>
    </ul>
  </div>

  <h3>ඓතිහාසික සාධකය</h3>
  <div class="note-box">
    <p>වසර 1951 ජුනි මස 18 වැනි පොසොන් පුර පසළොස්වක පොහොය දින ශ්‍රී කල්‍යාණී යෝගාශ්‍රම සංස්ථාව ආරම්භ කරන ලදී. ඉන් වසර 19ක් පසු (1951+19 = 1970) එනම් 1970 ජුනි මස 18 වැනි දින පොසොන් පොහොය විය. නැවත (1970+19 = 1989) වර්ෂ 1989 දී ද ජුනි මස 18 වැනි දින පොසොන් පොහොය විය. නැවතත් (1989+19 = 2008) 2008 වර්ෂයේ ජුනි මස 18 වැනි දින පොසොන් පොහොය විය.</p>
  </div>

  <div class="info-box">
    <p>
      <strong>සටහන:</strong> මෙම ඓතිහාසික සාධකය මගින් මෙටෝනික් චක්‍රයේ 
      නිරවද්‍යතාවය මනාව පෙන්නුම් කරයි. වසර 57ක් පුරා (1951 සිට 2008 දක්වා) 
      පොසොන් පොහොය එකම දිනයේ (ජුනි 18) පැවතීම මෙම චක්‍රයේ ස්ථාවරත්වය 
      පෙන්නුම් කරයි. නමුත් ඉහත ගණනය කළ පරිදි, තවත් වසර 160ක් පමණ ගතවන විට 
      (එනම් වර්ෂ 2368 පමණ වන විට) මෙම දිනය දිනකින් ඉදිරියට හෝ පසුපසට යා හැක. 
      එවිට අදාළ නිවැරදි කිරීම් සිදු කළ යුතුය.
    </p>
  </div>
</section>


<!-- ============================================================
     14. අධිමාස හඳුනාගැනීම සහ බුද්ධ වර්ෂ ගණනය (PDF pages 20–21)
     ============================================================ -->
<section class="card" id="nishchaya">
  <h2>බුද්ධ වර්ෂය සකසා ගැනීමට ක්‍රමයක්</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>ක්‍රිස්තු වර්ෂයෙන් බුද්ධ වර්ෂය</h4>
      <p>බුද්ධ වර්ෂය සකසා ගැනීමට පහසු ක්‍රමය නම් <strong>ක්‍රිස්තු වර්ෂයට 544ක් එකතු කිරීමයි</strong>.</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2015 + 544 = 2559</div>
      </div>
      <p>2015 වර්ෂයේ බුද්ධ වර්ෂ නම් 2559 ය.</p>
      <p><strong>විශේෂ:</strong> ක්‍රිස්තු වර්ෂ ජනවාරි 1 වැනි දින ආරම්භ වේ. නමුත් බුද්ධ වර්ෂය ආරම්භ වන්නේ වෙසක් පුර පසළොස්වක පොහොය දිනට පසු දින සිට බැවින් ඔබ සොයන දිනය එම වර්ෂයේ වෙසක් පුර පසළොස්වක පොහොයට පෙර දිනයක් නම් එකක් (එක් බුද්ධ වර්ෂයක්) අඩු කළ යුතුය. පසු දිනයක් නම් එසේ නොකළ යුතුය. 2015 + 544 = 2559 වර්ෂ එකක් අඩු කළ විට 2558.</p>
    </div>

    <div class="paksha-card kala">
      <h4>බුද්ධ වර්ෂයේ නාමය සෙවීම</h4>
      <p>බුද්ධ වර්ෂයේ නාමය සකසා ගැනීමට පහසු ක්‍රමයක් නම් අදාළ වර්ෂයේ සංඛ්‍යාංකය <strong>12 න් බෙදූ විට ලැබෙන ශේෂය</strong> බැලීමයි.</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2559 ÷ 12 = 213 ඉතිරි 3</div>
      </div>
      <p>මෙහි ඉතිරි 3 පවත්නා වර්ෂයේ නාමය දක්වයි. එනම් <strong>'කපි'</strong> ය.</p>
      <p>වර්ෂ 2560 සඳහා ගණනය: 2560 ÷ 12 = 213 සහ ඉතිරි 4කි. ඉතිරි 4 අදාළ වර්ෂ නාමය දක්වයි, එනම් <strong>'කුක්කුටෝ'</strong> ය.</p>
    </div>
  </div>
    <h3>ශේෂය අනුව වර්ෂ නාමය</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>ශේෂය</th><th>වර්ෂය</th><th>ශේෂය</th><th>වර්ෂය</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>සප්පෝ</td><td>6</td><td>සූකරෝ</td></tr>
        <tr><td>1</td><td>අස්සෝ</td><td>7</td><td>මූසිකෝ</td></tr>
        <tr><td>2</td><td>අජෝ</td><td>8</td><td>වසභෝ</td></tr>
        <tr><td>3</td><td><strong>කපි (2559)</strong></td><td>9</td><td>ව්‍යග්ඝෝ</td></tr>
        <tr><td>4</td><td>කුක්කුටෝ</td><td>10</td><td>සසෝ</td></tr>
        <tr><td>5</td><td>සෝණෝ</td><td>11</td><td>නාගෝ</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     15. පාළි ගාථා සහ විශේෂ දින උදාහරණය (PDF pages 22–23)
     ============================================================ -->
<section class="card" id="pali">
  <h2>බුද්ධ වර්ෂය කියන ආකාරය</h2>
  <p>ශාස්ත්‍රීය ලේඛනවලදී බුද්ධ වර්ෂය පාළි භාෂාවෙන් ප්‍රකාශ කිරීමේ සම්ප්‍රදායක් ඇත:</p>


  <h3>විශේෂිත දිනයක් සඳහා උදාහරණය</h3>
  <p><strong>ව්‍ය.ව. 2018 දෙසැම්බර් 11</strong> දින සඳහා බුද්ධ වර්ෂය ප්‍රකාශ කර ඇති ආකාරය:</p>


  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>ගෙවී ඇති කාලය (අතික්කන්ත)</h4>
      <p style="text-align:center; font-size:1.15em;">
        වර්ෂ <strong>2561</strong>, මාස <strong>7</strong>, දින <strong>18</strong>
      </p>
    </div>
    <div class="paksha-card kala">
      <h4>ඉතිරි කාලය (අවසිට්ඨ)</h4>
      <p style="text-align:center; font-size:1.15em;">
        වර්ෂ <strong>2438</strong>, මාස <strong>5</strong>, දින <strong>11</strong>
      </p>
    </div>
  </div>

  
  <h3>සම්පූර්ණ ප්‍රකාශනය (ව්‍ය.ව. 2018 දෙසැම්බර් 11 සඳහා)</h3>
  <p>පිරිනිවන් පෑම, සසුනේ පැවැත්ම, ගෙවුණු කාලය, ඉතිරි කාලය සහ අදාළ දිනය යන සියල්ල එක් ප්‍රකාශනයක් ලෙස මෙසේ දැක්වේ:</p>
  <div class="gn-pali-box">
   අම්හාකං ඛෝ පන භගවා දීපඞ්කර පාද මූලතෝ පට්ඨාය පඨමං දානපාරමි
    දුතියං සීලපාරමි තතියං නෙක්ඛම්මපාරමි චතුත්ථං පඤ්ඤාපාරමි
    පඤ්චමං විරියපාරමි ඡට්ඨමං ඛන්තිපාරමි සත්තමං සච්චපාරමි
    අට්ඨමං අධිට්ඨානපාරමි නවමං මෙත්තාපාරමි දසමං උපෙක්ඛාපාරමීති
    දස පාරමියෝ දස උපපාරමියෝ දස පරමත්ථපාරමියෝති සමත්තිංස පාරමියෝ
    පූරෙත්වා වෙස්සන්තරත්තභාවෙ නිබ්බත්තිත්වා පඤ්ච මහා පරිච්චාගේ කත්වා
    තුසිතපුරෙ නිබ්බත්තිත්වා චතුහි මහා දේව රාජූහි කතාරාධනං පටිච්ච
    පඤ්ච මහා විලෝකනේ විලෝකෙත්වා සුද්ධෝදන මහා රාජානං නිස්සාය මහා මායා
    දේවියා කුච්ඡිස්මිං පටිසන්ධිං ගණ්හිත්වා දස මාසච්චයේන මාතු කුච්ඡිතෝ
    නික්ඛමිත්වා ඒකූනතිංසතිමේ සංවච්ඡරේ මහාභිනික්ඛමනං නික්ඛමිත්වා
    ඡබ්බස්සානි මහා පධානං පදහිත්වා පඤ්චතිංසතිමේ සංවච්ඡරේ වේසාඛපුණ්ණමියං
    සම්මා සම්බෝධිං අභිසම්බුජ්ඣිත්වා පඤ්ච චත්තාළීස සංවච්ඡරානි වසිත්වා
    සප්පසංවච්ඡරේ වේසාඛපුණ්ණමියං භුම්මවාරේ පරිනිබ්බායි.
     තස්ස ඛෝ පන භගවතො අරහතො සම්මා සම්බුද්ධස්ස සාසනං පඤ්ච වස්සසහස්සානි පවත්තිස්සති.<br>
    ඉදානි ඛෝ පන ද්වේසහස්ස-පඤ්චසත-ඒකසට්ඨි සංවච්ඡරානි චේව සත්ත මාසානි ච අට්ඨාරස දිවසානි අතික්කන්තානි.<br>
    ද්වේසහස්ස-චතුසත-අට්ඨතිංසති සංවච්ඡරානි චේව පඤ්ච මාසානි ච ඒකාදස දිවසානි අවසිට්ඨානි.<br>
    අයං සූකර සංවච්ඡරෙ හේමන්ත උතු, අස්මිං උතුම්හි මාඝසිර මාසස්ස සුක්ක පක්ඛෙ චතුත්ථං භුම්මවාරමිදන්ති දට්ඨබ්බං.
  </div>
  <h4>සරල අර්ථය</h4>
  <div class="info-box">
    <p>… සංවත්සරයේ වෙසක් පුන් පොහෝ දින, අඟහරුවාදා (භුම්මවාර) පරිනිර්වාණයට පත් වූසේක. අර්හත් සම්මා සම්බුද්ධ වූ ඒ භාග්‍යවතුන් වහන්සේගේ සාසනය වසර පන්දහසක් පවතී.</p>
    <p>දැන් වසර දෙදහස් පන්සිය හැට එකක්ද (2561), මාස හතක්ද, දින දහඅටක්ද ගෙවී ගොස් ඇත.</p>
    <p>වසර දෙදහස් හාරසිය තිස් අටක්ද (2438), මාස පහක්ද, දින එකොළහක්ද ඉතිරිව ඇත.</p>
    <p>මෙය සූකර (ඌරු) සංවත්සරයයි; හේමන්ත ඍතුවයි; මේ ඍතුවෙහි මාඝසිර මාසයේ සුක්ක (පුර) පක්ෂයේ සිව්වන දිනය (චතුත්ථි) අඟහරුවාදා යැයි දත යුතුය.</p>
  </div>
</section>
 <div class="note-box">
    <strong>සටහන:</strong> මෙම දිනය අතිපූජනීය මාතර සිරි ඥානාරාම මාහිමිපාණන් වහන්සේගේ 117 වැනි ජන්ම දින සැමරුම යෙදුණු දිනයයි.
  </div>
</main>
<footer>
  <div class="lamp">🪔 🪔 🪔</div>
  <p class="bless">
    මෙම ශාස්ත්‍රීය තොරතුරු සම්පාදනය කිරීමට සහ මෙම දැනුම ලෝකවාසී බෞද්ධ ජනතාව
    වෙත ලබා දීමට දායක වූ සැමටත්, මෙය පරිශීලනය කරන ඔබ සැමටත්,
    උතුම් චතුරාර්ය සත්‍ය ධර්මය අවබෝධ කර ගැනීමට මෙම පුණ්‍යකර්මය හේතු වාසනා වේවා!
  </p>
  <p class="thanks">තෙරුවන් සරණයි 🙏</p>
  <div class="copy">
    බුද්ධ වර්ෂ ගණනය කිරීමේ අත්පොත &nbsp;|&nbsp; © පඤ්ඤාපාරමී නා උයන
  </div>
</footer>`,
    en: `<header class="hero">
  <svg class="hero-wheel" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="46" fill="none" stroke="#f9e9b8" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="#f9e9b8" stroke-width="0.8" opacity="0.6"/>
    <circle cx="50" cy="50" r="8" fill="#f9e9b8"/>
    <circle cx="50" cy="50" r="4" fill="#4a0d0d"/>
    <g stroke="#f9e9b8" stroke-width="1.4">
      <line x1="50" y1="4" x2="50" y2="96"/>
      <line x1="4" y1="50" x2="96" y2="50"/>
      <line x1="17.5" y1="17.5" x2="82.5" y2="82.5"/>
      <line x1="82.5" y1="17.5" x2="17.5" y2="82.5"/>
      <line x1="30" y1="8" x2="70" y2="92"/>
      <line x1="70" y1="8" x2="30" y2="92"/>
      <line x1="8" y1="30" x2="92" y2="70"/>
      <line x1="8" y1="70" x2="92" y2="30"/>
    </g>
  </svg>
  <h1>Buddha Varṣa (Buddhist Era)</h1>
  <p class="subtitle">A scholastic handbook on time-reckoning in the Dispensation of the Supreme Buddha</p>
  <div class="lotus">✿ ❀ ✿ ❀ ✿</div>
</header>
<div class="topbar"><div class="topbar-inner"><nav class="toc" aria-label="Contents">
      <a href="#intro">Introduction</a>
      <a href="#varsha">The Twelve Years</a>
      <a href="#masa">Months &amp; Seasons</a>
      <a href="#paksha">Paksha &amp; Days</a>
      <a href="#sankhya">Numbers</a>
      <a href="#gananaya">Calculation</a>
      <a href="#atikranta">Elapsed Time</a>
      <a href="#vagu">Tables 1–4</a>
      <a href="#chandra">Moon Phases</a>
      <a href="#masa-krama">Month Systems</a>
      <a href="#uposatha">Uposatha</a>
      <a href="#adhimasa">Adhimāsa</a>
      <a href="#meton">Metonic Cycle</a>
      <a href="#nishchaya">Determination</a>
      <a href="#pali">Pali Formula</a>
    </nav></div></div>
<main>

<!-- ============================================================
     1. Introduction
     ============================================================ -->
<section class="card" id="intro">
  <h2>How the Buddha Varṣa is Calculated</h2>
  <p>
    The Buddhist Era (<em class="pali">Buddha Varṣa</em>) begins after the <em class="pali">Parinibbāna</em> (final passing away) of the Buddha.
    The Buddha's <em class="pali">Parinibbāna</em> occurred on the
    <strong>Vesākha full-moon (<em class="pali">Puṇṇamī</em>) Poya day</strong>,
    and the lifespan of the Buddha's Dispensation (<em class="pali">sāsana</em>) is said to last
    <strong>5,000 years</strong>. This period is called the <em class="pali">Buddha Varṣa</em>.
  </p>
  <div class="info-box">
    Since the Buddhist Era is calculated according to the <strong>movement of the moon</strong>,
    the following fundamental data must be understood in order to calculate how many years, months,
    and days have elapsed since the <em class="pali">Parinibbāna</em>, how much remains, and what
    the current year, season (<em class="pali">utu</em>), fortnight (<em class="pali">pakṣa</em>),
    month (<em class="pali">māsa</em>), and day (<em class="pali">vāra</em>) are.
  </div>
</section>

<!-- ============================================================
     2. The Twelve Years
     ============================================================ -->
<section class="card" id="varsha">
  <h2>The Twelve Years (<em class="pali">Dvādaśa Varṣāṇi</em>)</h2>
  <div class="verse">
    Mūsiko, Vasabho, Vyaggha,<br>
    Sasa, Nāgāni, mevaca;<br>
    Sappassa-ja, Kapī, ceva,<br>
    Kukkuṭo, Soṇa, Sūkaro.
  </div>
  <p>The Buddhist Era has twelve year-names (<em class="pali">saṃvacchara</em>) that cycle continuously:</p>

  <div class="year-grid">
    <div class="year-card"><div class="num">01</div><div class="name">Mūsiko</div><div class="meaning">Mouse / Rat</div></div>
    <div class="year-card"><div class="num">02</div><div class="name">Vasabho</div><div class="meaning">Bull / Ox</div></div>
    <div class="year-card"><div class="num">03</div><div class="name">Vyaggho</div><div class="meaning">Tiger</div></div>
    <div class="year-card"><div class="num">04</div><div class="name">Saso</div><div class="meaning">Hare / Rabbit</div></div>
    <div class="year-card"><div class="num">05</div><div class="name">Nāgo</div><div class="meaning">Nāga (Serpent)</div></div>
    <div class="year-card"><div class="num">06</div><div class="name">Sappo</div><div class="meaning">Snake</div></div>
    <div class="year-card"><div class="num">07</div><div class="name">Ajo</div><div class="meaning">Goat</div></div>
    <div class="year-card"><div class="num">08</div><div class="name">Kapi</div><div class="meaning">Monkey</div></div>
    <div class="year-card"><div class="num">09</div><div class="name">Kukkuṭo</div><div class="meaning">Rooster</div></div>
    <div class="year-card"><div class="num">10</div><div class="name">Soṇo</div><div class="meaning">Dog</div></div>
    <div class="year-card"><div class="num">11</div><div class="name">Sūkaro</div><div class="meaning">Pig / Boar</div></div>
    <div class="year-card"><div class="num">12</div><div class="name">Asso</div><div class="meaning">Horse</div></div>
  </div>
</section>
<section class="card" id="masa">
  <h2>The Twelve Months and Three Seasons</h2>
  <p>
    The first month of the Buddhist Era is <strong><em class="pali">Jeṭṭha</em> (Poson)</strong>.
    It begins on the day following the Vesākha full-moon Poya. The twelve months are divided
    into three seasons (<em class="pali">utu</em>):
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Month (Pāli)</th>
          <th>Month (Sinhala)</th>
          <th>Gregorian</th>
          <th>Season</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><em class="pali">Jeṭṭha</em></td><td>Poson</td><td>May – June</td><td class="season-hot" rowspan="2">Gimhāna (Hot)</td></tr>
        <tr><td>2</td><td><em class="pali">Āsāḷha</em></td><td>Esala</td><td>June – July</td></tr>
        <tr><td>3</td><td><em class="pali">Sāvaṇa</em></td><td>Nikini</td><td>July – August</td><td class="season-rain" rowspan="4">Vassāna (Rainy)</td></tr>
        <tr><td>4</td><td><em class="pali">Poṭṭhapāda</em></td><td>Binara</td><td>August – Sept.</td></tr>
        <tr><td>5</td><td><em class="pali">Assayuja</em></td><td>Vap</td><td>Sept. – Oct.</td></tr>
        <tr><td>6</td><td><em class="pali">Kattika</em></td><td>Il</td><td>Oct. – Nov.</td></tr>
        <tr><td>7</td><td><em class="pali">Māgasira</em></td><td>Unduvap</td><td>Nov. – Dec.</td><td class="season-cold" rowspan="4">Hemanta (Cold)</td></tr>
        <tr><td>8</td><td><em class="pali">Phussa</em></td><td>Duruthu</td><td>Dec. – Jan.</td></tr>
        <tr><td>9</td><td><em class="pali">Māgha</em></td><td>Navam</td><td>Jan. – Feb.</td></tr>
        <tr><td>10</td><td><em class="pali">Phagguṇa</em></td><td>Medin</td><td>Feb. – March</td></tr>
        <tr><td>11</td><td><em class="pali">Citta</em></td><td>Bak</td><td>March – April</td><td class="season-hot" rowspan="2">Gimhāna (Hot)</td></tr>
        <tr><td>12</td><td><em class="pali">Vesākha</em></td><td>Vesak</td><td>April – May</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     4. Paksha & Days
     ============================================================ -->
<section class="card" id="paksha">
  <h2>The Two Pakṣas, Two Uposatha Days, and the Seven Days</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>The Two Pakṣas</h4>
      <table>
        <tr><td>1. <em class="pali">Sukkapakkho</em></td><td>Bright Fortnight (Waxing Moon)</td></tr>
        <tr><td>2. <em class="pali">Kāḷapakkho</em> (<em class="pali">Kaṇhapakkho</em>)</td><td>Dark Fortnight (Waning Moon)</td></tr>
      </table>
    </div>
    <div class="paksha-card kala">
      <h4>The Two Uposatha Days</h4>
      <table>
        <tr><td>1. <em class="pali">Paṇṇarasī</em></td><td>Full-Moon (15th-day) Poya</td></tr>
        <tr><td>2. <em class="pali">Cātuddasī</em></td><td>14th-day Poya</td></tr>
      </table>
    </div>
  </div>

  <h3>The Seven Days</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>No.</th><th>Pāli Name</th><th>English</th><th>Day</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><em class="pali">Ravivāro</em></td><td>Sun's day</td><td>Sunday</td></tr>
        <tr><td>2</td><td><em class="pali">Candavāro</em></td><td>Moon's day</td><td>Monday</td></tr>
        <tr><td>3</td><td><em class="pali">Bhummavāro</em></td><td>Mars' day</td><td>Tuesday</td></tr>
        <tr><td>4</td><td><em class="pali">Budhavāro</em></td><td>Mercury's day</td><td>Wednesday</td></tr>
        <tr><td>5</td><td><em class="pali">Guruvāro</em></td><td>Jupiter's day</td><td>Thursday</td></tr>
        <tr><td>6</td><td><em class="pali">Sukkavāro</em></td><td>Venus' day</td><td>Friday</td></tr>
        <tr><td>7</td><td><em class="pali">Soravāro</em></td><td>Saturn's day</td><td>Saturday</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     5. Numbers
     ============================================================ -->
<section class="card" id="sankhya">
  <h2>Numbers and Ordinals</h2>
  <p>Basic Pāli numerals used in the reckoning:</p>

  <div class="num-grid">
    <div class="num-cell"><span class="n">1</span><span class="p">Eka</span></div>
    <div class="num-cell"><span class="n">2</span><span class="p">Dvi</span></div>
    <div class="num-cell"><span class="n">3</span><span class="p">Ti</span></div>
    <div class="num-cell"><span class="n">4</span><span class="p">Catu</span></div>
    <div class="num-cell"><span class="n">5</span><span class="p">Pañca</span></div>
    <div class="num-cell"><span class="n">6</span><span class="p">Cha</span></div>
    <div class="num-cell"><span class="n">7</span><span class="p">Satta</span></div>
    <div class="num-cell"><span class="n">8</span><span class="p">Aṭṭha</span></div>
    <div class="num-cell"><span class="n">9</span><span class="p">Nava</span></div>
    <div class="num-cell"><span class="n">10</span><span class="p">Dasa</span></div>
    <div class="num-cell"><span class="n">11</span><span class="p">Ekādasa</span></div>
    <div class="num-cell"><span class="n">12</span><span class="p">Dvādasa</span></div>
    <div class="num-cell"><span class="n">13</span><span class="p">Terasa</span></div>
    <div class="num-cell"><span class="n">14</span><span class="p">Cuddasa</span></div>
    <div class="num-cell"><span class="n">15</span><span class="p">Paṇṇarasa</span></div>
    <div class="num-cell"><span class="n">16</span><span class="p">Soḷasa</span></div>
    <div class="num-cell"><span class="n">17</span><span class="p">Sattarasa</span></div>
    <div class="num-cell"><span class="n">18</span><span class="p">Aṭṭhārasa</span></div>
    <div class="num-cell"><span class="n">19</span><span class="p">Ekūnavīsati</span></div>
    <div class="num-cell"><span class="n">20</span><span class="p">Vīsati</span></div>
    <div class="num-cell"><span class="n">21</span><span class="p">Ekavīsati</span></div>
    <div class="num-cell"><span class="n">22</span><span class="p">Dvivīsati</span></div>
    <div class="num-cell"><span class="n">23</span><span class="p">Tevīsati</span></div>
    <div class="num-cell"><span class="n">24</span><span class="p">Catuvīsati</span></div>
    <div class="num-cell"><span class="n">25</span><span class="p">Pañcavīsati</span></div>
    <div class="num-cell"><span class="n">26</span><span class="p">Chabbīsati</span></div>
    <div class="num-cell"><span class="n">27</span><span class="p">Sattavīsati</span></div>
    <div class="num-cell"><span class="n">28</span><span class="p">Aṭṭhavīsati</span></div>
    <div class="num-cell"><span class="n">29</span><span class="p">Ekūnatiṃsati</span></div>
    <div class="num-cell"><span class="n">30</span><span class="p">Tiṃsati</span></div>
    <div class="num-cell"><span class="n">31</span><span class="p">Ekatimṃsati</span></div>
    <div class="num-cell"><span class="n">32</span><span class="p">Dvattiṃsati</span></div>
    <div class="num-cell"><span class="n">33</span><span class="p">Tettiṃsati</span></div>
    <div class="num-cell"><span class="n">34</span><span class="p">Catuttiṃsati</span></div>
    <div class="num-cell"><span class="n">35</span><span class="p">Pañcatiṃsati</span></div>
    <div class="num-cell"><span class="n">36</span><span class="p">Chattiṃsati</span></div>
    <div class="num-cell"><span class="n">37</span><span class="p">Sattatiṃsati</span></div>
    <div class="num-cell"><span class="n">38</span><span class="p">Aṭṭhatiṃsati</span></div>
    <div class="num-cell"><span class="n">39</span><span class="p">Ekūnācattālīsati</span></div>
    <div class="num-cell"><span class="n">40</span><span class="p">Cattālīsati</span></div>
    <div class="num-cell"><span class="n">50</span><span class="p">Paññāsa</span></div>
    <div class="num-cell"><span class="n">60</span><span class="p">Saṭṭhi</span></div>
    <div class="num-cell"><span class="n">70</span><span class="p">Sattati</span></div>
    <div class="num-cell"><span class="n">80</span><span class="p">Asīti</span></div>
    <div class="num-cell"><span class="n">90</span><span class="p">Navuti</span></div>
    <div class="num-cell"><span class="n">100</span><span class="p">Sataṃ</span></div>
    <div class="num-cell"><span class="n">1000</span><span class="p">Sahassaṃ</span></div>
    <div class="num-cell"><span class="n">2000</span><span class="p">Dvisahassaṃ</span></div>
    <div class="num-cell"><span class="n">3000</span><span class="p">Tisahassaṃ</span></div>
    <div class="num-cell"><span class="n">4000</span><span class="p">Catusahassaṃ</span></div>
    <div class="num-cell"><span class="n">5000</span><span class="p">Pañcasahassaṃ</span></div>
  </div>

  <h3>Ordinal Numbers</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Day</th><th>Pāli</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>1st</td><td><em class="pali">Paṭhamaṃ</em></td><td>First</td></tr>
        <tr><td>2nd</td><td><em class="pali">Dutiyaṃ</em></td><td>Second</td></tr>
        <tr><td>3rd</td><td><em class="pali">Tatiyaṃ</em></td><td>Third</td></tr>
        <tr><td>4th</td><td><em class="pali">Catutthaṃ</em></td><td>Fourth</td></tr>
        <tr><td>5th</td><td><em class="pali">Pañcamaṃ</em></td><td>Fifth</td></tr>
        <tr><td>6th</td><td><em class="pali">Chaṭṭhamaṃ</em></td><td>Sixth</td></tr>
        <tr><td>7th</td><td><em class="pali">Sattamaṃ</em></td><td>Seventh</td></tr>
        <tr><td>8th</td><td><em class="pali">Aṭṭhamaṃ</em></td><td>Eighth</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     6. Calculation of the Current Time
     ============================================================ -->
<section class="card" id="gananaya">
  <h2>How to Calculate the Current Time</h2>
  <p>
    To calculate the current time, an Uposatha calendar for the <strong>Vassāna season of
    2015 CE</strong> is given as an example, showing the Śukla and Kāḷa pakṣas, and the
    <em class="pali">Paṇṇarasī</em> (Full-Moon) and <em class="pali">Cātuddasī</em> (14th-day) Poya days.
  </p>

  <p style="text-align:center; font-weight:700; color:var(--burgundy-700); margin:14px 0;">
    Śrī Buddha Varṣa 2558–59 &nbsp;|&nbsp; Uposatha Calendar &nbsp;|&nbsp; 2015 CE
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Season</th><th>Month</th><th>Date</th><th>Weekday</th><th>Pakṣa</th><th>Poya</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">Vassāna</td><td>July</td><td>30</td><td>Thursday</td><td>Śukla</td><td>0 Paṇṇarasī</td></tr>
        <tr><td>August</td><td>14</td><td>Friday</td><td>Kāḷa</td><td>1 Paṇṇarasī</td></tr>
        <tr><td>August</td><td>29</td><td>Saturday</td><td>Śukla</td><td>2 Paṇṇarasī</td></tr>
        <tr><td>September</td><td>12</td><td>Saturday</td><td>Kāḷa</td><td>3 Cātuddasī</td></tr>
        <tr><td>September</td><td>27</td><td>Sunday</td><td>Śukla</td><td>4 Paṇṇarasī</td></tr>
        <tr><td>October</td><td>12</td><td>Monday</td><td>Kāḷa</td><td>5 Paṇṇarasī</td></tr>
        <tr><td>October</td><td>27</td><td>Tuesday</td><td>Śukla</td><td>6 Paṇṇarasī</td></tr>
        <tr><td>November</td><td>10</td><td>Tuesday</td><td>Kāḷa</td><td>7 Cātuddasī</td></tr>
        <tr><td>November</td><td>25</td><td>Wednesday</td><td>Śukla</td><td>8 Paṇṇarasī</td></tr>
      </tbody>
    </table>
  </div>

  <p>
    Here, Saturday the 12th of September is seen to be a <strong>New-Moon
    (<em class="pali">Amāvaka</em>) Poya falling on a <em class="pali">Cātuddasī</em></strong>.
    Therefore, if one wishes to determine the details of 15 September, it can be understood
    that this day occurs three days after the New-Moon Poya, falls on a Tuesday, and is the
    third day of the Śukla (waxing) fortnight.
  </p>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Season</th><th>Date</th><th>Weekday</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Vassāna</td><td>Sept. 12</td><td>Saturday</td><td>New-Moon day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 13</td><td>Sunday</td><td>First day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 14</td><td>Monday</td><td>Second day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 15</td><td>Tuesday</td><td><strong>Third day</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>The details of 15 September in Pāli should be stated thus:</p>

  <div class="gn-pali-box">
    <em>Ayaṃ vassāna-utu</em> (this is the Rainy Season). <em>Asmiṃ utumhi</em> (in this season),
    <em>Poṭṭhapāda-māsassa</em> (of the month Poṭṭhapāda / September),
    <em>sukkapakkhe</em> (in the Bright Fortnight), <em>tatiyaṃ</em> (the third day),
    <em>bhummavāram-idaṃ</em> (this is Tuesday) — <em>iti daṭṭhabbaṃ</em>
    (thus it should be understood).
  </div>
</section>

<!-- ============================================================
     7. Elapsed / Remaining
     ============================================================ -->
<section class="card" id="atikranta">
  <h2>Elapsed Time (<em class="pali">Atikkanta</em>) and Remaining Time (<em class="pali">Avasiṭṭha</em>)</h2>

  <h3>Elapsed Time (Atikkanta)</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Unit</th><th>Count</th><th class="left">Explanation</th></tr></thead>
      <tbody>
        <tr>
          <td>Years</td><td>2558</td>
          <td class="left">On Sunday, 3 May 2015 CE — the day after the Vesākha Full-Moon Poya — the new Buddha Varṣa 2559 began. Therefore Buddha Varṣa 2558 has elapsed.</td>
        </tr>
        <tr>
          <td>Months</td><td>3</td>
          <td class="left">On the day after the Full-Moon Poya of Sāvaṇa (August) 29, the month Poṭṭhapāda (September) began. Therefore, from Vesākha Full-Moon Poya to the month Poṭṭhapāda, three months have elapsed.</td>
        </tr>
        <tr>
          <td>Days</td><td>16</td>
          <td class="left">From the day after the Full-Moon Poya of Sāvaṇa (August) 29 to Poṭṭhapāda (September) 15, sixteen days have elapsed.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Remaining Time (Avasiṭṭha)</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Unit</th><th>Count</th><th class="left">Explanation</th></tr></thead>
      <tbody>
        <tr>
          <td>Years</td><td>2441</td>
          <td class="left">Subtracting 2558 from Buddha Varṣa 5000 gives 2442. Subtracting the current year from that gives 2441. These are the years remaining to elapse.</td>
        </tr>
        <tr>
          <td>Months</td><td>9</td>
          <td class="left">Since Buddha Varṣa 2559 is a year with an intercalary month (<em class="pali">adhimāsa</em>), there are 13 months. Subtracting 3 from 13 gives 10. Subtracting the current month from that gives 9.</td>
        </tr>
        <tr>
          <td>Days</td><td>12</td>
          <td class="left">Since the New-Moon Poya of Poṭṭhapāda (September) fell on a <em class="pali">Cātuddasī</em>, that month had 29 days. Subtracting 16 from 29 gives 13. Subtracting the current day from that leaves 12 days remaining to elapse.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     8. Tables 1–4
     ============================================================ -->
<section class="card" id="vagu">
  <h2>Table 1 — Years (<em class="pali">Saṃvaccharāni</em>)</h2>
  <p>Current Buddha Varṣa, elapsed/remaining years, and the year-name:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Current Year</th><th>Year Name</th><th>CE</th><th>Elapsed (Atikkanta)</th><th>Remaining (Avasiṭṭha)</th></tr>
      </thead>
      <tbody>
        <tr><td>B.V. 2559</td><td><em class="pali">Kapi</em></td><td>May 2015</td><td>2558</td><td>2441</td></tr>
        <tr><td>B.V. 2560</td><td><em class="pali">Kukkuṭa</em></td><td>May 2016</td><td>2559</td><td>2440</td></tr>
        <tr><td>B.V. 2561</td><td><em class="pali">Soṇa</em></td><td>May 2017</td><td>2560</td><td>2439</td></tr>
        <tr><td>B.V. 2562</td><td><em class="pali">Sūkara</em></td><td>May 2018</td><td>2561</td><td>2438</td></tr>
        <tr><td>B.V. 2563</td><td><em class="pali">Mūsika</em></td><td>May 2019</td><td>2562</td><td>2437</td></tr>
        <tr><td>B.V. 2564</td><td><em class="pali">Vasabha</em></td><td>May 2020</td><td>2563</td><td>2436</td></tr>
        <tr><td>B.V. 2565</td><td><em class="pali">Vyaggha</em></td><td>May 2021</td><td>2564</td><td>2435</td></tr>
        <tr><td>B.V. 2566</td><td><em class="pali">Sasa</em></td><td>May 2022</td><td>2565</td><td>2434</td></tr>
        <tr><td>B.V. 2567</td><td><em class="pali">Nāga</em></td><td>May 2023</td><td>2566</td><td>2433</td></tr>
        <tr><td>B.V. 2568</td><td><em class="pali">Sappa</em></td><td>May 2024</td><td>2567</td><td>2432</td></tr>
        <tr><td>B.V. 2569</td><td><em class="pali">Assa</em></td><td>May 2025</td><td>2568</td><td>2431</td></tr>
        <tr><td>B.V. 2570</td><td><em class="pali">Aja</em></td><td>May 2026</td><td>2569</td><td>2430</td></tr>
        <tr><td>B.V. 2571</td><td><em class="pali">Kapi</em></td><td>May 2027</td><td>2570</td><td>2429</td></tr>
        <tr><td>B.V. 2572</td><td><em class="pali">Kukkuṭa</em></td><td>May 2028</td><td>2571</td><td>2428</td></tr>
        <tr><td>B.V. 2573</td><td><em class="pali">Soṇa</em></td><td>May 2029</td><td>2572</td><td>2427</td></tr>
        <tr><td>B.V. 2574</td><td><em class="pali">Sūkara</em></td><td>May 2030</td><td>2573</td><td>2426</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Table 2 — Months and Seasons</h2>
  <p>Every month begins on the day after the Full-Moon Poya and lasts until the next Full-Moon Poya. Therefore, the first month of every year is <strong><em class="pali">Jeṭṭha</em> (Poson)</strong>.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Current Month</th><th>Months Elapsed</th><th>Months Remaining</th><th>Season</th></tr>
      </thead>
      <tbody>
        <tr><td>1. Jeṭṭha – Poson (May–June)</td><td>0</td><td>11 (Ekādasa)</td><td class="season-hot" rowspan="2">Gimhāna</td></tr>
        <tr><td>2. Āsāḷha – Esala (June–July)</td><td>1 (Eka)</td><td>10 (Dasa)</td></tr>
        <tr><td>3. Sāvaṇa – Nikini (July–Aug.)</td><td>2 (Dve)</td><td>9 (Nava)</td><td class="season-rain" rowspan="4">Vassāna</td></tr>
        <tr><td>4. Poṭṭhapāda – Binara (Aug.–Sept.)</td><td>3 (Ti)</td><td>8 (Aṭṭha)</td></tr>
        <tr><td>5. Assayuja – Vap (Sept.–Oct.)</td><td>4 (Catu)</td><td>7 (Satta)</td></tr>
        <tr><td>6. Kattika – Il (Oct.–Nov.)</td><td>5 (Pañca)</td><td>6 (Cha)</td></tr>
        <tr><td>7. Māgasira – Unduvap (Nov.–Dec.)</td><td>6 (Cha)</td><td>5 (Pañca)</td><td class="season-cold" rowspan="4">Hemanta</td></tr>
        <tr><td>8. Phussa – Duruthu (Dec.–Jan.)</td><td>7 (Satta)</td><td>4 (Catu)</td></tr>
        <tr><td>9. Māgha – Navam (Jan.–Feb.)</td><td>8 (Aṭṭha)</td><td>3 (Ti)</td></tr>
        <tr><td>10. Phagguṇa – Medin (Feb.–March)</td><td>9 (Nava)</td><td>2 (Dve)</td></tr>
        <tr><td>11. Citta – Bak (March–April)</td><td>10 (Dasa)</td><td>1 (Eka)</td><td class="season-hot" rowspan="2">Gimhāna</td></tr>
        <tr><td>12. Vesākha – Vesak (April–May)</td><td>11 (Ekādasa)</td><td>0</td></tr>
      </tbody>
    </table>
  </div>

  <<h2>Table 3 — Days (<em class="pali">Divasāni</em>)</h2>
  <p>Days elapsed and remaining based on the current day of the fortnight:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Day No.</th><th>Days Elapsed</th><th>Days Remaining</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>0</td><td>29 (Ekūnatiṃsati)</td></tr>
        <tr><td>2</td><td>1 (Eka)</td><td>28 (Aṭṭhavīsati)</td></tr>
        <tr><td>3</td><td>2 (Dve)</td><td>27 (Sattavīsati)</td></tr>
        <tr><td>4</td><td>3 (Ti)</td><td>26 (Chabbīsati)</td></tr>
        <tr><td>5</td><td>4 (Catu)</td><td>25 (Pañcavīsati)</td></tr>
        <tr><td>6</td><td>5 (Pañca)</td><td>24 (Catuvīsati)</td></tr>
        <tr><td>7</td><td>6 (Cha)</td><td>23 (Tevīsati)</td></tr>
        <tr><td>8</td><td>7 (Satta)</td><td>22 (Dvivīsati)</td></tr>
        <tr><td>9</td><td>8 (Aṭṭha)</td><td>21 (Ekavīsati)</td></tr>
        <tr><td>10</td><td>9 (Nava)</td><td>20 (Vīsati)</td></tr>
        <tr><td>11</td><td>10 (Dasa)</td><td>19 (Ekūnavīsati)</td></tr>
        <tr><td>12</td><td>11 (Ekādasa)</td><td>18 (Aṭṭhārasa)</td></tr>
        <tr><td>13</td><td>12 (Dvādasa)</td><td>17 (Sattarasa)</td></tr>
        <tr><td>14</td><td>13 (Terasa)</td><td>16 (Soḷasa)</td></tr>
        <tr><td>15</td><td>14 (Cuddasa)</td><td>15 (Paṇṇarasa)</td></tr>
        <tr><td>16</td><td>15 (Paṇṇarasa)</td><td>14 (Cuddasa)</td></tr>
        <tr><td>17</td><td>16 (Soḷasa)</td><td>13 (Terasa)</td></tr>
        <tr><td>18</td><td>17 (Sattarasa)</td><td>12 (Dvādasa)</td></tr>
        <tr><td>19</td><td>18 (Aṭṭhārasa)</td><td>11 (Ekādasa)</td></tr>
        <tr><td>20</td><td>19 (Ekūnavīsati)</td><td>10 (Dasa)</td></tr>
        <tr><td>21</td><td>20 (Vīsati)</td><td>9 (Nava)</td></tr>
        <tr><td>22</td><td>21 (Ekavīsati)</td><td>8 (Aṭṭha)</td></tr>
        <tr><td>23</td><td>22 (Dvivīsati)</td><td>7 (Satta)</td></tr>
        <tr><td>24</td><td>23 (Tevīsati)</td><td>6 (Cha)</td></tr>
        <tr><td>25</td><td>24 (Catuvīsati)</td><td>5 (Pañca)</td></tr>
        <tr><td>26</td><td>25 (Pañcavīsati)</td><td>4 (Catu)</td></tr>
        <tr><td>27</td><td>26 (Chabbīsati)</td><td>3 (Ti)</td></tr>
        <tr><td>28</td><td>27 (Sattavīsati)</td><td>2 (Dve)</td></tr>
        <tr><td>29</td><td>28 (Aṭṭhavīsati)</td><td>1 (Eka)</td></tr>
        <tr><td>30</td><td>29 (Ekūnatiṃsati)</td><td>0</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Table 4 — Days of the Fortnight (<em class="pali">Tithi / Sthiti</em>)</h2>
  <p>Tithis begin on the day after the Full-Moon Poya or the New-Moon Poya.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Day</th><th>Pāli</th><th>Bright Fortnight</th><th>Dark Fortnight</th></tr>
      </thead>
      <tbody>
        <tr><td>—</td><td>—</td><td><strong>Full-Moon Poya</strong></td><td><strong>New-Moon Poya</strong></td></tr>
        <tr><td>1</td><td><em class="pali">Paṭhamā</em></td><td>First waxing day</td><td>First waning day</td></tr>
        <tr><td>2</td><td><em class="pali">Dutiyā</em></td><td>Second waxing</td><td>Second waning</td></tr>
        <tr><td>3</td><td><em class="pali">Tatiyā</em></td><td>Third waxing</td><td>Third waning</td></tr>
        <tr><td>4</td><td><em class="pali">Catutthī</em></td><td>Fourth waxing</td><td>Fourth waning</td></tr>
        <tr><td>5</td><td><em class="pali">Pañcamī</em></td><td>Fifth waxing</td><td>Fifth waning</td></tr>
        <tr><td>6</td><td><em class="pali">Chaṭṭhī</em></td><td>Sixth waxing</td><td>Sixth waning</td></tr>
        <tr><td>7</td><td><em class="pali">Sattamī</em></td><td>Seventh waxing</td><td>Seventh waning</td></tr>
        <tr><td>8</td><td><em class="pali">Aṭṭhamī</em></td><td>Eighth waxing</td><td>Eighth waning</td></tr>
        <tr><td>9</td><td><em class="pali">Navamī</em></td><td>Ninth waxing</td><td>Ninth waning</td></tr>
        <tr><td>10</td><td><em class="pali">Dasamī</em></td><td>Tenth waxing</td><td>Tenth waning</td></tr>
        <tr><td>11</td><td><em class="pali">Ekādasī</em></td><td>Eleventh waxing</td><td>Eleventh waning</td></tr>
        <tr><td>12</td><td><em class="pali">Dvādasī</em></td><td>Twelfth waxing</td><td>Twelfth waning</td></tr>
        <tr><td>13</td><td><em class="pali">Terasī</em></td><td>Thirteenth waxing</td><td>Thirteenth waning</td></tr>
        <tr><td>14</td><td><em class="pali">Cuddasī</em></td><td>Fourteenth waxing</td><td>Fourteenth waning</td></tr>
        <tr><td>15</td><td><em class="pali">Paṇṇarasī</em></td><td>Fifteenth waxing (Full Moon)</td><td>Fifteenth waning (New Moon)</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     9. Moon Phases
     ============================================================ -->
<section class="card" id="chandra">
  <h2>Days, Pakṣas, Months, Seasons, and Years</h2>

  <h3>The Moon's Pakṣas</h3>
  <p>Each month is divided into two pakṣas (fortnights):</p>

  <div class="moon-wrapper">
    <div class="moon-svg-wrap">
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-label="Moon phases diagram">
        <defs>
          <radialGradient id="earthGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#4a90e2"/>
            <stop offset="65%" stop-color="#1e5faa"/>
            <stop offset="100%" stop-color="#0d3a6b"/>
          </radialGradient>
          <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#4a90e2" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#4a90e2" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="moonClipRight"><circle cx="0" cy="0" r="26"/></clipPath>
          <clipPath id="moonClipLeft"><circle cx="0" cy="0" r="26"/></clipPath>
        </defs>

        <g fill="#fff" opacity="0.55">
          <circle cx="50" cy="70" r="1.3"/>
          <circle cx="130" cy="40" r="1"/>
          <circle cx="480" cy="85" r="1.4"/>
          <circle cx="545" cy="170" r="1"/>
          <circle cx="560" cy="460" r="1.2"/>
          <circle cx="65" cy="530" r="1"/>
          <circle cx="510" cy="545" r="1.3"/>
          <circle cx="115" cy="395" r="1"/>
          <circle cx="410" cy="30" r="1.1"/>
          <circle cx="230" cy="580" r="1"/>
        </g>

        <circle cx="300" cy="300" r="130" fill="url(#earthGlow)"/>
        <circle cx="300" cy="300" r="175" fill="none" stroke="#c9a227" stroke-width="1.2" stroke-dasharray="6 8" opacity="0.55"/>

        <text x="300" y="52" text-anchor="middle" fill="#ffd966" font-size="17" font-weight="bold" font-family="Georgia, serif">Śukla Pakṣa (Waxing)</text>
        <text x="300" y="72" text-anchor="middle" fill="#e8c97a" font-size="12" font-family="Georgia, serif">from New Moon to Full Moon</text>

        <text x="300" y="558" text-anchor="middle" fill="#c8d0d8" font-size="17" font-weight="bold" font-family="Georgia, serif">Kāḷa Pakṣa (Waning)</text>
        <text x="300" y="578" text-anchor="middle" fill="#a8b0b8" font-size="12" font-family="Georgia, serif">from Full Moon to New Moon</text>

        <path d="M 420 175 Q 300 80 180 175" fill="none" stroke="#ffd966" stroke-width="2" opacity="0.7" marker-end="url(#arrowGold)"/>
        <defs>
          <marker id="arrowGold" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#ffd966"/></marker>
          <marker id="arrowGray" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#95a5a6"/></marker>
        </defs>
        <path d="M 180 425 Q 300 520 420 425" fill="none" stroke="#95a5a6" stroke-width="2" opacity="0.7" marker-end="url(#arrowGray)"/>

        <!-- Right: New Moon -->
        <g transform="translate(475 300)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <circle r="26" fill="none" stroke="#333" stroke-width="0.5"/>
        </g>
        <text x="475" y="352" text-anchor="middle" fill="#c0c8d0" font-size="13" font-weight="bold" font-family="Georgia, serif">New Moon</text>
        <text x="475" y="369" text-anchor="middle" fill="#8890a0" font-size="10.5" font-family="Georgia, serif">Day 0</text>

        <!-- Top-right: Waxing crescent -->
        <g transform="translate(425 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)"><circle cx="32" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="452" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">1st waxing day</text>

        <!-- Top: First quarter -->
        <g transform="translate(300 125)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)"><circle cx="26" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="300" y="88" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">8th waxing day</text>

        <!-- Top-left: Waxing gibbous -->
        <g transform="translate(175 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRight)"><circle cx="13" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="148" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">14th waxing day</text>

        <!-- Left: Full Moon -->
        <g transform="translate(125 300)">
          <circle r="26" fill="#fdfbd3" stroke="#ffd966" stroke-width="2"/>
          <circle r="15" fill="#fffbe0" opacity="0.7"/>
          <circle r="8" fill="#fffef0" opacity="0.5"/>
        </g>
        <text x="125" y="352" text-anchor="middle" fill="#ffd966" font-size="13" font-weight="bold" font-family="Georgia, serif">Full Moon</text>
        <text x="125" y="369" text-anchor="middle" fill="#d4a860" font-size="10.5" font-family="Georgia, serif">Day 15</text>

        <!-- Bottom-left: Waning gibbous -->
        <g transform="translate(175 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)"><circle cx="-13" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="148" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">14th waning day</text>

        <!-- Bottom: Last quarter -->
        <g transform="translate(300 475)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)"><circle cx="-26" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="300" y="522" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">8th waning day</text>

        <!-- Bottom-right: Waning crescent -->
        <g transform="translate(425 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeft)"><circle cx="-32" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="452" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">1st waning day</text>

        <!-- Earth -->
        <circle cx="300" cy="300" r="58" fill="url(#earthGrad)" stroke="#fdf5e8" stroke-width="2"/>
        <ellipse cx="283" cy="283" rx="19" ry="13" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="317" cy="320" rx="15" ry="11" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="322" cy="270" rx="10" ry="7" fill="#2d6a4f" opacity="0.55"/>
        <ellipse cx="285" cy="325" rx="12" ry="8" fill="#2d6a4f" opacity="0.55"/>
        <text x="300" y="305" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Georgia, serif">Earth</text>
      </svg>
    </div>

    <div class="moon-legend">
      <div class="legend-item">
        <div class="dot" style="background: #fdfbd3;"></div>
        <div><strong>Śukla Pakṣa (Waxing):</strong> from the day after the New-Moon Poya to the Full-Moon Poya — the period during which the moon waxes. It completes 15 days.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: #0d0d1a; border-color:#666;"></div>
        <div><strong>Kāḷa Pakṣa (Waning):</strong> from the day after the Full-Moon Poya to the New-Moon Poya — the period during which the moon wanes. It lasts 14 or 15 days.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: linear-gradient(90deg, #0d0d1a 50%, #fdfbd3 50%);"></div>
        <div><strong>Aṭṭhamī (Eighth day):</strong> the 8th day of the pakṣa, when half of the moon is illuminated.</div>
      </div>
    </div>
  </div>

  <h3>Days</h3>
  <p>
    Two pakṣas together form one complete revolution of the moon around the earth. The moon
    completes this revolution of about 360° in 30 or 29 days — that is, one month. Therefore,
    one day is about 1/30 of the moon's circuit around the earth. Hence, <strong>one lunar day
    equals 12° of longitude</strong>:
  </p>
  <div class="calc-box">
    <div class="formula">360° ÷ 30 = 12°</div>
  </div>

  <h3>Tithi — The Phases of the Moon</h3>
  <p>Because the moon reflects sunlight, the moon visible from the Earth appears in different portions and shapes according to its movement across the sky.</p>
  <div class="moon-wrapper"><div class="moon-svg-wrap" style="max-width:700px;overflow-x:auto;-webkit-overflow-scrolling:touch"><svg viewBox="0 0 700 600" style="min-width:560px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tithi and moon phases diagram">
<circle cx="350" cy="300" r="175" fill="none" stroke="#6b6b85" stroke-width="1" stroke-dasharray="4 5"/>
<polygon points="474.0,176.2 487.1,183.3 479.7,190.0" fill="#f2d478"/>
<polygon points="226.0,423.8 212.9,416.7 220.3,410.0" fill="#f2d478"/>
<circle cx="521.2" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 248.6 A 15 15 0 0 1 521.2 278.6 A 14.67 15 0 0 0 521.2 248.6 Z" fill="#fdfbd3"/>
<text x="544.2" y="267.6" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">1. Paṭhamaṃ</text>
<circle cx="509.9" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 213.8 A 15 15 0 0 1 509.9 243.8 A 13.70 15 0 0 0 509.9 213.8 Z" fill="#fdfbd3"/>
<text x="532.9" y="232.8" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">2. Dutiyaṃ</text>
<circle cx="491.6" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 182.1 A 15 15 0 0 1 491.6 212.1 A 12.14 15 0 0 0 491.6 182.1 Z" fill="#fdfbd3"/>
<text x="514.6" y="201.1" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">3. Tatiyaṃ</text>
<circle cx="467.1" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 154.9 A 15 15 0 0 1 467.1 184.9 A 10.04 15 0 0 0 467.1 154.9 Z" fill="#fdfbd3"/>
<text x="490.1" y="173.9" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">4. Catutthaṃ</text>
<circle cx="437.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 133.4 A 15 15 0 0 1 437.5 163.4 A 7.50 15 0 0 0 437.5 133.4 Z" fill="#fdfbd3"/>
<text x="460.5" y="152.4" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">5. Pañcamaṃ</text>
<circle cx="404.1" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 118.6 A 15 15 0 0 1 404.1 148.6 A 4.64 15 0 0 0 404.1 118.6 Z" fill="#fdfbd3"/>
<line x1="404.1" y1="118.6" x2="404.1" y2="111.6" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="107.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">6. Chaṭṭhamaṃ</text>
<circle cx="368.3" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 111.0 A 15 15 0 0 1 368.3 141.0 A 1.57 15 0 0 0 368.3 111.0 Z" fill="#fdfbd3"/>
<line x1="368.3" y1="111.0" x2="368.3" y2="82.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="78.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">7. Sattamaṃ</text>
<circle cx="331.7" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 111.0 A 15 15 0 0 1 331.7 141.0 A 1.57 15 0 0 1 331.7 111.0 Z" fill="#fdfbd3"/>
<line x1="331.7" y1="111.0" x2="331.7" y2="104.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="100.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">8. Aṭṭhamaṃ</text>
<circle cx="295.9" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 118.6 A 15 15 0 0 1 295.9 148.6 A 4.64 15 0 0 1 295.9 118.6 Z" fill="#fdfbd3"/>
<line x1="295.9" y1="118.6" x2="295.9" y2="89.6" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="85.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">9. Navamaṃ</text>
<circle cx="262.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 133.4 A 15 15 0 0 1 262.5 163.4 A 7.50 15 0 0 1 262.5 133.4 Z" fill="#fdfbd3"/>
<text x="239.5" y="152.4" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">10. Dasamaṃ</text>
<circle cx="232.9" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 154.9 A 15 15 0 0 1 232.9 184.9 A 10.04 15 0 0 1 232.9 154.9 Z" fill="#fdfbd3"/>
<text x="209.9" y="173.9" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">11. Ekādasamaṃ</text>
<circle cx="208.4" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 182.1 A 15 15 0 0 1 208.4 212.1 A 12.14 15 0 0 1 208.4 182.1 Z" fill="#fdfbd3"/>
<text x="185.4" y="201.1" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">12. Dvādasamaṃ</text>
<circle cx="190.1" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 213.8 A 15 15 0 0 1 190.1 243.8 A 13.70 15 0 0 1 190.1 213.8 Z" fill="#fdfbd3"/>
<text x="167.1" y="232.8" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">13. Terasamaṃ</text>
<circle cx="178.8" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 248.6 A 15 15 0 0 1 178.8 278.6 A 14.67 15 0 0 1 178.8 248.6 Z" fill="#fdfbd3"/>
<text x="155.8" y="267.6" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">14. Cuddasamaṃ</text>
<circle cx="175.0" cy="300.0" r="15" fill="#fdfbd3" stroke="#7a7a90" stroke-width="1"/>
<text x="152.0" y="304.0" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">15. Paṇṇarasamaṃ</text>
<circle cx="178.8" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 321.4 A 15 15 0 0 1 178.8 351.4 A 14.67 15 0 0 1 178.8 321.4 Z" fill="#fdfbd3" transform="translate(357.6 0) scale(-1 1)"/>
<text x="155.8" y="340.4" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">1. Paṭhamaṃ</text>
<circle cx="190.1" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 356.2 A 15 15 0 0 1 190.1 386.2 A 13.70 15 0 0 1 190.1 356.2 Z" fill="#fdfbd3" transform="translate(380.3 0) scale(-1 1)"/>
<text x="167.1" y="375.2" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">2. Dutiyaṃ</text>
<circle cx="208.4" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 387.9 A 15 15 0 0 1 208.4 417.9 A 12.14 15 0 0 1 208.4 387.9 Z" fill="#fdfbd3" transform="translate(416.8 0) scale(-1 1)"/>
<text x="185.4" y="406.9" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">3. Tatiyaṃ</text>
<circle cx="232.9" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 415.1 A 15 15 0 0 1 232.9 445.1 A 10.04 15 0 0 1 232.9 415.1 Z" fill="#fdfbd3" transform="translate(465.8 0) scale(-1 1)"/>
<text x="209.9" y="434.1" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">4. Catutthaṃ</text>
<circle cx="262.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 436.6 A 15 15 0 0 1 262.5 466.6 A 7.50 15 0 0 1 262.5 436.6 Z" fill="#fdfbd3" transform="translate(525.0 0) scale(-1 1)"/>
<text x="239.5" y="455.6" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">5. Pañcamaṃ</text>
<circle cx="295.9" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 451.4 A 15 15 0 0 1 295.9 481.4 A 4.64 15 0 0 1 295.9 451.4 Z" fill="#fdfbd3" transform="translate(591.8 0) scale(-1 1)"/>
<line x1="295.9" y1="481.4" x2="295.9" y2="487.4" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="502.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">6. Chaṭṭhamaṃ</text>
<circle cx="331.7" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 459.0 A 15 15 0 0 1 331.7 489.0 A 1.57 15 0 0 1 331.7 459.0 Z" fill="#fdfbd3" transform="translate(663.4 0) scale(-1 1)"/>
<line x1="331.7" y1="489.0" x2="331.7" y2="517.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="532.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">7. Sattamaṃ</text>
<circle cx="368.3" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 459.0 A 15 15 0 0 1 368.3 489.0 A 1.57 15 0 0 0 368.3 459.0 Z" fill="#fdfbd3" transform="translate(736.6 0) scale(-1 1)"/>
<line x1="368.3" y1="489.0" x2="368.3" y2="495.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="510.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">8. Aṭṭhamaṃ</text>
<circle cx="404.1" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 451.4 A 15 15 0 0 1 404.1 481.4 A 4.64 15 0 0 0 404.1 451.4 Z" fill="#fdfbd3" transform="translate(808.2 0) scale(-1 1)"/>
<line x1="404.1" y1="481.4" x2="404.1" y2="509.4" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="524.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">9. Navamaṃ</text>
<circle cx="437.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 436.6 A 15 15 0 0 1 437.5 466.6 A 7.50 15 0 0 0 437.5 436.6 Z" fill="#fdfbd3" transform="translate(875.0 0) scale(-1 1)"/>
<text x="460.5" y="455.6" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">10. Dasamaṃ</text>
<circle cx="467.1" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 415.1 A 15 15 0 0 1 467.1 445.1 A 10.04 15 0 0 0 467.1 415.1 Z" fill="#fdfbd3" transform="translate(934.2 0) scale(-1 1)"/>
<text x="490.1" y="434.1" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">11. Ekādasamaṃ</text>
<circle cx="491.6" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 387.9 A 15 15 0 0 1 491.6 417.9 A 12.14 15 0 0 0 491.6 387.9 Z" fill="#fdfbd3" transform="translate(983.2 0) scale(-1 1)"/>
<text x="514.6" y="406.9" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">12. Dvādasamaṃ</text>
<circle cx="509.9" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 356.2 A 15 15 0 0 1 509.9 386.2 A 13.70 15 0 0 0 509.9 356.2 Z" fill="#fdfbd3" transform="translate(1019.7 0) scale(-1 1)"/>
<text x="532.9" y="375.2" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">13. Terasamaṃ</text>
<circle cx="521.2" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 321.4 A 15 15 0 0 1 521.2 351.4 A 14.67 15 0 0 0 521.2 321.4 Z" fill="#fdfbd3" transform="translate(1042.4 0) scale(-1 1)"/>
<text x="544.2" y="340.4" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">14. Cuddasamaṃ</text>
<circle cx="525.0" cy="300.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/>
<text x="548.0" y="304.0" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">15. Paṇṇarasamaṃ</text>
<circle cx="350" cy="300" r="40" fill="#1e5faa" stroke="#fdf5e8" stroke-width="2"/>
<ellipse cx="338" cy="288" rx="13" ry="9" fill="#2d6a4f" opacity=".65"/><ellipse cx="362" cy="313" rx="10" ry="7" fill="#2d6a4f" opacity=".6"/>
<text x="350" y="304" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Earth</text>
<rect x="298" y="212" width="104" height="26" rx="7" fill="#15152a" stroke="#f2d478" stroke-width="1.2"/>
<text x="350" y="230" text-anchor="middle" fill="#f2d478" font-size="12.5" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Śukla Pakṣa</text>
<rect x="298" y="368" width="104" height="26" rx="7" fill="#15152a" stroke="#c8d0d8" stroke-width="1.2"/>
<text x="350" y="386" text-anchor="middle" fill="#c8d0d8" font-size="12.5" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Kāḷa Pakṣa</text>
</svg></div></div>
  <p style="text-align:center;font-size:.85em;opacity:.75;margin-top:-6px">↔ Swipe the diagram sideways if needed</p>
  <p>The diagram above shows that, day by day, the moonlight (or the shadow) increases by <strong>12°</strong> of longitude, and it shows the days of each pakṣa. These days are called <strong>'tithi'</strong>. They are numbered in order from <em class="pali">'Paṭhamaṃ'</em> (first) to <em class="pali">'Paṇṇarasamaṃ'</em> (fifteenth).</p>
</section>

<!-- ============================================================
     10. Month Systems
     ============================================================ -->
<section class="card" id="masa-krama">
  <h2>Months</h2>
  <p>
    As described above, two pakṣas together form one lunar month. Depending on the pakṣa, a month
    has either 29 or 30 days. This is calculated in two ways:
  </p>

  <div class="tithi-row">
    <div class="paksha-card kala">
      <h4>1. Amānta System</h4>
      <p>
        This system counts from the day after the New-Moon Poya to the next New-Moon Poya —
        hence it is called "<em class="pali">Amānta</em>" (ending on the New-Moon). The lunar month
        begins on the day after the New-Moon Poya and ends on the next New-Moon Poya.
      </p>
    </div>
    <div class="paksha-card sukka">
      <h4>2. Pūrṇimānta System</h4>
      <p>
        This system counts from the day after the Full-Moon Poya to the next Full-Moon Poya —
        hence it is called "<em class="pali">Pūrṇimānta</em>" (ending on the Full Moon).
        <strong>The Buddhist Era uses this Pūrṇimānta system.</strong>
      </p>
    </div>
  </div>
</section>

<!-- ============================================================
     11. Uposatha / Seasons
     ============================================================ -->
<section class="card" id="uposatha">
  <h2>Seasons and Uposatha (Poya) Days</h2>
  <p>The Pūrṇimānta system is used to calculate seasons and Uposatha days. Each season has <strong>8 Uposatha days</strong>.</p>

  <div class="note-box">
    <ul style="margin:0; padding-left:22px;">
      <li>Two of these — the <strong>3rd and 7th Uposatha</strong> — are <em class="pali">Cātuddasī</em> (14th-day).</li>
      <li>The other six Uposatha are <em class="pali">Paṇṇarasī</em> (15th-day / Full-Moon).</li>
      <li>A month with two <em class="pali">Paṇṇarasī</em> Uposatha has: <strong>15 + 15 = 30 days</strong></li>
      <li>A month with one <em class="pali">Cātuddasī</em> Uposatha has: <strong>14 + 15 = 29 days</strong></li>
    </ul>
  </div>

  <h3>Example: Vassāna Season of 2016 CE</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Season</th><th>Month</th><th>Date</th><th>Pakṣa</th><th>Uposatha</th><th>Pūrṇimānta Month</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">Vassāna</td><td>July</td><td>18</td><td>Śukla</td><td>0 Paṇṇarasī</td><td rowspan="2">Sāvaṇa, 30 days</td></tr>
        <tr><td>Aug.</td><td>02</td><td>Kāḷa</td><td>1st Paṇṇarasī</td></tr>
        <tr><td>Aug.</td><td>17</td><td>Śukla</td><td>2nd Paṇṇarasī</td><td rowspan="2">Poṭṭhapāda, 29 days</td></tr>
        <tr><td>Aug.</td><td>31</td><td>Kāḷa</td><td><strong>3rd Cātuddasī</strong></td></tr>
        <tr><td>Sept.</td><td>15</td><td>Śukla</td><td>4th Paṇṇarasī</td><td rowspan="2">Assayuja, 30 days</td></tr>
        <tr><td>Sept.</td><td>30</td><td>Kāḷa</td><td>5th Paṇṇarasī</td></tr>
        <tr><td>Oct.</td><td>15</td><td>Śukla</td><td>6th Paṇṇarasī</td><td rowspan="2">Kattika, 29 days</td></tr>
        <tr><td>Oct.</td><td>29</td><td>Kāḷa</td><td><strong>7th Cātuddasī</strong></td></tr>
        <tr><td>Nov.</td><td>13</td><td>Śukla</td><td>8th Paṇṇarasī</td><td>—</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight-box">
    The Vassāna season has 4 Pūrṇimānta months and 8 Uposatha days.
  </div>
</section>

<!-- ============================================================
     12. Adhimāsa
     ============================================================ -->
<section class="card" id="adhimasa">
  <h2>Adhimāsa (Intercalary Month) and Adhivarṣa (Leap Year)</h2>
  <p>
    The solar year is slightly longer than the Buddhist year. Therefore, to align with the solar year,
    one extra month is added at the end of the <em class="pali">Gimhāna</em> season once every three
    Buddhist years. This added month is called the <strong><em class="pali">Adhimāsa</em></strong>
    (Intercalary Month). In such a year, instead of the usual 8 Uposatha days there are 10, and the
    <em class="pali">Vassāna</em> season begins a month later. That year has
    <strong>13 months instead of 12</strong>, and it is called an <strong><em class="pali">Adhivarṣa</em></strong>
    (Leap Year). An <em class="pali">Adhivarṣa</em> occurred in 2015 CE. The next occurred three years
    later, in 2018 CE.
  </p>

  <h3>How an Adhimāsa Occurs</h3>
  <div class="calc-box">
    <p>A Buddhist year has about 354 days, calculated according to Uposatha and seasons. As stated above, in one Buddhist year there are 3 seasons, 8 Uposatha per season, 18 <em class="pali">Paṇṇarasī</em> Uposatha, and 6 <em class="pali">Cātuddasī</em> Uposatha — giving 3 × 8 = 24 Uposatha.</p>
    <p>Calculated as follows:</p>
    <ul style="list-style:none; padding-left:0;">
      <li>🌕 18 <em class="pali">Paṇṇarasī</em> Uposatha × 15 days = <strong>270 days</strong></li>
      <li>🌑 6 <em class="pali">Cātuddasī</em> Uposatha × 14 days = <strong>84 days</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:8px; padding-top:8px;">📊 <strong>Total = 354 days</strong></li>
    </ul>
    <p style="margin-top:14px;">However, one solar year has about <strong>365¼ days</strong>. The difference between the solar and lunar (Buddhist) years is:</p>
    <div class="formula">Solar year − Lunar year = 365¼ − 354 = 11¼ days</div>
    <p>Over 3 years, this becomes <strong>33¾ days</strong> — approximately one month. Therefore, to align with the solar year, one intercalary month is added once every three lunar years.</p>
    <p>Since no single lunar month can exceed 30 days, 3¾ days remain at the end of each 3-year cycle. When these 3¾ days accumulate, an <em class="pali">Adhimāsa</em> occurs in the 19th lunar year.</p>
    <p style="margin-top:12px;">The average length of a year is <strong>365.24199 days</strong>. Twelve lunar months take <strong>354.36706 days</strong>. The difference is <strong>10.87493 days</strong>.</p>
  </div>
<h3>How to Identify a Year with an Adhimāsa</h3>
  <p>
    In composing calendars using the lunar-month system, <em class="pali">Adhimāsa</em> months
    must be inserted to compensate for this difference. On examining the almanacs, <em class="pali">Adhimāsa</em>
    is found applied to the 32nd and 33rd lunar months. This phenomenon can be explained as follows.
  </p>

  <div class="calc-box">
    <div class="formula">Buddha Varṣa ÷ 19 → remainder = 2, 4, 7, 10, 13, 15, 18</div>
    <p style="text-align:center;">If the remainder is one of these numbers, that year contains an <em class="pali">Adhimāsa</em>.</p>
  </div>

  <p>
    When the <em class="pali">Adhimāsa</em> falls within the 32nd or 33rd lunar month, it may
    occur in any of the three seasons. However, the <em class="pali">Ṭīkā</em> (commentary) states
    that it should be assigned to the <em class="pali">Hemanta</em> season. Accordingly, the
    <em class="pali">Adhimāsa</em> is placed within the <em class="pali">Hemanta</em> season.
    Although the year of the <em class="pali">Adhimāsa</em> can be calculated in this manner, the
    final decision rests with the <strong>Government Poya Committee</strong>. In 2018 CE an
    <em class="pali">Adhimāsa</em> was applied; strictly it should have fallen in Buddha Varṣa 2561,
    but it was assigned to Buddha Varṣa 2562.
  </p>
</section>

<!-- ============================================================
     13. Metonic Cycle
     ============================================================ -->
<section class="card" id="meton">
  <h2>The Metonic Cycle</h2>
  <p>
    The astronomer <strong>Meton (432 BCE)</strong> discovered that a period of 19 years equals
    235 lunar months. (<em>World Encyclopedia</em>)
  </p>

  <h3>Basic Calculation</h3>
  <div class="calc-box">
    <p>Time taken for 19 years = 365.24199 × 19 = <strong>6939.59781 days</strong></p>
    <p>Time taken for 235 lunar months = 354.36706 ÷ 12 × 235 = <strong>6939.688258 days</strong></p>
    <p>That is, within 19 years, 235 lunar months are completed.</p>
    <div class="formula">19 years = 235 lunar months</div>
    <p>Normal months in 19 years = 12 × 19 = <strong>228</strong></p>
    <p>Lunar months in 19 years = <strong>235</strong></p>
    <p>Difference = 235 − 228 = <strong>7 Adhimāsa months</strong></p>
  </div>

  <h3>The Residual Excess of the Metonic Cycle</h3>
  <p>
    As the calculation above shows, although it is said that <strong>"19 years = 235 lunar 
    months"</strong>, in reality there is a very subtle difference between the two. The time 
    taken for 235 lunar months to complete is slightly longer than the time taken for 19 
    solar years. This excess can be calculated as follows:
  </p>

  <div class="calc-box">
    <p>Time taken for 235 lunar months = <strong>6939.688258 days</strong></p>
    <p>Time taken for 19 solar years = <strong>6939.59781 days</strong></p>
    <div class="formula">Excess = 6939.688258 − 6939.59781 = <strong>0.090448 days</strong></div>
    <p>Converting this to hours and minutes:</p>
    <div class="formula">0.090448 days × 24 = <strong>2 hours 10 minutes (≈ 2.17 hours)</strong></div>
    <p style="margin-top:14px;">
      That is, <strong>at the end of every Metonic cycle (19 years), the lunar reckoning 
      runs ahead of the solar reckoning by about 2 hours 10 minutes</strong>. Although this 
      is a small value, over hundreds of years it becomes a matter of days.
    </p>
  </div>

  <h3>Comparison with Modern Scientific Values</h3>
  <p>
    According to modern astronomy, the accurate values are as follows:
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Unit</th>
          <th>Accurate Value (days)</th>
          <th class="left">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tropical Year</td>
          <td>365.24219</td>
          <td class="left">Modern value (2024)</td>
        </tr>
        <tr>
          <td>Synodic Month</td>
          <td>29.530588</td>
          <td class="left">New Moon to New Moon</td>
        </tr>
        <tr>
          <td>19 Solar Years</td>
          <td>6939.60161</td>
          <td class="left">365.24219 × 19</td>
        </tr>
        <tr>
          <td>235 Lunar Months</td>
          <td>6939.68818</td>
          <td class="left">29.530588 × 235</td>
        </tr>
        <tr>
          <td><strong>Excess</strong></td>
          <td><strong>0.08657</strong></td>
          <td class="left"><strong>≈ 2 hours 5 minutes</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="info-box">
    <strong>Comparison:</strong> According to the values used in this book, the excess is 
    0.090448 days (2 hours 10 minutes), while according to modern scientific values it is 
    0.08657 days (2 hours 5 minutes). Both show essentially the same value.
  </div>

  <h3>Time Required to Add One Day</h3>
  <p>
    Since we get an excess of about 2 hours per Metonic cycle, we can calculate how long 
    it takes for this to accumulate into one full day:
  </p>

  <div class="calc-box">
    <p>Excess per Metonic cycle = <strong>0.08657 days</strong></p>
    <p>Number of Metonic cycles needed to complete one day:</p>
    <div class="formula">1 ÷ 0.08657 ≈ 11.55 Metonic cycles</div>
    <p>In years:</p>
    <div class="formula">11.55 × 19 ≈ <strong>219.5 years</strong></div>
    <p style="margin-top:14px;">
      That is, <strong>roughly once every 219 years, one day must be added</strong> 
      (or subtracted from the reckoning). If this is not done, over hundreds of years the 
      lunar date will drift one or more days away from the solar date.
    </p>
  </div>

  <h3>How This Excess Is Handled in Practice</h3>
  <div class="note-box">
    <p>
      In calculating the Buddhist Era and preparing calendars, this subtle excess is 
      handled in the following ways:
    </p>
    <ul style="margin:10px 0; padding-left:22px;">
      <li>
        <strong>Insertion of Adhimāsa (main method):</strong> Adding one intercalary 
        month every 3 years, or 7 times within a 19-year period, primarily corrects 
        this difference.
      </li>
      <li>
        <strong>Addition or removal of a day (long-term correction):</strong> Over the 
        long term (after 200+ years), the small residual excess that accumulates 
        occasionally requires a day to be added or removed.
      </li>
      <li>
        <strong>Decision of the Government Poya Committee:</strong> The final decision 
        on these subtle calculations is made by the Government Poya Committee of Sri Lanka.
      </li>
    </ul>
  </div>

  <h3>How These 7 Adhimāsa Months Distribute</h3>
  <div class="calc-box">
    <p style="text-align:center; font-family:'Courier New', monospace;">228 ÷ 7 = 32 <sup>4</sup>⁄<sub>7</sub></p>
    <p>Accordingly, an <em class="pali">Adhimāsa</em> should be applied once every 32 or 33 lunar months. Examination of the <em class="pali">Adhimāsa</em> tables shows that over 19 years, there are 3 occurrences at 32-month intervals and 4 occurrences at 33-month intervals:</p>
    <ul style="list-style:none; padding-left:0; text-align:center;">
      <li>33 × 4 = <strong>132</strong></li>
      <li>32 × 3 = <strong>96</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:6px; padding-top:6px;">Total = <strong>228</strong></li>
    </ul>
  </div>

  <h3>Historical Evidence</h3>
  <div class="note-box">
    <p>
      On <strong>18 June 1951</strong>, on the Poson Full-Moon Poya day, the
      <strong>Śrī Kalyāṇī Yogāśrama Society</strong> was founded. Nineteen years later
      (1951 + 19 = 1970), on 18 June 1970, Poson Poya fell again. Again (1970 + 19 = 1989),
      in 1989 on 18 June, Poson Poya fell. And again (1989 + 19 = 2008), in 2008 on 18 June,
      Poson Poya fell.
    </p>
  </div>

  <div class="info-box">
    <p>
      <strong>Note:</strong> This historical evidence excellently demonstrates the accuracy 
      of the Metonic cycle. The fact that Poson Poya fell on the same date (18 June) for 
      57 years (from 1951 to 2008) shows the stability of this cycle. However, as calculated 
      above, after another 160 years or so (i.e., around year 2368), this date may shift by 
      one day forward or backward. At that time the appropriate corrections must be made.
    </p>
  </div>
</section>
<!-- ============================================================
     14. Determination
     ============================================================ -->
<section class="card" id="nishchaya">
  <h2>Method for Determining the Buddha Varṣa</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>From the Common Era to Buddha Varṣa</h4>
      <p>The easy method is to <strong>add 544 to the Common Era year</strong>:</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2015 + 544 = 2559</div>
      </div>
      <p>The Buddha Varṣa for 2015 CE is 2559.</p>
      <p><strong>Important:</strong> The Common Era year begins on January 1, but the Buddhist Era begins on the day after the Vesākha Full-Moon Poya. Therefore, if the date you are seeking falls <em>before</em> the Vesākha Full-Moon Poya of that year, you must subtract one (i.e., one Buddha Varṣa). If the date falls <em>after</em>, no subtraction is needed. 2015 + 544 = 2559, minus one year = 2558.</p>
    </div>

    <div class="paksha-card kala">
      <h4>Determining the Year-Name</h4>
      <p>The easy method is to <strong>divide the year number by 12 and examine the remainder</strong>:</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2559 ÷ 12 = 213, remainder 3</div>
      </div>
      <p>The remainder 3 indicates the year-name — namely, <strong><em class="pali">Kapi</em></strong>.</p>
      <p>For 2560: 2560 ÷ 12 = 213, remainder 4. Remainder 4 indicates the year-name <strong><em class="pali">Kukkuṭa</em></strong>.</p>
    </div>
  </div>

  <h3>Year-Name by Remainder</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Remainder</th><th>Year</th><th>Remainder</th><th>Year</th></tr></thead>
      <tbody>
        <tr><td>0</td><td><em class="pali">Sappo</em></td><td>6</td><td><em class="pali">Sūkaro</em></td></tr>
        <tr><td>1</td><td><em class="pali">Asso</em></td><td>7</td><td><em class="pali">Mūsiko</em></td></tr>
        <tr><td>2</td><td><em class="pali">Ajo</em></td><td>8</td><td><em class="pali">Vasabho</em></td></tr>
        <tr><td>3</td><td><strong><em class="pali">Kapi</em> (2559)</strong></td><td>9</td><td><em class="pali">Vyaggho</em></td></tr>
        <tr><td>4</td><td><em class="pali">Kukkuṭo</em></td><td>10</td><td><em class="pali">Saso</em></td></tr>
        <tr><td>5</td><td><em class="pali">Soṇo</em></td><td>11</td><td><em class="pali">Nāgo</em></td></tr>
      </tbody>
    </table>
  </div>
</section>
<section class="card" id="pali">
  <h2>Proclaiming the Buddha Varṣa (in Pāli)</h2>
  <p>In scholastic texts, it is traditional to proclaim the Buddhist Era in Pāli:</p>



  <h3>Example for a Specific Date</h3>
  <p>For <strong>11 December 2018 CE</strong>, the Buddha Varṣa was proclaimed thus:</p>


  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>Elapsed Time (Atikkanta)</h4>
      <p style="text-align:center; font-size:1.15em;">
        Years <strong>2561</strong>, Months <strong>7</strong>, Days <strong>18</strong>
      </p>
    </div>
    <div class="paksha-card kala">
      <h4>Remaining Time (Avasiṭṭha)</h4>
      <p style="text-align:center; font-size:1.15em;">
        Years <strong>2438</strong>, Months <strong>5</strong>, Days <strong>11</strong>
      </p>
    </div>
  </div>
  
  <h3>The Complete Proclamation (for 11 December 2018 CE)</h3>
  <p>The Parinibbāna, the lifespan of the Dispensation, the elapsed time, the remaining time and the date in question are stated together as one proclamation:</p>
  <div class="gn-pali-box">
   Amhākaṃ kho pana bhagavā Dīpaṅkara-pāda-mūlato paṭṭhāya paṭhamaṃ dānapāramī,
    dutiyaṃ sīlapāramī, tatiyaṃ nekkhammapāramī, catutthaṃ paññāpāramī,
    pañcamaṃ viriyapāramī, chaṭṭhamaṃ khantipāramī, sattamaṃ saccapāramī,
    aṭṭhamaṃ adhiṭṭhānapāramī, navamaṃ mettāpāramī, dasamaṃ upekkhāpāramīti
    dasa pāramiyo dasa upapāramiyo dasa paramatthapāramiyoti samattiṃsa pāramiyo
    pūretvā Vessantara-bhavē nibbattitvā pañca mahā-pariccāge katvā Tusitapure
    nibbattitvā catūhi mahā-deva-rājūhi katādhivāsanaṃ paṭicca pañca mahā-vilokane
    viloketvā Suddhodana-mahārājānaṃ nissāya Mahāmāyā-devīyā kucchismiṃ paṭisandhiṃ
    gaṇhitvā dasa-māsaccayena mātu-kucchito nikkhamitvā ekūnatiṃsatime saṃvacchare
    mahābhinikkhamanaṃ nikkhamitvā chabbassāni mahāpadhānaṃ padahitvā pañcatiṃsatime
    saṃvacchare Vesākha-puṇṇamiyaṃ sammāsambodhiṃ abhisambujjhitvā
    pañca-cattālīsa-saṃvaccharāni vasitvā sappasaṃvacchare Vesākha-puṇṇamiyaṃ
    Bhummavāre parinibbāyi.
     Tassa kho pana Bhagavato Arahato Sammāsambuddhassa sāsanaṃ pañca vassasahassāni pavattissati.<br>
    Idāni kho pana dvesahassa-pañcasata-ekasaṭṭhi saṃvaccharāni ceva satta māsāni ca aṭṭhārasa divasāni atikkantāni.<br>
    Dvesahassa-catusata-aṭṭhatiṃsati saṃvaccharāni ceva pañca māsāni ca ekādasa divasāni avasiṭṭhāni.<br>
    Ayaṃ Sūkara saṃvacchare Hemanta-utu, asmiṃ utumhi Māgasira-māsassa sukka-pakkhe catutthaṃ Bhummavāram-idanti daṭṭhabbaṃ.
  </div>
  <h4>Meaning</h4>
  <div class="info-box">
    <p>… in the year, on the Vesākha full-moon day, a Tuesday (<em class="pali">Bhummavāra</em>), he attained Parinibbāna. The Dispensation of that Blessed One, the Arahant, the Fully Enlightened Buddha, will endure for five thousand years.</p>
    <p>Now 2,561 years, 7 months and 18 days have elapsed.</p>
    <p>2,438 years, 5 months and 11 days remain.</p>
    <p>This is the Sūkara (Pig) year, the Hemanta season; in this season, in the month of Māgasira, in the Sukka (waxing) pakṣa, the fourth day, a Tuesday — thus it should be understood.</p>
  </div>
</section>
 <div class="note-box">
    <strong>Note:</strong> This date was the 117th birth anniversary of the Most Venerable Mātaṛa Śrī Jñānārāma Mahāthera.
  </div>
</main>
<footer>
  <div class="lamp">🪔 🪔 🪔</div>
  <p class="bless">
    May this meritorious deed be a cause for all who contributed to compiling this
    scholastic information and for all who read and reflect upon it to attain the
    supreme bliss of Nibbāna!
  </p>
  <p class="thanks">May the Triple Gem bless you! 🙏</p>
  <div class="copy">
    Handbook for Calculating the Buddha Varṣa &nbsp;|&nbsp;© Paññāpāramī Nā Uyana
  </div>
</footer>`,
    en: `<header class="hero">
  <svg class="hero-orbit" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="heroSpaceGradEn" cx="55%" cy="50%" r="85%">
        <stop offset="0%" stop-color="#1a0f30"/>
        <stop offset="55%" stop-color="#0a0518"/>
        <stop offset="100%" stop-color="#030108"/>
      </radialGradient>
      <radialGradient id="heroSunGradEn" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffef0"/>
        <stop offset="35%" stop-color="#ffe98a"/>
        <stop offset="75%" stop-color="#f5b342"/>
        <stop offset="100%" stop-color="#e88a1a"/>
      </radialGradient>
      <radialGradient id="heroSunGlowEn" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd966" stop-opacity="0.55"/>
        <stop offset="55%" stop-color="#ffb84d" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#ffb84d" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="heroEarthGradEn" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#79b8f0"/>
        <stop offset="55%" stop-color="#2e6db4"/>
        <stop offset="100%" stop-color="#0d3a6b"/>
      </radialGradient>
      <radialGradient id="heroMoonGradEn" cx="38%" cy="32%" r="72%">
        <stop offset="0%" stop-color="#fffde8"/>
        <stop offset="70%" stop-color="#e8dca8"/>
        <stop offset="100%" stop-color="#b0a070"/>
      </radialGradient>
      <clipPath id="heroEarthClipEn"><circle cx="380" cy="210" r="42"/></clipPath>
      <path id="heroMoonOrbitEn" d="M 560,210 A 180,120 0 1,1 200,210 A 180,120 0 1,1 560,210" fill="none"/>
    </defs>

    <rect width="900" height="420" fill="url(#heroSpaceGradEn)"/>

    <g fill="#ffffff">
      <circle cx="48" cy="42" r="1.4" opacity="0.9"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.8s" repeatCount="indefinite"/></circle>
      <circle cx="130" cy="88" r="1" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.4s" repeatCount="indefinite"/></circle>
      <circle cx="210" cy="35" r="1.6" opacity="0.85"><animate attributeName="opacity" values="0.85;0.35;0.85" dur="4.1s" repeatCount="indefinite"/></circle>
      <circle cx="90" cy="180" r="1.1" opacity="0.75"/>
      <circle cx="42" cy="270" r="1.4" opacity="0.85"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="3.7s" repeatCount="indefinite"/></circle>
      <circle cx="160" cy="330" r="1.2" opacity="0.7"/>
      <circle cx="270" cy="380" r="1.4" opacity="0.8"><animate attributeName="opacity" values="0.8;0.25;0.8" dur="3.1s" repeatCount="indefinite"/></circle>
      <circle cx="95" cy="395" r="1" opacity="0.7"/>
      <circle cx="330" cy="55" r="1.2" opacity="0.8"/>
      <circle cx="370" cy="370" r="1.1" opacity="0.75"/>
      <circle cx="460" cy="45" r="1.5" opacity="0.85"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="2.9s" repeatCount="indefinite"/></circle>
      <circle cx="520" cy="90" r="1" opacity="0.7"/>
      <circle cx="600" cy="50" r="1.3" opacity="0.8"/>
      <circle cx="660" cy="120" r="1.1" opacity="0.75"><animate attributeName="opacity" values="0.75;0.25;0.75" dur="3.6s" repeatCount="indefinite"/></circle>
      <circle cx="710" cy="65" r="1.4" opacity="0.85"/>
      <circle cx="590" cy="370" r="1.2" opacity="0.75"/>
      <circle cx="680" cy="390" r="1" opacity="0.7"/>
      <circle cx="760" cy="360" r="1.3" opacity="0.8"/>
      <circle cx="820" cy="50" r="1.1" opacity="0.75"/>
      <circle cx="500" cy="395" r="1.2" opacity="0.75"/>
      <circle cx="180" cy="120" r="1" opacity="0.6"/>
      <circle cx="760" cy="180" r="1.1" opacity="0.65"><animate attributeName="opacity" values="0.65;0.2;0.65" dur="4.3s" repeatCount="indefinite"/></circle>
      <circle cx="350" cy="20" r="1" opacity="0.7"/>
      <circle cx="440" cy="410" r="1.1" opacity="0.7"/>
      <circle cx="280" cy="150" r="1" opacity="0.65"/>
      <circle cx="150" cy="240" r="1.2" opacity="0.7"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.9s" repeatCount="indefinite"/></circle>
    </g>

    <circle cx="845" cy="210" r="150" fill="url(#heroSunGlowEn)"/>
    <circle cx="845" cy="210" r="52" fill="url(#heroSunGradEn)"/>

    <use href="#heroMoonOrbitEn" stroke="#c9a227" stroke-width="1.2" stroke-dasharray="7 9" opacity="0.5"/>

    <g>
      <circle cx="380" cy="210" r="42" fill="url(#heroEarthGradEn)"/>
      <g clip-path="url(#heroEarthClipEn)">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 380 210" to="360 380 210" dur="26s" repeatCount="indefinite"/>
          <ellipse cx="362" cy="196" rx="16" ry="11" fill="#3d8b5f" opacity="0.85"/>
          <ellipse cx="395" cy="232" rx="13" ry="8" fill="#3d8b5f" opacity="0.85"/>
          <ellipse cx="404" cy="188" rx="9" ry="6" fill="#3d8b5f" opacity="0.75"/>
          <ellipse cx="366" cy="234" rx="11" ry="7" fill="#3d8b5f" opacity="0.75"/>
          <ellipse cx="343" cy="216" rx="7" ry="9" fill="#3d8b5f" opacity="0.7"/>
          <ellipse cx="419" cy="214" rx="8" ry="10" fill="#3d8b5f" opacity="0.7"/>
        </g>
      </g>
      <path d="M 380,168 A 42,42 0 0,0 380,252 Z" fill="rgba(2,4,18,0.66)"/>
      <circle cx="380" cy="210" r="42" fill="none" stroke="rgba(140,200,255,0.45)" stroke-width="1.3"/>
    </g>

    <g>
      <animateMotion dur="18s" repeatCount="indefinite" rotate="0">
        <mpath href="#heroMoonOrbitEn"/>
      </animateMotion>
      <circle r="18" fill="url(#heroMoonGradEn)"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="80s" repeatCount="indefinite"/>
        <circle cx="-5" cy="-4" r="2.8" fill="#a89a70" opacity="0.55"/>
        <circle cx="4" cy="6" r="2.1" fill="#a89a70" opacity="0.5"/>
        <circle cx="7" cy="-5" r="1.6" fill="#a89a70" opacity="0.5"/>
        <circle cx="-3" cy="7" r="2.3" fill="#a89a70" opacity="0.45"/>
      </g>
      <path d="M 0,-18 A 18,18 0 0,0 0,18 Z" fill="rgba(2,4,18,0.75)"/>
      <circle r="18" fill="none" stroke="rgba(255,250,220,0.35)" stroke-width="1"/>
    </g>
  </svg>
  <p class="subtitle">A scholastic handbook on time-reckoning in the Dispensation of the Supreme Buddha</p>
</header>
<div class="topbar"><div class="topbar-inner"><nav class="toc" aria-label="Contents">
      <a href="#intro">Introduction</a>
      <a href="#varsha">The Twelve Years</a>
      <a href="#masa">Months &amp; Seasons</a>
      <a href="#paksha">Paksha &amp; Days</a>
      <a href="#sankhya">Numbers</a>
      <a href="#gananaya">Calculation</a>
      <a href="#atikranta">Elapsed Time</a>
      <a href="#vagu">Tables 1–4</a>
      <a href="#chandra">Moon Phases</a>
      <a href="#masa-krama">Month Systems</a>
      <a href="#uposatha">Uposatha</a>
      <a href="#adhimasa">Adhimāsa</a>
      <a href="#meton">Metonic Cycle</a>
      <a href="#nishchaya">Determination</a>
      <a href="#pali">Pali Formula</a>
    </nav></div></div>
<main>

<!-- ============================================================
     1. Introduction
     ============================================================ -->
<section class="card" id="intro">
  <h2>How the Buddha Varṣa is Calculated</h2>
  <p>
    The Buddhist Era (<em class="pali">Buddha Varṣa</em>) begins after the <em class="pali">Parinibbāna</em> (final passing away) of the Buddha.
    The Buddha's <em class="pali">Parinibbāna</em> occurred on the
    <strong>Vesākha full-moon (<em class="pali">Puṇṇamī</em>) Poya day</strong>,
    and the lifespan of the Buddha's Dispensation (<em class="pali">sāsana</em>) is said to last
    <strong>5,000 years</strong>. This period is called the <em class="pali">Buddha Varṣa</em>.
  </p>
  <div class="info-box">
    Since the Buddhist Era is calculated according to the <strong>movement of the moon</strong>,
    the following fundamental data must be understood in order to calculate how many years, months,
    and days have elapsed since the <em class="pali">Parinibbāna</em>, how much remains, and what
    the current year, season (<em class="pali">utu</em>), fortnight (<em class="pali">pakṣa</em>),
    month (<em class="pali">māsa</em>), and day (<em class="pali">vāra</em>) are.
  </div>
</section>

<!-- ============================================================
     2. The Twelve Years
     ============================================================ -->
<section class="card" id="varsha">
  <h2>The Twelve Years (<em class="pali">Dvādaśa Varṣāṇi</em>)</h2>
  <div class="verse">
    Mūsiko, Vasabho, Vyaggha,<br>
    Sasa, Nāgāni, mevaca;<br>
    Sappassa-ja, Kapī, ceva,<br>
    Kukkuṭo, Soṇa, Sūkaro.
  </div>
  <p>The Buddhist Era has twelve year-names (<em class="pali">saṃvacchara</em>) that cycle continuously:</p>

  <div class="year-grid">
    <div class="year-card"><div class="num">01</div><div class="name">Mūsiko</div><div class="meaning">Mouse / Rat</div></div>
    <div class="year-card"><div class="num">02</div><div class="name">Vasabho</div><div class="meaning">Bull / Ox</div></div>
    <div class="year-card"><div class="num">03</div><div class="name">Vyaggho</div><div class="meaning">Tiger</div></div>
    <div class="year-card"><div class="num">04</div><div class="name">Saso</div><div class="meaning">Hare / Rabbit</div></div>
    <div class="year-card"><div class="num">05</div><div class="name">Nāgo</div><div class="meaning">Nāga (Serpent)</div></div>
    <div class="year-card"><div class="num">06</div><div class="name">Sappo</div><div class="meaning">Snake</div></div>
    <div class="year-card"><div class="num">07</div><div class="name">Ajo</div><div class="meaning">Goat</div></div>
    <div class="year-card"><div class="num">08</div><div class="name">Kapi</div><div class="meaning">Monkey</div></div>
    <div class="year-card"><div class="num">09</div><div class="name">Kukkuṭo</div><div class="meaning">Rooster</div></div>
    <div class="year-card"><div class="num">10</div><div class="name">Soṇo</div><div class="meaning">Dog</div></div>
    <div class="year-card"><div class="num">11</div><div class="name">Sūkaro</div><div class="meaning">Pig / Boar</div></div>
    <div class="year-card"><div class="num">12</div><div class="name">Asso</div><div class="meaning">Horse</div></div>
  </div>
</section>
<section class="card" id="masa">
  <h2>The Twelve Months and Three Seasons</h2>
  <p>
    The first month of the Buddhist Era is <strong><em class="pali">Jeṭṭha</em> (Poson)</strong>.
    It begins on the day following the Vesākha full-moon Poya. The twelve months are divided
    into three seasons (<em class="pali">utu</em>):
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Month (Pāli)</th>
          <th>Month (Sinhala)</th>
          <th>Gregorian</th>
          <th>Season</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><em class="pali">Jeṭṭha</em></td><td>Poson</td><td>May – June</td><td class="season-hot" rowspan="2">Gimhāna (Hot)</td></tr>
        <tr><td>2</td><td><em class="pali">Āsāḷha</em></td><td>Esala</td><td>June – July</td></tr>
        <tr><td>3</td><td><em class="pali">Sāvaṇa</em></td><td>Nikini</td><td>July – August</td><td class="season-rain" rowspan="4">Vassāna (Rainy)</td></tr>
        <tr><td>4</td><td><em class="pali">Poṭṭhapāda</em></td><td>Binara</td><td>August – Sept.</td></tr>
        <tr><td>5</td><td><em class="pali">Assayuja</em></td><td>Vap</td><td>Sept. – Oct.</td></tr>
        <tr><td>6</td><td><em class="pali">Kattika</em></td><td>Il</td><td>Oct. – Nov.</td></tr>
        <tr><td>7</td><td><em class="pali">Māgasira</em></td><td>Unduvap</td><td>Nov. – Dec.</td><td class="season-cold" rowspan="4">Hemanta (Cold)</td></tr>
        <tr><td>8</td><td><em class="pali">Phussa</em></td><td>Duruthu</td><td>Dec. – Jan.</td></tr>
        <tr><td>9</td><td><em class="pali">Māgha</em></td><td>Navam</td><td>Jan. – Feb.</td></tr>
        <tr><td>10</td><td><em class="pali">Phagguṇa</em></td><td>Medin</td><td>Feb. – March</td></tr>
        <tr><td>11</td><td><em class="pali">Citta</em></td><td>Bak</td><td>March – April</td><td class="season-hot" rowspan="2">Gimhāna (Hot)</td></tr>
        <tr><td>12</td><td><em class="pali">Vesākha</em></td><td>Vesak</td><td>April – May</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     4. Paksha & Days
     ============================================================ -->
<section class="card" id="paksha">
  <h2>The Two Pakṣas, Two Uposatha Days, and the Seven Days</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>The Two Pakṣas</h4>
      <table>
        <tr><td>1. <em class="pali">Sukkapakkho</em></td><td>Bright Fortnight (Waxing Moon)</td></tr>
        <tr><td>2. <em class="pali">Kāḷapakkho</em> (<em class="pali">Kaṇhapakkho</em>)</td><td>Dark Fortnight (Waning Moon)</td></tr>
      </table>
    </div>
    <div class="paksha-card kala">
      <h4>The Two Uposatha Days</h4>
      <table>
        <tr><td>1. <em class="pali">Paṇṇarasī</em></td><td>Full-Moon (15th-day) Poya</td></tr>
        <tr><td>2. <em class="pali">Cātuddasī</em></td><td>14th-day Poya</td></tr>
      </table>
    </div>
  </div>

  <h3>The Seven Days</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>No.</th><th>Pāli Name</th><th>English</th><th>Day</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><em class="pali">Ravivāro</em></td><td>Sun's day</td><td>Sunday</td></tr>
        <tr><td>2</td><td><em class="pali">Candavāro</em></td><td>Moon's day</td><td>Monday</td></tr>
        <tr><td>3</td><td><em class="pali">Bhummavāro</em></td><td>Mars' day</td><td>Tuesday</td></tr>
        <tr><td>4</td><td><em class="pali">Budhavāro</em></td><td>Mercury's day</td><td>Wednesday</td></tr>
        <tr><td>5</td><td><em class="pali">Guruvāro</em></td><td>Jupiter's day</td><td>Thursday</td></tr>
        <tr><td>6</td><td><em class="pali">Sukkavāro</em></td><td>Venus' day</td><td>Friday</td></tr>
        <tr><td>7</td><td><em class="pali">Soravāro</em></td><td>Saturn's day</td><td>Saturday</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     5. Numbers
     ============================================================ -->
<section class="card" id="sankhya">
  <h2>Numbers and Ordinals</h2>
  <p>Basic Pāli numerals used in the reckoning:</p>

  <div class="num-grid">
    <div class="num-cell"><span class="n">1</span><span class="p">Eka</span></div>
    <div class="num-cell"><span class="n">2</span><span class="p">Dvi</span></div>
    <div class="num-cell"><span class="n">3</span><span class="p">Ti</span></div>
    <div class="num-cell"><span class="n">4</span><span class="p">Catu</span></div>
    <div class="num-cell"><span class="n">5</span><span class="p">Pañca</span></div>
    <div class="num-cell"><span class="n">6</span><span class="p">Cha</span></div>
    <div class="num-cell"><span class="n">7</span><span class="p">Satta</span></div>
    <div class="num-cell"><span class="n">8</span><span class="p">Aṭṭha</span></div>
    <div class="num-cell"><span class="n">9</span><span class="p">Nava</span></div>
    <div class="num-cell"><span class="n">10</span><span class="p">Dasa</span></div>
    <div class="num-cell"><span class="n">11</span><span class="p">Ekādasa</span></div>
    <div class="num-cell"><span class="n">12</span><span class="p">Dvādasa</span></div>
    <div class="num-cell"><span class="n">13</span><span class="p">Terasa</span></div>
    <div class="num-cell"><span class="n">14</span><span class="p">Cuddasa</span></div>
    <div class="num-cell"><span class="n">15</span><span class="p">Paṇṇarasa</span></div>
    <div class="num-cell"><span class="n">16</span><span class="p">Soḷasa</span></div>
    <div class="num-cell"><span class="n">17</span><span class="p">Sattarasa</span></div>
    <div class="num-cell"><span class="n">18</span><span class="p">Aṭṭhārasa</span></div>
    <div class="num-cell"><span class="n">19</span><span class="p">Ekūnavīsati</span></div>
    <div class="num-cell"><span class="n">20</span><span class="p">Vīsati</span></div>
    <div class="num-cell"><span class="n">21</span><span class="p">Ekavīsati</span></div>
    <div class="num-cell"><span class="n">22</span><span class="p">Dvivīsati</span></div>
    <div class="num-cell"><span class="n">23</span><span class="p">Tevīsati</span></div>
    <div class="num-cell"><span class="n">24</span><span class="p">Catuvīsati</span></div>
    <div class="num-cell"><span class="n">25</span><span class="p">Pañcavīsati</span></div>
    <div class="num-cell"><span class="n">26</span><span class="p">Chabbīsati</span></div>
    <div class="num-cell"><span class="n">27</span><span class="p">Sattavīsati</span></div>
    <div class="num-cell"><span class="n">28</span><span class="p">Aṭṭhavīsati</span></div>
    <div class="num-cell"><span class="n">29</span><span class="p">Ekūnatiṃsati</span></div>
    <div class="num-cell"><span class="n">30</span><span class="p">Tiṃsati</span></div>
    <div class="num-cell"><span class="n">31</span><span class="p">Ekatimṃsati</span></div>
    <div class="num-cell"><span class="n">32</span><span class="p">Dvattiṃsati</span></div>
    <div class="num-cell"><span class="n">33</span><span class="p">Tettiṃsati</span></div>
    <div class="num-cell"><span class="n">34</span><span class="p">Catuttiṃsati</span></div>
    <div class="num-cell"><span class="n">35</span><span class="p">Pañcatiṃsati</span></div>
    <div class="num-cell"><span class="n">36</span><span class="p">Chattiṃsati</span></div>
    <div class="num-cell"><span class="n">37</span><span class="p">Sattatiṃsati</span></div>
    <div class="num-cell"><span class="n">38</span><span class="p">Aṭṭhatiṃsati</span></div>
    <div class="num-cell"><span class="n">39</span><span class="p">Ekūnācattālīsati</span></div>
    <div class="num-cell"><span class="n">40</span><span class="p">Cattālīsati</span></div>
    <div class="num-cell"><span class="n">50</span><span class="p">Paññāsa</span></div>
    <div class="num-cell"><span class="n">60</span><span class="p">Saṭṭhi</span></div>
    <div class="num-cell"><span class="n">70</span><span class="p">Sattati</span></div>
    <div class="num-cell"><span class="n">80</span><span class="p">Asīti</span></div>
    <div class="num-cell"><span class="n">90</span><span class="p">Navuti</span></div>
    <div class="num-cell"><span class="n">100</span><span class="p">Sataṃ</span></div>
    <div class="num-cell"><span class="n">1000</span><span class="p">Sahassaṃ</span></div>
    <div class="num-cell"><span class="n">2000</span><span class="p">Dvisahassaṃ</span></div>
    <div class="num-cell"><span class="n">3000</span><span class="p">Tisahassaṃ</span></div>
    <div class="num-cell"><span class="n">4000</span><span class="p">Catusahassaṃ</span></div>
    <div class="num-cell"><span class="n">5000</span><span class="p">Pañcasahassaṃ</span></div>
  </div>

  <h3>Ordinal Numbers</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Day</th><th>Pāli</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>1st</td><td><em class="pali">Paṭhamaṃ</em></td><td>First</td></tr>
        <tr><td>2nd</td><td><em class="pali">Dutiyaṃ</em></td><td>Second</td></tr>
        <tr><td>3rd</td><td><em class="pali">Tatiyaṃ</em></td><td>Third</td></tr>
        <tr><td>4th</td><td><em class="pali">Catutthaṃ</em></td><td>Fourth</td></tr>
        <tr><td>5th</td><td><em class="pali">Pañcamaṃ</em></td><td>Fifth</td></tr>
        <tr><td>6th</td><td><em class="pali">Chaṭṭhamaṃ</em></td><td>Sixth</td></tr>
        <tr><td>7th</td><td><em class="pali">Sattamaṃ</em></td><td>Seventh</td></tr>
        <tr><td>8th</td><td><em class="pali">Aṭṭhamaṃ</em></td><td>Eighth</td></tr>
      </tbody>
    </table>
  </div>
</section>
<!-- ============================================================
     6. Calculation of the Current Time
     ============================================================ -->
<section class="card" id="gananaya">
  <h2>How to Calculate the Current Time</h2>
  <p>
    To calculate the current time, an Uposatha calendar for the <strong>Vassāna season of
    2015 CE</strong> is given as an example, showing the Śukla and Kāḷa pakṣas, and the
    <em class="pali">Paṇṇarasī</em> (Full-Moon) and <em class="pali">Cātuddasī</em> (14th-day) Poya days.
  </p>

  <p style="text-align:center; font-weight:700; color:var(--burgundy-700); margin:14px 0;">
    Śrī Buddha Varṣa 2558–59 &nbsp;|&nbsp; Uposatha Calendar &nbsp;|&nbsp; 2015 CE
  </p>

  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Season</th><th>Month</th><th>Date</th><th>Weekday</th><th>Pakṣa</th><th>Poya</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">Vassāna</td><td>July</td><td>30</td><td>Thursday</td><td>Śukla</td><td>0 Paṇṇarasī</td></tr>
        <tr><td>August</td><td>14</td><td>Friday</td><td>Kāḷa</td><td>1 Paṇṇarasī</td></tr>
        <tr><td>August</td><td>29</td><td>Saturday</td><td>Śukla</td><td>2 Paṇṇarasī</td></tr>
        <tr><td>September</td><td>12</td><td>Saturday</td><td>Kāḷa</td><td>3 Cātuddasī</td></tr>
        <tr><td>September</td><td>27</td><td>Sunday</td><td>Śukla</td><td>4 Paṇṇarasī</td></tr>
        <tr><td>October</td><td>12</td><td>Monday</td><td>Kāḷa</td><td>5 Paṇṇarasī</td></tr>
        <tr><td>October</td><td>27</td><td>Tuesday</td><td>Śukla</td><td>6 Paṇṇarasī</td></tr>
        <tr><td>November</td><td>10</td><td>Tuesday</td><td>Kāḷa</td><td>7 Cātuddasī</td></tr>
        <tr><td>November</td><td>25</td><td>Wednesday</td><td>Śukla</td><td>8 Paṇṇarasī</td></tr>
      </tbody>
    </table>
  </div>

  <p>
    Here, Saturday the 12th of September is seen to be a <strong>New-Moon
    (<em class="pali">Amāvaka</em>) Poya falling on a <em class="pali">Cātuddasī</em></strong>.
    Therefore, if one wishes to determine the details of 15 September, it can be understood
    that this day occurs three days after the New-Moon Poya, falls on a Tuesday, and is the
    third day of the Śukla (waxing) fortnight.
  </p>

  <div class="table-wrap">
    <table>
      <thead><tr><th>Season</th><th>Date</th><th>Weekday</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Vassāna</td><td>Sept. 12</td><td>Saturday</td><td>New-Moon day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 13</td><td>Sunday</td><td>First day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 14</td><td>Monday</td><td>Second day</td></tr>
        <tr><td>Vassāna</td><td>Sept. 15</td><td>Tuesday</td><td><strong>Third day</strong></td></tr>
      </tbody>
    </table>
  </div>

  <p>The details of 15 September in Pāli should be stated thus:</p>

  <div class="gn-pali-box">
    <em>Ayaṃ vassāna-utu</em> (this is the Rainy Season). <em>Asmiṃ utumhi</em> (in this season),
    <em>Poṭṭhapāda-māsassa</em> (of the month Poṭṭhapāda / September),
    <em>sukkapakkhe</em> (in the Bright Fortnight), <em>tatiyaṃ</em> (the third day),
    <em>bhummavāram-idaṃ</em> (this is Tuesday) — <em>iti daṭṭhabbaṃ</em>
    (thus it should be understood).
  </div>
</section>

<!-- ============================================================
     7. Elapsed / Remaining
     ============================================================ -->
<section class="card" id="atikranta">
  <h2>Elapsed Time (<em class="pali">Atikkanta</em>) and Remaining Time (<em class="pali">Avasiṭṭha</em>)</h2>

  <h3>Elapsed Time (Atikkanta)</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Unit</th><th>Count</th><th class="left">Explanation</th></tr></thead>
      <tbody>
        <tr>
          <td>Years</td><td>2558</td>
          <td class="left">On Sunday, 3 May 2015 CE — the day after the Vesākha Full-Moon Poya — the new Buddha Varṣa 2559 began. Therefore Buddha Varṣa 2558 has elapsed.</td>
        </tr>
        <tr>
          <td>Months</td><td>3</td>
          <td class="left">On the day after the Full-Moon Poya of Sāvaṇa (August) 29, the month Poṭṭhapāda (September) began. Therefore, from Vesākha Full-Moon Poya to the month Poṭṭhapāda, three months have elapsed.</td>
        </tr>
        <tr>
          <td>Days</td><td>16</td>
          <td class="left">From the day after the Full-Moon Poya of Sāvaṇa (August) 29 to Poṭṭhapāda (September) 15, sixteen days have elapsed.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Remaining Time (Avasiṭṭha)</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Unit</th><th>Count</th><th class="left">Explanation</th></tr></thead>
      <tbody>
        <tr>
          <td>Years</td><td>2441</td>
          <td class="left">Subtracting 2558 from Buddha Varṣa 5000 gives 2442. Subtracting the current year from that gives 2441. These are the years remaining to elapse.</td>
        </tr>
        <tr>
          <td>Months</td><td>9</td>
          <td class="left">Since Buddha Varṣa 2559 is a year with an intercalary month (<em class="pali">adhimāsa</em>), there are 13 months. Subtracting 3 from 13 gives 10. Subtracting the current month from that gives 9.</td>
        </tr>
        <tr>
          <td>Days</td><td>12</td>
          <td class="left">Since the New-Moon Poya of Poṭṭhapāda (September) fell on a <em class="pali">Cātuddasī</em>, that month had 29 days. Subtracting 16 from 29 gives 13. Subtracting the current day from that leaves 12 days remaining to elapse.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     8. Tables 1–4
     ============================================================ -->
<section class="card" id="vagu">
  <h2>Table 1 — Years (<em class="pali">Saṃvaccharāni</em>)</h2>
  <p>Current Buddha Varṣa, elapsed/remaining years, and the year-name:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Current Year</th><th>Year Name</th><th>CE</th><th>Elapsed (Atikkanta)</th><th>Remaining (Avasiṭṭha)</th></tr>
      </thead>
      <tbody>
        <tr><td>B.V. 2559</td><td><em class="pali">Kapi</em></td><td>May 2015</td><td>2558</td><td>2441</td></tr>
        <tr><td>B.V. 2560</td><td><em class="pali">Kukkuṭa</em></td><td>May 2016</td><td>2559</td><td>2440</td></tr>
        <tr><td>B.V. 2561</td><td><em class="pali">Soṇa</em></td><td>May 2017</td><td>2560</td><td>2439</td></tr>
        <tr><td>B.V. 2562</td><td><em class="pali">Sūkara</em></td><td>May 2018</td><td>2561</td><td>2438</td></tr>
        <tr><td>B.V. 2563</td><td><em class="pali">Mūsika</em></td><td>May 2019</td><td>2562</td><td>2437</td></tr>
        <tr><td>B.V. 2564</td><td><em class="pali">Vasabha</em></td><td>May 2020</td><td>2563</td><td>2436</td></tr>
        <tr><td>B.V. 2565</td><td><em class="pali">Vyaggha</em></td><td>May 2021</td><td>2564</td><td>2435</td></tr>
        <tr><td>B.V. 2566</td><td><em class="pali">Sasa</em></td><td>May 2022</td><td>2565</td><td>2434</td></tr>
        <tr><td>B.V. 2567</td><td><em class="pali">Nāga</em></td><td>May 2023</td><td>2566</td><td>2433</td></tr>
        <tr><td>B.V. 2568</td><td><em class="pali">Sappa</em></td><td>May 2024</td><td>2567</td><td>2432</td></tr>
        <tr><td>B.V. 2569</td><td><em class="pali">Assa</em></td><td>May 2025</td><td>2568</td><td>2431</td></tr>
        <tr><td>B.V. 2570</td><td><em class="pali">Aja</em></td><td>May 2026</td><td>2569</td><td>2430</td></tr>
        <tr><td>B.V. 2571</td><td><em class="pali">Kapi</em></td><td>May 2027</td><td>2570</td><td>2429</td></tr>
        <tr><td>B.V. 2572</td><td><em class="pali">Kukkuṭa</em></td><td>May 2028</td><td>2571</td><td>2428</td></tr>
        <tr><td>B.V. 2573</td><td><em class="pali">Soṇa</em></td><td>May 2029</td><td>2572</td><td>2427</td></tr>
        <tr><td>B.V. 2574</td><td><em class="pali">Sūkara</em></td><td>May 2030</td><td>2573</td><td>2426</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Table 2 — Months and Seasons</h2>
  <p>Every month begins on the day after the Full-Moon Poya and lasts until the next Full-Moon Poya. Therefore, the first month of every year is <strong><em class="pali">Jeṭṭha</em> (Poson)</strong>.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Current Month</th><th>Months Elapsed</th><th>Months Remaining</th><th>Season</th></tr>
      </thead>
      <tbody>
        <tr><td>1. Jeṭṭha – Poson (May–June)</td><td>0</td><td>11 (Ekādasa)</td><td class="season-hot" rowspan="2">Gimhāna</td></tr>
        <tr><td>2. Āsāḷha – Esala (June–July)</td><td>1 (Eka)</td><td>10 (Dasa)</td></tr>
        <tr><td>3. Sāvaṇa – Nikini (July–Aug.)</td><td>2 (Dve)</td><td>9 (Nava)</td><td class="season-rain" rowspan="4">Vassāna</td></tr>
        <tr><td>4. Poṭṭhapāda – Binara (Aug.–Sept.)</td><td>3 (Ti)</td><td>8 (Aṭṭha)</td></tr>
        <tr><td>5. Assayuja – Vap (Sept.–Oct.)</td><td>4 (Catu)</td><td>7 (Satta)</td></tr>
        <tr><td>6. Kattika – Il (Oct.–Nov.)</td><td>5 (Pañca)</td><td>6 (Cha)</td></tr>
        <tr><td>7. Māgasira – Unduvap (Nov.–Dec.)</td><td>6 (Cha)</td><td>5 (Pañca)</td><td class="season-cold" rowspan="4">Hemanta</td></tr>
        <tr><td>8. Phussa – Duruthu (Dec.–Jan.)</td><td>7 (Satta)</td><td>4 (Catu)</td></tr>
        <tr><td>9. Māgha – Navam (Jan.–Feb.)</td><td>8 (Aṭṭha)</td><td>3 (Ti)</td></tr>
        <tr><td>10. Phagguṇa – Medin (Feb.–March)</td><td>9 (Nava)</td><td>2 (Dve)</td></tr>
        <tr><td>11. Citta – Bak (March–April)</td><td>10 (Dasa)</td><td>1 (Eka)</td><td class="season-hot" rowspan="2">Gimhāna</td></tr>
        <tr><td>12. Vesākha – Vesak (April–May)</td><td>11 (Ekādasa)</td><td>0</td></tr>
      </tbody>
    </table>
  </div>

  <<h2>Table 3 — Days (<em class="pali">Divasāni</em>)</h2>
  <p>Days elapsed and remaining based on the current day of the fortnight:</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Day No.</th><th>Days Elapsed</th><th>Days Remaining</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>0</td><td>29 (Ekūnatiṃsati)</td></tr>
        <tr><td>2</td><td>1 (Eka)</td><td>28 (Aṭṭhavīsati)</td></tr>
        <tr><td>3</td><td>2 (Dve)</td><td>27 (Sattavīsati)</td></tr>
        <tr><td>4</td><td>3 (Ti)</td><td>26 (Chabbīsati)</td></tr>
        <tr><td>5</td><td>4 (Catu)</td><td>25 (Pañcavīsati)</td></tr>
        <tr><td>6</td><td>5 (Pañca)</td><td>24 (Catuvīsati)</td></tr>
        <tr><td>7</td><td>6 (Cha)</td><td>23 (Tevīsati)</td></tr>
        <tr><td>8</td><td>7 (Satta)</td><td>22 (Dvivīsati)</td></tr>
        <tr><td>9</td><td>8 (Aṭṭha)</td><td>21 (Ekavīsati)</td></tr>
        <tr><td>10</td><td>9 (Nava)</td><td>20 (Vīsati)</td></tr>
        <tr><td>11</td><td>10 (Dasa)</td><td>19 (Ekūnavīsati)</td></tr>
        <tr><td>12</td><td>11 (Ekādasa)</td><td>18 (Aṭṭhārasa)</td></tr>
        <tr><td>13</td><td>12 (Dvādasa)</td><td>17 (Sattarasa)</td></tr>
        <tr><td>14</td><td>13 (Terasa)</td><td>16 (Soḷasa)</td></tr>
        <tr><td>15</td><td>14 (Cuddasa)</td><td>15 (Paṇṇarasa)</td></tr>
        <tr><td>16</td><td>15 (Paṇṇarasa)</td><td>14 (Cuddasa)</td></tr>
        <tr><td>17</td><td>16 (Soḷasa)</td><td>13 (Terasa)</td></tr>
        <tr><td>18</td><td>17 (Sattarasa)</td><td>12 (Dvādasa)</td></tr>
        <tr><td>19</td><td>18 (Aṭṭhārasa)</td><td>11 (Ekādasa)</td></tr>
        <tr><td>20</td><td>19 (Ekūnavīsati)</td><td>10 (Dasa)</td></tr>
        <tr><td>21</td><td>20 (Vīsati)</td><td>9 (Nava)</td></tr>
        <tr><td>22</td><td>21 (Ekavīsati)</td><td>8 (Aṭṭha)</td></tr>
        <tr><td>23</td><td>22 (Dvivīsati)</td><td>7 (Satta)</td></tr>
        <tr><td>24</td><td>23 (Tevīsati)</td><td>6 (Cha)</td></tr>
        <tr><td>25</td><td>24 (Catuvīsati)</td><td>5 (Pañca)</td></tr>
        <tr><td>26</td><td>25 (Pañcavīsati)</td><td>4 (Catu)</td></tr>
        <tr><td>27</td><td>26 (Chabbīsati)</td><td>3 (Ti)</td></tr>
        <tr><td>28</td><td>27 (Sattavīsati)</td><td>2 (Dve)</td></tr>
        <tr><td>29</td><td>28 (Aṭṭhavīsati)</td><td>1 (Eka)</td></tr>
        <tr><td>30</td><td>29 (Ekūnatiṃsati)</td><td>0</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Table 4 — Days of the Fortnight (<em class="pali">Tithi / Sthiti</em>)</h2>
  <p>Tithis begin on the day after the Full-Moon Poya or the New-Moon Poya.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Day</th><th>Pāli</th><th>Bright Fortnight</th><th>Dark Fortnight</th></tr>
      </thead>
      <tbody>
        <tr><td>—</td><td>—</td><td><strong>Full-Moon Poya</strong></td><td><strong>New-Moon Poya</strong></td></tr>
        <tr><td>1</td><td><em class="pali">Paṭhamā</em></td><td>First waxing day</td><td>First waning day</td></tr>
        <tr><td>2</td><td><em class="pali">Dutiyā</em></td><td>Second waxing</td><td>Second waning</td></tr>
        <tr><td>3</td><td><em class="pali">Tatiyā</em></td><td>Third waxing</td><td>Third waning</td></tr>
        <tr><td>4</td><td><em class="pali">Catutthī</em></td><td>Fourth waxing</td><td>Fourth waning</td></tr>
        <tr><td>5</td><td><em class="pali">Pañcamī</em></td><td>Fifth waxing</td><td>Fifth waning</td></tr>
        <tr><td>6</td><td><em class="pali">Chaṭṭhī</em></td><td>Sixth waxing</td><td>Sixth waning</td></tr>
        <tr><td>7</td><td><em class="pali">Sattamī</em></td><td>Seventh waxing</td><td>Seventh waning</td></tr>
        <tr><td>8</td><td><em class="pali">Aṭṭhamī</em></td><td>Eighth waxing</td><td>Eighth waning</td></tr>
        <tr><td>9</td><td><em class="pali">Navamī</em></td><td>Ninth waxing</td><td>Ninth waning</td></tr>
        <tr><td>10</td><td><em class="pali">Dasamī</em></td><td>Tenth waxing</td><td>Tenth waning</td></tr>
        <tr><td>11</td><td><em class="pali">Ekādasī</em></td><td>Eleventh waxing</td><td>Eleventh waning</td></tr>
        <tr><td>12</td><td><em class="pali">Dvādasī</em></td><td>Twelfth waxing</td><td>Twelfth waning</td></tr>
        <tr><td>13</td><td><em class="pali">Terasī</em></td><td>Thirteenth waxing</td><td>Thirteenth waning</td></tr>
        <tr><td>14</td><td><em class="pali">Cuddasī</em></td><td>Fourteenth waxing</td><td>Fourteenth waning</td></tr>
        <tr><td>15</td><td><em class="pali">Paṇṇarasī</em></td><td>Fifteenth waxing (Full Moon)</td><td>Fifteenth waning (New Moon)</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============================================================
     9. Moon Phases
     ============================================================ -->
<section class="card" id="chandra">
  <h2>Days, Pakṣas, Months, Seasons, and Years</h2>

  <h3>The Moon's Pakṣas</h3>
  <p>Each month is divided into two pakṣas (fortnights):</p>

  <div class="moon-wrapper">
    <div class="moon-svg-wrap">
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-label="Moon phases diagram">
        <defs>
          <radialGradient id="earthGradEn" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#4a90e2"/>
            <stop offset="65%" stop-color="#1e5faa"/>
            <stop offset="100%" stop-color="#0d3a6b"/>
          </radialGradient>
          <radialGradient id="earthGlowEn" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#4a90e2" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#4a90e2" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="moonClipRightEn"><circle cx="0" cy="0" r="26"/></clipPath>
          <clipPath id="moonClipLeftEn"><circle cx="0" cy="0" r="26"/></clipPath>
          <marker id="arrowGoldEn" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#ffd966"/></marker>
          <marker id="arrowGrayEn" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#95a5a6"/></marker>
        </defs>

        <g fill="#fff" opacity="0.55">
          <circle cx="50" cy="70" r="1.3"/>
          <circle cx="130" cy="40" r="1"/>
          <circle cx="480" cy="85" r="1.4"/>
          <circle cx="545" cy="170" r="1"/>
          <circle cx="560" cy="460" r="1.2"/>
          <circle cx="65" cy="530" r="1"/>
          <circle cx="510" cy="545" r="1.3"/>
          <circle cx="115" cy="395" r="1"/>
          <circle cx="410" cy="30" r="1.1"/>
          <circle cx="230" cy="580" r="1"/>
        </g>

        <circle cx="300" cy="300" r="130" fill="url(#earthGlowEn)"/>
        <circle cx="300" cy="300" r="175" fill="none" stroke="#c9a227" stroke-width="1.2" stroke-dasharray="6 8" opacity="0.55"/>

        <text x="300" y="52" text-anchor="middle" fill="#ffd966" font-size="17" font-weight="bold" font-family="Georgia, serif">Śukla Pakṣa (Waxing)</text>
        <text x="300" y="72" text-anchor="middle" fill="#e8c97a" font-size="12" font-family="Georgia, serif">from New Moon to Full Moon</text>

        <text x="300" y="558" text-anchor="middle" fill="#c8d0d8" font-size="17" font-weight="bold" font-family="Georgia, serif">Kāḷa Pakṣa (Waning)</text>
        <text x="300" y="578" text-anchor="middle" fill="#a8b0b8" font-size="12" font-family="Georgia, serif">from Full Moon to New Moon</text>

        <path d="M 420 175 Q 300 80 180 175" fill="none" stroke="#ffd966" stroke-width="2" opacity="0.7" marker-end="url(#arrowGoldEn)"/>
        <path d="M 180 425 Q 300 520 420 425" fill="none" stroke="#95a5a6" stroke-width="2" opacity="0.7" marker-end="url(#arrowGrayEn)"/>

        <!-- Right: New Moon -->
        <g transform="translate(475 300)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <circle r="26" fill="none" stroke="#333" stroke-width="0.5"/>
        </g>
        <text x="475" y="352" text-anchor="middle" fill="#c0c8d0" font-size="13" font-weight="bold" font-family="Georgia, serif">New Moon</text>
        <text x="475" y="369" text-anchor="middle" fill="#8890a0" font-size="10.5" font-family="Georgia, serif">Day 0</text>

        <g transform="translate(425 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRightEn)"><circle cx="32" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="452" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">1st waxing day</text>

        <g transform="translate(300 125)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRightEn)"><circle cx="26" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="300" y="88" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">8th waxing day</text>

        <g transform="translate(175 175)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipRightEn)"><circle cx="13" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="148" y="140" text-anchor="middle" fill="#fdfbd3" font-size="11" font-family="Georgia, serif">14th waxing day</text>

        <g transform="translate(125 300)">
          <circle r="26" fill="#fdfbd3" stroke="#ffd966" stroke-width="2"/>
          <circle r="15" fill="#fffbe0" opacity="0.7"/>
          <circle r="8" fill="#fffef0" opacity="0.5"/>
        </g>
        <text x="125" y="352" text-anchor="middle" fill="#ffd966" font-size="13" font-weight="bold" font-family="Georgia, serif">Full Moon</text>
        <text x="125" y="369" text-anchor="middle" fill="#d4a860" font-size="10.5" font-family="Georgia, serif">Day 15</text>

        <g transform="translate(175 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeftEn)"><circle cx="-13" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="148" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">14th waning day</text>

        <g transform="translate(300 475)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeftEn)"><circle cx="-26" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="300" y="522" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">8th waning day</text>

        <g transform="translate(425 425)">
          <circle r="26" fill="#0d0d1a" stroke="#c9a227" stroke-width="1.5"/>
          <g clip-path="url(#moonClipLeftEn)"><circle cx="-32" cy="0" r="26" fill="#fdfbd3"/></g>
        </g>
        <text x="452" y="472" text-anchor="middle" fill="#c8d0d8" font-size="11" font-family="Georgia, serif">1st waning day</text>

        <circle cx="300" cy="300" r="58" fill="url(#earthGradEn)" stroke="#fdf5e8" stroke-width="2"/>
        <ellipse cx="283" cy="283" rx="19" ry="13" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="317" cy="320" rx="15" ry="11" fill="#2d6a4f" opacity="0.65"/>
        <ellipse cx="322" cy="270" rx="10" ry="7" fill="#2d6a4f" opacity="0.55"/>
        <ellipse cx="285" cy="325" rx="12" ry="8" fill="#2d6a4f" opacity="0.55"/>
        <text x="300" y="305" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Georgia, serif">Earth</text>
      </svg>
    </div>

    <div class="moon-legend">
      <div class="legend-item">
        <div class="dot" style="background: #fdfbd3;"></div>
        <div><strong>Śukla Pakṣa (Waxing):</strong> from the day after the New-Moon Poya to the Full-Moon Poya — the period during which the moon waxes. It completes 15 days.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: #0d0d1a; border-color:#666;"></div>
        <div><strong>Kāḷa Pakṣa (Waning):</strong> from the day after the Full-Moon Poya to the New-Moon Poya — the period during which the moon wanes. It lasts 14 or 15 days.</div>
      </div>
      <div class="legend-item">
        <div class="dot" style="background: linear-gradient(90deg, #0d0d1a 50%, #fdfbd3 50%);"></div>
        <div><strong>Aṭṭhamī (Eighth day):</strong> the 8th day of the pakṣa, when half of the moon is illuminated.</div>
      </div>
    </div>
  </div>

  <h3>Days</h3>
  <p>
    Two pakṣas together form one complete revolution of the moon around the earth. The moon
    completes this revolution of about 360° in 30 or 29 days — that is, one month. Therefore,
    one day is about 1/30 of the moon's circuit around the earth. Hence, <strong>one lunar day
    equals 12° of longitude</strong>:
  </p>
  <div class="calc-box">
    <div class="formula">360° ÷ 30 = 12°</div>
  </div>

<h3>Tithi — The Phases of the Moon</h3>
  <p>Because the moon reflects sunlight, the moon visible from the Earth appears in different portions and shapes according to its movement across the sky.</p>
  <div class="moon-wrapper"><div class="moon-svg-wrap" style="max-width:700px;overflow-x:auto;-webkit-overflow-scrolling:touch"><svg viewBox="0 0 700 600" style="min-width:560px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tithi and moon phases diagram">
<circle cx="350" cy="300" r="175" fill="none" stroke="#6b6b85" stroke-width="1" stroke-dasharray="4 5"/>
<polygon points="474.0,176.2 487.1,183.3 479.7,190.0" fill="#f2d478"/>
<polygon points="226.0,423.8 212.9,416.7 220.3,410.0" fill="#f2d478"/>
<circle cx="521.2" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 248.6 A 15 15 0 0 1 521.2 278.6 A 14.67 15 0 0 0 521.2 248.6 Z" fill="#fdfbd3"/>
<text x="544.2" y="267.6" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">1. Paṭhamaṃ</text>
<circle cx="509.9" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 213.8 A 15 15 0 0 1 509.9 243.8 A 13.70 15 0 0 0 509.9 213.8 Z" fill="#fdfbd3"/>
<text x="532.9" y="232.8" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">2. Dutiyaṃ</text>
<circle cx="491.6" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 182.1 A 15 15 0 0 1 491.6 212.1 A 12.14 15 0 0 0 491.6 182.1 Z" fill="#fdfbd3"/>
<text x="514.6" y="201.1" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">3. Tatiyaṃ</text>
<circle cx="467.1" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 154.9 A 15 15 0 0 1 467.1 184.9 A 10.04 15 0 0 0 467.1 154.9 Z" fill="#fdfbd3"/>
<text x="490.1" y="173.9" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">4. Catutthaṃ</text>
<circle cx="437.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 133.4 A 15 15 0 0 1 437.5 163.4 A 7.50 15 0 0 0 437.5 133.4 Z" fill="#fdfbd3"/>
<text x="460.5" y="152.4" text-anchor="start" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">5. Pañcamaṃ</text>
<circle cx="404.1" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 118.6 A 15 15 0 0 1 404.1 148.6 A 4.64 15 0 0 0 404.1 118.6 Z" fill="#fdfbd3"/>
<line x1="404.1" y1="118.6" x2="404.1" y2="111.6" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="107.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">6. Chaṭṭhamaṃ</text>
<circle cx="368.3" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 111.0 A 15 15 0 0 1 368.3 141.0 A 1.57 15 0 0 0 368.3 111.0 Z" fill="#fdfbd3"/>
<line x1="368.3" y1="111.0" x2="368.3" y2="82.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="78.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">7. Sattamaṃ</text>
<circle cx="331.7" cy="126.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 111.0 A 15 15 0 0 1 331.7 141.0 A 1.57 15 0 0 1 331.7 111.0 Z" fill="#fdfbd3"/>
<line x1="331.7" y1="111.0" x2="331.7" y2="104.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="100.0" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">8. Aṭṭhamaṃ</text>
<circle cx="295.9" cy="133.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 118.6 A 15 15 0 0 1 295.9 148.6 A 4.64 15 0 0 1 295.9 118.6 Z" fill="#fdfbd3"/>
<line x1="295.9" y1="118.6" x2="295.9" y2="89.6" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="85.6" text-anchor="middle" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">9. Navamaṃ</text>
<circle cx="262.5" cy="148.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 133.4 A 15 15 0 0 1 262.5 163.4 A 7.50 15 0 0 1 262.5 133.4 Z" fill="#fdfbd3"/>
<text x="239.5" y="152.4" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">10. Dasamaṃ</text>
<circle cx="232.9" cy="169.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 154.9 A 15 15 0 0 1 232.9 184.9 A 10.04 15 0 0 1 232.9 154.9 Z" fill="#fdfbd3"/>
<text x="209.9" y="173.9" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">11. Ekādasamaṃ</text>
<circle cx="208.4" cy="197.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 182.1 A 15 15 0 0 1 208.4 212.1 A 12.14 15 0 0 1 208.4 182.1 Z" fill="#fdfbd3"/>
<text x="185.4" y="201.1" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">12. Dvādasamaṃ</text>
<circle cx="190.1" cy="228.8" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 213.8 A 15 15 0 0 1 190.1 243.8 A 13.70 15 0 0 1 190.1 213.8 Z" fill="#fdfbd3"/>
<text x="167.1" y="232.8" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">13. Terasamaṃ</text>
<circle cx="178.8" cy="263.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 248.6 A 15 15 0 0 1 178.8 278.6 A 14.67 15 0 0 1 178.8 248.6 Z" fill="#fdfbd3"/>
<text x="155.8" y="267.6" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">14. Cuddasamaṃ</text>
<circle cx="175.0" cy="300.0" r="15" fill="#fdfbd3" stroke="#7a7a90" stroke-width="1"/>
<text x="152.0" y="304.0" text-anchor="end" fill="#f2d478" font-size="14" font-family="Georgia,'Noto Serif',serif">15. Paṇṇarasamaṃ</text>
<circle cx="178.8" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 178.8 321.4 A 15 15 0 0 1 178.8 351.4 A 14.67 15 0 0 1 178.8 321.4 Z" fill="#fdfbd3" transform="translate(357.6 0) scale(-1 1)"/>
<text x="155.8" y="340.4" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">1. Paṭhamaṃ</text>
<circle cx="190.1" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 190.1 356.2 A 15 15 0 0 1 190.1 386.2 A 13.70 15 0 0 1 190.1 356.2 Z" fill="#fdfbd3" transform="translate(380.3 0) scale(-1 1)"/>
<text x="167.1" y="375.2" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">2. Dutiyaṃ</text>
<circle cx="208.4" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 208.4 387.9 A 15 15 0 0 1 208.4 417.9 A 12.14 15 0 0 1 208.4 387.9 Z" fill="#fdfbd3" transform="translate(416.8 0) scale(-1 1)"/>
<text x="185.4" y="406.9" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">3. Tatiyaṃ</text>
<circle cx="232.9" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 232.9 415.1 A 15 15 0 0 1 232.9 445.1 A 10.04 15 0 0 1 232.9 415.1 Z" fill="#fdfbd3" transform="translate(465.8 0) scale(-1 1)"/>
<text x="209.9" y="434.1" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">4. Catutthaṃ</text>
<circle cx="262.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 262.5 436.6 A 15 15 0 0 1 262.5 466.6 A 7.50 15 0 0 1 262.5 436.6 Z" fill="#fdfbd3" transform="translate(525.0 0) scale(-1 1)"/>
<text x="239.5" y="455.6" text-anchor="end" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">5. Pañcamaṃ</text>
<circle cx="295.9" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 295.9 451.4 A 15 15 0 0 1 295.9 481.4 A 4.64 15 0 0 1 295.9 451.4 Z" fill="#fdfbd3" transform="translate(591.8 0) scale(-1 1)"/>
<line x1="295.9" y1="481.4" x2="295.9" y2="487.4" stroke="#6b6b85" stroke-width="1"/>
<text x="295.9" y="502.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">6. Chaṭṭhamaṃ</text>
<circle cx="331.7" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 331.7 459.0 A 15 15 0 0 1 331.7 489.0 A 1.57 15 0 0 1 331.7 459.0 Z" fill="#fdfbd3" transform="translate(663.4 0) scale(-1 1)"/>
<line x1="331.7" y1="489.0" x2="331.7" y2="517.0" stroke="#6b6b85" stroke-width="1"/>
<text x="331.7" y="532.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">7. Sattamaṃ</text>
<circle cx="368.3" cy="474.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 368.3 459.0 A 15 15 0 0 1 368.3 489.0 A 1.57 15 0 0 0 368.3 459.0 Z" fill="#fdfbd3" transform="translate(736.6 0) scale(-1 1)"/>
<line x1="368.3" y1="489.0" x2="368.3" y2="495.0" stroke="#6b6b85" stroke-width="1"/>
<text x="368.3" y="510.0" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">8. Aṭṭhamaṃ</text>
<circle cx="404.1" cy="466.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 404.1 451.4 A 15 15 0 0 1 404.1 481.4 A 4.64 15 0 0 0 404.1 451.4 Z" fill="#fdfbd3" transform="translate(808.2 0) scale(-1 1)"/>
<line x1="404.1" y1="481.4" x2="404.1" y2="509.4" stroke="#6b6b85" stroke-width="1"/>
<text x="404.1" y="524.4" text-anchor="middle" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">9. Navamaṃ</text>
<circle cx="437.5" cy="451.6" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 437.5 436.6 A 15 15 0 0 1 437.5 466.6 A 7.50 15 0 0 0 437.5 436.6 Z" fill="#fdfbd3" transform="translate(875.0 0) scale(-1 1)"/>
<text x="460.5" y="455.6" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">10. Dasamaṃ</text>
<circle cx="467.1" cy="430.1" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 467.1 415.1 A 15 15 0 0 1 467.1 445.1 A 10.04 15 0 0 0 467.1 415.1 Z" fill="#fdfbd3" transform="translate(934.2 0) scale(-1 1)"/>
<text x="490.1" y="434.1" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">11. Ekādasamaṃ</text>
<circle cx="491.6" cy="402.9" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 491.6 387.9 A 15 15 0 0 1 491.6 417.9 A 12.14 15 0 0 0 491.6 387.9 Z" fill="#fdfbd3" transform="translate(983.2 0) scale(-1 1)"/>
<text x="514.6" y="406.9" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">12. Dvādasamaṃ</text>
<circle cx="509.9" cy="371.2" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 509.9 356.2 A 15 15 0 0 1 509.9 386.2 A 13.70 15 0 0 0 509.9 356.2 Z" fill="#fdfbd3" transform="translate(1019.7 0) scale(-1 1)"/>
<text x="532.9" y="375.2" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">13. Terasamaṃ</text>
<circle cx="521.2" cy="336.4" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/><path d="M 521.2 321.4 A 15 15 0 0 1 521.2 351.4 A 14.67 15 0 0 0 521.2 321.4 Z" fill="#fdfbd3" transform="translate(1042.4 0) scale(-1 1)"/>
<text x="544.2" y="340.4" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">14. Cuddasamaṃ</text>
<circle cx="525.0" cy="300.0" r="15" fill="#1c1c2e" stroke="#7a7a90" stroke-width="1"/>
<text x="548.0" y="304.0" text-anchor="start" fill="#c8d0d8" font-size="14" font-family="Georgia,'Noto Serif',serif">15. Paṇṇarasamaṃ</text>
<circle cx="350" cy="300" r="40" fill="#1e5faa" stroke="#fdf5e8" stroke-width="2"/>
<ellipse cx="338" cy="288" rx="13" ry="9" fill="#2d6a4f" opacity=".65"/><ellipse cx="362" cy="313" rx="10" ry="7" fill="#2d6a4f" opacity=".6"/>
<text x="350" y="304" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Earth</text>
<rect x="298" y="212" width="104" height="26" rx="7" fill="#15152a" stroke="#f2d478" stroke-width="1.2"/>
<text x="350" y="230" text-anchor="middle" fill="#f2d478" font-size="12.5" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Śukla Pakṣa</text>
<rect x="298" y="368" width="104" height="26" rx="7" fill="#15152a" stroke="#c8d0d8" stroke-width="1.2"/>
<text x="350" y="386" text-anchor="middle" fill="#c8d0d8" font-size="12.5" font-weight="bold" font-family="Georgia,'Noto Serif',serif">Kāḷa Pakṣa</text>
</svg></div></div>
  <p style="text-align:center;font-size:.85em;opacity:.75;margin-top:-6px">↔ Swipe the diagram sideways if needed</p>
  <p>The diagram above shows that, day by day, the moonlight (or the shadow) increases by <strong>12°</strong> of longitude, and it shows the days of each pakṣa. These days are called <strong>'tithi'</strong>. They are numbered in order from <em class="pali">'Paṭhamaṃ'</em> (first) to <em class="pali">'Paṇṇarasamaṃ'</em> (fifteenth).</p>
</section>

<!-- ============================================================
     10. Month Systems
     ============================================================ -->
<section class="card" id="masa-krama">
  <h2>Months</h2>
  <p>
    As described above, two pakṣas together form one lunar month. Depending on the pakṣa, a month
    has either 29 or 30 days. This is calculated in two ways:
  </p>

  <div class="tithi-row">
    <div class="paksha-card kala">
      <h4>1. Amānta System</h4>
      <p>
        This system counts from the day after the New-Moon Poya to the next New-Moon Poya —
        hence it is called "<em class="pali">Amānta</em>" (ending on the New-Moon). The lunar month
        begins on the day after the New-Moon Poya and ends on the next New-Moon Poya.
      </p>
    </div>
    <div class="paksha-card sukka">
      <h4>2. Pūrṇimānta System</h4>
      <p>
        This system counts from the day after the Full-Moon Poya to the next Full-Moon Poya —
        hence it is called "<em class="pali">Pūrṇimānta</em>" (ending on the Full Moon).
        <strong>The Buddhist Era uses this Pūrṇimānta system.</strong>
      </p>
    </div>
  </div>
</section>

<!-- ============================================================
     11. Uposatha / Seasons
     ============================================================ -->
<section class="card" id="uposatha">
  <h2>Seasons and Uposatha (Poya) Days</h2>
  <p>The Pūrṇimānta system is used to calculate seasons and Uposatha days. Each season has <strong>8 Uposatha days</strong>.</p>

  <div class="note-box">
    <ul style="margin:0; padding-left:22px;">
      <li>Two of these — the <strong>3rd and 7th Uposatha</strong> — are <em class="pali">Cātuddasī</em> (14th-day).</li>
      <li>The other six Uposatha are <em class="pali">Paṇṇarasī</em> (15th-day / Full-Moon).</li>
      <li>A month with two <em class="pali">Paṇṇarasī</em> Uposatha has: <strong>15 + 15 = 30 days</strong></li>
      <li>A month with one <em class="pali">Cātuddasī</em> Uposatha has: <strong>14 + 15 = 29 days</strong></li>
    </ul>
  </div>

  <h3>Example: Vassāna Season of 2016 CE</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Season</th><th>Month</th><th>Date</th><th>Pakṣa</th><th>Uposatha</th><th>Pūrṇimānta Month</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="9" class="season-rain">Vassāna</td><td>July</td><td>18</td><td>Śukla</td><td>0 Paṇṇarasī</td><td rowspan="2">Sāvaṇa, 30 days</td></tr>
        <tr><td>Aug.</td><td>02</td><td>Kāḷa</td><td>1st Paṇṇarasī</td></tr>
        <tr><td>Aug.</td><td>17</td><td>Śukla</td><td>2nd Paṇṇarasī</td><td rowspan="2">Poṭṭhapāda, 29 days</td></tr>
        <tr><td>Aug.</td><td>31</td><td>Kāḷa</td><td><strong>3rd Cātuddasī</strong></td></tr>
        <tr><td>Sept.</td><td>15</td><td>Śukla</td><td>4th Paṇṇarasī</td><td rowspan="2">Assayuja, 30 days</td></tr>
        <tr><td>Sept.</td><td>30</td><td>Kāḷa</td><td>5th Paṇṇarasī</td></tr>
        <tr><td>Oct.</td><td>15</td><td>Śukla</td><td>6th Paṇṇarasī</td><td rowspan="2">Kattika, 29 days</td></tr>
        <tr><td>Oct.</td><td>29</td><td>Kāḷa</td><td><strong>7th Cātuddasī</strong></td></tr>
        <tr><td>Nov.</td><td>13</td><td>Śukla</td><td>8th Paṇṇarasī</td><td>—</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight-box">
    The Vassāna season has 4 Pūrṇimānta months and 8 Uposatha days.
  </div>
</section>
<!-- ============================================================
     12. Adhimāsa
     ============================================================ -->
<section class="card" id="adhimasa">
  <h2>Adhimāsa (Intercalary Month) and Adhivarṣa (Leap Year)</h2>
  <p>
    The solar year is slightly longer than the Buddhist year. Therefore, to align with the solar year,
    one extra month is added at the end of the <em class="pali">Gimhāna</em> season once every three
    Buddhist years. This added month is called the <strong><em class="pali">Adhimāsa</em></strong>
    (Intercalary Month). In such a year, instead of the usual 8 Uposatha days there are 10, and the
    <em class="pali">Vassāna</em> season begins a month later. That year has
    <strong>13 months instead of 12</strong>, and it is called an <strong><em class="pali">Adhivarṣa</em></strong>
    (Leap Year). An <em class="pali">Adhivarṣa</em> occurred in 2015 CE. The next occurred three years
    later, in 2018 CE.
  </p>

  <h3>How an Adhimāsa Occurs</h3>
  <div class="calc-box">
    <p>A Buddhist year has about 354 days, calculated according to Uposatha and seasons. As stated above, in one Buddhist year there are 3 seasons, 8 Uposatha per season, 18 <em class="pali">Paṇṇarasī</em> Uposatha, and 6 <em class="pali">Cātuddasī</em> Uposatha — giving 3 × 8 = 24 Uposatha.</p>
    <p>Calculated as follows:</p>
    <ul style="list-style:none; padding-left:0;">
      <li>🌕 18 <em class="pali">Paṇṇarasī</em> Uposatha × 15 days = <strong>270 days</strong></li>
      <li>🌑 6 <em class="pali">Cātuddasī</em> Uposatha × 14 days = <strong>84 days</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:8px; padding-top:8px;">📊 <strong>Total = 354 days</strong></li>
    </ul>
    <p style="margin-top:14px;">However, one solar year has about <strong>365¼ days</strong>. The difference between the solar and lunar (Buddhist) years is:</p>
    <div class="formula">Solar year − Lunar year = 365¼ − 354 = 11¼ days</div>
    <p>Over 3 years, this becomes <strong>33¾ days</strong> — approximately one month. Therefore, to align with the solar year, one intercalary month is added once every three lunar years.</p>
    <p>Since no single lunar month can exceed 30 days, 3¾ days remain at the end of each 3-year cycle. When these 3¾ days accumulate, an <em class="pali">Adhimāsa</em> occurs in the 19th lunar year.</p>
    <p style="margin-top:12px;">The average length of a year is <strong>365.24199 days</strong>. Twelve lunar months take <strong>354.36706 days</strong>. The difference is <strong>10.87493 days</strong>.</p>
  </div>
<h3>How to Identify a Year with an Adhimāsa</h3>
  <p>
    In composing calendars using the lunar-month system, <em class="pali">Adhimāsa</em> months
    must be inserted to compensate for this difference. On examining the almanacs, <em class="pali">Adhimāsa</em>
    is found applied to the 32nd and 33rd lunar months. This phenomenon can be explained as follows.
  </p>

  <div class="calc-box">
    <div class="formula">Buddha Varṣa ÷ 19 → remainder = 2, 4, 7, 10, 13, 15, 18</div>
    <p style="text-align:center;">If the remainder is one of these numbers, that year contains an <em class="pali">Adhimāsa</em>.</p>
  </div>

  <p>
    When the <em class="pali">Adhimāsa</em> falls within the 32nd or 33rd lunar month, it may
    occur in any of the three seasons. However, the <em class="pali">Ṭīkā</em> (commentary) states
    that it should be assigned to the <em class="pali">Hemanta</em> season. Accordingly, the
    <em class="pali">Adhimāsa</em> is placed within the <em class="pali">Hemanta</em> season.
    Although the year of the <em class="pali">Adhimāsa</em> can be calculated in this manner, the
    final decision rests with the <strong>Government Poya Committee</strong>. In 2018 CE an
    <em class="pali">Adhimāsa</em> was applied; strictly it should have fallen in Buddha Varṣa 2561,
    but it was assigned to Buddha Varṣa 2562.
  </p>
</section>

<!-- ============================================================
     13. Metonic Cycle
     ============================================================ -->
<section class="card" id="meton">
  <h2>The Metonic Cycle</h2>
  <p>
    The astronomer <strong>Meton (432 BCE)</strong> discovered that a period of 19 years equals
    235 lunar months. (<em>World Encyclopedia</em>)
  </p>

  <div class="calc-box">
    <p>Time taken for 19 years = 365.24199 × 19 = <strong>6939.59781 days</strong></p>
    <p>Time taken for 235 lunar months = 354.36706 ÷ 12 × 235 = <strong>6939.688258 days</strong></p>
    <p>That is, within 19 years, 235 lunar months are completed.</p>
    <div class="formula">19 years = 235 lunar months</div>
    <p>Normal months in 19 years = 12 × 19 = <strong>228</strong></p>
    <p>Lunar months in 19 years = <strong>235</strong></p>
    <p>Difference = 235 − 228 = <strong>7 Adhimāsa months</strong></p>
  </div>

  <h3>How These 7 Adhimāsa Months Distribute</h3>
  <div class="calc-box">
    <p style="text-align:center; font-family:'Courier New', monospace;">228 ÷ 7 = 32 <sup>4</sup>⁄<sub>7</sub></p>
    <p>Accordingly, an <em class="pali">Adhimāsa</em> should be applied once every 32 or 33 lunar months. Examination of the <em class="pali">Adhimāsa</em> tables shows that over 19 years, there are 3 occurrences at 32-month intervals and 4 occurrences at 33-month intervals:</p>
    <ul style="list-style:none; padding-left:0; text-align:center;">
      <li>33 × 4 = <strong>132</strong></li>
      <li>32 × 3 = <strong>96</strong></li>
      <li style="border-top:1px solid var(--border-medium); margin-top:6px; padding-top:6px;">Total = <strong>228</strong></li>
    </ul>
  </div>

  <h3>Historical Evidence</h3>
  <div class="note-box">
    <p>
      On <strong>18 June 1951</strong>, on the Poson Full-Moon Poya day, the
      <strong>Śrī Kalyāṇī Yogāśrama Society</strong> was founded. Nineteen years later
      (1951 + 19 = 1970), on 18 June 1970, Poson Poya fell again. Again (1970 + 19 = 1989),
      in 1989 on 18 June, Poson Poya fell. And again (1989 + 19 = 2008), in 2008 on 18 June,
      Poson Poya fell.
    </p>
  </div>
</section>

<!-- ============================================================
     14. Determination
     ============================================================ -->
<section class="card" id="nishchaya">
  <h2>Method for Determining the Buddha Varṣa</h2>

  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>From the Common Era to Buddha Varṣa</h4>
      <p>The easy method is to <strong>add 544 to the Common Era year</strong>:</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2015 + 544 = 2559</div>
      </div>
      <p>The Buddha Varṣa for 2015 CE is 2559.</p>
      <p><strong>Important:</strong> The Common Era year begins on January 1, but the Buddhist Era begins on the day after the Vesākha Full-Moon Poya. Therefore, if the date you are seeking falls <em>before</em> the Vesākha Full-Moon Poya of that year, you must subtract one (i.e., one Buddha Varṣa). If the date falls <em>after</em>, no subtraction is needed. 2015 + 544 = 2559, minus one year = 2558.</p>
    </div>

    <div class="paksha-card kala">
      <h4>Determining the Year-Name</h4>
      <p>The easy method is to <strong>divide the year number by 12 and examine the remainder</strong>:</p>
      <div class="calc-box" style="padding:12px;">
        <div class="formula" style="font-size:1em;">2559 ÷ 12 = 213, remainder 3</div>
      </div>
      <p>The remainder 3 indicates the year-name — namely, <strong><em class="pali">Kapi</em></strong>.</p>
      <p>For 2560: 2560 ÷ 12 = 213, remainder 4. Remainder 4 indicates the year-name <strong><em class="pali">Kukkuṭa</em></strong>.</p>
    </div>
  </div>

  <h3>Year-Name by Remainder</h3>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Remainder</th><th>Year</th><th>Remainder</th><th>Year</th></tr></thead>
      <tbody>
        <tr><td>0</td><td><em class="pali">Sappo</em></td><td>6</td><td><em class="pali">Sūkaro</em></td></tr>
        <tr><td>1</td><td><em class="pali">Asso</em></td><td>7</td><td><em class="pali">Mūsiko</em></td></tr>
        <tr><td>2</td><td><em class="pali">Ajo</em></td><td>8</td><td><em class="pali">Vasabho</em></td></tr>
        <tr><td>3</td><td><strong><em class="pali">Kapi</em> (2559)</strong></td><td>9</td><td><em class="pali">Vyaggho</em></td></tr>
        <tr><td>4</td><td><em class="pali">Kukkuṭo</em></td><td>10</td><td><em class="pali">Saso</em></td></tr>
        <tr><td>5</td><td><em class="pali">Soṇo</em></td><td>11</td><td><em class="pali">Nāgo</em></td></tr>
      </tbody>
    </table>
  </div>
</section>
<section class="card" id="pali">
  <h2>Proclaiming the Buddha Varṣa (in Pāli)</h2>
  <p>In scholastic texts, it is traditional to proclaim the Buddhist Era in Pāli:</p>



  <h3>Example for a Specific Date</h3>
  <p>For <strong>11 December 2018 CE</strong>, the Buddha Varṣa was proclaimed thus:</p>


  <div class="tithi-row">
    <div class="paksha-card sukka">
      <h4>Elapsed Time (Atikkanta)</h4>
      <p style="text-align:center; font-size:1.15em;">
        Years <strong>2561</strong>, Months <strong>7</strong>, Days <strong>18</strong>
      </p>
    </div>
    <div class="paksha-card kala">
      <h4>Remaining Time (Avasiṭṭha)</h4>
      <p style="text-align:center; font-size:1.15em;">
        Years <strong>2438</strong>, Months <strong>5</strong>, Days <strong>11</strong>
      </p>
    </div>
  </div>
  
  <h3>The Complete Proclamation (for 11 December 2018 CE)</h3>
  <p>The Parinibbāna, the lifespan of the Dispensation, the elapsed time, the remaining time and the date in question are stated together as one proclamation:</p>
  <div class="gn-pali-box">
   Amhākaṃ kho pana bhagavā Dīpaṅkara-pāda-mūlato paṭṭhāya paṭhamaṃ dānapāramī,
    dutiyaṃ sīlapāramī, tatiyaṃ nekkhammapāramī, catutthaṃ paññāpāramī,
    pañcamaṃ viriyapāramī, chaṭṭhamaṃ khantipāramī, sattamaṃ saccapāramī,
    aṭṭhamaṃ adhiṭṭhānapāramī, navamaṃ mettāpāramī, dasamaṃ upekkhāpāramīti
    dasa pāramiyo dasa upapāramiyo dasa paramatthapāramiyoti samattiṃsa pāramiyo
    pūretvā Vessantara-bhavē nibbattitvā pañca mahā-pariccāge katvā Tusitapure
    nibbattitvā catūhi mahā-deva-rājūhi katādhivāsanaṃ paṭicca pañca mahā-vilokane
    viloketvā Suddhodana-mahārājānaṃ nissāya Mahāmāyā-devīyā kucchismiṃ paṭisandhiṃ
    gaṇhitvā dasa-māsaccayena mātu-kucchito nikkhamitvā ekūnatiṃsatime saṃvacchare
    mahābhinikkhamanaṃ nikkhamitvā chabbassāni mahāpadhānaṃ padahitvā pañcatiṃsatime
    saṃvacchare Vesākha-puṇṇamiyaṃ sammāsambodhiṃ abhisambujjhitvā
    pañca-cattālīsa-saṃvaccharāni vasitvā sappasaṃvacchare Vesākha-puṇṇamiyaṃ
    Bhummavāre parinibbāyi.
     Tassa kho pana Bhagavato Arahato Sammāsambuddhassa sāsanaṃ pañca vassasahassāni pavattissati.<br>
    Idāni kho pana dvesahassa-pañcasata-ekasaṭṭhi saṃvaccharāni ceva satta māsāni ca aṭṭhārasa divasāni atikkantāni.<br>
    Dvesahassa-catusata-aṭṭhatiṃsati saṃvaccharāni ceva pañca māsāni ca ekādasa divasāni avasiṭṭhāni.<br>
    Ayaṃ Sūkara saṃvacchare Hemanta-utu, asmiṃ utumhi Māgasira-māsassa sukka-pakkhe catutthaṃ Bhummavāram-idanti daṭṭhabbaṃ.
  </div>
  <h4>Meaning</h4>
  <div class="info-box">
    <p>… in the year, on the Vesākha full-moon day, a Tuesday (<em class="pali">Bhummavāra</em>), he attained Parinibbāna. The Dispensation of that Blessed One, the Arahant, the Fully Enlightened Buddha, will endure for five thousand years.</p>
    <p>Now 2,561 years, 7 months and 18 days have elapsed.</p>
    <p>2,438 years, 5 months and 11 days remain.</p>
    <p>This is the Sūkara (Pig) year, the Hemanta season; in this season, in the month of Māgasira, in the Sukka (waxing) pakṣa, the fourth day, a Tuesday — thus it should be understood.</p>
  </div>
</section>
 <div class="note-box">
    <strong>Note:</strong> This date was the 117th birth anniversary of the Most Venerable Mātaṛa Śrī Jñānārāma Mahāthera.
  </div>
</main>
<footer>
  <div class="lamp">🪔 🪔 🪔</div>
  <p class="bless">
    May this meritorious deed be a cause for all who contributed to compiling this
    scholastic information and for all who read and reflect upon it to attain the
    supreme bliss of Nibbāna!
  </p>
  <p class="thanks">May the Triple Gem bless you! 🙏</p>
  <div class="copy">
    Handbook for Calculating the Buddha Varṣa &nbsp;|&nbsp;© Paññāpāramī Nā Uyana
  </div>
</footer>`
  };
  var CSS = `#gnOverlay{--burgundy-900: #4a0d0d;
  --burgundy-800: #6b1212;
  --burgundy-700: #8b1a1a;
  --burgundy-600: #a52020;
  --burgundy-500: #c03030;
  --burgundy-400: #d45a5a;
  --burgundy-300: #e88a8a;
  --burgundy-200: #f4bcbc;
  --burgundy-100: #fce0e0;

  
  --gold-700: #8a6508;
  --gold-600: #b8860b;
  --gold-500: #d4a017;
  --gold-400: #e6b944;
  --gold-300: #f2d478;
  --gold-200: #f9e9b8;
  --gold-100: #fdf5db;

  
  --bg-page: #fdf8f0;
  --bg-card: #ffffff;
  --bg-elevated: #fffaf2;
  --bg-subtle: #f8efd9;
  --bg-verse: linear-gradient(135deg, #fdf5db 0%, #f9e9b8 100%);
  --bg-pali: linear-gradient(135deg, #f8f3e6, #f2e9d4);
  --bg-tint: #f5e6e6;

  --text-primary: #2a1a1a;
  --text-secondary: #5a3a3a;
  --text-muted: #8a6a6a;
  --text-on-dark: #fdf5e8;

  --border-light: #ecd9c9;
  --border-medium: #d9b8a8;
  --border-strong: #b89080;

  --shadow-xs: 0 1px 3px rgba(74, 13, 13, 0.06);
  --shadow-sm: 0 2px 8px rgba(74, 13, 13, 0.08);
  --shadow-md: 0 6px 20px rgba(74, 13, 13, 0.10);
  --shadow-lg: 0 12px 36px rgba(74, 13, 13, 0.15);

  --font-sans: 'Noto Sans Sinhala', 'Iskoola Pota', sans-serif;
  --font-serif: 'Noto Serif Sinhala', 'Noto Sans Sinhala', serif;}
body.dark-mode #gnOverlay{--bg-page: #1a0a0a;
  --bg-card: #241010;
  --bg-elevated: #2d1616;
  --bg-subtle: #381c1c;
  --bg-verse: linear-gradient(135deg, #3d1a1a 0%, #4a2020 100%);
  --bg-pali: linear-gradient(135deg, #2d1818, #3a2020);
  --bg-tint: #3a1a1a;

  --text-primary: #f5e8e0;
  --text-secondary: #d4b8b0;
  --text-muted: #a88880;
  --text-on-dark: #fdf5e8;

  --border-light: #4a2525;
  --border-medium: #6a3838;
  --border-strong: #8a4848;

  --gold-700: #e6b944;
  --gold-600: #f2d478;
  --gold-500: #f9e9b8;
  --gold-400: #fdf5db;
  --gold-300: #fffbe8;
  --gold-200: #fffdf2;
  --gold-100: #fffefa;

  --burgundy-700: #d45a5a;
  --burgundy-600: #e88a8a;
  --burgundy-500: #f4bcbc;
  --burgundy-400: #fce0e0;
  --burgundy-300: #fdeaea;
  --burgundy-200: #fef2f2;
  --burgundy-100: #fff8f8;

  --shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 6px 20px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 36px rgba(0, 0, 0, 0.55);}
#gnOverlay *,#gnOverlay *::before,#gnOverlay *::after{box-sizing: border-box;}
#gnOverlay{scroll-behavior: smooth;
  scroll-padding-top: 130px;}
#gnOverlay{font-family: var(--font-sans);
  background: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.9;
  margin: 0;
  padding: 0;
  font-size: 16.5px;
  min-height: 100vh;
  transition: background 0.35s ease, color 0.35s ease;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;}
#gnOverlay .hero{background: linear-gradient(135deg, #4a0d0d 0%, #6b1212 40%, #8b1a1a 70%, #b8860b 100%);
  color: #fdf5e8;
  padding: 60px 20px 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(74, 13, 13, 0.35);}
#gnOverlay .hero::before{content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 215, 130, 0.15), transparent 45%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08), transparent 45%);
  pointer-events: none;}
#gnOverlay .hero::after{content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 5px;
  background: linear-gradient(90deg, transparent, #f2d478, #fdf5db, #f2d478, transparent);}
#gnOverlay .hero-orbit{display: block;
  width: 100%;
  max-width: 820px;
  height: auto;
  margin: 0 auto 22px;
  border-radius: 16px;
  border: 1px solid rgba(242, 212, 120, 0.35);
  box-shadow: 0 12px 36px rgba(0,0,0,0.55), 0 0 24px rgba(242, 212, 120, 0.18);
  background: #030108;
  overflow: hidden;
  position: relative;
  z-index: 1;}
#gnOverlay .hero .subtitle{font-size: clamp(1rem, 2.4vw, 1.25rem);
  opacity: 0.95;
  margin: 0 auto;
  max-width: 720px;
  position: relative; z-index: 1;
  font-weight: 500;}
#gnOverlay .hero .lotus{margin-top: 18px;
  font-size: 1.2rem;
  letter-spacing: 12px;
  opacity: 0.75;
  position: relative; z-index: 1;}
#gnOverlay .topbar{position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-card);
  border-bottom: 2px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: background 0.35s ease, border-color 0.35s ease;}
#gnOverlay .topbar-inner{max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;}
#gnOverlay .toc{display: flex;
  gap: 6px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: thin;
  padding: 4px 0;}
#gnOverlay .toc::-webkit-scrollbar{height: 4px;}
#gnOverlay .toc::-webkit-scrollbar-thumb{background: var(--burgundy-400); border-radius: 4px;}
#gnOverlay .toc a{color: var(--burgundy-700);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 13px;
  border-radius: 30px;
  white-space: nowrap;
  border: 1.5px solid transparent;
  background: var(--bg-tint);
  transition: all 0.22s ease;}
#gnOverlay .toc a:hover{background: var(--burgundy-700);
  color: #fdf5e8;
  border-color: var(--gold-500);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(139, 26, 26, 0.3);}
body.dark-mode #gnOverlay .toc a{background: var(--bg-subtle);
  color: var(--gold-300);}
body.dark-mode #gnOverlay .toc a:hover{background: var(--burgundy-500);
  color: #1a0a0a;}
#gnOverlay .theme-toggle{flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--burgundy-600);
  background: var(--bg-elevated);
  color: var(--burgundy-700);
  cursor: pointer;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-xs);
  padding: 0;}
#gnOverlay .theme-toggle:hover{transform: rotate(20deg) scale(1.1);
  background: var(--burgundy-700);
  color: #fdf5e8;
  box-shadow: 0 4px 14px rgba(139, 26, 26, 0.4);}
#gnOverlay .theme-toggle svg{width: 22px; height: 22px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;}
#gnOverlay .theme-toggle .icon-sun{display: none;}
#gnOverlay .theme-toggle .icon-moon{display: block;}
body.dark-mode #gnOverlay .theme-toggle .icon-sun{display: block;}
body.dark-mode #gnOverlay .theme-toggle .icon-moon{display: none;}
#gnOverlay main{max-width: 1080px;
  margin: 0 auto;
  padding: 24px 18px 60px;}
#gnOverlay section.card{background: var(--bg-card);
  border-radius: 16px;
  padding: 32px 34px;
  margin: 28px 0;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  position: relative;
  overflow: hidden;
  transition: background 0.35s ease, border-color 0.35s ease;
  animation: gn-fadeUp 0.6s ease both;}
#gnOverlay section.card::before{content: '';
  position: absolute;
  top: 0; left: 0;
  width: 5px; height: 72px;
  background: linear-gradient(180deg, var(--burgundy-700), var(--gold-500));
  border-radius: 0 0 8px 0;}
@keyframes gn-fadeUp{
  from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
#gnOverlay h2{font-family: var(--font-serif);
  color: var(--burgundy-700);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin: 0 0 20px;
  padding-bottom: 12px;
  position: relative;
  font-weight: 700;
  line-height: 1.5;}
body.dark-mode #gnOverlay h2{color: var(--gold-400);}
#gnOverlay h2::after{content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 85px; height: 3.5px;
  background: linear-gradient(90deg, var(--gold-500), var(--gold-400), transparent);
  border-radius: 4px;}
#gnOverlay h3{font-family: var(--font-serif);
  color: var(--burgundy-800);
  font-size: 1.15rem;
  margin: 26px 0 12px;
  font-weight: 600;
  line-height: 1.5;}
body.dark-mode #gnOverlay h3{color: var(--gold-300);}
#gnOverlay h3::before{content: '❖ ';
  color: var(--gold-600);
  font-size: 0.85em;}
#gnOverlay h4{font-family: var(--font-serif);
  color: var(--burgundy-700);
  font-size: 1.02rem;
  margin: 18px 0 10px;
  font-weight: 600;}
body.dark-mode #gnOverlay h4{color: var(--gold-300);}
#gnOverlay p{margin: 10px 0;}
#gnOverlay .verse{background: var(--bg-verse);
  border: 2px solid var(--gold-500);
  border-radius: 14px;
  padding: 24px 20px;
  text-align: center;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 600;
  color: var(--gold-700);
  margin: 20px 0;
  line-height: 2.1;
  font-size: 1.08rem;
  box-shadow: inset 0 0 26px rgba(212, 160, 23, 0.12), var(--shadow-sm);
  position: relative;}
body.dark-mode #gnOverlay .verse{color: var(--gold-400);}
#gnOverlay .verse::before,#gnOverlay .verse::after{content: '❁';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gold-500);
  font-size: 1.15rem;
  opacity: 0.7;}
#gnOverlay .verse::before{left: 14px;}
#gnOverlay .verse::after{right: 14px;}
#gnOverlay .gn-pali-box{background: var(--bg-pali);
  border: 1.5px dashed var(--gold-600);
  border-radius: 12px;
  padding: 18px 22px;
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--gold-700);
  margin: 18px 0;
  line-height: 2.1;
  font-size: 1rem;
  box-shadow: inset 0 2px 10px rgba(184, 134, 11, 0.08);}
body.dark-mode #gnOverlay .gn-pali-box{color: var(--gold-400);}
#gnOverlay .info-box{background: var(--bg-tint);
  border-left: 5px solid var(--burgundy-600);
  border-radius: 10px;
  padding: 14px 20px;
  margin: 16px 0;
  box-shadow: var(--shadow-xs);}
#gnOverlay .highlight-box{background: var(--gold-100);
  border-left: 5px solid var(--gold-500);
  border-radius: 10px;
  padding: 14px 20px;
  margin: 16px 0;
  box-shadow: var(--shadow-xs);}
body.dark-mode #gnOverlay .highlight-box{background: var(--bg-subtle);
  color: var(--text-primary);}
#gnOverlay .note-box{background: var(--gold-100);
  border-left: 5px solid var(--gold-600);
  border-radius: 10px;
  padding: 14px 20px;
  margin: 16px 0;}
body.dark-mode #gnOverlay .note-box{background: var(--bg-subtle);}
#gnOverlay .warn-box{background: var(--burgundy-100);
  border-left: 5px solid var(--burgundy-700);
  border-radius: 10px;
  padding: 14px 20px;
  margin: 16px 0;}
body.dark-mode #gnOverlay .warn-box{background: var(--bg-subtle);}
#gnOverlay .table-wrap{overflow-x: auto;
  margin: 18px 0;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);}
#gnOverlay table{width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
  font-size: 0.95em;
  min-width: 460px;}
#gnOverlay thead th{background: linear-gradient(135deg, #b83030 0%, #d45a5a 55%, #e6b944 100%);
  color: #fffbe8;
  text-shadow: 0 1px 2px rgba(74, 13, 13, 0.35);
  padding: 12px 10px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.2px;
  font-size: 0.93em;
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  font-family: var(--font-sans);}
body.dark-mode #gnOverlay thead th{background: linear-gradient(135deg, #7a1a1a 0%, #9a3030 55%, #a07818 100%);
  color: #fffbe8;}
#gnOverlay thead th:last-child{border-right: none;}
#gnOverlay tbody td{padding: 10px 12px;
  border-bottom: 1px solid var(--border-light);
  text-align: center;
  color: var(--text-primary);
  vertical-align: middle;}
#gnOverlay tbody tr:nth-child(even){background: var(--bg-subtle);}
#gnOverlay tbody tr:hover{background: var(--gold-100); transition: background 0.2s;}
body.dark-mode #gnOverlay tbody tr:hover{background: var(--bg-elevated);}
#gnOverlay tbody td:first-child{font-weight: 600;
  color: var(--burgundy-700);}
body.dark-mode #gnOverlay tbody td:first-child{color: var(--gold-400);}
#gnOverlay td.left,#gnOverlay th.left{text-align: left;}
#gnOverlay .season-hot{background: linear-gradient(135deg, #ffe0c2, #ffd0a8) !important; color: #8a4000 !important; font-weight: 700 !important;}
#gnOverlay .season-rain{background: linear-gradient(135deg, #c8e4fa, #a8d4f5) !important; color: #0d4f8b !important; font-weight: 700 !important;}
#gnOverlay .season-cold{background: linear-gradient(135deg, #d8e0e8, #c0ccd8) !important; color: #2d3748 !important; font-weight: 700 !important;}
body.dark-mode #gnOverlay .season-hot{background: linear-gradient(135deg, #6a3010, #8a4018) !important; color: #ffd0a8 !important;}
body.dark-mode #gnOverlay .season-rain{background: linear-gradient(135deg, #0d3a5c, #145080) !important; color: #a8d4f5 !important;}
body.dark-mode #gnOverlay .season-cold{background: linear-gradient(135deg, #2a3442, #3a4858) !important; color: #c0ccd8 !important;}
#gnOverlay .year-grid{display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin: 20px 0;}
#gnOverlay .year-card{background: var(--bg-elevated);
  border: 1.5px solid var(--gold-500);
  border-radius: 12px;
  padding: 14px 10px;
  text-align: center;
  transition: all 0.25s ease;
  box-shadow: var(--shadow-xs);
  position: relative;
  overflow: hidden;}
#gnOverlay .year-card::before{content: '';
  position: absolute;
  top: -50%; right: -50%;
  width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(242, 212, 120, 0.45), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;}
#gnOverlay .year-card:hover{transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(139, 26, 26, 0.25);
  border-color: var(--burgundy-600);}
#gnOverlay .year-card:hover::before{opacity: 1;}
#gnOverlay .year-card .num{font-size: 0.75em;
  color: var(--gold-700);
  font-weight: 700;
  letter-spacing: 0.5px;}
body.dark-mode #gnOverlay .year-card .num{color: var(--gold-400);}
#gnOverlay .year-card .name{font-family: var(--font-serif);
  font-size: 1.15em;
  font-weight: 700;
  color: var(--burgundy-700);
  margin: 3px 0;}
body.dark-mode #gnOverlay .year-card .name{color: var(--gold-300);}
#gnOverlay .year-card .meaning{font-size: 0.88em;
  color: var(--text-secondary);}
#gnOverlay .num-grid{display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  margin: 18px 0;}
#gnOverlay .num-cell{background: var(--bg-elevated);
  border: 1.2px solid var(--border-light);
  border-radius: 9px;
  padding: 8px 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  transition: all 0.2s;}
#gnOverlay .num-cell:hover{background: var(--gold-100);
  border-color: var(--gold-500);
  transform: translateY(-2px);}
#gnOverlay .num-cell .n{color: var(--burgundy-700);
  font-weight: 700;
  font-size: 1.05em;}
body.dark-mode #gnOverlay .num-cell .n{color: var(--gold-400);}
#gnOverlay .num-cell .p{color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.92em;}
#gnOverlay .calc-box{background: var(--bg-elevated);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 18px 0;
  border: 1px solid var(--border-medium);
  box-shadow: var(--shadow-xs);}
#gnOverlay .calc-box .formula{font-family: 'Courier New', monospace;
  background: var(--bg-card);
  border: 1px dashed var(--burgundy-600);
  border-radius: 8px;
  padding: 12px;
  margin: 12px 0;
  text-align: center;
  font-size: 1.1em;
  font-weight: 700;
  color: var(--burgundy-700);
  letter-spacing: 1px;}
body.dark-mode #gnOverlay .calc-box .formula{color: var(--gold-400);}
#gnOverlay .calc-box .result{background: var(--gold-100);
  border-left: 4px solid var(--gold-600);
  padding: 10px 16px;
  border-radius: 8px;
  margin-top: 12px;
  font-weight: 600;
  color: var(--burgundy-800);}
body.dark-mode #gnOverlay .calc-box .result{background: var(--bg-subtle);
  color: var(--gold-300);}
#gnOverlay .moon-wrapper{display: flex;
  flex-wrap: wrap;
  gap: 22px;
  align-items: flex-start;
  justify-content: center;
  margin: 24px 0;}
#gnOverlay .moon-svg-wrap{flex: 1 1 340px;
  max-width: 540px;
  background: radial-gradient(circle at 50% 50%, #1a0a1a 0%, #0a0510 100%);
  border-radius: 18px;
  padding: 14px;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.6), var(--shadow-md);
  border: 1px solid rgba(242, 212, 120, 0.25);}
#gnOverlay .moon-svg-wrap svg{width: 100%; height: auto; display: block;}
#gnOverlay .moon-legend{flex: 1 1 260px;
  min-width: 240px;}
#gnOverlay .legend-item{display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 10px 14px;
  border-radius: 10px;
  margin-bottom: 8px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-light);
  font-size: 0.92em;
  line-height: 1.65;}
#gnOverlay .legend-item .dot{width: 16px; height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1.5px solid #333;
  margin-top: 4px;}
#gnOverlay .tithi-row{display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 18px 0;}
@media (max-width: 700px){#gnOverlay .tithi-row{grid-template-columns: 1fr;}
}
#gnOverlay .paksha-card{border-radius: 12px;
  padding: 16px;
  box-shadow: var(--shadow-sm);}
#gnOverlay .paksha-card.sukka{background: linear-gradient(135deg, var(--gold-100), var(--gold-200));
  border: 1.5px solid var(--gold-500);}
#gnOverlay .paksha-card.kala{background: var(--bg-elevated);
  border: 1.5px solid var(--border-medium);}
body.dark-mode #gnOverlay .paksha-card.sukka{background: linear-gradient(135deg, #3a2810, #4a3418);
  border-color: var(--gold-600);}
#gnOverlay .paksha-card h4{margin: 0 0 10px;
  text-align: center;
  color: var(--burgundy-700);
  font-size: 1.05rem;}
body.dark-mode #gnOverlay .paksha-card h4{color: var(--gold-400);}
#gnOverlay .paksha-card table{min-width: auto;
  box-shadow: none;
  background: transparent;}
#gnOverlay .paksha-card table td{padding: 6px 8px;
  font-size: 0.9em;
  border-bottom: 1px dashed var(--border-medium);
  background: transparent !important;}
#gnOverlay .paksha-card table td:first-child{color: var(--burgundy-700);}
body.dark-mode #gnOverlay .paksha-card table td:first-child{color: var(--gold-400);}
#gnOverlay footer{background: linear-gradient(135deg, #4a0d0d 0%, #6b1212 50%, #b8860b 100%);
  color: #fdf5e8;
  padding: 45px 20px 26px;
  text-align: center;
  margin-top: 50px;
  position: relative;
  overflow: hidden;}
#gnOverlay footer::before{content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 5px;
  background: linear-gradient(90deg, transparent, #f2d478, #fdf5db, #f2d478, transparent);}
#gnOverlay footer .lamp{font-size: 1.8rem;
  letter-spacing: 12px;
  opacity: 0.9;
  margin: 6px 0 14px;}
#gnOverlay footer .bless{font-family: var(--font-serif);
  font-size: clamp(0.98rem, 2.2vw, 1.18rem);
  line-height: 1.95;
  max-width: 780px;
  margin: 0 auto 16px;
  text-shadow: 1px 2px 6px rgba(0,0,0,0.4);}
#gnOverlay footer .thanks{font-size: 1rem;
  opacity: 0.92;
  margin-bottom: 16px;}
#gnOverlay footer .copy{font-size: 0.82rem;
  opacity: 0.7;
  border-top: 1px solid rgba(255, 248, 225, 0.2);
  padding-top: 16px;
  max-width: 780px;
  margin: 16px auto 0;}
@media (max-width: 720px){#gnOverlay{font-size: 15.5px;}
#gnOverlay section.card{padding: 22px 18px; border-radius: 13px;}
#gnOverlay section.card::before{height: 50px;}
#gnOverlay .hero{padding: 40px 16px 36px;}
#gnOverlay .hero-orbit{max-width: 100%; margin-bottom: 16px;}
#gnOverlay .verse{font-size: 1rem; padding: 18px 12px;}
#gnOverlay .verse::before,#gnOverlay .verse::after{display: none;}
#gnOverlay .num-grid{grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));}
#gnOverlay .year-grid{grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));}
#gnOverlay .topbar-inner{padding: 6px 10px; gap: 6px;}
#gnOverlay .toc a{font-size: 0.76rem; padding: 5px 10px;}
#gnOverlay .theme-toggle{width: 40px; height: 40px;}
}

/* ===== overlay container ===== */
#gnOverlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;min-height:0;z-index:5000;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:0;scroll-padding-top:76px;display:block;text-align:left}
#gnOverlay .gn-close{position:fixed;top:calc(env(safe-area-inset-top,0px) + 10px);right:12px;z-index:5100;width:44px;height:44px;border-radius:50%;border:2px solid var(--burgundy-600);background:var(--bg-elevated);color:var(--burgundy-700);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-size:26px;line-height:1;font-family:Arial,sans-serif;box-shadow:var(--shadow-md);transition:all .25s ease}
#gnOverlay .gn-close:hover{background:var(--burgundy-700);color:#fdf5e8;transform:rotate(90deg)}
body.dark-mode #gnOverlay .gn-close{color:var(--gold-300)}
#gnOverlay .topbar-inner{padding-right:64px}
/* ===== English overrides ===== */
#gnOverlay.lang-en{--font-sans:'Noto Serif',Georgia,serif;--font-serif:'Noto Serif',Georgia,serif;line-height:1.85}
#gnOverlay.lang-en .pali,#gnOverlay.lang-en .iast{font-family:'Noto Serif','Noto Serif Devanagari',Georgia,serif}
#gnOverlay.lang-en em.pali{font-style:italic;color:var(--burgundy-700);font-weight:500}
body.dark-mode #gnOverlay.lang-en em.pali{color:var(--gold-300)}
#gnOverlay.lang-en .hero .subtitle,#gnOverlay.lang-en .year-card .name,#gnOverlay.lang-en .num-cell .p,#gnOverlay.lang-en footer .bless{font-style:italic}
#gnOverlay.lang-en .num-grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
`;

  var observer = null;
  var pushed = false;

  function lang() {
    return (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'en' : 'si';
  }

  function injectStyle() {
    if (document.getElementById('gnStyle')) return;
    var st = document.createElement('style');
    st.id = 'gnStyle';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function build() {
    var l = lang();
    var ov = document.getElementById('gnOverlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'gnOverlay';
      document.body.appendChild(ov);
    }
    ov.className = 'lang-' + l;
    ov.setAttribute('lang', l);
    ov.innerHTML =
      '<button class="gn-close" type="button" aria-label="' + (l === 'si' ? 'ඉවත් වන්න' : 'Close') + '">&times;</button>' +
      CONTENT[l];

    ov.querySelector('.gn-close').addEventListener('click', closeCalculation);

    // TOC smooth scroll (inside the overlay)
    ov.querySelectorAll('.toc a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var id = a.getAttribute('href').slice(1);
        var t = ov.querySelector('#' + id);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Scroll-in animations
    if (observer) observer.disconnect();
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.style.animationPlayState = 'running';
            observer.unobserve(en.target);
          }
        });
      }, { root: ov, threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
      ov.querySelectorAll('section.card').forEach(function (s, i) {
        s.style.animationDelay = Math.min(i * 0.04, 0.25) + 's';
        s.style.animationPlayState = 'paused';
        observer.observe(s);
      });
    }
    ov.scrollTop = 0;
    ov.querySelectorAll('.moon-svg-wrap').forEach(function (w) {
      requestAnimationFrame(function () { w.scrollLeft = (w.scrollWidth - w.clientWidth) / 2; });
    });
    return ov;
  }

  function onKey(e) { if (e.key === 'Escape') closeCalculation(); }
  function onPop() { if (pushed) { pushed = false; hide(); } }

  function hide() {
    var ov = document.getElementById('gnOverlay');
    if (ov) ov.style.display = 'none';
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }

  window.openCalculation = function () {
    var dd = document.getElementById('myDropdown'); if (dd) dd.style.display = 'none';
    injectStyle();
    var ov = build();
    ov.style.display = 'block';
    ov.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    try { history.pushState({ gn: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
  };

  window.closeCalculation = function () {
    if (pushed) { history.back(); }   // popstate → hide()
    else hide();
  };

  window.addEventListener('popstate', onPop);
})();