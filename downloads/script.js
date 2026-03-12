/* ═══════════════════════════════════════════════════════════
   script.js — Ayush Gaming Downloads (Production v2)
   ─────────────────────────────────────────────────────────
   HOW TO ADD NEW POSTS:
   Just push a new object into the `posts` array below.
   Required fields: name, category, tags, versions, thumbnail, file
   ─────────────────────────────────────────────────────────
   categories: "clients" | "texturepacks" | "modpacks" | "others"
═══════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────
   1. POSTS DATA  ← Only edit this to add posts
──────────────────────────────────────────── */
const posts = [
  {
    id: 'feather-client',
    name: 'Cracked Feather Client',
    category: 'clients',
    tags: ['clients'],
    versions: [''],
    thumbnail: 'thumbnails/th1.jpg',
    fallback: { bg: 'linear-gradient(135deg,#c0621a,#f5a623)', glyph: 'S', color: '#ffe44d', size: '3rem', weight: '800' },
    file: 'downloads/feather-standalone-0.2.4.jar'
  },
  {
    id: 'lunar-client',
    name: 'Cracked Lunar Client',
    category: 'clients',
    tags: ['clients'],
    versions: [''],
    thumbnail: 'thumbnails/th2.jpg',
    fallback: { bg: 'linear-gradient(135deg,#c0621a,#f5a623)', glyph: 'S', color: '#ffe44d', size: '3rem', weight: '800' },
    file: 'https://www.mediafire.com/file/ieiyepa8drm8eta/LunarCrackedAccountManager_Setup_1.2.1.exe/file'
  },
  {
    id: 'fast-client',
    name: 'Fast Client',
    category: 'clients',
    tags: ['clients'],
    versions: [''],
    thumbnail: 'thumbnails/th26.jpg',
    fallback: { bg: 'linear-gradient(135deg,#c0621a,#f5a623)', glyph: 'S', color: '#ffe44d', size: '3rem', weight: '800' },
    file: 'https://www.mediafire.com/file/q2y6x7c9u6gg3st/FastClient-Setup.exe/file'
  },
  {
    id: 'prim3-pack',
    name: 'Prime3_ Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th3.png',
    fallback: { bg: 'linear-gradient(135deg,#7c3d0a,#ea580c)', glyph: 'F', color: '#fed7aa', size: '3rem', weight: '800' },
    file: 'downloads/!       §f§lRealPrim3 Pack.zip'
  },
  {
    id: 'awerial-pack',
    name: 'Awerial Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th4.png',
    fallback: { bg: 'linear-gradient(135deg,#3b0764,#7c3aed)', glyph: '⊕', color: '#ddd6fe', size: '2.8rem', weight: '400' },
    file: 'downloads/awerial pack remake.zip'
  },
  {
    id: 'tournament16x-texture',
    name: 'Tournament 16x',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th5.jpg',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/§b§lTournament §6§l[16x].zip'
  },
  {
    id: '404vegaxzypack-texture',
    name: '404 vegaxzy pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th6.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/§d404vegaxzy private pack.zip'
  },
  {
    id: 'enhance-default-texture',
    name: 'Enhance Default',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th7.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/§fEn§8hance§7 Default Edit §f§l1.21+.zip'
  },
  {
    id: 'mrbluesky-texture',
    name: 'Mr. Blue Sky',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th8.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/§bMr. Blue Sky.zip'
  },
  {
    id: 'greyedit-texture',
    name: 'Grey Edit 6',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th9.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/Grey Edit 6.zip'
  },
  {
    id: 'flowtives-texture',
    name: 'Flowtives 5k',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th10.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/!       §bFlowtives §f5k §8.zip'
  },
  {
    id: 'phantom-texture',
    name: 'Phantom Default',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th11.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/! §8§l[ §d§lPhantom §5§lDefault §8§l].zip'
  },
  {
    id: 'faithwar-texture',
    name: 'Faith War',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th12.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/! §bFaith War §8[§732§8].zip'
  },
  {
    id: 'MI6-texture',
    name: 'MI6 PACK',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th13.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/MI6_PACK.zip'
  },
  {
    id: 'ayush-texture',
    name: 'AyushGaming 1M Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th23.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/!       §f§lAyushGaming 1M.zip'
  },
  {
    id: 'bane-texture',
    name: 'Living 80k Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th14.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/Bane (Living 80k pack).zip'
  },
  {
    id: 'betterdark-texture',
    name: 'BetterDark 100k Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th15.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/BetterDark100K.zip'
  },
  {
    id: 'smputils-texture',
    name: 'SMP Utils',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th16.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/SMPUtils 1.7.zip'
  },
  {
    id: 'mafia-texture',
    name: 'Mafia 10k Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th17.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/Mafiyas 10k Pack.zip'
  },
  {
    id: 'clap-texture',
    name: 'Clap 16x',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th18.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/!§0Clap16x.zip'
  },
  {
    id: 'flamefrags-texture',
    name: 'FlameFrags Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th19.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/FlameFrags_SMP8.zip'
  },
  {
    id: 'senpaispider-texture',
    name: 'SenpaiSpider 1M Pack',
    category: 'texturepacks',
    tags: ['texturepacks'],
    versions: [''],
    thumbnail: 'thumbnails/th24.png',
    fallback: { bg: 'linear-gradient(135deg,#1e3a5f,#2563eb)', glyph: '⚔', color: '#93c5fd', size: '2.6rem', weight: '400' },
    file: 'downloads/!       §f§lSenpaiSpider 1M.zip'
  },
  {
    id: '1.21.11',
    name: '1.21.11 MODPACKS',
    category: 'modpacks',
    tags: ['pvp', 'fps', 'modpacks'],
    versions: ['1.21.11'],
    thumbnail: 'thumbnails/modpack.png',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/BEST SMP MODS - 1.21.11.zip'
  },
  {
    id: '1.21.8',
    name: '1.21.8 MODPACKS',
    category: 'modpacks',
    tags: ['pvp', 'fps', 'modpacks'],
    versions: ['1.21.8'],
    thumbnail: 'thumbnails/modpack1.jpg',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/BEST SMP MODS - 1.21.8.zip'
  },
  {
    id: '1.21.4',
    name: '1.21.4 MODPACKS',
    category: 'modpacks',
    tags: ['pvp', 'fps', 'modpacks'],
    versions: ['1.21.4'],
    thumbnail: 'thumbnails/modpack2.jpg',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/BEST SMP MODS - 1.21.4.zip'
  },
  {
    id: '1.21.1',
    name: '1.21.1 MODPACKS',
    category: 'modpacks',
    tags: ['pvp', 'fps', 'modpacks'],
    versions: ['1.21.1'],
    thumbnail: 'thumbnails/th25.jpg',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/BEST SMP MODS - 1.21.1.zip'
  },
  {
    id: 'herobrinesmp-world',
    name: 'Herobrine SMP World',
    category: 'others',
    tags: ['world', 'others'],
    versions: [''],
    thumbnail: 'thumbnails/thumbnail1.png',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'https://www.mediafire.com/file/pu49vqdsdywglei/Herobine+Smp+By+Ujjwal.zip/file'
  },
  {
    id: 'unstablesmp-world',
    name: 'Unstable SMP World',
    category: 'others',
    tags: ['world', 'others'],
    versions: [''],
    thumbnail: 'thumbnails/th20.webp',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/UnstableSMPS2.7z'
  },
  {
    id: 'bulkystar-world',
    name: 'BulkyStar Hardcore World',
    category: 'others',
    tags: ['world', 'others'],
    versions: [''],
    thumbnail: 'thumbnails/th21.jpg',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'https://www.mediafire.com/file/hprpzdtjg6mxwok/20000+Hardcore+World.rar/file'
  },
  {
    id: 'pterodactyle-setup',
    name: 'Pterodactyle Panel Setup Code',
    category: 'others',
    tags: ['setup', 'others'],
    versions: [''],
    thumbnail: 'thumbnails/th22.png',
    fallback: { bg: 'linear-gradient(135deg,#451a03,#92400e)', glyph: '⚙', color: '#fde68a', size: '2.8rem', weight: '400' },
    file: 'downloads/ptero panel.txt'
  }
];

