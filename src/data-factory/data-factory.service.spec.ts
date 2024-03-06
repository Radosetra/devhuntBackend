import { Test, TestingModule } from '@nestjs/testing';
import { DataFactoryService } from './data-factory.service';

describe('DataFactoryService', () => {
  let service: DataFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataFactoryService],
    }).compile();

    service = module.get<DataFactoryService>(DataFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
