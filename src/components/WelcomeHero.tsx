import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Star } from 'lucide-react';

interface WelcomeHeroProps {
  onStartQuiz: () => void;
}

export const WelcomeHero: React.FC<WelcomeHeroProps> = ({ onStartQuiz }) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-8 py-6 sm:py-12 animate-fadeIn">
      {/* Top Tagline */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D8CEBE] bg-white/80 backdrop-blur-xs text-[#78716C] text-xs uppercase tracking-[0.2em] font-medium shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
        <span>Bespoke Aesthetic Medicine Protocol</span>
      </div>

      {/* Main Title in Cormorant Garamond */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal leading-[1.1] tracking-tight">
          Discover Your Ideal Skin Treatment
        </h1>
        <p className="text-base sm:text-lg text-[#78716C] font-light leading-relaxed">
          Answer 4 quick diagnostic questions to receive an AI-curated clinical protocol tailored to your skin barrier, downtime preferences, and aesthetic goals.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={onStartQuiz}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1C1917] hover:bg-[#332E2A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer group hover:scale-[1.01]"
        >
          <span>Begin 60-Second Skin Assessment</span>
          <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Value Badges (Zero-pill discipline: unboxed text with subtle separators) */}
      <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-[#78716C]">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Takes under 60 seconds</span>
        </div>
        <span aria-hidden="true" className="text-[#D8CEBE]">·</span>
        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Includes 15% First-Visit Voucher</span>
        </div>
        <span aria-hidden="true" className="text-[#D8CEBE]">·</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Medical Board Certified Protocols</span>
        </div>
      </div>

      {/* MedSpa Atmosphere Showcase */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="p-5 rounded-xl bg-white/70 border border-[#EAE1D2] shadow-2xs space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-[#9E7D4E] font-semibold block">
            01. Precision Diagnostics
          </span>
          <h3 className="font-serif text-lg font-medium text-[#1C1917]">
            Barrier-First Analysis
          </h3>
          <p className="text-xs text-[#78716C] leading-relaxed">
            We match energy wavelengths and bioactive topicals to your exact dermal sensitivity threshold.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/70 border border-[#EAE1D2] shadow-2xs space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-[#9E7D4E] font-semibold block">
            02. Clear Expectations
          </span>
          <h3 className="font-serif text-lg font-medium text-[#1C1917]">
            Zero Guesswork
          </h3>
          <p className="text-xs text-[#78716C] leading-relaxed">
            Transparent pricing, expected session intervals, and realistic downtime profiles upfront.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/70 border border-[#EAE1D2] shadow-2xs space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-[#9E7D4E] font-semibold block">
            03. First-Visit Privilege
          </span>
          <h3 className="font-serif text-lg font-medium text-[#1C1917]">
            15% Savings Voucher
          </h3>
          <p className="text-xs text-[#78716C] leading-relaxed">
            Claim an exclusive digital voucher code valid towards your first treatment and consultation.
          </p>
        </div>
      </div>
    </div>
  );
};
