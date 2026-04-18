import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIconFilled, PhoneIconFilled } from "./Icons";

const contactLinks = [
  {
    icon: <MailIconFilled size={22} />,
    label: "Email",
    value: "shashipathak446@gmail.com",
    href: "mailto:shashipathak446@gmail.com",
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
    bg: "bg-blue-500/10",
  },
  {
    icon: <PhoneIconFilled size={22} />,
    label: "Phone",
    value: "+977 9840287647",
    href: "tel:9840287647",
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    bg: "bg-emerald-500/10",
  },
  {
    icon: <Github size={22} />,
    label: "GitHub",
    value: "shashipathak007",
    href: "https://github.com/shashipathak007",
    color: "text-slate-400",
    glow: "group-hover:shadow-slate-400/20",
    bg: "bg-slate-400/10",
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    value: "Shashi S Pathak",
    href: "https://www.linkedin.com/in/shashi-s-pathak-0a667a337/",
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-500/20",
    bg: "bg-sky-500/10",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,var(--color-dark-950)_100%)] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-32 relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Get in touch
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
              Let's build <br /> something <span className="gradient-text">amazing</span>.
            </h2>
            <p className="text-slate-400 text-xl mb-10 max-w-md leading-relaxed">
              Have a bold idea or a challenging project? I'm always looking for opportunities to push the boundaries of Web & Mobile.
            </p>
            
            <a
              href="mailto:shashipathak446@gmail.com"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-2xl bg-gradient-to-r from-accent-500 to-violet-500 text-white shadow-2xl shadow-accent-500/20 hover:shadow-accent-500/40 transition-all duration-500 hover:-translate-y-1.5 active:scale-95"
            >
              <span>Drop an Email</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </a>
          </motion.div>

          {/* Right Column: 2x2 Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative glass-card grow rounded-[2.5rem] p-8 transition-all duration-500 border border-white/[0.05] hover:border-white/20 ${link.glow} hover:shadow-2xl active:scale-[0.98]`}
              >
                {/* Visual accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-[2.5rem]`} />
                
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${link.bg} ${link.color} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {link.icon}
                </div>
                
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                    {link.label}
                  </p>
                  <div className="flex items-center justify-between gap-3 w-full">
                    <p className={`text-base font-bold text-slate-300 group-hover:text-white transition-colors truncate flex-1 min-w-0`}>
                      {link.value}
                    </p>
                    <div className={`shrink-0 p-2 rounded-full bg-white/5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${link.color}`}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
