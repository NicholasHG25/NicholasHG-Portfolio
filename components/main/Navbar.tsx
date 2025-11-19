import Image from 'next/image'
import React from 'react'
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx"

const Navbar = () => {
  return (
    <div className='w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
            <Image
            src="/NhgLogo.png"
            alt='logo'
            width={80}
            height={80}
            className='cursor-pointer hover:animate-slowspin w-[170px] h-[90px] sm:w-[80px] sm:h-[50px] md:w-[90px] md:h-[55px] lg:w-[100px] lg:h-[90px] -ml-7'
            />

            <span className='font-bold ml-[10px] hidden md:block text-gray-300 text-[20px]'>
                Nicholas HG
            </span>
            </a>
        
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer hover:text-blue-500 transition-colors'>About me</a>
                    <a href="#skills" className='cursor-pointer hover:text-blue-500 transition-colors'>Skills</a>
                    <a href="#projects" className='cursor-pointer hover:text-blue-500 transition-colors'>Project</a>
                </div>
            </div>

            <div className="flex flex-row gap-5 items-center">
            <a 
                href='https://instagram.com/yourusername' 
                target='_blank' 
                rel='noopener noreferrer'
                className='cursor-pointer'
            >
                <RxInstagramLogo 
                    size={28} 
                    className='text-gray-200 hover:text-gray-400 transition-colors' 
            />
            </a>
            <a 
                href='https://linkedin.com/in/nicholas-howard-gouwtama' 
                target='_blank' 
                rel='noopener noreferrer'
                className='cursor-pointer'
            >
                <RxLinkedinLogo 
                    size={28} 
                    className='text-gray-200 hover:text-gray-400 transition-colors' 
                />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar