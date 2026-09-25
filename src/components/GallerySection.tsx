'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/business';
import LightboxModal from './LightboxModal';

export default function GallerySection({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'drinks', label: 'Coffee & Drinks' },
    { id: 'pastries', label: 'Pastries & Desserts' },
    { id: 'interior', label: 'Cozy Interior' },
    { id: 'exterior', label: 'Boulevard Patio' },
    { id: 'bar', label: 'Evening Lounge' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (item: GalleryItem) => {
    const fullIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setLightboxIndex(fullIndex >= 0 ? fullIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF8F5]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
            <Camera className="w-3.5 h-3.5" />
            <span>Atmosphere & Moments</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1510]">
            Photo Gallery
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#635347] leading-relaxed">
            Take a visual tour inside Coffee and more Bar—from our sunny boulevard patio and cozy reading corners to our artisanal pastries and signature layered iced coffees.
          </p>
        </div>

        {/* Category Filters (Scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer min-h-[40px] flex items-center justify-center active:scale-95 ${
                  isActive
                    ? 'bg-[#1A130E] text-white shadow-md'
                    : 'bg-[#FFFFFF] text-[#635347] hover:bg-[#F5EFE6] hover:text-[#1C1510] border border-[#EBE3D7]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedItems.map((item, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#1A130E] border-2 border-[#FFFFFF] shadow-md hover:shadow-2xl transition-all duration-500 active:scale-[0.99] ${
                  isLarge
                    ? 'aspect-[4/3] sm:col-span-2 lg:col-span-2 sm:aspect-[16/9]'
                    : 'aspect-[4/3] sm:aspect-square'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/85 via-[#1A130E]/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6" />

                {/* Zoom Icon badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-[#1A130E]/75 backdrop-blur-md text-white opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white translate-y-0 sm:translate-y-3 opacity-100 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                    {item.category.toUpperCase()}
                  </p>
                  <h3 className="font-heading text-sm sm:text-base lg:text-lg font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
