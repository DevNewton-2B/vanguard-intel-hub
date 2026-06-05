import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ShieldAlert, Crosshair, Globe, Cpu, Flame, Activity, Radar, Satellite, Radio } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Hero Section
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      });

      // 2. Animate Cool Bento Grid Items
      gsap.from('.bento-item', {
        scale: 0.9,
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        delay: 0.5,
      });
    }, [heroRef, bentoRef]);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="max-w-4xl mb-24 relative z-10">
        <div className="hero-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/80 text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(34,211,238,0.15)] mb-8">
          <Activity className="w-4 h-4 animate-pulse text-cyan-300" />
          <span>SYS.ON // Network Secured</span>
        </div>
        
        <h1 className="hero-element text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-[1.1]">
          Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Forces</span> <br />
          <span className="text-slate-400 text-4xl md:text-6xl tracking-widest">Database</span>
        </h1>
        
        <p className="hero-element text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl border-l-2 border-cyan-500 pl-6 bg-gradient-to-r from-cyan-950/20 to-transparent py-2">
          The definitive classified intelligence hub. Access deeply researched tactical specifications, live-fire combat history, and technical blueprints of the world's most advanced military hardware.
        </p>

        <div className="hero-element flex flex-wrap gap-4">
          <Link to="/category/jets" className="group relative px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded uppercase tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">Initialize Link <Radar className="w-4 h-4 group-hover:animate-spin" /></span>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Link>
          <Link to="/category/weapons" className="px-8 py-3 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-slate-300 hover:text-white font-bold text-sm rounded uppercase tracking-[0.15em] transition-colors backdrop-blur-sm">
            View Armory
          </Link>
        </div>
      </section>

      {/* ================= TACTICAL BENTO GRID ================= */}
      <section ref={bentoRef} className="relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px]">
          
          {/* Card 1: Global Tracking (Spans 2 cols, 2 rows) */}
          <div className="bento-item group md:col-span-2 md:row-span-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] flex flex-col justify-between">
            <div className="hud-corners w-full h-full absolute inset-0 m-4 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(34,211,238,0)_0%,rgba(34,211,238,0.1)_25%,rgba(34,211,238,0)_50%)] animate-spin-slow opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"></div>

            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="text-cyan-400 font-mono text-xs tracking-widest bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800/50">GEO-TRACKING</span>
              <Globe className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors duration-500" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">Theater <br/> Command</h3>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                Live updates on stealth asset deployments, geopolitical force projection, and carrier strike group movements across all NATO and allied sectors.
              </p>
            </div>
          </div>

          {/* Card 2: Precision Radar */}
          <div className="bento-item group bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-500">
            <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700">
              <Crosshair className="w-40 h-40 text-cyan-400" />
            </div>
            <div className="relative z-10">
              <span className="text-slate-500 font-mono text-[10px] tracking-widest block mb-4">SENSOR SUITE</span>
              <h4 className="text-xl font-bold text-white uppercase leading-tight mb-1">AESA <br/> Radar Data</h4>
            </div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-xs tracking-widest">ACTIVE PING</span>
            </div>
          </div>

          {/* Card 3: Deep Dive Armor (Spans 1 col, 2 rows) */}
          <div className="bento-item group md:row-span-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-red-500/40 rounded-2xl relative overflow-hidden flex flex-col transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518331647614-7a1f04cd34cb?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
            <div className="absolute left-0 w-full h-[2px] bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-scanline z-20"></div>

            <div className="relative z-10 p-6 mt-auto">
              <ShieldAlert className="w-10 h-10 text-red-500/80 mb-4 group-hover:text-red-400 transition-colors" />
              <h4 className="text-2xl font-black text-white uppercase mb-2">Armor <br/> & Defense</h4>
              <p className="text-sm text-slate-300/80 leading-relaxed">
                Reactive plating analysis, APS countermeasures, and radar-absorbent material (RAM) compositions.
              </p>
            </div>
          </div>

          {/* Card 4: NEW - Signal Intercept (Fills the R2, C3 hole below Radar) */}
          <div className="bento-item group bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-purple-500/50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <div className="relative z-10">
              <Radio className="w-8 h-8 text-slate-500 group-hover:text-purple-400 mb-2 transition-colors duration-300" />
              <h4 className="text-xl font-bold text-white uppercase leading-tight mb-1">Signal <br/> Intercept</h4>
              <span className="text-slate-500 font-mono text-[10px] tracking-widest">UHF/VHF BANDS</span>
            </div>
            
            {/* Animated Audio/Radio Waveform */}
            <div className="relative z-10 flex items-end gap-1 h-12 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex-1 bg-purple-500 rounded-t-sm" style={{ 
                  height: `${Math.random() * 80 + 20}%`, 
                  animation: `pulse ${0.5 + Math.random()}s infinite alternate` 
                }}></div>
              ))}
            </div>
          </div>

          {/* Card 5: Tech Stack (Spans 2 cols, 1 row) */}
          <div className="bento-item group md:col-span-2 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 relative overflow-hidden flex items-center gap-6 transition-all duration-500">
            <div className="absolute right-4 top-4 flex gap-1 opacity-20 group-hover:opacity-60 transition-opacity">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-1 h-8 bg-cyan-500 rounded-sm" style={{ animation: `pulse ${1 + (i*0.2)}s infinite alternate`}}></div>
               ))}
            </div>
            <div className="p-4 bg-cyan-950/40 border border-cyan-800/50 rounded-xl relative z-10 group-hover:bg-cyan-900/50 transition-colors">
              <Cpu className="w-10 h-10 text-cyan-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white uppercase">Avionics & EW</h4>
              <p className="text-sm text-slate-400 mt-2 max-w-sm">
                Next-gen electronic warfare suites, FLIR targeting pods, and datalink sharing protocols.
              </p>
            </div>
          </div>

          {/* Card 6: Propulsion */}
          <div className="bento-item group bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex justify-between items-start">
              <Flame className="w-8 h-8 text-slate-500 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="text-orange-500/80 font-mono text-[10px]">MACH 2.5+</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white uppercase leading-tight mb-1">Thrust <br/> Dynamics</h4>
              <div className="w-full h-1 bg-slate-800 mt-3 rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-600 to-amber-400 w-0 group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>

          {/* Card 7: NEW - Orbital Uplink (Fills the R3, C4 hole next to Thrust Dynamics) */}
          <div className="bento-item group bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 flex justify-between items-start">
              <Satellite className="w-8 h-8 text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 group-hover:animate-bounce" />
              <span className="text-emerald-400 font-mono text-[10px] tracking-widest border border-emerald-900/50 bg-emerald-950/30 px-2 py-1 rounded flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div> SECURE
              </span>
            </div>
            <div className="relative z-10 mt-auto">
              <h4 className="text-xl font-bold text-white uppercase leading-tight mb-2">Orbital <br/> Uplink</h4>
              <div className="w-full h-1 bg-slate-800 rounded overflow-hidden">
                <div className="h-full bg-emerald-500 w-[100%] relative">
                   <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-sm animate-pulse"></div>
                </div>
              </div>
              <p className="text-slate-500 font-mono text-[10px] mt-3 group-hover:text-emerald-500/70 transition-colors">LAT: 12.97 / LNG: 77.59</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}