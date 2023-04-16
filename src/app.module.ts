import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
