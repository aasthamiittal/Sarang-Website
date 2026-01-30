import { Link, NavLink } from "react-router-dom";

const offerings = [
  {
    title: "Billing-Portals",
    description:
      "Reliable billing, inventory, and reporting tools designed for accuracy and daily use.",
    link: "/billing-portal",
  },
  {
    title: "Websites",
    description:
      "Professional websites built for strong branding, solid performance, and steady growth.",
    link: "/websites",
  },
  {
    title: "Industry Dashboard",
    description: "Operational dashboards crafted to deliver clear insights for industry-specific teams.",
    link: "/dashboards",
  },
  {
    title: "Web QRs",
    description:
      "Browser-based QR ordering flows that offer fast, simple, and install-free experiences.",
    link: "/web-qrs",
  },
  {
    title: "Logistics Boards",
    description: "Logistics dashboards providing unified visibility across tracking and daily operations.",
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
              Solutions that simplify and scale your business operations.
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
                <strong>Streamlined</strong>
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
            Sarang builds practical, user-friendly tools that make everyday 
            business tasks easier whether it's billing, operations, or workflow management. 
            With accuracy, clarity, and usability at the core, our products help teams work smoothly
            from day one and scale with confidence. We’re committed to creating solutions that adapt
            as business grows, ensuring long-term stability and impact.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Why Sarang</h3>
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
