import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Hammer, AlertCircle, Settings, ShieldCheck, Gauge } from 'lucide-react';

export const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        
        {/* Decorative Grid - animated */}
        <div className="absolute inset-0 bg-grid-moving [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center relative z-10"
      >
        <div className="relative inline-block mb-12">
          {/* Animated Icon Container */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-[32px] flex items-center justify-center border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-xl"
          >
            <Hammer className="w-12 h-12 text-blue-400" />
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 p-2 bg-slate-900/80 border border-slate-700/50 rounded-xl backdrop-blur-md"
          >
            <Settings className="w-5 h-5 text-blue-500 animate-spin-slow" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 p-2 bg-slate-900/80 border border-slate-700/50 rounded-xl backdrop-blur-md"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </motion.div>
        </div>
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
              SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">OFFLINE</span>
            </h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed"
          >
            We're currently performing deep systemic upgrades to refine the DexCaptcha engine. 
            Estimated downtime: <span className="text-white font-bold">Minimal</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6 pt-8"
          >
            <div className="flex items-center gap-4 px-6 py-3 bg-blue-500/5 rounded-2xl border border-blue-500/10 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
              <div className="relative">
                <AlertCircle className="w-5 h-5 text-blue-400" />
                <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-25" />
              </div>
              <span className="text-xs font-black text-blue-400 uppercase tracking-[0.2em]">Maintenance Mode Active</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Mock Globe for the status list if not available
const Globe = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

