'use client';
import { useTranslations } from 'next-intl';
import { Code2, Monitor, Smartphone, Database, Bot, Layers } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SKILL_DATA = [
  {
    key: 'backend' as const,
    icon: Code2,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    tech: ['C# / .NET Core', 'ASP.NET Zero', 'PHP', 'REST API', 'Entity Framework', 'Blazor Server', 'Microsoft Azure'],
  },
  {
    key: 'frontend' as const,
    icon: Monitor,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    tech: ['Blazor WebAssembly', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap 5', 'jQuery / Ajax', 'Next.js / React', 'Tailwind CSS', 'Figma'],
  },
  {
    key: 'mobile' as const,
    icon: Smartphone,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    tech: ['Xamarin', '.NET MAUI', 'Flutter', 'iOS & Android', 'Cross-Platform Development'],
  },
  {
    key: 'database' as const,
    icon: Database,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    tech: ['SQL Server', 'MySQL', 'Oracle', 'Database Administration (DBA)', 'Query Optimization'],
  },
  {
    key: 'ai' as const,
    icon: Bot,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
    tech: ['Claude (Anthropic)', 'LLM Integration', 'Prompt Engineering', 'Emgu CV', 'Facial Recognition'],
  },
  {
    key: 'management' as const,
    icon: Layers,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
    tech: ['Product Ownership', 'Backlog Prioritization', 'Roadmap Strategy', 'Scrum / Kanban', 'PMI / PMBOK', 'OKRs & KPIs'],
  },
] as const;

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SKILL_DATA.map(({ key, icon: Icon, color, bg, tech }) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="rounded-2xl border bg-slate-900/60 p-6 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
              style={{ borderColor: 'rgb(51 65 85)' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${bg}`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className="font-semibold text-slate-200">{t(key)}</h3>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700 group-hover:border-slate-600 transition-colors"
                  >
                    {item}
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
