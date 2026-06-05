import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { Plane, Activity, ChevronRight, Crosshair } from 'lucide-react';

// 1. IMPORT YOUR LOCAL IMAGES HERE
// Vite will process these and guarantee they load correctly in the grid.
import f35Img from './Jets/F35/img/jet.jpg';
import f22Img from './Jets/F22/img/jet.jpg';
import su57Img from './Jets/Su57/img/jet.jpg';
import typhoonImg from './Jets/Typhoon/img/jet.jpg';
import rafaleImg from './Jets/Rafale/img/jet.jpg';
import j20Img from './Jets/J20/img/jet.jpg';

// --- MOCK DATABASE ---
// Notice the 'img' property now uses the imported variables WITHOUT quotes.
const mockJetsData = [
  { id: 'f35', name: 'F-35 Lightning II', role: 'Stealth Multirole', gen: '5th Gen', speed: 'Mach 1.6', origin: 'USA', img: f35Img },
  { id: 'f22', name: 'F-22 Raptor', role: 'Air Superiority', gen: '5th Gen', speed: 'Mach 2.25', origin: 'USA', img: f22Img },
  { id: 'su57', name: 'Su-57 Felon', role: 'Stealth Multirole', gen: '5th Gen', speed: 'Mach 2.0', origin: 'RUS', img: su57Img },
  { id: 'typhoon', name: 'Eurofighter Typhoon', role: 'Multirole Fighter', gen: '4.5 Gen', speed: 'Mach 2.0', origin: 'EUR', img: typhoonImg },
  { id: 'rafale', name: 'Dassault Rafale', role: 'Omnirole Fighter', gen: '4.5 Gen', speed: 'Mach 1.8', origin: 'FRA', img: rafaleImg },
  { id: 'j20', name: 'Chengdu J-20', role: 'Stealth Air Superiority', gen: '5th Gen', speed: 'Mach 2.0', origin: 'CHN', img: j20Img },
];

export default function CategoryList() {
  const { type } = useParams();
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Dynamic Header Formatting
  const categoryTitle = type ? type.replace('-', ' ') : 'Database';

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.header-element', {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });

      // Staggered Grid Card Animation
      gsap.from('.vehicle-card', {
        y: 50, opacity: 0, scale: 0.95, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)', delay: 0.3
      });
    }, [headerRef, gridRef]);

    return () => ctx.revert();
  }, [type]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* ================= PAGE HEADER ================= */}
      <div ref={headerRef} className="mb-12 border-b border-slate-800/60 pb-8 relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
        
        <div className="header-element inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
          <Plane className="w-4 h-4 text-cyan-500" />
          <span>Category Designation</span>
        </div>
        
        <h1 className="header-element text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
          Class: <span className="text-cyan-400">{categoryTitle}</span>
        </h1>
        
        <p className="header-element text-slate-400 max-w-2xl text-lg">
          Browse the active database of global {categoryTitle}. Select an individual asset to decrypt highly classified payload, avionics, and performance specifications.
        </p>
      </div>

      {/* ================= ASSET GRID ================= */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockJetsData.map((asset) => (
          <Link 
            to={`/item/${asset.id}`} 
            key={asset.id} 
            className="vehicle-card group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]"
          >
            {/* Tactical Corners */}
            <div className="hud-corners w-full h-full absolute inset-0 pointer-events-none z-20"></div>

            {/* Asset Image Window */}
            <div className="h-56 relative overflow-hidden bg-slate-950 border-b border-slate-800 group-hover:border-cyan-900/50 transition-colors">
              <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Scanline Effect */}
              <div className="absolute left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-scanline z-20 opacity-0 group-hover:opacity-100"></div>
              
              <img 
                src={asset.img} 
                alt={asset.name} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Image Overlay Tags */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <span className="px-2 py-1 bg-slate-950/80 border border-slate-700 text-white font-mono text-[10px] tracking-widest backdrop-blur-md rounded uppercase">
                  {asset.origin}
                </span>
                <span className="px-2 py-1 bg-cyan-950/80 border border-cyan-800 text-cyan-400 font-mono text-[10px] tracking-widest backdrop-blur-md rounded uppercase">
                  {asset.gen}
                </span>
              </div>
            </div>

            {/* Data Console (Card Body) */}
            <div className="p-6 relative z-10 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                  {asset.name}
                </h3>
                <Crosshair className="w-5 h-5 text-slate-600 group-hover:text-cyan-500 group-hover:animate-spin-slow transition-all" />
              </div>
              
              <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider font-medium">
                {asset.role}
              </p>

              {/* Mini Spec Grid */}
              <div className="grid grid-cols-2 gap-4 mt-auto border-t border-slate-800/60 pt-4">
                <div>
                  <span className="block text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-1">Max Velocity</span>
                  <span className="block text-sm text-slate-200 font-bold flex items-center gap-2">
                    <Activity className="w-3 h-3 text-emerald-500" /> {asset.speed}
                  </span>
                </div>
                <div className="flex items-end justify-end">
                  <span className="flex items-center gap-1 text-xs font-bold text-cyan-500 uppercase tracking-widest group-hover:text-white transition-colors">
                    Decrypt File <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}