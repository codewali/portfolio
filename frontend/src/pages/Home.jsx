import React, { useEffect } from 'react';
import { Mail, Linkedin, MapPin, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const caseStudies = [
    {
      id: 1,
      title: 'Virtual Fitting Room',
      company: 'Personal Project',
      year: '2025',
      description: 'A sketch-based exploration of virtual fashion fitting. Instead of focusing on realism or AI accuracy, this project explores how hand-drawn fashion sketches could be translated into an interactive, minimal digital experience.',
      tags: ['Fashion Tech', 'UX Design', 'Prototyping'],
      impact: 'Proof of concept for sketch-driven apparel interaction',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ntm2ri4r_Screenshot%202026-04-08%20at%205.31.54%E2%80%AFAM.png',
      slug: 'virtual-fitting-room'
    },
    {
      id: 2,
      title: 'BC/DR Executive Dashboard',
      company: 'Mitratech',
      year: '2024-2025',
      description: 'An enterprise analytics interface helping business continuity leaders monitor and act on technology and vendor recovery readiness. Transformed passive reporting into an active decision system.',
      tags: ['Enterprise UX', 'Data Visualization', 'B2B SaaS'],
      impact: '24+ hours/month saved, real-time insights vs 2-3 day reporting',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/y191dcei_Screen%20Recording%202026-04-08%20at%206.13.33%E2%80%AFAM.mov',
      slug: 'bcdr-executive-dashboard'
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
            <a 
              href="https://drive.google.com/file/d/1a-PQezdYih5L_9YeZUnY-2Gx6Qn5mXY8/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-btn"
            >
              View Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Trinket Board */}
      <section className="hero-section">
        <div className="trinket-rope"></div>
        
        {/* Central Title */}
        <div className="hero-central-title">
          <h1 className="trinket-main-title">Paridhi Sinha</h1>
          <p className="trinket-subtitle">Senior Product Designer</p>
        </div>

        {/* Trinket Items - Clusters pushed further from center */}
        {/* Top cluster - moved higher */}
        <div className="trinket-item trinket-emoji" style={{top: '10%', left: '30%', rotate: '-15deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🤖</div>
            <div className="trinket-tooltip">GenAI Enthusiast - Introduced AI-powered UX workflows</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{top: '8%', left: '43%', rotate: '8deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🎓</div>
            <div className="trinket-tooltip">PES University - B.Tech Computer Science '19</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{top: '10%', right: '30%', rotate: '-12deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">📍</div>
            <div className="trinket-tooltip">Based in Bengaluru, India</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{top: '20%', left: '34%', rotate: '12deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🎯</div>
            <div className="trinket-tooltip">6+ years in B2B SaaS design</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{top: '22%', left: '47%', rotate: '-8deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🎨</div>
            <div className="trinket-tooltip">Design tool of choice: Figma</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{top: '20%', right: '34%', rotate: '10deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">✨</div>
            <div className="trinket-tooltip">Crafting aesthetic user experiences</div>
          </div>
        </div>

        {/* Bottom cluster - moved lower */}
        <div className="trinket-item trinket-emoji" style={{bottom: '10%', left: '30%', rotate: '14deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">💼</div>
            <div className="trinket-tooltip">Currently at Mitratech as Sr. Product Designer</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{bottom: '8%', left: '43%', rotate: '-11deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🧭</div>
            <div className="trinket-tooltip">Leading cross-product UX strategy</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{bottom: '10%', right: '30%', rotate: '9deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🌸</div>
            <div className="trinket-tooltip">Passionate about beautiful design</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{bottom: '20%', left: '34%', rotate: '-13deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">☕</div>
            <div className="trinket-tooltip">Fueled by coffee & creativity</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{bottom: '22%', left: '47%', rotate: '7deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">📊</div>
            <div className="trinket-tooltip">Data-driven design decisions</div>
          </div>
        </div>

        <div className="trinket-item trinket-emoji" style={{bottom: '20%', right: '34%', rotate: '-10deg'}}>
          <div className="trinket-content">
            <div className="emoji-display">🏢</div>
            <div className="trinket-tooltip">Specialized in B2B SaaS enterprise products</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <ArrowRight size={16} style={{rotate: '90deg'}} />
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
            <img 
              src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/pa8y1lfc_pp.jpg" 
              alt="Paridhi Sinha"
              className="profile-image"
            />
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
              {study.image ? (
                study.image.endsWith('.mov') || study.image.endsWith('.mp4') ? (
                  <video 
                    src={study.image} 
                    className="card-image"
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="card-image"
                  />
                )
              ) : (
                <div className="card-image-placeholder">
                  <div className="placeholder-content">
                    <Sparkles size={32} />
                    <span className="placeholder-text">Project Visual</span>
                  </div>
                </div>
              )}
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
                <Button 
                  variant="ghost" 
                  className="card-cta"
                  onClick={() => navigate(`/case-study/${study.slug}`)}
                >
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
        <div className="contact-layout">
          <div className="contact-left">
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
          
          <div className="contact-right">
            <div className="illustration-container">
              <div className="sparkle sparkle-1">
                <Sparkles size={40} />
              </div>
              <div className="sparkle sparkle-2">
                <Sparkles size={60} />
              </div>
              <div className="sparkle sparkle-3">
                <Sparkles size={30} />
              </div>
              <div className="sparkle sparkle-4">
                <Star size={35} />
              </div>
              <div className="sparkle sparkle-5">
                <Star size={45} />
              </div>
              <div className="hand-drawn-circle"></div>
              <div className="hand-drawn-line"></div>
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