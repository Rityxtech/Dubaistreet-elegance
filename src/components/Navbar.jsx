import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  Wrench, 
  ShoppingBag, 
  Building2, 
  CalendarCheck, 
  MapPin 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Our Services', path: '/services', icon: Wrench },
    { name: 'Shop & Solutions', path: '/shop', icon: ShoppingBag },
    { name: 'About Us', path: '/about', icon: Building2 },
    { name: 'Contact & Appointments', path: '/contact', icon: CalendarCheck },
  ];

  const whatsappUrl = "https://wa.me/447700900077?text=Hello%20Dubai%20Street%20Baron,%20I%20would%20like%20to%20inquire%20about%20banknote%20conservation%20services,%20equipment,%20and%20chemical%20solutions.";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-sm' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80'
        }`}
      >
        <div className="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none">
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img 
                src="/dubailogo.png" 
                alt="Dubai Street Baron Logo" 
                className="w-full h-full object-cover rounded-[6px] sm:rounded-[9px] bg-slate-950" 
              />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 rounded-full border-2 border-white shadow-xs" />
            </div>
            
            <div className="flex flex-col whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-950 leading-tight">
                  Dubai Street Baron
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/80">
                  EST. DUBAI
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-tight hidden sm:block">
                Banknote Conservation & Chemical Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-bold whitespace-nowrap rounded-lg transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'text-amber-800 bg-amber-50/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle (< 1024px) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg sm:rounded-xl border transition-all duration-200 focus:outline-none shrink-0 ${
                mobileMenuOpen
                  ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Left Sidebar Drawer (< 1024px) */}
      <div
        className={`fixed inset-x-0 top-14 sm:top-16 bottom-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
      >
        {/* Backdrop: starts strictly below the header (top-14 / top-16) */}
        <div 
          className={`absolute inset-0 bg-slate-950/35 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Left Sidebar Panel (Sleek Translucent Glassmorphism) */}
        <aside 
          className={`absolute top-0 bottom-0 left-0 w-[82vw] max-w-[320px] sm:w-[340px] bg-white/80 backdrop-blur-2xl border-r border-slate-200/70 shadow-2xl shadow-slate-900/15 flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Navigation Links List */}
          <nav className="flex-1 overflow-y-auto px-3.5 py-5 space-y-1.5 overscroll-contain">
            <div className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-950 font-bold border-l-4 border-amber-500 shadow-xs backdrop-blur-xs'
                      : 'text-slate-700 hover:bg-white/60 hover:text-slate-950 active:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-amber-500 text-slate-950 shadow-xs' : 'bg-slate-100/80 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="truncate">{link.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-700' : 'text-slate-400'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Action Footer */}
          <div className="p-4 border-t border-slate-200/60 bg-white/50 backdrop-blur-md space-y-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
              </svg>
              <span>Connect on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/50">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>DIFC / Deira, Dubai</span>
              </span>
              <span className="font-semibold text-slate-600">Asia & GCC Hub</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}