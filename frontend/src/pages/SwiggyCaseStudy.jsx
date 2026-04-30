import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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

      {/* Content */}
      <section className="detail-content">
        <div className="content-container">
          
          <h1 className="project-title">🍔 Swiggy Group Ordering</h1>
          <p className="project-subtitle">Making coordinated food ordering with friends seamless and delightful</p>

          {/* Bento Grid */}
          <div className="bento-grid">
            
            {/* Overview */}
            <div className="bento-card large">
              <h2>Overview</h2>
              <p>A redesigned group ordering experience for Swiggy that simplifies coordinating meals with friends and colleagues. The project tackles the chaos of multi-person ordering by introducing clear workflows, real-time coordination, and transparent payment splitting.</p>
            </div>

            {/* The Problem */}
            <div className="bento-card medium">
              <h2>The Problem</h2>
              <p>Ordering food as a group is chaotic. People struggle with coordination, payment splitting, and order tracking across multiple apps and messages.</p>
              <p className="highlight-text">How might we make group ordering feel effortless?</p>
            </div>

            {/* Target Users */}
            <div className="bento-card medium">
              <h2>Target Users</h2>
              <ul>
                <li>Office colleagues ordering lunch together</li>
                <li>Friend groups planning meals</li>
                <li>Families coordinating dinner orders</li>
                <li>Event organizers managing group meals</li>
              </ul>
            </div>

            {/* User Pain Points */}
            <div className="bento-card tall">
              <h2>User Pain Points</h2>
              <ul>
                <li>Screenshot sharing back and forth</li>
                <li>Confusion over who ordered what</li>
                <li>Payment collection hassle</li>
                <li>Order timing mismatches</li>
                <li>No visibility into cart status</li>
              </ul>
            </div>

            {/* Design Goals */}
            <div className="bento-card xlarge">
              <h2>Design Goals</h2>
              <div className="experience-grid">
                <div className="exp-item">
                  <h3>1. Clear Coordination</h3>
                  <p>Everyone knows who's adding what in real-time</p>
                </div>
                <div className="exp-item">
                  <h3>2. Transparent Costs</h3>
                  <p>Individual totals visible before checkout</p>
                </div>
                <div className="exp-item">
                  <h3>3. Easy Payment</h3>
                  <p>Integrated split payment without external apps</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bento-card large">
              <h2>Key Features</h2>
              <ul>
                <li>Create or join group orders with shareable links</li>
                <li>Real-time cart visibility for all participants</li>
                <li>Individual item ownership and editing</li>
                <li>Automatic payment splitting with UPI integration</li>
                <li>Order status tracking for the entire group</li>
              </ul>
            </div>

            {/* Design Approach */}
            <div className="bento-card medium">
              <h2>Design Approach</h2>
              <p>Started with competitive analysis of existing group ordering flows. Conducted user interviews to understand pain points. Iterated on prototypes focusing on clarity and speed.</p>
            </div>

            {/* Why This Works */}
            <div className="bento-card medium">
              <h2>Why This Works</h2>
              <ul>
                <li>Reduces coordination friction</li>
                <li>Clear ownership of items</li>
                <li>No payment collection hassle</li>
                <li>Real-time transparency</li>
              </ul>
            </div>

            {/* Interaction Flow */}
            <div className="bento-card xlarge">
              <h2>Interaction Flow</h2>
              <div className="future-columns">
                <div>
                  <h4>Creating a Group</h4>
                  <ul>
                    <li>Host selects restaurant</li>
                    <li>Creates group order</li>
                    <li>Shares link with friends</li>
                  </ul>
                </div>
                <div>
                  <h4>Joining & Ordering</h4>
                  <ul>
                    <li>Friends join via link</li>
                    <li>Add items to shared cart</li>
                    <li>View individual costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Design System */}
            <div className="bento-card medium">
              <h2>Design System</h2>
              <p>Maintained Swiggy's brand colors (orange accent) while introducing clear visual hierarchy for group elements. Used color-coding for different participants and status indicators.</p>
            </div>

            {/* Key Takeaways */}
            <div className="bento-card highlight-card">
              <h2>Key Takeaways</h2>
              <ul className="takeaway-list">
                <li>Social features need real-time feedback</li>
                <li>Transparency reduces anxiety in shared experiences</li>
                <li>Good UX removes need for external coordination</li>
                <li>Mobile-first design is crucial for food ordering</li>
              </ul>
              <p className="final-answer">Group ordering shouldn't feel like project management.<br/><strong>It should feel like ordering for yourself, just with friends.</strong></p>
            </div>

            {/* Reflection */}
            <div className="bento-card large reflection-card">
              <h2>Reflection</h2>
              <p>This redesign concept shows how thoughtful UX can transform a frustrating social experience into something seamless. The key was understanding that group ordering isn't just about food, it's about coordination, trust, and shared experiences.</p>
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
