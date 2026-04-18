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
    value: "React · Mobile-First · a11y",
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
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
                <img
                  src="/pic.png"
                  alt="Shashi Shekhar Pathak working"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-80px" }}
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
