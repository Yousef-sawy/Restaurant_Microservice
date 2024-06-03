import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) { }

    async create(order: Order): Promise<Order> {
        console.log('Creating order:', order);
        const newOrder = new this.orderModel(order);
        return await newOrder.save();
    }

    async findAll(): Promise<Order[]> {
        return await this.orderModel.find().exec();
    }

    async findOne(id: string): Promise<Order> {
        return await this.orderModel.findById(id).exec();
    }

    async update(id: string, order: Order): Promise<Order> {
        return await this.orderModel.findByIdAndUpdate(id, order, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return await this.orderModel.deleteOne({ _id: id }).exec();
    }
}
