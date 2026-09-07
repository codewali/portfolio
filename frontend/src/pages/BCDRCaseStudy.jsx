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
          <p className="project-subtitle">Helping business continuity leaders monitor and act on technology and vendor recovery readiness in real time.</p>

          {/* Metrics */}
          <div className="metrics-section">
            <div className="metric-card">
              <div className="metric-value">24+</div>
              <div className="metric-label">Hours/month saved</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">Real-time</div>
              <div className="metric-label">vs 2-3 day reporting lag</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Unified data view</div>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content-compact">
            
            {/* 01 Context & Problem Discovery */}
            <div className="cs-section">
              <h2 className="cs-section-title">Context & Problem Discovery</h2>
              
              <p>BC/DR executives at large enterprises need to assess organizational recovery readiness quickly. They're responsible for resilience during disruptions (outages, cyberattacks, disasters) and report to boards with confidence.</p>

              <p>The problem: Critical data existed but not in a way that supported fast decision-making. Recovery plans, vendor assessments, and system dependencies lived across spreadsheets, static PDFs, and disconnected tools.</p>

              <p><strong>Leaders couldn't quickly answer fundamental questions</strong> like "Which systems are our biggest risk?" or "Do we have plans for everything critical?" Manual report generation took 2-3 days. By the time executives received insights, conditions had changed.</p>
            </div>

            {/* 02 My Role */}
            <div className="cs-section">
              <h2 className="cs-section-title">My Role</h2>
              
              <p>Lead product designer owning end-to-end UX:</p>
              
              <ul className="cs-list-compact">
                <li>Stakeholder interviews with BC/DR executives and analysts</li>
                <li>Information architecture and data hierarchy design</li>
                <li>Interaction patterns for progressive disclosure</li>
                <li>Visual design system for risk communication</li>
                <li>Collaboration with engineering on real-time data integration</li>
              </ul>
            </div>

            {/* 03 Design Approach & Key Decisions */}
            <div className="cs-section">
              <h2 className="cs-section-title">Design Approach & Key Decisions</h2>
              
              <p><strong>Information hierarchy</strong><br/>
              Mapped the decision-making flow of BC/DR executives to create a three-tier hierarchy: at-a-glance health indicators, on-demand filterable views, and deep-dive detailed reports.</p>

              <p><strong>Prioritize trends over raw numbers</strong><br/>
              Stakeholder feedback revealed absolute numbers didn't tell the story. A system with 10 high-risk items today might be improving (was 20 last month) or deteriorating (was 5 last month). Added trend indicators and comparison views to show direction of change.</p>

              <p><strong>Progressive disclosure, not information overload</strong><br/>
              Early prototypes tried to surface all available data upfront. User testing showed this created cognitive overload and actually slowed decision-making. Defaulted to summary view with clear pathways to details. Let users choose their depth of exploration.</p>

              <p><strong>Make vendor dependencies visible</strong><br/>
              Research revealed vendor-related incidents were a growing concern (third-party outages, security breaches), but existing tools didn't make these relationships visible. Created a dedicated vendor exposure view showing which vendors, if disrupted, would impact the most critical systems.</p>
            </div>

            {/* 04 Solution */}
            <div className="cs-section">
              <h2 className="cs-section-title">Solution</h2>
              
              <p><strong>Risk heat map:</strong> Visual matrix showing recovery time objectives vs. actual recovery capability across all critical systems. Instantly highlights which systems are at risk.</p>

              <p><strong>Vendor exposure view:</strong> Shows dependency on third-party vendors with integrated risk assessment. Helps executives understand concentration risk and single points of failure.</p>

              <p><strong>Plan coverage analysis:</strong> Tracks which technologies have documented, tested recovery plans and which don't. Surfaces gaps before they become problems during an incident.</p>

              <p><strong>Real-time updates:</strong> Dashboard refreshes automatically with latest data from integrated systems. No more waiting for weekly or monthly static reports.</p>
            </div>

            {/* 05 Impact */}
            <div className="cs-section">
              <h2 className="cs-section-title">Impact</h2>
              
              <ul className="cs-list-compact">
                <li>24+ hours/month saved in manual report generation across the BC/DR team</li>
                <li>Real-time insights vs. previous 2-3 day reporting lag</li>
                <li>Faster incident response during actual disruptions</li>
                <li>Improved plan coverage: 34% increase in documented recovery plans in first 6 months</li>
              </ul>
            </div>

            {/* 06 What I Learnt */}
            <div className="cs-section cs-section-last">
              <h2 className="cs-section-title">What I Learnt</h2>
              
              <p>Enterprise UX isn't about aesthetics. It's about understanding the actual job to be done and eliminating friction in high-stakes workflows.</p>

              <p>Success came from deeply understanding how BC/DR leaders make decisions under pressure, not from adding more features or data points.</p>

              <p>In crisis-oriented domains, the best interface delivers the answer before the question is fully formed. Every pixel should reduce cognitive load.</p>

              <p><strong>If I did this again:</strong> I'd spend more time observing users during incident response scenarios. Edge cases and real-world constraints that emerge during crises would inform the design earlier.</p>
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
