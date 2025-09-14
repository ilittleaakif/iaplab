import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import HeroSection from "./Hero/Hero";
import LibararySection from "./library/Library";
import ProvideSection from "./provide/provide";

import Support from "./Support/Support";
import Suggest from "./Suggest/Suggest";



function App() {
  const libRef = useRef(null);

  const HomePage = () => {
    return (
      <>
        <Header />
        <HeroSection libRef={libRef} />
        <LibararySection ref={libRef} />
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
