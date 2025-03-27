import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: '7e4e1613-0435-4f2d-a04e-dfd30510fdfb',
    description: 'The ID of the user.',
  })
  @IsString()
  id: string;

  @ApiProperty({ example: 'John', description: 'The first name of the user.' })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user.' })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  lastName: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user.',
  })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    example: '7e4e1613-0435-4f2d-a04e-dfd30510fdfb',
    description: "The ID of the user's profile.",
  })
  @IsString()
  profileId: string;
}
