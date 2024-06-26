import { Test, TestingModule } from '@nestjs/testing';
import { MenuTypeController } from './menu-type.controller';

describe('MenuTypeController', () => {
  let controller: MenuTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuTypeController],
    }).compile();

    controller = module.get<MenuTypeController>(MenuTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
