import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700">
      <Search className="w-4 h-4" />
    </button>
  );
}