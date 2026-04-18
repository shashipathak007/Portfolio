import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const techStack = ["React.js", "React Native", "TypeScript", "Tailwind CSS", "JavaScript"];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28 pb-12">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text (First on mobile) */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-semibold tracking-wide uppercase mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Shashi</span>
              <br />
              <span className="text-slate-300">Shekhar Pathak</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-slate-400 max-w-lg mb-8 leading-relaxed"
            >
              <span className="text-white font-semibold">Software Engineer</span> crafting high-performance digital experiences with{" "}
              <span className="text-accent-400">React.js</span> &{" "}
              <span className="text-violet-400">React Native</span>. I build scalable, pixel-perfect platforms across healthcare, finance, and e-commerce with a relentless focus on mobile-first design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/4 border border-white/8 text-slate-300 hover:border-accent-400/40 hover:text-accent-400 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full"
            >
              <a
                href="#projects"
                className="w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-full bg-linear-to-r from-accent-500 to-violet-500 text-slate-50 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/shashipathak007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/4 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashi-shekhar-pathak-0a667a337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/4 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:shashipathak446@gmail.com"
                  className="p-3 rounded-full bg-white/4 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — profile image (Second on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Orbiting ring */}
              <div className="absolute -inset-5 rounded-full border border-accent-500/15 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50" />
              </div>
              <div className="absolute -inset-11.25 rounded-full border border-violet-500/10 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
              </div>

              {/* Photo container */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden gradient-border glow-accent p-1 group transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent-500/20 cursor-pointer relative z-10">
                <img
                  src="/ssp.png"
                  alt="Shashi Shekhar Pathak"
                  className="w-full h-full object-cover rounded-full grayscale-0 hover:grayscale transition-all duration-700 group-hover:scale-110"
                  loading="eager"
                />
              </div>

              {/* Floating badges - Optimized for Mobile */}
              <motion.div
                className="absolute -top-4 -right-2 sm:-right-6 glass-card px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-emerald-400 border border-emerald-400/20 z-20 whitespace-nowrap shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                4+ Projects Deployed
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-2 sm:-left-6 glass-card px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-accent-400 border border-accent-400/20 z-20 whitespace-nowrap shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                React & React Native
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
