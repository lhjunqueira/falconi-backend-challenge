import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetProfilesUseCase } from '../../application/use-cases/get-profiles.use-case';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly getProfilesUseCase: GetProfilesUseCase) {}

  @Get()
  getProfiles() {
    return this.getProfilesUseCase.execute();
  }
}
