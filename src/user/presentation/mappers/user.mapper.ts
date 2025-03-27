import { User } from '../../domain/user.domain';
import { UserModel } from './models/user.model';
import { ProfileMapper } from './profile.mapper';

export class UserMapper {
  static toModel(data: User): UserModel {
    const profile = data.getProfile();

    return {
      id: data.getId().toValue().toString(),
      firstName: data.getFirstName(),
      lastName: data.getLastName(),
      email: data.getEmail(),
      isActive: data.getIsActive(),
      profileId: data.getProfileId().toValue().toString(),
      profile: profile ? ProfileMapper.toModel(profile) : undefined,
    };
  }
}
