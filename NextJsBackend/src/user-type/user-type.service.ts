import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './user-type.model';

@Injectable()
export class UserTypeService {
  constructor(@InjectModel('UserType') private readonly userTypeModel: Model<UserType>) {}

  async create(createUserTypeDto: UserType): Promise<UserType> {
    console.log('Creating UserType:', createUserTypeDto);  // Add this line
    const createdUserType = new this.userTypeModel(createUserTypeDto);
    return await createdUserType.save();
  }

  async findAll(): Promise<UserType[]> {
    return await this.userTypeModel.find().exec();
  }

  async findOne(id: string): Promise<UserType> {
    return await this.userTypeModel.findById(id).exec();
  }

  async update(id: string, updateUserTypeDto: UserType): Promise<UserType> {
    return await this.userTypeModel.findByIdAndUpdate(id, updateUserTypeDto, { new: true }).exec();
  }
  async delete(id: string): Promise<any> {
    return await this.userTypeModel.deleteOne({ _id: id }).exec();
}
}
