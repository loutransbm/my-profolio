import React, { useEffect, useRef } from 'react';

const About = () => {
  const countRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = target >= 100 ? '+' : '+';
          let start = 0;
          const duration = 1800;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(start) + suffix;
            }
          }, 16);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    countRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="about-left">
        <div className="section-label">01 — Câu chuyện</div>
        <h2 className="about-title">
          Bản sắc &<br />
          <em>Kiến trúc Tư duy</em>.
        </h2>
      </div>
      <div className="about-right reveal">
        <p className="about-text">
          Tôi bắt đầu với lịch sử và văn hóa — không phải trong giảng đường, mà qua những câu chuyện được truyền miệng qua nhiều thế hệ. Tôi nhận ra rằng văn hóa không chỉ là di sản — nó là <strong>một hệ thống tư duy.</strong> Cách một dân tộc hiểu về mình sẽ quyết định cách họ đứng trước thế giới.
        </p>
        <p className="about-text">
          Câu hỏi đó đã dẫn tôi đến Marketing, rồi đến Giáo dục. Bởi vì nếu văn hóa là hệ điều hành, thì <strong>giáo dục chính là bản cập nhật.</strong> Và thế hệ trẻ Việt Nam xứng đáng được trang bị phiên bản tốt nhất — không phải để thoát ly, mà để hội nhập <em>với bản sắc nguyên vẹn.</em>
        </p>
        <p className="about-text">
          Hôm nay, với vai trò CMO tại SBM Institute, tôi thiết kế các chương trình được công nhận tại Úc, Mỹ và Anh Quốc — để 300+ người Việt trẻ có một hệ tư duy vững chắc khi bước ra thế giới mà không đánh mất chính mình.
        </p>
        <div className="stats-row">
          <div>
            <span className="stat-num" data-count="5" ref={el => countRefs.current[0] = el}>0</span>
            <span className="stat-label">Năm kinh nghiệm</span>
          </div>
          <div>
            <span className="stat-num" data-count="300" ref={el => countRefs.current[1] = el}>0</span>
            <span className="stat-label">Học viên đào tạo</span>
          </div>
          <div>
            <span className="stat-num" data-count="10" ref={el => countRefs.current[2] = el}>0</span>
            <span className="stat-label">Chương trình quốc tế</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
