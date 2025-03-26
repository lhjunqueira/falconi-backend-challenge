import { BadRequestException, Injectable } from '@nestjs/common';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { User } from '../../domain/user.domain';
import { MOCK_USERS } from './users.mock';
import { FilterUserPaginatedDto } from '../../application/dtos/filter-user-paginated.dto';
import { Repository } from '../../../core/types/repository';

@Injectable()
export class UserRepository implements Repository<User> {
  private _mockedUsers: User[] = MOCK_USERS;

  findByEmail(email: string): Promise<User | null> {
    const user = this._mockedUsers.find(
      (user) => user.getEmail() === email && !user.isDeleted(),
    );
    return Promise.resolve(user || null);
  }

  filterPaginated(dto: FilterUserPaginatedDto): Promise<User[]> {
    const { search = '', page = 0, limit = 10 } = dto;

    const normalizedSearch = search.toLowerCase();

    const filteredUsers = this._mockedUsers.filter((user) => {
      const firstName = user.getFirstName().toLowerCase();
      const lastName = user.getLastName().toLowerCase();
      const fullName = user.getFullName().toLowerCase();
      const email = user.getEmail().toLowerCase();

      return (
        (firstName.includes(normalizedSearch) ||
          lastName.includes(normalizedSearch) ||
          fullName.includes(normalizedSearch) ||
          email.includes(normalizedSearch)) &&
        !user.isDeleted()
      );
    });

    const startIndex = page * limit;
    const paginatedUsers =
      limit > 0
        ? filteredUsers.slice(startIndex, startIndex + limit)
        : filteredUsers;

    return Promise.resolve(paginatedUsers);
  }

  delete(user: User): Promise<User | null> {
    const index = this._mockedUsers.findIndex((u) =>
      u.getId().equals(user.getId()),
    );

    if (index === -1) return Promise.resolve(null);

    this._mockedUsers[index].softDelete();

    return Promise.resolve(this._mockedUsers[index]);
  }

  persist(entity: User): Promise<User> {
    const existingUser = this._mockedUsers.find(
      (user) => user.getId().equals(entity.getId()) && !user.isDeleted(),
    );

    if (existingUser) {
      existingUser.updateUser({
        firstName: entity.getFirstName(),
        lastName: entity.getLastName(),
        email: entity.getEmail(),
        profileId: entity.getProfileId(),
        isActive: entity.getIsActive(),
      });
    } else {
      this._mockedUsers.push(entity);
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
