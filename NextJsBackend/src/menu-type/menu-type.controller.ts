import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuTypeService } from './menu-type.service';
import { MenuType } from './menu-type.model';

@Controller('menu-type')
export class MenuTypeController {
    constructor(private readonly menuTypeService: MenuTypeService) { }

    @Post('createMenuType')
    async create(@Body() createMenuTypeDto: MenuType): Promise<MenuType> {
        return this.menuTypeService.create(createMenuTypeDto);
    }

    @Get()
    async findAll(): Promise<MenuType[]> {
        return this.menuTypeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MenuType> {
        return this.menuTypeService.findOne(id);
    }

    @Put('updateMenuType/:id')
    async update(@Param('id') id: string, @Body() updateMenuTypeDto: MenuType): Promise<MenuType> {
        return this.menuTypeService.update(id, updateMenuTypeDto);
    }

    @Delete('deleteMenuType/:id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.menuTypeService.delete(id);
    }
}
