import React from 'react';

const Projects = () => {
  const projectList = [
    { id: '01', title: 'Global Readiness Programme', category: 'Education / Strategy', year: '2024' },
    { id: '02', title: 'SBM Brand Identity', category: 'Branding / Creative', year: '2023' },
    { id: '03', title: 'Hospitality HEART Framework', category: 'Philosophy / Training', year: '2023' },
    { id: '04', title: 'Vietnam Competency Standard', category: 'Research / System', year: '2022' },
  ];

  const styles = {
    section: {
      padding: '100px 20px',
      backgroundColor: 'var(--bg-color)',
      borderTop: '1px solid var(--border-color)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    label: {
      fontSize: '12px',
      fontWeight: '700',
      color: 'var(--accent-color)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '60px',
      display: 'block',
      textAlign: 'left',
    },
    projectItem: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 200px 80px',
      alignItems: 'center',
      padding: '40px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      textAlign: 'left',
    },
    id: {
      fontSize: '14px',
      color: 'var(--accent-color)',
      fontWeight: '700',
    },
    title: {
      fontSize: 'clamp(20px, 3vw, 32px)',
      fontWeight: '900',
      color: '#fff',
      textTransform: 'uppercase',
    },
    category: {
      fontSize: '14px',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
    },
    year: {
      fontSize: '14px',
      color: 'var(--text-secondary)',
      textAlign: 'right',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <span style={styles.label}>04 / Selected Works</span>
        {projectList.map((project) => (
          <div key={project.id} style={styles.projectItem} className="project-row">
            <span style={styles.id}>{project.id}</span>
            <h3 style={styles.title}>{project.title}</h3>
            <span style={styles.category}>{project.category}</span>
            <span style={styles.year}>{project.year}</span>
          </div>
        ))}
      </div>
      <style>{`
        .project-row:hover {
          padding-left: 20px;
          background: rgba(197, 160, 89, 0.05);
          border-bottom: 1px solid var(--accent-color);
        }
        .project-row:hover h3 {
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .project-row h3 {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
