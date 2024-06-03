import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema, Order } from './order.model'; // Import the schema
import { model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]), // Provide OrderModel
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}

export const OrderModel = model<Order>('Order', OrderSchema);
