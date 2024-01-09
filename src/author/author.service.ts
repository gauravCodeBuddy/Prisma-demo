import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {
  constructor(    private readonly prismaService: PrismaService,
    ){}
    async createAuthor(name: string) {
      return this.prismaService.author.create({ data: { name } });
    }
  
    async getAuthorById(id: string) {
      return this.prismaService.author.findUnique({ where: { id }, include: { posts: true } });
    }
  
    async updateAuthorById(id: string, name: string) {
      return this.prismaService.author.update({ where: { id }, data: { name } });
    }
  
    async deleteAuthorById(id: string) {
      await this.prismaService.post.deleteMany({ where: { authorId: id } });
      return this.prismaService.author.delete({ where: { id } });
    }
  
}
