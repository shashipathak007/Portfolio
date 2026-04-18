import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

const projects = [
  {
    title: "Mothers Nest Clinic",
    description:
      "Full-featured ANC healthcare platform covering all 9 months of pregnancy with week-by-week guidance, symptom tracking, and personalized health content. Architected with 15+ reusable components and lazy loading to minimize initial bundle size.",
    tech: ["React.js", "Tailwind CSS", "Lazy Loading"],
    liveUrl: "https://mothersnest.netlify.app/",
    featured: true,
    accent: "from-accent-500 to-cyan-400",
    accentText: "text-accent-400",
  },
  {
    title: "Aama Ready",
    description:
      "Gamified mobile maternal health app featuring 60 interactive scenarios across all 3 trimesters, a curated hospital packing checklist of 43 essential items, and an emergency contact guide. Designed with simplified UI flows for low-literacy rural users.",
    tech: ["React Native", "TypeScript", "Expo"],
    githubUrl: "https://github.com/shashipathak007/MotherReadySim",
    inProgress: true,
    featured: true,
    accent: "from-violet-500 to-fuchsia-400",
    accentText: "text-violet-400",
  },
  {
    title: "ShopMe E-commerce",
    description:
      "Product browsing and cart management app consuming the FakeStore API. Structured with 10+ reusable components, real-time search filtering, and consistent UX across all device breakpoints.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://shopmeecommerce.netlify.app/",
    accent: "from-rose-500 to-pink-400",
    accentText: "text-rose-400",
  },
  {
    title: "Mind & Brain",
    description:
      "Mental health counseling platform frontend with WCAG 2.1-aligned accessibility, calm-first UX design, and fully responsive layouts across mobile, tablet, and desktop viewports.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://mindandbrain.netlify.app/",
    accent: "from-emerald-500 to-teal-400",
    accentText: "text-emerald-400",
  },
  {
    title: "Genvest Ventures",
    description:
      "Fully responsive multi-page corporate site for a Gen-Z investment startup. Achieved consistent layout fidelity across 3 major breakpoints with pixel-accurate brand implementation.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://genvestpvtltd.netlify.app/",
    accent: "from-amber-500 to-orange-400",
    accentText: "text-amber-400",
  },
  {
    title: "Result Management System",
    description:
      "Web-based academic result system handling multi-subject grade entry, GPA calculation, and role-based access for admin and student users.",
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
    accent: "from-sky-500 to-indigo-400",
    accentText: "text-sky-400",
  },
  {
    title: "Pharmacy Management System",
    description:
      "Inventory and billing system for pharmacy operations with real-time stock tracking, low-stock alerts, and printable invoice generation.",
    tech: ["C#", ".NET"],
    accent: "from-indigo-500 to-purple-400",
    accentText: "text-indigo-400",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-10 lg:py-14">
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
            Projects
          </span>
          <h2 className="section-heading mt-2">
            Things I've{" "}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            A collection of projects I've worked on — from healthcare platforms to e-commerce apps.
          </p>
        </motion.div>

        {/* Featured projects — large cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20px" }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-white/[0.12] transition-all duration-500"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      {project.inProgress && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] ${project.accentText}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.04] border border-slate-500/20 text-slate-400 hover:text-white hover:border-slate-400/50 hover:bg-white/[0.08] transition-all duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-accent-500 to-violet-500 text-slate-50 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:scale-[1.02]"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Other projects — smaller grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group glass-card rounded-xl p-5 hover:border-white/[0.12] transition-all duration-400 relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded bg-white/[0.03] text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-white/[0.04] border border-slate-500/20 text-slate-400 hover:text-white hover:border-slate-400/50 hover:bg-white/[0.08] transition-all duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={12} />
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-gradient-to-r from-accent-500 to-violet-500 text-slate-50 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-300 hover:scale-[1.02]"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={12} />
                      Live Site
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
