import React from 'react'

export default function Contact(){
  return (
    <section className="section-card">
      <div className="container contact-top-row">
        <div>
          <h2>Contact</h2>
        </div>
        <div className="link-grid">
          <a href="mailto:phoebechen2040@gmail.com" className="cta cta-small contact-btn">Email</a>
          <a href="https://www.linkedin.com/in/phoebechen1/" target="_blank" rel="noopener noreferrer" className="cta cta-small contact-btn">LinkedIn</a>
          <a href="https://github.com/phoebechen88" target="_blank" rel="noopener noreferrer" className="cta cta-small contact-btn">GitHub</a>
        </div>
        <h3>Contact form</h3>
        <form className="contact-form">
          <div className="form-field">
            <label>Name</label>
            <input className="form-control" type="text" placeholder="Your name" disabled />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea className="form-control" placeholder="Message" disabled rows={5} />
          </div>
          <div>
            <button type="button" disabled className="cta cta-small contact-btn">Send</button>
          </div>
        </form>
        <p className="muted"><em>Acknowledgement: This website was built with the help of AI tools.</em></p>
      </div>
    </section>
  )
}
