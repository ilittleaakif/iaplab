import { Route, Routes } from "react-router-dom";
import Form from "./Layout/Form/Form";
import ErrorPage from "./Components/404Page";

import SemsterContent from "./Layout/library/Semestre_Section";
import HomePage from "./HomePage";
import ELibraySection from "./Layout/E-library/ELibrary_Container";

function App() {
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