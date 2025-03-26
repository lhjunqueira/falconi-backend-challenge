import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserRepositoryProvider } from './infrastructure/repositories/user.repository.impl';
import { GetUserByIdUseCase } from './application/use-cases/get-user-by-id.use-case';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, GetUserByIdUseCase, UserRepositoryProvider],
  exports: [],
})
export class UserModule {}
