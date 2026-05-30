import React from "react";
import { 
  FileText, 
  ArrowLeft, 
  Clock, 
  Mail, 
  Users, 
  CreditCard, 
  Ban, 
  ShieldCheck, 
  Megaphone, 
  AlertTriangle, 
  Scale, 
  RefreshCw, 
  Zap, 
  ShieldAlert, 
  UserCheck 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface TermsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function TermsOfService() {
  const sections: TermsSection[] = [
    {
      id: "license",
      title: "1. License",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Unless otherwise stated, DexCaptcha and/or its licensors own the intellectual property rights for all material within DexCaptcha. All intellectual property rights are reserved. You may access DexCaptcha for your own personal use, subject to the restrictions set in these terms.
          </p>
          <p className="font-bold text-[var(--text-primary)]">You must not:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Republish, sell, rent, or sub-license material from DexCaptcha.</li>
            <li className="list-disc pl-1">Reproduce, duplicate, copy, or redistribute content from DexCaptcha.</li>
            <li className="list-disc pl-1">Use any automated tool, script, or bot to interact with any part of the app.</li>
            <li className="list-disc pl-1">Reverse engineer, decompile, or tamper with the app or its backend systems.</li>
            <li className="list-disc pl-1">Modify or create derivative versions of the DexCaptcha application.</li>
          </ul>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "2. Eligibility & Age Requirement",
      icon: <Users className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
          <li className="list-disc pl-1">
            You must be <strong className="text-[var(--text-primary)]">18 years of age or older</strong> to use DexCaptcha.
          </li>
          <li className="list-disc pl-1">By creating an account, you confirm you meet this age requirement.</li>
          <li className="list-disc pl-1">DexCaptcha reserves the right to terminate any account found to belong to a minor, with immediate forfeiture of any accumulated balance.</li>
          <li className="list-disc pl-1 font-bold">You must provide accurate and truthful information during registration.</li>
          <li className="list-disc pl-1">One account per person is permitted. Creating multiple accounts is strictly prohibited.</li>
        </ul>
      )
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
          <li className="list-disc pl-1">You are responsible for safeguarding your password and all activity under your account.</li>
          <li className="list-disc pl-1">We encourage strong passwords combining uppercase, lowercase, numbers, and symbols.</li>
          <li className="list-disc pl-1">You must verify your email address before accessing any app features.</li>
          <li className="list-disc pl-1">
            Username and email can be updated once every <strong className="text-[var(--text-primary)]">50 days</strong>.
          </li>
          <li className="list-disc pl-1">
            You must notify us immediately at{" "}
            <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline font-bold">
              dexcaptcha@gmail.com
            </a>{" "}
            if you suspect unauthorized access to your account.
          </li>
          <li className="list-disc pl-1">DexCaptcha will not be liable for any loss resulting from unauthorized use of your account.</li>
        </ul>
      )
    },
    {
      id: "earning-rules",
      title: "4. Earning Rules & Rewards",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Points System</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Points are earned by watching rewarded video ads, completing daily check-ins, finishing tasks, and referring friends.</li>
              <li className="list-disc pl-1">Points are spent to unlock and solve captchas which generate monetary rewards.</li>
              <li className="list-disc pl-1">Points have no monetary value on their own and cannot be withdrawn directly.</li>
              <li className="list-disc pl-1">
                Points expire if your account is inactive for <strong className="text-[var(--text-primary)]">90 consecutive days.</strong>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Captcha Solving</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Captcha rewards are credited to your balance upon successful completion.</li>
              <li className="list-disc pl-1">Incorrect answers may result in a point penalty as displayed on each captcha screen.</li>
              <li className="list-disc pl-1">Automated solving, use of scripts, or any non-human interaction is strictly prohibited and will result in immediate account ban.</li>
              <li className="list-disc pl-1 font-bold">DexCaptcha reserves the right to adjust captcha reward rates at any time.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Daily Limits</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Maximum daily earning limit applies as displayed in the app.</li>
              <li className="list-disc pl-1 font-bold">Maximum withdrawal per transaction: $10.00.</li>
              <li className="list-disc pl-1 font-bold">Maximum daily withdrawal limit: $6.00.</li>
              <li className="list-disc pl-1">These limits may be updated at our discretion with prior notice.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Referral Program</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1 font-bold">You earn bonus points when a friend signs up using your referral code.</li>
              <li className="list-disc pl-1">Referral reward is granted only after the referred user completes the required number of captchas as specified in the app.</li>
              <li className="list-disc pl-1">Self-referrals, fake referrals, or using multiple devices to generate referrals are prohibited.</li>
              <li className="list-disc pl-1">DexCaptcha reserves the right to reverse referral rewards found to be fraudulent.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "payments",
      title: "5. Payments & Withdrawals",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">General Terms</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1 font-bold">Minimum withdrawal: $0.25 via Paytm / $0.30 via Binance &amp; PayPal.</li>
              <li className="list-disc pl-1 font-bold">Maximum withdrawal: $10.00 per transaction.</li>
              <li className="list-disc pl-1 font-bold">Daily withdrawal limit: $6.00.</li>
              <li className="list-disc pl-1">All withdrawals are <strong className="text-[var(--text-primary)]">irreversible</strong> once processed. Double-check your payment details before submitting.</li>
              <li className="list-disc pl-1 font-bold">DexCaptcha processes withdrawals manually. Estimated processing time is 24&ndash;72 hours from request submission.</li>
              <li className="list-disc pl-1">In exceptional cases processing may take up to 7 business days.</li>
              <li className="list-disc pl-1">Balances are in USD. INR equivalent depends on exchange rate at time of processing.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Paytm Payments</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Paytm withdrawals are sent to the mobile number you provide.</li>
              <li className="list-disc pl-1">Ensure your Paytm account is active and verified to receive payments.</li>
              <li className="list-disc pl-1">DexCaptcha is not responsible for failed payments due to incorrect Paytm details provided by the user.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Binance / Cryptocurrency Payments (USDT)</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">
                Cryptocurrency payments are made in <strong className="text-[var(--text-primary)]">USDT (Tether)</strong> to your Binance wallet address.
              </li>
              <li className="list-disc pl-1">You are solely responsible for providing the correct Binance wallet address. Payments sent to incorrect addresses cannot be recovered.</li>
              <li className="list-disc pl-1 font-bold">Users are solely responsible for declaring and paying all applicable taxes on cryptocurrency rewards received, including the 30% VDA tax under Section 115BBH of the Indian Income Tax Act and any regulations applicable in your country.</li>
              <li className="list-disc pl-1">Cryptocurrency transactions are irreversible by nature. DexCaptcha cannot reverse or recover any sent crypto payment.</li>
              <li className="list-disc pl-1">DexCaptcha reserves the right to suspend crypto payments if regulatory requirements change.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">PayPal Payments (International Users)</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">PayPal payments are available for users outside India.</li>
              <li className="list-disc pl-1">Payments are sent to your verified PayPal email address.</li>
              <li className="list-disc pl-1">PayPal fees, if any, are borne by the recipient.</li>
              <li className="list-disc pl-1">DexCaptcha is not responsible for PayPal account limitations or restrictions imposed by PayPal on your account.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Payment Disputes</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">
                If a payment is not received within 7 business days of the estimated completion date, contact us at{" "}
                <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline font-bold">
                  dexcaptcha@gmail.com
                </a>{" "}
                with your Transaction ID.
              </li>
              <li className="list-disc pl-1">DexCaptcha will investigate and respond within 48 hours.</li>
              <li className="list-disc pl-1 font-bold text-red-500">Chargebacks or disputes filed with payment providers without first contacting DexCaptcha support will result in immediate account termination.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <h4 className="text-xs font-black uppercase tracking-[0.1em] text-blue-500 mb-3">Balance Forfeiture</h4>
            <p className="text-sm font-semibold mb-3">Your balance will be permanently forfeited without compensation if:</p>
            <ul className="space-y-1.5 pl-4 text-sm font-medium">
              <li className="list-disc pl-1">Your account is terminated due to violation of these Terms.</li>
              <li className="list-disc pl-1">Fraudulent activity is detected on your account.</li>
              <li className="list-disc pl-1">You are found to be under 18 years of age.</li>
              <li className="list-disc pl-1">Your account is inactive for more than 90 days.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "prohibited",
      title: "6. Prohibited Activities",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>You agree not to engage in any of the following:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Using any automated system including bots, robots, spiders, or scripts to interact with DexCaptcha.</li>
            <li className="list-disc pl-1">
              Using a <strong className="text-[var(--text-primary)]">VPN, proxy, DNS changer, or any means</strong> to mask your true location or identity.
            </li>
            <li className="list-disc pl-1">
              Creating or operating <strong className="text-[var(--text-primary)]">multiple accounts</strong> on the same or different devices.
            </li>
            <li className="list-disc pl-1">
              Using a <strong className="text-[var(--text-primary)]">modified, cracked, or tampered version</strong> of the DexCaptcha application.
            </li>
            <li className="list-disc pl-1">Attempting to manipulate your points balance, earnings, or withdrawal amounts through any technical means.</li>
            <li className="list-disc pl-1 font-medium">Sharing, selling, or transferring your account to another person.</li>
            <li className="list-disc pl-1">
              Exploiting bugs or vulnerabilities. Any discovered vulnerability must be reported to{" "}
              <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline">
                dexcaptcha@gmail.com
              </a>.
            </li>
            <li className="list-disc pl-1">Engaging in any activity that disrupts or interferes with DexCaptcha servers or infrastructure.</li>
            <li className="list-disc pl-1">Using DexCaptcha for any unlawful purpose or in violation of any local, national, or international laws.</li>
          </ul>
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 font-bold">
            Violation of any prohibited activity will result in immediate account termination and permanent forfeiture of balance without prior notice or compensation.
          </div>
        </div>
      )
    },
    {
      id: "integrity",
      title: "7. Anti-Fraud & Account Integrity",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>DexCaptcha employs advanced fraud detection including:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Device ID verification to detect multiple accounts.</li>
            <li className="list-disc pl-1">VPN and proxy detection systems.</li>
            <li className="list-disc pl-1">App integrity checks to detect modified applications.</li>
            <li className="list-disc pl-1">Backend balance validation &mdash; all data is verified server-side and cannot be manipulated client-side.</li>
            <li className="list-disc pl-1">Behavioral analysis to detect non-human activity.</li>
          </ul>
          <p className="font-bold">
            DexCaptcha reserves the right to withhold payment, suspend, or permanently ban any account found engaging in fraudulent activity. All fraud decisions are final.
          </p>
        </div>
      )
    },
    {
      id: "advertising",
      title: "8. Advertising",
      icon: <Megaphone className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
          <li className="list-disc pl-1">DexCaptcha displays advertisements to fund the reward program.</li>
          <li className="list-disc pl-1 font-bold text-[var(--text-primary)]">
            Rewarded video ads are always opt-in &mdash; you choose to watch in exchange for points.
          </li>
          <li className="list-disc pl-1">You must not use ad blockers or any tools that interfere with ad delivery.</li>
          <li className="list-disc pl-1">Artificially inflating ad views or interacting with ads in a non-genuine manner is prohibited and will result in account termination.</li>
          <li className="list-disc pl-1">Ad content is served by third-party networks. DexCaptcha is not responsible for the content of third-party advertisements.</li>
        </ul>
      )
    },
    {
      id: "termination",
      title: "9. Termination",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason including but not limited to:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Breach of these Terms of Service.</li>
            <li className="list-disc pl-1">Fraudulent or suspicious activity.</li>
            <li className="list-disc pl-1">Violation of Google Play Store policies.</li>
            <li className="list-disc pl-1">Providing false information during registration.</li>
            <li className="list-disc pl-1">Being found to be under 18 years of age.</li>
            <li className="list-disc pl-1">Extended account inactivity (90+ days).</li>
          </ul>
          <p>
            Upon termination, your right to use DexCaptcha ceases immediately and your balance is permanently forfeited.
          </p>
          <p>
            You may also delete your own account at any time via <strong className="text-[var(--text-primary)]">Settings &rarr; Delete Account</strong>, which permanently removes all your data and forfeits any remaining balance.
          </p>
        </div>
      )
    },
    {
      id: "disclaimer",
      title: "10. Disclaimer of Warranties",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
          <li className="list-disc pl-1">DexCaptcha is provided on an "as is" and "as available" basis.</li>
          <li className="list-disc pl-1">We do not guarantee uninterrupted, error-free operation of the app.</li>
          <li className="list-disc pl-1">Reward rates, captcha availability, and earning limits may change at any time.</li>
          <li className="list-disc pl-1">DexCaptcha does not guarantee any specific level of earnings. Actual earnings depend on user activity, ad availability, and platform conditions.</li>
          <li className="list-disc pl-1">We are not responsible for losses arising from device failure, internet connectivity issues, or third-party service outages.</li>
        </ul>
      )
    },
    {
      id: "liability",
      title: "11. Limitation of Liability",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>To the maximum extent permitted by applicable law, DexCaptcha shall not be liable for:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Any indirect, incidental, or consequential damages arising from use of the app.</li>
            <li className="list-disc pl-1">Loss of earnings due to account suspension or termination for policy violations.</li>
            <li className="list-disc pl-1">Failed or delayed payments due to incorrect payment details provided by the user.</li>
            <li className="list-disc pl-1">Any tax liability arising from rewards received including cryptocurrency taxes.</li>
            <li className="list-disc pl-1">Any losses arising from changes in cryptocurrency value.</li>
          </ul>
        </div>
      )
    },
    {
      id: "changes",
      title: "12. Changes to Terms",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>DexCaptcha reserves the right to update these Terms of Service at any time. We will notify users of significant changes via:</p>
          <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">In-app notification.</li>
            <li className="list-disc pl-1">Email to your registered address.</li>
          </ul>
          <p>
            Continued use of DexCaptcha after changes constitutes acceptance of the updated Terms. The "Last Updated" date at the top always reflects the most recent revision.
          </p>
        </div>
      )
    },
    {
      id: "governing",
      title: "13. Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <p>
          These Terms shall be governed by and construed in accordance with the laws of <strong className="text-[var(--text-primary)]">India</strong>. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in India.
        </p>
      )
    },
    {
      id: "contact",
      title: "14. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Email:</strong>{" "}
              <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline">
                dexcaptcha@gmail.com
              </a>
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)] font-bold">Response Time:</strong> Within 24 hours
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)] font-bold">In-App:</strong> Settings &rarr; Contact Support
            </li>
          </ul>
        </div>
      )
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
                    className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)] transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Clock className="w-3 h-3" /> Updated May 27, 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter italic">
                Terms of <span className="text-blue-500">Service</span>
              </h1>
              
              <div className="text-xl text-[var(--text-secondary)] mb-16 leading-relaxed max-w-2xl font-medium space-y-4">
                <p>
                  Welcome to <strong>DexCaptcha!</strong> These terms and conditions outline the rules and regulations for the use of our application. By accessing this app, you confirm that you are at least <strong>18 years of age</strong> and agree to be bound by these terms. Do not continue to use DexCaptcha if you do not agree to all terms stated on this page.
                </p>
              </div>

              <div className="space-y-20">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 group">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300">
                        {React.cloneElement(section.icon as React.ReactElement, { className: "w-6 h-6 text-blue-500" })}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 tracking-tight uppercase italic">{section.title}</h2>
                        <div className="text-[var(--text-secondary)] leading-relaxed font-semibold">
                          {section.content}
                        </div>
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
                      If you have any questions about these Terms of Service, please contact us at dexcaptcha@gmail.com.
                    </p>
                  </div>
                  <a href="mailto:dexcaptcha@gmail.com" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shrink-0">
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
