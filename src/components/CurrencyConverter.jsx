import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  MessageSquare
} from 'lucide-react';

const RATES = {
  'USD-AED': 3.6725,
  'USD-SAR': 3.7505,
  'USD-SGD': 1.3420,
  'USD-HKD': 7.8210,
  'USD-JPY': 154.60,
  'USD-CNY': 7.2340,
  'USD-INR': 83.45,
  'USD-MYR': 4.7150,
  'EUR-USD': 1.0860,
  'GBP-USD': 1.2940,
  'EUR-AED': 3.9850,
  'GBP-AED': 4.6520,
  'USD-EUR': 0.9208,
  'USD-GBP': 0.7728,
};

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
];

export default function CurrencyConverter() {
  const [sendCurrency, setSendCurrency] = useState('USD');
  const [receiveCurrency, setReceiveCurrency] = useState('AED');
  const [amount, setAmount] = useState('250000');
  const [settlementSpeed, setSettlementSpeed] = useState('same-day');

  const pairKey = `${sendCurrency}-${receiveCurrency}`;
  const reverseKey = `${receiveCurrency}-${sendCurrency}`;
  
  let baseRate = 1;
  if (RATES[pairKey]) {
    baseRate = RATES[pairKey];
  } else if (RATES[reverseKey]) {
    baseRate = 1 / RATES[reverseKey];
  } else if (sendCurrency === receiveCurrency) {
    baseRate = 1;
  } else {
    const rateToUSD = sendCurrency === 'USD' ? 1 : (RATES[`${sendCurrency}-USD`] || (1 / (RATES[`USD-${sendCurrency}`] || 1)));
    const rateFromUSD = receiveCurrency === 'USD' ? 1 : (RATES[`USD-${receiveCurrency}`] || (1 / (RATES[`${receiveCurrency}-USD`] || 1)));
    baseRate = rateToUSD * rateFromUSD;
  }

  const numAmount = parseFloat(amount) || 0;
  let spreadBenefit = 'Standard Wholesale Spread';
  let tierLabel = 'Tier 3 Commercial Settlement';
  
  if (numAmount >= 1000000) {
    spreadBenefit = '0.25% Sovereign Spread Advantage';
    tierLabel = 'Tier 1 Enterprise/Sovereign';
  } else if (numAmount >= 250000) {
    spreadBenefit = '0.15% Treasury Spread Advantage';
    tierLabel = 'Tier 2 Corporate Treasury';
  }

  const convertedTotal = (numAmount * baseRate).toLocaleString('en-US', {
    minimumFractionDigits: baseRate < 10 ? 4 : 2,
    maximumFractionDigits: baseRate < 10 ? 4 : 2,
  });

  const sendSymbol = CURRENCIES.find((c) => c.code === sendCurrency)?.symbol || '$';
  const receiveSymbol = CURRENCIES.find((c) => c.code === receiveCurrency)?.symbol || 'د.إ';

  const handleSwap = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Global Liquidity Trade Desk. I need a firm executable quote for exchanging ${sendCurrency} ${numAmount.toLocaleString()} to ${receiveCurrency}. Settlement preference: ${settlementSpeed === 'same-day' ? 'T+0 Same-Day Wire' : 'Forward Hedged Contract'}.`
  );

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 p-4 sm:p-6 lg:p-7">
      
      {/* Top Header Row: Title & Badge on Left, Volume Presets & Live Feed on Right */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-100">
        
        {/* Title & Badge */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Liquidity Estimator</span>
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">
            Institutional FX Quote Calculator
          </h3>
          <span className="hidden md:inline-block text-xs text-slate-500 font-medium">
            &bull; Real-time wholesale indicative pricing with zero hidden markups
          </span>
        </div>

        {/* Right side: Volume Presets & Feed Badge */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 hidden sm:inline">Volume:</span>
            {[
              { label: '$100K', val: '100000' },
              { label: '$250K', val: '250000' },
              { label: '$1M', val: '1000000' },
              { label: '$5M', val: '5000000' },
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setAmount(preset.val)}
                className={`py-1 px-2.5 sm:px-3 rounded-lg text-xs font-bold transition-all ${
                  amount === preset.val
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 text-[11px] font-bold text-emerald-800 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Desk Feed</span>
          </div>
        </div>

      </div>

      {/* Main Conversion Grid: 2 Full-Width Columns with Central Swap */}
      <div className="py-4 sm:py-5 grid grid-cols-1 lg:grid-cols-11 gap-3 sm:gap-4 items-center">
        
        {/* Send Currency Box */}
        <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-500/15 transition-all">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Corporate Client Sends
            </span>
            <span className="text-[11px] text-amber-700 font-bold">{tierLabel}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0 flex items-center">
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-400 mr-2 shrink-0">
                {sendSymbol}
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-xl sm:text-2xl font-extrabold text-slate-900 font-mono focus:outline-none placeholder-slate-400 min-w-0"
                placeholder="0.00"
              />
            </div>
            
            <select
              value={sendCurrency}
              onChange={(e) => setSendCurrency(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs cursor-pointer shrink-0"
            >
              {CURRENCIES.map((c) => (
                <option key={`send-${c.code}`} value={c.code}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="lg:col-span-1 flex justify-center">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-white hover:bg-amber-500 hover:text-slate-950 text-slate-700 transition-all duration-200 border border-slate-200 shadow-sm flex items-center justify-center group active:scale-90"
            title="Swap Currencies"
            aria-label="Swap Currencies"
          >
            <ArrowRightLeft className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          </button>
        </div>

        {/* Receive Currency Box */}
        <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-500/15 transition-all">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Beneficiary Receives (Indicative)
            </span>
            <span className="text-[11px] text-emerald-700 font-bold">Zero Fee Wire Routing</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0 flex items-center">
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-600 mr-2 shrink-0">
                {receiveSymbol}
              </span>
              <div className="w-full text-xl sm:text-2xl font-extrabold text-amber-600 font-mono truncate">
                {convertedTotal}
              </div>
            </div>
            
            <select
              value={receiveCurrency}
              onChange={(e) => setReceiveCurrency(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs cursor-pointer shrink-0"
            >
              {CURRENCIES.map((c) => (
                <option key={`receive-${c.code}`} value={c.code}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Settlement Speed & Direct WhatsApp CTA */}
      <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
        
        {/* Settlement Speed Pills & Mid-Rate Info */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
          
          {/* Speed Toggle Pills */}
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setSettlementSpeed('same-day')}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-bold text-xs transition-all ${
                settlementSpeed === 'same-day'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>T+0 Same-Day Wire</span>
            </button>

            <button
              type="button"
              onClick={() => setSettlementSpeed('forward')}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-bold text-xs transition-all ${
                settlementSpeed === 'forward'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Forward Hedged (30-90D)</span>
            </button>
          </div>

          {/* Indicative Rate Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
            <span className="text-slate-400">Mid-Rate:</span>
            <span className="font-mono font-bold text-slate-800">
              1 {sendCurrency} = {baseRate < 10 ? baseRate.toFixed(4) : baseRate.toLocaleString()} {receiveCurrency}
            </span>
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{spreadBenefit}</span>
          </div>

        </div>

        {/* Direct CTA Button */}
        <a
          href={`https://wa.me/447865039625?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 sm:h-11 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
          <span>Lock Executable Quotation</span>
        </a>

      </div>

    </div>
  );
}
