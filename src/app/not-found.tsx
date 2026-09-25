import React from 'react';
import Link from 'next/link';
import { Coffee, Home, Utensils, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#F5EFE6] text-[#B86B35] flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8F7D70]">
            404 Error • Page Not Found
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1510]">
            Looks like this cup is empty!
          </h1>
          <p className="text-xs sm:text-sm text-[#635347] leading-relaxed">
            The page you are looking for might have been moved or doesn&apos;t exist. Let&apos;s get you back to the right place.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="btn-primary text-xs !py-3 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/menu"
            className="btn-secondary text-xs !py-3 flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#B86B35]" />
            <span>Explore Coffee Menu</span>
          </Link>

          <a
            href={BUSINESS_INFO.googleMaps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-[#8F7D70] hover:text-[#1C1510] pt-2"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Find us on Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
