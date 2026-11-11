import { useEffect } from 'react'
import { links, site, storehatch as s } from '../content.ts'

export default function StoreHatchPage() {
  useEffect(() => {
    document.title = `${s.pageTitle} · ${site.name}`
  }, [])

  return (
    <article className="container">
      <header className="hero">
        <p className="eyebrow">Case study</p>
        <h1>{s.name}</h1>
        <p className="lead">{s.tagline}</p>
        <div className="actions">
          <a href={s.liveUrl} className="button" target="_blank" rel="noreferrer">{s.liveLabel}</a>
          <a href={s.sellUrl} className="button button-ghost" target="_blank" rel="noreferrer">{s.sellLabel}</a>
          <a href={links.whatsapp} className="button button-ghost" target="_blank" rel="noreferrer">{s.callLabel}</a>
        </div>
        <p className="note">{s.privateNote}</p>
      </header>

      {s.video && (
        <figure className="section reveal">
          <video controls preload="metadata" poster={s.video.poster} className="video">
            <source src={s.video.src} />
          </video>
          <figcaption className="muted">{s.video.caption}</figcaption>
        </figure>
      )}

      <section className="section reveal prose">
        <h2>{s.overview.title}</h2>
        {s.overview.paragraphs.map((text) => <p key={text}>{text}</p>)}
      </section>

      <section className="section reveal screenshots">
        {s.screenshots.map((img) => (
          <figure key={img.src} className={img.height > img.width ? 'shot shot-tall' : 'shot'}>
            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" />
            {img.caption && <figcaption className="muted">{img.caption}</figcaption>}
          </figure>
        ))}
      </section>

      <section className="section reveal">
        <h2>{s.features.title}</h2>
        <ul className="list">
          {s.features.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section reveal">
        <h2>{s.diagram.title}</h2>
        <div className="diagram">
          <ol className="flow">
            {s.diagram.nodes.map((n) => (
              <li key={n.name} className="panel">
                <strong>{n.name}</strong>
                <span className="muted">{n.detail}</span>
              </li>
            ))}
          </ol>
          <ul className="flow-sides">
            {s.diagram.sides.map((n) => (
              <li key={n.name} className="panel panel-dashed">
                <strong>{n.name}</strong>
                <span className="muted">{n.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section reveal prose">
        <h2>{s.testing.title}</h2>
        <p>{s.testing.text}</p>
      </section>

      {s.snippets.length > 0 && (
        <section className="section reveal">
          <h2>{s.snippetsTitle}</h2>
          {s.snippets.map((snip) => (
            <figure key={snip.title} className="snippet">
              <figcaption>
                <strong>{snip.title}</strong>
                <span className="muted">{snip.note}</span>
              </figcaption>
              <pre><code className={`language-${snip.language}`}>{snip.code}</code></pre>
            </figure>
          ))}
        </section>
      )}

      <section className="section reveal">
        <h2>{s.stack.title}</h2>
        <ul className="tags">
          {s.stack.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section reveal cta">
        <p>{s.callText}</p>
        <a href={links.whatsapp} className="button" target="_blank" rel="noreferrer">{s.callLabel}</a>
      </section>
    </article>
  )
}
