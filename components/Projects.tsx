'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const PROJECT_STACKS = {
  project1: ['.NET Core', 'Blazor', 'ASP.NET Zero', 'Emgu CV', 'SQL Server', 'C#'],
  project2: ['.NET Core', 'Blazor', 'SQL Server', '.NET MAUI', 'Xamarin', 'Scrum'],
};

export default function Projects() {
  const t = useTranslations('projects');
  const [showOther, setShowOther] = useState(false);

  const otherItems = t.raw('other.items') as string[];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
        <p className="mt-3 text-slate-400">{t('subtitle')}</p>
        <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
      </div>

      {/* Featured projects */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Project 1 — Alis */}
        <ProjectCard
          gradient="from-indigo-600/20 via-violet-600/10 to-slate-900"
          accent="indigo"
          sector={t('project1.sector')}
          title={t('project1.title')}
          role={t('project1.role')}
          description={t('project1.description')}
          impacts={[
            t('project1.impact1'),
            t('project1.impact2'),
            t('project1.impact3'),
          ]}
          stack={PROJECT_STACKS.project1}
          impactLabel={t('impactLabel')}
          stackLabel={t('stackLabel')}
          roleLabel={t('roleLabel')}
        />

        {/* Project 2 — AgriTech Suite */}
        <ProjectCard
          gradient="from-emerald-600/20 via-teal-600/10 to-slate-900"
          accent="emerald"
          sector={t('project2.sector')}
          title={t('project2.title')}
          role={t('project2.role')}
          description={t('project2.description')}
          impacts={[
            t('project2.impact1'),
            t('project2.impact2'),
            t('project2.impact3'),
          ]}
          stack={PROJECT_STACKS.project2}
          impactLabel={t('impactLabel')}
          stackLabel={t('stackLabel')}
          roleLabel={t('roleLabel')}
        />
      </div>

      {/* Other projects (collapsible) */}
      <div className="rounded-2xl border border-slate-700 bg-slate-800/40 overflow-hidden">
        <button
          onClick={() => setShowOther((v) => !v)}
          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-700/30 transition-colors"
        >
          <span className="font-semibold text-slate-300">{t('other.title')}</span>
          {showOther ? (
            <ChevronUp size={18} className="text-slate-500" />
          ) : (
            <ChevronDown size={18} className="text-slate-500" />
          )}
        </button>
        {showOther && (
          <div className="px-6 pb-6 space-y-3 border-t border-slate-700">
            {otherItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pt-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  gradient,
  accent,
  sector,
  title,
  role,
  description,
  impacts,
  stack,
  impactLabel,
  stackLabel,
  roleLabel,
}: {
  gradient: string;
  accent: 'indigo' | 'emerald';
  sector: string;
  title: string;
  role: string;
  description: string;
  impacts: string[];
  stack: string[];
  impactLabel: string;
  stackLabel: string;
  roleLabel: string;
}) {
  const accentColor = {
    indigo: { badge: 'bg-indigo-600/20 text-indigo-300 border-indigo-600/30', dot: 'bg-indigo-400', pill: 'bg-indigo-600/20 text-indigo-300' },
    emerald: { badge: 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30', dot: 'bg-emerald-400', pill: 'bg-emerald-600/20 text-emerald-300' },
  }[accent];

  return (
    <div
      className={`rounded-2xl border border-slate-700 bg-gradient-to-br ${gradient} p-6 flex flex-col hover:border-slate-600 hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Sector badge */}
      <span className={`self-start px-3 py-1 text-xs font-medium rounded-full border ${accentColor.badge} mb-4`}>
        {sector}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>

      {/* Role */}
      <p className="text-xs text-slate-500 mb-4">
        <span className="font-medium text-slate-400">{roleLabel}:</span> {role}
      </p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

      {/* Impact */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <TrendingUp size={12} />
          {impactLabel}
        </p>
        <ul className="space-y-2">
          {impacts.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentColor.dot}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="mt-auto">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">{stackLabel}</p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span key={tech} className={`px-2 py-0.5 text-xs rounded-full ${accentColor.pill}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
