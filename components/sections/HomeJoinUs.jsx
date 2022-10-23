import Link from 'next/Link';
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const HomeJoinUs = () => {
  return (
    <section className='overlay p-8 py-16 lg:px-20'>
      <div
        className='mb-8 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-4'
        data-aos='fade-right'
      >
        <p className='text-2xl md:text-3xl lg:text-4xl text-white font-black'>
          We offer services you may not get anywhere else.
        </p>
        <Link href='/register' passHref>
          <a href='#' className='btn btn-primary uppercase' data-aos='flip-up'>
            Register today
          </a>
        </Link>
      </div>
      <div
        className='bg-white card flex flex-col items-start gap-8'
        data-aos='fade-left'
      >
        <p className='text-lg md:text-xl'>
          This is a fictional company, a personal project and not a real
          website. This firm does not exist. Please be guided.
          <br />
          <br />
          Project by <span className='font-black'> ernestechie </span> on{' '}
          <a
            href='https://www.twitter.com/ernestechie'
            target='_blank'
            className='text-purple-500 font-black'
            rel='noreferrer'
          >
            Twitter
          </a>
        </p>
        <div>
          <p className='font-bold text-xl text-gray-800 mb-4'>
            Contact Developer
          </p>
          <div className='flex items-center justify-start gap-4'>
            <a
              href='https://www.twitter.com/ernestechie'
              target='_blank'
              className='text-2xl text-blue-600'
              rel='noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              href='https://www.github.com/ernestechie'
              target='_blank'
              className='text-2xl text-gray-700'
              rel='noreferrer'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/ernestechie'
              target='_blank'
              className='text-2xl text-blue-900'
              rel='noreferrer'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://www.instagram.com/ernestechie'
              target='_blank'
              className='text-2xl text-pink-600'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: relative;
          background: url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)
            center center/cover;
        }

        .overlay:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(33, 5, 59, 0.8);
        }

        .overlay * {
          z-index: 5;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default HomeJoinUs;
