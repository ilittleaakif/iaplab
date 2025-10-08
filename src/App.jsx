import { useRef, useState, useEffect } from "react";
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
  const libRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const HomePage = () => {
    useEffect(() => {
      const timer = setTimeout(() => { setIsLoading(false); }, 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading)
      return <Loader />;

    return (
      <>
        <Header />
        <HeroSection libRef={libRef} />
        <LibararySection ref={libRef} />
        <Footer />
      </>
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