import { Router } from 'express';
import { getTasks, createTask, updateTask } from '../controllers/taskController';
import { authenticateJWT } from '../middlewares/auth';

const router = Router();

router.get('/', authenticateJWT, getTasks);
router.post('/', authenticateJWT, createTask);
router.patch('/:taskId', authenticateJWT, updateTask);

export default router;
