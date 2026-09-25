import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export const metadata: Metadata = {
  title: 'Privacy Policy | Coffee and more Bar',
  description: `Privacy Policy for Coffee and more Bar on Bulevardi Dëshmorët E Kombit, Prishtinë.`,
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1510]">
                Privacy Policy
              </h1>
              <p className="text-xs text-[#8F7D70]">
                {BUSINESS_INFO.name} • {BUSINESS_INFO.address.city}, Kosovo
              </p>
            </div>
          </div>

          <p>
            This Privacy Policy explains how <strong>{BUSINESS_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and safeguards information when you visit our website or interact with our services in person at <strong>{BUSINESS_INFO.address.full}</strong>.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you use our online contact or table reservation form, we may collect your name, phone number, email address, requested reservation details, and any notes you provide. This information is used strictly to communicate regarding your reservation or inquiry.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process and confirm table reservations and group bookings.</li>
            <li>To respond to your questions or service inquiries via phone or WhatsApp.</li>
            <li>To maintain the security, functionality, and performance of our website.</li>
          </ul>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            3. Data Retention & Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. Information submitted through contact forms is retained only as long as necessary to fulfill your request.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            4. Third-Party Links & Services
          </h2>
          <p>
            Our website includes links to third-party services, such as Google Maps for directions and WhatsApp for direct messaging. These services operate under their own privacy policies.
          </p>

          <h2 className="font-heading font-bold text-lg text-[#1C1510] pt-4">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, you may contact us at:
            <br />
            <strong>{BUSINESS_INFO.name}</strong>
            <br />
            {BUSINESS_INFO.address.full}
            <br />
            Phone: {BUSINESS_INFO.phone.display}
          </p>
        </div>
      </div>
    </div>
  );
}
