import { Module } from '@nestjs/common';
import { MenuTypeController } from './menu-type.controller';
import { MenuTypeService } from './menu-type.service';
import { MenuTypeModel } from './menu-type.model';

@Module({
  controllers: [MenuTypeController],
  providers: [MenuTypeService, MenuTypeModel]
})
export class MenuTypeModule {}
