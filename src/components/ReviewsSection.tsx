import React from 'react';
import { Star, CheckCircle, ArrowUpRight, MessageSquareQuote, Navigation } from 'lucide-react';
import { GENUINE_REVIEWS, BUSINESS_INFO } from '@/data/business';

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#EBE3D7]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Genuine Google Feedback</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1510]">
              Loved by Locals & Visitors
            </h2>
            <p className="text-sm sm:text-base text-[#635347] leading-relaxed">
              Read authentic feedback from guests who visited Coffee and more Bar on Bulevardi Dëshmorët E Kombit in Prishtinë.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF9F5] border border-[#EBE3D7] flex items-center gap-4 shrink-0 shadow-xs">
            <div className="w-14 h-14 rounded-xl bg-[#1A130E] text-[#FAF8F5] flex flex-col items-center justify-center font-heading font-black text-xl leading-none">
              <span>5.0</span>
              <span className="text-[10px] text-amber-400 font-normal mt-0.5">★★★★★</span>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#1C1510]">
                Google Maps Verified
              </p>
              <p className="text-xs text-[#8F7D70]">
                {BUSINESS_INFO.rating.totalReviews} Total Verified Reviews
              </p>
              <a
                href={BUSINESS_INFO.googleMaps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#B86B35] hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>View on Google</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GENUINE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-3xl bg-[#FBF9F5] border border-[#EBE3D7] flex flex-col justify-between hover:border-[#D5C8B6] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#8F7D70] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {review.timeAgo}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-[#1C1510] leading-relaxed italic relative">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="pt-6 mt-4 border-t border-[#EBE3D7] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1A130E] text-white flex items-center justify-center font-bold text-xs">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1C1510]">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#8F7D70]">Google Reviewer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#1A130E] to-[#2D221A] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-white/10 text-amber-400 shrink-0 hidden sm:block">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg">
                Have you visited Coffee and more Bar?
              </h3>
              <p className="text-xs sm:text-sm text-[#B5A496]">
                Share your experience on Google Maps to help others discover our cafe & bar.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleMaps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm whitespace-nowrap !py-2.5 !px-5"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open Google Maps Listing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
