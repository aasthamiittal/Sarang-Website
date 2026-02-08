import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import webQrsMedia from "../assests/Product-Related/f&b-webqr.png";
import webQrFiller from "../assests/Fillers/web-qr-ordering.png";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹8,000 per month",
    note: "Single outlet, basic menu",
    perks: [
      "1 outlet support",
      "Basic menu setup",
      "QR code generation",
      "Order notifications",
      "—",
      "—",
      "—",
      "—",
    ],
  },
  {
    name: "Growth",
    price: "₹18,000 per month",
    note: "Multi-outlet, advanced features",
    perks: [
      "Up to 5 outlets",
      "Full menu & availability",
      "QR codes per table",
      "Order flow to kitchen",
      "Payment integration",
      "Usage analytics",
      "—",
      "—",
    ],
  },
  {
    name: "Enterprise",
    price: "₹35,000 per month",
    note: "Unlimited outlets, full control",
    perks: [
      "Unlimited outlets",
      "Custom menu & branding",
      "Multi-language support",
      "Real-time order sync",
      "Multiple payment gateways",
      "Advanced analytics",
      "Custom workflows",
      "API access",
    ],
  },
];

function getPlanPerks(plan) {
  return plan.perks.filter((p) => p !== "—");
}

export default function WebQrs() {
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
              Web QRs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              QR ordering that removes friction for customers.
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Enable customers to order and pay through simple, browser-based
              QR experiences.
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className="secondary-button button-link" to="/get-started">
                  Get Started
                </Link>
              </motion.div>
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
                src={webQrsMedia}
                alt="QR ordering preview"
                loading="lazy"
              />
            </div>
            <h3>Contactless, fast, reliable</h3>
            <p>Reduce wait times and simplify service workflows.</p>
            <div className="mini-metrics">
              {[
                { label: "2x", sublabel: "faster ordering" },
                { label: "Zero", sublabel: "app installs" },
                { label: "Secure", sublabel: "payments" },
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
        <div className="section-content section-with-image">
          <motion.div className="section-image-block" variants={itemVariants}>
            <h2>What's included</h2>
            <p>
              Our QR ordering systems are designed for speed, reliability, and
              operational control—without requiring customers to install apps.
            </p>
          </motion.div>
          <motion.div className="section-image-wrap" variants={cardVariants}>
            <img src={webQrFiller} alt="QR ordering" loading="lazy" />
          </motion.div>
        </div>
        <div className="section-content">
          <motion.div
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <h3>Core capabilities</h3>
            <ul>
              {[
                "Live menu and availability control",
                "Instant order flow to operations",
                "Integrated payment options",
                "Order and usage analytics",
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

      <AnimatedSection className="section muted" id="pricing">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Pricing</h2>
            <p>Choose a plan that matches your QR ordering scale.</p>
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
