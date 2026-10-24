/* visuals3d.js — Three.js (r129) visuals for බුද්ධ වර්ෂය. Lazy-loads three.min.js after page load.
   Safe fallback: if WebGL/three fails, the existing CSS visuals stay untouched. */
(function () {
'use strict';
var T, D = Math.PI / 180, W = window, doc = document, mr, bg, S = {}, hostMode = '', heroEl = null, tlKey = '', mid = 0, md = null;
var U = { t: { value: 0 } };
var low = (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
  (W.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches);
var $ = function (i) { return doc.getElementById(i); };
var isDark = function () { return doc.body.classList.contains('dark-mode'); };
var dpr = function (m) { return Math.min(W.devicePixelRatio || 1, m || 2); };
var sdate = function (k) { return new Date(k + 'T18:00:00+05:30'); };
function addK(k, n) { var d = new Date(k + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function dayMark(k) { // astronomical full/new moon within this 6pm→6pm day (may differ ±1 day from canonical poya list)
  try { var a = sdate(k), p = Astronomy.MoonPhase(a), q = Astronomy.MoonPhase(new Date(a.getTime() + 864e5));
    if (p < 180 && q >= 180) return 'f'; if (p > q) return 'n'; } catch (e) {} return '';
}
function wrap(n, f) { var o = W[n]; if (typeof o !== 'function') return; W[n] = function () { var r = o.apply(this, arguments); try { f.apply(this, arguments); } catch (e) {} return r; }; }

/* ---------- lazy load (never blocks first paint) ---------- */
function go() { (W.requestIdleCallback || setTimeout)(function () {
  if (W.THREE) return init(); var s = doc.createElement('script'); s.src = 'three.min.js'; s.onload = init; doc.head.appendChild(s); }); }
if (doc.readyState === 'complete') setTimeout(go, 400); else W.addEventListener('load', function () { setTimeout(go, 400); });

function init() {
  T = W.THREE; if (!T) return;
  try { mrInit(); bgInit(); } catch (e) { return; }
  wrap('updateMiniMoon', function (d) { mini(d); }); wrap('updateSunTimes', modal);
  wrap('toggleDarkMode', sync); wrap('updateDisplay', sync);
  var iv = $('inputDate'); if (iv && iv.value) mini(sdate(iv.value));
  // mini moon: repaint a few times + on return/rotate/context-restore (the first paint could land before layout or be lost)
  function remini() { var e = $('inputDate'); if (e && e.value) mini(sdate(e.value)); }
  [250, 900, 2500, 6000].forEach(function (ms) { setTimeout(remini, ms); });
  W.addEventListener('pageshow', remini); W.addEventListener('orientationchange', function () { setTimeout(remini, 350); }); doc.addEventListener('visibilitychange', function () { if (!doc.hidden) remini(); });
  mr.r.domElement.addEventListener('webglcontextlost', function (e) { e.preventDefault(); }, false); mr.r.domElement.addEventListener('webglcontextrestored', remini, false);
  var sm = $('sunModal'); if (sm && sm.style.display === 'flex') modal();
  sync(); var rz; W.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { if (bg.mode) fit(true); }, 200); });
  doc.addEventListener('visibilitychange', sync);
}

/* ---------- procedural lit moon (no texture files) ---------- */
var MV = 'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
var MF = 'uniform vec3 uL;uniform mat3 uR;uniform float uEs;varying vec3 vP;' +
'float h(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}' +
'float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}' +
'float fb(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p*=2.03;a*=.5;}return s;}' +
'float cr(vec3 p,float sc,float k){p*=sc;vec3 i=floor(p),f=fract(p);float r=0.;' +
'for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++)for(int z=-1;z<=1;z++){vec3 g=vec3(float(x),float(y),float(z)),c=i+g;if(h(c+5.3)<k)continue;' +
'vec3 o=vec3(h(c),h(c+7.1),h(c+13.7));float R=.12+.3*h(c+3.3),d=length(g+o-f)/R;r+=-.5*max(1.-d*d,0.)+.3*exp(-(d-1.)*(d-1.)*36.);}return r;}' +
'void main(){vec3 N=normalize(vP),q=uR*N;float mare=smoothstep(.46,.6,fb(q*1.7+3.1));' +
'float ht=cr(q,4.,.35)*.6+cr(q,11.,.5)*.35+(fb(q*30.)-.5)*.03;' +
'float al=clamp(.78-.38*mare+(fb(q*7.)-.5)*.16+ht*.25,.12,1.);vec3 base=al*vec3(1.,.97,.9);' +
'vec3 dp=dFdx(vP),dq=dFdy(vP);float dx=dFdx(ht),dy=dFdy(ht);vec3 R1=cross(dq,N),R2=cross(N,dp);float dt=dot(dp,R1);' +
'vec3 Nb=normalize(abs(dt)*N-sign(dt)*(dx*R1+dy*R2)*.035);vec3 L=normalize(uL);' +
'float m0=max(dot(Nb,L),0.),mu=max(N.z,.05);float lit=m0/(m0+mu)*2.*smoothstep(-.02,.1,dot(N,L));' +
'gl_FragColor=vec4(base*lit*1.15+base*vec3(.05,.07,.12)*uEs,1.);}';

function mrInit() {
  var r = new T.WebGLRenderer({ alpha: true, antialias: true }); r.setClearColor(0, 0);
  var u = { uL: { value: new T.Vector3() }, uR: { value: new T.Matrix3() }, uEs: { value: 0 } };
  var s = new T.Scene(), c = new T.OrthographicCamera(-1.02, 1.02, 1.02, -1.02, .1, 10); c.position.z = 3;
  s.add(new T.Mesh(new T.SphereGeometry(1, 64, 48), new T.ShaderMaterial({ uniforms: u, vertexShader: MV, fragmentShader: MF, extensions: { derivatives: true } })));
  mr = { r: r, s: s, c: c, u: u, px: 0 };
}
function paint(cv, date, t) { // real phase angle + real libration (+ tiny idle sway when t given)
  if (!mr || !cv) return;
  var ph = Astronomy.MoonPhase(date), ill = Astronomy.Illumination('Moon', date).phase_fraction, lb = Astronomy.Libration(date);
  var sw = t ? Math.sin(t * .0006) * 1.4 : 0, a = ph * D;
  mr.u.uL.value.set(Math.sin(a), 0, -Math.cos(a));
  mr.u.uR.value.setFromMatrix4(new T.Matrix4().makeRotationFromEuler(new T.Euler((lb.elat + sw * .4) * D, -(lb.elon + sw) * D, 0)));
  mr.u.uEs.value = Math.pow(1 - ill, 2);
  var px = Math.round((cv.clientWidth || +cv.getAttribute('data-s') || 50) * dpr(2));
  if (cv.width !== px) cv.width = cv.height = px;
  mr.r.setSize(px, px, false); mr.r.render(mr.s, mr.c);
  var x = cv.getContext('2d'); x.clearRect(0, 0, px, px); x.drawImage(mr.r.domElement, 0, 0);
}
function mini(d) {
  if (!mr) return; var el = $('miniMoonVisual'); if (!el) return;
  el.className = 'v3d'; var cv = el.firstChild;
  if (!cv || cv.tagName !== 'CANVAS') { el.innerHTML = '<canvas data-s="50"></canvas>'; cv = el.firstChild; cv.style.cssText = 'width:100%;height:100%;display:block'; }
  paint(cv, d, 0);
}
function modal() {
  var sm = $('sunModal'); if (!mr || !sm || sm.style.display !== 'flex') return; var inp = $('sunDateInput'), el = $('moonVisual'); if (!inp || !el || !inp.value) return;
  md = sdate(inp.value); var cv = el.firstChild;
  if (!cv || cv.tagName !== 'CANVAS') { el.innerHTML = '<canvas data-s="105"></canvas>'; cv = el.firstChild; }
  el.style.backgroundColor = 'transparent'; cv.style.cssText = 'width:100%;height:100%;display:block'; paint(cv, md, 0);
  if (!mid && !low) mid = setInterval(function () { var m = $('sunModal');
    if (!m || m.style.display !== 'flex' || doc.hidden) { if (!m || m.style.display !== 'flex') { clearInterval(mid); mid = 0; } return; }
    paint(el.firstChild, md, performance.now()); }, 66);
  timeline(inp.value);
}
function timeline(k) { // 3D lit moons for ~a lunar month around the selected date; tap = jump to that date
  if (k === tlKey) return; var box = $('tlStrip');
  if (!box) { var c = doc.querySelector('#sunModal .moon-phase-container'); if (!c) return;
    var w = doc.createElement('div'); w.className = 'tl-wrap'; w.innerHTML = '<div class="tl-title">සඳ කලා කාල රේඛාව</div><div class="tl-strip" id="tlStrip"></div>';
    c.parentNode.insertBefore(w, c.nextSibling); box = $('tlStrip');
    box.addEventListener('click', function (e) { var b = e.target.closest('.tl-i'); if (!b) return; var i = $('sunDateInput'); i.value = b.dataset.k; i.dispatchEvent(new Event('change')); }); }
  tlKey = k; box.innerHTML = '';
  for (var n = -14; n <= 15; n++) { var kk = addK(k, n), m = dayMark(kk), b = doc.createElement('button');
    b.className = 'tl-i' + (n ? '' : ' on') + (m ? ' m' + m : ''); b.dataset.k = kk;
    b.innerHTML = '<canvas data-s="52" style="width:52px;height:52px"></canvas><b>' + (+kk.slice(8)) + '</b>'; box.appendChild(b); paint(b.firstChild, sdate(kk), 0); }
  var on = box.querySelector('.on'); if (on) box.scrollLeft = on.offsetLeft - box.clientWidth / 2 + on.offsetWidth / 2;
}

/* ---------- background / hero scene (one shared renderer) ---------- */
function gm(c, o, m, r) { return new T.MeshStandardMaterial({ color: c, metalness: m, roughness: r, transparent: true, opacity: o, side: T.DoubleSide }); }
function lathe(p, mat) { return new T.Mesh(new T.LatheGeometry(p.map(function (a) { return new T.Vector2(a[0], a[1]); }), 36), mat); }
function dagoba(mat) { // unit height 1; stupa + pillars
  var g = new T.Group(), p = [[0, 0], [1.45, 0], [1.45, .04], [1.2, .04], [1.2, .08], [1, .08], [1, .12], [.9, .12]];
  for (var i = 1; i <= 9; i++) { var a = i / 9 * Math.PI / 2; p.push([.9 * Math.cos(a), .12 + .55 * Math.sin(a)]); }
  p.push([.17, .67], [.17, .75], [.22, .75], [.22, .79], [.12, .79], [.1, .86], [.08, .95], [.06, 1.05], [.02, 1.14], [0, 1.2]);
  g.add(lathe(p, mat));
  for (var s = -1; s <= 1; s += 2) for (var j = 0; j < 3; j++) { var ph = .45 - j * .08, x = s * (1.75 + j * .45);
    var c = new T.Mesh(new T.CylinderGeometry(.04, .045, ph, 8), mat); c.position.set(x, ph / 2, 0); g.add(c);
    var k = new T.Mesh(new T.BoxGeometry(.14, .05, .14), mat); k.position.set(x, ph + .025, 0); g.add(k); }
  return g;
}
function lotus(mat, padMat) { // returns {g, tl:[{n,b,p}]}
  var g = new T.Group(), tl = [], pg = new T.SphereGeometry(1, 10, 8);
  [[8, 1.15, .95, 0], [6, .8, .8, .3], [5, .35, .62, .6]].forEach(function (R) { for (var i = 0; i < R[0]; i++) {
    var pv = new T.Group(), t = new T.Group(), m = new T.Mesh(pg, mat); pv.rotation.y = i / R[0] * Math.PI * 2 + R[3];
    m.scale.set(.24, .8 * R[2], .07); m.position.y = .8 * R[2]; t.add(m); t.rotation.x = R[1]; pv.add(t); g.add(pv); tl.push({ o: t, b: R[1], p: i * .7 + R[3] }); } });
  var pad = new T.Mesh(new T.CylinderGeometry(1.6, 1.6, .04, 24), padMat); pad.position.y = -.05; g.add(pad);
  g.rotation.x = .45; return { g: g, tl: tl };
}
var VSH = 'varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
function addMat(f, tr) { return new T.ShaderMaterial({ transparent: true, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide, uniforms: tr || U, vertexShader: VSH, fragmentShader: f }); }
function lights(sc, a) { var A = new T.AmbientLight(0xffffff, a); sc.add(A); var d = new T.DirectionalLight(0xffe7a8, .9); d.position.set(-200, 300, 400); sc.add(d); return { a: A, d: d }; }

function buildMain() {
  var sc = new T.Scene(), o = {}; lights(sc, .8);
  var gold = gm(0xe6b944, .08, .3, .6), pink = gm(0xf6c6d8, .17, .1, .7), pad = gm(0x4f9a6a, .07, .1, .8);
  o.dg = dagoba(gold); o.dg.position.z = -100; sc.add(o.dg);
  o.l1 = lotus(pink, pad); o.l2 = lotus(pink, pad); sc.add(o.l1.g, o.l2.g);
  o.ss = new T.Mesh(new T.PlaneGeometry(110, 2), addMat('uniform float o;varying vec2 u;void main(){gl_FragColor=vec4(1.,.97,.9,u.x*u.x*o*(1.-abs(u.y-.5)*2.));}', { o: { value: 0 } })); o.ss.visible = false; o.sl = 9; sc.add(o.ss);
  o.sc = sc; return o;
}
function buildStars(o) {
  if (o.st) { o.sc.remove(o.st); o.st.geometry.dispose(); }
  var w = bg.w, h = bg.h, R = Math.hypot(w, h) / 2, n = Math.min(low ? 500 : 1000, Math.round(w * h / 1300)), P = new Float32Array(n * 3), Z = new Float32Array(n), Ph = new Float32Array(n), C = new Float32Array(n * 3);
  var tint = [[1, 1, 1], [.8, .88, 1], [1, .92, .75]];
  for (var i = 0; i < n; i++) { P[i * 3] = (Math.random() * 2 - 1) * R; P[i * 3 + 1] = (Math.random() * 2 - 1) * R; Z[i] = .8 + Math.pow(Math.random(), 3) * 2.6; Ph[i] = Math.random();
    var t = tint[(Math.random() * 3) | 0]; C.set(t, i * 3); }
  var g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(P, 3)); g.setAttribute('sz', new T.BufferAttribute(Z, 1)); g.setAttribute('ph', new T.BufferAttribute(Ph, 1)); g.setAttribute('col', new T.BufferAttribute(C, 3));
  var m = new T.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { t: U.t, pr: { value: bg.r.getPixelRatio() } },
    vertexShader: 'attribute float sz;attribute float ph;attribute vec3 col;uniform float t;uniform float pr;varying vec3 c;varying float a;void main(){c=col;a=.55+.45*sin(t*(.8+ph*.5)+ph*40.);gl_PointSize=sz*pr*(.8+.2*a);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'varying vec3 c;varying float a;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(c,a*smoothstep(.5,.0,d));}' });
  o.st = new T.Points(g, m); o.st.position.set(w / 2, h / 2, -300); o.sc.add(o.st);
}
function buildHero() {
  var sc = new T.Scene(), o = {}; o.ls = lights(sc, .7);
  var brass = gm(0xd9a53a, 1, .65, .35), gold = gm(0xe6b944, .42, .7, .38), pink = gm(0xf6c6d8, .55, .1, .7), pad = gm(0x4f9a6a, .4, .1, .8), dg = gm(0xf2d478, .2, .3, .6);
  o.lamp = new T.Group(); o.lamp.add(lathe([[0, 0], [17, 0], [19, 3], [11, 7], [6, 14], [5, 22], [9, 29], [19, 33], [29, 40], [31, 47], [27, 50], [22, 48], [0, 46]], brass));
  var wick = new T.Mesh(new T.CylinderGeometry(1, 1.2, 8, 8), gm(0x2a1a0a, 1, 0, 1)); wick.position.y = 50; o.lamp.add(wick);
  o.flame = new T.Mesh(new T.PlaneGeometry(18, 34), addMat('uniform float t;varying vec2 u;void main(){vec2 p=vec2((u.x-.5)*2.,u.y);float w=mix(.6,.0,pow(p.y,.9));float n=sin(t*9.+p.y*7.)*.07*p.y+sin(t*5.3+p.y*3.)*.05*p.y;float d=abs(p.x-n)/max(w,.001);float a=smoothstep(1.,.3,d)*(1.-smoothstep(.75,1.,p.y));vec3 c=mix(vec3(1.,.5,.08),vec3(1.,.95,.7),smoothstep(.8,0.,d)*(1.-p.y));gl_FragColor=vec4(c,a);}'));
  o.flame.position.y = 71; o.lamp.add(o.flame);
  o.glow = new T.Mesh(new T.PlaneGeometry(170, 170), addMat('uniform float t;varying vec2 u;void main(){float d=length(u-.5)*2.;gl_FragColor=vec4(1.,.72,.3,pow(max(1.-d,0.),2.8)*.3);}')); o.glow.position.set(0, 70, -20); o.lamp.add(o.glow);
  o.lt = new T.PointLight(0xffc35a, 1.6, 700, 1); o.lt.position.set(0, 66, 60); o.lamp.add(o.lt);
  o.lamp.scale.setScalar(.5); sc.add(o.lamp);
  o.wh = new T.Group(); o.wp = new T.Group(); o.wh.add(o.wp); var R = 100, wm = gm(0xd49a42, .8, .65, .32), dk = gm(0x7a4e18, .8, .6, .5);
  function tor(r, t, m) { o.wp.add(new T.Mesh(new T.TorusGeometry(r, t, 10, 72), m)); }
  function bead(a, r, z, q) { var b = new T.Mesh(new T.SphereGeometry(R * q, 8, 6), wm); b.position.set(Math.cos(a) * R * r, Math.sin(a) * R * r, R * z); o.wp.add(b); }
  tor(R, R * .05, wm); tor(R * .915, R * .018, wm); tor(R * 1.085, R * .016, wm);
  var band = new T.Mesh(new T.RingGeometry(R * .93, R * 1.07, 72), dk); band.position.z = R * .02; o.wp.add(band);
  for (var j = 0; j < 32; j++) bead(j * Math.PI / 16, 1, .045, .022);
  var sp = [[.012, .19], [.03, .205], [.02, .24], [.012, .29], [.012, .4], [.032, .43], [.05, .48], [.058, .54], [.05, .6], [.032, .65], [.012, .69], [.012, .8], [.03, .83], [.045, .87], [.05, .92], [.03, .95], [.012, .955]];
  var spg = new T.LatheGeometry(sp.map(function (a) { return new T.Vector2(a[0] * R, a[1] * R); }), 10);
  for (var i = 0; i < 16; i++) { var g = new T.Group(); g.rotation.z = i * Math.PI / 8; g.add(new T.Mesh(spg, wm)); o.wp.add(g); } // 16 ornate spokes
  tor(R * .2, R * .03, wm); tor(R * .125, R * .022, wm); tor(R * .075, R * .02, dk);
  var hd = new T.Mesh(new T.RingGeometry(R * .075, R * .2, 40), dk); hd.position.z = R * .01; o.wp.add(hd);
  for (var j = 0; j < 12; j++) bead(j * Math.PI / 6, .245, .02, .024);
  o.wh.position.z = -70; sc.add(o.wh);
  o.dg = dagoba(dg); o.dg.position.z = -90; sc.add(o.dg); o.l1 = lotus(pink, pad); sc.add(o.l1.g); o.sc = sc; return o;
}
function bgInit() {
  var r = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); r.setClearColor(0, 0); r.setPixelRatio(dpr(1.5));
  bg = { r: r, cv: r.domElement, cam: new T.OrthographicCamera(0, 1, 1, 0, -2000, 2000), w: 0, h: 0, t: 0, raf: 0, last: 0, mode: '', n: 0, cov: false };
  bg.cv.id = 'v3dBg'; S.m = buildMain(); S.h = buildHero(); doc.body.insertBefore(bg.cv, doc.body.firstChild);
}
function fit(force) {
  var w = bg.mode === 'h' && heroEl ? heroEl.clientWidth : W.innerWidth, h = bg.mode === 'h' && heroEl ? heroEl.clientHeight : W.innerHeight;
  if (!w || !h) return; if (!force && w === bg.w && h === bg.h) return; bg.w = w; bg.h = h;
  bg.r.setSize(w, h, false); var c = bg.cam; c.left = 0; c.right = w; c.top = h; c.bottom = 0; c.updateProjectionMatrix();
  var o = S[bg.mode]; if (!o) return;
  if (bg.mode === 'm') { var H = Math.min(h * .26, 220); o.dg.scale.setScalar(H); o.dg.position.set(w / 2, 0, -100);
    o.l1.g.scale.setScalar(Math.min(w * .09, 46)); o.l1.g.position.set(w * .14, 38, -50); o.l2.g.scale.setScalar(Math.min(w * .07, 36)); o.l2.g.position.set(w * .86, 30, -50);
    buildStars(o);
  } else { var lampEl = heroEl.querySelector('.ch-lamp'), hr = heroEl.getBoundingClientRect(), lr = lampEl ? lampEl.getBoundingClientRect() : { left: hr.left + w / 2, width: 0, bottom: hr.top + 80 };
    var lx = lr.left + lr.width / 2 - hr.left, ly = h - (lr.bottom - hr.top);
    o.lamp.position.set(lx, ly, 0); var Rr = Math.min(82, w * .27) / 100; o.wh.scale.setScalar(Rr); o.wh.position.set(lx, ly + 26, -70);
    o.lt.position.set(0, 66, 60); o.dg.scale.setScalar(Math.min(h * .55, 90)); o.dg.position.set(w * .86, 0, -90);
    o.l1.g.scale.setScalar(Math.min(w * .06, 24)); o.l1.g.position.set(w * .12, 22, -40); }
}
function frame(dt) {
  var o = S[bg.mode], t = bg.t += dt; U.t.value = t; if (!o) return;
  if (bg.mode === 'm') {
    if (++bg.n % 20 === 0) { var m = $('sunModal'), a = $('spOverlay'), u = $('upOverlay'); bg.cov = !!((m && m.style.display === 'flex') || (a && a.style.display === 'block') || (u && u.style.display === 'block')); } if (bg.cov) return;
    if (o.st) o.st.rotation.z = t * .003;
    [o.l1, o.l2].forEach(function (L, j) { L.g.position.y += Math.sin(t * .8 + j) * .03; L.tl.forEach(function (p) { p.o.rotation.x = p.b + Math.sin(t * .5 + p.p) * .07; }); });
    o.sl += dt; var u = o.ss.material.uniforms.o;
    if (o.sl > 9 + (bg.n % 7)) { o.sl = 0; o.ss.rotation.z = -.5; o.ss.position.set(Math.random() * bg.w * .8, bg.h * (.55 + Math.random() * .4), -250); o.ss.visible = !low; }
    if (o.ss.visible) { var q = o.sl / .9; if (q > 1) { o.ss.visible = false; u.value = 0; } else { u.value = Math.sin(q * Math.PI); o.ss.position.x += dt * 470; o.ss.position.y -= dt * 250; } }
  } else {
    o.wp.rotation.z -= dt * .16; o.wh.rotation.y = Math.sin(t * .4) * .2; // slow clockwise spin
    var k = 1 + Math.sin(t * 13) * .06 + Math.sin(t * 7.3) * .05 + (Math.random() - .5) * .05; var dk = isDark(); o.ls.a.intensity = dk ? .1 : .7; o.ls.d.intensity = dk ? .08 : .9; o.lt.intensity = (dk ? 3.2 : 1.6) * k; o.flame.scale.set(1, k, 1); o.glow.scale.setScalar(.95 + (k - 1));
    o.l1.tl.forEach(function (p) { p.o.rotation.x = p.b + Math.sin(t * .5 + p.p) * .07; });
  }
  bg.r.render(o.sc, bg.cam);
}
function start() { if (bg.raf) return; bg.last = 0;
  (function L(ts) { bg.raf = requestAnimationFrame(L); if (ts - bg.last < 33) return; var dt = bg.last ? (ts - bg.last) / 1000 : .033; bg.last = ts; frame(Math.min(dt, .1)); })(0); }
