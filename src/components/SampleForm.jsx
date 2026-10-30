
import { useState } from "react";
import { X, Send } from "lucide-react";
import { submitSampleRequest } from "../api";

export default function SampleForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Send organisation instead of company
      const response = await submitSampleRequest(form);

      setSuccess(
        `Thank you! Your request has been submitted.${
          response?.reference
            ? ` Reference: ${response.reference}`
            : ""
        }`
      );

      setForm({
        name: "",
        email: "",
        organisation: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Sample request error:", err);

      setError(
        err.message || "Unable to submit your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>

        <span className="eyebrow">GET IN TOUCH</span>

        <h2>Request a Sample</h2>

        <p>
          Tell us about your requirements and our team will contact you.
        </p>

        <form onSubmit={handleSubmit} className="sample-form">
          <div className="form-row">
            <input
              name="name"
              type="text"
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
              name="organisation"
              type="text"
              placeholder="Company"
              value={form.organisation}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="tel"
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
            rows={4}
          />

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            className="primary-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
