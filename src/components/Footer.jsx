import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = [
  ["About Westfield Medical", "/about"],
  ["Humipak", "/humipak"],
  ["Hospital Sterile Services", "/hospital"],
  ["Medical Device Manufacturers", "/manufacturers"],
  ["News", "/news"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h2>WESTFIELD <span>MEDICAL</span></h2>
          <p>
            Delivering innovative healthcare packaging solutions
            through quality, technology and customer-focused service.
          </p>
          <a href="mailto:sales@westmed.co.uk" className="footer-email">
            <Mail size={16} /> sales@westmed.co.uk
          </a>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {footerLinks.map(([label, path]) => (
              <Link to={path} key={path}>
                <ArrowRight size={13} /> {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p><Phone size={16} /> +44 (0)1761 408800</p>
          <p><Mail size={16} /> sales@westmed.co.uk</p>
          <p><MapPin size={16} /> United Kingdom</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Westfield Medical. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}