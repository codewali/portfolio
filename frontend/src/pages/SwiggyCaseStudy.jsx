import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import '../styles/CaseStudyDetail.css';

const SwiggyCaseStudy = () => {
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
          src="https://customer-assets.emergentagent.com/job_portfolio-resume-28/artifacts/c4of3v95_Screen%20Recording%202026-04-30%20at%205.54.19%E2%80%AFPM.mov"
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Behance Link */}
      <div className="behance-link-wrapper">
        <a 
          href="https://www.behance.net/gallery/169000483/Swiggy-Group-Ordering-Case-Study" 
          target="_blank" 
          rel="noopener noreferrer"
          className="behance-link"
        >
          View full case study <ExternalLink size={14} />
        </a>
      </div>

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">Swiggy Group Ordering</h1>
          <p className="project-note">Done prior to Swiggy introducing group ordering</p>
          <p className="project-subtitle">Making coordinated food ordering with friends seamless and delightful.</p>

          {/* Article Content */}
          <div className="article-content-compact">
            
            {/* 01 Context & Problem Discovery */}
            <div className="cs-section">
              <h2 className="cs-section-title">Context & Problem Discovery</h2>
              
              <p>Personal project exploring how food delivery apps could better serve group ordering scenarios: office lunches, friend gatherings, family dinners. These situations happen frequently but existing ordering flows treat them as edge cases.</p>

              <p><strong>The problem:</strong> Ordering food as a group feels like project management.</p>

              <p>Through interviews and observation, I identified recurring pain points:</p>
              
              <ul className="cs-list-compact">
                <li>Screenshot sharing chaos across WhatsApp, Slack, text threads</li>
                <li>Coordination confusion: not knowing who ordered what or if the cart is final</li>
                <li>Payment hassle: chasing people for money after delivery</li>
                <li>Timing mismatches: some people ready immediately, others still browsing 30 minutes later</li>
                <li>No shared cart visibility</li>
              </ul>
            </div>

            {/* 02 My Role */}
            <div className="cs-section">
              <h2 className="cs-section-title">My Role</h2>
              
              <p>Solo personal project handling all aspects:</p>
              
              <ul className="cs-list-compact">
                <li>User research through interviews and observational studies</li>
                <li>Competitive analysis of existing group ordering features</li>
                <li>Information architecture and user flow design</li>
                <li>Interaction design and prototyping</li>
                <li>Visual design maintaining Swiggy's brand system</li>
              </ul>
            </div>

            {/* 03 Design Approach & Key Decisions */}
            <div className="cs-section">
              <h2 className="cs-section-title">Design Approach & Key Decisions</h2>
              
              <p><strong>Map the natural flow</strong><br/>
              Designed the experience to mirror how groups actually decide what to eat: initiation (one person suggests), browsing (everyone explores independently), selection (add items with clear ownership), review (see totals), checkout (each pays individually).</p>

              <p><strong>Individual payment, not group payment</strong><br/>
              Initial designs had one person pay upfront and others reimburse later. This came up repeatedly in research as the biggest friction point. Built individual payment directly into checkout. Order is placed when everyone has paid. Eliminates post-delivery money collection entirely.</p>

              <p><strong>Shareable links over in-app invites</strong><br/>
              In-app invites would require everyone to have Swiggy installed and be logged in before joining. Web-based shareable links let anyone join, creating an account only at checkout if needed. Lower barrier to entry.</p>

              <p><strong>Individual item ownership</strong><br/>
              Early concepts had a single shared cart where anyone could edit anything. User testing revealed this created anxiety ("What if someone accidentally deletes my order?"). Each person owns their items and can only edit their own. Clear visual attribution (color-coded names) shows who ordered what.</p>
            </div>

            {/* 04 Solution */}
            <div className="cs-section">
              <h2 className="cs-section-title">Solution</h2>
              
              <p><strong>Create or join group orders:</strong> Host selects restaurant and creates group order. Generates shareable link friends can join instantly.</p>

              <p><strong>Real-time cart visibility:</strong> All participants see shared cart updating in real-time. Clear attribution shows who ordered what. Status badges indicate who's browsing, who's ready, who's paid.</p>

              <p><strong>Individual item ownership:</strong> Each person owns and controls only their items. No one can accidentally delete someone else's order.</p>

              <p><strong>Automatic payment splitting:</strong> At checkout, each person pays only for their items through integrated UPI or card. No manual calculations, no post-delivery collection.</p>

              <p><strong>Group order tracking:</strong> Everyone gets real-time updates on order status. No more "where's the food?" messages flooding the organizer.</p>
            </div>

            {/* 05 Impact */}
            <div className="cs-section">
              <h2 className="cs-section-title">Impact</h2>
              
              <p>As a concept project, these are expected outcomes based on research and usability testing:</p>
              
              <ul className="cs-list-compact">
                <li>Eliminates coordination friction: no more message chains or "did you order yet?" loops</li>
                <li>Clear ownership: everyone knows their items and costs upfront</li>
                <li>No payment collection hassle</li>
                <li>Real-time transparency lets everyone make informed decisions</li>
              </ul>

              <p>Swiggy has since introduced their own group ordering feature, validating the problem space.</p>
            </div>

            {/* 06 What I Learnt */}
            <div className="cs-section cs-section-last">
              <h2 className="cs-section-title">What I Learnt</h2>
              
              <p>Group ordering isn't just about food. It's about coordination, trust, and shared experiences.</p>

              <p>The design decisions that had the biggest impact weren't flashy. They were small details: real-time updates, individual payment, clear ownership indicators. These removed friction points users had learned to accept as "just how it is."</p>

              <p>Good UX research doesn't require a big budget. Just curiosity and access to people experiencing the problem. Observing a single office lunch coordination revealed more insights than any survey could.</p>
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

export default SwiggyCaseStudy;
