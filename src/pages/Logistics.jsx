import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import logisticsMedia from "../assests/Product-Related/Generic-product-2-image.png";

export default function Logistics() {
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
              Sarang Logistics Dashboards
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Unified logistics visibility <br />
              <motion.span
                style={{ fontSize: "1rem", color: "#bbbfc6" }}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                Coming soon...
              </motion.span>
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              We're building a centralized logistics dashboard to track
              shipments, billing, and delivery performance across domestic and
              international operations.
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
                <Link className="secondary-button button-link" to="/#products-services">
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
                src={logisticsMedia}
                alt="Logistics dashboard preview"
                loading="lazy"
              />
            </div>
            <h3>Coming Soon</h3>
            <p>
              Sarang Logistics is currently under development. We're designing
              a reliable dashboard for logistics teams that need clear tracking,
              structured workflows, and real-time visibility.
            </p>
            <div className="mini-metrics">
              {[
                { label: "Shipment", sublabel: "visibility" },
                { label: "Operational", sublabel: "tracking" },
                { label: "Scalable", sublabel: "architecture" },
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
        <div className="section-content two-column">
          <motion.div variants={itemVariants}>
            <h2>What to expect</h2>
            <p>
              The Sarang Logistics Dashboard will bring together shipment
              milestones, carrier details, billing status, and customer updates
              in one structured workspace. The goal is to reduce fragmentation
              and help teams manage logistics operations with accuracy and
              confidence.
            </p>
          </motion.div>
          <motion.div
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <h3>Early access benefits</h3>
            <ul>
              {[
                "Priority access during initial rollout",
                "Input into workflow and feature planning",
                "Custom operational mapping support",
                "Guided onboarding once launched",
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
    </main>
  );
}
