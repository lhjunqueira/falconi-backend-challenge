import { Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { User } from '../../domain/user.domain';
import { MOCK_USERS } from './mocks/users.mock';
import { FilterUserPaginatedDto } from '../../application/dtos/filter-user-paginated.dto';
import { Repository } from '../../../core/types/repository';
import { ListPaginated } from '../../../core/types/list-paginated';

@Injectable()
export class UserRepository implements Repository<User> {
  private _mockedUsers: User[] = MOCK_USERS;

  findByEmail(email: string): Promise<User | null> {
    const user = this._mockedUsers.find(
      (user) => user.getEmail() === email && !user.isDeleted(),
    );
    return Promise.resolve(user || null);
  }

  filterPaginated(dto: FilterUserPaginatedDto): Promise<ListPaginated<User>> {
    const { search, profileId, page = 0, limit = 10 } = dto;

    const filteredUsers = this._mockedUsers.filter((user) => {
      const matchesSearch = search
        ? (() => {
            const normalizedSearch = search.toLowerCase();
            const firstName = user.getFirstName().toLowerCase();
            const lastName = user.getLastName().toLowerCase();
            const fullName = user.getFullName().toLowerCase();
            const email = user.getEmail().toLowerCase();

            return (
              firstName.includes(normalizedSearch) ||
              lastName.includes(normalizedSearch) ||
              fullName.includes(normalizedSearch) ||
              email.includes(normalizedSearch)
            );
          })()
        : true;

      const matchesProfileId = profileId
        ? user.getProfileId().toString() === profileId
        : true;

      return matchesSearch && matchesProfileId && !user.isDeleted();
    });

    const startIndex = page > 0 ? page * limit : 0;
    const paginatedUsers =
      limit > 0
        ? filteredUsers.slice(startIndex, startIndex + limit)
        : filteredUsers;

    return Promise.resolve(
      new ListPaginated<User>(paginatedUsers, filteredUsers.length),
    );
  }

  delete(user: User): Promise<User | null> {
    const index = this._mockedUsers.findIndex((u) =>
      u.getId().equals(user.getId()),
    );

    if (index === -1) return Promise.resolve(null);

    if (!this._mockedUsers[index].isDeleted())
      this._mockedUsers[index].softDelete();

    return Promise.resolve(this._mockedUsers[index]);
  }

  persist(entity: User): Promise<User> {
    const existingUser = this._mockedUsers.find(
      (user) => user.getId().equals(entity.getId()) && !user.isDeleted(),
    );

    if (existingUser) {
      existingUser.update({
        firstName: entity.getFirstName(),
        lastName: entity.getLastName(),
        email: entity.getEmail(),
        profileId: entity.getProfileId(),
        isActive: entity.getIsActive(),
      });
    } else {
      this._mockedUsers.unshift(entity);
    }

    return Promise.resolve(entity);
  }

  findById(id: UniqueEntityID): Promise<User | null> {
    return Promise.resolve(
      this._mockedUsers.find((u) => u.getId().equals(id) && !u.isDeleted()) ??
        null,
    );
  }
}
