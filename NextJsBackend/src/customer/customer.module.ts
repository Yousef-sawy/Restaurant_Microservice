import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './customer.model'; // Import the schema
//import { model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]), // Provide CustomerModel
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule { }

//export const CustomerModel = model<Customer>('Customer', CustomerSchema);
