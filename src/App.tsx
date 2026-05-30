/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { FAQ } from "./pages/FAQ";
import { Legal } from "./pages/Legal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Admin } from "./pages/Admin";
import { Maintenance } from "./pages/Maintenance";
import { LogProvider } from "./context/LogContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LoadingProvider } from "./context/LoadingContext";
import { SettingsProvider, useSettings } from "./context/SettingsContext";
import { GlobalLoader } from "./components/ui/GlobalLoader";
import { Rocket, ShieldAlert } from "lucide-react";

const PreLaunch = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 overflow-hidden relative">
    {/* Dynamic Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grid-moving [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-100" />
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl w-full text-center relative z-10"
    >
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-[32px] flex items-center justify-center mx-auto mb-12 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-xl"
      >
        <Rocket className="w-12 h-12 text-blue-400" />
      </motion.div>
      
      <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
        Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Soon</span>
      </h1>
      
      <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
        The most advanced reward engine. Solve various types of captchas and get rewarded in real-time. Fast captcha challenge, daily new tasks, Different Payment Methods.
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Ignition Sequence Started</span>
        </div>
        
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-4" />
      </div>
    </motion.div>

    {/* Bottom Bar */}
    <div className="absolute bottom-12 w-full px-12 flex justify-between items-center opacity-20">
      <div className="text-[10px] font-mono text-blue-400">STATUS: PRE_FLIGHT</div>
      <div className="text-[10px] font-mono text-blue-400 underline underline-offset-4">DEXCAPTCHA V1.0</div>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const { settings } = useSettings();
  const location = useLocation();

  // Always allow admin panel regardless of state
  if (location.pathname === '/admin') {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    );
  }

  if (settings.isMaintenanceMode) {
    return <Maintenance />;
  }

  if (!settings.isWebsiteLaunched && location.pathname !== '/admin') {
    return <PreLaunch />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <GlobalLoader />
        <SettingsProvider>
          <LogProvider>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </LogProvider>
        </SettingsProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
