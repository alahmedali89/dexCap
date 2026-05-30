import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { LiquidBackground } from "./LiquidBackground";
import { ScrollToTop } from "../ui/ScrollToTop";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Automatically scroll to top of the page on route/navigation change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col text-[var(--text-primary)] bg-[var(--bg-color)] selection:bg-blue-500/30 overflow-x-hidden font-sans transition-colors duration-300">
      <LiquidBackground />
      <Navbar />
      <ScrollToTop />
      <div className="relative z-10 flex flex-col min-h-screen pt-24">
        <main className="flex-1 flex flex-col w-full h-full pb-0 md:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex-grow flex flex-col w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        {!isDashboard && <Footer />}
      </div>
    </div>
  );
}

