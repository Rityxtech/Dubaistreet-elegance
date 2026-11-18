import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  MessageSquare
} from 'lucide-react';

export default function AdvisoryPage() {
  const whatsappUrl = "https://wa.me/447865039625?text=Hello%20Global%20Liquidity%20Trade%20Desk,%20I%20am%20interested%20in%20Corporate%20Treasury%20and%20FX%20Advisory%20services.";

  const pillars = [
    {
      title: 'Balance Sheet FX Exposure Hedging',
      desc: 'Protect operating margins and gross margins from erratic foreign currency swings. We construct tailored hedging policies, deliverable forward contracts, and currency collars to insulate corporate profitability.',
      features: ['Quantified Value-at-Risk (VaR) portfolio assessment', 'Forward contract duration matching', 'Dynamic hedge ratios for multinational balance sheets']
    },
    {
      title: 'Global Treasury Liquidity Architecture',
      desc: 'Design and deploy centralized multi-currency pooling, sweeping, and virtual treasury structures across London, New York, Dubai, and emerging market hubs to minimize idle cash friction.',
      features: ['Cross-border cash pooling & automated netting', 'Minimization of double FX conversion friction', 'Optimized yield on segregated operational reserves']
    },
    {
      title: 'Supply Chain Invoicing Optimization',
      desc: 'Advise multinational procurement teams on optimizing supplier invoice currency denominations. Avoid suppliers loading heavy risk buffers into local currency price quotes.',
      features: ['Bilateral currency agreement structuring', 'Vendor invoice routing through low-spread conduits', 'Escrow-backed milestone procurement payments']
    },
    {
      title: 'Capital Repatriation & Cross-Border Structuring',
      desc: 'Navigate stringent central bank foreign exchange controls, repatriation regulations, dividend remittances, and intercompany debt servicing with complete regulatory adherence.',
      features: ['Compliance with Central Bank circulars & guidelines', 'Clean legal origin of funds certification', 'Tax-efficient cross-border remittance routing']
    }
  ];

  const caseStudies = [
    {
      sector: 'Multinational FMCG & Manufacturing',
      headline: 'Insulating $120M Annual Raw Material Import Exposure',
      metrics: '14.8% Cost Slippage Prevented',
      image: '/images/caluanie-muelear-oxidize.png',
      summary: 'A premier industrial manufacturing group operating across GCC and Southeast Asia faced recurring margin degradation due to sudden local currency volatility. We structured a 180-day deliverable forward hedge matrix with automated escrow replenishment, locking in procurement margins and eliminating import line stoppages.'
    },
    {
      sector: 'Energy & Infrastructure EPC',
      headline: 'Multi-Tranche Equipment Procurement Settlement',
      metrics: '22-Day Cycle Time Reduction',
      image: '/images/banknote-counter-machine.png',
      summary: 'An international energy infrastructure consortium required milestone-based supplier payments across European and Asian machinery manufacturers. We established a multi-currency escrow facility with instantaneous SWIFT MT103 confirmation, saving 22 days per delivery cycle and eliminating bank dispute fees.'
    },
    {
      sector: 'Global Technology & Cross-Border Payroll',
      headline: 'Unified Treasury & Distributed Workforce Settlement',
      metrics: 'Zero Counterparty Default Rate',
      image: '/images/banknote-conservation-inspection.png',
      summary: 'A fast-growing tech firm with engineering talent across 8 emerging markets struggled with high retail wire fees and erratic delivery times. Our advisory team implemented centralized netting and local wholesale conduits, slashing transaction overhead by 42%.'
    }
  ];

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* PROMINENT PHOTOGRAPHIC HERO BANNER */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 bg-slate-900 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-street-baron-laboratory.png"
            alt="Corporate Treasury & Executive Strategy Boardroom"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/40" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Institutional Strategic Counsel
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Corporate Treasury & FX Risk Advisory
          </h1>
          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Strategic currency risk management, balance sheet insulation, and compliant cross-border liquidity routing for multinational corporate enterprises.
          </p>
        </div>
      </section>

      {/* STRATEGIC PILLARS GRID */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Four Strategic Advisory Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Transforming foreign exchange from an operational vulnerability into a competitive treasury advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 font-extrabold font-mono text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {pillar.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900"
                  >
                    <span>Schedule Strategic Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDIES WITH HIGH QUALITY LOCAL PHOTOGRAPHY */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Proven Institutional Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real-World Treasury Case Studies
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              How global corporations deploy our advisory models to safeguard profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.headline}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {cs.sector}
                    </span>
                  </div>

                  <div className="p-6">
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {cs.headline}
                    </h4>
                    <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-mono mb-3">
                      Result: {cs.metrics}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                    <span>Audited Corporate Mandate</span>
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADVISORY ENGAGEMENT PROTOCOL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Engagement Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How We Partner with Your CFO & Treasury Office
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We function as an elite extension of your executive financial team. We do not offer retail speculative trading; our advisory is anchored exclusively in commercial cash flow predictability and deliverable settlement integrity.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Phase 1: Exposure Diagnostic</h4>
                  <p className="text-xs text-slate-600">Complete forensic audit of your historical currency conversions, supplier invoicing terms, and currency mismatch risks.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Phase 2: Tailored Hedging Architecture</h4>
                  <p className="text-xs text-slate-600">Mathematical modeling of forward lock ratios, trigger points, and multi-currency clearing conduit setups.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Phase 3: Guaranteed Deliverable Execution</h4>
                  <p className="text-xs text-slate-600">Seamless execution of agreed tranches through our wholesale dealer network with full SWIFT documentation.</p>
                </div>
              </div>
            </div>

            {/* Quick Action Advisory Card with Image */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/images/caluanie-muelear-oxidize.png"
                  alt="Strategic Advisory Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 flex items-end">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Executive Strategic Consultation
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Request a Confidential Treasury Consultation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engage directly with our Senior Strategic Advisors to review your corporate FX exposure and explore wholesale deliverable solutions.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Non-Disclosure Agreement (NDA) executed upfront</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Bespoke Value-at-Risk (VaR) diagnostic report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Direct access to Senior Dealing desk partners</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-amber-500/20"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-950" />
                    <span>Connect with Advisory Desk</span>
                  </a>
                  <Link
                    to="/contact"
                    className="w-full text-center py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs tracking-wider"
                  >
                    Submit Corporate Consultation Form
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
