import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT, SITE } from '../../data/site'
import { Button } from '../../components/ui/Button'
import './Contact.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page contact">
      <section className="contact-hero section">
        <div className="container contact-hero__inner">
          <h1 className="display-lg">{CONTACT.headline}</h1>
          <p className="body-lg contact-hero__desc">{CONTACT.description}</p>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container contact-main__grid">
          <div className="contact-info">
            <h2 className="headline-md">Contact Information</h2>
            <dl className="contact-info__list">
              <div className="contact-info__item">
                <dt className="label-md">Phone</dt>
                <dd>
                  <a href={`tel:${SITE.phone}`} className="title-lg">
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div className="contact-info__item">
                <dt className="label-md">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="title-lg">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div className="contact-info__item">
                <dt className="label-md">Location</dt>
                <dd className="title-lg">{SITE.location}</dd>
              </div>
            </dl>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span className="label-md">Name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label className="contact-field">
              <span className="label-md">Email</span>
              <input type="email" name="email" placeholder="Your email address" required />
            </label>
            <label className="contact-field">
              <span className="label-md">Message</span>
              <textarea name="message" rows={4} placeholder="How can I help you?" required />
            </label>
            {submitted ? (
              <p className="contact-form__success body-md" role="status">
                Thank you! Your message has been recorded (demo).
              </p>
            ) : (
              <Button variant="primary" type="submit">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                  send
                </span>
                Send message
              </Button>
            )}
          </form>
        </div>
      </section>

      <section className="contact-map section">
        <div className="container">
          <div className="contact-map__placeholder" aria-hidden="true">
            <span className="material-symbols-outlined contact-map__icon">map</span>
            <p className="label-lg">MAP INTERFACE</p>
            <p className="title-md">{SITE.locationEn}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
