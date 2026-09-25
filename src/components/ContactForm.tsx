'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    inquiryType: 'Table Reservation',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number for confirmation.';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Phone number must have at least 6 digits.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate clean realistic submission response
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleWhatsAppInstant = () => {
    const text = `Hello Coffee and more Bar! My name is ${formData.name || 'Guest'}. I would like to inquire about: ${formData.inquiryType}. ${formData.date ? `Date: ${formData.date}` : ''} ${formData.guests ? `Guests: ${formData.guests}` : ''}. ${formData.message ? `Details: ${formData.message}` : ''}`;
    window.open(`https://wa.me/38343815010?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservations & Inquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1510]">
            Get in Touch with Us
          </h2>
          <p className="text-sm sm:text-base text-[#635347] leading-relaxed">
            Reserve a table for your group, organize an evening gathering, or reach out with any inquiries. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#FBF9F5] border border-[#EBE3D7]">
              <h3 className="font-heading font-bold text-xl text-[#1C1510] mb-3">
                Immediate Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-[#635347] leading-relaxed mb-6">
                For instant table bookings or urgent inquiries during operating hours (7:00 AM – 11:00 PM), reach us directly:
              </p>

              <div className="space-y-3.5">
                {/* WhatsApp */}
                <a
                  href={BUSINESS_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] hover:border-[#25D366] hover:shadow-md transition-all flex items-center gap-3.5 group"
                >
                  <div className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm text-[#1C1510]">
                      WhatsApp Direct
                    </p>
                    <p className="text-xs text-[#635347]">{BUSINESS_INFO.phone.display}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#25D366]">Chat Now →</span>
                </a>

                {/* Direct Call */}
                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] hover:border-[#B86B35] hover:shadow-md transition-all flex items-center gap-3.5 group"
                >
                  <div className="p-3 rounded-xl bg-[#F5EFE6] text-[#B86B35] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm text-[#1C1510]">
                      Direct Telephone
                    </p>
                    <p className="text-xs text-[#635347]">{BUSINESS_INFO.phone.display}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#B86B35]">Call Now →</span>
                </a>

                {/* Google Maps Directions */}
                <a
                  href={BUSINESS_INFO.googleMaps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#EBE3D7] hover:border-[#1C1510] hover:shadow-md transition-all flex items-center gap-3.5 group"
                >
                  <div className="p-3 rounded-xl bg-[#1A130E] text-white group-hover:scale-105 transition-transform">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm text-[#1C1510]">
                      Google Maps Navigation
                    </p>
                    <p className="text-xs text-[#635347]">Bulevardi Dëshmorët E Kombit</p>
                  </div>
                  <span className="text-xs font-semibold text-[#1C1510]">Navigate →</span>
                </a>
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-5 rounded-2xl bg-[#F5EFE6] border border-[#EBE3D7] text-xs text-[#635347] space-y-1.5">
              <p className="font-semibold text-[#1C1510] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#B86B35]" />
                Daily Table Reservations
              </p>
              <p>
                Walk-ins are always welcomed! Table reservations are recommended for larger groups and weekend evenings.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FBF9F5] border border-[#EBE3D7] shadow-lg">
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#1C1510]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#635347] max-w-md mx-auto">
                    Your inquiry has been received. Our team will contact you via <strong>{formData.phone}</strong> to confirm your reservation.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          date: '',
                          time: '',
                          guests: '2',
                          inquiryType: 'Table Reservation',
                          message: '',
                        });
                      }}
                      className="btn-secondary text-xs"
                    >
                      Send Another Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppInstant}
                      className="btn-primary text-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Follow Up on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-[#EBE3D7] pb-4 mb-5">
                    <h3 className="font-heading font-bold text-xl text-[#1C1510]">
                      Send an Inquiry or Booking Request
                    </h3>
                    <p className="text-xs text-[#8F7D70] mt-0.5">
                      Fill in the form below and we will confirm promptly.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Arben Krasniqi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all ${
                          errors.name ? 'border-red-500' : 'border-[#D5C8B6]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+383 4X XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all ${
                          errors.phone ? 'border-red-500' : 'border-[#D5C8B6]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="arben@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all"
                      >
                        <option value="Table Reservation">Table Reservation</option>
                        <option value="Evening Group Gathering">Evening Group Gathering</option>
                        <option value="Menu Question">Menu Question</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-xs sm:text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-xs sm:text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-xs sm:text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3-4">3 – 4 people</option>
                        <option value="5-8">5 – 8 people</option>
                        <option value="8+">8+ people (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1510] mb-1.5">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Terrace seating preference, birthday dessert, or dietary notes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D5C8B6] text-sm text-[#1C1510] focus:outline-none focus:ring-2 focus:ring-[#B86B35] transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full sm:w-auto text-sm px-7 py-3"
                    >
                      {status === 'loading' ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppInstant}
                      className="btn-secondary w-full sm:w-auto text-sm px-5 py-3 text-[#25D366] hover:text-[#1ebe5d] border-[#25D366]/40"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
