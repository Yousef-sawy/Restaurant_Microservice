import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserType } from './user-type.model';

@Injectable()
export class UserTypeService {
  constructor(@InjectModel('UserType') private readonly userTypeModel: Model<UserType>) {}

  async create(userType: UserType): Promise<UserType> {
    const newUserType = new this.userTypeModel(userType);
    return await newUserType.save();
  }

  async findAll(): Promise<UserType[]> {
    return await this.userTypeModel.find().exec();
  }

  async findOne(id: string): Promise<UserType> {
    return await this.userTypeModel.findById(id).exec();
  }

  async update(id: string, userType: UserType): Promise<UserType> {
    return await this.userTypeModel.findByIdAndUpdate(id, userType, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.userTypeModel.findByIdAndDelete(id).exec();
  }
}
