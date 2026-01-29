const dashboards = [
  {
    title: "F&B Operations",
    detail: "Track sales trends, inventory usage, and kitchen performance.",
  },
  {
    title: "Retail Insights",
    detail: "Monitor margins, category performance, and customer patterns.",
  },
  {
    title: "Religious Industry",
    detail: "Manage collections, events, and donor data securely.",
  },
];

import { Link } from "react-router-dom";

export default function Dashboards() {
  return (
    <main>
      <section className="hero compact">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Dashboards</p>
            <h1>Industry dashboards for fast, confident decisions.</h1>
            <p className="subtitle">
              Operational dashboards built for industries that depend on daily
              accuracy.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>Built for clarity</h3>
            <p>
              Dashboards designed to surface key metrics, exceptions, and
              performance indicators clearly.
            </p>
            <div className="mini-metrics">
              <div>
                <strong>Live</strong>
                <span>sales</span>
              </div>
              <div>
                <strong>Smart</strong>
                <span>alerts</span>
              </div>
              <div>
                <strong>Secure</strong>
                <span>access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-header">
            <h2>Dashboard coverage</h2>
            <p>Specialized views for every operating team.</p>
          </div>
          <div className="feature-grid">
            {dashboards.map((item) => (
              <div key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
