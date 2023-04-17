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
import { MainItemService } from './main-item.service';
import { MainItem, Prisma } from '@prisma/client';

@Controller('main-item')
export class MainItemController {
  constructor(private readonly mainItemService: MainItemService) { }

  @Post()
  async createMainItems(@Body() mainItems: Prisma.MainItemCreateManyInput[]): Promise<any> {
    return this.mainItemService.createMainItems(mainItems); 
  }

  @Get()
  async getAllMainItems(): Promise<MainItem[]> {
    return this.mainItemService.getAllMainItems();
  }

  @Get("with-extras")
  async getAllMainItemsWithExtraItems(): Promise<MainItem[]> {
    return this.mainItemService.getAllMainItemsWithExtraItems();
  }

  @Get(':id')
  async getMainItemById(@Param('id', ParseIntPipe) id: number): Promise<MainItem | null> {
    return this.mainItemService.getMainItemById(id);
  }

  @Put(':id')
  async updateMainItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() mainItemData: Prisma.MainItemUncheckedUpdateInput,
  ): Promise<MainItem> {
    return this.mainItemService.updateMainItem({
      where: { id },
      data: mainItemData,
    });
  }

  @Delete(':id')
  async deleteMainItem(@Param('id', ParseIntPipe) id: number): Promise<MainItem> {
    return this.mainItemService.deleteMainItem({ id });
  }
}
