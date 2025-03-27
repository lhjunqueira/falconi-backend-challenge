import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { CreateUpdateUserDto } from '../dtos/create-update-user.dto';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserModel } from '../../presentation/mappers/models/user.model';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUpdateUserDto): Promise<UserModel> {
    const user = new User({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      isActive: input.isActive,
      profileId: new UniqueEntityID(input.profileId),
    });

    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser)
      throw new ConflictException('User with this email already exists');

    return this.userRepository.persist(user).then((user) => user.toModel());
  }
}
