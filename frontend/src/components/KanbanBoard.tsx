import React from 'react';
import { Task, TaskStatus } from '../types';
import { TaskCard } from './TaskCard';
import { Plus } from 'lucide-react';

interface KanbanBoardProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onMoveTask: (taskId: string, direction: 'prev' | 'next') => void;
  onOpenCreateModal: () => void;
}

const COLUMNS: { id: TaskStatus; title: string; color: string }[] = [
  { id: 'BACKLOG', title: 'Backlog', color: 'border-slate-700' },
  { id: 'TODO', title: 'To Do', color: 'border-blue-500/50' },
  { id: 'IN_PROGRESS', title: 'In Progress', color: 'border-amber-500/50' },
  { id: 'IN_REVIEW', title: 'In Review', color: 'border-purple-500/50' },
  { id: 'DONE', title: 'Done', color: 'border-emerald-500/50' }
];

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  tasks,
  onTaskClick,
  onMoveTask,
  onOpenCreateModal
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
      {COLUMNS.map((col) => {
        const columnTasks = tasks.filter((t) => t.status === col.id);
        const totalPoints = columnTasks.reduce((acc, t) => acc + t.points, 0);

        return (
          <div
            key={col.id}
            className="flex flex-col bg-slate-950/50 border border-slate-800 rounded-2xl p-4 min-w-[280px]"
          >
            {/* Column Header */}
            <div className={`flex items-center justify-between pb-3 mb-3 border-b-2 ${col.color}`}>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm text-slate-200">{col.title}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                  {columnTasks.length}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {totalPoints} pts
              </span>
            </div>

            {/* Column Task Cards */}
            <div className="space-y-3 flex-1 overflow-y-auto">
              {columnTasks.length === 0 ? (
                <div className="h-32 border-2 border-dashed border-slate-800/80 rounded-xl flex items-center justify-center text-xs text-slate-600">
                  No issues in this stage
                </div>
              ) : (
                columnTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={onTaskClick}
                    onMove={onMoveTask}
                  />
                ))
              )}
            </div>

            {/* Column Add Quick Action */}
            {col.id === 'TODO' && (
              <button
                onClick={onOpenCreateModal}
                className="mt-3 w-full py-2 border border-slate-800 hover:border-blue-500/40 rounded-xl text-xs text-slate-400 hover:text-blue-400 flex items-center justify-center space-x-1 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Task</span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
