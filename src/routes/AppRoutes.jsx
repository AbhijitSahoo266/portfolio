import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "../layouts/Layout.jsx";

// Lazy Loaded Routed Page Components
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Services = lazy(() => import("../pages/Services/Services.jsx"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio.jsx"));
const Skills = lazy(() => import("../pages/Skills/Skills.jsx"));
const Education = lazy(() => import("../pages/Education/Education.jsx"));
const Certifications = lazy(() => import("../components/Certifications/Certifications"));
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));

const PageFallback = () => (
  <div className="w-full h-full min-h-[50vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-[var(--main-color)]/20 border-t-[var(--main-color)] rounded-full animate-spin" />
  </div>
);

export default function AppRoutes() {
  // Get last route if available, otherwise default to /home
  const savedRoute = sessionStorage.getItem("lastVisitedRoute") || "/home";

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect root '/' to last visited or /home */}
          <Route index element={<Navigate to={savedRoute} replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
          {/* Wildcard fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}