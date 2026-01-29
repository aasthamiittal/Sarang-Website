import { Link, NavLink } from "react-router-dom";

const offerings = [
  {
    title: "Billing-Portals",
    description:
      "Billing, inventory, and reports designed for accuracy and daily reliability.",
    link: "/billing-portal",
  },
  {
    title: "Fully Functional Websites",
    description:
      "Professionally built websites aligned with brand, performance, and growth.",
    link: "/websites",
  },
  {
    title: "Dashboards for F&B, Retail, Religious",
    description: "Operational dashboards tailored to industry-specific needs.",
    link: "/dashboards",
  },
  {
    title: "Web QRs for Ordering",
    description:
      "Fast, browser-based ordering experiences without app installs.",
    link: "/web-qrs",
  },
  {
    title: "Sarang Logistics Dashboards",
    description: "Unified visibility across logistics operations and tracking.",
    link: "/logistics",
  },
];

const highlights = [
  "Product-first approach with clean, intuitive UX",
  "Secure systems designed for real business workflows",
  "Clear reporting and dashboards for better decisions",
  "Scalable architecture with dependable support",
];

export default function Home() {
  return (
    <main>
      <section className="hero compact">
        <div className="hero-content">
          <div className="hero-text">
        
            <h1>
              Digital products that simplify and scale everyday business
              operations.
            </h1>
            <p className="subtitle">
              Sarang builds billing systems, operational dashboards, and
              customer-ready web products that help growing businesses stay
              accurate, efficient, and in control.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>Trusted Delivery</h3>
            <p>
              We design, build, and ship reliable digital products with a focus
              on clarity, performance, and long-term scalability.
            </p>
            <div className="mini-metrics">
              <div>
                <strong>Production Ready</strong>
                <span>deployments</span>
              </div>
              <div>
                <strong>Multi-industry</strong>
                <span>use cases</span>
              </div>
              <div>
                <strong>Reliable</strong>
                <span>post-launch support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content two-column">
          <div>
            <h2>About Sarang</h2>
            <p>
              Sarang is a product and technology company building practical
              digital tools for billing, operations, and service workflows. We
              focus on accuracy, transparency, and usability—helping businesses
              operate smoothly from day one and scale with confidence.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Why teams choose us</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="section-content">
          <div className="section-header">
            <h2>Products &amp; Services</h2>
            <p>
              A focused set of products designed to support modern business
              operations.
            </p>
          </div>
          <div className="feature-grid">
            {offerings.map((item) => (
              <div key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <NavLink className="text-link" to={item.link}>
                  Learn more →
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
