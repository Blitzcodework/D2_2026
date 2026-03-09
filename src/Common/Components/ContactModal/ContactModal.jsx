import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectType: "",
    location: "",
    projectSize: "",
    budget: "",
    message: "",
  });

  const projectTypes = useMemo(
    () => ["Residential", "Commercial", "Interior", "Renovation", "Other"],
    []
  );

  const fieldClass =
    "w-full h-11 rounded-lg px-3 bg-zinc-900 border border-white/10 text-white text-sm focus:ring-2 focus:ring-[#FF8C00]/70 outline-none";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!isOpen) return;

    const esc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", esc);

    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", esc);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      projectType: formData.projectType,
      location: formData.location,
      projectSize: formData.projectSize,
      budget: formData.budget,
      message: formData.message,
    };

    emailjs
      .send(
        "service_lb1lv7m",
        "template_pr3futf",
        templateParams,
        "6IX_alklnUpImOQk1"
      )
      .then(() => {
        alert("Message sent successfully ✅");

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          projectType: "",
          location: "",
          projectSize: "",
          budget: "",
          message: "",
        });

        setLoading(false);
        onClose?.();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            className="relative w-full max-w-lg rounded-xl border border-white/10 bg-zinc-950 text-white shadow-2xl"
            initial={{ scale: 0.95, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 10, opacity: 0 }}
          >
            <div className="h-1 bg-gradient-to-r from-[#FF8C00] to-[#FF5500]" />

            <div className="p-4 sm:p-5">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 rounded-full p-2 hover:bg-white/10"
              >
                <FaTimes />
              </button>

              <div className="text-center mb-3">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Project Enquiry
                </h2>
                <p className="text-xs text-white/60">
                  Tell us about your project
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">

                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Full Name">
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Mobile">
                    <input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </Field>

                  <Field label="Location">
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Project Type">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Category
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Project Size (sq.ft)">
                    <input
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <Field label="Estimated Budget">
                  <input
                    name="budget"
                    placeholder="₹ 25 Lakhs"
                    value={formData.budget}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </Field>

                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3 py-2.5 bg-zinc-900 border border-white/10 text-white focus:ring-2 focus:ring-[#FF8C00]/70 outline-none resize-none"
                />

                <div className="flex gap-2 pt-1">
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                    className="flex-1 rounded-lg py-2.5 text-sm font-semibold bg-gradient-to-r from-[#FF8C00] to-[#FF5500]"
                  >
                    {loading ? "Sending..." : "Send"}
                  </motion.button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-lg py-2.5 text-sm border border-white/10 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs mb-1 text-white/70">{label}</label>
    {children}
  </div>
);

export default ContactModal;