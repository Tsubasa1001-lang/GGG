import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rose-50 pt-20">
      {/* 背景裝飾圓形 */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* 左側文字區 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
            <span className="text-sm font-bold text-fuchsia-600">✨ 哈囉！我是小蝦米</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-indigo-950 leading-tight tracking-tighter">
            不只是個高中生，<br />
            我是未來的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-amber-500">創作者</span>。
          </h1>
          <p className="text-lg text-indigo-950/70 max-w-md font-medium">
            熱愛設計、寫程式，還有發掘生活中的各種有趣事物。歡迎來到我的數位遊樂場！🎡
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-indigo-950 text-white rounded-full font-bold hover:bg-fuchsia-500 transition-all hover:scale-105 shadow-xl shadow-indigo-950/20 flex items-center gap-2"
            >
              看我的作品 <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white text-indigo-950 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105 shadow-xl shadow-gray-200/50"
            >
              認識我
            </a>
          </div>
        </motion.div>

        {/* 右側圖片區 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* 使用 Picsum 作為佔位圖，你可以換成自己的照片！ */}
            <img
              src="https://picsum.photos/seed/fashion/800/1000"
              alt="小蝦米的酷照片"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* 漂浮的小標籤 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <span className="text-3xl">🎨</span>
            <div>
              <p className="text-xs font-bold text-gray-400">目前狀態</p>
              <p className="text-sm font-black text-indigo-950">充滿靈感！</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
