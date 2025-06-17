import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ListarTareas } from "./screens/ListarTareas/ListarTareas";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ListarTareas />
  </StrictMode>,
);
