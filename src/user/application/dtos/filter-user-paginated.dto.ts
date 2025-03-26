import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

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
    description: 'Page number for pagination',
    default: 0,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  page?: number; // Defina um valor padrão se desejar

  @ApiProperty({
    required: false,
    description: 'Number of items per page',
    default: 10,
  })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  limit?: number; // Defina um valor padrão se desejar
}
