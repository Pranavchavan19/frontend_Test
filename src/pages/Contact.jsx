import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import SampleForm from "../components/SampleForm";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container hero-content">
          <span className="eyebrow light">WE ARE HERE TO HELP</span>
          <h1>Contact Westfield Medical</h1>
          <p>
            Have a question about our products or services?
            Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Contact our team for product information, sample requests
            or general enquiries.
          </p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <div className="feature-icon"><Phone /></div>
            <h3>Call Us</h3>
            <a href="tel:+441761408800">+44 (0)1761 408800</a>
          </article>

          <article className="contact-card">
            <div className="feature-icon"><Mail /></div>
            <h3>Email Us</h3>
            <a href="mailto:sales@westmed.co.uk">sales@westmed.co.uk</a>
          </article>

          <article className="contact-card">
            <div className="feature-icon"><MapPin /></div>
            <h3>Location</h3>
            <p>United Kingdom</p>
          </article>

          <article className="contact-card">
            <div className="feature-icon"><Clock /></div>
            <h3>Enquiries</h3>
            <p>Contact our team for assistance.</p>
          </article>
        </div>

        <div className="contact-form-cta">
          <div>
            <h2>Send Us an Enquiry</h2>
            <p>Fill in your details and our team will get back to you.</p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setShowForm(true)}
          >
            Send Enquiry <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {showForm && <SampleForm onClose={() => setShowForm(false)} />}
    </>
  );
}