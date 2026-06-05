import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navData';
import { X } from 'lucide-react';
import gsap from 'gsap';

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Animate menu in
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      // Stagger links in
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      // Animate menu out
      gsap.to(menuRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' });
    }
  }, [isOpen]);

  return (
    <div 
      ref={menuRef} 
      className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex flex-col pt-24 px-6 lg:hidden translate-x-full border-l border-slate-800"
    >
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-slate-300 hover:text-cyan-400 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={() => setIsOpen(false)}
            ref={(el) => (linksRef.current[index] = el)}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl text-lg font-bold uppercase tracking-wider transition-all border border-transparent ${
                isActive 
                  ? 'bg-cyan-900/20 text-cyan-400 border-cyan-800/50' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-6 h-6" />
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}