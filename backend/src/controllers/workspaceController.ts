import { Request, Response } from 'express';

const mockWorkspaces = [
  {
    id: 'ws_swynex_core',
    name: 'SWYNEX Technologies Engineering',
    slug: 'swynex-eng',
    description: 'Core product engineering and architecture team workspace',
    role: 'ADMIN',
    projectsCount: 4,
    membersCount: 12
  },
  {
    id: 'ws_open_platform',
    name: 'TaskFlow Platform Services',
    slug: 'taskflow-platform',
    description: 'Shared microservices, authentication, and core database architecture',
    role: 'MEMBER',
    projectsCount: 2,
    membersCount: 8
  }
];

export const getWorkspaces = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    data: mockWorkspaces
  });
};

export const createWorkspace = async (req: Request, res: Response): Promise<void> => {
  const { name, slug, description } = req.body;

  if (!name || !slug) {
    res.status(400).json({ success: false, message: 'Name and slug are required' });
    return;
  }

  const newWorkspace = {
    id: `ws_${Date.now()}`,
    name,
    slug,
    description: description || '',
    role: 'ADMIN',
    projectsCount: 0,
    membersCount: 1
  };

  res.status(201).json({
    success: true,
    message: 'Workspace created successfully',
    data: newWorkspace
  });
};
