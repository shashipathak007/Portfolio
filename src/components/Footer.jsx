import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — branding */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">
              S<span className="gradient-text">S</span>P
            </span>
            <span className="text-slate-600 text-xs">|</span>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Shashi Shekhar Pathak
            </span>
          </div>

          {/* Center — made with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-xs text-slate-500"
          >
            Built with
            <Heart size={12} className="text-rose-400 fill-rose-400" />
            using React & Tailwind CSS
          </motion.p>

          {/* Right — links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shashipathak007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shashi-s-pathak-0a667a337/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
