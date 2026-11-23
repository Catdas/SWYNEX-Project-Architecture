import React from 'react';
import { LayoutDashboard, Kanban, BarChart3, Settings, ShieldCheck, FolderKanban } from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'board', label: 'Kanban Board', icon: Kanban },
    { id: 'analytics', label: 'Sprint Analytics', icon: BarChart3 },
    { id: 'architecture', label: 'Architecture Docs', icon: ShieldCheck },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950/40 p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Navigation</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Projects</p>
            <FolderKanban className="h-3.5 w-3.5 text-slate-500" />
          </div>
          <div className="space-y-1 text-sm">
            <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="font-medium text-slate-300">SWYNEX Platform</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">SWYN</span>
            </div>
            <div className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-900/60 flex items-center justify-between cursor-pointer">
              <span>Cloud Services</span>
              <span className="text-xs font-mono text-slate-500">INFRA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80">
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
          <p className="text-slate-300 font-semibold mb-1">SWYNEX Internship</p>
          <p className="text-slate-400">Task 1: Full-stack System Architecture</p>
          <div className="mt-2 text-blue-400 flex items-center space-x-1 font-mono">
            <span>v1.0.0</span>
            <span>•</span>
            <span>Starter Repo</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
