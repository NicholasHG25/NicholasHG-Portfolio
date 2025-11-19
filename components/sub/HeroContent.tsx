"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

export const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-25 mt-20 md:mt-32 lg:mt-40 w-full z-[20]'
    >
        {/* Image for Mobile - Shows at top */}
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex lg:hidden justify-center items-center mb-8 mt-50'
        >
          <Image
              src="/poto.jpg"
              alt='work icons'
              height={400}
              width={300}
              style={{
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
              }}
          />
        </motion.div>

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0'
        >
            <SparklesIcon className='text-[#b49bff] mr-[11px] h-5 w-5' />
            <h1 className="Welcome-text text-[13px]">Web Development & Data Analysis Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto"
        >
            <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> User-Centric Solutions </span>
            Driven by Data and Technology
            </span>
        </motion.div>

        <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-base md:text-lg text-gray-400 my-5 max-w-full lg:max-w-[600px]'
        >
            I&apos;m Nicholas Howard Gouwtama a Computer Science undergraduate specializing in three fields: Web Development, Data Analysis, and User Experience Design. I focus on transforming complex data and user needs into functional and effective web applications.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/NicholasHG_CV.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
        >
          Download CV
        </motion.a>
      </div>

      {/* Image for Desktop - Shows at right */}
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full hidden lg:flex justify-center items-center'
      >
        <Image
            src="/poto.jpg"
            alt='work icons'
            height={600}
            width={600}
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
            }}
        />
      </motion.div>
    </motion.div>
  )
}