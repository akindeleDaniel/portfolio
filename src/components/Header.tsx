import { Link } from 'react-router-dom'
import { header, links, nav, site } from '../content.ts'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">{site.name}</Link>
        <nav aria-label="Main">
          <ul className="nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={links.whatsapp} className="button button-small" target="_blank" rel="noreferrer">
          {header.hireLabel}
        </a>
      </div>
    </header>
  )
}
