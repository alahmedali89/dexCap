import React from "react";
import { Shield, ArrowLeft, Eye, Lock, Database, UserCheck, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function PrivacyPolicy() {
  const sections = [
    {
      id: "data-collection",
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: "We collect, use, store, and transfer specific kinds of data to provide our services efficiently. We have grouped this data as follows:",
      subpoints: ["Identity Data: Username and email address", "Technical Data: Device ID, model, OS (No IP address)", "Usage Data: Tasks, earnings, points balance"]
    },
    {
      id: "usage",
      title: "2. How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: "We strictly use your personal data only when the law allows us to. Most commonly, we use your personal data to:",
      subpoints: ["Provide, operate, and optimize our services", "Manage your account and process rewards", "Improve user experience through analytics", "Detect and prevent fraudulent activity"]
    },
    {
      id: "security",
      title: "3. Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: "We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is limited to those employees and partners who have a strictly business need to know.",
      subpoints: ["Prevent accidental loss", "Avoid unauthorized access", "Strict data access controls"]
    },
    {
      id: "rights",
      title: "4. Your Legal Rights",
      icon: <UserCheck className="w-5 h-5" />,
      content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or deletion of your personal data.",
      subpoints: ["Right to request access", "Right to request correction", "Right to request deletion"]
    },
    {
      id: "contact",
      title: "5. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: "If you have any questions about this privacy policy or our privacy practices, please contact our support team at:",
      subpoints: ["Email: dexcaptch@gmail.com", "Privacy inquiries", "Data access requests"]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-secondary)] font-sans selection:bg-blue-500/30">
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar / TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-12">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-50 mb-4 px-3">Sections</p>
                {sections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)] transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Privacy First</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-70">
                  Your data is encrypted and never sold to third parties.
                </p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Clock className="w-3 h-3" /> Updated Jan 24, 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter italic">
                Privacy <span className="text-blue-500">Policy</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-16 leading-relaxed max-w-2xl font-medium">
                Welcome to Dexcaptcha. We respect your privacy and are deeply committed to protecting 
                your personal data. This document explains how we look after your information.
              </p>

              <div className="space-y-20">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 group">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300">
                        {React.cloneElement(section.icon as React.ReactElement, { className: "w-6 h-6 text-blue-500" })}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight uppercase italic">{section.title}</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                          {section.content}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.subpoints.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] opacity-80 backdrop-blur-sm p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-32 p-12 rounded-[40px] bg-[var(--card-bg)] border border-[var(--border-color)] relative overflow-hidden group">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                      <Mail className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="text-3xl font-black text-[var(--text-primary)] mb-4 tracking-tight uppercase italic">Questions?</h3>
                    <p className="text-[var(--text-secondary)] font-medium mb-0">
                      If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </p>
                  </div>
                  <a href="mailto:dexcaptch@gmail.com" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                    Contact Support Team
                  </a>
                </div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
