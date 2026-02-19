import { Route, Routes } from "react-router-dom";

import ErrorPage from "./Components/404Page";
import SemsterContent from "./Layout/library/Semestre_Section";
import MainPage from './Components/main';

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/semester/:name" element={<SemsterContent />} />
    </Routes>
  );
}

export default App;