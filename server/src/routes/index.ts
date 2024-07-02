import { Router } from 'express';
import ballRoutes from './ballRoutes';

const router = Router();

router.use('/balls', ballRoutes);

export default router;