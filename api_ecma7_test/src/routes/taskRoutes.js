// SOLO ENDPOINTS PARA LAS TASKS
import { Router } from 'express';
import { getAllTasks, getTaskById } from '../controller/taskController';

const router = Router();

router.get( '/', getAllTasks );
router.get( '/:id', getTaskById);

export default router;