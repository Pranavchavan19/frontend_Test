import { useNavigate } from "react-router-dom";
import {
  Hospital,
  ShieldCheck,
  Package,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function HospitalServices() {
  const navigate = useNavigate();

  const services = [
    {
      icon: ShieldCheck,
      title: "Sterile Services Support",
      text: "Packaging solutions to support sterile services workflows.",
    },
    {
      icon: Package,
      title: "Packaging Products",
      text: "Explore packaging options for healthcare environments.",
    },
    {
      icon: Users,
      title: "Customer Support",
      text: "Speak with our team about your operational requirements.",
    },
  ];

  return (
    <>
      <section className="page-hero hospital-hero">
        <div className="container hero-content">
          <span className="eyebrow light">HEALTHCARE SOLUTIONS</span>
          <h1>Hospital Sterile Services</h1>
          <p>
            Supporting hospital sterile services departments with
            healthcare packaging solutions.
          </p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Discuss Your Requirements <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">HOSPITAL SERVICES</span>
          <h2>Supporting Sterile Services Departments</h2>
          <p>
            Sterile services departments have important packaging
            requirements. Explore how Westfield Medical can support
            your healthcare packaging needs.
          </p>
        </div>

        <div className="feature-grid">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <div className="feature-icon"><Icon size={28} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section soft-section">
        <div className="container two-column">
          <div className="large-icon-panel">
            <Hospital size={100} />
            <h3>Hospital Sterile Services</h3>
          </div>

          <div>
            <span className="eyebrow">OUR SOLUTIONS</span>
            <h2>Designed Around Healthcare Needs</h2>
            <p>
              Our healthcare packaging solutions are intended to support
              the needs of hospital departments and healthcare professionals.
            </p>
            <ul className="check-list">
              <li><CheckCircle /> Packaging product information</li>
              <li><CheckCircle /> Support for product enquiries</li>
              <li><CheckCircle /> Dedicated customer communication</li>
            </ul>
            <button className="primary-btn" onClick={() => navigate("/humipak")}>
              Explore Humipak <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}