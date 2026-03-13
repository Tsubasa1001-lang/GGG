import { motion } from 'motion/react';
import { Code, Palette, Camera, Coffee } from 'lucide-react';

const skills = [
  { icon: Code, name: '網頁開發', desc: 'HTML, CSS, JS 都是我的好朋友', color: 'text-blue-500', bg: 'bg-blue-100' },
  { icon: Palette, name: 'UI/UX 設計', desc: '讓畫面變好看的魔法', color: 'text-fuchsia-500', bg: 'bg-fuchsia-100' },
  { icon: Camera, name: '攝影', desc: '捕捉生活中的每個瞬間', color: 'text-amber-500', bg: 'bg-amber-100' },
  { icon: Coffee, name: '熬夜技能', desc: '為了專案可以不睡覺 (誤)', color: 'text-stone-500', bg: 'bg-stone-100' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 標題區 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-indigo-950 mb-4"
          >
            關於那個<span className="text-fuchsia-500">酷酷的我</span> 😎
          </motion.h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            我是小蝦米，一個對世界充滿好奇心的高中生。我相信只要敢做夢，沒有什麼是不可能的！
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 左側：文字介紹 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-indigo-950">
              嗨！我是個喜歡把想法變成現實的人。
            </h3>
            <p className="text-gray-600 leading-relaxed">
              平常除了在學校上課，我最喜歡的就是坐在電腦前敲敲打打，或是拿著相機到處亂晃。
              我認為設計不只是把東西變漂亮，更是解決問題的一種方式。
            </p>
            <p className="text-gray-600 leading-relaxed">
              我的目標是成為一名全端工程師兼設計師（對，我全都要！）。
              如果你也喜歡科技、藝術或是任何有趣的事物，歡迎隨時找我聊聊！
            </p>

            {/* 數據小卡 */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100">
                <p className="text-4xl font-black text-rose-500 mb-2">10+</p>
                <p className="text-sm font-bold text-rose-900/60">完成的酷專案</p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                <p className="text-4xl font-black text-indigo-500 mb-2">∞ </p>
                <p className="text-sm font-bold text-indigo-900/60">腦袋裡的點子</p>
              </div>
            </div>
          </motion.div>

          {/* 右側：技能網格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center mb-6`}>
                  <skill.icon className={`w-7 h-7 ${skill.color}`} />
                </div>
                <h4 className="text-xl font-bold text-indigo-950 mb-2">{skill.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
