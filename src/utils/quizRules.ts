import { Budget, Downtime, QuizSelections, QuizResult, SkinConcern, SkinType, Treatment } from '../types/quiz';

export const TREATMENTS: Treatment[] = [
  {
    id: 'hydrafacial_platinum',
    name: 'Platinum HydraFacial® MD',
    subtitle: 'Vortex Detox & Lymphatic Sculpting',
    category: 'Clinical Hydration & Pore Refining',
    tagline: 'Instant glass-skin luminosity with zero social downtime.',
    description: 'A 6-step medical hydradermabrasion protocol incorporating mechanical lymphatic drainage, painless vortex extractions, glycolic brightening, and customized antioxidant-peptide infusion.',
    priceFormatted: '$245 / session',
    basePrice: 245,
    discountedPrice: 208,
    sessionCount: '3 to 6 sessions',
    sessionRationale: 'Monthly maintenance keeps skin barrier resilient, clears congestion, and promotes constant cell turnover.',
    downtimeLabel: 'Zero downtime (Immediate glow)',
    durationMinutes: 60,
    resultsTimeline: 'Immediate radiance; optimal hydration lasts 3-4 weeks',
    sensationLevel: 'Relaxing, gentle cooling suction with no discomfort',
    complementaryBooster: 'Medical-Grade LED Red Light Therapy ($45 value)',
    suitableConcerns: ['glow', 'acne', 'aging'],
    suitableSkinTypes: ['dry', 'combination', 'oily', 'sensitive', 'normal'],
    downtimeRating: 'zero',
    budgetTier: 'accessible',
    clinicalHighlights: [
      'Painless vortex pore extraction without mechanical trauma',
      'Infusion of hyaluronic acid, oligopeptides, and green tea polyphenols',
      'Sculpting facial lymphatic drainage reduces puffiness'
    ],
    protocolSteps: [
      'Gentle mechanical lymphatic drainage to detoxify facial lymph',
      'Vortex deep cleansing and gentle lactic/glycolic acid exfoliation',
      'Automated vacuum extraction of sebum and follicular debris',
      'Targeted booster infusion tailored to individual skin barrier'
    ],
    homecareTip: 'Pair with hyaluronic acid serum; avoid active retinoids for 24 hours.'
  },
  {
    id: 'biorepeel_cryo',
    name: 'BioRePeelCl3® + Cryo Glow',
    subtitle: 'No-Peel Biphasic TCA Renewal',
    category: 'Cellular Turnover & Blemish Eraser',
    tagline: 'Medical-grade 35% TCA peel results without visible peeling or downtime.',
    description: 'An Italian patented biphasic chemical revitalization utilizing 35% Trichloroacetic Acid, GABA, vitamins, and amino acids to stimulate cellular turnover, eliminate stubborn acne pathogens, and brighten post-inflammatory pigmentation.',
    priceFormatted: '$285 / session',
    basePrice: 285,
    discountedPrice: 242,
    sessionCount: '4 sessions spaced 10–14 days apart',
    sessionRationale: 'Cumulative biostimulation resets cellular epidermal dynamics and refines texture permanently.',
    downtimeLabel: 'Zero to minimal (Subtle rosy warmth for 2–4 hours)',
    durationMinutes: 50,
    resultsTimeline: 'Noticeable clarity within 48 hours; peak smoothing at day 7',
    sensationLevel: 'Mild tingling for 3-5 minutes, calmed instantly with cryo-globe massage',
    complementaryBooster: 'Targeted Oxygen Ceuticals Mist Infusion ($40 value)',
    suitableConcerns: ['acne', 'glow', 'aging'],
    suitableSkinTypes: ['oily', 'combination', 'dry', 'normal'],
    downtimeRating: 'zero',
    budgetTier: 'accessible',
    clinicalHighlights: [
      'Patented lipophilic phase prevents epidermal peeling and irritation',
      'Targeted antimicrobial action against C. acnes and inflammatory lesions',
      'Stimulates fibroblasts for natural collagen and elastin synthesis'
    ],
    protocolSteps: [
      'Degreasing and ph-balancing prep',
      'Biphasic TCA & amino acid multi-layer application with lymphatic brushwork',
      'Sub-zero Cryo-Sculpt massage to seal active peptides',
      'Barrier restoration ceramide cloud cream application'
    ],
    homecareTip: 'Wear broad-spectrum mineral SPF 50 daily and avoid chemical exfoliants for 5 days.'
  },
  {
    id: 'clear_brilliant_permea',
    name: 'Clear + Brilliant® Perméa Laser',
    subtitle: 'Fractional Resurfacing & Tone Perfector',
    category: 'Medical Fractional Laser',
    tagline: 'Gentle fractional laser designed to erase early aging and stubborn pigmentation.',
    description: 'Often crowned "the baby Fraxel", this 1927nm fractional non-ablative diode laser creates millions of microscopic thermal treatment zones in the upper dermis to dissolve sun damage, shrink pore architecture, and supercharge topical serum absorption by 17x.',
    priceFormatted: '$450 / session',
    basePrice: 450,
    discountedPrice: 382,
    sessionCount: '3 to 4 sessions spaced 4 weeks apart',
    sessionRationale: 'Gradual thermal remodeling yields silky smooth dermal tone without the recovery of aggressive CO2 lasers.',
    downtimeLabel: 'Minimal (Rosy warmth for 12–24h; subtle sandpaper texture for 3 days)',
    durationMinutes: 60,
    resultsTimeline: 'Roughness subsides in 4 days revealing luminous, velvet complexion',
    sensationLevel: 'Topical lidocaine applied for 30 minutes; feels like warm prickling',
    complementaryBooster: 'Post-Laser Cica Growth Factor Recovery Mask ($50 value)',
    suitableConcerns: ['aging', 'glow'],
    suitableSkinTypes: ['normal', 'dry', 'combination', 'sensitive'],
    downtimeRating: 'minimal',
    budgetTier: 'moderate',
    clinicalHighlights: [
      '1927 nm optical wavelength specifically targets epidermal melasma and tone',
      'Permeability boost allows deep penetration of antioxidant cocktails',
      'Proven clinical reduction in fine periorbital lines and textural roughness'
    ],
    protocolSteps: [
      'Medical-grade topical numbing for total comfort',
      'Full facial precision optical tracking passes (up to 8 passes)',
      'Immediate saturation with pure Vitamin C + Ferulic brightening serum',
      'Cold thermal compression calming mask'
    ],
    homecareTip: 'Keep skin drenched in ceramides and avoid intense cardio/steam for 24 hours.'
  },
  {
    id: 'sciton_bbl_hero',
    name: 'Sciton® BBL HERO Photofacial',
    subtitle: 'High-Energy Pulsed Light Gene Rejuvenation',
    category: 'Photorejuvenation & Pigment Elimination',
    tagline: 'The gold standard for reversing sun spots, broken capillaries, and redness.',
    description: 'BroadBand Light with High Energy Rapid Output (HERO) delivers 4x the speed and 3x the peak power of traditional IPL. Stanford University studies showed regular BBL treatments alter gene expression to resemble younger, healthier skin cells.',
    priceFormatted: '$495 / session',
    basePrice: 495,
    discountedPrice: 420,
    sessionCount: '3 sessions spaced 4 weeks apart',
    sessionRationale: 'Progressively eliminates underlying vascular erythema and dispersed melanin clusters.',
    downtimeLabel: 'Zero to minimal (Spots darken like coffee grounds before flaking off in 5 days)',
    durationMinutes: 45,
    resultsTimeline: 'Clearing of spots and flushed tones begins within 7-10 days',
    sensationLevel: 'Snapping warm rubber band sensation cooled by Sapphire contact crystal',
    complementaryBooster: 'SkinCeuticals Phyto Corrective Calming Treatment ($45 value)',
    suitableConcerns: ['glow', 'aging'],
    suitableSkinTypes: ['normal', 'dry', 'combination', 'oily'],
    downtimeRating: 'zero',
    budgetTier: 'moderate',
    clinicalHighlights: [
      'Stanford-studied genetic rejuvenation restores youthfulness marker RNA',
      'Continuous motion cooling tip ensures 100% skin safety and comfortable delivery',
      'Dual-action filters treat redness, rosacea, and brown hyperpigmentation simultaneously'
    ],
    protocolSteps: [
      'Eye protection and chilled ultrasound conductive coupling gel',
      'Full-face rejuvenation pass addressing baseline phototype',
      'Targeted spot passes for discrete pigment and telangiectasias',
      'Cooling botanical balm and broad-spectrum zinc barrier'
    ],
    homecareTip: 'Do not pick or scrub darkening pigment spots; allow natural exfoliation in the shower.'
  },
  {
    id: 'morpheus8_rf',
    name: 'Morpheus8 RF Microneedling & Exosomes',
    subtitle: 'Deep Dermal Remodeling & Subdermal Adipose Contouring',
    category: 'Fractional Radiofrequency Remodeling',
    tagline: 'Transformative jawline sculpting, skin tightening, and deep acne scar remodeling.',
    description: 'Combining 24 gold-coated micro-pins with subdermal fractional radiofrequency energy delivered up to 4mm deep. Stimulates triple-layer collagen contraction and remodels subdermal adipose tissue for a refined, sculpted jawline and smooth skin surface.',
    priceFormatted: '$890 / session',
    basePrice: 890,
    discountedPrice: 756,
    sessionCount: '3 sessions spaced 4 to 6 weeks apart',
    sessionRationale: 'Neocollagenesis and elastin maturation take 6-12 weeks for progressive, lasting tightening.',
    downtimeLabel: 'Moderate (2–4 days mild swelling, grid marks fade within 72h)',
    durationMinutes: 75,
    resultsTimeline: 'Initial tightening at week 3; peak contouring and lift at month 3 to 6',
    sensationLevel: 'Compounded triple anesthetic cream ensures very tolerable sensation of deep heat',
    complementaryBooster: 'Lyophilized Exosome Bio-Regenerative Infusion ($200 value included)',
    suitableConcerns: ['contouring', 'aging', 'acne'],
    suitableSkinTypes: ['combination', 'oily', 'normal', 'dry'],
    downtimeRating: 'moderate',
    budgetTier: 'premium',
    clinicalHighlights: [
      'Penetrates up to 4mm to remodel dermal collagen and tighten fibroseptal network',
      'Stimulates Types I & III collagen synthesis for lasting structural firming',
      'Exosome booster speeds healing time by over 50% and reduces inflammation'
    ],
    protocolSteps: [
      '45-minute medical-grade topical anesthesia application',
      'Sterile grid mapping across lower face, jawline, neck, or cheek zones',
      'Dual-depth RF energy pulsing tailored to specific dermal thickness',
      'Immediate application of 5 billion active lab-certified exosomes'
    ],
    homecareTip: 'Sleep elevated on your back for 2 nights and avoid makeup for 36 hours.'
  },
  {
    id: 'prp_collagen_pin',
    name: 'PRP "Liquid Gold" Microneedling',
    subtitle: 'Autologous Platelet-Rich Plasma Regenerative Infusion',
    category: 'Biological Regenerative Therapy',
    tagline: 'Harness your body’s own growth factors for cellular texture and scar repair.',
    description: 'Using an FDA-cleared micro-pen to create 15,000 micro-channels per minute, while flooding the tissue with highly concentrated autologous growth factors from your own spun plasma. Accelerates dermal repair, softens acne scars, and thickens thinning crepey skin.',
    priceFormatted: '$695 / session',
    basePrice: 695,
    discountedPrice: 590,
    sessionCount: '3 sessions spaced 4 weeks apart',
    sessionRationale: 'Platelet growth factors release signaling cytokines over 21 days for organic tissue remodeling.',
    downtimeLabel: 'Minimal to moderate (Mild sunburn flush for 24–48 hours)',
    durationMinutes: 75,
    resultsTimeline: 'Luminous dewy sheen at 7 days; textural smoothing compounds over 60 days',
    sensationLevel: 'Topical numbing gel makes the treatment comfortable with mild vibration sensation',
    complementaryBooster: 'Post-treatment Take-Home Autologous Plasma Mist ($75 value)',
    suitableConcerns: ['acne', 'aging', 'glow'],
    suitableSkinTypes: ['sensitive', 'dry', 'combination', 'oily', 'normal'],
    downtimeRating: 'minimal',
    budgetTier: 'moderate',
    clinicalHighlights: [
      'Pure autologous growth factors eliminate any risk of allergic reaction',
      'Rich in VEGF, PDGF, and TGF-beta to stimulate healthy micro-capillary beds',
      'Proven efficacy for atrophic acne scars, enlarged pores, and fine lines'
    ],
    protocolSteps: [
      'Gentle in-office blood draw into sterile separation gel tube',
      'High-G centrifugation to isolate concentrated golden platelet plasma',
      'Automated medical micro-needling with continuous plasma glide',
      'Final plasma saturation lock and chilled peptide compress'
    ],
    homecareTip: 'Allow the plasma to absorb overnight before rinsing gently with tepid water.'
  },
  {
    id: 'sofwave_ultrasound',
    name: 'Sofwave™ SUPERB™ Non-Surgical Lift',
    subtitle: 'Next-Generation Parallel Ultrasound Contouring',
    category: 'Non-Invasive Structural Lifting',
    tagline: 'FDA-cleared to lift the eyebrow, submental (jawline), and neck with zero downtime.',
    description: 'Utilizing Synchronous Ultrasound Parallel Beam (SUPERB™) technology. Energy passes harmlessly through the epidermis to coagulate collagen precisely at 1.5mm mid-dermis, stimulating profound structural contraction without damaging nerves, fat, or skin surface.',
    priceFormatted: '$1,650 / full face & neck',
    basePrice: 1650,
    discountedPrice: 1402,
    sessionCount: '1 to 2 sessions',
    sessionRationale: 'High-density collagen contraction provides lasting architectural support for 12–18 months.',
    downtimeLabel: 'Zero downtime (No peeling, no bruising, return to dinner immediately)',
    durationMinutes: 60,
    resultsTimeline: 'Immediate mild firming; prominent lift unfolds at months 2 to 4',
    sensationLevel: 'Direct integrated contact cooling with brief warm pulses during active beam',
    complementaryBooster: 'Medical Hyaluronic Neck & Decollete Firming Serum ($85 value)',
    suitableConcerns: ['contouring', 'aging'],
    suitableSkinTypes: ['normal', 'dry', 'combination', 'sensitive', 'oily'],
    downtimeRating: 'zero',
    budgetTier: 'bespoke',
    clinicalHighlights: [
      'Patented parallel beam geometry protects delicate facial fat pads from loss',
      'Sofcool™ contact cooling maintains epidermal safety at constant comfortable temp',
      'FDA-cleared for lifting brow, submental tissue, and neck laxity in all skin types'
    ],
    protocolSteps: [
      'Target vector mapping along the zygomatic arch and mandibular line',
      'Conductive acoustic gel application',
      'Sequential acoustic pulses delivered across 7 parallel cylindrical zones',
      'Finishing antioxidant emulsion and skin recovery peptide shield'
    ],
    homecareTip: 'No restrictions! You may resume skincare, makeup, and workouts immediately.'
  },
  {
    id: 'aura_sculptra_contour',
    name: 'Aura Sculptra® Bio-Stimulatory Contouring',
    subtitle: 'Poly-L-Lactic Acid Structural Rejuvenation',
    category: 'Regenerative Biostimulator & Sculpting',
    tagline: 'Restore natural bone structure, cheek fullness, and temples from within.',
    description: 'Unlike hyaluronic gel fillers that merely puff tissue, Sculptra (PLLA micro-particles) acts as a collagen fertilizer. As the micro-particles naturally dissolve, your own fibroblasts lay down dense Type I collagen matrices to restore natural youthful contours.',
    priceFormatted: '$1,750 / 2 vials protocol',
    basePrice: 1750,
    discountedPrice: 1487,
    sessionCount: '2 to 3 sessions spaced 6 weeks apart',
    sessionRationale: 'Gradual bio-scaffolding builds durable tissue volume that looks entirely natural for up to 2+ years.',
    downtimeLabel: 'Zero to minimal (Possible pinpoint bruising for 2-3 days easily concealed)',
    durationMinutes: 45,
    resultsTimeline: 'Subtle gradual volumization starting at week 4; full results at month 3',
    sensationLevel: 'Formulated with lidocaine for comfortable, seamless cannula placement',
    complementaryBooster: 'Arnica Montana & Bromelain Clinical Recovery Kit ($45 value)',
    suitableConcerns: ['contouring', 'aging'],
    suitableSkinTypes: ['normal', 'dry', 'combination', 'sensitive', 'oily'],
    downtimeRating: 'zero',
    budgetTier: 'bespoke',
    clinicalHighlights: [
      'Clinically proven to increase Type I collagen by up to 66.5% after 3 months',
      'Never creates an "overfilled" appearance—results are 100% your own collagen',
      'Exceptional longevity with clinical retention lasting greater than 24 months'
    ],
    protocolSteps: [
      'Facial volume mapping and sterile prep of anatomical injection vectors',
      'Micro-cannula administration along pre-auricular, cheek, and jawline planes',
      'Clinician 5-5-5 sculpting massage to ensure homogeneous particle dispersion',
      'Arnica calming recovery serum finish'
    ],
    homecareTip: 'Follow the 5-5-5 rule: massage treated areas for 5 minutes, 5 times daily, for 5 days.'
  }
];

