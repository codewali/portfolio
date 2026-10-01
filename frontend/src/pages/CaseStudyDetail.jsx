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
        </video>
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">Virtual Trial Room</h1>
          <p className="project-subtitle">A sketch-based exploration of virtual fashion fitting.</p>

          {/* Article Content */}
          <div className="article-content-compact">
            
            {/* 01 Context & Problem Discovery */}
            <div className="cs-section">
              <h2 className="cs-section-title">CONTEXT & PROBLEM DISCOVERY</h2>
              
              <p>Personal side project exploring whether simplified, illustrated apparel previews could offer a viable alternative to complex AR and 3D body-scanning solutions.</p>

              <h3 className="cs-subsection-headline">The problem</h3>
              <p>Most virtual try-on solutions prioritize realism (3D body scans, AR overlays, AI-powered fit predictions). These are technically impressive but create high barriers: setup friction, uncanny valley, performance issues, accuracy anxiety.</p>

              <p>What if we removed the pressure of accuracy altogether and focused on quick visual exploration instead?</p>
            </div>

            {/* 02 My Role */}
            <div className="cs-section">
              <h2 className="cs-section-title">MY ROLE</h2>
              
              <p>Solo project handling: concept exploration and design philosophy, illustrated apparel asset creation, interaction design and layering logic, React prototype development with SVG overlays, and user testing with lightweight prototypes.</p>
            </div>

            {/* 03 Design Approach & Key Decisions */}
            <div className="cs-section">
              <h2 className="cs-section-title">DESIGN APPROACH & KEY DECISIONS</h2>
              
              <h3 className="cs-subsection-headline">Embrace illustration over realism</h3>
              <p>Lean into hand-drawn aesthetic. This sets different expectations (suggestive, not prescriptive). It's about general silhouette, not exact fit.</p>

              <h3 className="cs-subsection-headline">Minimize cognitive load</h3>
              <p>Simplified body type selection (Straight, Curvy, Broad) instead of precise measurements. No camera access, no photo uploads, no complex setup. Tap and see results instantly.</p>

              <h3 className="cs-subsection-headline">Why sketches over realistic renders?</h3>
              <p>Realistic virtual fitting sets expectations for accuracy that's nearly impossible to meet. Users get frustrated when the "perfect" 3D model doesn't match their body. Sketches are charming and suggestive. Users understand it's about visual composition, not precise sizing.</p>

              <h3 className="cs-subsection-headline">Why limited clothing options?</h3>
              <p>This is proof of concept testing the interaction pattern. Focused on making a small set work beautifully rather than building broad but shallow coverage.</p>

              <h3 className="cs-subsection-headline">Why no measurement input?</h3>
              <p>Asking for measurements creates friction and raises accuracy expectations. Body type selection is intentionally approximate. Keeps the experience fast and low-pressure.</p>
            </div>

            {/* 04 Solution */}
            <div className="cs-section">
              <h2 className="cs-section-title">SOLUTION</h2>
              
              <h3 className="cs-subsection-headline">Simple body selection</h3>
              <p>Choose from three body types without requiring measurements or photos.</p>

              <h3 className="cs-subsection-headline">Apparel layering</h3>
              <p>Toggle through tops and bottoms to build outfits. Each item is a separate sketch layer that composites in real-time.</p>

              <h3 className="cs-subsection-headline">Instant visual preview</h3>
              <p>Canvas updates immediately as selections change. No loading, no processing.</p>

              <p>Built as React prototype with SVG-based sketch overlays for clean scaling and minimal dependencies.</p>
            </div>

            {/* 05 Impact */}
            <div className="cs-section">
              <h2 className="cs-section-title">IMPACT</h2>
              
              <p>Qualitative findings from informal user testing:</p>
              
              <ul className="cs-list-compact">
                <li>Stylized > Realistic: Users preferred charming sketch aesthetic over "almost real" renders that felt uncanny</li>
                <li>Speed matters: Instant visual feedback created playful, exploratory feel</li>
                <li>Low barriers work: No setup friction meant users engaged immediately</li>
                <li>Different use case: Not for "buying with confidence" but for quick visual exploration</li>
              </ul>
            </div>

            {/* 06 What I Learnt */}
            <div className="cs-section cs-section-last">
              <h2 className="cs-section-title">WHAT I LEARNT</h2>
              
              <p>The most technically impressive solution isn't always the most enjoyable to use. Sometimes simplicity and charm beat accuracy and complexity.</p>

              <p>Constraints breed creativity. Limiting to black-and-white sketches forced focus on form and silhouette, which might be more valuable than color when evaluating how pieces work together.</p>

              <p>Apparel tech doesn't have to chase photorealism to be useful. There's space for experiences that are delightful, fast, and "good enough" for quick exploration.</p>

              <p>Design is about choices. Choosing to embrace constraints (sketches, limited options) rather than fight them can lead to surprisingly compelling experiences.</p>
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
