"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Code2,
  Download,
  Database,
  Cloud,
  Terminal,
  Globe,
  Layout,
  Server,
  ExternalLink,
  Mail,
} from "lucide-react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

interface MovingBlobProps {
  color: string;
  delay: number;
}


interface FloatingIconProps {
  Icon: React.ElementType;
  delay: number;
  position: {
    top: string;
    left: string;
  };
}


interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  darkMode: boolean;
}


interface LogoProps {
  darkMode: boolean;
}


interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}


interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ElementType;
}


interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

// Animated Background Component
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <MovingBlob
          key={i}
          color={darkMode ? ["#1e40af40", "#5b21b640", "#0f766e40"][i] : ["#60a5fa40", "#c084fc40", "#2dd4bf40"][i]}
          delay={i * -5}
        />
      ))}

      {[Code2, Database, Cloud, Terminal, Globe, Layout, Server].map((Icon, i) => (
        <FloatingIcon
          key={`icon-${i}`}
          Icon={Icon}
          delay={i * -5}
          position={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}
    </div>
  )
}

// Moving Blob Component
const MovingBlob: React.FC<MovingBlobProps> = ({ color, delay }) => (
  <motion.div
    className="absolute opacity-70 blur-3xl"
    style={{
      background: color,
      width: "300px",
      height: "300px",
      borderRadius: "50%",
    }}
    animate={{
      x: [0, 50, -50, 0],
      y: [0, -50, 50, 0],
    }}
    transition={{
      repeat: Number.POSITIVE_INFINITY,
      duration: 20,
      delay,
      ease: "linear",
    }}
  />
)

// Floating Icon Component
const FloatingIcon: React.FC<FloatingIconProps> = ({ Icon, delay, position }) => (
  <motion.div
    className="absolute text-gray-400 opacity-10"
    style={position}
    animate={{
      y: [0, -50, 50, 0],
      x: [0, 50, -50, 0],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      repeat: Number.POSITIVE_INFINITY,
      duration: 20,
      delay,
      ease: "linear",
    }}
  >
    <Icon size={40} />
  </motion.div>
)

// Custom Cursor Component
const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition, darkMode }) =>(
  <motion.div
    className="fixed w-8 h-8 rounded-full pointer-events-none mix-blend-difference z-50"
    animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
    style={{
      background: darkMode ? "#E63946" : "#F4A261",
      opacity: 0.6,
    }}
  />
)


// Logo Component
const Logo: React.FC<LogoProps> = ({ darkMode }) => (
  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative group">
    <motion.div className="relative flex items-center gap-2" whileHover={{ scale: 1.05 }}>
      <div className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur group-hover:blur-md transition-all duration-300 ${darkMode ? "opacity-80" : "opacity-100"}`}
        />
        <div
          className={`relative px-3 py-1 rounded-lg font-bold text-2xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
          PK
        </div>
      </div>
      <div className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Pranav Khumbhalkar
      </div>
    </motion.div>
  </motion.div>
)

// Section Header Component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) =>  (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

// Skill Card Component
const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-blue-500 dark:text-blue-400" size={24} />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
)

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
  >
    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, index) => (
        <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a href={project.demo} className="flex items-center gap-2 text-blue-500 hover:underline">
        <ExternalLink size={16} />
        Live Demo
      </a>
      <a href={project.github} className="flex items-center gap-2 text-blue-500 hover:underline">
        <Github size={16} />
        GitHub
      </a>
    </div>
  </motion.div>
)

// Main Portfolio Component
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [darkMode])

  const skills = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "Django", "Flask"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools",
      icon: Terminal,
      skills: ["Git", "Docker", "AWS", "Linux"],
    },
  ]

  const projects = [
    {
      title: "AI Social Media Detector",
      description: "Detect fake profiles using machine learning algorithms",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      demo: "#",
      github: "#",
    },
    // Add more projects...
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <AnimatedBackground darkMode={darkMode} />
      <CustomCursor mousePosition={mousePosition} darkMode={darkMode} />

      {/* Navigation */}
      <nav className="fixed w-full p-6 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo darkMode={darkMode} />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              {"Hey, I'm Pranav Kumbhalkar"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Tech Enthusiast | Problem Solver | Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg transition-colors hover:bg-blue-500 hover:text-white"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Skills & Expertise" subtitle="Technologies I work with" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Featured Projects" subtitle="Some things I've built" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p>© 2025 Pranav Khumbhalkar</p>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-500">
              <Github size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-500">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-500">
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

