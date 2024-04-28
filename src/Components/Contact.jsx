import React from 'react';

function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12">Get in Touch</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Have questions or want to learn more about our computer education programs? Feel free to reach out to us using the contact information provided below, or connect with us on social media.
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-800 mb-2">Phone: +91-9632902141</p>
            <p className="text-lg text-gray-800 mb-2">Email: chandraanaik1993@gmail.com</p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Location</h2>
            <p className="text-lg text-gray-800 mb-2">Balaji Complex, Halady Road Goliyangadi , Karnataka 576212.</p>
            <p className="text-lg text-gray-800 mb-2">India.</p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Map</h2>
            <div className="h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.8739974443397!2d74.91036067485197!3d13.543320186827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc9d5404c933ab%3A0x6e8f0482cd71b297!2sSHREE%20MALLIKARJUNA%20COMPUTER%20EDUCATION%20CENTER%20GOLIYANGADI!5e0!3m2!1sen!2sin!4v1714290330796!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy"
                title="Map"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
