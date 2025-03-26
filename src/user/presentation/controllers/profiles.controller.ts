import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetProfilesUseCase } from '../../application/use-cases/get-profiles.use-case';

@Controller('profiles')
@ApiTags('profiles')
export class ProfilesController {
  constructor(private readonly getProfilesUseCase: GetProfilesUseCase) {}

  @Get()
  getProfiles() {
    return this.getProfilesUseCase.execute();
  }
}
