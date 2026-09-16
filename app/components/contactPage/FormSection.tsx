// components/ContactSection.tsx
"use client";

import { useState, FormEvent } from "react";
import FormInput from "./FormInput";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: wire to your API route
      console.log(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-[4.5rem] font-bold  text-[#C8A96E] mb-6 leading-tight">
          Let&apos;s Create Together
        </h2>
        <p className="text-[#828282] text-[1rem] leading-relaxed max-w-sm">
          Whether you need help with a project, want to collaborate, or
          simply want to connect, feel free to reach out — I&apos;m always
          open to new ideas and opportunities.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <FormInput
            label="Your message"
            name="message"
            as="textarea"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-900 text-white text-sm font-medium rounded-lg px-6 py-3 hover:bg-gray-800 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;