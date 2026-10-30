import React, { useState } from 'react';
import {
  Sparkles,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Gift,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { LeadInfo } from '../types/quiz';
import { formatPhoneNumber, isValidPhoneNumber } from '../utils/quizRules';

interface LeadCaptureCardProps {
  onSubmit: (lead: LeadInfo) => void;
  onBack: () => void;
  isLoading?: boolean;
}

export const LeadCaptureCard: React.FC<LeadCaptureCardProps> = ({
  onSubmit,
  onBack,
  isLoading = false
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errorMessage) setErrorMessage('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setErrorMessage('Please enter a valid 10-digit phone number (e.g. 555-123-4567).');
      return;
    }

    if (!consent) {
      setErrorMessage('Please accept the consent terms to receive your voucher.');
      return;
    }

    onSubmit({
      name: name.trim(),
      phone: phone.trim(),
      consent
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white/90 backdrop-blur-md border border-[#EAE1D2] rounded-2xl p-6 sm:p-10 shadow-sm animate-fadeIn">
      {/* Top Incentive Ribbon */}
      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D2] mb-6 flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#9E7D4E] flex items-center justify-center shrink-0">
          <Gift className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-[#9E7D4E] font-semibold block">
            Exclusive First-Visit Privilege
          </span>
          <p className="text-xs text-[#44403C] mt-0.5 leading-relaxed">
            Your customized clinical assessment is ready. Enter your details below to unlock your treatment blueprint and receive your <strong className="text-[#1C1917] font-semibold">15% First-Visit Voucher</strong>.
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Final Step</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal leading-tight">
          Where should we send your protocol?
        </h2>
        <p className="text-[#78716C] text-sm leading-relaxed">
          Our clinicians will curate your custom protocol and reserve your introductory 15% savings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="lead-name"
            className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5"
          >
            Full Name <span className="text-[#9E7D4E]">*</span>
          </label>
          <input
            id="lead-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
            placeholder="e.g. Julianna Vance"
            className="w-full px-4 py-3 rounded-xl border border-[#D8CEBE] bg-white text-[#1C1917] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="lead-phone"
            className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5"
          >
            Mobile Phone Number <span className="text-[#9E7D4E]">*</span>
          </label>
          <div className="relative">
            <input
              id="lead-phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(555) 000-0000"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D8CEBE] bg-white text-[#1C1917] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all font-mono"
            />
            <PhoneCall className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <p className="text-[11px] text-[#78716C] mt-1">
            We will text your 15% voucher code and consultation confirmation to this number.
          </p>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#D8CEBE] text-[#1C1917] focus:ring-[#C5A880] accent-[#1C1917]"
            />
            <span className="text-xs text-[#78716C] leading-relaxed group-hover:text-[#44403C]">
              I agree to receive my personalized skin treatment plan and 15% voucher via SMS. Message & data rates may apply. Reply STOP at any time to unsubscribe.
            </span>
          </label>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
            {errorMessage}
          </div>
        )}

        {/* Security / Confidentiality Note */}
        <div className="flex items-center gap-2 pt-1 text-[11px] text-[#78716C]">
          <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
          <span>Strict Clinical Privacy: We never sell or share your personal health data.</span>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#78716C] hover:text-[#1C1917] transition-colors py-2.5 px-3 rounded-lg hover:bg-[#FAF7F2] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold py-3.5 px-6 rounded-xl bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span>Analyzing Skin Matrix...</span>
            ) : (
              <>
                <span>Reveal Protocol & Claim Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
