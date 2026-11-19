import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Globe,
  Lock,
  Building,
  CalendarCheck,
  MapPin,
  Clock,
  Coins,
  Repeat,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function CurrencyExchangePage() {
  // Supported Currencies: Strictly Asia, GCC & Major Global
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', rateToUSD: 1.0, flag: '🇺🇸' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rateToUSD: 0.2723, flag: '🇦🇪' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', rateToUSD: 0.2667, flag: '🇸🇦' },
    { code: 'QAR', name: 'Qatari Riyal', symbol: 'QAR', rateToUSD: 0.2747, flag: '🇶🇦' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rateToUSD: 0.745, flag: '🇸🇬' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', rateToUSD: 0.128, flag: '🇭🇰' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rateToUSD: 0.0066, flag: '🇯🇵' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rateToUSD: 0.138, flag: '🇨🇳' },
    { code: 'EUR', name: 'Euro', symbol: '€', rateToUSD: 1.085, flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', rateToUSD: 1.285, flag: '🇬🇧' }
  ];

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('AED');
  const [amount, setAmount] = useState(100000);
  const [settlementSpeed, setSettlementSpeed] = useState('same-day');

  // Calculate Exchange
  const fromRate = currencies.find((c) => c.code === fromCurrency)?.rateToUSD || 1.0;
  const toRate = currencies.find((c) => c.code === toCurrency)?.rateToUSD || 1.0;
  const rawConverted = (amount * fromRate) / toRate;
  
  // Spread discount based on volume tier
  const spread = amount >= 250000 ? 0.0015 : amount >= 50000 ? 0.0025 : 0.004;
  const convertedAmount = rawConverted * (1 - spread);
  const effectiveRate = convertedAmount / amount;

  const exchangeInquiryMessage = encodeURIComponent(
    `Hello Dubai Street Baron FX Desk. I would like to lock an executable foreign currency exchange quote.\n\nFrom: ${amount.toLocaleString()} ${fromCurrency}\nTo Estimated: ${convertedAmount.toLocaleString(
      undefined,
      { maximumFractionDigits: 2 }
    )} ${toCurrency}\nEffective Tranche Rate: ${effectiveRate.toFixed(4)}\nSettlement Horizon: ${
      settlementSpeed === 'same-day' ? 'Same-Day (T+0)' : 'Next-Day Deliverable (T+1)'
    }\n\nPlease provide live executable treasury spread and settlement wire coordinates.`
  );

  const directDeskUrl = `https://wa.me/447865039625?text=${exchangeInquiryMessage}`;

  const modalities = [
    {
      icon: ArrowLeftRight,
      title: 'Spot Foreign Exchange & Settlement',
      tag: 'Immediate Execution',
      desc: 'Execute wholesale currency conversions at interbank-level tight spreads with immediate deliverable execution via SWIFT MT103 or GCC Central Bank real-time gross settlement systems.',
      features: [
        'Real-time firm executable pricing with zero slippage',
        'Direct settlement into corporate bank accounts',
        'Available in AED, SAR, QAR, SGD, HKD, USD, EUR, and GBP',
        'Tranche volumes from $25,000 to $10,000,000+'
      ]
    },
    {
      icon: Lock,
      title: 'Deliverable Forward Hedging Contracts',
      tag: 'Risk Management',
      desc: 'Lock future foreign exchange rates up to 12 months ahead. Essential for import/export companies, chemical equipment procurement, and multi-tranche machinery contracts.',
      features: [
        'Protect operational margins against currency depreciation',
        'Tailored settlement dates matching supplier payment milestones',
        'Flexible drawdown options prior to contract maturity',
        'Zero upfront option premium on standard deliverable forwards'
      ]
    },
    {
      icon: Coins,
      title: 'Physical Banknote Tranche Exchange',
      tag: 'Dubai Vault & CIT',
      desc: 'Institutional physical cash exchange services for commercial institutions, high-denomination collectors, and corporate travelers holding authentic paper legal tender in Dubai.',
      features: [
        'Multi-stage verification and counting on high-speed DSB units',
        'Non-destructive UV, magnetic, and infrared authentication',
        'Secure Cash-in-Transit (CIT) armored logistics coordination',
        'Conducted strictly within our secured Dubai private facility'
      ]
    }
  ];

  const corridors = [
    {
      title: 'GCC Regional Corridor',
      currencies: 'AED • SAR • QAR',
      clearing: 'Central Bank FTS & SARIE',
      speed: 'Instant / Same-Day',
      badge: 'Core Market'
    },
    {
      title: 'Asia-Pacific Financial Corridor',
      currencies: 'SGD • HKD • JPY • CNY',
      clearing: 'FAST, MEPS+ & CHATS Conduits',
      speed: 'T+0 to T+1 Settlement',
      badge: 'High-Volume'
    },
    {
      title: 'Western Reserve Currency Corridor',
      currencies: 'USD • EUR • GBP',
      clearing: 'SWIFT MT103 / Fedwire & SEPA',
      speed: 'Same-Day Deliverable',
      badge: 'Wholesale'
    }
  ];

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banknote-conservation-inspection.webp"
            alt="Foreign Currency Exchange"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
            <ArrowLeftRight className="w-4 h-4 text-amber-400" />
            <span>Wholesale Institutional FX Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Wholesale Foreign Currency Exchange &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Cross-Border Settlement
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            Institutional deliverable spot foreign exchange, forward currency hedging, and physical banknote tranche settlement across the UAE, GCC, and Asian financial centers.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={directDeskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-12 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Lock Executable Quotation</span>
            </a>

            <Link
              to="/contact"
              className="h-11 sm:h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>Dubai Desk Appointment</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Institutional Tight Spreads</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Same-Day Wire &amp; Physical Vault Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>DIFC &amp; Deira Trading Hub</span>
            </span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FX TRANCHE CALCULATOR */}
      <section className="py-6 sm:py-10 bg-slate-50/70 border-b border-slate-200/80">
        <div className="w-full max-w-[96rem] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="w-full max-w-xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-sm p-3.5 sm:p-5 transition-all">
            
            {/* Header: Concise & Crystal Clear Purpose */}
            <div className="text-center sm:text-left mb-3">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[10px] sm:text-xs font-bold mb-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Live Currency Exchange Calculator</span>
              </div>
              <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 tracking-tight">
                Simulate Your Currency Conversion
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Live wholesale indicative rates across GCC, Asian, and major global currencies.
              </p>
            </div>

            {/* Unified Conversion Card */}
            <div className="p-3 sm:p-4 rounded-xl bg-slate-950 text-white border border-slate-800 space-y-2">
              
              {/* You Send Box */}
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    You Send
                  </span>
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 font-bold text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-right min-w-0 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Amount
                  </span>
                  <input
                    type="number"
                    min="1000"
                    step="5000"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full text-right font-black font-mono text-lg sm:text-xl text-amber-400 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Swap Button Divider */}
              <div className="flex items-center justify-center -my-1 relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    const temp = fromCurrency;
                    setFromCurrency(toCurrency);
                    setToCurrency(temp);
                  }}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-slate-700 shadow-sm transition-all active:scale-90"
                  title="Swap Currencies"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* You Receive Box */}
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30 flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    You Receive (Est.)
                  </span>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="px-2 py-1 rounded-md bg-slate-800 border border-amber-500/40 font-bold text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code} className="bg-slate-900 text-white">
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-right min-w-0 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Estimated Total
                  </span>
                  <div className="font-black font-mono text-lg sm:text-xl text-white truncate">
                    {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              {/* Live Rate & Guarantee Strip */}
              <div className="flex items-center justify-between text-[10px] text-slate-300 pt-1.5 border-t border-slate-800/80">
                <span className="font-mono text-amber-300 font-semibold">
                  1 {fromCurrency} ≈ {effectiveRate.toFixed(4)} {toCurrency}
                </span>
                <span className="flex items-center gap-1 font-medium text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Tight Wholesale Spread</span>
                </span>
              </div>

            </div>

            {/* Quick Amount Pills: 4 in 1 clean line */}
            <div className="mt-2.5 flex items-center justify-between gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                Quick:
              </span>
              <div className="grid grid-cols-4 gap-1.5 flex-1">
                {[25000, 50000, 100000, 250000].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setAmount(v)}
                    className={`py-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                      amount === v
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    ${v / 1000}K
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTA Button: Direct routing to +447865039625 */}
            <a
              href={directDeskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full h-10 sm:h-11 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
              <span>Lock Executable Quote ({fromCurrency} → {toCurrency})</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            </a>

          </div>

        </div>
      </section>

      {/* CORE MODALITIES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Execution Modes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Institutional FX Capabilities
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2">
              Structured for corporate treasuries, import/export settlement, and high-volume banknote liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {modalities.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold">
                        {mod.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {mod.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {mod.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/70">
                      {mod.features.map((f, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`https://wa.me/447865039625?text=${encodeURIComponent(
                        `Hello Dubai Street Baron FX Desk. I would like to inquire about: ${mod.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-white font-bold text-xs tracking-wide transition-all shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire with FX Desk</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* REGIONAL SETTLEMENT CORRIDORS */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white border-y border-slate-800">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Cross-Border Conduits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Asian &amp; GCC Clearing Corridors
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Direct integration into domestic clearing facilities and tier-1 correspondent banks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corridors.map((c, cidx) => (
              <div
                key={cidx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {c.badge}
                  </span>
                  <Globe className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {c.title}
                </h3>
                <div className="text-2xl font-black font-mono text-amber-300">
                  {c.currencies}
                </div>
                <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Conduit:</span>
                    <span className="font-semibold text-slate-200">{c.clearing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Speed:</span>
                    <span className="font-semibold text-emerald-400">{c.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* APPOINTMENT & DUBAI DESK BANNER */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dubai International Financial Centre &amp; Deira</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Execute High-Volume Currency Tranches in Dubai
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Meet our institutional foreign exchange specialists in person to verify banknotes on high-speed counters, execute large spot conversions, or structure multi-month forward hedge contracts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Schedule Desk Meeting</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={directDeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Direct Client Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}