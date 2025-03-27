import { Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserModel } from '../../presentation/mappers/models/user.model';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: UniqueEntityID): Promise<UserModel | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;

    return this.userRepository
      .delete(user)
      .then((u) => (u ? u.toModel() : null));
  }
}