/* ──────────────────────────────────────────
   2. AVAILABLE TAGS & VERSIONS
──────────────────────────────────────────── */
const ALL_TAGS = [
  'texturepacks', 'modpacks', 'clients', 'others',
  'fps', 'pvp', 'world', 'setup'
];

const ALL_VERSIONS = ['1.21.4', '1.21.8', '1.21.11', '1.21.1'];

const PAGE_TITLES = {
  home: 'All posts',
  clients: 'Clients',
  texturepacks: 'Texture Packs',
  modpacks: 'Modpacks',
  others: 'Others'
};

const POSTS_PER_PAGE = 12;

/* ──────────────────────────────────────────
   3. STATE
──────────────────────────────────────────── */
const state = {
  page:             'home',
  selectedTags:     new Set(),
  selectedVersions: new Set(),
  query:            '',
  currentPage:      1,
  quickFilter:      'all',   // active quick-filter pill
  homePosts:        [],      // shuffled posts for home (set on init)
};

/* ──────────────────────────────────────────
   4. DOM REFS
──────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const dom = {
  pageTitle:          $('pageTitle'),
  grid:               $('cardsGrid'),
  emptyState:         $('emptyState'),
  emptySub:           $('emptySub'),
  emptyReset:         $('emptyReset'),
  pagination:         $('pagination'),
  searchInput:        $('searchInput'),
  searchClear:        $('searchClear'),
  chipsRow:           $('chipsRow'),
  resetBtn:           $('resetBtn'),
  quickFilters:       $('quickFilters'),
  // tags
  filterTagsBtn:      $('filterTagsBtn'),
  tagsPanel:          $('tagsPanel'),
  tagsWrap:           $('tagsWrap'),
  tagsList:           $('tagsList'),
  tagsBadge:          $('tagsBadge'),
  clearTagsBtn:       $('clearTagsBtn'),
  // versions
  filterVersionsBtn:  $('filterVersionsBtn'),
  versionsPanel:      $('versionsPanel'),
  versionsWrap:       $('versionsWrap'),
  versionsList:       $('versionsList'),
  versionsBadge:      $('versionsBadge'),
  clearVersionsBtn:   $('clearVersionsBtn'),
  // nav
  navLinks:           $('navLinks'),
  hamburger:          $('hamburger'),
  navLogo:            $('navLogo'),
  // panels
  soundToggle:        $('soundToggle'),
  achievementsBtn:    $('achievementsBtn'),
  leaderboardBtn:     $('leaderboardBtn'),
  achievementsOverlay:$('achievementsOverlay'),
  leaderboardOverlay: $('leaderboardOverlay'),
  achievementsClose:  $('achievementsClose'),
  leaderboardClose:   $('leaderboardClose'),
  achievementsGrid:   $('achievementsGrid'),
  leaderboardList:    $('leaderboardList'),
  leaderboardStats:   $('leaderboardStats'),
  // badge popup
  badgePopup:         $('badgePopup'),
  badgePopupIcon:     $('badgePopupIcon'),
  badgePopupName:     $('badgePopupName'),
  // toast
  toastContainer:     $('toastContainer'),
  // easter egg
  easterOverlay:      $('easterOverlay'),
  easterClose:        $('easterClose'),
  easterMsg:          $('easterMsg'),
  easterEmoji:        $('easterEmoji'),
  // sidebar utils
  sidebarAchBtn:      $('sidebarAchBtn'),
  sidebarLbBtn:       $('sidebarLbBtn'),
};

/* ══════════════════════════════════════════════
   ★ SOUND SYSTEM (Web Audio API — zero files)
══════════════════════════════════════════════ */
let _audioCtx = null;

