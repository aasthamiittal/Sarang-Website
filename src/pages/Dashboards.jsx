import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import dashboardsMedia from "../assests/Product-Related/Generic-product-image.png";

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

const pricingPlans = [
  {
    name: "Basic",
    price: "₹12,000 per month",
    note: "Single dashboard, core metrics",
    perks: [
      "1 dashboard view",
      "Basic metrics & KPIs",
      "Daily data refresh",
      "Email support",
      "—",
      "—",
      "—",
      "—",
    ],
  },
  {
    name: "Professional",
    price: "₹25,000 per month",
    note: "Multiple dashboards, advanced views",
    perks: [
      "Up to 5 dashboard views",
      "Advanced metrics & analytics",
      "Real-time data refresh",
      "Priority support",
      "Custom KPIs",
      "Export & reports",
      "—",
      "—",
    ],
  },
  {
    name: "Enterprise",
    price: "₹45,000 per month",
    note: "Custom dashboards, full control",
    perks: [
      "Unlimited dashboards",
      "Custom metrics & analytics",
      "Real-time sync",
      "Dedicated support",
      "Custom KPIs & alerts",
      "Full export & API access",
      "Multi-user access",
      "On-premise option",
    ],
  },
];

function getPlanPerks(plan) {
  return plan.perks.filter((p) => p !== "—");
}

export default function Dashboards() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main>
      <section className="hero compact" ref={heroRef}>
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
              Dashboards
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Industry dashboards for fast, confident decisions.
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Operational dashboards built for industries that depend on daily
              accuracy.
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
                src={dashboardsMedia}
                alt="Dashboard preview"
                loading="lazy"
              />
            </div>
            <h3>Built for clarity</h3>
            <p>
              Dashboards designed to surface key metrics, exceptions, and
              performance indicators clearly.
            </p>
            <div className="mini-metrics">
              {[
                { label: "Live", sublabel: "sales" },
                { label: "Smart", sublabel: "alerts" },
                { label: "Secure", sublabel: "access" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <strong>{metric.label}</strong>
                  <span>{metric.sublabel}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <AnimatedSection className="section">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Dashboard coverage</h2>
            <p>Specialized views for every operating team.</p>
          </motion.div>
          <motion.div className="feature-grid" variants={containerVariants}>
            {dashboards.map((item) => (
              <motion.div
                key={item.title}
                className="feature-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section muted" id="pricing">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Pricing</h2>
            <p>Choose a plan that matches your dashboard needs.</p>
          </motion.div>
          <motion.div className="pricing-grid" variants={containerVariants}>
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
                  {getPlanPerks(plan).map((perk) => (
                    <motion.li
                      key={perk}
                      className="perk-on"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="perk-icon">✓</span>
                      <span>{perk}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
