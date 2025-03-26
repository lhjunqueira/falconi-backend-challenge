import { BaseProps } from '../../core/entities/base-props';
import { Entity } from '../../core/entities/entity';
import { UniqueEntityID } from '../../core/entities/unique-entity-id';
import { Profile } from './profile.domain';

export interface UserProps extends BaseProps {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  profileId: UniqueEntityID;
  profile?: Profile;
}

export class User extends Entity<UserProps> {
  getFirstName(): UserProps['firstName'] {
    return this.props.firstName;
  }

  getLastName(): UserProps['lastName'] {
    return this.props.lastName;
  }

  getFullName(): string {
    return `${this.getFirstName()} ${this.getLastName()}`;
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

  toggleIsActive(isActive: boolean): void {
    this.props.isActive = isActive;
  }

  updateUser({
    firstName,
    lastName,
    email,
    profileId,
    isActive,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    profileId: UniqueEntityID;
    isActive: boolean;
  }): void {
    this.props.firstName = firstName;
    this.props.lastName = lastName;
    this.props.email = email;
    this.props.profileId = profileId;
    this.props.isActive = isActive;

    this.props.updatedAt = new Date();
  }
}
