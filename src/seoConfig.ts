// ─────────────────────────────────────────────────────────────────────────────
//  src/seoConfig.ts
//  Auto-generates title, description, and canonical URL for every page.
//  Used by useSEO() hook and vite-ssg route generation.
// ─────────────────────────────────────────────────────────────────────────────

export interface SEOMeta {
  title: string
  description: string
  canonical: string
  keywords: string
}

const BASE_URL = 'https://bbst.global'
const BRAND = 'BBST Oman'
const CTA = '+968 92882417'

// ─── STATIC PAGES ────────────────────────────────────────────────────────────

export const staticSEO: Record<string, SEOMeta> = {
  '/': {
    title: 'BBST Oman | Bulk Raw Materials & Commodity Trading | CIF Oman · FOB Dubai',
    description:
      'BBST — Trusted B2B bulk commodity trading company. Soybean oil, EN590 diesel, sulfur, urea, metals, fertilizers, feed additives & industrial chemicals. CIF Oman, FOB Dubai. Call +968 92882417.',
    canonical: `${BASE_URL}/`,
    keywords:
      'raw materials supplier Oman, bulk commodity trading, B2B supplier Dubai, CIF Oman, FOB Dubai, BBST trading',
  },
  '/about': {
    title: 'About BBST | Bright Business Services and Trading LLC | Muscat, Oman',
    description:
      'Learn about Bright Business Services and Trading LLC (BBST) — a Muscat-based international commodity trading company supplying bulk raw materials across the GCC, India, and global markets.',
    canonical: `${BASE_URL}/about`,
    keywords: 'BBST Oman, Bright Business Services Trading, commodity trading company Muscat',
  },
  '/contact': {
    title: 'Contact BBST | Raw Material Supplier Oman | +968 92882417',
    description:
      'Get a quotation from BBST. Contact our trading team for bulk raw materials, CIF Oman and FOB Dubai supply. Call +968 92882417 or email us today.',
    canonical: `${BASE_URL}/contact`,
    keywords: 'contact BBST Oman, raw material quotation, bulk supplier inquiry Muscat',
  },
  '/categories': {
    title: 'All Product Categories | BBST Global Commodity Trading',
    description:
      'Browse BBST\'s full range: fertilizers, petroleum products, metals, feed additives, industrial minerals, petrochemicals, and cosmetic raw materials. Global B2B bulk supply.',
    canonical: `${BASE_URL}/categories`,
    keywords:
      'commodity categories, bulk raw materials, trading products Oman, B2B industrial supply',
  },
}

// ─── CATEGORY SEO ────────────────────────────────────────────────────────────

export const categorySEO: Record<string, SEOMeta> = {
  'fertilizers-agricultural-inputs': {
    title: 'Fertilizers & Agricultural Inputs Supplier | NPK, Urea, DAP, Potash | BBST Oman',
    description:
      'Bulk supplier of NPK, Urea (prilled/granular), DAP, Potash (MOP/SOP), Sulphur, and Peatmoss. CIF Oman, FOB Dubai. Agricultural inputs for GCC, India & global markets. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs`,
    keywords:
      'fertilizer supplier Oman, NPK supplier, urea supplier Dubai, DAP supplier, potash supplier, sulphur fertilizer, peatmoss supplier, agricultural inputs Muscat',
  },
  'energy-petroleum-products': {
    title: 'Petroleum Products Supplier | EN590, Crude Oil, Bitumen, LPG | BBST Oman',
    description:
      'Bulk petroleum trading: EN590 diesel, crude oil (light/heavy/sweet/sour), bitumen (60/70, 80/100, PMB), LPG, propane, butane. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/energy-petroleum-products`,
    keywords:
      'petroleum supplier Oman, EN590 diesel supplier, crude oil trading, bitumen supplier Dubai, LPG supplier GCC, fuel oil Muscat',
  },
  'petrochemicals-industrial-chemicals': {
    title: 'Petrochemicals & Polymers Supplier | PE, PP, PVC, Methanol, Resins | BBST Oman',
    description:
      'Bulk supplier of polymers (HDPE, LDPE, PP, PVC, PET, PS), industrial resins (epoxy, polyester, phenolic), and methanol. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/petrochemicals-industrial-chemicals`,
    keywords:
      'polymer supplier Oman, HDPE supplier, polypropylene supplier Dubai, PVC supplier, methanol supplier, epoxy resin, petrochemical trading GCC',
  },
  'metals-metallic-ores': {
    title: 'Metals & Metallic Ores Supplier | Copper, Manganese, Chrome, Gold, Zinc | BBST Oman',
    description:
      'International supplier of copper ore & concentrate, manganese ore (high/medium/low grade), ferrochrome, chrome ore, bauxite, zinc, aluminum ingots & gold. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores`,
    keywords:
      'metal ore supplier Oman, copper concentrate supplier, manganese ore trading, chrome ore supplier, zinc ingots, aluminum ingots, gold ore supplier Dubai',
  },
  'industrial-minerals-construction-materials': {
    title: 'Industrial Minerals & Construction Materials | Quartz, Limestone, Cement, Gypsum | BBST',
    description:
      'Bulk supplier of quartz, silica, dolomite, limestone, gypsum, bentonite, aggregate, cement (OPC/PPC/SRC/White), salt, and concrete materials. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials`,
    keywords:
      'industrial minerals supplier Oman, limestone supplier, gypsum supplier, cement supplier Muscat, quartz supplier, bentonite supplier Dubai, construction materials GCC',
  },
  'feed-additives-raw-materials': {
    title: 'Animal Feed Raw Materials Supplier | Soybean Meal, DDGS, Molasses, Corn | BBST Oman',
    description:
      'B2B supplier of feed grains (corn, wheat, barley), protein meals (soybean meal, canola, sunflower), animal proteins (fish meal, MBM), molasses, DDGS, and feed minerals. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/feed-additives-raw-materials`,
    keywords:
      'animal feed supplier Oman, soybean meal supplier, corn supplier Dubai, fish meal supplier, molasses supplier, DDGS supplier, feed raw materials GCC',
  },
  'cosmetic-raw-materials': {
    title: 'Cosmetic Raw Materials Supplier | Bentonite, Ethanol, Silica, Resins | BBST Oman',
    description:
      'Cosmetic-grade raw materials: bentonite (sodium/calcium), ethanol (ENA, denatured, anhydrous), specialty silica, and cosmetic resins. EU Cosmetics Regulation compliant. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/cosmetic-raw-materials`,
    keywords:
      'cosmetic raw materials supplier, cosmetic bentonite, cosmetic ethanol supplier, silica cosmetic grade, ENA supplier Oman',
  },
}

