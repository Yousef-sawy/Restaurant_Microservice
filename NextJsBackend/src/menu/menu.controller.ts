import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.model';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }
    @Post()
    async create(@Body() createMenuDto: Menu): Promise<Menu> {
        return this.menuService.create(createMenuDto);
    }

    @Get()
    async findAll(): Promise<Menu[]> {
        return this.menuService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Menu> {
        return this.menuService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMenuDto: Menu): Promise<Menu> {
        return this.menuService.update(id, updateMenuDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.menuService.delete(id);
    }

}