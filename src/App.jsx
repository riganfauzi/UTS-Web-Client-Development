// Deps
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Global CSS
import "./styles/index.css";
import "./styles/fonts.css";

// Pages
import LandingPage from "./page/home";
import ContactPage from "./page/contact";
import { useEffect } from "react";

function App() {
  const basename = import.meta.env.VITE_APP_BASE_PATH || undefined;

  useEffect(() => {
    console.log(import.meta.env);
  }, []);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