function stop() { cancelAnimationFrame(bg.raf); bg.raf = 0; }
function sync() {
  if (!bg) return;   var want = hostMode === 'h' && heroEl ? 'h' : (isDark() ? 'm' : '');
  doc.body.classList.toggle('v3d-on', want === 'm');
  if (!want || doc.hidden) { stop(); bg.mode = want; bg.cv.style.display = want ? 'block' : 'none'; return; }
  if (want === 'm' && bg.cv.parentNode !== doc.body) doc.body.insertBefore(bg.cv, doc.body.firstChild);
  bg.mode = want; bg.cv.style.display = 'block'; fit(true);
  if (low && want === 'm') { stop(); frame(0.01); } else start(); // hero always animates (small canvas)
}

/* ---------- calculation page hero: Sun–Earth–Moon system (replaces the SVG, which stays as fallback) ---------- */
var SO = null;
function cvs(w, h, f) { var c = doc.createElement('canvas'); c.width = w; c.height = h; f(c.getContext('2d'), w, h); return new T.CanvasTexture(c); }
function spot(x, w, h, col, r) { var a = Math.random() * w, b = Math.random() * h, g = x.createRadialGradient(a, b, 0, a, b, r); g.addColorStop(0, col); g.addColorStop(1, col.replace(/[\d.]+\)$/, '0)')); x.fillStyle = g; x.beginPath(); x.arc(a, b, r, 0, 7); x.fill(); }
function sunTex() { return cvs(512, 512, function (x, w) {
  var g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); g.addColorStop(0, '#fff2c8'); g.addColorStop(.35, '#ffcc55'); g.addColorStop(.7, '#ff8833'); g.addColorStop(1, '#cc4400'); x.fillStyle = g; x.fillRect(0, 0, w, w);
  var im = x.getImageData(0, 0, w, w), d = im.data, i; for (i = 0; i < d.length; i += 4) { var n = (Math.random() - .5) * 60; d[i] += n; d[i + 1] += n * .55; d[i + 2] += n * .25; } x.putImageData(im, 0, 0);
  for (i = 0; i < 90; i++) spot(x, w, w, 'rgba(255,250,225,.55)', 6 + Math.random() * 26);
  for (i = 0; i < 160; i++) spot(x, w, w, 'rgba(120,40,0,.35)', 3 + Math.random() * 12); }); }
