import { Link } from "react-router-dom";

export default function Logistics() {
  return (
    <main>
      <section className="hero compact">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Sarang Logistics Dashboards</p>
            <h1>Unified logistics visibility <br/>
               <span style={{fontSize:"1rem",color:"#bbbfc6"}}>Coming soon...</span>
                </h1>
            <p className="subtitle">
              We’re building a centralized logistics dashboard to track
              shipments, billing, and delivery performance across domestic and
              international operations.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>Coming Soon</h3>
            <p>
              Sarang Logistics is currently under development. We’re designing
              a reliable dashboard for logistics teams that need clear tracking,
              structured workflows, and real-time visibility.
            </p>
            <div className="mini-metrics">
              <div>
                <strong>Shipment</strong>
                <span>visibility</span>
              </div>
              <div>
                <strong>Operational</strong>
                <span>tracking</span>
              </div>
              <div>
                <strong>Scalable</strong>
                <span>architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content two-column">
          <div>
            <h2>What to expect</h2>
            <p>
              The Sarang Logistics Dashboard will bring together shipment
              milestones, carrier details, billing status, and customer updates
              in one structured workspace. The goal is to reduce fragmentation
              and help teams manage logistics operations with accuracy and
              confidence.
            </p>
          </div>
          <div className="highlight-card">
            <h3>Early access benefits</h3>
            <ul>
              <li>Priority access during initial rollout</li>
              <li>Input into workflow and feature planning</li>
              <li>Custom operational mapping support</li>
              <li>Guided onboarding once launched</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
