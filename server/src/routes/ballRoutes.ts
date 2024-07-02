import { Router } from 'express';
import BallController from '../controllers/ballController';

const router = Router();

router.get('/api/ball', BallController.getRandomLocation)

export default router;