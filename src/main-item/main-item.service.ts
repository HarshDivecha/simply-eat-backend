import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MainItem, Prisma } from '@prisma/client';
import { connect } from 'http2';

@Injectable()
export class MainItemService {
  constructor(private prisma: PrismaService) { }

  async createMainItems(mainItems: Prisma.MainItemCreateManyInput[]): Promise<any> {
    return this.prisma.$transaction(
      mainItems.map((mainItem) => this.prisma.mainItem.create({ data: mainItem })),
    );
  }

  async getAllMainItems(): Promise<MainItem[]> {
    return this.prisma.mainItem.findMany();
  }

  async getAllMainItemsWithExtraItems(): Promise<MainItem[]> {
    return this.prisma.mainItem.findMany({
      include: {"extras": true}
    });
  }

  async getMainItemById(id: number): Promise<MainItem | null> {
    return this.prisma.mainItem.findUnique({
      where: { id },
    });
  }

  async updateMainItem(params: {
    where: Prisma.MainItemWhereUniqueInput;
    data: Prisma.MainItemUncheckedUpdateInput;
    categoryId?: number;
  }): Promise<MainItem> {
    const { where, data } = params;
    return this.prisma.mainItem.update({ 
      where,
      data,
    },);
  }
  
  async deleteMainItem(where: Prisma.MainItemWhereUniqueInput): Promise<MainItem> {
    return this.prisma.mainItem.delete({
      where,
    });
  }
}
