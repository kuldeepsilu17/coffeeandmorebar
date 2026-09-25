'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Coffee, Phone, Navigation, Menu as MenuIcon, X, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { getOpenStatus } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState({ isOpen: true, statusText: 'Open Daily' });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setStatus(getOpenStatus());
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu & Offerings', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Location & Hours', href: '/#location' },
    { name: 'Contact & Booking', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-md'
            : 'bg-[#FBF9F5]/95 md:bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B86B35] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1A130E] flex items-center justify-center text-[#FAF8F5] shadow-sm group-hover:bg-[#B86B35] transition-colors">
                <Coffee className="w-5 h-5 text-[#FAF8F5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl leading-tight text-[#1C1510] tracking-tight">
                  Coffee and more Bar
                </span>
                <span className="text-xs text-[#8F7D70] font-medium tracking-wide flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`} />
                  {BUSINESS_INFO.address.city} • {status.statusText}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#B86B35] bg-[#F5EFE6] font-semibold'
                        : 'text-[#635347] hover:text-[#1C1510] hover:bg-[#F5EFE6]/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Header Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1C1510] bg-[#FFFFFF] border border-[#D5C8B6] rounded-full hover:bg-[#F5EFE6] transition-all"
                title={`Call ${BUSINESS_INFO.phone.display}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B86B35]" />
                <span>{BUSINESS_INFO.phone.display}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMaps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-2 !px-4"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="p-2 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-[#B86B35]"
                aria-label="Call Business"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#EBE3D7] text-[#1C1510] hover:bg-[#F5EFE6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B86B35]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#1A130E]/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FBF9F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EBE3D7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A130E] flex items-center justify-center text-[#FAF8F5]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-[#1C1510]">
                      Coffee and more Bar
                    </span>
                    <p className="text-[11px] text-[#8F7D70]">Prishtinë, Kosovo</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#635347] hover:bg-[#F5EFE6]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill */}
              <div className="my-4 px-3 py-2 rounded-lg bg-[#F5EFE6] border border-[#EBE3D7] flex items-center gap-2 text-xs text-[#635347]">
                <Clock className="w-3.5 h-3.5 text-[#B86B35]" />
                <span>Today: 7:00 AM – 11:00 PM</span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 mt-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#B86B35] text-white font-semibold'
                          : 'text-[#1C1510] hover:bg-[#F5EFE6]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Actions Drawer Bottom */}
            <div className="pt-6 border-t border-[#EBE3D7] flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMaps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm !py-2.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.phone.telLink}
                className="btn-secondary w-full text-sm !py-2.5"
              >
                <Phone className="w-4 h-4 text-[#B86B35]" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
