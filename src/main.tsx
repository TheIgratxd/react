import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.tsx";
import Equipment from './equipment-data.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Equipment />
  </StrictMode>
);
