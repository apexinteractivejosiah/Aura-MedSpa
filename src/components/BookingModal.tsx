import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Tag,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { Treatment, LeadInfo } from '../types/quiz';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment;
  lead: LeadInfo;
  voucherCode: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  treatment,
  lead,
  voucherCode
}) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [specialist, setSpecialist] = useState('Senior Aesthetician & Laser Clinician');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM'
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleDownloadCalendar = () => {
    // Generate .ics calendar file
    const title = `Aura MedSpa: ${treatment.name} (15% VIP Voucher)`;
    const desc = `Consultation and treatment session for ${lead.name}. Applied voucher code: ${voucherCode}. Complimentary booster: ${treatment.complementaryBooster}.`;
    const location = 'Aura MedSpa & Wellness Institute, 450 Sutter St, San Francisco, CA';
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Aura MedSpa//Skin Protocol//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${location}`,
      `DTSTART:${selectedDate.replace(/-/g, '')}T150000Z`,
      `DTEND:${selectedDate.replace(/-/g, '')}T163000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Aura_MedSpa_${voucherCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1917]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#EAE1D2] rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EAE1D2] bg-white flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
              VIP Priority Consultation Request
            </span>
            <h3 className="font-serif text-2xl text-[#1C1917] font-medium">
              Reserve with 15% First-Visit Voucher
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#EAE1D2] flex items-center justify-center text-[#78716C] hover:text-[#1C1917] hover:border-[#1C1917] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {!isBooked ? (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Treatment & Discount Summary */}
              <div className="p-4 rounded-xl bg-white border border-[#EAE1D2] space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs text-[#78716C]">{treatment.category}</span>
                    <h4 className="font-serif text-lg font-semibold text-[#1C1917]">
                      {treatment.name}
                    </h4>
                    <p className="text-xs text-[#9E7D4E] font-medium">
                      + Complimentary: {treatment.complementaryBooster}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs line-through text-[#A8A29E] block">
                      ${treatment.basePrice}
                    </span>
                    <span className="text-lg font-semibold text-[#1C1917] font-mono">
                      ${treatment.discountedPrice}
                    </span>
                    <span className="text-[10px] text-[#9E7D4E] font-semibold block uppercase">
                      15% Applied
                    </span>
                  </div>
                </div>

                {/* Voucher code bar */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE1D2] text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-[#9E7D4E]" />
                    <span className="text-[#78716C]">VIP Voucher:</span>
                    <span className="font-mono font-semibold text-[#1C1917]">{voucherCode}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] text-[#9E7D4E] hover:text-[#1C1917] font-medium"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Guest Profile Details */}
              <div className="text-xs text-[#78716C] bg-[#FAF7F2] p-3 rounded-lg border border-[#EAE1D2]/80 flex items-center justify-between">
                <span>Guest: <strong className="text-[#1C1917]">{lead.name}</strong></span>
                <span>Contact: <strong className="text-[#1C1917] font-mono">{lead.phone}</strong></span>
              </div>

              {/* Date & Time selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#C5A880]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Specialist Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                  Clinician Preference
                </label>
                <select
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#D8CEBE] bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#C5A880]"
                >
                  <option value="Senior Aesthetician & Laser Clinician">
                    Senior Aesthetician & Laser Clinician
                  </option>
                  <option value="Medical Director & Aesthetic Physician">
                    Medical Director & Aesthetic Physician
                  </option>
                  <option value="First Available Certified Specialist">
                    First Available Certified Specialist
                  </option>
                </select>
              </div>

              {/* Special notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                  Specific Skin Inquiries or Medical Notes (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Any upcoming events, active prescription skincare, or pregnancy status..."
                  className="w-full p-3 rounded-xl border border-[#D8CEBE] bg-white text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Confirm Appointment & Lock In 15% Off</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#78716C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D4E]" />
                <span>Complimentary 24-Hour Rescheduling & Cancellation Policy</span>
              </div>
            </form>
          ) : (
            /* Booking Confirmed State */
            <div className="py-6 text-center space-y-5 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9E7D4E] font-semibold">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl text-[#1C1917]">
                  We look forward to welcoming you, {lead.name}
                </h3>
                <p className="text-xs text-[#78716C] max-w-md mx-auto">
                  A concierge confirmation has been dispatched to{' '}
                  <strong className="text-[#1C1917] font-mono">{lead.phone}</strong> with your appointment details and intake form.
                </p>
              </div>

              {/* Appointment Card */}
              <div className="p-5 rounded-xl bg-white border border-[#EAE1D2] text-left space-y-3 max-w-md mx-auto shadow-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#EAE1D2]">
                  <span className="text-xs text-[#78716C]">Treatment Protocol:</span>
                  <span className="text-xs font-semibold text-[#1C1917]">{treatment.name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#EAE1D2]">
                  <span className="text-xs text-[#78716C]">Reserved Date & Time:</span>
                  <span className="text-xs font-semibold text-[#1C1917]">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#EAE1D2]">
                  <span className="text-xs text-[#78716C]">Locked-In Pricing:</span>
                  <span className="text-xs font-semibold font-mono text-[#1C1917]">${treatment.discountedPrice} (15% Savings Applied)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#78716C]">Voucher Passcode:</span>
                  <span className="text-xs font-mono font-bold text-[#9E7D4E]">{voucherCode}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#D8CEBE] bg-white text-xs font-medium text-[#1C1917] hover:border-[#1C1917] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#C5A880]" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#332E2A] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
