import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ExtraItemService } from './extra-item.service';
import { ExtraItem, Prisma } from '@prisma/client';

@Controller('extra-item')
export class ExtraItemController {
  constructor(private readonly extraItemService: ExtraItemService) { }

  @Post()
  async createExtraItems(
    @Body() extraItems: Prisma.ExtraItemCreateManyInput[],
  ): Promise<ExtraItem> {
    return this.extraItemService.createExtraItems(extraItems);
  }

  @Get()
  async getAllExtraItems(): Promise<ExtraItem[]> {
    return this.extraItemService.getAllExtraItems();
  }

  @Get(':id')
  async getExtraItemById(@Param('id', ParseIntPipe) id: number): Promise<ExtraItem | null> {
    return this.extraItemService.getExtraItemById(id);
  }

  @Put(':id')
  async updateExtraItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() extraItemData: Prisma.ExtraItemUncheckedUpdateInput,
  ): Promise<ExtraItem> {
    return this.extraItemService.updateExtraItem({
      where: { id },
      data: extraItemData,
    });
  }


  @Delete(':id')
  async deleteExtraItem(@Param('id', ParseIntPipe) id: number): Promise<ExtraItem> {
    return this.extraItemService.deleteExtraItem({ id });
  }
}
