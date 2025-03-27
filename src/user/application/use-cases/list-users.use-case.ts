import { Injectable } from '@nestjs/common';
import { FilterUserPaginatedDto } from '../dtos/filter-user-paginated.dto';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserModel } from '../../presentation/mappers/models/user.model';
import { ListPaginated } from '../../../core/types/list-paginated';

@Injectable()
export class ListUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    dto: FilterUserPaginatedDto,
  ): Promise<ListPaginated<UserModel>> {
    return this.userRepository.filterPaginated(dto).then(
      (users) =>
        new ListPaginated<UserModel>(
          users.items.map((user) => user.toModel()),
          users.total,
        ),
    );
  }
}
