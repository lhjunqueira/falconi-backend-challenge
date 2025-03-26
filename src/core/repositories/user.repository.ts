import { FilterUserPaginatedDto } from '../../user/application/dtos/filter-user-paginated.dto';
import { User } from '../../user/domain/user.domain';
import { Repository } from '../types/repository';

export abstract class UserRepository extends Repository<User> {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract filterPaginated(dto: FilterUserPaginatedDto): Promise<User[]>;
  abstract delete(user: User): Promise<User>;
}