function earthTex() { return cvs(512, 256, function (x, w, h) {
  var g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#0a2a5c'); g.addColorStop(.5, '#1e5faa'); g.addColorStop(1, '#0a2a5c'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  for (var i = 0; i < 40; i++) { x.beginPath(); x.ellipse(Math.random() * w, h / 2 + (Math.random() - .5) * h * .75, 10 + Math.random() * 35, 6 + Math.random() * 20, Math.random() * 3, 0, 7); x.fillStyle = 'rgba(50,130,80,.9)'; x.fill(); }
  for (i = 0; i < 60; i++) spot(x, w, h, 'rgba(255,255,255,.18)', 4 + Math.random() * 15); }); }
function moonTex() { return cvs(512, 256, function (x, w, h) {
  x.fillStyle = '#c8c0b0'; x.fillRect(0, 0, w, h);
  for (var i = 0; i < 12; i++) { x.beginPath(); x.ellipse(Math.random() * w, Math.random() * h, 15 + Math.random() * 40, 10 + Math.random() * 25, Math.random() * 3, 0, 7); x.fillStyle = 'rgba(90,88,84,.5)'; x.fill(); }
  for (i = 0; i < 140; i++) spot(x, w, h, 'rgba(80,78,74,.4)', 1.5 + Math.random() * 6); }); }
