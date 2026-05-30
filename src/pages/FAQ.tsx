import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowLeft, MessageSquare, Shield, Wallet, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[var(--border-color)] last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-500' : 'text-[var(--text-primary)] group-hover:text-blue-400'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-[var(--card-bg)] text-[var(--text-secondary)]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--text-secondary)] leading-relaxed font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      title: "General",
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        {
          question: "What is DexCaptcha?",
          answer: "DexCaptcha lets you earn rewards by solving captchas, watching ads, and completing simple tasks."
        },
        {
          question: "How do I earn points?",
          answer: "You can earn points by watching rewarded video ads daily check-in, partner task and by completing Quick Links."
        },
        {
          question: "How do I earn rewards?",
          answer: "Watch ads → Earn points → Solve captchas → Get Paid."
        },
        {
          question: "Why do I need to watch ads?",
          answer: "You need Points to solve the captchas, Points are earned by Watching Ads, Completing Offer and Daily Checkin."
        },
        {
          question: "Can I use multiple accounts?",
          answer: "❌ No. Multiple accounts, VPN, Ad Blocker or DNS, use will lead to a ban."
        }
      ]
    },
    {
      title: "Withdrawals",
      icon: <Wallet className="w-5 h-5" />,
      items: [
        {
          question: "How do I withdraw my balance?",
          answer: "Navigate to the Wallet tab, select your preferred payment method (Paytm or FaucetPay), enter the amount you wish to withdraw, and submit your request. Please ensure your details are correct."
        },
        {
          question: "What are the withdrawal options?",
          answer: "You can withdraw using Binance & Paytm."
        },
        {
          question: "How long does a withdrawal take?",
          answer: "Binance & Paytm payments maybe processed within 24-48 hours."
        },
        {
          question: "What's the minimum withdrawal?",
          answer: "Binance: $0.50 | Paytm: $0.25 (Max limit: $10 for both — may change anytime)."
        }
      ]
    },
    {
      title: "Support",
      icon: <Zap className="w-5 h-5" />,
      items: [
        {
          question: "How does the referral system work?",
          answer: "Invite friends with your referral code and earn 50-100 Points when they Signup with your code. The referral reward is granted when the user has successfully completed 50 to 100 captchas. You check the progress in Settings → Captcha progress."
        },
        {
          question: "My payment didn't arrive — what should I do?",
          answer: "Check your transaction history first. If still not received, contact support with your transaction details."
        },
        {
          question: "How can I contact support?",
          answer: "Go to Settings → Contact Support → Enter Your Message. We usually reply within 24 hours."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-secondary)] font-sans selection:bg-blue-500/30">
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-12">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-50 mb-4 px-3">Categories</p>
                {categories.map((category) => (
                  <a 
                    key={category.title.toLowerCase()}
                    href={`#${category.title.toLowerCase()}`}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)] transition-all text-[var(--text-secondary)]"
                  >
                    <div className="text-blue-500/70">
                      {React.cloneElement(category.icon, { className: "w-4 h-4" })}
                    </div>
                    <span>{category.title}</span>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Help Center</span>
                </div>
                <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                  Can't find the answer you are looking for? Our support team is online 24/7.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight italic">
                Frequently Asked <span className="text-blue-500">Questions</span>
              </h1>
              <p className="text-xl leading-relaxed font-medium">
                Everything you need to know about earning, security, and our platform.
              </p>
            </motion.div>

            <div className="space-y-16">
              {categories.map((category, catIdx) => (
                <section key={category.title} id={category.title.toLowerCase()} className="scroll-mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-black uppercase tracking-widest text-[var(--text-primary)] italic">
                  {category.title}
                </h2>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[32px] px-8 overflow-hidden backdrop-blur-xl">
                {category.items.map((item, idx) => {
                  const globalIdx = catIdx * 10 + idx;
                  return (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === globalIdx}
                      onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] border border-blue-500/20 bg-blue-500/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
          <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-[var(--text-primary)] mb-4 uppercase italic">Still have questions?</h2>
          <p className="text-lg mb-10 max-w-lg mx-auto font-medium">
            Our support team is online 24/7 to help you with any technical or payment issues.
          </p>
          <a
            href="mailto:dexcaptcha@gmail.com"
            className="inline-flex h-14 items-center justify-center px-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.4)] border-0 hover:scale-105 active:scale-95"
          >
            Contact Support
          </a>
        </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
