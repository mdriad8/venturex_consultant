import React from 'react';
import Hero from './components/HeroSection'; 
import './index.css';
import TimeLine from './components/TimeLineSection';
import MenuNavigation from './components/MenuSection';
import Projects from './components/ProjectsSection';
import Skills from './components/SkillSection';
import Contact from './components/ContactSection';
import Footer from './components/FooterSection';
function App() {
  return (
    <div>
      <MenuNavigation />
    <Hero />
    <TimeLine />
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
