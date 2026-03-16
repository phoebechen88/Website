import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find((p)=>p.id===id)

  if(!project){
    return (
      <section className="section-card">
        <div className="container">
          <h2>Project not found</h2>
          <p className="muted">Check the Projects page for available items.</p>
          <Link to="/projects" className="cta project-detail-btn">Back to Projects</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-card">
      <div className="container" style={{display:'grid',gap:'18px'}}>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.imageAlt || project.title} style={{width:'100%',height:'min(440px,42vh)',objectFit:'cover',borderRadius:'12px'}} />
        <div className="tags" style={{gap:8}}>{project.tags.map((t)=><span key={t} className="tag">{t}</span>)}</div>
        <p>{project.description}</p>
        <p className="muted">Longer project description placeholder. Add details about tools, problem statement, methodology, and results.</p>
        <div className="project-actions">
          <div className="link-group">
            <a href={project.repoLink||'#'} target="_blank" rel="noopener noreferrer" className="cta cta-small project-detail-btn">Repository</a>
            <a href={project.link||'#'} target="_blank" rel="noopener noreferrer" className="cta cta-small project-detail-btn">Report/Demo</a>
          </div>
          <Link to="/projects" className="cta cta-small project-detail-btn">Back</Link>
        </div>
      </div>
    </section>
  )
}
