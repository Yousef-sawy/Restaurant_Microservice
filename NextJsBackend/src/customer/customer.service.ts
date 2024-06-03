import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    async create(createCustomerDto: Customer): Promise<Customer> {
        console.log('Creating Customer:', createCustomerDto); // Add this line for logging
        const createdCustomer = new this.customerModel(createCustomerDto);
        return await createdCustomer.save();
    }

    async findAll(): Promise<Customer[]> {
        return await this.customerModel.find().exec();
    }

    async findOne(id: string): Promise<Customer> {
        return await this.customerModel.findById(id).exec();
    }

    async update(id: string, updateCustomerDto: Customer): Promise<Customer> {
        return await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return await this.customerModel.deleteOne({ _id: id }).exec();
    }
}
