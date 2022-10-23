import React from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { MdOutlineEmojiObjects } from 'react-icons/md';

const HomeObjectives = () => {
  return (
    <section className='bg-gray-100 p-8 py-16 lg:px-24'>
      <h3 className='font-black text-3xl uppercase'>Aims & Objectives</h3>
      <div className='text-lg py-4 text-gray-800'>
        <p>
          We are a firm aimed towards providing financial aid, guidance in the
          form of loans, grants and sponsorship.
        </p>
        <p>
          Our aim is, but not limited to supporting local businesses, young
          innovators & early startups in making societal change & achieving
          greatness
        </p>
      </div>

      <div className='my-4 grid grid-cols-1 gap-4 mx-auto w-full max-w-[1200px] md:grid-cols-2'>
        <div
          className='bg-white p-8 flex items-center justify-between gap-4 h-44 border-[1px] border-gray-300'
          data-aos='flip-right'
        >
          <div className='icon p-4 bg-purple-500 text-white text-4xl'>
            <AiOutlineAim />
          </div>
          <div data-aos='flip-left'>
            <p className='font-bold text-gray-900 uppercase mb-1 text-lg'>
              Aim
            </p>
            <p>
              Promoting local businesses, young innovators & early startups,
              enabling them grow rapidly.
            </p>
          </div>
        </div>
        <div
          className='bg-white p-8 flex items-center justify-between gap-4 h-44 border-[1px] border-gray-300'
          data-aos='flip-left'
        >
          <div className='icon p-4 bg-purple-500 text-white text-4xl'>
            <MdOutlineEmojiObjects />
          </div>
          <div data-aos='flip-right'>
            <p className='font-bold text-gray-900 uppercase mb-1 text-lg'>
              Objective
            </p>
            <p>
              Providing financial aid, guidance in the form of loans, grants and
              sponsorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeObjectives;
