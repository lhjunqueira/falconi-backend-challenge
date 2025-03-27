import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserModel } from '../../presentation/mappers/models/user.model';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID): Promise<UserModel> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException('User not found');

    return user.toModel();
  }
}
