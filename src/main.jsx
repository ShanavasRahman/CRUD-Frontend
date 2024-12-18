import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