/** Lazy-init AudioContext (must be triggered by user gesture) */
function getAudioCtx() {
  if (!_audioCtx) {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return _audioCtx;
}

/**
 * Play a synthetic sound effect.
 * @param {'click'|'download'|'achievement'|'notification'|'toggle'} type
 */
function playSound(type) {
  if (!prefs.soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime;

    switch (type) {

      case 'click': {
        // Short snappy blip
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.setValueAtTime(900, t);
        o.frequency.exponentialRampToValueAtTime(500, t + 0.08);
        g.gain.setValueAtTime(0.12, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        o.start(t); o.stop(t + 0.08);
        break;
      }

      case 'download': {
        // Ascending 3-note success chime
        [[523, 0], [659, 0.11], [784, 0.22]].forEach(([freq, delay]) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine';
          o.connect(g); g.connect(ctx.destination);
          const st = t + delay;
          o.frequency.setValueAtTime(freq, st);
          g.gain.setValueAtTime(0, st);
          g.gain.linearRampToValueAtTime(0.18, st + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, st + 0.32);
          o.start(st); o.stop(st + 0.35);
        });
        break;
      }

      case 'achievement': {
        // Triumphant fanfare
        [[523, 0], [659, 0.08], [784, 0.16], [1047, 0.24]].forEach(([freq, delay]) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'triangle';
          o.connect(g); g.connect(ctx.destination);
          const st = t + delay;
          o.frequency.setValueAtTime(freq, st);
          g.gain.setValueAtTime(0, st);
          g.gain.linearRampToValueAtTime(0.22, st + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, st + 0.45);
          o.start(st); o.stop(st + 0.48);
        });
        break;
      }

      case 'notification': {
        // Soft bell-like chime
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.connect(g); g.connect(ctx.destination);
        o.frequency.setValueAtTime(1046, t);
        o.frequency.exponentialRampToValueAtTime(880, t + 0.1);
        g.gain.setValueAtTime(0.10, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
        o.start(t); o.stop(t + 0.3);
        break;
      }

      case 'toggle': {
        // Soft toggle tick
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(440, t);
        g.gain.setValueAtTime(0.05, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
        o.start(t); o.stop(t + 0.06);
        break;
      }

      case 'open': {
        // Panel open swoosh
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.setValueAtTime(300, t);
        o.frequency.exponentialRampToValueAtTime(600, t + 0.12);
        g.gain.setValueAtTime(0.08, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
        o.start(t); o.stop(t + 0.14);
        break;
      }

    }
  } catch (_) {
    // AudioContext unavailable — silently skip
  }
}

/* ══════════════════════════════════════════════
   ★ PREFERENCES (localStorage)
══════════════════════════════════════════════ */
const prefs = {
  soundEnabled:  localStorage.getItem('ag_sound') !== 'false',
  lastSection:   localStorage.getItem('ag_last_section') || 'home',
};

function savePrefs() {
  localStorage.setItem('ag_sound', prefs.soundEnabled);
  localStorage.setItem('ag_last_section', state.page);
}

/** Update the sound toggle button icon & style */
function updateSoundBtn() {
  const btn = dom.soundToggle;
  if (!btn) return;
  if (prefs.soundEnabled) {
    btn.title = 'Sound: ON — click to mute';
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>`;
    btn.classList.remove('sound-off');
  } else {
    btn.title = 'Sound: OFF — click to enable';
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
    </svg>`;
    btn.classList.add('sound-off');
  }
}

/* ══════════════════════════════════════════════
   ★ ACHIEVEMENTS SYSTEM
══════════════════════════════════════════════ */

/** Achievement definitions */
const ACHIEVEMENTS = [
  {
    id: 'first_download',
    name: 'First Download',
    desc: 'Downloaded your first pack!',
    icon: '🎯',
    check: stats => stats.totalDownloads >= 1,
  },
  {
    id: 'five_packs',
    name: 'Pack Collector',
    desc: 'Downloaded 5 packs!',
    icon: '🔥',
    check: stats => stats.totalDownloads >= 5,
  },
  {
    id: 'power_user',
    name: 'Power User',
    desc: 'Downloaded 10 packs!',
    icon: '⚡',
    check: stats => stats.totalDownloads >= 10,
  },
  {
    id: 'explorer',
    name: 'Explorer',
    desc: 'Visited 3 different sections!',
    icon: '🗺️',
    check: stats => stats.sectionsVisited >= 3,
  },
  {
    id: 'texture_lover',
    name: 'Texture Lover',
    desc: 'Downloaded 3 texture packs!',
    icon: '🎨',
    check: stats => (stats.byCategory.texturepacks || 0) >= 3,
  },
  {
    id: 'modder',
    name: 'Modder',
    desc: 'Downloaded a modpack!',
    icon: '⚙️',
    check: stats => (stats.byCategory.modpacks || 0) >= 1,
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    desc: 'Browsing after midnight!',
    icon: '🦉',
    check: _stats => { const h = new Date().getHours(); return h >= 0 && h < 5; },
  },
  {
    id: 'client_master',
    name: 'Client Master',
    desc: 'Downloaded 2 clients!',
    icon: '💻',
    check: stats => (stats.byCategory.clients || 0) >= 2,
  },
];

/** Load achievement stats from localStorage */
function loadAchievementStats() {
  try {
    return JSON.parse(localStorage.getItem('ag_ach_stats')) || {
      totalDownloads: 0,
      sectionsVisited: 0,
      sectionsSet: [],
      byCategory: {},
    };
  } catch (_) {
    return { totalDownloads: 0, sectionsVisited: 0, sectionsSet: [], byCategory: {} };
  }
}

/** Load unlocked achievement IDs */
function loadUnlockedAchievements() {
  try {
    return new Set(JSON.parse(localStorage.getItem('ag_achievements')) || []);
  } catch (_) {
    return new Set();
  }
}

/** Save stats and unlocked set */
function saveAchievementData(stats, unlocked) {
  localStorage.setItem('ag_ach_stats', JSON.stringify(stats));
  localStorage.setItem('ag_achievements', JSON.stringify([...unlocked]));
}

/** Check and award newly unlocked achievements */
function checkAchievements(stats, unlocked) {
  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach(ach => {
    if (!unlocked.has(ach.id) && ach.check(stats)) {
      unlocked.add(ach.id);
      newlyUnlocked.push(ach);
    }
  });
  if (newlyUnlocked.length > 0) {
    saveAchievementData(stats, unlocked);
    // Show each popup with a delay
    newlyUnlocked.forEach((ach, i) => {
      setTimeout(() => showBadgePopup(ach), i * 1400);
    });
  }
}

/** Show the badge popup overlay */
function showBadgePopup(ach) {
  dom.badgePopup.hidden = false;
  dom.badgePopupIcon.textContent = ach.icon;
  dom.badgePopupName.textContent = ach.name;
  playSound('achievement');

  // Animate in
  requestAnimationFrame(() => {
    dom.badgePopup.classList.add('show');
  });

  // Auto-dismiss after 3.5s
  setTimeout(() => {
    dom.badgePopup.classList.remove('show');
    setTimeout(() => { dom.badgePopup.hidden = true; }, 500);
  }, 3500);
}

/** Record a section visit for the Explorer achievement */
function recordSectionVisit(section) {
  const stats   = loadAchievementStats();
  const unlocked = loadUnlockedAchievements();
  const sectSet  = new Set(stats.sectionsSet || []);
  sectSet.add(section);
  stats.sectionsSet     = [...sectSet];
  stats.sectionsVisited = sectSet.size;
  saveAchievementData(stats, unlocked);
  checkAchievements(stats, unlocked);
  // Check Night Owl on every section change too
  checkAchievements(stats, unlocked);
}

/** Record a download for achievement tracking */
function recordDownload(post) {
  const stats    = loadAchievementStats();
  const unlocked = loadUnlockedAchievements();
  stats.totalDownloads = (stats.totalDownloads || 0) + 1;
  stats.byCategory = stats.byCategory || {};
  stats.byCategory[post.category] = (stats.byCategory[post.category] || 0) + 1;
  saveAchievementData(stats, unlocked);
  checkAchievements(stats, unlocked);
}

/** Render the achievements grid in the modal */
function renderAchievements() {
  const unlocked = loadUnlockedAchievements();
  dom.achievementsGrid.innerHTML = '';
  ACHIEVEMENTS.forEach(ach => {
    const isUnlocked = unlocked.has(ach.id);
    const card = document.createElement('div');
    card.className = 'achievement-card' + (isUnlocked ? ' unlocked' : '');
    card.innerHTML = `
      <span class="ach-icon">${ach.icon}</span>
      <div class="ach-info">
        <p class="ach-name">${ach.name}</p>
        <p class="ach-desc">${ach.desc}</p>
      </div>
      <span class="ach-lock" aria-hidden="true">${isUnlocked ? '✓' : '🔒'}</span>
    `;
    dom.achievementsGrid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════
   ★ LEADERBOARD SYSTEM (localStorage)
══════════════════════════════════════════════ */

/** Load the download count map { postId: count } */
function loadDownloadCounts() {
  try {
    return JSON.parse(localStorage.getItem('ag_dl_counts')) || {};
  } catch (_) {
    return {};
  }
}

/** Record a download for a given post in the leaderboard */
function recordLeaderboardDownload(postId) {
  const counts = loadDownloadCounts();
  counts[postId] = (counts[postId] || 0) + 1;
  localStorage.setItem('ag_dl_counts', JSON.stringify(counts));
}

/** Get sorted leaderboard entries [{name, count, category}] */
function getLeaderboardEntries() {
  const counts = loadDownloadCounts();
  return posts
    .map(p => ({ id: p.id, name: p.name, category: p.category, count: counts[p.id] || 0 }))
    .filter(e => e.count > 0)
    .sort((a, b) => b.count - a.count);
}

/** Get total download count across all posts */
function getTotalDownloads() {
  const counts = loadDownloadCounts();
  return Object.values(counts).reduce((s, v) => s + v, 0);
}

/** Render the leaderboard modal */
function renderLeaderboard() {
  const entries = getLeaderboardEntries();
  const total   = getTotalDownloads();
  const stats   = loadAchievementStats();

  // Stats bar
  dom.leaderboardStats.innerHTML = `
    <div class="lb-stat">
      <div class="lb-stat-num">${total}</div>
      <div class="lb-stat-label">Total Downloads</div>
    </div>
    <div class="lb-stat">
      <div class="lb-stat-num">${entries.length}</div>
      <div class="lb-stat-label">Packs Downloaded</div>
    </div>
    <div class="lb-stat">
      <div class="lb-stat-num">${loadUnlockedAchievements().size}/${ACHIEVEMENTS.length}</div>
      <div class="lb-stat-label">Achievements</div>
    </div>
  `;

  // List
  dom.leaderboardList.innerHTML = '';
  if (entries.length === 0) {
    dom.leaderboardList.innerHTML = `<p class="lb-empty">No downloads yet — start exploring!</p>`;
    return;
  }

  const rankClasses = ['gold', 'silver', 'bronze'];
  entries.slice(0, 15).forEach((e, i) => {
    const item = document.createElement('div');
    item.className = 'lb-item';
    const rankClass = rankClasses[i] || '';
    item.innerHTML = `
      <div class="lb-rank ${rankClass}">${i + 1}</div>
      <div class="lb-name">${e.name}</div>
      <div class="lb-count">${e.count}×</div>
    `;
    dom.leaderboardList.appendChild(item);
  });
}

/* ══════════════════════════════════════════════
   ★ TOAST NOTIFICATION SYSTEM
══════════════════════════════════════════════ */

/**
 * Show a lightweight toast notification.
 * @param {string} msg  — message text
 * @param {string} icon — emoji prefix (optional)
 * @param {number} duration — ms before auto-close
 */
function showToast(msg, icon = '', duration = 2400) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = icon ? `${icon} ${msg}` : msg;
  dom.toastContainer.appendChild(toast);

  // Auto-remove
  setTimeout(() => {
    toast.classList.add('out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
}

/* ══════════════════════════════════════════════
   ★ SHUFFLE (for Home page card mixing)
══════════════════════════════════════════════ */

/** Fisher-Yates shuffle — returns new shuffled array */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ══════════════════════════════════════════════
   ★ SCROLL REVEAL (IntersectionObserver)
══════════════════════════════════════════════ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('revealed');
          observer.unobserve(el.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════
   ★ QUICK FILTER SYSTEM
══════════════════════════════════════════════ */
function initQuickFilters() {
  dom.quickFilters.querySelectorAll('.qf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      const qf = btn.dataset.qf;
      state.quickFilter = qf;
      state.currentPage = 1;
      // Update active state
      dom.quickFilters.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPosts();
    });
  });
}

/** Show/hide the quick filters row (only visible on home page) */
function updateQuickFiltersVisibility() {
  if (state.page === 'home') {
    dom.quickFilters.classList.remove('home-hidden');
  } else {
    dom.quickFilters.classList.add('home-hidden');
    // Reset quick filter when leaving home
    state.quickFilter = 'all';
    dom.quickFilters.querySelectorAll('.qf-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.qf === 'all');
    });
  }
}

/* ══════════════════════════════════════════════
   ★ EASTER EGGS
══════════════════════════════════════════════ */

const EASTER_EGGS = [
  { msg: '✦ You found the star! Ayush Gaming loves you! ✦', emoji: '✦' },
  { msg: 'Secret unlocked! You\'re a true explorer!',        emoji: '🌟' },
  { msg: 'Ayush says: Thanks for being awesome!',            emoji: '🎮' },
  { msg: 'Hidden treasure found! Keep downloading!',         emoji: '💎' },
];

let logoClickCount = 0;
let logoClickTimer = null;

function initEasterEggs() {

  // ── 1. Logo multi-click (5× rapid clicks) ──
  dom.navLogo.addEventListener('click', e => {
    e.preventDefault();
    logoClickCount++;
    clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 900);

    if (logoClickCount >= 5) {
      logoClickCount = 0;
      triggerLogoEasterEgg();
    }
  });

  // ── 2. Konami Code: ↑↑↓↓←→←→BA ──
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIdx = 0;
  document.addEventListener('keydown', e => {
    if (e.key === KONAMI[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        triggerKonamiEasterEgg();
      }
    } else {
      konamiIdx = 0;
    }
  });

  // ── 3. Secret word "ayush" typed anywhere ──
  let secretBuffer = '';
  document.addEventListener('keypress', e => {
    // Only when not typing in inputs
    if (e.target.tagName === 'INPUT') return;
    secretBuffer += e.key.toLowerCase();
    if (secretBuffer.length > 5) secretBuffer = secretBuffer.slice(-5);
    if (secretBuffer === 'ayush') {
      secretBuffer = '';
      triggerSecretWordEasterEgg();
    }
  });

  // Easter egg close
  dom.easterClose.addEventListener('click', () => {
    dom.easterOverlay.hidden = true;
    playSound('click');
  });
}

function triggerLogoEasterEgg() {
  const egg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
  dom.easterEmoji.textContent = egg.emoji;
  dom.easterMsg.textContent = egg.msg;
  dom.easterOverlay.hidden = false;
  spawnConfetti();
  playSound('achievement');
  showToast('Easter egg found! 🌟', '', 3000);
}

function triggerKonamiEasterEgg() {
  dom.easterEmoji.textContent = '🕹️';
  dom.easterMsg.textContent = 'Konami Code! +30 lives! (jk, but you\'re a legend!)';
  dom.easterOverlay.hidden = false;
  spawnConfetti();
  playSound('achievement');
}

function triggerSecretWordEasterEgg() {
  dom.easterEmoji.textContent = '👑';
  dom.easterMsg.textContent = 'You spelled AYUSH! The legend himself approves!';
  dom.easterOverlay.hidden = false;
  spawnConfetti();
  playSound('achievement');
}

/** Spawn confetti particles across the screen */
function spawnConfetti() {
  const colors = ['#8b5cf6', '#a78bfa', '#f59e0b', '#22c55e', '#ec4899', '#3b82f6'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: ${-10 - Math.random() * 20}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-delay: ${Math.random() * 0.8}s;
      animation-duration: ${1.8 + Math.random() * 1.2}s;
    `;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

/* ══════════════════════════════════════════════
   ★ PANELS (Achievements + Leaderboard open/close)
══════════════════════════════════════════════ */
function openPanel(overlay, renderFn) {
  renderFn();
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('sidebar-open'); // reuse scroll lock
  playSound('open');
}

function closePanel(overlay) {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('sidebar-open');
}

function initPanels() {
  // Achievements
  [dom.achievementsBtn, dom.sidebarAchBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      playSound('click');
      closeSidebar();
      openPanel(dom.achievementsOverlay, renderAchievements);
    });
  });
  dom.achievementsClose.addEventListener('click', () => {
    closePanel(dom.achievementsOverlay);
    playSound('click');
  });
  dom.achievementsOverlay.addEventListener('click', e => {
    if (e.target === dom.achievementsOverlay) closePanel(dom.achievementsOverlay);
  });

  // Leaderboard
  [dom.leaderboardBtn, dom.sidebarLbBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      playSound('click');
      closeSidebar();
      openPanel(dom.leaderboardOverlay, renderLeaderboard);
    });
  });
  dom.leaderboardClose.addEventListener('click', () => {
    closePanel(dom.leaderboardOverlay);
    playSound('click');
  });
  dom.leaderboardOverlay.addEventListener('click', e => {
    if (e.target === dom.leaderboardOverlay) closePanel(dom.leaderboardOverlay);
  });
}

/* ══════════════════════════════════════════════
   5. RENDER DROPDOWNS
══════════════════════════════════════════════ */
function buildTagsList() {
  dom.tagsList.innerHTML = '';
  ALL_TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'dropdown-option' + (state.selectedTags.has(tag) ? ' selected' : '');
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', state.selectedTags.has(tag));
    btn.dataset.value = tag;
    btn.innerHTML = `${tag}<span class="opt-check"><svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.5" width="10" height="10"><path d="m2 6 3 3 5-5"/></svg></span>`;
    btn.addEventListener('click', () => { playSound('toggle'); toggleTag(tag); });
    dom.tagsList.appendChild(btn);
  });
}

function buildVersionsList() {
  dom.versionsList.innerHTML = '';
  ALL_VERSIONS.forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'dropdown-option' + (state.selectedVersions.has(v) ? ' selected' : '');
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', state.selectedVersions.has(v));
    btn.dataset.value = v;
    btn.innerHTML = `${v}<span class="opt-check"><svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.5" width="10" height="10"><path d="m2 6 3 3 5-5"/></svg></span>`;
    btn.addEventListener('click', () => { playSound('toggle'); toggleVersion(v); });
    dom.versionsList.appendChild(btn);
  });
}

/* ══════════════════════════════════════════════
   6. FILTER LOGIC
══════════════════════════════════════════════ */
function toggleTag(tag) {
  state.selectedTags.has(tag) ? state.selectedTags.delete(tag) : state.selectedTags.add(tag);
  state.currentPage = 1;
  buildTagsList();
  updateBadges(); renderPosts(); updateChips(); updateResetBtn();
}

function toggleVersion(v) {
  state.selectedVersions.has(v) ? state.selectedVersions.delete(v) : state.selectedVersions.add(v);
  state.currentPage = 1;
  buildVersionsList();
  updateBadges(); renderPosts(); updateChips(); updateResetBtn();
}

function updateBadges() {
  const tc = state.selectedTags.size;
  dom.tagsBadge.hidden = false;
  dom.tagsBadge.textContent = tc > 0 ? tc : '';
  dom.filterTagsBtn.classList.toggle('active', tc > 0 || !dom.tagsPanel.hidden);

  const vc = state.selectedVersions.size;
  dom.versionsBadge.hidden = false;
  dom.versionsBadge.textContent = vc > 0 ? vc : '';
  dom.filterVersionsBtn.classList.toggle('active', vc > 0 || !dom.versionsPanel.hidden);
}

/* ══════════════════════════════════════════════
   7. SEARCH
══════════════════════════════════════════════ */
function searchPosts(postList) {
  const q = state.query.toLowerCase().trim();
  if (!q) return postList;
  return postList.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}

/* ══════════════════════════════════════════════
   8. CHANGE CATEGORY (URL routing)
══════════════════════════════════════════════ */
function changeCategory(page) {
  state.page = page;
  state.currentPage = 1;
  dom.pageTitle.textContent = PAGE_TITLES[page] || 'All posts';

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // Update quick filters visibility
  updateQuickFiltersVisibility();

  // Track section visit for achievements
  recordSectionVisit(page);

  // Save last section pref
  prefs.lastSection = page;
  savePrefs();

  renderPosts();
}

/* ══════════════════════════════════════════════
   9. FILTER BY TAGS + VERSION + QUICK FILTER
══════════════════════════════════════════════ */
function filterByTags(postList) {
  if (state.selectedTags.size === 0) return postList;
  return postList.filter(p =>
    [...state.selectedTags].every(tag => p.tags.includes(tag))
  );
}

function filterByVersion(postList) {
  if (state.selectedVersions.size === 0) return postList;
  return postList.filter(p =>
    [...state.selectedVersions].some(v => p.versions.includes(v))
  );
}

/** Apply quick filter when on home page */
function applyQuickFilter(postList) {
  if (state.page !== 'home') return postList;
  if (state.quickFilter === 'all') return postList;
  if (state.quickFilter === 'popular') {
    // Sort by local download count, descending
    const counts = loadDownloadCounts();
    return [...postList].sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
  }
  // Filter by category
  return postList.filter(p => p.category === state.quickFilter);
}

function getCategoryPosts() {
  // On home: use the session-shuffled array for a fresh mix every page load
  if (state.page === 'home') return state.homePosts;
  return posts.filter(p => p.category === state.page);
}

function getFilteredPosts() {
  let result = getCategoryPosts();
  result = applyQuickFilter(result);
  result = filterByTags(result);
  result = filterByVersion(result);
  result = searchPosts(result);
  return result;
}

/* ══════════════════════════════════════════════
   10. RENDER POSTS
══════════════════════════════════════════════ */
function renderPosts() {
  const filtered   = getFilteredPosts();
  const total      = filtered.length;
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  if (state.currentPage > totalPages) state.currentPage = Math.max(1, totalPages);

  const start     = (state.currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = filtered.slice(start, start + POSTS_PER_PAGE);

  dom.grid.innerHTML = '';

  if (total === 0) {
    dom.emptyState.classList.remove('hidden');
    dom.grid.hidden = true;
    dom.emptySub.textContent = state.query
      ? `No results for "${state.query}". Try a different search or reset filters.`
      : 'No posts match the selected filters.';
  } else {
    dom.emptyState.classList.add('hidden');
    dom.grid.hidden = false;
    pagePosts.forEach((post, i) => {
      const card = buildCard(post);
      card.style.animationDelay = `${i * 45}ms`;
      dom.grid.appendChild(card);
    });
  }

  renderPagination(totalPages);
}

/* ══════════════════════════════════════════════
   11. BUILD CARD
══════════════════════════════════════════════ */
function buildCard(post) {
  const article = document.createElement('article');
  article.className = 'card';
  article.dataset.id = post.id;

  const catLabels = { clients: 'Client', texturepacks: 'Texture', modpacks: 'Modpack', others: 'Tool' };

  // Thumbnail
  let imgHtml;
  if (post.thumbnail) {
    imgHtml = `<img class="card-thumb" src="${post.thumbnail}" alt="${post.name} thumbnail" loading="lazy" />`;
  } else {
    const f = post.fallback;
    const padStyle = f.pad ? 'padding:.35rem .7rem;border-radius:12px;background:rgba(0,0,0,.38);' : '';
    imgHtml = `<div class="card-thumb-fallback" style="background:${f.bg}">
      <span class="fallback-glyph" style="font-size:${f.size};font-weight:${f.weight};color:${f.color};${padStyle}">${f.glyph}</span>
    </div>`;
  }

  // Tags (max 3 shown)
  const tagPills = post.tags.slice(0, 3).map(t =>
    `<span class="card-tag">${t}</span>`
  ).join('');

  // Download count badge (from leaderboard)
  const counts = loadDownloadCounts();
  const dlCount = counts[post.id] || 0;
  const dlBadge = dlCount > 0
    ? `<span class="card-dl-count">⬇ ${dlCount}</span>`
    : '';

  article.innerHTML = `
    <div class="card-img-wrap">
      ${imgHtml}
      ${dlBadge}
      <span class="card-category">${catLabels[post.category] || post.category}</span>
    </div>
    <div class="card-body">
      <h2 class="card-title">${post.name}</h2>
      <div class="card-tags">${tagPills}</div>
      <p class="card-version">${post.versions.filter(Boolean).join(' · ')}</p>
    </div>
    <button class="dl-btn" data-file="${post.file}" data-name="${post.name}" data-id="${post.id}" data-category="${post.category}">
      ⬇ Download ${post.name}
    </button>
  `;

  // Hover sound on dl-btn
  const dlBtn = article.querySelector('.dl-btn');
  dlBtn.addEventListener('mouseenter', () => playSound('toggle'));

  // Download handler
  dlBtn.addEventListener('click', function () {
    triggerDownload(this, post);
  });

  return article;
}

/* ══════════════════════════════════════════════
   12. DOWNLOAD SYSTEM
══════════════════════════════════════════════ */
function triggerDownload(btn, post) {
  const file = btn.dataset.file;

  // Open the file / external link
  const a = document.createElement('a');
  a.href = file;
  if (file.startsWith('http://') || file.startsWith('https://')) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  } else {
    a.download = file.split('/').pop();
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Play sound
  playSound('download');

  // Visual feedback on button
  const original = btn.innerHTML;
  btn.innerHTML = '✓ Download started!';
  btn.classList.add('success');
  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove('success');
  }, 2200);

  // Record for leaderboard & achievements
  recordLeaderboardDownload(post.id);
  recordDownload(post);

  // Toast
  showToast(`Downloading ${post.name}…`, '⬇', 2200);
}

