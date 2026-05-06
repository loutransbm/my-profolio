import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      zIndex: 2000,
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
      zIndex: 2100,
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
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      gap: '6px',
      cursor: 'pointer',
      zIndex: 2100,
    },
    line: {
      width: '25px',
      height: '2px',
      backgroundColor: 'var(--accent)',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: '#050505',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      zIndex: 2050,
    },
    mobileLink: {
      fontSize: '32px',
      fontWeight: '300',
      color: '#fff',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '4px',
    }
  };

  return (
    <>
      <nav style={styles.nav} className="navbar-container">
        <a href="#" style={styles.logo}>Lou Tran - test </a>

        {/* Desktop Links */}
        <div style={styles.links} className="navbar-links desktop-only">
          <a href="#origin" style={styles.link} className="nav-link navbar-link">Story</a>
          <a href="#modeling" style={styles.link} className="nav-link navbar-link">Modeling</a>
          <a href="#dashboards" style={styles.link} className="nav-link navbar-link">Dashboards</a>
          <a href="#profile" style={styles.link} className="nav-link navbar-link">Profile</a>
        </div>

        {/* Hamburger Button */}
        <div
          style={styles.hamburger}
          className="mobile-only"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{ ...styles.line, transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
          <div style={{ ...styles.line, opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ ...styles.line, transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={styles.mobileMenu}
          >
            <a href="#origin" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Story</a>
            <a href="#modeling" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Modeling</a>
            <a href="#dashboards" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Dashboards</a>
            <a href="#profile" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Profile</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { opacity: 1 !important; color: var(--accent) !important; }
        
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
