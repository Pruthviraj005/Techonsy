'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  emailConfirm: string;
  phone: string;
  file: File | null;
  newsletter: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  emailConfirm?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    emailConfirm: '',
    phone: '',
    file: null,
    newsletter: false
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file && file.size <= 20 * 1024 * 1024) { // 20MB limit
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    } else {
      alert('File size should be less than 20MB');
    }
  };

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.emailConfirm) newErrors.emailConfirm = 'Email confirmation is required';
    if (formData.email !== formData.emailConfirm) newErrors.emailConfirm = 'Emails do not match';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        emailConfirm: '',
        phone: '',
        file: null,
        newsletter: false
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Contact <span className="text-orange-500">Us</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">
              Name
              <span className="text-orange-500 ml-2">Required</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-2">
              Email Address
              <span className="text-orange-500 ml-2">Required</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-2">
              Confirm Email Address
              <span className="text-orange-500 ml-2">Required</span>
            </label>
            <input
              type="email"
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
            {errors.emailConfirm && <p className="text-red-500 mt-1">{errors.emailConfirm}</p>}
          </div>

          <div>
            <label className="block mb-2">
              Phone
              <span className="text-gray-500 ml-2">Optional</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                      if (fileInput) fileInput.click();
                    }}
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 hover:border-orange-500 transition-colors"
                  >
                    Attach your file
                  </button>
                  <span className="text-sm text-gray-500">up to 20MB</span>
                </div>
              </div>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="rounded border-gray-700 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="newsletter" className="text-sm">
              I would like to be contacted with news and updates about your events and services
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white rounded-lg py-3 hover:bg-orange-600 transition-colors"
          >
            Send Message Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;