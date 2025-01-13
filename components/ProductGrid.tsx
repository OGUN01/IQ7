import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  whatsappLink: string;
  tag?: string;
  features: string[];
  category: 'drawer' | 'door' | 'other';
}

interface ProductGridProps {
  products: Product[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, activeTab, onTabChange }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProducts = products.filter(product => {
    if (activeTab === 'all') return true;
    if (activeTab === 'drawer') return product.category === 'drawer';
    if (activeTab === 'door') return product.category === 'door';
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'drawer', label: 'Drawer Locks' },
    { id: 'door', label: 'Door Locks' },
  ];

  return (
    <section id="products" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Best Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please select the product category you want to explore
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative overflow-hidden px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 
                ${activeTab === tab.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Product Tag */}
              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>
              )}

              {/* Product Image */}
              <div 
                onClick={() => window.open(product.whatsappLink, '_blank')}
                className="relative h-64 bg-gray-100 group-hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="p-6 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <span className="bg-white/90 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                    Contact on WhatsApp
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/5 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-red-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-1 rounded-md">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <a
                  href={product.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-xl hover:opacity-90 transition-opacity duration-300"
                >
                  Know More
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}

          {/* Explore More Products Card */}
          <motion.a
            href="https://wa.me/+919927014543"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: filteredProducts.length * 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-gray-200"
          >
            <div className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Explore More Products
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Click here to see all available products in this category
              </p>
              <span
                className="inline-flex items-center px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-300"
              >
                View All
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid; 