import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import CreatePostDto from './dto/createPost.body.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }

  @Get(':filterByAuthorId')
  getAllPosts(@Param('filterByAuthorId') filterByAuthorId: string) {
    return this.postService.getAllPosts(filterByAuthorId);
  }

  @Put(':id')
  updatePostById(@Param('id') id: string, @Body() post: CreatePostDto) {
    return this.postService.updatePostById(id, post);
  }

  @Delete(':id')
  deletePostById(@Param('id') id: string) {
    return this.postService.deletePostById(id);
  }
}
