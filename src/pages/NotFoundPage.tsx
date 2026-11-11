import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { notFound, site } from '../content.ts'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `${notFound.title} · ${site.name}`
  }, [])

  return (
    <section className="hero container">
      <h1>{notFound.title}</h1>
      <p className="lead">{notFound.text}</p>
      <Link to="/" className="button">{notFound.backLabel}</Link>
    </section>
  )
}
