import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const products = [
  'IQ030', 'IQ040', 'IQ050', 'IQ060', 'IQ910', 'IQ920'
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product Gallery</h1>
        
        {/* Main Gallery Slider */}
        <div className="mb-12">
          <Slider {...settings}>
            {products.map((productId) => (
              <div key={productId} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={`/assets/images/${productId}.jpg`}
                    alt={`Smart Lock ${productId}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Smart Lock {productId}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((productId) => (
            <div key={productId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/assets/images/${productId}.jpg`}
                alt={`Smart Lock ${productId}`}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Smart Lock {productId}</h3>
                <p className="text-gray-600 mt-2">
                  High-security smart lock with advanced features
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
