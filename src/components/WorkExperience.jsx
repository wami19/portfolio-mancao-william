import React from 'react';
import vsuImage from '../assets/vsu.png';
import llciImage from '../assets/llci.png';
import tietoImage from '../assets/tieto.png';
import pasarImage from '../assets/pasar.png';

const workExperiences = [
  {
    company: 'Visayas State University - Isabel',
    role: 'Instructor I (2024-Present)',
    details: 'Department of Information Technology, Faculty of Computing, Visayas State University',
    image: vsuImage,
  },
  {
    company: 'LIDE Learning Center, Inc.',
    role: 'Senior High School Teacher (2023-2024)',
    details: 'Isabel, Leyte',
    image: llciImage,
  },
  {
    company: 'Tieto Global Oy',
    role: 'Software Development Engineer (2013-2014)',
    details: 'Cebu City, Cebu',
    image: tietoImage,
  },
  {
    company: 'Philippine Associated Smelting and Refining (PASAR) Corporation',
    role: 'Accounting Assistant (2013) & IT Technical Support On-the-Job Trainee (2012)',
    details: 'Isabel, Leyte',
    image: pasarImage,
  },
];

function WorkExperience() {
  return (
    <div className="inside-box">
      <h1>WORK EXPERIENCE</h1>
      <div className="experience-grid"> 
        {workExperiences.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="card-logo">
              <img src={item.image} alt={`${item.company} logo`} width="60" />
            </div>
            <div className="card-details">
              <h4>{item.role}</h4>
              <p className="company-name">{item.company}</p>
              <p className="location">{item.details}</p>
              {item.additionalDetails && (
                <p className="additional-role">{item.additionalDetails}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;