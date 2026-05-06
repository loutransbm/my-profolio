import React from 'react';

const Navbar = () => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      backgroundColor: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
    },
    logo: {
      fontSize: '18px',
      fontWeight: '900',
      color: 'var(--accent)',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    links: {
      display: 'flex',
      gap: '30px',
    },
    link: {
      fontSize: '11px',
      fontWeight: '700',
      color: '#fff',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.6,
      transition: 'opacity 0.3s ease',
    }
  };

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>Lou Tran</a>
      <div style={styles.links}>
        <a href="#origin" style={styles.link} className="nav-link">Story</a>
        <a href="#modeling" style={styles.link} className="nav-link">Modeling</a>
        <a href="#dashboards" style={styles.link} className="nav-link">Dashboards</a>
        <a href="#profile" style={styles.link} className="nav-link">Profile</a>
      </div>
      <style>{`
        .nav-link:hover { opacity: 1 !important; color: var(--accent) !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
