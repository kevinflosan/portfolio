'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Copy, Check } from 'lucide-react';

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const EMAIL = 'kevinflosan@gmail.com';
const LINKEDIN = 'linkedin.com/in/kevin-floressánchez-3302b3120';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-floressánchez-3302b3120';
const GITHUB = 'github.com/kevinflosan';
const GITHUB_URL = 'https://github.com/kevinflosan';

export default function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
          <p className="mt-3 text-slate-400">{t('subtitle')}</p>
          <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Contact cards */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-indigo-500/50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{t('emailLabel')}</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-slate-200 hover:text-indigo-400 transition-colors text-sm sm:text-base"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-slate-700 text-slate-500 hover:border-indigo-500 hover:text-indigo-400 transition-all"
            >
              {copied ? (
                <>
                  <Check size={12} />
                  {t('copied')}
                </>
              ) : (
                <>
                  <Copy size={12} />
                  {t('copyEmail')}
                </>
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
              <LinkedInIcon size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">{t('linkedinLabel')}</p>
              <span className="text-slate-200 text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                {LINKEDIN}
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center">
              <GitHubIcon size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">{t('githubLabel')}</p>
              <span className="text-slate-200 text-sm sm:text-base group-hover:text-slate-100 transition-colors">
                {GITHUB}
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <MapPin size={18} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5">{t('locationLabel')}</p>
              <span className="text-slate-200 text-sm sm:text-base">{t('locationValue')}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-xs mt-12">
          © {new Date().getFullYear()} Kevin Flores Sánchez
        </p>
      </div>
    </section>
  );
}
