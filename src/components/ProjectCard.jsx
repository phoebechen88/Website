import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectCard({project,onOpen}){
  const navigate = useNavigate()

  const goToProject = () => {
    navigate(`/projects/${project.id}`)
  }

  return (
    <article className="card fade-item" aria-labelledby={`title-${project.id}`} onClick={goToProject} style={{cursor:'pointer'}}>
      <img src={project.image} alt={project.imageAlt || project.title} />
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <h3 id={`title-${project.id}`}>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((t)=> (<span key={t} className="tag">{t}</span>))}
        </div>
      </div>
      <div style={{marginTop:'auto',display:'flex',gap:8}}>
        <button onClick={(e)=>{e.stopPropagation(); onOpen && onOpen(project)}} className="cta cta-small project-main-btn">Preview</button>
      </div>
    </article>
  )
}
