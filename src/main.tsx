import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import App from "./App.tsx";
import Equipment from "./equipment-data.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </Router>
  </StrictMode>
);
