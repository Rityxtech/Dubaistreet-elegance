import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Filter, 
  Package, 
  Truck, 
  Clock, 
  FlaskConical, 
  Cpu, 
  FileText 
} from 'lucide-react';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'machines', label: 'Cleaning Machinery' },
    { id: 'chemicals', label: 'Chemical Solutions' },
    { id: 'caluanie', label: 'Caluanie Oxidize' },
    { id: 'specimens', label: 'Currency Specimens' }
  ];

  const products = [
    {
      id: 1,
      category: 'chemicals',
      name: 'SSD Universal Chemical Solution (Automatic Grade A)',
      badge: 'Bestseller',
      image: '/images/aluanie-chemical-lab.png',
      price: '$1,850 / Liter',
      specs: ['Purity: 99.8% Certified', 'Automatic formulation', 'Safe on security threads', 'Global air freight'],
      description: 'Specialist universal chemical formulation engineered for the safe removal of anti-breeze dyes, stains, and environmental residues from genuine banknotes.'
    },
    {
      id: 2,
      category: 'caluanie',
      name: 'Caluanie Muelear Oxidize (Industrial Refined Supply)',
      badge: 'Certified Purity',
      image: '/images/caluanie-muelear-oxidize.png',
      price: '$2,400 / Liter',
      specs: ['Density: 1.86 g/cm³', 'Refined raw material', 'Heavy oxidation removal', 'Factory sealed canister'],
      description: 'High-purity industrial Caluanie Muelear Oxidize used for deep-layer chemical oxidation breakdown, polymer modification, and banknote preservation.'
    },
    {
      id: 3,
      category: 'machines',
      name: 'Automated Multi-Tranche Ultrasonic Cleaning Machine (Model DSB-800)',
      badge: 'Commercial Grade',
      image: '/images/banknote-counter-machine.png',
      price: '$8,500 / Unit',
      specs: ['Capacity: 50,000 notes/hr', 'Digital temperature control', 'Automated chemical cycle', 'Built-in dryer chamber'],
      description: 'Industrial-grade automated cleaning unit equipped with variable frequency ultrasonic cavitation, controlled chemical immersion baths, and gentle drying cycles.'
    },
    {
      id: 4,
      category: 'chemicals',
      name: 'Activation Powder & Vectrol Paste Compound',
      badge: 'Catalyst Formula',
      image: '/images/ssd-extraction-powder.png',
      price: '$650 / 500g',
      specs: ['Humine compound', 'Fast reaction activator', 'Zero residue', 'Vacuum sealed'],
      description: 'Essential catalyst formulation designed to activate and stabilize SSD chemical solutions during deep cleaning and stain extraction procedures.'
    },
    {
      id: 5,
      category: 'machines',
      name: 'Precision Handheld Laser De-Coating & Restoration Device',
      badge: 'High Precision',
      image: '/images/banknote-counter-machine.png',
      price: '$4,200 / Unit',
      specs: ['Non-contact preservation', 'Adjustable wavelength', 'Rechargeable battery', 'Portable protective case'],
      description: 'Non-contact portable laser system for delicate targeted removal of protective surface films and ink deposits without chemical immersion.'
    },
    {
      id: 6,
      category: 'specimens',
      name: 'Saudi Arabian 500 Riyal Test Specimens (Batch of 20)',
      badge: 'Calibration Notes',
      image: '/images/banknote-conservation-inspection.png',
      price: '$450 / Batch',
      specs: ['Genuine paper substrate', 'Security watermarks intact', 'Ideal for machine calibration', 'Verification certified'],
      description: 'Genuine currency specimen banknotes utilized by Asian and GCC technicians for chemical reaction testing and machine calibration.'
    },
    {
      id: 7,
      category: 'specimens',
      name: 'Singapore 50 Dollar Test Notes (Batch of 20)',
      badge: 'Polymer & Paper',
      image: '/images/currency-inspection-glove.png',
      price: '$420 / Batch',
      specs: ['Polymer security window intact', 'Pre-conditioned for testing', 'Safe for test baths', 'Tamper-proof packaging'],
      description: 'Standardized Asian currency specimens (SGD 50) for testing solution exposure times and cleaning efficiency on modern polymer substrates.'
    },
    {
      id: 8,
      category: 'specimens',
      name: 'UAE 500 Dirham Calibration Notes (Batch of 15)',
      badge: 'GCC Regional',
      image: '/images/banknote-conservation-inspection.png',
      price: '$480 / Batch',
      specs: ['Authentic SPARK security feature', 'Certified calibration batch', 'Ideal for ultrasonic testing', 'Discreet delivery'],
      description: 'Authentic UAE Dirham calibration specimens for regional financial laboratories and technical machine calibration across the Middle East & Asia.'
    },
    {
      id: 9,
      category: 'chemicals',
      name: 'Laboratory Neutralizing Rinse & Anti-Oxidation Wash',
      badge: 'Essential Step',
      image: '/images/caluanie-muelear-oxidize.png',
      price: '$480 / Liter',
      specs: ['pH Neutral (7.0)', 'Prevents re-darkening', 'Restores crisp paper feel', 'Quick-drying alcohol base'],
      description: 'Finishing rinse solution formulated to neutralize chemical residue, stabilize banknote security fibers, and ensure long-term preservation.'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getWhatsAppOrderUrl = (productName, price) => {
    const text = encodeURIComponent(
      `Hello Dubai Street Baron. I would like to order or request information about: "${productName}" (Price: ${price}). Please provide delivery timeline or appointment availability in Dubai.`
    );
    return `https://wa.me/447700900077?text=${text}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-white text-slate-900">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-street-baron-laboratory.png"
            alt="Dubai Street Baron Shop & Equipment Inventory"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Verified Equipment & Chemical Supply
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Professional Equipment & Solutions
          </h1>
          <p className="text-slate-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            Commercial cleaning machinery, certified SSD chemical formulations, Caluanie Muelear Oxidize, and genuine banknote preservation accessories with discreet worldwide dispatch and in-person Dubai delivery.
          </p>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="text-lg font-bold text-slate-900 font-mono">100% Genuine</p>
              <p className="text-xs text-slate-500">Certified chemical formulations</p>
            </div>
            <div className="p-3">
              <p className="text-lg font-bold text-slate-900 font-mono">Discreet Packaging</p>
              <p className="text-xs text-slate-500">Secure worldwide express delivery</p>
            </div>
            <div className="p-3">
              <p className="text-lg font-bold text-slate-900 font-mono">Dubai Warehouse</p>
              <p className="text-xs text-slate-500">In-person inspection by appointment</p>
            </div>
            <div className="p-3">
              <p className="text-lg font-bold text-slate-900 font-mono">Technician Support</p>
              <p className="text-xs text-slate-500">Live operational guidance on all machines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm">
                      {p.badge}
                    </span>
                    
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-950/80 text-white backdrop-blur-sm">
                      {p.price}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-amber-700 transition-colors">
                      {p.name}
                    </h3>
                    
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {p.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <a
                    href={getWhatsAppOrderUrl(p.name, p.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-950" />
                    <span>Inquire / Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Procurement Notice */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                Custom Order & Industrial Quantities
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Need High-Volume Chemical Supplies or Machine Customization?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                We supply commercial labs, financial archives, and authorized contractors with custom-drum quantities (50L, 100L+) of SSD solutions and Caluanie Muelear Oxidize with direct air cargo dispatch.
              </p>
            </div>

            <a
              href="https://wa.me/447700900077?text=Hello%20Dubai%20Street%20Baron,%20I%20would%20like%20to%20inquire%20about%20a%20bulk%20custom%20order%20for%20chemical%20solutions%20or%20cleaning%20machinery."
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Contact Bulk Desk</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
