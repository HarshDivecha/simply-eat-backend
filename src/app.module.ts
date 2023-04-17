import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma.module';
import { CategoryModule } from './category/category.module';
import { MainItemModule } from './main-item/main-item.module';
import { ExtraItemModule } from './extra-item/extra-item.module';

@Module({
  imports: [MenuModule, CategoryModule, MainItemModule, ExtraItemModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
