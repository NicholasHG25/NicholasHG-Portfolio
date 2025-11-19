import React from 'react'
import { HeroContent } from '../sub/HeroContent'

const Hero = () => {
    return (
        <section
        id="about-me"
        className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden'
        >
           <div className='relative flex flex-col h-full w-full'>
            <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-415px] lg:top-[-305px] left-0 z-[1] w-full h-full object-cover'
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div> 
        </section>
        
    )
}

export default Hero