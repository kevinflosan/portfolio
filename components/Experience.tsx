'use client';
import { useTranslations } from 'next-intl';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const JOB_KEYS = ['job1', 'job2', 'job3', 'job4'] as const;
const COLORS = ['bg-indigo-500', 'bg-violet-500', 'bg-blue-500', 'bg-slate-500'] as const;

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="py-24 bg-slate-800/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — animates scaleY on scroll */}
          <motion.div
            className="absolute left-5 top-0 bottom-0 w-px bg-slate-700 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {JOB_KEYS.map((key, index) => (
              <motion.div
                key={key}
                className="relative flex gap-6"
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } }}
              >
                {/* Dot */}
                <motion.div
                  className={`relative z-10 w-10 h-10 rounded-full ${COLORS[index]} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } } }}
                >
                  <Briefcase size={16} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-5 hover:border-indigo-500/40 transition-colors">
                    {/* Period */}
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-600/30 mb-3">
                      {t(`${key}.period`)}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {t(`${key}.title`)}
                    </h3>

                    {/* Company */}
                    <p className="text-indigo-400 text-sm font-medium mb-3">
                      {t(`${key}.company`)}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
