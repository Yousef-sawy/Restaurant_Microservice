import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuType } from './menu-type.model';

@Injectable()
export class MenuTypeService {
  constructor(@InjectModel('MenuType') private readonly menuTypeModel: Model<MenuType>) { }

  async create(createMenuTypeDto: MenuType): Promise<MenuType> {
    console.log('Creating menuType:', createMenuTypeDto);
    const createdMenuType = new this.menuTypeModel(createMenuTypeDto);
    return await createdMenuType.save();
  }

  async findAll(): Promise<MenuType[]> {
    return await this.menuTypeModel.find().exec();
  }

  async findOne(id: string): Promise<MenuType> {
    return await this.menuTypeModel.findById(id).exec();
  }

  async update(id: string, updateMenuTypeDto: MenuType): Promise<MenuType> {
    return await this.menuTypeModel.findByIdAndUpdate(id, updateMenuTypeDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.menuTypeModel.findByIdAndDelete(id).exec();
  }
}
