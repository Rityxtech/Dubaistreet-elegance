import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Wrench, 
  FlaskConical, 
  Clock, 
  Users 
} from 'lucide-react';

export default function BanknoteEstimator() {
  const [condition, setCondition] = useState('stained');
  const [volume, setVolume] = useState('250000');
  const [currency, setCurrency] = useState('AED');
  const [serviceType, setServiceType] = useState('equipment-chemical');

  const conditions = [
    { id: 'stained', label: 'Stained / Dye-Coated', desc: 'Accidental ink, security dyes, or environmental staining' },
    { id: 'moisture', label: 'Moisture & Water Damaged', desc: 'Humidity, mildew, or water exposure discoloration' },
    { id: 'oxidized', label: 'Oxidized / Chemical Residue', desc: 'Aged mineral crusts and surface chemical oxidation' },
    { id: 'coated', label: 'Protective Film / Coated', desc: 'Heavy preservation film requiring specialized dissolution' },
  ];

  const volumes = [
    { label: '$25K', val: '25000', tier: 'Small Batch Assessment' },
    { label: '$100K', val: '100000', tier: 'Standard Commercial' },
    { label: '$250K', val: '250000', tier: 'Corporate Tranche' },
    { label: '$1M+', val: '1000000', tier: 'High-Volume Industrial' },
  ];

  const currencies = [
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SR' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'OTHER', name: 'Other Asian Currencies', symbol: '¤' },
  ];

  // Dynamic recommendation engine
  const numVolume = parseInt(volume, 10) || 100000;
  let recommendedSolution = 'SSD Universal Solution (Grade A)';
  let recommendedEquipment = 'Compact Ultrasonic Cleaner';
  let estimatedTime = '30 - 45 Minutes';
  let technicianNeed = 'Standard Guidance Included';

  if (condition === 'stained' || condition === 'coated') {
    recommendedSolution = 'SSD Automatic Chemical Solution + Activation Powder';
    recommendedEquipment = numVolume >= 250000 
      ? 'Automated Multi-Tranche Digital Cleaning Unit' 
      : 'Precision Ultrasonic Conservation Machine';
    estimatedTime = numVolume >= 1000000 ? '2 - 3 Hours (Full Batch)' : '45 - 60 Minutes';
    technicianNeed = numVolume >= 250000 ? 'In-Person Technician Recommended' : 'Direct Support Included';
  } else if (condition === 'oxidized') {
    recommendedSolution = 'Caluanie Muelear Oxidize Formulation (Refined)';
    recommendedEquipment = 'Chemical Immersion Bath & Neutralization Chamber';
    estimatedTime = '20 - 40 Minutes';
    technicianNeed = 'Strict Safety Protocol Handling';
  } else {
    recommendedSolution = 'Gentle De-moisturizing & Fiber Neutralizing Agent';
    recommendedEquipment = 'Controlled Thermal Restoration Chamber';
    estimatedTime = '1 - 2 Hours';
    technicianNeed = 'Laboratory Preservation Protocol';
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Dubai Street Baron. I would like an indicative assessment for banknote conservation.\n- Currency: ${currency}\n- Estimated Batch Volume: ${currencies.find(c => c.code === currency)?.symbol || '$'}${numVolume.toLocaleString()}\n- Condition: ${conditions.find(c => c.id === condition)?.label}\n- Recommended Solution: ${recommendedSolution}\n- Please connect me with a technician for consultation or appointment in Dubai.`
  );

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 p-4 sm:p-6 lg:p-7">
      
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-100">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide">
            <FlaskConical className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Assessment Tool</span>
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">
            Banknote Conservation & Chemical Requirement Estimator
          </h3>
          <span className="hidden md:inline-block text-xs text-slate-500 font-medium">
            &bull; Tailored equipment & chemical matching for genuine currency
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 text-[11px] font-bold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dubai Technicians On-Call</span>
          </span>
        </div>
      </div>

      {/* Main Selection Grid */}
      <div className="py-4 sm:py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Left: Input Selection (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Step 1: Note Condition */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
              1. Select Banknote Condition
            </label>
            <div className="grid grid-cols-2 gap-2">
              {conditions.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCondition(c.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    condition === c.id
                      ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/10'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900">{c.label}</p>
                  <p className="text-[10px] text-slate-500 truncate">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Batch Volume & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                2. Approximate Tranche Value
              </label>
              <div className="grid grid-cols-4 gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
                {volumes.map((v) => (
                  <button
                    key={v.val}
                    type="button"
                    onClick={() => setVolume(v.val)}
                    className={`py-1.5 text-center text-xs font-bold rounded-lg transition-all ${
                      volume === v.val
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                3. Currency Denomination
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} - {c.name} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Right: Automated Recommendation Box (5 Cols) */}
        <div className="lg:col-span-5 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-3 shadow-md">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Preservation Recommendation
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Dubai Lab Protocol</span>
            </div>

            <div className="mt-3 space-y-2.5">
              <div>
                <p className="text-[11px] text-slate-400">Chemical Formulation:</p>
                <p className="text-xs sm:text-sm font-bold text-amber-300">{recommendedSolution}</p>
              </div>

              <div>
                <p className="text-[11px] text-slate-400">Recommended Machinery:</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">{recommendedEquipment}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 block">Est. Duration</span>
                  <span className="text-xs font-bold text-slate-200">{estimatedTime}</span>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
                  <span className="text-[10px] text-slate-400 block">Technician Level</span>
                  <span className="text-xs font-bold text-emerald-400">{technicianNeed}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Formulated strictly for genuine banknote fiber protection</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Action Strip */}
      <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Zero security feature degradation
          </span>
          <span className="hidden md:flex items-center gap-1.5 font-medium">
            <Users className="w-4 h-4 text-amber-600" />
            In-person demonstration available in Dubai
          </span>
        </div>

        <a
          href={`https://wa.me/447700900077?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 sm:h-11 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
          <span>Consult Technical Specialist</span>
        </a>

      </div>

    </div>
  );
}
