import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, containerVariants, itemVariants, cardVariants } from "../utils/animations";
import heroImage from "../assests/Product-Related/trusted.png";
import aboutImage from "../assests/Product-Related/about.png";
import dashboardImage from "../assests/Product-Related/main-image.jpg";
import qrImage from "../assests/Product-Related/Generic-QR-WEB.png";
import billingPortalImage from "../assests/Product-Related/billing-portal.png";
import logisticsImage from "../assests/Product-Related/Logistics-dashboard.png";

const products = [
  {
    id: "billing",
    title: "Billing Portals",
    tagline: "One platform for billing, inventory, and business visibility",
    why: "Manual billing leads to errors, delays, and lost revenue. Retail and F&B operations need real-time accuracy to stay compliant and profitable.",
    how: "Our billing portal consolidates invoices, GST handling, inventory, and reports in one place. RBAC ensures secure access, while automated workflows cut billing time by up to 60%. You grow by reducing operational friction and scaling with confidence.",
    link: "/billing-portal",
    image: billingPortalImage,
  },
  {
    id: "websites",
    title: "Websites",
    tagline: "Shopify, Odoo & custom web experiences",
    why: "Your online presence drives credibility and conversions. Generic templates don't reflect your brand or integrate with your operations.",
    how: "We build websites tailored to your business: Shopify stores, Odoo integrations, or custom domains. SEO-ready, responsive, and built for growth. Every site is designed to convert visitors and support your long-term goals.",
    link: "/websites",
    image: aboutImage,
  },
  {
    id: "dashboards",
    title: "Industry Dashboards",
    tagline: "Operational dashboards for fast, confident decisions",
    why: "Data scattered across spreadsheets and tools slows decisions. F&B, retail, and religious organizations need clear, real-time insights.",
    how: "Our dashboards surface key metrics, exceptions, and KPIs in one view. Track sales trends, inventory usage, collections, and performance in real time. Grow by making data-driven decisions faster.",
    link: "/dashboards",
    image: dashboardImage,
  },
  {
    id: "webqrs",
    title: "Web QRs",
    tagline: "QR ordering that removes friction for customers",
    why: "Long wait times and app downloads hurt customer experience. Restaurants and cafes need contactless ordering that's fast and install-free.",
    how: "Browser-based QR ordering lets customers scan, order, and pay without downloading apps. Orders flow straight to your kitchen. Reduce wait times, improve turnover, and scale service without extra staff.",
    link: "/web-qrs",
    image: qrImage,
  },
  {
    id: "logistics",
    title: "Logistics Boards",
    tagline: "Unified visibility across tracking and operations",
    why: "Shipment tracking and delivery status spread across systems create chaos. Logistics teams need one clear view of everything.",
    how: "Our logistics dashboard centralizes shipment milestones, carrier details, billing status, and customer updates. Reduce fragmentation, improve delivery accuracy, and scale operations with full visibility.",
    link: "/logistics",
    image: logisticsImage,
  },
];

const pricingOverview = [
  {
    product: "Billing Portal",
    range: "₹15,000 – ₹70,000/year",
    subscription: "Subscription-based",
    note: "Starts at Basic; scales with Elite for full custom workflows.",
  },
  {
    product: "Websites",
    range: "₹15,000 – Custom",
    subscription: "Subscription-based (hosting + support)",
    note: "From landing pages to Shopify/Odoo stores and enterprise builds.",
  },
  {
    product: "Dashboards",
    range: "₹18,000 – ₹45,000/month",
    subscription: "Subscription-based",
    note: "Basic to Enterprise with unlimited dashboards and API access.",
  },
  {
    product: "Web QRs",
    range: "₹8,000 – ₹35,000/month",
    subscription: "Subscription-based",
    note: "Single outlet to unlimited outlets with full customization.",
  },
];

const whySarang = [
  "Product-first approach with clean, intuitive UX that teams actually use",
  "Secure, compliant systems built for real business workflows",
  "Clear reporting and dashboards for faster, better decisions",
  "Scalable architecture that grows with you, no rebuilds needed",
  "Dedicated support and long-term partnership, not one-off projects",
  "Multi-industry expertise: retail, F&B, religious, logistics, and more",
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, Metro Retail Solutions",
    company: "Retail chain (12 stores)",
    quote: "Sarang's billing portal cut our invoice processing time by half. The multi-store management and RBAC made it easy to scale. Best investment we made in 2024.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Operations Head, TechBazaar India",
    company: "E-commerce & retail tech",
    quote: "Our Sarang-built Shopify store and dashboard integration gave us full control over inventory and sales. Conversions improved 35% in the first quarter.",
    avatar: "PM",
  },
  {
    name: "Vikram Patel",
    role: "Director, QuickServe Restaurants",
    company: "F&B multi-outlet chain",
    quote: "Web QRs transformed our dine-in experience. No app downloads, faster ordering, happier customers. Our table turnover improved significantly.",
    avatar: "VP",
  },
  {
    name: "Anita Desai",
    role: "CFO, Divine Trust Foundation",
    company: "Religious & community org",
    quote: "The dashboard for collections and donor data is exactly what we needed. Secure, clear, and easy for our team. Sarang understood our unique requirements.",
    avatar: "AD",
  },
];