/* ══════════════════════════════════════════════
   13. PAGINATION
══════════════════════════════════════════════ */
function renderPagination(totalPages) {
  dom.pagination.innerHTML = '';
  if (totalPages <= 1) { dom.pagination.hidden = true; return; }
  dom.pagination.hidden = false;

  const cur = state.currentPage;
  dom.pagination.appendChild(makePageBtn('‹', cur - 1, cur === 1));

  getPagesArray(cur, totalPages).forEach(p => {
    if (p === '…') {
      const el = document.createElement('span');
      el.className = 'page-btn'; el.textContent = '…'; el.style.cursor = 'default';
      dom.pagination.appendChild(el);
    } else {
      const btn = makePageBtn(p, p, false);
      if (p === cur) btn.classList.add('current');
      dom.pagination.appendChild(btn);
    }
  });

  dom.pagination.appendChild(makePageBtn('›', cur + 1, cur === totalPages));
}

function makePageBtn(label, page, disabled) {
  const btn = document.createElement('button');
  btn.className = 'page-btn';
  btn.textContent = label;
  btn.disabled = disabled;
  if (!disabled) btn.addEventListener('click', () => {
    playSound('click');
    state.currentPage = page;
    renderPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return btn;
}

function getPagesArray(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  if (cur <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i);
    pages.push('…'); pages.push(total);
  } else if (cur >= total - 3) {
    pages.push(1); pages.push('…');
    for (let i = total - 4; i <= total; i++) pages.push(i);
  } else {
    pages.push(1); pages.push('…');
    for (let i = cur - 1; i <= cur + 1; i++) pages.push(i);
    pages.push('…'); pages.push(total);
  }
  return pages;
}

/* ══════════════════════════════════════════════
   14. ACTIVE FILTER CHIPS
══════════════════════════════════════════════ */
function updateChips() {
  dom.chipsRow.innerHTML = '';
  const all = [
    ...[...state.selectedTags].map(t => ({ label: t, type: 'tag' })),
    ...[...state.selectedVersions].map(v => ({ label: v, type: 'version' })),
  ];
  if (state.query) all.unshift({ label: `"${state.query}"`, type: 'search' });

  dom.chipsRow.hidden = all.length === 0;

  all.forEach(({ label, type }) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `${label}<button class="chip-remove" aria-label="Remove ${label}">×</button>`;
    chip.querySelector('.chip-remove').addEventListener('click', () => {
      playSound('toggle');
      if (type === 'tag')     { state.selectedTags.delete(label); buildTagsList(); }
      if (type === 'version') { state.selectedVersions.delete(label); buildVersionsList(); }
      if (type === 'search')  { state.query = ''; dom.searchInput.value = ''; dom.searchClear.hidden = true; }
      state.currentPage = 1;
      updateBadges(); updateChips(); updateResetBtn(); renderPosts();
    });
    dom.chipsRow.appendChild(chip);
  });
}

