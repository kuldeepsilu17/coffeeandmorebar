import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, Navigation, MessageSquare, Sparkles } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Photo Gallery | Coffee and more Bar Prishtinë',
  description: `Browse photographs of Coffee and more Bar on Bulevardi Dëshmorët E Kombit in Prishtinë. See our cozy interior, boulevard patio, signature iced drinks, and pastries.`,
};

export default function GalleryPage() {
  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#F5EFE6] to-[#FBF9F5] border-b border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1C1510] tracking-tight">
            Our Gallery & Ambiance
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#635347] max-w-2xl mx-auto leading-relaxed">
            Explore the relaxed rhythm of our cafe and evening bar along Bulevardi Dëshmorët E Kombit. Click any photo to enlarge in high resolution.
          </p>
        </div>
      </section>

      {/* Full Photo Gallery Component */}
      <GallerySection />

      {/* Bottom Visit Callout */}
      <section className="py-16 bg-[#1A130E] text-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B14] border border-[#3D2F24] text-xs text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experience it in Person</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Come Enjoy the Atmosphere Today
          </h2>

          <p className="text-sm sm:text-base text-[#B5A496] max-w-xl mx-auto">
            We are open daily from 7:00 AM (8:00 AM Sundays) until 11:00 PM on Bulevardi Dëshmorët E Kombit in Prishtinë.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleMaps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>

            <Link href="/contact" className="btn-secondary text-sm px-6 py-3">
              <span>Book Table / Contact</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
