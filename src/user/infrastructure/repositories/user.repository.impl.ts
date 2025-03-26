import { BadRequestException, Provider } from '@nestjs/common';
import { UserRepository } from '../../../core/repositories/user.repository';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { User } from '../../domain/user.domain';
import { MOCK_USERS } from './users.mock';
import { FilterUserPaginatedDto } from '../../application/dtos/filter-user-paginated.dto';

export class UserRepositoryImpl extends UserRepository {
  private _mockedUsers: User[] = MOCK_USERS;

  findByEmail(email: string): Promise<User | null> {
    const user = this._mockedUsers.find((user) => user.getEmail() === email);
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
        firstName.includes(normalizedSearch) ||
        lastName.includes(normalizedSearch) ||
        fullName.includes(normalizedSearch) ||
        email.includes(normalizedSearch)
      );
    });

    const startIndex = page * limit;
    const paginatedUsers =
      limit > 0
        ? filteredUsers.slice(startIndex, startIndex + limit)
        : filteredUsers;

    return Promise.resolve(paginatedUsers);
  }

  delete(user: User): Promise<User> {
    const index = this._mockedUsers.findIndex((u) =>
      u.getId().equals(user.getId()),
    );

    if (index === -1) throw new BadRequestException('User not found');

    this._mockedUsers[index].softDelete();

    return Promise.resolve(this._mockedUsers[index]);
  }

  persist(entity: User): Promise<User> {
    const existingUser = this._mockedUsers.find((user) =>
      user.getId().equals(entity.getId()),
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

  getById(id: UniqueEntityID): Promise<User> {
    try {
      const user = this._mockedUsers.find((u) => u.getId().equals(id));
      if (!user) throw new BadRequestException('User not found');

      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }
}

export const UserRepositoryProvider: Provider<UserRepository> = {
  provide: UserRepository,
  useClass: UserRepositoryImpl,
};
