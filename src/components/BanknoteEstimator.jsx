import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  FlaskConical, 
  Clock, 
  Cpu,
  Layers,
  Droplets,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function BanknoteEstimator() {
  const [conditionId, setConditionId] = useState('stained');

  const options = [
    {
      id: 'stained',
      label: 'Ink & Dye Stained',
      icon: Droplets,
      chemical: 'SSD Automatic Solution + Activation Powder',
      machine: 'Automated Digital Ultrasonic Unit',
      time: '30 – 45 Mins',
      safety: '100% Fiber Safe',
    },
    {
      id: 'oxidized',
      label: 'Oxidized & Crust',
      icon: Flame,
      chemical: 'Caluanie Muelear Oxidize Formulation (Refined)',
      machine: 'Chemical Immersion Bath & De-Oxidation Chamber',
      time: '20 – 40 Mins',
      safety: 'UV & Thread Safe',
    },
    {
      id: 'coated',
      label: 'Coated / Wax Film',
      icon: Layers,
      chemical: 'SSD Universal Solution (Grade A) + Solvent',
      machine: 'High-Frequency Ultrasonic Cleaning Unit',
      time: '40 – 60 Mins',
      safety: 'Zero Fiber Wear',
    },
    {
      id: 'moisture',
      label: 'Moisture Damage',
      icon: FlaskConical,
      chemical: 'De-Moisturizing & Fiber Neutralizing Agent',
      machine: 'Controlled Thermal Restoration Chamber',
      time: '45 – 60 Mins',
      safety: 'Texture Restored',
    },
  ];

  const current = options.find((o) => o.id === conditionId) || options[0];

  const inquiryMessage = encodeURIComponent(
    `Hello Dubai Street Baron. I used your Chemical & Machine Matcher:\n\n- Note Condition: ${current.label}\n- Recommended Chemical: ${current.chemical}\n- Recommended Equipment: ${current.machine}\n- Estimated Treatment Time: ${current.time}\n\nPlease share price, availability, and delivery or technician consultation in Dubai.`
  );

  const directUrl = `https://wa.me/447865039625?text=${inquiryMessage}`;

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-sm p-3.5 sm:p-5 transition-all">
      
      {/* Header: Concise & Crystal Clear Purpose */}
      <div className="text-center sm:text-left mb-3">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] sm:text-xs font-bold mb-1">
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Chemical &amp; Machine Matcher</span>
        </div>
        <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 tracking-tight">
          What condition are your banknotes in?
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-500">
          Tap a condition below to instantly see the recommended chemical and machine.
        </p>
      </div>

      {/* 4 Clean Condition Buttons - Compact 2x2, Zero Cut-Off Text */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-3">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = opt.id === conditionId;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setConditionId(opt.id)}
              className={`p-2 sm:p-2.5 rounded-xl border text-left transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/20 text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-medium'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg shrink-0 ${
                  isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-200/80 text-slate-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs leading-tight font-bold text-slate-900">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Unified Live Matched Result Card (Compact, All-in-One) */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950 text-white border border-slate-800 space-y-2.5">
        
        {/* Recommended Chemical */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
            <FlaskConical className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 block">
              Recommended Chemical Formulation
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-white leading-snug block">
              {current.chemical}
            </span>
          </div>
        </div>

        {/* Recommended Machine */}
        <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800/80">
          <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 shrink-0 mt-0.5">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
              Recommended Cleaning Machinery
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug block">
              {current.machine}
            </span>
          </div>
        </div>

        {/* Specs & Safe Guarantee Strip */}
        <div className="flex items-center justify-between text-[10px] text-slate-300 pt-2 border-t border-slate-800/80">
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Process: {current.time}</span>
          </span>
          <span className="flex items-center gap-1 font-medium text-emerald-400">
            <ShieldCheck className="w-3 h-3" />
            <span>{current.safety}</span>
          </span>
          <span className="hidden sm:inline text-slate-400">
            Dubai Lab Ready
          </span>
        </div>

      </div>

      {/* Action Button: Pre-filled WhatsApp routing strictly to +447865039625 */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full h-10 sm:h-11 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
        <span>Inquire About This Chemical &amp; Machine</span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-950 shrink-0" />
      </a>

    </div>
  );
}
