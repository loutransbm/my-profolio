import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import './index.css'; // Make sure this contains all the massive CSS from index.html

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      animationFrameId = requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverElements = document.querySelectorAll('a, button, .project-item, .team-card');
    const handleMouseEnter = () => {
      if (cursor && ring) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.borderColor = 'rgba(197,160,89,0.8)';
      }
    };
    const handleMouseLeave = () => {
      if (cursor && ring) {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'rgba(197,160,89,0.5)';
      }
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
    </>
  );
};

function App() {
  // SCROLL REVEAL LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Works />

      {/* TEAM */}
      <section id="team">
        <div className="team-header reveal">
          <div className="section-label">03 — Đồng hành</div>
          <h2 className="team-title">Đội ngũ <em>Cố vấn</em></h2>
        </div>
        <div className="team-grid">
          {/* NGUYEN DINH QUANG */}
          <div className="team-card reveal">
            <div className="team-photo-wrap">
              <img src="https://cdn.phototourl.com/free/2026-05-05-9e66ff73-9a3b-4861-bfdf-ff065b206775.jpg" alt="Nguyen Dinh Quang" />
              <div className="team-photo-overlay"></div>
              <span className="team-badge">MSc. Finance · Valuation Expert</span>
            </div>
            <div className="team-name">Nguyen Dinh Quang</div>
            <div className="team-role">Giảng viên / Researcher — VNU-IS<br />Cố vấn Tài chính Doanh nghiệp</div>
            <div className="team-meta">
              <div className="team-meta-item">
                <span className="team-meta-label">Học vấn</span>
                <span className="team-meta-val">Thạc sĩ Tài chính & Đầu tư — University of Nottingham, UK (Russell Group).</span>
              </div>
              <div className="team-meta-item">
                <span className="team-meta-label">Dấu ấn</span>
                <span className="team-meta-val">Chuyên gia định giá (Valuation) tại PwC & EY Vietnam trước khi tham gia giảng dạy đại học.</span>
              </div>
            </div>
            <a href="mailto:quangdn@vnuis.edu.vn" className="team-linkedin">quangdn@vnuis.edu.vn</a>
          </div>

          {/* NGUYEN TUNG DUONG */}
          <div className="team-card reveal">
            <div className="team-photo-wrap">
              <img src="https://cdn.phototourl.com/free/2026-05-05-bb45c257-7bfb-46c4-beac-2a71739c65b8.jpg" alt="Nguyen Tung Duong" />
              <div className="team-photo-overlay"></div>
              <span className="team-badge">FMVA · CBCA · CEO CareerMates</span>
            </div>
            <div className="team-name">Nguyen Tung Duong</div>
            <div className="team-role">CEO & Founder — CareerMates<br />Senior Risk Consultant — KPMG Vietnam</div>
            <div className="team-meta">
              <div className="team-meta-item">
                <span className="team-meta-label">Học vấn</span>
                <span className="team-meta-val">Thạc sĩ Tài chính & Đầu tư — University of Nottingham, UK (Học bổng 40%).</span>
              </div>
              <div className="team-meta-item">
                <span className="team-meta-label">Dự án</span>
                <span className="team-meta-val">Founder CareerMates — Hệ sinh thái hỗ trợ du học sinh và nhân lực trẻ.</span>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/tung-duong-nguyen/" target="_blank" rel="noreferrer" className="team-linkedin">LinkedIn · tung-duong-nguyen</a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy">
        <div className="phi-bg-text">SYSTEM</div>
        <div className="section-label" style={{ justifyContent: 'center' }}>04 — Triết lý</div>
        <p className="phi-quote reveal">
          "Sự khác biệt thực sự không đến từ bằng cấp hay Visa — nó đến từ <span>tư duy hệ thống</span> mà bạn mang theo mình."
        </p>
        <p className="phi-author reveal">— Lou Tran, CMO · SBM Institute</p>
      </section>

      {/* PROFILE */}
      <section id="profile">
        <div className="profile-container">
          <div className="profile-left reveal">
            <div className="section-label">04 — Profile</div>
            <div className="profile-photo">
              <img src="https://sf-static.upanhlaylink.com/img/image_2026050520f02db16cce130642c55fc63b70f460.jpg" alt="Lou Tran" />
            </div>
            <div className="profile-name">Lou<br /><em>Tran</em></div>
            <p className="profile-role">CMO · SBM Institute<br />CEO · Lumora Global</p>
            <div className="profile-contact">
              <a href="mailto:loutran.edugate@gmail.com">loutran.edugate@gmail.com</a>
              <a href="#">LinkedIn Profile</a>
            </div>
          </div>
          <div className="profile-right reveal">
            <div className="resume-section">
              <h4>Kinh nghiệm Chiến lược</h4>
              <div className="resume-item">
                <strong>CMO — SBM Institute</strong>
                <span>2023 – Nay</span>
                <small>Kiến trúc sư hệ thống giáo dục và chiến lược thương hiệu toàn cầu.</small>
              </div>
            </div>
            <div className="resume-section">
              <h4>Core Expertise</h4>
              <div className="resume-item">
                <strong>International Program Design</strong>
                <span>Phát triển hệ thống Du học và Thực tập sinh quốc tế bền vững.</span>
              </div>
            </div>
            <div className="resume-section">
              <h4>Dấu ấn Truyền thông & Văn hóa</h4>
              <div className="resume-item">
                <strong>Marketing Campaigns</strong>
                <span>Chin-su · Celano · Krik</span>
                <small>Thực thi và cố vấn chiến lược truyền thông cho các nhãn hàng tiêu dùng hàng đầu.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 Lou Tran</p>
        <p>Hanoi, Vietnam</p>
      </footer>
    </>
  );
}

export default App;
