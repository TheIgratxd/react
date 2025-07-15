import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./views/App.tsx";
import Equipment from "./views/equipment-data.tsx";
import AddEquipment from "./views/work-equipment.tsx";
import DesktopAdd from "./views/deskop-add.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/add-equipment" element={<AddEquipment />} />
        <Route path="/add-desktop" element={<DesktopAdd />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
