import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Main_Header"
import HeroSection from "./Layout/Hero/Hero_Section";
import LibararySection from "./Layout/library/Library_Section";
import ProvideSection from "./Layout/provide/Provide_section";
import Suggest from "./Layout/Suggest/Suggest_section";
import Footer from "./Layout/Footer/footer_section";
import SemsterContent from "./Layout/library/Semestre_preview";
import ELibraySection from "./Layout/E-library/ELibrary_Container";

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
      <Route path="/provide" element={<ProvideSection />} />
      <Route path="/suggest" element={<Suggest />} />
      <Route path="/eLibrary" element={<ELibraySection />} />
    </Routes>
  );
}

export default App;
