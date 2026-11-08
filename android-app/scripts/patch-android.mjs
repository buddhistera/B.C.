// `npx cap add android` මගින් සාදන Android project එකට අපගේ සැකසුම් යොදයි:
//  • අයිකන / ආරම්භක තිරය (resources/res)   • ස්ථාන (GPS) අවසර   • versionCode / versionName
//  • GitHub Secrets හි keystore එක ඇත්නම් release signing
import { readFileSync, writeFileSync, cpSync, readdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(here, '..', 'android', 'app');
const resDir = join(appDir, 'src', 'main', 'res');
const must = (ok, msg) => { if (!ok) throw new Error('patch-android: ' + msg); };
must(existsSync(appDir), 'android/app not found — run `npx cap add android` first');

// 1) Capacitor ගේ පෙරනිමි splash.png සියල්ල ඉවත් කර, අපගේ අයිකන හා splash.xml යොදයි
for (const d of readdirSync(resDir)) {
  const f = join(resDir, d, 'splash.png');
  if (d.startsWith('drawable') && existsSync(f)) rmSync(f);
}
cpSync(resolve(here, '..', 'resources', 'res'), resDir, { recursive: true });

// 2) AndroidManifest: ස්ථාන අවසර (sunpage.js → navigator.geolocation)
const mf = join(appDir, 'src', 'main', 'AndroidManifest.xml');
let m = readFileSync(mf, 'utf8');
for (const p of ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION']) {
  if (!m.includes('android.permission.' + p)) m = m.replace(/(<application\b)/, `<uses-permission android:name="android.permission.${p}" />\n    $1`);
}
writeFileSync(mf, m);

// 3) app/build.gradle: අනුවාදය + signing
const gf = join(appDir, 'build.gradle');
let g = readFileSync(gf, 'utf8');
const run = parseInt(process.env.GITHUB_RUN_NUMBER || '0', 10);
const vCode = parseInt(process.env.VERSION_CODE || String(100 + run), 10);   // Play හි පැරණි TWA = 5; සෑම build එකකම වැඩි වේ
const vName = process.env.VERSION_NAME || `2.0.${run}`;
must(/versionCode\s*=?\s*\d+/.test(g), 'versionCode not found');
g = g.replace(/versionCode(\s*=?\s*)\d+/, `versionCode$1${vCode}`).replace(/versionName(\s*=?\s*)"[^"]*"/, `versionName$1"${vName}"`);
if (!g.includes('signingConfigs')) {
  must(/buildTypes\s*\{/.test(g), 'buildTypes not found');
  g = g.replace(/(\n\s*)buildTypes\s*\{/, `$1signingConfigs {
        release {
            if (System.getenv("KS_FILE")) {
                storeFile = file(System.getenv("KS_FILE"))
                storePassword = System.getenv("KS_PASS")
                keyAlias = System.getenv("KS_ALIAS")
                keyPassword = System.getenv("KS_KEY_PASS")
            }
        }
    }$1buildTypes {`);
  must(/buildTypes\s*\{\s*release\s*\{/.test(g), 'buildTypes.release not found');
  g = g.replace(/(buildTypes\s*\{\s*release\s*\{)/, `$1\n            if (System.getenv("KS_FILE")) { signingConfig = signingConfigs.release }`);
  // පරීක්ෂණ (debug) ඇප් එක Play Store ඇප් එක ඉවත් නොකර වෙනම install කළ හැකි වීමට: app.vercel.buddhist_era.twa.debug
  if (!/\bdebug\s*\{/.test(g)) g = g.replace(/(buildTypes\s*\{)/, `$1\n        debug {\n            applicationIdSuffix = ".debug"\n            versionNameSuffix = "-test"\n        }`);
}
writeFileSync(gf, g);

console.log(`patched: versionCode=${vCode} versionName=${vName}, signing=${process.env.KS_FILE ? 'release keystore' : 'none (debug build)'}`);
const vg = resolve(here, '..', 'android', 'variables.gradle');
if (existsSync(vg)) console.log(readFileSync(vg, 'utf8').split('\n').filter(l => /SdkVersion/.test(l)).join('\n'));
