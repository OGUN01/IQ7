import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We are a leading provider of smart security solutions, committed to making homes
              and businesses safer through innovative technology. Our journey began with a
              simple mission: to revolutionize the way people think about security.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we serve thousands of satisfied customers, providing them with
              state-of-the-art smart locks that combine convenience with uncompromising security.
            </p>
          </div>
          <div>
            <Image
              src="/images/about.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
