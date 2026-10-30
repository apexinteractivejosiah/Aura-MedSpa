import React, { useState } from 'react';
import { Sparkles, X, ChevronUp, ChevronDown, Tag } from 'lucide-react';

interface CornerWidgetPreviewProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  hasVoucher?: boolean;
  voucherCode?: string;
}

export const CornerWidgetPreview: React.FC<CornerWidgetPreviewProps> = ({
  children,
  isOpen,
  onToggle,
  hasVoucher = false,
  voucherCode
}) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="group flex items-center gap-3 py-3.5 px-5 rounded-full bg-[#1C1917] hover:bg-[#2F2B28] text-[#FAF7F2] shadow-xl border border-[#C5A880]/60 transition-all hover:scale-105 cursor-pointer"
          aria-label="Open AI Skin Finder Widget"
        >
          <div className="w-7 h-7 rounded-full bg-[#C5A880] text-[#1C1917] flex items-center justify-center font-serif font-bold text-sm">
            A
          </div>
          <div className="text-left">
            <span className="block text-[11px] uppercase tracking-wider font-semibold text-white">
              AI Treatment Finder
            </span>
            <span className="block text-[10px] text-[#C5A880] font-medium">
              Take 60s Quiz · Get 15% Off
            </span>
          </div>
          <Sparkles className="w-4 h-4 text-[#C5A880] animate-pulse" />
        </button>
      )}

      {/* Floating Widget Card Container */}
      {isOpen && (
        <div className="w-[94vw] sm:w-[480px] h-[82vh] max-h-[640px] bg-[#FAF7F2] border border-[#D8CEBE] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Widget Title Bar */}
          <div className="p-4 bg-[#1C1917] text-[#FAF7F2] flex items-center justify-between border-b border-[#332E2A]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#C5A880] text-[#1C1917] flex items-center justify-center font-serif text-sm font-semibold">
                A
              </div>
              <div>
                <span className="font-serif text-sm tracking-widest uppercase block text-white font-medium">
                  Aura MedSpa
                </span>
                <span className="text-[10px] text-[#C5A880] tracking-wider uppercase block">
                  AI Skin Protocol Finder
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={onToggle}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#D8CEBE] hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Widget Body Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
