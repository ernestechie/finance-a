import React from 'react';
import { AiOutlineSafety } from 'react-icons/ai';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';

const HomeWorkEthics = () => {
  return (
    <section className='p-8 py-16 bg-white lg:px-24'>
      <h4 className='font-black text-3xl uppercase mb-4'>Work Ethics</h4>
      <p className='text-lg text-gray-700'>
        Our agency seek to profit like any other financial institution. However,
        we strive to generate earnings without sacrificing principles or
        inflicting harm.
      </p>
      <p className='py-4 text-lg text-gray-700 mb-8'>
        We employ persons having the knowledge, know-how and responsibility
        feeling required for their job duties
      </p>
      {/*   */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-[1024px] mx-auto'>
        <div className='content w-full h-full'>
          <div
            className='flex items-center justify-start gap-4 mb-8 md:mb-12'
            data-aos='flip-right'
          >
            <div className='icon text-5xl text-purple-600'>
              <GiTakeMyMoney />
            </div>
            <div className='content'>
              <p className='font-bold text-xl uppercase'>Profit seeking</p>
              <p className='text-gray-600'>
                We make moves to achieve a monetary gain in a project or
                agreement. This expands our firm so we help more people.
              </p>
            </div>
          </div>
          <div
            className='flex items-center justify-start gap-4 my-8 md:my-12'
            data-aos='flip-left'
          >
            <div className='icon text-5xl text-purple-600'>
              <AiOutlineSafety />
            </div>
            <div className='content'>
              <p className='font-bold text-xl uppercase'>Honesty & Safety</p>
              <p className='text-gray-600'>
                We offer customer service with honesty and commitment, this
                builds trust with our clients, leading to trust for years.
              </p>
            </div>
          </div>
          <div
            className='flex items-center justify-start gap-4 mt-8 md:mt-12'
            data-aos='flip-right'
          >
            <div className='icon text-5xl text-purple-600'>
              <RiTeamLine />
            </div>
            <div className='content'>
              <p className='font-bold text-xl uppercase'>Team work</p>
              <p className='text-gray-600'>
                Team work provides members with experience, increases
                efficiency, financial savings, innovation and morale.
              </p>
            </div>
          </div>
        </div>
        <div
          className='zoom rounded-xl w-full h-72 md:h-96'
          data-aos='flip-left'
        >
          <div
            className='child rounded-xl w-full h-full'
            style={{
              background: `url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80) center center/cover`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkEthics;
