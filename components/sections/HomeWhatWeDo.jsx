import React from 'react';

const HomeWhatWeDo = () => {
  const images = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  ];

  return (
    <section className='p-8 py-16 lg:px-16 xl:px-32 bg-white'>
      <h2 className='font-black text-3xl mb-4 uppercase'>
        Who we are. What we do.
      </h2>
      <div className='text-lg'>
        <p>
          We are a Finance organisation that offers guidance and consulting to
          local businesses and early startups.
        </p>
        <p>
          We have professional accountants that analyze, verify and prepare your
          company financial records, setting you up for a profitable future.
        </p>
        <p>
          We give Loans & Grants, offer Escrow and Business law services, making
          sure our clients stay on the right path and make the best decisions at
          all times.
        </p>
      </div>

      <div className='my-8 grid grid-cols-1 grid-rows-5 w-full gap-4 max-w-[1024px] mx-auto h-[400px] md:grid-rows-4 md:grid-cols-3'>
        <div className='grid grid-cols-2 col-span-2 row-span-2 gap-4 md:col-span-1 md:grid-cols-1 md:row-span-4'>
          <div className='zoom rounded-lg' data-aos='fade-down'>
            <div
              className='child rounded-lg w-full h-full'
              style={{
                background: `url(${images[1]}) center center/cover`,
              }}
            ></div>
            <span className='absolute bottom-4 left-4 px-4 py-2 text-white rounded-md bg-gray-900'>
              Seminars
            </span>
          </div>
          <div className='zoom rounded-lg' data-aos='fade-up'>
            <div
              className='child rounded-lg w-full h-full'
              style={{
                background: `url(${images[2]}) center center/cover`,
              }}
            ></div>
            <span className='absolute bottom-4 left-4 px-4 py-2 text-white rounded-md bg-gray-900'>
              Loans
            </span>
          </div>
        </div>
        <div
          className='zoom rounded-lg col-span-2 row-span-4 md:col-span-2'
          data-aos='fade-left'
        >
          <div
            className='child w-full h-full rounded-lg'
            style={{
              background: `url(${images[0]}) center center/cover`,
            }}
          ></div>
          <span className='absolute bottom-4 left-4 px-4 py-2 text-white rounded-md bg-gray-900'>
            Law & Consulting
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
