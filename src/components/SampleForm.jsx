import { useState } from "react";
import { X, Send } from "lucide-react";
import { submitSampleRequest } from "../api";

export default function SampleForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await submitSampleRequest(form);
      setSuccess("Thank you! Your request has been submitted.");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Unable to submit your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X />
        </button>

        <span className="eyebrow">GET IN TOUCH</span>
        <h2>Request a Sample</h2>
        <p>Tell us about your requirements and our team will contact you.</p>

        <form onSubmit={handleSubmit} className="sample-form">
          <div className="form-row">
            <input
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={form.message}
            onChange={handleChange}
            rows="4"
          />

          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}