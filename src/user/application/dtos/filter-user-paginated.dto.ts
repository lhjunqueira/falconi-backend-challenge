import { IsInt, IsOptional, IsString } from 'class-validator';

export class FilterUserPaginatedDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  limit?: number;
}
