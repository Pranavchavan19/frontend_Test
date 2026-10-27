import { useState } from "react";
import { submitSampleRequest } from "./api.js";

const empty = { name: "", organisation: "", email: "", phone: "", message: "" };

export default function SampleForm({ onClose }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed
  const [ref, setRef] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});
    try {
      const { reference } = await submitSampleRequest(form);
      setRef(reference);
      setStatus("done");
    } catch (err) {
      setErrors(err.fields || {});
      setStatus("failed");
    }
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Order samples">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        {status === "done" ? (
          <>
            <h2>Request received</h2>
            <p>Thanks – the Westfield team will be in touch. Your reference is <strong>{ref}</strong>.</p>
            <button className="btn" onClick={onClose}>Close</button>
          </>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2>Order samples</h2>
            {[
              ["name", "Name"], ["organisation", "Hospital / organisation"],
              ["email", "Email"], ["phone", "Phone (optional)"],
            ].map(([k, label]) => (
              <label key={k}>{label}
                <input value={form[k]} onChange={set(k)} type={k === "email" ? "email" : "text"} />
                {errors[k] && <span className="err">{errors[k]}</span>}
              </label>
            ))}
            <label>Message (optional)
              <textarea rows="3" value={form.message} onChange={set("message")} />
            </label>
            {status === "failed" && !Object.keys(errors).length && (
              <p className="err">Could not send your request. Please try again.</p>
            )}
            <button className="btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
