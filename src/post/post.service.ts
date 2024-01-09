import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(    private readonly prismaService: PrismaService,
    ){}
    async createPost(title: string, body: string, authorId: string) {
      return this.prismaService.post.create({ data: { title, body, authorId } });
    }
  
    async getAllPosts(filterByAuthorId?: string) {
      return this.prismaService.post.findMany({
        where: filterByAuthorId ? { authorId: filterByAuthorId } : undefined,
      });
    }
  
    async updatePostById(id: string, title: string, body: string) {
      return this.prismaService.post.update({ where: { id }, data: { title, body } });
    }
  
    async deletePostById(id: string) {
      return this.prismaService.post.delete({ where: { id } });
    }
}
