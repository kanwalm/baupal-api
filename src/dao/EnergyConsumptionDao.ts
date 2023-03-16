import { Repository } from 'typeorm';
import { EnergyConsumption } from '../entity/EnergyConsumption';
import { AppDataSource } from '../data-source';

export class EnergyConsumptionDao {
  private repository: Repository<EnergyConsumption>;

  constructor() {
    this.repository = AppDataSource.manager.getRepository(EnergyConsumption);
  }

  async getAll(): Promise<EnergyConsumption[]> {
    return this.repository.find();
  }

  async getById(id: string): Promise<EnergyConsumption> {
    return this.repository.findOneById(id);
  }

  async create(
    energyConsumption: EnergyConsumption
  ): Promise<EnergyConsumption> {
    return this.repository.save(energyConsumption);
  }
}
