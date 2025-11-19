import React from 'react'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
    <section
    id="projects"
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden'
    >
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src="/sofdep.png"
            title="Purelux - Android-Based Laundry Employee Attendance System"
            description="Developed a mobile attendance application designed to digitize workforce management for laundry businesses. The system features real-time GPS tracking for accurate check-ins, digital leave requests with document attachments, and task management between owners and employees. Built using Flutter for a responsive UI and Firebase for backend services (Authentication, Realtime Database, and Cloud Messaging) to ensure seamless data synchronization."
            />
            <ProjectCard
            src="/matlab2.png"
            title="Analisis Faktor Utama Penentu Nilai Properti di Taipei Menggunakan PCA dan K-Means untuk Clustering pada Dataset Real Estate Valuation"
            description="Performed PCA and K-Means clustering on Taipei real estate data to identify key property value drivers and segment the market into four actionable clusters for investment insight."
            />
            <ProjectCard
            src="/web.png"
            title="StayHealthy - Comprehensive Health & Wellness Platform"
            description="Designed and developed a holistic health guide website dedicated to promoting a healthy lifestyle. The platform features interactive exercise guides, curated healthy food recipes, nutritional tips, and personalized wellness recommendations. Built with a focus on intuitive UI/UX to ensure users can easily access vital health information across all devices."
            />
        </div>
    </div>
    </section>
    
  )
}

export default Projects