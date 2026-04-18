import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    color: "from-accent-500 to-cyan-400",
    dotColor: "bg-accent-400",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "C"],
  },
  {
    title: "Frameworks & Libraries",
    color: "from-violet-500 to-fuchsia-400",
    dotColor: "bg-violet-400",
    skills: ["React.js", "React Native", "Tailwind CSS", "Bootstrap", "Expo"],
  },
  {
    title: "Frontend Concepts",
    color: "from-emerald-500 to-teal-400",
    dotColor: "bg-emerald-400",
    skills: [
      "Component Architecture",
      "SPA Development",
      "Responsive Design",
      "Mobile-First",
      "Cross-Browser Compat",
    ],
  },
  {
    title: "Performance",
    color: "from-amber-500 to-orange-400",
    dotColor: "bg-amber-400",
    skills: ["Lazy Loading", "Code Splitting", "Tree Shaking", "Memoization", "Render Optimization"],
  },
  {
    title: "API & State",
    color: "from-rose-500 to-pink-400",
    dotColor: "bg-rose-400",
    skills: ["REST API Integration", "Async/Await", "Promises", "JSON Handling"],
  },
  {
    title: "Developer Tools",
    color: "from-sky-500 to-indigo-400",
    dotColor: "bg-sky-400",
    skills: ["Git", "GitHub", "GitHub Actions", "Netlify", "Vercel", "VS Code", "Chrome DevTools"],
  },
  {
    title: "Methods",
    color: "from-indigo-500 to-purple-400",
    dotColor: "bg-indigo-400",
    skills: ["Agile/Scrum", "Cross-functional Collaboration", "UI/UX Implementation"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-10 lg:py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Skills
          </span>
          <h2 className="section-heading mt-2">
            My technical{" "}
            <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="group glass-card rounded-xl p-5 hover:border-white/[0.12] transition-all duration-400 relative overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <h3 className="text-sm font-bold text-white tracking-wide mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
