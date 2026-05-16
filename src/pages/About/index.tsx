import { ABOUT } from '../../data/site'
import { Chip } from '../../components/ui/Chip'
import { Monogram } from '../../components/ui/Monogram'
import './About.css'

export default function AboutPage() {
  return (
    <div className="page about">
      <section className="about-hero section">
        <div className="container about-hero__inner">
          <Monogram size="lg" />
          <h1 className="display-lg about-hero__title">{ABOUT.headline}</h1>
          <p className="about-hero__bio body-lg">{ABOUT.bio}</p>
          <div className="about-hero__chips">
            {ABOUT.chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="about-journey section">
        <div className="container">
          <h2 className="headline-md">Professional Journey</h2>
          <ol className="about-timeline">
            {ABOUT.experience.map((item) => (
              <li key={item.company} className="about-timeline__item card">
                <div className="about-timeline__dot" aria-hidden="true" />
                <div className="about-timeline__body">
                  <h3 className="title-lg">{item.company}</h3>
                  <p className="about-timeline__role label-lg">{item.role}</p>
                  <p className="body-md">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-education section">
        <div className="container">
          <h2 className="headline-md">Education</h2>
          <article className="card about-education__card">
            <h3 className="title-lg">{ABOUT.education.school}</h3>
            <p className="title-md about-education__college">{ABOUT.education.college}</p>
            <Chip>{ABOUT.education.major}</Chip>
            <blockquote className="about-education__quote body-lg">
              &ldquo;{ABOUT.education.quote}&rdquo;
            </blockquote>
          </article>
        </div>
      </section>
    </div>
  )
}