export const CONCERN_LABELS: Record<SkinConcern, { label: string; desc: string }> = {
  aging: {
    label: 'Aging & Fine Lines',
    desc: 'Softening wrinkles, firming laxity, and restoring collagen loss'
  },
  acne: {
    label: 'Acne & Congestion',
    desc: 'Clearing active blemishes, deep sebum buildup, and post-acne texture'
  },
  glow: {
    label: 'Dullness & Radiance',
    desc: 'Fading sun spots, uneven pigmentation, and achieving dewy glass skin'
  },
  contouring: {
    label: 'Facial Contouring & Lift',
    desc: 'Defining jawline, tightening cheekbones, and lifting submental contours'
  }
};

export const SKIN_TYPE_LABELS: Record<SkinType, { label: string; desc: string }> = {
  sensitive: {
    label: 'Delicate / Sensitive',
    desc: 'Prone to redness, reactive to aggressive actives, easily inflamed'
  },
  dry: {
    label: 'Dry / Dehydrated',
    desc: 'Feels tight, craves rich barrier lipids, dull surface flakes'
  },
  combination: {
    label: 'Combination',
    desc: 'Oily T-zone (forehead, nose, chin) with normal or dry cheeks'
  },
  oily: {
    label: 'Oily / Congestion-Prone',
    desc: 'Excess sebum, visible pore dilation, midday shine'
  },
  normal: {
    label: 'Balanced / Normal',
    desc: 'Well-regulated moisture barrier, resilient to standard treatments'
  }
};

