import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  body: string;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}

export default CreatePostDto;
