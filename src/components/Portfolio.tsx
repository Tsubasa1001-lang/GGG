import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '校園美食地圖',
    category: 'Web App',
    image: 'https://picsum.photos/seed/food/600/400',
    desc: '解決每天中午不知道吃什麼的千古難題！收錄學校附近所有好吃的店。',
    tags: ['React', 'Tailwind', 'Firebase'],
    color: 'bg-amber-100 text-amber-700'
  },
  {
    title: '個人記帳小幫手',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/money/600/400',
    desc: '幫我管好零用錢的超強工具，再也不會月底吃土了。',
    tags: ['Flutter', 'Dart', 'SQLite'],
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    title: '社團成果展視覺設計',
    category: 'Design',
    image: 'https://picsum.photos/seed/design/600/400',
    desc: '為熱舞社設計的海報與周邊商品，超有成就感！',
    tags: ['Figma', 'Illustrator', 'Photoshop'],
    color: 'bg-fuchsia-100 text-fuchsia-700'
  },
  {
    title: '高中生生存指南',
    category: 'Blog',
    image: 'https://picsum.photos/seed/study/600/400',
    desc: '分享讀書方法、時間管理技巧，幫助學弟妹順利度過高中生活。',
    tags: ['Next.js', 'Markdown', 'Vercel'],
    color: 'bg-blue-100 text-blue-700'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 標題區 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              我的<span className="text-amber-400">超神作品集</span> 🚀
            </motion.h2>
            <p className="text-lg text-indigo-200 font-medium max-w-xl">
              這裡記錄了我熬夜爆肝的成果，每一個專案都是我成長的養分。
              來看看我都做了些什麼酷東西吧！
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            去 GitHub 看更多
          </a>
        </div>

        {/* 作品網格 */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-indigo-900/50 rounded-[2rem] overflow-hidden border border-indigo-800/50 hover:border-amber-400/50 transition-colors"
            >
              {/* 圖片區塊 */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-transparent transition-colors" />
                
                {/* 標籤 */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${project.color}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* 內容區塊 */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-indigo-950 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-indigo-200 mb-6 line-clamp-2">
                  {project.desc}
                </p>
                
                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-950 rounded-lg text-sm font-medium text-indigo-300 border border-indigo-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
