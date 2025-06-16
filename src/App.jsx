import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx';
import FeaturedSection from './components/FeaturedSection/FeaturedSection.jsx';
import ExperienceList from './components/ExperienceList/ExperienceList.jsx';
import ExperienceDetail from './components/ExperienceDetail/ExperienceDetail.jsx';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay.jsx';
import './App.css'

function App() {
  const [experiences, setExperiences] = useState([]);

  const contactInfo = {
    firstName: "Jack",
    lastName: "Cairns",
    phone: "(518) 742-6712",
    email: "jhcairns14@gmail.com",
    location: "Boston, MA",
    linkedin: "https://www.linkedin.com/in/jack-cairns-a2620919a/",
    resume: "https://yourwebsite.com/resume.pdf"
  };

  useEffect(() => {
    fetch('/models/experiences.json')
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error('Failed to load inventory:', err));
  }, []);
  return (
    <>
      <Header contactInfo={contactInfo} />
      <main>
        <Routes>
          <Route path="/" element={<>
            <AboutMe />
            <FeaturedSection experiences={experiences} />
          </>} />
          <Route path="/experiences" element={<ExperienceList experiences={experiences} type="experience" />} />
          <Route path="/experiences/:id" element={<ExperienceDetail experiences={experiences} />} />
          <Route
            path="/projects"
            element={
              <>
                <ProjectDisplay />
                <ExperienceList experiences={experiences} type="project" />
              </>
            }
          />
          <Route path="/education" element={<ExperienceList experiences={experiences} type="education" />} />
        </Routes>
      </main>
      <Footer contactInfo={contactInfo} />
    </>
  )
}

export default App