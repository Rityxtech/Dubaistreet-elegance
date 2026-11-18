import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FlaskConical, 
  Users, 
  Wrench, 
  FileText, 
  ArrowRight, 
  MessageSquare,
  HelpCircle,
  Compass
} from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/447700900077?text=Hello%20Dubai%20Street%20Baron,%20I%20would%20like%20to%20inquire%20about%20your%20banknote%20conservation%20services.";

  const services = [
    {
      id: 'assessment',
      title: '1. Banknote Condition Assessment',
      subtitle: 'Scientific evaluation of banknote substrates, ink stability, and stain depth',
      image: '/images/banknote-conservation-inspection.png',
      description: 'Understand the exact physical condition of genuine banknotes affected by stains, moisture, discoloration, or environmental exposure. Our specialists analyze whether the currency can be safely restored without compromising delicate watermarks, security threads, holograms, or intaglio printing.',
      benefits: [
        'Non-destructive spectroscopic and chemical spot testing',
        'Evaluation of genuine currency substrate and paper fiber integrity',
        'Clear assessment report with feasibility and recommended treatment',
        'Direct recommendation if notes should be submitted to central banks'
      ]
    },
    {
      id: 'preservation',
      title: '2. Banknote Preservation Guidance',
      subtitle: 'Best-practice conservation techniques for private collections and commercial holdings',
      image: '/images/currency-inspection-glove.png',
      description: 'Learn responsible handling, storage, and preservation practices that prevent further deterioration. Cleaning is not appropriate for every note, especially where it risks damaging security features. We provide professional advice on environmental control, pH-neutral envelopes, and archival storage.',
      benefits: [
        'Safe handling protocols to avoid oil transfer and surface scuffing',
        'Climate-controlled storage guidelines for high-humidity regions',
        'Guidance on preserving serial numbers and security micro-lettering',
        'Tailored preservation manuals for financial archives and collectors'
      ]
    },
    {
      id: 'equipment',
      title: '3. Professional Cleaning Equipment Supply',
      subtitle: 'Industrial-grade ultrasonic and automated digital cleaning machinery',
      image: '/images/banknote-counter-machine.png',
      description: 'Explore high-precision cleaning machines designed for legitimate commercial maintenance and currency restoration applications. All equipment features automated digital cycle controls, variable-frequency ultrasonic transducers, and temperature-regulated drying chambers.',
      benefits: [
        'Commercial multi-tranche capacity handling up to 50,000 notes/hour',
        'Variable frequency ultrasonic cavitation designed for banknote paper',
        'Automated chemical circulation and multi-stage filtration baths',
        'Full operational training and manufacturer maintenance support'
      ]
    },
    {
      id: 'chemicals',
      title: '4. Chemical Solution Formulations & Consultation',
      subtitle: 'Certified SSD chemical solutions, activation catalysts, and Caluanie Muelear Oxidize',
      image: '/images/caluanie-muelear-oxidize.png',
      description: 'Our technical team welcomes inquiries regarding chemical suitability, material safety data, and correct handling procedures. We supply certified SSD automatic solutions, activation powders, and high-purity Caluanie Muelear Oxidize with clear instructions.',
      benefits: [
        '99.8% purity certified laboratory-formulated chemical agents',
        'Detailed safety handling instructions and protective gear guidelines',
        'Neutralizing washes to stop chemical reaction and preserve paper feel',
        'Discreet, tamper-proof packaging for international air shipping'
      ]
    },
    {
      id: 'meetings',
      title: '5. In-Person Business Meetings in Dubai',
      subtitle: 'Face-to-face confidential consultations at our Dubai office by appointment',
      image: '/images/dubai.jpg',
      description: 'We believe genuine trust is built through clear communication and honest business practices. Customers can request a face-to-face appointment in Dubai to inspect equipment, review product specifications, and discuss tailored technical assistance with an experienced representative.',
      benefits: [
        'Private consultation rooms in leading Dubai commercial districts',
        'Live equipment demonstration and formulation purity verification',
        'Confidential discussion of large-scale commercial restoration projects',
        'Flexible scheduling Monday through Saturday with advance booking'
      ]
    },
    {
      id: 'support',
      title: '6. Dedicated Technical Support & Field Assistance',
      subtitle: 'Ongoing operational support and on-site technician dispatch',
      image: '/images/ssd-extraction-powder.png',
      description: 'From initial inquiry to project completion, our technical support team is available 24/7 via direct client messaging and phone. For high-volume clients, we offer on-site technician dispatch to assist with machine setup, chemical calibration, and staff operation.',
      benefits: [
        '24/7 direct encrypted messaging with senior technicians',
        'Step-by-step video guidance for machine setup and chemical mixing',
        'Field technician availability for on-site client assistance',
        'Continuous after-sales support and replacement consumable supply'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-street-baron-laboratory.png"
            alt="Banknote Conservation Services"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Comprehensive Conservation Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Our Services & Technical Support
          </h1>
          <p className="text-slate-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            From banknote condition assessments and automated cleaning machine supply to certified chemical formulations and private in-person meetings in Dubai.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12 sm:space-y-16">
          
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/90 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    Dubai Street Baron Verified
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {svc.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-1">
                    {svc.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {svc.benefits.map((b, bidx) => (
                    <div key={bidx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-sm flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-950" />
                    <span>Request Service Quotation</span>
                  </a>

                  <Link
                    to="/contact"
                    className="h-10 px-5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs tracking-wide flex items-center gap-2"
                  >
                    <span>Book In-Person Meeting</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Responsible Conservation & Service Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

    </div>
  );
}
