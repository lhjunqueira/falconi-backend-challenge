import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { FindUserByIdUseCase } from './application/use-cases/find-user-by-id.use-case';
import { ListUsersUseCase } from './application/use-cases/list-users.use-case';
import { ToggleUserActiveStatusUseCase } from './application/use-cases/toggle-active.use-case';
import { DeleteUserUseCase } from './application/use-cases/delete-user.use-case';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { GetProfilesUseCase } from './application/use-cases/get-profiles.use-case';
import { ProfileRepository } from './infrastructure/repositories/profile.repository';
import { ProfileController } from './presentation/controllers/profile.controller';

const USER_USE_CASES = [
  ToggleUserActiveStatusUseCase,
  CreateUserUseCase,
  FindUserByIdUseCase,
  ListUsersUseCase,
  DeleteUserUseCase,
];

const PROFILE_USE_CASES = [GetProfilesUseCase];

@Module({
  imports: [],
  controllers: [UserController, ProfileController],
  providers: [
    ...USER_USE_CASES,
    ...PROFILE_USE_CASES,
    UserRepository,
    ProfileRepository,
  ],
  exports: [],
})
export class UserModule {}
