import React from 'react';
import type { Metadata } from 'next';
import { Phone, MessageSquare, MapPin, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import LocationSection from '@/components/LocationSection';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Contact & Table Reservation | Coffee and more Bar Prishtinë',
  description: `Contact Coffee and more Bar on Bulevardi Dëshmorët E Kombit in Prishtinë. Reserve a table, send an inquiry, or reach us directly via phone or WhatsApp.`,
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'Do I need a reservation to visit?',
      a: 'Walk-ins are always welcomed for all coffee and lounge seating! Reservations are recommended if you are visiting with a group of 4 or more during peak evening hours or weekends.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash as well as all major credit and debit cards (contactless, chip, Apple Pay/Google Pay).',
    },
    {
      q: 'Is there outdoor terrace seating?',
      a: 'Yes, we have beautiful outdoor patio tables directly on Bulevardi Dëshmorët E Kombit with scenic boulevard views.',
    },
    {
      q: 'Is the cafe laptop & remote work friendly?',
      a: 'Absolutely. We offer high-speed complimentary Wi-Fi and comfortable quiet seating with power access during daytime hours.',
    },
  ];

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#F5EFE6] to-[#FBF9F5] border-b border-[#EBE3D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35] mb-3 sm:mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Reach & Booking</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1510] tracking-tight">
            Contact & Table Reservations
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-[#635347] max-w-2xl mx-auto leading-relaxed">
            Have a question, feedback, or looking to book a table for your group? Reach out anytime via the form, WhatsApp, or phone.
          </p>
        </div>
      </section>

      {/* Main Interactive Form & Contact Section */}
      <ContactForm />

      {/* Location, Opening Hours & Map Section */}
      <LocationSection />

      {/* Quick FAQ Section */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF] border-t border-[#EBE3D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-xs font-semibold text-[#B86B35]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1C1510]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-4 sm:p-6 rounded-2xl bg-[#FBF9F5] border border-[#EBE3D7] space-y-1.5 sm:space-y-2"
              >
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1C1510] flex items-start gap-2">
                  <span className="text-[#B86B35] font-black">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#635347] leading-relaxed pl-4 sm:pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

