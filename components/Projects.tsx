'use client';
import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { TrendingUp, ChevronDown, ChevronUp, ExternalLink, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_STACKS = {
  project1: ['.NET Core', 'Blazor', 'ASP.NET Zero', 'Emgu CV', '.NET MAUI', 'SQL Server', 'C#'],
  project2: ['.NET Core', 'Blazor', 'SQL Server', '.NET MAUI', 'Xamarin', 'Scrum'],
  project3: ['.NET Core', 'Blazor', 'C#', 'Azure', 'SQL Server'],
  project4: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  project5: ['C#', '.NET', 'VB.NET', 'ASP.NET', 'Web Forms', 'SQL Server', 'Entity Framework'],
};

type LightboxItem = { src: string; title: string; url?: string };

export default function Projects() {
  const t = useTranslations('projects');
  const [showOther, setShowOther] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

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
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Project 1 — Alis */}
        <ProjectCard
          gradient="from-indigo-600/20 via-violet-600/10 to-slate-900"
          accent="indigo"
          sector={t('project1.sector')}
          title={t('project1.title')}
          role={t('project1.role')}
          description={t('project1.description')}
          impacts={[t('project1.impact1'), t('project1.impact2'), t('project1.impact3')]}
          stack={PROJECT_STACKS.project1}
          links={[
            { label: 'App Store', url: 'https://apps.apple.com/mx/app/alis-corte/id6736604195' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.canicalabs.alis' },
          ]}
          previewUrl="App Store · Google Play"
          screenshotUrl="/portfolio/projects/alis.png.png"
          onImageClick={() => setLightbox({ src: '/portfolio/projects/alis.png.png', title: t('project1.title') })}
          impactLabel={t('impactLabel')} stackLabel={t('stackLabel')} roleLabel={t('roleLabel')}
        />

        {/* Project 2 — AgriTech Suite */}
        <ProjectCard
          gradient="from-emerald-600/20 via-teal-600/10 to-slate-900"
          accent="emerald"
          sector={t('project2.sector')}
          title={t('project2.title')}
          role={t('project2.role')}
          description={t('project2.description')}
          impacts={[t('project2.impact1'), t('project2.impact2'), t('project2.impact3')]}
          stack={PROJECT_STACKS.project2}
          previewUrl="SaaS Privado · 3 productos AgriTech"
          screenshotUrl="/portfolio/projects/agriTech.png.png"
          onImageClick={() => setLightbox({ src: '/portfolio/projects/agriTech.png.png', title: t('project2.title') })}
          impactLabel={t('impactLabel')} stackLabel={t('stackLabel')} roleLabel={t('roleLabel')}
        />

        {/* Project 3 — Legaxtech */}
        <ProjectCard
          gradient="from-violet-600/20 via-purple-600/10 to-slate-900"
          accent="violet"
          sector={t('project3.sector')}
          title={t('project3.title')}
          role={t('project3.role')}
          description={t('project3.description')}
          impacts={[t('project3.impact1'), t('project3.impact2'), t('project3.impact3')]}
          stack={PROJECT_STACKS.project3}
          links={[{ label: 'legaxtechpro.com', url: 'https://legaxtechpro.com/' }]}
          previewUrl="legaxtechpro.com"
          screenshotUrl="/portfolio/projects/legaxtech.png.png"
          onImageClick={() => setLightbox({ src: '/portfolio/projects/legaxtech.png.png', title: t('project3.title'), url: 'https://legaxtechpro.com/' })}
          impactLabel={t('impactLabel')} stackLabel={t('stackLabel')} roleLabel={t('roleLabel')}
        />

        {/* Project 4 — Canicalabs */}
        <ProjectCard
          gradient="from-amber-600/20 via-orange-600/10 to-slate-900"
          accent="amber"
          sector={t('project4.sector')}
          title={t('project4.title')}
          role={t('project4.role')}
          description={t('project4.description')}
          impacts={[t('project4.impact1'), t('project4.impact2'), t('project4.impact3')]}
          stack={PROJECT_STACKS.project4}
          links={[
            { label: 'canicalabs.com', url: 'https://www.canicalabs.com/' },
            { label: 'unitycfdi.com', url: 'https://unitycfdi.com/' },
          ]}
          previewUrl="canicalabs.com · unitycfdi.com"
          screenshotUrl="/portfolio/projects/canicalabs.png.png"
          onImageClick={() => setLightbox({ src: '/portfolio/projects/canicalabs.png.png', title: t('project4.title'), url: 'https://www.canicalabs.com/' })}
          impactLabel={t('impactLabel')} stackLabel={t('stackLabel')} roleLabel={t('roleLabel')}
        />

        {/* Project 5 — LegalTracking (full width) */}
        <div className="lg:col-span-2">
          <ProjectCard
            gradient="from-rose-600/20 via-pink-600/10 to-slate-900"
            accent="rose"
            sector={t('project5.sector')}
            title={t('project5.title')}
            role={t('project5.role')}
            description={t('project5.description')}
            impacts={[t('project5.impact1'), t('project5.impact2'), t('project5.impact3')]}
            stack={PROJECT_STACKS.project5}
            links={[{ label: 'legaltracking.com.mx', url: 'https://legaltracking.com.mx/' }]}
            previewUrl="legaltracking.com.mx"
            screenshotUrl="/portfolio/projects/legaltracking.png.png"
            onImageClick={() => setLightbox({ src: '/portfolio/projects/legaltracking.png.png', title: t('project5.title'), url: 'https://legaltracking.com.mx/' })}
            impactLabel={t('impactLabel')} stackLabel={t('stackLabel')} roleLabel={t('roleLabel')}
          />
        </div>
      </motion.div>

      {/* Other projects (collapsible) */}
      <div className="rounded-2xl border border-slate-700 bg-slate-800/40 overflow-hidden">
        <button
          onClick={() => setShowOther((v) => !v)}
          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-700/30 transition-colors"
        >
          <span className="font-semibold text-slate-300">{t('other.title')}</span>
          {showOther ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
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

      {/* Lightbox */}
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
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
  links,
  previewUrl,
  screenshotUrl,
  onImageClick,
  impactLabel,
  stackLabel,
  roleLabel,
}: {
  gradient: string;
  accent: 'indigo' | 'emerald' | 'violet' | 'amber' | 'rose';
  sector: string;
  title: string;
  role: string;
  description: string;
  impacts: string[];
  stack: string[];
  links?: { label: string; url: string }[];
  previewUrl?: string;
  screenshotUrl?: string;
  onImageClick?: () => void;
  impactLabel: string;
  stackLabel: string;
  roleLabel: string;
}) {
  const accentColor = {
    indigo: { badge: 'bg-indigo-600/20 text-indigo-300 border-indigo-600/30', dot: 'bg-indigo-400', pill: 'bg-indigo-600/20 text-indigo-300' },
    emerald: { badge: 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30', dot: 'bg-emerald-400', pill: 'bg-emerald-600/20 text-emerald-300' },
    violet: { badge: 'bg-violet-600/20 text-violet-300 border-violet-600/30', dot: 'bg-violet-400', pill: 'bg-violet-600/20 text-violet-300' },
    amber: { badge: 'bg-amber-600/20 text-amber-300 border-amber-600/30', dot: 'bg-amber-400', pill: 'bg-amber-600/20 text-amber-300' },
    rose: { badge: 'bg-rose-600/20 text-rose-300 border-rose-600/30', dot: 'bg-rose-400', pill: 'bg-rose-600/20 text-rose-300' },
  }[accent];

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } }}
      className={`rounded-2xl border border-slate-700 bg-gradient-to-br ${gradient} p-6 flex flex-col hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {/* Browser mockup header */}
      {previewUrl && (
        <div className="-mx-6 -mt-6 mb-5 border-b border-slate-700/60">
          {/* Chrome bar */}
          <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-900/70">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 flex-shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 flex-shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 flex-shrink-0" />
            <div className="flex-1 mx-2 px-2.5 py-0.5 bg-slate-700/50 rounded-full text-xs text-slate-400 truncate">
              {previewUrl}
            </div>
          </div>
          {/* Screen */}
          <div
            className={`h-36 overflow-hidden relative bg-gradient-to-br ${gradient} group/img ${onImageClick && screenshotUrl ? 'cursor-zoom-in' : ''}`}
            onClick={onImageClick}
          >
            {screenshotUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={screenshotUrl}
                alt={title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40 pointer-events-none" />
            {onImageClick && screenshotUrl && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-slate-900/30">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border ${accentColor.badge} hover:opacity-80 transition-opacity`}
            >
              <ExternalLink size={11} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Lightbox({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (item) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, handleKey]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 rounded-t-2xl border border-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 text-sm font-medium text-slate-200">{item.title}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-600/30 hover:bg-indigo-600/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={11} />
                    Abrir sitio
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-b-2xl overflow-hidden border border-t-0 border-slate-700 bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full max-h-[75vh] object-cover object-top"
              />
            </div>

            {/* Hint */}
            <p className="text-center text-slate-500 text-xs mt-3">
              Presiona <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">Esc</kbd> o haz clic fuera para cerrar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
