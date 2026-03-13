import { motion } from 'motion/react';
import { Music, Camera, Gamepad2, Plane } from 'lucide-react';

const hobbies = [
  {
    title: '聽獨立音樂',
    icon: Music,
    desc: '寫扣的時候一定要配點音樂，最近超愛聽落日飛車！',
    color: 'bg-rose-100 text-rose-600',
    image: 'https://picsum.photos/seed/music/400/300'
  },
  {
    title: '街頭攝影',
    icon: Camera,
    desc: '帶著底片機到處亂晃，捕捉城市裡的光影變化。',
    color: 'bg-amber-100 text-amber-600',
    image: 'https://picsum.photos/seed/street/400/300'
  },
  {
    title: '打電動',
    icon: Gamepad2,
    desc: '薩爾達傳說狂粉，海拉魯大陸就是我的第二個家。',
    color: 'bg-emerald-100 text-emerald-600',
    image: 'https://picsum.photos/seed/game/400/300'
  },
  {
    title: '到處旅行',
    icon: Plane,
    desc: '夢想是環遊世界，收集各個國家的明信片。',
    color: 'bg-sky-100 text-sky-600',
    image: 'https://picsum.photos/seed/travel/400/300'
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 bg-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 標題區 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-indigo-950 mb-4"
          >
            不務正業的<span className="text-rose-500">日常</span> 🎮
          </motion.h2>
          <p className="text-lg text-indigo-950/60 font-medium max-w-2xl mx-auto">
            除了對著螢幕敲鍵盤，我還有很多有趣的嗜好。
            畢竟生活不能只有程式碼，對吧？
          </p>
        </div>

        {/* 興趣網格 (Bento Grid 風格) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              {/* 背景圖片 */}
              <img
                src={hobby.image}
                alt={hobby.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* 漸層遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/40 to-transparent" />
              
              {/* 內容 */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-2xl ${hobby.color} flex items-center justify-center mb-4 backdrop-blur-sm bg-white/90`}>
                  <hobby.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{hobby.title}</h3>
                <p className="text-indigo-100 font-medium line-clamp-2 group-hover:line-clamp-none transition-all">
                  {hobby.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
