import { StrictMode } from "react";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import "./index.css";
import App from "./App";

// Förrenderar sidan till färdig HTML vid build, och tar över i webbläsaren efteråt
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
);
