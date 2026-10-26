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
  const featured = content.items.slice(0, 8);
  const remaining = content.items.slice(8);
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
          {featured.map(site => <SiteLink key={site.url} site={site} />)}
        </div>
        {remaining.length > 0 && (
          <details className="live-sites-more">
            <summary>{content.moreLabel} <span>({remaining.length})</span></summary>
            <div className="live-sites-grid">
              {remaining.map(site => <SiteLink key={site.url} site={site} />)}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
