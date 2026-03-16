import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import '../heroTitle.css'
import catLogo from '../../Cat.svg'
import profilePhoto from '../../Profile.jpg'

export default function Home(){
  const assetBase = import.meta.env.BASE_URL
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(()=>{
    function onScroll(){
      const y = window.scrollY || window.pageYOffset
      setScrollY(y)
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  // compute overlay opacity
  const opacity = Math.max(0.1, 1 - scrollY / 260)
  const contentVisible = scrollY > 24

  return (
    <>
      <section className="hero hero-full-screen" ref={heroRef}>
        <div className="hero-image-full" aria-hidden>
          <img src={`${assetBase}hero.svg`} alt="" />
          <div className="hero-center-mark" style={{opacity}}>
            <img src={catLogo} alt="Cat logo" className="hero-center-cat" />
            <div className="hero-center-text">
              <div className="hero-center-name">Phoebe</div>
              <div className="hero-center-name">Chen</div>
              <div className="hero-center-role">Data Scientist</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-card content-panel ${contentVisible ? 'shown' : ''}`}>
        <div className="container home-bio home-bio-row" style={{display:'flex',flexDirection:'row',alignItems:'flex-start',gap:'32px'}}>
          <div className="bio-text" style={{flex:2,minWidth:'320px'}}>
            <h2>Welcome</h2>
            <p className="muted">Hi, I’m Phoebe 👋 I’m a fourth-year Statistics &amp; Data Science student at UCLA interested in machine learning, statistical modeling, and data-driven decision making. I enjoy exploring large datasets, building predictive models, and turning complex data into clear insights.</p>
            <div className="hero-actions" style={{marginTop:'18px', justifyContent:'flex-start'}}>
              <Link to="/projects" className="cta">Projects</Link>
              <Link to="/contact" className="cta">Contact</Link>
            </div>
          </div>
          <div className="hero-small-image mini-profile" style={{flex:1,maxWidth:'220px',minWidth:'140px',height:'220px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={profilePhoto} alt="Phoebe Chen profile" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'14px'}} />
          </div>
        </div>
      </section>
    </>
  )
}
