'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact'] as const;

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const pathname = usePathname(); // e.g. '/en' or '/es' — basePath excluded
  const localeSwitchHref = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold text-white flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-bold">
            KF
          </span>
          <span className="hidden sm:inline text-slate-200 text-sm font-medium">Kevin Flores</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800"
            >
              {t(link)}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <Link
            href={localeSwitchHref}
            className="px-3 py-1.5 text-xs font-semibold border border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400 rounded-full transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
          {/* Download CV */}
          <a
            href="/portfolio/kevin-cv-en.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors"
          >
            <Download size={14} />
            {t('downloadCV')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              {t(link)}
            </button>
          ))}
          <div className="pt-3 flex items-center gap-3 border-t border-slate-800 mt-3">
            <Link
              href={localeSwitchHref}
              className="px-3 py-1.5 text-xs font-semibold border border-slate-700 text-slate-400 rounded-full"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href="/portfolio/kevin-cv-en.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full"
            >
              <Download size={14} />
              {t('downloadCV')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
