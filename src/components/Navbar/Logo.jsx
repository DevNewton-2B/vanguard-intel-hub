import { Link } from 'react-router-dom';
import { Radar } from 'lucide-react';

// Make sure both "export" and "default" are right here
export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group relative z-50">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-600 group-hover:border-cyan-500 transition-colors duration-300">
        <Radar className="w-5 h-5 text-cyan-400 group-hover:animate-spin-slow" />
        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-widest text-white leading-none uppercase">Global<span className="text-cyan-400">Forces</span></span>
        <span className="text-[0.65rem] text-slate-400 tracking-[0.2em] uppercase font-mono">Tactical Database</span>
      </div>
    </Link>
  );
}