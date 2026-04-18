import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Citizen Infotech Pvt. Ltd",
    companyTag: "Health-tech IT Company",
    location: "Kathmandu, Nepal",
    period: "Feb 2026 — Present",
    current: true,
    bullets: [
      <>
        Engineered the complete frontend of{" "}
        <a href="https://mothersnest.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:underline font-medium">
          Mothers Nest
        </a>
        , an antenatal care platform serving pregnant women, using React.js and Tailwind CSS with a focus on accessibility and mobile-first design.
      </>,
      <>
        Developing{" "}
        <a href="https://github.com/shashipathak007/MotherReadySim" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline font-medium">
          Aama Ready
        </a>
        , a mobile-based medical procedure simulator game using React Native, improving user engagement through gamified health education.
      </>,
      "Collaborated with cross-functional teams including designers and backend engineers to deliver features on schedule in an Agile sprint environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-10 lg:py-14">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-linear-to-b from-dark-950 via-dark-900/50 to-dark-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Experience
          </span>
          <h2 className="section-heading mt-2">
            Where I've{" "}
            <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4.75 top-0 bottom-0 w-px bg-linear-to-b from-accent-500/40 via-violet-500/20 to-transparent hidden md:block" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative md:pl-14 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-2 hidden md:block">
                <div className="w-4 h-4 rounded-full border-2 border-accent-400 bg-dark-950">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-accent-400/30 animate-ping" />
                  )}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-accent-500/20 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 text-sm text-slate-400">
                      <Building2 size={14} className="text-accent-400" />
                      <span className="text-white font-medium">{exp.company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-500 italic">{exp.companyTag}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-2 min-w-1.5 h-1.5 rounded-full bg-accent-400/50" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
