import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  profileId: UniqueEntityID;
}
