export type SkinConcern = 'aging' | 'acne' | 'glow' | 'contouring';
export type SkinType = 'sensitive' | 'dry' | 'combination' | 'oily' | 'normal';
export type Downtime = 'zero' | 'minimal' | 'moderate' | 'flexible';
export type Budget = 'accessible' | 'moderate' | 'premium' | 'bespoke';

export interface QuizSelections {
  concern?: SkinConcern;
  skinType?: SkinType;
  downtime?: Downtime;
  budget?: Budget;
}

export interface LeadInfo {
  name: string;
  phone: string;
  email?: string;
  consent: boolean;
}

export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  priceFormatted: string;
  basePrice: number;
  discountedPrice: number;
  sessionCount: string;
  sessionRationale: string;
  downtimeLabel: string;
  durationMinutes: number;
  resultsTimeline: string;
  sensationLevel: string;
  complementaryBooster: string;
  suitableConcerns: SkinConcern[];
  suitableSkinTypes: SkinType[];
  downtimeRating: Downtime; // 'zero' | 'minimal' | 'moderate' | 'flexible'
  budgetTier: Budget;
  clinicalHighlights: string[];
  protocolSteps: string[];
  homecareTip: string;
}

export interface QuizResult {
  primaryTreatment: Treatment;
  alternativeTreatments: Treatment[];
  complementaryTreatment?: Treatment;
  clinicianRationale: string;
  skinProfileSummary: {
    concernLabel: string;
    skinTypeLabel: string;
    downtimeLabel: string;
    budgetLabel: string;
  };
  voucherCode: string;
  voucherExpiresDays: number;
}
