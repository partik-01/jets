export type Aircraft = {
  slug: string;
  name: string;
  manufacturer: string;
  country: string;
  category: string;
  role: string;
  generation: string;
  introductionYear: number;
  status: string;
  description: string;
  maxSpeed: string;
  range: string;
  crew: string;
  engine: string;
  wingspan: string;
  length: string;
  accent: string;
};

export const aircraft: Aircraft[] = [
  { slug: 'f-22-raptor', name: 'F-22 Raptor', manufacturer: 'Lockheed Martin', country: 'United States', category: 'fighter-jets', role: 'Air superiority fighter', generation: '5th Gen', introductionYear: 2005, status: 'Active', description: 'A stealth air-dominance fighter built around supercruise, sensor fusion, and exceptional agility.', maxSpeed: 'Mach 2.25', range: '1,600 nmi', crew: '1', engine: '2 × F119-PW-100', wingspan: '13.6 m', length: '18.9 m', accent: '#65b9e8' },
  { slug: 'sr-71-blackbird', name: 'SR-71 Blackbird', manufacturer: 'Lockheed', country: 'United States', category: 'reconnaissance', role: 'Strategic reconnaissance', generation: 'Cold War', introductionYear: 1966, status: 'Retired', description: 'The titanium reconnaissance aircraft that turned sustained Mach 3 flight into a practical intelligence capability.', maxSpeed: 'Mach 3.3+', range: '2,900 nmi', crew: '2', engine: '2 × J58', wingspan: '16.9 m', length: '32.7 m', accent: '#28374c' },
  { slug: 'concorde', name: 'Concorde', manufacturer: 'BAC / Aérospatiale', country: 'United Kingdom / France', category: 'passenger-aircraft', role: 'Supersonic airliner', generation: 'Supersonic transport', introductionYear: 1976, status: 'Retired', description: 'An elegant Anglo-French supersonic airliner that made the Atlantic crossing in less than four hours.', maxSpeed: 'Mach 2.04', range: '3,900 nmi', crew: '3', engine: '4 × Olympus 593', wingspan: '25.6 m', length: '61.7 m', accent: '#d4a746' },
  { slug: 'b-2-spirit', name: 'B-2 Spirit', manufacturer: 'Northrop Grumman', country: 'United States', category: 'bombers', role: 'Stealth strategic bomber', generation: 'Stealth', introductionYear: 1997, status: 'Active', description: 'A flying-wing bomber designed to penetrate sophisticated air defenses and deliver conventional or nuclear payloads.', maxSpeed: 'High subsonic', range: '6,000 nmi', crew: '2', engine: '4 × F118-GE-100', wingspan: '52.4 m', length: '21.0 m', accent: '#839a82' },
  { slug: 'spitfire-mk-ix', name: 'Spitfire Mk IX', manufacturer: 'Supermarine', country: 'United Kingdom', category: 'fighter-jets', role: 'Fighter', generation: 'World War II', introductionYear: 1942, status: 'Retired', description: 'The refined wartime Spitfire, pairing graceful elliptical wings with the powerful Merlin 61 engine.', maxSpeed: '408 mph', range: '434 mi', crew: '1', engine: '1 × Rolls-Royce Merlin 61', wingspan: '11.2 m', length: '9.5 m', accent: '#799b89' },
  { slug: 'x-15', name: 'North American X-15', manufacturer: 'North American Aviation', country: 'United States', category: 'experimental', role: 'Rocket-powered research aircraft', generation: 'Experimental', introductionYear: 1959, status: 'Retired', description: 'A rocket plane that pushed the boundaries of speed and altitude, setting records still remarkable today.', maxSpeed: 'Mach 6.7', range: '280 mi', crew: '1', engine: '1 × XLR99-RM-2', wingspan: '6.8 m', length: '15.2 m', accent: '#d36a45' },
];

export const categories = [
  { slug: 'fighter-jets', name: 'Fighters', description: 'Agility, speed, and air superiority.', count: 2 },
  { slug: 'bombers', name: 'Bombers', description: 'Long-range reach and strategic force.', count: 1 },
  { slug: 'passenger-aircraft', name: 'Airliners', description: 'The engineering of shared flight.', count: 1 },
  { slug: 'experimental', name: 'Experimental', description: 'Aircraft that redefined possibility.', count: 1 },
  { slug: 'reconnaissance', name: 'Reconnaissance', description: 'Seeing farther, flying faster.', count: 1 },
];

export function getAircraft(slug: string) { return aircraft.find((item) => item.slug === slug); }
export function titleCase(value: string) { return value.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()); }
