import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase size={20} />,
    label: "Role",
    value: "Frontend Developer",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Kathmandu, Nepal",
  },
  {
    icon: <GraduationCap size={20} />,
    label: "Education",
    value: "B.E. Computer Engineering",
  },
  {
    icon: <User size={20} />,
    label: "Focus",
    value: "React · Mobile-First · UX",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="section-heading mt-2">
            Building digital products{" "}
            <span className="gradient-text">that matter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col h-[28rem] lg:h-auto"
          >
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-card h-full flex flex-col">
                <div className="flex items-center space-x-2 px-4 py-3 border-b border-white/[0.06] bg-dark-900/50 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-500 hidden sm:block">Developer.tsx</span>
                </div>
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-400 overflow-hidden flex-1 relative bg-dark-950/40">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-1"
                  >
                    <div><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">useState</span>, <span className="text-rose-400">useEffect</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"react"</span>;</div>
                    <div className="mb-2"><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">Passion</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"@shashi/core"</span>;</div>
                    
                    <div><span className="text-violet-400">export const</span> <span className="text-accent-400">Developer</span> <span className="text-violet-400">=</span> () <span className="text-violet-400">{"=>"}</span> {"{"}</div>
                    
                    <div className="ml-4 text-slate-500">{"// Status: Constantly Learning"}</div>
                    <div className="ml-4"><span className="text-violet-400">const</span> [coffee, setCoffee] <span className="text-violet-400">=</span> <span className="text-rose-400">useState</span>(<span className="text-amber-400">100</span>);</div>
                    <br />

                    <div className="ml-4"><span className="text-violet-400">return</span> (</div>
                    <div className="ml-8 text-slate-300">{"<"}</div>
                    <div className="ml-12"><span className="text-rose-400">Passion</span></div>
                    <div className="ml-16"><span className="text-amber-400">stack</span><span className="text-violet-400">=</span><span className="text-emerald-400">{"{['React', 'ReactNative']}"}</span></div>
                    <div className="ml-16"><span className="text-amber-400">method</span><span className="text-violet-400">=</span><span className="text-emerald-400">{"\"Mobile First\""}</span></div>
                    <div className="ml-16"><span className="text-amber-400">impact</span><span className="text-violet-400">=</span><span className="text-emerald-400">{"\"High\""}</span></div>
                    <div className="ml-8 text-slate-300">{"/>"}</div>
                    <div className="ml-4">);</div>
                    <div>{"};"}</div>
                    <div><span className="text-slate-500 animate-pulse">_</span></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Frontend Developer specializing in{" "}
              <span className="text-accent-400 font-medium">React.js</span> and{" "}
              <span className="text-violet-400 font-medium">React Native</span>, with production experience
              building healthcare, finance, and e-commerce platforms.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Delivered <span className="text-white font-semibold">4+ deployed projects</span> spanning
              antenatal care, mental health, and corporate web—with consistent focus on accessibility,
              performance, and mobile-first design. Comfortable moving fast in Agile teams and translating
              ambiguous requirements into clean, maintainable UI.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently at <span className="text-white font-semibold">Citizen Infotech Pvt. Ltd</span>,
              engineering health-tech products that make a difference in people's lives. I believe great
              software should be invisible—fast, accessible, and just work.
            </p>

            {/* Highlight cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="glass-card rounded-xl p-4 hover:border-accent-500/20 transition-colors duration-300 group"
                >
                  <div className="text-accent-400 mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">
                    {item.icon}
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-white font-medium mt-0.5">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
