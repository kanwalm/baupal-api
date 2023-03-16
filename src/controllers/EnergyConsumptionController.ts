import { Request, Response } from 'express';
import { EnergyConsumption } from '../entity/EnergyConsumption';
import { EnergyConsumptionDao } from '../dao/EnergyConsumptionDao';

export default class EnergyConsumptionController {
  private energyConsumptionDao: EnergyConsumptionDao;
  constructor() {
    this.energyConsumptionDao = new EnergyConsumptionDao();
  }

  // TODO - caching via redis
  getAllConsumptions = async (req: Request, res: Response) => {
    console.log(`Being handled by pid:${process.pid}`);
    res.json(await this.energyConsumptionDao.getAll());
  };

  // TODO - caching via redis
  getConsumptionById = async (req: Request, res: Response) => {
    console.log(`Being handled by pid:${process.pid}`);
    try {
      const consumption = await this.energyConsumptionDao.getById(
        req.params.id
      );
      if (consumption) {
        res.send(consumption);
      } else {
        res.status(404).send({ error: 'Consumption not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to get consumption' });
    }
  };

  submitConsumption = async (req: Request, res: Response) => {
    console.log(`Being handled by pid${process.pid}`);

    // user_id should ideally be from the current user's token but since no authentication is implemented, we'll just use the user_id from the request body
    const { user_id, consumption } = req.body;
    // Validate request data
    if (!user_id || !consumption) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    // Save
    try {
      const energyConsumption = new EnergyConsumption();
      energyConsumption.user_id = user_id;
      energyConsumption.consumption = consumption;
      const createdEnergyConsumption = await this.energyConsumptionDao.create(
        energyConsumption
      );
      res.status(201).json(createdEnergyConsumption);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to submit data' });
    }
  };
}
