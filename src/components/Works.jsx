import React, { useState } from 'react';

const Works = () => {
  const [openId, setOpenId] = useState(null);

  const toggleProject = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      num: '01',
      title: 'Global Readiness Programme',
      category: 'Strategy / Education',
      year: '2024',
      desc: 'Trong một thế giới mà tấm bằng đại học không còn là tấm vé thông hành duy nhất, GRP được thiết kế như một "Hệ điều hành tư duy" dành cho nhân lực Việt Nam. Thay vì chỉ cung cấp kiến thức, chúng tôi xây dựng lộ trình chuẩn hóa năng lực dựa trên cố vấn từ các cựu du học sinh tại Úc, Mỹ và Anh Quốc.',
      tags: ['Education System', 'Global Mindset', 'International Standard']
    },
    {
      id: 2,
      num: '02',
      title: 'HEART Framework',
      category: 'Philosophy / Hospitality',
      year: '2023',
      desc: 'HEART không chỉ là một khung năng lực, mà là triết lý vận hành con người. Chúng tôi đặt câu hỏi: "Làm thế nào để sự hiếu khách Á Đông gặp gỡ được chuẩn mực dịch vụ khắt khe của quốc tế?". HEART Framework ra đời để trả lời câu hỏi đó.',
      tags: ['Culture Design', 'Ethics', 'Service Philosophy']
    },
    {
      id: 3,
      num: '03',
      title: 'SBM Brand Identity',
      category: 'Branding / Creative',
      year: '2023',
      desc: 'Tại SBM Institute, việc tái định vị thương hiệu không bắt đầu từ logo, mà bắt đầu từ tầm nhìn về một "Hệ sinh thái giáo dục chiến lược". Chúng tôi xây dựng một bản sắc thương hiệu phản chiếu sự tinh tế, tin cậy và khát vọng vươn tầm.',
      tags: ['Brand Strategy', 'Positioning', 'Visual Architecture']
    },
    {
      id: 4,
      num: '04',
      title: 'Vietnam Competency Standard',
      category: 'Research / System',
      year: '2022',
      desc: 'Một dự án nghiên cứu quy mô nhằm thu hẹp khoảng cách giữa nhân lực Việt và thị trường lao động toàn cầu. Bằng cách tích hợp tiêu chuẩn AQF (Úc) và ACCSTP (ASEAN) vào bối cảnh Việt Nam, chúng tôi đã xây dựng nên một hệ thống tham chiếu năng lực quốc gia.',
      tags: ['National Policy', 'Competency Mapping', 'Hospitality Research']
    }
  ];

  return (
    <section id="works">
      <div className="works-header reveal">
        <h2 className="works-title">Selected <em>Works</em></h2>
        <span className="works-count">04 Projects</span>
      </div>

      {projects.map((proj) => (
        <div 
          key={proj.id}
          className={`project-item reveal ${openId === proj.id ? 'open' : ''}`}
          onClick={() => toggleProject(proj.id)}
        >
          <div className="proj-header">
            <span className="proj-num">{proj.num}</span>
            <h3 className="proj-title">{proj.title}</h3>
            <span className="proj-cat">{proj.category}</span>
            <span className="proj-year">{proj.year}</span>
            <div className="proj-expand-icon">+</div>
          </div>
          <div className="proj-panel" style={{ maxHeight: openId === proj.id ? '500px' : '0' }}>
            <div className="proj-panel-inner">
              <p className="proj-panel-desc">{proj.desc}</p>
              <div className="proj-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;
