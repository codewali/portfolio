import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Scroll animations with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Kinfolk-style parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax sections
      const sections = document.querySelectorAll('.parallax-section');
      sections.forEach((section, index) => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        section.style.transform = `translateY(${yPos}px)`;
      });

      // Progressive text reveal for about title
      const aboutTitle = document.querySelector('.about-intro-title');
      if (aboutTitle) {
        const rect = aboutTitle.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - (rect.top / windowHeight);
          const scale = 0.8 + (progress * 0.2);
          const opacity = Math.min(progress * 2, 1);
          aboutTitle.style.transform = `scale(${scale})`;
          aboutTitle.style.opacity = opacity;
        }
      }

      // Progressive text reveal for work title
      const workTitle = document.querySelector('.work-title');
      if (workTitle) {
        const rect = workTitle.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - (rect.top / windowHeight);
          const translateY = 100 - (progress * 100);
          const opacity = Math.min(progress * 2, 1);
          workTitle.style.transform = `translateY(${translateY}px)`;
          workTitle.style.opacity = opacity;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('pari.sin17@gmail.com').then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        // Clipboard API not available or permission denied
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback for browsers without clipboard API
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const caseStudies = [
    {
      id: 2,
      title: 'Real-Time Decision Dashboard',
      company: 'Mitratech',
      year: '2026',
      description: 'Transforming passive reporting into an actionable decision system. Users went from waiting days for static reports to monitoring live data and taking immediate action, cutting response time from 48 hours to real-time.',
      tags: ['Data Visualization', 'System Design', 'UX Strategy'],
      impact: '24+ hours saved per month, instant insights vs multi-day delays',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/k2bg2ef5_Screenshot%202026-05-10%20at%209.16.54%E2%80%AFPM.png',
      video: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/y191dcei_Screen%20Recording%202026-04-08%20at%206.13.33%E2%80%AFAM.mov',
      slug: 'bcdr-executive-dashboard'
    },
    {
      id: 3,
      title: 'Swiggy Group Ordering',
      company: 'Swiggy / Personal Project',
      year: '2023',
      note: 'Concept created before Swiggy launched this feature',
      description: 'Making group decisions effortless. When multiple people want to order together, coordination breaks down fast. This redesign focused on transparency, real-time updates, and removing the friction of split payments and conflicting preferences.',
      tags: ['Social UX', 'Mobile Design', 'Interaction Design'],
      impact: 'Seamless multi-user flow with live order tracking',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/qh8a69ip_Screenshot%202026-05-10%20at%209.18.19%E2%80%AFPM.png',
      video: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/c4of3v95_Screen%20Recording%202026-04-30%20at%205.54.19%E2%80%AFPM.mov',
      slug: 'swiggy-group-ordering'
    }
  ];

  const creativeProjects = [
    {
      id: 1,
      title: 'Virtual Fitting Room',
      company: 'Personal Project',
      year: '2026',
      description: 'Exploring how fashion becomes interactive. This experiment translates hand-drawn sketches into a digital fitting experience, focusing on interaction design over photorealism, and playfulness over precision.',
      tags: ['Concept Design', 'Prototyping', 'Visual Exploration'],
      impact: 'Proof of concept for sketch-driven fashion interaction',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ntm2ri4r_Screenshot%202026-04-08%20at%205.31.54%E2%80%AFAM.png',
      video: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/913ls062_Screen%20Recording%202026-04-08%20at%205.53.38%E2%80%AFAM.mov',
      slug: 'virtual-fitting-room'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <a href="/" className="nav-logo">Paridhi Sinha</a>
          
          {/* Desktop Nav Links */}
          <div className="nav-links desktop-nav">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <a 
              href="https://drive.google.com/file/d/1R6UNM-bj1GSNSsGVopGDoak__bcBoB_o/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
            <button onClick={() => scrollToSection('contact')} className="nav-cta">Let's talk</button>
          </div>

          {/* Mobile Nav */}
          <div className="mobile-nav">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://drive.google.com/file/d/1R6UNM-bj1GSNSsGVopGDoak__bcBoB_o/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-mobile"
            >
              Resume
            </a>
            <button 
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('work')} className="mobile-menu-link">Work</button>
            <button onClick={() => scrollToSection('about')} className="mobile-menu-link">About</button>
            <a 
              href="https://drive.google.com/file/d/1R6UNM-bj1GSNSsGVopGDoak__bcBoB_o/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-link"
            >
              Resume
            </a>
            <button onClick={() => scrollToSection('contact')} className="mobile-menu-link">Let's talk</button>
          </div>
        )}
      </nav>

      {/* Hero Section - Portfolio with 3D Tool Icons */}
      <section className="hero">
        <div className="hero-content-portfolio">
          <h1 className="portfolio-title">Portfolio</h1>
          <div className="floating-tools">
            <div className="tool-icon tool-claude" title="Claude AI">
              <img src="https://asset.brandfetch.io/idZvYGVDMY/idBbbL2fk4.svg" alt="Claude" />
            </div>
            <div className="tool-icon tool-figma" title="Figma">
              <img src="https://cdn.worldvectorlogo.com/logos/figma-icon.svg" alt="Figma" />
            </div>
            <div className="tool-icon tool-adobe" title="Adobe">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/200px-Adobe_Corporate_logo.svg.png" alt="Adobe" />
            </div>
            <div className="tool-icon tool-gpt" title="ChatGPT">
              <img src="https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" alt="ChatGPT" />
            </div>
            <div className="tool-icon tool-gemini" title="Google Gemini">
              <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini" />
            </div>
            <div className="tool-icon tool-emergent" title="Emergent">
              <img src="https://asset.brandfetch.io/idNXE2fk6B/idWRxMqH1g.png" alt="Emergent" />
            </div>
            <div className="tool-icon tool-pendo" title="Pendo">
              <img src="https://asset.brandfetch.io/idw9zZu-7c/idMQgjSQkS.svg" alt="Pendo" />
            </div>
            <div className="tool-icon tool-mobbin" title="Mobbin">
              <img src="https://asset.brandfetch.io/idGMYL7T3q/idO-3LgUiA.png" alt="Mobbin" />
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <ArrowRight size={12} style={{ transform: 'rotate(90deg)' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about animate-on-scroll parallax-section">
        <div className="about-content-grid">
          <div className="about-left">
            <div className="about-label">ABOUT</div>
            
            <h2 className="about-name" style={{ display: 'none' }}>Paridhi Sinha</h2>
            
            <h3 className="about-intro-title progressive-reveal">
              I design for systems, not just screens. Building experiences that solve the immediate problem while making what comes next easier.
            </h3>
            
            <p className="about-intro-text">
              I'm Paridhi, a Staff Product Designer based in Bengaluru. I've spent 7+ years working across enterprise software, B2B SaaS, and AI-powered products, with a particular interest in products where the complexity runs deeper than the interface.
            </p>
            <p className="about-intro-text">
              I enjoy understanding how things connect: the users, workflows, business rules, edge cases, and patterns that sit underneath a feature. My work often starts in the weeds and ends with a clearer system: one that solves the immediate problem while making what's next easier to build.
            </p>
            <p className="about-intro-text">
              At Mitratech, I bring that approach to Preparis and PolicyHub, working across product strategy, scalable UX practices, and emerging AI workflows in GRC.
            </p>
          </div>
          
          <div className="about-right">
            <div className="about-profile-wrapper">
              <img 
                src="https://customer-assets-4nw71qhi.emergentagent.net/job_portfolio-resume-28/artifacts/giz020su_pp.png"
                alt="Paridhi Sinha"
                className="about-profile-image"
              />
            </div>
            <div className="about-profile-info">
              <h2 className="about-profile-name">Paridhi Sinha</h2>
              <p className="about-profile-title">STAFF PRODUCT DESIGNER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work animate-on-scroll parallax-section">
        <div className="work-content">
          <div className="work-header">
            <div className="work-label">Featured Work</div>
            <h2 className="work-title progressive-reveal">Case Studies</h2>
          </div>
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="case-study-card"
                onClick={() => navigate(`/case-study/${study.slug}`)}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} />
                  {study.video && (
                    <video src={study.video} muted loop playsInline />
                  )}
                </div>
                <div className="case-study-info">
                  <div className="case-study-meta">
                    <div className="case-study-company">{study.company}</div>
                    <div className="case-study-year">{study.year}</div>
                  </div>
                  <h3 className="case-study-title">{study.title}</h3>
                  {study.note && <p className="case-study-note">{study.note}</p>}
                  <p className="case-study-description">{study.description}</p>
                  <div className="case-study-tags">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="case-study-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="case-study-impact">
                    <strong>Impact:</strong> {study.impact}
                  </div>
                  <div className="case-study-cta">
                    View Case Study <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="side-projects-banner">
        <div className="side-projects-card">
          <div className="side-projects-left">
            <div className="side-projects-label">SIDE PROJECTS</div>
            <h3 className="side-projects-title">A few experiments on the side</h3>
            <p className="side-projects-subtitle">Exploring ideas, trying things out, and learning along the way.</p>
          </div>
          <div className="side-projects-right">
            <div className="side-project-visual">
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ntm2ri4r_Screenshot%202026-04-08%20at%205.31.54%E2%80%AFAM.png" 
                alt="Virtual Trial Room"
              />
            </div>
            <button 
              onClick={() => navigate('/case-study/virtual-fitting-room')}
              className="side-project-cta"
            >
              View Virtual Trial Room <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="contact-label">Get in Touch</div>
          <h2 className="contact-title">Let's work together</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-info">
            <button onClick={copyEmail} className="contact-email">
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D26A" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
              pari.sin17@gmail.com
            </button>
            <a 
              href="https://www.linkedin.com/in/paridhisinha" 
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">© 2026 Paridhi Sinha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
