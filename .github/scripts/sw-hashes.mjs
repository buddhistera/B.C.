// =====================================================================
//  sw.js ගොනු ලැයිස්තුවේ "අනුවාද අංක" ස්වයංක්‍රීයව යාවත්කාලීන කිරීම
//  ---------------------------------------------------------------------
//  එක් එක් ගොනුවේ අන්තර්ගතයෙන් hash එකක් (ඇඟිලි සලකුණක්) සාදා sw.js හි
//  CORE_FILES / OPTIONAL_FILES / LAZY_FILES තුළ දමයි.
//    • ගොනුවේ අන්තර්ගතය වෙනස් වූ විට පමණක් hash එක වෙනස් වේ
//      → update එකේදී බාගත වන්නේ ඇත්තටම වෙනස් වූ ගොනු පමණි.
//    • ලැයිස්තුවේ නැති අලුත් ගොනු ස්වයංක්‍රීයව එක් කරයි
//      (lang/ ගොනු → LAZY_FILES, අනෙක් ඒවා → OPTIONAL_FILES).
//    • repo එකෙන් ඉවත් කළ ගොනු ලැයිස්තුවෙන්ද ඉවත් කරයි.
//  ධාවනය: GitHub Actions (.github/workflows/sw-hashes.yml) — main වෙත push කරන සෑම විටම.
//  අතින්: node .github/scripts/sw-hashes.mjs
// =====================================================================
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const swPath = join(root, 'sw.js');

// වෙබ් අඩවියට අයත් නොවන / cache නොකළ යුතු දෑ
const SKIP = new Set(['.git', '.github', 'android-app', 'desktop-app', 'node_modules', '.well-known',
  'sw.js', 'README.md', 'CLAUDE.md', 'sitemap.xml', 'vercel.json', '.vercelignore', '.nojekyll', '.gitignore', 'build.log', 'app-version.json']);
if (existsSync(join(root, '.vercelignore'))) {
  for (const l of readFileSync(join(root, '.vercelignore'), 'utf8').split(/\r?\n/)) {
    const t = l.trim().replace(/^\/|\/$/g, '');
    if (t && !t.startsWith('#')) SKIP.add(t);
  }
}

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name) || name.startsWith('.')) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push('/' + relative(root, full).split(sep).join('/'));
  }
  return out;
}

const fileOf = (p) => join(root, p === '/' ? 'index.html' : p.slice(1));
const hashOf = (p) => createHash('sha256').update(readFileSync(fileOf(p))).digest('hex').slice(0, 10);

let sw = readFileSync(swPath, 'utf8');
const BLOCKS = ['CORE_FILES', 'OPTIONAL_FILES', 'LAZY_FILES'];
const ENTRY = /^(\s*)'([^']+)':\s*(?:'[^']*'|\d+)(,?)(\s*\/\/.*)?$/;

// දැනට ලැයිස්තුගත ගොනු
const listed = new Set();
for (const b of BLOCKS) {
  const m = sw.match(new RegExp('const ' + b + ' = \\{([\\s\\S]*?)\\n\\};'));
  if (!m) throw new Error('sw.js: ' + b + ' not found');
  for (const line of m[1].split('\n')) { const e = line.match(ENTRY); if (e) listed.add(e[2]); }
}

// අලුත් ගොනු
const all = walk(root, []).map((p) => (p === '/index.html' ? '/' : p));
const added = { OPTIONAL_FILES: [], LAZY_FILES: [] };
for (const p of all) {
  if (listed.has(p)) continue;
  (p.startsWith('/lang/') || p.startsWith('/fonts/') ? added.LAZY_FILES : added.OPTIONAL_FILES).push(p);   // අකුරු: තෝරාගත් අයට පමණක්
}

const removed = [], changed = [];
for (const b of BLOCKS) {
  sw = sw.replace(new RegExp('(const ' + b + ' = \\{)([\\s\\S]*?)(\\n\\};)'), (_, head, body, tail) => {
    const lines = [];
    for (const line of body.split('\n')) {
      const e = line.match(ENTRY);
      if (!e) { lines.push(line); continue; }
      const [, ind, p, , cmt] = e;
      if (!existsSync(fileOf(p))) { removed.push(p); continue; }   // repo එකේ නැති ගොනුව ඉවත් කරයි
      const v = hashOf(p);
      if (!line.includes("'" + v + "'")) changed.push(p);
      lines.push(ind + "'" + p + "': '" + v + "'," + (cmt || ''));
    }
    for (const p of added[b] || []) lines.push("  '" + p + "': '" + hashOf(p) + "',");
    // අවසාන පේළියේ කොමාව ඉවත් කරයි (JS සඳහා අවශ්‍ය නැතත් පිළිවෙළට)
    for (let i = lines.length - 1; i >= 0; i--) {
      if (ENTRY.test(lines[i])) { lines[i] = lines[i].replace(/',(\s*\/\/.*)?$/, "'$1"); break; }
    }
    return head + lines.join('\n') + tail;
  });
}

const before = readFileSync(swPath, 'utf8');
if (sw !== before) {
  writeFileSync(swPath, sw);
  console.log('sw.js updated.');
} else {
  console.log('sw.js already up to date.');
}
if (changed.length) console.log('Changed files:', changed.join(', '));
if (added.OPTIONAL_FILES.length || added.LAZY_FILES.length) console.log('Added:', [...added.OPTIONAL_FILES, ...added.LAZY_FILES].join(', '));
if (removed.length) console.log('Removed (no longer in repo):', removed.join(', '));
