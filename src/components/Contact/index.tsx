"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobileno: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div
              className="relative mb-12 rounded-lg bg-white dark:bg-gray-dark p-8 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-12"
              data-wow-delay=".15s"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 -mt-4 -ml-4 h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20" />
              <div className="absolute bottom-0 right-0 -mb-4 -mr-4 h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20" />

              <div className="relative">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                    Need Help? Open a Ticket
                  </h2>
                  <p className="text-lg text-body-color dark:text-body-color-dark">
                    Our support team will get back to you ASAP via email.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {/* Name Input */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your name"
                          className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email"
                          className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="mobileno"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Mobile No
                        </label>
                        <input
                          type="number"
                          id="mobileno"
                          value={formData.mobileno}
                          onChange={(e) => setFormData({...formData, mobileno: e.target.value})}
                          placeholder="Enter your Mobile No."
                          className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        placeholder="Enter your message"
                        className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button 
                        type="submit"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      >
                        Submit Ticket
                        <svg
                          className="ml-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;