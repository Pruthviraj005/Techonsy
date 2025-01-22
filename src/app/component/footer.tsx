'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription for:', email);
      setEmail('');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full" />
              <span className="text-2xl font-bold">Techonsy Pvt. Ltd.</span>
            </div>
            
            <p className="text-gray-400">
            Techonsy Pvt. Ltd. is dedicated to providing cutting-edge technology solutions tailored to meet your business needs. 
            We strive to deliver innovation and excellence with every project
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img 
                  src="/api/placeholder/24/24"
                  alt="Google Play"
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Available on the</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img 
                  src="/api/placeholder/24/24"
                  alt="App Store"
                  className="w-6 h-6"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Join The <span className="text-orange-500">Techonsy</span> Experience
            </h2>
            <p className="text-gray-400">
            Be a part of the Techonsy community and stay informed with our latest updates,
             exclusive offers, and innovative solutions tailored for you. Let’s build the future together!
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white rounded-full text-gray-900 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-orange-500 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Condition</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-400 text-sm">
            <p>© Techonsy Pvt. Ltd.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;