import { Injectable, NotFoundException } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserModel } from '../../presentation/mappers/models/user.model';
import { CreateUpdateUserDto } from '../dtos/create-update-user.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    id: UniqueEntityID,
    payload: CreateUpdateUserDto,
  ): Promise<UserModel> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');

    const userByEmail = await this.userRepository.findByEmail(payload.email);
    if (userByEmail && !userByEmail.getId().equals(id))
      throw new NotFoundException('User with this email already exists');

    user.update({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      profileId: new UniqueEntityID(payload.profileId),
      isActive: payload.isActive,
    });

    return this.userRepository.persist(user).then((user) => user.toModel());
  }
}
