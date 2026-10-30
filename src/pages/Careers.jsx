import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Careers() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "Team Environment",
      text: "Be part of a team working in the healthcare packaging sector.",
    },
    {
      icon: TrendingUp,
      title: "Development",
      text: "Explore opportunities to develop your professional skills.",
    },
    {
      icon: Briefcase,
      title: "Opportunities",
      text: "Connect with us to learn about available opportunities.",
    },
  ];

  return (
    <>
      <section className="page-hero careers-hero">
        <div className="container hero-content">
          <span className="eyebrow light">JOIN OUR TEAM</span>
          <h1>Careers at Westfield Medical</h1>
          <p>
            Interested in being part of a team supporting healthcare
            packaging solutions?
          </p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            Contact Us <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">CAREER OPPORTUNITIES</span>
          <h2>Build Your Future With Us</h2>
          <p>
            We welcome enquiries from people interested in learning
            more about working with Westfield Medical.
          </p>
        </div>

        <div className="feature-grid">
          {benefits.map((item) => {
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
        <div className="container career-contact">
          <div className="career-icon"><Briefcase size={48} /></div>
          <h2>Interested in joining us?</h2>
          <p>
            Contact our team to enquire about current vacancies
            and career opportunities.
          </p>
          <button className="primary-btn" onClick={() => navigate("/contact")}>
            <Mail size={16} /> Send an Enquiry
          </button>
        </div>
      </section>
    </>
  );
}