import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
export default function Contact(){
  const form = useRef()
  const [sending, setSending] = React.useState(false)

  function sendEmail(e){
    e.preventDefault()
    setSending(true)
    emailjs.sendForm(
      'service_w07iww9', // replace if different
      'template_pwfsb6s', // replace with yours
      form.current,
      '-BT2W34oq9FT86gyQ' // public key
    ).then(()=>{
      alert('Message sent — thank you!')
      form.current.reset()
      setSending(false)
    }).catch(()=>{
      alert('Failed to send — please try again')
      setSending(false)
    })
  }

  return (
    <section id="contact" className="section contact">
      <div className="card contact-card">
        <h2 className="contact-title">
          Contact <span>Me</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Write message here"
            required
          />
          <button className="btn contact-btn" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}