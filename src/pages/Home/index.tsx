import { Link } from 'react-router-dom'
import RotatingText from '../../components/RotatingTextBridge'
import {
  CAPABILITIES,
  HERO_ROTATING_TEXTS,
  HOME_HERO,
  IMAGES,
  SELECTED_PROJECTS,
  TRUSTED_BY,
} from '../../data/site'
import { ROUTES } from '../../constants/routes'
import { Chip } from '../../components/ui/Chip'
import './Home.css'

export default function HomePage() {
  return (
    <div className="page home">
      <section className="home-hero section">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <h1 className="display-lg home-hero__title">
              <span className="home-hero__title-line">
                {HOME_HERO.title} ·{' '}
                <RotatingText
                  texts={[...HERO_ROTATING_TEXTS]}
                  mainClassName="home-hero__rotate"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="home-hero__rotate-split"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="characters"
                  auto
                  loop
                />
              </span>
              <br />
              <span className="home-hero__subtitle">{HOME_HERO.subtitle}</span>
            </h1>
            <p className="home-hero__desc body-lg">{HOME_HERO.description}</p>
            <div className="home-hero__chips">
              {HOME_HERO.chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
            <div className="home-hero__metrics">
              {HOME_HERO.metrics.map((m) => (
                <div key={m.label} className="home-hero__metric">
                  <span className="headline-lg home-hero__metric-value">{m.value}</span>
                  <span className="label-lg home-hero__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="home-hero__visual">
            <img
              src={IMAGES.heroDashboard}
              alt="Financial Analytics Dashboard"
              className="home-hero__img"
            />
          </div>
        </div>
      </section>

      <section className="home-trusted section">
        <div className="container">
          <h2 className="title-md home-trusted__title">Trusted By & Collaborated With</h2>
          <div className="home-trusted__list">
            {TRUSTED_BY.map((item) => (
              <span key={item.name} className="home-trusted__pill label-lg">
                <span
                  className={`material-symbols-outlined home-trusted__icon home-trusted__icon--${item.color}`}
                >
                  {item.icon}
                </span>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-capabilities section">
        <div className="container">
          <h2 className="headline-md home-capabilities__title">Core Capabilities</h2>
          <div className="home-capabilities__grid">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className={`home-capability home-capability--glow-${cap.glow}`}
              >
                <span
                  className={`material-symbols-outlined home-capability__icon home-capability__icon--${cap.iconColor} home-capability__icon--filled`}
                >
                  {cap.icon}
                </span>
                <h3 className="title-lg">{cap.title}</h3>
                <p className="body-md">{cap.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-projects section">
        <div className="container">
          <div className="home-projects__header">
            <h2 className="headline-md">Selected Projects</h2>
            <Link to={ROUTES.PROJECTS} className="home-projects__link label-lg">
              View all projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="home-projects__grid">
            {SELECTED_PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`home-project home-project--hover-${project.hoverAccent}`}
              >
                <div className="home-project__media">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="home-project__tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`home-project__tag home-project__tag--${tag.variant}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3 className="title-lg home-project__title">{project.title}</h3>
                <p className="body-md home-project__desc">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