export const DOWNTIME_LABELS: Record<Downtime, { label: string; desc: string }> = {
  zero: {
    label: 'Zero Downtime (Event Ready)',
    desc: 'Instant glow with no visible peeling or redness; return straight to social schedule'
  },
  minimal: {
    label: 'Minimal (24 – 48 Hours)',
    desc: 'Mild rosy flush or light sandpaper feel that can be easily moisturized'
  },
  moderate: {
    label: 'Moderate (3 – 5 Days)',
    desc: 'Mild swelling or flaking for deep cellular and dermal renewal'
  },
  flexible: {
    label: 'Flexible / Clinician Choice',
    desc: 'Willing to take whatever downtime is necessary to achieve transformative results'
  }
};

export const BUDGET_LABELS: Record<Budget, { label: string; desc: string; range: string }> = {
  accessible: {
    label: 'Introductory & Maintenance',
    desc: 'Foundational clinical care, hydradermabrasion & no-peel treatments',
    range: '$150 – $300'
  },
  moderate: {
    label: 'Targeted Clinical Revitalization',
    desc: 'Advanced fractional lasers, photofacials & biological treatments',
    range: '$300 – $650'
  },
  premium: {
    label: 'Medical-Grade Remodeling',
    desc: 'Deep radiofrequency microneedling, exosome therapy & multi-layer repair',
    range: '$650 – $1,500'
  },
  bespoke: {
    label: 'Bespoke Multi-Modality Transformation',
    desc: 'Ultrasound non-surgical lifting, biostimulators & comprehensive transformation',
    range: '$1,500+'
  }
};

