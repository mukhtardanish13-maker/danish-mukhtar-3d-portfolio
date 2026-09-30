'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const skills = [
    { name: 'React', icon: '⚛️', proficiency: 90 },
    { name: 'Next.js', icon: '🚀', proficiency: 85 },
    { name: 'Three.js', icon: '🧊', proficiency: 75 },
    { name: 'TypeScript', icon: '📘', proficiency: 85 },
    { name: 'Node.js', icon: '🟢', proficiency: 80 },
    { name: 'Python', icon: '🐍', proficiency: 70 },
    { name: 'Figma', icon: '🎨', proficiency: 65 },
    { name: 'Blender', icon: '🍩', proficiency: 50 },
  ];

  const experience = [
    {
      company: 'Tech Innovators Inc.',
      role: 'Senior Frontend Developer',
      period: '2021 - Present',
      description: 'Lead developer for enterprise web applications. Spearheaded the migration to Next.js and implemented 3D product visualizations.',
    },
    {
      company: 'Creative Web Studio',
      role: 'Full Stack Developer',
      period: '2018 - 2021',
      description: 'Developed responsive, high-performance websites for clients. Created interactive experiences using React and WebGL.',
    },
    {
      company: 'Digital Solutions',
      role: 'Junior Web Developer',
      period: '2016 - 2018',
      description: 'Assisted in building custom WordPress themes and plugins. Gained foundational experience in frontend technologies.',
    },
  ];

  const interests = [
    { name: 'Creative Coding', icon: '💻' },
    { name: 'Photography', icon: '📷' },
    { name: 'Game Dev', icon: '🎮' },
    { name: 'Traveling', icon: '✈️' },
  ];

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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-4xl font-bold shadow-lg shadow-purple-500/20">
              JD
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-purple-400 font-medium">Full Stack Developer & Creative Coder</p>
            </div>
          </motion.div>
        </section>

        {/* Bio Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4 text-center leading-relaxed"
        >
          <motion.p variants={itemVariants}>
            Hello! I'm a passionate developer who loves bridging the gap between design and engineering. My journey started with building simple websites, and today I focus on creating immersive 3D web experiences and high-performance applications.
          </motion.p>
          <motion.p variants={itemVariants}>
            I believe the web is evolving into a more interactive and spatial medium. Through tools like Three.js and React Three Fiber, I aim to craft digital spaces that are not only functional but also visually captivating and memorable.
          </motion.p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h3 className="text-3xl font-bold text-center">My Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center space-y-4 group"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                <div className="text-center w-full">
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center">Experience</h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-gray-900 text-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-bold text-xl text-purple-400">{exp.role}</h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <h5 className="font-medium text-gray-300 mb-3">{exp.company}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h3 className="text-3xl font-bold text-center">Beyond Code</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-2">{interest.icon}</div>
                <div className="font-medium text-gray-300">{interest.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
