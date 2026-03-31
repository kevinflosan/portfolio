'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return count;
}

function Stat({
  value,
  label,
  suffix,
  active,
}: {
  value: number | string;
  label: string;
  suffix?: string;
  active: boolean;
}) {
  const numericValue = typeof value === 'number' ? value : null;
  const count = useCountUp(numericValue ?? 0, 1500, active && numericValue !== null);

  return (
    <div className="text-center p-6 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-indigo-500/50 transition-colors">
      <div className="text-3xl font-bold text-indigo-400 mb-1">
        {numericValue !== null ? `${count}${suffix ?? ''}` : value}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default function About() {
  const t = useTranslations('about');
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
          {t('subtitle')}
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
        <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Avatar + badge */}
        <div className="flex flex-col items-center gap-6">
          {/* Avatar placeholder */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-indigo-900/50">
              KF
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
              <span className="text-xl">✓</span>
            </div>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xs">
            {['.NET Core', 'Blazor', '.NET MAUI', 'SQL Server', 'Scrum', 'AI/LLM'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Text + stats */}
        <div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            {t('description')}
          </p>

          {/* Stats grid */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            <Stat value={8} suffix="+" label={t('stat1Label')} active={visible} />
            <Stat value={5} label={t('stat2Label')} active={visible} />
            <Stat value={3} label={t('stat3Label')} active={visible} />
            <Stat value={t('stat4Value')} label={t('stat4Label')} active={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}
