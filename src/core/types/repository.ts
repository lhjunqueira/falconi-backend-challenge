import { Entity } from '../entities/entity';
import { UniqueEntityID } from '../entities/unique-entity-id';

export abstract class Repository<T extends Entity<any>> {
  abstract persist(entity: T): Promise<T>;
  abstract findById(id: UniqueEntityID): Promise<T | null>;
}