function updateResetBtn() {
  const hasFilters = state.selectedTags.size > 0 || state.selectedVersions.size > 0 || state.query;
  dom.resetBtn.hidden = !hasFilters;
}

function resetAll() {
  state.selectedTags.clear();
  state.selectedVersions.clear();
  state.query = '';
  state.currentPage = 1;
  dom.searchInput.value = '';
  dom.searchClear.hidden = true;
  buildTagsList();
  buildVersionsList();
  updateBadges();
  updateChips();
  updateResetBtn();
  renderPosts();
  playSound('click');
}

/* ══════════════════════════════════════════════
   15. DROPDOWN OPEN / CLOSE
══════════════════════════════════════════════ */
function openDropdown(panel, btn) {
  panel.hidden = false;
  /* Inline override — guarantees solid background regardless of CSS cascade */
  panel.style.setProperty('background-color', '#1a1a1e', 'important');
  panel.style.setProperty('background',       '#1a1a1e', 'important');
  panel.style.setProperty('z-index',          '99999',   'important');
  panel.style.setProperty('backdrop-filter',  'none',    'important');
  panel.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
  btn.setAttribute('aria-expanded', 'true');
  btn.classList.add('active');
}

function closeDropdown(panel, btn) {
  panel.hidden = true;
  btn.setAttribute('aria-expanded', 'false');
  const isTag     = panel === dom.tagsPanel;
  const hasFilter = isTag ? state.selectedTags.size > 0 : state.selectedVersions.size > 0;
  btn.classList.toggle('active', hasFilter);
}

