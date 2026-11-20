#!/usr/bin/env python3
# =====================================================================
#  theme.css සාදන වැඩසටහන  —  python3 .github/scripts/theme-gen.py
#  ---------------------------------------------------------------------
#  එක් එක් තේමාවේ මූලික වර්ණ කිහිපය (SPEC) පමණක් වෙනස් කර මෙය ධාවනය කරන්න;
#  අනෙක් සියලු වර්ණ (ලා / තද ස්වර, රාමු, පෙළ, පිටු මොඩියුල විචල්‍ය) ස්වයංක්‍රීයව ගණනය වේ.
#  ප්‍රතිදානය: theme.css (repo මුලේ). පිටු රීති (RULES) මෙම ගොනුවේ පහළින් ඇත.
# =====================================================================
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def h2r(h):
    h = h.lstrip('#'); return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))
def r2h(c):
    return '#' + ''.join('%02x' % max(0, min(255, round(v))) for v in c)
def mix(a, b, t):          # a → b, t = 0..1
    A, B = h2r(a), h2r(b); return r2h(tuple(A[i] + (B[i] - A[i]) * t for i in range(3)))
def rgba(h, a):
    r, g, b = h2r(h); return 'rgba(%d,%d,%d,%s)' % (r, g, b, ('%.2f' % a).rstrip('0').rstrip('.'))
W, K = '#ffffff', '#000000'
def lum(h):
    def ch(v):
        v /= 255; return v / 12.92 if v <= .03928 else ((v + .055) / 1.055) ** 2.4
    r, g, b = h2r(h); return .2126 * ch(r) + .7152 * ch(g) + .0722 * ch(b)

def scale(base):
    s = {50: mix(W, base, .07), 100: mix(W, base, .14), 200: mix(W, base, .28), 300: mix(W, base, .46),
         400: mix(W, base, .72), 500: base}
    for k, t in ((600, .14), (700, .30), (800, .46), (900, .60), (950, .74)):
        s[k] = mix(base, K, t)
    return s

GOLD = {50: '#fffaeb', 100: '#fdf5db', 200: '#f9e9b8', 300: '#f2d478', 400: '#e6b944', 500: '#d4a017',
        600: '#b8860b', 700: '#8a6508', 800: '#6b4e06', 900: '#4a3604', 950: '#2e2102'}
CREAM = {50: '#fbf3df', 100: '#f6e8c6', 200: '#efd9a4', 300: '#e3c27c', 400: '#d4a54a', 500: '#c08a28',
         600: '#a8741c', 700: '#8a5a14', 800: '#6b4410', 900: '#4e300a', 950: '#3a2306'}

# kind: light (ලා) | deep (තද වර්ණ රාමුව, ලා අන්තර්ගතය) | dark (අඳුරු)
SPEC = {
    'cream':     dict(kind='light', bg='#fbf4e4', ac='#c08a28', sc=CREAM, hl='gold', orig=True),
    'yellow':    dict(kind='light', bg='#fffbe6', ac='#b39012', hl='gold'),
    'lightblue': dict(kind='light', bg='#eef5fd', ac='#3a7fc4'),
    'mint':      dict(kind='light', bg='#eefaf4', ac='#22a06b'),
    'lavender':  dict(kind='light', bg='#f5f2fc', ac='#7b5cc0'),
    'forest':    dict(kind='deep',  bg='#f1f6f1', ac='#2f7d50', deep='#1f5a3a', hl='gold'),
    'saffron':   dict(kind='deep',  bg='#fdf4eb', ac='#c0601a', deep='#a14d12', hl='gold'),
    'lotus':     dict(kind='deep',  bg='#fcf0f3', ac='#b02a4c', deep='#86183a', hl='gold'),
    # දීප්ත පැහැ: chrome = ඔබ දුන් වර්ණයම ; ac = පිටුව තුළ පෙළ / රාමු සඳහා එම වර්ණයේ තද ස්වරය
    'rose':      dict(kind='bright', bg='#fff1f5', ac='#d6004f', chrome='#ff005f'),
    'teal':      dict(kind='bright', bg='#ecfaf8', ac='#00897b', chrome='#00c2ae'),
    'olive':     dict(kind='bright', bg='#fbfaea', ac='#8a840c', chrome='#b2ac11'),
    'coral':     dict(kind='bright', bg='#fff5f4', ac='#d0574e', chrome='#ffafa8'),
    'seafoam':   dict(kind='bright', bg='#f0fbf6', ac='#2e9a72', chrome='#b0ebd2'),
    'dark':      dict(kind='dark',  bg='#040a07', mid='#08160f', top='#133528', card='#0c1f17', ac='#5fd3a0', hl='mint',
                      tx='#e3f5ec', mu='#8fb5a3'),
    'midnight':  dict(kind='dark',  bg='#04061a', mid='#0b1030', top='#1b2554', card='#131a3a', ac='#f2d478', hl='gold',
                      tx='#e8ecf8', mu='#aab3d6', orig=True),
}

