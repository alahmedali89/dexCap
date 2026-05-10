import React from "react";
import { Users, Target, Rocket, Award, Heart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function AboutUs() {
  const stats = [
    { label: "Active Solvers", value: "250K+" },
    { label: "Daily Tasks", value: "1.2M+" },
    { label: "Rewards Paid", value: "$4.5M+" },
    { label: "Accuracy Rate", value: "99.9%" },
  ];

  const values = [
    {
      title: "Transparency",
      description: "We believe in clear reward structures and open communication with our community of solvers.",
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Security",
      description: "Our platform uses military-grade encryption to protect your data and earnings at all times.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Innovation",
      description: "We are constantly evolving our captcha technology to provide cleaner and faster verification methods.",
      icon: <Rocket className="w-6 h-6 text-rose-500" />,
    },
  ];

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
          </span>
          Our Journey
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] flex flex-col items-center">
          <span className="bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] bg-[image:var(--hero-red-gradient)]">
            Pioneering the
          </span>
          <span className="bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] bg-[image:var(--hero-gradient)]">
            Reward Economy
          </span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          DexCaptcha was founded with a simple mission: to turn the internet's most common friction point into a source of value for millions of users worldwide.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] text-center backdrop-blur-xl"
          >
            <div className="text-3xl font-black text-[var(--text-primary)] mb-1">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">Who We Are</h2>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
            <p>
              DexCaptcha is a premier reward platform designed to help you monetize your free time. We provide simple, secure tasks that allow you to earn real rewards.
            </p>
            <p>
              Our mission is to provide a transparent and reliable earning ecosystem for everyone, everywhere.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-[40px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-[var(--border-color)] overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Users className="w-32 h-32 text-blue-500 opacity-20" />
          </div>
          <div className="absolute inset-0 bg-grid-white opacity-5" />
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="mb-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">Our Values</h2>
          <p className="text-[var(--text-secondary)]">The principles that guide every feature we build.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-6 p-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] w-fit group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{val.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 4s ease infinite;
        }
      `}} />
    </div>
  );
}
