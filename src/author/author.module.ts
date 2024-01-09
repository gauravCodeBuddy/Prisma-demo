import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports:[PrismaModule],
    providers:[AuthorService],
    controllers:[AuthorController]
})
export class AuthorModule {}