// ─── PRODUCT SEO (key products — one per major product) ──────────────────────

export const productSEO: Record<string, SEOMeta> = {
  // FERTILIZERS
  'fertilizers-agricultural-inputs/npk': {
    title: 'NPK Fertilizer Supplier | 20-20-20, 10-52-10, 10-10-40 Water Soluble | BBST Oman',
    description:
      'Water-soluble NPK fertilizers for fertigation & foliar feeding. Grades: 20-20-20, 10-52-10, 10-10-40, 15-15-30, 13-40-13, 12-12-36, 15-30-15. HS Code 3105.20. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs/npk`,
    keywords: 'NPK fertilizer supplier Oman, water soluble NPK, NPK 20-20-20 supplier, fertigation fertilizer Dubai',
  },
  'fertilizers-agricultural-inputs/urea': {
    title: 'Urea Fertilizer Supplier | Prilled & Granular 46% N | Bulk Supply | BBST Oman',
    description:
      'Bulk urea fertilizer — prilled and granular, 46% nitrogen, biuret ≤1%. HS Code 3102.10. CIF Oman, FOB Dubai. Minimum order: bulk vessel. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs/urea`,
    keywords: 'urea supplier Oman, urea fertilizer bulk, prilled urea supplier, granular urea Dubai, 46% nitrogen fertilizer',
  },
  'fertilizers-agricultural-inputs/dap': {
    title: 'DAP Fertilizer Supplier | 18-46-0, 16-48-0, 21-53-0 | Bulk Supply | BBST Oman',
    description:
      'Diammonium phosphate (DAP) in multiple grades: 18-46-0, 18-46-0+TE, 16-48-0, 21-53-0. HS Code 3105.30. Bulk supply CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs/dap`,
    keywords: 'DAP fertilizer supplier, diammonium phosphate Oman, DAP 18-46-0 supplier, phosphate fertilizer Dubai',
  },
  'fertilizers-agricultural-inputs/potash': {
    title: 'Potash Supplier | MOP 0-0-60, SOP 0-0-50 Granular & Water Soluble | BBST Oman',
    description:
      'Muriate of Potash (MOP 0-0-60) and Sulphate of Potash (SOP 0-0-50) in granular, powder, and water-soluble grades. HS Code 3104.20. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs/potash`,
    keywords: 'potash supplier Oman, MOP supplier, SOP supplier, muriate of potash Dubai, sulphate of potash GCC',
  },
  'fertilizers-agricultural-inputs/sulphur': {
    title: 'Sulphur Supplier Oman | Granular & Prilled 99% | Bulk Agricultural Sulphur | BBST',
    description:
      'Elemental sulphur 99% purity — granular and prilled forms. HS Code 2503.00. Soil pH management and fertilizer blending. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/fertilizers-agricultural-inputs/sulphur`,
    keywords: 'sulphur supplier Oman, sulfur supplier Dubai, elemental sulphur bulk, agricultural sulphur GCC',
  },

  // ENERGY & PETROLEUM
  'energy-petroleum-products/en590-diesel': {
    title: 'EN590 Diesel Supplier | Ultra-Low Sulfur 10ppm | Bulk Fuel Oman & Dubai | BBST',
    description:
      'EN590 diesel fuel — 10ppm max sulfur, cetane ≥51, density 820–845 kg/m³. Euro 5/6 compliant. Bulk supply CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/energy-petroleum-products/en590-diesel`,
    keywords: 'EN590 supplier Oman, EN590 diesel Dubai, ULSD supplier, bulk diesel supply GCC, EN590 bulk fuel',
  },
  'energy-petroleum-products/crude-oil': {
    title: 'Crude Oil Supplier | Light, Medium, Heavy, Sweet & Sour Crude | BBST Oman',
    description:
      'International crude oil trading — light sweet, medium, heavy sour, and WTI-aligned grades. HS Code 2709.00. Structured lifting programs. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/energy-petroleum-products/crude-oil`,
    keywords: 'crude oil supplier Oman, crude oil trading Dubai, light crude supplier, petroleum trading GCC',
  },
  'energy-petroleum-products/bitumen': {
    title: 'Bitumen Supplier | 60/70, 80/100, VG30, VG40, PMB | Bulk & Drums | BBST Oman',
    description:
      'Full range bitumen: penetration grades 60/70, 80/100, 85/100, 200/300; viscosity grades VG30, VG40; and Polymer Modified Bitumen (PMB). HS Code 2713.20. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/energy-petroleum-products/bitumen`,
    keywords: 'bitumen supplier Oman, bitumen 60/70 Dubai, VG30 bitumen, PMB supplier, road bitumen GCC, asphalt supplier',
  },
  'energy-petroleum-products/lpg': {
    title: 'LPG Supplier | Commercial, Automotive & Industrial Grade | Bulk | BBST Oman',
    description:
      'Liquefied Petroleum Gas (LPG) in commercial, autogas, and industrial grades. Propane, butane, and blended LPG. HS Code 2711.19. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/energy-petroleum-products/lpg`,
    keywords: 'LPG supplier Oman, LPG trading Dubai, autogas supplier, propane supplier GCC, butane supplier',
  },

  // METALS
  'metals-metallic-ores/copper': {
    title: 'Copper Ore & Concentrate Supplier | 20–35% Cu | BBST Oman',
    description:
      'Copper ore (0.5–5% Cu), copper concentrate (20–35% Cu), and copper slag. HS Code 2603. SGS/Bureau Veritas assay. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores/copper`,
    keywords: 'copper ore supplier, copper concentrate supplier Oman, copper trading Dubai, copper ore export',
  },
  'metals-metallic-ores/manganese': {
    title: 'Manganese Ore & Concentrate Supplier | High/Medium/Low Grade | BBST Oman',
    description:
      'Manganese ore (30–48%+ Mn) and concentrate (35–55%+ Mn) — high, medium, low, and ferruginous grades. HS Code 2602. Bulk vessel supply. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores/manganese`,
    keywords: 'manganese ore supplier, manganese concentrate, high grade manganese Oman, manganese trading Dubai',
  },
  'metals-metallic-ores/gold': {
    title: 'Gold Supplier | Ore, Ingots, Bars & Nuggets | 94–99.9% | BBST Oman',
    description:
      'Gold in ore, 1KG ingots, bars (100g–12.5kg), and nuggets. Purity 94–99.9%. HS Code 7108. Full compliance, COC, and assay documentation. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores/gold`,
    keywords: 'gold supplier Oman, gold ingots supplier, gold bars trading, gold ore export',
  },
  'metals-metallic-ores/zinc': {
    title: 'Zinc Supplier | SHG 99.995% Ingots, Refined & Concentrate | BBST Oman',
    description:
      'Zinc concentrate (45–60% Zn), refined zinc (SHG 99.995%), and zinc ingots. LME-compliant grades. HS Code 2608/7901. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores/zinc`,
    keywords: 'zinc supplier Oman, SHG zinc ingots, zinc concentrate, zinc trading Dubai, LME zinc',
  },
  'metals-metallic-ores/aluminum-ingots': {
    title: 'Aluminum Ingots Supplier | Primary 99.7% | T-Bar, Sow, Notch-Bar | BBST Oman',
    description:
      'Primary aluminum ingots (99.7% min), alloy series 1xxx–6xxx. T-bar, sow, and notch-bar formats. Palletized or bulk. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/metals-metallic-ores/aluminum-ingots`,
    keywords: 'aluminum ingots supplier Oman, primary aluminum supplier, aluminium ingots Dubai, T-bar aluminum',
  },

  // INDUSTRIAL MINERALS
  'industrial-minerals-construction-materials/limestone': {
    title: 'Limestone Supplier | Ore, Crushed, Quicklime & Hydrated Lime | BBST Oman',
    description:
      'Limestone ore (CaCO₃ 85–98%), crushed limestone, quicklime (CaO 85–95%), and hydrated lime. HS Code 2521/2522. Bulk supply CIF Oman. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/limestone`,
    keywords: 'limestone supplier Oman, quicklime supplier, hydrated lime Dubai, crushed limestone GCC, calcium carbonate supplier',
  },
  'industrial-minerals-construction-materials/gypsum': {
    title: 'Gypsum Supplier | Raw Ore, Crushed, Plaster of Paris, Industrial Powder | BBST Oman',
    description:
      'Natural gypsum ore (CaSO₄·2H₂O 70–95%), crushed gypsum, calcined gypsum (Plaster of Paris), and industrial powder. HS Code 2520. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/gypsum`,
    keywords: 'gypsum supplier Oman, plaster of paris supplier, raw gypsum Dubai, gypsum powder GCC, cement gypsum',
  },
  'industrial-minerals-construction-materials/cement': {
    title: 'Cement Supplier Oman | OPC, PPC, SRC & White Cement Bulk Supply | BBST',
    description:
      'Bulk cement supply: OPC (32.5/42.5/52.5 MPa), Portland Pozzolana, Sulfate Resistant, and White Cement. HS Code 2523. 50kg bags, big bags, bulk tanker. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/cement`,
    keywords: 'cement supplier Oman, OPC cement Dubai, white cement supplier, SRC cement, bulk cement GCC, Portland cement',
  },
  'industrial-minerals-construction-materials/bentonite': {
    title: 'Bentonite Supplier | Sodium, Calcium & Activated Grades | Drilling Mud | BBST Oman',
    description:
      'Bentonite ore, sodium bentonite (drilling grade), calcium bentonite, activated/bleaching earth, and industrial powder. HS Code 2508. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/bentonite`,
    keywords: 'bentonite supplier Oman, sodium bentonite drilling mud, calcium bentonite Dubai, bleaching earth supplier, activated bentonite',
  },
  'industrial-minerals-construction-materials/quartz': {
    title: 'Quartz Supplier | HPQ, Industrial Sand, Crystals & Powder | BBST Oman',
    description:
      'Quartz in four grades: High-Purity Quartz (SiO₂ 99.95–99.99%), industrial sand, natural/synthetic crystals, and fine powder. HS Code 2506. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/quartz`,
    keywords: 'quartz supplier Oman, high purity quartz HPQ, industrial quartz sand, silica quartz Dubai, quartz powder',
  },
  'industrial-minerals-construction-materials/dolomite': {
    title: 'Dolomite Supplier | Ore, Calcined Dolomite & Dolomite Powder | BBST Oman',
    description:
      'Dolomite ore, calcined dolomite (CaO+MgO), and dolomite powder (100–500 mesh). HS Code 2518. For steel, glass, agriculture, refractory. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/dolomite`,
    keywords: 'dolomite supplier Oman, calcined dolomite, dolomite powder Dubai, industrial dolomite GCC, refractory dolomite',
  },
  'industrial-minerals-construction-materials/salt': {
    title: 'Industrial Salt Supplier | Rock Salt, Solar Salt, Refined & Tablets | BBST Oman',
    description:
      'Rock salt, solar salt (NaCl 95–98.5%), granular refined salt, and salt tablets/pellets. HS Code 2501. Chlor-alkali, water treatment, de-icing supply. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/industrial-minerals-construction-materials/salt`,
    keywords: 'industrial salt supplier Oman, rock salt supplier, solar salt Dubai, salt tablets water softener, NaCl bulk supply',
  },

  // FEED RAW MATERIALS
  'feed-additives-raw-materials/main-grains': {
    title: 'Feed Grains Supplier | Corn, Wheat, Barley, Sorghum, Millet | Bulk | BBST Oman',
    description:
      'Bulk feed grains: corn/maize, wheat, barley, sorghum, and millet. Moisture ≤14%, full mycotoxin analysis. CIF Oman, FOB Dubai. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/feed-additives-raw-materials/main-grains`,
    keywords: 'feed corn supplier Oman, wheat feed grade, barley supplier Dubai, sorghum feed, grain supplier GCC animal feed',
  },
  'feed-additives-raw-materials/protein-meals': {
    title: 'Feed Protein Meal Supplier | Soybean Meal, Canola Meal, Sunflower Meal | BBST Oman',
    description:
      'Soybean meal (44–48% CP), canola/rapeseed meal (34–38% CP), sunflower meal (28–36% CP). Bulk supply CIF Oman. Full amino acid profiles. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/feed-additives-raw-materials/protein-meals`,
    keywords: 'soybean meal supplier Oman, canola meal supplier, sunflower meal Dubai, protein meal feed GCC, SBM supplier',
  },
  'feed-additives-raw-materials/fats-oils': {
    title: 'Feed Grade Fats & Oils Supplier | Soybean Oil, Poultry Fat, Palm Oil | BBST Oman',
    description:
      'Feed-grade soybean oil (CDSO), poultry fat, and palm oil/palm acid oil. High metabolizable energy. HS Code 1507/1502/1511. CIF Oman. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/feed-additives-raw-materials/fats-oils`,
    keywords: 'soybean oil supplier Oman, CDSO supplier, crude degummed soybean oil, poultry fat supplier, palm oil feed grade Dubai',
  },
  'feed-additives-raw-materials/molasses-food-grade': {
    title: 'Molasses Supplier | Sugarcane, Sugar Beet & Blackstrap | Bulk Flexitank | BBST Oman',
    description:
      'Sugarcane molasses, sugar beet molasses, and blackstrap molasses. Brix 75–85%. HS Code 1703. ISO tanks and flexitanks. CIF Oman. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/feed-additives-raw-materials/molasses-food-grade`,
    keywords: 'molasses supplier Oman, sugarcane molasses bulk, blackstrap molasses Dubai, molasses flexitank GCC',
  },

  // PETROCHEMICALS
  'petrochemicals-industrial-chemicals/polymers': {
    title: 'Polymer Supplier | HDPE, LDPE, PP, PVC, PET, PS Virgin Granules | BBST Oman',
    description:
      'Virgin polymer resins: HDPE, LDPE, LLDPE, polypropylene (PP), PVC, polystyrene (PS), and PET. HS Code 3901–3907. 25kg bags or jumbo bags. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/petrochemicals-industrial-chemicals/polymers`,
    keywords: 'HDPE supplier Oman, polypropylene supplier Dubai, PVC resin supplier, polymer granules GCC, LDPE supplier',
  },
  'petrochemicals-industrial-chemicals/methanol': {
    title: 'Methanol Supplier | Industrial & Fuel Grade ≥99.85% | ISO Tank | BBST Oman',
    description:
      'High-purity methanol (CH₃OH) ≥99.85% — industrial and fuel grades. ASTM D1152 compliant. ISO tanks, flexitanks, bulk vessel. HS Code 2905.11. BBST +968 92882417.',
    canonical: `${BASE_URL}/categories/petrochemicals-industrial-chemicals/methanol`,
    keywords: 'methanol supplier Oman, methanol trading Dubai, industrial methanol, fuel grade methanol GCC, CH3OH bulk supply',
  },
}

