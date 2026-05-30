import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  LogOut, 
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";

const NAV_LINKS: { name: string; path: string }[] = [];

const SIDEBAR_LINKS = [
  { name: "About Us", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 inset-x-4 md:inset-x-8 z-50 transition-all duration-300 pointer-events-none">
        <div className="mx-auto max-w-7xl pointer-events-auto">
          <div className="glass-panel rounded-full h-16 flex items-center justify-between px-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] relative overflow-hidden backdrop-blur-2xl bg-[var(--nav-bg)] border border-[var(--border-color)] transition-all duration-300">
            
            <div className="flex items-center gap-10 relative z-10">
              <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(81,112,254,0.4)] flex items-center justify-center"
                >
                  <svg 
                    viewBox="0 0 244 291" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-auto select-none"
                  >
                    <path 
                      d="M100.066 0.0372724C101.247 0.0250263 102.428 0.0127802 103.646 0.000163033C115.001 -0.0185025 125.807 1.56601 136.753 4.53727C137.565 4.75674 138.377 4.9762 139.213 5.20231C156.807 10.0732 171.798 18.2047 186.253 29.2248C187.243 29.8848 188.233 30.5448 189.253 31.2248C189.253 31.8848 189.253 32.5448 189.253 33.2248C190.181 33.6888 190.181 33.6888 191.128 34.1623C192.503 34.8498 193.878 35.5373 195.253 36.2248C195.253 36.8848 195.253 37.5448 195.253 38.2248C196.573 38.8848 197.893 39.5448 199.253 40.2248C199.253 40.8848 199.253 41.5448 199.253 42.2248C199.913 42.2248 200.573 42.2248 201.253 42.2248C202.839 43.799 202.839 43.799 204.628 45.9123C205.246 46.6406 205.863 47.3689 206.499 48.1193C207.078 48.8141 207.657 49.5089 208.253 50.2248C209.46 51.6479 209.46 51.6479 210.691 53.0998C212.253 55.2248 212.253 55.2248 212.253 57.2248C212.913 57.2248 213.573 57.2248 214.253 57.2248C215.724 59.1312 217.028 61.0098 218.316 63.0373C218.708 63.6531 219.101 64.269 219.506 64.9035C222.724 70.0968 225.496 75.4639 228.128 80.9748C228.497 81.7415 228.866 82.5083 229.246 83.2983C231.455 88.0531 233.114 92.7937 234.539 97.8371C235.186 100.002 235.95 102.042 236.804 104.131C248.669 135.09 242.921 173.808 230.82 203.815C225.272 215.892 218.499 226.828 210.253 237.225C209.593 238.215 208.933 239.205 208.253 240.225C207.593 240.225 206.933 240.225 206.253 240.225C206.253 240.885 206.253 241.545 206.253 242.225C205.593 242.225 204.933 242.225 204.253 242.225C204.016 242.787 203.779 243.349 203.534 243.928C201.964 246.744 200.038 248.704 197.753 250.975C196.562 252.174 196.562 252.174 195.347 253.397C193.253 255.225 193.253 255.225 191.253 255.225C191.253 255.885 191.253 256.545 191.253 257.225C189.619 258.563 187.918 259.821 186.191 261.037C185.175 261.754 184.159 262.471 183.112 263.209C182.169 263.874 181.225 264.539 180.253 265.225C179.66 265.684 179.067 266.143 178.456 266.615C172.636 271.116 165.854 274.059 159.253 277.225C158.344 277.681 157.436 278.137 156.499 278.608C134.761 289.162 108.397 292.871 84.5702 289.234C75.8531 288.003 67.2073 287.893 58.4172 287.846C56.7595 287.83 55.1018 287.812 53.4441 287.794C49.1342 287.749 44.8243 287.714 40.5143 287.682C33.5686 287.63 26.6231 287.565 19.6776 287.494C17.2572 287.471 14.837 287.455 12.4166 287.439C10.9488 287.426 9.4811 287.412 8.01336 287.398C6.72846 287.389 5.44355 287.379 4.11971 287.37C1.25311 287.225 1.25311 287.225 0.253105 286.225C0.150878 283.641 0.114239 281.083 0.119393 278.499C0.117127 277.68 0.11486 276.86 0.112526 276.016C0.106156 273.249 0.107019 270.482 0.107842 267.715C0.104852 265.739 0.10145 263.763 0.0976641 261.787C0.0887953 256.4 0.0864824 251.013 0.0858461 245.626C0.084898 241.126 0.0812213 236.627 0.0776751 232.127C0.069517 221.499 0.0670929 210.871 0.0678026 200.242C0.0684015 189.299 0.0578933 178.356 0.042061 167.413C0.0289464 158.012 0.0236241 148.611 0.0242617 139.209C0.0245158 133.598 0.0217061 127.986 0.0110781 122.375C0.00133288 117.084 0.0013654 111.793 0.00859852 106.503C0.00963693 104.571 0.00732426 102.639 0.00123616 100.707C-0.0707583 76.2556 2.96338 50.7724 19.2531 31.2248C19.9131 31.2248 20.5731 31.2248 21.2531 31.2248C21.2531 30.5648 21.2531 29.9048 21.2531 29.2248C21.9131 29.2248 22.5731 29.2248 23.2531 29.2248C23.5045 28.6318 23.7558 28.0388 24.0148 27.4279C31.7545 13.6576 53.4195 7.41259 67.6515 3.22477C78.3942 0.35269 88.9872 0.0432575 100.066 0.0372724ZM34.2531 34.2248C31.2405 39.0838 30.7113 42.9817 31.5969 48.6271C34.8397 61.4634 45.6274 66.8073 56.2531 73.2248C57.3669 73.8977 57.3669 73.8977 58.5031 74.5841C62.5218 77.0021 62.5218 77.0021 66.5693 79.3715C69.5107 81.0823 71.8921 82.7879 74.2531 85.2248C74.9131 85.2248 75.5731 85.2248 76.2531 85.2248C76.2531 85.8848 76.2531 86.5448 76.2531 87.2248C76.9131 87.2248 77.5731 87.2248 78.2531 87.2248C78.5831 88.2148 78.9131 89.2048 79.2531 90.2248C79.9131 90.2248 80.5731 90.2248 81.2531 90.2248C81.5109 90.7481 81.7687 91.2715 82.0344 91.8107C82.9688 93.6615 83.9327 95.4974 84.9094 97.3263C85.5178 98.4891 86.1262 99.6518 86.7531 100.85C87.6658 102.571 87.6658 102.571 88.5969 104.326C92.1689 111.999 92.5342 120.172 92.3498 128.501C92.324 130.517 92.2985 132.534 92.2731 134.55C92.2477 136.131 92.2477 136.131 92.2218 137.744C92.1411 143.388 92.1265 149.033 92.1008 154.678C92.0652 161.833 92.0101 168.985 91.8796 176.139C91.7753 181.948 91.7404 187.754 91.7505 193.563C91.7419 195.763 91.7085 197.962 91.6488 200.16C91.1959 214.666 91.196 214.666 98.2699 226.811C103.101 231.943 103.101 231.943 109.253 234.225C109.253 234.885 109.253 235.545 109.253 236.225C109.913 236.225 110.573 236.225 111.253 236.225C111.253 236.885 111.253 237.545 111.253 238.225C125.617 250.311 142.388 260.981 161.581 260.658C167.053 260.012 170.485 258.213 174.253 254.225C183.452 241.687 182.663 225.286 180.932 210.481C180.054 204.971 178.725 199.602 177.253 194.225C176.956 193.096 176.956 193.096 176.654 191.944C174.519 183.875 172.077 176.207 168.425 168.678C167.303 166.329 166.36 163.972 165.441 161.537C157.759 142.12 146.951 123.233 134.762 106.325C133.072 103.973 131.407 101.603 129.741 99.2326C128.559 97.5627 127.375 95.8934 126.191 94.2248C125.35 93.0296 125.35 93.0296 124.492 91.8102C123.968 91.0808 123.445 90.3513 122.905 89.5998C122.441 88.9475 121.977 88.2952 121.499 87.6232C120.882 86.931 120.882 86.931 120.253 86.2248C119.593 86.2248 118.933 86.2248 118.253 86.2248C118.028 85.6808 117.802 85.1368 117.57 84.5763C115.841 81.4884 113.608 79.1802 111.191 76.5998C106.35 71.4192 106.35 71.4192 105.253 69.2248C104.593 69.2248 103.933 69.2248 103.253 69.2248C103.253 68.5648 103.253 67.9048 103.253 67.2248C102.593 67.2248 101.933 67.2248 101.253 67.2248C101.253 66.5648 101.253 65.9048 101.253 65.2248C100.593 65.2248 99.9331 65.2248 99.2531 65.2248C99.2531 64.5648 99.2531 63.9048 99.2531 63.2248C98.5931 63.2248 97.9331 63.2248 97.2531 63.2248C97.2531 62.5648 97.2531 61.9048 97.2531 61.2248C92.7121 56.3877 87.0636 52.4169 81.8781 48.2873C80.9497 47.542 80.9497 47.542 80.0026 46.7817C76.9907 44.1162 76.9907 44.1162 73.2531 43.2248C73.2531 42.5648 73.2531 41.9048 73.2531 41.2248C64.8513 34.7574 53.1795 29.1463 42.4094 29.8107C38.8593 30.4924 36.8581 31.7469 34.2531 34.2248Z" 
                      fill="#5170FE"
                    />
                  </svg>
                </motion.div>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="relative flex items-center gap-1.5 text-sm font-semibold transition-all hover:text-blue-500 group text-[var(--text-secondary)]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="hidden sm:flex items-center gap-6">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all hover:bg-white/10"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <div className="flex items-center gap-6">
                  <Link to="/privacy" className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-blue-500 transition-colors">Privacy</Link>
                  <Link to="/terms" className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-blue-500 transition-colors">Terms</Link>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none bg-[var(--card-bg)] p-2 rounded-full border border-[var(--border-color)]"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-[70] p-6 backdrop-blur-2xl bg-[var(--sidebar-bg)] border-l-[3px] border-blue-500 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Menu
                </span>
                <button 
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 bg-[var(--card-bg)] rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--card-bg)] text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-6 border border-[var(--border-color)]"
              >
                <span>Theme</span>
                {theme === "dark" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Dark</span>
                    <Sun className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Light</span>
                    <Moon className="w-4 h-4" />
                  </div>
                )}
              </button>

              <div className="flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
                {SIDEBAR_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-[var(--text-secondary)] hover:text-blue-500 transition-colors flex items-center justify-between px-2 py-4"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
