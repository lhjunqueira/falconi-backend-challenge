import { Profile } from '../../domain/profile.domain';
import { ProfileModel } from './models/profile.model';

export class ProfileMapper {
  static toArrayModel(profiles: Profile[]): ProfileModel[] {
    return profiles.map((profile) => this.toModel(profile));
  }

  static toModel(profile: Profile): ProfileModel {
    return {
      id: profile.getId().toValue().toString(),
      name: profile.getName(),
    };
  }
}
