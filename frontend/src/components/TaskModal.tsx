import React from 'react';
import { Task, TaskStatus, TaskPriority } from '../types';
import { X, Calendar, User, CheckSquare, MessageSquare } from 'lucide-react';

interface TaskModalProps {
  task: Task | null;
  onClose: () => void;
  onUpdateStatus: (taskId: string, newStatus: TaskStatus) => void;
  onUpdatePriority: (taskId: string, newPriority: TaskPriority) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onUpdateStatus,
  onUpdatePriority
}) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-mono font-semibold text-xs border border-blue-500/20">
              SWYN-{task.taskNumber}
            </span>
            <span className="text-xs text-slate-400">Created in SWYNEX Agile Platform</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Main Column */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{task.title}</h2>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {task.description}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 flex items-center space-x-2 mb-3">
                <CheckSquare className="h-4 w-4 text-blue-400" />
                <span>Architecture Deliverables Checklist</span>
              </h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-slate-700 text-blue-600 focus:ring-0" />
                  <span className="text-slate-300">Entity Relationship Diagram (ERD) designed</span>
                </label>
                <label className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-slate-700 text-blue-600 focus:ring-0" />
                  <span className="text-slate-300">REST API specification defined</span>
                </label>
                <label className="flex items-center space-x-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-slate-700 text-blue-600 focus:ring-0" />
                  <span className="text-slate-300">Frontend wireframes & mockups complete</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 flex items-center space-x-2 mb-3">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span>Team Discussion & Activity</span>
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="font-semibold text-slate-200">Tharun M. (Lead Architect)</span>
                    <span>2 hours ago</span>
                  </div>
                  <p className="text-slate-300">
                    Architecture specification is fully finalized with PostgreSQL schemas and Express TypeScript routes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="space-y-5 border-l border-slate-800/80 md:pl-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Status
              </label>
              <select
                value={task.status}
                onChange={(e) => onUpdateStatus(task.id, e.target.value as TaskStatus)}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="BACKLOG">Backlog</option>
                <option value="TODO">To Do</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="IN_REVIEW">In Review</option>
                <option value="DONE">Done</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Priority
              </label>
              <select
                value={task.priority}
                onChange={(e) => onUpdatePriority(task.id, e.target.value as TaskPriority)}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Story Points
              </label>
              <div className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-slate-300">
                {task.points} Fibonacci Points
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Assignee
              </label>
              <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800">
                {task.assignee ? (
                  <>
                    <img src={task.assignee.avatar} alt="" className="w-5 h-5 rounded-full" />
                    <span className="text-sm text-slate-200">{task.assignee.name}</span>
                  </>
                ) : (
                  <span className="text-sm text-slate-500 italic">Unassigned</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
