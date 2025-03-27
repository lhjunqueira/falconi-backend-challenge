import { ProfileModel } from './profile.model';

export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  profileId: string;
  profile?: ProfileModel;
}
