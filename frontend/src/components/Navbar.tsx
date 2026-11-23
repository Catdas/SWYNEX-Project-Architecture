import React from 'react';
import { Layers, Bell, Search, UserCircle, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentWorkspace: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentWorkspace }) => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold text-lg text-white tracking-tight">TaskFlow</span>
            <span className="text-xs ml-2 px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono border border-blue-500/20">SWYNEX</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-sm cursor-pointer hover:bg-slate-800 transition">
          <span className="text-slate-400">Workspace:</span>
          <span className="font-medium text-slate-200">{currentWorkspace}</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search tasks, sprints... (Ctrl+K)"
            className="pl-9 pr-4 py-1.5 bg-slate-950/60 border border-slate-700/80 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 w-64 transition"
          />
        </div>

        <button className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        </button>

        <div className="flex items-center space-x-3 pl-2 border-l border-slate-800">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-slate-200 leading-tight">Tharun M.</p>
            <p className="text-xs text-blue-400">Lead Architect</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <UserCircle className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};
