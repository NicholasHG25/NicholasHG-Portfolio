import React from 'react'
import Image from 'next/image';


interface Props {
  src: string
  title: string
  description: string
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] '>
      <div className="relative w-full h-56 bg-black border-b border-[#2A0E61] flex items-center justify-center"> {/* flex items-center justify-center untuk gambar vertikal */}
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain" // Gambar akan pas di dalam kotak tanpa terpotong
        />
      </div>


      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white line-clamp-2 '>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard