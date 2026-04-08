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

      {/* Hero Image */}
      <section className="detail-hero">
        <img 
          src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ntm2ri4r_Screenshot%202026-04-08%20at%205.31.54%E2%80%AFAM.png"
          alt="Virtual Fitting Room"
          className="hero-image"
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
          
          <h1 className="project-title">🧵 Virtual Fitting Room — A Sketch-Based Exploration</h1>

          <div className="content-section">
            <h2>Overview</h2>
            <p>This project explores a simplified, sketch-driven version of a virtual fitting room. Instead of focusing on realism or AI accuracy, the goal was to experiment with how fashion sketches could be translated into an interactive, minimal digital experience.</p>
            <p>It started as a small proof of concept to test whether hand-drawn outfit sketches could be meaningfully integrated into a UI and still feel intuitive, aesthetic, and usable.</p>
          </div>

          <div className="content-section">
            <h2>The Idea</h2>
            <p>The idea was inspired by a hand-drawn photo booth concept — something about the raw, imperfect, illustrated quality felt personal and expressive.</p>
            <p>I wanted to bring that same feeling into a different context: <strong>what if trying clothes could feel like interacting with sketches instead of hyper-real models?</strong></p>
            <p>This led to the concept of a virtual fitting room built entirely using hand-drawn fashion elements.</p>
          </div>

          <div className="content-section">
            <h2>Problem Framing</h2>
            <p>Most virtual fitting experiences today aim for:</p>
            <ul>
              <li>high realism</li>
              <li>AI-driven body mapping</li>
              <li>accuracy in fit prediction</li>
            </ul>
            <p>But they often lose:</p>
            <ul>
              <li>personality</li>
              <li>simplicity</li>
              <li>creative expression</li>
            </ul>
            <p className="highlight">This project flips that.</p>
            <p>👉 Instead of asking "how accurate can we get?"<br/>
            👉 I asked "how intuitive and expressive can this feel?"</p>
          </div>

          <div className="content-section">
            <h2>Approach</h2>
            <p>I approached this as a quick MVP + feasibility test, focusing on three things:</p>
            <ol>
              <li>Can sketch-based fashion feel interactive?</li>
              <li>Can layering apparel be simplified?</li>
              <li>Can body variation be represented minimally without overcomplicating?</li>
            </ol>
          </div>

          <div className="content-section">
            <h2>Design System & Aesthetic</h2>
            <p>The visual language is intentionally:</p>
            <ul>
              <li>black & white</li>
              <li>hand-drawn</li>
              <li>slightly imperfect</li>
              <li>minimal UI framing</li>
            </ul>
            <p>This creates:</p>
            <ul>
              <li>a calm, editorial feel</li>
              <li>focus on silhouette over detail</li>
              <li>consistency between body and apparel</li>
            </ul>
            <p>The UI itself is kept extremely restrained so that the sketches remain the hero.</p>
          </div>

          <div className="content-section">
            <h2>Core Experience (MVP)</h2>
            <p>The MVP focuses on a simple interaction model:</p>
            
            <h3>1. Body Selection</h3>
            <p>Users can choose between three base body types:</p>
            <ul>
              <li>Straight</li>
              <li>Curvy</li>
              <li>Broad</li>
            </ul>
            <p>These represent a starting point — not a complete system — just enough to test variation.</p>

            <h3>2. Apparel Layering</h3>
            <p>Users can toggle between:</p>
            <ul>
              <li><strong>Tops:</strong> Shirt, Crop Top</li>
              <li><strong>Bottoms:</strong> Mini Skirt</li>
            </ul>
            <p>Each selection updates the central preview.</p>

            <h3>3. Live Preview</h3>
            <p>A central canvas acts as the "fitting room" where:</p>
            <ul>
              <li>the selected body type is displayed</li>
              <li>apparel layers update in real-time</li>
              <li>combinations can be explored quickly</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Why This Works</h2>
            <p>Even with limited options, the experience demonstrates:</p>
            <ul>
              <li><strong>Immediate feedback loop</strong> → toggle → see result</li>
              <li><strong>Low cognitive load</strong> → minimal choices</li>
              <li><strong>Strong visual identity</strong> → cohesive sketch style</li>
            </ul>
            <p>It proves that <strong>interaction > complexity</strong> at an early stage.</p>
          </div>

          <div className="content-section">
            <h2>Constraints & Limitations</h2>
            <p>This is a Figma Make prototype, so:</p>
            <ul>
              <li>No real garment simulation</li>
              <li>No body-specific fit accuracy</li>
              <li>No AI-based transformations</li>
              <li>All combinations are hard-coded</li>
            </ul>
            <p className="highlight">This means:<br/>
            👉 It shows concept viability, not technical feasibility.</p>
          </div>

          <div className="content-section">
            <h2>What I Was Testing</h2>
            <p>This project was less about solving a market problem and more about exploring:</p>
            <ul>
              <li>Can my fashion sketches become usable UI elements?</li>
              <li>Can a fitting room exist without realism?</li>
              <li>Does this interaction feel satisfying even in a basic state?</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Future Scope</h2>
            
            <h3>V2 — Expansion of System</h3>
            <ul>
              <li>More body types (beyond 3)</li>
              <li>Larger apparel library</li>
              <li>Ability to upload or select custom sketches</li>
              <li>More nuanced layering combinations</li>
            </ul>

            <h3>V3 — Personalization + AI Layer</h3>
            <ul>
              <li>Upload user image → map to closest body type</li>
              <li>Import outfits from platforms (e.g. Myntra)</li>
              <li>Convert real images into sketch-style overlays</li>
              <li>Approximate (75–80%) visual match</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Key Takeaways</h2>
            <ul className="key-takeaways">
              <li>You don't need full realism to create a compelling fitting experience</li>
              <li>A strong visual language can carry interaction even with limited functionality</li>
              <li>MVPs are powerful when they answer one clear question</li>
            </ul>
            <p className="highlight">For me, that question was:<br/>
            👉 Can fashion sketches become interactive?</p>
            <p><strong>And the answer is: yes, and it's surprisingly engaging.</strong></p>
          </div>

          <div className="content-section">
            <h2>Reflection</h2>
            <p>This was a small, fast, and fun project — intentionally separate from my day-to-day work.</p>
            <p>It helped me:</p>
            <ul>
              <li>reconnect with sketching as a design input</li>
              <li>explore fashion as an interface, not just a visual</li>
              <li>build something purely driven by curiosity</li>
            </ul>
            <p><strong>And honestly, that's what made it worth doing.</strong></p>
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
