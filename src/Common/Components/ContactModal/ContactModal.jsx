import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUpload } from "react-icons/fa";

const ContactModal = ({
  isOpen,
  onClose,
  toEmail = "jithinpbabu7020@gmail.com",
}) => {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    projectType: "", // ✅ default empty for placeholder
    location: "",
    projectSize: "",
    budget: "",
    message: "",
    files: null,
  });

  const projectTypes = useMemo(
    () => ["Residential", "Commercial", "Interior", "Renovation", "Other"],
    []
  );

  /* 🔹 Unified input/select style (SAME HEIGHT) */
  const fieldClass =
    "w-full h-11 rounded-lg px-3 bg-zinc-900 border border-white/10 text-white text-sm " +
    "focus:ring-2 focus:ring-[#FF8C00]/70 outline-none";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "files") {
      setFormData((p) => ({ ...p, files }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  /* ESC close */
  useEffect(() => {
    if (!isOpen) return;
    const esc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", esc);
    setTimeout(() => dialogRef.current?.focus(), 0);
    return () => window.removeEventListener("keydown", esc);
  }, [isOpen, onClose]);

  const buildMailto = () => {
    const subject = `New Project Enquiry — ${formData.projectType || "Category"}`;
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Project Type: ${formData.projectType || "Not specified"}
Location: ${formData.location}
Project Size: ${formData.projectSize}
Estimated Budget: ${formData.budget}
Files: ${formData.files ? formData.files.length + " file(s)" : "No"}

Message:
${formData.message}
    `.trim();

    return `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto();
    onClose?.();
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
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            className="relative w-full max-w-lg rounded-xl border border-white/10 bg-zinc-950 text-white shadow-2xl"
            initial={{ scale: 0.95, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 10, opacity: 0 }}
          >
            {/* Accent */}
            <div className="h-1 bg-gradient-to-r from-[#FF8C00] to-[#FF5500]" />

            <div className="p-4 sm:p-5">
              {/* Close */}
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
                {/* Full Name + Email */}
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

                {/* Mobile + Location */}
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

                {/* Project Type + Size */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Project Type">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={fieldClass + " appearance-none"}
                    >
                      <option value="" disabled>
                        Category
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
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

                {/* Budget */}
                <Field label="Estimated Budget">
                  <input
                    name="budget"
                    placeholder="₹ 25 Lakhs"
                    value={formData.budget}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </Field>

                {/* File Upload */}
                <div>
                  <label className="block text-xs mb-1 text-white/70">
                    Upload Files (optional)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-11
                                    bg-zinc-900 border border-white/10 hover:border-[#FF8C00]/60">
                    <FaUpload className="text-sm" />
                    <span className="text-xs text-white/70">
                      {formData.files
                        ? `${formData.files.length} file(s) selected`
                        : "Upload drawings / plans"}
                    </span>
                    <input
                      type="file"
                      name="files"
                      multiple
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3 py-2.5 bg-zinc-900 border border-white/10 text-white
                             focus:ring-2 focus:ring-[#FF8C00]/70 outline-none resize-none"
                />

                {/* Buttons */}
                <div className="flex gap-2 pt-1">
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 rounded-lg py-2.5 text-sm font-semibold
                               bg-gradient-to-r from-[#FF8C00] to-[#FF5500]"
                  >
                    Send
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

/* 🔹 Field Wrapper */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs mb-1 text-white/70">{label}</label>
    {children}
  </div>
);

export default ContactModal;
