import { Request, Response } from 'express';

let mockTasks = [
  {
    id: 'task_001',
    projectId: 'proj_swynex_app',
    taskNumber: 101,
    title: 'Define full-stack application architecture document',
    description: 'Establish ERD, RESTful endpoints, technology stack, and frontend wireframes.',
    status: 'DONE',
    priority: 'URGENT',
    points: 8,
    position: 0,
    assignee: { name: 'Tharun M.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60' },
    dueDate: '2026-11-25T18:00:00Z',
    commentsCount: 4
  },
  {
    id: 'task_002',
    projectId: 'proj_swynex_app',
    taskNumber: 102,
    title: 'Setup PostgreSQL Prisma schema and migrations',
    description: 'Implement relations between Users, Workspaces, Projects, and Tasks with proper indexes.',
    status: 'IN_REVIEW',
    priority: 'HIGH',
    points: 5,
    position: 0,
    assignee: { name: 'Sarah Lin', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60' },
    dueDate: '2026-11-28T18:00:00Z',
    commentsCount: 2
  },
  {
    id: 'task_003',
    projectId: 'proj_swynex_app',
    taskNumber: 103,
    title: 'Design interactive Kanban board with drag-and-drop',
    description: 'Frontend component for sprint tracking across Backlog, To Do, In Progress, Review, Done.',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    points: 5,
    position: 0,
    assignee: { name: 'Tharun M.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60' },
    dueDate: '2026-12-01T18:00:00Z',
    commentsCount: 5
  },
  {
    id: 'task_004',
    projectId: 'proj_swynex_app',
    taskNumber: 104,
    title: 'Configure Redis cache for sprint velocity metrics',
    description: 'Store precomputed sprint analytics to reduce database load on high-traffic endpoints.',
    status: 'TODO',
    priority: 'MEDIUM',
    points: 3,
    position: 0,
    assignee: { name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60' },
    dueDate: '2026-12-05T18:00:00Z',
    commentsCount: 0
  },
  {
    id: 'task_005',
    projectId: 'proj_swynex_app',
    taskNumber: 105,
    title: 'Setup GitHub Actions CI/CD Docker automated test pipeline',
    description: 'Run linter, TypeScript check, unit tests, and build multi-stage Docker images.',
    status: 'BACKLOG',
    priority: 'LOW',
    points: 3,
    position: 0,
    assignee: null,
    dueDate: '2026-12-10T18:00:00Z',
    commentsCount: 1
  }
];

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { status, priority } = req.query;
  let results = [...mockTasks];

  if (status) {
    results = results.filter(t => t.status === status);
  }
  if (priority) {
    results = results.filter(t => t.priority === priority);
  }

  res.status(200).json({
    success: true,
    total: results.length,
    data: results
  });
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description, priority, points, dueDate } = req.body;

  if (!title) {
    res.status(400).json({ success: false, message: 'Task title is required' });
    return;
  }

  const newTask = {
    id: `task_${Date.now()}`,
    projectId: req.params.projectId || 'proj_swynex_app',
    taskNumber: mockTasks.length + 101,
    title,
    description: description || '',
    status: 'TODO',
    priority: priority || 'MEDIUM',
    points: points || 3,
    position: 0,
    assignee: { name: 'Tharun M.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60' },
    dueDate: dueDate || new Date(Date.now() + 86400000 * 7).toISOString(),
    commentsCount: 0
  };

  mockTasks.unshift(newTask);

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: newTask
  });
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.params;
  const index = mockTasks.findIndex(t => t.id === taskId);

  if (index === -1) {
    res.status(404).json({ success: false, message: 'Task not found' });
    return;
  }

  mockTasks[index] = { ...mockTasks[index], ...req.body };

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: mockTasks[index]
  });
};
