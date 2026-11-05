import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { personalData } from '../data/personal';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showResume?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
  showResume = false,
}) => {
  const links = [
    {
      name: 'GitHub',
      href: personalData.githubUrl,
      icon: <Github size={iconSize} />,
      label: 'Visit GitHub profile',
      external: true,
    },
    {
      name: 'LinkedIn',
      href: personalData.linkedinUrl,
      icon: <Linkedin size={iconSize} />,
      label: 'Connect on LinkedIn',
      external: true,
    },
    {
      name: 'Email',
      href: `mailto:${personalData.email}`,
      icon: <Mail size={iconSize} />,
      label: 'Send an email',
      external: false,
    },
    {
      name: 'Phone',
      href: `tel:${personalData.phone.replace(/\s+/g, '')}`,
      icon: <Phone size={iconSize} />,
      label: 'Call phone',
      external: false,
    },
  ];

  if (showResume) {
    links.push({
      name: 'Resume',
      href: personalData.resumeUrl,
      icon: <FileText size={iconSize} />,
      label: 'Download Resume (PDF)',
      external: true,
    });
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          aria-label={item.label}
          title={item.name}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-indigo-500/40 hover:scale-105 transition-all duration-200"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

