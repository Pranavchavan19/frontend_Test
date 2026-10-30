import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Settings,
  CheckCircle,
} from "lucide-react";
import { fetchContent } from "../api";
import SampleForm from "../components/SampleForm";

const staticData = {
  title: "HUMIPAK",
  tagline: "Next generation technology",
  description:
    "Discover innovative packaging technology and solutions for healthcare.",
  heroImage: "",
};

export default function Humipak() {
  const navigate = useNavigate();
  const [data, setData] = useState(staticData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showSampleForm, setShowSampleForm] = useState(false);

  useEffect(() => {
    let active = true;

    fetchContent()
      .then((result) => {
        if (active) {
          setData({ ...staticData, ...result });
          setError("");
        }
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const features = [
    {
      icon: Package,
      title: "Packaging Solutions",
      text: "Explore packaging options for healthcare applications.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Focus",
      text: "Designed with healthcare packaging requirements in mind.",
    },
    {
      icon: Settings,
      title: "Modern Technology",
      text: "A technology-led approach to packaging solutions.",
    },
  ];

  return (
    <>
      <section
        className="page-hero humipak-hero"
        style={
          data.heroImage
            ? { backgroundImage: `linear-gradient(90deg, rgba(5,35,65,.88), rgba(5,35,65,.25)), url("${data.heroImage}")` }
            : {}
        }
      >
        <div className="container hero-content">
          <span className="eyebrow light">WESTFIELD MEDICAL PRODUCT RANGE</span>
          <h1>{data.title || "HUMIPAK"}</h1>
          <h2>{data.tagline || "Next generation technology"}</h2>
          <p>{data.description}</p>

          <button
            className="primary-btn"
            onClick={() => setShowSampleForm(true)}
          >
            Request a Sample <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">DISCOVER HUMIPAK</span>
          <h2>Next Generation Technology</h2>
          <p>
            Explore the Humipak range and discover packaging solutions
            designed to support healthcare requirements.
          </p>
        </div>

        {loading && (
          <div className="loading-message">
            <span className="loader"></span>
            Loading latest Humipak information...
          </div>
        )}

        {error && (
          <p className="notice-message">
            Showing available information. Latest server content could not
            be loaded at this time.
          </p>
        )}

        <div className="feature-grid">
          {features.map((item) => {
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
            <span className="eyebrow">WHY HUMIPAK</span>
            <h2>Explore the Humipak Range</h2>
            <p>
              Get in touch with our team to discuss product information,
              sample requests and packaging requirements.
            </p>
            <ul className="check-list">
              <li><CheckCircle /> Healthcare packaging focus</li>
              <li><CheckCircle /> Product information and support</li>
              <li><CheckCircle /> Sample request assistance</li>
            </ul>
            <button
              className="primary-btn"
              onClick={() => setShowSampleForm(true)}
            >
              Request a Sample
            </button>
          </div>

          <div className="humipak-visual">
            <Package size={100} />
            <h3>HUMIPAK</h3>
            <p>Next generation technology</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2>Need further information?</h2>
            <p>Our team can help you explore the right solution.</p>
          </div>
          <button className="light-btn" onClick={() => navigate("/contact")}>
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {showSampleForm && (
        <SampleForm onClose={() => setShowSampleForm(false)} />
      )}
    </>
  );
}