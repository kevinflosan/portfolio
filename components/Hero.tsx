'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TYPING_SPEED = 80;
const ERASING_SPEED = 50;
const PAUSE_BEFORE_ERASE = 2000;
const PAUSE_BEFORE_NEXT = 400;

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const roles = [t('role1'), t('role2'), t('role3')];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsErasing(true), PAUSE_BEFORE_ERASE);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsErasing(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }, PAUSE_BEFORE_NEXT);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isErasing, roleIndex, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2.5 }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t('openToWork')}
        </div>

        {/* Greeting + name */}
        <p className="text-slate-400 text-lg sm:text-xl mb-2">{t('greeting')}</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Kevin{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Flores
          </span>{' '}
          Sánchez
        </h1>

        {/* Typewriter role */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-lg sm:text-2xl font-semibold text-indigo-300">
            {displayText}
            <span
              className={`inline-block w-0.5 h-6 sm:h-7 bg-indigo-400 ml-0.5 align-middle transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
          {t('description')}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
          <MapPin size={14} />
          <span>{t('location')}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95"
          >
            {t('ctaProjects')}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95"
          >
            {t('ctaContact')}
          </button>
          <a
            href={`/portfolio/kevin-cv-${locale}.pdf`}
            download
            className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-200 font-medium rounded-full transition-all hover:scale-105 active:scale-95 text-sm"
          >
            {t('ctaCV')}
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
