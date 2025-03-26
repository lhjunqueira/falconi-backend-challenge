import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { User } from '../../domain/user.domain';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<User> {
    const user = new User({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      isActive: true,
      profileId: new UniqueEntityID(input.profileId),
    });

    return this.userRepository.persist(user);
  }
}
