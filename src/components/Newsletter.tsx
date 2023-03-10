import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-gray-500 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-2xl font-bold py-2'>
            Earn Loyalty points toward FREE cookies!
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-red-400 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Get Connected!
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-red-400'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;