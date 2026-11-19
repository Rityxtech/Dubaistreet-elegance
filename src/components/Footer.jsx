import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  CheckCircle2,
  Sparkles,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/447865039625?text=Hello%20Dubai%20Street%20Baron,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services.";

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/40">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Genuine Currency Conservation</h4>
                <p className="text-xs text-slate-400">Responsible preservation without compromising security features.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Certified Industrial Formulations</h4>
                <p className="text-xs text-slate-400">Authentic SSD chemical solutions & Caluanie Muelear Oxidize.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">In-Person Dubai Appointments</h4>
                <p className="text-xs text-slate-400">Confidential consultations with experienced technicians.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img 
                  src="/dubailogo.webp" 
                  alt="Dubai Street Baron Logo" 
                  className="w-full h-full object-cover rounded-full bg-slate-950" 
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Dubai Street Baron
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Preserving genuine currency. Delivering professional service. Building trust. Your trusted partner for banknote condition assessment, high-precision cleaning equipment, and certified chemical formulations.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dubai International Financial Centre (DIFC) & Deira Trading Hub, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Monday – Saturday: 09:00 – 18:00 GST &bull; 24/7 Direct Client Desk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-400 hover:text-white transition-colors">
                  Shop & Products
                </Link>
              </li>
              <li>
                <Link to="/business-financing" className="text-slate-400 hover:text-white transition-colors">
                  Business Loans & Credit
                </Link>
              </li>
              <li>
                <Link to="/currency-exchange" className="text-slate-400 hover:text-white transition-colors">
                  Currency Exchange
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Banknote Condition Assessment</li>
              <li>Commercial Cleaning Equipment</li>
              <li>Chemical Solution Formulations</li>
              <li>Business Loans & Credit Facilities</li>
              <li>Wholesale Currency Exchange</li>
              <li>In-Person Dubai Consultations</li>
              <li>On-Site Technician Support</li>
            </ul>
          </div>

          {/* Product Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Product Catalog
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>SSD Universal Solution (Auto)</li>
              <li>Caluanie Muelear Oxidize</li>
              <li>Ultrasonic Banknote Cleaners</li>
              <li>Activation Powders & Pastes</li>
              <li>Laser Restoration Units</li>
              <li>Currency Calibration Specimens</li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Safety Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Important Advisory & Safety Notice:</strong> Dubai Street Baron is dedicated strictly to the preservation, responsible handling, and legitimate conservation of genuine banknotes affected by environmental stains, discoloration, and spills. We do not support, endorse, or supply materials for any fraudulent, unauthorized, or unlawful alteration of legal tender. Customers must adhere to local legal, chemical handling, and safety regulations. In-person meetings in Dubai are available by appointment only.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Dubai Street Baron (dubaistreetbaron.store). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">Our Mission</Link>
            <Link to="/services" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Book Appointment</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
