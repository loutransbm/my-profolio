import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Handle close when clicking outside or clicking a link
    const handleLinkClick = () => setIsOpen(false);
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.addEventListener('click', handleLinkClick));
    
    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <nav>
      <a href="#" className="nav-logo">Lou Tran</a>
      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`} 
        id="navToggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
        <li><a href="#about">Story</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#profile">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
