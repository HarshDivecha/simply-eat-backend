import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // transaction is used for atomicity and consistency
  async createCategories(
    categories: Prisma.CategoryCreateManyInput[],
  ): Promise<any> {
  
    return this.prisma.$transaction(
      categories.map((category) =>
        this.prisma.category?.create({ data: category }),
      ),
    );
  }

  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getAllCategoriesWithMainItems(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: { mainItems: true },
    });
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
      include: { mainItems: true },
    });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUncheckedUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    return this.prisma.category.update({
      where,
      data,
    });
  }

  async deleteCategory(
    where: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category> {
    return this.prisma.category.delete({
      where,
    });
  }
}
