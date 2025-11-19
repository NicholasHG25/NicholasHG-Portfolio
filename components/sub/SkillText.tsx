"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight} from '@/utils/motion'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
       
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mt-[30px] text-center mb-[-5px]'
        >
            Skills
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[15px] text-center'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText