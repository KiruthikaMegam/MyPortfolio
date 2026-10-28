import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setStatus("");

  try {
    await emailjs.send(
      "service_2dhd95f",
      "template_7aiy72b",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "kiruthisekar97@gmail.com"
      },
      "pnM06hua32Bbmfilj"
    );

    setStatus("Message sent successfully! Thank you for reaching out.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus(
      error?.text || "Something went wrong. Please check your EmailJS settings."
    );
  }

  setSending(false);
};3

  return (
    <section className="contactPage">

      <div className="contactHeader">
        <div>
          <p>GET IN TOUCH</p>
          <h1>Contact</h1>
        </div>

        <span>05 / 05</span>
      </div>

      <div className="contactMain">

        <div className="contactIntro">

          <span className="contactLabel">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's create
            <strong>something meaningful.</strong>
          </h2>

          <p>
            Whether you have a project idea, an opportunity or simply
            want to connect, feel free to reach out. I am always open
            to discussing new ideas and opportunities.
          </p>

          <div className="contactAvailability">
            <span></span>

            <div>
              <small>CURRENT STATUS</small>
              <strong>AVAILABLE FOR OPPORTUNITIES</strong>
            </div>
          </div>

          <div className="contactDetails">

            <div className="contactDetail">
              <span>EMAIL</span>

              <a href="mailto:kiruthisekar97@gmail.com">
                kiruthisekar97@gmail.com
              </a>
            </div>

            <div className="contactDetail">
              <span>GITHUB</span>

              <a
                href="https://github.com/KiruthikaMegam"
                target="_blank"
                rel="noreferrer"
              >
                github.com/KiruthikaMegam
              </a>
            </div>

            <div className="contactDetail">
              <span>LOCATION</span>
              <strong>INDIA</strong>
            </div>

          </div>

        </div>

        <div className="contactFormWrapper">

          <div className="contactFormTop">
            <span>01 — SEND A MESSAGE</span>
            <b>↗</b>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="contactField">
              <label>YOUR NAME</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contactField">
              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contactField">
              <label>SUBJECT</label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="contactField">
              <label>MESSAGE</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            {status && (
              <div className="contactSuccess">
                {status}
              </div>
            )}

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
              {!sending && <span>↗</span>}
            </button>

          </form>

        </div>

      </div>

      <div className="contactBottom">

        <div>
          <span>LET'S CONNECT</span>

          <h2>
            Good things start
            <strong>with a conversation.</strong>
          </h2>
        </div>

        <p>
          Have an idea or opportunity? Let's talk and see where
          we can take it.
        </p>

      </div>

    </section>
  );
}