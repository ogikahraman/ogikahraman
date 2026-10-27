import React from "react";

function SiteLink({ site }) {
  return (
    <a className="live-site" href={site.url} target="_blank" rel="noopener noreferrer">
      <span className="live-site-name">{site.name}</span>
      <span className="live-site-domain">{new URL(site.url).hostname}<span aria-hidden="true"> ↗</span></span>
    </a>
  );
}

export default function LiveSites({ content }) {
  if (!content) return null;
  return (
    <section id="live-sites" className="live-sites" aria-labelledby="live-sites-title">
      <div className="work-container">
        <div className="work-heading">
          <div>
            <p className="work-eyebrow">{content.eyebrow}</p>
            <h2 id="live-sites-title">{content.title}</h2>
          </div>
          <p className="work-intro">{content.intro}</p>
        </div>
        <div className="live-sites-grid">
          {content.items.map(site => <SiteLink key={site.url} site={site} />)}
        </div>
      </div>
    </section>
  );
}
