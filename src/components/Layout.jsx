import { NavLink, Outlet, Link } from "react-router-dom";
import logo from "../assests/Logo.png";

export default function Layout() {
  return (
    <div className="page">
      <header className="site-header">
        <nav className="nav">
          <NavLink className="logo" to="/">
            <img src={logo} alt="Sarang logo" />
            <span className="sr-only">Sarang</span>
          </NavLink>
          <div className="nav-links">
            <NavLink to="/billing-portal">Billing Portal</NavLink>
            <NavLink to="/websites">Websites</NavLink>
            <NavLink to="/dashboards">Dashboards</NavLink>
            <NavLink to="/web-qrs">Web QRs</NavLink>
            <NavLink to="/logistics">Logistics</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="nav-actions">
            <Link className="ghost-button button-link" to="/contact">
              Book a Demo
            </Link>
            <button className="primary-button">Get Started</button>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <div>
          <h3>Ready to modernize operations?</h3>
          <p>Contact us at contact@sarang.com or +91-00000-00000.</p>
        </div>
        <div className="footer-actions">
          <Link className="primary-button button-link" to="/contact">
            Book a Demo
          </Link>
          <button className="ghost-button">Get Started</button>
        </div>
      </footer>
    </div>
  );
}
