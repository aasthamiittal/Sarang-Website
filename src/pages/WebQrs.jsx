import { Link } from "react-router-dom";

export default function WebQrs() {
  return (
    <main>
      <section className="hero compact">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Web QRs</p>
            <h1>QR ordering that removes friction for customers.</h1>
            <p className="subtitle">
              Enable customers to order and pay through simple, browser-based
              QR experiences.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>Contactless, fast, reliable</h3>
            <p>Reduce wait times and simplify service workflows.</p>
            <div className="mini-metrics">
              <div>
                <strong>2x</strong>
                <span>faster ordering</span>
              </div>
              <div>
                <strong>Zero</strong>
                <span>app installs</span>
              </div>
              <div>
                <strong>Secure</strong>
                <span>payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content two-column">
          <div>
            <h2>What’s included</h2>
            <p>
              Our QR ordering systems are designed for speed, reliability, and
              operational control—without requiring customers to install apps.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Core capabilities</h3>
            <ul>
              <li>Live menu and availability control</li>
              <li>Instant order flow to operations</li>
              <li>Integrated payment options</li>
              <li>Order and usage analytics</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
