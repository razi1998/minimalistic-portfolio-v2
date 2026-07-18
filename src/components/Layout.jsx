import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const updateCursor = (x, y, active = true) => {
    setCursor({ x, y, active });
  };

  const handleMouseMove = (event) => {
    updateCursor(event.clientX, event.clientY);
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    if (touch) updateCursor(touch.clientX, touch.clientY);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    if (touch) updateCursor(touch.clientX, touch.clientY);
  };

  const handleMouseLeave = () => {
    setCursor((prev) => ({ ...prev, active: false }));
  };

  const handleTouchEnd = () => {
    setCursor((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      className="relative min-h-screen rp-page-background text-[color:var(--rp-text-primary)] font-body"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] rp-grain" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: cursor.active
            ? `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, rgba(45, 23, 167, 0.50) 0%, rgba(135, 177, 244, 0.18) 28%, transparent 60%)`
            : "transparent",
          transition: "background 0.18s ease-out",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed h-72 w-72 rounded-full blur-3xl opacity-80 z-[1]"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(59,130,246,0.18) 28%, transparent 60%)",
          transition: "opacity 0.18s ease-out, transform 0.18s ease-out",
          opacity: cursor.active ? 1 : 0,
        }}
        aria-hidden="true"
      />
      <Navbar />
      <main className="relative z-[2] pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
