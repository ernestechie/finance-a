import Aos from 'aos';
import React, { useEffect } from 'react';
import HeroCardsData from '../../static/HeroCardsData';

const HomeHero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //  mb-[768px] md:mb-[160px] lg:mb-[200px] xl:mb-[140px]

  return (
    <header className='header w-full p-8 py-24 lg:px-16'>
      <div className='py-16 grid grid-cols-1 lg:grid-cols-2 '>
        <div className='content text-white'>
          <h1 className='mb-6 text-3xl font-bold uppercase'>
            Entrepreneurship Conference
          </h1>
          <p className='text-xl mb-6'>
            A 4 days seminar directed towards educating early startups and local
            businesses on ways to improve their financial strategies.
          </p>
          <button type='button' className='btn btn-primary uppercase'>
            Join the waitlist
          </button>
        </div>
        <div className='image'></div>
      </div>

      {/* ? WHAT WE DO */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-[1024px]'>
        {HeroCardsData.map((card, index) => (
          <div
            key={`${index + 1}-${card.heading}`}
            className='card bg-white border-[2px] text-center hover:border-purple-500 h-[300px] p-6'
            data-aos='fade-right'
          >
            <p className='text-purple-600 text-5xl flex items-center mx-auto justify-center mb-4 p-4 bg-purple-100 h-20 w-20 rounded-full'>
              {card.icon}
            </p>
            <p className='font-bold text-2xl mb-3'>{card.heading}</p>
            <p className='text-lg'>{card.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .header {
          position: relative;
          background: url(https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)
            center center/cover;
        }

        .header:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(20, 10, 20, 0.8);
        }

        .header * {
          z-index: 5;
          position: relative;
        }
      `}</style>
    </header>
  );
};

export default HomeHero;
