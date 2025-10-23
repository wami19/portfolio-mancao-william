import React from 'react';
import citUImage from '../assets/cit-u.png';
import prcImage from '../assets/prc.png';
import spcImage from '../assets/spc.png';
import sckImage from '../assets/sck.png';
import uscImage from '../assets/usc.png';
import llci08Image from '../assets/llci-08.png';

const academicBackground = [
  {
    institution: 'Cebu Institute of Technology – University',
    degrees: ['Master in Information Technology (Present)'],
    year: 'Present',
    location: 'Cebu City, Cebu',
    image: citUImage,
  },
  {
    institution: 'Professional Regulation Commission (Philippines)',
    degrees: ['Licensed Professional Teacher'],
    year: '2024',
    location: 'Philippines',
    image: prcImage,
  },
  {
    institution: "St. Peter's College of Ormoc, Inc.",
    degrees: ['Teacher Certification Program'],
    year: '2024',
    location: 'Ormoc City, Leyte',
    image: spcImage,
  },
  {
    institution: 'Seminary of Christ the King',
    degrees: [
      'Master of Divinity',
      'Bachelor of Theology',
      'Pre-theology Program',
    ],
    year: '2015-2022',
    location: 'Mission, BC, Canada',
    image: sckImage,
  },
  {
    institution: 'University of San Carlos',
    degrees: ['Bachelor of Science in Information Technology'],
    year: '2009-2013',
    location: 'Cebu City, Cebu',
    image: uscImage,
  },
  {
    institution: 'LIDE Learning Center, Inc.',
    degrees: ['Basic Education'],
    year: '1999-2009',
    location: 'Isabel, Leyte',
    image: llci08Image,
  },
];

function AcademicBackground() {
  return (
    <div className="inside-box">
      <h1>ACADEMIC BACKGROUND</h1>
      
      <div className="experience-grid">
        {academicBackground.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="card-logo">
              <img src={item.image} alt={`${item.institution} logo`} width="60" />
            </div>
            <div className="card-details">
              <h4>{item.institution}</h4>
              <p className="company-name">{item.year} - {item.location}</p>
              <ul className="degree-list">
                {item.degrees.map((degree, degreeIndex) => (
                  <li key={degreeIndex}>{degree}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicBackground;