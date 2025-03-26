import { Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { FindUserByIdUseCase } from './find-user-by-id.use-case';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly findUser: FindUserByIdUseCase,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(id: UniqueEntityID): Promise<void> {
    const user = await this.findUser.execute(id);

    await this.userRepository.delete(user);
  }
}
