import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronLeft, Crosshair, ShieldAlert, Activity, Radar, Cpu, Flame, Target, Maximize2, Wind, Zap, Layers, Navigation } from 'lucide-react';

// Local Assets (Mapped exactly to your Typhoon folder)
import headerVid from './img/header-vid.mp4';
import jetImg from './img/jet.jpg';
import blueprintImg from './img/Detailed-Architect.png';

export default function EurofighterTyphoon() {
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

  // UI Component for the strict citation requirement
  const Cite = () => (
    <sup className="text-[8px] text-cyan-600/50 ml-1 font-mono tracking-tighter cursor-help">
     
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
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div> DELTA WING CANARD <Cite />
            </span>
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase border border-slate-800 px-3 py-1 rounded-sm">
              MULTIROLE COMBAT AIRCRAFT <Cite />
            </span>
            <span className="text-emerald-900/80 bg-emerald-500/20 border border-emerald-900/50 px-3 py-1 font-mono text-xs tracking-widest uppercase rounded-sm">
              MULTINATIONAL JOINT PROGRAM <Cite />
            </span>
          </div>
          <h1 className="stagger-element text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            Eurofighter Typhoon
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
                The Eurofighter Typhoon is a multirole combat aircraft designed primarily as a multirole fighter <Cite />. It is operated by a multinational coalition including the RAF, Luftwaffe, Aeronautica Militare, and EDA <Cite />. The airframe is jointly manufactured by BAE Systems, Airbus, and Leonardo <Cite />.
              </p>
            </section>

            {/* Aerodynamic Architecture */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2"><Layers className="w-5 h-5" /> Aerodynamic Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Delta Wing</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">LIFT & MANEUVERABILITY <Cite /></p>
                  <p className="text-sm text-slate-400">Primary wing structure designed for high-speed performance and maximum agility <Cite />.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Canard Foreplanes</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">PITCH CONTROL <Cite /></p>
                  <p className="text-sm text-slate-400">Enhances instability for extreme agility and rapid pitch rates in dogfights <Cite />.</p>
                </div>
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <h4 className="text-2xl font-black text-white mb-1">Dorsal Spine</h4>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-3">AERODYNAMIC PROFILE <Cite /></p>
                  <p className="text-sm text-slate-400">Houses critical avionics while contributing to the overall aerodynamic stability <Cite />.</p>
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
                   <img src={blueprintImg} alt="Typhoon Blueprint Data" className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 mix-blend-screen" />
                   <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur border border-cyan-900 px-3 py-1 rounded font-mono text-[10px] text-cyan-500">ENCRYPTED SCHEMATIC</div>
                </div>

                {/* Dimensions Data extracted from Blueprint */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6 relative z-10">
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Length</span>
                    <span className="text-lg font-bold text-white">15.96 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wingspan</span>
                    <span className="text-lg font-bold text-white">10.95 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Height</span>
                    <span className="text-lg font-bold text-white">5.28 m <Cite /></span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase">Wing Area</span>
                    <span className="text-lg font-bold text-white">50 m² <Cite /></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Low Observable & Survivability */}
            <section className="stagger-element grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <ShieldAlert className="w-5 h-5 text-emerald-500" /> Low Observable Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                    <span>Reduced radar cross-section through edge alignment, curved surfaces, and serpentine intakes <Cite />.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                    <span>Radar absorbent materials (RAM) applied to critical areas <Cite />.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                    <span>Shielded engine face geometry to reduce radar signature <Cite />.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                    <span>Infrared signature reduction: mixing exhaust, low IR emissivity coatings, and thermal management <Cite />.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> 
                    <span>Flush mounted antennas and minimized protrusions <Cite />.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Target className="w-5 h-5 text-red-500" /> Payload Architecture <Cite />
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">External Hardpoints</span>
                    <span className="text-md font-bold text-white">13 Stations <Cite /></span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Centerline Station (12)</span>
                    <span className="text-md font-bold text-white">3,000 kg Capacity <Cite /></span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded border border-red-900/30">
                    <span className="block text-[10px] text-red-400 font-mono tracking-widest uppercase">Max External Payload</span>
                    <span className="text-xl font-black text-red-500">7,500 kg <Cite /></span>
                  </div>
                </div>
                
                <h4 className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">Typical Stores (Examples) <Cite /></h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Air-to-Air</span> <span className="text-slate-500 text-right">METEOR, ASRAAM, IRIS-T <Cite /></span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Air-to-Ground</span> <span className="text-slate-500 text-right">PAVEWAY IV, JDAM, BRIMSTONE <Cite /></span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Anti-Ship</span> <span className="text-slate-500 text-right">MARTE ER, STORM SHADOW / SCALP EG <Cite /></span>
                  </li>
                  <li className="text-sm text-slate-300 font-mono bg-slate-900/40 px-3 py-2 rounded border border-slate-800 flex justify-between">
                    <span>Reconnaissance</span> <span className="text-slate-500 text-right">LITENING POD, RECCE POD <Cite /></span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sensors & Avionics (Bento Sub-grid) */}
            <section className="stagger-element">
              <h3 className="text-xl font-bold uppercase text-slate-400 mb-6 border-b border-slate-800 pb-2 flex items-center gap-2">
                <Radar className="w-5 h-5 text-purple-500" /> Sensors & Systems <Cite />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">CAPTOR-E AESA RADAR <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">Active Electronically Scanned Array <Cite />. Detection range: {'>'}200 km against fighter-sized targets <Cite />. Provides multi-target tracking & air-to-ground mapping <Cite />.</p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[95%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                  <h4 className="text-white font-bold uppercase mb-1">PIRATE SYSTEM <Cite /></h4>
                  <p className="text-xs text-slate-400 mb-3">Passive Infrared Air to Air Tracking <Cite />. Infrared search and track system capable of long-range passive targeting <Cite />.</p>
                  <div className="w-full bg-slate-950 h-1 rounded overflow-hidden">
                    <div className="data-bar bg-purple-500 h-full w-[100%]"></div>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-bold uppercase mb-1 flex items-center gap-2"><Navigation className="w-4 h-4 text-cyan-500"/> DASS (Defensive Aids Sub-System) <Cite /></h4>
                    <p className="text-xs text-slate-400">Includes Radar Warning Receiver, Missile Approach Warning System, Towed Decoy System, Electronic Countermeasures (Jamming / Spoofing), and Laser Warning System <Cite />.</p>
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
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Max Speed</span>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-white">2.0</span>
                      <span className="text-sm text-cyan-400 font-bold mb-1">Mach <Cite /></span>
                    </div>
                    <span className="text-xs text-slate-500">(≈2,495 km/h at altitude) <Cite /></span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase block mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> Sustained Supercruise <Cite /></span>
                    <span className="text-xl font-bold text-white">Mach 1.2 - 1.5 <Cite /></span>
                    <span className="text-xs text-slate-500 block">(Without afterburner) <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Combat Radius (A/A Mission) <Cite /></span>
                    <span className="text-xl font-bold text-white">≈1,390 km <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Ferry Range (w/ Ext. Tanks) <Cite /></span>
                    <span className="text-xl font-bold text-white">3,790 km <Cite /></span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-1">Service Ceiling <Cite /></span>
                    <span className="text-xl font-bold text-white">19,800 m <Cite /></span>
                    <span className="text-xs text-slate-500 block">(65,000 ft) <Cite /></span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">MAX MANEUVERING LOAD <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">+9 g <Cite /></span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 text-center">
                      <span className="block text-[9px] text-slate-500 font-mono">THRUST-TO-WEIGHT <Cite /></span>
                      <span className="text-sm font-bold text-emerald-400">≈0.77 (AT MTOW) <Cite /></span>
                    </div>
                  </div>

                  {/* Propulsion Detail */}
                  <div className="pt-6 border-t border-slate-800 mt-6">
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mb-3 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" /> Propulsion <Cite />
                    </span>
                    <span className="text-sm font-bold text-white block mb-1">2 × Eurojet EJ200 <Cite /></span>
                    <span className="text-xs text-slate-400 block mb-3">Afterburning Turbofan Engines <Cite /></span>
                    
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>DRY THRUST <Cite /></span>
                          <span>60 kN EACH <Cite /></span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden">
                          <div className="data-bar bg-orange-500/50 h-full w-[66%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-orange-400 mb-1">
                          <span>AFTERBURNER THRUST <Cite /></span>
                          <span>90 kN EACH <Cite /></span>
                        </div>
                        <div className="w-full bg-slate-950 h-1.5 rounded overflow-hidden shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                          <div className="data-bar bg-orange-500 h-full w-[100%]"></div>
                        </div>
                      </div>
                      <div className="pt-2 flex justify-between items-center">
                         <span className="text-[10px] font-mono text-red-400">TOTAL MAX THRUST (AB) <Cite /></span>
                         <span className="text-sm font-bold text-white">180 kN <Cite /></span>
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