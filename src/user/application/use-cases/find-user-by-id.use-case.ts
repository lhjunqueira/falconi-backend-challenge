import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../domain/user.domain';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
