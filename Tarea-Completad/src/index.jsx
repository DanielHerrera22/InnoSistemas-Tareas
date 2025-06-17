import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./screens/MainContent";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <MainContent />
  </StrictMode>,
);
