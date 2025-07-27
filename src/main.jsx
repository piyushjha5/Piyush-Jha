import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Navigation />
      <App />
    </ThemeProvider>
  </StrictMode>
);
