import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    async create(@Body() createOrderDto: Order): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Put('updateOrder/:id')
    async update(@Param('id') id: string, @Body() updateOrderDto: Order): Promise<Order> {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete('deleteOrder/:id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.orderService.delete(id);
    }
}