function toggleDropdown(panel, btn) {
  panel.hidden ? openDropdown(panel, btn) : closeDropdown(panel, btn);
}

/* ══════════════════════════════════════════════
   16. URL HASH ROUTING
══════════════════════════════════════════════ */
function handleHash() {
  const hash  = window.location.hash.replace('#', '') || 'home';
  const valid = ['home', 'clients', 'texturepacks', 'modpacks', 'others'];
  changeCategory(valid.includes(hash) ? hash : 'home');
}

/* ══════════════════════════════════════════════
   17. SIDEBAR LOGIC
══════════════════════════════════════════════ */
function openSidebar() {
  const sidebar   = $('sidebar');
  const overlay   = $('sidebarOverlay');
  const hamburger = dom.hamburger;

  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  overlay.classList.add('visible');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('sidebar-open');

  sidebar.querySelectorAll('.sidebar-link').forEach((link, i) => {
    link.style.animationDelay = `${80 + i * 55}ms`;
  });
  sidebar.querySelectorAll('.sidebar-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === state.page);
  });
}

function closeSidebar() {
  const sidebar   = $('sidebar');
  const overlay   = $('sidebarOverlay');
  const hamburger = dom.hamburger;

  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('visible');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('sidebar-open');
}

/* ══════════════════════════════════════════════
   18. MOBILE SWIPE (sidebar open via swipe-right)
══════════════════════════════════════════════ */
function initSwipeGesture() {
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
    // Swipe right from left edge to open sidebar
    if (dx > 60 && dy < 60 && touchStartX < 30) {
      openSidebar();
    }
    // Swipe left to close sidebar
    if (dx < -60 && dy < 60 && $('sidebar').classList.contains('open')) {
      closeSidebar();
    }
  }, { passive: true });
}