// ─── HELPER: get SEO for any page ────────────────────────────────────────────

/**
 * Returns SEO metadata for a given pathname.
 * Falls back to brand-level defaults if no specific config exists.
 *
 * Usage:
 *   const { title, description, canonical, keywords } = getSEO('/categories/energy-petroleum-products/en590-diesel')
 */
export function getSEO(pathname: string): SEOMeta {
  // Normalize: strip trailing slash
  const path = pathname.replace(/\/$/, '') || '/'

  // 1. Exact static page match
  if (staticSEO[path]) return staticSEO[path]

  // 2. Category page match
  const categorySlug = path.replace('/categories/', '')
  if (categorySEO[categorySlug]) return categorySEO[categorySlug]

  // 3. Product page match (category/product or category/product/subproduct)
  const productKey = path.replace('/categories/', '')
  if (productSEO[productKey]) return productSEO[productKey]

  // 4. Fallback — generic brand meta
  return {
    title: `${BRAND} | Bulk Raw Materials & Commodity Trading`,
    description: `Bright Business Services and Trading LLC — B2B bulk commodity supplier. Agricultural inputs, petroleum, metals, feed additives, industrial minerals. CIF Oman, FOB Dubai. ${CTA}.`,
    canonical: `${BASE_URL}${path}`,
    keywords: 'BBST Oman, raw materials supplier, commodity trading, bulk supply Oman Dubai',
  }
}

