import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { MyRoutes } from "./Routes";
import { Navbar } from "./components/Navbar";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="absolute inset-0 h-full w-full bg-background bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]">
            <Navbar />
            <MyRoutes />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
