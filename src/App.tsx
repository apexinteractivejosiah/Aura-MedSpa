/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WelcomeHero } from './components/WelcomeHero';
import { QuizCard } from './components/QuizCard';
import { LeadCaptureCard } from './components/LeadCaptureCard';
import { TreatmentResultCard } from './components/TreatmentResultCard';
import { CornerWidgetPreview } from './components/CornerWidgetPreview';
import {
  QuizSelections,
  LeadInfo,
  QuizResult,
  SkinConcern,
  SkinType,
  Downtime,
  Budget,
  Treatment
} from './types/quiz';
import { recommendTreatment } from './utils/quizRules';

export default function App() {
  const [step, setStep] = useState<number>(0);
  const [widgetMode, setWidgetMode] = useState<'full' | 'widget'>('full');
  const [isCornerOpen, setIsCornerOpen] = useState(true);
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);

  // Selections
  const [selections, setSelections] = useState<QuizSelections>({
    concern: undefined,
    skinType: undefined,
    downtime: undefined,
    budget: undefined
  });

  // Lead
  const [lead, setLead] = useState<LeadInfo | null>(null);

  // Result
  const [result, setResult] = useState<QuizResult | null>(null);

  // Check URL parameters for autostart
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1' || params.get('start') === '1') {
      setStep(1);
    }
    if (params.get('mode') === 'widget') {
      setWidgetMode('widget');
    }
  }, []);

  const handleStartQuiz = () => {
    setStep(1);
  };

  const handleSelectConcern = (concern: SkinConcern) => {
    setSelections((prev) => ({ ...prev, concern }));
  };

  const handleSelectSkinType = (skinType: SkinType) => {
    setSelections((prev) => ({ ...prev, skinType }));
  };

  const handleSelectDowntime = (downtime: Downtime) => {
    setSelections((prev) => ({ ...prev, downtime }));
  };

  const handleSelectBudget = (budget: Budget) => {
    setSelections((prev) => ({ ...prev, budget }));
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else if (step === 4) {
      // Move to lead capture step
      setStep(5);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      setStep(0);
    }
  };

  const handleLeadSubmit = (leadData: LeadInfo) => {
    setLead(leadData);
    setIsLoadingAnalysis(true);

    // Compute recommendation
    const recommended = recommendTreatment(selections);

    // Simulated short diagnostic calculation for clinical feel
    setTimeout(() => {
      setResult(recommended);
      setIsLoadingAnalysis(false);
      setStep(6);
    }, 600);
  };

  const handleResetQuiz = () => {
    setSelections({});
    setLead(null);
    setResult(null);
    setStep(0);
  };

  const handleSelectAlternative = (treatment: Treatment) => {
    if (!result) return;
    // Swap alternative into primary recommendation
    const prevPrimary = result.primaryTreatment;
    const updatedAlternatives = result.alternativeTreatments.filter(
      (t) => t.id !== treatment.id
    );
    updatedAlternatives.push(prevPrimary);

    setResult({
      ...result,
      primaryTreatment: treatment,
      alternativeTreatments: updatedAlternatives
    });
  };

  // Content for the active step
  const renderFlowContent = (isCompact = false) => {
    if (step === 0) {
      return <WelcomeHero onStartQuiz={handleStartQuiz} />;
    }

    if (step >= 1 && step <= 4) {
      return (
        <QuizCard
          step={step}
          selections={selections}
          onSelectConcern={handleSelectConcern}
          onSelectSkinType={handleSelectSkinType}
          onSelectDowntime={handleSelectDowntime}
          onSelectBudget={handleSelectBudget}
          onNext={handleNextStep}
          onBack={handlePrevStep}
        />
      );
    }

    if (step === 5) {
      return (
        <LeadCaptureCard
          onSubmit={handleLeadSubmit}
          onBack={() => setStep(4)}
          isLoading={isLoadingAnalysis}
        />
      );
    }

    if (step === 6 && result && lead) {
      return (
        <TreatmentResultCard
          result={result}
          lead={lead}
          onRetake={() => setStep(1)}
          onSelectAlternative={handleSelectAlternative}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#1C1917]">
      {/* Top Navigation */}
      <Header
        onReset={handleResetQuiz}
        widgetMode={widgetMode}
        setWidgetMode={setWidgetMode}
        canReset={step > 0}
      />

      {/* Main Experience View */}
      {widgetMode === 'full' ? (
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col justify-center">
          {renderFlowContent(false)}
        </main>
      ) : (
        /* Corner Widget Simulation Experience */
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
          {/* Simulated MedSpa Website Background in Corner View */}
          <div className="max-w-4xl mx-auto w-full opacity-70 pointer-events-none select-none space-y-6 pt-4">
            <div className="h-6 w-32 bg-[#EAE1D2] rounded" />
            <div className="h-14 w-3/4 bg-[#EAE1D2]/80 rounded" />
            <div className="h-4 w-1/2 bg-[#EAE1D2]/60 rounded" />
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="h-48 bg-[#EAE1D2]/40 rounded-xl" />
              <div className="h-48 bg-[#EAE1D2]/40 rounded-xl" />
              <div className="h-48 bg-[#EAE1D2]/40 rounded-xl" />
            </div>
            <p className="text-center text-xs text-[#78716C] pt-12">
              (MedSpa website preview behind widget — see floating widget at bottom right)
            </p>
          </div>

          <CornerWidgetPreview
            isOpen={isCornerOpen}
            onToggle={() => setIsCornerOpen(!isCornerOpen)}
            hasVoucher={!!result}
            voucherCode={result?.voucherCode}
          >
            {renderFlowContent(true)}
          </CornerWidgetPreview>
        </div>
      )}

      {/* Elegant Editorial Footer */}
      <footer className="w-full border-t border-[#EAE1D2] py-8 text-xs text-[#78716C] bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-semibold tracking-wider text-[#1C1917]">
              AURA MEDSPA
            </span>
            <span>·</span>
            <span>San Francisco & Silicon Valley</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Clinical Inquiries: concierge@auramedspa.com</span>
            <span>·</span>
            <span>HIPAA Compliant Diagnostics</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
