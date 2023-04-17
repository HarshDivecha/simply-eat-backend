import { Test, TestingModule } from '@nestjs/testing';
import { ExtraItemService } from './extra-item.service';

describe('ExtraItemService', () => {
  let service: ExtraItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraItemService],
    }).compile();

    service = module.get<ExtraItemService>(ExtraItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
