'use client';

import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1A130E]/95 backdrop-blur-md border-t border-[#3D2F24] px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl safe-bottom"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phone.telLink}
          className="flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#2D221A] text-[#FAF8F5] active:scale-95 transition-all min-h-[46px]"
          aria-label="Call Coffee and more Bar"
        >
          <Phone className="w-4 h-4 text-[#B86B35]" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 active:scale-95 transition-all min-h-[46px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_INFO.googleMaps.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#B86B35] text-white active:scale-95 transition-all shadow-md min-h-[46px]"
          aria-label="Get Directions on Google Maps"
        >
          <Navigation className="w-4 h-4" />
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>
      </div>
    </aside>
  );
}

