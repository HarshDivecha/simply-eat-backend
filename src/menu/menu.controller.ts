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
import { MenuService } from './menu.service';
import { Menu, Prisma } from '@prisma/client';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async createMenus(@Body() data: Prisma.MenuCreateInput[]): Promise<any> {
    return this.menuService.createMenus(data);
  }

  @Get() 
  async getAllMenus(): Promise<Menu[]> { 
    // return this.menuService.getAllMenus();
    return []
  }

  @Get('with-categories')
  async getAllMenusWithCategories(): Promise<Menu[]> {
    return this.menuService.getAllMenusWithCategories();
  }

  @Get(':id')
  async getMenuById(@Param('id', ParseIntPipe) id: number): Promise<Menu | null> {
    return this.menuService.getMenuById(id);
  }

  @Put(':id')
  async updateMenu(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.MenuUpdateInput,
  ): Promise<Menu> {
    return this.menuService.updateMenu({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async deleteMenu(@Param('id', ParseIntPipe) id: number): Promise<Menu> {
    return this.menuService.deleteMenu({ id });
  }
}
