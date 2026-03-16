import React from 'react'
import pawLogo from '../../Paw.svg'

export default function Footer(){
  return (
    <footer>
      <div className="container footer-links">
        <img src={pawLogo} alt="Paw logo" className="footer-paw" />
        <div className="social-links">
          <a href="mailto:phoebechen2040@gmail.com" aria-label="Email">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon icon-email"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99l-8 5-8-5V6l8 5 8-5v2.99z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/phoebechen1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon icon-linkedin"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.865 6 2.5 6S0 4.88 0 3.5 1.115 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5V24h-4.5V8zm7.5 0h4.3v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.8 5.2 6.4V24h-4.6v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H7.75V8z"/></svg>
          </a>
          <a href="https://github.com/phoebechen88" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon icon-github"><path fill="currentColor" d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.112.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.083 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.304-5.466-1.335-5.466-5.933 0-1.312.468-2.382 1.236-3.222-.124-.303-.536-1.526.117-3.177 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.291-1.552 3.298-1.23 3.298-1.23.655 1.651.243 2.874.12 3.177.77.84 1.235 1.91 1.235 3.222 0 4.61-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 22.093 24 17.597 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.instagram.com/phoebechen10111213/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon icon-instagram"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 1.8A3 3 0 1 0 15 12a3 3 0 0 0-3-3zm5.25-2.35a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z"/></svg>
          </a>
        </div>
      </div>
      <div className="container">
        <div>© {new Date().getFullYear()} Phoebe Chen</div>
      </div>
    </footer>
  )
}
