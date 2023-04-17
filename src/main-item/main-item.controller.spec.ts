import { Test, TestingModule } from '@nestjs/testing';
import { MainItemController } from './main-item.controller';
import { MainItemService } from './main-item.service';

describe('MainItemController', () => {
  let controller: MainItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainItemController],
      providers: [MainItemService],
    }).compile();

    controller = module.get<MainItemController>(MainItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
