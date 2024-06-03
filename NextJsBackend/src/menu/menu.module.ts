import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuSchema } from './menu.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }]), // Provide ItemModel
  ],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule { }