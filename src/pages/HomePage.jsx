import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FlaskConical, 
  Wrench, 
  Users, 
  MessageSquare, 
  Cpu, 
  ChevronLeft, 
  ChevronRight,
  Package,
  Award,
  Lock,
  MapPin
} from 'lucide-react';
import BanknoteEstimator from '../components/BanknoteEstimator';

export default function HomePage() {
  const whatsappUrl = "https://wa.me/447700900077?text=Hello%20Dubai%20Street%20Baron,%20I%20would%20like%20to%20inquire%20about%20banknote%20conservation%20services,%20equipment,%20and%20chemical%20solutions.";

  const slides = [
    {
      id: 1,
      image: '/images/banknote-conservation-inspection.png',
      badge: 'Genuine Banknote Conservation & Technology',
      titleLead: 'Professional Banknote Conservation ',
      titleGold: '& Cleaning Solutions',
      subtext: 'Preserving genuine currency with advanced industrial equipment, certified chemical formulations, and unmatched technical expertise.',
      trustPoints: [
        { label: 'Certified Formulations', icon: ShieldCheck },
        { label: 'Preserves Security Features', icon: Lock },
        { label: 'In-Person Dubai Consultations', icon: Users }
      ]
    },
    {
      id: 2,
      image: '/images/caluanie-muelear-oxidize.png',
      badge: 'Certified Chemical Solutions & Industrial Supply',
      titleLead: 'SSD Chemical Solutions & ',
      titleGold: 'Caluanie Muelear Oxidize',
      subtext: 'High-purity industrial chemical supply, activation powders, and neutralizing rinses with discreet worldwide express dispatch.',
      trustPoints: [
        { label: '99.8% Certified Purity', icon: FlaskConical },
        { label: 'Factory-Sealed Canisters', icon: Package },
        { label: 'Worldwide Air Cargo', icon: ShieldCheck }
      ]
    },
    {
      id: 3,
      image: '/images/dubai-street-baron-laboratory.png',
      badge: 'Comprehensive Laboratory & Industrial Inventory',
      titleLead: 'Advanced Chemical Extraction ',
      titleGold: '& Laboratory Systems',
      subtext: 'Complete operational systems including ultrasonic tanks, specialized extraction catalysts, and high-speed multi-currency counters.',
      trustPoints: [
        { label: 'Full Laboratory Kits', icon: Award },
        { label: 'Anti-Breeze Extraction', icon: FlaskConical },
        { label: 'Field Technical Support', icon: Wrench }
      ]
    },
    {
      id: 4,
      image: '/images/banknote-counter-machine.png',
      badge: 'Commercial & Industrial Equipment',
      titleLead: 'High-Speed Automated Banknote ',
      titleGold: 'Counter & Sorting Systems',
      subtext: 'Commercial counting and multi-stage verification machinery designed for genuine legal tender post-cleaning restoration.',
      trustPoints: [
        { label: 'Up to 50K Notes/Hour', icon: Cpu },
        { label: 'UV & Magnetic Detection', icon: ShieldCheck },
        { label: 'Dubai Office by Appointment', icon: MapPin }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  const featuredProducts = [
    {
      name: 'SSD Universal Chemical Solution (Grade A Auto)',
      category: 'Chemical Formulations',
      image: '/images/aluanie-chemical-lab.png',
      price: '$1,850 / Liter',
      desc: 'Formulated for gentle, complete dissolution of anti-breeze coatings and environmental stains on legal tender paper.'
    },
    {
      name: 'Caluanie Muelear Oxidize (Industrial Refined)',
      category: 'Industrial Oxidizers',
      image: '/images/caluanie-muelear-oxidize.png',
      price: '$2,400 / Liter',
      desc: 'High-purity industrial Caluanie used for deep chemical oxidation breakdown and surface polymer decalcification.'
    },
    {
      name: 'Automated Multi-Tranche Ultrasonic Cleaner (DSB-800)',
      category: 'Machinery',
      image: '/images/banknote-counter-machine.png',
      price: '$8,500 / Unit',
      desc: 'Digital multi-bath ultrasonic cleaning unit with automated fluid recycling and temperature-regulated drying.'
    },
    {
      name: 'Activation Powder & Vectrol Paste Catalyst',
      category: 'Activator Compounds',
      image: '/images/ssd-extraction-powder.png',
      price: '$650 / 500g',
      desc: 'High-grade catalyst compound essential for activating SSD solutions during intensive banknote cleaning cycles.'
    }
  ];

  return (
    <div className="relative min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* FULL-WIDTH HERO CAROUSEL */}
      <section 
        className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-slate-950 text-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images Slider */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={`${slide.titleLead}${slide.titleGold}`}
                className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Luminous, photography-forward gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Foreground Content Area */}
        <div className="relative z-20 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 lg:py-12">
          <div className="max-w-5xl space-y-3.5 sm:space-y-4">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <span>{slides[currentSlide].titleLead}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 drop-shadow-sm">
                {slides[currentSlide].titleGold}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-3xl leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
              {slides[currentSlide].subtext}
            </p>

            {/* 2 Polished Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              
              {/* Primary Action Button: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shrink-0"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 shrink-0" />
                <span>Chat with Specialist on WhatsApp</span>
              </a>

              {/* Secondary Action Button: Shop */}
              <Link
                to="/shop"
                className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-slate-950/50 hover:bg-slate-900/70 text-white border border-white/40 hover:border-white/70 backdrop-blur-md font-bold text-sm sm:text-base tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Explore Products & Solutions</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

            </div>

            {/* Institutional Trust Badges */}
            <div className="hidden sm:flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs text-slate-200 font-medium pt-1">
              {slides[currentSlide].trustPoints.map((tp, idx) => {
                const IconComponent = tp.icon;
                return (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-lg text-xs shadow-sm"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{tp.label}</span>
                  </span>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Pagination Indicators & Slider Controls Console (Desktop/Tablet Only) */}
        <div className="hidden sm:block absolute bottom-4 left-0 right-0 z-30 pointer-events-none">
          <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
            
            {/* Slide Navigation Dots / Bars */}
            <div className="flex items-center gap-2 pointer-events-auto">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/50' 
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Controls Console */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/20 hover:border-amber-400 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-md active:scale-90"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm">
                <span className="text-amber-400">0{currentSlide + 1}</span>
                <span className="text-slate-500">/</span>
                <span>0{slides.length}</span>
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/20 hover:border-amber-400 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-md active:scale-90"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* STATS / CREDIBILITY BANNER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Field Experience
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">15+ Years</div>
              <p className="text-xs text-slate-500 mt-0.5">Specialized banknote conservation</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Formulation Purity
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">99.8%</div>
              <p className="text-xs text-slate-500 mt-0.5">Certified chemical formulations</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Machine Speed
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">50K / Hr</div>
              <p className="text-xs text-slate-500 mt-0.5">Ultrasonic commercial throughput</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Dubai Presence
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">In-Person</div>
              <p className="text-xs text-slate-500 mt-0.5">Consultations by appointment</p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Our Professional Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Banknote Preservation & Supply
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Engineered specifically for genuine currency restoration, laboratory testing, and commercial preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Equipment */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/banknote-counter-machine.png"
                    alt="Cleaning Machinery & Counter Systems"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Ultrasonic & Automated
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    Professional Cleaning Equipment
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    High-precision commercial machinery equipped with variable frequency transducers, automated chemical cycling, and temperature-regulated drying chambers.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Capacity up to 50,000 notes per hour</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Zero damage to watermarks or security threads</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Machinery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Chemical Solutions */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/caluanie-muelear-oxidize.png"
                    alt="Chemical Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Certified 99.8% Purity
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    SSD Solutions & Caluanie Muelear
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Refined industrial-grade chemical supply for dissolving external anti-breeze dyes, heavy oxidation crusts, and mineral coatings on genuine currency.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>SSD Automatic & Vectrol catalyst powders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Certified factory-sealed Caluanie supply</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: In-Person Appointments */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/banknote-conservation-inspection.png"
                    alt="Dubai Appointments & Banknote Verification"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Dubai Facility
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    In-Person Dubai Consultations
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Meet directly with our senior technicians in Dubai by appointment. Inspect equipment live, test chemical formulation reactions, and plan custom project support.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confidential face-to-face appointments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Live demonstration & technical consultation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL-WIDTH INTERACTIVE BANKNOTE ESTIMATOR */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50/70 border-y border-slate-200/80">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <BanknoteEstimator />
        </div>
      </section>

      {/* FEATURED PRODUCTS CATALOG PREVIEW */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                Curated Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Equipment & Formulations
              </h2>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-900"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 right-3 text-xs font-mono font-bold bg-slate-950/80 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {p.price}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] uppercase font-bold text-amber-700 block mb-1">
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={`https://wa.me/447700900077?text=Hello%20Dubai%20Street%20Baron.%20I%20would%20like%20to%20order%20or%20inquire%20about:%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-xs transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* APPOINTMENT BANNER */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                Dubai Headquarters
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Request an In-Person Meeting in Dubai
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experience complete transparency. Meet our technical directors at our Dubai office to review genuine chemical formulations, inspect automated ultrasonic cleaning machinery, and coordinate your project requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
