import React from 'react'

export default function Resume(){
  const assetBase = import.meta.env.BASE_URL

  return (
    <section className="section-card">
      <div className="container" style={{display:'grid',gap:16}}>
        <h2>Resume</h2>
        <iframe
          src={`${assetBase}resume.pdf`}
          title="Phoebe Chen Resume"
          style={{width:'100%',height:'78vh',border:'1px solid rgba(0,0,0,0.12)',borderRadius:12,background:'#fff'}}
        />
        <p className="muted">
          If the PDF does not render in your browser, open it
          {' '}
          <a href={`${assetBase}resume.pdf`} target="_blank" rel="noopener noreferrer">here</a>
          .
        </p>
      </div>
    </section>
  )
}
