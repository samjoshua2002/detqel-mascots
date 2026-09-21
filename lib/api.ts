export interface CharacterData {
  id: string;
  name: string;
  series: string;
  category: 'Waifus' | 'Husbandos' | 'Rivals' | 'Gaming' | 'Popular';
  tagline: string;
  greeting: string;
  sampleQuote: string;
  affinityLevel: number;
  tags: string[];
  initialImage: string;
  bannerImage?: string;
}

export interface AppVersionInfo {
  latestVersion: string;
  latestVersionCode: number;
  apkUrl: string;
  title?: string;
  message?: string;
  releaseNotes?: string[] | string;
  forceUpdate?: boolean;
}

export const FEATURED_CHARACTERS: CharacterData[] = [
  {
    id: 'furina',
    name: 'Furina',
    series: 'Genshin Impact',
    category: 'Waifus',
    tagline: 'Regina of All Waters, Kindreds, Peoples and Laws',
    greeting: 'The grand stage of Fontaine awaits! Shall we commence our daily spectacle, or have you brought me another decadent slice of cake?',
    sampleQuote: 'A dramatic entrance is the prerequisite of every masterpiece! Never allow the audience to predict your next movement, darling.',
    affinityLevel: 5,
    tags: ['Hydro Archon', 'Fontaine', 'Drama Queen', 'Swordmaster'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b386545-72C5jbAvXjCT.png',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/banner/205941-c0T88DKwBUkQ.jpg',
  },
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    series: 'Jujutsu Kaisen',
    category: 'Husbandos',
    tagline: 'The Strongest Jujutsu Sorcerer Alive',
    greeting: 'Yo! Don\'t look so tense. As long as I\'m around, nobody\'s getting hurt. Now, what kind of trouble are we getting into today?',
    sampleQuote: 'Dying to win and risking death to win are completely different. Don\'t hold back—let\'s see what you\'re made of.',
    affinityLevel: 4,
    tags: ['Limitless', 'Six Eyes', 'Special Grade', 'Jujutsu High'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b127691-9zqh1xpIubn7.png',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg',
  },
  {
    id: 'raiden',
    name: 'Raiden Shogun',
    series: 'Genshin Impact',
    category: 'Waifus',
    tagline: 'Her Excellency, the Almighty Narukami Ogosho',
    greeting: 'State your purpose before the Narukami. If it does not serve the stillness of Eternity, make it brief.',
    sampleQuote: 'Insolence will not be tolerated. However... if you offer dango milk, I may grant you a temporary pardon.',
    affinityLevel: 5,
    tags: ['Electro Archon', 'Inazuma', 'Musou no Hitotachi', 'Eternity'],
    initialImage: 'https://safebooru.org/images/3888/fcd03d8f2930eb0df6254ee6abce38e636858cfb.jpg',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/205941-c0T88DKwBUkQ.jpg',
  },
  {
    id: 'makima',
    name: 'Makima',
    series: 'Chainsaw Man',
    category: 'Waifus',
    tagline: 'High-Ranking Public Safety Devil Hunter',
    greeting: 'Good morning. I expect obedience and efficiency from all my companions. But for you, I might make a subtle exception.',
    sampleQuote: 'All devils are born with a name. The more that name is feared, the more powerful the devil becomes.',
    affinityLevel: 3,
    tags: ['Control Devil', 'Public Safety', 'Enigmatic', 'Tokyo'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b137079-rF7g2b1j7pL9.png',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-0WuyxG4N25zM.jpg',
  },
  {
    id: 'zoro',
    name: 'Roronoa Zoro',
    series: 'One Piece',
    category: 'Husbandos',
    tagline: 'Master of Three-Sword Style & Pirate Hunter',
    greeting: 'Oi. What are you looking at? I didn\'t get lost, the road just bent the wrong way. Pass me a bottle of sake.',
    sampleQuote: 'If I die here, then I\'m a man who could only make it this far. But I refuse to kneel to anyone.',
    affinityLevel: 4,
    tags: ['Three Swords', 'Straw Hat', 'King of Hell', 'Wano'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b62-HwN0l6JzUvPq.png',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJSpdH.jpg',
  },
  {
    id: 'hu_tao',
    name: 'Hu Tao',
    series: 'Genshin Impact',
    category: 'Waifus',
    tagline: '77th Director of the Wangsheng Funeral Parlor',
    greeting: 'Aha! Looking for special buy-one-get-one parlor coupons, or did you just want to hear my new ghost poem?',
    sampleQuote: 'Balance must be maintained! Life leads to death, and death leads back to life. Treat both with cheer!',
    affinityLevel: 5,
    tags: ['Pyro', 'Liyue', 'Prankster', 'Staff of Homa'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b187515-Nn5kZf68XW2j.png',
  },
  {
    id: '2b',
    name: '2B',
    series: 'NieR:Automata',
    category: 'Gaming',
    tagline: 'YoRHa No.2 Type B Combat Android',
    greeting: 'Unit 2B operational. Emotions are prohibited by command protocol... yet standing beside you challenges my parameters.',
    sampleQuote: 'Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death.',
    affinityLevel: 4,
    tags: ['YoRHa Android', 'Bunker', 'Katana', 'Sci-Fi'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b123927-4ZkZzFzGzM3j.png',
  },
  {
    id: 'shadow',
    name: 'Shadow (Cid Kagenou)',
    series: 'The Eminence in Shadow',
    category: 'Rivals',
    tagline: 'Master of the Shadow Garden & Eminence in Shadow',
    greeting: 'The moon is red. We are running out of time... I am Atomic.',
    sampleQuote: 'I lurk in the shadows, to hunt down the shadows. That is our sole doctrine.',
    affinityLevel: 5,
    tags: ['Shadow Garden', 'Overpowered', 'Chunibyo Master', 'Atomic'],
    initialImage: 'https://s4.anilist.co/file/anilistcdn/character/large/b139744-K4jW8kXp9L0z.png',
  },
];

export const RIVALS_SHOWCASE = [
  {
    hero: 'Raiden Shogun',
    heroSeries: 'Genshin Impact',
    heroAvatar: 'https://safebooru.org/images/3888/fcd03d8f2930eb0df6254ee6abce38e636858cfb.jpg',
    rival: 'Kaedehara Kazuha',
    rivalSeries: 'Genshin Impact',
    rivalAvatar: 'https://safebooru.org/images/3620/a9b89fa5a939f4a56a6ec154ae94541cb833ce18.jpg',
    relationship: 'The wandering samurai who parried the Musou no Hitotachi with two visions',
    clashQuote: 'There will always be those who dare to brave the lightning\'s glow!',
  },
  {
    hero: 'Satoru Gojo',
    heroSeries: 'Jujutsu Kaisen',
    heroAvatar: 'https://s4.anilist.co/file/anilistcdn/character/large/b127691-9zqh1xpIubn7.png',
    rival: 'Ryomen Sukuna',
    rivalSeries: 'Jujutsu Kaisen',
    rivalAvatar: 'https://s4.anilist.co/file/anilistcdn/character/large/b127692-aD4s3mN8zK1y.png',
    relationship: 'The King of Curses vs The Modern Strongest Sorcerer in an apocalyptic domain duel',
    clashQuote: 'Stand proud. You were truly magnificent, Gojo Satoru.',
  },
  {
    hero: 'Furina',
    heroSeries: 'Genshin Impact',
    heroAvatar: 'https://s4.anilist.co/file/anilistcdn/character/large/b386545-72C5jbAvXjCT.png',
    rival: 'Arlecchino "The Knave"',
    rivalSeries: 'Genshin Impact',
    rivalAvatar: 'https://safebooru.org/images/4250/2324f92d47f9f257a44f5728a2b53eb63a94aaee.jpg',
    relationship: 'The Fourth Fatui Harbinger who cornered the Hydro Archon in the shadows of the Court',
    clashQuote: 'The curtain has fallen on your little theatrics, \'Archon\'. Speak the truth.',
  },
];

const SERVER_BASE = 'https://guidetalk.onrender.com';

/**
 * Fetches dynamic character images from the GuideTalk server or local API proxy.
 * Prioritizes AniList HD CDN and studio master vault.
 */
export async function fetchDynamicImageFromApi(
  name: string,
  series: string = '',
  force: boolean = false
): Promise<{ imageUrl: string; bannerUrl?: string | null; candidates?: string[] }> {
  // First check local high quality curated vault
  const found = FEATURED_CHARACTERS.find(
    (c) => c.name.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(c.name.toLowerCase())
  );

  // Try fetching from new /api/character-art endpoint or local proxy
  try {
    const urlsToTry = [
      `/api/character-image?name=${encodeURIComponent(name)}&series=${encodeURIComponent(series)}${force ? '&force=true' : ''}`,
      `${SERVER_BASE}/api/character-art?name=${encodeURIComponent(name)}&series=${encodeURIComponent(series)}${force ? '&force=true' : ''}`,
      `${SERVER_BASE}/api/character-image?name=${encodeURIComponent(name)}&series=${encodeURIComponent(series)}${force ? '&force=true' : ''}`
    ];

    for (const u of urlsToTry) {
      try {
        const res = await fetch(u, { signal: AbortSignal.timeout(5000) });
        if (res.ok) {
          const data = await res.json();
          if (data.imageUrl && !data.imageUrl.includes('questionmark')) {
            return {
              imageUrl: data.imageUrl,
              bannerUrl: data.bannerUrl || found?.bannerImage || null,
              candidates: data.candidates || [data.imageUrl]
            };
          }
        }
      } catch {}
    }
  } catch (err) {
    console.warn('Image fetch fallback for', name);
  }

  if (found) {
    return {
      imageUrl: found.initialImage,
      bannerUrl: found.bannerImage || null,
      candidates: [found.initialImage]
    };
  }

  return { imageUrl: `https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURIComponent(name)}&backgroundColor=1e293b` };
}

/**
 * Fetches the latest published APK version info from GuideTalk backend.
 */
export async function fetchLatestAppVersion(): Promise<AppVersionInfo> {
  const fallback: AppVersionInfo = {
    latestVersion: '1.0.1',
    latestVersionCode: 2,
    apkUrl: 'https://expo.dev/accounts/samjoshua2002/projects/guildtalk/builds/3d96bb54-70dd-4554-af81-ff1cb86b4693',
    title: 'GuideTalk v1.0.1 Preview Released! 🚀',
    message: 'Featuring instant Change Look image cycling, hourly companion push reminders, and Azure OpenAI canon personality sync.',
    releaseNotes: [
      'Instant Change Look image cycling with 0ms local candidates caching',
      'High-definition portraits scraped live from AniList GraphQL & Jikan',
      'Dynamic Rivals & Foils engine connecting characters to their canonical adversaries',
      'Hourly push check-ins from your favourite companions',
      'Daily Character Prophecy calculated with deterministic astronomical prime-mixing',
      'Direct in-app APK updater and EAS Over-The-Air seamless sync',
    ],
    forceUpdate: false,
  };

  try {
    const res = await fetch(`${SERVER_BASE}/app/version`, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      return {
        ...fallback,
        ...data,
        apkUrl: data.apkUrl && data.apkUrl.includes('builds/') ? data.apkUrl : fallback.apkUrl,
      };
    }
  } catch {}
  return fallback;
}
