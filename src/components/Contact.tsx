import { motion } from 'motion/react';
import { Mail, Instagram, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* 裝飾背景 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-indigo-50 rounded-[3rem] p-8 md:p-16 border border-indigo-100 shadow-2xl shadow-indigo-900/5">
          
          {/* 左側：聯絡資訊 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6">
              來找我<span className="text-fuchsia-500">玩吧！</span> 🍕
            </h2>
            <p className="text-lg text-indigo-950/70 font-medium mb-10">
              有什麼酷點子想一起實現嗎？還是單純想聊聊天？
              隨時歡迎傳訊息給我，我看到就會馬上回覆！
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-indigo-950 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-950/50 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-bold text-indigo-950">hello@xiaoxiami.com</p>
                </div>
              </a>
              
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-indigo-950 group-hover:bg-rose-500 group-hover:text-white transition-colors shadow-sm">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-950/50 uppercase tracking-wider">Instagram</p>
                  <p className="text-lg font-bold text-indigo-950">@xiaoxiami_codes</p>
                </div>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-indigo-950 group-hover:bg-gray-900 group-hover:text-white transition-colors shadow-sm">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-950/50 uppercase tracking-wider">GitHub</p>
                  <p className="text-lg font-bold text-indigo-950">github.com/xiaoxiami</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* 右側：聯絡表單 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] shadow-xl shadow-indigo-900/5 border border-indigo-50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-indigo-950 mb-2">你的名字</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all font-medium"
                  placeholder="王小明"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-indigo-950 mb-2">電子郵件</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all font-medium"
                  placeholder="ming@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-indigo-950 mb-2">想說什麼？</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all font-medium resize-none"
                  placeholder="嗨！我覺得你的網站超酷的..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-indigo-950 text-white rounded-2xl font-bold hover:bg-fuchsia-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/20"
              >
                發送訊息 <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
