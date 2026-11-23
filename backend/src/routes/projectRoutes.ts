import { Router } from 'express';
import { getProjects, createProject } from '../controllers/projectController';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.get('/', authenticateJWT, getProjects);
router.post('/', authenticateJWT, createProject);

export default router;
