import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const HoverImage = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    container: {
      padding: '40px 0',
    },
    item: {
      fontSize: 'clamp(30px, 5vw, 70px)', /* Giảm từ 100px xuống 70px */
      fontWeight: '300',
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '40px 0', /* Tăng padding để giãn cách */
      borderBottom: '1px solid rgba(197, 160, 89, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10, /* Đảm bảo chữ luôn nằm trên cùng */
      lineHeight: '1.1',
    },
    imageContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '350px',
      height: '450px',
      pointerEvents: 'none',
      zIndex: 5, /* Ảnh nằm dưới chữ */
      overflow: 'hidden',
      borderRadius: '4px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  };

  return (
    <div style={styles.container}>
      {projects.map((project, index) => (
        <div
          key={index}
          style={styles.item}
          onMouseEnter={() => setActiveProject(project.image)}
          onMouseLeave={() => setActiveProject(null)}
          className="hover-item"
        >
          <span>{project.title}</span>
          <span style={{ fontSize: '14px', opacity: 0.5 }}>{project.category}</span>
        </div>
      ))}

      {activeProject && (
        <motion.div
          style={{
            ...styles.imageContainer,
            x: x,
            y: y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <img src={activeProject} alt="Project" style={styles.image} />
        </motion.div>
      )}

      <style>{`
        .hover-item { transition: padding-left 0.4s ease, color 0.4s ease; }
        .hover-item:hover { padding-left: 40px; color: var(--accent); }
      `}</style>
    </div>
  );
};

export default HoverImage;
