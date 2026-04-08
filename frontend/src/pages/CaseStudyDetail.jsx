import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import '../styles/CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="case-study-detail">
      {/* Header */}
      <header className="detail-header">
        <div className="detail-header-content">
          <button onClick={() => navigate('/')} className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Hero Video */}
      <section className="detail-hero">
        <video 
          src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/913ls062_Screen%20Recording%202026-04-08%20at%205.53.38%E2%80%AFAM.mov"
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Prototype Link */}
      <section className="prototype-link-section">
        <a 
          href="#" 
          className="prototype-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} />
          View Prototype
        </a>
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">🧵 Virtual Fitting Room</h1>
          <p className="project-subtitle">A Sketch-Based Exploration</p>

          {/* Bento Grid */}
          <div className="bento-grid">
            
            {/* Overview - Large */}
            <div className="bento-card large">
              <h2>Overview</h2>
              <p>A simplified, sketch-driven virtual fitting room exploring how hand-drawn fashion sketches translate into interactive digital experiences. This proof of concept tests whether illustrated outfit sketches can feel intuitive, aesthetic, and usable.</p>
            </div>

            {/* The Idea */}
            <div className="bento-card medium">
              <h2>The Idea</h2>
              <p>Inspired by hand-drawn photo booths, this project asks: what if trying clothes felt like interacting with sketches instead of hyper-real models?</p>
            </div>

            {/* Problem Framing */}
            <div className="bento-card medium">
              <h2>Problem Framing</h2>
              <p>Virtual fitting today prioritizes realism and AI accuracy but loses personality and simplicity.</p>
              <p className="highlight-text">Instead of "how accurate?" → I asked "how expressive?"</p>
            </div>

            {/* Design System */}
            <div className="bento-card tall">
              <h2>Design System</h2>
              <ul>
                <li>Black & white aesthetic</li>
                <li>Hand-drawn, slightly imperfect</li>
                <li>Minimal UI framing</li>
                <li>Focus on silhouette over detail</li>
              </ul>
              <p>The UI stays restrained so sketches remain the hero.</p>
            </div>

            {/* Core Experience */}
            <div className="bento-card xlarge">
              <h2>Core Experience</h2>
              <div className="experience-grid">
                <div className="exp-item">
                  <h3>1. Body Selection</h3>
                  <p>Choose from Straight, Curvy, or Broad body types.</p>
                </div>
                <div className="exp-item">
                  <h3>2. Apparel Layering</h3>
                  <p>Toggle tops (Shirt, Crop Top) and bottoms (Mini Skirt).</p>
                </div>
                <div className="exp-item">
                  <h3>3. Live Preview</h3>
                  <p>Central canvas updates in real-time as you layer.</p>
                </div>
              </div>
            </div>

            {/* Why This Works */}
            <div className="bento-card medium">
              <h2>Why This Works</h2>
              <ul>
                <li>Immediate feedback loop</li>
                <li>Low cognitive load</li>
                <li>Strong visual identity</li>
              </ul>
              <p className="highlight-text">Interaction > Complexity</p>
            </div>

            {/* Constraints */}
            <div className="bento-card medium">
              <h2>Constraints</h2>
              <p>This Figma prototype has no garment simulation, fit accuracy, or AI. All combinations are hard-coded.</p>
              <p className="highlight-text">Shows concept viability, not technical feasibility.</p>
            </div>

            {/* What I Tested */}
            <div className="bento-card medium">
              <h2>What I Tested</h2>
              <ul>
                <li>Can sketches become UI elements?</li>
                <li>Can fitting rooms exist without realism?</li>
                <li>Does this feel satisfying in a basic state?</li>
              </ul>
            </div>

            {/* Future Scope */}
            <div className="bento-card large">
              <h2>Future Scope</h2>
              <div className="future-columns">
                <div>
                  <h4>V2 - Expansion</h4>
                  <ul>
                    <li>More body types</li>
                    <li>Larger apparel library</li>
                    <li>Custom sketch uploads</li>
                  </ul>
                </div>
                <div>
                  <h4>V3 - AI Layer</h4>
                  <ul>
                    <li>Upload user image</li>
                    <li>Import from platforms</li>
                    <li>Sketch-style conversions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bento-card highlight-card">
              <h2>Key Takeaways</h2>
              <ul className="takeaway-list">
                <li>Realism isn't required for compelling experiences</li>
                <li>Strong visual language carries limited functionality</li>
                <li>MVPs are powerful when answering one clear question</li>
              </ul>
              <p className="final-answer">Can fashion sketches become interactive?<br/><strong>Yes, and it's surprisingly engaging.</strong></p>
            </div>

            {/* Reflection */}
            <div className="bento-card medium reflection-card">
              <h2>Reflection</h2>
              <p>A small, fast, fun project that helped me reconnect with sketching as design input and explore fashion as an interface.</p>
              <p><strong>That's what made it worth doing.</strong></p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="detail-footer">
        <button onClick={() => navigate('/')} className="back-to-portfolio">
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
      </footer>
    </div>
  );
};

export default CaseStudyDetail;
