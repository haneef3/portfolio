import React from 'react';
import { ShieldCheck, BrainCircuit, Activity, Calendar, Sparkles, FileAudio, CheckCircle2 } from 'lucide-react';

interface ProjectVisualProps {
  type: 'civic' | 'medical' | 'heart' | 'voice';
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  if (type === 'civic') {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-[#0D1322] to-[#111A2E] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative group">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Top bar: Role selector simulation */}
        <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
            <span className="text-[11px] font-mono text-slate-400 ml-2">CivicEye Engine</span>
          </div>
          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-md text-[10px] font-mono text-slate-300">
            <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Citizen</span>
            <span className="px-1.5 py-0.5 text-slate-400">Admin</span>
            <span className="px-1.5 py-0.5 text-slate-400">Worker</span>
          </div>
        </div>

        {/* Middle: Gemini AI Scanner Simulation */}
        <div className="relative z-10 my-auto bg-[#080B12]/80 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <BrainCircuit size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-semibold text-white">Gemini 1.5 Vision Analysis</h4>
                  <span className="text-[9px] font-mono uppercase bg-rose-500/20 border border-rose-500/40 text-rose-300 px-1.5 rounded">
                    High Priority
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Issue: Pothole & Road Deterioration #CV-8421
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-emerald-400 block font-semibold">96.8% Match</span>
              <span className="text-[9px] font-mono text-slate-400">Auto-Dispatched</span>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <Sparkles size={11} className="text-indigo-400" />
              AI Summary: Severity 4/5 • Urgent Repair
            </span>
            <span className="text-indigo-400">Cloudinary CDN</span>
          </div>
        </div>

        {/* Bottom micro stats */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Role-Based Access
          </span>
          <span className="text-slate-300">Citizen • Municipal Admin • Field Tech</span>
        </div>
      </div>
    );
  }

  if (type === 'medical') {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-[#0D1420] to-[#121B2A] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d415_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Top header */}
        <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calendar size={13} />
            </div>
            <span className="text-xs font-semibold text-white">Medicare Scheduling Portal</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            Slot Booked
          </span>
        </div>

        {/* Middle: Doctor and appointment card */}
        <div className="relative z-10 space-y-2 my-auto">
          <div className="bg-[#080B12]/85 backdrop-blur-sm border border-white/[0.08] rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Dr. Arvind Sharma, MD</p>
                <p className="text-[11px] text-slate-400">General Medicine & Consultation</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono font-medium text-cyan-400">10:30 AM</p>
                <p className="text-[9px] font-mono text-slate-400">Tomorrow</p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Patient: Verified Record</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={11} /> Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/[0.04]">
          <span>Role-Based Auth (Doctor / Patient)</span>
          <span className="text-cyan-400">MongoDB CRUD API</span>
        </div>
      </div>
    );
  }

  if (type === 'heart') {
    return (
      <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-[#120E1C] to-[#1A132B] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf612_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Top header */}
        <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Activity size={13} />
            </div>
            <span className="text-xs font-semibold text-white">Cardiovascular ML Diagnostic</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
            Scikit-learn Model
          </span>
        </div>

        {/* Middle: ECG Pulse Line SVG & Metric Indicators */}
        <div className="relative z-10 my-auto bg-[#080B12]/80 backdrop-blur-sm border border-white/[0.08] rounded-lg p-3">
          {/* ECG Waveform SVG */}
          <div className="h-10 w-full mb-2 flex items-center">
            <svg viewBox="0 0 300 40" className="w-full h-full stroke-rose-400 fill-none" preserveAspectRatio="none">
              <path
                d="M 0 20 L 40 20 L 50 10 L 60 30 L 70 20 L 100 20 L 110 5 L 118 35 L 126 12 L 134 26 L 142 20 L 200 20 L 210 8 L 220 32 L 230 20 L 300 20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/[0.06]">
            <div className="bg-white/[0.03] p-1.5 rounded">
              <p className="text-[9px] font-mono text-slate-400">Max HR</p>
              <p className="text-xs font-mono font-semibold text-white">168 bpm</p>
            </div>
            <div className="bg-white/[0.03] p-1.5 rounded">
              <p className="text-[9px] font-mono text-slate-400">Cholesterol</p>
              <p className="text-xs font-mono font-semibold text-white">212 mg/dl</p>
            </div>
            <div className="bg-white/[0.03] p-1.5 rounded">
              <p className="text-[9px] font-mono text-slate-400">Resting BP</p>
              <p className="text-xs font-mono font-semibold text-emerald-400">122 mmHg</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 size={11} /> Low Probability Risk (12%)
          </span>
          <span className="text-slate-400">EDA & Feature Scaled</span>
        </div>
      </div>
    );
  }

  // Fake Voice Detection System
  return (
    <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-[#0D1726] to-[#0A1F36] rounded-xl border border-indigo-500/20 p-4 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <FileAudio size={13} />
          </div>
          <span className="text-xs font-semibold text-white">Audio Deepfake Spectrogram</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-semibold">
          Librosa + Joblib
        </span>
      </div>

      {/* Middle: Sound Waveform Visualization & Pipeline */}
      <div className="relative z-10 my-auto bg-[#080B12]/85 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-3">
        {/* Animated Sound Wave Bars */}
        <div className="flex items-center justify-between gap-1 h-10 px-1 mb-2.5">
          {[40, 65, 80, 45, 90, 75, 55, 95, 85, 60, 40, 70, 90, 50, 75, 85, 60, 45, 90, 65, 50, 80, 45, 30].map(
            (height, idx) => (
              <span
                key={idx}
                style={{ height: `${height}%` }}
                className={`w-1 rounded-full transition-all duration-300 ${
                  idx % 3 === 0
                    ? 'bg-indigo-400'
                    : idx % 3 === 1
                    ? 'bg-cyan-400'
                    : 'bg-indigo-600'
                }`}
              />
            )
          )}
        </div>

        {/* Feature Extraction Pipeline Chips */}
        <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
          <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
            MFCC (40)
          </span>
          <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
            Spectral Contrast
          </span>
          <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
            Zero-Crossing
          </span>
        </div>
      </div>

      {/* Bottom Bar: Model Output */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono pt-1">
        <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
          <ShieldCheck size={13} /> Result: Authentic Voice
        </span>
        <span className="text-indigo-300 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
          98.4% Confidence
        </span>
      </div>
    </div>
  );
};
