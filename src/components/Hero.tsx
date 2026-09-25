'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navigation,
  Phone,
  MessageSquare,
  Coffee,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { getOpenStatus } from '@/lib/utils';

export default function Hero() {
  const [openStatus, setOpenStatus] = useState({
    isOpen: true,
    statusText: 'Open Daily',
    nextChange: '7:00 AM – 11:00 PM',
  });

  useEffect(() => {
    setOpenStatus(getOpenStatus());
  }, []);

  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:py-16 lg:py-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-200/25 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#B86B35]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
            {/* Trust Pill & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#635347] shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#B86B35]" />
                <span>Specialty Cafe & Evening Bar</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-medium text-[#635347] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#B86B35]" />
                <span>Bulevardi Dëshmorët E Kombit, Prishtinë</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#1C1510] leading-[1.12] tracking-tight">
                Where Artisan Coffee Meets{' '}
                <span className="text-[#B86B35] underline decoration-[#B86B35]/30 decoration-wavy underline-offset-8">
                  Boulevard Charm.
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#635347] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-[#1C1510] font-semibold">Coffee and more Bar</strong>, your cozy sanctuary in central Prishtinë. From precision espresso and our acclaimed signature Iced Coffee with Caramel to freshly baked artisan pastries and twilight wine pairings.
            </p>

            {/* Key Value Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-[#635347]">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                <span className="font-medium text-[#1C1510]">{openStatus.statusText}</span>
                <span className="text-[#8F7D70]">({openStatus.nextChange})</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1C1510]">5.0</span>
                <span className="text-[#8F7D70]">(Google Maps)</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={BUSINESS_INFO.googleMaps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-sm sm:text-base px-6 py-3.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <Link
                href="/menu"
                className="btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-3.5"
              >
                <span>View Menu & Offerings</span>
                <ArrowRight className="w-4 h-4 text-[#B86B35]" />
              </Link>

              <a
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 text-sm font-semibold text-[#635347] hover:text-[#1C1510] rounded-full hover:bg-[#F5EFE6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B86B35]" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#1A130E] group">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Warm ambiance and patrons inside Coffee and more Bar with view of Bulevardi Dëshmorët E Kombit"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/80 via-transparent to-transparent" />
                </div>

                {/* Bottom Overlay Info inside frame */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FAF8F5]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#D5C8B6] uppercase tracking-wider">
                        Bulevardi Dëshmorët E Kombit
                      </p>
                      <h3 className="font-heading text-lg font-bold text-white">
                        Specialty Roasts & Terrace Views
                      </h3>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FFFFFF]/15 backdrop-blur-md">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-xl max-w-[280px] hidden sm:block">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#1C1510] ml-1">5.0 Star</span>
                </div>
                <p className="text-xs text-[#635347] line-clamp-2 italic">
                  &ldquo;Ice coffee with caramel never tasted so great, just perfect 10 out of 10&rdquo;
                </p>
                <p className="text-[10px] text-[#8F7D70] font-medium mt-1">
                  — Elkena A. (Verified Google Review)
                </p>
              </div>

              {/* Floating Hours Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#1A130E] text-[#FAF8F5] border border-[#3D2F24] shadow-lg flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B86B35]" />
                <span className="text-xs font-semibold">Open until 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
