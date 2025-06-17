import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CrearTarea } from "./screens/CrearTarea";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CrearTarea />
  </StrictMode>,
);
