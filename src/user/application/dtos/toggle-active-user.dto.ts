import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ToggleActiveUserDto {
  @ApiProperty({
    example: true,
    description: 'Indicates whether the user is active or inactive',
    required: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
