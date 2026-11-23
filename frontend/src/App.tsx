import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { BoardPage } from './pages/BoardPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { LoginPage } from './pages/LoginPage';
import { initialProjects, initialTasks, initialWorkspaces } from './services/api';
import { Task } from './types';
import { FileCode, ShieldCheck, Database, Server, ExternalLink } from 'lucide-react';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar currentWorkspace="SWYNEX Technologies Engineering" />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            {currentTab === 'dashboard' && (
              <DashboardPage
                workspaces={initialWorkspaces}
                projects={initialProjects}
                tasks={tasks}
                onNavigateToBoard={() => setCurrentTab('board')}
              />
            )}

            {currentTab === 'board' && (
              <BoardPage tasks={tasks} setTasks={setTasks} />
            )}

            {currentTab === 'analytics' && (
              <AnalyticsPage tasks={tasks} />
            )}

            {currentTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">System Architecture Document Preview</h2>
                  <p className="text-xs text-slate-400">
                    Comprehensive full-stack architecture specification submitted for Task 1
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <Database className="h-6 w-6 text-blue-400" />
                    <h3 className="text-base font-bold text-white">Relational Data Models</h3>
                    <p className="text-xs text-slate-400">
                      PostgreSQL 16 schemas with full ACID compliance, foreign keys, and indexes for Users, Workspaces, Projects, Tasks, and Comments.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <Server className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-base font-bold text-white">RESTful API Design</h3>
                    <p className="text-xs text-slate-400">
                      Versioned endpoints under /api/v1 with JWT authentication, role-based access control (RBAC), and standardized JSON envelopes.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <FileCode className="h-6 w-6 text-purple-400" />
                    <h3 className="text-base font-bold text-white">Component Hierarchy</h3>
                    <p className="text-xs text-slate-400">
                      Modular React 18 + TypeScript architecture, Vite build system, Tailwind CSS styling, and responsive Kanban views.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Core Architectural Specifications File Links
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-xs text-blue-400">/ARCHITECTURE.md</span>
                      <span className="text-xs text-slate-400">Detailed system design specification</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-xs text-blue-400">/docs/schema.sql</span>
                      <span className="text-xs text-slate-400">PostgreSQL DDL schema script</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-xs text-blue-400">/docs/api-spec.json</span>
                      <span className="text-xs text-slate-400">OpenAPI 3.0 REST routes specification</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="font-mono text-xs text-blue-400">/docker-compose.yml</span>
                      <span className="text-xs text-slate-400">Multi-container Docker orchestration</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
