import { Router } from 'express';
import EnergyConsumptionController from '../controllers/EnergyConsumptionController';

const router = Router();
const controller = new EnergyConsumptionController();
router.get('/energy-consumptions', controller.getAllConsumptions);
router.get('/energy-consumptions/:id', controller.getConsumptionById);
router.post('/energy-consumptions', controller.submitConsumption);
export default router;
