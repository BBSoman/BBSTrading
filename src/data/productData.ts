export interface SubProduct {
  name: string;
  slug: string;
  description: string;
  details?: string;
  image: string;
  specs: string[];
}

export interface Product {
  name: string;
  slug?: string;
  description: string;
  details?: string;
  image: string;
  specs: string[];
  hsCode?: string;
  subProducts?: SubProduct[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  overview: string;
  products: Product[];
}

export const categoryData: Category[] = [
  {
    name: 'Fertilizers & Agricultural Inputs',
    slug: 'fertilizers-agricultural-inputs',
    image: '/Bannaer_Fertilizer.webp',
    overview: 'At Bright Business Services & Trading Services and Trading, we understand that agriculture is not just an industry, it is the backbone of food security and economic stability.Through our established international supply network, we provide reliable, high-quality fertilizers and agricultural inputs designed to enhance soil performance, improve crop productivity, and support sustainable farming across diverse climates.',
    products: [
      {
        name: 'NPK',
        slug: 'npk',
        description: 'Fully water-soluble NPK formulations engineered for precision fertigation, foliar feeding, and high-efficiency nutrient delivery across all crop growth stages.',
        details: 'Our water-soluble NPK range is formulated to deliver nitrogen, phosphorus, and potassium in clean-dissolving, residue-free solutions compatible with drip, sprinkler, and foliar application systems. Each grade is precisely blended to match specific crop growth stages — from root activation and vegetative development through to flowering, fruit fill, and maturation. All grades include secondary elements (S, Ca, Mg) and a full micronutrient package (Zn, Cu, Fe, Mn, B) to support complete plant nutrition. HS Code: 3105.20.',
        image: '/NPK1.webp',
        specs: ['Fully water-soluble grades', 'Application concentration: 0.5 – 0.8%', 'Includes secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'HS Code: 3105.20'],
        hsCode: '3105.20',
        subProducts: [
          {
            name: 'NPK 20-20-20',
            slug: '20-20-20',
            description: 'A fully water-soluble, balanced NPK fertilizer formulated for use throughout all stages of plant growth. The equal ratio of nitrogen, phosphorus, and potassium supports steady vegetative development, strong root establishment, and overall plant vitality.',
            details: 'Suitable for a wide range of crops and performs effectively in both early growth phases and intensive production systems. The formulation dissolves quickly, ensuring efficient nutrient delivery through modern irrigation systems.',
            image: '/NPK20-20-201.webp',
            specs: ['N: 20% | P: 20% | K: 20%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 10-52-10',
            slug: '10-52-10',
            description: 'A high-phosphorus, water-soluble compound fertilizer designed to support root activation and early plant establishment. The elevated phosphorus content enhances root expansion and improves nutrient uptake, particularly after transplanting and during early flowering stages.',
            details: 'Its clean-dissolving formulation is ideal for fertigation systems and ensures uninterrupted nutrient flow without residue buildup.',
            image: '/NPK_10-52-10.webp',
            specs: ['N: 10% | P: 25% | K: 10%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 10-10-40',
            slug: '10-10-40',
            description: 'A potassium-enriched fertilizer developed to enhance fruit development, improve crop quality, and support plants during high-demand production phases. The elevated potassium level contributes to improved fruit firmness, size, and overall yield performance.',
            details: 'The formulation is fully soluble and suitable for various irrigation systems, offering efficient nutrient absorption even under challenging soil conditions.',
            image: '/NPK10-10-40.webp',
            specs: ['N: 10% | P: 10% | K: 40%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 15-15-30 + TE',
            slug: '15-15-30-te',
            description: 'A balanced compound fertilizer with enhanced potassium content, formulated to support flowering, fruit setting, and fruit development stages. The combination of nitrogen and phosphorus sustains vegetative strength, while the higher potassium concentration contributes to fruit quality, improved size, and better maturation consistency.',
            details: 'Suitable for a broad range of crops during reproductive growth phases.',
            image: '/15-15-30+TE1.webp',
            specs: ['N: 15% | P: 15% | K: 30%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 20-20-20 + TE',
            slug: '20-20-20-te',
            description: 'A balanced, multi-purpose water-soluble fertilizer containing equal proportions of primary nutrients to promote uniform plant growth. Nitrogen supports vegetative development, phosphorus strengthens root systems, and potassium contributes to overall plant resilience and productivity.',
            details: 'Its rapid solubility ensures smooth integration with fertigation and foliar feeding programs.',
            image: '/20-20-20_+TE.webp',
            specs: ['N: 20% | P: 20% | K: 20%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 13-40-13 + TE',
            slug: '13-40-13-te',
            description: 'A phosphorus-rich fertilizer developed to stimulate root expansion and support early vegetative strength. Phosphorus plays a critical role in energy transfer and root development, while balanced nitrogen and potassium enhance plant vigor and structural growth.',
            details: 'The formula is easily absorbed and efficiently transported within the plant system, making it suitable for diverse climatic conditions.',
            image: '/13-40-13_+TE.webp',
            specs: ['N: 13% | P: 40% | K: 13%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 12-12-36 + TE',
            slug: '12-12-36-te',
            description: 'A high-potassium, water-soluble fertilizer formulated to enhance fruit filling, maturation, and stress tolerance. The balanced nitrogen and phosphorus content supports sustained plant activity, while the elevated potassium level strengthens plant structure and improves overall crop performance.',
            details: 'It is designed for efficient nutrient uptake during high-demand growth stages.',
            image: '/12-36.webp',
            specs: ['N: 12% | P: 12% | K: 36%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          },
          {
            name: 'NPK 15-30-15 + TE',
            slug: '15-30-15-te',
            description: 'A phosphorus-forward compound fertilizer developed to enhance root establishment and support early flowering phases. The formulation provides balanced nitrogen for vegetative strength and adequate potassium to assist in overall plant development.',
            details: 'Its fully water-soluble composition ensures compatibility with fertigation systems and efficient nutrient delivery, particularly in soils with higher pH levels.',
            image: '/15-30-15_+TE.webp',
            specs: ['N: 15% | P: 30% | K: 15%', 'Application concentration: 0.5 – 0.8%', 'Secondary elements: S, Ca, Mg', 'Micronutrients: Zn, Cu, Fe, Mn, B', 'Form: fully water-soluble', 'HS Code: 3105.20']
          }
        ]
      },
      {
        name: 'Urea',
        slug: 'urea',
        description: 'High-purity nitrogen fertilizer supporting rapid vegetative growth and large-scale agricultural applications.',
        details: 'Urea is the world\'s most widely applied nitrogen fertilizer, containing 46% nitrogen — the highest concentration of any solid nitrogen source — making it highly cost-effective for transport and application at scale. Supplied in both prilled and granular forms, each grade is optimized for different application methods and farming systems. All grades meet international quality standards with low biuret content to prevent crop toxicity. HS Code: 3102.10.',
        image: '/UREA.webp',
        specs: ['Nitrogen content: 46%', 'Biuret: ≤ 1.0%', 'Moisture: ≤ 0.5%', 'Granular and prilled forms available', 'HS Code: 3102.10'],
        hsCode: '3102.10',
        subProducts: [
          {
            name: 'Urea – Prilled',
            slug: 'prilled',
            description: 'A highly concentrated nitrogen fertilizer in prilled form, developed to provide rapid nitrogen availability for crop growth. It supports vigorous vegetative development, enhances chlorophyll formation, and promotes healthy leaf expansion.',
            details: 'The prilled structure allows uniform application and quick dissolution in soil moisture, making it suitable for broad-acre agriculture and general crop nutrition programs.',
            image: '/Urea_Prilled.webp',
            specs: ['Nitrogen (N): 46%', 'Biuret: ≤ 1.0%', 'Moisture: ≤ 0.5%', 'Particle size: Standard prilled size distribution', 'HS Code: 3102.10']
          },
          {
            name: 'Urea – Granular',
            slug: 'granular',
            description: 'A high-analysis nitrogen fertilizer in granular form, engineered for improved handling, reduced caking, and enhanced spreading performance. The larger granule size ensures better distribution accuracy in mechanical application systems.',
            details: 'It delivers a steady nitrogen supply to support strong vegetative growth, protein formation, and overall crop productivity. The granular format is particularly suited for large-scale farming operations and blended fertilizer production.',
            image: '/Urea_Granular.webp',
            specs: ['Nitrogen (N): 46%', 'Biuret: ≤ 1.0%', 'Moisture: ≤ 0.5%', 'Granule size: 2–4 mm (standard export specification)', 'HS Code: 3102.10']
          }
        ]
      },
      {
        name: 'Potash',
        slug: 'potash',
        description: 'Essential potassium source to strengthen plant resilience and improve crop quality.',
        details: 'Potash fertilizers are the primary potassium source in global agriculture, playing a critical role in regulating water uptake, improving drought resistance, and enhancing the quality of fruits, grains, and tubers. We supply multiple grades — from standard Muriate of Potash (MOP) through to chloride-free Sulphate of Potash (SOP) in granular, powder, and fully water-soluble forms — to match the requirements of different crop systems and application methods. HS Code: 3104.20.',
        image: '/Potash.webp',
        specs: ['Multiple grades available', 'Potassium (K₂O): 50–60% min', 'MOP and SOP grades', 'Moisture: ≤ 0.5%', 'HS Code: 3104.20'],
        hsCode: '3104.20',
        subProducts: [
          {
            name: 'Potash – Muriate of Potash (MOP 0-0-60)',
            slug: 'mop-0-0-60',
            description: 'Muriate of Potash is a potassium-based fertilizer containing a high concentration of potassium chloride. It is widely used to support crop development, water regulation within plant cells, and overall plant metabolism.',
            details: 'The potassium content contributes to improved plant structure and nutrient balance. This grade is commonly supplied in granular or standard crystalline form for direct soil application or fertilizer blending.',
            image: '/Muriate_of_Potash.webp',
            specs: ['Potassium (K₂O): 60% min', 'Chloride (Cl): High (as KCl)', 'Sodium (NaCl): As per specification', 'Moisture: ≤ 0.5%', 'Water insoluble: ≤ 0.1%', 'Form: Granular / Standard', 'HS Code: 3104.20']
          },
          {
            name: 'Potash – Sulphate of Potash (SOP 0-0-50)',
            slug: 'sop-0-0-50',
            description: 'Sulphate of Potash is a chloride-free potassium fertilizer suitable for crops sensitive to chloride levels. It provides potassium along with sulfur, supporting balanced nutrient uptake and plant development.',
            details: 'This grade is often selected for high-value crops and specialized growing systems where chloride control is required.',
            image: '/Sulphate_of_Potash.webp',
            specs: ['Potassium (K₂O): 50% min', 'Sulfur (S): 17–18%', 'Chloride (Cl): ≤ 1.5%', 'Moisture: ≤ 0.5%', 'Water insoluble: ≤ 0.1%', 'Form: Granular / Powder', 'HS Code: 3104.20']
          },
          {
            name: 'Potash – SOP Granular (Premium Grade)',
            slug: 'sop-granular',
            description: 'A granular potassium sulfate fertilizer developed for improved distribution and mechanical application. The formulation delivers potassium and sulfur without chloride content, ensuring compatibility with sensitive crop systems.',
            details: 'The uniform granule size allows consistent field coverage and blending performance.',
            image: '/Premium_Grade.webp',
            specs: ['Potassium (K₂O): 50% min', 'Sulfur (S): 17–18%', 'Chloride (Cl): ≤ 1.5%', 'Moisture: ≤ 0.5%', 'Granule size: As per export specification', 'HS Code: 3104.20']
          },
          {
            name: 'Potash – SOP Water Soluble',
            slug: 'sop-water-soluble',
            description: 'A fully water-soluble potassium sulfate formulation designed for fertigation and controlled nutrient delivery systems. The product dissolves efficiently in water, ensuring rapid nutrient availability and compatibility with modern irrigation practices.',
            details: 'Ideal for drip and sprinkler irrigation systems where precise nutrient control and chloride-free nutrition are required.',
            image: '/SOP_Water_Soluble.webp',
            specs: ['Potassium (K₂O): 50% min', 'Sulfur (S): 17–18%', 'Chloride (Cl): ≤ 0.5%', 'Water solubility: High', 'Moisture: ≤ 0.5%', 'HS Code: 3104.20']
          }
        ]
      },
      {
        name: 'DAP',
        slug: 'dap',
        description: 'Reliable phosphorus and nitrogen combination to promote strong root development and early plant growth.',
        details: 'Diammonium Phosphate (DAP) is one of the most widely used phosphatic fertilizers in the world, combining high phosphate and nitrogen content in a highly water-soluble granule that delivers rapid nutrient availability at the soil level. We supply multiple DAP grades — from standard 18-46-0 through to high-analysis 21-53-0 — each suitable for broadcast, banding, and blending applications across a wide range of field crops and horticultural systems. HS Code: 3105.30.',
        image: '/DAP1.webp',
        specs: ['Multiple grades available', 'Phosphorus (P₂O₅): 46–53%', 'Nitrogen (N): 16–21%', 'Moisture: ≤ 1.5%', 'HS Code: 3105.30'],
        hsCode: '3105.30',
        subProducts: [
          {
            name: 'DAP 18-46-0 (Standard Grade)',
            slug: '18-46-0',
            description: 'A high-analysis diammonium phosphate fertilizer containing a balanced ratio of nitrogen and phosphorus. It is primarily used to support early root development, strong plant establishment, and energy transfer within the plant.',
            details: 'The high phosphorus content promotes root expansion and improves crop vigor during the early growth stages. The product is fully water-soluble in soil moisture and suitable for direct field application or bulk blending.',
            image: '/DAP18-46-0.webp',
            specs: ['Nitrogen (N): 18%', 'Phosphorus (P₂O₅): 46%', 'Potassium (K₂O): 0%', 'Water solubility: High', 'Moisture: ≤ 1.5%', 'HS Code: 3105.30']
          },
          {
            name: 'DAP 18-46-0 + TE',
            slug: '18-46-0-te',
            description: 'A phosphorus-rich diammonium phosphate fertilizer fortified with micronutrients to enhance nutrient uptake and support balanced plant nutrition. The formulation promotes strong root establishment while delivering essential trace elements required for enzymatic activity and overall plant health.',
            details: 'Suitable for soils with micronutrient deficiencies and high-demand crop systems.',
            image: '/DAP_18-46-0_+TE.webp',
            specs: ['Nitrogen (N): 18%', 'Phosphorus (P₂O₅): 46%', 'Potassium (K₂O): 0%', 'Micronutrients: Zn, Fe, Mn (as specified)', 'Moisture: ≤ 1.5%', 'HS Code: 3105.30']
          },
          {
            name: 'DAP 16-48-0',
            slug: '16-48-0',
            description: 'A phosphate-dominant fertilizer designed for enhanced root stimulation and early plant development. With a slightly higher phosphorus concentration, this grade is suitable for crops requiring strong root activation and improved flowering initiation.',
            details: 'It dissolves efficiently in soil moisture and supports rapid nutrient availability after application.',
            image: '/DAP_16-48-0.webp',
            specs: ['Nitrogen (N): 16%', 'Phosphorus (P₂O₅): 48%', 'Potassium (K₂O): 0%', 'Moisture: ≤ 1.5%', 'Granule form: Standard granular export grade', 'HS Code: 3105.30']
          },
          {
            name: 'DAP 21-53-0 (High Analysis Grade)',
            slug: '21-53-0',
            description: 'A concentrated diammonium phosphate fertilizer formulated for maximum phosphorus delivery combined with elevated nitrogen content. This grade is commonly selected for high-demand cropping systems requiring intensive early nutrition.',
            details: 'It enhances root biomass formation and supports optimal vegetative growth during establishment stages.',
            image: '/DAP_21-53-0.webp',
            specs: ['Nitrogen (N): 21%', 'Phosphorus (P₂O₅): 53%', 'Potassium (K₂O): 0%', 'Moisture: ≤ 1.5%', 'Physical form: Granular', 'HS Code: 3105.30']
          }
        ]
      },
      {
        name: 'Sulphur',
        slug: 'sulphur',
        description: 'High-purity elemental sulphur for correcting soil sulphur deficiencies, soil pH management, and fertilizer blending applications.',
        details: 'Elemental sulphur is an essential secondary plant nutrient that supports protein synthesis, chlorophyll formation, and the absorption of nitrogen and phosphorus. When incorporated into the soil, sulphur oxidizes into plant-available sulfate and acidifies the root zone, improving nutrient availability in alkaline and calcareous soils. We supply both granular and prilled grades at 99% purity minimum, each suited to different application and blending requirements. HS Code: 2503.00.',
        image: '/Sulfur.webp',
        specs: ['Sulphur (S): 99% min', 'Granular and prilled forms available', 'Moisture: ≤ 0.5%', 'Suitable for direct application and blending', 'HS Code: 2503.00'],
        hsCode: '2503.00',
        subProducts: [
          {
            name: 'Sulphur – Granular',
            slug: 'granular',
            description: 'A high-purity elemental sulphur fertilizer in granular form, developed to improve soil sulphur levels and enhance nutrient efficiency. Sulphur plays a key role in chlorophyll formation, protein synthesis, and overall plant metabolism.',
            details: 'The granular structure allows gradual oxidation in the soil, enabling sustained sulphur availability over time. It is widely used to correct sulphur deficiencies and to support soil pH management in alkaline conditions.',
            image: '/Sulfur_granular.webp',
            specs: ['Sulphur (S): 99% min', 'Form: Elemental Sulphur', 'Moisture: ≤ 0.5%', 'Particle size: 2–5 mm (typical export grade)', 'Purity: High', 'HS Code: 2503.00']
          },
          {
            name: 'Sulphur – Prilled',
            slug: 'prilled',
            description: 'A refined elemental sulphur product in prilled form, designed for uniform distribution and consistent soil integration. The small, round prills ensure efficient spreading and gradual nutrient release as sulphur converts into plant-available sulfate in the soil.',
            details: 'This form is particularly suitable for large-scale agricultural operations and fertilizer blending applications.',
            image: '/Sulfur_prilled_.webp',
            specs: ['Sulphur (S): 99% min', 'Form: Elemental Sulphur (Prilled)', 'Moisture: ≤ 0.5%', 'Prill size: Standard prilled specification', 'HS Code: 2503.00']
          }
        ]
      },
      {
        name: 'Peatmoss',
        slug: 'peatmoss',
        description: 'Premium-grade peat moss for soil conditioning, horticultural growing media, and substrate blending in commercial and retail agriculture.',
        details: 'Peat moss is a highly decomposed organic material harvested from naturally formed peatlands, prized for its exceptional water retention capacity, low pH, and ability to improve soil aeration and structure in both field and container growing systems. We supply a range of peatmoss grades — from sphagnum horticultural grade to professional substrate, coarse fiber, and fine screened — each processed to meet specific agronomic and horticultural applications. All grades carry low electrical conductivity and are free from pathogens and weed seeds. HS Code: 2703.00.',
        image: '/Peatmoss1.webp',
        specs: ['Multiple grades available', 'Organic matter: ≥ 90–95%', 'pH: 3.5 – 5.5 (naturally acidic)', 'Low electrical conductivity (EC)', 'HS Code: 2703.00'],
        hsCode: '2703.00',
        subProducts: [
          {
            name: 'Sphagnum (Horticultural Grade)',
            slug: 'sphagnum-horticultural',
            description: 'A natural organic growing medium derived from sphagnum moss, processed to provide high water retention and balanced aeration. It improves soil structure, enhances root development, and supports moisture stability in growing environments.',
            details: 'Widely used in nurseries, greenhouse production, seed starting, and potting mix formulations. Its fibrous structure promotes healthy root expansion and consistent moisture distribution.',
            image: '/Peatmoss_Sphagnum.webp',
            specs: ['Organic matter: ≥ 95%', 'pH (water extract): 3.5 – 4.5', 'Moisture content: 40 – 60% (compressed bale)', 'Ash content: ≤ 5%', 'Electrical conductivity (EC): Low', 'Fiber structure: Fine to coarse (as specified)', 'HS Code: 2703.00']
          },
          {
            name: 'Professional Substrate Grade',
            slug: 'professional-substrate',
            description: 'A refined peat-based substrate material developed for controlled horticultural applications. It provides stable water retention capacity combined with air porosity to encourage uniform root growth.',
            details: 'The material is screened and processed to deliver consistent texture, making it suitable for commercial nurseries and high-volume plant production systems.',
            image: '/PeatmossProfessional_Substrate1.webp',
            specs: ['Organic matter: ≥ 90%', 'pH (water extract): 4.0 – 5.5', 'Moisture content: 40 – 60%', 'Bulk density: Low', 'Electrical conductivity (EC): Low', 'Impurities: Free from pathogens & weed seeds', 'HS Code: 2703.00']
          },
          {
            name: 'Coarse Fiber',
            slug: 'coarse-fiber',
            description: 'A high-structure peat material composed of long fibers to improve aeration and drainage within growing media. Commonly incorporated into potting mixes for crops requiring enhanced airflow around the root zone.',
            details: 'The coarse structure supports root penetration and reduces compaction over time, maintaining consistent substrate performance.',
            image: '/PeatMoss_Coarse_Fiber.webp',
            specs: ['Organic matter: ≥ 95%', 'pH (water extract): 3.5 – 4.5', 'Moisture content: 40 – 60%', 'Fiber length: Long fiber grade', 'Ash content: ≤ 5%', 'Electrical conductivity (EC): Low', 'HS Code: 2703.00']
          },
          {
            name: 'Fine Grade',
            slug: 'fine-grade',
            description: 'A finely screened peat material developed for seed germination and propagation systems. The finer particle size ensures uniform seed contact and moisture distribution, supporting stable germination environments.',
            details: 'Suitable for plug trays, seedling production, and precision horticultural applications.',
            image: '/Peatmoss_Fine_Grade.webp',
            specs: ['Organic matter: ≥ 95%', 'pH (water extract): 3.5 – 4.5', 'Moisture content: 40 – 60%', 'Particle size: Fine screened', 'Ash content: ≤ 5%', 'Electrical conductivity (EC): Low', 'HS Code: 2703.00']
          }
        ]
      }
    ]
  },
  {
    name: 'Energy & Petroleum Products',
    slug: 'energy-petroleum-products',
    image: '/petroleum.webp',
    overview: 'Energy is the engine behind infrastructure, logistics, and industrial growth. At Bright Business Services & Trading, we connect global petroleum resources with regional demand through structured, transparent, and reliable supply solutions.Our Energy & Petroleum division is built on long-standing refinery relationships, strong regional presence, and disciplined trade execution.',
    products: [
      {
        name: 'Crude Oil',
        slug: 'crude-oil',
        description: 'Sourced from recognized producers, available under structured lifting programs subject to refinery and export regulations.',
        details: 'Crude oil is the primary raw material of the global energy economy, refined into fuels, lubricants, petrochemicals, and hundreds of industrial products that underpin modern infrastructure. We supply multiple crude grades — from low-sulfur light sweet crude through to heavier sour grades — to match refinery configurations and processing requirements. Our team manages the full trade lifecycle from cargo nomination and loading port logistics to vessel scheduling and destination documentation. HS Code: 2709.00.',
        image: '/crude_oil.webp',
        specs: ['Multiple grades available', 'API gravity: varies by grade', 'Sweet and sour grades', 'Water content (BS&W): ≤ 1%', 'HS Code: 2709.00'],
        hsCode: '2709.00',
        subProducts: [
          {
            name: 'Crude Oil – Light Crude',
            slug: 'light-crude',
            description: 'Light crude oil is characterized by lower density and reduced sulfur content, making it easier to refine into high-value petroleum products such as gasoline, diesel, and jet fuel.',
            details: 'Its lower viscosity allows efficient processing in refineries and improved yield of lighter distillates. This grade is commonly preferred in markets requiring higher refining efficiency and cleaner product output.',
            image: '/crudeligh.webp',
            specs: ['API gravity: > 31°', 'Sulfur content: ≤ 0.5% (sweet grade typical)', 'Density @ 15°C: 800–870 kg/m³', 'Pour point: As per field specification', 'Viscosity: Low', 'Water content (BS&W): ≤ 1%', 'HS Code: 2709.00']
          },
          {
            name: 'Crude Oil – Medium Crude',
            slug: 'medium-crude',
            description: 'Medium crude oil falls between light and heavy grades in density and sulfur content. It provides balanced refinery output with moderate yields of both light and middle distillates.',
            details: 'This grade is widely traded in international markets and is compatible with standard refining configurations.',
            image: '/crudemedium.webp',
            specs: ['API gravity: 22°–31°', 'Sulfur content: 0.5%–2%', 'Density @ 15°C: 870–920 kg/m³', 'Pour point: As per field specification', 'Viscosity: Moderate', 'Water content (BS&W): ≤ 1%', 'HS Code: 2709.00']
          },
          {
            name: 'Crude Oil – Heavy Crude',
            slug: 'heavy-crude',
            description: 'Heavy crude oil has higher density and viscosity, requiring more complex refining processes. It typically yields greater proportions of residual fuels and heavy distillates.',
            details: 'This grade is supplied to refineries equipped with advanced upgrading units capable of processing heavier hydrocarbons.',
            image: '/crudeheavy.webp',
            specs: ['API gravity: < 22°', 'Sulfur content: ≥ 2% (sour grade typical)', 'Density @ 15°C: 920–1000+ kg/m³', 'Pour point: As per field specification', 'Viscosity: High', 'Water content (BS&W): ≤ 1%', 'HS Code: 2709.00']
          },
          {
            name: 'Crude Oil – Sweet Crude',
            slug: 'sweet-crude',
            description: 'Sweet crude oil contains low sulfur levels, making it more desirable for refining into cleaner fuels. The reduced sulfur simplifies refining operations and supports lower emissions in finished petroleum products.',
            details: 'Sweet grades may fall within light or medium density classifications.',
            image: '/crudesweet.webp',
            specs: ['API gravity: As per grade', 'Sulfur content: ≤ 0.5%', 'Density: As per classification', 'Viscosity: As per grade', 'Water content (BS&W): ≤ 1%', 'Sediment content: As per export standard', 'HS Code: 2709.00']
          },
          {
            name: 'Crude Oil – Sour Crude',
            slug: 'sour-crude',
            description: 'Sour crude oil contains higher sulfur levels and requires desulfurization during refining. It is commonly processed in refineries equipped with advanced sulfur recovery systems.',
            details: 'Despite higher sulfur content, it remains widely traded due to pricing competitiveness and global demand.',
            image: '/crudesour.webp',
            specs: ['API gravity: As per grade', 'Sulfur content: > 0.5%', 'Density: As per classification', 'Viscosity: As per grade', 'Water content (BS&W): ≤ 1%', 'Sediment content: As per export standard', 'HS Code: 2709.00']
          }
        ]
      },
      {
        name: 'EN590 (Diesel)',
        slug: 'en590-diesel',
        description: 'Ultra-low sulfur diesel meeting international environmental standards, suitable for transportation fleets, industrial operations, and national supply programs.',
        details: 'EN590 is the European standard specification for automotive diesel fuel, mandating ultra-low sulfur content of no more than 10 ppm, making it compliant with Euro 5 and Euro 6 emission standards adopted across most regulated markets worldwide. It serves as the benchmark fuel grade for long-haul transport, construction equipment, agricultural machinery, and power generation, where consistent combustion quality and fuel stability are critical. We supply EN590 diesel through established refinery offtake arrangements and regional distribution networks, offering flexible INCOTERMS, volume structures, and delivery schedules tailored to both commercial and national procurement requirements. HS Code: 2710.19.',
        image: '/en5901.webp',
        specs: ['Standard: EN590', 'Sulfur content: 10 ppm max', 'Density @ 15°C: 820–845 kg/m³', 'Cetane number: ≥ 51', 'Flash point: ≥ 55°C', 'Viscosity @ 40°C: 2.0–4.5 mm²/s', 'Water content: ≤ 200 mg/kg', 'Appearance: Clear and bright', 'HS Code: 2710.19'],
        hsCode: '2710.19'
      },
      {
        name: 'Bitumen',
        slug: 'bitumen',
        description: 'Including penetration grades such as 60/70, 80/100, 85/100, and 200/300, plus viscosity grades VG30 and VG40 and Polymer Modified Bitumen. Available in bulk, jumbo bags, steel drums, and flexitanks.',
        details: 'Bitumen is a viscous, black hydrocarbon by-product of crude oil refining, used almost exclusively as a binder in asphalt for road construction, airfield paving, waterproofing membranes, and roofing systems. We supply a comprehensive range of penetration-grade, viscosity-grade, and polymer-modified bitumen from regional refineries across the Middle East and Asia, with full ASTM and EN compliance documentation and independent quality inspection at load port. HS Code: 2713.20.00.90.',
        image: '/bitumen.jpg',
        specs: ['Multiple grades available', 'Penetration, viscosity, and PMB grades', 'Delivery: bulk tanker, drums, or flexi-bags', 'Compliant with ASTM and EN standards', 'HS Code: 2713.20.00.90'],
        hsCode: '2713.20.00.90',
        subProducts: [
          {
            name: 'Bitumen 60/70 (Penetration Grade)',
            slug: 'bitumen-60-70',
            description: 'A standard penetration-grade bitumen widely used in road construction and asphalt production. The 60/70 penetration range provides balanced hardness and flexibility, making it suitable for moderate climatic conditions.',
            details: 'This grade offers consistent performance in pavement layers and general infrastructure projects.',
            image: '/b6070.webp',
            specs: ['Penetration @ 25°C (0.1 mm): 60–70', 'Softening point: 49–56°C', 'Ductility @ 25°C: ≥ 100 cm', 'Flash point: ≥ 250°C', 'Solubility in TCE: ≥ 99%', 'Specific gravity @ 25°C: ~1.01', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Bitumen 80/100',
            slug: 'bitumen-80-100',
            description: 'A softer penetration-grade bitumen formulated for use in cooler climates and flexible pavement structures. The higher penetration value provides enhanced flexibility and resistance to cracking under lower temperature conditions.',
            details: 'Suitable for flexible pavement construction in regions with lower average temperatures.',
            image: '/b80100.webp',
            specs: ['Penetration @ 25°C (0.1 mm): 80–100', 'Softening point: 42–50°C', 'Ductility @ 25°C: ≥ 100 cm', 'Flash point: ≥ 250°C', 'Solubility in TCE: ≥ 99%', 'Specific gravity @ 25°C: ~1.01', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Bitumen 85/100',
            slug: 'bitumen-85-100',
            description: 'A medium-soft penetration grade bitumen designed for pavement applications requiring improved flexibility while maintaining structural strength. Suitable for road surfacing projects in temperate environments.',
            details: 'This grade balances flexibility and structural performance for moderate climate road surfacing applications.',
            image: '/b85100.webp',
            specs: ['Penetration @ 25°C (0.1 mm): 85–100', 'Softening point: 42–50°C', 'Ductility @ 25°C: ≥ 100 cm', 'Flash point: ≥ 250°C', 'Solubility in TCE: ≥ 99%', 'Specific gravity @ 25°C: ~1.01', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Bitumen 200/300',
            slug: 'bitumen-200-300',
            description: 'A highly penetrable and softer grade bitumen intended for cold climate paving and specialized asphalt blends. Its increased fluidity improves workability during mixing and laying processes in lower temperature regions.',
            details: 'The high penetration value ensures excellent workability and adhesion in cold and sub-arctic paving environments.',
            image: '/b2003001.webp',
            specs: ['Penetration @ 25°C (0.1 mm): 200–300', 'Softening point: 35–43°C', 'Ductility @ 25°C: ≥ 100 cm', 'Flash point: ≥ 220°C', 'Solubility in TCE: ≥ 99%', 'Specific gravity @ 25°C: ~1.00', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Bitumen VG30 (Viscosity Grade)',
            slug: 'bitumen-vg30',
            description: 'A viscosity-graded bitumen designed for use in road construction requiring higher stiffness and load-bearing capacity. Commonly applied in heavy traffic areas and high-temperature regions, providing improved resistance to rutting and deformation.',
            details: 'VG30 is widely specified for highways and urban roads in tropical and subtropical climates where high ambient temperatures increase the risk of pavement rutting.',
            image: '/bvg30.webp',
            specs: ['Absolute viscosity @ 60°C: 2400–3600 Poise', 'Kinematic viscosity @ 135°C: ≥ 350 cSt', 'Penetration @ 25°C (0.1 mm): 50–70', 'Softening point: ≥ 47°C', 'Flash point: ≥ 220°C', 'Solubility: ≥ 99%', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Bitumen VG40 (Viscosity Grade)',
            slug: 'bitumen-vg40',
            description: 'A high-viscosity grade bitumen formulated for projects exposed to heavy traffic loads and elevated ambient temperatures. It delivers enhanced structural integrity and durability for demanding infrastructure applications.',
            details: 'VG40 is the preferred grade for heavily loaded expressways, airport runways, and industrial pavements in hot climates.',
            image: '/bvg40.webp',
            specs: ['Absolute viscosity @ 60°C: 3200–4800 Poise', 'Kinematic viscosity @ 135°C: ≥ 400 cSt', 'Penetration @ 25°C (0.1 mm): 40–60', 'Softening point: ≥ 50°C', 'Flash point: ≥ 220°C', 'Solubility: ≥ 99%', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'PMB (Polymer Modified Bitumen)',
            slug: 'pmb',
            description: 'A modified bitumen produced by incorporating performance-enhancing polymers into base bitumen. This process improves elasticity, temperature stability, and resistance to cracking and deformation.',
            details: 'Engineered for high-stress road infrastructure, bridges, and specialized paving applications requiring extended durability.',
            image: '/PMB.webp',
            specs: ['Penetration @ 25°C: As per grade', 'Softening point: Higher than base grade', 'Elastic recovery: ≥ 50% (typical)', 'Flash point: ≥ 220°C', 'Viscosity: As per modified specification', 'Polymer content: As required (SBS/EVA etc.)', 'HS Code: 2713.20.00.90']
          },
          {
            name: 'Customized Bitumen Grades',
            slug: 'customized-bitumen',
            description: 'Bitumen grades produced according to specific buyer requirements and project specifications. Penetration levels, viscosity range, softening point, and other performance parameters can be adjusted to match climatic conditions, road design standards, or technical preferences.',
            details: 'Customized formulations are available to meet individual project demands, ensuring the supplied material aligns precisely with the requested penetration grade and performance criteria.',
            image: 'https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=800',
            specs: ['Parameters adjustable: penetration, viscosity, softening point', 'Custom grades per buyer specification', 'Available for road design, climate-specific, or standard-specific requirements', 'HS Code: 2713.20.00.90']
          }
        ]
      },
      {
        name: 'Propane',
        slug: 'propane',
        description: 'High-purity propane for industrial heating, petrochemical feedstock, and residential energy applications.',
        details: 'Propane (C₃H₈) is a lightweight hydrocarbon gas extracted during natural gas processing and crude oil refining, stored and transported as a liquid under moderate pressure. It is a clean-burning, high-calorific fuel used across a wide range of applications including industrial and commercial heating, agricultural crop drying, automotive autogas systems, and as a chemical feedstock for the production of propylene and other petrochemical derivatives. We supply commercial-grade propane in pressurized cylinders, ISO tanks, and bulk vessel cargo, sourced from certified gas fractionation facilities. HS Code: 2711.12.',
        image: '/Propane.webp',
        specs: ['Chemical formula: C₃H₈', 'Purity: ≥ 95% propane', 'Butane content: ≤ 2.5%', 'Propylene content: ≤ 2% (as specified)', 'Sulfur content: ≤ 50 ppm', 'Water content: Free of visible water', 'Boiling point: -42°C', 'Appearance: Colorless, liquefied gas', 'HS Code: 2711.12'],
        hsCode: '2711.12'
      },
      {
        name: 'Butane',
        slug: 'butane',
        description: 'Commercial-grade butane for domestic cooking, lighter fuel, aerosol propellant, and petrochemical blending applications.',
        details: 'Butane (C₄H₁₀) is a saturated hydrocarbon gas recovered during refinery operations and natural gas liquids processing, available in both normal butane (n-butane) and isobutane forms. It is widely used as a domestic cooking and heating fuel in portable cylinders, as a propellant in aerosol products, as a blending component to adjust gasoline vapor pressure, and as a petrochemical feedstock for alkylation and butadiene production. We supply both n-butane and isobutane in commercial and technical grades, available in pressurized cylinders, railcar, ISO tank, and bulk maritime shipment. HS Code: 2711.13.',
        image: '/butane.webp',
        specs: ['Chemical formula: C₄H₁₀', 'Butane content: ≥ 95%', 'Propane content: ≤ 3%', 'Isobutane content: As specified', 'Sulfur content: ≤ 50 ppm', 'Water content: Free of visible water', 'Boiling point: -0.5°C (n-Butane)', 'Appearance: Colorless liquefied gas', 'HS Code: 2711.13'],
        hsCode: '2711.13'
      },
      {
        name: 'LPG',
        slug: 'lpg',
        description: 'Liquefied Petroleum Gas in commercial, autogas, and industrial grades, serving residential, industrial, and transport energy markets globally.',
        details: 'Liquefied Petroleum Gas (LPG) is a mixture of propane and butane in varying ratios, compressed into liquid form for efficient storage and transport. We supply LPG across three distinct grades — standard commercial, automotive, and industrial/commercial — each blended to match the specific vapor pressure, sulfur, and performance requirements of the intended application and destination market. HS Code: 2711.19.',
        image: '/lpg.webp',
        specs: ['Multiple grades available', 'Main components: Propane (C₃H₈) & Butane (C₄H₁₀)', 'Sulfur content: ≤ 50 ppm', 'Delivery: cylinders, road tankers, ISO tanks, bulk vessel', 'HS Code: 2711.19'],
        hsCode: '2711.19',
        subProducts: [
          {
            name: 'LPG – Commercial Grade',
            slug: 'lpg-commercial',
            description: 'Liquefied Petroleum Gas in standard commercial grade, widely used for residential cooking, heating, industrial fuel systems, automotive applications, and commercial energy distribution.',
            details: 'The propane-to-butane ratio may vary depending on climatic conditions and market requirements. Supply specifications are determined according to regulatory standards and intended use.',
            image: 'public/bitumen.jpg',
            specs: ['Product type: Liquefied Petroleum Gas', 'Main components: Propane (C₃H₈) & Butane (C₄H₁₀)', 'Propane content: As per seasonal blend', 'Butane content: As per seasonal blend', 'Sulfur content: ≤ 50 ppm', 'Water content: Free of visible water', 'Vapor pressure @ 37.8°C: As per ASTM specification', 'Residue: Minimal', 'Appearance: Clear, colorless liquefied gas', 'HS Code: 2711.19']
          },
          {
            name: 'LPG – Automotive Grade',
            slug: 'lpg-automotive',
            description: 'An LPG blend formulated for automotive fuel systems, commonly referred to as autogas. The composition is adjusted to ensure stable combustion, appropriate vapor pressure, and compatibility with vehicle fuel systems.',
            details: 'Specifications are aligned with transportation fuel standards applicable in the destination market.',
            image: 'https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=800',
            specs: ['Propane / butane ratio: As per regional requirement', 'Sulfur content: ≤ 50 ppm', 'Moisture: Trace / Dry', 'Octane rating (Research): As per applicable standard', 'Vapor pressure: Controlled for automotive use', 'Compliance: As per national fuel standard', 'HS Code: 2711.19']
          },
          {
            name: 'LPG – Industrial / Commercial Grade',
            slug: 'lpg-industrial',
            description: 'An LPG specification supplied for industrial heating, manufacturing processes, and commercial energy systems. The blend composition may be adjusted to meet operational requirements, climatic conditions, and storage considerations.',
            details: 'Quality parameters are confirmed prior to delivery to ensure compatibility with burner and processing equipment.',
            image: 'https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&w=800',
            specs: ['Propane / butane ratio: As per buyer requirement', 'Sulfur content: As specified', 'Moisture level: Dry', 'Residue: As per contract', 'Compliance: ASTM / ISO / agreed standard', 'Delivery form: Bulk / Cylinder / ISO Tank', 'HS Code: 2711.19']
          }
        ]
      }
    ]
  },
  {
    name: 'Polymer Chemistry Essentials',
    slug: 'petrochemicals-industrial-chemicals',
    image: '/Polymer_Chemistry_Essentials_Banner.webp',
    overview: 'Our petrochemicals portfolio supports downstream manufacturing industries with consistent quality, competitive pricing, and reliable logistics from origin to destination.',
    products: [
      {
        name: 'Polymers',
        slug: 'polymers',
        description: 'High-molecular-weight thermoplastic and thermoset materials derived from petrochemical processing, supplied in virgin and recycled granule grades for packaging, construction, automotive, and industrial manufacturing applications.',
        details: 'Polymers are among the most versatile and widely consumed materials in modern industry, derived from petrochemical feedstocks through polymerization processes that produce a vast range of material properties depending on the specific grade and additive package. High-density polyethylene (HDPE) is used in pipes, containers, and industrial packaging; low-density polyethylene (LDPE) in flexible films and agricultural sheeting; polypropylene (PP) in automotive components, woven bags, and food packaging; and PVC in construction profiles, cables, and fittings. We supply virgin-grade polymer resins in pellet form, with full material data sheets, melt flow index, and density specifications, packaged in 25 kg bags or bulk containers to suit the buyer\'s processing requirements.',
        image: '/Polymer_Banner.webp',
        specs: ['Material Type: PE / PP / PVC / PS / PET', 'Form: Virgin / Recycled Granules', 'Melt Flow Index (MFI): As per grade', 'Moisture Content: ≤ 0.1%', 'Packaging: 25 kg bags / Jumbo bags'],
        subProducts: [
          {
            name: 'Polyethylene (PE)',
            slug: 'polyethylene-pe',
            description: 'Polyethylene is a widely used thermoplastic polymer produced from ethylene monomer. It is available in various density grades suited for packaging films, containers, pipes, and molded products. The material offers flexibility, chemical resistance, and process adaptability across extrusion and molding applications.',
            details: 'Available in LDPE, LLDPE, and HDPE grades to match a broad range of end-use requirements — from flexible agricultural sheeting and food packaging films to rigid industrial containers, pipes, and injection-molded components.',
            image: '/Polymer_PE1.webp',
            specs: ['Polymer Type: LDPE / LLDPE / HDPE', 'Density: 0.91 – 0.96 g/cm³', 'Melt Flow Index (MFI): As per grade', 'Moisture: ≤ 0.1%', 'Form: Virgin / Recycled Granules', 'HS Code: 3901.10 – 3901.20']
          },
          {
            name: 'Polypropylene (PP)',
            slug: 'polypropylene-pp',
            description: 'Polypropylene is a thermoplastic polymer known for its mechanical strength, thermal resistance, and lightweight properties. It is commonly used in automotive parts, packaging, textiles, injection molding, and industrial components.',
            details: 'Available in homopolymer and copolymer forms to suit a wide range of processing conditions and performance requirements, from rigid structural applications to flexible packaging and fiber production.',
            image: '/Polymer_PP1.webp',
            specs: ['Density: ~0.90 g/cm³', 'Melt Flow Index: As specified', 'Tensile Strength: As per grade', 'Moisture Content: ≤ 0.1%', 'Form: Homopolymer / Copolymer', 'HS Code: 3902.10']
          },
          {
            name: 'Polyvinyl Chloride (PVC)',
            slug: 'polyvinyl-chloride-pvc',
            description: 'PVC is a durable thermoplastic polymer used in construction materials, pipes, cables, window profiles, and fittings. It is available in rigid and flexible forms depending on formulation and plasticizer content.',
            details: 'Supplied in both powder and granule form across K-value grades, with specifications tailored to pipe extrusion, cable compounding, window profile extrusion, and flexible applications.',
            image: '/Polymer_PVC.webp',
            specs: ['Polymer Type: Rigid / Flexible', 'K-Value: As per grade', 'Bulk Density: As specified', 'Moisture: ≤ 0.1%', 'Form: Powder / Granules', 'HS Code: 3904.10 – 3904.22']
          },
          {
            name: 'Polystyrene (PS)',
            slug: 'polystyrene-ps',
            description: 'Polystyrene is a lightweight thermoplastic polymer commonly used in packaging, insulation, disposable products, and consumer goods. It is available in general-purpose and high-impact grades.',
            details: 'GPPS (General Purpose Polystyrene) offers clarity and rigidity for food packaging and consumer goods, while HIPS (High Impact Polystyrene) provides improved toughness for appliance housings and durable packaging.',
            image: '/Polymer_PS.webp',
            specs: ['Grade: GPPS / HIPS', 'Melt Flow Index: As specified', 'Density: ~1.04 g/cm³', 'Impact Resistance: As per grade', 'Form: Pellets', 'HS Code: 3903.11 – 3903.19']
          },
          {
            name: 'Polyethylene Terephthalate (PET)',
            slug: 'polyethylene-terephthalate-pet',
            description: 'PET is a thermoplastic polymer widely used in beverage bottles, food containers, and fiber production. It offers clarity, strength, and recyclability.',
            details: 'Available in bottle grade and fiber grade, with controlled intrinsic viscosity (IV) levels to meet the specific processing requirements of blow molding, injection stretch blow molding, and fiber extrusion applications.',
            image: '/Polymer_PET1.webp',
            specs: ['Intrinsic Viscosity (IV): As specified', 'Density: ~1.38 g/cm³', 'Moisture: ≤ 0.05%', 'Form: Bottle grade / Fiber grade', 'HS Code: 3907.61']
          }
        ]
      },
      {
        name: 'Resins',
        slug: 'resins',
        description: 'Synthetic and semi-synthetic polymer compounds supplied as binding agents, coating materials, adhesives, laminates, and molding compounds in liquid, solid, or granulated form for industrial processing applications.',
        details: 'Industrial resins are synthetic polymer-based materials that serve as binders, adhesives, coatings, and matrix materials across a wide range of manufacturing sectors. Epoxy resins are widely used in high-performance coatings, structural adhesives, electrical laminates, and composite materials for aerospace and marine applications due to their outstanding adhesion, chemical resistance, and mechanical properties. Phenolic resins are essential in the production of plywood binders, brake linings, abrasive wheels, and molded components requiring high thermal stability. Polyester resins are a cost-effective choice for fiber-reinforced composites, gel coats, and construction materials. We supply liquid and solid resin grades with tested viscosity, reactivity, and hardener compatibility, packaged in drums, intermediate bulk containers, or flexitanks.',
        image: '/Resin.webp',
        specs: ['Resin Type: Epoxy / Polyester / Phenolic / Urea / Alkyd', 'Form: Liquid / Solid / Flakes', 'Viscosity: As per grade', 'Purity: Industrial grade', 'Packaging: Drums, IBCs, or flexitanks'],
        subProducts: [
          {
            name: 'Epoxy Resin',
            slug: 'epoxy-resin',
            description: 'Epoxy resins are thermosetting polymers used in coatings, adhesives, composites, and structural applications. They cure through chemical reaction with hardeners to form rigid cross-linked materials.',
            details: 'Widely specified for high-performance marine coatings, structural adhesives, printed circuit board laminates, wind turbine blades, and aerospace composite systems. Supplied in liquid and solid forms with documented epoxy value, viscosity, and density.',
            image: '/ResinEpoxy.webp',
            specs: ['Epoxy Value: As specified', 'Viscosity: As per grade', 'Density: ~1.15 g/cm³', 'Form: Liquid / Solid', 'HS Code: 3909.10']
          },
          {
            name: 'Polyester Resin',
            slug: 'polyester-resin',
            description: 'Polyester resins are widely used in fiberglass-reinforced products, marine components, tanks, and construction materials. They cure through polymerization processes forming durable composite systems.',
            details: 'A cost-effective matrix resin for hand lay-up and spray-up fiberglass applications, boat hulls, storage tanks, and architectural panels. Available in orthophthalic and isophthalic grades depending on the required corrosion resistance and mechanical performance.',
            image: '/PolyesterResin.webp',
            specs: ['Solid Content: As specified', 'Viscosity: As per grade', 'Reactivity: Controlled', 'Form: Liquid', 'HS Code: 3907.91']
          },
          {
            name: 'Phenolic Resin',
            slug: 'phenolic-resin',
            description: 'Phenolic resins are heat-resistant synthetic polymers used in insulation materials, laminates, molded components, and friction materials.',
            details: 'Available in Novolac and Resol types to suit a wide range of industrial applications including brake linings, abrasive bonded wheels, electrical laminates, molding compounds, and refractory binders. Supplied in powder and liquid form.',
            image: '/PhenolicResin.webp',
            specs: ['Type: Novolac / Resol', 'Softening Point: As specified', 'Viscosity: As per grade', 'Form: Powder / Liquid', 'HS Code: 3909.40']
          },
          {
            name: 'Urea Formaldehyde Resin',
            slug: 'urea-formaldehyde-resin',
            description: 'A thermosetting resin primarily used in wood adhesives, particleboard production, and construction materials.',
            details: 'Widely used as a binder in the manufacture of particleboard, MDF, plywood, and other engineered wood products. Available in liquid form with controlled solid content and free formaldehyde levels to meet international emission standards.',
            image: '/UreaFormaldehydeResin.webp',
            specs: ['Solid Content: As specified', 'Free Formaldehyde: As per standard', 'Viscosity: As specified', 'Form: Liquid', 'HS Code: 3909.10']
          }
        ]
      },
      {
        name: 'Methanol',
        slug: 'methanol',
        description: 'High-purity methanol (CH₃OH) for chemical synthesis, fuel blending, biodiesel production, and industrial solvent applications, supplied in ISO tanks, flexitanks, and bulk vessel cargo.',
        details: 'Methanol (CH3OH), also known as methyl alcohol or wood alcohol, is the simplest alcohol and one of the most widely traded commodity chemicals in the world. It is produced primarily from natural gas via steam methane reforming and subsequent catalytic synthesis, and serves as a fundamental building block for a vast range of downstream chemical products. Methanol is the primary feedstock for formaldehyde production, which in turn feeds the manufacture of resins, adhesives, and engineered wood products. It is also used to produce acetic acid, MTBE and TAME fuel octane boosters, dimethyl ether (DME), and methyl methacrylate. In the energy sector, methanol is a direct fuel and blending component, a key feedstock for biodiesel transesterification, and is gaining traction as a marine shipping fuel under IMO emissions regulations.',
        image: '/Methanol.webp',
        specs: ['Chemical Formula: CH₃OH', 'Purity: ≥ 99.85%', 'Water Content: ≤ 0.1%', 'Density @ 20°C: 0.79 g/cm³', 'Flash Point: 11°C', 'HS Code: 2905.11'],
        hsCode: '2905.11',
        subProducts: [
          {
            name: 'Methanol – Industrial Grade',
            slug: 'industrial-grade',
            description: 'A high-purity alcohol used as a chemical feedstock for formaldehyde, acetic acid, MTBE, and various petrochemical intermediates. It is also used as a solvent and fuel component.',
            details: 'Compliant with ASTM D1152 and IMPCA methanol reference specifications. Supplied with full COA documentation in ISO tanks, flexitanks, and bulk vessel cargo.',
            image: '/Methanol_Industrial_Grade.webp',
            specs: ['Chemical Formula: CH₃OH', 'Purity: ≥ 99.85%', 'Water Content: ≤ 0.1%', 'Density @ 20°C: ~0.79 g/cm³', 'Flash Point: 11°C', 'HS Code: 2905.11']
          },
          {
            name: 'Methanol – Fuel Grade',
            slug: 'fuel-grade',
            description: 'Methanol supplied for blending into fuel systems or alternative energy applications. Specifications are aligned with fuel regulatory standards.',
            details: 'Suitable for direct fuel use, gasoline blending, and marine fuel applications under IMO emissions regulations. Supplied with specifications confirming purity, sulfur content, and water control.',
            image: '/Methanol_Fuel_Grade.webp',
            specs: ['Purity: ≥ 99.85%', 'Water: Controlled', 'Sulfur: Low', 'Appearance: Clear, colorless liquid', 'HS Code: 2905.11']
          }
        ]
      }
    ]
  },
  {
    name: 'Metals & Metallic Ores',
    slug: 'metals-metallic-ores',
    image: '/MetalBanner.webp',
    overview: 'Metals are the foundation of infrastructure, manufacturing, and technological advancement.At Bright Business Services & Trading, we specialize in the structured sourcing and international distribution of metallic ores and refined mineral products essential to heavy industry and advanced production sectors.',
    products: [
      {
        name: 'Copper',
        slug: 'copper',
        description: 'One of the most strategically important base metals, valued for exceptional electrical conductivity, corrosion resistance, and thermal performance. Supplied in ore, concentrate, and slag form for smelting, refining, and industrial applications.',
        details: 'Copper forms the backbone of power generation, renewable energy systems, electronics manufacturing, infrastructure development, and automotive production. Global demand is strongly driven by electrification, EV production, and sustainable energy transition projects. We supply copper in three primary traded forms — ore, concentrate, and slag — with full provenance documentation, independent assay certification, and structured offtake arrangements.',
        image: '/Copper.jpeg',
        specs: ['Forms: Copper Ore / Concentrate / Slag', 'Cu in concentrate: 20% – 35%', 'Assay by independent SGS or Bureau Veritas', 'HS Code: 2603 (Ore & Concentrate) / 2620 (Slag)'],
        hsCode: '2603',
        subProducts: [
          {
            name: 'Copper Ore',
            slug: 'copper-ore',
            description: 'Copper ore is a naturally occurring mineral containing copper in sulfide, oxide, or carbonate form. It is mined and processed for smelting or concentration before refining into blister copper and cathodes.',
            details: 'Common copper minerals include Chalcopyrite (CuFeS₂), Bornite, Malachite, and Chalcocite. Used as feedstock for concentration plants, direct smelting input, and SX-EW leaching operations for oxide ores.',
            image: '/Copper_ORE.webp',
            specs: ['Copper (Cu): 0.5% – 5.0%', 'Iron (Fe): 10% – 35%', 'Sulfur (S): 5% – 35% (sulfide ores)', 'Silica (SiO₂): 5% – 30%', 'Moisture: 5% – 12%', 'Particle Size: Lump or crushed', 'HS Code: 2603']
          },
          {
            name: 'Copper Concentrate',
            slug: 'copper-concentrate',
            description: 'Copper concentrate is the processed product obtained after flotation of copper ore. It contains significantly higher copper content with controlled impurity levels and is the primary feedstock for copper smelters.',
            details: 'Typically supplied in fine powder form with controlled moisture content. Used for direct smelting to produce blister copper, refining into 99.99% copper cathodes, and LME-grade refined copper production. Impurity elements (As, Hg, Cd, Pb) are subject to commercial penalties based on smelter agreements.',
            image: '/Copper_Concentrate.webp',
            specs: ['Copper (Cu): 20% – 35%', 'Iron (Fe): 20% – 35%', 'Sulfur (S): 25% – 35%', 'Silica (SiO₂): 3% – 10%', 'Moisture: ≤ 10%', 'Arsenic (As): < 0.5%', 'HS Code: 2603']
          },
          {
            name: 'Copper Slag',
            slug: 'copper-slag',
            description: 'Copper slag is a by-product generated during the smelting and refining of copper. It contains iron silicates and residual copper units and is widely used in abrasive blasting, construction, cement manufacturing, and secondary metal recovery operations.',
            details: 'Material properties vary depending on smelting source and recovery process. Applications include abrasive blasting media, cement and concrete additive, road construction base material, and metal recovery processing.',
            image: '/Copper_Slag.webp',
            specs: ['Iron (Fe/Fe₂O₃): 35% – 50%', 'Silica (SiO₂): 30% – 40%', 'Copper (Cu): 0.5% – 2.5%', 'Sulfur (S): < 2%', 'Moisture: < 8%', 'Form: Granulated / Crushed', 'HS Code: 2620']
          }
        ]
      },
      {
        name: 'Manganese',
        slug: 'manganese',
        description: 'Critical industrial metal used primarily in steelmaking, ferroalloys, batteries, and specialty chemical applications. Improves hardness, tensile strength, and wear resistance while acting as a deoxidizing and desulfurizing agent in metallurgical processes.',
        details: 'Manganese ore is an indispensable raw material in steelmaking, where it is used to deoxidize molten steel, remove sulfur impurities, and increase tensile strength and hardness in the final product. Approximately 90% of global manganese production is consumed by the steel industry, making it one of the most strategically important industrial minerals. Beyond steel, manganese is a key component in EV battery cathodes and specialty chemical applications. We supply both raw ore grades and beneficiated concentrate, sourced from established producing regions with consistent grade and reliable logistics.',
        image: '/Manganese.webp',
        specs: ['Forms: Manganese Ore / Manganese Concentrate', 'Mn content: 10% – 55%+ (grade dependent)', 'Mineral forms: Pyrolusite, Manganite, Rhodochrosite', 'HS Code: 2602'],
        hsCode: '2602',
        subProducts: [
          {
            name: 'Manganese Ore – High Grade',
            slug: 'manganese-ore-high-grade',
            description: 'Premium high-grade manganese ore with 44% – 48%+ Mn content, suitable for direct ferroalloy production. Preferred feedstock for Ferro Manganese (FeMn), Silico Manganese (SiMn), and high-grade alloy steel.',
            details: 'Characterized by a high Mn/Fe ratio of 6:1 – 8:1 and low phosphorus, making it the premium raw material for direct ferroalloy smelting without the need for blending or upgrading.',
            image: '/High_Grade_Manganese_Ore.webp',
            specs: ['Mn: 44% – 48%+', 'Fe: < 6%', 'SiO₂: < 10%', 'Al₂O₃: < 8%', 'P: < 0.15%', 'S: < 0.05%', 'Mn/Fe Ratio: 6:1 – 8:1', 'HS Code: 2602']
          },
          {
            name: 'Manganese Ore – Medium Grade',
            slug: 'manganese-ore-medium-grade',
            description: 'Medium grade manganese ore with 37% – 44% Mn, offering an economical balance between quality and price. Used in ferroalloy blending, upgrading, and steel additives.',
            details: 'A commercially viable option for ferroalloy producers requiring cost-effective blending material. The moderate Mn/Fe ratio of 4:1 – 6:1 suits secondary steel operations and blend-feed furnaces.',
            image: '/Medium_Grade_Manganese_Ore.webp',
            specs: ['Mn: 37% – 44%', 'Fe: 6% – 15%', 'SiO₂: 10% – 20%', 'P: < 0.20%', 'Mn/Fe Ratio: 4:1 – 6:1', 'HS Code: 2602']
          },
          {
            name: 'Manganese Ore – Low Grade',
            slug: 'manganese-ore-low-grade',
            description: 'Low grade manganese ore with 30% – 35% Mn. Requires beneficiation or blending before metallurgical use. Supplied to beneficiation plants and for blending with higher-grade material.',
            details: 'Higher gangue content requires processing before direct smelter application. Typically used in beneficiation plants, as blending material, or for regional industrial use at competitive pricing.',
            image: '/Low_Grade_Manganese_Ore.webp',
            specs: ['Mn: 30% – 35%', 'Fe: 10% – 20%', 'SiO₂: 15% – 25%', 'Higher gangue content', 'HS Code: 2602']
          },
          {
            name: 'Manganese Ore – Ferruginous',
            slug: 'manganese-ore-ferruginous',
            description: 'Ferruginous manganese ore containing 10% to 35% manganese with a high concentration of iron. Used in blast furnaces to add manganese directly to pig iron, removing impurities like sulfur.',
            details: 'A bridge material between iron ore and high-grade manganese, often traded at a lower price for bulk steel production. Its combined iron and manganese content makes it suitable for blast furnace operations targeting both metals simultaneously.',
            image: '/Manganese_Ore_Ferruginous.webp',
            specs: ['Mn: 10% – 35%', 'Fe: 20% – 45%', 'SiO₂: 10% – 30%', 'Mn/Fe Ratio: < 3:1', 'HS Code: 2602']
          },
          {
            name: 'Manganese Concentrate – High Grade',
            slug: 'manganese-concentrate-high-grade',
            description: 'High-purity beneficiated manganese concentrate with 46% – 55%+ Mn, suitable for direct smelting. Premium feedstock for FeMn & SiMn production at export-grade ferroalloy plants.',
            details: 'Produced through beneficiation processing to remove clay, silica, and phosphorus from raw ore. The refined concentrate is more uniform and energy-efficient to melt, making it the preferred feed for high-quality ferroalloys and battery chemicals.',
            image: '/Manganese_Concentrate_High_Grade.webp',
            specs: ['Mn: 46% – 55%+', 'Fe: < 6%', 'SiO₂: < 8%', 'Al₂O₃: < 6%', 'P: < 0.15%', 'Moisture: < 8%', 'HS Code: 2602']
          },
          {
            name: 'Manganese Concentrate – Medium Grade',
            slug: 'manganese-concentrate-medium-grade',
            description: 'Commercially viable beneficiated manganese concentrate with 40% – 46% Mn for alloy blending. Suitable for ferroalloy production and secondary steel plants.',
            details: 'A processed concentrate offering improved Mn uniformity over run-of-mine ore, with controlled silica and moisture levels for consistent furnace performance.',
            image: '/Manganese_Concentrate_Medium_Grade.webp',
            specs: ['Mn: 40% – 46%', 'Fe: 6% – 12%', 'SiO₂: 8% – 15%', 'Moisture: < 10%', 'HS Code: 2602']
          },
          {
            name: 'Manganese Concentrate – Low Grade',
            slug: 'manganese-concentrate-low-grade',
            description: 'Processed manganese concentrate with 35% – 40% Mn and moderate recovery. Used as blending material or upgrading input for further concentration.',
            details: 'An economical processed product suitable for blending with higher-grade concentrate or as feedstock for further upgrading operations.',
            image: '/Manganese_Concentrate_Low_Grade.webp',
            specs: ['Mn: 35% – 40%', 'Fe: 10% – 18%', 'SiO₂: 12% – 20%', 'HS Code: 2602']
          }
        ]
      },
      {
        name: 'Ferrochrome',
        slug: 'ferrochrome',
        description: 'Critical input for stainless steel manufacturing and corrosion-resistant alloy production.',
        details: 'Ferrochrome is a ferroalloy composed of chromium and iron, produced by the reduction of chromite ore in submerged arc furnaces, and is the primary source of chromium in stainless steel production. High-carbon charge chrome, the most commonly traded grade, is added to electric arc furnaces to impart the corrosion resistance and surface hardness that define stainless and specialty steel grades. With global stainless steel demand driven by construction, automotive, food processing, and medical industries, ferrochrome remains a critical traded commodity. We supply high-carbon ferrochrome in lumpy and crushed grades from integrated producers with documented carbon, chromium, and silicon analysis at origin.',
        image: '/Ferrochrome.webp',
        specs: ['Cr content: 50–55% (charge chrome)', 'Carbon: 6–8% (high carbon grade)', 'Size: lumpy and crushed grades', 'Packaging: bulk or big bags']
      },
      {
        name: 'Chrome',
        slug: 'chrome',
        description: 'Strategic industrial metal primarily used in the production of stainless steel, alloy steel, and ferrochrome. Supplied as chromite ore and beneficiated concentrate for metallurgical and specialty applications.',
        details: 'Chromium\'s key properties include high corrosion resistance, hardness, and the ability to withstand extreme temperatures. Over 80% of global chromium demand is driven by stainless steel manufacturing. The commercial value is primarily determined by Cr₂O₃ content, Cr/Fe ratio, and impurity levels. We supply chromite ore and chrome concentrate from established producing regions with verified chemical analysis and independent third-party inspection.',
        image: '/Chrome.webp',
        specs: ['Forms: Chrome Ore / Chrome Concentrate', 'Cr₂O₃: 30% – 52%', 'Cr/Fe Ratio: 1.5 – 3.5', 'HS Code: 2610'],
        hsCode: '2610',
        subProducts: [
          {
            name: 'Chrome Ore (Chromite Ore)',
            slug: 'chrome-ore',
            description: 'Chrome ore is a naturally occurring mineral composed mainly of iron oxide and chromium oxide. Mined and supplied in lump or crushed form for ferrochrome production, stainless steel manufacturing, and refractory applications.',
            details: 'Commercial value is determined by Cr₂O₃ content, Cr/Fe ratio, and impurity levels (SiO₂, Al₂O₃, P, S). Higher Cr₂O₃ content and higher Cr/Fe ratio are preferred for metallurgical applications. Used in ferrochrome production, stainless steel manufacturing, alloy steel production, and refractory and foundry sand applications.',
            image: '/Chrome_Ore.webp',
            specs: ['Cr₂O₃: 30% – 48%', 'Cr/Fe Ratio: 1.5 – 3.5', 'Fe: 15% – 30%', 'SiO₂: 3% – 12%', 'Al₂O₃: 8% – 20%', 'MgO: 10% – 20%', 'Moisture: ≤ 8%', 'Form: Lump / Crushed', 'HS Code: 2610']
          },
          {
            name: 'Chrome Concentrate',
            slug: 'chrome-concentrate',
            description: 'Beneficiated chrome concentrate obtained after crushing, washing, gravity separation, or spiral concentration. Contains higher Cr₂O₃ levels and controlled impurity content for direct smelting into ferrochrome.',
            details: 'Concentrated chrome reduces processing cost per chromium unit and increases furnace efficiency. The beneficiation process improves the Cr/Fe ratio and removes gangue minerals. Used for high-grade ferrochrome production, stainless steel smelting, and specialty alloy manufacturing.',
            image: '/Chrom_Concentrate.webp',
            specs: ['Cr₂O₃: 42% – 52%', 'Cr/Fe Ratio: 2.5 – 3.5', 'Fe: 12% – 25%', 'SiO₂: ≤ 8%', 'Al₂O₃: 10% – 18%', 'MgO: 10% – 20%', 'Moisture: ≤ 10%', 'Particle Size: Fine concentrate', 'HS Code: 2610']
          }
        ]
      },
      {
        name: 'Antimony',
        slug: 'antimony',
        description: 'Industrial-grade material utilized in flame retardants, alloys, batteries, and specialty chemical production.',
        details: 'Antimony is a metalloid element with unique properties that make it valuable across a diverse range of industrial applications, from flame retardant compounds used in plastics and textiles, to lead-acid battery grid hardeners, semiconductor components, and glass clarification agents. Antimony trioxide (Sb2O3) is the most commercially important compound, widely used as a flame retardant synergist in polymer systems. Metal-grade antimony is used in bearing alloys, solder, and pewter. Classified as a critical mineral by several governments due to concentrated supply chains, antimony commands significant strategic interest. We supply antimony in ore, oxide, and metal forms with independent assay and compliant documentation for customs and trade finance.',
        image: '/Antimony_.webp',
        specs: ['Sb content: 55–65% (ore)', 'Sb2O3 purity: 99.5% min', 'Metal grade: 99.65% min', 'Packaging: drums and big bags']
      },
      {
        name: 'Bauxite',
        slug: 'bauxite',
        description: 'Primary raw material for alumina and aluminum production. A sedimentary rock composed mainly of aluminum hydroxide minerals, supplied as raw ore and beneficiated concentrate for alumina refineries and smelting operations.',
        details: 'Bauxite is the world\'s primary ore of aluminum, refined through the Bayer process into alumina (Al₂O₃), which is then smelted via the Hall-Héroult process to produce primary aluminum metal. Global demand is driven by aluminum production essential for construction, transportation, packaging, aerospace, and renewable energy sectors. Commercial value is determined by Al₂O₃ content, silica content (especially reactive silica), and the alumina-to-silica ratio.',
        image: '/Bauxite.webp',
        specs: ['Forms: Raw Bauxite / Beneficiated Bauxite', 'Al₂O₃: 40% – 58%', 'Primary minerals: Gibbsite, Boehmite, Diaspore', 'HS Code: 2606'],
        hsCode: '2606',
        subProducts: [
          {
            name: 'Raw Bauxite (Ore)',
            slug: 'raw-bauxite',
            description: 'Raw bauxite mined and supplied in lump or crushed form for transport to alumina refineries where it undergoes the Bayer process to extract alumina. Higher alumina and lower silica content improve refinery efficiency and reduce caustic soda consumption.',
            details: 'Primarily used in alumina refining (Bayer Process), aluminum smelting feedstock supply, and in cement and refractory industries for lower-grade material.',
            image: '/Bauxite_ore.webp',
            specs: ['Al₂O₃: 40% – 55%', 'SiO₂ (Total): 2% – 10%', 'Reactive Silica: < 5%', 'Fe₂O₃: 15% – 30%', 'TiO₂: 2% – 4%', 'Moisture: 5% – 12%', 'Form: Lump / Crushed', 'HS Code: 2606']
          },
          {
            name: 'Beneficiated Bauxite (Bauxite Concentrate)',
            slug: 'beneficiated-bauxite',
            description: 'Upgraded or washed bauxite produced through screening and washing processes to reduce silica content and improve alumina concentration. Preferred by alumina refineries requiring consistent chemical composition and higher recovery rates.',
            details: 'Lower silica and higher alumina ratio improve extraction yield and reduce refinery residue generation. Enhances refining efficiency and reduces operational costs. Used in primary alumina refineries, high-efficiency aluminum production, and metallurgical grade smelting feedstock.',
            image: '/Bauxite_Concentrate.webp',
            specs: ['Al₂O₃: 48% – 58%', 'SiO₂ (Total): 1% – 5%', 'Reactive Silica: < 3%', 'Fe₂O₃: 10% – 25%', 'Al₂O₃/SiO₂ Ratio: 8:1 – 15:1', 'Moisture: ≤ 10%', 'Form: Sized / Processed', 'HS Code: 2606']
          }
        ]
      },
      {
        name: 'Aluminum Ingots',
        slug: 'aluminum-ingots',
        description: 'Primary and secondary aluminum ingots for downstream casting, extrusion, rolling, and industrial manufacturing applications.',
        details: 'Aluminum ingots are refined, cast forms of primary or secondary aluminum metal produced by smelting alumina or remelting scrap aluminum. As one of the most widely used non-ferrous metals globally, aluminum is valued for its combination of low density, high strength-to-weight ratio, excellent corrosion resistance, thermal and electrical conductivity, and full recyclability. Primary aluminum ingots are produced through the Hall-Héroult electrolytic smelting process and are classified under various alloy series (1xxx through 8xxx) depending on their intended downstream application. Secondary aluminum ingots are produced from post-consumer or post-industrial scrap and are widely used in automotive castings, structural components, and general foundry work. We supply standard T-bar, sow, and notch-bar ingot formats in various alloy grades, with full chemical analysis certificates, country of origin documentation, and logistics support to port of destination.',
        image: '/Aluminum_Ingot.webp',
        specs: ['Purity: 99.7% min (primary grade)', 'Alloy series: 1xxx, 2xxx, 3xxx, 6xxx available', 'Form: T-bar, sow, and notch-bar ingots', 'Packaging: palletized or bulk, as per buyer specification']
      },
      {
        name: 'Gold',
        slug: 'gold',
        description: 'A globally traded precious metal recognized for its intrinsic value, corrosion resistance, high density, and monetary stability. Supplied as ore, ingots, bars, and nuggets for refinery, investment, and industrial applications.',
        details: 'Gold serves as both an investment asset and a critical material in jewelry, electronics, aerospace, and central bank reserves. We work within established compliance and documentation frameworks including provenance declarations, chain-of-custody documentation, LBMA-aligned due diligence, and AML/KYC-compliant trade structures to ensure all gold supply is responsibly and legally sourced. Purity is measured in percentage fineness or Karats: 24K = 99.9%/99.5%, 22K = 91.6%.',
        image: '/Gold.webp',
        specs: ['Forms: Ore / Ingots / Bars / Nuggets', 'Purity range: 94% – 99.9%', 'Assay: Fire Assay Method / Refinery Certificate', 'HS Code: 7108'],
        hsCode: '7108',
        subProducts: [
          {
            name: 'Gold Ore',
            slug: 'gold-ore',
            description: 'Gold ore is a naturally occurring mineral rock containing gold in variable concentrations. Mined from primary or alluvial deposits and processed through crushing, milling, and extraction methods such as gravity separation or cyanidation.',
            details: 'Gold content in ore is expressed in grams per metric ton (g/t). Primarily supplied to refineries and processing plants for extraction and purification into bullion. Sold based on assay results and recoverable gold content.',
            image: '/Gold_ore.webp',
            specs: ['Gold (Au) Content: 1 g/t – 30+ g/t', 'Silver (Ag): Trace – 20 g/t', 'Moisture: 3% – 10%', 'Form: Lump / Crushed', 'Assay: Required (Fire Assay Method)', 'HS Code: 7108']
          },
          {
            name: 'Gold Ingots (1 KG Standard)',
            slug: 'gold-ingots',
            description: 'Refined rectangular blocks of gold produced by refineries and cast into standardized 1 KG weights for international trade. Each ingot is typically accompanied by an assay certificate and serial number.',
            details: 'Higher purity ingots (99.9% / 99.5%) are investment or banking grade, while 95% and 94% are usually trade-grade bullion pending further refining. Available in four purity levels to match different trade and investment requirements.',
            image: '/Gold_Ingot.webp',
            specs: ['Purity: 99.9% (24K) / 99.5% (24K) / 95% / 94%', 'Weight: 1 KG', 'Form: Cast', 'Serial Number: Yes (for refined bars)', 'Assay Certificate: Required for 99.5%+', 'HS Code: 7108']
          },
          {
            name: 'Gold Bars',
            slug: 'gold-bars',
            description: 'Investment or wholesale bullion products manufactured in various sizes from 100 grams up to large delivery bars. Refined, stamped, and marked with purity and refinery details for institutional investment and large-scale trading.',
            details: 'High-purity bars (99.9% / 99.5%) meet international bullion trading standards, while lower purity bars (95% / 94%) are typically supplied for refinery feedstock or re-melting. Hallmarked for all bars 99.5% and above.',
            image: '/Gold_Bars.webp',
            specs: ['Purity: 99.9% (Investment) / 99.5% (Wholesale) / 95% / 94%', 'Weight Options: 100g – 12.5kg', 'Form: Cast / Minted', 'Hallmark: Required for 99.5%+', 'HS Code: 7108']
          },
          {
            name: 'Gold Nuggets',
            slug: 'gold-nuggets',
            description: 'Naturally occurring pieces of native gold recovered directly from mining sites or alluvial deposits. Purity varies based on geological origin and must be confirmed by assay before commercial trade.',
            details: 'Nuggets are irregular in shape and usually require refining for standardized bullion conversion. Mainly supplied to refineries for purification into 99.99% bullion. Assay is mandatory before commercial transaction.',
            image: '/Gold_Nuggets.webp',
            specs: ['Purity: 94% – 99.5%', 'Karat Equivalent: 22K – 24K', 'Weight: Variable', 'Form: Natural, irregular', 'Assay: Mandatory', 'HS Code: 7108']
          }
        ]
      }
    ]
  },
  {
    name: 'Industrial Minerals & Construction Materials',
    slug: 'industrial-minerals-construction-materials',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
    overview: 'Industrial growth begins with the right raw foundation. At Bright Business Services & Trading, we supply high-grade industrial minerals and construction materials that support infrastructure development, cement production, glass manufacturing, and specialized industrial applications.',
    products: [
      {
        name: 'Quartz',
        slug: 'quartz',
        description: 'One of the most abundant and versatile industrial minerals, composed primarily of silicon dioxide (SiO₂). Used in glass manufacturing, electronics, construction, semiconductors, solar panels, and engineered stone production across four distinct product forms.',
        details: 'The commercial value of quartz depends primarily on SiO₂ purity level, iron (Fe₂O₃) content, particle size distribution, and chemical consistency. We supply quartz across four product categories — from ultra-high purity HPQ for semiconductors and solar applications, to industrial sand for glass and construction, crystals for precision electronics, and fine powder for fillers and engineered stone.',
        image: '/Quartz.webp',
        specs: ['Forms: HPQ / Industrial Sand / Crystals / Powder', 'SiO₂ range: 95% – 99.99%', 'Fe₂O₃: ≤ 50 ppm (HPQ) to ≤ 0.5% (industrial)', 'HS Code: 2506'],
        hsCode: '2506',
        subProducts: [
          {
            name: 'High-Purity Quartz (HPQ)',
            slug: 'high-purity-quartz',
            description: 'Specialized quartz with extremely low impurity levels — especially iron, aluminum, and alkali metals. Critical for semiconductor manufacturing, photovoltaic (solar) applications, and optical fiber production requiring superior chemical and thermal stability.',
            details: 'Ultra-low iron content is critical for electronic and photovoltaic use. Used in semiconductor crucibles, solar panel silicon production, optical fiber manufacturing, and high-tech glass industries.',
            image: '/High-Purity_Quartz_(HPQ).webp',
            specs: ['SiO₂: ≥ 99.95% – 99.99%', 'Fe₂O₃: ≤ 50 ppm', 'Al₂O₃: ≤ 100 ppm', 'TiO₂: ≤ 30 ppm', 'CaO: ≤ 50 ppm', 'Moisture: ≤ 0.5%', 'Form: Lump / Granular', 'HS Code: 2506']
          },
          {
            name: 'Industrial Quartz Sand & Aggregates',
            slug: 'industrial-quartz-sand',
            description: 'Graded quartz sand and aggregates for glass production, foundry molds, construction materials, and filtration systems. Higher silica content improves transparency in glass production.',
            details: 'Graded by particle size and silica content for different industrial applications. Used in glass manufacturing, foundry casting, water filtration media, and construction aggregates.',
            image: '/Industrial_Quartz_Sand_&_Aggregates.webp',
            specs: ['SiO₂: 95% – 99.5%', 'Fe₂O₃: ≤ 0.5%', 'Al₂O₃: ≤ 2%', 'Moisture: ≤ 2%', 'Grain Size: Custom (0.1mm – 5mm)', 'HS Code: 2506']
          },
          {
            name: 'Quartz Crystals (Natural & Synthetic)',
            slug: 'quartz-crystals',
            description: 'Natural and synthetic quartz crystals used in electronics and precision instruments due to their piezoelectric properties. Essential in telecommunications, microelectronics, and frequency control devices.',
            details: 'Natural crystals are mined with hexagonal structure, while synthetic quartz is produced in controlled laboratory environments for enhanced purity and uniformity. Synthetic quartz is preferred for high-precision electronics.',
            image: '/Quartz_Crystals_(Natural_&_Synthetic).webp',
            specs: ['Natural SiO₂: 99%+', 'Synthetic SiO₂: ≥ 99.99%', 'Form: Rough/Cut (Natural) / Engineered crystal (Synthetic)', 'Applications: Oscillators, electronic components, optical instruments', 'HS Code: 2506']
          },
          {
            name: 'Quartz Powder & Fillers',
            slug: 'quartz-powder',
            description: 'Finely ground silica used as a filler in construction chemicals, paints, ceramics, engineered stone, and resin systems. Improves mechanical strength, chemical stability, and surface durability.',
            details: 'Particle size and purity determine industrial suitability. Ultra-fine grades enhance surface finish and mechanical performance. Used in engineered stone production, ceramic manufacturing, paints & coatings, construction fillers, and adhesives and sealants.',
            image: '/Quartz_Powder_&_Fillers.webp',
            specs: ['SiO₂: 95% – 99.9%', 'Fe₂O₃: ≤ 0.5% (industrial)', 'Particle Size: 10 micron – 500 micron', 'Moisture: ≤ 1%', 'Whiteness: High (for decorative uses)', 'HS Code: 2506']
          }
        ]
      },
      {
        name: 'Silica',
        slug: 'silica',
        description: 'Silicon dioxide (SiO₂), one of the most widely used industrial materials globally. Exists in both crystalline and amorphous forms serving critical roles in construction, glass manufacturing, electronics, rubber reinforcement, chemicals, pharmaceuticals, and high-tech industries.',
        details: 'Silica products are classified based on crystal structure, production process, purity level, and particle size and surface area. We supply both natural crystalline silica and synthetic amorphous silica variants — from glass-grade sands to high-surface-area precipitated, fumed, gel, and colloidal forms for specialty applications.',
        image: '/Silica.webp',
        specs: ['Forms: Crystalline / Precipitated / Fumed / Gel / Colloidal', 'SiO₂ range: 95% – 99.99%', 'HS Code: 2506 (Sand & Quartz) / 2811 (Synthetic)', 'Applications: Glass, rubber, electronics, pharma'],
        hsCode: '2506',
        subProducts: [
          {
            name: 'Crystalline Silica',
            slug: 'crystalline-silica',
            description: 'Naturally occurring silica with a well-ordered atomic structure. The most common form is quartz. Widely used in glass production, construction materials, foundry casting, ceramics, and industrial abrasives.',
            details: 'Primary crystalline forms include Quartz, Cristobalite, and Tridymite. High silica and low iron are critical for transparent glass production. Used in glass manufacturing, foundry molds, construction aggregates, and ceramic production.',
            image: '/Crystalline_Silica.webp',
            specs: ['SiO₂: 95% – 99.9%', 'Fe₂O₃: ≤ 0.5% (lower for glass grade)', 'Al₂O₃: ≤ 2%', 'Moisture: ≤ 2%', 'Hardness: 7 (Mohs)', 'Form: Sand / Lump / Powder', 'HS Code: 2506']
          },
          {
            name: 'Precipitated Silica',
            slug: 'precipitated-silica',
            description: 'Synthetic amorphous silica produced via wet chemical processing of sodium silicate. Controlled particle size and high surface area. Enhances durability, strength, and performance of rubber products.',
            details: 'Used in rubber reinforcement (tires), toothpaste, animal feed additive, and industrial fillers. Generally safer for industrial handling compared to crystalline silica and preferred in specialty chemical applications.',
            image: '/Precipitated_Silica.webp',
            specs: ['SiO₂: ≥ 98%', 'Surface Area (BET): 50 – 250 m²/g', 'Loss on Drying: ≤ 6%', 'pH: 6 – 8', 'Form: Fine white powder', 'HS Code: 2811']
          },
          {
            name: 'Fumed Silica',
            slug: 'fumed-silica',
            description: 'Produced by flame hydrolysis of silicon tetrachloride. Extremely small particle size and very high surface area, suitable for high-performance applications. Functions as a thickening, anti-settling, and reinforcing agent.',
            details: 'Used in paints & coatings, adhesives & sealants, silicone elastomers, and pharmaceutical formulations. Its ultra-high surface area and nano-scale particle size make it ideal for high-performance rheology control.',
            image: '/Fumed_silica.webp',
            specs: ['SiO₂: ≥ 99.8%', 'Surface Area (BET): 150 – 400 m²/g', 'Particle Size: 7 – 40 nm', 'Loss on Ignition: ≤ 2%', 'Form: Ultrafine powder', 'HS Code: 2811']
          },
          {
            name: 'Silica Gel',
            slug: 'silica-gel',
            description: 'Porous, granular amorphous silica used primarily as a desiccant and moisture-absorbing agent. High adsorption capacity and chemical stability for packaging, pharmaceutical, and industrial use.',
            details: 'Used in packaging desiccant, pharmaceutical storage, electronics moisture protection, and gas drying. Its exceptional surface area and pore structure give it outstanding moisture absorption performance.',
            image: '/Silica_Gel.webp',
            specs: ['SiO₂: ≥ 99%', 'Moisture Adsorption: High', 'Surface Area: 600 – 800 m²/g', 'pH: 4 – 8', 'Form: Beads / Granules', 'HS Code: 2811']
          },
          {
            name: 'Colloidal Silica',
            slug: 'colloidal-silica',
            description: 'Stable dispersion of nano-sized silica particles suspended in liquid, typically water. Used in precision polishing, coatings, and electronics manufacturing. High uniformity and stability critical for electronic applications.',
            details: 'Used in semiconductor polishing (CMP), investment casting binders, surface coatings, and paper & textile treatment. High uniformity and stability are critical in electronic and polishing applications.',
            image: '/Colloidal_Silica.webp',
            specs: ['SiO₂ Content: 20% – 50%', 'Particle Size: 5 – 100 nm', 'pH: 3 – 10 (varies by grade)', 'Appearance: Clear to milky liquid', 'HS Code: 2811']
          }
        ]
      },
      {
        name: 'Dolomite',
        slug: 'dolomite',
        description: 'Calcium magnesium carbonate mineral used across steelmaking, glass manufacturing, refractory production, construction aggregates, and agricultural soil conditioning.',
        details: 'Dolomite — chemical formula CaMg(CO₃)₂ — is a carbonate mineral and rock with a Mohs hardness of 3.5–4, typically white to light grey in appearance. It is one of the most versatile industrial minerals globally, valued for its dual calcium and magnesium content and its thermal decomposition behavior. In steelmaking, raw dolomite is used as a flux in blast furnaces, while calcined dolomite provides the refractory linings of BOF converters and EAF furnaces, critical for maintaining furnace integrity at extreme temperatures. The glass industry uses high-purity dolomite to supply MgO, which improves the durability and chemical resistance of finished glass. In agriculture, finely ground dolomite acts as a soil conditioner and pH neutralizer, simultaneously supplying calcium and magnesium. We supply dolomite across four processing stages — from raw ore to finished dolomite powder — with full chemical analysis, size grading, and origin documentation.',
        image: '/Dolomite.webp',
        specs: ['Forms: Ore / Concentrate / Calcined / Powder', 'CaCO₃ + MgCO₃: ≥ 90%', 'HS Code: 2518', 'Applications: Steel, glass, refractory, agriculture, construction'],
        hsCode: '2518',
        subProducts: [
          {
            name: 'Dolomite Ore',
            slug: 'dolomite-ore',
            description: 'Run-of-mine raw dolomite extracted directly from quarries, used as flux in steelmaking, construction aggregate, cement production, and glass manufacturing feedstock.',
            details: 'Dolomite ore is the primary extracted form of the mineral, supplied as lump or crushed material directly from quarries. It contains both calcium and magnesium carbonates with varying levels of silica, iron, and alumina depending on the deposit. In steelmaking, it is charged into blast furnaces as a flux to remove impurities and protect furnace linings. It is also used as a basic construction aggregate, as a raw input for calcined dolomite production, and as a glass-batch raw material.',
            image: '/Dolomite_Ore.webp',
            specs: ['CaCO₃: 45% – 55%', 'MgCO₃: 35% – 45%', 'SiO₂: ≤ 5%', 'Al₂O₃: ≤ 1%', 'Fe₂O₃: ≤ 1%', 'LOI: 40% – 48%', 'Form: Lump / Crushed', 'HS Code: 2518']
          },
         
          {
            name: 'Calcined Dolomite',
            slug: 'calcined-dolomite',
            description: 'Produced by high-temperature calcination of raw dolomite, yielding CaO and MgO. Used in steel furnace refractory linings, BOF/EAF slag control, desulfurization, and magnesium production.',
            details: 'Calcined dolomite is produced by heating raw dolomite in a rotary or shaft kiln to temperatures above 900°C, driving off CO₂ to produce a mixture of calcium oxide (CaO) and magnesium oxide (MgO). It is the primary refractory and fluxing material in the steel industry, used to protect BOF and EAF furnace linings from slag attack and to control the composition of molten steel. It is also used in the production of magnesia-based refractories, in desulfurization processes, and as a precursor for magnesium metal production.',
            image: '/Calcined_Dolomite.webp',
            specs: ['CaO: 30% – 40%', 'MgO: 15% – 25%', 'SiO₂: ≤ 2%', 'Fe₂O₃: ≤ 1%', 'LOI: ≤ 5%', 'Form: Lump / Powder', 'HS Code: 2518']
          },
          {
            name: 'Dolomite Powder',
            slug: 'dolomite-powder',
            description: 'Finely ground dolomite used as an agricultural soil neutralizer, filler in paints and plastics, and additive in glass, ceramics, and construction materials.',
            details: 'Dolomite powder is produced by milling and classifying dolomite to fine particle sizes between 100 and 500 mesh. In agriculture, it is applied as a soil pH neutralizer and mineral supplement, simultaneously providing calcium and magnesium to both soil and crops. In the construction and manufacturing sectors, fine dolomite powder is used as a white filler in paints, rubber, plastics, adhesives, and ceramics, contributing to improved brightness, opacity, and chemical resistance. It is also used as a fluxing filler in glass and as a calcium-magnesium source in animal feed minerals.',
            image: '/Dolomite_Powder.webp',
            specs: ['CaCO₃ + MgCO₃: ≥ 90%', 'SiO₂: ≤ 3%', 'Fe₂O₃: ≤ 1%', 'Particle Size: 100 mesh – 500 mesh', 'Moisture: ≤ 2%', 'HS Code: 2518']
          }
        ]
      },
      {
        name: 'Limestone',
        slug: 'limestone',
        description: 'Sedimentary rock primarily composed of calcium carbonate (CaCO₃). One of the most widely used industrial minerals in the world, serving as key raw material in cement manufacturing, steel production, construction, agriculture, and environmental treatment.',
        details: 'Limestone value depends mainly on CaCO₃ purity, CaO yield after calcination, silica and iron impurity levels, and particle size distribution. We supply limestone across four processed forms — raw ore through to quicklime and hydrated lime — to serve the full range of industrial and construction applications.',
        image: '/Limestone.webp',
        specs: ['Forms: Ore / Crushed / Quicklime / Hydrated Lime', 'CaCO₃: 85% – 98%', 'CaO: 85% – 95% (Quicklime)', 'HS Code: 2521 (Limestone) / 2522 (Lime)'],
        hsCode: '2521',
        subProducts: [
          {
            name: 'Limestone Ore',
            slug: 'limestone-ore',
            description: 'Raw, unrefined sedimentary rock harvested directly from quarries. The foundational feedstock for the entire lime and cement industry. Higher CaCO₃ and lower silica improve metallurgical performance.',
            details: 'Run-of-mine material contains varying levels of purity and natural impurities like clay, magnesium, or silica depending on the geological deposit. Used in cement manufacturing, steel flux in blast furnaces, construction aggregates, and glass production (high grade).',
            image: '/Limestone_Ore.webp',
            specs: ['CaCO₃: 85% – 98%', 'CaO (After Calcination): 48% – 55%', 'SiO₂: ≤ 5%', 'MgCO₃: ≤ 5%', 'Fe₂O₃: ≤ 1%', 'LOI: 40% – 44%', 'Form: Lump / Crushed', 'HS Code: 2521']
          },
          {
            name: 'Crushed / Processed Limestone',
            slug: 'crushed-limestone',
            description: 'Screened and sized limestone produced by passing raw ore through primary and secondary crushers. A standardized industrial product used as construction aggregate, steelmaking flux, and agricultural lime to neutralize soil acidity.',
            details: 'Processing includes washing to remove debris, resulting in standardized size fractions from large rip-rap to fine screenings. Used in ready-mix concrete, road base, glass and ceramics, and industrial fillers.',
            image: '/Limestone_Crashed_Processed.webp',
            specs: ['CaCO₃: 90% – 98%', 'SiO₂: ≤ 3%', 'Fe₂O₃: ≤ 1%', 'Moisture: ≤ 3%', 'Size: Custom grading (5mm – 50mm)', 'HS Code: 2521']
          },
          {
            name: 'Calcined Limestone (Quicklime – CaO)',
            slug: 'quicklime',
            description: 'Produced by heating limestone above 900°C to drive off CO₂, leaving calcium oxide (CaO). A highly caustic, chemically reactive material used in water treatment, steel manufacturing to remove impurities, and as a base for chemical syntheses.',
            details: 'Higher CaO content ensures better reactivity. Used in steel refining, flue gas treatment, water purification, and the sugar industry.',
            image: '/Calcined_Limestone.webp',
            specs: ['CaO: 85% – 95%', 'MgO: ≤ 5%', 'SiO₂: ≤ 3%', 'Fe₂O₃: ≤ 1%', 'LOI: ≤ 5%', 'Reactivity: High', 'Form: Lump / Powder', 'HS Code: 2522']
          },
          {
            name: 'Hydrated Lime (Ca(OH)₂)',
            slug: 'hydrated-lime',
            description: 'Also known as slaked lime — produced by adding water to quicklime in a highly exothermic reaction, resulting in a fine dry white powder. Much more stable and easier to handle than quicklime. Preferred for municipal water softening and flue gas treatment.',
            details: 'Used in water and wastewater treatment, soil stabilization, chemical processing, and environmental neutralization. Its fine fineness (200–325 mesh) ensures high reactivity and broad industrial compatibility.',
            image: '/Hydrate_Limestone.webp',
            specs: ['Ca(OH)₂: 90% – 98%', 'CaCO₃: ≤ 5%', 'MgO: ≤ 2%', 'Moisture: ≤ 1%', 'Fineness: 200 – 325 mesh', 'HS Code: 2522']
          }
        ]
      },
      {
        name: 'Gypsum',
        slug: 'gypsum',
        description: 'Naturally occurring calcium sulfate mineral available in raw ore, crushed, calcined (Plaster of Paris), and industrial powder grades for cement, construction, agriculture, and industrial applications.',
        details: 'Gypsum — calcium sulfate dihydrate (CaSO4·2H2O) — is a soft sulfate mineral with a Mohs hardness of 2, valued for its chemically bound water content and unique calcination-rehydration properties. Commercial value depends on CaSO4·2H2O purity, low clay and silica impurities, whiteness, and moisture content. In cement manufacturing, gypsum is added to clinker to regulate setting time and prevent flash set. It is the primary raw material for drywall (plasterboard) — the dominant interior wall system globally — and for plaster of Paris in architectural and medical applications. Agricultural gypsum improves soil structure in clay-heavy soils, supplies sulfur and calcium to crops, and reduces sodium in irrigated farmland. We supply gypsum across four processing stages — from raw ore to ultra-fine industrial powder — with full purity, whiteness, and setting time analysis.',
        image: '/gypsum.jpg',
        specs: ['Forms: Raw Ore / Crushed / Calcined (Plaster of Paris) / Industrial Powder', 'CaSO4·2H2O: 70% – 95%', 'HS Code: 2520', 'Applications: Cement, drywall, plaster, agriculture, industrial fillers'],
        hsCode: '2520',
        subProducts: [
          {
            name: 'Raw Gypsum (Natural Ore)',
            slug: 'raw-gypsum-ore',
            description: 'Naturally mined calcium sulfate dihydrate in lump form, used as cement retarder, gypsum board feedstock, and agricultural soil amendment.',
            details: 'Raw gypsum ore is extracted from open-pit mines or underground deposits as large, off-white or translucent chunks. It is the primary extracted form of the mineral and serves as the raw input for all downstream processed gypsum grades. Its naturally bound water content (CaSO4·2H2O) provides inherent fire resistance properties. In cement manufacturing, raw gypsum is ground and added to Portland clinker to regulate hydration and prevent flash setting. Higher purity grades with lower silica and clay content are preferred for direct use in cement plants and drywall manufacturing.',
            image: '/gypsum.jpg',
            specs: ['CaSO4·2H2O: 70% – 95%', 'SO3: 30% – 44%', 'CaO: 23% – 33%', 'SiO2: ≤ 5%', 'Moisture: 2% – 8%', 'Form: Lump', 'HS Code: 2520']
          },
          {
            name: 'Crushed / Processed Gypsum',
            slug: 'crushed-gypsum',
            description: 'Size-reduced and screened gypsum for cement plants, wallboard production, and agricultural land plaster applications.',
            details: 'Crushed gypsum is produced by passing raw gypsum ore through primary and secondary crushers and screening to remove impurities such as shale, clay, and oversize material. The resulting product is a consistent granular material commonly traded at 0–50 mm or custom size fractions. It is the most widely traded form of gypsum internationally, supplying cement plants where it is further ground and blended with clinker, and wallboard factories where uniform feed is required. In agriculture, crushed gypsum (known as land plaster) is applied directly to soil to improve structure, reduce compaction, and provide calcium and sulfur to crops.',
            image: '/gypsumprocessed.jpg',
            specs: ['CaSO4·2H2O: 80% – 95%', 'SO3: 35% – 44%', 'SiO2: ≤ 3%', 'Moisture: ≤ 5%', 'Size: 0 – 50 mm / Custom grading', 'HS Code: 2520']
          },
          {
            name: 'Calcined Gypsum (Plaster of Paris)',
            slug: 'calcined-gypsum-plaster-of-paris',
            description: 'Produced by heating gypsum to ~150°C to form calcium sulfate hemihydrate (CaSO4·½H2O), used in drywall manufacturing, interior construction plaster, decorative molding, and medical casts.',
            details: 'Calcined gypsum — commercially known as Plaster of Paris or stucco — is produced by heating raw gypsum to approximately 150°C in a calciner, driving off approximately 75% of the chemically combined water and converting CaSO4·2H2O to calcium sulfate hemihydrate (CaSO4·½H2O). When water is re-added to the calcined product, the reverse reaction occurs and the material re-hydrates and hardens back into a solid dihydrate structure. This reversible calcination property makes it the essential ingredient for drywall panels, wall and ceiling plaster systems, architectural moldings, dental and medical plaster casts, and ceramic investment molds. Setting time is a critical quality parameter, controlled by fineness and the presence of retarders or accelerators.',
            image: '/pop.jpg',
            specs: ['CaSO4·½H2O: ≥ 85%', 'SO3: 40% – 46%', 'Initial Setting Time: 5 – 25 minutes', 'Fineness: 100 – 300 mesh', 'Form: Fine powder', 'HS Code: 2520']
          },
          {
            name: 'Gypsum Powder (Industrial Grade)',
            slug: 'gypsum-powder-industrial',
            description: 'Ultra-fine milled gypsum powder used as a cement additive, agricultural soil conditioner, industrial filler in paints and paper, and calcium supplement in food-grade applications.',
            details: 'Industrial gypsum powder is the final refined form of processed gypsum, ground to ultra-fine particle sizes of 200–325 mesh in its non-calcined form. High purity and consistent fineness are essential properties for its diverse applications. As a cement additive, fine gypsum powder provides precise setting time control and sulfate balance in blended cements. In agriculture, it acts as a soil conditioner and sulfur-calcium supplement with faster soil incorporation than coarser grades. In the paint, paper, and plastics industries, fine white gypsum powder is used as a cost-effective inert filler that contributes brightness, opacity, and surface smoothness. Food-grade variants are used for calcium enrichment in tofu production and other applications.',
            image: '/gypsumpowder.jpg',
            specs: ['CaSO4·2H2O: ≥ 80%', 'SO3: 35% – 44%', 'Moisture: ≤ 2%', 'Fineness: 200 – 325 mesh', 'Color: White to off-white', 'HS Code: 2520']
          }
        ]
      },
      {
        name: 'Aggregate',
        slug: 'aggregate',
        description: 'Construction-grade granular materials including coarse aggregates, fine sand, crushed stone, recycled aggregate, and specialized lightweight and heavyweight types.',
        details: 'Construction aggregate is the granular mineral material — including crushed stone, gravel, and sand — that forms the structural backbone of concrete, asphalt, and road base materials. It is the single most consumed material in the construction industry globally, used in everything from high-rise foundations and bridge decks to highway sub-base layers and drainage systems. The mechanical properties of aggregate — particle shape, gradation, hardness, and abrasion resistance — directly influence the strength and durability of the final construction. We supply crushed granite, basalt, and limestone aggregates in a full range of sizes, compliant with ASTM and EN standards, tested for Los Angeles abrasion and particle shape, available in bulk or bagged form. Specialized variants include lightweight aggregates for thermal insulation applications and heavyweight aggregates for radiation shielding.',
        image: '/aggregate.webp',
        specs: ['Types: Coarse / Fine / Crushed Stone / Recycled / Specialized', 'Size Range: 0.075 mm – 50 mm', 'LA Abrasion tested per ASTM C131', 'Available in bulk or bagged'],
        hsCode: '2517',
        subProducts: [
          {
            name: 'Coarse Aggregates',
            slug: 'coarse-aggregates',
            description: 'Crushed stone or gravel sized 10–40 mm, used as the primary structural component in reinforced concrete, road base layers, and infrastructure foundations.',
            details: 'Coarse aggregates are the backbone of structural concrete and road construction. Their angular, crushed shape ensures excellent mechanical interlock within concrete matrices, contributing to high compressive and flexural strength. They are sourced from quarried granite, basalt, and limestone, selected for hardness, low water absorption, and resistance to abrasion. Suitable for reinforced concrete slabs, structural columns, bridge decks, road sub-base, and heavy infrastructure foundations.',
            image: '/coarse.webp',
            specs: ['Size: 10 mm – 40 mm', 'Specific Gravity: 2.5 – 3.0', 'Water Absorption: ≤ 2%', 'Los Angeles Abrasion: ≤ 35%', 'Fines Content: ≤ 2%', 'Shape: Angular / Crushed', 'HS Code: 2517']
          },
          {
            name: 'Fine Aggregates (Sand)',
            slug: 'fine-aggregates-sand',
            description: 'Natural or crushed sand sized 0.075–4.75 mm, used in concrete production, plastering mortar, block manufacturing, and asphalt production.',
            details: 'Fine aggregates fill the voids between coarse aggregate particles in concrete, improving workability, density, and surface finish. They are characterized by fineness modulus and grading to ensure uniform particle size distribution. Natural river sand and manufactured crushed sand are both available, each offering different surface textures and grading characteristics. Used in ready-mix concrete, masonry mortar, plaster, precast elements, and asphalt wearing courses.',
            image: '/sand.webp',
            specs: ['Size: 0.075 mm – 4.75 mm', 'Fineness Modulus: 2.3 – 3.1', 'Silt Content: ≤ 5%', 'Moisture: ≤ 5%', 'Bulk Density: 1,500 – 1,700 kg/m³', 'HS Code: 2505']
          },
          {
            name: 'Crushed Stone Aggregate',
            slug: 'crushed-stone-aggregate',
            description: 'High-strength crushed rock sized 5–50 mm with superior mechanical properties, used in high-grade concrete, highway construction, railway ballast, and drainage systems.',
            details: 'Crushed stone aggregate is produced from hard rock quarries using primary and secondary crushing, resulting in angular particles with excellent shape and high compressive strength. Its angular geometry provides superior bond in concrete and asphalt compared to rounded natural gravel. Widely used in high-performance concrete mixes, motorway base layers, railway track ballast, and drainage blanket systems. Available in standard size fractions and custom gradings.',
            image: '/crushedstone.webp',
            specs: ['Size: 5 mm – 50 mm', 'Compressive Strength: ≥ 100 MPa', 'LA Abrasion: ≤ 30%', 'Flakiness Index: ≤ 25%', 'Water Absorption: ≤ 2%', 'HS Code: 2517']
          },
          {
            name: 'Recycled Aggregate',
            slug: 'recycled-aggregate',
            description: 'Processed construction and demolition waste aggregate used in road sub-base, backfilling, and non-structural concrete applications.',
            details: 'Recycled aggregate is produced from crushed concrete, masonry, and demolition waste processed to remove contaminants and sized to specification. It provides a cost-effective and environmentally responsible alternative to virgin aggregate for lower-specification applications. Suitable for road and pavement sub-base, bulk backfilling, non-structural concrete, and landscaping applications. Its use supports sustainability targets and reduces construction waste going to landfill.',
            image: '/recycled.webp',
            specs: ['Size: 10 mm – 40 mm', 'Recycled Content: ≥ 85%', 'Water Absorption: ≤ 6%', 'Impurities: ≤ 3%', 'HS Code: 2517']
          },
          {
            name: 'Specialized Aggregates',
            slug: 'specialized-aggregates',
            description: 'Lightweight (expanded clay/shale) and heavyweight (barite/magnetite) aggregates engineered for thermal insulation concrete and radiation shielding applications.',
            details: 'Specialized aggregates are engineered materials produced for non-standard concrete applications requiring specific density or thermal properties. Lightweight aggregates — typically expanded clay or shale — are used in the production of low-density structural concrete for high-rise buildings and insulation slabs, significantly reducing dead load on structures. Heavyweight aggregates — typically barite or magnetite — are used to produce high-density concrete for radiation shielding in nuclear facilities, medical imaging rooms, and specialized infrastructure, where high mass per unit volume is essential.',
            image: '/specialized.webp',
            specs: ['Lightweight: Expanded Clay/Shale | Density: 800 – 1,200 kg/m³', 'Heavyweight: Barite/Magnetite | Density: 3,200 – 4,000 kg/m³', 'Applications: High-rise insulation / Radiation shielding', 'HS Code: 2517']
          }
        ]
      },
      {
        name: 'Zinc',
        slug: 'zinc',
        description: 'Versatile industrial metal widely used for galvanizing steel, alloy production, die casting, and battery manufacturing. Its primary function is corrosion protection, making it essential in infrastructure, automotive, marine, and construction sectors. Traded in concentrate, refined, and ingot form.',
        details: 'Approximately 50% of global zinc production is used for galvanizing steel to prevent rust and extend structural lifespan. Zinc is internationally traded across three primary forms — concentrate from mine to smelter, refined zinc for end-use applications, and standardized ingots for global commodity exchange and factory supply.',
        image: '/zinc.webp',
        specs: ['Forms: Concentrate / Refined / Ingots', 'Zn: 45%–60% (concentrate) to ≥ 99.995% (SHG)', 'HS Code: 2608 (Ores & Concentrates) / 7901 (Refined)', 'LME-compliant SHG grade available'],
        hsCode: '2608',
        subProducts: [
          {
            name: 'Zinc Concentrate',
            slug: 'zinc-concentrate',
            description: 'Intermediate semi-processed product — the primary bridge between mine and smelter. Created by crushing raw zinc ore and using flotation to separate valuable zinc minerals from waste rock. Zinc content boosted to 48%–60%. Traded based on Treatment Charges (TCs).',
            details: 'Available in Standard Grade (50%–55% Zn) as common smelter feedstock, High Grade (55%–60% Zn) for premium recovery, and Complex Concentrate containing higher Pb, Ag, or other recoverable elements. Higher Zn content with lower impurities increases recovery efficiency.',
            image: '/zinconcentrate.webp',
            specs: ['Zinc (Zn): 45% – 60%', 'Sulfur (S): 25% – 35%', 'Iron (Fe): 5% – 12%', 'Lead (Pb): < 3%', 'Cadmium (Cd): < 0.3%', 'Arsenic (As): < 0.5%', 'Moisture: ≤ 10%', 'Form: Fine concentrate', 'HS Code: 2608']
          },
          {
            name: 'Zinc Refined',
            slug: 'zinc-refined',
            description: 'Pure zinc metal after smelting and purification to remove nearly all impurities. Special High Grade (SHG) at 99.995% purity is the industry benchmark for high-tech applications. Currently seeing high demand from renewable energy and the zinc-air battery market.',
            details: 'Available in three grades: SHG (99.995%) as LME deliverable grade, HG – High Grade (99.95%) for galvanizing and alloy production, and Prime Western Grade (PWG) at ≥ 98.5% for industrial applications.',
            image: '/zincrefined.webp',
            specs: ['Zinc (Zn): ≥ 99.995% (SHG)', 'Lead (Pb): ≤ 0.003%', 'Iron (Fe): ≤ 0.002%', 'Cadmium (Cd): ≤ 0.002%', 'Copper (Cu): ≤ 0.002%', 'Aluminum (Al): ≤ 0.001%', 'HS Code: 7901']
          },
          {
            name: 'Zinc Ingots',
            slug: 'zinc-ingots',
            description: 'Standardized physical form of refined zinc metal for global trade, shipping, and storage. Rectangular bars (20–25 kg) bundled into 1-ton pallets, or Jumbo blocks up to 1,200 kg. The most liquid form of zinc on commodity exchanges like the LME.',
            details: 'Essential plug-and-play raw material for factories producing galvanized steel, automotive die-cast parts, and high-performance alloys like brass. Available in SHG (≥ 99.995%), HG (≥ 99.95%), and PWG (≥ 98.5%) grades.',
            image: '/zincingots.webp',
            specs: ['SHG: ≥ 99.995% Zn', 'HG: ≥ 99.95% Zn', 'PWG: ≥ 98.5% Zn', 'Weight: 25 kg – 1 MT', 'Form: Cast slab / Ingot', 'Packaging: Bundled / Strapped', 'HS Code: 7901']
          }
        ]
      },
      {
        name: 'Bentonite',
        slug: 'bentonite',
        description: 'Highly absorbent smectite clay available in ore, sodium, calcium, activated, and industrial powder grades for drilling, civil engineering, foundry, and industrial applications.',
        details: 'Bentonite is a highly plastic, swelling clay composed predominantly of montmorillonite, formed by the weathering and alteration of volcanic ash in marine environments. Its exceptional water absorption, swelling capacity, and rheological properties make it indispensable across multiple industries. In oil and gas drilling, sodium bentonite is the primary viscosifying and filtration-control agent in water-based drilling fluids, suspending cuttings and stabilizing the borehole wall. In foundry operations, calcium bentonite is used to bond molding sand into the precise shapes required for metal casting. Civil engineers use bentonite slurries for diaphragm wall construction and as a sealing agent in landfill liners and geosynthetic clay liners. Activated bentonite — either sodium-activated or acid-activated (bleaching earth) — is used in edible oil refining, petroleum processing, and industrial filtration. We supply bentonite across five grades — from raw ore to industrial powder — with full swelling index, fluid loss, and rheological analysis.',
        image: '/bentonite.webp',
        specs: ['Grades: Ore / Sodium / Calcium / Activated / Industrial Powder', 'Montmorillonite: 60% – 85%', 'HS Code: 2508', 'Forms: Lump / Powder / Granules'],
        hsCode: '2508',
        subProducts: [
          {
            name: 'Bentonite Ore',
            slug: 'bentonite-ore',
            description: 'Raw extracted bentonite in lump form, used as feedstock for drilling mud production, foundry sand bonding, and iron ore pelletizing.',
            details: 'Bentonite ore is the primary extracted form of the mineral, supplied directly from mining operations as lump material before further drying or milling. It contains a natural montmorillonite content of 60–85% alongside silica, alumina, and iron oxides from the original geological deposit. It serves as the raw input for all processed bentonite grades and is also used directly in foundry operations and iron ore pelletizing where particle size requirements are less critical.',
            image: '/bentoniteore.webp',
            specs: ['Montmorillonite: 60% – 85%', 'Moisture: 8% – 18%', 'SiO₂: 55% – 65%', 'Al₂O₃: 15% – 25%', 'CaO: 1% – 5%', 'Na₂O: 1% – 4%', 'Form: Lump', 'HS Code: 2508']
          },
          {
            name: 'Sodium Bentonite',
            slug: 'sodium-bentonite',
            description: 'High-swelling sodium bentonite (Wyoming-type) used in oil and gas drilling fluids, civil engineering slurry walls, landfill liners, and geosynthetic waterproofing systems.',
            details: 'Sodium bentonite — also known as swelling bentonite or Wyoming bentonite — is the highest-performance grade of bentonite, characterized by its exceptional swelling capacity in water. When hydrated, sodium bentonite can swell to up to 20 times its dry volume, forming a dense, low-permeability gel. This property makes it the standard additive for water-based drilling fluids in oil and gas exploration, where it provides viscosity, filtration control, and borehole stabilization. It is also used in civil engineering for slurry trench walls, horizontal directional drilling (HDD), and as the active component in geosynthetic clay liners (GCLs) for landfill containment and waterproofing membranes.',
            image: '/sodiumbentonite.webp',
            specs: ['Montmorillonite: ≥ 70%', 'Swelling Capacity: 20 – 35 ml/2g', 'Viscosity (API): 15 – 30 cP', 'Moisture: ≤ 12%', 'pH: 8 – 10', 'Form: Powder / Granules', 'HS Code: 2508']
          },
          {
            name: 'Calcium Bentonite',
            slug: 'calcium-bentonite',
            description: 'Non-swelling calcium bentonite (Fuller\'s Earth) used in cat litter, soil conditioning, wine and oil clarification, and industrial absorbent applications.',
            details: 'Calcium bentonite — also known as non-swelling bentonite or Fuller\'s Earth — has a lower swelling capacity than sodium bentonite but retains strong adsorption and absorption properties. It is the preferred grade for consumer and agricultural applications, including cat litter production, where its natural absorbency and clumping behavior are valued. In food and beverage processing, calcium bentonite is used to clarify wines, juices, and edible oils by adsorbing proteins and colloidal matter. It also serves as a soil conditioner, improving structure and water retention in sandy soils, and as an industrial absorbent for oil spills and chemical spills.',
            image: '/calciumbentonite.webp',
            specs: ['Montmorillonite: 60% – 75%', 'Swelling Capacity: 8 – 15 ml/2g', 'Moisture: ≤ 12%', 'pH: 6 – 8', 'Form: Powder / Granular', 'HS Code: 2508']
          },
          {
            name: 'Activated Bentonite',
            slug: 'activated-bentonite',
            description: 'Chemically treated bentonite — sodium-activated for enhanced swelling, or acid-activated (bleaching earth) for edible oil purification, petroleum refining, and industrial filtration.',
            details: 'Activated bentonite is produced through chemical treatment of natural calcium or lower-grade bentonite. Sodium-activated bentonite is produced by treating low-grade calcium bentonite with soda ash to convert exchangeable calcium ions to sodium ions, inducing high-swelling sodium bentonite behavior at reduced cost. Acid-activated bentonite — commercially traded as bleaching earth — is produced by treating bentonite with inorganic acids such as sulfuric or hydrochloric acid, which dissolves carbonate impurities and opens the clay structure to dramatically increase surface area and porosity. Acid-activated grades are the industry standard for refining and bleaching edible oils, vegetable oils, and fats, as well as for petroleum refining and industrial adsorption processes.',
            image: '/activatedbentonite.webp',
            specs: ['Surface Area: 200 – 300 m²/g', 'Moisture: ≤ 10%', 'pH: 3 – 5 (acid activated)', 'Form: Fine powder', 'Variants: Sodium-Activated / Acid-Activated (Bleaching Earth)', 'HS Code: 2508']
          },
          {
            name: 'Bentonite Powder (Industrial Grades)',
            slug: 'bentonite-powder',
            description: 'Finely milled bentonite powder for foundry mold bonding, iron ore pelletizing, construction grouting, and agricultural applications.',
            details: 'Industrial bentonite powder is produced by drying and milling bentonite ore to fine particle sizes of 200–325 mesh. The particle size and montmorillonite content are controlled to meet the requirements of specific industrial applications. In foundry operations, bentonite powder is mixed with sand to create green sand molds capable of withstanding the heat and pressure of molten metal casting. In iron ore pelletizing, bentonite acts as a binder to form green pellets with sufficient mechanical strength for direct reduction and blast furnace operations. It is also used in construction grouting, waterproofing membranes, and as a soil additive in agriculture.',
            image: '/industrialbentonite.webp',
            specs: ['Montmorillonite: 65% – 85%', 'Moisture: ≤ 10%', 'Particle Size: 200 – 325 mesh', 'Swelling Index: Grade dependent', 'Form: Fine powder', 'HS Code: 2508']
          }
        ]
      },
      {
        name: 'Salt',
        slug: 'salt',
        description: 'Industrial and food-grade sodium chloride for chemical production, water treatment, de-icing, and food processing applications.',
        details: 'Sodium chloride (NaCl), commonly known as salt, is one of the most widely produced and traded minerals globally, with applications spanning the chemical industry, food processing, water treatment, and infrastructure de-icing. The chemical industry is the largest consumer of industrial salt, using it as feedstock for the chlor-alkali process that produces chlorine and caustic soda — the building blocks of PVC, paper, bleach, and a vast range of industrial chemicals. Food-grade salt is used in food preservation, seasoning, and as a mineral supplement in animal feed. Water treatment plants use salt for ion exchange regeneration in water softening systems. We supply solar-evaporated sea salt and vacuum-refined food-grade salt in a range of particle sizes and purity grades, with NaCl content, moisture, and trace element analysis.',
        image: '/salt.webp',
        specs: ['Forms: Rock Salt / Solar Salt / Refined Salt / Tablets & Pellets', 'NaCl Range: 90% – 99%+', 'Applications: Chemical, food, water treatment, de-icing', 'Packaging: Bulk, 50kg bags, or jumbo bags'],
        hsCode: '2501',
        subProducts: [
          {
            name: 'Rock Salt',
            slug: 'rock-salt',
            description: 'Naturally occurring halite mined from underground deposits, used in de-icing, chemical feedstock, and industrial processing applications.',
            details: 'Rock salt is mined from underground evaporite deposits formed by the evaporation of ancient seas. It is the least processed form of salt, typically available as lumps or crushed material. It is widely used for road de-icing, chemical manufacturing, and industrial processes where high purity is not required. Rock salt is supplied in bulk or bagged formats and can be further processed to produce higher-purity grades. Its high NaCl content and natural mineral composition make it suitable for a range of industrial applications.',
            image: '/rocksalt.webp',
            specs: ['NaCl: 90% – 97%', 'Moisture: ≤ 5%', 'Insoluble: ≤ 5%', 'Ca + Mg: ≤ 3%', 'Form: Lump / Crushed', 'HS Code: 2501']
          },
          {
            name: 'Solar Salt (Sea Salt – Industrial)',
            slug: 'solar-salt',
            description: 'Solar-evaporated sea salt produced in coastal salt pans, used in chlor-alkali production, water softening, and industrial chemical processes.',
            details: 'Solar salt is produced by the natural evaporation of seawater or brine in large shallow pans using solar energy and wind. It is one of the most widely traded forms of industrial salt globally, valued for its consistent quality and cost-effective production. Solar salt is used as a primary feedstock in chlor-alkali plants for chlorine and caustic soda production, and in water treatment facilities for ion exchange regeneration. We supply solar salt in crystalline or crushed form with full chemical analysis, packaged in bulk or jumbo bags to meet large-volume industrial requirements.',
            image: '/solarsalt.webp',
            specs: ['NaCl: 95% – 98.5%', 'Moisture: ≤ 3%', 'Ca²⁺: ≤ 0.5%', 'Mg²⁺: ≤ 0.5%', 'Insoluble: ≤ 2%', 'Form: Crystalline / Crushed', 'HS Code: 2501']
          },
          {
            name: 'Granular / Crushed Refined Salt',
            slug: 'granular-refined-salt',
            description: 'High-purity vacuum or mechanically refined salt in granular or crushed form for food processing, pharmaceutical, and precision industrial applications.',
            details: 'Granular and crushed refined salt is produced through vacuum evaporation or mechanical refining processes that remove impurities and achieve high NaCl purity levels. It is used in food preservation, pickling, seasoning, and pharmaceutical formulations where precise particle size and chemical purity are critical. The granular form is also used in water softening systems, chemical synthesis, and as a raw material in industrial salt applications requiring controlled solubility. We supply refined salt with tight size grading and full compliance certification to international food and industrial standards.',
            image: '/crushedsalt.webp',
            specs: ['NaCl: 98% – 99.5%', 'Moisture: ≤ 1%', 'Insoluble: ≤ 0.5%', 'Ca²⁺: ≤ 0.2%', 'Mg²⁺: ≤ 0.1%', 'Size: 0.5mm – 5mm', 'HS Code: 2501']
          },
          {
            name: 'Salt Tablets / Pellets',
            slug: 'salt-tablets-pellets',
            description: 'Compressed high-purity salt tablets and pellets for water softeners, ion exchange systems, and brine generation in industrial and domestic applications.',
            details: 'Salt tablets and pellets are manufactured by compressing highly refined sodium chloride into uniform tablet or pellet shapes. They are specifically designed for use in water softening units and ion exchange regeneration systems, where consistent size and ultra-high purity are essential for effective performance. The compressed form ensures slow, controlled dissolution, optimising brine concentration and minimising system maintenance. Salt pellets are also used in industrial brine circuits, electrolysis plants, and pharmaceutical-grade processes. We supply certified salt tablets and pellets conforming to applicable standards for water treatment and food-grade applications.',
            image: '/tabletsalt.webp',
            specs: ['NaCl: ≥ 99%', 'Moisture: ≤ 0.5%', 'Insoluble: ≤ 0.1%', 'Form: Tablet / Pellet', 'HS Code: 2501']
          }
        ]
      },
      {
        name: 'Cement',
        slug: 'cement',
        description: 'Hydraulic binding material available in OPC, Portland Pozzolana, Sulfate Resistant, and White Cement grades for construction, infrastructure, and specialty applications.',
        details: 'Portland cement is the fundamental binding material in modern construction, produced by grinding and calcining a carefully proportioned mixture of limestone, clay, and corrective materials in a rotary kiln to form clinker, which is then ground with gypsum to the final product. When mixed with water, cement undergoes hydration reactions that produce a hard, durable matrix capable of bonding aggregates, filling structural voids, and resisting compressive loads. We supply four primary cement types — OPC for general structural use, PPC for mass concrete and marine conditions, SRC for aggressive soil and chemical environments, and White Cement for architectural and decorative applications — from certified manufacturing plants with full compliance documentation to ASTM C150, EN 197-1, and equivalent national standards.',
        image: '/cement.webp',
        specs: ['Grades: OPC / PPC / SRC / White Cement', 'Compliance: ASTM C150 / EN 197-1', 'HS Code: 2523', 'Packaging: 50kg bags, 1-tonne big bags, bulk tanker'],
        hsCode: '2523',
        subProducts: [
          {
            name: 'Ordinary Portland Cement (OPC)',
            slug: 'ordinary-portland-cement',
            description: 'The most widely used cement type globally, available in 32.5, 42.5, and 52.5 MPa grades for residential buildings, structural concrete, and infrastructure projects.',
            details: 'Ordinary Portland Cement is the standard hydraulic binder used across general construction. It is produced by grinding Portland clinker with gypsum to control setting time. Three strength classes are available — 32.5, 42.5, and 52.5 — classified by 28-day compressive strength in MPa. Higher clinker grades provide faster strength gain, making 52.5N preferred for pre-stressed concrete and fast-track construction. All grades comply with EN 197-1 and ASTM C150. Suitable for residential construction, structural slabs and columns, road pavement, and general infrastructure.',
            image: '/opc.webp',
            specs: ['CaO: 60% – 67%', 'SiO₂: 17% – 25%', 'Al₂O₃: 3% – 8%', 'Fe₂O₃: 0.5% – 6%', 'MgO: ≤ 5%', 'SO₃: ≤ 3%', 'LOI: ≤ 3%', 'Grades: 32.5 / 42.5 / 52.5 MPa', 'HS Code: 2523']
          },
          {
            name: 'Portland Pozzolana Cement (PPC)',
            slug: 'portland-pozzolana-cement',
            description: 'Blended cement containing 15–35% pozzolanic materials (fly ash or volcanic ash) for mass concrete, marine construction, foundations, and dam works.',
            details: 'Portland Pozzolana Cement is a blended hydraulic binder produced by intergrinding OPC clinker with pozzolanic materials such as fly ash, volcanic ash, or silica fume. The pozzolanic reaction produces additional CSH gel that reduces pore size and permeability over time, resulting in improved durability, lower heat of hydration, and superior resistance to sulfate attack and chloride ingress. It is the preferred cement for mass concrete pours, marine and coastal structures, large foundations, and dam construction where thermal cracking must be minimized and long-term durability is critical.',
            image: '/ppc.webp',
            specs: ['Clinker: 65% – 85%', 'Fly Ash / Pozzolana: 15% – 35%', 'SO₃: ≤ 3%', 'Setting Time (Initial): ≥ 30 min', '28-Day Strength: ≥ 32.5 MPa', 'HS Code: 2523']
          },
          {
            name: 'Sulfate Resistant Cement (SRC)',
            slug: 'sulfate-resistant-cement',
            description: 'Modified Portland cement with very low C₃A content for marine structures, sewage treatment plants, and foundations in sulfate-bearing soils.',
            details: 'Sulfate Resistant Cement is a modified Portland cement engineered with a very low tricalcium aluminate (C₃A) content, which is the primary reactive phase attacked by sulfate ions. By limiting C₃A to ≤5%, the cement resists the expansive ettringite-forming reaction that causes cracking and deterioration in structures exposed to sulfate-bearing environments. It is the required specification for marine structures, foundations in gypsiferous or sulfate-bearing soils, sewage pipes and treatment infrastructure, retaining walls in coastal and industrial zones, and tunneling in aggressive ground conditions.',
            image: '/sulfatecement.webp',
            specs: ['C₃A: ≤ 5%', 'CaO: 60% – 65%', 'SO₃: ≤ 2.5%', '28-Day Strength: ≥ 42.5 MPa', 'HS Code: 2523']
          },
          {
            name: 'White Cement',
            slug: 'white-cement',
            description: 'High-whiteness architectural cement manufactured from white chalk and china clay with minimal iron oxide for decorative concrete, tile grout, and architectural finishes.',
            details: 'White cement is manufactured using white chalk or limestone combined with china clay, processed to remove virtually all iron oxide and manganese — the minerals responsible for the grey color of standard Portland cement. The result is a high-whiteness hydraulic binder suitable for architectural, decorative, and specialty applications where color and aesthetic appearance are critical. It is used in architectural concrete facades, precast decorative elements, colored concrete systems, tile adhesives and grout, white or light-colored plaster systems, and terrazzo and polished concrete finishes. White cement achieves equivalent structural performance to OPC and is available in 42.5 and 52.5 MPa grades.',
            image: '/whitecement.webp',
            specs: ['Whiteness: ≥ 85%', 'Fe₂O₃: ≤ 0.5%', 'CaO: 60% – 67%', '28-Day Strength: ≥ 42.5 MPa', 'HS Code: 2523']
          }
        ]
      },
      {
        name: 'Concrete',
        slug: 'concrete',
        description: 'Composite construction material available in dry mix, precast, and specialized forms including high-strength, self-compacting, fiber-reinforced, and lightweight concrete.',
        details: 'Concrete is the world\'s most consumed construction material, formed by combining Portland cement, water, fine aggregates (sand), and coarse aggregates (crushed stone or gravel) in carefully designed proportions to achieve specified compressive strength, durability, and workability. Different concrete types are engineered for specific structural, environmental, and performance requirements. Dry mix concrete provides a cost-effective bagged solution for smaller or remote projects. Precast concrete delivers factory-manufactured precision elements for structural frames, bridge segments, and civil infrastructure. Specialized concrete types — including high-strength, self-compacting, fiber-reinforced, and lightweight varieties — address demanding applications from high-rise construction to industrial flooring. We supply concrete mix designs and precast elements with full mix design documentation, cube test results, and material traceability.',
        image: '/concrete.webp',
        specs: ['Types: Dry Mix / Precast / Specialized', 'Strength Range: C15 – C100+', 'HS Code: 6810 (Precast) / 3824 (Dry Mix)', 'Mix design documentation and cube test reports provided'],
        hsCode: '6810',
        subProducts: [
          {
            name: 'Dry Mix Concrete',
            slug: 'dry-mix-concrete',
            description: 'Pre-blended dry concrete mix in bulk or bagged format for small-scale construction, remote projects, and repair works — requiring only water addition on site.',
            details: 'Dry mix concrete is a factory-proportioned blend of cement, sand, and crushed aggregate in controlled ratios, supplied in bulk or bagged form for on-site mixing with water. It eliminates the need for on-site batching equipment and is ideal for small-scale construction, repair works, isolated infrastructure projects, and remote locations where ready-mix delivery is impractical. Strength classes from C15 to C40 are available, covering applications from non-structural fill to structural footings. Bagged formats include 25 kg and 50 kg options.',
            image: '/drymix.webp',
            specs: ['Strength Class: C15 – C40', 'Cement Content: 250 – 450 kg/m³', 'Moisture: Controlled', 'Aggregate: Crushed stone / sand', 'Packaging: Bulk / 25kg / 50kg bags', 'HS Code: 3824']
          },
          {
            name: 'Precast Concrete',
            slug: 'precast-concrete',
            description: 'Factory-manufactured reinforced concrete elements including beams, columns, wall panels, pipes, culverts, and bridge segments with controlled curing and precise dimensional tolerances.',
            details: 'Precast concrete elements are produced under factory-controlled conditions, with precision formwork, consistent mix design, steam or moist curing, and quality inspection prior to delivery. This method delivers superior dimensional accuracy, better surface finish, and faster on-site installation compared to in-situ concrete construction. Common precast products include structural beams and columns, hollow-core floor slabs, retaining wall panels, box culverts, drainage pipes, bridge girders, and tunnel liners. Higher strength classes (C30–C70) are achievable in a precast environment due to optimized production conditions and admixture use.',
            image: '/precastconcrete.webp',
            specs: ['Strength Class: C30 – C70', 'Reinforcement: Steel reinforced / Pre-stressed', 'Surface Finish: Smooth / Custom', 'Curing: Steam cured / Moist cured', 'HS Code: 6810']
          },
          {
            name: 'Specialized Concrete',
            slug: 'specialized-concrete',
            description: 'Engineered concrete variants — high-strength (C60–C100+), self-compacting (SCC), fiber-reinforced (FRC), and lightweight — for demanding structural and infrastructure applications.',
            details: 'Specialized concrete types are formulated with admixtures, supplementary cementitious materials, and fiber reinforcement to meet performance requirements beyond standard concrete grades. High-strength concrete (C60–C100+) incorporates superplasticizers and low water-cement ratios for high-rise buildings and heavy infrastructure. Self-compacting concrete (SCC) achieves high flowability without vibration, ideal for complex reinforcement congestion. Fiber-reinforced concrete (FRC) incorporates steel or synthetic fibers to improve impact resistance, reduce shrinkage cracking, and enhance post-crack ductility for industrial floors and pavements. Lightweight concrete reduces dead load through the use of lightweight aggregates, expanding applications in high-rise and thermally insulated structures.',
            image: '/specializedconcrete.webp',
            specs: ['High-Strength: C60 – C100+ | Admixtures: Superplasticizers', 'SCC: Slump Flow 600 – 800 mm | High segregation resistance', 'FRC: Fiber content 0.5% – 2% (steel or synthetic)', 'Lightweight: Density 1,400 – 1,900 kg/m³', 'HS Code: 6810']
          }
        ]
      }
    ]
  },
  {
  name: 'Feed Additives & Raw Materials',
  slug: 'food-beverages',
  image: '/FeedRawMaterials&Additives.webp',
  overview: 'Our Feed Additives & Raw Materials section includes a carefully selected range of high-quality ingredients essential for balanced animal nutrition and efficient feed production. We supply main grains such as corn, wheat, barley, sorghum, and millet, along with protein meals including soybean meal, canola meal, and sunflower meal to support healthy growth. Our portfolio also features animal proteins like fish meal, meat & bone meal, and blood meal, as well as valuable by-products such as wheat bran, rice bran, DDGS, and molasses. In addition, we provide key minerals including limestone, dicalcium phosphate, and salt, together with essential fats and oils like soybean oil, poultry fat, and palm oil to enhance energy levels and overall feed quality.',
  products: [

    // ─── SALT ─────────────────────────────────────────────────────────────────
    {
      name: 'Salt (Edible Grade)',
      slug: 'salt-edible-grade',
      description: 'Refined edible sodium chloride for human consumption, food processing, dairy, and bakery applications. Available as fine table salt, coarse edible salt, iodized salt, vacuum evaporated salt, and feed grade salt.',
      details: 'Edible grade salt is sodium chloride (NaCl) refined to human consumption standards, produced from solar-evaporated sea salt, rock salt deposits, or vacuum-pan evaporation processes. It is one of the oldest and most universally consumed food ingredients, serving as both a seasoning and a critical preservative that inhibits microbial growth in cured meats, cheeses, pickled vegetables, and canned goods. In the food processing industry, edible salt is used as a texture modifier, flavor enhancer, and fermentation control agent in bread baking, dairy production, and ready-meal manufacturing. Iodized salt — fortified with potassium iodate or potassium iodide — is supplied for markets with mandatory iodization programs. We supply five grades from fine table salt to ultra-pure vacuum salt and feed grade salt, in retail packaging and bulk formats, with full food safety certification, NaCl purity analysis, and heavy metals compliance.',
      image: '/saltfood.webp',
      specs: ['Grades: Fine Table / Coarse Edible / Iodized / Vacuum Evaporated / Feed Grade', 'NaCl: 97.0% – 99.9%', 'HS Code: 2501', 'Packaging: 1kg, 25kg, 50kg bags or bulk'],
      hsCode: '2501',
      subProducts: [
        {
          name: 'Fine Edible Salt (Table Salt)',
          slug: 'fine-edible-salt-table-salt',
          description: 'Finely granulated refined sodium chloride for direct household and food service use, seasoning, and food processing applications.',
          details: 'Fine edible table salt is sodium chloride refined to food-grade purity through washing, evaporation, and fine milling to produce a uniform, free-flowing crystal. It is the most widely consumed form of salt globally, used for direct seasoning, food service, and retail consumer packaging. In food manufacturing, fine salt provides controlled and even distribution in bakery products, sauces, seasonings, and snacks. Anti-caking agents (such as sodium aluminosilicate or calcium silicate) may be added in small permitted amounts to maintain free-flowing properties in humid conditions. Fine table salt meets stringent heavy metals, microbiological, and food additive standards and is supplied with full food safety certification and compliance documentation for food manufacturers and distributors.',
          image: '/tablesalt.webp',
          specs: ['NaCl: ≥ 99.5%', 'Moisture: ≤ 0.1%', 'Insoluble Matter: ≤ 0.1%', 'Ca + Mg: ≤ 0.15%', 'Particle Size: 0.1 – 0.5 mm (fine)', 'Form: Free-flowing fine crystals', 'HS Code: 2501']
        },
        {
          name: 'Coarse Edible Salt',
          slug: 'coarse-edible-salt',
          description: 'Larger-crystal edible salt for pickling, curing, brining, artisan bread making, and specialty food processing where slow dissolution is preferred.',
          details: 'Coarse edible salt is produced in larger crystal sizes compared to fine table salt, achieved by controlling the evaporation rate or by coarse screening of mined salt. Its larger surface area and slower dissolution rate make it preferred for dry-curing and brining meat and fish, where controlled salt penetration is essential for food safety and texture development. In artisan bread making, coarse salt crystals are used as a finishing ingredient for visual appeal and burst of flavor. It is also widely used in Mediterranean and specialty cuisine applications as a premium finishing salt. Coarse edible salt must meet the same food-grade purity requirements as fine table salt, with controlled heavy metals and microbiological parameters, and is supplied with full food safety certification.',
          image: '/coarsesalt.webp',
          specs: ['NaCl: ≥ 99.0%', 'Moisture: ≤ 0.5%', 'Insoluble Matter: ≤ 0.2%', 'Ca + Mg: ≤ 0.3%', 'Particle Size: 1 – 6 mm (coarse)', 'Form: Coarse crystals', 'HS Code: 2501']
        },
        {
          name: 'Iodized Salt (KIO3 / KI Fortified)',
          slug: 'iodized-salt',
          description: 'Edible salt fortified with potassium iodate (KIO3) or potassium iodide (KI) to address iodine deficiency in mandatory or voluntary iodization programs.',
          details: 'Iodized salt is food-grade salt to which a precise quantity of potassium iodate (KIO3) or potassium iodide (KI) has been added as a micronutrient fortification measure. Iodine deficiency disorders (IDD) — including goiter and impaired cognitive development — are a significant public health concern in many regions, and mandatory salt iodization programs have been widely adopted as the most cost-effective intervention. We supply iodized salt in both fine and coarse crystal grades, with iodine fortification levels customized to meet the regulatory requirements of the destination market. Typical fortification levels range from 20–40 mg KIO3 per kilogram of salt (equivalent to approximately 12–25 mg iodine/kg). Full documentation of iodine content, uniformity of distribution, and stability data is provided for regulatory submissions.',
          image: '/iodizedsalt.webp',
          specs: ['NaCl: ≥ 99.0%', 'Iodine (as KIO3): 20 – 40 mg/kg (customizable)', 'Moisture: ≤ 0.1%', 'Heavy Metals: Per Codex Alimentarius limits', 'Form: Fine / Coarse crystals', 'HS Code: 2501']
        },
        {
          name: 'Vacuum Evaporated Salt (Pure Edible)',
          slug: 'vacuum-evaporated-salt',
          description: 'Ultra-pure sodium chloride produced by vacuum pan evaporation, achieving the highest NaCl purity for pharmaceutical-grade, dairy, and sensitive food processing applications.',
          details: 'Vacuum evaporated salt is produced by dissolving raw salt in water to form a saturated brine, purifying the brine through chemical treatment and filtration to remove calcium, magnesium, and sulfate impurities, and then re-crystallizing the purified sodium chloride in vacuum evaporators at reduced temperature and pressure. The resulting product achieves the highest NaCl purity available in commercial salt, with exceptionally low levels of trace mineral impurities. This grade is preferred for pharmaceutical preparations, infant formula, dairy processing (cheese and butter where mineral impurities would affect flavor and texture), and sensitive food manufacturing processes where precise salt chemistry is required. Vacuum salt is supplied with comprehensive certificates of analysis including trace element profiles and microbiological testing.',
          image: '/vaccumsalt.webp',
          specs: ['NaCl: ≥ 99.9%', 'Moisture: ≤ 0.05%', 'Ca²⁺: ≤ 0.02%', 'Mg²⁺: ≤ 0.01%', 'SO4²⁻: ≤ 0.03%', 'Form: Uniform fine crystals', 'HS Code: 2501']
        },
        {
          name: 'Salt (Feed Grade)',
          slug: 'salt-feed-grade',
          description: 'Sodium chloride supplied as an essential electrolyte supplement in all livestock and poultry compound feeds, supporting osmotic balance, digestion, and nerve function.',
          details: 'Feed-grade salt (sodium chloride, NaCl) is an essential electrolyte mineral included in all compound animal feeds to meet the sodium and chloride requirements of livestock and poultry. Sodium and chloride are critical for osmotic regulation, acid-base balance, transmission of nerve impulses, and activation of salivary amylase in the digestive process. In poultry, precise sodium and chloride balance is particularly important, as both deficiency and excess affect growth performance, water consumption, litter moisture, and metabolic health. Feed-grade salt typically meets a lower purity specification than edible grade salt, though heavy metal contamination limits still apply. It is supplied in coarse granular or fine form, in bulk or bagged format, and is used as a direct inclusion ingredient or as a carrier for trace mineral premixes.',
          image: '/saltfeed.webp',
          specs: ['NaCl: ≥ 97%', 'Sodium (Na): ≥ 38%', 'Moisture: ≤ 1%', 'Heavy Metals: Per feed safety limits', 'Form: Coarse granular / Fine', 'HS Code: 2501']
        }
      ]
    },

    // ─── SUGAR ────────────────────────────────────────────────────────────────
    {
      name: 'Sugar (Food Grade)',
      slug: 'sugar-food-grade',
      description: 'Naturally derived sucrose available in refined white, raw brown, powdered, and specialty grades for food manufacturing, beverage production, confectionery, and bakery applications.',
      details: 'Sugar — chemically sucrose (C12H22O11) — is the world\'s most widely traded food commodity, derived primarily from sugarcane and sugar beet through extraction, clarification, and crystallization. Commercial sugar is graded by its ICUMSA color rating, a standardized measure of whiteness and purity (lower ICUMSA values indicate higher refinement and whiteness). Refined white sugar (ICUMSA 45) is the global benchmark for food and beverage production, while Very High Polarization (VHP) raw sugar is the primary internationally traded commodity grade consumed by refineries. Brown sugar retains molasses for distinctive flavor, and powdered/icing sugar is milled for confectionery and decoration. We supply all five commercial grades — ICUMSA 45, ICUMSA 100-150, VHP Raw Sugar, Brown Sugar, and Powdered Sugar — with full origin documentation, ICUMSA certificates, and quality analysis.',
      image: '/sugarfood.webp',
      specs: ['Grades: ICUMSA 45 / ICUMSA 100-150 / VHP Raw / Brown / Powdered', 'Polarization: 99.4° – 99.8°', 'HS Code: 1701', 'Applications: Beverage, confectionery, bakery, dairy, industrial fermentation'],
      hsCode: '1701',
      subProducts: [
        {
          name: 'Refined White Sugar (ICUMSA 45)',
          slug: 'refined-white-sugar-icumsa-45',
          description: 'The most widely exported food-grade sugar, produced through refining and crystallization to achieve the highest purity and lowest ICUMSA color value — the international benchmark for food and beverage manufacturing.',
          details: 'Refined White Sugar ICUMSA 45 is the premium standard for global sugar trade, named after the International Commission for Uniform Methods of Sugar Analysis (ICUMSA) color measurement unit. An ICUMSA value of 45 IU corresponds to a bright white, highly refined product with less than 45 color units — the international threshold for export-grade white refined sugar. It is produced by processing raw cane sugar through affination, carbonation or phosphatation, activated carbon filtration, and multi-stage crystallization to achieve the strictest purity and whiteness standards. ICUMSA 45 sugar is the primary ingredient in soft drinks, confectionery, dairy products, processed foods, and pharmaceutical sugar-coated formulations. It is the most demanded grade globally due to its consistent quality, neutral flavor, and compliance with international food safety standards including Codex Alimentarius.',
          image: '/refinedwhitesugar.webp',
          specs: ['Polarization: ≥ 99.8°', 'ICUMSA Color: ≤ 45 IU', 'Moisture: ≤ 0.04%', 'Ash: ≤ 0.04%', 'Reducing Sugars: ≤ 0.05%', 'Form: Fine / medium granulated crystals', 'HS Code: 1701']
        },
        {
          name: 'White Sugar ICUMSA 100-150',
          slug: 'white-sugar-icumsa-100-150',
          description: 'Slightly less refined than ICUMSA 45, used in general food manufacturing, industrial baking, and regional markets where premium whiteness is not required.',
          details: 'White Sugar ICUMSA 100-150 is an intermediate refined grade positioned between the premium ICUMSA 45 standard and raw sugar grades. It undergoes most of the same refining steps as ICUMSA 45 but with fewer decolorization passes, resulting in a slightly higher color value while still meeting food-grade purity standards. It is commonly used in food manufacturing applications where the slight color difference has no impact on the final product, such as in baked goods, jams, syrups, industrial sauces, and fermentation. In many regional and domestic markets, ICUMSA 100-150 is the standard retail-grade white sugar and is sold under national sugar specifications. It offers a cost-effective alternative to ICUMSA 45 for applications where ultra-white appearance is not a quality requirement.',
          image: '/whitesugaricumsa.webp',
          specs: ['Polarization: ≥ 99.5°', 'ICUMSA Color: 100 – 150 IU', 'Moisture: ≤ 0.06%', 'Ash: ≤ 0.08%', 'Form: Granulated', 'HS Code: 1701']
        },
        {
          name: 'Raw Brown Sugar (VHP)',
          slug: 'raw-brown-sugar-vhp',
          description: 'Very High Polarization (VHP) raw cane sugar — the primary internationally traded raw sugar commodity — supplied to refineries for further processing into white sugar grades.',
          details: 'Very High Polarization (VHP) raw sugar is the dominant commodity grade traded on international sugar markets (London, New York) and is the primary feedstock for white sugar refineries worldwide. Despite its "raw" designation, VHP sugar has a polarization of ≥99.4° — nearly as high as refined white sugar — and is distinguished mainly by its higher ICUMSA color value (600–1,200 IU) reflecting retained surface molasses. It is produced by centrifuging the massecuite (crystallized sugar + molasses mixture) after the first crystallization stage. Raw VHP sugar is purchased by refineries who affinate and process it into ICUMSA 45 or ICUMSA 100-150 white sugar. Its high sucrose content, well-defined crystal structure, and established commodity standards make it the most traded raw agricultural material globally after crude oil.',
          image: '/rawbrownsugar.webp',
          specs: ['Polarization: ≥ 99.4°', 'ICUMSA Color: 600 – 1,200 IU', 'Moisture: ≤ 0.15%', 'Ash: ≤ 0.15%', 'Form: Light to golden brown crystals', 'HS Code: 1701']
        },
        {
          name: 'Brown Sugar (Food Grade)',
          slug: 'brown-sugar-food-grade',
          description: 'Food-grade brown sugar containing 3–5% molasses content which provides its characteristic golden-to-dark color, moist texture, and rich caramel flavor for bakery and specialty culinary applications.',
          details: 'Food-grade brown sugar is produced either by incomplete refinement of raw sugar (natural brown sugar) or by coating refined white sugar with a controlled amount of molasses (soft brown sugar). The molasses content — typically 3–5% by weight — gives brown sugar its distinctive golden to dark brown color, moist granular texture, and characteristic flavor profile combining sweetness with caramel and toffee notes. In bakery applications, brown sugar contributes moisture retention, browning, and depth of flavor that white sugar cannot replicate, making it essential in cookies, cakes, dark bread, and gingerbread. It is also a key ingredient in sauces, marinades, glazes, and specialty beverages such as artisan coffees and cocktails. We supply both light brown and dark brown grades with consistent molasses content and particle size.',
          image: '/brownsugar.webp',
          specs: ['Sucrose: ≥ 95%', 'Moisture: ≤ 2%', 'Molasses Content: 3% – 5%', 'Form: Moist granular texture, golden to dark brown', 'Grades: Light Brown / Dark Brown', 'HS Code: 1701']
        },
        {
          name: 'Powdered / Icing Sugar',
          slug: 'powdered-icing-sugar',
          description: 'Ultra-fine milled white sugar with a silky powder texture, used in frosting, icing, confectionery decoration, dessert production, and premium baking applications.',
          details: 'Powdered sugar — also known as icing sugar or confectioners\' sugar — is produced by finely grinding refined white sugar (typically ICUMSA 45 base) in specialized mills to an ultra-fine particle size. A small quantity of anti-caking agent (typically cornstarch at ≤3%) is usually added to prevent caking and maintain free-flowing powder consistency in humid environments. The ultra-fine particle size creates a smooth, rapid-dissolving product that integrates seamlessly into buttercreams, fondants, royal icing, and glaze coatings without grittiness. It is also dusted directly onto cakes, pastries, and desserts as a decorative finish. In industrial confectionery production, powdered sugar is used in chocolate and candy formulations where smooth texture is a critical quality attribute.',
          image: '/icingsugar.webp',
          specs: ['Sucrose: ≥ 99%', 'Moisture: ≤ 0.1%', 'Particle Size: Ultra-fine (mesh 200+)', 'Anti-caking Agent: ≤ 3% starch', 'Form: Fine white powder', 'HS Code: 1701']
        }
      ]
    },

    // ─── MAIN GRAINS ──────────────────────────────────────────────────────────
    {
      name: 'Main Grains',
      slug: 'main-grains',
      description: 'Main grains form the foundation of most animal feed formulations, providing the primary source of energy required for growth, productivity, and overall animal health. Grains such as corn, wheat, barley, sorghum, and millet are rich in carbohydrates and are highly digestible, making them essential components in livestock and poultry diets. These grains help ensure balanced nutrition, support efficient feed conversion, and contribute to consistent animal performance.',
      details: 'Cereal grains form the caloric foundation of virtually all compound animal feed rations, supplying 60–75% of total dietary energy as digestible starch. We supply the five major traded feed grains — corn, wheat, barley, sorghum, and millet — sourced from certified origins with full moisture, protein, starch, mycotoxin, and test weight analysis. Our grain supplies are available in bulk vessel, container, and bagged formats with phytosanitary and origin certificates for all destinations.',
      image: '/maingrains.webp',
      specs: ['Grains: Corn / Wheat / Barley / Sorghum / Millet', 'Moisture: ≤ 13% – 14%', 'HS Codes: 1005 / 1001 / 1003 / 1007 / 1008', 'Packaging: Bulk, container, or bagged'],
      hsCode: '1005',
      subProducts: [
        {
          name: 'Corn (Maize)',
          slug: 'corn-maize',
          description: 'Yellow dent corn — the world\'s most widely used energy grain in animal feed — supplying high starch, moderate protein, and essential fatty acids for poultry, swine, cattle, and aquaculture rations.',
          details: 'Corn (Zea mays) is the dominant energy grain in global compound feed formulation, prized for its high starch content (62–70%), moderate crude protein (8–9%), and excellent palatability across all livestock species. Yellow dent corn is the primary traded variety, used as the primary caloric base in broiler, layer, swine, dairy, and beef feed rations worldwide. It provides readily digestible starch for energy and contains linoleic acid (omega-6), which is essential for poultry performance. We supply feed-grade corn with full moisture, protein, starch, and aflatoxin analysis, in bulk vessels, containers, or bagged formats, sourced from major producing origins including Ukraine, Argentina, Brazil, and the USA.',
          image: '/corn.webp',
          specs: ['Crude Protein: 8% – 9%', 'Moisture: ≤ 14%', 'Starch: 62% – 70%', 'Aflatoxin: ≤ 20 ppb', 'HS Code: 1005']
        },
        {
          name: 'Wheat',
          slug: 'wheat-feed',
          description: 'Wheat is a nutritious grain commonly used in feed formulations for its balanced energy and protein content. It provides essential nutrients that support healthy digestion and growth in animals. Wheat is also highly palatable and can improve feed intake while contributing to better feed conversion.',
          details: 'Feed-grade wheat is widely used in compound animal feeds, particularly in regions where it is cost-competitive with corn. Wheat provides a higher crude protein content than corn (11–13%) and a significant starch supply, though its energy value is slightly lower due to its higher fiber content. In poultry and swine feeds, wheat is used as a partial or full corn replacement. Its naturally occurring non-starch polysaccharides (NSPs) — primarily arabinoxylans — reduce digestibility in monogastrics, necessitating the addition of xylanase enzymes in formulations. Milling wheat that does not meet bread-making specifications is commonly redirected to feed markets. We supply both hard and soft feed wheats with protein, moisture, and Hagberg falling number documentation.',
          image: '/wheat.webp',
          specs: ['Crude Protein: 11% – 13%', 'Moisture: ≤ 14%', 'Starch: 58% – 68%', 'Test Weight: ≥ 72 kg/hl', 'HS Code: 1001']
        },
        {
          name: 'Barley',
          slug: 'barley-feed',
          description: 'Barley is a valuable grain used in animal nutrition, particularly for ruminants and poultry. It contains a good balance of energy, fiber, and essential nutrients that support digestive health and animal performance. Barley is often included in feed to enhance diet variety and provide a steady energy source.',
          details: 'Feed barley is a major cereal grain in ruminant and swine nutrition, particularly in Europe, the Middle East, and North Africa. Its moderate starch content and high beta-glucan fiber make it a slower-digesting energy source compared to corn and wheat, beneficial for rumen health in cattle and dairy cows and for maintaining digestive function in swine. Barley is widely used in beef finishing rations, dairy cow total mixed rations (TMR), and as a primary grain in horse feeds where controlled energy release is important. Two-row and six-row barley varieties are both traded for feed use. We supply feed barley with moisture, protein, and test weight specifications from major producing regions.',
          image: '/barley.webp',
          specs: ['Crude Protein: 10% – 12%', 'Moisture: ≤ 14%', 'Beta-Glucan: 3% – 6%', 'Test Weight: ≥ 60 kg/hl', 'HS Code: 1003']
        },
        {
          name: 'Sorghum',
          slug: 'sorghum-feed',
          description: 'Sorghum is a durable and energy-rich grain often used as an alternative to corn in animal feed. It is known for its adaptability and nutritional value, providing carbohydrates that support growth and productivity in livestock and poultry. Sorghum is also appreciated for its stability and efficiency in feed formulations.',
          details: 'Feed sorghum (Sorghum bicolor) is the fourth most important cereal crop globally and a critical corn substitute in regions where corn availability or price makes it less competitive. Its energy and protein content closely resembles corn (8–10% crude protein, 60–68% starch), though tannin-containing varieties may require processing or tannin-neutralizing supplements to improve digestibility in poultry. Sorghum is particularly important in feed formulation in Sub-Saharan Africa, the Middle East, and parts of Latin America and Asia, where it is often more locally available than corn. We supply both low-tannin and high-tannin varieties with full nutritional profiles and origin documentation.',
          image: '/sorghum.webp',
          specs: ['Crude Protein: 8% – 10%', 'Moisture: ≤ 13%', 'Starch: 60% – 68%', 'Tannin: Low / Variable by variety', 'HS Code: 1007']
        },
        {
          name: 'Millet',
          slug: 'millet-feed',
          description: 'Millet is a small-seeded grain valued for its nutritional richness and digestibility. It is commonly used in feed for poultry and other livestock due to its good energy content and natural minerals. Millet contributes to balanced diets and supports overall health and performance in animals.',
          details: 'Feed millet encompasses several species — including pearl millet (Pennisetum glaucum), finger millet (Eleusine coracana), and foxtail millet (Setaria italica) — used as energy grain in poultry, small ruminant, and aquaculture feeds. Millet provides moderate starch and protein similar to sorghum and is particularly valued in regions where it is locally grown and competitively priced. Pearl millet is notable for its high energy density and relatively low tannin content, making it suitable for direct use in poultry rations. In compound feed manufacturing, millet is used as a partial substitute for corn or wheat, especially in South Asian and West African markets. We supply feed-grade millet with full moisture, protein, and purity specifications.',
          image: '/millet.webp',
          specs: ['Crude Protein: 9% – 12%', 'Moisture: ≤ 13%', 'Starch: 55% – 65%', 'Foreign Matter: ≤ 2%', 'HS Code: 1008']
        }
      ]
    },

    // ─── PROTEIN MEALS ────────────────────────────────────────────────────────
    {
      name: 'Protein Meals',
      slug: 'protein-meals',
      description: 'High-protein plant-based meal ingredients providing essential amino acids for livestock, poultry, and aquaculture compound feed formulation.',
      details: 'Plant protein meals are the primary source of supplemental dietary protein in compound animal feeds globally, used to balance the amino acid deficiencies of cereal grain-based rations. We supply the three major traded oilseed meals — soybean meal, canola meal, and sunflower meal — each with distinct protein levels, amino acid profiles, and fiber characteristics suited to different species and formulation strategies. Full proximate analysis, amino acid profiles, and anti-nutritional factor data are provided for each shipment.',
      image: '/protein.webp',
      specs: ['Meals: Soybean / Canola / Sunflower', 'Crude Protein: 28% – 48%', 'HS Codes: 2304 / 2306', 'Packaging: Bulk or bagged (25kg, 50kg)'],
      hsCode: '2304',
      subProducts: [
        {
          name: 'Soybean Meal',
          slug: 'soybean-meal',
          description: 'The world\'s most widely used plant protein source in animal feed, produced by solvent extraction of soybeans, supplying 44–48% crude protein with a well-balanced amino acid profile for poultry, swine, and aquaculture.',
          details: 'Soybean meal (SBM) is the dominant plant-based protein ingredient in global compound animal feed, accounting for the majority of protein supplementation in broiler, layer, swine, dairy, beef, and aquaculture rations worldwide. Produced by solvent extraction of dehulled soybeans, it delivers 44–48% crude protein with the highest biological value of any commercial plant protein, rich in lysine and threonine — the first and second limiting amino acids in poultry and swine diets. We supply both 44% protein (with hulls) and 48% protein (dehulled, high protein) grades, with full amino acid profiles, urease activity (indicating anti-nutritional factor inactivation), and moisture specifications from major origins.',
          image: '/soyabean.webp',
          specs: ['Crude Protein: 44% – 48%', 'Moisture: ≤ 12%', 'Crude Fiber: ≤ 7%', 'Lysine: ~2.9% (48% grade)', 'Urease Activity: 0.05 – 0.30 pH rise', 'HS Code: 2304']
        },
        {
          name: 'Canola Meal (Rapeseed Meal)',
          slug: 'canola-meal',
          description: 'High-protein residue from canola/rapeseed oil extraction, used as a cost-effective soybean meal alternative in ruminant, swine, and poultry feeds, particularly in European and Canadian formulations.',
          details: 'Canola meal is the protein-rich by-product of canola (Brassica napus) oil extraction, containing 34–38% crude protein with a favorable methionine content relative to soybean meal. Modern canola varieties have been bred to contain low levels of glucosinolates and erucic acid — the anti-nutritional factors present in older rapeseed varieties — making canola meal a safe and effective partial replacement for soybean meal in most livestock species. It is particularly valued in dairy cattle and beef rations for its rumen-bypass protein fraction, and is used extensively in swine and poultry feeds in Europe and Canada where it is locally abundant. Full glucosinolate content analysis and amino acid profiles are provided with each shipment.',
          image: '/canola.webp',
          specs: ['Crude Protein: 34% – 38%', 'Moisture: ≤ 12%', 'Crude Fiber: 10% – 13%', 'Glucosinolates: ≤ 25 µmol/g', 'Methionine: ~0.7%', 'HS Code: 2306']
        },
        {
          name: 'Sunflower Meal',
          slug: 'sunflower-meal',
          description: 'By-product of sunflower seed oil extraction, providing 28–36% crude protein and high fiber, used primarily in ruminant feeds and as a partial soybean meal replacement in Eastern European formulations.',
          details: 'Sunflower meal is produced as the residue after extraction of oil from sunflower seeds, with protein content ranging from 28% (partially dehulled) to 36% (fully dehulled, high protein grade). Its protein is characterized by high methionine and cysteine content relative to lysine, making it nutritionally complementary to soybean meal in balanced feed formulations. The high fiber content (15–25%) of partially dehulled sunflower meal limits its inclusion rate in monogastric diets but makes it suitable as a significant protein and roughage source in ruminant (cattle and sheep) rations. Sunflower meal is produced in large volumes in Ukraine, Russia, and Argentina and is an important, cost-competitive protein ingredient in Eastern European and Middle Eastern feed markets.',
          image: '/sunflower.webp',
          specs: ['Crude Protein: 28% – 36%', 'Moisture: ≤ 12%', 'Crude Fiber: 15% – 25%', 'Crude Fat: 1% – 3%', 'Methionine: ~0.7%', 'HS Code: 2306']
        }
      ]
    },

    // ─── ANIMAL PROTEINS ──────────────────────────────────────────────────────
    {
      name: 'Animal Proteins',
      slug: 'animal-proteins',
      description: 'Animal protein ingredients are highly nutritious feed components that provide concentrated sources of protein, essential amino acids, and minerals required for animal growth and performance. Products such as fish meal, meat & bone meal, and blood meal are widely used in feed formulations to support muscle development, improve feed efficiency, and ensure balanced nutrition for livestock, poultry, and aquaculture.',
      details: 'Animal-derived protein ingredients provide the most concentrated and biologically complete protein sources available in compound feed manufacturing. We supply fish meal, meat and bone meal, and blood meal — three complementary animal protein ingredients covering a range of protein levels, amino acid profiles, and mineral contributions. All animal protein products are supplied with full species identification, pathogen testing, and compliance documentation for the destination market\'s regulatory requirements.',
      image: '/AnimalProteinBanner.webp',
      specs: ['Products: Fish Meal / Meat & Bone Meal / Blood Meal', 'Crude Protein: 45% – 85%', 'HS Code: 2301', 'Packaging: Bagged (25kg, 50kg) or bulk'],
      hsCode: '2301',
      subProducts: [
        {
          name: 'Fish Meal',
          slug: 'fish-meal',
          description: 'Fish meal is a high-quality protein ingredient produced from processed fish or fish by-products. It is rich in essential amino acids, omega fatty acids, and minerals, making it highly beneficial for animal growth and health. Fish meal is widely used in poultry, livestock, and aquaculture feeds due to its excellent digestibility and nutritional value.',
          details: 'Fish meal is the most nutritionally concentrated commercially available protein ingredient, produced by cooking, pressing, drying, and milling whole fish (typically anchovies, herrings, or menhaden) or fish processing trimmings. It delivers 60–72% crude protein with a complete essential amino acid profile — particularly rich in lysine, methionine, and threonine — as well as naturally occurring omega-3 fatty acids (EPA and DHA), phospholipids, and minerals including calcium, phosphorus, and selenium. In aquaculture feeds, fish meal is the benchmark ingredient for salmon, shrimp, and sea bass diets due to its palatability and growth-promoting performance. In poultry and swine feeds, it is used at moderate inclusion rates to improve amino acid balance and early growth performance. We supply both prime (65%+ protein) and FAQ grades with full TVN, histamine, and amino acid analysis.',
          image: '/FishMeal.webp',
          specs: ['Crude Protein: 60% – 72%', 'Moisture: ≤ 10%', 'Crude Fat: 6% – 12%', 'Ash: 12% – 20%', 'TVN: ≤ 150 mg/100g', 'Histamine: ≤ 500 ppm', 'HS Code: 2301']
        },
        {
          name: 'Meat & Bone Meal (MBM)',
          slug: 'meat-bone-meal',
          description: 'Meat and bone meal is a protein-rich feed ingredient made from rendered animal tissues and bones. It provides valuable nutrients such as protein, calcium, and phosphorus that support strong bone development and overall animal health. It is commonly used in livestock and poultry feed to enhance nutritional balance.',
          details: 'Meat and Bone Meal (MBM) is produced by high-temperature rendering of non-ruminant animal by-products — primarily pork and poultry processing residuals — followed by fat extraction and milling to produce a dry protein-mineral powder. It supplies 45–55% crude protein alongside high levels of bioavailable calcium (8–10%) and phosphorus (4–5%), making it a valuable dual-purpose protein and mineral ingredient in compound feed. Its high ash and mineral content make it particularly useful for balancing calcium and phosphorus in growing and finishing rations, reducing the need for dicalcium phosphate supplementation. Regulatory restrictions apply in various markets regarding the species of origin and permitted use in ruminant feeds; we supply MBM with full species identification, rendering temperature certification, and salmonella-free documentation.',
          image: '/MeatandBoneMeal.webp',
          specs: ['Crude Protein: 45% – 55%', 'Moisture: ≤ 8%', 'Crude Fat: 8% – 14%', 'Calcium: 8% – 10%', 'Phosphorus: 4% – 5%', 'Salmonella: Absent', 'HS Code: 2301']
        },
        {
          name: 'Blood Meal',
          slug: 'blood-meal',
          description: 'High-protein spray-dried or flash-dried animal blood ingredient with 80–85% crude protein and exceptional lysine content for poultry, swine, and aquaculture feeds.',
          details: 'Blood meal is produced by collecting fresh animal blood from slaughter operations and drying it through spray-drying or flash-drying processes to produce a dark, high-protein powder. It is one of the highest-protein single-ingredient feed materials available, delivering 80–85% crude protein with an exceptionally high lysine content (~7%), making it highly effective for correcting lysine deficiency in formulations where soybean meal alone is insufficient. Its high protein solubility — particularly in spray-dried grades — also makes blood meal effective in early weaning diets for piglets and in starter feeds for young broilers where highly digestible protein is critical for gut development. Inclusion rates are typically limited to 2–4% in monogastric diets due to its high protein density and variable palatability. We supply both spray-dried and flash-dried grades with full proximate and amino acid analysis.',
          image: '/blood-meal.webp',
          specs: ['Crude Protein: 80% – 85%', 'Moisture: ≤ 8%', 'Lysine: ~7%', 'Crude Fat: ≤ 1%', 'Ash: ≤ 5%', 'HS Code: 2301']
        }
      ]
    },

    // ─── FEED BY-PRODUCTS ─────────────────────────────────────────────────────
    {
      name: 'Feed By-products',
      slug: 'feed-by-products',
      description: 'Feed by-products are valuable secondary materials derived from food processing and agricultural industries. They provide important nutrients such as fiber, energy, and proteins, making them a cost-effective and sustainable component in animal feed formulations. Ingredients like wheat bran, rice bran, DDGS, and molasses contribute to improved digestion, enhanced palatability, and balanced nutrition while supporting efficient feed production.',
      details: 'Feed by-products are the co-products of grain milling, oil extraction, ethanol fermentation, and sugar refining industries, redirected into animal nutrition as valuable and cost-competitive feed ingredients. We supply wheat bran, rice bran, DDGS, and molasses — four of the most widely traded agro-industrial feed by-products — each offering distinct nutritional contributions to compound feed rations. Full proximate analysis, mycotoxin screening, and origin documentation are provided for all by-product shipments.',
      image: '/ByproductBanners.webp',
      specs: ['Products: Wheat Bran / Rice Bran / DDGS / Molasses', 'HS Codes: 2302 / 2303 / 1703', 'Packaging: Bulk, bagged, or flexitank'],
      hsCode: '2302',
      subProducts: [
        {
          name: 'Wheat Bran',
          slug: 'wheat-bran',
          description: 'Wheat bran is a nutritious by-product obtained during the wheat milling process. It is rich in dietary fiber, vitamins, and minerals, making it a valuable ingredient in animal feed. Wheat bran helps support digestive health in livestock and improves the overall nutritional balance of feed formulations.',
          details: 'Wheat bran is the outer pericarp and aleurone layer of the wheat kernel, the primary co-product of the wheat flour milling industry. It contains 14–17% crude protein, 10–13% crude fiber, and a rich supply of B vitamins and minerals — particularly phosphorus, though largely in phytate-bound form that requires phytase enzyme addition for optimal bioavailability in monogastrics. In ruminant rations, wheat bran is a highly palatable, digestible fiber source that supports rumen function and contributes to total mixed ration (TMR) dry matter. In swine and poultry feeds, its high fiber content limits inclusion rates but provides beneficial gut health effects. Wheat bran is available as a co-product from flour mills in wheat-producing regions and is supplied in bulk or bagged formats.',
          image: '/WheatBran.webp',
          specs: ['Crude Protein: 14% – 17%', 'Moisture: ≤ 13%', 'Crude Fiber: 10% – 13%', 'Crude Fat: 3% – 5%', 'Ash: 5% – 7%', 'HS Code: 2302']
        },
        {
          name: 'Rice Bran',
          slug: 'rice-bran',
          description: 'Rice bran is produced during the milling of rice and is known for its good energy content and beneficial nutrients. It contains natural oils, proteins, and fiber that contribute to balanced animal diets. Rice bran is commonly used in feed for livestock and poultry to enhance nutrition and feed efficiency.',
          details: 'Rice bran is the nutrient-dense layer removed from brown rice during the milling process to produce white rice, comprising the pericarp, aleurone layer, and germ. It is particularly rich in fat (12–22% in raw form), providing a high energy density, and contains oryzanol, a natural antioxidant. However, lipase enzyme activity in raw rice bran causes rapid fat hydrolysis and rancidity after milling; therefore, stabilized rice bran — which has been heat-treated to inactivate lipase — is the commercially preferred feed ingredient. Stabilized rice bran is used in poultry, swine, and equine feeds as an energy-dense ingredient with moderate protein (12–15%). We supply stabilized full-fat rice bran and de-oiled rice bran (after oil extraction) with peroxide value and moisture specifications.',
          image: '/ricebarn.webp',
          specs: ['Crude Protein: 12% – 15%', 'Moisture: ≤ 12%', 'Crude Fat: 12% – 22% (full-fat)', 'Crude Fiber: 7% – 12%', 'Form: Stabilized (heat-treated)', 'HS Code: 2302']
        },
        {
          name: 'DDGS (Distillers Dried Grains with Solubles)',
          slug: 'ddgs',
          description: 'DDGS is a co-product of the ethanol production process and is widely used in animal feed due to its high protein and energy value. It provides essential nutrients that support growth and performance in livestock. DDGS is also valued for its digestibility and its ability to complement other feed ingredients in balanced rations.',
          details: 'Distillers Dried Grains with Solubles (DDGS) is the concentrated, dried residue remaining after the fermentation of corn or wheat starch into ethanol. Because starch is consumed during fermentation, the protein, fat, and fiber components of the original grain are concentrated approximately three-fold in the DDGS product, yielding 26–30% crude protein and 8–12% crude fat. Corn DDGS is the most widely traded variety, particularly from US ethanol plants, and is used extensively in beef cattle finishing, dairy cow TMR, swine, and poultry feeds. Its high rumen-bypass protein content makes it particularly valuable in ruminant rations. Color (light golden) is an important quality indicator — darker DDGS indicates over-heating during drying and reduced lysine availability. We supply corn and wheat DDGS with full proximate analysis and lysine digestibility data.',
          image: '/DDGS.webp',
          specs: ['Crude Protein: 26% – 30%', 'Moisture: ≤ 12%', 'Crude Fat: 8% – 12%', 'Crude Fiber: 7% – 9%', 'Lysine: ~0.7%', 'Color: Light to golden (quality indicator)', 'HS Code: 2303']
        },
        {
          name: 'Molasses',
          slug: 'molasses-food-grade',
          description: 'Molasses is a by-product of the sugar refining process and is commonly used in feed as a natural energy source and flavor enhancer. Its sweet taste improves feed palatability, encouraging better feed intake among animals. Molasses also helps reduce dust in feed mixtures and provides additional minerals and energy.',
          details: 'Molasses is a dense, viscous by-product of the sugar refining process, produced during the repeated crystallization of sucrose from sugarcane or sugar beet juice. Food-grade molasses retains a rich concentration of residual sugars, vitamins, and minerals — including iron, calcium, magnesium, and potassium — making it a valued ingredient in food manufacturing and nutrition. In the food industry, it is used as a natural sweetener, flavor enhancer, and colorant in baked goods, sauces, marinades, and confectionery. It is also a primary fermentation substrate for rum production, yeast manufacturing, and the production of citric acid and amino acids. We supply blackstrap, sugarcane, and beet molasses in food-grade specifications, with full sugar content, Brix, pH, and microbiological analysis, shipped in flexitanks, ISO tanks, or lined drums.',
          image: '/molasses2.webp',
          specs: ['Grades: Sugarcane / Sugar Beet / Blackstrap', 'Brix: 75% – 85%', 'HS Code: 1703', 'Packaging: Flexitanks, ISO tanks, lined 275L drums'],
          hsCode: '1703',
          subProducts: [
            {
              name: 'Sugarcane Molasses (Food Grade)',
              slug: 'sugarcane-molasses-food-grade',
              description: 'The most common commercial food-grade molasses, obtained after crystallization of sugar from sugarcane juice, used in baking, confectionery, beverage flavoring, and fermentation.',
              details: 'Sugarcane molasses is the primary by-product of sugar extraction from harvested sugarcane. After juice extraction and multiple stages of crystallization to recover sucrose, the remaining dark syrup — rich in residual sugars, organic acids, and minerals — is the commercial molasses product. Food-grade sugarcane molasses is processed and stored under hygienic conditions with controlled microbiological parameters to ensure suitability for direct use in food and beverage manufacturing. Its characteristic deep flavor and high fermentable sugar content make it the preferred substrate for rum distillation, industrial yeast production, and citric acid fermentation. In bakery, it contributes color, moisture retention, and a distinctive caramel flavor to products such as gingerbread, brown bread, and dark sauces.',
              image: '/sugarcanemolasses.webp',
              specs: ['Brix: 75% – 85%', 'Total Sugars: 45% – 55%', 'Sucrose: 30% – 40%', 'Reducing Sugars: 10% – 20%', 'Moisture: 15% – 25%', 'Ash: 8% – 12%', 'pH: 4.5 – 6.0', 'HS Code: 1703']
            },
            {
              name: 'Sugar Beet Molasses (Food Grade)',
              slug: 'sugar-beet-molasses-food-grade',
              description: 'Derived from sugar beet processing, with a slightly different mineral composition and more alkaline pH, widely used in fermentation, specialty food ingredients, and animal nutrition.',
              details: 'Sugar beet molasses is obtained as a by-product of the beet sugar refining process in temperate growing regions. Its mineral composition differs from cane molasses, particularly in its betaine content and more alkaline pH profile, which makes it suitable for distinct fermentation processes and specialty food ingredient applications. Sugar beet molasses is widely used as a fermentation substrate for yeast production (baker\'s yeast and fodder yeast), as well as for the production of lysine, glutamic acid, and other amino acids. Its higher pH (6.5–8.5) compared to cane molasses makes it preferred for certain bacterial fermentation processes. In the animal nutrition sector, it serves as an energy-dense feed additive and a palatability enhancer for compound animal feeds.',
              image: '/sugarbeet.webp',
              specs: ['Brix: 75% – 85%', 'Total Sugars: 45% – 50%', 'Sucrose: 25% – 35%', 'Moisture: 18% – 25%', 'Ash: 8% – 12%', 'pH: 6.5 – 8.5', 'Form: Dark brown liquid', 'HS Code: 1703']
            },
            {
              name: 'Blackstrap Molasses',
              slug: 'blackstrap-molasses',
              description: 'Final extraction stage molasses with lower sugar content but elevated iron, calcium, and magnesium — used as a nutritional food ingredient, fermentation substrate, and animal feed supplement.',
              details: 'Blackstrap molasses is the concentrated syrup remaining after the third and final extraction of sugar crystals from the boiled sugarcane or beet juice. As the "final run" of the refining process, blackstrap contains the lowest recoverable sugar content of all molasses grades, but the highest concentration of minerals — particularly iron, calcium, magnesium, and potassium — making it a nutritionally distinct ingredient. In the health food market, blackstrap molasses is used as a natural iron and mineral supplement and as a flavor component in specialty health foods, energy bars, and natural sweetener blends. In industrial fermentation, its lower sugar content is compensated by its rich mineral content which supports robust yeast and bacterial growth. It is also extensively used as an energy and palatability supplement in animal feed rations for cattle, horses, and poultry.',
              image: '/blackstrap.webp',
              specs: ['Brix: 75% – 85%', 'Total Sugars: 35% – 45%', 'Ash: 10% – 15%', 'Iron: Elevated (trace mineral rich)', 'Moisture: 20% – 25%', 'Form: Very dark, dense syrup', 'HS Code: 1703']
            }
          ]
        }
      ]
    },

    // ─── FEED MINERALS ────────────────────────────────────────────────────────
    {
      name: 'Feed Minerals',
      slug: 'feed-minerals',
      description: 'Minerals are essential components in animal nutrition, playing a critical role in supporting bone development, metabolic functions, and overall health. In feed formulations, minerals help ensure balanced diets and proper growth for livestock and poultry. Ingredients such as limestone and dicalcium phosphate are commonly used to provide vital minerals like calcium and phosphorus, which are necessary for strong bones, eggshell formation, and optimal animal performance.',
      details: 'Mineral supplementation is critical in compound animal feeds because cereal grain and oilseed meal-based rations are inherently deficient in calcium, phosphorus, and sodium relative to the requirements of high-performing livestock and poultry. We supply limestone, dicalcium phosphate, and salt — the three primary macro-mineral ingredients used in feed manufacturing — with guaranteed minimum mineral content, controlled fluorine levels, and heavy metals compliance for all major export markets.',
      image: '/feedmineral.webp',
      specs: ['Products: Limestone / Dicalcium Phosphate / Salt', 'HS Codes: 2521 / 2835 / 2501', 'Packaging: Bagged (25kg, 50kg) or bulk'],
      hsCode: '2521',
      subProducts: [
        {
          name: 'Limestone (Feed Grade)',
          slug: 'limestone-feed-grade',
          description: 'Limestone is a natural mineral widely used in animal feed as a primary source of calcium. It plays an important role in supporting bone strength, skeletal development, and eggshell quality in poultry. Limestone is valued for its high calcium content and effectiveness in maintaining proper mineral balance in feed.',
          details: 'Feed-grade limestone is ground calcium carbonate (CaCO₃) derived from natural limestone deposits, refined to controlled particle size and calcium content specifications for use as the primary calcium source in compound animal feeds. It is the most cost-effective and widely used calcium supplement in poultry layer rations, where calcium demand for eggshell production is the highest single nutritional requirement of any livestock application. Particle size is a critical specification: coarse limestone (2–4 mm) is preferred for layer hens as it dissolves more slowly in the gizzard, providing a sustained overnight supply of calcium for nocturnal shell deposition. Fine limestone is used in broiler, swine, and ruminant feeds. We supply feed-grade limestone in both fine and coarse grades with guaranteed minimum calcium content and heavy metals compliance.',
          image: '/limestone.webp',
          specs: ['Calcium (Ca): ≥ 36%', 'CaCO₃: ≥ 90%', 'Moisture: ≤ 0.5%', 'Heavy Metals: Per feed safety limits', 'Grades: Fine (0.1–1 mm) / Coarse (2–4 mm)', 'HS Code: 2521']
        },
        {
          name: 'Dicalcium Phosphate (DCP)',
          slug: 'dicalcium-phosphate',
          description: 'Dicalcium phosphate is a key mineral supplement used in animal feed to provide both calcium and phosphorus. These minerals are essential for bone growth, teeth development, and overall metabolic functions in animals. It is commonly included in feed formulations to ensure balanced mineral intake and support healthy animal development.',
          details: 'Dicalcium Phosphate (DCP, CaHPO₄) is the most widely used inorganic phosphorus supplement in compound animal feed, providing both calcium and phosphorus in a highly bioavailable mineral form. Unlike phytate-bound phosphorus in plant-based feed ingredients (which requires phytase enzyme for release), the phosphorus in DCP is directly available for intestinal absorption. Adequate dietary phosphorus is essential for skeletal development and integrity in growing animals, milk production in dairy cattle, egg production in layers, and energy metabolism (as a component of ATP and phospholipids) in all species. We supply feed-grade DCP with guaranteed minimum phosphorus (18%) and calcium (21%) content, with fluorine controlled below the maximum permitted level (0.18% F) to ensure livestock safety.',
          image: '/DCP.webp',
          specs: ['Phosphorus (P): ≥ 18%', 'Calcium (Ca): ≥ 21%', 'Fluorine (F): ≤ 0.18%', 'Moisture: ≤ 4%', 'Form: Off-white granular powder', 'HS Code: 2835']
        },
        {
          name: 'Salt (Feed Grade)',
          slug: 'salt-feed-grade',
          description: 'Sodium chloride supplied as an essential electrolyte supplement in all livestock and poultry compound feeds, supporting osmotic balance, digestion, and nerve function.',
          details: 'Feed-grade salt (sodium chloride, NaCl) is an essential electrolyte mineral included in all compound animal feeds to meet the sodium and chloride requirements of livestock and poultry. Sodium and chloride are critical for osmotic regulation, acid-base balance, transmission of nerve impulses, and activation of salivary amylase in the digestive process. In poultry, precise sodium and chloride balance is particularly important, as both deficiency and excess affect growth performance, water consumption, litter moisture, and metabolic health. Feed-grade salt typically meets a lower purity specification than edible grade salt, though heavy metal contamination limits still apply. It is supplied in coarse granular or fine form, in bulk or bagged format, and is used as a direct inclusion ingredient or as a carrier for trace mineral premixes.',
          image: '/saltfeed.webp',
          specs: ['NaCl: ≥ 97%', 'Sodium (Na): ≥ 38%', 'Moisture: ≤ 1%', 'Heavy Metals: Per feed safety limits', 'Form: Coarse granular / Fine', 'HS Code: 2501']
        }
      ]
    },

    // ─── FATS & OILS ──────────────────────────────────────────────────────────
    {
      name: 'Fats & Oils',
      slug: 'fats-oils',
      description: 'Fats and oils are important ingredients in animal feed, providing a concentrated source of energy that supports growth, productivity, and overall animal performance. They also help improve feed palatability, reduce dust in feed mixtures, and enhance the absorption of fat-soluble vitamins. Ingredients such as soybean oil, poultry fat, and palm oil are commonly used to increase the energy value and efficiency of feed formulations.',
      details: 'Dietary fats and oils are the most energy-dense class of feed ingredients, supplying approximately 2.25 times the metabolizable energy of carbohydrates per unit weight. They are used in compound feeds to increase energy density without increasing feed volume, improve pellet quality, reduce dustiness, and supply essential fatty acids. We supply three complementary fat and oil ingredients — soybean oil, poultry fat, and palm oil — covering vegetable and animal fat options for diverse species and formulation requirements.',
      image: '/fats&oils.webp',
      specs: ['Products: Soybean Oil / Poultry Fat / Palm Oil', 'Energy: ~7,500 – 8,800 kcal ME/kg', 'HS Codes: 1507 / 1502 / 1511', 'Packaging: ISO tanks, flexitanks, IBC totes, drums'],
      hsCode: '1507',
      subProducts: [
        {
          name: 'Soybean Oil (Feed Grade)',
          slug: 'soybean-oil-feed-grade',
          description: 'Soybean oil is a high-energy vegetable oil widely used in animal feed. It provides essential fatty acids that support healthy growth, skin condition, and overall metabolism in livestock and poultry. Soybean oil also helps improve feed texture and enhances the absorption of important nutrients.',
          details: 'Feed-grade soybean oil is a vegetable fat derived from solvent extraction of soybeans, supplying approximately 8,800 kcal ME/kg — the highest metabolizable energy of any commonly used feed ingredient. Its high linoleic acid content (omega-6, ~53%) makes it particularly valuable in poultry broiler feeds, where essential fatty acid supply is directly linked to growth performance, feed conversion, and breast meat yield. In pellet feed manufacturing, the addition of soybean oil at 2–5% improves pellet durability, reduces mill energy consumption, and adds palatability. We supply both crude degummed soybean oil and refined soybean oil for feed applications, with full fatty acid profile, free fatty acid (FFA) content, and moisture and impurities specifications.',
          image: '/soyabeanoil.webp',
          specs: ['Metabolizable Energy: ~8,800 kcal/kg', 'Linoleic Acid (C18:2): ~53%', 'Free Fatty Acids (FFA): ≤ 2% (refined)', 'Moisture & Impurities: ≤ 1%', 'Peroxide Value: ≤ 5 meq/kg', 'HS Code: 1507']
        },
        {
          name: 'Poultry Fat',
          slug: 'poultry-fat',
          description: 'Poultry fat is an animal-derived fat commonly used in feed to provide a rich and efficient energy source. It is highly digestible and contributes to improved feed conversion and animal performance. Poultry fat also enhances the taste and palatability of feed, encouraging better intake.',
          details: 'Poultry fat is rendered from poultry processing by-products — primarily skin, fat trim, and off-cuts — through high-temperature continuous rendering followed by centrifugal separation of fat from water and protein fractions. It is a highly digestible energy source (approximately 8,500 kcal ME/kg) with a fatty acid profile intermediate between vegetable oils and ruminant fats, containing significant oleic (C18:1) and linoleic (C18:2) acid fractions. In broiler feeds, poultry fat is the preferred fat supplement due to its superior digestibility in young chicks compared to saturated tallow. Its incorporation at 3–6% in broiler finisher diets increases energy density, improves carcass fat composition, and enhances feed palatability. We supply food-chain poultry fat with guaranteed free fatty acid, moisture, and impurity specifications.',
          image: '/poultryfat.webp',
          specs: ['Metabolizable Energy: ~8,500 kcal/kg', 'Free Fatty Acids (FFA): ≤ 15%', 'Moisture & Impurities: ≤ 1%', 'Oleic Acid (C18:1): ~40%', 'Linoleic Acid (C18:2): ~20%', 'HS Code: 1502']
        },
        {
          name: 'Palm Oil (Feed Grade)',
          slug: 'palm-oil-feed-grade',
          description: 'Palm oil is a stable and energy-rich vegetable oil used in feed formulations to increase the caloric value of diets. It contains beneficial fatty acids that support energy supply and overall animal health. Palm oil is valued for its consistency, availability, and effectiveness in improving feed quality.',
          details: 'Feed-grade palm oil and palm-derived fats (including palm acid oil and palm fatty acid distillate) are widely used in animal nutrition as cost-competitive energy supplements, particularly in tropical and subtropical regions where palm products are abundantly available. Crude palm oil is high in saturated palmitic acid (C16:0, ~44%) and oleic acid (C18:1, ~40%), giving it a semi-solid consistency at room temperature that improves handling properties compared to liquid oils. In ruminant nutrition, palm-derived fats are formulated into calcium soap or hydrogenated rumen-protected fat supplements for high-producing dairy cows, where supplemental fat must bypass rumen fermentation to avoid inhibiting fiber-digesting bacteria. In poultry and swine feeds, palm acid oil is used as a cost-effective energy ingredient where digestibility is adequate. We supply crude palm oil, palm acid oil, and palm fatty acid distillate with full specifications.',
          image: '/palmoil.webp',
          specs: ['Metabolizable Energy: ~7,500 – 8,000 kcal/kg', 'Free Fatty Acids (FFA): Variable by grade', 'Palmitic Acid (C16:0): ~44%', 'Moisture & Impurities: ≤ 1%', 'Form: Semi-solid to liquid (temperature dependent)', 'HS Code: 1511']
        }
      ]
    }

  ]
},
  {
    name: 'Cosmetic Raw Materials',
    slug: 'cosmetic-raw-materials',
    image: '/CosmeticBanner.webp',
    overview: 'At Bright Business Services & Trading, we supply a curated range of cosmetic-grade raw materials to formulation houses, personal care manufacturers, and pharmaceutical producers worldwide. Every material is sourced from certified facilities and supplied with full compliance documentation, safety data sheets, and quality analysis reports to meet the stringent requirements of international cosmetic and pharmaceutical regulations.',
    products: [
      {
        name: 'Bentonite (Cosmetic Grade)',
        slug: 'bentonite-cosmetic-grade',
        description: 'Highly purified natural clay composed predominantly of montmorillonite for face masks, skin care formulations, spa therapies, and personal care products. Available in Sodium, Calcium, and Ultra-Fine grades.',
        details: 'Cosmetic-grade bentonite is a highly refined smectite clay mineral composed predominantly of montmorillonite, prized in personal care formulations for its exceptional adsorptive capacity, rheological properties, and skin-conditioning performance. When hydrated, bentonite swells to form a colloidal gel that acts as a thickener, stabilizer, and suspending agent in creams, lotions, and emulsions, while also functioning as a natural detoxifying agent in clay masks and facial cleansers. It is processed under controlled conditions to ensure low heavy metal content, microbiological safety, and suitable particle fineness for personal care formulations. We supply three cosmetic grades — Sodium Bentonite, Calcium Bentonite, and Ultra-Fine Powder — with full heavy metals testing, microbial compliance, and ISO 16128 natural ingredient documentation.',
        image: '/bentonitecosmetic.webp',
        specs: ['Grades: Sodium / Calcium / Ultra-Fine Powder', 'Montmorillonite: ≥ 70% – 80%+', 'HS Code: 2508', 'Compliance: EU Cosmetics Regulation / ISO 16128'],
        hsCode: '2508',
        subProducts: [
          {
            name: 'Sodium Bentonite (Cosmetic Grade)',
            slug: 'sodium-bentonite-cosmetic-grade',
            description: 'High-swelling cosmetic bentonite forming a smooth gel-like consistency when hydrated, ideal for facial masks, deep pore cleansers, detox treatments, and acne formulations.',
            details: 'Sodium bentonite is a smectite clay in which sodium is the dominant exchangeable cation, giving it a characteristically high swelling capacity and strong adsorption performance when hydrated. In contact with water, sodium bentonite can swell up to 15–20 times its dry volume, creating a gel matrix that draws out impurities, excess sebum, toxins, and pollutants from the skin surface through its negatively charged platelet structure. This makes it the preferred grade for intensive detox face masks, deep pore-cleansing products, and acne treatment formulations where maximum adsorptive performance is required. It is processed to cosmetic safety standards with controlled heavy metals (lead ≤10 ppm, arsenic ≤3 ppm), particle size reduction to 200–325 mesh, and microbiological compliance for dermal contact applications. Its high pH (8–10 in 5% solution) means it is generally formulated for normal to oily skin types rather than sensitive skin.',
            image: '/sodiumbentonitecosmetic.webp',
            specs: ['Montmorillonite: ≥ 75%', 'pH (5% Solution): 8 – 10', 'Moisture: ≤ 10%', 'Heavy Metals (Pb): ≤ 10 ppm', 'Arsenic (As): ≤ 3 ppm', 'Particle Size: 200 – 325 mesh', 'Form: Powder', 'HS Code: 2508']
          },
          {
            name: 'Calcium Bentonite (Cosmetic Grade)',
            slug: 'calcium-bentonite-cosmetic-grade',
            description: 'Moderate-swelling bentonite with gentler alkalinity and skin compatibility, preferred for sensitive skin formulations, gentle facial masks, body wraps, and spa therapies.',
            details: 'Calcium bentonite is a smectite clay in which calcium is the dominant exchangeable cation, resulting in a lower swelling capacity compared to sodium bentonite but a notably gentler pH profile (6–8 in solution) that makes it significantly more compatible with sensitive skin. Its moderate alkalinity and softer texture make it the preferred choice for baby care formulations, sensitive skin masks, and spa body wrap products where the harsh detoxifying action of sodium bentonite may cause irritation or skin barrier disruption. In hair care, calcium bentonite is used in conditioning clay masks to impart slip, detangle, and improve manageability, particularly in natural hair care and curly hair product lines. It is processed to ultra-fine powder grade for smooth application and even distribution in rinse-off and leave-on cosmetic matrices.',
            image: '/calciumbencosmetic.webp',
            specs: ['Montmorillonite: ≥ 70%', 'pH: 6 – 8', 'Moisture: ≤ 10%', 'Heavy Metals: Within cosmetic safety limits', 'Microbial Load: Cosmetic compliant', 'Form: Ultra-fine powder', 'HS Code: 2508']
          },
          {
            name: 'Ultra-Fine Cosmetic Bentonite Powder',
            slug: 'ultra-fine-cosmetic-bentonite-powder',
            description: 'Micronized bentonite processed to below 75 microns for superior blendability and smooth skin feel in creams, cosmetic emulsions, natural skincare, and soap manufacturing.',
            details: 'Ultra-fine cosmetic bentonite powder is a micronized, high-purity grade of montmorillonite processed to a maximum particle size of 75 microns, enabling seamless incorporation into cosmetic formulations without grittiness or uneven texture. The micronization process involves controlled jet milling or impact milling to reduce particle size while maintaining the mineral\'s functional properties — adsorption capacity, rheological contribution, and skin-conditioning performance. In skin care creams and lotions, ultra-fine bentonite contributes a velvety, smooth skin feel while acting as a mild thickener and stabilizer for emulsions. In natural soap manufacturing, it functions as a skin-conditioning additive that imparts a creamy lather and a smooth glide. Its high purity (≥80% montmorillonite) and controlled microbial count make it compliant with EU Cosmetics Regulation (EC No 1223/2009), US FDA cosmetic requirements, and ISO 16128 natural ingredient standards.',
            image: '/ultrafine.webp',
            specs: ['Montmorillonite: ≥ 80%', 'Particle Size: < 75 micron', 'Heavy Metals: Cosmetic compliant', 'Microbial Count: Within EU / US limits', 'Appearance: Light grey powder', 'HS Code: 2508']
          }
        ]
      },
      {
        name: 'Ethanol (Cosmetic/Pharma Grade)',
        slug: 'ethanol-cosmetic-pharma-grade',
        description: 'High-purity ethyl alcohol produced and treated for use in perfumes, skincare, sanitizers, and cosmetic formulations. Available as Rectified, Extra Neutral Alcohol (ENA), Denatured, and Anhydrous grades.',
        details: 'Cosmetic-grade ethanol is high-purity ethyl alcohol (C2H5OH) specifically produced and treated for use in perfumes, skincare products, sanitizers, and cosmetic formulations. Manufactured through fermentation and multi-column distillation, followed by additional purification to ensure low impurity levels suitable for topical use. Unlike food-grade ethanol, cosmetic ethanol is typically denatured according to regional cosmetic regulations to prevent ingestion while maintaining formulation safety. In cosmetic formulations, ethanol functions as a solvent for fragrance compounds, plant extracts, and active ingredients; as a penetration enhancer; and as a preservative and antimicrobial agent. We supply four grades — Rectified, ENA, Denatured, and Anhydrous — with full pharmacopoeia compliance (USP, Ph.Eur., BP) and GMP origin traceability.',
        image: '/ethanolcos.webp',
        specs: ['Grades: Rectified / ENA / Denatured / Anhydrous', 'ABV: 95% – 99%+', 'HS Code: 2207', 'Compliance: USP / Ph.Eur. / BP'],
        hsCode: '2207',
        subProducts: [
          {
            name: 'Rectified Ethanol (Cosmetic Grade)',
            slug: 'rectified-ethanol-cosmetic-grade',
            description: 'Cosmetic-grade rectified spirit at 95–96% ABV with controlled impurity levels and neutral odor, used in perfumes, skin toners, cosmetic sprays, and sanitizing solutions.',
            details: 'Rectified cosmetic ethanol is a highly purified ethyl alcohol produced through multi-stage distillation and rectification of fermented agricultural substrates, reaching 95–96% ABV with tightly controlled congener levels suitable for topical cosmetic use. Its neutral odor characteristics are critical for perfume manufacturing, where any residual aldehydes or fusel oils would compromise fragrance integrity and shelf life stability. In skincare formulations, rectified cosmetic ethanol serves as a solvent for plant extracts, fragrance compounds, and hydrophilic active ingredients, as well as a rapid-drying carrier in facial mists, toners, and setting sprays. It also provides antimicrobial preservation at effective concentrations in hand sanitizers and disinfecting cosmetic products. Supplied with COA including full purity profile and EU Cosmetics Regulation compliance documentation.',
            image: '/rectifiedcos.webp',
            specs: ['Alcohol Content: 95% – 96% v/v', 'Methanol: ≤ 50 ppm', 'Aldehydes: ≤ 5 ppm', 'Fusel Oil: ≤ 100 ppm', 'Acidity: ≤ 0.003%', 'Appearance: Clear, colorless', 'Odor: Neutral', 'HS Code: 2207']
          },
          {
            name: 'Extra Neutral Alcohol (ENA) — Cosmetic Grade',
            slug: 'extra-neutral-alcohol-ena-cosmetic',
            description: 'Superior purity ethanol with ultra-low congeners and minimal organoleptic impact, preferred for luxury perfumery, premium skincare, and fine fragrance production.',
            details: 'Extra Neutral Alcohol (ENA) cosmetic grade is the premium ethanol for high-end perfumery and personal care formulations, characterized by its near-complete absence of detectable aroma (odorless to highly neutral) and exceptionally low levels of methanol (≤30 ppm), aldehydes (≤2 ppm), and fusel oils (≤50 ppm). These stringent purity requirements — exceeding those of standard rectified cosmetic spirit — ensure that ENA does not interfere with the olfactory profile of fine fragrances or introduce any off-notes that would compromise the sensory experience of premium cosmetic products. For luxury perfume brands, the use of ENA as the fragrance carrier is a hallmark of quality that preserves the integrity of expensive fragrance compounds from top to base note. Its low conductivity also makes it suitable for sensitive electronic and optical cosmetic analysis applications.',
            image: '/extraneutral.webp',
            specs: ['Alcohol Content: 95% – 96% v/v', 'Methanol: ≤ 30 ppm', 'Aldehydes: ≤ 2 ppm', 'Fusel Oil: ≤ 50 ppm', 'Conductivity: Low', 'Odor: Odorless / Highly neutral', 'HS Code: 2207']
          },
          {
            name: 'Denatured Cosmetic Ethanol',
            slug: 'denatured-cosmetic-ethanol',
            description: 'Ethanol treated with approved cosmetic denaturants to prevent ingestion while remaining safe for topical applications — used in hand sanitizers, hair sprays, body mists, and cosmetic emulsions.',
            details: 'Denatured cosmetic ethanol is ethyl alcohol to which approved denaturants have been added according to specific regional cosmetic regulations (EU, US, GCC) to render it unpalatable and non-consumable while remaining entirely safe for topical dermal application. Denaturation allows the product to be used and sold without the full excise duties applied to potable alcohol, making it the commercially standard form of ethanol used in cosmetic manufacturing. Common approved denaturants for cosmetic use include isopropyl alcohol, diethyl phthalate (in some markets), denatonium benzoate (bitterant), and t-butyl alcohol, each permitted in specific concentrations per regional cosmetic standards. Denatured cosmetic ethanol is the standard carrier for hand sanitizers, antibacterial gels, alcohol-based hair sprays, body mists, and spray-on sunscreens. Compliance documentation for the specific denaturant system and concentration is supplied per destination market regulations.',
            image: '/DenaturedCosmeticEthanol.webp',
            specs: ['Alcohol Content: 95% – 99%', 'Denaturant: Per regional cosmetic regulations (EU / US / GCC)', 'Methanol: Within regulated limit', 'Appearance: Clear liquid', 'Odor: Slightly characteristic', 'HS Code: 2207']
          },
          {
            name: 'Anhydrous Ethanol (Cosmetic Grade)',
            slug: 'anhydrous-ethanol-cosmetic-grade',
            description: 'Ultra-high purity cosmetic ethanol at ≥99% with very low water content for advanced cosmetic formulations, pharmaceutical topical products, and specialty sprays where moisture control is critical.',
            details: 'Anhydrous cosmetic ethanol is produced by dehydrating rectified spirit to a water content below 1% (≥99% ethanol purity) through molecular sieve technology or azeotropic distillation. Its near-waterless composition makes it essential for cosmetic and pharmaceutical formulations where water introduction must be avoided — such as anhydrous gel formulations, water-sensitive active ingredient delivery systems, and precision fragrance concentrate production. In advanced cosmetic formulations, anhydrous ethanol is used as a solvent for highly concentrated botanical extracts, oil-soluble active ingredients, and water-sensitive compounds that would degrade or become unstable in the presence of water. For pharmaceutical topical products, its anhydrous nature supports precise formulation of transdermal delivery systems and topical antiseptic preparations. It must meet heavy metals limits and residue-on-evaporation specifications to ensure no contamination of the cosmetic or pharmaceutical matrix.',
            image: '/AnhydrousEthanol.webp',
            specs: ['Ethanol Purity: ≥ 99%', 'Water Content: ≤ 1%', 'Methanol: ≤ 30 ppm', 'Residue on Evaporation: Minimal', 'Heavy Metals: Cosmetic compliant', 'HS Code: 2207']
          }
        ]
      },
      {
        name: 'Resins (Specialty Use)',
        slug: 'resins-specialty-use',
        description: 'Natural and synthetic polymeric resins providing film-forming, thickening, binding, and gloss-enhancing properties for personal care, hair styling, nail care, and decorative cosmetics. Available in 4 functional grades.',
        details: 'Cosmetic-grade resins are purified natural or synthetic polymeric materials used in personal care, skincare, hair styling, perfumery, and decorative cosmetics. These resins provide film-forming, thickening, binding, gloss-enhancing, and stabilizing properties in finished formulations. Natural resins — including shellac, dammar, colophony (rosin), and benzoin — are valued for their botanical origin, gloss, and adhesion in natural cosmetic products. Synthetic resins such as PVP, acrylate copolymers, and styrene-acrylates deliver controlled, consistent performance in high-hold hair care and long-wear color cosmetics. We supply all four functional resin categories — Natural, Synthetic, Film-Forming, and Thickening/Functional — with full INCI documentation, heavy metals compliance, and cosmetic safety dossier support.',
        image: '/resincosmetic.webp',
        specs: ['Grades: Natural / Synthetic / Film-Forming / Thickening', 'Purity: ≥ 95% (natural) / ≥ 99% (synthetic)', 'HS Code: Varies by resin type', 'Compliance: INCI / EU Cosmetics Regulation'],
        hsCode: '3806',
        subProducts: [
          {
            name: 'Natural Cosmetic Resins',
            slug: 'natural-cosmetic-resins',
            description: 'Botanical-origin resins — including Rosin (Colophony), Shellac, Dammar, and Benzoin — for natural perfumes, lip balms, nail polishes, and organic hair styling products.',
            details: 'Natural cosmetic resins are derived from botanical sources — plant exudates, tree saps, and insect-derived secretions — and processed to cosmetic-grade purity for use in natural, organic, and conventional personal care formulations. Colophony (rosin) is extracted from conifer tree resins and used as a film former and adhesive in nail products, depilatory wax preparations, and hair styling. Shellac, secreted by the lac insect, is used in nail lacquers and mascara for its exceptional gloss, hardness, and film flexibility. Dammar resin, from tropical Dipterocarpaceae trees, is valued in specialty varnishes, mascara, and natural perfumes for its clarity and fixative properties. Benzoin resin serves as a fragrance fixative and natural preservative in perfumery and skin care. All natural resins are supplied in cosmetic-grade purity with acid value analysis, heavy metals testing (Pb ≤10 ppm, As ≤3 ppm), and full traceability documentation.',
            image: '/naturalresins.webp',
            specs: ['Types: Rosin (Colophony) / Shellac / Dammar / Benzoin', 'Purity: ≥ 95%', 'Heavy Metals (Pb): ≤ 10 ppm', 'Arsenic (As): ≤ 3 ppm', 'Appearance: Light yellow to amber solid flakes / powder', 'HS Code: 3806 / 3904']
          },
          {
            name: 'Synthetic Cosmetic Resins',
            slug: 'synthetic-cosmetic-resins',
            description: 'Manufactured synthetic polymers — including PVP, Acrylates Copolymer, and Styrene-Acrylates Copolymer — for hair styling gels, mascara, long-wear foundations, and cosmetic fixatives.',
            details: 'Synthetic cosmetic resins are engineered polymers designed to deliver controlled, consistent performance characteristics — film strength, hold level, flexibility, and humidity resistance — in hair care and color cosmetic formulations. Polyvinylpyrrolidone (PVP) is one of the most widely used hair fixatives globally, providing variable hold levels (light to maximum) in hair sprays, mousses, gels, and styling creams, with excellent compatibility across cosmetic systems and a clean, transparent film. Acrylates copolymers offer superior humidity resistance and film durability, making them the standard film former in waterproof mascara, long-wear foundations, and setting sprays. Styrene-acrylates copolymers provide high-gloss, hard film properties used in nail topcoats and high-definition color cosmetics. All synthetic resins are supplied in cosmetic-grade with residual monomer content within EU Cosmetics Regulation limits and full INCI compliance documentation.',
            image: '/sysntheticresin.webp',
            specs: ['Types: PVP / Acrylates Copolymer / Styrene-Acrylates Copolymer', 'Purity: ≥ 99%', 'Residual Monomer: Within cosmetic limits', 'Heavy Metals: Cosmetic compliant', 'Form: White powder or liquid dispersion', 'HS Code: 3905 / 3906']
          },
          {
            name: 'Film-Forming Resins',
            slug: 'film-forming-resins',
            description: 'Resins that create a thin, uniform, adherent layer over skin or hair to improve water resistance, longevity, and durability of cosmetic products including waterproof makeup and setting sprays.',
            details: 'Film-forming resins are a specialized functional class of polymeric cosmetic ingredients engineered to deposit a continuous, flexible, and adherent film on skin, hair, or nail surfaces upon application and drying. This thin film layer delivers the key cosmetic benefits of water resistance, smudge resistance, transfer resistance, and extended wear performance — the defining characteristics of modern waterproof makeup, long-wear lipstick, and durable mascara formulations. Film-forming resins are compatible with both water and alcohol systems, allowing their incorporation into aqueous emulsions, hydro-alcoholic sprays, and anhydrous formulations. Their fast-setting properties minimize tacky application feel and reduce dry-down time. Film-forming systems are dermatologically tested for skin compatibility and evaluated for clean film removal without harsh mechanical scrubbing, an important sensory attribute in consumer cosmetic products.',
            image: '/FilmResins.webp',
            specs: ['Solid Content: 20% – 60%', 'Drying Time: Fast-setting', 'Compatibility: Water / Alcohol soluble', 'Safety: Dermatologically tested', 'Form: Liquid dispersion or powder', 'HS Code: 3906']
          },
          {
            name: 'Functional / Thickening Resins',
            slug: 'functional-thickening-resins',
            description: 'Stabilizers, texture modifiers, and suspension agents used in creams, lotions, emulsions, and gel formulations to control viscosity, structure, and product consistency.',
            details: 'Functional and thickening resins serve as the rheological backbone of cosmetic creams, lotions, gels, and emulsions, controlling viscosity, imparting body and structure, stabilizing suspended particles and droplets, and delivering the tactile skin feel that defines product quality in the consumer experience. These resins function across both oil and water phases, enabling versatile formulation in O/W (oil-in-water), W/O (water-in-oil), and anhydrous systems. In skincare emulsions, thickening resins maintain emulsion stability over shelf life by preventing coalescence and phase separation, and contribute to the sensory profile — richness, spreadability, and absorption speed — that differentiates premium skin care products. Their pH stability range (4–8) covers the full spectrum of cosmetic formulation pH conditions, from acidic vitamin C serums to mildly alkaline cleansing products. All functional resin grades are supplied with full microbial compliance and compatibility testing data.',
            image: '/ThickeningResin.webp',
            specs: ['pH Stability: 4 – 8', 'Compatibility: Oil / Water phases', 'Microbial Compliance: Within cosmetic limits', 'Form: Powder or liquid', 'Applications: Creams, lotions, gels, emulsions', 'HS Code: 3906']
          }
        ]
      },
      {
        name: 'Silica (Specialty Grade)',
        slug: 'silica-specialty-grade',
        description: 'Highly purified silicon dioxide (SiO2) engineered for cosmetic absorbency, mattifying, thickening, texture enhancement, and film stabilization. Available in Precipitated, Fumed, Microsphere, and Colloidal grades.',
        details: 'Cosmetic-grade silica is highly purified silicon dioxide (SiO2) used in personal care, skincare, decorative cosmetics, oral care, and haircare formulations. It functions as an absorbent, anti-caking agent, thickener, viscosity controller, mattifying agent, and texture enhancer. Each grade is engineered through a distinct production process — wet chemical precipitation, flame hydrolysis, spherical forming, or aqueous dispersion — resulting in unique particle morphology, surface area, and functional properties optimized for specific cosmetic applications. We supply all four cosmetic silica grades with detailed particle size distribution, surface area, oil absorption data, and full EU Cosmetics Regulation compliance.',
        image: '/silicagrade.webp',
        specs: ['Grades: Precipitated / Fumed / Microsphere / Colloidal', 'SiO2 Purity: ≥ 98% – 99.8%', 'HS Code: 2811.22', 'Compliance: EU Cosmetics Regulation / ISO 16128'],
        hsCode: '2811.22',
        subProducts: [
          {
            name: 'Precipitated Silica (Cosmetic Grade)',
            slug: 'precipitated-silica-cosmetic-grade',
            description: 'Synthetically produced through wet chemical processing with controlled porosity and high oil absorption capacity, used for oil control, texture enhancement, face powders, foundations, and toothpaste.',
            details: 'Precipitated silica is produced by the controlled acidification of sodium silicate solution, resulting in a porous, amorphous silicon dioxide powder with a high specific surface area (100–250 m²/g) and excellent oil absorption capacity. Its porous structure enables it to absorb excess sebum and surface oils from the skin, making it the primary mattifying agent in face powders, primers, and oil-control skincare products. The absorbed oils are held within the pore network of the silica particles, providing a sustained matte effect throughout wear. In foundations and pressed powders, precipitated silica also functions as a flow-promoting anti-caking agent that improves powder texture and processability. In toothpaste, food-grade precipitated silica serves as an abrasive cleaning agent and rheology modifier for gel-type dentifrice formulations. All cosmetic grades meet heavy metals (Pb ≤10 ppm) and microbial compliance requirements.',
            image: '/Precipitatedsilica.webp',
            specs: ['SiO2 Purity: ≥ 98%', 'Surface Area (BET): 100 – 250 m²/g', 'Particle Size: 5 – 50 microns', 'pH (5% Suspension): 6 – 8', 'Loss on Drying: ≤ 6%', 'Heavy Metals (Pb): ≤ 10 ppm', 'HS Code: 2811.22']
          },
          {
            name: 'Fumed Silica (Cosmetic Grade)',
            slug: 'fumed-silica-cosmetic-grade',
            description: 'Ultra-fine nano-sized silica produced via flame hydrolysis with very high surface area, used as a thickener, rheology modifier, and gel stabilizer in creams, long-wear cosmetics, and silicone-based products.',
            details: 'Fumed silica (also known as pyrogenic silica) is produced by the hydrolysis of silicon tetrachloride (SiCl4) in a hydrogen-oxygen flame at extremely high temperatures, yielding ultra-fine, nano-sized primary particles that aggregate into three-dimensional chain-like structures with an exceptionally high surface area (150–400 m²/g). When dispersed in liquid cosmetic matrices, these structures form a three-dimensional network that imparts thixotropic rheology — the material thins under shear (allowing easy application) but recovers its gel structure at rest (preventing settling and phase separation). This makes fumed silica the principal rheology modifier for gels, sunscreens, antiperspirants, and silicone-based formulations. Its high purity (≥99.8% SiO2) and extremely low loss on ignition make it chemically inert and non-irritating in cosmetic applications. In long-wear color cosmetics, fumed silica improves pigment suspension stability and contributes to matte, transfer-resistant finishes.',
            image: '/fumedsilica.webp',
            specs: ['SiO2 Purity: ≥ 99.8%', 'Surface Area: 150 – 400 m²/g', 'Particle Size: 7 – 40 nm', 'Loss on Ignition: ≤ 2%', 'Heavy Metals: Within cosmetic limits', 'HS Code: 2811.22']
          },
          {
            name: 'Microsphere Silica (Spherical Grade)',
            slug: 'microsphere-silica-spherical',
            description: 'Spherical silica particles providing soft-focus optical blurring, smoothing effects, and improved skin feel in blurring primers, matte foundations, setting powders, and skincare emulsions.',
            details: 'Microsphere silica — also known as spherical silica — consists of near-perfect spherical silicon dioxide particles in the 3–20 micron size range, engineered to deliver two distinct and highly valued cosmetic benefits: a soft-focus optical effect and a smooth, silky tactile skin feel. The spherical particle geometry creates a unique optical scattering pattern when applied to skin — light reflects off the multiple curved surfaces in multiple directions, softening the appearance of fine lines, pores, and uneven skin texture through an effect known as "optical blurring." This makes microsphere silica the key performance ingredient in blurring primers, pore-minimizing foundations, and anti-aging powders. The perfect spherical morphology also provides a ball-bearing effect during application, giving skin care and makeup products an exceptionally smooth, effortless glide that consumers perceive as a premium sensory experience. The moderate-to-high oil absorption capacity of spherical silica also contributes to sebum control and matte finish maintenance.',
            image: '/MicrosphereSilica .webp',
            specs: ['SiO2: ≥ 99%', 'Particle Size: 3 – 20 microns', 'Oil Absorption: Moderate to high', 'Appearance: Free-flowing powder', 'Effect: Soft-focus / optical blurring', 'HS Code: 2811.22']
          },
          {
            name: 'Colloidal Silica (Cosmetic Grade)',
            slug: 'colloidal-silica-cosmetic-grade',
            description: 'Liquid dispersion of nano-silica particles in water used as a film stabilizer, emulsion enhancer, and polishing agent in specialty cosmetic formulations.',
            details: 'Colloidal silica is an aqueous dispersion of nanometric silicon dioxide particles (5–100 nm) stabilized in suspension at a concentration of 20–50% SiO2 by weight. Unlike dry silica grades, colloidal silica is incorporated into cosmetic formulations as a liquid, making it especially suitable for aqueous-based cosmetic systems where dry powder handling is undesirable or where uniform, molecular-level silica distribution is required. In cosmetic films and coatings, colloidal silica enhances adhesion, film hardness, and surface gloss. As an emulsion stabilizer, nano-sized silica particles adsorb at the oil-water interface (Pickering emulsion mechanism), creating physically stabilized emulsions with exceptional shelf-life stability without the need for traditional emulsifier systems. In specialty skin care, colloidal silica contributes to a smooth, polished skin finish and is used in nail care formulations for its hardening and gloss-enhancing properties. Its pH range (3–10, grade dependent) allows formulation across a wide range of cosmetic pH conditions.',
            image: '/ColloidalSilica.webp',
            specs: ['SiO2 Content: 20% – 50%', 'Particle Size: 5 – 100 nm', 'pH: 3 – 10 (grade dependent)', 'Appearance: Clear to milky liquid', 'Form: Aqueous dispersion', 'HS Code: 2811.22']
          }
        ]
      }
    ]
  }
];
