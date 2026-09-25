import React from 'react';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quick Actions */}
      <QuickActions />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Featured Menu / Offerings */}
      <MenuSection limit={6} />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Photo Gallery */}
      <GallerySection limit={6} />

      {/* 7. Google Reviews */}
      <ReviewsSection />

      {/* 8. Location & Operating Hours */}
      <LocationSection />

      {/* 9. Contact & Reservations Form */}
      <ContactForm />
    </>
  );
}
