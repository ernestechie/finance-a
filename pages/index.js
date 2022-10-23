import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import {
  HomeFaq,
  HomeHero,
  HomeJoinUs,
  HomeObjectives,
  HomeWhatWeDo,
  HomeWorkEthics,
  Meta,
} from '../components';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Meta title='Home | Finance-A Investments' />
      <div className='text-gray-800'>
        <HomeHero />
        <HomeWhatWeDo />
        <HomeObjectives />
        <HomeWorkEthics />
        <HomeFaq />
        <HomeJoinUs />
      </div>
    </>
  );
}
