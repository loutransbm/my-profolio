import React from 'react';

const GrainOverlay = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.05,
      background: `url('https://grainy-gradients.vercel.app/noise.svg')`,
    }}></div>
  );
};

export default GrainOverlay;
