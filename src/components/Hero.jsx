import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle && scrollY < window.innerHeight) {
        heroTitle.style.transform = `translateY(${scrollY * 0.15}px)`;
        heroTitle.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero">
      {/* LEFT: Text */}
      <div className="hero-left">
        <div className="hero-top">
          <h1 className="hero-title">
            Người xây<br />
            <em>hệ thống</em><br />
            từ ý tưởng.
          </h1>
        </div>
        <div className="hero-bottom">
          <p className="hero-desc">
            Lịch sử không nằm trong sách giáo khoa. Nó nằm trong cách một cộng đồng lựa chọn ghi nhớ — và trong cách một thế hệ lựa chọn <em>tiếp nối hay bứt phá.</em>
          </p>
          <a href="#works" className="hero-cta">Xem công trình</a>
        </div>
      </div>

      {/* RIGHT: Photo */}
      <div className="hero-photo-col">
        <div className="hero-photo-frame">
          <img src="https://sf-static.upanhlaylink.com/img/image_2026050520f02db16cce130642c55fc63b70f460.jpg" alt="Lou Tran" />
          <div className="hero-photo-caption">
            <strong>Lou Tran</strong>
            <span>Chief Marketing Officer · SBM Institute</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">Cuộn xuống</div>
    </section>
  );
};

export default Hero;
