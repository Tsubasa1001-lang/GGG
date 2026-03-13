import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Instagram, Mail, Sparkles } from 'lucide-react';

// 導覽列項目定義
const navItems = [
  { name: '首頁', href: '#home' },
  { name: '關於那個酷酷的我', href: '#about' },
  { name: '我的超神作品集', href: '#portfolio' },
  { name: '不務正業的日常', href: '#hobbies' },
  { name: '來找我玩吧！', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 監聽滾動事件，改變導覽列背景
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo 區域 */}
        <a href="#home" className="text-2xl font-black tracking-tighter flex items-center gap-2 text-indigo-950">
          <Sparkles className="w-6 h-6 text-fuchsia-500" />
          小蝦米 <span className="text-fuchsia-500">.</span>
        </a>

        {/* 電腦版選單 */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-indigo-950/70 hover:text-fuchsia-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-indigo-950 text-white rounded-full text-sm font-bold hover:bg-fuchsia-500 transition-colors shadow-lg shadow-indigo-950/20"
          >
            聯絡我 🚀
          </a>
        </div>

        {/* 手機版漢堡選單按鈕 */}
        <button
          className="md:hidden text-indigo-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 手機版下拉選單 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden border-t border-gray-100"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-indigo-950 hover:text-fuchsia-500"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
