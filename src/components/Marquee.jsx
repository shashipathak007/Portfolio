import { motion } from "framer-motion";

const marqueeItems = [
  "React.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS",
  "Expo", "HTML5", "CSS3", "REST APIs", "Git & GitHub",
  "Agile/Scrum", "Mobile-First", "Accessibility", "Performance",
];

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative py-5 overflow-hidden border-y border-white/4 bg-dark-900/40">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4">
            <span className="text-sm font-medium text-slate-500 tracking-wide">{item}</span>
            <span className="w-1 h-1 rounded-full bg-accent-400/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
