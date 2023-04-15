import { PrismaClient } from '@prisma/client'
import { menusData } from './menusData';
const prisma = new PrismaClient()

async function resetDb(){
    prisma.menu.deleteMany();
    prisma.mainItem.deleteMany();
    prisma.extraItem.deleteMany();
    prisma.category.deleteMany();
}

async function seedDb(){
  prisma.menu.createMany({data: menusData})
}

async function main() {
    resetDb();
    seedDb();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })