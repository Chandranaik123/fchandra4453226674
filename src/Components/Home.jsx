import React, { useEffect, useState } from 'react';
import './Home.css';
import Footer from './Footer';
import Pricing from './Pricing';
import Card from './Home Component/Card';
import Stat from './Home Component/Stat';
import Testimonial from './Home Component/Testimonial';

function Home() {
  const [isTypingAnimationDone, setIsTypingAnimationDone] = useState(false);

  useEffect(() => {
    // Set a timeout to mark the typing animation as done after a certain duration
    const typingAnimationTimeout = setTimeout(() => {
      setIsTypingAnimationDone(true);
    }, 2000); // Adjust the duration as needed (in milliseconds)

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(typingAnimationTimeout);
  }, []);

  return (
    <>
    <div className=" flex mt-20 justify-center items-center bg-white">
      <section className="w-full px-4 md:px-8 py-12">
        <div className="text-center">
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight text-gray-800 ${isTypingAnimationDone ? 'typing-done' : 'typing-animation'}`}>
  Empower Your Future with <br className="hidden lg:block"/> Cutting-Edge <span className="text-blue-600">Computer Education</span>
</h1>
          <p className="mt-6 text-base leading-relaxed text-gray-800">Unlock the power of technology with our computer education programs. From basics to advanced skills, we offer tailored courses to suit every learner. <br /> Dive into the digital world with us and elevate your tech skills today! </p>
          <div className="flex justify-center mt-8">
            {/* <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Make a Call</button> */}
            <a href="tel:+919632902141" className="px-6 py-3 ml-4 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-lg shadow-lg hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Make a Call</a>
          </div>
        </div>
      </section>
      
    </div>
    <div className='mt-[15vh]'>
      <Pricing/>
    </div>
      <div className='flex-col justify-center '>
        <div className='flex justify-center'>
      <h1 className=' text-black text-3xl  mt-[15vh]'>Our Branch</h1>
        </div>
      <div className='flex justify-center'>
      <Card/>
      </div>
      <div className='my-10'>
        <Stat/>
      </div>
      <div className='my-20'>
        <Testimonial/>
      </div>
      </div>
      <div className='my-20'>
      <Footer/>
      </div>
    </>
  );
}

export default Home;
