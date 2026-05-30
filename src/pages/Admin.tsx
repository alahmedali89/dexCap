import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { 
  Settings, 
  SwitchCamera, 
  Download, 
  Rocket, 
  Save, 
  ShieldCheck,
  Globe,
  RefreshCw,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  Zap,
  Type,
  Image as ImageIcon,
  Puzzle,
  Smile,
  Hand,
  Calculator,
  Layers,
  Sun,
  Bot,
  Mic,
  Send,
  Youtube
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Admin: React.FC = () => {
  const { settings, updateSettings } = useSettings();
  const [formData, setFormData] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API delay
    setTimeout(() => {
      updateSettings(formData);
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background grid and glow spots like maintenance mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        
        {/* Decorative Grid - animated */}
        <div className="absolute inset-0 bg-grid-moving [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Settings className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-[var(--text-primary)] tracking-tight">Admin Control Panel</h1>
              <p className="text-[var(--text-secondary)] font-medium">Manage platform configuration</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-blue-400 transition-all group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <a 
              href="/" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs font-bold text-blue-400 hover:bg-blue-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Preview
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Maintenance Mode Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-[32px] border transition-all duration-300 ${formData.isMaintenanceMode ? 'bg-red-500/5 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.05)]' : 'bg-[var(--card-bg)] border-[var(--border-color)]'}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl border ${formData.isMaintenanceMode ? 'bg-red-500/10 border-red-500/20' : 'bg-blue-500/10 border-blue-500/20'}`}>
                <SwitchCamera className={`w-6 h-6 ${formData.isMaintenanceMode ? 'text-red-500' : 'text-blue-500'}`} />
              </div>
              <button 
                onClick={() => setFormData(prev => ({ ...prev, isMaintenanceMode: !prev.isMaintenanceMode }))}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${formData.isMaintenanceMode ? 'bg-red-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${formData.isMaintenanceMode ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Maintenance Mode</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
              When enabled, visitors will see the maintenance page instead of the landing page.
            </p>
            {formData.isMaintenanceMode && (
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                Active protection
              </div>
            )}
          </motion.div>

          {/* Website Launched Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`p-6 rounded-[32px] border transition-all duration-300 ${formData.isWebsiteLaunched ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-[var(--card-bg)] border-[var(--border-color)]'}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl border ${formData.isWebsiteLaunched ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-blue-500/10 border-blue-500/20'}`}>
                <Rocket className={`w-6 h-6 ${formData.isWebsiteLaunched ? 'text-emerald-500' : 'text-blue-500'}`} />
              </div>
              <button 
                onClick={() => setFormData(prev => ({ ...prev, isWebsiteLaunched: !prev.isWebsiteLaunched }))}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${formData.isWebsiteLaunched ? 'bg-emerald-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${formData.isWebsiteLaunched ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Launched Status</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
              Toggle the public launch status visibility for marketing purposes.
            </p>
            <div className="flex items-center gap-2">
              <Globe className={`w-4 h-4 ${formData.isWebsiteLaunched ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${formData.isWebsiteLaunched ? 'text-emerald-400' : 'text-slate-400'}`}>
                {formData.isWebsiteLaunched ? 'Website Launched' : 'Pre-Launch'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Link Management Central */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[40px] mb-12 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Download className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Link Configuration</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Download Link */}
            <div className="space-y-4">
              <label className="block text-xs font-black text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                Download URL (Android/APK)
              </label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={formData.downloadLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, downloadLink: e.target.value }))}
                  className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] p-4 pr-12 rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50 transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:bg-white/5 truncate"
                  placeholder="https://example.com/dexcaptcha.apk"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-400">
                  <RefreshCw className="w-4 h-4 animate-spin-slow" />
                </div>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] font-medium leading-relaxed">
                Globally updates all download entry points.
              </p>
            </div>

            {/* Engage Link */}
            <div className="space-y-4">
              <label className="block text-xs font-black text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                Engage & Earn Platform URL
              </label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={formData.engageLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, engageLink: e.target.value }))}
                  className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] p-4 pr-12 rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50 transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:bg-white/5 truncate"
                  placeholder="https://example.com/engage-and-earn"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] font-medium leading-relaxed">
                Connects the landing page to the earning ecosystem.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Link Configuration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[40px] mb-12 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Send className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Social Media Links</h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium">Manage channels linked in the page footer</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Telegram Link */}
            <div className="space-y-4">
              <label className="block text-xs font-black text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                Telegram Channel Link
              </label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={formData.telegramLink || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, telegramLink: e.target.value }))}
                  className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] p-4 pr-12 rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50 transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:bg-white/5 truncate"
                  placeholder="https://t.me/dexcaptcha"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-400 font-bold flex items-center justify-center">
                  <svg 
                    viewBox="0 0 198 198" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 select-none"
                  >
                    <path d="M98.9797 0H98.5299C44.1133 0 0 44.1264 0 98.559V99.0089C0 153.441 44.1133 197.568 98.5299 197.568H98.9797C153.396 197.568 197.51 153.441 197.51 99.0089V98.559C197.51 44.1264 153.396 0 98.9797 0Z" fill="#00B0F2"/>
                    <path d="M37.4079 95.4166C37.6847 95.2781 37.9616 95.1466 38.2315 95.022C42.923 92.8486 47.6769 90.8136 52.4238 88.7786C52.6799 88.7786 53.1088 88.4809 53.351 88.384C53.7177 88.2248 54.0845 88.0726 54.4513 87.9134L56.5618 87.0066C57.9734 86.4044 59.378 85.8022 60.7897 85.2C63.606 83.9956 66.4223 82.7913 69.2386 81.5799C74.8713 79.1712 80.511 76.7555 86.1436 74.3467C91.7763 71.9379 97.4158 69.5222 103.048 67.1135C108.681 64.7047 114.321 62.289 119.953 59.8802C125.586 57.4715 131.226 55.0558 136.858 52.647C138.111 52.1071 139.467 51.3042 140.809 51.0688C141.937 50.8681 143.037 50.4805 144.172 50.2659C146.324 49.8575 148.698 49.6914 150.76 50.5843C151.473 50.8958 152.13 51.3318 152.677 51.8787C155.292 54.4674 154.926 58.7174 154.372 62.3582C150.518 87.7334 146.663 113.115 142.802 138.491C142.276 141.972 141.557 145.793 138.81 147.994C136.485 149.856 133.177 150.064 130.305 149.275C127.433 148.479 124.901 146.811 122.417 145.17C112.113 138.345 101.803 131.52 91.4995 124.696C89.0499 123.076 86.3236 120.958 86.3512 118.016C86.3651 116.244 87.4237 114.666 88.5032 113.261C97.4573 101.577 110.376 93.5477 119.988 82.4036C121.344 80.8324 122.41 77.9945 120.548 77.0877C119.441 77.5478 118.168 77.2815 117.158 77.9806C104.453 86.8059 91.7555 95.638 79.0509 104.463C74.906 107.343 70.5604 110.305 65.5644 111.011C61.0942 111.648 56.5964 110.402 52.2716 109.129C48.6457 108.063 45.0265 106.969 41.4214 105.841C39.5046 105.245 37.5255 104.602 36.0447 103.252C34.5639 101.902 33.7129 99.6319 34.6055 97.8322C35.166 96.704 36.2524 95.9911 37.3942 95.4096L37.4079 95.4166Z" fill="#FEFFFC"/>
                  </svg>
                </div>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] font-medium leading-relaxed">
                Globally updates the footer's Telegram target URL.
              </p>
            </div>

            {/* YouTube Link */}
            <div className="space-y-4">
              <label className="block text-xs font-black text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                YouTube Channel Link
              </label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={formData.youtubeLink || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, youtubeLink: e.target.value }))}
                  className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] p-4 pr-12 rounded-2xl text-[var(--text-primary)] focus:outline-none focus:border-blue-500/50 transition-all focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:bg-white/5 truncate"
                  placeholder="https://youtube.com/@dexcaptcha"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-red-500 font-bold flex items-center justify-center">
                  <svg 
                    viewBox="0 0 197 197" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 select-none"
                  >
                    <path d="M196.949 98.5036C196.949 44.1016 152.861 0 98.4746 0C44.0886 0 0 44.1016 0 98.5036C0 152.906 44.0886 197.007 98.4746 197.007C152.861 197.007 196.949 152.906 196.949 98.5036Z" fill="#FF0209"/>
                    <path d="M140.277 142.131C137.343 142.45 134.34 142.505 131.461 142.498C109.007 142.478 86.5519 142.457 64.1044 142.443C57.0393 142.443 49.3446 142.215 43.8849 137.722C37.7333 132.649 36.4532 123.851 35.955 115.891C35.263 104.982 35.2076 94.0391 35.775 83.1234C36.0864 77.1292 36.6331 70.9896 39.2141 65.5629C41.0686 61.666 44.1617 58.1636 48.1198 56.3224C52.7214 54.1835 57.5376 54.5642 62.4921 54.5573C74.3525 54.5435 86.2129 54.5366 98.0733 54.5227C110.404 54.5089 122.742 54.5019 135.073 54.4881C140.899 54.4881 147.155 54.6058 151.909 57.9767C158.047 62.3235 159.714 70.595 160.482 78.0775C161.901 91.8587 161.922 105.785 160.538 119.567C159.963 125.249 159.008 131.257 155.265 135.57C151.556 139.847 146.055 141.495 140.284 142.125L140.277 142.131Z" fill="white"/>
                    <path d="M118.556 98.5036L85.0919 79.178V117.829L118.556 98.5036Z" fill="#FF0209"/>
                  </svg>
                </div>
              </div>
              <p className="text-[10px] text-[var(--text-secondary)] font-medium leading-relaxed">
                Globally updates the footer's YouTube target URL.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reward Rates Configuration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[40px] mb-12 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Reward Rates</h3>
                <p className="text-sm text-[var(--text-secondary)]">Captchas required per $1.00 USD</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <span className="text-xs font-black text-amber-500 uppercase tracking-widest">$1.00 Payout Base</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'text', label: 'Text Captcha', icon: Type },
              { id: 'image', label: 'Image Captcha', icon: ImageIcon },
              { id: 'slider', label: 'Slider Captcha', icon: Puzzle },
              { id: 'emoji', label: 'Emoji Captcha', icon: Smile },
              { id: 'tap', label: 'Tap Captcha', icon: Hand },
              { id: 'math', label: 'Math Captcha', icon: Calculator },
              { id: 'match', label: 'Match Captcha', icon: Layers },
              { id: 'missing', label: 'Missing Captcha', icon: Sun },
              { id: 'auto', label: 'Auto Captcha', icon: Bot },
              { id: 'audio', label: 'Audio Captcha', icon: Mic },
            ].map((item) => (
              <div key={item.id} className="bg-[var(--input-bg)] border border-[var(--border-color)] p-5 rounded-3xl transition-all hover:border-blue-500/30 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-xs font-black text-[var(--text-secondary)] uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={(formData.rewardRates as any)[item.id]}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      rewardRates: { ...prev.rewardRates, [item.id]: Number(e.target.value) } 
                    }))}
                    className="w-full bg-transparent text-2xl font-black text-[var(--text-primary)] focus:outline-none placeholder:text-slate-700"
                  />
                  <div className="text-right">
                    <p className="text-[10px] font-black text-blue-500">CAPTCHAS</p>
                    <p className="text-[10px] font-bold text-[var(--text-secondary)]">/ $1.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-end">
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Settings saved successfully!
            </motion.div>
          )}
          
          <Button 
            className="w-full sm:w-auto h-14 px-12 text-lg rounded-full"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <RefreshCw className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};


