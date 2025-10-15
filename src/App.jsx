import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Main_Header"
import HeroSection from "./Layout/Hero/Hero_Section";
import LibararySection from "./Layout/library/Library_Section";
import Footer from "./Layout/Footer/footer_section";

import Form from "./Layout/Form/Form";
import Loader from "./Components/Loader";
import ErrorPage from "./Components/404Page";

import SemsterContent from "./Layout/library/Semestre_Section";
import ELibraySection from "./Layout/E-library/ELibrary_Container";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const HomePage = () => {
    useEffect(() => {
      const timer = setTimeout(() => { setIsLoading(false); }, 1500);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading)
      return <Loader />;

    return (
      <div 
      style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
    }}
      >
        <Header />
        <HeroSection />
        <LibararySection />
        <Footer />
      </div>
    );
  };


  

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/semester/:name" element={<SemsterContent />} />
      <Route path="/Elibrary" element={<ELibraySection />} />
      <Route path="/form/:action" element={<Form />} />
    </Routes>
  );
}

export default App;