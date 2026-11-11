import { footer, links } from '../content.ts'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{footer.text}</p>
        <ul className="footer-links">
          <li><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={`mailto:${links.email}`}>Email</a></li>
        </ul>
      </div>
    </footer>
  )
}
