import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow and background opacity on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/85 backdrop-blur-lg shadow-lg shadow-black/50 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          <Logo />
          
          <div className="flex items-center gap-6">
            <DesktopMenu />
            <SearchBar />
            
            {/* Mobile Hamburger Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none z-50 relative"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay Component */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
}