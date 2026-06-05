import { Link } from 'react-router-dom';
import { Radar, ShieldCheck, Terminal, Code, Radio, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 border-t border-slate-800/60 overflow-hidden z-20 mt-auto">
      {/* Top Ambient Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Intel */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex w-max">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-slate-900 border border-slate-700 group-hover:border-cyan-500 transition-colors">
                <Radar className="w-5 h-5 text-cyan-400" />
                <div className="hud-corners w-full h-full absolute inset-0 pointer-events-none"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest text-white leading-none uppercase">Global<span className="text-cyan-500">Forces</span></span>
                <span className="text-[0.65rem] text-slate-500 tracking-[0.2em] uppercase font-mono">End-to-End Encrypted</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              The definitive classified intelligence hub. Monitor, analyze, and strategize with deeply researched technical specifications of the world's most advanced military hardware.
            </p>
            <div className="flex gap-4">
              <a href="#" title="Source Code" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group">
                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" title="Comms Channel" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group">
                <Radio className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" title="Direct Message" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Database Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-500" /> Archives
            </h4>
            <ul className="space-y-3">
              {['Fighter Jets', 'Stealth Warships', 'Attack Submarines', 'Armored Tanks', 'Ballistic Missiles'].map((item) => (
                <li key={item}>
                  <Link to={`/category/${item.split(' ')[1].toLowerCase()}`} className="text-sm text-slate-400 hover:text-cyan-400 flex items-center group transition-colors">
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500 mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Command & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-500" /> Clearance
            </h4>
            <ul className="space-y-3">
              {['About Database', 'API Access', 'Declassified Docs', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white flex items-center group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-500 mr-2 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Comm-Link */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-3">Secure Comm-Link</h4>
            <p className="text-sm text-slate-400 mb-4">Establish a secure connection to receive priority intelligence updates and patch notes.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Terminal className="h-4 w-4 text-slate-500" />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter encrypted routing address..." 
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 block pl-10 p-2.5 transition-colors placeholder-slate-600 outline-none"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-cyan-900/40 hover:bg-cyan-800/60 border border-cyan-700/50 text-cyan-400 hover:text-white font-mono text-sm uppercase tracking-widest p-2.5 rounded transition-all flex items-center justify-center gap-2"
              >
                Establish Connection
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Global Forces Database. All intel strictly classified.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-950/30 border border-emerald-900/50 px-2 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SYS. STATUS: GREEN
            </span>
            <span className="text-xs font-mono text-slate-600">v3.0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}