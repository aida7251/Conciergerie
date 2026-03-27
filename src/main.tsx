// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ServicesPage from "./pages/ServicesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EstimationPage from "./pages/EstimationPage";
import BlogPage from "./pages/BlogPage";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/estimation" element={<EstimationPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
);