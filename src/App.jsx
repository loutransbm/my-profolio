import React, { useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import HoverImage from './components/HoverImage';
import './App.css';

function App() {
  const projects = [
    { 
      title: 'Global Readiness', 
      category: 'Strategic / Education', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      title: 'HEART Framework', 
      category: 'Philosophy / Hospitality', 
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      title: 'SBM Institute', 
      category: 'Branding / Management', 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      title: 'Global Position', 
      category: 'Leadership / Strategy', 
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop' 
    },
  ];

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="portfolio-container">
      <GrainOverlay />
      <Navbar />

      {/* HERO SECTION (Tim DP Style) */}
      <header className="hero-v tdp-hero">
        <div className="hero-content">
          <h1 className="hero-title-large">Strategic & Digital Designer</h1>
          <div className="hero-sub">
            <span>BASED IN VIETNAM</span>
            <span>CHIEF MARKETING OFFICER @ SBM</span>
          </div>
        </div>
      </header>

      {/* ORIGIN SECTION */}
      <section id="origin" className="section-v tdp-section">
        <div className="section-body">
          <p className="body-text large tdp-text">
            Tôi không bán Visa. Tôi tặng bạn một hệ điều hành để chuẩn hóa vị thế toàn cầu.
          </p>
          <p className="body-text tdp-subtext">
            Tại giao điểm của dữ liệu chiến lược và các quyết định kinh doanh, tôi xây dựng những hệ thống đào tạo bền vững cho thế hệ trẻ.
          </p>
        </div>
      </section>

      {/* WORKS SECTION (Hover Reveal - Tim DP) */}
      <section id="modeling" className="section-v tdp-section">
        <div className="section-header tdp-header">
          <h2 className="section-title">Selected Works</h2>
        </div>
        <div className="section-body full-width">
          <HoverImage projects={projects} />
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section id="profile" className="section-v last tdp-section">
        <div className="profile-grid tdp-profile">
          <div className="profile-col">
            <h3>Contact</h3>
            <div className="profile-item"><a href="mailto:hello@lou-tran.com">hello@lou-tran.com</a></div>
            <div className="profile-item"><a href="#">LinkedIn</a></div>
          </div>
          <div className="profile-col">
            <h3>Philosophy</h3>
            <div className="profile-item">System Thinking.</div>
            <div className="profile-item">Global Positioning.</div>
          </div>
          <div className="profile-col">
            <h3>Location</h3>
            <div className="profile-item">Ho Chi Minh City, VN.</div>
          </div>
        </div>
      </section>

      <footer className="footer-v">
        <p>&copy; 2026 Lou Tran Portfolio. Inspired by Tim DP.</p>
      </footer>
    </div>
  );
}

export default App;
