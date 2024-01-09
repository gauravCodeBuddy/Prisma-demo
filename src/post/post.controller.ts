import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  
  @Post()
  createPost(@Body('title') title: string, @Body('body') body: any, @Body('authorId') authorId: string) {
    return this.postService.createPost(title, body, authorId);
  }

  @Get()
  getAllPosts(@Body('filterByAuthorId') filterByAuthorId?: string) {
    return this.postService.getAllPosts(filterByAuthorId);
  }

  @Put(':id')
  updatePostById(@Param('id') id: string, @Body('title') title: string, @Body('body') body: string) {
    return this.postService.updatePostById(id, title, body);
  }

  @Delete(':id')
  deletePostById(@Param('id') id: string) {
    return this.postService.deletePostById(id);
  }
}
