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
          
          <h1 className="project-title">🧠 BC/DR Executive Dashboard</h1>
          <p className="project-subtitle">Designing for clarity in high-pressure decision environments</p>

          {/* Metrics Section - Always at top */}
          <div className="metrics-section">
            <div className="metric-card">
              <div className="metric-value">24+</div>
              <div className="metric-label">Hours/month saved</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">Real-time</div>
              <div className="metric-label">Insights vs 2-3 day reports</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Unified data view</div>
            </div>
          </div>

          {/* Key Cards */}
          <div className="key-cards-section">
            <div className="key-card">
              <h2>Overview</h2>
              <p>An enterprise analytics interface helping business continuity leaders monitor, analyze, and act on technology and vendor recovery readiness in real time.</p>
              <p>Consolidates fragmented data into a single, decision-first interface enabling executives to quickly assess recovery time risks, dependency gaps, vendor exposure, and plan coverage.</p>
            </div>
            
            <div className="key-card">
              <h2>The Problem</h2>
              <p>Critical BC/DR data existed but not in a way that supported fast decision-making. Data lived across spreadsheets, static reports, and disconnected tools.</p>
              <p><strong>Core Problem:</strong> Executives lacked a unified, real-time view of recovery readiness.</p>
            </div>

            <div className="key-card">
              <h2>The Idea</h2>
              <p><strong>Transform passive reporting into an active decision system</strong></p>
              <p>Create a unified dashboard that surfaces actionable insights, highlights risks immediately, and enables executives to drill down only when needed.</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content">
            <div className="article-section">
              <h2>Users & Context</h2>
              <p>The dashboard serves C-level executives and business continuity leaders who need to:</p>
              <ul>
                <li>Assess organizational recovery readiness at a glance</li>
                <li>Identify high-risk technologies and vendors</li>
                <li>Make informed decisions about resource allocation</li>
                <li>Report to boards and stakeholders with confidence</li>
              </ul>
              <p>These users operate in high-pressure environments where speed and accuracy are critical. They don't have time to sift through raw data or wait for reports.</p>
            </div>

            <div className="article-section">
              <h2>Design Approach</h2>
              <h3>1. Information Hierarchy</h3>
              <p>Started by mapping the decision-making flow of BC/DR executives. What do they need to know first? What prompts action?</p>
              <p>Designed a three-tier hierarchy:</p>
              <ul>
                <li><strong>At-a-glance:</strong> High-level health indicators</li>
                <li><strong>On-demand:</strong> Filterable data views</li>
                <li><strong>Deep dive:</strong> Detailed vendor/technology reports</li>
              </ul>

              <h3>2. Visual Language</h3>
              <p>Used color coding to indicate risk levels (green/yellow/red) but avoided alarm fatigue by showing ratios and trends, not just raw counts.</p>
              <p>Designed data visualizations that answered questions directly rather than requiring interpretation.</p>

              <h3>3. Interaction Patterns</h3>
              <p>Implemented progressive disclosure. Users see summary cards first, then can drill down into details through inline expansion or modal views.</p>
              <p>Every interaction was designed to maintain context and allow quick return to the overview.</p>
            </div>

            <div className="article-section">
              <h2>Key Features</h2>
              
              <h3>Risk Heat Map</h3>
              <p>Visual matrix showing recovery time objectives (RTO) vs. actual recovery capability across all critical systems. Instantly highlights which systems are at risk.</p>

              <h3>Vendor Exposure View</h3>
              <p>Shows dependency on third-party vendors with risk assessment. Helps executives understand concentration risk and single points of failure.</p>

              <h3>Plan Coverage Analysis</h3>
              <p>Tracks which technologies have documented recovery plans and which don't. Surfaces gaps in coverage before they become problems.</p>

              <h3>Real-time Updates</h3>
              <p>Dashboard refreshes automatically with latest data from integrated systems. No more waiting for weekly or monthly reports.</p>
            </div>

            <div className="article-section">
              <h2>Design Decisions</h2>
              
              <h3>Why prioritize trends over raw numbers?</h3>
              <p>Stakeholders feedback revealed that absolute numbers didn't tell the story. A system with 10 high-risk items today might be improving (was 20 last month) or deteriorating (was 5 last month).</p>
              <p>Solution: Added trend indicators and comparison views to show direction of change.</p>

              <h3>Why not show everything at once?</h3>
              <p>Early prototypes tried to surface all available data. User testing showed this created cognitive overload and actually slowed decision-making.</p>
              <p>Solution: Default to summary view with clear pathways to details. Let users choose their depth of exploration.</p>

              <h3>Why emphasize vendor dependencies?</h3>
              <p>Research and stakeholder interviews revealed that vendor-related incidents were a growing concern, but existing tools didn't make these relationships visible.</p>
              <p>Solution: Created a dedicated vendor view that maps all dependencies and exposes concentration risks.</p>
            </div>

            <div className="article-section">
              <h2>Challenges & Solutions</h2>
              
              <h3>Challenge: Data Quality Inconsistency</h3>
              <p>The dashboard aggregated data from multiple sources with varying levels of completeness and accuracy.</p>
              <p><strong>Solution:</strong> Added confidence indicators and data freshness timestamps. Made it clear when data might be stale or incomplete rather than hiding the problem.</p>

              <h3>Challenge: Balancing Detail vs. Simplicity</h3>
              <p>Power users wanted every possible filter and view. Executive users wanted simplicity.</p>
              <p><strong>Solution:</strong> Created role-based views. Executives see curated summaries by default. Analysts can access advanced filtering and customization.</p>

              <h3>Challenge: Mobile Access</h3>
              <p>Stakeholders needed to check status during travel or emergencies.</p>
              <p><strong>Solution:</strong> Designed responsive layouts that prioritize the most critical information on smaller screens. Full functionality available on desktop.</p>
            </div>

            <div className="highlight-box">
              <p><strong>Key Insight:</strong> In crisis-oriented domains like BC/DR, the design needs to get out of the way. The best interface is the one that delivers the answer before the question is fully formed.</p>
            </div>

            <div className="article-section">
              <h2>Impact & Results</h2>
              <ul>
                <li><strong>24+ hours/month</strong> saved in report generation and data gathering</li>
                <li><strong>Real-time insights</strong> vs. 2-3 day reporting lag</li>
                <li><strong>Faster incident response</strong> due to immediate visibility into recovery readiness</li>
                <li><strong>Better stakeholder communication</strong> with visual, easy-to-understand reports</li>
                <li><strong>Improved plan coverage</strong> by making gaps visible and trackable</li>
              </ul>
            </div>

            <div className="article-section">
              <h2>Reflection</h2>
              <p>This project reinforced that enterprise UX isn't just about making things pretty — it's about understanding the actual job to be done and eliminating friction in high-stakes workflows.</p>
              <p>The success came from deeply understanding how BC/DR leaders make decisions and designing the interface to support that process, not from adding more features or data points.</p>
              <p>If I were to do it again, I'd spend even more time observing users in their actual work environment to catch edge cases and real-world constraints earlier in the design process.</p>
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
