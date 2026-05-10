import React from "react";
import { FileText, ArrowLeft, CheckCircle2, UserCircle, ShieldAlert, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function TermsOfService() {
  const sections = [
    {
      id: "license",
      title: "1. License",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: "Unless otherwise stated, Dexcaptcha and/or its licensors own the intellectual property rights for all material on Dexcaptcha. All intellectual property rights are reserved. You may access this from Dexcaptcha for your own personal use subjected to restrictions set in these terms and conditions.",
      subpoints: ["Republish material from Dexcaptcha", "Sell, rent, or sub-license material from Dexcaptcha", "Reproduce, duplicate, or copy material from Dexcaptcha", "Redistribute content from Dexcaptcha"]
    },
    {
      id: "accounts",
      title: "2. User Accounts",
      icon: <UserCircle className="w-5 h-5" />,
      content: "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use \"strong\" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.",
      subpoints: ["Strong password protection", "Account responsibility", "Registration data accuracy"]
    },
    {
      id: "prohibited",
      title: "3. Prohibited Activities",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: "You agree not to engage in any of the following prohibited activities:",
      subpoints: ["Using any automated system (robots, spiders, offline readers)", "Using a VPN, proxy, or any other means to mask your true location or identity", "Attempting to interfere with, compromise the system integrity or security", "Decipher any transmissions to or from the servers running the Service"]
    },
    {
      id: "termination",
      title: "4. Termination",
      icon: <Clock className="w-5 h-5" />,
      content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.",
      subpoints: ["Immediate suspension", "Breach of terms", "Survival of provisions"]
    },
    {
      id: "contact",
      title: "5. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: "If you have any questions about these Terms, please contact us at:",
      subpoints: ["Email: dexcaptch@gmail.com", "Response: within 48 hours", "Direct support channel"]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-secondary)] font-sans selection:bg-blue-500/30">
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar / TOC */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-12">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-50 mb-4 px-3">Agreement</p>
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

              <div className="mt-12 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                <div className="flex items-center gap-2 text-indigo-500 mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Compliance</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-70">
                  Stay updated. These terms protect both you and our platform.
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Clock className="w-3 h-3" /> Updated Jan 24, 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter italic">
                Terms of <span className="text-indigo-500">Service</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-16 leading-relaxed max-w-2xl font-medium">
                Welcome to Dexcaptcha! These terms and conditions outline the rules and regulations for the 
                use of our application. By accessing this app, we assume you accept these terms.
              </p>

              <div className="space-y-20">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 group">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 transition-all duration-300">
                        {React.cloneElement(section.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-500" })}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight uppercase italic">{section.title}</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                          {section.content}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.subpoints.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] opacity-80 backdrop-blur-sm p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md">
                    <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
                      <Mail className="w-7 h-7 text-indigo-500" />
                    </div>
                    <h3 className="text-3xl font-black text-[var(--text-primary)] mb-4 tracking-tight uppercase italic">Support?</h3>
                    <p className="text-[var(--text-secondary)] font-medium mb-0">
                      If you have any questions about these Terms, please contact us at dexcaptch@gmail.com.
                    </p>
                  </div>
                  <a href="mailto:dexcaptch@gmail.com" className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95">
                    Contact Us
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
