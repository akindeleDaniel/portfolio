import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { header, links, nav, site } from '../content.ts'

export default function Header() {
  // The phone menu remembers the page it was opened on, so moving to another page or section closes it
  const location = useLocation()
  const here = location.pathname + location.hash
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === here
  const setOpen = (value: boolean) => setOpenOn(value ? here : null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenOn(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={open ? 'header header-open' : 'header'}>
      <div className="container header-inner">
        <Link to="/" className="brand">{site.name}</Link>
        <nav aria-label="Main" id="main-nav">
          <ul className="nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a href={links.whatsapp} className="button button-small" target="_blank" rel="noreferrer">
            {header.hireLabel}
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? header.closeMenuLabel : header.openMenuLabel}
            onClick={() => setOpen(!open)}
          >
            <span className="menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
