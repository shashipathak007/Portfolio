import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const codeSnippets = [
  (
    <>
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
    </>
  ),
  (
    <>
      <div><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">memo</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"react"</span>;</div>
      <div className="mb-2"><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">Performance</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"@shashi/metrics"</span>;</div>

      <div><span className="text-violet-400">export const</span> <span className="text-accent-400">Optimizer</span> <span className="text-violet-400">=</span> <span className="text-rose-400">memo</span>(() <span className="text-violet-400">{"=>"}</span> {"{"}</div>
      <div className="ml-4 text-slate-500">{"// Goal: 60fps & 100 Lighthouse score"}</div>
      <div className="ml-4"><span className="text-violet-400">const</span> metrics <span className="text-violet-400">=</span> {"{"}</div>
      <div className="ml-8"><span className="text-slate-300">bundleSize:</span> <span className="text-emerald-400">"Minimal"</span>,</div>
      <div className="ml-8"><span className="text-slate-300">loadTime:</span> <span className="text-amber-400">0.8</span>,</div>
      <div className="ml-4">{"};"}</div>
      <br />
      <div className="ml-4"><span className="text-violet-400">return</span> <span className="text-slate-300">{"<"}</span><span className="text-rose-400">Performance</span> <span className="text-amber-400">target</span><span className="text-violet-400">=</span><span className="text-emerald-400">"perfection"</span> <span className="text-slate-300">{"/>"}</span>;</div>
      <div>{"});"}</div>
    </>
  ),
  (
    <>
      <div><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">MobileFirst</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"@shashi/design"</span>;</div>
      <br />
      <div><span className="text-violet-400">export const</span> <span className="text-accent-400">ResponsiveUI</span> <span className="text-violet-400">=</span> () <span className="text-violet-400">{"=>"}</span> {"{"}</div>
      <div className="ml-4 text-slate-500">{"// Fluid across all viewports"}</div>
      <div className="ml-4"><span className="text-violet-400">const</span> breakpoints <span className="text-violet-400">=</span> [<span className="text-emerald-400">'sm'</span>, <span className="text-emerald-400">'md'</span>, <span className="text-emerald-400">'lg'</span>, <span className="text-emerald-400">'xl'</span>];</div>
      <br />
      <div className="ml-4"><span className="text-violet-400">return</span> (</div>
      <div className="ml-8"><span className="text-slate-300">{"<"}</span><span className="text-rose-400">MobileFirst</span></div>
      <div className="ml-12"><span className="text-amber-400">scale</span><span className="text-violet-400">=</span><span className="text-emerald-400">"fluid"</span></div>
      <div className="ml-12"><span className="text-amber-400">accessibility</span><span className="text-violet-400">=</span><span className="text-emerald-400">{"{true}"}</span></div>
      <div className="ml-8"><span className="text-slate-300">{"/>"}</span></div>
      <div className="ml-4">);</div>
      <div>{"};"}</div>
    </>
  ),
  (
    <>
      <div><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">Style</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"tailwind-merge"</span>;</div>
      <br />
      <div><span className="text-violet-400">export const</span> <span className="text-accent-400">TailwindLover</span> <span className="text-violet-400">=</span> () <span className="text-violet-400">{"=>"}</span> {"{"}</div>
      <div className="ml-4 text-slate-500">{"// Beautiful UIs, rapidly built"}</div>
      <div className="ml-4"><span className="text-violet-400">const</span> coreClasses <span className="text-violet-400">=</span> <span className="text-rose-400">Style</span>(</div>
      <div className="ml-8"><span className="text-emerald-400">"flex flex-col items-center"</span>,</div>
      <div className="ml-8"><span className="text-emerald-400">"bg-linear-to-r"</span>,</div>
      <div className="ml-8"><span className="text-emerald-400">"overflow-hidden glass-card"</span></div>
      <div className="ml-4">);</div>
      <br />
      <div className="ml-4"><span className="text-violet-400">return</span> <span className="text-slate-300">{"<div"}</span> <span className="text-amber-400">className</span><span className="text-violet-400">=</span><span className="text-emerald-400">{"{coreClasses}"}</span> <span className="text-slate-300">{"/>"}</span>;</div>
      <div>{"};"}</div>
    </>
  ),
  (
    <>
      <div><span className="text-violet-400">import</span> {"{"} <span className="text-rose-400">Code</span>, <span className="text-rose-400">Coffee</span> {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">"@shashi/life"</span>;</div>
      <br />
      <div><span className="text-violet-400">export const</span> <span className="text-accent-400">Routine</span> <span className="text-violet-400">=</span> <span className="text-rose-400">async</span> () <span className="text-violet-400">{"=>"}</span> {"{"}</div>
      <div className="ml-4 text-slate-500">{"// Infinite Loop"}</div>
      <div className="ml-4"><span className="text-violet-400">while</span> (<span className="text-amber-400">true</span>) {"{"}</div>
      <div className="ml-8"><span className="text-violet-400">await</span> <span className="text-rose-400">Code</span>(<span className="text-emerald-400">`React Native / Expo`</span>);</div>
      <div className="ml-8"><span className="text-violet-400">await</span> <span className="text-rose-400">Code</span>(<span className="text-emerald-400">`React.js / Next`</span>);</div>
      <div className="ml-8"><span className="text-rose-400">Coffee</span>.<span className="text-accent-400">refill</span>();</div>
      <div className="ml-4">{"}"}</div>
      <div>{"};"}</div>
    </>
  )
];

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
  const [codeIdx, setCodeIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIdx((prev) => (prev + 1) % codeSnippets.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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

        {/* Change items-start to items-stretch for equal column heights */}
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col h-112 lg:h-full"
          >
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-linear-to-br from-accent-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-card h-full flex flex-col">
                <div className="flex items-center space-x-2 px-4 py-3 border-b border-white/6 bg-dark-900/50 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-500 hidden sm:block">Developer.tsx</span>
                </div>
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-400 overflow-hidden flex-1 relative bg-dark-950/40">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={codeIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-1 absolute inset-0 p-4 sm:p-6"
                    >
                      {codeSnippets[codeIdx]}
                      <div><span className="text-slate-500 animate-pulse">_</span></div>
                    </motion.div>
                  </AnimatePresence>
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
            className="lg:col-span-3 space-y-6 flex flex-col justify-center"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Software Engineer crafting high-performance digital experiences with{" "}
              <span className="text-accent-400 font-medium">React.js</span> and{" "}
              <span className="text-violet-400 font-medium">React Native</span>. I build scalable, accessible
              platforms across healthcare, finance, and e-commerce with a relentless focus on mobile-first design.
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
