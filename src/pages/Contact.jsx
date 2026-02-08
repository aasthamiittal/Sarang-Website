import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const productOptions = [
  "Billing portal",
  "Dashboard",
  "Website",
  "Logistics Dashboard",
];

export default function Contact() {
  const dropdownRef = useRef(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
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
      <section className="contact-hero" ref={heroRef}>
        <motion.div 
          className="contact-grid"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <motion.div 
            className="contact-info"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Contact us
            </motion.h1>
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Reach out to our team to discuss your requirements and get a
              tailored demo.
            </motion.p>
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <h3>Reach Out to Us Anytime!</h3>
              <br/>
              <ul style={{fontSize:'0.9rem'}}>
                {[
                  { label: "Phone", value: "+91-9315608061" },
                  { label: "Email", value: "Sarang.official.tech@gmail.com" },
                  { label: "Operating Hours", value: "Mon–Sat, 10 AM – 8 PM" }
                ].map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <strong>{item.label}:</strong> {item.value}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ boxShadow: "0 24px 60px rgba(15, 23, 42, 0.3)" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Learn how we can help in growing your business.
            </motion.p>

            {[
              { field: "name", label: "Name*", type: "text" },
              { field: "email", label: "Email Address*", type: "email" },
              { field: "phone", label: "Phone number*", type: "tel" },
              { field: "company", label: "Company*", type: "text" },
            ].map((input, index) => (
              <motion.label
                key={input.field}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {input.label}
                <motion.input
                  type={input.type}
                  value={formState[input.field]}
                  onChange={handleChange(input.field)}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.label>
            ))}

            <motion.label
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              Product of enquiry*
              <div className="multi-select" ref={dropdownRef}>
                <motion.button
                  className="multi-select-trigger"
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-expanded={isOpen}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formState.products.length === 0
                    ? "Select products"
                    : "Selected products"}
                  <motion.span 
                    className={`chevron ${isOpen ? "open" : ""}`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="multi-select-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {productOptions.map((option) => {
                        const isSelected = formState.products.includes(option);
                        return (
                          <motion.button
                            key={option}
                            type="button"
                            className={`multi-select-option ${
                              isSelected ? "selected" : ""
                            }`}
                            onClick={() => handleProductsToggle(option)}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{option}</span>
                            <motion.span 
                              className="option-check"
                              initial={false}
                              animate={{ opacity: isSelected ? 1 : 0 }}
                            >
                              ✓
                            </motion.span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="chip-row">
                  <AnimatePresence>
                    {formState.products.map((option) => (
                      <motion.span
                        key={option}
                        className="chip"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {option}
                        <motion.button
                          type="button"
                          aria-label={`Remove ${option}`}
                          onClick={() => removeProduct(option)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ×
                        </motion.button>
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {productError && (
                    <motion.span
                      className="helper-text error-text"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {productError}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.label>

            <motion.label
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              Leave a Note
              <motion.textarea
                rows="4"
                value={formState.message}
                onChange={handleChange("message")}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.label>

            <motion.button
              className="primary-button full-width"
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
            <AnimatePresence>
              {submitStatus && (
                <motion.span
                  className="helper-text"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
