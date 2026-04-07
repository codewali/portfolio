import React from 'react';
import { Mail, Linkedin, Phone, MapPin, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import '../styles/Home.css';

const Home = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'GenAI-Powered UX Workflows',
      company: 'Mitratech',
      year: '2024-2025',
      description: 'Introduced GenAI-powered workflows for policy generation, summarization, and version comparison to improve efficiency and reduce user effort in compliance management.',
      tags: ['GenAI', 'UX Design', 'Efficiency'],
      impact: '40% reduction in policy creation time'
    },
    {
      id: 2,
      title: 'Cross-Product UX Strategy',
      company: 'Mitratech',
      year: '2025-Present',
      description: 'Leading cross-product UX strategy across enterprise risk and compliance platforms, shaping direction for interconnected products and driving platform-wide consistency.',
      tags: ['Strategy', 'Enterprise UX', 'Leadership'],
      impact: 'Unified experience across 5+ products'
    },
    {
      id: 3,
      title: 'Regulated Workflows Design',
      company: 'Mitratech',
      year: '2024-2025',
      description: 'Designed complex regulated workflows balancing usability, scalability, and compliance constraints for enterprise customers in highly regulated industries.',
      tags: ['Compliance', 'Enterprise', 'Scalability'],
      impact: 'Improved user satisfaction by 35%'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">PS</div>
          <nav className="nav">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="badge-icon" size={16} />
            <span>Available for freelance projects</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="accent-text">Paridhi Sinha</span>
          </h1>
          <h2 className="hero-subtitle">Senior Product Designer</h2>
          <p className="hero-description">
            Crafting aesthetic user-centered experiences and product strategy for B2B SaaS products in the Governance, Risk, and Compliance space.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">B2B</div>
              <div className="stat-label">SaaS Focus</div>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection('work')} 
            className="hero-cta"
          >
            View My Work <ArrowRight size={18} />
          </Button>
        </div>
        <div className="hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Designing with purpose</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <Star className="placeholder-icon" size={48} />
            </div>
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              With over 6 years of experience in B2B SaaS, I specialize in creating user-centered experiences that balance aesthetics with functionality. My expertise lies in the Governance, Risk, and Compliance space, where I navigate complex requirements to deliver intuitive solutions.
            </p>
            <p className="about-paragraph">
              Currently at Mitratech, I lead cross-product UX strategy across enterprise risk and compliance platforms. I've introduced GenAI-powered workflows, improved UX consistency, and partnered with product and engineering leadership to shape long-term product vision.
            </p>
            <p className="about-paragraph">
              I hold a Bachelor of Technology in Computer Science from PES University and have transitioned from Software Testing to Product Ownership to Product Design, giving me a unique perspective on the entire product lifecycle.
            </p>
            <div className="skills-container">
              <div className="skill-tag">UX/UI Design</div>
              <div className="skill-tag">Product Strategy</div>
              <div className="skill-tag">Design Systems</div>
              <div className="skill-tag">GenAI Integration</div>
              <div className="skill-tag">User Research</div>
              <div className="skill-tag">Figma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="work-section">
        <div className="section-header">
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Case Studies</h2>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <Card key={study.id} className="case-study-card">
              <div className="card-image-placeholder">
                <div className="placeholder-content">
                  <Sparkles size={32} />
                  <span className="placeholder-text">Project Visual</span>
                </div>
              </div>
              <CardContent className="card-content">
                <div className="card-meta">
                  <span className="card-company">{study.company}</span>
                  <span className="card-year">{study.year}</span>
                </div>
                <h3 className="card-title">{study.title}</h3>
                <p className="card-description">{study.description}</p>
                <div className="card-tags">
                  {study.tags.map((tag, index) => (
                    <span key={index} className="card-tag">{tag}</span>
                  ))}
                </div>
                <div className="card-impact">
                  <div className="impact-label">Impact</div>
                  <div className="impact-value">{study.impact}</div>
                </div>
                <Button variant="ghost" className="card-cta">
                  View Case Study <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's work together</h2>
        </div>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <a href="mailto:pari.sin17@gmail.com" className="contact-value">pari.sin17@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Phone</div>
                <a href="tel:+918884912388" className="contact-value">+91 888 491 2388</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">LinkedIn</div>
                <a href="https://linkedin.com/in/paridhisinha" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/in/paridhisinha</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Location</div>
                <div className="contact-value">Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">PS</div>
            <p className="footer-text">Designing experiences that matter.</p>
          </div>
          <div className="footer-right">
            <p className="footer-copyright">© 2025 Paridhi Sinha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;