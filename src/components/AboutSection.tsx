import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Coffee, Heart, Sun, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function AboutSection({ showExtended = false }: { showExtended?: boolean }) {
  const highlights = [
    {
      title: 'Specialty Beans & Master Baristas',
      desc: 'Carefully sourced coffees pulled with calibrated grind size and water temperature for silky crema and refined flavor.',
    },
    {
      title: 'Boulevard Vista & Outdoor Patio',
      desc: 'Watch the vibrant pulse of Prishtinë from our shaded terrace tables on Bulevardi Dëshmorët E Kombit.',
    },
    {
      title: 'Warm & Hospitable Team',
      desc: 'Attentive service and a welcoming smile from our staff, making every morning or evening visit memorable.',
    },
    {
      title: 'Day-to-Evening Transition',
      desc: 'Energizing specialty espressos and workspace during daylight, curated wines, cocktails, and craft beer at dusk.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F5]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#1A130E]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/barista-espresso.jpg"
                  alt="Barista at Coffee and more Bar crafting an espresso with precision and care"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Secondary Overlapping Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFFFFF] bg-[#1A130E] hidden sm:block">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/iced-caramel-coffee.jpg"
                  alt="Signature Iced Coffee with Caramel"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="p-2.5 bg-[#1A130E] text-center">
                <p className="text-[11px] font-semibold text-white">Signature Iced Coffee</p>
                <p className="text-[10px] text-amber-300 font-medium">Guest Favorite</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
                <Heart className="w-3.5 h-3.5" />
                <span>Our Story & Philosophy</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1510] leading-tight">
                Crafted for Coffee Lovers, Designed for Everyday Moments.
              </h2>
            </div>

            <p className="text-base text-[#635347] leading-relaxed">
              Located directly along <strong>Bulevardi Dëshmorët E Kombit</strong>, Coffee and more Bar was created to offer Prishtinë a cozy, refined haven where you can slow down and enjoy the finest pleasures: authentic specialty coffee, gourmet pastries, and fine drinks.
            </p>

            <p className="text-sm sm:text-base text-[#635347] leading-relaxed">
              Whether you are stopping by for a brisk morning espresso, settling in with a laptop in our quiet work corner, savoring our celebrated signature <strong>Iced Coffee with Caramel</strong>, or gathering with friends over wine in the evening—we are dedicated to making every guest feel at home.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B86B35] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-[#1C1510]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8F7D70] leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {!showExtended && (
                <Link
                  href="/about"
                  className="btn-primary text-sm px-6 py-3"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              <Link
                href="/menu"
                className="btn-secondary text-sm px-6 py-3"
              >
                <span>Browse Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
