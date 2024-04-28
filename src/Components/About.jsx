import React from 'react';

function About() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-800 mb-6">
            Welcome to our computer education center! My name is Chandra Naik, and I'm the founder of this institution. At our center, we are passionate about empowering individuals with essential digital skills to thrive in today's technology-driven world.
          </p>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Mission</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our mission is to provide high-quality computer education and training programs that equip our students with the knowledge and skills needed to succeed in the digital age. We are committed to fostering a supportive learning environment that inspires creativity, innovation, and lifelong learning.
          </p>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our vision is to become a leading institution in computer education, recognized for excellence in teaching and learning, cutting-edge curriculum, and industry-relevant training. We aspire to empower individuals from all backgrounds to harness the power of technology and achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
