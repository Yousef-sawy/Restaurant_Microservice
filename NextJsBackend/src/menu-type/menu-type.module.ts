import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuTypeController } from './menu-type.controller';
import { MenuTypeService } from './menu-type.service';
import { MenuTypeSchema,MenuTypeModel } from './menu-type.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'MenuType', schema: MenuTypeSchema }]), // Provide ItemModel
  ],
  controllers: [MenuTypeController],
  providers: [MenuTypeService]
})
export class MenuTypeModule {}
