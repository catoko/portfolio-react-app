import React from 'react';
import KarlandMotors from '../asserts/karlandmotors.png';
import Unihosiery from '../asserts/unihosiery.png';
import Rental from '../asserts/rental.png';
import Dynas from '../asserts/dynasgolfshop.png';
import Taxi from '../asserts/taxi.png';
import Pgamedia from '../asserts/pgamedia.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pb-5'>
        <div className='max-w-[800px] mx-auto p-4 pt-[80px] flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p  className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/**container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${KarlandMotors})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Auto Site</span>
                        <div className='pt-8 text-center'>
                            <a href="https://karlandmotors.com" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Unihosiery})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>B2B Site</span>
                        <div className='pt-8 text-center'>
                            <a href="https://unihosiery.com" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>

                
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Rental})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Car Rental</span>
                        <div className='pt-8 text-center'>
                            <a href="https://karlandrental.com" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Dynas})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>Golf Equipment</span>
                        <div className='pt-8 text-center'>
                            <a href="https://dynasgolf.com" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>

                
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Taxi})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Taxi Company</span>
                        <div className='pt-8 text-center'>
                            <a href="https://startaxi.la" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>
                
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Pgamedia})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className=' opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider text-center'>Digital Media</span>
                        <div className='pt-8 text-center'>
                            <a href="https://pgamedia.com" target={'_blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Show Site</button>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work