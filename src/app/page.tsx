'use client';
import React from 'react';
import ContactForm from '@/component/contactForm';
import Footer from '@/component/footer';

export default function Page() {
  return (
    <div className="bg-gray-900">
      <ContactForm />
      <Footer />
    </div>
  );
}