import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MenuType } from './menu-type.model';

@Injectable()
export class MenuTypeService {
    constructor(@Inject('MenuTypeModel') private readonly menuTypeModel: Model<MenuType>) {}

  async create(menuType: MenuType): Promise<MenuType> {
    const newMenuType = new this.menuTypeModel(menuType);
    return await newMenuType.save();
  }

  async findAll(): Promise<MenuType[]> {
    return await this.menuTypeModel.find().exec();
  }

  async findOne(id: string): Promise<MenuType> {
    return await this.menuTypeModel.findById(id).exec();
  }

  async update(id: string, menuType: MenuType): Promise<MenuType> {
    return await this.menuTypeModel.findByIdAndUpdate(id, menuType, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.menuTypeModel.deleteOne({ _id: id }).exec();
  }
}