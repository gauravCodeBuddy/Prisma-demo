import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  body: string;
}

export default UpdatePostDto;
