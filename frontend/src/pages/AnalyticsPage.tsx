import React from 'react';
import { BarChart3, TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react';
import { Task } from '../types';

interface AnalyticsPageProps {
  tasks: Task[];
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ tasks }) => {
  const statusCounts = {
    BACKLOG: tasks.filter((t) => t.status === 'BACKLOG').length,
    TODO: tasks.filter((t) => t.status === 'TODO').length,
    IN_PROGRESS: tasks.filter((t) => t.status === 'IN_PROGRESS').length,
    IN_REVIEW: tasks.filter((t) => t.status === 'IN_REVIEW').length,
    DONE: tasks.filter((t) => t.status === 'DONE').length
  };

  const totalPoints = tasks.reduce((acc, t) => acc + t.points, 0);
  const completedPoints = tasks.filter((t) => t.status === 'DONE').reduce((acc, t) => acc + t.points, 0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white">Sprint Velocity & Architecture Metrics</h2>
        <p className="text-xs text-slate-400">Real-time team throughput and workload distribution</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">Story Points Burned</span>
            <Target className="h-5 w-5 text-blue-400" />
          </div>
          <p className="text-3xl font-extrabold text-white">
            {completedPoints} <span className="text-sm font-normal text-slate-500">/ {totalPoints} pts</span>
          </p>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${(completedPoints / (totalPoints || 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">Average Cycle Time</span>
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          </div>
          <p className="text-3xl font-extrabold text-white">
            18.4 <span className="text-sm font-normal text-slate-500">hours</span>
          </p>
          <p className="text-xs text-emerald-400">Fast turnaround from In-Progress to Done</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs uppercase font-semibold">Sprint Health</span>
            <CheckCircle2 className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-extrabold text-purple-400">96.8%</p>
          <p className="text-xs text-slate-500">Zero blocking critical regressions</p>
        </div>
      </div>

      {/* Task Distribution by Status */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Task Distribution Across Sprint Workflow
        </h3>
        <div className="space-y-3">
          {Object.entries(statusCounts).map(([status, count]) => {
            const percentage = Math.round((count / (tasks.length || 1)) * 100);
            return (
              <div key={status} className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-medium">{status.replace('_', ' ')}</span>
                  <span className="font-mono text-slate-400">
                    {count} tasks ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
