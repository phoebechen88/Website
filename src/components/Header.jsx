import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import catLogo from '../../Cat.svg'

export default function Header(){
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        {isHome ? (
          <div className="brand-placeholder" aria-hidden="true" />
        ) : (
          <Link to="/" className="brand" aria-label="Home">
            <img src={catLogo} alt="Cat logo" className="brand-logo" />
            <span className="brand-text">Phoebe Chen</span>
          </Link>
        )}
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/graphics">Graphics</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact" className="nav-contact">Contact</NavLink>
        </nav>
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/graphics" onClick={() => setMenuOpen(false)}>Graphics</NavLink>
            <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}
