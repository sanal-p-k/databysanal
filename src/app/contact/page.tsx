"use client";

import ContactForm from '../components/ContactForm';
import MeetingScheduler from '../components/MeetingScheduler';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <MeetingScheduler />
        </div>
      </div>
    </div>
  );
}
