import React from 'react';
import { Task, TaskPriority } from '../types';
import { Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
  onMove: (taskId: string, direction: 'prev' | 'next') => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick, onMove }) => {
  const priorityColors: Record<TaskPriority, string> = {
    LOW: 'bg-slate-700/60 text-slate-300 border-slate-600',
    MEDIUM: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    HIGH: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    URGENT: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <div
      onClick={() => onClick(task)}
      className="group bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer space-y-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-slate-400">
          SWYN-{task.taskNumber}
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <h4 className="text-sm font-semibold text-slate-100 line-clamp-2 group-hover:text-blue-400 transition">
        {task.title}
      </h4>

      <p className="text-xs text-slate-400 line-clamp-2">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center space-x-3">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
            {task.points} pts
          </span>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-3 w-3" />
            <span>{task.commentsCount}</span>
          </div>
        </div>

        {task.assignee ? (
          <img
            src={task.assignee.avatar}
            alt={task.assignee.name}
            title={task.assignee.name}
            className="w-6 h-6 rounded-full border border-slate-700 object-cover"
          />
        ) : (
          <span className="text-[10px] text-slate-500 italic">Unassigned</span>
        )}
      </div>

      {/* Quick Move Buttons for fast interactive demo */}
      <div className="flex justify-between items-center pt-1" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => onMove(task.id, 'prev')}
          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
        >
          ← Move
        </button>
        <button
          onClick={() => onMove(task.id, 'next')}
          className="text-[10px] px-2 py-0.5 rounded bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white"
        >
          Advance →
        </button>
      </div>
    </div>
  );
};
