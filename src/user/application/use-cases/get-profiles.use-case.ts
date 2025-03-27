import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../../infrastructure/repositories/profile.repository';
import { ProfileModel } from '../../presentation/mappers/models/profile.model';

@Injectable()
export class GetProfilesUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(): Promise<ProfileModel[]> {
    return this.profileRepository
      .getAll()
      .then((profiles) => profiles.map((profile) => profile.toModel()));
  }
}
