import React from "react";

export default function SelectedWork({ content }) {
  if (!content) return null;

  return (
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <div className="work-container">
        <div className="work-heading">
          <div>
            <p className="work-eyebrow">{content.eyebrow}</p>
            <h2 id="work-title">{content.title}</h2>
          </div>
          <p className="work-intro">{content.intro}</p>
        </div>
        <div className="work-grid">
          {content.items.map((project, index) => (
            <article className="work-card" key={project.id}>
              <div className="work-card-top">
                <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="work-status">{project.status}</span>
              </div>
              <p className="work-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="work-description">{project.description}</p>
              <ul className="work-stack" aria-label={content.stackLabel}>
                {project.stack.map(technology => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="work-links">
                {(project.links || (project.url ? [{ url: project.url, label: content.linkLabel }] : [])).map(link => (
                  <a className="work-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}<span aria-hidden="true"> ↗</span>
                    <span className="visually-hidden"> — {project.title}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
