import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import trustimage from "../assests/Product-Related/People-Discussing-image.png";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Solutions that simplify and scale your business operations.
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sarang builds billing systems, operational dashboards, and
              customer-ready web products that help growing businesses stay
              accurate, efficient, and in control.
            </motion.p>
            <motion.div 
              className="cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
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
              <motion.img 
                className="trust-image" 
                src={trustimage} 
                alt="Trusted delivery and reliable solutions"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <h3>Trusted Delivery</h3>
            <p>
              We design, build, and ship reliable digital products with a focus
              on clarity, performance, and long-term scalability.
            </p>
            <div className="mini-metrics">
              {[
                { label: "Streamlined", sublabel: "deployments" },
                { label: "Multi-industry", sublabel: "use cases" },
                { label: "Reliable", sublabel: "post-launch support" }
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

      <AnimatedSection className="section">
        <div className="section-content two-column">
          <motion.div variants={itemVariants}>
            <h2>About Sarang</h2>
            <p>
              Sarang builds practical, user-friendly tools that make everyday
              business tasks easier whether it's billing, operations, or workflow management.
              With accuracy, clarity, and usability at the core, our products help teams work smoothly
              from day one and scale with confidence. We're committed to creating solutions that adapt
              as business grows, ensuring long-term stability and impact.
            </p>
          </motion.div>

          <motion.div 
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
          >
            <h3>Why Sarang</h3>
            <ul>
              {highlights.map((item, index) => (
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

      <AnimatedSection className="section muted" id="products-services">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Products &amp; Services</h2>
            <p>
              A focused set of products designed to support modern business
              operations.
            </p>
          </motion.div>
          <motion.div 
            className="feature-grid"
            variants={containerVariants}
          >
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                className="feature-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                custom={index}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <motion.div whileHover={{ x: 5 }}>
                  <NavLink className="text-link" to={item.link}>
                    Learn more →
                  </NavLink>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
