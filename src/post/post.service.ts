import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreatePostDto from './dto/createPost.body.dto';
import UpdatePostDto from './dto/updatePost.body.dto';

@Injectable()
export class PostService {
  constructor(    private readonly prismaService: PrismaService,
    ){}
    async createPost(post:CreatePostDto) {      
      return this.prismaService.post.create({ data: { title:post.title,authorId:post.authorId,body:post.body } });
    }
  
    async getAllPosts(filterByAuthorId: string) {
      return this.prismaService.post.findMany({
        where: { authorId: filterByAuthorId } ,
      });
    }
  
    async updatePostById(id:string,post:UpdatePostDto) {
      console.log(post,id);
      
      return this.prismaService.post.update({ where: { id }, data: { ...post } });
    }
  
    async deletePostById(id: string) {
      return this.prismaService.post.delete({ where: { id } });
    }
}
