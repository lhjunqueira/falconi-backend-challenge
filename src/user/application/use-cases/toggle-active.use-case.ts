import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class ToggleUserActiveStatusUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID, isActive: boolean): Promise<User> {
    const user = await this.userRepository.getById(id);

    user.toggleIsActive(isActive);

    return this.userRepository.persist(user);
  }
}
