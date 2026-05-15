export const features = [
  { t: 'Narrative Engine', d: 'Transforms species intelligence into emotionally precise scripts and captions.' },
  { t: 'Conservation Ledger', d: 'Built-in context on threats, habitat pressure, and urgency metrics.' },
  { t: 'Visual Director', d: 'Poster concepts and shot architecture tuned for cinematic rhythm.' },
  { t: 'Archive Memory', d: 'Every generation saved as a curated artifact with reusable story DNA.' },
];

export const projects = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  species: ['Snow Leopard', 'Orca', 'Pangolin', 'Axolotl', 'Blue Whale'][i % 5],
  type: ['Teaser Film', 'Narrated Short', 'Campaign Poster'][i % 3],
  status: i % 3 === 0 ? 'Rendering' : 'Complete',
  time: `${i + 1}h ago`
}));
