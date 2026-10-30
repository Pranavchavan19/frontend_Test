import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Package,
  Hospital,
  Briefcase,
} from "lucide-react";

const articles = [
  {
    category: "Company",
    title: "Discover Westfield Medical",
    description:
      "Learn more about our company and our healthcare packaging solutions.",
    icon: Globe,
    path: "/about",
    date: "Company Information",
  },
  {
    category: "Products",
    title: "Explore the Humipak Range",
    description:
      "Find out more about Humipak and its next generation technology.",
    icon: Package,
    path: "/humipak",
    date: "Product Information",
  },
  {
    category: "Healthcare",
    title: "Supporting Sterile Services",
    description:
      "Explore packaging considerations for hospital sterile services.",
    icon: Hospital,
    path: "/hospital",
    date: "Healthcare Solutions",
  },
  {
    category: "Careers",
    title: "Work With Our Team",
    description:
      "Discover career opportunities and get in touch with our team.",
    icon: Briefcase,
    path: "/careers",
    date: "Career Information",
  },
];

export default function News() {
  const navigate = useNavigate();

  return (
    <>
      <section className="page-hero news-hero">
        <div className="container hero-content">
          <span className="eyebrow light">LATEST UPDATES</span>
          <h1>News & Updates</h1>
          <p>
            Explore company information, healthcare solutions and
            product updates from Westfield Medical.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">EXPLORE</span>
          <h2>Latest Information</h2>
          <p>
            Browse the latest information about our company,
            products and services.
          </p>
        </div>

        <div className="news-grid">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article className="news-card" key={article.title}>
                <div className="news-card-image">
                  <Icon size={55} />
                </div>

                <div className="news-card-content">
                  <span className="eyebrow">{article.category}</span>
                  <small>{article.date}</small>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>

                  <button
                    className="text-link"
                    onClick={() => navigate(article.path)}
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}