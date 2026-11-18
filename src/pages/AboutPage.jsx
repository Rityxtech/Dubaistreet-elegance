import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight,
  FlaskConical,
  Lock,
  HeartHandshake
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity',
      icon: ShieldCheck,
      desc: 'We communicate honestly regarding product specifications and the feasibility of banknote conservation. We provide realistic assessments and never over-promise on heavily damaged substrates.'
    },
    {
      title: 'Professionalism',
      icon: Award,
      desc: 'Every client inquiry is handled with the utmost confidentiality, discretion, and technical rigor. We serve private collectors, commercial enterprises, and financial institutions worldwide.'
    },
    {
      title: 'Safety First',
      icon: Lock,
      desc: 'We mandate strict safety protocols for handling industrial formulations like Caluanie and SSD chemicals, providing detailed safety sheets, protective gear guidance, and neutralization procedures.'
    },
    {
      title: 'Responsibility',
      icon: HeartHandshake,
      desc: 'Our mission is dedicated exclusively to the legitimate preservation of genuine currency. We ensure security threads, micro-lettering, intaglio relief, and watermarks remain completely intact.'
    },
    {
      title: 'Customer Satisfaction',
      icon: Users,
      desc: 'From custom machine orders to direct in-person appointments in Dubai, we are committed to responsive technical support, live demonstrations, and transparent business practices.'
    }
  ];

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-street-baron-laboratory.webp"
            alt="Dubai Street Baron Headquarters & Technical Team"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Our Heritage & Mission
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            About Dubai Street Baron
          </h1>
          <p className="text-slate-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            Preserving Genuine Currency. Delivering Professional Service. Building Trust. Over a decade of specialized expertise in banknote conservation technology and certified chemical solutions.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Decades of Specialized Expertise in Banknote Conservation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dubai Street Baron is a premier Dubai-based online and field-consultation specialist focused on banknote conservation information, high-precision cleaning machinery, and certified chemical formulations.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We understand that genuine currency can become stained, discolored, or coated through everyday handling, accidental spills, or environmental exposure. Our mission is to provide customers with clear product information, responsible conservation guidance, and professional cleaning equipment designed for legitimate commercial applications.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-xs sm:text-sm font-bold text-amber-900 leading-snug">
                  "We believe every successful business relationship begins with transparency. We encourage clients to ask questions, review specifications, and request in-person meetings at our Dubai facility."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/images/dubai.jpg"
                  alt="Dubai Street Baron Facility"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-bold text-amber-400">Headquarters</span>
                  <h3 className="text-xl font-bold">Dubai International Financial Centre & Deira</h3>
                  <p className="text-xs text-slate-300 mt-1">In-person consultations and equipment demonstrations by appointment.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Values That Guide Every Client Interaction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}

            {/* In-Person Callout Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white flex flex-col justify-between border border-slate-800 shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Visit Us in Dubai
                </span>
                <h3 className="text-lg font-bold tracking-tight mb-2">
                  Face-to-Face Meetings by Appointment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We schedule private consultations at our Dubai offices for clients seeking to inspect equipment, verify chemical purity, or coordinate on-site technician support.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Request an Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
