import React, { useState } from 'react';
import {
  Sparkles,
  Tag,
  Copy,
  Check,
  Calendar,
  Clock,
  Compass,
  DollarSign,
  ShieldCheck,
  Layers,
  ChevronRight,
  Info,
  Gift,
  RotateCcw,
  Heart,
  Share2
} from 'lucide-react';
import { QuizResult, LeadInfo, Treatment } from '../types/quiz';
import { BookingModal } from './BookingModal';

interface TreatmentResultCardProps {
  result: QuizResult;
  lead: LeadInfo;
  onRetake: () => void;
  onSelectAlternative: (treatment: Treatment) => void;
}

export const TreatmentResultCard: React.FC<TreatmentResultCardProps> = ({
  result,
  lead,
  onRetake,
  onSelectAlternative
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'protocol' | 'homecare'>('overview');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const treatment = result.primaryTreatment;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(result.voucherCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `My Aura MedSpa Protocol: ${treatment.name}`,
        text: `I took the Aura MedSpa Skin Finder and was prescribed the ${treatment.name} with 15% off voucher code ${result.voucherCode}!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `Aura MedSpa Protocol: ${treatment.name} | 15% First-Visit Voucher: ${result.voucherCode}`
      );
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2200);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Top Personalized Greeting & Voucher Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1917] via-[#2A2623] to-[#1C1917] text-[#FAF7F2] p-6 sm:p-8 border border-[#9E7D4E]/40 shadow-md">
        {/* Decorative subtle aura glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C5A880]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Clinical Prescription</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Prepared for {lead.name}
            </h1>
            <p className="text-sm text-[#D8CEBE] leading-relaxed">
              Based on your clinical evaluation, our protocol engine has formulated your personalized skin prescription with exclusive first-visit privileges.
            </p>
          </div>

          {/* Interactive VIP Voucher Token */}
          <div className="w-full xl:w-auto bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/50 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>15% First-Visit Voucher</span>
            </div>
            
            <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-white py-1">
              {result.voucherCode}
            </div>

            <div className="text-[11px] text-[#D8CEBE] mb-3">
              Expires in {result.voucherExpiresDays} days · Reserved for {lead.phone}
            </div>

            <div className="flex items-center gap-2 w-full justify-center">
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex-1 py-2 px-3 rounded-lg bg-[#C5A880] hover:bg-[#D4AF37] text-[#1C1917] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>

              <button
                type="button"
                onClick={() => setSavedFavorites(!savedFavorites)}
                className={`p-2 rounded-lg border transition-colors ${
                  savedFavorites
                    ? 'border-red-400 bg-red-400/20 text-red-300'
                    : 'border-[#C5A880]/40 text-[#D8CEBE] hover:text-white'
                }`}
                title="Save protocol"
              >
                <Heart className={`w-4 h-4 ${savedFavorites ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="p-2 rounded-lg border border-[#C5A880]/40 text-[#D8CEBE] hover:text-white transition-colors relative"
                title="Share protocol"
              >
                <Share2 className="w-4 h-4" />
                {sharedToast && (
                  <span className="absolute -top-7 right-0 bg-[#1C1917] text-[10px] text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Selected Profile Badges (clean unboxed metadata with separators) */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#D8CEBE]">
          <span className="text-[#C5A880] uppercase tracking-wider text-[11px] font-semibold">
            Skin Profile:
          </span>
          <span>{result.skinProfileSummary.concernLabel}</span>
          <span aria-hidden="true" className="text-[#C5A880]/60">·</span>
          <span>{result.skinProfileSummary.skinTypeLabel}</span>
          <span aria-hidden="true" className="text-[#C5A880]/60">·</span>
          <span>{result.skinProfileSummary.downtimeLabel}</span>
          <span aria-hidden="true" className="text-[#C5A880]/60">·</span>
          <span>Budget: {result.skinProfileSummary.budgetLabel}</span>
        </div>
      </div>

      {/* Primary Recommended Treatment Card */}
      <div className="bg-white border border-[#EAE1D2] rounded-2xl overflow-hidden shadow-sm">
        {/* Card Header & Clinician Assessment */}
        <div className="p-6 sm:p-8 border-b border-[#EAE1D2] bg-[#FAF7F2]/60">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
                  {treatment.category}
                </span>
                <span className="text-xs text-[#A8A29E]">/</span>
                <span className="text-xs text-[#78716C] font-medium">Recommended Primary Protocol</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-medium leading-tight">
                {treatment.name}
              </h2>
              <p className="text-sm text-[#78716C] mt-1 italic font-serif">
                {treatment.subtitle}
              </p>
            </div>

            {/* Pricing Box */}
            <div className="p-4 rounded-xl bg-white border border-[#EAE1D2] shadow-xs flex flex-row lg:flex-col items-center lg:items-end justify-between min-w-[200px]">
              <div className="text-left lg:text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Estimated Pricing
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-sm line-through text-[#A8A29E]">
                    ${treatment.basePrice}
                  </span>
                  <span className="font-mono text-2xl font-bold text-[#1C1917]">
                    ${treatment.discountedPrice}
                  </span>
                </div>
              </div>
              <div className="text-right mt-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#9E7D4E] bg-[#F3ECE2] px-2 py-0.5 rounded-sm">
                  15% Voucher Applied
                </span>
              </div>
            </div>
          </div>

          {/* Clinician Rationale Quote */}
          <div className="p-4 rounded-xl bg-white border-l-4 border-l-[#C5A880] border border-[#EAE1D2] shadow-xs">
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#9E7D4E] font-bold block mb-1">
                  Clinician Diagnostic Match
                </span>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  {result.clinicianRationale}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#EAE1D2] border-b border-[#EAE1D2] bg-white">
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-xs text-[#78716C] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="uppercase tracking-wider text-[11px] font-semibold">Recommended Series</span>
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              {treatment.sessionCount}
            </div>
            <div className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
              Spaced for collagen cycles
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-xs text-[#78716C] mb-1">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="uppercase tracking-wider text-[11px] font-semibold">Downtime Profile</span>
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              {treatment.downtimeLabel.split('(')[0]}
            </div>
            <div className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
              {treatment.downtimeLabel.includes('(') ? `(${treatment.downtimeLabel.split('(')[1]}` : 'Socially ready'}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-xs text-[#78716C] mb-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="uppercase tracking-wider text-[11px] font-semibold">Session Length</span>
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              {treatment.durationMinutes} Minutes
            </div>
            <div className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
              Includes prep & infusion
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-xs text-[#78716C] mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="uppercase tracking-wider text-[11px] font-semibold">Comfort Level</span>
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              Gentle to Mild
            </div>
            <div className="text-[11px] text-[#78716C] mt-0.5 line-clamp-1">
              Topical comfort prep provided
            </div>
          </div>
        </div>

        {/* Content Tabs (Clean segmented buttons) */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 border-b border-[#EAE1D2] pb-3">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2]'
              }`}
            >
              Protocol Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('protocol')}
              className={`text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'protocol'
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2]'
              }`}
            >
              Treatment Steps
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('homecare')}
              className={`text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'homecare'
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2]'
              }`}
            >
              Pre & Post Care
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-fadeIn">
              <p className="text-sm text-[#44403C] leading-relaxed">
                {treatment.description}
              </p>

              {/* Clinical Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#9E7D4E] font-semibold block">
                  Clinical Advantages & Technologies
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {treatment.clinicalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE1D2] text-xs text-[#44403C] flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center text-[10px] shrink-0 font-medium mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complimentary Booster Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FAF7F2] to-[#F3ECE2] border border-[#C5A880]/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#9E7D4E] text-white flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9E7D4E] font-bold block">
                      Complimentary Add-On Booster With 15% Voucher
                    </span>
                    <span className="text-xs text-[#1C1917] font-medium">
                      {treatment.complementaryBooster}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-sm shrink-0">
                  Included Free
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: Protocol Steps */}
          {activeTab === 'protocol' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-xs uppercase tracking-wider text-[#9E7D4E] font-semibold mb-1">
                Step-by-Step Clinical Procedure (60–75 Min)
              </div>
              <div className="space-y-3">
                {treatment.protocolSteps.map((stepDesc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE1D2] flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C5A880] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-0.5">
                        {idx === 0 && 'Phase 1: Skin Priming & Barrier Diagnostic'}
                        {idx === 1 && 'Phase 2: Target Energy & Active Delivery'}
                        {idx === 2 && 'Phase 3: Deep Dermal Cellular Infusion'}
                        {idx === 3 && 'Phase 4: Cryo-Calming & Barrier Locking'}
                      </h4>
                      <p className="text-xs text-[#44403C] leading-relaxed">
                        {stepDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Pre & Post Care */}
          {activeTab === 'homecare' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D2] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#9E7D4E] font-bold block">
                  Clinician Homecare Advice
                </span>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  {treatment.homecareTip}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#44403C]">
                <div className="p-4 rounded-xl bg-white border border-[#EAE1D2]">
                  <span className="font-semibold text-[#1C1917] block mb-1">
                    Pre-Treatment Guideline:
                  </span>
                  <ul className="space-y-1 text-[#78716C] list-disc list-inside">
                    <li>Discontinue strong retinoids & acids 3 days prior</li>
                    <li>Avoid unprotected sun exposure or tanning beds</li>
                    <li>Arrive 10 minutes prior for numbing prep if applicable</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#EAE1D2]">
                  <span className="font-semibold text-[#1C1917] block mb-1">
                    Post-Treatment Protocol:
                  </span>
                  <ul className="space-y-1 text-[#78716C] list-disc list-inside">
                    <li>Apply mineral broad spectrum SPF 50 generously</li>
                    <li>Maintain barrier hydration with hyaluronic acid</li>
                    <li>Avoid saunas, hot tubs, and heavy sweat for 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* CTA & Booking Button Area */}
          <div className="pt-4 border-t border-[#EAE1D2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#78716C] text-center sm:text-left">
              <span>Includes 15% discount voucher</span>
              <span className="mx-1.5">·</span>
              <span className="font-mono font-medium text-[#1C1917]">{result.voucherCode}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onRetake}
                className="py-3 px-4 rounded-xl border border-[#D8CEBE] hover:border-[#1C1917] text-xs uppercase tracking-wider text-[#78716C] hover:text-[#1C1917] transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Adjust Answers</span>
              </button>

              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="flex-1 sm:flex-initial py-3.5 px-8 rounded-xl bg-[#1C1917] hover:bg-[#332E2A] text-[#FAF7F2] text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Claim 15% First-Visit Voucher & Book</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Matches Section */}
      {result.alternativeTreatments.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
                Alternative Clinical Options
              </span>
              <h3 className="font-serif text-2xl text-[#1C1917]">
                Other Treatments Suited to Your Skin
              </h3>
            </div>
            <span className="text-xs text-[#78716C] hidden sm:inline">
              Click to preview alternative protocol
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.alternativeTreatments.map((alt) => (
              <button
                key={alt.id}
                type="button"
                onClick={() => onSelectAlternative(alt)}
                className="text-left p-5 rounded-xl border border-[#EAE1D2] bg-white hover:border-[#C5A880] hover:bg-[#FAF7F2]/50 transition-all flex flex-col justify-between group cursor-pointer shadow-2xs"
              >
                <div className="space-y-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E7D4E] font-semibold">
                    {alt.category}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-[#1C1917] group-hover:text-[#9E7D4E] transition-colors leading-snug">
                    {alt.name}
                  </h4>
                  <p className="text-xs text-[#78716C] line-clamp-2 leading-relaxed">
                    {alt.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE1D2] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-[#A8A29E] line-through block">
                      ${alt.basePrice}
                    </span>
                    <span className="font-mono font-semibold text-[#1C1917]">
                      ${alt.discountedPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#9E7D4E] font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>View Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        treatment={treatment}
        lead={lead}
        voucherCode={result.voucherCode}
      />
    </div>
  );
};
