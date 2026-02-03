import {IsString, IsNotEmpty, IsInt, Min, Max} from 'class-validator';

export default class CreateSignalDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsInt()
  @Min(100)
  @Max(1000)
  frequency: number;

  @IsString()
  @IsNotEmpty()
  origin: string;
}
