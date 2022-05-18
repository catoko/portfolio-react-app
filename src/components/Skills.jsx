import React from 'react';

import HTML from '../asserts/html_logo.png';
import CSS from '../asserts/css_logo.png';
import JavaScript from '../asserts/javascript_logo.png';
import ReactImg from '../asserts/react_logo.png';
import Node from '../asserts/node_logo.png';
import GitHub from '../asserts/github_logo.png';
import Tailwind from '../asserts/tailwind_logo.png';
import MariadbLogo from '../asserts/mariadb_logo.png';
import PhpLogo from '../asserts/php_logo.png';
import Linux from '../asserts/linux_logo.png';
import Magento from '../asserts/magento_logo.png';
import Adobeapps from '../asserts/apps_logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 '>

        {/* Container */}
        <div className='max-w-[800px] mx-auto p-4 pt-[80px] flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={ReactImg} alt="CSS Icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Node} alt="HTML Icon" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={GitHub} alt="CSS Icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={MariadbLogo} alt="CSS Icon" />
                    <p className='my-4'>MARIA DB</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={PhpLogo} alt="HTML Icon" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Linux} alt="CSS Icon" />
                    <p className='my-4'>LINUX</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Magento} alt="HTML Icon" />
                    <p className='my-4'>MAGENTO</p>
                </div>
                <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className=' w-20 mx-auto' src={Adobeapps} alt="CSS Icon" />
                    <p className='my-4'>ADOBE APPS</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills