'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Coffee,
  Sparkles,
  Wine,
  Flame,
  CupSoda,
  Cookie,
  ArrowRight,
  MessageSquare,
  Check,
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, BUSINESS_INFO } from '@/data/business';

export default function MenuSection({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const getCategoryIcon = (category: MenuItem['category']) => {
    switch (category) {
      case 'coffee':
        return <Coffee className="w-4 h-4 text-[#B86B35]" />;
      case 'iced':
        return <CupSoda className="w-4 h-4 text-[#B86B35]" />;
      case 'pastries':
        return <Cookie className="w-4 h-4 text-[#B86B35]" />;
      case 'bar':
        return <Wine className="w-4 h-4 text-[#B86B35]" />;
      case 'tea':
        return <CupSoda className="w-4 h-4 text-[#B86B35]" />;
      default:
        return <Coffee className="w-4 h-4 text-[#B86B35]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FFFFFF]" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Offerings</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1510]">
            Our Menu & Specialties
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#635347] leading-relaxed">
            From sunrise roasts to evening aperitifs, explore our carefully curated selection of specialty coffees, artisan pastries, refreshing teas, and fine wines.
          </p>
        </div>

        {/* Category Filter Pills (Scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer min-h-[40px] flex items-center justify-center active:scale-95 ${
                  isActive
                    ? 'bg-[#1A130E] text-white shadow-md'
                    : 'bg-[#F5EFE6] text-[#635347] hover:bg-[#EBE3D7] hover:text-[#1C1510]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.highlight
                  ? 'bg-gradient-to-br from-[#FFFFFF] to-[#FDFBF7] border-[#B86B35]/40 shadow-sm hover:shadow-xl hover:border-[#B86B35]'
                  : 'bg-[#FFFFFF] border-[#EBE3D7] hover:border-[#D5C8B6] hover:shadow-md'
              }`}
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#F5EFE6] border border-[#EBE3D7] shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.badge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#B86B35]/10 text-[#B86B35] border border-[#B86B35]/20">
                      <Sparkles className="w-3 h-3" />
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1C1510] mb-1.5">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#635347] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 mt-4 border-t border-[#F5EFE6] flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-[#8F7D70] uppercase tracking-wider truncate">
                  {item.category === 'bar' ? 'Evening Bar' : 'Freshly Prepared'}
                </span>
                <a
                  href={`https://wa.me/38343815010?text=Hello%20Coffee%20and%20more%20Bar,%20I%20am%20interested%20in%20ordering%20or%20reserving%20for%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#B86B35] hover:text-[#9E5624] inline-flex items-center gap-1 group py-1.5 px-2 rounded-lg hover:bg-[#F5EFE6] transition-colors shrink-0"
                >
                  <span>Inquire / Reserve</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA for Menu */}
        {limit && MENU_ITEMS.length > limit && (
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/menu"
              className="btn-primary w-full sm:w-auto text-sm px-8 py-3.5 inline-flex items-center justify-center gap-2 min-h-[46px]"
            >
              <span>Explore Full Menu & Selections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

