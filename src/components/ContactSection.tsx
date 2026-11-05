import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Download, MapPin, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personal';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding AI/ML & Full-Stack Collaboration'
    )}&body=${encodeURIComponent(message || 'Hi Haneef,\n\nI came across your portfolio and would like to connect.')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Email Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <Mail size={18} />
            </div>
            <h3 className="font-heading font-semibold text-sm text-slate-300">Email</h3>
            <p className="text-xs text-slate-400 break-all font-mono mt-1">
              {personalData.email}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2">
            <a
              href={`mailto:${personalData.email}`}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              Write Email <ArrowUpRight size={13} />
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="ml-auto p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Phone size={18} />
            </div>
            <h3 className="font-heading font-semibold text-sm text-slate-300">Phone</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              {personalData.phone}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <a
              href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Call Directly <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <Linkedin size={18} />
            </div>
            <h3 className="font-heading font-semibold text-sm text-slate-300">LinkedIn</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              in/podilihaneef
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              View Profile <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Github size={18} />
            </div>
            <h3 className="font-heading font-semibold text-sm text-slate-300">GitHub</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              github.com/haneef3
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Explore Repos <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Direct Message Composer Box */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-text-secondary">
              Compose a note below to open directly in your preferred email client.
            </p>
          </div>

          <form onSubmit={handleComposeEmail} className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="e.g. AI/ML Engineering Opportunity or Collaboration"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080B12]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                Message Body
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi Haneef, I'm reaching out regarding..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080B12]/80 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin size={14} className="text-indigo-400" />
                <span>{personalData.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalData.resumeUrl}
                  download="P_Haneef_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Download size={14} />
                  <span>Resume</span>
                </a>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-md shadow-indigo-600/20 inline-flex items-center gap-2"
                >
                  <Send size={14} />
                  <span>Send via Email Client</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

