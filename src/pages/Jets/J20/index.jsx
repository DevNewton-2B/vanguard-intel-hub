import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronLeft, Crosshair, ShieldAlert, Activity, Radar, Cpu, Flame, Target, Maximize2, Layers, Navigation, Wind, Zap } from 'lucide-react';

// Local Assets (Mapped directly to your J20 folder layout)
import headerVid from './img/header-vid.mp4';
import jetImg from './img/jet.jpg';
import blueprintImg from './img/detailed-architect.png';

export default function J20MightyDragon() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Cinematic Entrance Timeline
      gsap.from('.stagger-element', { 
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power4.out' 
      });
      // Data Bar Loading Fill
      gsap.from('.data-bar', { 
        width: 0, duration: 2, ease: 'power4.out', delay: 0.8, stagger: 0.1 
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

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
              STEALTH AIR-SUPERIORITY / MULTIROLE FIGHTER
            </span>
            <span className="text-red-900/80 bg-red-500/20 border border-red-900/50 px-3 py-1 font-mono text-xs tracking-widest uppercase rounded-sm">
              NATO: MIGHTY DRAGON
            </span>
          </div>
          <h1 className="stagger-element text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            Chengdu J-20
          </h1>
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Deep Dive Data (Spans 8 columns on Desktop) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Executive Program Overview */}
            <section className="stagger-element p-8 bg-slate-900/40 border border-slate-800 rounded-xl backdrop-blur-sm relative overflow-hidden group">
              <div className="hud-corners w-full h-full absolute inset-0 pointer-events-none"></div>
              <h2 className="text-2xl font-bold uppercase text-white mb-4 flex items-center gap-3">
                <ShieldAlert className="text-cyan-500 w-6 h-6" /> Program Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg border-l-2 border-cyan-800 pl-4">
                The Chengdu J-20 "Mighty Dragon" is a fifth-generation stealth air-superiority and multirole tactical fighter manufactured by the Chengdu Aircraft Industry Group (CAC). Engineered with a diamond-shaped blended stealth fuselage and advanced forward canards, the platform is optimized to penetrate heavily defended environments to engage high-value assets with long-range multi-target precision tracking.
              </p>
            </section>

            {/* Aerodynamic Features Grid */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2"><Layers className="w-5 h-5" /> Aerodynamic Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-xl font-black text-white mb-1">Cranked-Delta</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">WING PLANFORM</p>
                  <p className="text-sm text-slate-400">A broad cranked-delta wing structure provides significant lift coefficient and expansive internal fuel volume capacity.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-xl font-black text-white mb-1">Canard Foreplane</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">DYNAMIC CONTROLS</p>
                  <p className="text-sm text-slate-400">All-moving forward canards generate high instability, enabling instantaneous pitch adjustments and extreme low-speed agility.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-xl font-black text-white mb-1">DSI Intakes</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">SUPERSONIC FLOW</p>
                  <p className="text-sm text-slate-400">Diverterless Supersonic Inlets remove complex boundary-layer bleed hardware to reduce overall frontal radar cross-section.</p>
                </div>
              </div>
            </section>

            {/* Blueprint Dimensions Sheet */}
            <section className="stagger-element p-1 bg-gradient-to-b from-cyan-900/30 to-slate-900/40 rounded-xl">
              <div className="bg-slate-950 p-6 sm:p-8 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <h3 className="text-2xl font-bold uppercase text-white mb-6 flex items-center gap-3 relative z-10">
                  <Maximize2 className="text-cyan-500 w-6 h-6" /> Geometric Specifications
                </h3>
                
                {/* Blueprint Interactive Scale */}
                <div className="relative p-2 bg-slate-900 rounded border border-slate-800 overflow-hidden cursor-zoom-in group mb-8">
                   <img src={blueprintImg} alt="J-20 Blueprint Telemetry" className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 mix-blend-screen" />
                   <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur border border-cyan-900 px-3 py-1 rounded font-mono text-[10px] text-cyan-500">CLASSIFIED SCHEMATIC ANALYSIS</div>
                </div>

                {/* Dimensions Extracted from Blueprint Sheet */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6 relative z-10">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Length</span>
                    <span className="text-lg font-bold text-white">20.4 m <span className="text-[10px] text-slate-400 font-normal">±0.05m</span></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wingspan</span>
                    <span className="text-lg font-bold text-white">13.5 m <span className="text-[10px] text-slate-400 font-normal">±0.05m</span></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Height</span>
                    <span className="text-lg font-bold text-white">4.45 m <span className="text-[10px] text-slate-400 font-normal">±0.05m</span></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wing Area</span>
                    <span className="text-lg font-bold text-white">~78 m² <span className="text-[10px] text-slate-400 font-normal">±0.05m</span></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stealth Architecture & Payload Distribution */}
            <section className="stagger-element grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <ShieldAlert className="w-5 h-5 text-emerald-500" /> Signature Reduction Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'Faceted low-observable design geometry',
                    'Radar-absorbent materials (RAM) applications',
                    'Internal weapons bay configuration for absolute clean profile',
                    'Diverterless supersonic intakes (DSI) side integration',
                    'Serrated engine access panel & weapon bay-edge alignment treatment',
                    'Significantly reduced frontal radar cross-section profiles'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Target className="w-5 h-5 text-red-500" /> Internal Payload Capacity
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Total Internal Payload</span>
                    <span className="text-md font-bold text-white">~11,000 kg</span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">External Configurations</span>
                    <span className="text-sm font-bold text-slate-400">Up to 6 Hardpoints (Non-Stealth)</span>
                  </div>
                </div>
                
                <h4 className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">Internal Weapon Bay Setup</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Centerline Main Bay</span> <span className="text-slate-400">PL-15 BVRAAM / PL-21 / PGMs</span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Lateral Side Bays (2)</span> <span className="text-slate-400">PL-10 High-Off-Boresight AAM</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Radar & Integrated Sensor Suites */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 border-b border-slate-800 pb-2 flex items-center gap-2">
                <Radar className="w-5 h-5 text-purple-500" /> Sensors & Tracking Avionics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">Type 1475 / KLJ-5 AESA</h4>
                  <p className="text-xs text-slate-400 mb-3">Equipped with 1,500 - 2,000+ Transmit/Receive modules optimized for long-range multi-target tracking.</p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[96%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">Electro-Optical Suite</h4>
                  <p className="text-xs text-slate-400 mb-3">Integrates a distinct EOTS glass node and nose radome setup with situational passive Infrared Search & Track (IRST).</p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[100%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 flex items-center gap-2"><Navigation className="w-4 h-4 text-cyan-500"/> Distributed Aperture System (DAS / MWS)</h4>
                    <p className="text-xs text-slate-400">Spherical missile warning coverage linked directly to an advanced sensor fusion computing architecture core.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sticky Telemetry Sidebar (Spans 4 columns on Desktop) */}
          <div className="lg:col-span-4">
            <aside className="stagger-element sticky top-28 space-y-6">
              
              {/* Performance Operational Matrix */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-t-xl"></div>
                <h3 className="text-lg font-bold uppercase text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                  <Activity className="text-red-400 w-5 h-5" /> Performance Specs
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Maximum Velocity</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-white">2.0</span>
                      <span className="text-sm text-cyan-400 font-bold mb-1">Mach</span>
                    </div>
                    <span className="text-xs text-slate-500">(≈2,126 km/h at operational altitude)</span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase block mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> WS-15 Supercruise</span>
                    <span className="text-xl font-bold text-white">Mach 1.3 - 1.5</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Combat Radius Range</span>
                    <span className="text-xl font-bold text-white">~1,100 - 1,500 km</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Maximum Ferry Range</span>
                    <span className="text-xl font-bold text-white">~5,500 km</span>
                    <span className="text-xs text-slate-500 block">(Utilizing external support allocations)</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Service Ceiling Limit</span>
                    <span className="text-xl font-bold text-white">20,000 m+</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">RATE OF CLIMB</span>
                      <span className="text-sm font-bold text-emerald-400">&gt;300 m/s</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">G-LIMIT BOUNDS</span>
                      <span className="text-sm font-bold text-emerald-400">+9.0 / -3.0 g</span>
                    </div>
                  </div>

                  {/* Propulsion Performance Details */}
                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-3 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" /> Twin-Engine Powerplant
                    </span>
                    <span className="text-sm font-bold text-white block mb-1">2 × Shenyang WS-15</span>
                    <span className="text-xs text-slate-400 block mb-3">Afterburning Turbofans (FADEC Controls)</span>
                    
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>DRY THRUST UNIT</span>
                          <span>~125 kN Each</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden">
                          <div className="data-bar bg-orange-500/50 h-full w-[68%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-orange-400 mb-1">
                          <span>MAX AFTERBURNER THRUST</span>
                          <span>~180 kN Each</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                          <div className="data-bar bg-orange-500 h-full w-[100%]"></div>
                        </div>
                      </div>
                      <div className="pt-2 flex flex-col gap-1 text-[11px] text-slate-400 border-t border-slate-800/60 mt-3 font-mono">
                         <div className="flex justify-between">
                           <span>TBO INTERVAL:</span>
                           <span className="text-white font-bold">~4,000 Hours</span>
                         </div>
                         <div className="flex justify-between">
                           <span>VECTORING CONTROLS:</span>
                           <span className="text-white font-bold text-right">Thrust-Vectoring Nozzles<br/>(Selected Variants)</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 bg-cyan-950/50 hover:bg-cyan-900 border border-cyan-800 text-cyan-400 hover:text-white py-3 rounded uppercase font-mono text-sm tracking-widest transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] flex justify-center items-center gap-2 group">
                  <Crosshair className="w-4 h-4 group-hover:animate-spin" /> MAPPED INTERCEPT TARGETING
                </button>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}