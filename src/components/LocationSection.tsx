'use client';

import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function LocationSection() {
  const currentDayIndex = new Date().getDay();
  // 0 = Sunday, 1 = Monday, etc.
  const dayOrder = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayName = dayOrder[currentDayIndex];

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F5]" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Prishtinë</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1510]">
            Location & Hours
          </h2>
          <p className="text-sm sm:text-base text-[#635347] leading-relaxed">
            Conveniently situated right along Bulevardi Dëshmorët E Kombit. Drop by for coffee, study sessions, or evening relaxation.
          </p>
        </div>

        {/* 2-Column Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details & Opening Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#F5EFE6] text-[#B86B35] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8F7D70]">
                    Address & Coordinates
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1C1510]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-sm text-[#635347] font-medium leading-snug">
                    {BUSINESS_INFO.address.full}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={BUSINESS_INFO.googleMaps.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs !py-2.5 !px-4"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>

                    <a
                      href={BUSINESS_INFO.phone.telLink}
                      className="btn-secondary text-xs !py-2.5 !px-4"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B86B35]" />
                      <span>Call {BUSINESS_INFO.phone.display}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#F5EFE6] text-[#B86B35]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1C1510]">
                    Weekly Opening Hours
                  </h4>
                  <p className="text-xs text-[#8F7D70]">Open 7 Days a Week</p>
                </div>
              </div>

              <div className="divide-y divide-[#F5EFE6]">
                {BUSINESS_INFO.hours.map((schedule) => {
                  const isToday = schedule.day === todayName;
                  return (
                    <div
                      key={schedule.day}
                      className={`py-2.5 flex items-center justify-between text-xs sm:text-sm ${
                        isToday
                          ? 'font-bold text-[#B86B35] bg-[#FDFBF7] px-3 -mx-3 rounded-lg'
                          : 'text-[#635347]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-[#B86B35] animate-pulse" />
                        )}
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#B86B35]/15 text-[#B86B35] font-bold">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={isToday ? 'text-[#1C1510]' : 'text-[#1C1510]'}>
                        {schedule.display}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-[#F5EFE6] flex items-center gap-2 text-xs text-[#8F7D70]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Indoor tables, quiet laptop seating, and outdoor boulevard terrace available daily.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFFFF] bg-[#1A130E] flex flex-col h-full min-h-[420px]">
              {/* Google Maps Embed iframe or Interactive Visual Preview */}
              <iframe
                title="Google Maps Location of Coffee and more Bar"
                src="https://maps.google.com/maps?q=Bulevardi%20D%C3%ABshmor%C3%ABt%20E%20Kombit%20Prishtin%C3%AB&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] rounded-2xl"
              />

              {/* Map floating card action */}
              <div className="p-4 sm:p-5 bg-[#1A130E] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-heading font-bold text-sm text-white">
                    Coffee and more Bar
                  </p>
                  <p className="text-xs text-[#B5A496]">
                    Bulevardi Dëshmorët E Kombit, Prishtinë
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.googleMaps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs !py-2 !px-4 w-full sm:w-auto text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
