import { Link } from "react-router-dom";

export default function Websites() {
  return (
    <main>
      <section className="hero compact">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Fully Functional Websites</p>
            <h1>Web experiences built around your business requirements.</h1>
            <p className="subtitle">
              We design and develop websites that communicate clearly, perform
              reliably, and scale as your business grows.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>What you get</h3>
            <p>Structured layouts, responsive design, and production-ready delivery.</p>
            <div className="mini-metrics">
              <div>
                <strong>Brand-led</strong>
                <span>visuals</span>
              </div>
              <div>
                <strong>SEO-ready</strong>
                <span>structure</span>
              </div>
              <div>
                <strong>Secure</strong>
                <span>deployments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content two-column">
          <div>
            <h2>Custom website delivery</h2>
            <p>
              Our website delivery process focuses on clarity, usability, and
              performance. We turn your requirements into structured pages with
              messaging that supports credibility, discoverability, and
              conversions.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Included services</h3>
            <ul>
              <li>User flow planning and wireframes</li>
              <li>Responsive and consistent UI design</li>
              <li>Development, testing, and deployment</li>
              <li>Maintenance and future enhancements</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