/* ══════════════════════════════════════════════
   19. EVENT LISTENERS
══════════════════════════════════════════════ */
function initEvents() {

  // ── Sound toggle ──
  dom.soundToggle.addEventListener('click', () => {
    prefs.soundEnabled = !prefs.soundEnabled;
    savePrefs();
    updateSoundBtn();
    playSound('toggle');
    showToast(prefs.soundEnabled ? 'Sound enabled 🔊' : 'Sound muted 🔇', '', 1800);
  });

  // ── Hamburger ──
  dom.hamburger.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = $('sidebar').classList.contains('open');
    playSound('click');
    isOpen ? closeSidebar() : openSidebar();
  });

  // ── Sidebar close button ──
  $('sidebarClose').addEventListener('click', () => { closeSidebar(); playSound('click'); });

  // ── Sidebar overlay click → close ──
  $('sidebarOverlay').addEventListener('click', closeSidebar);

  // ── Sidebar nav links → navigate + close ──
  document.querySelectorAll('.sidebar-link').forEach(a => {
    a.addEventListener('click', () => {
      closeSidebar();
      playSound('click');
    });
  });

  // ── Desktop nav links ──
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => { closeSidebar(); playSound('click'); });
  });

  // ── Tags dropdown ──
  dom.filterTagsBtn.addEventListener('click', e => {
    e.stopPropagation();
    playSound('click');
    closeDropdown(dom.versionsPanel, dom.filterVersionsBtn);
    toggleDropdown(dom.tagsPanel, dom.filterTagsBtn);
  });

  // ── Versions dropdown ──
  dom.filterVersionsBtn.addEventListener('click', e => {
    e.stopPropagation();
    playSound('click');
    closeDropdown(dom.tagsPanel, dom.filterTagsBtn);
    toggleDropdown(dom.versionsPanel, dom.filterVersionsBtn);
  });

  // ── Clear filter buttons ──
  dom.clearTagsBtn.addEventListener('click', e => {
    e.stopPropagation();
    state.selectedTags.clear();
    state.currentPage = 1;
    buildTagsList();
    updateBadges(); updateChips(); updateResetBtn(); renderPosts();
  });
  dom.clearVersionsBtn.addEventListener('click', e => {
    e.stopPropagation();
    state.selectedVersions.clear();
    state.currentPage = 1;
    buildVersionsList();
    updateBadges(); updateChips(); updateResetBtn(); renderPosts();
  });

  // ── Outside click: close dropdowns ──
  document.addEventListener('click', e => {
    if (!dom.tagsWrap.contains(e.target))     closeDropdown(dom.tagsPanel, dom.filterTagsBtn);
    if (!dom.versionsWrap.contains(e.target)) closeDropdown(dom.versionsPanel, dom.filterVersionsBtn);
  });

  // ── ESC key: close everything ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSidebar();
      closePanel(dom.achievementsOverlay);
      closePanel(dom.leaderboardOverlay);
      closeDropdown(dom.tagsPanel, dom.filterTagsBtn);
      closeDropdown(dom.versionsPanel, dom.filterVersionsBtn);
      dom.searchInput.blur();
      if (!dom.easterOverlay.hidden) dom.easterOverlay.hidden = true;
    }
  });

  // ── Search ──
  dom.searchInput.addEventListener('input', () => {
    state.query = dom.searchInput.value;
    state.currentPage = 1;
    dom.searchClear.hidden = !state.query;
    updateChips(); updateResetBtn(); renderPosts();
  });
  dom.searchClear.addEventListener('click', () => {
    state.query = '';
    dom.searchInput.value = '';
    dom.searchClear.hidden = true;
    state.currentPage = 1;
    playSound('click');
    updateChips(); updateResetBtn(); renderPosts();
    dom.searchInput.focus();
  });

  // ── Reset ──
  dom.resetBtn.addEventListener('click', resetAll);
  dom.emptyReset.addEventListener('click', resetAll);

  // ── Hash routing ──
  window.addEventListener('hashchange', handleHash);

  // ── Keep sidebar active links in sync ──
  window.addEventListener('hashchange', () => {
    const sidebar = $('sidebar');
    if (!sidebar) return;
    sidebar.querySelectorAll('.sidebar-link').forEach(a => {
      a.classList.toggle('active', a.dataset.page === state.page);
    });
  });
}

