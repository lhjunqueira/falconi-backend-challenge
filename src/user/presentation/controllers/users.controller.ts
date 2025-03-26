import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { FindUserByIdUseCase } from '../../application/use-cases/find-user-by-id.use-case';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { ToggleUserActiveStatusUseCase } from '../../application/use-cases/toggle-active.use-case';
import { ListUsersUseCase } from '../../application/use-cases/list-users.use-case';
import { FilterUserPaginatedDto } from '../../application/dtos/filter-user-paginated.dto';
import { ToggleActiveUserDto } from '../../application/dtos/toggle-active-user.dto';
import { DeleteUserUseCase } from '../../application/use-cases/delete-user.use-case';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserByIdUseCase: FindUserByIdUseCase,
    private readonly toggleActiveUseCase: ToggleUserActiveStatusUseCase,
    private readonly listUsersUseCase: ListUsersUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.getUserByIdUseCase.execute(new UniqueEntityID(id));
  }

  @Get()
  filterPaginated(@Query() dto: FilterUserPaginatedDto) {
    return this.listUsersUseCase.execute(dto);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.createUserUseCase.execute(payload);
  }

  @Patch(':id/active')
  toggleActive(@Param('id') id: string, @Body() dto: ToggleActiveUserDto) {
    return this.toggleActiveUseCase.execute(
      new UniqueEntityID(id),
      dto.isActive,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.deleteUserUseCase.execute(new UniqueEntityID(id));
  }
}
