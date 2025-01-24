'use client';
import React from 'react';
import ContactForm from '@/app/component/contactForm';
import Footer from '@/app/component/footer';
import Header from '@/app/component/header';


export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header/>
      <ContactForm />
      <Footer />
    </div>
  );
}