import { Injectable } from '@nestjs/common';
import { FilterUserPaginatedDto } from '../dtos/filter-user-paginated.dto';
import { User } from '../../domain/user.domain';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(dto: FilterUserPaginatedDto): Promise<User[]> {
    return this.userRepository.filterPaginated(dto);
  }
}