/**
 * Pure recommendation scoring engine
 */
export function recommendTreatment(selections: QuizSelections): QuizResult {
  const concern = selections.concern || 'glow';
  const skinType = selections.skinType || 'combination';
  const downtime = selections.downtime || 'minimal';
  const budget = selections.budget || 'moderate';

  const scored = TREATMENTS.map((treatment) => {
    let score = 0;

    // Concern matching
    if (treatment.suitableConcerns.includes(concern)) {
      score += 40;
      // Bonus if it's the primary aesthetic focus
      if (treatment.suitableConcerns[0] === concern) {
        score += 15;
      }
    }

    // Skin type suitability
    if (treatment.suitableSkinTypes.includes(skinType)) {
      score += 20;
    } else if (skinType === 'sensitive') {
      // Heavily penalize harsh treatments for sensitive skin
      score -= 30;
    }

    // Downtime compatibility
    if (downtime === 'zero') {
      if (treatment.downtimeRating === 'zero') score += 30;
      else if (treatment.downtimeRating === 'minimal') score -= 10;
      else score -= 45;
    } else if (downtime === 'minimal') {
      if (treatment.downtimeRating === 'zero' || treatment.downtimeRating === 'minimal') score += 25;
      else score -= 25;
    } else if (downtime === 'moderate') {
      if (treatment.downtimeRating === 'moderate' || treatment.downtimeRating === 'minimal') score += 25;
      else score += 10;
    } else {
      // flexible
      score += 20;
    }

    // Budget compatibility
    const budgetRanks: Record<Budget, number> = {
      accessible: 1,
      moderate: 2,
      premium: 3,
      bespoke: 4
    };

    const userBudgetRank = budgetRanks[budget];
    const treatmentBudgetRank = budgetRanks[treatment.budgetTier];

    if (userBudgetRank === treatmentBudgetRank) {
      score += 30;
    } else if (Math.abs(userBudgetRank - treatmentBudgetRank) === 1) {
      score += 15;
    } else {
      score -= 15;
    }

    return { treatment, score };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  const primary = scored[0].treatment;
  const alternatives = scored.slice(1, 4).map(s => s.treatment);

  // Generate dynamic clinical rationale
  const rationale = buildClinicianRationale(primary, concern, skinType, downtime, budget);

  // Generate unique VIP voucher code
  const voucherCode = generateVoucherCode(concern);

  return {
    primaryTreatment: primary,
    alternativeTreatments: alternatives,
    complementaryTreatment: alternatives[0],
    clinicianRationale: rationale,
    skinProfileSummary: {
      concernLabel: CONCERN_LABELS[concern].label,
      skinTypeLabel: SKIN_TYPE_LABELS[skinType].label,
      downtimeLabel: DOWNTIME_LABELS[downtime].label,
      budgetLabel: BUDGET_LABELS[budget].range
    },
    voucherCode,
    voucherExpiresDays: 7
  };
}

export function buildClinicianRationale(
  treatment: Treatment,
  concern: SkinConcern,
  skinType: SkinType,
  downtime: Downtime,
  budget: Budget
): string {
  const concernFocus: Record<SkinConcern, string> = {
    aging: 'targeted collagen neo-genesis and textural resilience without surgical stress',
    acne: 'purifying follicular debris, neutralizing bacterial proliferation, and smoothing residual marks',
    glow: 'dissolving stubborn pigmentation, boosting cellular hydration, and restoring light reflection',
    contouring: 'architectural deep tissue contraction and mandibular definition'
  };

  const skinTypeNote: Record<SkinType, string> = {
    sensitive: 'Its micro-calibrated delivery respects delicate vascular networks and maintains barrier integrity.',
    dry: 'Formulated to flood the dermal matrix with hygroscopic moisture while stimulating natural lipid synthesis.',
    combination: 'It intelligently balances excessive T-zone sebum while preserving lipid equilibrium on the cheeks.',
    oily: 'It targets hyperactive sebaceous glands to visibly refine dilated pores and regulate midday shine.',
    normal: 'It capitalizes on your resilient barrier to deliver rapid, compounded aesthetic results.'
  };

  const downtimeNote: Record<Downtime, string> = {
    zero: 'Matches your requirement for zero social downtime with immediate event-ready luminescence.',
    minimal: 'Requires only a gentle 24–48 hour recovery period, fitting seamlessly into your weekly schedule.',
    moderate: 'Utilizes controlled restorative stimulation for profound cellular remodeling.',
    flexible: 'Selected for maximum clinical efficacy to achieve your desired aesthetic goals.'
  };

  return `Based on your consultation priorities, the ${treatment.name} was selected as your optimal protocol for ${concernFocus[concern]}. ${skinTypeNote[skinType]} ${downtimeNote[downtime]}`;
}

export function formatPhoneNumber(value: string): string {
  // Strip non-digits
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length === 0) return '';
  if (cleaned.length <= 3) return `(${cleaned}`;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
}

export function isValidPhoneNumber(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10;
}

export function generateVoucherCode(concern: SkinConcern): string {
  const prefixMap: Record<SkinConcern, string> = {
    aging: 'AURA-TIMELESS',
    acne: 'AURA-PURIFY',
    glow: 'AURA-LUMEN',
    contouring: 'AURA-SCULPT'
  };
  const prefix = prefixMap[concern] || 'AURA-VIP';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${randomNum}`;
}
