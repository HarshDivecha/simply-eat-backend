import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExtraItem, Prisma } from '@prisma/client';

@Injectable()
export class ExtraItemService {
  constructor(private prisma: PrismaService) { }

  async createExtraItems(extraItems: Prisma.ExtraItemCreateManyInput[]): Promise<any> {
    return this.prisma.$transaction(
      extraItems.map((extraItem) => this.prisma.extraItem.create({ data: extraItem })),
    );
  }

  async getAllExtraItems(): Promise<ExtraItem[]> {
    return this.prisma.extraItem.findMany();
  }

  async getExtraItemById(id: number): Promise<ExtraItem | null> {
    return this.prisma.extraItem.findUnique({
      where: { id },
    });
  }

  async updateExtraItem(params: {
    where: Prisma.ExtraItemWhereUniqueInput;
    data: Prisma.ExtraItemUncheckedUpdateInput;
    mainItemId?: number;
  }): Promise<ExtraItem> {
    const { where, data } = params;
    return this.prisma.extraItem.update({
      where,
      data,
    });
  }
  

  async deleteExtraItem(where: Prisma.ExtraItemWhereUniqueInput): Promise<ExtraItem> {
    return this.prisma.extraItem.delete({
      where,
    });
  }
}
