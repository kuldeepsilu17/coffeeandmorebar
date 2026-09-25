'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { GalleryItem } from '@/data/business';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A130E]/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      {/* Top Toolbar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3.5 py-1.5 rounded-full bg-[#241B14]/80 border border-[#3D2F24] text-xs font-semibold text-[#FAF8F5]">
          <span>{currentIndex + 1}</span>
          <span className="text-[#8F7D70] mx-1">/</span>
          <span>{items.length}</span>
          <span className="ml-2 text-[#D5C8B6] hidden sm:inline">• {currentItem.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-[#241B14]/80 border border-[#3D2F24] text-[#FAF8F5] hover:bg-[#3D2F24] transition-colors"
            aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#241B14]/80 border border-[#3D2F24] text-[#FAF8F5] hover:bg-[#B86B35] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#241B14]/80 border border-[#3D2F24] text-[#FAF8F5] hover:bg-[#B86B35] transition-all hover:scale-110"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#241B14]/80 border border-[#3D2F24] text-[#FAF8F5] hover:bg-[#B86B35] transition-all hover:scale-110"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-4 left-4 right-4 text-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="inline-block px-4 py-2 rounded-xl bg-[#241B14]/80 border border-[#3D2F24] text-xs text-[#FAF8F5] max-w-lg">
          <p className="font-semibold text-white">{currentItem.title}</p>
          <p className="text-[#8F7D70] text-[11px] mt-0.5">{currentItem.alt}</p>
        </div>
      </div>
    </div>
  );
}
