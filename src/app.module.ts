import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [PostModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
