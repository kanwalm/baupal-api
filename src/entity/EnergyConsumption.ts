import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EnergyConsumption {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO - this should be a foreign key to the user table
  // TODO - should be indexed
  @Column()
  user_id: number;

  @Column()
  consumption: number;

  @Column({ default: () => 'NOW()' })
  created_at: Date;
}
