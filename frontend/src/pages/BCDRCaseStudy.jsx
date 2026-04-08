import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import '../styles/CaseStudyDetail.css';

const BCDRCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/y191dcei_Screen%20Recording%202026-04-08%20at%206.13.33%E2%80%AFAM.mov"
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">🧠 BC/DR Executive Dashboard</h1>
          <p className="project-subtitle">Designing for clarity in high-pressure decision environments</p>

          {/* Bento Grid */}
          <div className="bento-grid">
            
            {/* Overview */}
            <div className="bento-card large">
              <h2>Overview</h2>
              <p>An enterprise analytics interface helping business continuity leaders monitor, analyze, and act on technology and vendor recovery readiness in real time.</p>
              <p>Consolidates fragmented data into a single, decision-first interface enabling executives to quickly assess recovery time risks, dependency gaps, vendor exposure, and plan coverage.</p>
            </div>

            {/* The Idea */}
            <div className="bento-card medium">
              <h2>The Idea</h2>
              <p>Critical BC/DR data existed but not in a way that supported fast decision-making. Data lived across spreadsheets, static reports, and disconnected tools.</p>
              <p className="highlight-text">Transform passive reporting into an active decision system</p>
            </div>

            {/* Problem Framing */}
            <div className="bento-card medium">
              <h2>Problem Framing</h2>
              <p><strong>Core Problem:</strong> Executives lacked a unified, real-time view of recovery readiness.</p>
              <p><strong>Hidden Problem:</strong> Too much information became just as ineffective as no information.</p>
            </div>

            {/* Users */}
            <div className="bento-card tall">
              <h2>Users</h2>
              <ul>
                <li>Chief Risk Officers</li>
                <li>Business Continuity Managers</li>
                <li>Disaster Recovery Leads</li>
                <li>Enterprise Architects</li>
                <li>IT Operations Heads</li>
              </ul>
            </div>

            {/* What We Tested */}
            <div className="bento-card xlarge">
              <h2>What We Tested</h2>
              <div className="experience-grid">
                <div className="exp-item">
                  <h3>User Interviews</h3>
                  <p>Enterprise executives and their workflow walkthroughs</p>
                </div>
                <div className="exp-item">
                  <h3>Key Insight</h3>
                  <p>"This is valuable but in an incident, I don't have time to process all of this."</p>
                </div>
                <div className="exp-item">
                  <h3>Prototype Validation</h3>
                  <p>Tested what users need to see in first 30 seconds</p>
                </div>
              </div>
            </div>

            {/* Iteration Journey */}
            <div className="bento-card large">
              <h2>Iteration Journey</h2>
              <p><strong>Iteration 1:</strong> Maximum visibility with all data upfront</p>
              <p className="highlight-text">Result: Information overload, weak hierarchy</p>
              <p><strong>The Shift:</strong> From data-first design to decision-first design</p>
            </div>

            {/* Core Experience */}
            <div className="bento-card medium">
              <h2>Core Experience</h2>
              <ul>
                <li>Layered navigation (tabs)</li>
                <li>Executive snapshot KPIs</li>
                <li>Visual risk distribution</li>
                <li>Interactive filtering</li>
                <li>Deep dive tables</li>
              </ul>
            </div>

            {/* Design System */}
            <div className="bento-card medium">
              <h2>Design System</h2>
              <p><strong>Principles:</strong> Clarity over density, minimal cognitive load</p>
              <p><strong>Visual:</strong> Enterprise blue, neutral backgrounds, card-based layout, 8px spacing</p>
            </div>

            {/* Why This Works */}
            <div className="bento-card medium">
              <h2>Why This Works</h2>
              <ul>
                <li>Progressive disclosure</li>
                <li>Reduced cognitive load</li>
                <li>Aligned with mental models</li>
                <li>5-10 second critical insights</li>
              </ul>
            </div>

            {/* Impact */}
            <div className="bento-card xlarge">
              <h2>Impact & Metrics</h2>
              <div className="future-columns">
                <div>
                  <h4>Time Savings</h4>
                  <ul>
                    <li>Before: 2-3 days manual reporting</li>
                    <li>After: Real-time insights</li>
                    <li>24+ hours/month saved</li>
                  </ul>
                </div>
                <div>
                  <h4>Business Impact</h4>
                  <ul>
                    <li>$2M+ cost avoidance per incident</li>
                    <li>Audit prep: Weeks to Days</li>
                    <li>Higher exec engagement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Future Scope */}
            <div className="bento-card large">
              <h2>Future Scope</h2>
              <ul>
                <li>Predictive risk scoring</li>
                <li>AI-driven recommendations</li>
                <li>Alert systems for recovery breaches</li>
                <li>Scenario simulation (what-if analysis)</li>
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className="bento-card highlight-card">
              <h2>Key Takeaways</h2>
              <ul className="takeaway-list">
                <li>More data ≠ more value</li>
                <li>Clarity is a feature, not an outcome</li>
                <li>Design must adapt to decision pressure</li>
                <li>Structure is more important than styling</li>
              </ul>
              <p className="final-answer">Started with: "How do I show everything clearly?"<br/><strong>Ended with: "What does someone need to decide right now?"</strong></p>
            </div>

            {/* Reflection */}
            <div className="bento-card medium reflection-card">
              <h2>Reflection</h2>
              <p>Designing for enterprise isn't about complexity. It's about removing just enough of it to make action possible.</p>
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

export default BCDRCaseStudy;
