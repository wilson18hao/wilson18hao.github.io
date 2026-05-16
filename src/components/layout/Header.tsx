import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../../data/site'
import { ROUTES } from '../../constants/routes'
import { Button } from '../ui/Button'
import { Monogram } from '../ui/Monogram'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to={ROUTES.HOME} className="header__brand" onClick={() => setMenuOpen(false)}>
          <Monogram size="sm" />
          <span className="header__name headline-lg">{SITE.name}</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `header__link title-md ${isActive ? 'header__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
              end={path === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link to={ROUTES.CONTACT} className="header__cta-desktop">
            <Button variant="primary">Get in touch</Button>
          </Link>
          <button
            type="button"
            className="header__menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
