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
    <section className="relative overflow-hidden pt-2 pb-10 sm:pb-14 md:py-16 lg:py-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[200px] sm:h-[350px] bg-amber-200/20 blur-[90px] sm:blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-6 right-6 w-40 sm:w-72 h-40 sm:h-72 bg-[#B86B35]/10 blur-[80px] sm:blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            {/* Trust Pill & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-[11px] sm:text-xs font-semibold text-[#635347] shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#B86B35] shrink-0" />
                <span>Specialty Cafe & Evening Bar</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-[11px] sm:text-xs font-medium text-[#635347] shadow-xs truncate max-w-full">
                <MapPin className="w-3.5 h-3.5 text-[#B86B35] shrink-0" />
                <span className="truncate">Bulevardi Dëshmorët E Kombit, Prishtinë</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold text-[#1C1510] leading-[1.16] sm:leading-[1.12] tracking-tight">
                Where Artisan Coffee Meets{' '}
                <span className="text-[#B86B35] underline decoration-[#B86B35]/30 decoration-wavy underline-offset-4 sm:underline-offset-8">
                  Boulevard Charm.
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#635347] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-[#1C1510] font-semibold">Coffee and more Bar</strong>, your cozy sanctuary in central Prishtinë. From precision espresso and our acclaimed signature Iced Coffee with Caramel to freshly baked artisan pastries and twilight wine pairings.
            </p>

            {/* Key Value Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-[#635347]">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full shrink-0 ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
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
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href={BUSINESS_INFO.googleMaps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 py-3 min-h-[46px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <Link
                href="/menu"
                className="btn-secondary w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 py-3 min-h-[46px]"
              >
                <span>View Menu & Offerings</span>
                <ArrowRight className="w-4 h-4 text-[#B86B35]" />
              </Link>

              <a
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 text-sm font-semibold text-[#635347] hover:text-[#1C1510] rounded-full hover:bg-[#F5EFE6] border border-transparent hover:border-[#EBE3D7] transition-all min-h-[46px]"
              >
                <Phone className="w-4 h-4 text-[#B86B35]" />
                <span>Call {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-[#FFFFFF] bg-[#1A130E] group">
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
                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 text-[#FAF8F5]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold text-[#D5C8B6] uppercase tracking-wider truncate">
                        Bulevardi Dëshmorët E Kombit
                      </p>
                      <h3 className="font-heading text-sm sm:text-lg font-bold text-white truncate">
                        Specialty Roasts & Terrace Views
                      </h3>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-xl bg-[#FFFFFF]/15 backdrop-blur-md shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge (Tablet & Desktop) */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 p-3 sm:p-4 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-xl max-w-[260px] sm:max-w-[280px] hidden sm:block">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#1C1510] ml-1">5.0 Star</span>
                </div>
                <p className="text-xs text-[#635347] line-clamp-2 italic">
                  &ldquo;Ice coffee with caramel never tasted so great, just perfect 10 out of 10&rdquo;
                </p>
                <p className="text-[10px] text-[#8F7D70] font-medium mt-1 truncate">
                  — Elkena A. (Verified Google Review)
                </p>
              </div>

              {/* Floating Hours Badge */}
              <div className="absolute top-2 right-2 sm:-top-3 sm:-right-3 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#1A130E]/95 backdrop-blur-md text-[#FAF8F5] border border-[#3D2F24] shadow-lg flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B86B35] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold">Open until 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