const seoBenefits = [
  "SEO-optimized structure for better search visibility",
  "Fast-loading, mobile-friendly pages",
  "Structured data and meta tags for rich results",
  "Clear site architecture for crawling and indexing",
  "Content strategy aligned with your target keywords",
];

function AnimatedSectionLocal({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

export default function GetStarted() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="get-started-page">
      <section className="hero compact get-started-hero" ref={heroRef}>
        <motion.div
          className="hero-content get-started-hero-content"
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
              Get Started with Sarang
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Products, pricing, and plans designed to scale with your business.
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              All our products are subscription-based. No large upfront costs. Explore
              billing, dashboards, websites, QR ordering, and logistics. Pick a plan
              that fits your budget and grow with confidence.
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
                  View Products
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
            <div className="hero-card-image-wrap">
              <motion.img
                src={heroImage}
                alt="Trusted Sarang solutions"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <h3>Why choose Sarang</h3>
            <p>
              We combine product expertise with transparent subscription pricing and dedicated support.
              Every solution is built to scale with your business.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <AnimatedSectionLocal className="section subscription-banner-section">
        <div className="section-content">
          <motion.div
            className="subscription-banner"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="subscription-badge">Subscription-based</span>
            <h3>All Sarang products run on subscription plans</h3>
            <p>
              No large upfront costs. Pay monthly or annually, scale up or down as needed.
              Billing Portals, Dashboards, Web QRs, and Logistics are subscription-based.
              Websites include subscription for hosting, maintenance, and support.
            </p>
          </motion.div>
        </div>
      </AnimatedSectionLocal>

      <AnimatedSectionLocal className="section" id="products-overview">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Product Overview</h2>
            <p>
              Each product is subscription-based and designed to solve real problems.
              Here’s the idea behind them and how they help you grow.
            </p>
          </motion.div>
          <div className="get-started-product-list">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className={`get-started-product-card ${product.image ? "has-image" : ""}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ y: -4 }}
              >
                <div className="product-card-content">
                  <h3>{product.title}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <div className="product-why-how">
                    <div>
                      <h4>Why it matters</h4>
                      <p>{product.why}</p>
                    </div>
                    <div>
                      <h4>How it helps you grow</h4>
                      <p>{product.how}</p>
                    </div>
                  </div>
                  <Link className="text-link" to={product.link}>
                    Learn more →
                  </Link>
                </div>
                {product.image && (
                  <div className="product-card-image-wrap">
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSectionLocal>

      <AnimatedSectionLocal className="section muted" id="pricing-budget">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Pricing &amp; Budget</h2>
            <p>
              All plans are subscription-based. Transparent pricing that scales with your needs.
              We align with your budget and growth plans. No hidden costs.
            </p>
          </motion.div>
          <motion.div className="pricing-overview-grid" variants={containerVariants}>
            {pricingOverview.map((item, index) => (
              <motion.div
                key={item.product}
                className="pricing-overview-card"
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)" }}
              >
                <h4>{item.product}</h4>
                <span className="subscription-label">{item.subscription}</span>
                <p className="price-range">{item.range}</p>
                <p className="price-note">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="pricing-cta"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Need a custom plan? <Link className="text-link" to="/contact">Contact us</Link> for a
              tailored quote based on your requirements and budget.
            </p>
          </motion.div>
        </div>
      </AnimatedSectionLocal>

      <AnimatedSectionLocal className="section" id="why-sarang">
        <div className="section-content two-column">
          <motion.div variants={itemVariants}>
            <h2>Why Sarang is Better</h2>
            <p>
              We don’t just build software. We partner with businesses to deliver
              solutions that work in the real world. Here’s what sets us apart.
            </p>
          </motion.div>
          <motion.div
            className="highlight-card"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
          >
            <h3>Our Edge</h3>
            <ul>
              {whySarang.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSectionLocal>

      {/* <AnimatedSectionLocal className="section muted" id="testimonials">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>What Our Clients Say</h2>
            <p>
              Retail and tech businesses trust Sarang for billing, dashboards,
              websites, and more. Here’s what they’re saying.
            </p>
          </motion.div>
          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(37, 99, 235, 0.12)" }}
              >
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                  <span className="testimonial-company">{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSectionLocal> */}

      <AnimatedSectionLocal className="section" id="seo">
        <div className="section-content">
          <motion.div className="section-header" variants={itemVariants}>
            <h2>SEO &amp; Discoverability</h2>
            <p>
              Every website we build is designed for search visibility. We help
              your business get found by the right audience.
            </p>
          </motion.div>
          <motion.div
            className="seo-benefits"
            variants={containerVariants}
          >
            {seoBenefits.map((item, index) => (
              <motion.div
                key={item}
                className="seo-benefit-item"
                variants={itemVariants}
              >
                <span className="seo-check">✓</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="seo-cta"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            From technical SEO to content strategy, our websites are built to rank.
            <Link className="text-link" to="/websites"> Explore our website solutions →</Link>
          </motion.p>
        </div>
      </AnimatedSectionLocal>

      <AnimatedSectionLocal className="section muted get-started-cta">
        <div className="section-content">
          <motion.div
            className="final-cta-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Book a demo to see how Sarang can help you grow. We’ll walk you
              through our subscription plans, pricing, and what makes us different.
            </p>
            <div className="cta-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className="primary-button button-link" to="/contact">
                  Book a Demo
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className="ghost-button button-link" to="/">
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSectionLocal>
    </main>
  );
}
