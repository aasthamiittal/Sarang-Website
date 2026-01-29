import { Link } from "react-router-dom";

const features = [
  {
    title: "Store Management",
    detail: "Manage outlets, users, and workflows from one place.",
  },
  {
    title: "RBAC (Role-Based Access Control)",
    detail: "Controlled system access based on responsibility.",
  },
  {
    title: "UI Customization",
    detail: "Invoices and themes aligned with your brand.",
  },
  {
    title: "Inventory Management",
    detail: "Live stock visibility with easy adjustments.",
  },
  {
    title: "Billing & Invoice Generation",
    detail: "Accurate invoices generated quickly.",
  },
  {
    title: "Reports & Visual Analytics",
    detail: "Readable dashboards for tracking trends.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹15,000 per month",
    note: "Essential billing & access control",
    perks: ["Invoice + GST billing","RBAC + SSO", "Basic inventory","Email support",
            "Priority support",
    ],
  },
  {
    name: "Advance",
    price: "₹36,000 per 6 months",
    note: "Advanced inventory & reporting",
    perks: ["Invoice + GST billing","RBAC + SSO", "Basic inventory","Email support",
            "Priority support","Multi-store management","Advanced reports","Advanced Inventory",
            "LAN Printing Feature","UI Customization"
    ],
  },
  {
    name: "Elite",
    price: "₹70,000 per year",
    note: "Custom workflows & full control",
    perks: ["Invoice + GST billing","RBAC + SSO","Basic inventory","Email support",
            "Priority support","Multi-store management","Advanced reports","Advanced Inventory",
            "LAN Printing Feature","UI Customization", "User activity logs & history","Custom workflows",
    ],
  },
];

const pricingFeatures = [
  "Invoice + GST billing",
  "RBAC + SSO",
  "Basic inventory",
  "Email support",
  "Priority support",
  "Multi-store management",
  "Advanced reports",
  "Advanced Inventory",
  "LAN Printing Feature",
  "UI Customization",
  "User activity logs & history",
  "Custom workflows",
];

function FeatureIcon() {
  return (
    <span className="feature-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12l2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function BillingPortal() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Billing Portal</p>
            <h1>
              Billing Portal – One platform for billing, inventory, and
              business visibility.
            </h1>
            <p className="subtitle">
              Manage billing, inventory, customers, and reports through a
              single, structured system built for growing businesses.
            </p>
            <div className="cta-row">
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
              <button className="secondary-button">Get Started</button>
            </div>
            <div className="trust-row">
              <span>Designed for retail, F&amp;B, and service-driven operations.</span>
            </div>
          </div>
          <div className="hero-card">
            <h3>Unified Command Center</h3>
            <p>
              Monitor invoices, stock, and payments from one secure dashboard
              with clear, real-time insights.
            </p>
            <div className="mini-metrics">
              <div>
                <strong>High Level</strong>
                <span>infrastructure</span>
              </div>
              <div>
                <strong>Faster</strong>
                <span>billing workflows</span>
              </div>
              <div>
                <strong>Ongoing</strong>
                <span>technical support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="section-content">
          <h2>What is Billing Portal?</h2>
          <p>
            Billing Portal is a centralized platform that handles invoicing,
            inventory tracking, customer records, payments, and reporting. It
            replaces fragmented tools with one structured system that keeps
            operations accurate and aligned.
          </p>
        </div>
      </section>

      <section className="section muted" id="why">
        <div className="section-content two-column">
          <div>
            <h2>Why Billing Portal?</h2>
            <p>
              Billing Portal reduces manual effort and operational errors by
              standardizing workflows. It improves billing speed, reporting
              clarity, and inventory control—helping teams stay compliant and
              informed without complexity.
            </p>
          </div>
          <div className="benefit-list">
            <div>
              <h4>Time savings</h4>
              <p>Reduce billing time with structured workflows.</p>
            </div>
            <div>
              <h4>Error reduction</h4>
              <p>Maintain consistent data and compliance.</p>
            </div>
            <div>
              <h4>Collections clarity</h4>
              <p>Track outstanding payments and aging clearly.</p>
            </div>
            <div>
              <h4>Business visibility</h4>
              <p>View sales, stock, and performance together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-content">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>
              Purpose-built features that support daily operations and
              long-term growth.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <FeatureIcon />
                <h3>{feature.title}</h3>
                <p>{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="benefits">
        <div className="section-content two-column">
          <div>
            <h2>Benefits that scale with you</h2>
            <p>
              Billing Portal supports both single-location businesses and
              expanding teams. Its structure adapts as your operations grow—without
              forcing you to rebuild systems later.
            </p>
            <Link className="primary-button button-link" to="/contact">
              Book a Demo
            </Link>
          </div>
          <div className="highlight-card">
            <h3>Operational Confidence</h3>
            <ul>
              <li>Unified customer and payment records</li>
              <li>Standardized tax and invoice handling</li>
              <li>Controlled approvals and audit visibility</li>
              <li>Inventory consistency across locations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-content">
          <div className="section-header">
            <h2>Pricing</h2>
            <p>Choose a plan that matches your business scale.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="pricing-card">
                <div>
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="price-note">{plan.note}</p>
                </div>
                <ul>
                  {pricingFeatures.map((perk) => {
                    const isIncluded = plan.perks.includes(perk);
                    return (
                      <li
                        key={perk}
                        className={isIncluded ? "perk-on" : "perk-off"}
                      >
                        <span className="perk-icon">
                          {isIncluded ? "✓" : "×"}
                        </span>
                        <span>{perk}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="secondary-button full-width">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
