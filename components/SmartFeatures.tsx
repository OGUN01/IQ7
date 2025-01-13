import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeatureIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'fingerprint':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm.5 3c-2.486 0-4.5 2.014-4.5 4.5v2c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v2c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-2.486-2.014-4.5-4.5-4.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5v2c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v2c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-1.381-1.119-2.5-2.5-2.5z"/>
        </svg>
      );
    case 'remote':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4v16h10V4H7zm5 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V6h10v8z"/>
        </svg>
      );
    case 'card':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      );
    case 'keypad':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      );
    case 'hotel':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
        </svg>
      );
    case 'door':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/>
        </svg>
      );
    case 'pin':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
        </svg>
      );
    case 'face':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
        </svg>
      );
    case 'bluetooth':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
        </svg>
      );
    default:
      return null;
  }
};

const SmartFeatures = () => {
  const features = [
    { icon: 'fingerprint', title: 'Fingerprint Drawer/Cabiners Lock' },
    { icon: 'remote', title: 'Remote Control' },
    { icon: 'fingerprint', title: 'Fingerprint + Locker Lock/Cabinet Lock' },
    { icon: 'card', title: 'Card Key' },
    { icon: 'keypad', title: 'Keypad + RFID Mortice Lock' },
    { icon: 'hotel', title: 'Hotel Lock' },
    { icon: 'door', title: 'Fingerprint + Main Door Lock' },
    { icon: 'pin', title: 'PIN Code' },
    { icon: 'face', title: 'Fingerprint + Main Door Lock + 3D Face ID' },
    { icon: 'bluetooth', title: 'Bluetooth' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Smart Features For Smarter Living</h2>
          <p className="text-gray-600 text-sm">Our smart locks come with advanced features to enhance your security experience</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Image */}
          <div className="lg:w-1/3 flex justify-end">
            <div className="relative w-[300px] h-[400px]">
              <Image
                src="/images/featureimg.jpg"
                alt="Smart Lock Feature"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:w-1/3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-5 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <p className="text-xs font-medium leading-tight">{feature.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/3 flex justify-start">
            <div className="relative w-[300px] h-[400px]">
              <Image
                src="/images/featureimg1.jpg"
                alt="Smart Lock Feature"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures; 