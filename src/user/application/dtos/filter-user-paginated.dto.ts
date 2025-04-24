import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max } from 'class-validator';

export class FilterUserPaginatedDto {
  @ApiProperty({
    required: false,
    description: 'Search term for filtering users',
    type: String,
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    required: false,
    description: 'Filter by profile ID',
    type: String,
  })
  @IsOptional()
  @IsString()
  profileId?: string;

  @ApiProperty({
    required: false,
    description: 'Page number for pagination',
    default: 0,
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  page?: number;

  @ApiProperty({
    required: false,
    description: 'Number of items per page',
    default: 10,
    maximum: 50,
    type: Number,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Max(50)
  limit?: number;
}