GOLD_METAL = 'linear-gradient(180deg,#fff3c2 0%,#e8bd55 34%,#b07c16 62%,#e9c768 100%)'

def light_vars(id, p):
    bg = p['bg']; s = p.get('sc') or scale(p['ac']); hl = GOLD if p.get('hl') == 'gold' else s
    deep = p['kind'] == 'deep'
    v = {}
    for k in s: v['--s%d' % k] = s[k]
    for k in hl: v['--h%d' % k] = hl[k]
    card = mix(W, bg, .25); card2 = mix(bg, s[200], .38)
    v.update({
        '--t-bg': bg, '--t-card': card, '--t-card2': card2, '--t-elev': mix(W, bg, .55),
        '--t-subtle': mix(bg, s[100], .6), '--t-tint': mix(bg, s[200], .5), '--t-pali': mix(bg, s[100], .75),
        '--t-tx': mix(s[950], K, .45), '--t-tx2': mix(s[900], K, .12), '--t-mu': mix(s[700], '#777777', .45),
        '--t-bd': mix(bg, s[300], .55), '--t-bd2': s[300], '--t-ac': s[700], '--t-ac2': s[800], '--t-acs': rgba(s[500], .14),
        '--t-sh': rgba(s[800], .2), '--t-sh2': rgba(s[800], .13), '--t-hl': '#ffffff',
        '--t-page-wash': rgba(bg, .9), '--t-tintc': s[500], '--t-blend': 'color',
        '--t-scrim': rgba(s[950], .45),
        # ලා තේමාවල ශීර්ෂ (hero)
        '--t-hero-wash': 'linear-gradient(180deg,%s,%s)' % (rgba(mix(W, bg, .5), .62), rgba(s[100], .46)),
        '--t-hero-tx': s[900], '--t-hero-lb': s[800], '--t-hero-bd': rgba(s[600], .45),
        '--t-hero-in': rgba(mix(W, bg, .5), .5), '--t-hero-ring': rgba(s[500], .35), '--t-hero-hl': 'rgba(255,255,255,.8)',
        '--t-metal': 'linear-gradient(180deg,%s 0%%,%s 34%%,%s 62%%,%s 100%%)' % (mix(W, s[100], .6), s[400], s[700], s[300]),
        '--t-metal-f': 'drop-shadow(0 -1px 0 rgba(255,255,255,.95)) drop-shadow(0 1.5px 0 %s) drop-shadow(0 4px 5px %s)' % (s[800], rgba(s[900], .3)),
        '--t-ln1': s[600], '--t-ln2': s[100], '--t-frame': 'linear-gradient(180deg,%s,%s 50%%,%s)' % (s[400], s[700], s[400]),
        '--t-panel': 'linear-gradient(150deg,%s 0%%,%s 45%%,%s 75%%,%s 100%%)' % (s[100], s[300], s[500], s[200]),
        '--t-panel-bd': s[700], '--t-panel-tx': mix(s[950], K, .3),
        '--t-panel-ts': '0 1px 0 rgba(255,255,255,.85),0 -1px 0 %s' % rgba(s[950], .4),
        '--t-nav': 'linear-gradient(180deg,%s,%s)' % (rgba(card, .93), rgba(mix(bg, s[100], .7), .95)),
        '--t-nav-ic': s[700], '--t-nav-on-bg': 'linear-gradient(180deg,%s,%s)' % (s[100], s[300]), '--t-nav-on-tx': mix(s[950], K, .3),
        '--t-in-bg': 'linear-gradient(180deg,%s,%s)' % (mix(W, bg, .6), s[100]), '--t-in-bd': s[500], '--t-in-tx': mix(s[950], K, .4),
        '--t-moon-ring': s[400], '--t-poya-ol': mix(s[950], K, .3),
        '--t-btn': 'linear-gradient(180deg,%s,%s 52%%,%s)' % (s[200], s[400], s[600]), '--t-btn-tx': mix(s[950], K, .3), '--t-btn-bd': s[700],
        '--t-drum': 'linear-gradient(180deg,%s 0%%,%s 20%%,%s 50%%,%s 80%%,%s 100%%)' % (s[300], s[100], mix(W, bg, .5), s[100], s[300]),
        '--t-drum-tx': s[400], '--t-drum-on': mix(s[950], K, .3),
        '--t-sw-on': s[600], '--t-panel-lb': mix(s[950], K, .45),
        '--t-chip-bg': 'rgba(255,255,255,.55)', '--t-chip-tx': s[900], '--t-chip-bd': rgba(s[600], .45),
        '--t-dl': 'linear-gradient(135deg,%s,%s)' % (s[700], s[900]), '--t-dl-tx': '#ffffff',
        # අතික්කන්ත / අවසිට්ඨ පුවරු — පිටුවේ පසුබිමට වඩා මදක් තද වර්ණයක්
        '--t-side': 'linear-gradient(180deg,%s,%s)' % (mix(bg, s[200], .5), mix(bg, s[300], .55)), '--t-side-bd': s[400],
    })
    if deep:
        d1 = p['deep']; d2 = mix(d1, K, .38)
        v.update({
            '--t-d1': d1, '--t-d2': d2,
            '--t-hero-wash': 'linear-gradient(180deg,%s,%s)' % (rgba(d1, .82), rgba(d2, .9)),
            '--t-tintc': d1, '--t-hero-tx': '#fff6dc', '--t-hero-lb': '#f3d98e', '--t-hero-bd': rgba(d2, .6),
            '--t-hero-in': rgba(d2, .35), '--t-hero-ring': 'rgba(242,212,120,.45)', '--t-hero-hl': 'rgba(255,255,255,.18)',
            '--t-metal': GOLD_METAL,
            '--t-metal-f': 'drop-shadow(0 1px 0 rgba(0,0,0,.55)) drop-shadow(0 0 9px rgba(255,205,110,.35))',
            '--t-ln1': '#c9a03a', '--t-ln2': '#ffe9a0', '--t-frame': 'linear-gradient(180deg,#f2d478,#b4801c 50%,#f2d478)',
            '--t-panel': 'linear-gradient(150deg,%s 0%%,%s 50%%,%s 100%%)' % (mix(d1, W, .14), d1, d2),
            '--t-panel-bd': '#c9a03a', '--t-panel-tx': '#ffe9a8', '--t-panel-ts': '0 1px 2px rgba(0,0,0,.55)',
            '--t-nav': 'linear-gradient(180deg,%s,%s)' % (rgba(d1, .97), rgba(d2, .98)),
            '--t-nav-ic': 'rgba(255,244,214,.82)', '--t-nav-on-bg': 'rgba(255,233,168,.18)', '--t-nav-on-tx': '#ffe9a8',
            '--t-in-bg': 'rgba(255,255,255,.12)', '--t-in-bd': 'rgba(255,233,168,.55)', '--t-in-tx': '#fff6dc',
            '--t-moon-ring': '#e2b34a', '--t-poya-ol': mix(d2, K, .3),
            '--t-btn': 'linear-gradient(180deg,%s,%s 55%%,%s)' % (mix(d1, W, .18), d1, d2), '--t-btn-tx': '#fff6dc', '--t-btn-bd': d2,
            '--t-sw-on': d1, '--t-panel-lb': '#fff4d6',
            '--t-chip-bg': 'rgba(255,255,255,.12)', '--t-chip-tx': '#fff6dc', '--t-chip-bd': 'rgba(255,233,168,.4)',
            '--t-dl': 'var(--t-btn)', '--t-dl-tx': '#fff6dc',
        })
    if p['kind'] == 'bright':
        c = p['chrome']; c2 = mix(c, K, .12); cl = mix(c, W, .18); cd = mix(c, K, .3)
        white = lum(c) < .3
        on = '#ffffff' if white else mix(s[950], K, .35)
        onr = (lambda a: rgba(on, a))
        v.update({
            '--t-d1': c, '--t-d2': c2,
            '--t-hero-wash': 'linear-gradient(180deg,%s,%s)' % (rgba(cl, .84), rgba(c2, .9)),
            '--t-tintc': c, '--t-hero-tx': on, '--t-hero-lb': onr(.88), '--t-hero-bd': rgba(cd, .5),
            '--t-hero-in': 'rgba(255,255,255,%s)' % ('.18' if white else '.42'), '--t-hero-ring': onr(.3), '--t-hero-hl': 'rgba(255,255,255,.35)',
            '--t-metal': ('linear-gradient(180deg,#ffffff 0%%,%s 45%%,%s 70%%,#ffffff 100%%)' % (mix(W, c, .1), mix(W, c, .22))) if white
                         else ('linear-gradient(180deg,%s 0%%,%s 55%%,%s 100%%)' % (s[700], mix(s[950], K, .2), s[800])),
            '--t-metal-f': ('drop-shadow(0 1px 0 %s) drop-shadow(0 2px 6px rgba(0,0,0,.25))' % rgba(mix(c, K, .55), .7)) if white
                           else 'drop-shadow(0 1px 0 rgba(255,255,255,.75)) drop-shadow(0 2px 4px rgba(0,0,0,.12))',
            '--t-ln1': onr(.5), '--t-ln2': on, '--t-frame': 'linear-gradient(180deg,%s,%s)' % (onr(.85), onr(.55)),
            '--t-panel': 'linear-gradient(150deg,%s 0%%,%s 50%%,%s 100%%)' % (cl, c, c2),
            '--t-panel-bd': cd, '--t-panel-tx': on, '--t-panel-lb': on,
            '--t-panel-ts': '0 1px 2px rgba(0,0,0,.35)' if white else '0 1px 0 rgba(255,255,255,.6)',
            '--t-nav': 'linear-gradient(180deg,%s,%s)' % (rgba(c, .97), rgba(c2, .98)),
            '--t-nav-ic': onr(.85), '--t-nav-on-bg': 'rgba(255,255,255,%s)' % ('.2' if white else '.45'), '--t-nav-on-tx': on,
            '--t-in-bg': 'rgba(255,255,255,%s)' % ('.18' if white else '.5'), '--t-in-bd': onr(.5), '--t-in-tx': on,
            '--t-moon-ring': '#ffffff' if white else cd, '--t-poya-ol': mix(c, K, .6),
            '--t-btn': 'linear-gradient(180deg,%s,%s 55%%,%s)' % (cl, c, c2), '--t-btn-tx': on, '--t-btn-bd': cd,
            '--t-sw-on': s[600],
            '--t-chip-bg': 'rgba(255,255,255,%s)' % ('.16' if white else '.45'), '--t-chip-tx': on, '--t-chip-bd': onr(.4),
            '--t-dl': 'var(--t-btn)', '--t-dl-tx': on,
        })
    if p.get('orig'):            # ක්‍රීම් = දැනට පවතින රන්වන් පෙනුම ම
        v.update({
            '--t-bg': '#fbf4e4', '--t-tintc': 'transparent', '--t-blend': 'normal',
            '--t-hero-wash': 'linear-gradient(180deg,rgba(255,248,230,.7),rgba(246,230,196,.5))',
            '--t-hero-tx': '#4a2d0a', '--t-hero-lb': '#7a5210', '--t-hero-bd': 'rgba(180,128,28,.45)',
            '--t-hero-in': 'rgba(255,248,228,.5)', '--t-hero-ring': 'rgba(190,140,40,.35)',
            '--t-metal': GOLD_METAL,
            '--t-metal-f': 'drop-shadow(0 -1px 0 rgba(255,250,225,.95)) drop-shadow(0 1.5px 0 #7a5210) drop-shadow(0 4px 5px rgba(90,55,10,.35))',
            '--t-ln1': '#b4801c', '--t-ln2': '#ffe9a0',
            '--t-panel': 'linear-gradient(150deg,#fff1bd 0%,#e4b94f 45%,#b88420 75%,#efd27a 100%)', '--t-panel-bd': '#9a6c12',
            '--t-panel-tx': '#3d2406', '--t-panel-ts': '0 1px 0 rgba(255,250,215,.9),0 -1px 0 rgba(60,35,5,.45)',
            '--t-nav': 'linear-gradient(180deg,rgba(255,250,236,.92),rgba(243,228,194,.94))', '--t-nav-ic': '#8a5a14',
            '--t-nav-on-bg': 'linear-gradient(180deg,#fff0b5,#e6bb55)', '--t-nav-on-tx': '#3d2406',
            '--t-in-bg': 'linear-gradient(180deg,#fffaf0,#f4e6c4)', '--t-in-bd': '#c8991f', '--t-in-tx': '#4a2d0a',
            '--t-moon-ring': '#e2b34a', '--t-poya-ol': '#3d2406',
            '--t-btn': 'linear-gradient(180deg,#f9e089,#dcab36 52%,#b9801a)', '--t-btn-tx': '#3d2406', '--t-btn-bd': '#9a6c12',
            '--t-drum': 'linear-gradient(180deg,#cdb67c 0%,#ecdcb2 20%,#fffbf0 50%,#ecdcb2 80%,#cdb67c 100%)',
            '--t-drum-tx': '#a38a5a', '--t-drum-on': '#3d2406', '--t-scrim': 'rgba(58,38,12,.45)',
            '--t-card': '#fffdf6', '--t-card2': '#f6ebd0', '--t-bd2': '#d7b160', '--t-tx': '#2b1b08', '--t-panel-lb': '#4a2d0a',
        })
    return v

