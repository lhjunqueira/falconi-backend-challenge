import { Profile } from '../../user/domain/profile.domain';
import { Repository } from '../types/repository';

export abstract class ProfileRepository extends Repository<Profile> {
  abstract getAll(): Promise<Profile[]>;
}
