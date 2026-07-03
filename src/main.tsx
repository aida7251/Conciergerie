import ReactDOM from "react-dom/client";
import App from "./App";
import ServicesPage from "./pages/ServicesPage";
import ChantierPage from "./pages/ChantierPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EstimationPage from "./pages/EstimationPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"          element={<App />} />
      <Route path="/services"  element={<ServicesPage />} />
      <Route path="/chantier"  element={<ChantierPage />} />
      <Route path="/estimation" element={<EstimationPage />} />
      <Route path="/blog"      element={<BlogPage />} />
      <Route path="/about"     element={<AboutPage />} />
      <Route path="/contact"   element={<ContactPage />} />
      <Route path="/join"      element={<JoinPage />} />
    </Routes>
  </BrowserRouter>
);