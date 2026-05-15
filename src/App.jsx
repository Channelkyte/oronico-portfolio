import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ArrowRight,
} from 'lucide-react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Hero section animation
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Data
  const skills = [
    {
      category: 'Programming & Analytics',
      items: ['Python', 'SQL', 'JavaScript', 'PHP', 'Java', 'C++'],
    },
    {
      category: 'Frameworks & Tools',
      items: ['React.js', 'Laravel', 'Tailwind CSS', 'GitHub'],
    },
    {
      category: 'Analytics & Data Science',
      items: [
        'Data Analytics',
        'Machine Learning',
        'Predictive Modeling',
        'Data Visualization',
        'Reporting & Insights',
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title:
        'Integrated Enrollment & Grading System with ML Analytics',
      role: 'Full Stack Developer | Document Specialist',
      description:
        'Developed a full-stack academic management system with ML integration for student performance analysis and predictive modeling of academic outcomes.',
      tags: ['Python', 'ML', 'Full Stack', 'Analytics'],
      date: 'April 2026',
      type: 'Development',
    },
    {
      id: 2,
      title: 'Multidimensional Factors of Social "Bedrotting" Analytics',
      role: 'Data Analyst | Researcher',
      description:
        'Analyzed behavioral and social factors contributing to bedrotting trends using advanced analytics to identify digital inactivity patterns and behavioral correlations.',
      tags: ['Analytics', 'Research', 'Data Analysis', 'Insights'],
      date: 'November 2025',
      type: 'Research',
    },
    {
      id: 3,
      title: 'Sustainable Dining Consumer Behavior Analytics',
      role: 'Data Analyst',
      description:
        'Conducted comparative analytics research using Random Forest, Logistic Regression, and SVM models to generate actionable business insights for sustainable marketing.',
      tags: ['ML', 'Analytics', 'Business Intelligence', 'Modeling'],
      date: 'July 2025',
      type: 'Research',
    },
  ];

  const certifications = [
    'PMI Project Management Ready',
    'Python Essentials 1',
    'Python Essentials 2',
    'IT Specialist HTML and CSS',
    'IT Specialist Networking',
  ];

  const experience = {
    organization: 'Artist Connection',
    position: 'Auditor',
    year: '2024 – 2025',
    description:
      'Managed organizational audits, ensured compliance with university financial policies, prepared financial reports, and supported process optimization using analytical thinking.',
  };

  const education = {
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Specialization in Business Analytics',
    school: 'FEU Institute of Technology',
    year: '2022 – Present',
    location: 'P. Paredes St., Sampaloc Manila',
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.type.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div className="logo" whileHover={{ scale: 1.05 }}>
            <span className="logo-text">Channel Kyte</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="nav-menu-desktop">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="nav-link"
                onClick={() => scrollToSection(item)}
                whileHover={{ color: '#c084fc' }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Download Resume */}
          <motion.button
            className="btn-resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Resume download link coming soon')}
          >
            <Download size={18} />
            Resume
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="nav-menu-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="nav-link-mobile"
                onClick={() => scrollToSection(item)}
                whileHover={{ x: 10 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="section hero-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-pattern"></div>
        </div>

        <motion.div className="hero-content">
          <motion.div variants={heroVariants} className="hero-text">
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1 className="hero-title">
              Channel Kyte P. Oronico
            </motion.h1>
            <motion.p className="hero-role">
              Aspiring Data Analyst | Quality Assurance Tester
            </motion.p>
            <motion.p className="hero-description">
              Transforming raw data into actionable insights through analytics,
              machine learning, and business intelligence solutions.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="dashboard-preview">
              <div className="dashboard-header"></div>
              <div className="dashboard-grid">
                <div className="dash-card"></div>
                <div className="dash-card"></div>
                <div className="dash-card"></div>
                <div className="dash-card"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="section about-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm an aspiring Data Analyst with a passion for extracting
              meaningful insights from complex datasets. With a background in
              Information Technology and Business Analytics, I combine technical
              expertise with analytical thinking to solve real-world problems.
            </p>
            <p>
              My journey includes experience with machine learning, predictive
              modeling, and business intelligence solutions. I'm driven by the
              challenge of transforming raw data into strategic insights that
              drive decision-making and business growth.
            </p>
            <p>
              Beyond analytics, my QA testing background ensures attention to
              detail and quality in every project. I'm committed to continuous
              learning and staying at the forefront of data science and
              analytics technologies.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={containerVariants}>
            {[
              { label: 'Projects Completed', value: '3+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Years Experience', value: '2+' },
            ].map((stat, idx) => (
              <motion.div key={idx} className="stat-card" variants={itemVariants}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="section skills-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-badges">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-badge"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="section projects-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Featured Projects</motion.h2>
          <motion.div className="header-underline" />
        </div>

        {/* Filter Buttons */}
        <motion.div className="filter-buttons" variants={containerVariants}>
          {['all', 'Development', 'Research'].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">📊</div>
                <span className="project-type">{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-footer">
                <span className="project-date">{project.date}</span>
                <motion.button
                  className="project-link"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        className="section certifications-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Certifications</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <motion.div className="certifications-grid" variants={containerVariants}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="certification-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="cert-icon">✓</div>
              <p>{cert}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="section experience-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Experience</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <motion.div
          className="experience-card"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="exp-header">
            <div>
              <h3>{experience.position}</h3>
              <p className="org-name">{experience.organization}</p>
            </div>
            <span className="exp-year">{experience.year}</span>
          </div>
          <p className="exp-description">{experience.description}</p>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="section education-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Education</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <motion.div
          className="education-card"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="edu-header">
            <div>
              <h3>{education.degree}</h3>
              <p className="specialization">{education.specialization}</p>
            </div>
            <span className="edu-year">{education.year}</span>
          </div>
          <div className="edu-details">
            <p>
              <strong>School:</strong> {education.school}
            </p>
            <p>
              <strong>Location:</strong> {education.location}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section contact-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="section-header">
          <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
          <motion.div className="header-underline" />
        </div>

        <motion.p className="contact-subtitle" variants={itemVariants}>
          Let's connect and explore opportunities to work together
        </motion.p>

        <motion.div className="contact-grid" variants={containerVariants}>
          <motion.a
            href="mailto:chnnlkyteoronico@gmail.com"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Mail size={28} />
            <h4>Email</h4>
            <p>chnnlkyteoronico@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+639271591627"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Phone size={28} />
            <h4>Phone</h4>
            <p>+63 927 159 1627</p>
          </motion.a>

          <motion.a
            href="#github"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Github size={28} />
            <h4>GitHub</h4>
            <p>github.com/channelkyte</p>
          </motion.a>

          <motion.a
            href="#linkedin"
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Linkedin size={28} />
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/channelkyte</p>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            © 2026 Channel Kyte P. Oronico. All rights reserved. | Built with
            React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
