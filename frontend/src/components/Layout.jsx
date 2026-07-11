import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-[color:var(--rp-bg)] text-[color:var(--rp-text-primary)] font-body">
      {/* Grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] rp-grain" aria-hidden="true" />
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
