import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assests/Logo.png";

export default function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      const t1 = setTimeout(() => {
        if (!scrollToElement()) {
          setTimeout(scrollToElement, 200);
        }
      }, 100);
      return () => clearTimeout(t1);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="page">
      <motion.header 
        className={`site-header ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <nav className={`nav ${mobileMenuOpen ? "menu-open" : ""}`}>
          <button 
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <motion.div
            className="logo-wrapper"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink className="logo" to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Sarang logo" />
              <span className="sr-only">Sarang</span>
            </NavLink>
          </motion.div>
          <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            {[
              { to: "/billing-portal", label: "Billing Portal" },
              { to: "/websites", label: "Websites" },
              { to: "/dashboards", label: "Dashboards" },
              { to: "/web-qrs", label: "Web QRs" },
              { to: "/logistics", label: "Logistics" },
              { to: "/contact", label: "Contact" }
            ].map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink to={link.to} onClick={closeMobileMenu}>{link.label}</NavLink>
              </motion.div>
            ))}
          </div>
          <div className={`nav-actions ${mobileMenuOpen ? "active" : ""}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="ghost-button button-link" to="/contact" onClick={closeMobileMenu}>
                Book a Demo
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="primary-button button-link" to="/get-started" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <NavLink className="footer-logo" to="/">
                <img src={logo} alt="Sarang" />
              </NavLink>
              <p className="footer-tagline">Billing, dashboards, websites, QR ordering, and logistics for growing businesses.</p>
            </div>
            <div className="footer-links">
              <h4>Products</h4>
              <Link to="/billing-portal">Billing Portal</Link>
              <Link to="/websites">Websites</Link>
              <Link to="/dashboards">Dashboards</Link>
              <Link to="/web-qrs">Web QRs</Link>
              <Link to="/logistics">Logistics</Link>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <a href="mailto:Sarang.official.tech@gmail.com">Sarang.official.tech@gmail.com</a>
              <a href="tel:+919315608061">+91 9315608061</a>
            </div>
            <div className="footer-cta">
              <h4>Get in touch</h4>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link className="footer-cta-button" to="/contact">Book a Demo</Link>
              </motion.div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Sarang. All rights reserved.</span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
