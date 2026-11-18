import React, { useState } from 'react';
import { 
  MessageSquare, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Calendar,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'In-Person Meeting in Dubai',
    volume: '$50,000 - $250,000',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/447865039625?text=Hello%20Dubai%20Street%20Baron.%20I%20would%20like%20to%20schedule%20an%20appointment%20or%20inquire%20about%20${encodeURIComponent(formData.inquiryType)}.%20Name:%20${encodeURIComponent(formData.fullName || 'Client')}.`;

  return (
    <div className="min-h-screen pt-14 sm:pt-16 bg-white text-slate-900">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 bg-slate-950 text-white border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banknote-conservation-inspection.webp"
            alt="Dubai Street Baron Consultation Desk"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Direct Technical Support & Dubai Appointments
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Contact Dubai Street Baron
          </h1>
          <p className="text-slate-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            Schedule an in-person appointment at our Dubai facility, request product specifications, or connect with our technician team for urgent assistance.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm">
                
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Schedule Appointment or Request Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the consultation request below and our senior technical coordinator will respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-white border border-emerald-300 text-center space-y-4 shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Consultation Request Received</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A Dubai Street Baron representative will contact you via direct channel and email to confirm your appointment or supply quotation.
                    </p>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wide shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-slate-950" />
                      <span>Direct Priority Channel</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Business or Private Client"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Direct Mobile / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 000 0000"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="In-Person Meeting in Dubai">In-Person Meeting in Dubai</option>
                          <option value="Banknote Cleaning Machinery Inquiry">Banknote Cleaning Machinery Inquiry</option>
                          <option value="SSD Chemical Solution / Caluanie Order">SSD Chemical Solution / Caluanie Order</option>
                          <option value="Banknote Condition Assessment">Banknote Condition Assessment</option>
                          <option value="Technician Dispatch / Training">Technician Dispatch / Training</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1.5">
                          Approximate Tranche Volume
                        </label>
                        <select
                          name="volume"
                          value={formData.volume}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                          <option value="$50,000 - $250,000">$50,000 - $250,000</option>
                          <option value="$250,000 - $1,000,000">$250,000 - $1,000,000</option>
                          <option value="$1,000,000+ (High Volume)">$1,000,000+ (High Volume)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Details of Banknote Condition or Equipment Needed *
                      </label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe the currency condition, stain characteristics, or specific equipment requirements..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Appointment & Inquiry</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Direct WhatsApp Card & Dubai Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Desk Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Direct Channel
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  Direct Specialist Desk
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  For immediate consultation, video demonstration of cleaning machines, or same-day appointment confirmation in Dubai, connect directly with a senior technician.
                </p>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 text-slate-950" />
                  <span>Connect with Client Desk</span>
                </a>
              </div>

              {/* Office Details */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Dubai Street Baron Hub
                </h4>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Consultation Facility:</strong>
                      <span>Dubai International Financial Centre (DIFC) & Deira Trading Hub, Dubai, UAE</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Consultation Hours:</strong>
                      <span>Monday – Saturday: 09:00 – 18:00 GST (By Appointment)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">On-Site Demonstration:</strong>
                      <span>Available for commercial cleaning machinery orders</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
