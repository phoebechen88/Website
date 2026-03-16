import React, { useState } from 'react'

export default function Contact(){
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // honeypot
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in name, email, and message.' })
      return
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        type: 'error',
        message: 'Contact form is not configured yet. Set VITE_FORMSPREE_ENDPOINT in your environment.'
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Portfolio contact form submission'
        })
      })

      if (!res.ok) {
        throw new Error('Form submission failed')
      }

      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Sorry, something went wrong while sending your message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-field">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={onChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-field honeypot-field" aria-hidden="true">
            <label>Website</label>
            <input
              className="form-control"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={onChange}
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="cta cta-small contact-btn">
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
          {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
        </form>
        <p className="muted"><em>Acknowledgement: This website was built with the help of AI tools.</em></p>
      </div>
    </section>
  )
}
