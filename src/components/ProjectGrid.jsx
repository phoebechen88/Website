import React, { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({projects,onOpen}){
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.fade-item')
    if (!cards) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    }, { threshold: [0.1, 0.5, 0.9] })

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [projects])

  return (
    <section ref={gridRef} className="grid" aria-label="Projects">
      {projects.map((p)=> (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </section>
  )
}
