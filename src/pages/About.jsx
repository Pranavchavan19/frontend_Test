import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Focus",
      text: "A strong focus on quality in healthcare packaging solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "Technology-led ideas designed around customer requirements.",
    },
    {
      icon: Users,
      title: "Customer Support",
      text: "Working with healthcare organisations and manufacturers.",
    },
    {
      icon: Award,
      title: "Experience",
      text: "Dedicated to supporting the evolving healthcare sector.",
    },
  ];

  return (
    <>
      <section className="page-hero about-hero">
        <div className="container hero-content">
          <span className="eyebrow light">WELCOME TO WESTFIELD MEDICAL</span>
          <h1>Supporting Healthcare Through Innovation</h1>
          <p>
            Healthcare packaging solutions designed with quality,
            technology and customer needs in mind.
          </p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Contact Our Team <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">ABOUT OUR COMPANY</span>
          <h2>Welcome to Westfield Medical</h2>
          <p>
            Westfield Medical supports the healthcare industry with
            packaging solutions for hospital sterile services and
            medical device manufacturers.
          </p>
        </div>

        <div className="about-content-grid">
          <div className="about-image-placeholder">
            <ShieldCheck size={75} />
            <span>Westfield Medical</span>
          </div>

          <div className="about-copy">
            <h3>Focused on Healthcare Packaging</h3>
            <p>
              We understand that healthcare packaging plays an important
              role in medical and sterile services workflows. Our focus
              is to provide practical solutions that support these needs.
            </p>
            <p>
              Explore our Humipak range and learn more about the solutions
              available for healthcare organisations.
            </p>
            <button className="text-link" onClick={() => navigate("/humipak")}>
              Discover Humipak <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE STAND FOR</span>
            <h2>Our Approach</h2>
          </div>

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
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">LET'S WORK TOGETHER</span>
            <h2>Have a packaging requirement?</h2>
            <p>Speak with our team about your requirements.</p>
          </div>
          <button className="light-btn" onClick={() => navigate("/contact")}>
            Get in Touch <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}