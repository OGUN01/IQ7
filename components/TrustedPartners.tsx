import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedPartners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: 'Indian Oil',
      logo: '/images/indian_oil.png',
      alt: 'Indian Oil Corporation Logo'
    },
    {
      name: 'OYO Rooms',
      logo: '/images/Oyoroomsbranding.png',
      alt: 'OYO Rooms Logo'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our smart locks secure facilities of major brands across India, providing reliable security solutions for thousands of users daily.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="relative w-32 h-16 md:w-40 md:h-20">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 filter group-hover:brightness-110"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners; 