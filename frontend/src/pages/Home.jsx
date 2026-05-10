import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
      id: 2,
      title: 'BC/DR Executive Dashboard',
      company: 'Mitratech',
      year: '2026',
      description: 'An enterprise analytics interface helping business continuity leaders monitor and act on technology and vendor recovery readiness. Transformed passive reporting into an active decision system.',
      tags: ['Enterprise UX', 'Data Visualization', 'B2B SaaS'],
      impact: '24+ hours/month saved, real-time insights vs 2-3 day reporting',
      image: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/k2bg2ef5_Screenshot%202026-05-10%20at%209.16.54%E2%80%AFPM.png',
      video: 'https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/y191dcei_Screen%20Recording%202026-04-08%20at%206.13.33%E2%80%AFAM.mov',
      slug: 'bcdr-executive-dashboard'
    },
    {
      id: 3,
      title: 'Swiggy Group Ordering',
      company: 'Personal Project',
      year: '2023',
      description: 'Redesigning Swiggy\'s group ordering experience to make coordinating meals with friends seamless. Focused on reducing friction, improving transparency, and creating delightful social interactions.',
      tags: ['FoodTech', 'Social Features', 'Mobile UX'],
      impact: 'Streamlined multi-user ordering flow with real-time coordination',
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
      description: 'A sketch-based exploration of virtual fashion fitting. Instead of focusing on realism or AI accuracy, this project explores how hand-drawn fashion sketches could be translated into an interactive, minimal digital experience.',
      tags: ['Fashion Tech', 'UX Design', 'Prototyping', 'MVP'],
      impact: 'Proof of concept for sketch-driven apparel interaction',
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
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <a 
              href="https://drive.google.com/file/d/1a-PQezdYih5L_9YeZUnY-2Gx6Qn5mXY8/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="mobile-nav">
            <a 
              href="https://drive.google.com/file/d/1a-PQezdYih5L_9YeZUnY-2Gx6Qn5mXY8/view?usp=sharing" 
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
            <button onClick={() => scrollToSection('about')} className="mobile-menu-link">About</button>
            <button onClick={() => scrollToSection('work')} className="mobile-menu-link">Work</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-menu-link">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="label">Senior Product Designer, GRC</span>
            <h1>PORTFOLIO</h1>
            <p className="subtitle">
              Designing, building and testing enterprise SaaS products for the past 7 years, currently somewhere between GRC workflows, AI experiments, and asking "wait, why does this flow work like this?"
            </p>
            <p className="subtitle">
              I like simplifying complex systems, thinking through edge cases, and building products that feel structured without feeling heavy.
            </p>
            <p className="subtitle">
              Outside work, I build fashion and lifestyle concepts, experiment with visuals, and start side projects because of the love for the game ✨
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div>
            <div className="about-label">About Me</div>
            <div className="about-image-wrapper">
              <img 
                src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/pa8y1lfc_pp.jpg" 
                alt="Paridhi Sinha" 
                className="about-image"
              />
            </div>
          </div>
          <div className="about-text">
            <h2>Designing with purpose</h2>
            <p>
              With over 7 years of experience in B2B SaaS, I specialize in creating user-centered experiences that balance aesthetics with functionality. My expertise lies in the Governance, Risk, and Compliance space, where I navigate complex requirements to deliver intuitive solutions.
            </p>
            <p>
              Currently at Mitratech, I lead cross-product UX strategy across enterprise risk and compliance platforms. I've introduced GenAI-powered workflows, improved UX consistency, and partnered with product and engineering leadership to shape long-term product vision.
            </p>
            <p>
              I hold a Bachelor of Technology in Computer Science from PES University and have transitioned from Software Testing to Product Ownership to Product Design, giving me a unique perspective on the entire product lifecycle.
            </p>
            <div className="about-skills">
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

      {/* Work Section */}
      <section id="work" className="work">
        <div className="work-content">
          <div className="work-header">
            <div className="work-label">Featured Work</div>
            <h2 className="work-title">Case Studies</h2>
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

      {/* Creative Indulges Section */}
      <section id="creative" className="creative-section">
        <div className="work-content">
          <div className="work-header">
            <div className="work-label">Creative Indulges</div>
            <h2 className="work-title">Side Projects</h2>
          </div>
          <div className="case-studies-grid">
            {creativeProjects.map((project) => (
              <div 
                key={project.id} 
                className="case-study-card"
                onClick={() => navigate(`/case-study/${project.slug}`)}
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
                  <img src={project.image} alt={project.title} />
                  {project.video && (
                    <video src={project.video} muted loop playsInline />
                  )}
                </div>
                <div className="case-study-info">
                  <div className="case-study-meta">
                    <div className="case-study-company">{project.company}</div>
                    <div className="case-study-year">{project.year}</div>
                  </div>
                  <h3 className="case-study-title">{project.title}</h3>
                  <p className="case-study-description">{project.description}</p>
                  <div className="case-study-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="case-study-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="case-study-impact">
                    <strong>Impact:</strong> {project.impact}
                  </div>
                  <div className="case-study-cta">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
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
          <div className="email-wrapper">
            <a href="mailto:pari.sin17@gmail.com" className="contact-email">
              pari.sin17@gmail.com
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('pari.sin17@gmail.com');
                alert('Email copied to clipboard!');
              }}
              className="copy-email-icon"
              title="Copy email"
            >
              📋
            </button>
          </div>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/paridhisinha" 
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
