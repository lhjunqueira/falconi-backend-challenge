import { Injectable } from '@nestjs/common';
import { FilterUserPaginatedDto } from '../dtos/filter-user-paginated.dto';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserModel } from '../../presentation/mappers/models/user.model';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: FilterUserPaginatedDto): Promise<UserModel[]> {
    return this.userRepository
      .filterPaginated(dto)
      .then((users) => users.map((user) => user.toModel()));
  }
}
