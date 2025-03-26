import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../../infrastructure/repositories/profile.repository';
import { Profile } from '../../domain/profile.domain';

@Injectable()
export class GetProfilesUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(): Promise<Profile[]> {
    const profiles = await this.profileRepository.getAll();

    return profiles;
  }
}
