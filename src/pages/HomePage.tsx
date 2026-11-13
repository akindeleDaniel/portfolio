import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.tsx'
import {
  about, contact, hero, links, projects, projectsSection, services, site, skillsSection, workProcess,
} from '../content.ts'

export default function HomePage() {
  useEffect(() => {
    document.title = `${site.name} · ${site.role}`
  }, [])

  return (
    <>
      <section className="hero container hero-home">
        <div className="hero-text">
          <p className="badge"><span className="dot" aria-hidden="true" />{hero.availability}</p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.intro}</p>
          <p className="eyebrow">{hero.eyebrow}</p>
          <div className="actions">
            <a href={links.whatsapp} className="button" target="_blank" rel="noreferrer">{hero.hireLabel}</a>
            {links.calendly && (
              <a href={links.calendly} className="button button-ghost" target="_blank" rel="noreferrer">{hero.callLabel}</a>
            )}
            {links.cv && <a href={links.cv} className="button button-ghost" download>{hero.cvLabel}</a>}
            <Link to="/work/storehatch" className="button button-ghost">{hero.caseStudyLabel}</Link>
          </div>
        </div>
        <div className="portrait">
          {hero.photo
            ? <img src={hero.photo.src} alt={hero.photo.alt} width={hero.photo.width} height={hero.photo.height} />
            : <span className="portrait-initials" aria-hidden="true">{hero.initials}</span>}
        </div>
      </section>

      <section className="container" aria-label="Highlights">
        <ul className="stats">
          {hero.stats.map((stat, i) => (
            <li key={stat.label} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="section container">
        <div className="reveal">
          <p className="kicker">{projectsSection.label}</p>
          <h2>{projectsSection.title}</h2>
          <p className="muted">{projectsSection.intro}</p>
        </div>
        <div className="projects reveal">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section id="services" className="section container">
        <div className="reveal">
          <p className="kicker">{services.label}</p>
          <h2>{services.title}</h2>
        </div>
        <div className="grid">
          {services.items.map((item, i) => (
            <div key={item.name} className="panel panel-hover reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <h3>{item.name}</h3>
              <p className="muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section container">
        <div className="reveal">
          <p className="kicker">{workProcess.label}</p>
          <h2>{workProcess.title}</h2>
        </div>
        <ol className="steps">
          {workProcess.steps.map((step, i) => (
            <li key={step.name} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.name}</h3>
              <p className="muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="section container about">
        <div className="prose reveal">
          <p className="kicker">{about.label}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
        <div id="skills" className="reveal">
          <h3>{skillsSection.title}</h3>
          <dl className="skills">
            {skillsSection.groups.map((g) => (
              <div key={g.name}>
                <dt>{g.name}</dt>
                <dd>{g.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="contact-panel reveal">
          <p className="kicker">{contact.label}</p>
          <h2>{contact.title}</h2>
          <p>{contact.intro}</p>
          <p>{contact.timezoneText}</p>
          <div className="actions">
            <a href={links.whatsapp} className="button button-light" target="_blank" rel="noreferrer">{contact.whatsappLabel}</a>
            {links.calendly && (
              <a href={links.calendly} className="button button-outline-light" target="_blank" rel="noreferrer">{contact.callLabel}</a>
            )}
            <a href={`mailto:${links.email}`} className="button button-outline-light">{contact.emailLabel}</a>
          </div>
          <ul className="contact-list">
            {contact.items.map((item) => {
              const external = !item.href.startsWith('mailto:')
              return (
                <li key={item.label}>
                  <span className="contact-label">{item.label}</span>
                  <a href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                    {item.value}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
