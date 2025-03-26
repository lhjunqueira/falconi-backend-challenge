import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { FindUserByIdUseCase } from './find-user-by-id.use-case';

@Injectable()
export class ToggleUserActiveStatusUseCase {
  constructor(
    private readonly findUser: FindUserByIdUseCase,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(id: UniqueEntityID, isActive: boolean): Promise<User> {
    const user = await this.findUser.execute(id);

    user.toggleIsActive(isActive);

    return this.userRepository.persist(user);
  }
}
