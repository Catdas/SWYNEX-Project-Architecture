export type TaskStatus = 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'ADMIN' | 'MANAGER' | 'MEMBER' | 'VIEWER';
  avatarUrl?: string;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  description: string;
  role: string;
  projectsCount: number;
  membersCount: number;
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  key: string;
  description: string;
  status: 'PLANNING' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
  totalTasks: number;
  completedTasks: number;
  lead?: { fullName: string; email: string };
}

export interface Task {
  id: string;
  projectId: string;
  taskNumber: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  points: number;
  position: number;
  assignee?: { name: string; avatar: string } | null;
  dueDate?: string;
  commentsCount: number;
}
