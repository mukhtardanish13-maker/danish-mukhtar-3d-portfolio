'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    { label: 'Email', value: 'hello@example.com', icon: '✉️', link: 'mailto:hello@example.com' },
    { label: 'Location', value: 'San Francisco, CA', icon: '📍', link: '#' },
    { label: 'Twitter', value: '@creativecoder', icon: '🐦', link: 'https://twitter.com' },
    { label: 'GitHub', value: 'github.com/johndoe', icon: '🐙', link: 'https://github.com' },
  ];

  const faqs = [
    { q: "Are you currently open to new opportunities?", a: "Yes, I am always open to discussing interesting freelance projects or full-time roles." },
    { q: "What is your preferred tech stack?", a: "I specialize in the React ecosystem (Next.js) combined with Three.js for 3D experiences, styled with Tailwind CSS." },
    { q: "Do you take on design work as well?", a: "While I focus primarily on development, I am very comfortable working with Figma and bridging the design-to-code gap." },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Get In Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-700 text-gray-100 placeholder-transparent focus:outline-none focus:border-cyan-500 py-3 transition-colors"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500"
                >
                  Name
                </label>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-700 text-gray-100 placeholder-transparent focus:outline-none focus:border-cyan-500 py-3 transition-colors"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500"
                >
                  Email
                </label>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-700 text-gray-100 placeholder-transparent focus:outline-none focus:border-cyan-500 py-3 transition-colors"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500"
                >
                  Subject
                </label>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-700 text-gray-100 placeholder-transparent focus:outline-none focus:border-cyan-500 py-3 transition-colors resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-500"
                >
                  Message
                </label>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <span className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{info.icon}</span>
                  <span className="text-sm text-gray-400 mb-1">{info.label}</span>
                  <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">{info.value}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* FAQ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-100">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-cyan-400 mb-2">{faq.q}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center space-x-3"
        >
          <span className="text-xl">✅</span>
          <div>
            <p className="font-bold">Message Sent!</p>
            <p className="text-sm opacity-90">I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
