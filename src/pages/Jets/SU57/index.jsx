import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronLeft, Crosshair, ShieldAlert, Activity, Radar, Cpu, Flame, Target, Maximize2, Wind, Zap, Layers, Navigation } from 'lucide-react';

// Local Assets (Mapped exactly to your SU57 folder)
import headerVid from './img/header-vid.mp4';
import jetImg from './img/jet.jpg';
import blueprintImg from './img/Detailed-Architect.png';

export default function Su57Felon() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Cinematic Entrance
      gsap.from('.stagger-element', { 
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power4.out' 
      });
      // Data Bar Fill Animation
      gsap.from('.data-bar', { 
        width: 0, duration: 2, ease: 'power4.out', delay: 0.8, stagger: 0.1 
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // UI Component for the citation to match the tactical theme
  const Cite = () => (
    <sup className="text-[8px] text-cyan-600/50 ml-1 font-mono tracking-tighter cursor-help" title="Source: Blueprint Archive">
      [REF]
    </sup>
  );

  return (
    <div ref={pageRef} className="bg-slate-950 min-h-screen pt-24 pb-20 relative z-10 overflow-hidden">
      
      {/* ================= HERO VIDEO HEADER ================= */}
      <div className="relative h-[50vh] md:h-[70vh] w-full bg-slate-900 border-b border-cyan-900/50 mb-12">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay z-10"></div>
        <div className="absolute left-0 w-full h-[2px] bg-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-scanline z-30"></div>
        
        <video 
          src={headerVid} 
          poster={jetImg} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover grayscale opacity-50 object-center"
        />
        
        <div className="absolute bottom-0 left-0 w-full z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/category/jets" className="stagger-element inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Return to Database
          </Link>
          <div className="stagger-element flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.2)] flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div> 5TH GENERATION
            </span>
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase border border-slate-800 px-3 py-1 rounded-sm">
              MULTIROLE STEALTH FIGHTER <Cite />
            </span>
            <span className="text-red-900/80 bg-red-500/20 border border-red-900/50 px-3 py-1 font-mono text-xs tracking-widest uppercase rounded-sm">
              NATO: FELON
            </span>
          </div>
          <h1 className="stagger-element text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            Sukhoi Su-57
          </h1>
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Deep Dive Data (Spans 8 columns on Desktop) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Executive Overview */}
            <section className="stagger-element p-8 bg-slate-900/40 border border-slate-800 rounded-xl backdrop-blur-sm relative overflow-hidden group">
              <div className="hud-corners w-full h-full absolute inset-0 pointer-events-none"></div>
              <h2 className="text-2xl font-bold uppercase text-white mb-4 flex items-center gap-3">
                <ShieldAlert className="text-cyan-500 w-6 h-6" /> Program Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-cyan-800 pl-4">
                The Sukhoi Su-57 (NATO reporting name: Felon) is a fifth-generation, twin-engine stealth multirole fighter developed for the Russian Aerospace Forces. It is designed to destroy all types of air, ground, and naval targets. Combining Supermaneuvrability via 3D thrust vectoring with advanced composite stealth structures, the Su-57 represents a unique approach to modern air dominance. <Cite />
              </p>
            </section>

            {/* Platform Capabilities Grid */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2"><Layers className="w-5 h-5" /> Operational Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Supermaneuvrability</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">KINETIC EDGE <Cite /></p>
                  <p className="text-sm text-slate-400">3D Thrust-Vectoring Control (TVC) enables extreme angle-of-attack aerodynamics.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Anti-Stealth Radar</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">SENSOR FUSION <Cite /></p>
                  <p className="text-sm text-slate-400">Unique L-band wing-root arrays designed specifically to detect LO (Low Observable) assets.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Deep Strike</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">HEAVY PAYLOAD <Cite /></p>
                  <p className="text-sm text-slate-400">Side-by-side internal weapons bays configured for heavy air-to-surface and anti-ship munitions.</p>
                </div>
              </div>
            </section>

            {/* Blueprint & Dimensions */}
            <section className="stagger-element p-1 bg-gradient-to-b from-cyan-900/30 to-slate-900/40 rounded-xl">
              <div className="bg-slate-950 p-6 sm:p-8 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <h3 className="text-2xl font-bold uppercase text-white mb-6 flex items-center gap-3 relative z-10">
                  <Maximize2 className="text-cyan-500 w-6 h-6" /> Structural Intelligence
                </h3>
                
                {/* Blueprint Viewer */}
                <div className="relative p-2 bg-slate-900 rounded border border-slate-800 overflow-hidden cursor-zoom-in group mb-8">
                   <img src={blueprintImg} alt="Su-57 Blueprint Data" className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 mix-blend-screen" />
                   <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur border border-cyan-900 px-3 py-1 rounded font-mono text-[10px] text-cyan-500">ENCRYPTED SCHEMATIC</div>
                </div>

                {/* Dimensions Data extracted from Blueprint */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6 relative z-10">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Length</span>
                    <span className="text-lg font-bold text-white">20.10 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wingspan</span>
                    <span className="text-lg font-bold text-white">14.10 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Height</span>
                    <span className="text-lg font-bold text-white">4.60 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wing Area</span>
                    <span className="text-lg font-bold text-white">78.8 m² <Cite /></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stealth & Survivability */}
            <section className="stagger-element grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <ShieldAlert className="w-5 h-5 text-emerald-500" /> Stealth Features
                </h3>
                <ul className="space-y-3">
                  {['Composite structures with conductive layers', 'Internal weapons carriage (side-by-side)', 'Radar-absorbent materials (RAM)', 'S-shaped inlets with diverter', 'Edge alignment & serrated panels', 'Reduced infrared signature', 'Minimized external protrusions', 'Emission control & spectral management'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                      <span>{feature} <Cite /></span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Target className="w-5 h-5 text-red-500" /> Payload & Armament <Cite />
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Internal Weapons</span>
                    <span className="text-md font-bold text-white">4,000 kg <Cite /></span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">External (6 Stations)</span>
                    <span className="text-md font-bold text-white">6,000 kg <Cite /></span>
                  </div>
                </div>
                
                <h4 className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">Weapon Types Supported</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Air-to-Air</span> <span className="text-slate-500">R-77M, K-77M</span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Air-to-Surface</span> <span className="text-slate-500">Kh-59MK2, Kh-38M</span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Anti-Ship</span> <span className="text-slate-500">Kh-35U</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sensors & Avionics (Bento Sub-grid) */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 border-b border-slate-800 pb-2 flex items-center gap-2">
                <Radar className="w-5 h-5 text-purple-500" /> Sensors & Avionics <Cite />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">N036 Byelka AESA <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">Multiple X-band arrays combined with L-band wing-root antennas. Provides simultaneous air & ground tracking with specific stealth detection enhancements. <Cite /></p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[98%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">101KS Atoll EOTS <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">Comprehensive Electro-Optical suite including passive Infrared Search & Track (IRST) and 360° Distributed Aperture System (DAS). <Cite /></p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[100%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 flex items-center gap-2"><Navigation className="w-4 h-4 text-cyan-500"/> Electronic Warfare</h4>
                    <p className="text-xs text-slate-400">Missile Approach Warning System (MAWS), Digital Radio Frequency Warning Receiver (RWR), and multi-link secure low probability of intercept datalink. <Cite /></p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sticky Telemetry Sidebar (Spans 4 columns on Desktop) */}
          <div className="lg:col-span-4">
            <aside className="stagger-element sticky top-28 space-y-6">
              
              {/* Performance Specs Box */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-t-xl"></div>
                <h3 className="text-lg font-bold uppercase text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                  <Activity className="text-red-400 w-5 h-5" /> Performance Specs <Cite />
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Maximum Speed</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-white">2.0</span>
                      <span className="text-sm text-cyan-400 font-bold mb-1">Mach <Cite /></span>
                    </div>
                    <span className="text-xs text-slate-500">(~2,135 km/h at altitude)</span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase block mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> Supercruise</span>
                    <span className="text-xl font-bold text-white">YES <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Combat Radius</span>
                    <span className="text-xl font-bold text-white">~1,500 km <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Service Ceiling</span>
                    <span className="text-xl font-bold text-white">20,000 m <Cite /></span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">RATE OF CLIMB <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">~330 m/s</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">MAX G LOAD <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">+9.0 / -3.0 g</span>
                    </div>
                  </div>

                  {/* Propulsion Detail */}
                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-3 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" /> Propulsion <Cite />
                    </span>
                    <span className="text-sm font-bold text-white block mb-1">2 × Saturn AL-41F1 <Cite /></span>
                    <span className="text-xs text-slate-400 block mb-3">Afterburning Turbofans with 3D TVC <Cite /></span>
                    
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>DRY THRUST <Cite /></span>
                          <span>2 × 98 kN</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden">
                          <div className="data-bar bg-orange-500/50 h-full w-[65%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-orange-400 mb-1">
                          <span>AFTERBURNER <Cite /></span>
                          <span>2 × 142 kN</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                          <div className="data-bar bg-orange-500 h-full w-[100%]"></div>
                        </div>
                      </div>
                      <div className="pt-2 flex flex-col gap-1">
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-mono text-slate-400">ENGINE CONTROL</span>
                           <span className="text-sm font-bold text-white">FADEC <Cite /></span>
                         </div>
                         <div className="flex justify-between items-center">
                           <span className="text-[10px] font-mono text-slate-400">EXHAUST</span>
                           <span className="text-sm font-bold text-white text-right">Low Observable<br/>Serrated Nozzles <Cite /></span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 bg-cyan-950/50 hover:bg-cyan-900 border border-cyan-800 text-cyan-400 hover:text-white py-3 rounded uppercase font-mono text-sm tracking-widest transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] flex justify-center items-center gap-2 group">
                  <Crosshair className="w-4 h-4 group-hover:animate-spin" /> ENGAGE TARGETING
                </button>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}