def dark_vars(id, p):
    ac = p['ac']; s = scale(ac); bg, mid, top, card = p['bg'], p['mid'], p['top'], p['card']
    hl = GOLD if p.get('hl') == 'gold' else scale(ac)
    v = {}
    for k in s: v['--s%d' % k] = s[k]
    for k in hl: v['--h%d' % k] = hl[k]
    acl = mix(ac, W, .35)
    v.update({
        '--t-bg': bg, '--t-mid': mid, '--t-top': top, '--t-card': card, '--t-card2': mix(card, top, .35),
        '--t-cardA': rgba(card, .72), '--t-cardB': rgba(card, .9), '--t-elev': mix(card, W, .04), '--t-subtle': mix(card, ac, .1), '--t-tint': mix(card, ac, .12),
        '--t-pali': mix(card, ac, .08),
        '--t-tx': p['tx'], '--t-tx2': mix(p['tx'], p['mu'], .5), '--t-mu': p['mu'],
        '--t-bd': rgba(ac, .26), '--t-bd2': rgba(ac, .45), '--t-bds': mix(card, ac, .28), '--t-bds2': mix(card, ac, .42),
        '--t-ac': ac, '--t-ac2': acl, '--t-acs': rgba(ac, .16),
        '--t-sh': 'rgba(0,0,0,.5)', '--t-sh2': 'rgba(0,0,0,.35)', '--t-panel-lb': p['tx'],
        '--t-dbg': 'linear-gradient(-45deg,%s,%s,%s,%s)' % (bg, mid, mix(mid, top, .5), bg),
        '--t-rbg': 'radial-gradient(ellipse at 50%% 0%%,%s 0%%,%s 45%%,%s 100%%)' % (top, mid, bg),
        '--t-hero-wash': 'linear-gradient(%s,%s)' % (rgba(mid, .88), rgba(mix(mid, bg, .3), .95)),
        '--t-tintc': 'transparent', '--t-blend': 'normal',
        '--t-hero-tx': mix(ac, W, .65), '--t-hero-lb': ac, '--t-hero-bd': rgba(ac, .4),
        '--t-hero-in': rgba(bg, .5), '--t-hero-ring': rgba(ac, .3),
        '--t-dhero': 'linear-gradient(%s,%s)' % (rgba(mix(bg, K, .2), .62), rgba(mix(bg, K, .2), .62)),
        '--t-metal': GOLD_METAL if p.get('hl') == 'gold' else
            'linear-gradient(180deg,%s 0%%,%s 34%%,%s 62%%,%s 100%%)' % (mix(W, ac, .1), mix(ac, W, .45), mix(ac, K, .2), mix(ac, W, .6)),
        '--t-metal-f': 'drop-shadow(0 1px 0 %s) drop-shadow(0 0 10px %s)' % (mix(ac, K, .65), rgba(ac, .45)),
        '--t-ln1': mix(ac, K, .25), '--t-ln2': mix(ac, W, .5), '--t-frame': 'linear-gradient(180deg,%s,%s 50%%,%s)' % (acl, mix(ac, K, .25), acl),
        '--t-panel': 'linear-gradient(135deg,%s 0%%,%s 100%%)' % (mix(card, ac, .2), mix(bg, mid, .5)),
        '--t-panel-bd': ac, '--t-panel-tx': mix(ac, W, .25) if p.get('hl') != 'gold' else '#d4af37',
        '--t-panel-ts': '0 0 10px %s' % rgba(ac, .55),
        '--t-nav': 'linear-gradient(180deg,%s,%s)' % (rgba(mix(mid, top, .4), .92), rgba(bg, .95)),
        '--t-nav-ic': mix(ac, mid, .15), '--t-nav-on-bg': rgba(ac, .16), '--t-nav-on-tx': mix(ac, W, .4),
        '--t-in-bg': 'rgba(255,255,255,.07)', '--t-in-bd': rgba(ac, .4), '--t-in-tx': mix(ac, W, .3),
        '--t-moon-ring': ac, '--t-poya-ol': '#000000',
        '--t-btn': 'linear-gradient(180deg,%s,%s)' % (mix(ac, W, .1), mix(ac, K, .3)), '--t-btn-tx': mix(bg, K, .2), '--t-btn-bd': mix(ac, K, .4),
        '--t-drum': 'linear-gradient(180deg,%s 0%%,%s 25%%,%s 50%%,%s 75%%,%s 100%%)' % (mix(bg, K, .4), mix(mid, top, .4), mix(top, ac, .08), mix(mid, top, .4), mix(bg, K, .4)),
        '--t-drum-tx': p['mu'], '--t-drum-on': mix(ac, W, .3),
        '--t-scrim': 'rgba(0,0,0,.55)', '--t-sw-on': ac,
        # අතික්කන්ත / අවසිට්ඨ පුවරු — කාඩ්පතට වඩා මදක් ආලෝකමත්, තේමා වර්ණයේ සුළු ස්පර්ශයක් සහිතව
        '--t-side': 'linear-gradient(180deg,%s,%s)' % (mix(mix(card, top, .7), ac, .1), mix(mix(card, top, .45), ac, .05)), '--t-side-bd': rgba(ac, .5),
        # අඳුරු මොඩියුල: ඉදිරිපස (පෙළ) සඳහා ලා ස්වර (මුල් dark-mode රටාව අනුව)
        '--k500': mix(ac, W, .72), '--k600': mix(ac, W, .5), '--k700': mix(ac, W, .18), '--k800': mix(ac, W, .5), '--k900': mix(ac, W, .72),
        '--q700': hl[400] if hl is GOLD else mix(ac, W, .1), '--q600': hl[300] if hl is GOLD else mix(ac, W, .35),
        '--q500': hl[200] if hl is GOLD else mix(ac, W, .6), '--q400': hl[100] if hl is GOLD else mix(ac, W, .8),
    })
    if p.get('orig'):            # රාත්‍රී නිල් = දැනට පවතින අඳුරු පෙනුම ම
        v.update({
            '--t-dbg': 'linear-gradient(-45deg,#090a10,#101426,#1a0f29,#090a10)',
            '--t-hero-wash': 'linear-gradient(rgba(10,12,32,.88),rgba(14,16,40,.95))', '--t-hero-tx': '#f5e6bf', '--t-hero-lb': '#f2d478',
            '--t-hero-bd': 'rgba(242,212,120,.4)', '--t-hero-in': 'rgba(8,10,28,.5)', '--t-hero-ring': 'rgba(242,212,120,.3)',
            '--t-dhero': 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
            '--t-metal-f': 'drop-shadow(0 1px 0 #5a3a08) drop-shadow(0 0 10px rgba(255,200,90,.45))',
            '--t-panel': 'linear-gradient(135deg,#2a1b40 0%,#121e33 100%)', '--t-panel-bd': '#d4af37',
            '--t-panel-tx': '#d4af37', '--t-panel-ts': '0 0 10px rgba(0,229,255,.8)',
            '--t-nav': 'linear-gradient(180deg,rgba(18,20,46,.9),rgba(8,10,28,.94))', '--t-nav-ic': '#d9b55a',
            '--t-nav-on-bg': 'rgba(242,212,120,.16)', '--t-nav-on-tx': '#ffe28a',
            '--t-in-tx': '#00e5ff', '--t-btn': 'linear-gradient(180deg,#f2d478,#b8891c)', '--t-btn-tx': '#2a1a04',
            '--t-drum': 'linear-gradient(180deg,#04050c 0%,#141936 25%,#222a52 50%,#141936 75%,#04050c 100%)',
            '--t-drum-tx': '#9aa0c0', '--t-drum-on': '#ffe28a', '--t-card': '#131724',
        })
    return v

out = ['/* =====================================================================',
       '   theme.css — වර්ණ තේමා 15 (theme.js සමඟ). මෙම ගොනුව අතින් සංස්කරණය නොකරන්න:',
       '   .github/scripts/theme-gen.py හි SPEC වෙනස් කර  python3 .github/scripts/theme-gen.py  ධාවනය කරන්න.',
       '   style.css ට පසුව load වේ. සෑම පිටුවක්ම මෙහි විචල්‍ය (--t-*, --s*, --h*) වලින් වර්ණ ගනී.',
       '   ===================================================================== */']
for id, p in SPEC.items():
    v = dark_vars(id, p) if p['kind'] == 'dark' else light_vars(id, p)
    out.append('html[data-theme="%s"]{%s}' % (id, ';'.join('%s:%s' % kv for kv in v.items())))

RULES = open(os.path.join(os.path.dirname(__file__), 'theme-rules.css'), encoding='utf-8').read()
out.append(RULES)
open(os.path.join(ROOT, 'theme.css'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('theme.css written (%d themes)' % len(SPEC))
