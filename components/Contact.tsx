'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Copy, Check, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// 👉 Crea una cuenta gratis en https://formspree.io, crea un form y pega el ID aquí
const FORMSPREE_ID = 'mpqkwvoo';

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
const LINKEDIN = 'linkedin.com/in/kevin-flores-sánchez-3302b3120';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-flores-sánchez-3302b3120/';
const GITHUB = 'github.com/kevinflosan';
const GITHUB_URL = 'https://github.com/kevinflosan';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState('success');
        setFields({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('title')}</h2>
          <p className="mt-3 text-slate-400">{t('subtitle')}</p>
          <div className="mt-4 w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — Contact cards */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Email */}
            <motion.div
              variants={cardVariants}
              className="flex items-center justify-between p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center flex-shrink-0">
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
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-slate-700 text-slate-500 hover:border-indigo-500 hover:text-indigo-400 transition-all flex-shrink-0"
              >
                {copied ? <><Check size={12} />{t('copied')}</> : <><Copy size={12} />{t('copyEmail')}</>}
              </button>
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              variants={cardVariants}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <LinkedInIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{t('linkedinLabel')}</p>
                <span className="text-slate-200 text-sm sm:text-base group-hover:text-blue-400 transition-colors break-all">
                  {LINKEDIN}
                </span>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={cardVariants}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center flex-shrink-0">
                <GitHubIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{t('githubLabel')}</p>
                <span className="text-slate-200 text-sm sm:text-base group-hover:text-slate-100 transition-colors">
                  {GITHUB}
                </span>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={cardVariants}
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{t('locationLabel')}</p>
                <span className="text-slate-200 text-sm sm:text-base">{t('locationValue')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-slate-800/60 border border-slate-700 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-5">{t('formTitle')}</h3>

            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <CheckCircle size={40} className="text-emerald-400" />
                <p className="text-slate-300 text-sm">{t('formSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t('formName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={fields.name}
                    onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t('formNamePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t('formEmail')}
                  </label>
                  <input
                    type="email"
                    required
                    value={fields.email}
                    onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                    placeholder={t('formEmailPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    {t('formMessage')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={fields.message}
                    onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                    placeholder={t('formMessagePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs">
                    <AlertCircle size={14} />
                    {t('formError')}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-sm"
                >
                  <Send size={15} />
                  {formState === 'sending' ? t('formSending') : t('formSend')}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-xs mt-12">
          © {new Date().getFullYear()} Kevin Flores Sánchez
        </p>
      </div>
    </section>
  );
}
