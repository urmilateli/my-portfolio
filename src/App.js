// src/App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";

import About from "./components/aboutme/about/About";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
import Toolkit from "./components/aboutme/skills/Toolkit";

import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />} />
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            <Route path="projectjourney" element={<ProjectJourney />} />
            <Route path="educationjourney" element={<EducationJourney />} />
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="toolkit" element={<Toolkit />} />
          </Route>

          {/* ✅ Updated route path here */}
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<ComingSoon />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
