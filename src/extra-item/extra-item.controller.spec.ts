import { Test, TestingModule } from '@nestjs/testing';
import { ExtraItemController } from './extra-item.controller';
import { ExtraItemService } from './extra-item.service';

describe('ExtraItemController', () => {
  let controller: ExtraItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraItemController],
      providers: [ExtraItemService],
    }).compile();

    controller = module.get<ExtraItemController>(ExtraItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
