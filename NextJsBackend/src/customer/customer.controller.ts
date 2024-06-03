import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Controller('customer')
export class CustomerController {
constructor(private readonly customerService: CustomerService) { }

@Post()
async create(@Body() createCustomerDto: Customer): Promise<Customer> {
return this.customerService.create(createCustomerDto);
}

@Get()
async findAll(): Promise<Customer[]> {
return this.customerService.findAll();
}

@Get(':id')
async findOne(@Param('id') id: string): Promise<Customer> {
return this.customerService.findOne(id);
}

@Put(':id')
async update(@Param('id') id: string, @Body() updateCustomerDto: Customer): Promise<Customer> {
return this.customerService.update(id, updateCustomerDto);
}

@Delete(':id')
async remove(@Param('id') id: string): Promise<any> {
return this.customerService.delete(id);
}
}
