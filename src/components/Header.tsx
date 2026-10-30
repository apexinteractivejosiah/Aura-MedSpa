import React from 'react';
import { Sparkles, Phone, RotateCcw, LayoutTemplate, PanelRightClose } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  widgetMode: 'full' | 'widget';
  setWidgetMode: (mode: 'full' | 'widget') => void;
  canReset: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onReset,
  widgetMode,
  setWidgetMode,
  canReset
}) => {
  return (
    <header className="w-full border-b border-[#EAE1D2]/80 bg-[#FAF7F2]/90 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1917] text-[#FAF7F2] flex items-center justify-center font-serif text-lg tracking-wider shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#1C1917] uppercase">
              Aura MedSpa
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#78716C] uppercase font-medium">
              Medical Aesthetics & Skin Architecture
            </span>
          </div>
        </div>

        {/* Center/Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mode Switcher */}
          <div className="hidden sm:flex items-center bg-[#EAE1D2]/60 p-1 rounded-full text-xs font-medium text-[#44403C]">
            <button
              type="button"
              onClick={() => setWidgetMode('full')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                widgetMode === 'full'
                  ? 'bg-white text-[#1C1917] shadow-xs font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>Full Experience</span>
            </button>
            <button
              type="button"
              onClick={() => setWidgetMode('widget')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                widgetMode === 'widget'
                  ? 'bg-white text-[#1C1917] shadow-xs font-semibold'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              <PanelRightClose className="w-3.5 h-3.5" />
              <span>Corner Widget View</span>
            </button>
          </div>

          {/* Concierge contact */}
          <a
            href="tel:+18005552872"
            className="hidden md:flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors py-1.5 px-3 rounded-full hover:bg-[#EAE1D2]/40"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Concierge: (800) 555-AURA</span>
          </a>

          {/* Reset quiz */}
          {canReset && (
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors py-1.5 px-3 rounded-full border border-[#D8CEBE] hover:border-[#1C1917] bg-white/70"
              title="Restart consultation quiz"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Start Over</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
