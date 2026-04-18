import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — branding */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-default"
          >
            <span className="text-sm font-bold text-white">
              S<span className="gradient-text">S</span>P
            </span>
            <span className="text-slate-700 text-xs">|</span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} Shashi Shekhar Pathak
            </span>
          </motion.div>



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
              href="https://www.linkedin.com/in/shashi-shekhar-pathak-0a667a337/"
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
