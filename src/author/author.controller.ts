import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  createAuthor(@Body('name') name: string) {
    return this.authorService.createAuthor(name);
  }

  @Get(':id')
  getAuthorById(@Param('id') id: string) {
    return this.authorService.getAuthorById(id);
  }

  @Put(':id')
  updateAuthorById(@Param('id') id: string, @Body('name') name: string) {
    return this.authorService.updateAuthorById(id, name);
  }

  @Delete(':id')
  deleteAuthorById(@Param('id') id: string) {
    return this.authorService.deleteAuthorById(id);
  }
}
