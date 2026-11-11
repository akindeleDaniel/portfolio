import { Link } from 'react-router-dom'
import type { Project } from '../content.ts'

export default function ProjectCard({ project }: { project: Project }) {
  const internal = project.href.startsWith('/')
  return (
    <article className="card project">
      {project.image && (
        <div className="project-image">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body">
        {project.label && <p className="kicker">{project.label}</p>}
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {project.highlights && (
          <ul className="checks">
            {project.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <ul className="tags">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="actions">
          {internal
            ? <Link to={project.href} className="button">Read the case study</Link>
            : <a href={project.href} className="button" target="_blank" rel="noreferrer">View project</a>}
          {project.liveUrl && (
            <a href={project.liveUrl} className="button button-ghost" target="_blank" rel="noreferrer">Live site</a>
          )}
        </div>
      </div>
    </article>
  )
}
