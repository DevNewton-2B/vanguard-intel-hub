import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronLeft, Crosshair, ShieldAlert, Activity, Radar, Cpu, Flame, Target, Maximize2, Wind, Zap, Layers } from 'lucide-react';

// Local Assets (Mapped exactly to your F22 folder)
import headerVid from './img/header-vid.mp4';
import jetImg from './img/jet.jpg';
import blueprintImg from './img/detailed-architect.png';

export default function F22Raptor() {
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
              AIR SUPERIORITY FIGHTER <Cite />
            </span>
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">
              STATUS: ACTIVE
            </span>
          </div>
          <h1 className="stagger-element text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            F-22 Raptor
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
                The Lockheed Martin F-22 Raptor is a fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter aircraft. Introduced in December 2005, it was designed primarily as an air superiority fighter, but incorporates robust ground attack, electronic warfare, and signals intelligence capabilities. <Cite /> It remains unparalleled in dogfighting dominance.
              </p>
            </section>

            {/* Platform Capabilities Grid */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2"><Layers className="w-5 h-5" /> Operational Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Air Superiority</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">DOMAIN CONTROL <Cite /></p>
                  <p className="text-sm text-slate-400">Unmatched kinematic performance combined with beyond-visual-range (BVR) targeting.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Stealth Penetration</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">FIRST LOOK, FIRST KILL <Cite /></p>
                  <p className="text-sm text-slate-400">Blended fuselage and RAM coating allow operation deep within contested airspace.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Network-Centric</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">DATALINK <Cite /></p>
                  <p className="text-sm text-slate-400">Acts as a quarterback in the sky, sharing real-time telemetry across allied platforms.</p>
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
                   <img src={blueprintImg} alt="F-22 Blueprint Data" className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 mix-blend-screen" />
                   <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur border border-cyan-900 px-3 py-1 rounded font-mono text-[10px] text-cyan-500">ENCRYPTED SCHEMATIC</div>
                </div>

                {/* Dimensions Data extracted from Blueprint */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6 relative z-10">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Length</span>
                    <span className="text-lg font-bold text-white">62.1 ft <Cite /></span>
                    <span className="text-xs text-slate-500 block">(18.90 m)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wingspan</span>
                    <span className="text-lg font-bold text-white">44.5 ft <Cite /></span>
                    <span className="text-xs text-slate-500 block">(13.56 m)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Height</span>
                    <span className="text-lg font-bold text-white">16.7 ft <Cite /></span>
                    <span className="text-xs text-slate-500 block">(5.08 m)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Track Width</span>
                    <span className="text-lg font-bold text-white">11.5 ft <Cite /></span>
                    <span className="text-xs text-slate-500 block">(3.51 m)</span>
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
                  {['Shaped for Low Observable (LO) performance', 'Blended fuselage and lifting body design', 'Sawtooth edges on control surfaces and doors', 'Radar-absorbent materials (RAM) on critical surfaces', 'Infrared (IR) signature reduction via shielded exhaust', 'Conformal engine inlets reduce radar signature'].map((feature, i) => (
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
                    <span className="text-md font-bold text-white">1,000 lb (454 kg) <Cite /></span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">External (6 Stations)</span>
                    <span className="text-md font-bold text-white">6,000 lb (2,722 kg) <Cite /></span>
                  </div>
                </div>
                
                <h4 className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">Typical Loadout</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800">AIM-120D AMRAAM (Up to 6)</li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800">AIM-9X Sidewinder (Up to 2)</li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800">GBU-32 JDAM (2,000 lb)</li>
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
                  <h4 className="text-white font-bold uppercase mb-1">AN/APG-77 AESA Radar <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">X-Band Active Electronically Scanned Array. 200+ km detection range. Tracks 20 targets, engages 6 simultaneously. <Cite /></p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[98%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">AN/ALR-94 EW System <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">Electronic Warfare System. Wideband digital RWR, Threat detection & geolocation, Jamming & electronic attack. <Cite /></p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[100%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 flex items-center gap-2"><Wind className="w-4 h-4 text-cyan-500"/> Passive Detection</h4>
                    <p className="text-xs text-slate-400">AN/AAR-56 IRST (Passive long-range detection, 360° coverage). Distributed Aperture System (DAS) with 6 IR cameras. <Cite /></p>
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-xl"></div>
                <h3 className="text-lg font-bold uppercase text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                  <Activity className="text-cyan-400 w-5 h-5" /> Performance Specs <Cite />
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Maximum Speed</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-white">2.25</span>
                      <span className="text-sm text-cyan-400 font-bold mb-1">Mach <Cite /></span>
                    </div>
                    <span className="text-xs text-slate-500">(1,500+ mph / 2,410+ km/h)</span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase block mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> Supercruise</span>
                    <span className="text-xl font-bold text-white">Mach 1.5+ <Cite /></span>
                    <span className="text-xs text-slate-500 block">(Without afterburner)</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Range (Internal Fuel)</span>
                    <span className="text-xl font-bold text-white">1,600 nmi <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Service Ceiling</span>
                    <span className="text-xl font-bold text-white">65,000 ft <Cite /></span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">RATE OF CLIMB <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">{'>'}62k ft/min</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">THRUST/WT <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">1.07 (Dry)</span>
                    </div>
                  </div>

                  {/* Propulsion Detail */}
                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-3 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" /> Propulsion <Cite />
                    </span>
                    <span className="text-sm font-bold text-white block mb-1">2 × Pratt & Whitney F119-PW-100 <Cite /></span>
                    <span className="text-xs text-slate-400 block mb-3">Turbofan with Afterburner & 2D Vectoring <Cite /></span>
                    
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>DRY THRUST <Cite /></span>
                          <span>17,000 lbf each</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden">
                          <div className="data-bar bg-orange-500/50 h-full w-[60%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-orange-400 mb-1">
                          <span>AFTERBURNER <Cite /></span>
                          <span>35,000 lbf each</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                          <div className="data-bar bg-orange-500 h-full w-[100%]"></div>
                        </div>
                      </div>
                      <div className="pt-2 flex justify-between items-center">
                         <span className="text-[10px] font-mono text-red-400">TOTAL THRUST (AB)</span>
                         <span className="text-sm font-bold text-white">70,000 lbf <Cite /></span>
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