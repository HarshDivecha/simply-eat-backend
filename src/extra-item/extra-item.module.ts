import { Module } from '@nestjs/common';
import { ExtraItemService } from './extra-item.service';
import { ExtraItemController } from './extra-item.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExtraItemController],
  providers: [ExtraItemService]
})
export class ExtraItemModule {}
