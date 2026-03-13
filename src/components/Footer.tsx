import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 py-12 text-center border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-200/60 font-medium flex items-center justify-center gap-2">
          © {new Date().getFullYear()} 小蝦米. Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> and lots of coffee.
        </p>
      </div>
    </footer>
  );
}
