import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollTo: 'work' } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className="case-study-detail">
      {/* Header */}
      <header className="detail-header">
        <div className="detail-header-content">
          <button onClick={handleBackToPortfolio} className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Hero Video */}
      <section className="detail-hero">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
        >
          <source 
            src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ax2ay7g1_VTR%20Recording.mov" 
            type="video/quicktime"
          />
          <source 
            src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/ax2ay7g1_VTR%20Recording.mov" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">🧵 Virtual Fitting Room</h1>
          <p className="project-subtitle">A sketch-based exploration of digital fashion fitting</p>

          {/* Key Cards */}
          <div className="key-cards-section">
            <div className="key-card">
              <h2>Overview</h2>
              <p>A simplified, sketch-driven virtual fitting room exploring how hand-drawn fashion sketches translate into interactive digital experiences. This proof of concept tests whether illustrated outfit sketches can feel intuitive, aesthetic, and usable.</p>
            </div>
            
            <div className="key-card">
              <h2>The Problem</h2>
              <p>Virtual fitting today prioritizes realism and AI accuracy but loses personality and simplicity. Users are overwhelmed by complex 3D models and AR overlays.</p>
            </div>

            <div className="key-card">
              <h2>The Idea</h2>
              <p><strong>Instead of "how accurate?" → ask "how expressive?"</strong></p>
              <p>Inspired by hand-drawn photo booths, this project asks: what if trying clothes felt like interacting with sketches instead of hyper-real models?</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content">
            <div className="article-section">
              <h2>Design Philosophy</h2>
              <p>This project deliberately moves away from photorealism and AI-powered body scanning. Instead, it embraces the aesthetic of hand-drawn fashion illustration.</p>
              <p>The hypothesis: users might prefer a charming, stylized experience over a technically perfect but impersonal one.</p>
            </div>

            <div className="article-section">
              <h2>Design System</h2>
              <p>The visual language is intentionally minimal and sketch-like:</p>
              <ul>
                <li><strong>Black & white aesthetic:</strong> Removes color as a variable, focuses on silhouette and form</li>
                <li><strong>Hand-drawn, slightly imperfect:</strong> Embraces the charm of illustration over sterile precision</li>
                <li><strong>Minimal UI framing:</strong> The sketches are the hero, interface stays out of the way</li>
                <li><strong>Focus on silhouette over detail:</strong> Emphasizes shape and fit rather than fabric texture</li>
              </ul>
            </div>

            <div className="article-section">
              <h2>Core Experience</h2>
              
              <h3>Body Selection</h3>
              <p>Users start by choosing from three body types: Straight, Curvy, or Broad. This simplified categorization acknowledges different body shapes without requiring measurements or photos.</p>

              <h3>Apparel Layering</h3>
              <p>Toggle through tops (Shirt, Crop Top, T-shirt) and bottoms (Mini Skirt, Jeans) to build outfits. Each item is a separate sketch layer that composites in real-time.</p>

              <h3>Live Preview</h3>
              <p>The central canvas updates immediately as selections change. Sketches overlay smoothly, showing how items work together.</p>

              <h3>Simplicity First</h3>
              <p>No AI processing, no camera access, no complex setup. Just tap, layer, see result.</p>
            </div>

            <div className="article-section">
              <h2>Technical Approach</h2>
              <p>Built as a React prototype with:</p>
              <ul>
                <li>SVG-based sketch overlays for clean scaling</li>
                <li>Component state management for instant updates</li>
                <li>Minimal dependencies to keep it lightweight</li>
              </ul>
              <p>Each clothing item and body type is a separate SVG layer. The canvas composites them based on selection, maintaining consistency in line weight and style.</p>
            </div>

            <div className="article-section">
              <h2>Design Decisions</h2>
              
              <h3>Why sketches over realistic renders?</h3>
              <p>Realistic virtual fitting sets expectations for accuracy that's nearly impossible to meet. Users get frustrated when the "perfect" 3D model doesn't match their actual body.</p>
              <p><strong>Solution:</strong> Sketches set a different expectation. They're suggestive, not prescriptive. Users understand it's about the general idea, not exact fit.</p>

              <h3>Why limited clothing options?</h3>
              <p>This is a proof of concept testing the interaction pattern, not a complete wardrobe.</p>
              <p><strong>Decision:</strong> Focused on making 2-3 items work beautifully rather than 100 items work poorly. Quality over quantity to validate the concept.</p>

              <h3>Why no measurement input?</h3>
              <p>Asking users for measurements creates friction and raises accuracy expectations.</p>
              <p><strong>Solution:</strong> Body type selection is intentionally approximate. It's about visual preference, not precise sizing.</p>
            </div>

            <div className="article-section">
              <h2>Challenges</h2>
              
              <h3>Maintaining Visual Consistency</h3>
              <p>Each sketch needs to feel like it's from the same artist's hand, even when layered.</p>
              <p><strong>Approach:</strong> Established style rules for line weight, curve style, and level of detail. All sketches follow the same grid for proper alignment.</p>

              <h3>Layering Logic</h3>
              <p>Clothes need to layer in the right order (shirt over body, jacket over shirt) without manual z-index management.</p>
              <p><strong>Solution:</strong> Predefined layer hierarchy. Each garment type has an assigned level that determines rendering order.</p>

              <h3>Conveying Non-Realism</h3>
              <p>Users might expect this to show how clothes "actually look" on them.</p>
              <p><strong>Approach:</strong> Clear messaging that this is a "sketch exploration" not a "virtual fitting." Sets appropriate expectations from the start.</p>
            </div>

            <div className="article-section">
              <h2>What I Learned</h2>
              <p>This project taught me that sometimes <strong>less fidelity can create more engagement</strong>. Users didn't critique the sketches for being inaccurate — they appreciated them for being playful.</p>
              <p>It also reinforced that <strong>constraints breed creativity</strong>. Limiting to black-and-white sketches forced focus on form and silhouette, which might be more valuable than color when evaluating fit.</p>
              <p>The biggest insight: <strong>fashion tech doesn't have to chase photorealism to be useful</strong>. There's space for experiences that are delightful, fast, and "good enough."</p>
            </div>

            <div className="article-section">
              <h2>Future Directions</h2>
              <p>If expanded, this concept could include:</p>
              <ul>
                <li>More body types and poses</li>
                <li>Expanded wardrobe with seasonal collections</li>
                <li>User-uploaded sketches (let people draw their own clothes)</li>
                <li>Social sharing of outfit combinations</li>
                <li>Integration with e-commerce for actual purchase</li>
              </ul>
            </div>

            <div className="highlight-box">
              <p><strong>Core Insight:</strong> The most technically impressive solution isn't always the most enjoyable to use. Sometimes simplicity and charm beat accuracy and complexity.</p>
            </div>

            <div className="article-section">
              <h2>Reflection</h2>
              <p>This proof of concept was an experiment in questioning assumptions. Fashion tech defaults to photorealism and AI, but does it have to?</p>
              <p>The sketch approach won't replace traditional e-commerce or AR try-ons. But it might carve out its own space for users who want something quick, low-pressure, and visually interesting.</p>
              <p>Most importantly, it reminded me that design is about choices. Choosing to embrace constraints (sketches, limited options) rather than fight them can lead to surprisingly compelling experiences.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="detail-footer">
        <button onClick={handleBackToPortfolio} className="back-to-portfolio">
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
      </footer>
    </div>
  );
};

export default CaseStudyDetail;
