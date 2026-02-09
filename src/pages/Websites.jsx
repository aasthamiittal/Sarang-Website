import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import websitesMedia from "../assests/Product-Related/website-related.png";
import ecommerceFiller from "../assests/Fillers/e-commerce.png";

const websiteTypes = [
  {
    title: "Shopify Development",
    detail: "Custom Shopify stores with themes, apps, and e-commerce workflows tailored to your brand.",
  },
  {
    title: "Odoo Development",
    detail: "Odoo ERP and website modules—inventory, CRM, e-commerce—integrated for your operations.",
  },
  {
    title: "Custom Domain Websites",
    detail: "Domain-based websites from landing pages to full web apps—responsive, SEO-ready, and scalable.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹15,000 onwards",
    note: "Landing page or simple website",
    perks: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "Domain & hosting guidance",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
    ],
  },
  {
    name: "Professional",
    price: "₹50,000 onwards",
    note: "Shopify / Odoo store or custom site",
    perks: [
      "Up to 15 pages",
      "Responsive design",
      "Full SEO optimization",
      "Shopify or Odoo setup",
      "Payment gateway integration",
      "Product catalog",
      "Admin dashboard access",
      "—",
      "—",
      "—",
      "—",
      "—",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom quote",
    note: "Full custom development",
    perks: [
      "Unlimited pages",
      "Responsive design",
      "Advanced SEO & analytics",
      "Shopify + Odoo integration",
      "Multiple payment options",
      "Custom workflows",
      "API integrations",
      "Multi-language support",
      "Maintenance & support",
      "—",
      "—",
      "—",
    ],
  },
];

function getPlanPerks(plan) {
  return plan.perks.filter((p) => p !== "—");
}

export default function Websites() {
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
              Fully Functional Websites
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Web experiences built around your business requirements.
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Shopify, Odoo, and custom domain-based websites—designed for clarity,
              performance, and growth.
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
                src={websitesMedia}
                alt="Website development preview"
                loading="lazy"
              />
            </div>
            <h3>What you get</h3>
            <p>
              Shopify stores, Odoo websites, and custom domain solutions—structured layouts,
              responsive design, and production-ready delivery.
            </p>
            <div className="mini-metrics">
              {[
                { label: "Brand-led", sublabel: "visuals" },
                { label: "SEO-ready", sublabel: "structure" },
                { label: "Secure", sublabel: "deployments" },
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
            <h2>Website development types</h2>
            <p>
              From Shopify stores and Odoo integrations to custom domain-based
              websites—we build solutions that fit your business.
            </p>
          </motion.div>
          <motion.div className="feature-grid" variants={containerVariants}>
            {websiteTypes.map((item) => (
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

      <AnimatedSection className="section muted">
        <div className="section-content section-with-image">
          <motion.div className="section-image-block" variants={itemVariants}>
            <h2>Custom website delivery</h2>
            <p>
              Our website delivery process focuses on clarity, usability, and
              performance. We turn your requirements into structured pages with
              messaging that supports credibility, discoverability, and
              conversions—whether on Shopify, Odoo, or custom domains.
            </p>
          </motion.div>
          <motion.div className="section-image-wrap" variants={cardVariants}>
            <img src={ecommerceFiller} alt="E-commerce solutions" loading="lazy" />
          </motion.div>
        </div>
        <div className="section-content">
          <motion.div
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <h3>Included services</h3>
            <ul>
              {[
                "User flow planning and wireframes",
                "Responsive and consistent UI design",
                "Shopify / Odoo / custom development",
                "Testing, deployment & maintenance",
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
            <p>Choose a plan that matches your website needs.</p>
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
