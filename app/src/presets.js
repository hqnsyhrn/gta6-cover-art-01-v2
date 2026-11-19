// One-click poster presets: each instantly produces a finished poster — a hero
// photo, a distinct 3-photo strip, a grade, and title/subtitle/tagline with real
// hierarchy. Every preset uses DISTINCT photos (repeats killed V1's ART score).
// Shared by main.js (editor) and shots.js (?shot= scenes).
export const PRESETS = {
  'neon-harbour': {
    label: 'Neon Harbour', layout: 'posterHero', grade: 'neon',
    title: 'NEON HARBOUR', subtitle: 'welcome to Leonida',
    tagline: 'EVERY STREET HAS A STORY.',
    photos: ['harbour-night', 'beach-tower', 'diner-neon', 'motel-dusk'],
  },
  'sunset-chase': {
    label: 'Sunset Chase', layout: 'posterHero', grade: 'sunset',
    title: 'SUNSET CHASE', subtitle: 'welcome to Leonida',
    tagline: 'EVERY SUNSET HAS A PRICE.',
    photos: ['car-palms', 'skyline-dusk', 'beach-tower', 'man-pier'],
  },
  'gold-hour': {
    label: 'Gold Hour', layout: 'poster', grade: 'gold',
    title: 'GOLD HOUR', subtitle: 'welcome to Leonida',
    tagline: 'ONE CITY. NO WAY OUT.',
    photos: ['motel-dusk', 'beach-tower', 'car-palms', 'skyline-dusk'],
  },
  'vice-nights': {
    label: 'Vice Nights', layout: 'hero8', grade: 'teal',
    title: 'VICE NIGHTS', subtitle: 'welcome to Leonida',
    tagline: 'THE CITY NEVER SLEEPS.',
    photos: ['harbour-night', 'diner-neon', 'friends-neon', 'man-rooftop', 'skyline-dusk', 'beach-tower', 'motel-dusk', 'car-palms', 'man-pier'],
  },
};

/** Apply a preset to editor state (layout/grade/lettering + distinct photos). */
export function applyPreset(state, library, key) {
  const p = PRESETS[key];
  if (!p) return false;
  state.layout = p.layout;
  state.grade = p.grade;
  state.title = p.title;
  state.subtitle = p.subtitle;
  state.tagline = p.tagline;
  state.panels.forEach((panel, i) => {
    const id = p.photos[i % p.photos.length];
    panel.photo = id;
    panel.img = library[id] ?? null;
  });
  return true;
}
