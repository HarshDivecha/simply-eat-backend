import { Module } from '@nestjs/common';
import { MainItemService } from './main-item.service';
import { MainItemController } from './main-item.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MainItemController],
  providers: [MainItemService]
})
export class MainItemModule {}
