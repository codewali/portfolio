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
          <p className="project-subtitle">A redesigned group ordering experience that simplifies coordinating meals with friends and colleagues, reducing friction at every step.</p>

          {/* Article Content - 9 Step Structure */}
          <div className="article-content">
            
            {/* 01 CONTEXT */}
            <div className="article-section">
              <span className="step-label">01 — CONTEXT</span>
              <h2>The group ordering problem space</h2>
              <p>This is a personal project exploring how food delivery apps could better serve group ordering scenarios—office lunches, friend gatherings, family dinners. These situations happen frequently but existing ordering flows treat them as edge cases.</p>
              <p>The redesign focuses on three primary personas:</p>
              <ul>
                <li><strong>Office colleagues</strong> ordering lunch together (most frequent use case—happens daily in corporate environments)</li>
                <li><strong>Friend groups</strong> planning meals for parties or hangouts</li>
                <li><strong>Families</strong> coordinating dinner orders when everyone wants something different</li>
              </ul>
              <p>What they all have in common: they want the social aspect without the logistical nightmare. The coordination shouldn't be harder than the meal itself.</p>
            </div>

            {/* 02 PROBLEM */}
            <div className="article-section">
              <span className="step-label">02 — PROBLEM</span>
              <h2>What makes group ordering frustrating</h2>
              <p>Through interviews with frequent group order coordinators and observation of real ordering sessions, I identified recurring pain points:</p>
              <ul>
                <li><strong>Screenshot sharing chaos:</strong> People sending menu screenshots back and forth across WhatsApp, Slack, text threads</li>
                <li><strong>Coordination confusion:</strong> Not knowing who ordered what or if the cart is final—"Did you order yet?" asked 17 times</li>
                <li><strong>Payment hassle:</strong> Chasing people for money after delivery, awkward Venmo requests, fronting money you'll never see again</li>
                <li><strong>Timing mismatches:</strong> Some people ready to order immediately, others still browsing 30 minutes later, group stuck waiting</li>
                <li><strong>No shared visibility:</strong> Cart status hidden from participants, changes happen without anyone knowing</li>
              </ul>
              <p><strong>Core problem:</strong> Ordering food as a group feels like project management. It shouldn't.</p>
            </div>

            {/* 03 ROLE */}
            <div className="article-section">
              <span className="step-label">03 — ROLE</span>
              <h2>My contribution</h2>
              <p>This is a solo personal project where I handled all aspects:</p>
              <ul>
                <li>User research through interviews and observational studies</li>
                <li>Competitive analysis of existing group ordering features</li>
                <li>Information architecture and user flow design</li>
                <li>Interaction design and prototyping</li>
                <li>Visual design maintaining Swiggy's brand system</li>
              </ul>
              <p>The goal was to demonstrate how thoughtful UX could transform a frustrating social experience into something seamless—without requiring massive technical infrastructure changes.</p>
            </div>

            {/* 04 INSIGHT */}
            <div className="highlight-box">
              <span className="step-label">04 — KEY INSIGHT</span>
              <p><strong>Group ordering shouldn't feel like project management. It should feel like ordering for yourself, just with friends.</strong> The moment coordination becomes work, the social aspect dies. Remove the friction, preserve the fun.</p>
            </div>

            {/* 05 APPROACH */}
            <div className="article-section">
              <span className="step-label">05 — APPROACH</span>
              <h2>Design strategy</h2>
              
              <h3>Map the Natural Flow</h3>
              <p>Designed the experience to mirror how groups actually decide what to eat in real life:</p>
              <ul>
                <li><strong>Initiation:</strong> One person suggests a restaurant, invites others</li>
                <li><strong>Browsing:</strong> Everyone explores menu independently, at their own pace</li>
                <li><strong>Selection:</strong> Add items to shared cart with clear ownership ("Sarah's Margherita Pizza")</li>
                <li><strong>Review:</strong> See individual and group totals before committing—no surprises</li>
                <li><strong>Checkout:</strong> Each person pays for their own items; order submitted when everyone's done</li>
              </ul>

              <h3>Real-time Transparency</h3>
              <p>Every participant sees the shared cart updating in real-time. Clear attribution shows who ordered what. Status indicators reveal who's browsing, who's added items, who's paid. No more guessing or repeated check-ins.</p>

              <h3>Reduce Cognitive Load</h3>
              <p>The interface does the coordination work so users don't have to think about it. Automatic payment splitting, automatic order consolidation, automatic status tracking. Users focus on food, not logistics.</p>
            </div>

            {/* 06 DECISIONS */}
            <div className="article-section">
              <span className="step-label">06 — KEY DECISIONS</span>
              <h2>Design choices that shaped the experience</h2>
              
              <h3>Why individual payment over group payment?</h3>
              <p>Initial designs had one person pay upfront and others reimburse later. This pattern came up repeatedly in research as the biggest friction point—people forget, feel awkward asking, or avoid coordinating groups entirely because of it.</p>
              <p><strong>Decision:</strong> Built individual payment directly into checkout. Each person enters their payment info; order is placed when everyone has paid. Eliminates post-delivery money collection entirely.</p>

              <h3>Why shareable links over in-app invites?</h3>
              <p>In-app invites would require everyone to have Swiggy installed and be logged in before joining. This creates adoption friction—some people might not have the app, or not want to install it for one meal.</p>
              <p><strong>Decision:</strong> Web-based shareable links. Anyone can join via the link, creating an account only at checkout if needed. Lower barrier to entry = more successful group orders.</p>

              <h3>Why individual item ownership?</h3>
              <p>Early concepts had a single shared cart where anyone could edit anything. User testing revealed this created anxiety—"What if someone accidentally deletes my order?" and confusion—"Who added 5 garlic naans?"</p>
              <p><strong>Decision:</strong> Each person owns their items and can only edit/remove their own. Clear visual attribution (color-coded names, avatars) shows who ordered what. Reduces mistakes and increases trust.</p>
            </div>

            {/* 07 SOLUTION */}
            <div className="article-section">
              <span className="step-label">07 — SOLUTION</span>
              <h2>Key features in the redesign</h2>
              
              <h3>Create or Join Group Orders</h3>
              <p>Host selects a restaurant and creates a group order. Generates a shareable link that friends can join instantly—no app installation required until checkout.</p>

              <h3>Real-time Cart Visibility</h3>
              <p>All participants see the shared cart updating in real-time as people add items. Clear attribution (color-coded names) shows who ordered what. Status badges indicate who's browsing, who's ready, who's paid.</p>

              <h3>Individual Item Ownership</h3>
              <p>Each person owns and controls only their items. No one can accidentally delete someone else's order. Reduces coordination errors and builds trust in the system.</p>

              <h3>Automatic Payment Splitting</h3>
              <p>At checkout, each person pays only for their items through integrated UPI or card. No manual calculations, no post-delivery collection, no awkward money requests. The system handles it automatically.</p>

              <h3>Group Order Status Tracking</h3>
              <p>Everyone in the group gets real-time updates on order status (confirmed, preparing, out for delivery, delivered). No more "where's the food?" messages flooding the organizer.</p>
            </div>

            {/* 08 IMPACT */}
            <div className="article-section">
              <span className="step-label">08 — IMPACT</span>
              <h2>Why this works</h2>
              <ul>
                <li><strong>Eliminates coordination friction:</strong> No more message chains, screenshot spam, or "did you order yet?" loops</li>
                <li><strong>Clear ownership:</strong> Everyone knows their items and costs upfront—no payment surprises</li>
                <li><strong>No payment collection hassle:</strong> Individual payment removes the most painful part of group ordering</li>
                <li><strong>Real-time transparency:</strong> Shared cart visibility lets everyone make informed decisions without constant check-ins</li>
                <li><strong>Mobile-first design:</strong> Optimized for phones where most food ordering actually happens</li>
              </ul>
              <p><strong>Note:</strong> As a concept project, these are expected outcomes based on research and usability testing with prototypes. Swiggy has since introduced their own group ordering feature, validating the problem space.</p>
            </div>

            {/* 09 REFLECTION */}
            <div className="article-section">
              <span className="step-label">09 — REFLECTION</span>
              <h2>What I learned</h2>
              <p>This redesign concept demonstrates how thoughtful UX can transform a frustrating social experience into something seamless. The key was understanding that group ordering isn't just about food—it's about coordination, trust, and shared experiences.</p>
              <p><strong>The design decisions that had the biggest impact weren't the flashy ones.</strong> They were the small details: real-time updates, individual payment, clear ownership indicators, status transparency. These removed friction points that users had learned to accept as "just how it is."</p>
              <p>If I were to iterate further, I'd explore how to make the experience even more social—perhaps adding reactions, comments, or light gamification elements that make group ordering feel more like a shared activity than a transaction.</p>
              <p>The project also reinforced that <strong>good UX research doesn't require a big budget</strong>—just curiosity and access to people experiencing the problem. Observing a single office lunch coordination revealed more insights than any survey could.</p>
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
