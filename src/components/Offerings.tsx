import React from 'react';
import cookies from '../assets/cookies.png'
import Brownies2 from '../assets/Brownies2.jpg'
import Cake from '../assets/Cake.jpg'


export default function Offerings() {
    return(<div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-1 rounded-lg hover:scale-105 duration-300'>
            <img className='w-100 mx-auto mt-1 bg-gray-100' src={cookies} alt="/" />
            <h2 className='text-3xl font-bold text-center py-8'>COOKIES</h2>
            {/* <p className='text-center text-4xl font-bold'></p> */}
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <button className='bg-red-400 w-[200px] text-black rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now!</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-1 rounded-lg hover:scale-105 duration-300'>
            <img className='w-100 mx-auto mt-1 bg-transparent' src={Brownies2} alt="/" />
            <h2 className='text-3xl font-bold text-center py-8'>BROWNIES</h2>
            {/* <p className='text-center text-4xl font-bold'></p> */}
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <button className='bg-red-400 w-[200px] text-black rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now!</button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-1 rounded-lg hover:scale-105 duration-300'>
            <img className='w-100 mx-auto mt-1 bg-gray-100' src={Cake} alt="/" />
            <h2 className='text-3xl font-bold text-center py-8'>CAKES</h2>
            {/* <p className='text-center text-4xl font-bold'></p> */}
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button className='bg-red-400 w-[200px] text-black rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now!</button>
        </div>
    </div>
  </div>
    );
}