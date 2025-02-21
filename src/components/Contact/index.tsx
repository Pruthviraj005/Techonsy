"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ContactProps {
  isPopup?: boolean;
  onClose?: () => void;
}

const Contact = ({ isPopup = false, onClose }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobileno: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustTextareaHeight();
    textareaRef.current?.addEventListener('input', adjustTextareaHeight);
    return () => {
      textareaRef.current?.removeEventListener('input', adjustTextareaHeight);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses = `w-full rounded-xl border-2 bg-white/5 px-6 py-4 text-base outline-none transition-all duration-300
    ${focusedField ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-200 dark:border-gray-700'}
    dark:text-white backdrop-blur-sm
    focus:border-primary focus:shadow-lg focus:shadow-primary/20
    dark:focus:border-primary dark:focus:shadow-primary/20`;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(var(--color-primary-rgb), 0.1) 0, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(var(--color-primary-rgb), 0.1) 0, transparent 50%)
          `,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
              {/* Close Button - Only show in popup mode */}
              {isPopup && onClose && (
                <motion.button
                  onClick={onClose}
                  className="absolute -top-3 -right-3 p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-lg z-50 touch-manipulation"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                  aria-label="Close form"
                >
                  <svg
                    className="w-7 h-7 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ minWidth: '28px', minHeight: '28px' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 -mt-6 -ml-6 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20" />
              </div>
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary opacity-20" />
              </div>

              <div className="relative">
                {/* Header */}
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Need Help? Open a Ticket
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Our support team will get back to you ASAP via email.
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Name Input */}
                      <div className="relative group">
                        <motion.label
                          htmlFor="name"
                          className="inline-block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                          whileHover={{ x: 2 }}
                        >
                          Your Name
                        </motion.label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          className={inputClasses}
                          required
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: "0%" }}
                          whileHover={{ width: "100%" }}
                        />
                      </div>

                      {/* Mobile Input */}
                      <div className="relative group">
                        <motion.label
                          htmlFor="mobileno"
                          className="inline-block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                          whileHover={{ x: 2 }}
                        >
                          Your Mobile No
                        </motion.label>
                        <input
                          type="tel"
                          id="mobileno"
                          value={formData.mobileno}
                          onChange={(e) => setFormData({...formData, mobileno: e.target.value})}
                          onFocus={() => setFocusedField('mobile')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+1 (555) 000-0000"
                          className={inputClasses}
                          required
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: "0%" }}
                          whileHover={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <motion.label
                        htmlFor="email"
                        className="inline-block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                        whileHover={{ x: 2 }}
                      >
                        Your Email
                      </motion.label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                      <motion.label
                        htmlFor="message"
                        className="inline-block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                        whileHover={{ x: 2 }}
                      >
                        Your Message
                      </motion.label>
                      <textarea
                        id="message"
                        ref={textareaRef}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={1}
                        placeholder="How can we help you?"
                        className={`${inputClasses} min-h-[100px] resize-none`}
                        required
                      ></textarea>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <motion.button 
                        type="submit"
                        className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative">
                          Submit Ticket
                          <motion.svg
                            className="ml-2 -mr-1 h-6 w-6 inline-block"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ x: 0 }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 1.5,
                              ease: "easeInOut"
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </motion.svg>
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
