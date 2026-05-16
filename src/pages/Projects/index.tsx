import { PROJECTS } from '../../data/site'
import './Projects.css'

export default function ProjectsPage() {
  return (
    <div className="page projects">
      <section className="projects-hero section">
        <div className="container projects-hero__inner">
          <h1 className="display-lg projects-hero__title">Enterprise AI Products</h1>
          <p className="projects-hero__desc body-lg">
            A portfolio of transformative financial products, driving efficiency and insights
            through intelligent automation and refined user experiences.
          </p>
        </div>
      </section>

      <section className="projects-grid section">
        <div className="container">
          <div className="projects-grid__layout">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                <div className="project-card__media">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="project-card__body">
                  <div className="project-card__header">
                    <h2 className="headline-md project-card__title">{project.title}</h2>
                    <span
                      className={`project-card__badge project-card__badge--${project.badgeVariant}`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag label-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="project-card__bullets body-md">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span
                          className={`material-symbols-outlined project-card__check project-card__check--${project.iconColor}`}
                        >
                          check_circle
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="project-card__cta label-lg">
                    View case study
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
