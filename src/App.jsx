import { Route, Routes } from "react-router-dom";

import Form from "./Layout/Form/Form";
import ErrorPage from "./Components/404Page";
import SemsterContent from "./Layout/library/Semestre_Section";
import HomePage from "./Layout/HomPage/HomePage";
import MaintenancePage from './Components/Maintenance';

function App() {
  const maint = false;
  return (
    <Routes>
      {maint ?
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/semester/:name" element={<SemsterContent />} />
          <Route path="/form/" element={<Form />} />
        </> :
        <>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MaintenancePage />} />
          <Route path="/semester/:name" element={<SemsterContent />} />
        </>
      }
    </Routes>
  );
}

export default App;