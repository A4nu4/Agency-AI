import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import "@fontsource-variable/manrope";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

import { lazy } from "react";
import { LazyMotion, domAnimation } from "motion/react";

const Services = lazy(() => import("@/components/Services"));
const OurWork = lazy(() => import("@/components/OurWork"));
const Teams = lazy(() => import("@/components/Teams"));
const ContactUs = lazy(() => import("@/components/ContactUs"));
const Footer = lazy(() => import("@/components/Footer"));

const App = () => {
  const dotRef = React.useRef(null);
  const outlineRef = React.useRef(null);

  // Refs for custom cursor Position tracking
  const mouse = React.useRef({ x: 0, y: 0 });
  const position = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isMobile = window.innerWidth <= 768;

    if (isTouchDevice || isMobile) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (outlineRef.current) outlineRef.current.style.display = "none";
      return;
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <LazyMotion features={domAnimation}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />

        <Suspense fallback={null}>
          <Services />
          <OurWork />
          <Teams />
          <ContactUs />
          <Footer theme={theme} />
        </Suspense>
      </LazyMotion>

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      ></div>
    </div>
  );
};

export default App;
