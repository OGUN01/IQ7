import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';

interface HeroSlide {
  image: string;
}

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const handleExploreClick = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = element.offsetTop - 100; // Account for header
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    window.open('https://wa.me/+919927014543', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative h-screen bg-gray-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 h-2 bg-white/50 rounded-full"></span>`;
          },
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                className="brightness-75"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Action Buttons */}
      <div className="absolute bottom-12 left-8 z-50 flex gap-4">
        <motion.button
          onClick={handleExploreClick}
          type="button"
          className="group relative px-5 py-2 bg-primary/90 backdrop-blur-md rounded-lg overflow-hidden hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 text-sm font-medium text-white flex items-center gap-2">
            Explore Products
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        <motion.button
          onClick={handleContactClick}
          type="button"
          className="group relative px-5 py-2 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg shadow-black/5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 text-sm font-medium text-white flex items-center gap-2">
            Contact Us
            <svg className="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.82.124.933-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.48.808z" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection; 