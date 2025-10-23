import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicInformation from './components/BasicInformation';
import WorkExperience from './components/WorkExperience';
import AcademicBackground from './components/AcademicBackground';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="basic-info">
        <BasicInformation />
      </section>
      <hr />      
      <section id="work-experience">
        <WorkExperience />
      </section>
      <hr />      
      <section id="academic-background">
        <AcademicBackground />
      </section>
      <hr />      
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio-section">
        <Portfolio /> 
      </section>
      <hr />
      <section id="contact-section">
        <Contact /> 
      </section>
      <Footer />
    </div>
  );
}

export default App;