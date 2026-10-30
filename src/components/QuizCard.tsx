import React from 'react';
import {
  Sparkles,
  Flame,
  Droplet,
  Compass,
  Clock,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Layers,
  CircleDollarSign,
  SunMedium
} from 'lucide-react';
import {
  SkinConcern,
  SkinType,
  Downtime,
  Budget,
  QuizSelections
} from '../types/quiz';
import {
  CONCERN_LABELS,
  SKIN_TYPE_LABELS,
  DOWNTIME_LABELS,
  BUDGET_LABELS
} from '../utils/quizRules';

interface QuizCardProps {
  step: number; // 1 to 4
  selections: QuizSelections;
  onSelectConcern: (concern: SkinConcern) => void;
  onSelectSkinType: (type: SkinType) => void;
  onSelectDowntime: (downtime: Downtime) => void;
  onSelectBudget: (budget: Budget) => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  step,
  selections,
  onSelectConcern,
  onSelectSkinType,
  onSelectDowntime,
  onSelectBudget,
  onNext,
  onBack
}) => {
  const isCurrentStepAnswered = () => {
    switch (step) {
      case 1:
        return !!selections.concern;
      case 2:
        return !!selections.skinType;
      case 3:
        return !!selections.downtime;
      case 4:
        return !!selections.budget;
      default:
        return false;
    }
  };

  const progressPercent = (step / 5) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md border border-[#EAE1D2] rounded-2xl p-6 sm:p-10 shadow-sm transition-all">
      {/* Top Progress & Step Kicker */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs tracking-[0.15em] text-[#78716C] uppercase font-medium mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A880] font-semibold">Step 0{step}</span>
            <span className="text-[#D8CEBE]">/</span>
            <span>Step 04</span>
          </div>
          <span className="text-[#1C1917] font-medium hidden sm:inline">
            Aura Aesthetic Assessment
          </span>
        </div>

        {/* Minimal Gold Progress Bar */}
        <div className="w-full h-1 bg-[#F3ECE2] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C5A880] to-[#9E7D4E] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Step 1: Primary Concern */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target Aesthetic Goal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
              What is your primary skin concern?
            </h2>
            <p className="text-[#78716C] text-sm leading-relaxed">
              Select the primary transformation you wish to achieve during your next Aura MedSpa protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {(['aging', 'acne', 'glow', 'contouring'] as SkinConcern[]).map((key) => {
              const item = CONCERN_LABELS[key];
              const isSelected = selections.concern === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    onSelectConcern(key);
                  }}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all relative flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-[#C5A880] bg-[#FAF7F2] ring-1 ring-[#C5A880] shadow-xs'
                      : 'border-[#EAE1D2] bg-white hover:border-[#D8CEBE] hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#1C1917] text-[#FAF7F2]'
                          : 'bg-[#F3ECE2] text-[#44403C] group-hover:bg-[#EAE1D2]'
                      }`}
                    >
                      {key === 'aging' && <Clock className="w-5 h-5 text-[#C5A880]" />}
                      {key === 'acne' && <Flame className="w-5 h-5 text-[#C5A880]" />}
                      {key === 'glow' && <SunMedium className="w-5 h-5 text-[#C5A880]" />}
                      {key === 'contouring' && <Layers className="w-5 h-5 text-[#C5A880]" />}
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-[#C5A880] bg-[#C5A880] text-white'
                          : 'border-[#D8CEBE] group-hover:border-[#9E7D4E]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-[#1C1917] mb-1 group-hover:text-[#9E7D4E] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-[#78716C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Skin Type */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
              <Droplet className="w-3.5 h-3.5" />
              <span>Dermal Barrier Profile</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
              How would you describe your skin type?
            </h2>
            <p className="text-[#78716C] text-sm leading-relaxed">
              This ensures we calibrate energy levels, acid pH thresholds, and hydrators to match your barrier.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {(['sensitive', 'dry', 'combination', 'oily', 'normal'] as SkinType[]).map((key) => {
              const item = SKIN_TYPE_LABELS[key];
              const isSelected = selections.skinType === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    onSelectSkinType(key);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 group cursor-pointer ${
                    isSelected
                      ? 'border-[#C5A880] bg-[#FAF7F2] ring-1 ring-[#C5A880] shadow-xs'
                      : 'border-[#EAE1D2] bg-white hover:border-[#D8CEBE] hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-[#1C1917] group-hover:text-[#9E7D4E] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#78716C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#C5A880] bg-[#C5A880] text-white'
                        : 'border-[#D8CEBE] group-hover:border-[#9E7D4E]'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Downtime Preference */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Lifestyle & Recovery Window</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
              What is your downtime preference?
            </h2>
            <p className="text-[#78716C] text-sm leading-relaxed">
              Whether you need instant event readiness or have days for deep restorative remodeling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {(['zero', 'minimal', 'moderate', 'flexible'] as Downtime[]).map((key) => {
              const item = DOWNTIME_LABELS[key];
              const isSelected = selections.downtime === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    onSelectDowntime(key);
                  }}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all relative flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-[#C5A880] bg-[#FAF7F2] ring-1 ring-[#C5A880] shadow-xs'
                      : 'border-[#EAE1D2] bg-white hover:border-[#D8CEBE] hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#9E7D4E] font-semibold">
                      {key === 'zero' && 'Event Ready'}
                      {key === 'minimal' && 'Weekend Reset'}
                      {key === 'moderate' && 'Deep Repair'}
                      {key === 'flexible' && 'Clinical Priority'}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-[#C5A880] bg-[#C5A880] text-white'
                          : 'border-[#D8CEBE] group-hover:border-[#9E7D4E]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-[#1C1917] mb-1 group-hover:text-[#9E7D4E] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-[#78716C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 4: Budget Range */}
      {step === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
              <CircleDollarSign className="w-3.5 h-3.5" />
              <span>Investment Tier</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
              What is your anticipated budget range?
            </h2>
            <p className="text-[#78716C] text-sm leading-relaxed">
              We align our clinical recommendations with your preferred investment level. Your 15% voucher applies to any protocol.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {(['accessible', 'moderate', 'premium', 'bespoke'] as Budget[]).map((key) => {
              const item = BUDGET_LABELS[key];
              const isSelected = selections.budget === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    onSelectBudget(key);
                  }}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all flex items-center justify-between gap-4 group cursor-pointer ${
                    isSelected
                      ? 'border-[#C5A880] bg-[#FAF7F2] ring-1 ring-[#C5A880] shadow-xs'
                      : 'border-[#EAE1D2] bg-white hover:border-[#D8CEBE] hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-semibold text-[#1C1917] group-hover:text-[#9E7D4E] transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono font-medium text-[#9E7D4E] bg-[#F3ECE2] px-2 py-0.5 rounded-sm">
                        {item.range}
                      </span>
                    </div>
                    <p className="text-xs text-[#78716C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#C5A880] bg-[#C5A880] text-white'
                        : 'border-[#D8CEBE] group-hover:border-[#9E7D4E]'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 pt-6 border-t border-[#EAE1D2] flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#78716C] hover:text-[#1C1917] transition-colors py-2.5 px-4 rounded-lg hover:bg-[#FAF7F2] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Certified MedSpa Protocols</span>
          </div>
        )}

        <button
          type="button"
          disabled={!isCurrentStepAnswered()}
          onClick={onNext}
          className={`flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium py-3 px-6 rounded-lg transition-all ${
            isCurrentStepAnswered()
              ? 'bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] shadow-sm cursor-pointer'
              : 'bg-[#EAE1D2] text-[#A8A29E] cursor-not-allowed'
          }`}
        >
          <span>{step === 4 ? 'Continue to Results' : 'Next Step'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