function solar(on, ov) {
  if (SO) { cancelAnimationFrame(SO.raf); if (SO.io) SO.io.disconnect(); if (SO.ro) SO.ro.disconnect(); SO.r.dispose(); try { SO.r.forceContextLoss(); } catch (e) {}
    if (SO.el.parentNode) SO.el.parentNode.removeChild(SO.el); if (SO.svg) SO.svg.style.display = ''; SO = null; }
  if (!on || !ov || !T) return;
  var svg = ov.querySelector('svg.hero-orbit'), r; if (!svg) return;
  try { r = new T.WebGLRenderer({ antialias: true, powerPreference: 'low-power' }); } catch (e) { return; }
  var el = doc.createElement('div'); el.className = 'hero-orbit hero-3d'; el.setAttribute('aria-hidden', 'true'); svg.parentNode.insertBefore(el, svg); svg.style.display = 'none';
  r.setPixelRatio(dpr(1.5)); r.setClearColor(0x030108); el.appendChild(r.domElement);
  var sc = new T.Scene(), cam = new T.PerspectiveCamera(45, 2, .5, 2000), OR = 48, i;
  sc.add(new T.AmbientLight(0x101020, .6));
  var sun = new T.Mesh(new T.SphereGeometry(14, 48, 32), new T.MeshBasicMaterial({ map: sunTex() })); sc.add(sun);
  var gl = new T.Sprite(new T.SpriteMaterial({ map: cvs(128, 128, function (x, w) { var g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, 'rgba(255,220,130,.95)'); g.addColorStop(.2, 'rgba(255,170,60,.55)'); g.addColorStop(.5, 'rgba(255,120,20,.18)'); g.addColorStop(1, 'rgba(255,100,20,0)'); x.fillStyle = g; x.fillRect(0, 0, w, w); }), blending: T.AdditiveBlending, transparent: true, depthWrite: false }));
  gl.scale.set(78, 78, 1); sun.add(gl); sc.add(new T.PointLight(0xfff2c8, 2.2, 1000, 1.1));
  var pv = new T.Object3D(), eg = new T.Group(), tilt = new T.Group(), earth = new T.Mesh(new T.SphereGeometry(7, 40, 32), new T.MeshStandardMaterial({ map: earthTex(), roughness: .9, metalness: .05 }));
  sc.add(pv); pv.add(eg); eg.position.x = OR; tilt.rotation.z = .41; tilt.add(earth); eg.add(tilt);
  eg.add(new T.Mesh(new T.SphereGeometry(7.9, 28, 20), new T.MeshBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: .18, side: T.BackSide })));
  var mp = new T.Object3D(), moon = new T.Mesh(new T.SphereGeometry(2.2, 28, 20), new T.MeshStandardMaterial({ map: moonTex(), roughness: 1, metalness: 0 })); moon.position.x = 13.5; mp.add(moon); eg.add(mp);
  function ring(a, b, col, o, p) { var m = new T.Mesh(new T.RingGeometry(a, b, 96), new T.MeshBasicMaterial({ color: col, side: T.DoubleSide, transparent: true, opacity: o })); m.rotation.x = Math.PI / 2; p.add(m); }
  ring(OR - .25, OR + .25, 0xffd966, .28, sc); ring(13.3, 13.7, 0xffffff, .18, eg);
  var n = 900, P = new Float32Array(n * 3);
  for (i = 0; i < n; i++) { var u = Math.random() * 2 - 1, a = Math.random() * 6.283, q = Math.sqrt(1 - u * u), R = 600 + Math.random() * 300; P[i * 3] = R * q * Math.cos(a); P[i * 3 + 1] = R * u; P[i * 3 + 2] = R * q * Math.sin(a); }
  var sg = new T.BufferGeometry(); sg.setAttribute('position', new T.BufferAttribute(P, 3)); sc.add(new T.Points(sg, new T.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: false })));
  SO = { r: r, el: el, svg: svg, raf: 0, vis: true, last: 0, t: 0, dd: 100 };
  function fit() { var w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); SO.dd = Math.max(88, 70 / (Math.tan(22.5 * D) * cam.aspect)); }
  if (W.ResizeObserver) { SO.ro = new ResizeObserver(fit); SO.ro.observe(el); }
  if (W.IntersectionObserver) { SO.io = new IntersectionObserver(function (e) { SO.vis = e[0].isIntersecting; }); SO.io.observe(el); }
  fit();
  (function L(ts) { SO.raf = requestAnimationFrame(L); if (!SO.vis || doc.hidden || ts - SO.last < 33) return;
    var dt = SO.last ? Math.min((ts - SO.last) / 1000, .1) : .033; SO.last = ts; var t = SO.t += dt;
    sun.rotation.y += dt * .09; pv.rotation.y += dt * .18; eg.rotation.y = -pv.rotation.y; // Earth orbits the Sun; axial tilt keeps its direction in space
    earth.rotation.y += dt * .5; mp.rotation.y += dt * .9;                                  // Earth spin; Moon orbits Earth (phases come from the Sun's light)
    cam.position.set(Math.sin(t * .12) * 12, SO.dd * .42, SO.dd * .9); cam.lookAt(0, -1, 0); r.render(sc, cam); })(0);
}
W.V3D = { solar: solar, tex: function (n) { if (!T) return null; return n === 's' ? sunTex() : n === 'e' ? earthTex() : moonTex(); },
  paintMoon: function (cv, d, t) { if (!mr) return false; paint(cv, d, t || 0); return true; }, chanting: function (on, ov) {
  if (!bg) return;
  if (on && ov) { heroEl = ov.querySelector('.ch-hero'); if (!heroEl) return; hostMode = 'h'; heroEl.classList.add('v3d'); heroEl.insertBefore(bg.cv, heroEl.firstChild); }
  else { hostMode = ''; if (heroEl) heroEl.classList.remove('v3d'); heroEl = null; doc.body.insertBefore(bg.cv, doc.body.firstChild); }
  sync(); } };
})();
