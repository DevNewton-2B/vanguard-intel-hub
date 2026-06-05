import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';

// Specific Vehicle Dossiers
import F35Lightning from './pages/Jets/F35';
import F22Raptor from './pages/Jets/F22';
import Su57Felon from './pages/Jets/SU57';
import EurofighterTyphoon from './pages/Jets/Typhoon';
import DassaultRafale from './pages/Jets/Rafale';
import J20MightyDragon from './pages/Jets/J20';

// --- Placeholder for other items pending detailed pages ---
const ItemDetail = () => (
  <div className="pt-32 pb-20 page-container max-w-7xl mx-auto min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-black uppercase tracking-widest text-slate-500 mb-4">Classified File</h1>
      <p className="text-cyan-500 font-mono text-sm uppercase tracking-widest animate-pulse">Decrypting dossier... please standby.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
        <Navbar />
        
        {/* Main Routing Architecture */}
        <main className="flex-grow">
          <Routes>
            {/* Core Navigation */}
            <Route path="/" element={<Home />} />
            <Route path="/category/:type" element={<CategoryList />} />
            
            {/* Highly Classified Dossiers (Custom Pages) */}
            <Route path="/item/f35" element={<F35Lightning />} />
            <Route path="/item/f22" element={<F22Raptor />} />
            <Route path="/item/su57" element={<Su57Felon />} />
            <Route path="/item/typhoon" element={<EurofighterTyphoon />} />
            <Route path="/item/rafale" element={<DassaultRafale />} />
            <Route path="/item/j20" element={<J20MightyDragon />} />
            
            {/* Catch-all for items that don't have custom folders yet */}
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </main>

        {/* Mobile Inline Ad Placeholder (Visible only on mobile via custom CSS) */}
        <div className="ad-inline bg-slate-900/50 border border-slate-800 h-[250px] flex items-center justify-center rounded-lg mt-8 mb-8 backdrop-blur-sm">
          <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">Encrypted Ad Unit</span>
        </div>
        
        <Footer />
        
      </div>
    </Router>
  );
}