import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Chawla",
      position: "Head of Plant Utilities, Reliance Textiles",
      rating: 5,
      text: "The APFC and PCC panels provided by Anand Electricals significantly cut down our utility reactive power penalties. Their technical execution was precise and met the standards of our European manufacturing guidelines."
    },
    {
      name: "Dr. Sanjay Mehta",
      position: "Director of Infrastructure, Max Healthcare",
      rating: 5,
      text: "Anand Electricals engineered redundant AMF panels and earthing loops for our super-specialty surgical towers. The prompt technical coordination and regulatory document clearances were extremely professional."
    },
    {
      name: "Vikas Patel",
      position: "Senior Project Manager, Larsen & Toubro",
      rating: 5,
      text: "Working with Anand on the RIICO substation project was a seamless experience. Their engineering drawings, panel wiring layouts, and compliance documentation made safety inspector approvals hassle-free."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto testimonial-swiper-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-industrial-muted !opacity-30',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-industrial-cyan !opacity-100',
        }}
        navigation={true}
        className="pb-16"
      >
        {reviews.map((rev, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-slate-200/60 rounded-2xl p-10 md:p-12 text-center relative overflow-hidden shadow-lg">
              {/* Decorative Quote Icon */}
              <FaQuoteLeft className="text-industrial-cyan/5 text-6xl absolute top-8 left-8 pointer-events-none" />
              
              {/* Stars */}
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
              
              <p className="font-body text-base md:text-lg text-slate-800 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                "{rev.text}"
              </p>
              
              <div className="border-t border-slate-100 pt-6 max-w-xs mx-auto">
                <h4 className="font-heading font-semibold text-slate-900 text-base">
                  {rev.name}
                </h4>
                <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider font-heading">
                  {rev.position}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
