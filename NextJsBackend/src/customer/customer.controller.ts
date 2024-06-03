import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post('createCustomer')
    async create(@Body() createCustomerDto: Customer): Promise<Customer> {
        return this.customerService.create(createCustomerDto);
    }

    @Get()
    async getCustomers(): Promise<Customer[]> {
        return this.customerService.findAll();
    }

    @Get(':id')
    async getCustomerById(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findOne(id);
    }

    @Put('updateCustomer/:id')
    async updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: Customer): Promise<Customer> {
        return this.customerService.update(id, updateCustomerDto);
    }

    @Delete('deleteCustomer/:id')
    async deleteCustomer(@Param('id') id: string): Promise<any> {
        return this.customerService.delete(id);
    }
}
