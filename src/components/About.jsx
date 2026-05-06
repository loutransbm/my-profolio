import React from 'react';

const About = () => {
  const styles = {
    section: {
      padding: '100px 20px',
      backgroundColor: 'var(--bg-color)',
      borderTop: '1px solid var(--border-color)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      textAlign: 'left',
    },
    label: {
      fontSize: '12px',
      fontWeight: '700',
      color: 'var(--accent-color)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      display: 'block',
    },
    title: {
      fontSize: 'clamp(24px, 4vw, 40px)',
      fontWeight: '900',
      lineHeight: '1.2',
      marginBottom: '30px',
      color: '#fff',
    },
    text: {
      fontSize: '18px',
      color: 'var(--text-secondary)',
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    highlight: {
      color: 'var(--accent-color)',
      fontWeight: '700',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div>
          <span style={styles.label}>02 / Philosophy</span>
          <h2 style={styles.title}>Tư duy hệ thống trong Marketing giáo dục.</h2>
          <p style={styles.text}>
            Với hơn 10 năm kinh nghiệm trong lĩnh vực truyền thông và giáo dục, tôi tin rằng 
            <span style={styles.highlight}> giá trị thực </span> không nằm ở những lời hứa hoa mỹ, 
            mà nằm ở một hệ thống vận hành chuẩn mực.
          </p>
          <p style={styles.text}>
            Tại SBM Institute, chúng tôi không chỉ đào tạo kỹ năng, chúng tôi xây dựng 
            <span style={styles.highlight}> tư duy toàn cầu </span> cho thế hệ trẻ Việt Nam.
          </p>
        </div>
        <div>
          <span style={styles.label}>03 / Expertise</span>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Brand Strategy</h3>
            <p style={styles.text}>Định vị thương hiệu dựa trên giá trị cốt lõi và triết lý HEART.</p>
          </div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Digital Transformation</h3>
            <p style={styles.text}>Số hóa quy trình đào tạo và tiếp cận khách hàng đa kênh.</p>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Content Leadership</h3>
            <p style={styles.text}>Xây dựng nội dung có chiều sâu, mang tính định hướng thị trường.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
