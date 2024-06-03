import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './menu.model';

@Injectable()
export class MenuService {
  constructor(@Inject('MenuModel') private readonly menuModel: Model<Menu>) { }

  async create(menu: Menu): Promise<Menu> {
    console.log('Creating menu:', menu); // Add this line for logging
    const newMenu = new this.menuModel(menu);
    return await newMenu.save();
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuModel.find().exec();
  }

  async findOne(id: string): Promise<Menu> {
    return await this.menuModel.findById(id).exec();
  }

  async update(id: string, menu: Menu): Promise<Menu> {
    return await this.menuModel.findByIdAndUpdate(id, menu, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.menuModel.deleteOne({ _id: id }).exec();
  }
}