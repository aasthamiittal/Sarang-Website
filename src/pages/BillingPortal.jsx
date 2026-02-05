import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import billingMedia from "../assests/Product-Related/products.png";

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
    <motion.span 
      className="feature-icon" 
      aria-hidden="true"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.span>
  );
}

export default function BillingPortal() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main>
      <section className="hero" ref={heroRef}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.p 
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Billing Portal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Billing Portal – One platform for billing, inventory, and
              business visibility.
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Manage billing, inventory, customers, and reports through a
              single, structured system built for growing businesses.
            </motion.p>
            <motion.div 
              className="cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className="primary-button button-link" to="/contact">
                  Book a Demo
                </Link>
              </motion.div>
              <motion.button 
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div 
              className="trust-row"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <span>Designed for retail, F&amp;B, and service-driven operations.</span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="hero-card-image">
              <img
                className="trust-image"
                src={billingMedia}
                alt="Billing portal preview"
                loading="lazy"
              />
            </div>
            <h3>Unified Command Center</h3>
            <p>
              Monitor invoices, stock, and payments from one secure dashboard
              with clear, real-time insights.
            </p>
            <div className="mini-metrics">
              {[
                { label: "High Level", sublabel: "infrastructure" },
                { label: "Faster", sublabel: "billing workflows" },
                { label: "Ongoing", sublabel: "technical support" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <strong>{metric.label}</strong>
                  <span>{metric.sublabel}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <AnimatedSection className="section" id="overview">
        <div className="section-content">
          <motion.h2 variants={itemVariants}>What is Billing Portal?</motion.h2>
          <motion.p 
            variants={itemVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Billing Portal is a centralized platform that handles invoicing,
            inventory tracking, customer records, payments, and reporting. It
            replaces fragmented tools with one structured system that keeps
            operations accurate and aligned.
          </motion.p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section muted" id="why">
        <div className="section-content two-column">
          <motion.div variants={itemVariants}>
            <h2>Why Billing Portal?</h2>
            <p>
              Billing Portal reduces manual effort and operational errors by
              standardizing workflows. It improves billing speed, reporting
              clarity, and inventory control—helping teams stay compliant and
              informed without complexity.
            </p>
          </motion.div>
          <motion.div 
            className="benefit-list"
            variants={containerVariants}
          >
            {[
              { title: "Time savings", desc: "Reduce billing time with structured workflows." },
              { title: "Error reduction", desc: "Maintain consistent data and compliance." },
              { title: "Collections clarity", desc: "Track outstanding payments and aging clearly." },
              { title: "Business visibility", desc: "View sales, stock, and performance together." }
            ].map((benefit, index) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" id="features">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Key Features</h2>
            <p>
              Purpose-built features that support daily operations and
              long-term growth.
            </p>
          </motion.div>
          <motion.div 
            className="feature-grid"
            variants={containerVariants}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.title} 
                className="feature-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FeatureIcon />
                <h3>{feature.title}</h3>
                <p>{feature.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section muted" id="benefits">
        <div className="section-content two-column">
          <motion.div variants={itemVariants}>
            <h2>Benefits that scale with you</h2>
            <p>
              Billing Portal supports both single-location businesses and
              expanding teams. Its structure adapts as your operations grow—without
              forcing you to rebuild systems later.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: "24px" }}
            >
              <Link className="primary-button button-link" to="/contact">
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <h3>Operational Confidence</h3>
            <ul>
              {[
                "Unified customer and payment records",
                "Standardized tax and invoice handling",
                "Controlled approvals and audit visibility",
                "Inventory consistency across locations"
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" id="pricing">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Pricing</h2>
            <p>Choose a plan that matches your business scale.</p>
          </motion.div>
          <motion.div 
            className="pricing-grid"
            variants={containerVariants}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={plan.name} 
                className="pricing-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ zIndex: index === 1 ? 10 : 1 }}
              >
                <div>
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="price-note">{plan.note}</p>
                </div>
                <ul>
                  {pricingFeatures.map((perk) => {
                    const isIncluded = plan.perks.includes(perk);
                    return (
                      <motion.li
                        key={perk}
                        className={isIncluded ? "perk-on" : "perk-off"}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="perk-icon">
                          {isIncluded ? "✓" : "×"}
                        </span>
                        <span>{perk}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
