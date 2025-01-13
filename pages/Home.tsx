import React, { useState, useEffect } from 'react';

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
  title: string;
  highlight: string;
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
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
    title: 'ELEVATE HOME SECURITY WITH',
    highlight: 'INTELLIGENT',
    description: 'Experience convenience and advanced features. Remote access, activity monitoring, and secure encryption. Upgrade your security now!',
    image: '/images/banner1.jpg',
    stats: [
      { value: '1000+', label: 'Installations' },
      { value: '24/7', label: 'Support' },
      { value: '100%', label: 'Satisfaction' }
    ]
  },
  {
    title: 'SMART LOCKS FOR',
    highlight: 'MODERN LIVING',
    description: 'Transform your home security with cutting-edge smart locks. Easy to install, simple to use, impossible to crack.',
    image: '/images/banner2.jpg'
  },
  {
    title: 'SECURE YOUR SPACE WITH',
    highlight: 'INNOVATION',
    description: 'Advanced biometric security, real-time monitoring, and seamless integration with your lifestyle.',
    image: '/images/banner3.jpg'
  }
];

const Home = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Bottom Action Bar with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-gradient-to-t from-black/90 to-transparent h-48">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 group text-sm"
                >
                  Explore Products
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <a
                  href="https://wa.me/+919927014543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 group text-sm"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Slide Controls */}
              <div className="flex gap-1.5">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-8 h-1 rounded-full transition-all ${
                      currentSlide === index ? 'bg-primary w-12' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Compact and Clear */}
      <section className="py-2.5 bg-gray-600/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-16">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white leading-none mb-0.5">1000+</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-200/90 font-medium">
                  Successful Installations
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white leading-none mb-0.5">24/7</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-200/90 font-medium">
                  Technical Support
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white leading-none mb-0.5">100%</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-200/90 font-medium">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Best Products</h2>
          <p className="text-gray-600 text-center mb-8">
            Choose from our wide range of smart locks designed for every need
          </p>

          {/* Product Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab('drawer')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'drawer'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Drawer Locks
            </button>
            <button
              onClick={() => setActiveTab('door')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'door'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Door Locks
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <a
                    href={`https://wa.me/+919927014543`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain p-4 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </a>
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                      <span className="text-sm text-red-500 ml-2">-20% off</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/+919927014543`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all text-sm text-center"
                    >
                      Quick View
                    </a>
                    <a
                      href={`https://wa.me/+919927014543`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12h.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Explore More Products Card */}
            <a
              href={`https://wa.me/+919927014543`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Explore More Products</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {activeTab === 'all' && 'Discover our complete range of smart locks'}
                  {activeTab === 'drawer' && 'Discover our complete range of drawer locks'}
                  {activeTab === 'door' && 'Discover our complete range of door locks'}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              We Want To Improve Your Life's Security & Safety.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  IQ7 is not just a brand; it's a commitment to excellence and innovation. We are a team of dedicated experts, engineers, and creative minds who are passionate about redefining security norms. With years of experience in the industry, we have harnessed the power of technology to develop smart locks that set new benchmarks in safety and convenience.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where security is seamlessly integrated into the modern way of life. Our smart locks are designed to empower individuals, families, and businesses to take charge of their security effortlessly, all while embracing the digital age.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  Our Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Powered by advanced algorithms and state-of-the-art encryption, IQ7 smart locks provide an impenetrable fortress for your living and working spaces. Our commitment to cutting-edge technology ensures that you can control and monitor access with a few taps on your smartphone. Whether you're at home, at the office, or on vacation, you're always in control.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <a href="tel:+919927014543" className="flex items-center justify-center gap-4 text-primary hover:text-accent transition-colors">
                  <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M14.417 6.679C15.447 7.773 16 9.125 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C5.447 7.773 6 9.125 6 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"/>
                    </svg>
                  </span>
                  <span className="text-xl font-bold">+91 99270 14543</span>
                </a>
              </div>
            </div>

            {/* Right Image with Features */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                <img 
                  src="/images/pro-2.png" 
                  alt="IQ7 Smart Lock Features" 
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              {/* Feature List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    🔐
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    Mobile App Unlock
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    📱
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    Remote Control
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    👆
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    Fingerprint + Locker Lock/Cabinet Lock
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    💳
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    Card Key
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    🔑
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                    Keypad + RFID Mortice Lock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="lg:w-1/4">
              <div className="relative">
                <img
                  src="/images/featureimg1.jpg"
                  alt="Smart Lock Feature"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-center mb-12">Smart Features For Smarter Living</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/4">
              <div className="relative">
                <img
                  src="/images/featureimg.jpg"
                  alt="Smart Lock Feature"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say About Us</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="w-full md:w-[380px] group">
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 right-8 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.417 6.679C15.447 7.773 16 9.125 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C5.447 7.773 6 9.125 6 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"/>
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400/50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p className="text-white/90 mb-6 text-lg">"IQ7 smart lock has shown me a new way of home security. Now, I can personally control who enters my home. The remote access feature has truly changed everything."</p>
                <p className="text-white font-semibold">Rajesh K.</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-[380px] group">
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 right-8 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.417 6.679C15.447 7.773 16 9.125 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C5.447 7.773 6 9.125 6 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"/>
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400/50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p className="text-white/90 mb-6 text-lg">"I need to focus on my shops security. IQ7 smart lock has made my life easier. The remote monitoring feature keeps me updated about what's happening even when I'm not around."</p>
                <p className="text-white font-semibold">Priya S.</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full md:w-[380px] group">
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 right-8 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.417 6.679C15.447 7.773 16 9.125 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C5.447 7.773 6 9.125 6 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C-.409 12.322-2 10.841-2 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"/>
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-400/50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p className="text-white/90 mb-6 text-lg">"I thought using a smart lock would be difficult, but IQ7 changed my perception. Its modern design perfectly matches my home, and using my phone as a key is very simple."</p>
                <p className="text-white font-semibold">Rahul G.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Householders Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our smart locks secure facilities of India's most prestigious organizations, 
              delivering reliability and innovation to thousands of users daily.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* Indian Oil Logo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
                <img 
                  src="/images/indian_oil.png" 
                  alt="Indian Oil Corporation" 
                  className="h-16 md:h-20 w-auto object-contain transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* OYO Logo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
                <img 
                  src="/images/Oyoroomsbranding.png" 
                  alt="OYO Rooms" 
                  className="h-16 md:h-20 w-auto object-contain transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Join 1000+ businesses that trust IQ7 Smart Locks
            </p>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4">
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Quick view content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
