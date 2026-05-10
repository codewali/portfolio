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
          
          <h1 className="project-title">🍔 Swiggy Group Ordering</h1>
          <p className="project-note">Done prior to Swiggy introducing group ordering</p>
          <p className="project-subtitle">Making coordinated food ordering with friends seamless and delightful</p>

          {/* Key Cards */}
          <div className="key-cards-section">
            <div className="key-card">
              <h2>Overview</h2>
              <p>A redesigned group ordering experience for Swiggy that simplifies coordinating meals with friends and colleagues. The project tackles the chaos of multi-person ordering by introducing clear workflows, real-time coordination, and transparent payment splitting.</p>
            </div>
            
            <div className="key-card">
              <h2>The Problem</h2>
              <p>Ordering food as a group is chaotic. People struggle with coordination, payment splitting, and order tracking across multiple apps and messages.</p>
              <p><strong>How might we make group ordering feel effortless?</strong></p>
            </div>

            <div className="key-card">
              <h2>The Idea</h2>
              <p>Transform the fragmented, frustrating group ordering experience into a seamless social flow that feels natural and reduces friction at every step.</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content">
            <div className="article-section">
              <h2>User Research</h2>
              <p>Through interviews with frequent group order coordinators and observation of real ordering sessions, I identified key pain points:</p>
              <ul>
                <li><strong>Screenshot sharing chaos:</strong> People sending menu screenshots back and forth</li>
                <li><strong>Coordination confusion:</strong> Not knowing who ordered what or if the cart is final</li>
                <li><strong>Payment hassle:</strong> Chasing people for money after delivery</li>
                <li><strong>Timing mismatches:</strong> Some people ready to order, others still browsing</li>
                <li><strong>No shared visibility:</strong> Cart status hidden from participants</li>
              </ul>
            </div>

            <div className="article-section">
              <h2>Target Users</h2>
              <p>The redesign focuses on three primary personas:</p>
              <ul>
                <li><strong>Office colleagues</strong> ordering lunch together (most frequent use case)</li>
                <li><strong>Friend groups</strong> planning meals or parties</li>
                <li><strong>Families</strong> coordinating dinner orders</li>
              </ul>
              <p>What they all have in common: they want the social aspect without the logistical nightmare.</p>
            </div>

            <div className="article-section">
              <h2>Design Goals</h2>
              
              <h3>1. Clear Coordination</h3>
              <p>Everyone in the group should know who's adding what in real-time. No more "did you order yet?" messages.</p>

              <h3>2. Transparent Costs</h3>
              <p>Individual totals should be visible before checkout so there are no surprises or awkward conversations about money.</p>

              <h3>3. Easy Payment</h3>
              <p>Integrated split payment without external apps or manual money transfers. Each person pays their own share directly.</p>
            </div>

            <div className="article-section">
              <h2>Key Features</h2>
              
              <h3>Create or Join Group Orders</h3>
              <p>Host selects a restaurant and creates a group order. Shareable link lets friends join instantly without app friction.</p>

              <h3>Real-time Cart Visibility</h3>
              <p>All participants see the shared cart updating in real-time. Clear attribution shows who ordered what.</p>

              <h3>Individual Item Ownership</h3>
              <p>Each person owns their items and can edit or remove them. No one can accidentally delete someone else's order.</p>

              <h3>Automatic Payment Splitting</h3>
              <p>At checkout, each person pays only for their items through integrated UPI. No manual calculations or post-delivery collections.</p>

              <h3>Order Status Tracking</h3>
              <p>Everyone in the group gets updates on order status. No more "where's the food?" messages to the organizer.</p>
            </div>

            <div className="article-section">
              <h2>Design Approach</h2>
              
              <h3>Competitive Analysis</h3>
              <p>Analyzed existing group ordering solutions from Zomato, DoorDash, and others. Found that most either:</p>
              <ul>
                <li>Require one person to pay upfront (creates friction)</li>
                <li>Don't provide real-time visibility (coordination problems persist)</li>
                <li>Have complex, unfamiliar workflows (adoption barrier)</li>
              </ul>

              <h3>Information Architecture</h3>
              <p>Designed the flow to mirror natural group decision-making:</p>
              <ul>
                <li><strong>Initiation:</strong> One person starts, invites others</li>
                <li><strong>Browsing:</strong> Everyone explores menu independently</li>
                <li><strong>Selection:</strong> Add items to shared cart with clear ownership</li>
                <li><strong>Review:</strong> See totals before committing</li>
                <li><strong>Checkout:</strong> Each pays individually, order submitted when all done</li>
              </ul>

              <h3>Visual Design</h3>
              <p>Maintained Swiggy's brand colors (orange accent) while introducing clear visual hierarchy for group elements:</p>
              <ul>
                <li>Color-coded participant avatars</li>
                <li>Status indicators (browsing, added items, paid)</li>
                <li>Clear visual separation between "your items" and "group cart"</li>
              </ul>
            </div>

            <div className="article-section">
              <h2>Design Decisions</h2>
              
              <h3>Why individual payment over group payment?</h3>
              <p>Initial designs had one person pay and others reimburse. This pattern came up repeatedly in research as the biggest friction point.</p>
              <p><strong>Solution:</strong> Built individual payment into the checkout flow. Each person enters their payment info and the order is placed when everyone has paid.</p>

              <h3>Why shareable links over in-app invites?</h3>
              <p>In-app invites would require everyone to have Swiggy installed and be logged in before joining.</p>
              <p><strong>Solution:</strong> Used web-based shareable links. Anyone can join via the link, creating an account only at checkout if needed.</p>
            </div>

            <div className="highlight-box">
              <p><strong>Key Insight:</strong> Group ordering shouldn't feel like project management. It should feel like ordering for yourself, just with friends.</p>
            </div>

            <div className="article-section">
              <h2>Why This Works</h2>
              <ul>
                <li><strong>Reduces coordination friction:</strong> No more message chains or screenshot spam</li>
                <li><strong>Clear ownership:</strong> Everyone knows their items and costs</li>
                <li><strong>No payment collection hassle:</strong> Individual payment eliminates post-order awkwardness</li>
                <li><strong>Real-time transparency:</strong> Everyone sees cart status and can make informed decisions</li>
                <li><strong>Mobile-first design:</strong> Optimized for the phone-based ordering context</li>
              </ul>
            </div>

            <div className="article-section">
              <h2>Reflection</h2>
              <p>This redesign concept shows how thoughtful UX can transform a frustrating social experience into something seamless. The key was understanding that group ordering isn't just about food — it's about coordination, trust, and shared experiences.</p>
              <p>The design decisions that had the biggest impact weren't the flashy ones. They were the small details: real-time updates, individual payment, clear ownership indicators. These removed friction points that users had learned to accept as "just how it is."</p>
              <p>If I were to iterate further, I'd explore how to make the experience even more social — perhaps adding reactions, comments, or gamification elements that make group ordering feel more like a shared activity than a transaction.</p>
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
