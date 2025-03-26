import { Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { FindUserByIdUseCase } from './find-user-by-id.use-case';
import { User } from '../../domain/user.domain';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly findUser: FindUserByIdUseCase,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(id: UniqueEntityID): Promise<User | null> {
    const user = await this.findUser.execute(id);

    return this.userRepository.delete(user);
  }
}
