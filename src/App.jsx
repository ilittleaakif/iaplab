import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Main_Header"
import HeroSection from "./Layout/Hero/Hero_Section";
import LibararySection from "./Layout/library/Library_Section";
import Footer from "./Layout/Footer/footer_section";

import Suggest from "./Layout/Suggest/Suggest_section";

import SemsterContent from "./Layout/library/Semestre_Section";
import ELibraySection from "./Layout/E-library/ELibrary_Container";
import SchedulesSection from "./Layout/library/Schedules";
import ProfMails from "./Layout/library/ProfMails";





function App() {
  const libRef = useRef(null);

  const HomePage = () => {
    return (
      <>
        <Header />
        <HeroSection libRef={libRef} />
        <LibararySection ref={libRef} />
        <Footer />
      </>
    )
  };

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semester/:name" element={<SemsterContent />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/Elibrary" element={<ELibraySection />} />
        <Route path="/Acmails/:name" element={<ProfMails />} />
        <Route path="/Schedules/:semester" element={<SchedulesSection />} />
      </Routes>

  );
}

export default App;
