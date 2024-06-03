import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

async create(customer: Customer): Promise<Customer> {
const newCustomer = new this.customerModel(customer);
return await newCustomer.save();
}

async findAll(): Promise<Customer[]> {
return await this.customerModel.find().exec();
}

async findOne(id: string): Promise<Customer> {
return await this.customerModel.findById(id).exec();
}

async update(id: string, customer: Customer): Promise<Customer> {
return await this.customerModel.findByIdAndUpdate(id, customer, { new: true }).exec();
}

async delete(id: string): Promise<any> {
return await this.customerModel.deleteOne({ _id: id }).exec();
}
}
