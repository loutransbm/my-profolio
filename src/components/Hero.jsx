import React from 'react';

const Hero = () => {
  const styles = {
    container: {
      backgroundColor: 'var(--bg-color)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    poster: {
      width: '100%',
      maxWidth: '1200px',
      background: '#0a0a0a',
      padding: 'clamp(40px, 8vw, 80px)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      border: '1px solid var(--border-color)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    },
    headerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: '30px',
      marginBottom: '60px',
    },
    headerCol: {
      fontSize: '11px',
      lineHeight: '1.5',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textAlign: 'left',
    },
    headerStrong: {
      color: 'var(--accent-color)',
      display: 'block',
      marginBottom: '8px',
      fontSize: '12px',
      fontWeight: '700',
    },
    mainContent: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0',
      textAlign: 'left',
    },
    quoteMain: {
      fontSize: 'clamp(32px, 6vw, 64px)',
      fontWeight: '900',
      lineHeight: '1.1',
      letterSpacing: '-1.5px',
      color: '#ffffff',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    quoteSub: {
      fontSize: 'clamp(48px, 10vw, 120px)',
      fontWeight: '900',
      lineHeight: '0.9',
      color: 'var(--accent-color)',
      textTransform: 'lowercase',
      letterSpacing: '-3px',
    },
    footer: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      alignItems: 'end',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '40px',
      marginTop: '60px',
    },
    info: {
      fontSize: '14px',
      color: '#aaa',
      lineHeight: '1.6',
      textAlign: 'left',
    },
    nameTag: {
      color: 'var(--accent-color)',
      fontSize: '20px',
      fontWeight: '700',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: '5px',
    },
    bigNum: {
      fontSize: 'clamp(80px, 15vw, 200px)',
      fontWeight: '900',
      color: 'var(--accent-color)',
      lineHeight: '0.7',
      letterSpacing: '-10px',
      opacity: '0.15',
      textAlign: 'right',
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.poster}>
        {/* Header Metadata */}
        <div style={styles.headerGrid}>
          <div style={styles.headerCol}>
            <span style={styles.headerStrong}>01 / Công bố</span>
            Mở cổng đào tạo<br />miễn phí GRP.
          </div>
          <div style={styles.headerCol}>
            <span style={styles.headerStrong}>02 / Đối tượng</span>
            Du học, J-1<br />& Visa 407.
          </div>
          <div style={styles.headerCol}>
            <span style={styles.headerStrong}>03 / Chuyên biệt</span>
            Triết lý HEART<br />cho Hospitality.
          </div>
          <div style={styles.headerCol}>
            <span style={styles.headerStrong}>04 / The System</span>
            Hệ thống chuẩn<br />năng lực Việt.
          </div>
        </div>

        {/* Main Message */}
        <div style={styles.mainContent}>
          <h1 style={styles.quoteMain}>
            Tôi không bán Visa.<br />Tôi tặng bạn một hệ điều hành.
          </h1>
          <h2 style={styles.quoteSub}>
            chuẩn hóa<br />vị thế<br />toàn cầu.
          </h2>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.info}>
            <span style={styles.nameTag}>Lou Tran</span>
            Chief Marketing Officer (CMO)<br />
            SBM Institute
          </div>
          <div style={styles.bigNum}>01</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
