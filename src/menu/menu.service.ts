import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Menu, Prisma } from '@prisma/client';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async createMenus(menus: Prisma.MenuCreateInput[]): Promise<any> {
    return this.prisma.$transaction(
      menus.map((menu) => this.prisma.menu.create({data: menu}))
    )
  }

  async getAllMenus(): Promise<Menu[]> {
    return this.prisma.menu.findMany();
  }

  async getAllMenusWithCategories(): Promise<Menu[]> {
    return this.prisma.menu.findMany();
  }

  async getMenuById(id: number): Promise<Menu | null> {
    return this.prisma.menu.findUnique({
      where: { id },
    });
  }

  async updateMenu(params: {
    where: Prisma.MenuWhereUniqueInput;
    data: Prisma.MenuUpdateInput;
  }): Promise<Menu> {
    const { where, data } = params;
    return this.prisma.menu.update({
      where,
      data,
    });
  }

  async deleteMenu(where: Prisma.MenuWhereUniqueInput): Promise<Menu> {
    return this.prisma.menu.delete({
      where,
    });
  }
}
