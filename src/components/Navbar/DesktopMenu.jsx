import { NavLink } from 'react-router-dom';
import { navItems } from './navData';

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
              isActive ? 'text-cyan-400 bg-slate-800/80' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`
          }
        >
          <item.icon className="w-4 h-4" />
          <span className="relative z-10">{item.name}</span>
          {/* Tactical underline effect on hover */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </NavLink>
      ))}
    </nav>
  );
}