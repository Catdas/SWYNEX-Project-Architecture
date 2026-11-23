import { Request, Response } from 'express';

const mockProjects = [
  {
    id: 'proj_swynex_app',
    workspaceId: 'ws_swynex_core',
    name: 'SWYNEX Agile Platform',
    key: 'SWYN',
    description: 'Primary web application and team workflow suite',
    status: 'ACTIVE',
    totalTasks: 24,
    completedTasks: 18,
    lead: { fullName: 'Tharun K.', email: 'lead@swynex.tech' }
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

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    data: mockProjects
  });
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { name, key, description } = req.body;

  if (!name || !key) {
    res.status(400).json({ success: false, message: 'Project name and key are required' });
    return;
  }

  const newProject = {
    id: `proj_${Date.now()}`,
    workspaceId: req.params.workspaceId || 'ws_swynex_core',
    name,
    key: key.toUpperCase(),
    description: description || '',
    status: 'ACTIVE',
    totalTasks: 0,
    completedTasks: 0
  };

  res.status(201).json({
    success: true,
    message: 'Project created successfully',
    data: newProject
  });
};
