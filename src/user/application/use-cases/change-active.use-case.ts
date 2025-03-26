import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../core/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class ChangeActiveUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID, isActive: boolean): Promise<User> {
    const user = await this.userRepository.getById(id);

    user.changeIsActive(isActive);

    return this.userRepository.persist(user);
  }
}
