import React from 'react'
import ProjectCard from '@/components/pages/work/ProjectCard'
import ProjectHero from '@/components/pages/work/ProjectHero'
function workpage() {
  return (
    <div className='bg-black'>
      <ProjectHero />
      <ProjectCard  />
    </div>
  )
}

export default workpage