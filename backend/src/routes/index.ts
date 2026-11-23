import { Router } from 'express';
import authRoutes from './authRoutes';
import workspaceRoutes from './workspaceRoutes';
import projectRoutes from './projectRoutes';
import taskRoutes from './taskRoutes';
import analyticsRoutes from './analyticsRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/workspaces', workspaceRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
