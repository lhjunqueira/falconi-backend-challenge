import { Injectable } from '@nestjs/common';
import { User } from '../../domain/user.domain';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID): Promise<User> {
    const user = await this.userRepository.getById(id);

    return user;
  }
}
