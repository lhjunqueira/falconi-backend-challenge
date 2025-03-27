import { BaseProps } from '../../core/entities/base-props';
import { Entity } from '../../core/entities/entity';
import { ProfileModel } from '../presentation/mappers/models/profile.model';
import { ProfileMapper } from '../presentation/mappers/profile.mapper';

export interface ProfileProps extends BaseProps {
  name: string;
}

export class Profile extends Entity<ProfileProps> {
  getName(): ProfileProps['name'] {
    return this.props.name;
  }

  toModel(): ProfileModel {
    return ProfileMapper.toModel(this);
  }
}
