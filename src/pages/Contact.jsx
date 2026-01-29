import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const productOptions = [
  "Billing portal",
  "Dashboard",
  "Website",
  "Logistics Dashboard",
];

export default function Contact() {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [productError, setProductError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    products: [],
    message: "",
  });

  const handleChange = (field) => (event) => {
    setFormState((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleProductsToggle = (option) => {
    setFormState((prev) => {
      const exists = prev.products.includes(option);
      const nextProducts = exists
        ? prev.products.filter((item) => item !== option)
        : [...prev.products, option];
      return { ...prev, products: nextProducts };
    });
    setProductError("");
  };

  const removeProduct = (option) => {
    setFormState((prev) => ({
      ...prev,
      products: prev.products.filter((item) => item !== option),
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, company, products, message } = formState;
    if (products.length === 0) {
      setProductError("Please select at least one product.");
      return;
    }
    setSubmitStatus("Sending...");
    const templateParams = {
      name,
      email,
      phone,
      company,
      products: products.join(", "),
      message: message || "N/A",
    };

    emailjs
      .send(
        "service_uku67mp",
        "template_64xbrhq",
        templateParams,
        "zG6KsIGFdCd4raUjZ"
      )
      .then(() => {
        setSubmitStatus("Submitted successfully. We'll get back to you soon.");
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          products: [],
          message: "",
        });
      })
      .catch(() => {
        setSubmitStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="contact-grid">
          <div className="contact-info">
            <h1>Contact us</h1>
            <p className="contact-subtitle">
              Reach out to our team to discuss your requirements and get a
              tailored demo.
            </p>
            <div className="contact-card">
              <h3>Reach Out to Us Anytime!</h3>
              <br/>
              <ul style={{fontSize:'0.9rem'}}>
                <li>
                  <strong>Phone:</strong> +91 97188899XX
                </li>
                <li>
                  <strong>Email:</strong> Sarang.infocare@gmail.com
                </li>
                <li>
                  <strong>Operating Hours:</strong> Mon–Sat, 10 AM – 8 PM
                </li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <p>Learn how we can help in growing your business.</p>

            <label>
              Name*
              <input
                type="text"
                value={formState.name}
                onChange={handleChange("name")}
                required
              />
            </label>

            <label>
              Email Address*
              <input
                type="email"
                value={formState.email}
                onChange={handleChange("email")}
                required
              />
            </label>

            <label>
              Phone number*
              <input
                type="tel"
                value={formState.phone}
                onChange={handleChange("phone")}
                required
              />
            </label>

            <label>
              Company*
              <input
                type="text"
                value={formState.company}
                onChange={handleChange("company")}
                required
              />
            </label>

            <label>
              Product of enquiry*
              <div className="multi-select" ref={dropdownRef}>
                <button
                  className="multi-select-trigger"
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-expanded={isOpen}
                >
                  {formState.products.length === 0
                    ? "Select products"
                    : "Selected products"}
                  <span className={`chevron ${isOpen ? "open" : ""}`} />
                </button>
                {isOpen && (
                  <div className="multi-select-menu">
                    {productOptions.map((option) => {
                      const isSelected = formState.products.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          className={`multi-select-option ${
                            isSelected ? "selected" : ""
                          }`}
                          onClick={() => handleProductsToggle(option)}
                        >
                          <span>{option}</span>
                          <span className="option-check">✓</span>
                        </button>
                      );
                    })}
                  </div>
                )}
                <div className="chip-row">
                  {formState.products.map((option) => (
                    <span key={option} className="chip">
                      {option}
                      <button
                        type="button"
                        aria-label={`Remove ${option}`}
                        onClick={() => removeProduct(option)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {productError ? (
                  <span className="helper-text error-text">{productError}</span>
                ) : null}
              </div>
            </label>

            <label>
              Leave a Note
              <textarea
                rows="4"
                value={formState.message}
                onChange={handleChange("message")}
              />
            </label>

            <button className="primary-button full-width" type="submit">
              Submit
            </button>
            {submitStatus ? (
              <span className="helper-text">{submitStatus}</span>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
