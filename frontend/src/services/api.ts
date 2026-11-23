import { Task, Project, Workspace } from '../types';

const API_BASE_URL = 'http://localhost:5000/api/v1';

// Initial Mock Tasks for direct client interactivity
export const initialTasks: Task[] = [
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

export const initialProjects: Project[] = [
  {
    id: 'proj_swynex_app',
    workspaceId: 'ws_swynex_core',
    name: 'SWYNEX Agile Platform',
    key: 'SWYN',
    description: 'Primary web application and team workflow suite',
    status: 'ACTIVE',
    totalTasks: 24,
    completedTasks: 18,
    lead: { fullName: 'Tharun M.', email: 'lead@swynex.tech' }
  },
  {
    id: 'proj_infra_cloud',
    workspaceId: 'ws_swynex_core',
    name: 'Cloud Infrastructure & DevOps',
    key: 'INFRA',
    description: 'Docker orchestration, Redis caching, and CI/CD pipelines',
    status: 'ACTIVE',
    totalTasks: 12,
    completedTasks: 10,
    lead: { fullName: 'DevOps Lead', email: 'devops@swynex.tech' }
  }
];

export const initialWorkspaces: Workspace[] = [
  {
    id: 'ws_swynex_core',
    name: 'SWYNEX Technologies Engineering',
    slug: 'swynex-eng',
    description: 'Core product engineering and architecture team workspace',
    role: 'ADMIN',
    projectsCount: 4,
    membersCount: 12
  }
];
