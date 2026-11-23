import { Router } from 'express';
import { getWorkspaceSummary } from '../controllers/analyticsController';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.get('/workspaces/:workspaceId/summary', authenticateJWT, getWorkspaceSummary);

export default router;
