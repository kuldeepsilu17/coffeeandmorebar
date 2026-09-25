import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, MapPin, Sparkles, Heart, Navigation, Phone, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewsSection from '@/components/ReviewsSection';

export const metadata: Metadata = {
  title: 'About Us | Coffee and more Bar Prishtinë',
  description: `Learn about Coffee and more Bar on Bulevardi Dëshmorët E Kombit in Prishtinë. Our passion for specialty roasts, artisanal pastries, and warm hospitality.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Page Header Banner */}
      <section className="relative py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#F5EFE6] to-[#FBF9F5] border-b border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35] mb-3 sm:mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Our Passion & Story</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1510] tracking-tight">
            About Coffee and more Bar
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-[#635347] max-w-2xl mx-auto leading-relaxed">
            A welcoming destination on Bulevardi Dëshmorët E Kombit where specialty coffee, artisanal treats, and relaxed evening gatherings unite.
          </p>
        </div>
      </section>

      {/* Main Narrative Split Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-[#FFFFFF] bg-[#1A130E] aspect-[4/3]">
                <Image
                  src="/images/outdoor-boulevard.jpg"
                  alt="Sunny outdoor terrace at Coffee and more Bar on Bulevardi Dëshmorët E Kombit"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                  <Image
                    src="/images/cozy-interior.jpg"
                    alt="Cozy reading and laptop nook inside Coffee and more Bar"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                  <Image
                    src="/images/artisan-pastries.jpg"
                    alt="Freshly baked artisan pastries at Coffee and more Bar"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#B86B35]">
                  The Heart of Our Cafe
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1510] leading-tight">
                  Crafting Daily Comfort on Prishtinë&apos;s Grand Boulevard
                </h2>
              </div>

              <p className="text-xs sm:text-base text-[#635347] leading-relaxed">
                Situated along the prominent <strong>Bulevardi Dëshmorët E Kombit</strong> in Prishtinë, Coffee and more Bar is more than just a place to grab your morning caffeine fix. It is an intentional neighborhood gathering space where people connect, create, and unwind.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#635347] leading-relaxed">
                Every cup is crafted with precision—from our velvety flat whites and classic double espressos to our celebrated signature <strong>Iced Coffee with Caramel</strong>. In the afternoons and evenings, the atmosphere gently shifts into a warm lounge, offering chilled regional wines, craft beers, and refreshing aperitifs.
              </p>

              <div className="p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] space-y-2.5 sm:space-y-3">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#1C1510]">
                  What You Will Always Find Here:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#635347]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B86B35] shrink-0" />
                    <span>Specialty single-origin and balanced Arabica roast profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B86B35] shrink-0" />
                    <span>Friendly, genuine service with a smile that brightens your day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B86B35] shrink-0" />
                    <span>Comfortable seating with high-speed Wi-Fi and power outlets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B86B35] shrink-0" />
                    <span>Outdoor boulevard terrace seating with beautiful street views</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <a
                  href={BUSINESS_INFO.googleMaps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-sm px-6 py-3 min-h-[44px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions to Visit</span>
                </a>

                <Link
                  href="/contact"
                  className="btn-secondary w-full sm:w-auto text-sm px-6 py-3 min-h-[44px]"
                >
                  <span>Book a Table</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us component */}
      <WhyChooseUs />

      {/* Real Reviews */}
      <ReviewsSection />
    </div>
  );
}

