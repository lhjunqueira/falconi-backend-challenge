import { BadRequestException, Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new BadRequestException('User not found');

    await this.userRepository.delete(user);
  }
}
