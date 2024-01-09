import { Injectable } from '@nestjs/common';
import { PrismaClient,Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query'> {
  constructor() {
    super({ log: [{ level: 'query', emit: 'event' }] });
    
  }

}
