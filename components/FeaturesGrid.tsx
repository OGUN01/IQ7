import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  icon: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeatureIcon = ({ type }: { type: string }) => {
  // Custom SVG icons for each feature type
  const icons = {
    fingerprint: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11Z" />
        <path d="M16 12.5C16 14.9853 13.9853 17 11.5 17C9.01472 17 7 14.9853 7 12.5C7 10.0147 9.01472 8 11.5 8C13.9853 8 16 10.0147 16 12.5Z" />
        <path d="M19 12.5C19 16.6421 15.6421 20 11.5 20C7.35786 20 4 16.6421 4 12.5C4 8.35786 7.35786 5 11.5 5C15.6421 5 19 8.35786 19 12.5Z" />
      </svg>
    ),
    remote: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 18V6M12 6L7 11M12 6L17 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
      </svg>
    ),
    card: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10H21" />
        <path d="M7 15H9" />
      </svg>
    ),
    keypad: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8H8.01M12 8H12.01M16 8H16.01M8 12H8.01M12 12H12.01M16 12H16.01M8 16H8.01M12 16H12.01M16 16H16.01" strokeLinecap="round" />
      </svg>
    ),
    hotel: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 21H21M3 18H21M6 18V13M10 18V13M14 18V13M18 18V13M21 13H3L12 4L21 13Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    door: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 21H21M4 21V3H20V21" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z" />
      </svg>
    ),
    pin: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 15V17M6 9H18M6 9C4.89543 9 4 8.10457 4 7V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V7C20 8.10457 19.1046 9 18 9M6 9L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V9" strokeLinecap="round" />
      </svg>
    ),
    face: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 9H9.01M15 9H15.01M12 16C13.6569 16 15 14.6569 15 13H9C9 14.6569 10.3431 16 12 16Z" strokeLinecap="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      </svg>
    ),
    bluetooth: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 4L18 9L12 14M12 14L18 19L12 24M12 14L6 19M12 14L6 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  const getIcon = (type: string) => {
    const iconMap: { [key: string]: keyof typeof icons } = {
      '🔐': 'fingerprint',
      '📱': 'remote',
      '👆': 'fingerprint',
      '💳': 'card',
      '🔑': 'keypad',
      '🏨': 'hotel',
      '🚪': 'door',
      '🔢': 'pin',
      '👤': 'face',
      '📶': 'bluetooth'
    };

    return icons[iconMap[type] || 'fingerprint'];
  };

  return (
    <div className="text-primary">
      {getIcon(type)}
    </div>
  );
};

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Advanced Features for Modern Security
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our smart locks come packed with cutting-edge features designed to provide maximum security and convenience for your home or business.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Feature Content */}
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/+919927014543"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors group"
          >
            <span>Contact Us for More Details</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 