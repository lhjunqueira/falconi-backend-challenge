import { Injectable } from '@nestjs/common';
import { Profile } from '../../domain/profile.domain';
import { MOCK_PROFILES } from './mocks/profiles.mock';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

@Injectable()
export class ProfileRepository {
  private readonly profiles: Profile[] = MOCK_PROFILES;

  getById(id: UniqueEntityID): Promise<Profile | null> {
    const profile = this.profiles.find((profile) => profile.getId().equals(id));

    return Promise.resolve(profile || null);
  }

  getAll(): Promise<Profile[]> {
    return Promise.resolve(this.profiles);
  }
}
