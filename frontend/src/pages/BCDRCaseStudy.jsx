import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/CaseStudyDetail.css';

const BCDRCaseStudy = () => {
  const navigate = useNavigate();

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollTo: 'work' } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
          
          <h1 className="project-title">BC/DR Executive Dashboard</h1>
          <p className="project-subtitle">An enterprise analytics interface helping business continuity leaders monitor and act on technology and vendor recovery readiness in real time.</p>

          {/* Metrics */}
          <div className="metrics-section">
            <div className="metric-card">
              <div className="metric-value">24+</div>
              <div className="metric-label">Hours/month saved in report generation</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">Real-time</div>
              <div className="metric-label">Insights vs 2-3 day reporting lag</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Unified data view across systems</div>
            </div>
          </div>

          {/* Article Content - 9 Step Structure */}
          <div className="article-content">
            
            {/* 01 CONTEXT */}
            <div className="article-section">
              <span className="step-label">01 — CONTEXT</span>
              <h2>Who needs this and why it matters</h2>
              <p>The dashboard serves C-level executives and business continuity leaders in large enterprises operating under strict compliance and risk management requirements. These users are responsible for organizational resilience during disruptions—outages, cyberattacks, natural disasters.</p>
              <p>They need to:</p>
              <ul>
                <li>Assess organizational recovery readiness at a glance</li>
                <li>Identify high-risk technologies and vendors quickly</li>
                <li>Make informed decisions about resource allocation</li>
                <li>Report to boards and stakeholders with confidence</li>
              </ul>
              <p>These users operate in high-pressure environments where speed and accuracy aren't nice-to-haves—they're critical. They don't have time to sift through raw data or wait days for reports.</p>
            </div>

            {/* 02 PROBLEM */}
            <div className="article-section">
              <span className="step-label">02 — PROBLEM</span>
              <h2>What wasn't working</h2>
              <p>Critical BC/DR data existed but not in a way that supported fast decision-making. Recovery plans, vendor assessments, and system dependencies lived across spreadsheets, static PDFs, and disconnected tools. Executives had data but no clarity.</p>
              <p><strong>The core problem:</strong> Leaders lacked a unified, real-time view of recovery readiness. They couldn't quickly answer fundamental questions like "Which systems are our biggest risk?" or "Do we have plans for everything critical?"</p>
              <p>Manual report generation took 2-3 days. By the time executives received insights, conditions had changed. This created reactive decision-making in a domain that demands proactive risk management.</p>
            </div>

            {/* 03 ROLE */}
            <div className="article-section">
              <span className="step-label">03 — ROLE</span>
              <h2>My contribution</h2>
              <p>As the lead product designer on this project, I owned the end-to-end UX from research through final implementation. This included:</p>
              <ul>
                <li>Stakeholder interviews with BC/DR executives and analysts</li>
                <li>Information architecture and data hierarchy design</li>
                <li>Interaction patterns for progressive disclosure</li>
                <li>Visual design system for risk communication</li>
                <li>Close collaboration with engineering on real-time data integration</li>
              </ul>
              <p>I worked directly with the product manager and engineering lead to balance user needs with technical constraints, ensuring we built something both powerful and feasible.</p>
            </div>

            {/* 04 INSIGHT */}
            <div className="highlight-box">
              <span className="step-label">04 — KEY INSIGHT</span>
              <p><strong>In crisis-oriented domains like BC/DR, the design needs to get out of the way.</strong> The best interface is the one that delivers the answer before the question is fully formed. Users don't want dashboards—they want decisions.</p>
            </div>

            {/* 05 APPROACH */}
            <div className="article-section">
              <span className="step-label">05 — APPROACH</span>
              <h2>How I designed the solution</h2>
              
              <h3>Information Hierarchy</h3>
              <p>Started by mapping the decision-making flow of BC/DR executives. What do they need to know first? What prompts action? This led to a three-tier hierarchy:</p>
              <ul>
                <li><strong>At-a-glance:</strong> High-level health indicators (green/yellow/red status)</li>
                <li><strong>On-demand:</strong> Filterable data views for specific risk categories</li>
                <li><strong>Deep dive:</strong> Detailed vendor/technology reports for investigation</li>
              </ul>

              <h3>Visual Language</h3>
              <p>Used color coding to indicate risk levels but avoided alarm fatigue by showing ratios and trends, not just raw counts of issues. Designed data visualizations that answered questions directly rather than requiring interpretation.</p>
              <p>Example: Instead of "327 technologies," show "18% high-risk, trending down from last quarter."</p>

              <h3>Interaction Patterns</h3>
              <p>Implemented progressive disclosure. Users see summary cards first, then can drill down into details through inline expansion or modal views. Every interaction was designed to maintain context and allow quick return to overview.</p>
            </div>

            {/* 06 DECISIONS */}
            <div className="article-section">
              <span className="step-label">06 — KEY DECISIONS</span>
              <h2>Design choices that shaped the outcome</h2>
              
              <h3>Why prioritize trends over raw numbers?</h3>
              <p>Stakeholder feedback revealed that absolute numbers didn't tell the story. A system with 10 high-risk items today might be improving (was 20 last month) or deteriorating (was 5 last month). Context matters.</p>
              <p><strong>Decision:</strong> Added trend indicators and comparison views to show direction of change, not just current state.</p>

              <h3>Why not show everything at once?</h3>
              <p>Early prototypes tried to surface all available data upfront. User testing showed this created cognitive overload and actually slowed decision-making. More information ≠ better decisions.</p>
              <p><strong>Decision:</strong> Default to summary view with clear pathways to details. Let users choose their depth of exploration based on their specific need in that moment.</p>

              <h3>Why emphasize vendor dependencies?</h3>
              <p>Research and stakeholder interviews revealed that vendor-related incidents were a growing concern (third-party outages, security breaches), but existing tools didn't make these relationships visible.</p>
              <p><strong>Decision:</strong> Created a dedicated vendor exposure view that maps all dependencies and exposes concentration risks—showing which vendors, if disrupted, would impact the most critical systems.</p>
            </div>

            {/* 07 SOLUTION */}
            <div className="article-section">
              <span className="step-label">07 — SOLUTION</span>
              <h2>What we built</h2>
              
              <h3>Risk Heat Map</h3>
              <p>Visual matrix showing recovery time objectives (RTO) vs. actual recovery capability across all critical systems. Instantly highlights which systems are at risk of missing their recovery targets.</p>

              <h3>Vendor Exposure View</h3>
              <p>Shows dependency on third-party vendors with integrated risk assessment. Helps executives understand concentration risk and single points of failure across their technology stack.</p>

              <h3>Plan Coverage Analysis</h3>
              <p>Tracks which technologies have documented, tested recovery plans and which don't. Surfaces gaps in coverage before they become problems during an actual incident.</p>

              <h3>Real-time Updates</h3>
              <p>Dashboard refreshes automatically with latest data from integrated systems (asset management, vendor databases, plan repositories). No more waiting for weekly or monthly static reports.</p>
            </div>

            {/* 08 IMPACT */}
            <div className="article-section">
              <span className="step-label">08 — IMPACT</span>
              <h2>Results and outcomes</h2>
              <ul>
                <li><strong>24+ hours/month saved</strong> in manual report generation and data gathering across the BC/DR team</li>
                <li><strong>Real-time insights</strong> vs. previous 2-3 day reporting lag—enabling proactive rather than reactive risk management</li>
                <li><strong>Faster incident response</strong> during actual disruptions due to immediate visibility into recovery readiness</li>
                <li><strong>Better stakeholder communication</strong> with visual, easy-to-understand reports for board presentations</li>
                <li><strong>Improved plan coverage</strong> by making gaps visible and trackable, increasing documented recovery plans by 34% in first 6 months</li>
              </ul>
            </div>

            {/* 09 REFLECTION */}
            <div className="article-section">
              <span className="step-label">09 — REFLECTION</span>
              <h2>What I learned</h2>
              <p>This project reinforced that enterprise UX isn't just about making things aesthetically pleasing—it's about understanding the actual job to be done and eliminating friction in high-stakes workflows.</p>
              <p>The success came from deeply understanding how BC/DR leaders make decisions under pressure and designing the interface to support that cognitive process, not from adding more features or data points.</p>
              <p><strong>If I were to do it again:</strong> I'd spend even more time observing users in their actual work environment, especially during incident response scenarios. The edge cases and real-world constraints that emerge during crises would have informed the design earlier and more thoroughly.</p>
              <p>This experience also taught me the value of designing for "glanceability" in executive-level tools. Every pixel should reduce cognitive load, not add to it.</p>
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

export default BCDRCaseStudy;
