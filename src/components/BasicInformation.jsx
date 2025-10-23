import React from 'react';
import williamImage from '../assets/william.jpg'; 

function BasicInformation() {
  return (
    <div className="inside-box">
      <h1>BASIC INFORMATION</h1>
      
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={williamImage} alt="William Evan P. Mancao" width="200" />
        </div>
        <div className="profile-details">
          <h2>William Evan P. Mancao, LPT, MDiv</h2>
          <p><strong>Occupation:</strong> Instructor I</p>
          <p><strong>Company:</strong> Visayas State University – Isabel</p>
          <p><strong>Department:</strong> Department of Information Technology</p>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;