import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class ToggleUserActiveStatusUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID, isActive: boolean): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException('User not found');

    user.toggleIsActive(isActive);

    return this.userRepository.persist(user);
  }
}
