import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Navigation, Utensils, CalendarCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function QuickActions() {
  const actions = [
    {
      title: 'Get Directions',
      subtitle: 'Bulevardi Dëshmorët E Kombit',
      icon: Navigation,
      href: BUSINESS_INFO.googleMaps.link,
      isExternal: true,
      color: 'bg-[#B86B35] text-white hover:bg-[#9E5624]',
      iconColor: 'text-white',
    },
    {
      title: 'Chat on WhatsApp',
      subtitle: '+383 43 815 010',
      icon: MessageSquare,
      href: BUSINESS_INFO.whatsapp.link,
      isExternal: true,
      color: 'bg-[#FFFFFF] text-[#1C1510] hover:bg-[#F5EFE6] border border-[#EBE3D7]',
      iconColor: 'text-[#25D366]',
    },
    {
      title: 'Call Direct',
      subtitle: 'Reservations & Questions',
      icon: Phone,
      href: BUSINESS_INFO.phone.telLink,
      isExternal: false,
      color: 'bg-[#FFFFFF] text-[#1C1510] hover:bg-[#F5EFE6] border border-[#EBE3D7]',
      iconColor: 'text-[#B86B35]',
    },
    {
      title: 'View Offerings',
      subtitle: 'Specialty Coffee & Bar',
      icon: Utensils,
      href: '/menu',
      isExternal: false,
      color: 'bg-[#FFFFFF] text-[#1C1510] hover:bg-[#F5EFE6] border border-[#EBE3D7]',
      iconColor: 'text-[#B86B35]',
    },
    {
      title: 'Book a Table',
      subtitle: 'Indoor & Terrace Seating',
      icon: CalendarCheck,
      href: '/contact#reserve',
      isExternal: false,
      color: 'bg-[#1A130E] text-[#FAF8F5] hover:bg-black',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section className="py-6 border-y border-[#EBE3D7] bg-[#FFFFFF]/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const content = (
              <div
                className={`p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${action.color}`}
              >
                <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 shrink-0">
                  <Icon className={`w-5 h-5 ${action.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-xs sm:text-sm truncate">
                    {action.title}
                  </p>
                  <p className="text-[11px] opacity-75 truncate">{action.subtitle}</p>
                </div>
              </div>
            );

            if (action.isExternal) {
              return (
                <a
                  key={action.title}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-[#B86B35] rounded-2xl"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={action.title}
                href={action.href}
                className="block focus:outline-none focus:ring-2 focus:ring-[#B86B35] rounded-2xl"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
