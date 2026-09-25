import React from 'react';
import {
  MapPin,
  Coffee,
  HeartHandshake,
  Sparkles,
  Utensils,
  CreditCard,
  CheckCircle,
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '@/data/business';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#B86B35]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#B86B35]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#B86B35]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#B86B35]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#B86B35]" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-[#B86B35]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#B86B35]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5EFE6]/60 border-y border-[#EBE3D7]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE3D7] text-xs font-semibold text-[#B86B35]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Coffee & More Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1C1510]">
            Why Visit {BUSINESS_INFO.name}
          </h2>
          <p className="text-sm sm:text-base text-[#635347] leading-relaxed">
            Every detail is designed to give you an extraordinary coffeehouse and evening lounge experience right on Prishtinë&apos;s most picturesque boulevard.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#FFFFFF] border border-[#EBE3D7] shadow-sm hover:shadow-xl hover:border-[#D5C8B6] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] border border-[#EBE3D7] flex items-center justify-center group-hover:bg-[#B86B35]/10 group-hover:border-[#B86B35]/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#8F7D70]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1C1510] mb-2 group-hover:text-[#B86B35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#635347] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-medium text-[#B86B35]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
