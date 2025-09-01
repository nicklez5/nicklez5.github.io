// src/pages/Contact.jsx
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovnljyj"; // <-- replace

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.errors?.[0]?.message || "Something went wrong.");
        setStatus("error");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="container py-4" style={{ maxWidth: 720 }}>
      <h1 className="h3 fw-bold mb-3 text-white">Contact me</h1>
      <p className="text-white-50 mb-4">
        I usually reply within a day. Or email me directly:
        {" "}
        <a href="mailto:jackson2k@yahoo.com">jackson2k@yahoo.com</a>
      </p>

      {status === "success" && (
        <div className="alert alert-success">Thanks! Your message was sent.</div>
      )}
      {status === "error" && (
        <div className="alert alert-danger">{error}</div>
      )}

      <form onSubmit={onSubmit} className="needs-validation" noValidate>
        {/* Honeypot (spam trap) */}
        <input type="text" name="_gotcha" className="d-none" tabIndex={-1} autoComplete="off" />

        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input id="name" name="name" type="text" className="form-control" required />
            <div className="invalid-feedback">Please enter your name.</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              id="email" name="email" type="email"
              className="form-control" required
            />
            <div className="invalid-feedback">Please enter a valid email.</div>
          </div>

          <div className="col-12">
            <label htmlFor="subject" className="form-label text-white">Subject</label>
            <input id="subject" name="subject" type="text" className="form-control" required />
            <div className="invalid-feedback">Please add a subject.</div>
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label text-white">Message</label>
            <textarea id="message" name="message" rows="6" className="form-control" required />
            <div className="invalid-feedback">Please enter a message.</div>
          </div>

          <div className="col-12 d-flex align-items-center justify-content-between mt-2">
            <small className="text-white-50">
              This site is protected by spam checks. By sending, you agree to be contacted.
            </small>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
