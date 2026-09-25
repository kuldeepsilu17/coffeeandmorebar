import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Utensils, Sparkles, Coffee, Heart, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import MenuSection from '@/components/MenuSection';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Menu & Offerings | Coffee and more Bar Prishtinë',
  description: `Explore the full drink, specialty coffee, artisanal pastries, and evening wine selection at Coffee and more Bar on Bulevardi Dëshmorët E Kombit in Prishtinë.`,
};

export default function MenuPage() {
  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#F5EFE6] to-[#FBF9F5] border-b border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35] mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Curated Daily Selections</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#1C1510] tracking-tight">
            Menu & Drink Offerings
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#635347] max-w-2xl mx-auto leading-relaxed">
            From sunrise specialty roasts to evening wine and craft beer, every drink and pastry is prepared with care and quality ingredients.
          </p>
        </div>
      </section>

      {/* Full Interactive Menu Section */}
      <MenuSection />

      {/* Dietary & Service Notes Banner */}
      <section className="py-12 bg-[#F5EFE6]/50 border-t border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F5EFE6] text-[#B86B35] shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#1C1510] mb-1">
                  Milk Alternatives Available
                </h4>
                <p className="text-xs text-[#635347] leading-relaxed">
                  Oat, almond, and lactose-free milk options available upon request for any of our specialty coffee drinks.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F5EFE6] text-[#B86B35] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#1C1510] mb-1">
                  Fresh Daily Baked Goods
                </h4>
                <p className="text-xs text-[#635347] leading-relaxed">
                  Our croissants, chocolate babka, and cakes are prepared fresh daily to guarantee melt-in-your-mouth texture.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F5EFE6] text-[#B86B35] shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#1C1510] mb-1">
                  Card & Contactless Payments
                </h4>
                <p className="text-xs text-[#635347] leading-relaxed">
                  We accept major credit and debit cards alongside cash for fast, hassle-free checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#635347] mb-4">
              Have a question about our menu or dietary preferences?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={BUSINESS_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-2.5 !px-5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
              <Link href="/contact" className="btn-secondary text-xs !py-2.5 !px-5">
                <span>Reserve a Table</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
