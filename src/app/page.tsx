'use client';
import React from 'react';
import ContactForm from '@/component/contactForm';
import Footer from '@/component/footer';
import Header from '@/component/header';

export default function Page() {
  return (
    <div className="bg-gray-900">
       <Header/>
      <ContactForm />
      <Footer />
    </div>
  );
}