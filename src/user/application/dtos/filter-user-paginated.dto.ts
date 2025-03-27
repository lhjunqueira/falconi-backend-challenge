import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max } from 'class-validator';

export class FilterUserPaginatedDto {
  @ApiProperty({
    required: false,
    description: 'Search term for filtering users',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    required: false,
    description: 'Filter by active status',
  })
  @IsOptional()
  @IsString()
  profileId?: string;

  @ApiProperty({
    required: false,
    description: 'Page number for pagination',
    default: 0,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  page?: number;

  @ApiProperty({
    required: false,
    description: 'Number of items per page',
    default: 10,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Max(50)
  limit?: number;
}
