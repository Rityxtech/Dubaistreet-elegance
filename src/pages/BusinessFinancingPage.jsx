import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  TrendingUp,
  Building2,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Calculator,
  CalendarCheck,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

export default function BusinessFinancingPage() {
  // Facility Calculator State
  const [loanAmount, setLoanAmount] = useState(250000);
  const [tenureMonths, setTenureMonths] = useState(12);
  const [facilityType, setFacilityType] = useState('working-capital');

  // Competitive institutional interest rate estimation (4.5% to 7.5% per annum based on tenure/tier)
  const annualRate = facilityType === 'equipment' ? 0.052 : facilityType === 'trade' ? 0.048 : 0.058;
  const monthlyRate = annualRate / 12;
  const monthlyPayment = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );
  const totalRepayment = monthlyPayment * tenureMonths;
  const totalCost = totalRepayment - loanAmount;

  const facilityInquiryMessage = encodeURIComponent(
    `Hello Dubai Street Baron Finance Desk. I am an existing business owner inquiring about a commercial loan facility.\n\nFacility Type: ${
      facilityType === 'equipment'
        ? 'Equipment & Machinery Financing'
        : facilityType === 'trade'
        ? 'Trade & Supply Procurement Credit'
        : 'Working Capital Facility'
    }\nRequested Amount: $${loanAmount.toLocaleString()}\nTenure: ${tenureMonths} Months\nEstimated Monthly: $${monthlyPayment.toLocaleString()}/mo\n\nPlease advise on documentation and application timeline.`
  );

  const directDeskUrl = `https://wa.me/447865039625?text=${facilityInquiryMessage}`;

  const facilities = [
    {
      id: 'working-capital',
      icon: TrendingUp,
      title: 'Working Capital Credit Facilities',
      amount: '$50,000 – $2,500,000+',
      tenure: '6 to 24 Months Revolving',
      description: 'Revolving liquidity facilities designed to bridge cashflow cycles, manage bulk operating expenses, finance receivables, and maintain steady liquidity across Asia and GCC trade corridors.',
      benefits: [
        'Rapid credit underwriting based on operational cash flow',
        'Flexible monthly interest-only or amortizing structures',
        'Zero penalty for early facility settlement',
        'Available in USD, AED, SAR, or EUR'
      ]
    },
    {
      id: 'equipment',
      icon: Landmark,
      title: 'Machinery & Equipment Capital Loans',
      amount: '$25,000 – $1,500,000',
      tenure: '12 to 36 Months',
      description: 'Asset-backed Capex financing to acquire automated banknote cleaning machinery, DSB-800 multi-tranche ultrasonic baths, high-speed sorting counters, and complete laboratory installations.',
      benefits: [
        'Finance up to 90% of certified equipment invoice value',
        'Machinery itself acts as primary collateral',
        'Direct factory settlement to authorized manufacturers',
        'Bundled with on-site technician commissioning & training'
      ]
    },
    {
      id: 'trade',
      icon: Coins,
      title: 'Trade & Chemical Supply Credit',
      amount: '$30,000 – $1,000,000+',
      tenure: '30 to 180 Days Tranches',
      description: 'Short-term procurement credit lines for industrial operations requiring bulk shipments of SSD universal chemical solutions, Caluanie Muelear Oxidize, and activation compounds without draining operating reserves.',
      benefits: [
        'Direct disbursement against chemical pro-forma invoices',
        'Staggered drawdowns aligned with project fulfillment',
        'Air cargo logistics coordination included',
        'Guaranteed purity documentation with each batch'
      ]
    },
    {
      id: 'expansion',
      icon: Building2,
      title: 'Commercial Expansion & Bridge Credit',
      amount: '$100,000 – $5,000,000',
      tenure: '12 to 36 Months',
      description: 'Medium-term debt financing for established enterprise owners expanding regional physical operations, setting up secondary laboratories, or acquiring commercial real estate facilities in the UAE and GCC.',
      benefits: [
        'Custom grace period during facility build-out',
        'Collateral-flexible credit structuring',
        'Structured cross-border disbursement options',
        'Dedicated senior corporate finance director'
      ]
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Confidential Consultation',
      desc: 'Submit your financing requirements online or schedule a private in-person meeting at our Dubai corporate office.'
    },
    {
      step: '02',
      title: 'Cashflow & Entity Review',
      desc: 'Our credit committee reviews 6-month corporate operating bank statements and trade license verification.'
    },
    {
      step: '03',
      title: 'Term Sheet & Facility Agreement',
      desc: 'Receive transparent loan terms, repayment schedule, and facility covenants with zero hidden fees.'
    },
    {
      step: '04',
      title: 'Wire Disbursement & Execution',
      desc: 'Funds are wired directly to your designated corporate bank account in AED, USD, SAR, or EUR.'
    }
  ];

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-street-baron-laboratory.webp"
            alt="Corporate Business Financing"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs">
            <Landmark className="w-4 h-4 text-amber-400" />
            <span>Commercial Credit for Operating Enterprises</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Business Loans &amp; Working Capital for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Existing Business Owners
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl leading-relaxed font-normal drop-shadow-sm">
            Empowering operating companies across the GCC and Asia with non-dilutive debt financing, machinery acquisition capital, trade credit, and customized liquidity facilities.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={directDeskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-12 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Direct Facility Inquiry</span>
            </a>

            <Link
              to="/contact"
              className="h-11 sm:h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>Schedule Dubai Meeting</span>
            </Link>
          </div>

          {/* Quick Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>$50K to $5M+ Tranches</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>48-Hour Decision Window</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>UAE, Saudi Arabia &amp; Asian Hubs</span>
            </span>
          </div>
        </div>
      </section>

      {/* CORE FINANCING FACILITIES GRID */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Credit Structuring
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored Commercial Debt Facilities
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2">
              Flexible credit solutions structured around real enterprise cash flows, contract receivables, and tangible machinery assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {facilities.map((fac) => {
              const IconComp = fac.icon;
              return (
                <div
                  key={fac.id}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-wide">
                        {fac.amount}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {fac.title}
                      </h3>
                      <span className="text-xs font-semibold text-amber-700">
                        Tenure: {fac.tenure}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/70">
                      {fac.benefits.map((b, bidx) => (
                        <div key={bidx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={`https://wa.me/447865039625?text=${encodeURIComponent(
                        `Hello Dubai Street Baron Finance Desk. I would like to inquire about the ${fac.title} ($${fac.amount}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 hover:text-slate-950 text-white font-bold text-xs tracking-wide transition-all shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Facility Quotation</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE LOAN REPAYMENT & FACILITY ESTIMATOR */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white border-y border-slate-800">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Explanatory Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Facility Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Simulate Your Commercial Credit Facility
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Estimate your monthly amortization schedule based on your requested liquidity and repayment horizon. Actual rates depend on entity underwriting, operating cash flows, and collateral tier.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-semibold">Zero Dilution of Equity</strong>
                    Maintain 100% ownership of your operating enterprise while scaling operations.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block font-semibold">Multi-Currency Wire</strong>
                    Disbursements delivered via direct corporate wire in AED, USD, SAR, or EUR.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calculator Interactive Card */}
            <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md space-y-4 sm:space-y-5">
              
              {/* Facility Type Picker */}
              <div>
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                  Select Facility Modality
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: 'working-capital', label: 'Working Capital' },
                    { id: 'equipment', label: 'Equipment / Capex' },
                    { id: 'trade', label: 'Trade Procurement' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setFacilityType(tab.id)}
                      className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all text-center ${
                        facilityType === tab.id
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Amount Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Facility Amount
                  </label>
                  <span className="text-base sm:text-2xl font-black font-mono text-amber-400">
                    ${loanAmount.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2500000"
                  step="25000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$50,000</span>
                  <span>$1,000,000</span>
                  <span>$2,500,000+</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Repayment Tenure
                  </label>
                  <span className="text-sm sm:text-lg font-black font-mono text-white">
                    {tenureMonths} Months
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {[6, 12, 24, 36].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenureMonths(m)}
                      className={`py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all ${
                        tenureMonths === m
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {m} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Outputs Summary Card */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-amber-500/30 grid grid-cols-3 gap-2 sm:gap-4">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Monthly Est.
                  </span>
                  <div className="text-sm sm:text-2xl font-black font-mono text-amber-400 mt-0.5">
                    ${monthlyPayment.toLocaleString()}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 hidden sm:inline">Amortized</span>
                </div>

                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Indicative Rate
                  </span>
                  <div className="text-sm sm:text-2xl font-black font-mono text-white mt-0.5">
                    {(annualRate * 100).toFixed(1)}%
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 hidden sm:inline">p.a. tier</span>
                </div>

                <div className="border-l border-slate-800 pl-2 sm:pl-4">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Total Repay
                  </span>
                  <div className="text-sm sm:text-2xl font-black font-mono text-slate-200 mt-0.5">
                    ${totalRepayment.toLocaleString()}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 hidden sm:inline">Principal + int.</span>
                </div>
              </div>

              {/* Execution CTA Button */}
              <a
                href={directDeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 sm:h-12 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Submit Facility Inquiry for ${loanAmount.toLocaleString()}</span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* APPROVAL TIMELINE */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Execution Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Rapid 4-Step Commercial Underwriting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transparent, discreet, and fast credit structuring without bureaucratic red tape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono text-amber-500/25 absolute top-3 right-4 select-none">
                  {st.step}
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 font-bold text-xs flex items-center justify-center mb-3">
                  {st.step}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ELIGIBILITY & IN-PERSON DUBAI APPOINTMENTS BANNER */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dubai International Financial Centre &amp; Deira Hub</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Schedule a Confidential Financing Review in Dubai
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Meet with our corporate credit directors to discuss bespoke debt covenants, high-volume tranche facilities, or equipment financing terms in complete privacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={directDeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
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