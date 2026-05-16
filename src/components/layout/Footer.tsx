import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'
import { ROUTES } from '../../constants/routes'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__name title-lg">{SITE.name}</span>
        <div className="footer__links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`}>Email</a>
          <Link to={ROUTES.ABOUT}>Resume</Link>
        </div>
        <p className="footer__copy body-md">{SITE.copyright}</p>
      </div>
    </footer>
  )
}
