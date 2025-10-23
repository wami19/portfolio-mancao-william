import React from 'react';
import wixImage from '../assets/wix.png';
import animationImage from '../assets/mario-me.png'; 

const portfolioData = [
  {
    title: "Seminary Website using WIX",
    link: "https://rmsvancouver.wixsite.com/website",
    image: wixImage,
    alt: "Seminary Website Preview",
  },
  {
    title: "Simple Animation: Mario & Me",
    link: "https://youtu.be/Me35V5iI4Nc?si=DUJ51Qovn-dAXp4u",
    image: animationImage,
    alt: "Mario and Me Animation Thumbnail",
  },  
];

function Portfolio() {
  return (
    <div className="inside-box" id="portfolio-section">
      <h1>PORTFOLIO</h1>
      <p>Outputs, Creative works, Work-related or personal past and on-going projects, etc.</p>
      
      {portfolioData.map((project, index) => (
        <a 
          key={index}
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="portfolio-card-link"
        >
          <div className="portfolio-card">
            <div className="card-image-container">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="portfolio-image-preview" 
              />
            </div>
            <div className="card-text-overlay">
              <h3>{project.title}</h3>
              <span className="view-project">View Project →</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;