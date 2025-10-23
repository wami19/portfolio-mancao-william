import React from 'react';

const skillCategories = [
  {
    category: 'Core Competencies',
    icon: '💡',
    skills: [
      'Proficient in both oral and written English',
      'Strong analytical and leadership skills',
      'Strong interpersonal relationships',
      'Microsoft Office (Word, Excel, PowerPoint)',
    ],
  },
  {
    category: 'Programming & Web Dev',
    icon: '💻',
    skills: [
      'Programming languages: C, C#, Java',
      'Web development: HTML, CSS, JavaScript, React.js',
      'Backend/Database: PHP, MySQL, MongoDB, Django',
    ],
  },
  {
    category: 'Digital Design & Media',
    icon: '🎨',
    skills: [
      'Adobe Photoshop',
      'Macromedia Director MX',
      'Sony Vegas',
    ],
  },
  {
    category: 'Ecclesiastical Knowledge',
    icon: '⛪',
    skills: [
      'Previously a diocesan and missionary seminarian',
    ],
  },
];

function Skills() {
  return (
    <div className="inside-box">
      <h1>SKILLS</h1>
      
      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="skill-group-card">
            <h2>{group.icon} {group.category}</h2>
            
            <div className="skill-tags-container">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;