import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { UserModel } from '../../presentation/mappers/models/user.model';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<UserModel> {
    const user = new User({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      isActive: true,
      profileId: new UniqueEntityID(input.profileId),
    });

    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser)
      throw new ConflictException('User with this email already exists');

    return this.userRepository.persist(user).then((user) => user.toModel());
  }
}
