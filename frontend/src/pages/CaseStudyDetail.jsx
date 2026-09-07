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
          
          <h1 className="project-title">Virtual Fitting Room</h1>
          <p className="project-subtitle">A sketch-based interaction experiment exploring how illustrated apparel previews can simplify digital try-on experiences.</p>

          {/* Article Content - 9 Step Structure */}
          <div className="article-content">
            
            {/* 01 CONTEXT */}
            <div className="article-section">
              <span className="step-label">01 — CONTEXT</span>
              <h2>Exploring alternative UX patterns in apparel tech</h2>
              <p>This is a personal side project—a proof of concept exploring whether simplified, illustrated apparel previews could offer a viable alternative to complex AR and 3D body-scanning solutions in digital try-on experiences.</p>
              <p>The experiment was driven by curiosity about interaction design trade-offs: What if we prioritized speed and simplicity over photorealistic accuracy? Could a stylized, sketch-based approach feel more accessible and less intimidating than high-fidelity virtual fitting rooms?</p>
            </div>

            {/* 02 PROBLEM */}
            <div className="article-section">
              <span className="step-label">02 — PROBLEM</span>
              <h2>Virtual fitting today is complex and intimidating</h2>
              <p>Most virtual try-on solutions prioritize realism—3D body scans, AR overlays, AI-powered fit predictions. These approaches are technically impressive but create high barriers:</p>
              <ul>
                <li><strong>Setup friction:</strong> Requiring body measurements, photos, or camera access</li>
                <li><strong>Uncanny valley:</strong> Near-realistic renders that feel "off" and break trust</li>
                <li><strong>Performance issues:</strong> Heavy processing that slows down browsing</li>
                <li><strong>Accuracy anxiety:</strong> When tools promise "perfect fit," users expect perfection and are disappointed by inevitable errors</li>
              </ul>
              <p><strong>Question:</strong> What if we removed the pressure of accuracy altogether and focused on quick visual exploration instead?</p>
            </div>

            {/* 03 ROLE */}
            <div className="article-section">
              <span className="step-label">03 — ROLE</span>
              <h2>My contribution</h2>
              <p>Solo personal project where I handled:</p>
              <ul>
                <li>Concept exploration and design philosophy</li>
                <li>Illustrated apparel asset creation (hand-drawn sketches)</li>
                <li>Interaction design and layering logic</li>
                <li>React prototype development with SVG overlays</li>
                <li>User testing with lightweight prototypes</li>
              </ul>
              <p>The goal was to test an idea quickly—validate whether a sketch-based approach could feel intuitive and useful without the overhead of AI or AR.</p>
            </div>

            {/* 04 INSIGHT */}
            <div className="highlight-box">
              <span className="step-label">04 — KEY INSIGHT</span>
              <p><strong>Sometimes less fidelity creates more engagement.</strong> Users didn't critique the sketches for being inaccurate—they appreciated them for being playful. Removing the expectation of perfection removed the anxiety of judgment.</p>
            </div>

            {/* 05 APPROACH */}
            <div className="article-section">
              <span className="step-label">05 — APPROACH</span>
              <h2>Design strategy</h2>
              
              <h3>Embrace Illustration Over Realism</h3>
              <p>Instead of pursuing photorealism, lean into hand-drawn aesthetic. This sets a different expectation—users understand it's suggestive, not prescriptive. It's about the general idea of how items work together, not exact fit.</p>

              <h3>Minimize Cognitive Load</h3>
              <p>Simplified body type selection (Straight, Curvy, Broad) instead of precise measurements. No camera access, no photo uploads, no complex setup. Just tap and see results instantly.</p>

              <h3>Layering System</h3>
              <p>Built a component-based system where each clothing item is a separate SVG layer. Items composite in real-time as selections change, showing how pieces work together visually.</p>

              <h3>Visual Consistency</h3>
              <p>Established style rules for line weight, curve style, and detail level. All sketches follow the same grid for proper alignment, maintaining cohesion across different garment combinations.</p>
            </div>

            {/* 06 DECISIONS */}
            <div className="article-section">
              <span className="step-label">06 — KEY DECISIONS</span>
              <h2>Design choices that defined the experiment</h2>
              
              <h3>Why sketches over realistic renders?</h3>
              <p>Realistic virtual fitting sets expectations for accuracy that's nearly impossible to meet. Users get frustrated when the "perfect" 3D model doesn't match their actual body or when colors look different in real life.</p>
              <p><strong>Decision:</strong> Sketches set a different expectation. They're charming and suggestive. Users understand it's about visual composition, not precise sizing. This reduces disappointment and makes the experience feel more exploratory.</p>

              <h3>Why limited clothing options?</h3>
              <p>This is a proof of concept testing the interaction pattern, not a complete product. Adding 100 items wouldn't validate the core idea any better than 5-6 well-designed ones.</p>
              <p><strong>Decision:</strong> Focused on making a small set of items work beautifully rather than building broad but shallow coverage. Quality over quantity to validate the concept efficiently.</p>

              <h3>Why no measurement input?</h3>
              <p>Asking users for measurements creates friction and raises accuracy expectations. If I'm asking for exact measurements, users expect exact results.</p>
              <p><strong>Decision:</strong> Body type selection is intentionally approximate. It's about visual preference and general silhouette, not precise sizing. Keeps the experience fast and low-pressure.</p>
            </div>

            {/* 07 SOLUTION */}
            <div className="article-section">
              <span className="step-label">07 — SOLUTION</span>
              <h2>What I built</h2>
              
              <h3>Simple Body Selection</h3>
              <p>Users start by choosing from three body types: Straight, Curvy, or Broad. This simplified categorization acknowledges different body shapes without requiring measurements or photos.</p>

              <h3>Apparel Layering</h3>
              <p>Toggle through tops (Shirt, Crop Top, T-shirt) and bottoms (Mini Skirt, Jeans) to build outfits. Each item is a separate sketch layer that composites in real-time on the canvas.</p>

              <h3>Instant Visual Preview</h3>
              <p>The central canvas updates immediately as selections change. Sketches overlay smoothly, showing how items work together compositionally. No loading, no processing—just instant feedback.</p>

              <h3>Technical Implementation</h3>
              <p>Built as a React prototype with SVG-based sketch overlays for clean scaling, component state management for instant updates, and minimal dependencies to keep it lightweight and fast.</p>
            </div>

            {/* 08 IMPACT */}
            <div className="article-section">
              <span className="step-label">08 — IMPACT</span>
              <h2>What this validated</h2>
              <ul>
                <li><strong>Stylized > Realistic:</strong> Users preferred the charming sketch aesthetic over "almost real" renders that felt uncanny</li>
                <li><strong>Speed matters:</strong> Instant visual feedback created a playful, exploratory feel rather than a utilitarian transaction</li>
                <li><strong>Low barriers work:</strong> No setup friction meant users engaged immediately without hesitation</li>
                <li><strong>Different use case:</strong> This isn't for "buying with confidence"—it's for quick visual exploration and inspiration</li>
              </ul>
              <p><strong>Note:</strong> As a concept project, these are qualitative findings from informal user testing, not quantitative metrics from production deployment.</p>
            </div>

            {/* 09 REFLECTION */}
            <div className="article-section">
              <span className="step-label">09 — REFLECTION</span>
              <h2>What I learned</h2>
              <p>This project taught me that <strong>the most technically impressive solution isn't always the most enjoyable to use.</strong> Sometimes simplicity and charm beat accuracy and complexity.</p>
              <p>It also reinforced that <strong>constraints breed creativity.</strong> Limiting to black-and-white sketches forced focus on form and silhouette, which might be more valuable than color when evaluating how pieces work together.</p>
              <p><strong>Biggest insight:</strong> Apparel tech doesn't have to chase photorealism to be useful. There's space for experiences that are delightful, fast, and "good enough" for quick exploration.</p>
              <p>If I were to expand this concept, I'd explore user-uploaded sketches (let people draw their own clothes), social sharing of outfit combinations, and integration with actual e-commerce for seamless purchase after visual exploration.</p>
              <p>Most importantly, this reminded me that <strong>design is about choices.</strong> Choosing to embrace constraints (sketches, limited options) rather than fight them can lead to surprisingly compelling experiences that carve out their own niche.</p>
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
