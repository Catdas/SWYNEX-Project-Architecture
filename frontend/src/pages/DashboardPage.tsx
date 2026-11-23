import React from 'react';
import { Project, Workspace, Task } from '../types';
import { Kanban, ArrowUpRight, CheckCircle2, Clock, Users, ShieldAlert } from 'lucide-react';

interface DashboardPageProps {
  workspaces: Workspace[];
  projects: Project[];
  tasks: Task[];
  onNavigateToBoard: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  projects,
  tasks,
  onNavigateToBoard
}) => {
  const completed = tasks.filter((t) => t.status === 'DONE').length;
  const inProgress = tasks.filter((t) => t.status === 'IN_PROGRESS' || t.status === 'IN_REVIEW').length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/20 p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
            <span>SWYNEX Technologies Internship</span>
            <span>•</span>
            <span>Task 1 Architecture Showcase</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            TaskFlow Platform Architecture
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A production-ready full-stack task management architecture featuring PostgreSQL relational data models, RESTful API specifications, and interactive sprint kanban workflows.
          </p>
          <div className="pt-2 flex items-center space-x-4">
            <button
              onClick={onNavigateToBoard}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-500/25 flex items-center space-x-2"
            >
              <Kanban className="h-4 w-4" />
              <span>Explore Kanban Board</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold">Total Tasks</span>
            <Kanban className="h-4 w-4 text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-white">{tasks.length}</p>
          <p className="text-xs text-slate-500">Across current sprint milestone</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold">Active In-Flight</span>
            <Clock className="h-4 w-4 text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-amber-400">{inProgress}</p>
          <p className="text-xs text-slate-500">In development & code review</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold">Completed</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-emerald-400">{completed}</p>
          <p className="text-xs text-slate-500">Verified and merged to main</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold">Sprint Velocity</span>
            <ArrowUpRight className="h-4 w-4 text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-purple-400">34 pts</p>
          <p className="text-xs text-slate-500">Average team velocity</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Projects in Workspace</h3>
          <span className="text-xs text-slate-400">SWYNEX Technologies Engineering</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={onNavigateToBoard}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition cursor-pointer space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {proj.key}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1 group-hover:text-blue-400 transition">
                    {proj.name}
                  </h4>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition" />
              </div>

              <p className="text-xs text-slate-400">{proj.description}</p>

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Sprint Completion</span>
                  <span className="font-mono text-slate-200">
                    {Math.round((proj.completedTasks / proj.totalTasks) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(proj.completedTasks / proj.totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
