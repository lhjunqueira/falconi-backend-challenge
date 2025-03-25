import { BaseProps } from '../../core/entities/base-props';
import { Entity } from '../../core/entities/entity';
import { Profile } from './profile.domain';

export interface UserProps extends BaseProps {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  profileId: string;
  profile?: Profile;
}

export class User extends Entity<UserProps> {
  getFirstName(): UserProps['firstName'] {
    return this.props.firstName;
  }

  getLastName(): UserProps['lastName'] {
    return this.props.lastName;
  }

  getEmail(): UserProps['email'] {
    return this.props.email;
  }

  getIsActive(): UserProps['isActive'] {
    return this.props.isActive;
  }

  getProfileId(): UserProps['profileId'] {
    return this.props.profileId;
  }

  getProfile(): UserProps['profile'] {
    return this.props.profile;
  }
}
