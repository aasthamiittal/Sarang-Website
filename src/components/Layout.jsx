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
        <div>
          <h3>Ready to modernize operations?</h3>
          <p>Contact us at Sarang@offical@tech@gmail.com or +91-9458317782.</p>
        </div>
        <div className="footer-actions">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="primary-button button-link" to="/contact">
              Book a Demo
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className="ghost-button button-link" to="/get-started">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