/* ══════════════════════════════════════════════
   20. LOADING SCREEN
══════════════════════════════════════════════ */
function initLoader() {
  const loader = $('loaderScreen');
  if (!loader) return;

  const MIN_MS = 800;
  const start  = Date.now();

  function hideLoader() {
    const elapsed = Date.now() - start;
    const delay   = Math.max(0, MIN_MS - elapsed);
    setTimeout(() => {
      loader.classList.add('loader-hiding');
      loader.addEventListener('transitionend', () => {
        loader.classList.add('loader-gone');
      }, { once: true });
    }, delay);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
    setTimeout(hideLoader, 4000);
  }
}

/* ══════════════════════════════════════════════
   21. INIT
══════════════════════════════════════════════ */
function init() {
  // Shuffle posts for home page (mixed order per session)
  state.homePosts = shuffleArray(posts);

  // Initialize loader
  initLoader();

  // Sound button state
  updateSoundBtn();

  // Build filter dropdowns
  buildTagsList();
  buildVersionsList();

  // Wire up all event listeners
  initEvents();

  // Initialize panel open/close
  initPanels();

  // Initialize quick filters
  initQuickFilters();

  // Initialize mobile swipe for sidebar
  initSwipeGesture();

  // Initialize Easter eggs
  initEasterEggs();

  // Route to the current hash
  handleHash();

  // Scroll reveal animations
  initScrollReveal();

  // Check night owl achievement on load (passive check)
  const stats   = loadAchievementStats();
  const unlocked = loadUnlockedAchievements();
  checkAchievements(stats, unlocked);
}

document.addEventListener('DOMContentLoaded', init);
