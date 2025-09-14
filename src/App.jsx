import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Layout/Header/Header";
import HeroSection from "./Layout/Hero/Hero";
import LibararySection from "./Layout/library/Library";
import ProvideSection from "./Layout/provide/provide";

import Support from "./Layout/Support/Support";
import Suggest from "./Layout/Suggest/Suggest";
import Footer from "./Layout/Footer/Footer";

function App() {
  const libRef = useRef(null);

  const HomePage = () => {
    return (
      <>
        <Header />
        <HeroSection libRef={libRef} />
        <LibararySection ref={libRef} />
        <Footer/>
      </>
    )
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/provide" element={<ProvideSection />} />
      <Route path="/support" element={<Support />} />
      <Route path="/suggest" element={<Suggest />} />
    </Routes>
  );
}

export default App;
