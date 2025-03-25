import { BaseProps } from '../../core/entities/base-props';
import { Entity } from '../../core/entities/entity';

export interface ProfileProps extends BaseProps {
  name: string;
}

export class Profile extends Entity<ProfileProps> {
  getName(): ProfileProps['name'] {
    return this.props.name;
  }
}
