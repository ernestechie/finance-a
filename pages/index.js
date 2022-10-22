import React from 'react';
import { Hero, Meta } from '../components';

export default function Home() {
  return (
    <>
      <Meta title='Home | Finance-A Investments' />
      <div className='text-gray-800 min-h-full'>
        <Hero />
      </div>
    </>
  );
}
