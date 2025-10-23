import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.pushState(null, '', `#${id}`);
  }
};

function Header() {
  return (
    <div className="head-foot">
      <h3>
        <a href="#basic-info" onClick={(e) => { e.preventDefault(); scrollToSection('basic-info'); }}> HOME </a> |
        <a href="#portfolio-section" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio-section'); }}> PORTFOLIO </a> |
        <a href="#contact-section" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}> CONTACT </a>
      </h3>
    </div>
  );
}

export default Header;