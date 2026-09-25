import React from 'react';
import { BUSINESS_INFO, GENUINE_REVIEWS } from '@/data/business';

export default function SchemaJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CaféOrCoffeeShop',
    '@id': 'https://coffeeandmorebar.com/#cafe',
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description.short,
    url: 'https://coffeeandmorebar.com',
    telephone: BUSINESS_INFO.phone.display,
    hasMap: BUSINESS_INFO.googleMaps.link,
    priceRange: '$$',
    servesCuisine: [
      'Specialty Coffee',
      'Espresso Drinks',
      'Artisanal Pastries & Desserts',
      'European Wines',
      'Craft Beer',
      'Teas & Fresh Juices'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'Kosovo',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.googleMaps.coordinates.lat,
      longitude: BUSINESS_INFO.googleMaps.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '23:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.score.toString(),
      reviewCount: BUSINESS_INFO.rating.totalReviews.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: GENUINE_REVIEWS.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.text,
    })),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating Terrace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Credit & Debit Cards Accepted', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Laptop Friendly Workspace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Table Service', value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
