import React from 'react'
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-25 relative z-50'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            
            {/* Social Media Icons */}
            <div className='flex flex-row items-center justify-center gap-8 mb-6'>
                <a 
                    href='https://github.com/NicholasHG25' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex flex-col items-center cursor-pointer hover:text-gray-400 transition-colors relative z-10'
                >
                    <RxGithubLogo size={32} />
                    <span className='text-[14px] mt-2'>GitHub</span>
                </a>
                <a 
                    href='https://instagram.com/nicholashg_25' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex flex-col items-center cursor-pointer hover:text-gray-400 transition-colors relative z-10'
                >
                    <RxInstagramLogo size={32} />
                    <span className='text-[14px] mt-2'>Instagram</span>
                </a>
                <a 
                    href='https://linkedin.com/in/nicholas-howard-gouwtama' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex flex-col items-center cursor-pointer hover:text-gray-400 transition-colors relative z-10'
                >
                    <RxLinkedinLogo size={32} />
                    <span className='text-[14px] mt-2'>LinkedIn</span>
                </a>
            </div>

            {/* Email */}
            <a 
                href='mailto:mifwebchain@gmail.com'
                className='mb-6 text-[15px] hover:text-gray-400 transition-colors'
            >
                nicholashg0248@gmail.com
            </a>

            {/* Copyright */}
            <div className='text-[14px] text-center text-gray-400 mb-5'>
                &copy; Nicholas Howard Gouwtama 2025 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer