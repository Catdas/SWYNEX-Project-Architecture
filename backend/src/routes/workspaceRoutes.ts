import { Router } from 'express';
import { getWorkspaces, createWorkspace } from '../controllers/workspaceController';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.get('/', authenticateJWT, getWorkspaces);
router.post('/', authenticateJWT, createWorkspace);

export default router;