// ─── ROUTE LIST (for vite-ssg to pre-render all pages) ───────────────────────

export const allRoutes: string[] = [
  '/',
  '/about',
  '/contact',
  '/categories',

  // Categories
  '/categories/fertilizers-agricultural-inputs',
  '/categories/energy-petroleum-products',
  '/categories/petrochemicals-industrial-chemicals',
  '/categories/metals-metallic-ores',
  '/categories/industrial-minerals-construction-materials',
  '/categories/feed-additives-raw-materials',
  '/categories/cosmetic-raw-materials',

  // Fertilizers
  '/categories/fertilizers-agricultural-inputs/npk',
  '/categories/fertilizers-agricultural-inputs/npk/20-20-20',
  '/categories/fertilizers-agricultural-inputs/npk/10-52-10',
  '/categories/fertilizers-agricultural-inputs/npk/10-10-40',
  '/categories/fertilizers-agricultural-inputs/npk/15-15-30-te',
  '/categories/fertilizers-agricultural-inputs/npk/20-20-20-te',
  '/categories/fertilizers-agricultural-inputs/npk/13-40-13-te',
  '/categories/fertilizers-agricultural-inputs/npk/12-12-36-te',
  '/categories/fertilizers-agricultural-inputs/npk/15-30-15-te',
  '/categories/fertilizers-agricultural-inputs/urea',
  '/categories/fertilizers-agricultural-inputs/urea/prilled',
  '/categories/fertilizers-agricultural-inputs/urea/granular',
  '/categories/fertilizers-agricultural-inputs/potash',
  '/categories/fertilizers-agricultural-inputs/potash/mop-0-0-60',
  '/categories/fertilizers-agricultural-inputs/potash/sop-0-0-50',
  '/categories/fertilizers-agricultural-inputs/potash/sop-granular',
  '/categories/fertilizers-agricultural-inputs/potash/sop-water-soluble',
  '/categories/fertilizers-agricultural-inputs/dap',
  '/categories/fertilizers-agricultural-inputs/dap/18-46-0',
  '/categories/fertilizers-agricultural-inputs/dap/18-46-0-te',
  '/categories/fertilizers-agricultural-inputs/dap/16-48-0',
  '/categories/fertilizers-agricultural-inputs/dap/21-53-0',
  '/categories/fertilizers-agricultural-inputs/sulphur',
  '/categories/fertilizers-agricultural-inputs/sulphur/granular',
  '/categories/fertilizers-agricultural-inputs/sulphur/prilled',
  '/categories/fertilizers-agricultural-inputs/peatmoss',
  '/categories/fertilizers-agricultural-inputs/peatmoss/sphagnum-horticultural',
  '/categories/fertilizers-agricultural-inputs/peatmoss/professional-substrate',
  '/categories/fertilizers-agricultural-inputs/peatmoss/coarse-fiber',
  '/categories/fertilizers-agricultural-inputs/peatmoss/fine-grade',

  // Energy & Petroleum
  '/categories/energy-petroleum-products/crude-oil',
  '/categories/energy-petroleum-products/crude-oil/light-crude',
  '/categories/energy-petroleum-products/crude-oil/medium-crude',
  '/categories/energy-petroleum-products/crude-oil/heavy-crude',
  '/categories/energy-petroleum-products/crude-oil/sweet-crude',
  '/categories/energy-petroleum-products/crude-oil/sour-crude',
  '/categories/energy-petroleum-products/en590-diesel',
  '/categories/energy-petroleum-products/bitumen',
  '/categories/energy-petroleum-products/bitumen/bitumen-60-70',
  '/categories/energy-petroleum-products/bitumen/bitumen-80-100',
  '/categories/energy-petroleum-products/bitumen/bitumen-85-100',
  '/categories/energy-petroleum-products/bitumen/bitumen-200-300',
  '/categories/energy-petroleum-products/bitumen/bitumen-vg30',
  '/categories/energy-petroleum-products/bitumen/bitumen-vg40',
  '/categories/energy-petroleum-products/bitumen/pmb',
  '/categories/energy-petroleum-products/bitumen/customized-bitumen',
  '/categories/energy-petroleum-products/propane',
  '/categories/energy-petroleum-products/butane',
  '/categories/energy-petroleum-products/lpg',
  '/categories/energy-petroleum-products/lpg/lpg-commercial',
  '/categories/energy-petroleum-products/lpg/lpg-automotive',
  '/categories/energy-petroleum-products/lpg/lpg-industrial',

  // Petrochemicals
  '/categories/petrochemicals-industrial-chemicals/polymers',
  '/categories/petrochemicals-industrial-chemicals/polymers/polyethylene-pe',
  '/categories/petrochemicals-industrial-chemicals/polymers/polypropylene-pp',
  '/categories/petrochemicals-industrial-chemicals/polymers/polyvinyl-chloride-pvc',
  '/categories/petrochemicals-industrial-chemicals/polymers/polystyrene-ps',
  '/categories/petrochemicals-industrial-chemicals/polymers/polyethylene-terephthalate-pet',
  '/categories/petrochemicals-industrial-chemicals/resins',
  '/categories/petrochemicals-industrial-chemicals/resins/epoxy-resin',
  '/categories/petrochemicals-industrial-chemicals/resins/polyester-resin',
  '/categories/petrochemicals-industrial-chemicals/resins/phenolic-resin',
  '/categories/petrochemicals-industrial-chemicals/resins/urea-formaldehyde-resin',
  '/categories/petrochemicals-industrial-chemicals/methanol',
  '/categories/petrochemicals-industrial-chemicals/methanol/industrial-grade',
  '/categories/petrochemicals-industrial-chemicals/methanol/fuel-grade',

  // Metals
  '/categories/metals-metallic-ores/copper',
  '/categories/metals-metallic-ores/copper/copper-ore',
  '/categories/metals-metallic-ores/copper/copper-concentrate',
  '/categories/metals-metallic-ores/copper/copper-slag',
  '/categories/metals-metallic-ores/manganese',
  '/categories/metals-metallic-ores/manganese/manganese-ore-high-grade',
  '/categories/metals-metallic-ores/manganese/manganese-ore-medium-grade',
  '/categories/metals-metallic-ores/manganese/manganese-ore-low-grade',
  '/categories/metals-metallic-ores/manganese/manganese-ore-ferruginous',
  '/categories/metals-metallic-ores/manganese/manganese-concentrate-high-grade',
  '/categories/metals-metallic-ores/manganese/manganese-concentrate-medium-grade',
  '/categories/metals-metallic-ores/manganese/manganese-concentrate-low-grade',
  '/categories/metals-metallic-ores/ferrochrome',
  '/categories/metals-metallic-ores/chrome',
  '/categories/metals-metallic-ores/chrome/chrome-ore',
  '/categories/metals-metallic-ores/chrome/chrome-concentrate',
  '/categories/metals-metallic-ores/antimony',
  '/categories/metals-metallic-ores/bauxite',
  '/categories/metals-metallic-ores/bauxite/raw-bauxite',
  '/categories/metals-metallic-ores/bauxite/beneficiated-bauxite',
  '/categories/metals-metallic-ores/aluminum-ingots',
  '/categories/metals-metallic-ores/gold',
  '/categories/metals-metallic-ores/gold/gold-ore',
  '/categories/metals-metallic-ores/gold/gold-ingots',
  '/categories/metals-metallic-ores/gold/gold-bars',
  '/categories/metals-metallic-ores/gold/gold-nuggets',
  '/categories/metals-metallic-ores/zinc',
  '/categories/metals-metallic-ores/zinc/zinc-concentrate',
  '/categories/metals-metallic-ores/zinc/zinc-refined',
  '/categories/metals-metallic-ores/zinc/zinc-ingots',

  // Industrial Minerals
  '/categories/industrial-minerals-construction-materials/quartz',
  '/categories/industrial-minerals-construction-materials/quartz/high-purity-quartz',
  '/categories/industrial-minerals-construction-materials/quartz/industrial-quartz-sand',
  '/categories/industrial-minerals-construction-materials/quartz/quartz-crystals',
  '/categories/industrial-minerals-construction-materials/quartz/quartz-powder',
  '/categories/industrial-minerals-construction-materials/silica',
  '/categories/industrial-minerals-construction-materials/silica/crystalline-silica',
  '/categories/industrial-minerals-construction-materials/silica/precipitated-silica',
  '/categories/industrial-minerals-construction-materials/silica/fumed-silica',
  '/categories/industrial-minerals-construction-materials/silica/silica-gel',
  '/categories/industrial-minerals-construction-materials/silica/colloidal-silica',
  '/categories/industrial-minerals-construction-materials/dolomite',
  '/categories/industrial-minerals-construction-materials/dolomite/dolomite-ore',
  '/categories/industrial-minerals-construction-materials/dolomite/calcined-dolomite',
  '/categories/industrial-minerals-construction-materials/dolomite/dolomite-powder',
  '/categories/industrial-minerals-construction-materials/limestone',
  '/categories/industrial-minerals-construction-materials/limestone/limestone-ore',
  '/categories/industrial-minerals-construction-materials/limestone/crushed-limestone',
  '/categories/industrial-minerals-construction-materials/limestone/quicklime',
  '/categories/industrial-minerals-construction-materials/limestone/hydrated-lime',
  '/categories/industrial-minerals-construction-materials/gypsum',
  '/categories/industrial-minerals-construction-materials/gypsum/raw-gypsum-ore',
  '/categories/industrial-minerals-construction-materials/gypsum/crushed-gypsum',
  '/categories/industrial-minerals-construction-materials/gypsum/calcined-gypsum-plaster-of-paris',
  '/categories/industrial-minerals-construction-materials/gypsum/gypsum-powder-industrial',
  '/categories/industrial-minerals-construction-materials/aggregate',
  '/categories/industrial-minerals-construction-materials/aggregate/coarse-aggregates',
  '/categories/industrial-minerals-construction-materials/aggregate/fine-aggregates-sand',
  '/categories/industrial-minerals-construction-materials/aggregate/crushed-stone-aggregate',
  '/categories/industrial-minerals-construction-materials/aggregate/recycled-aggregate',
  '/categories/industrial-minerals-construction-materials/aggregate/specialized-aggregates',
  '/categories/industrial-minerals-construction-materials/zinc',
  '/categories/industrial-minerals-construction-materials/bentonite',
  '/categories/industrial-minerals-construction-materials/bentonite/bentonite-ore',
  '/categories/industrial-minerals-construction-materials/bentonite/sodium-bentonite',
  '/categories/industrial-minerals-construction-materials/bentonite/calcium-bentonite',
  '/categories/industrial-minerals-construction-materials/bentonite/activated-bentonite',
  '/categories/industrial-minerals-construction-materials/bentonite/bentonite-powder',
  '/categories/industrial-minerals-construction-materials/salt',
  '/categories/industrial-minerals-construction-materials/salt/rock-salt',
  '/categories/industrial-minerals-construction-materials/salt/solar-salt',
  '/categories/industrial-minerals-construction-materials/salt/granular-refined-salt',
  '/categories/industrial-minerals-construction-materials/salt/salt-tablets-pellets',
  '/categories/industrial-minerals-construction-materials/cement',
  '/categories/industrial-minerals-construction-materials/cement/ordinary-portland-cement',
  '/categories/industrial-minerals-construction-materials/cement/portland-pozzolana-cement',
  '/categories/industrial-minerals-construction-materials/cement/sulfate-resistant-cement',
  '/categories/industrial-minerals-construction-materials/cement/white-cement',
  '/categories/industrial-minerals-construction-materials/concrete',
  '/categories/industrial-minerals-construction-materials/concrete/dry-mix-concrete',
  '/categories/industrial-minerals-construction-materials/concrete/precast-concrete',
  '/categories/industrial-minerals-construction-materials/concrete/specialized-concrete',

  // Feed Additives
  '/categories/feed-additives-raw-materials/salt-edible-grade',
  '/categories/feed-additives-raw-materials/sugar-food-grade',
  '/categories/feed-additives-raw-materials/main-grains',
  '/categories/feed-additives-raw-materials/main-grains/corn-maize',
  '/categories/feed-additives-raw-materials/main-grains/wheat-feed',
  '/categories/feed-additives-raw-materials/main-grains/barley-feed',
  '/categories/feed-additives-raw-materials/main-grains/sorghum-feed',
  '/categories/feed-additives-raw-materials/main-grains/millet-feed',
  '/categories/feed-additives-raw-materials/protein-meals',
  '/categories/feed-additives-raw-materials/protein-meals/soybean-meal',
  '/categories/feed-additives-raw-materials/protein-meals/canola-meal',
  '/categories/feed-additives-raw-materials/protein-meals/sunflower-meal',
  '/categories/feed-additives-raw-materials/animal-proteins',
  '/categories/feed-additives-raw-materials/animal-proteins/fish-meal',
  '/categories/feed-additives-raw-materials/animal-proteins/meat-bone-meal',
  '/categories/feed-additives-raw-materials/feed-by-products',
  '/categories/feed-additives-raw-materials/feed-by-products/wheat-bran',
  '/categories/feed-additives-raw-materials/feed-by-products/rice-bran',
  '/categories/feed-additives-raw-materials/feed-by-products/ddgs',
  '/categories/feed-additives-raw-materials/feed-by-products/molasses-food-grade',
  '/categories/feed-additives-raw-materials/feed-minerals',
  '/categories/feed-additives-raw-materials/feed-minerals/limestone-feed-grade',
  '/categories/feed-additives-raw-materials/feed-minerals/dicalcium-phosphate',
  '/categories/feed-additives-raw-materials/fats-oils',
  '/categories/feed-additives-raw-materials/fats-oils/soybean-oil-feed-grade',
  '/categories/feed-additives-raw-materials/fats-oils/poultry-fat',
  '/categories/feed-additives-raw-materials/fats-oils/palm-oil-feed-grade',

  // Cosmetics
  '/categories/cosmetic-raw-materials/bentonite-cosmetic-grade',
  '/categories/cosmetic-raw-materials/bentonite-cosmetic-grade/sodium-bentonite-cosmetic-grade',
  '/categories/cosmetic-raw-materials/bentonite-cosmetic-grade/calcium-bentonite-cosmetic-grade',
  '/categories/cosmetic-raw-materials/bentonite-cosmetic-grade/ultra-fine-cosmetic-bentonite-powder',
  '/categories/cosmetic-raw-materials/ethanol-cosmetic-pharma-grade',
  '/categories/cosmetic-raw-materials/ethanol-cosmetic-pharma-grade/rectified-ethanol-cosmetic-grade',
  '/categories/cosmetic-raw-materials/ethanol-cosmetic-pharma-grade/extra-neutral-alcohol-ena-cosmetic',
  '/categories/cosmetic-raw-materials/ethanol-cosmetic-pharma-grade/denatured-cosmetic-ethanol',
  '/categories/cosmetic-raw-materials/ethanol-cosmetic-pharma-grade/anhydrous-ethanol-cosmetic-grade',
  '/categories/cosmetic-raw-materials/resins-specialty-use',
  '/categories/cosmetic-raw-materials/resins-specialty-use/natural-cosmetic-resins',
  '/categories/cosmetic-raw-materials/resins-specialty-use/synthetic-cosmetic-resins',
  '/categories/cosmetic-raw-materials/resins-specialty-use/film-forming-resins',
  '/categories/cosmetic-raw-materials/resins-specialty-use/functional-thickening-resins',
  '/categories/cosmetic-raw-materials/silica-specialty-grade',
  '/categories/cosmetic-raw-materials/silica-specialty-grade/precipitated-silica-cosmetic-grade',
  '/categories/cosmetic-raw-materials/silica-specialty-grade/fumed-silica-cosmetic-grade',
  '/categories/cosmetic-raw-materials/silica-specialty-grade/microsphere-silica-spherical',
  '/categories/cosmetic-raw-materials/silica-specialty-grade/colloidal-silica-cosmetic-grade',
]
