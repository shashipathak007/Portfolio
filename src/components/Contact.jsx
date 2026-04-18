import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "shashipathak446@gmail.com",
    href: "mailto:shashipathak446@gmail.com",
    color: "group-hover:text-accent-400",
    borderColor: "group-hover:border-accent-400/30",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+977 9840287647",
    href: "tel:9840287647",
    color: "group-hover:text-emerald-400",
    borderColor: "group-hover:border-emerald-400/30",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "shashipathak007",
    href: "https://github.com/shashipathak007",
    color: "group-hover:text-white",
    borderColor: "group-hover:border-white/20",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Shashi S Pathak",
    href: "https://www.linkedin.com/in/shashi-s-pathak-0a667a337/",
    color: "group-hover:text-sky-400",
    borderColor: "group-hover:border-sky-400/30",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="section-heading mt-2">
            Let's{" "}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto">
            Have a project in mind or want to chat? I'm always open to new opportunities and
            interesting conversations.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="glass-card glow-accent rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-violet-500/5 pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 mb-5">
                <Send size={28} className="text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Say hello!
              </h3>
              <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
                Whether it's a project collaboration, freelance work, or just a friendly chat —
                feel free to reach out.
              </p>
              <a
                href="mailto:shashipathak446@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-500 to-violet-500 text-white shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                Send an Email
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group glass-card rounded-xl p-5 text-center hover:bg-white/[0.03] transition-all duration-300 ${link.borderColor}`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] text-slate-400 mb-3 ${link.color} transition-colors`}>
                {link.icon}
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{link.label}</p>
              <p className={`text-sm font-medium text-slate-300 ${link.color} transition-colors truncate`}>
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
