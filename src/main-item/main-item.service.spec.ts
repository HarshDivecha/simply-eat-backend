import { Test, TestingModule } from '@nestjs/testing';
import { MainItemService } from './main-item.service';

describe('MainItemService', () => {
  let service: MainItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainItemService],
    }).compile();

    service = module.get<MainItemService>(MainItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
