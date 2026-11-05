import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Outer ambient decorative rings */}
      <div className="absolute inset-4 rounded-full border border-white/[0.05] animate-[spin_60s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-dashed border-indigo-500/20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

      {/* Central Interactive AI Core */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full max-w-[460px] max-h-[460px] overflow-visible drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]"
        >
          <defs>
            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Neural Connections (SVG Lines) */}
          <g strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6">
            {/* Input layer to hidden layer 1 */}
            <line x1="90" y1="140" x2="180" y2="180" stroke="url(#lineGrad1)" />
            <line x1="90" y1="140" x2="180" y2="250" stroke="url(#lineGrad1)" />
            <line x1="90" y1="250" x2="180" y2="180" stroke="url(#lineGrad1)" />
            <line x1="90" y1="250" x2="180" y2="250" stroke="url(#lineGrad1)" />
            <line x1="90" y1="250" x2="180" y2="320" stroke="url(#lineGrad1)" />
            <line x1="90" y1="360" x2="180" y2="250" stroke="url(#lineGrad1)" />
            <line x1="90" y1="360" x2="180" y2="320" stroke="url(#lineGrad1)" />

            {/* Hidden layer 1 to Center Core */}
            <line x1="180" y1="180" x2="250" y2="250" stroke="#6366F1" strokeWidth="2" strokeDasharray="none" />
            <line x1="180" y1="250" x2="250" y2="250" stroke="#06B6D4" strokeWidth="2" strokeDasharray="none" />
            <line x1="180" y1="320" x2="250" y2="250" stroke="#818CF8" strokeWidth="2" strokeDasharray="none" />

            {/* Center Core to Hidden layer 2 */}
            <line x1="250" y1="250" x2="320" y2="180" stroke="#818CF8" strokeWidth="2" strokeDasharray="none" />
            <line x1="250" y1="250" x2="320" y2="250" stroke="#06B6D4" strokeWidth="2" strokeDasharray="none" />
            <line x1="250" y1="250" x2="320" y2="320" stroke="#6366F1" strokeWidth="2" strokeDasharray="none" />

            {/* Hidden layer 2 to Output layer */}
            <line x1="320" y1="180" x2="410" y2="160" stroke="url(#lineGrad2)" />
            <line x1="320" y1="180" x2="410" y2="250" stroke="url(#lineGrad2)" />
            <line x1="320" y1="250" x2="410" y2="250" stroke="url(#lineGrad2)" />
            <line x1="320" y1="320" x2="410" y2="250" stroke="url(#lineGrad2)" />
            <line x1="320" y1="320" x2="410" y2="340" stroke="url(#lineGrad2)" />
          </g>

          {/* Node: Inputs */}
          <g>
            <circle cx="90" cy="140" r="12" fill="#111827" stroke="#6366F1" strokeWidth="2" />
            <circle cx="90" cy="140" r="5" fill="#6366F1" />
            <text x="50" y="144" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">AUDIO</text>

            <circle cx="90" cy="250" r="12" fill="#111827" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="90" cy="250" r="5" fill="#06B6D4" />
            <text x="50" y="254" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">VISION</text>

            <circle cx="90" cy="360" r="12" fill="#111827" stroke="#818CF8" strokeWidth="2" />
            <circle cx="90" cy="360" r="5" fill="#818CF8" />
            <text x="50" y="364" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="end">TABULAR</text>
          </g>

          {/* Node: Hidden Latent Representations */}
          <g>
            <circle cx="180" cy="180" r="14" fill="#111827" stroke="#6366F1" strokeWidth="2" />
            <circle cx="180" cy="180" r="6" fill="#6366F1" filter="url(#glow)" />

            <circle cx="180" cy="250" r="15" fill="#111827" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="180" cy="250" r="7" fill="#06B6D4" filter="url(#glow)" />

            <circle cx="180" cy="320" r="14" fill="#111827" stroke="#6366F1" strokeWidth="2" />
            <circle cx="180" cy="320" r="6" fill="#818CF8" filter="url(#glow)" />
          </g>

          {/* Central Deep Learning Tensor Core */}
          <g filter="url(#glow)">
            {/* Pulsing Core Ring */}
            <circle
              cx="250"
              cy="250"
              r="44"
              fill="#0D111B"
              stroke="url(#coreGrad)"
              strokeWidth="3"
              className="animate-pulse"
            />
            <circle
              cx="250"
              cy="250"
              r="34"
              fill="#111827"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />
            <circle cx="250" cy="250" r="18" fill="url(#coreGrad)" opacity="0.9" />
            <circle cx="250" cy="250" r="7" fill="#FFFFFF" />
          </g>

          {/* Node: Second Hidden Layer */}
          <g>
            <circle cx="320" cy="180" r="14" fill="#111827" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="320" cy="180" r="6" fill="#06B6D4" filter="url(#glow)" />

            <circle cx="320" cy="250" r="15" fill="#111827" stroke="#818CF8" strokeWidth="2" />
            <circle cx="320" cy="250" r="7" fill="#818CF8" filter="url(#glow)" />

            <circle cx="320" cy="320" r="14" fill="#111827" stroke="#6366F1" strokeWidth="2" />
            <circle cx="320" cy="320" r="6" fill="#6366F1" filter="url(#glow)" />
          </g>

          {/* Node: Outputs / Inferences */}
          <g>
            <circle cx="410" cy="160" r="12" fill="#111827" stroke="#06B6D4" strokeWidth="2" />
            <circle cx="410" cy="160" r="5" fill="#06B6D4" />
            <text x="430" y="164" fill="#06B6D4" fontSize="10" fontFamily="monospace">AUTHENTIC</text>

            <circle cx="410" cy="250" r="12" fill="#111827" stroke="#6366F1" strokeWidth="2" />
            <circle cx="410" cy="250" r="5" fill="#6366F1" />
            <text x="430" y="254" fill="#818CF8" fontSize="10" fontFamily="monospace">HIGH PRIORITY</text>

            <circle cx="410" cy="340" r="12" fill="#111827" stroke="#10B981" strokeWidth="2" />
            <circle cx="410" cy="340" r="5" fill="#10B981" />
            <text x="430" y="344" fill="#10B981" fontSize="10" fontFamily="monospace">LOW RISK</text>
          </g>
        </svg>

        {/* Floating Telemetry Metric Card: Fake Voice Detection Model */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -top-3 left-0 sm:-left-4 glass-card px-3.5 py-2.5 rounded-xl flex items-center gap-3 border border-indigo-500/30 shadow-lg shadow-black/40"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <ShieldCheck size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              <span>Deepfake Detector</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              <span>Librosa + Scikit-Learn</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono">
                98.4% Acc
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating Telemetry Metric Card: Multimodal Civic Analysis */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute -bottom-4 right-0 sm:-right-4 glass-card px-3.5 py-2.5 rounded-xl flex items-center gap-3 border border-cyan-500/30 shadow-lg shadow-black/40"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <BrainCircuit size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              <span>CivicEye AI Core</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              <span>Gemini 1.5 Vision</span>
              <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded font-mono">
                Realtime
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating Telemetry Metric Card: Realtime ML Inference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 glass-card px-3 py-2 rounded-lg items-center gap-2 border border-white/10"
        >
          <Activity size={15} className="text-indigo-400" />
          <span className="text-[11px] font-mono text-slate-300">
            Latency: <strong className="text-white font-semibold">14ms</strong>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
