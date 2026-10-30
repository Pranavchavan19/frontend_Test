import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";


const navigation = [
  { path: "/about", label: "About Westfield Medical" },
  { path: "/humipak", label: "Humipak" },
  { path: "/hospital", label: "Hospital Sterile Services" },
  { path: "/manufacturers", label: "Medical Device Manufacturers" },
  { path: "/news", label: "News" },
  { path: "/careers", label: "Job Vacancies" },
  { path: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="mailto:sales@westmed.co.uk">
            <Mail size={14} /> sales@westmed.co.uk
          </a>
          <a href="tel:+441761408800">
            <Phone size={14} /> +44 (0)1761 408800
          </a>

          {/* <div className="social-links">
            <a href="https://www.linkedin.com/company/westfield-medical-limited/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>

            
          </div> */}


<div className="social-links">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/westfield-medical-limited/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5V9.5H5.67v8h2.67ZM7 8.4a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.33 17.5v-4.38c0-2.35-1.25-3.44-2.92-3.44a2.52 2.52 0 0 0-2.27 1.25V9.5h-2.67v8h2.67v-4.44c0-.23.02-.46.09-.62.2-.46.65-.94 1.4-.94.99 0 1.39.71 1.39 1.76v4.24h2.31Z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
    </svg>
  </a>

  {/* X / Twitter */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="X"
  >
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"/>
    </svg>
  </a>
</div>
        </div>
      </div>

      <div className="mainbar">
        <div className="container navbar">
          <button className="logo" onClick={() => navigate("/about")}>
            <span>WESTFIELD</span>
            <small>MEDICAL</small>
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}