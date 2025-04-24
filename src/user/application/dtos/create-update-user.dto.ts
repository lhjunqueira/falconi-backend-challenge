import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUpdateUserDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the user.',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user.',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  lastName: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user.',
    required: true,
    type: String,
  })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    example: 'true',
    description: 'Indicates if the user is active.',
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    example: '7e4e1613-0435-4f2d-a04e-dfd30510fdfb',
    description: "The ID of the user's profile.",
    required: true,
    type: String,
  })
  @IsString()
  profileId: string;
}
