import React from 'react';
import { FaqItem } from '..';
import FaqData from '../../static/FaqData';

const HomeFaq = () => {
  return (
    <section className='p-8 py-16 bg-gray-100 lg:px-24'>
      <h5 className='text-3xl font-black mb-4'>FAQS</h5>
      <p className='text-lg'>Are you confused about anything?</p>
      <p className='text-lg'>
        Do you need more information about us but do not want to contact us?
      </p>
      <p className='text-lg'>
        Here are the most common problems our visitors face, and ways to fix
        them or even better, to avoid them.
      </p>

      <div
        className='card bg-white my-8 max-w-[960px] mx-auto border-2 border-gray-200 lg:my-12'
        data-aos='flip-up'
      >
        {FaqData.map((data, index) => (
          <FaqItem
            key={`item-${index}`}
            question={data.question}
            answer={data.answer}
            current={index}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFaq;
