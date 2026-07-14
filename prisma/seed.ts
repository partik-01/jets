import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const entries = [
  ['F-22 Raptor', 'f-22-raptor', 'Air superiority fighter', 'Lockheed Martin', 'US', 'fighter-jets', 2005, 'Mach 2.25', '1,600 nmi'],
  ['SR-71 Blackbird', 'sr-71-blackbird', 'Strategic reconnaissance', 'Lockheed', 'US', 'reconnaissance', 1966, 'Mach 3.3+', '2,900 nmi'],
  ['Concorde', 'concorde', 'Supersonic airliner', 'BAC / Aérospatiale', 'GB', 'passenger-aircraft', 1976, 'Mach 2.04', '3,900 nmi'],
  ['B-2 Spirit', 'b-2-spirit', 'Stealth strategic bomber', 'Northrop Grumman', 'US', 'bombers', 1997, 'High subsonic', '6,000 nmi'],
] as const;

async function main() {
  for (const [name, slug, role, maker, code, categorySlug, year, maxSpeed, range] of entries) {
    const country = await prisma.country.upsert({ where: { code }, update: {}, create: { code, name: code === 'GB' ? 'United Kingdom' : 'United States', region: code === 'GB' ? 'Europe' : 'North America' } });
    const manufacturer = await prisma.manufacturer.upsert({ where: { slug: maker.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/,'') }, update: {}, create: { name: maker, slug: maker.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/,'') } });
    const category = await prisma.category.upsert({ where: { slug: categorySlug }, update: {}, create: { slug: categorySlug, name: categorySlug.replace(/-/g, ' ') } });
    await prisma.aircraft.upsert({ where: { slug }, update: {}, create: { name, slug, role, description: `${name} is a defining aircraft in the AERO digital collection.`, introductionDate: new Date(`${year}-01-01`), manufacturerId: manufacturer.id, countryId: country.id, categoryId: category.id, featured: true, specifications: { create: { maxSpeed, range } } } });
  }
}
main().finally(() => prisma.$disconnect());
