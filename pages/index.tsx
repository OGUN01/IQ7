import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductBanner from '../components/ProductBanner';
import StatsSection from '../components/StatsSection';
import SecurityVision from '../components/SecurityVision';
import FeaturesGrid from '../components/FeaturesGrid';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import ProductGrid from '../components/ProductGrid';
import TrustedPartners from '../components/TrustedPartners';
import SmartFeatures from '../components/SmartFeatures';

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

interface HeroSlide {
  image: string;
}

const products: Product[] = [
  {
    id: 'IQ030',
    name: 'Smart Lock IQ030',
    description: 'For Drawer, cabinet(wooden or steel)',
    price: 6735,
    originalPrice: 8082,
    image: '/images/iq030.png',
    whatsappLink: 'https://wa.me/+919927014543',
    tag: 'Best Seller',
    features: ['Mobile App', 'RFID Card'],
    category: 'drawer'
  },
  {
    id: 'IQ040',
    name: 'Smart Lock IQ040',
    description: 'For Drawer, cabinet(wooden or steel)',
    price: 7965,
    originalPrice: 9558,
    image: '/images/iq040.png',
    whatsappLink: 'https://wa.me/+919927014543',
    tag: 'Popular',
    features: ['Mobile App', 'Password'],
    category: 'drawer'
  },
  {
    id: 'IQ050',
    name: 'Smart Lock IQ050',
    description: 'For Drawer, cabinet(wooden or steel)',
    price: 8505,
    originalPrice: 10206,
    image: '/images/iq050.png',
    whatsappLink: 'https://wa.me/+919927014543',
    tag: 'New Arrival',
    features: ['Fingerprint', 'Mobile App'],
    category: 'drawer'
  },
  {
    id: 'IQ060',
    name: 'Smart Lock IQ060',
    description: 'For Drawer, cabinet(wooden or steel)',
    price: 8250,
    originalPrice: 9900,
    image: '/images/iq060.png',
    whatsappLink: 'https://wa.me/+919927014543',
    features: ['Mobile App', 'Password'],
    category: 'drawer'
  },
  {
    id: 'IQ910',
    name: 'Smart Lock IQ910',
    description: 'Using for wooden door, Metal door, Composite door',
    price: 27600,
    originalPrice: 33120,
    image: '/images/iq910.png',
    whatsappLink: 'https://wa.me/+919927014543',
    tag: 'Premium',
    features: ['Password', 'Fingerprint', 'Card'],
    category: 'door'
  },
  {
    id: 'IQ920',
    name: 'Smart Lock IQ920',
    description: 'Unlock Smart Life, password,Finger print, Card & Key',
    price: 38400,
    originalPrice: 46080,
    image: '/images/iq920.png',
    whatsappLink: 'https://wa.me/+919927014543',
    tag: 'Enterprise',
    features: ['Password', 'Fingerprint', 'Card', 'Key'],
    category: 'door'
  }
];

const features = [
  { title: 'Fingerprint Drawer/Cabiners Lock', icon: '🔐' },
  { title: 'Remote Control', icon: '📱' },
  { title: 'Fingerprint + Locker Lock/Cabinet Lock', icon: '👆' },
  { title: 'Card Key', icon: '💳' },
  { title: 'Keypad + RFID Mortice Lock', icon: '🔑' },
  { title: 'Hotel Lock', icon: '🏨' },
  { title: 'Fingerprint + Main Door Lock', icon: '🚪' },
  { title: 'PIN Code', icon: '🔢' },
  { title: 'Fingerprint + Main Door Lock + 3D Face ID', icon: '👤' },
  { title: 'Bluetooth', icon: '📶' }
];

const heroSlides: HeroSlide[] = [
  {
    image: '/images/banner1.jpg',
  },
  {
    image: '/images/banner2.jpg',
  },
  {
    image: '/images/banner3.jpg',
  }
];

const stats = [
  { value: '1000+', label: 'Installations' },
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Satisfaction' }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    content: "The smart lock has completely transformed how I manage access to my office. The fingerprint recognition is lightning fast and the app makes it easy to grant temporary access to visitors.",
    image: "/images/testimonial1.jpg",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Homeowner",
    content: "Installation was a breeze and the customer support team was incredibly helpful. I love being able to check if my door is locked from anywhere using my phone.",
    image: "/images/testimonial2.jpg",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Hotel Manager",
    content: "We have installed these smart locks across our property and they have made operations so much smoother. The reliability and security features are outstanding.",
    image: "/images/testimonial3.jpg",
    rating: 5
  },
  {
    name: "Neha Gupta",
    role: "Tech Enthusiast",
    content: "The biometric security is top-notch and the mobile app interface is very user-friendly. It is exactly what I was looking for in a modern security solution.",
    image: "/images/testimonial4.jpg",
    rating: 5
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProducts = products.filter(product => {
    if (activeTab === 'all') return true;
    if (activeTab === 'drawer') return product.category === 'drawer';
    if (activeTab === 'door') return product.category === 'door';
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection 
          slides={heroSlides} 
        />
        <StatsSection stats={stats} />
        <ProductGrid 
          products={products}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <FeaturesGrid features={features} />
        <SecurityVision />
        <SmartFeatures />
        <ContactSection />
        <Testimonials testimonials={testimonials} />
        <TrustedPartners />
      </main>
      <Footer />
    </div>
  );
}
