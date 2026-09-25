import React from 'react';
import Link from 'next/link';
import { Coffee, Phone, MessageSquare, MapPin, Clock, Star, Navigation, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A130E] text-[#FAF8F5] border-t border-[#2D221A] pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2D221A]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B86B35] flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-[#FAF8F5]">
                {BUSINESS_INFO.name}
              </span>
            </Link>

            <p className="text-sm text-[#B5A496] leading-relaxed max-w-sm">
              {BUSINESS_INFO.description.short}
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-[#241B14] border border-[#3D2F24] w-fit mt-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#FAF8F5]">
                5.0 on Google Maps
              </span>
              <span className="text-[11px] text-[#8F7D70]">
                ({BUSINESS_INFO.rating.totalReviews} Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#D5C8B6]">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#B5A496]">
              <li>
                <Link href="/" className="hover:text-[#B86B35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B86B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B86B35] transition-colors">
                  Menu & Offerings
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#B86B35] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#B86B35] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B86B35] transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#D5C8B6] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#B86B35]" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-[#B5A496]">
              <div className="flex justify-between py-1 border-b border-[#2D221A]">
                <span>Mon – Sat:</span>
                <span className="font-medium text-[#FAF8F5]">7:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2D221A]">
                <span>Sunday:</span>
                <span className="font-medium text-[#FAF8F5]">8:00 AM – 11:00 PM</span>
              </div>
              <p className="text-xs text-[#8F7D70] pt-1">
                Specialty coffee & breakfast in the morning, wine and lounge in the evening.
              </p>
            </div>
          </div>

          {/* Col 4: Visit & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#D5C8B6]">
              Location & Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#B5A496]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B86B35] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B86B35] shrink-0" />
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="hover:text-[#FAF8F5] transition-colors font-medium"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline transition-all flex items-center gap-1 font-medium"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMaps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#241B14] border border-[#3D2F24] text-xs font-semibold text-[#FAF8F5] hover:border-[#B86B35] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B86B35]" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8F7D70]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7D70]">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FAF8F5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FAF8F5] transition-colors">
              Terms of Service
            </Link>
            <a
              href={BUSINESS_INFO.googleMaps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F5] transition-colors"
            >
              Google Maps Listing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
