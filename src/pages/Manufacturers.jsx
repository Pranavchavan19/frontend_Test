import { useNavigate } from "react-router-dom";
import {
  Factory,
  Package,
  Settings,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Manufacturers() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Package,
      title: "Packaging Products",
      text: "Explore packaging products for medical device applications.",
    },
    {
      icon: Settings,
      title: "Manufacturing Support",
      text: "Discuss packaging requirements with our team.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Focus",
      text: "Solutions developed with healthcare packaging needs in mind.",
    },
  ];

  return (
    <>
      <section className="page-hero manufacturer-hero">
        <div className="container hero-content">
          <span className="eyebrow light">INDUSTRY SOLUTIONS</span>
          <h1>Medical Device Manufacturers</h1>
          <p>
            Exploring packaging solutions to support medical device
            manufacturers and their requirements.
          </p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Contact Our Team <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">MANUFACTURER SOLUTIONS</span>
          <h2>Supporting Medical Device Manufacturers</h2>
          <p>
            Find out more about packaging products and support for
            medical device manufacturing requirements.
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
          <div>
            <span className="eyebrow">LET'S DISCUSS</span>
            <h2>Find the Right Packaging Solution</h2>
            <p>
              Every manufacturing requirement is different. Contact
              Westfield Medical to discuss your packaging needs and
              explore available product information.
            </p>
            <ul className="check-list">
              <li><CheckCircle /> Product enquiries</li>
              <li><CheckCircle /> Packaging information</li>
              <li><CheckCircle /> Sample requests</li>
            </ul>
            <button className="primary-btn" onClick={() => navigate("/contact")}>
              Send an Enquiry <ArrowRight size={16} />
            </button>
          </div>

          <div className="large-icon-panel">
            <Factory size={100} />
            <h3>Medical Device Manufacturing</h3>
          </div>
        </div>
      </section>
    </>
  );
}