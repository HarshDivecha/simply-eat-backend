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
import { CategoryService } from './category.service';
import { Category, Prisma } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }


  @Post()
  async createCategories(@Body() categories: Prisma.CategoryCreateManyInput[]): Promise<any> {
    return this.categoryService.createCategories(categories);
  }

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }

  @Get('with-mainitems')
  async getAllCategoriesWithMainItems(): Promise<Category[]> {
    return this.categoryService.getAllCategoriesWithMainItems();
  }

  @Get(':id')
  async getCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Category | null> {
    return this.categoryService.getCategoryById(id);
  }

  @Put(':id')
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryData: Prisma.CategoryUncheckedUpdateInput,
  ): Promise<Category> {
    return this.categoryService.updateCategory({
      where: { id },
      data: categoryData,
    });
  }

  @Delete(':id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.deleteCategory({ id });
  }
}
