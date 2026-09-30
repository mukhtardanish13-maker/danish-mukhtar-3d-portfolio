'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import 3D components with SSR disabled
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black/90 flex items-center justify-center text-purple-400 font-mono text-sm tracking-widest animate-pulse">
      INITIALIZING 3D ENVIRONMENT...
    </div>
  ),
});

const CardShapeScene = dynamic(() => import('@/components/3d/CardShapeScene'), {
  ssr: false,
  loading: () => <div className="w-24 h-24 rounded-full bg-purple-900/20 animate-pulse" />,
});

const ContactScene = dynamic(() => import('@/components/3d/ContactScene'), {
  ssr: false,
  loading: () => <div className="w-full h-[320px] rounded-3xl bg-purple-950/20 animate-pulse" />,
});

export default function HomePage() {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Development & Agents',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Format WhatsApp message with details
    const text = encodeURIComponent(
      `Hello Danish! My name is ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );
    window.open(`https://wa.me/918825062835?text=${text}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <main className="min-h-screen bg-[#07070c] text-white selection:bg-purple-600/40 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (PRESERVED 3D SCENE)                                      */}
      {/* ========================================================================= */}
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Interactive Canvas Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Top Status Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-md mb-6 shadow-lg shadow-purple-900/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-purple-200">
                Available for Contract & Full-Time Projects
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-purple-400 font-semibold tracking-wider uppercase mb-2"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-400 drop-shadow-[0_10px_25px_rgba(168,85,247,0.25)]"
            >
              Danish Mukhtar
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl text-gray-300 max-w-3xl font-light mb-4 leading-relaxed"
            >
              <span className="font-semibold text-white">MCA Graduate</span> •{' '}
              <span className="text-purple-300 font-semibold">AI Developer</span> •{' '}
              <span className="text-indigo-300 font-semibold">Software Engineer</span> •{' '}
              <span className="text-pink-300 font-semibold">App Developer</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-400 max-w-2xl mb-10 font-normal"
            >
              Transforming businesses with intelligent autonomous AI solutions, lightning-fast 3D web applications,
              and enterprise-grade mobile software.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#ai-video"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Watch AI Showcase (danuai)</span>
                <span>▶</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-purple-500/40 bg-purple-950/30 text-purple-200 hover:text-white hover:bg-purple-900/40 hover:border-purple-400 backdrop-blur-md font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Hire Me For Your Business</span>
                <span>💼</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-md font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <span>✉️</span>
              </a>
            </motion.div>

            {/* Direct Contact Snapshot */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400"
            >
              <a
                href="tel:8825062835"
                className="flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <span className="text-purple-400 font-bold">📞 Phone:</span> +91 8825062835
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="mailto:mukhtardanish13@gmail.com"
                className="flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <span className="text-purple-400 font-bold">✉️ Email:</span> mukhtardanish13@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-14 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              document.getElementById('ai-video')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Explore danuai & Skills
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-purple-500/40 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const }}
                className="w-1.5 h-1.5 rounded-full bg-purple-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. AI VIDEO SHOWCASE SECTION (danuai.mp4)                                  */}
      {/* ========================================================================= */}
      <section id="ai-video" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#07070c] via-[#0d0d17] to-[#07070c]">
        {/* Futuristic Cyber Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#7c3aed15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
              <span className="animate-spin text-purple-400">⚡</span>
              <span>Proprietary AI Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Watch <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">danuai</span> In Action
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Experience Danish Mukhtar&apos;s AI showcase video demonstration highlighting next-generation AI agents,
              neural workflows, and high-performance interactive computing.
            </p>
          </motion.div>

          {/* 3D Cyber Video Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-4xl rounded-3xl p-1 bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 shadow-2xl shadow-purple-950/80"
          >
            <div className="relative rounded-[22px] overflow-hidden bg-black aspect-video flex items-center justify-center group">
              <video
                ref={videoRef}
                src="/danuai.mp4"
                controls
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Top Video Status Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono tracking-wider">DANUAI • AI SHOWCASE</span>
              </div>

              {/* Sound Toggle Button */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={toggleVideoMute}
                  className="px-3.5 py-2 rounded-xl bg-black/80 hover:bg-purple-900/80 backdrop-blur-md border border-purple-500/40 text-xs font-semibold text-white transition-all shadow-lg flex items-center gap-1.5"
                >
                  <span>{isVideoMuted ? '🔇 Unmute Audio' : '🔊 Mute Audio'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Video Highlights Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              'Autonomous AI Agents',
              'Large Language Model Workflows',
              'Computer Vision & Neural Processing',
              'Enterprise Next.js Architecture',
              'Interactive 3D WebGL Interface',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                ✨ {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUALIFICATION & SKILLS IN 3D CARDS                                      */}
      {/* ========================================================================= */}
      <section id="qualifications" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#07070c] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
              🎓 Academic Excellence & Technical Mastery
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Qualification &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Core Skills</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Grounded in rigorous computer science theory with an MCA, paired with battle-tested expertise across modern AI, full-stack software, and mobile engineering.
            </p>
          </motion.div>

          {/* 3D Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1: MCA Qualification */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141226] to-[#0c0a1a] border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 shadow-xl shadow-purple-950/30 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all" />
              
              <div>
                {/* 3D Canvas Element */}
                <div className="flex justify-center mb-4">
                  <CardShapeScene geometryType="octahedron" color="#a855f7" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Academic Degree
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                  MCA
                </h3>
                <p className="text-xs text-purple-400 font-semibold mb-3">
                  Master of Computer Applications
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Comprehensive mastery in Advanced Data Structures &amp; Algorithms, Distributed Systems, Software Architecture, Database Management, and Artificial Intelligence.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> High-Performance Computing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> System Design &amp; Architecture
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span> Advanced Software Engineering
                </div>
              </div>
            </motion.div>

            {/* Card 2: AI Developer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#18112e] to-[#0c0a1a] border border-pink-500/30 hover:border-pink-400/70 transition-all duration-300 shadow-xl shadow-pink-950/30 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 rounded-full blur-2xl group-hover:bg-pink-600/20 transition-all" />

              <div>
                {/* 3D Canvas Element */}
                <div className="flex justify-center mb-4">
                  <CardShapeScene geometryType="torus" color="#ec4899" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Specialization
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-pink-300 transition-colors">
                  AI Developer
                </h3>
                <p className="text-xs text-pink-400 font-semibold mb-3">
                  GenAI &amp; Autonomous Agents
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Architecting and integrating cutting-edge LLMs, Retrieval-Augmented Generation (RAG), multimodal AI pipelines, and autonomous agentic workflows that solve complex real-world tasks.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">✓</span> OpenAI &amp; Gemini API Integration
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">✓</span> LangChain, LlamaIndex, Vector DBs
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">✓</span> Fine-Tuning &amp; Neural Pipelines
                </div>
              </div>
            </motion.div>

            {/* Card 3: Software Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#11172e] to-[#0a0d1a] border border-indigo-500/30 hover:border-indigo-400/70 transition-all duration-300 shadow-xl shadow-indigo-950/30 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl group-hover:bg-indigo-600/20 transition-all" />

              <div>
                {/* 3D Canvas Element */}
                <div className="flex justify-center mb-4">
                  <CardShapeScene geometryType="icosahedron" color="#6366f1" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Core Engineering
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  Software Dev
                </h3>
                <p className="text-xs text-indigo-400 font-semibold mb-3">
                  Full Stack &amp; Scalable Systems
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Building fault-tolerant web platforms, high-throughput microservices, REST/GraphQL APIs, and 3D web applications with Next.js, Node.js, Python, TypeScript, and modern cloud DevOps.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">✓</span> Next.js 15, React, Three.js
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">✓</span> Node.js, Python, PostgreSQL, Redis
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">✓</span> Docker, Cloud CI/CD &amp; AWS
                </div>
              </div>
            </motion.div>

            {/* Card 4: App Developer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141d24] to-[#0a1017] border border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 shadow-xl shadow-cyan-950/30 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl group-hover:bg-cyan-600/20 transition-all" />

              <div>
                {/* 3D Canvas Element */}
                <div className="flex justify-center mb-4">
                  <CardShapeScene geometryType="dodecahedron" color="#06b6d4" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Mobile Engineering
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  App Developer
                </h3>
                <p className="text-xs text-cyan-400 font-semibold mb-3">
                  Cross-Platform iOS &amp; Android
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Crafting buttery-smooth, native-performing mobile applications with Flutter and React Native. Focused on intuitive UX, offline-first sync, push notifications, and App Store readiness.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Flutter &amp; React Native
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> iOS &amp; Android Optimization
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Real-Time Sync &amp; Mobile UI/UX
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ATTRACTION SECTION: "WHY WORK WITH DANISH MUKHTAR?"                    */}
      {/* ========================================================================= */}
      <section id="why-me" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#07070c] via-[#0d0b1a] to-[#07070c] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
              💎 The Unfair Competitive Edge
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Why Founders &amp; Companies <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Choose Danish Mukhtar
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              You don&apos;t just get code. You get an engineering partner who translates business goals into
              unstoppable technical advantages.
            </p>
          </motion.div>

          {/* 4 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: '⚡',
                title: '10x Velocity & Rapid Deployment',
                desc: 'From initial concept to a functioning MVP in days, not months. Fast iterations without compromising architectural integrity or security.',
                badge: 'Speed + Precision',
              },
              {
                icon: '🧠',
                title: 'Native AI Architecture',
                desc: 'Not simple wrapper apps. I build deep, custom AI workflows, intelligent retrieval pipelines, and fine-tuned models that generate measurable business revenue.',
                badge: 'Measurable ROI',
              },
              {
                icon: '🎨',
                title: '3D & Immersive Visual Supremacy',
                desc: 'Stand out from 99% of cookie-cutter websites with Three.js, React Three Fiber, and custom WebGL animations that hook customers and investors instantly.',
                badge: 'Brand Authority',
              },
              {
                icon: '🛡️',
                title: 'Rock-Solid Enterprise Scalability',
                desc: 'Backed by an MCA degree, my codebases follow strict clean architecture, type safety, modular design, and cloud scalability ready for millions of users.',
                badge: 'Zero Technical Debt',
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/20 backdrop-blur-xl transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{pillar.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Metric Counters Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-indigo-950/50 to-pink-950/60 border border-purple-500/40 shadow-2xl backdrop-blur-2xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 mb-1">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Direct Communication
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-1">
                MCA
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Postgraduate Degree
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-1">
                Zero
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Compromise On Quality
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. "BUILD WITH DANISH" - HIGH CONVERTING BUSINESS SECTION                 */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#07070c] overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
              🚀 Ready To Scale Your Business?
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Let&apos;s Build Something <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Remarkable For Your Business
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Stop settling for average software. Choose the solution your company needs right now and let Danish Mukhtar engineer it to perfection.
            </p>
          </motion.div>

          {/* 3 Business Solution Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Package 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-purple-950/30 to-black/60 border border-purple-500/30 hover:border-purple-400 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-2xl mb-6">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Agents &amp; Automation</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Custom intelligent agents that automate customer service, sales lead qualification, data extraction, and internal workflows 24/7.
                </p>

                <div className="space-y-3 mb-8 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✔</span> 60% Operational Cost Reduction
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✔</span> Custom LLM Fine-Tuning &amp; RAG
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">✔</span> CRM &amp; API Integration
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/50 text-center font-bold text-sm transition-all"
              >
                Build AI For My Business →
              </a>
            </motion.div>

            {/* Package 2 (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-pink-950/40 via-purple-950/30 to-black/80 border-2 border-pink-500/60 shadow-2xl shadow-pink-950/50 flex flex-col justify-between"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
                Most Popular
              </div>

              <div>
                <div className="h-12 w-12 rounded-2xl bg-pink-600/20 border border-pink-500/40 flex items-center justify-center text-2xl mb-6">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">High-Conversion Web &amp; SaaS</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Lightning-fast Next.js applications featuring immersive 3D graphics, SEO dominance, payment systems, and admin dashboards.
                </p>

                <div className="space-y-3 mb-8 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✔</span> Next.js 15 + Three.js 3D Visuals
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✔</span> Stripe / Razorpay &amp; Auth Ready
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-400">✔</span> Sub-second Page Load Speed
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-center font-bold text-sm shadow-lg shadow-pink-600/30 transition-all"
              >
                Build My Web Platform →
              </a>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/30 to-black/60 border border-indigo-500/30 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-2xl mb-6">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mobile Apps (iOS &amp; Android)</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Feature-rich cross-platform mobile apps with Flutter or React Native. Designed to deliver native fluidity and user engagement.
                </p>

                <div className="space-y-3 mb-8 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">✔</span> iOS &amp; Android From Single Codebase
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">✔</span> Offline-First &amp; Realtime Sync
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">✔</span> Full App Store &amp; Play Store Deployment
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/50 text-center font-bold text-sm transition-all"
              >
                Build My Mobile App →
              </a>
            </motion.div>
          </div>

          {/* 4-Step Working Process */}
          <div className="rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <h3 className="text-center text-2xl font-bold text-white mb-10">
              How We Work Together (Frictionless 4-Step Process)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { step: '01', title: 'Discovery Call', desc: 'We align on your business targets, requirements, and project scope.' },
                { step: '02', title: '48-Hour Prototype', desc: 'You see an interactive clickable prototype before full development.' },
                { step: '03', title: 'Build & AI Integration', desc: 'Continuous updates, rapid code development, and rigorous QA testing.' },
                { step: '04', title: 'Launch & Growth', desc: 'Smooth deployment to production with post-launch technical support.' },
              ].map((s) => (
                <div key={s.step} className="p-4">
                  <div className="text-3xl font-black text-purple-400/50 mb-2">{s.step}</div>
                  <h4 className="font-bold text-white text-base mb-1">{s.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BEAUTIFUL 3D EFFECT CONTACT SECTION & FORM                              */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#07070c] via-[#0d0a1b] to-black overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
              💬 Direct Connection
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Get In Touch With <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Danish Mukhtar
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Have an ambitious vision, a business software need, or want to discuss AI integration? Let&apos;s talk immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 3D Visual + Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* 3D Distorted Orb Scene */}
              <div className="relative rounded-3xl bg-gradient-to-b from-purple-950/40 to-black/60 border border-purple-500/30 p-2 overflow-hidden shadow-2xl">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-purple-900/60 backdrop-blur-md border border-purple-500/30 text-xs text-purple-200">
                  ✦ Interactive 3D Sphere
                </div>
                <ContactScene />
              </div>

              {/* Direct Info Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-xl text-purple-400">
                    👤
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Full Name</div>
                    <div className="text-base font-bold text-white">Danish Mukhtar</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-xl text-indigo-400">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Phone / WhatsApp</div>
                    <a
                      href="tel:8825062835"
                      className="text-base font-bold text-purple-300 hover:text-white transition-colors"
                    >
                      +91 8825062835
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-pink-600/20 border border-pink-500/40 flex items-center justify-center text-xl text-pink-400">
                    ✉️
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Email Address</div>
                    <a
                      href="mailto:mukhtardanish13@gmail.com"
                      className="text-sm sm:text-base font-bold text-purple-300 hover:text-white transition-colors break-all"
                    >
                      mukhtardanish13@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instant WhatsApp Button */}
                <a
                  href="https://wa.me/918825062835?text=Hi%20Danish,%20I%20would%20like%20to%20hire%20you%20for%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-950/50 transition-all"
                >
                  <span>Chat on WhatsApp Directly</span>
                  <span>💬</span>
                </a>
              </div>
            </motion.div>

            {/* Right 3D Glassmorphism Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#15122b]/80 via-[#0e0c1f]/80 to-black/90 border border-purple-500/40 shadow-2xl shadow-purple-950/50 backdrop-blur-2xl">
                <h3 className="text-2xl font-black text-white mb-2">Send a Direct Project Inquiry</h3>
                <p className="text-gray-400 text-sm mb-8">
                  Fill in your project details below. You will receive an immediate response from Danish within a few hours.
                </p>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="text-5xl">🎉</div>
                    <h4 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h4>
                    <p className="text-gray-300 text-sm max-w-md mx-auto">
                      Your inquiry has been formulated. WhatsApp will open with your pre-filled inquiry. You can also contact Danish directly at <strong className="text-purple-300">+91 8825062835</strong>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40 text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                        >
                          <option value="AI Development & Agents">AI Development &amp; Agents</option>
                          <option value="Full-Stack Web / SaaS Platform">Full-Stack Web / SaaS Platform</option>
                          <option value="Mobile App (iOS & Android)">Mobile App (iOS &amp; Android)</option>
                          <option value="3D Website & Three.js Experience">3D Website &amp; Three.js Experience</option>
                          <option value="Technical Consulting / Other">Technical Consulting / Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      >
                        <option value="< $1,000">&lt; $1,000 (Small project / MVP sprint)</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000 (Custom Web / AI Solution)</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000 (Complete Platform / App)</option>
                        <option value="$15,000+">$15,000+ (Enterprise / Long-term)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Project Overview &amp; Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell Danish about your business goals, timeline, and features you need..."
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry to Danish Mukhtar</span>
                      <span>🚀</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
