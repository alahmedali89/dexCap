import React from "react";
import { 
  Shield, 
  ArrowLeft, 
  Eye, 
  Lock, 
  Database, 
  UserCheck, 
  Mail, 
  Clock,
  Zap,
  Megaphone,
  Wallet,
  Server,
  ShieldCheck,
  History,
  Baby,
  Cookie,
  ArrowRightLeft,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function PrivacyPolicy() {
  const sections: PolicySection[] = [
    {
      id: "info-collect",
      title: "1. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p>
            We collect, use, store, and transfer specific kinds of data to provide our services efficiently. We have grouped this data as follows:
          </p>
          
          <div className="space-y-3">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">a) Identity Data</h4>
            <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Username and email address used for account creation and authentication.</li>
              <li className="list-disc pl-1">Email verification status (your account requires verified email before access is granted).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">b) Technical Data</h4>
            <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Unique device identifiers (Device ID), device model, and operating system type.</li>
              <li className="list-disc pl-1">
                We temporarily process IP addresses <strong className="text-[var(--text-primary)]">solely for fraud detection and security purposes</strong>. This data is not stored permanently and is not used for any other purpose.
              </li>
              <li className="list-disc pl-1">VPN, DNS, and proxy usage detection data used exclusively to prevent platform abuse and multi-account fraud.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">c) Usage Data</h4>
            <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Details about how you interact with our app, including tasks completed, captchas solved, earning history, and points balance.</li>
              <li className="list-disc pl-1">Engagement data from specific promotional features including Scratch Cards, Read &amp; Earn, and Mystery Rewards.</li>
              <li className="list-disc pl-1">Ad interaction data including ads watched and rewards claimed.</li>
              <li className="list-disc pl-1">Daily check-in history and referral activity.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">d) Financial Data</h4>
            <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Payment method details (Paytm mobile number, Binance wallet address, or PayPal email) provided by you when requesting withdrawals.</li>
              <li className="list-disc pl-1">Withdraw request history, transaction IDs, and payment status.</li>
              <li className="list-disc pl-1">
                We do <strong className="text-[var(--text-primary)]">not</strong> store full bank account details or card information.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">e) Communications Data</h4>
            <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Messages sent through our in-app Contact Support feature.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "collection-method",
      title: "2. How We Collect Your Data",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <ul className="space-y-4">
          <li className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
            <span className="text-sm font-medium leading-relaxed">
              <strong className="text-[var(--text-primary)]">Directly from you</strong> when you register, update your profile, request withdrawals, or contact support.
            </span>
          </li>
          <li className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
            <span className="text-sm font-medium leading-relaxed">
              <strong className="text-[var(--text-primary)]">Automatically</strong> through your use of the app including ad views, captcha completions, and task activity.
            </span>
          </li>
          <li className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
            <span className="text-sm font-medium leading-relaxed">
              <strong className="text-[var(--text-primary)]">Third-party services</strong> including Firebase (authentication), Supabase (database and storage), and advertising networks listed in Section 6.
            </span>
          </li>
        </ul>
      )
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We use your personal data only when the law allows us to. We use your data to:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Provide, operate, and optimize our services.</li>
            <li className="list-disc pl-1">Verify your identity and maintain account security.</li>
            <li className="list-disc pl-1">Process your reward points and withdrawal payments.</li>
            <li className="list-disc pl-1">Detect and prevent fraudulent activity including multi-account abuse, VPN misuse, modified app usage, and automated bot activity.</li>
            <li className="list-disc pl-1">Improve user experience through analytics and performance monitoring.</li>
            <li className="list-disc pl-1">Send notifications about your account, tasks, rewards, and policy updates.</li>
            <li className="list-disc pl-1">Comply with applicable laws and regulations.</li>
          </ul>
        </div>
      )
    },
    {
      id: "advertising",
      title: "4. Advertising & Third-Party Ad Networks",
      icon: <Megaphone className="w-5 h-5" />,
      content: (
        <div className="space-y-5">
          <p>
            DexCaptcha displays advertisements to generate revenue that funds user rewards. We use the following advertising networks:
          </p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Google AdMob</strong> &mdash;{" "}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline inline-flex items-center gap-1 font-bold"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
          <p>
            These networks may collect device identifiers, IP addresses, and interaction data to serve relevant advertisements. We ensure all ad SDKs used comply with Google Play Families and Ads policies.
          </p>
          <p className="font-bold text-[var(--text-primary)]">Ad types displayed in our app:</p>
          <ul className="space-y-1 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">Rewarded video ads (user chooses to watch in exchange for points)</li>
            <li className="list-disc pl-1">Banner ads</li>
            <li className="list-disc pl-1">Interstitial ads</li>
          </ul>
          <p>
            Users are never forced to watch ads to access core app features. Rewarded ads are always opt-in.
          </p>
        </div>
      )
    },
    {
      id: "payments",
      title: "5. Payments & Cryptocurrency",
      icon: <Wallet className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Fiat Payments (Paytm)</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">Paytm payments are processed manually by our team.</li>
              <li className="list-disc pl-1">Estimated processing time: 24&ndash;72 hours.</li>
              <li className="list-disc pl-1 font-bold">Minimum withdrawal: $0.25 (₹20 approx).</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">Cryptocurrency Payments (Binance &mdash; USDT)</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">
                Cryptocurrency payments are made in <strong className="text-[var(--text-primary)]">USDT (Tether)</strong> to your Binance wallet.
              </li>
              <li className="list-disc pl-1">We purchase USDT solely as a business payment method to reward users &mdash; not as an investment.</li>
              <li className="list-disc pl-1">
                <strong className="text-[var(--text-primary)]">Users are solely responsible</strong> for declaring and paying any applicable taxes on cryptocurrency rewards received, as per Indian tax laws including the 30% VDA tax under Section 115BBH of the Income Tax Act and any applicable regulations in their country.
              </li>
              <li className="list-disc pl-1">We maintain full transaction records including transaction hashes, amounts, and timestamps for compliance purposes.</li>
              <li className="list-disc pl-1">Cryptocurrency values may fluctuate. We send the USD equivalent amount in USDT at the time of processing.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-black uppercase tracking-wider text-[var(--text-primary)]">PayPal Payments (International Users)</h4>
            <ul className="space-y-1.5 pl-4 border-l-2 border-blue-500/20">
              <li className="list-disc pl-1">PayPal payments are processed for international users outside India.</li>
              <li className="list-disc pl-1 font-bold font-bold font-bold">Processing time: 24&ndash;72 hours.</li>
              <li className="list-disc pl-1 font-bold font-bold">Minimum withdrawal: $0.30.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <h4 className="text-xs font-black uppercase tracking-[0.1em] text-blue-500 mb-3">General Payment Terms</h4>
            <ul className="space-y-1.5 pl-4 text-sm font-medium">
              <li className="list-disc pl-1">All withdrawals are irreversible once processed.</li>
              <li className="list-disc pl-1">Maximum withdrawal: $10.00 per transaction.</li>
              <li className="list-disc pl-1">Daily withdrawal limit: $6.00.</li>
              <li className="list-disc pl-1">We reserve the right to withhold payments if fraudulent activity is detected.</li>
              <li className="list-disc pl-1">Balances are forfeited if account is terminated due to policy violations.</li>
              <li className="list-disc pl-1">
                In case of disputes, contact{" "}
                <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline font-bold">
                  dexcaptcha@gmail.com
                </a>{" "}
                within 7 days of transaction.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "infrastructure",
      title: "6. Third-Party Services & Infrastructure",
      icon: <Server className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We use the following third-party services to operate DexCaptcha:</p>
          <ul className="space-y-3">
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">Firebase (Google)</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for authentication and email verification.</span>
              </div>
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">Supabase</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for database, storage, and backend functions.</span>
              </div>
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">Google AdMob</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for ad monetization.</span>
              </div>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">Binance</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for cryptocurrency payments.</span>
              </div>
              <a href="https://www.binance.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">Paytm</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for UPI payments.</span>
              </div>
              <a href="https://paytm.com/company/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
            <li className="p-4 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-[var(--text-primary)] block">PayPal</span>
                <span className="text-xs text-[var(--text-secondary)]">Used for international payments.</span>
              </div>
              <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline font-bold shrink-0">View Privacy Policy</a>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "anti-fraud",
      title: "7. Anti-Fraud & Security Measures",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            To maintain platform integrity and protect legitimate users, DexCaptcha employs the following security measures:
          </p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Device ID tracking:</strong> To detect and prevent multiple accounts on one device.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">VPN and proxy detection:</strong> To prevent location spoofing and fraudulent activity.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">DNS filtering detection:</strong> To identify attempts to bypass our systems.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">App integrity verification:</strong> To detect modified or tampered versions of DexCaptcha.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Backend balance validation:</strong> All points and balance data is stored and verified server-side. Client-side data cannot be modified.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Email verification:</strong> Mandatory before accessing any app features.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Behavioral analysis:</strong> To detect automated bot activity.
            </li>
          </ul>
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 font-bold">
            Use of VPNs, proxies, modified apps, or multiple accounts will result in immediate account termination and forfeiture of balance.
          </div>
        </div>
      )
    },
    {
      id: "retention",
      title: "8. Data Retention",
      icon: <History className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Account data:</strong> Retained until account deletion.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Transaction history:</strong> Retained for 3 years (for legal compliance).
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Support messages:</strong> Retained for 1 year.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">IP address (fraud detection):</strong> Retained for a maximum of 30 days.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Ad interaction data:</strong> Retained for 90 days.
            </li>
          </ul>
          <p>
            When you delete your account, we permanently delete your profile, points, balance history, task progress, and saved payment details within 30 days.
          </p>
        </div>
      )
    },
    {
      id: "security",
      title: "9. Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way:
          </p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">All data transmitted between the app and our servers is encrypted using HTTPS/TLS.</li>
            <li className="list-disc pl-1">Database access is restricted to authorized personnel only.</li>
            <li className="list-disc pl-1">Firebase Authentication handles all password security with industry-standard encryption.</li>
            <li className="list-disc pl-1">Supabase Row Level Security (RLS) ensures users can only access their own data.</li>
            <li className="list-disc pl-1">Regular security audits are conducted to identify and fix vulnerabilities.</li>
          </ul>
        </div>
      )
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      icon: <Baby className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            DexCaptcha is intended for users <strong className="text-[var(--text-primary)]">aged 18 and above</strong> due to real-money reward features. We do not knowingly collect personal data from anyone under 18. If we discover a user is under 18, their account will be terminated immediately and any balance forfeited.
          </p>
          <p>
            If you believe a minor has created an account, please contact us at{" "}
            <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline font-bold">
              dexcaptcha@gmail.com
            </a>.
          </p>
        </div>
      )
    },
    {
      id: "rights",
      title: "11. Your Legal Rights",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Access</strong> &mdash; Request a copy of your personal data we hold.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Correction</strong> &mdash; Request correction of inaccurate data (username/email can be updated once every 50 days in-app).
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Deletion</strong> &mdash; Delete your account and all associated data via Settings &rarr; Delete Account.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Portability</strong> &mdash; Request your data in a portable format.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Objection</strong> &mdash; Object to processing of your data for certain purposes.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:dexcaptcha@gmail.com" className="text-blue-500 hover:underline font-bold">
              dexcaptcha@gmail.com
            </a>. We will respond within 30 days.
          </p>
        </div>
      )
    },
    {
      id: "tracking",
      title: "12. Cookies & Tracking",
      icon: <Cookie className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            DexCaptcha is a mobile application and does not use browser cookies. However, our third-party advertising partners may use mobile tracking technologies including:
          </p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Advertising ID (GAID)</strong> for ad personalization.
            </li>
            <li className="list-disc pl-1">
              <strong className="text-[var(--text-primary)]">Device fingerprinting</strong> for fraud prevention.
            </li>
          </ul>
          <p>
            You can reset your Advertising ID at any time in your Android device settings under Google &rarr; Ads &rarr; Reset Advertising ID.
          </p>
        </div>
      )
    },
    {
      id: "international-transfers",
      title: "13. International Data Transfers",
      icon: <ArrowRightLeft className="w-5 h-5" />,
      content: (
        <p>
          Your data may be processed in countries outside India where our third-party service providers (Firebase, Supabase, AdMob) operate. We ensure all such transfers comply with applicable data protection laws and that adequate protections are in place.
        </p>
      )
    },
    {
      id: "policy-updates",
      title: "14. Changes to This Privacy Policy",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes through:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-blue-500/20">
            <li className="list-disc pl-1 font-medium">In-app notification</li>
            <li className="list-disc pl-1 font-medium">Email to your registered address</li>
          </ul>
          <p>
            Continued use of DexCaptcha after changes constitutes acceptance of the updated policy. The \"Last Updated\" date at the top of this document will always reflect the most recent revision.
          </p>
        </div>
      )
    },
    {
      id: "contact",
      title: "15. Contact Us",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
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
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Privacy First</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-70">
                  Your data is encrypted and never sold to third parties. Verified by DexCaptcha security.
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
                Privacy <span className="text-blue-500">Policy</span>
              </h1>
              
              <div className="text-xl text-[var(--text-secondary)] mb-16 leading-relaxed max-w-2xl font-medium space-y-4">
                <p>
                  Welcome to <strong>DexCaptcha</strong>. We respect your privacy and are deeply committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our application, and informs you about your privacy rights and how the law protects you.
                </p>
                <p className="text-base text-[var(--text-secondary)] opacity-85">
                  By using DexCaptcha, you confirm that you have read and accepted this Privacy Policy. If you do not agree, please discontinue use of the application immediately.
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
                      If you have any questions about this privacy policy or our privacy practices, please contact us at dexcaptcha@gmail.com.
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
