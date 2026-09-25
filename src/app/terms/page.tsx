import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Terms of Service | Coffee and more Bar',
  description: `Terms of Service for Coffee and more Bar on Bulevardi Dëshmorët E Kombit, Prishtinë.`,
};

export default function TermsPage() {
  return (
    <div className="bg-[#FBF9F5] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B86B35] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-sm space-y-6 text-sm text-[#635347] leading-relaxed">
          <div className="flex items-center gap-3 border-b border-[#EBE3D7] pb-5">
            <div className="p-3 rounded-2xl bg-[#F5EFE6] text-[#B86B35]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1510]">
                Terms of Service
              </h1>
              <p className="text-xs text-[#8F7D70]">
                {BUSINESS_INFO.name} • {BUSINESS_INFO.address.city}, Kosovo
              </p>
            </div>
          </div>

          <p>
            Welcome to the website of <strong>{BUSINESS_INFO.name}</strong>. By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            1. Website Use & Information
          </h2>
          <p>
            All information provided on this website—including menu descriptions, opening hours, and location details—is provided for general informational purposes. While we strive to ensure all information is accurate and up to date, seasonal offerings and daily schedules may occasionally vary.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            2. Reservations & Group Bookings
          </h2>
          <p>
            Online reservation requests submitted through this website represent booking inquiries. A reservation is officially confirmed once acknowledged by our team via phone or WhatsApp.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            3. Intellectual Property
          </h2>
          <p>
            The content, images, graphics, logos, and layout featured on this website are the property of {BUSINESS_INFO.name} or used with permission, and are protected by applicable intellectual property laws.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            4. Contact
          </h2>
          <p>
            For questions regarding these terms, please visit us at <strong>{BUSINESS_INFO.address.full}</strong> or call <strong>{BUSINESS_INFO.phone.display}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
