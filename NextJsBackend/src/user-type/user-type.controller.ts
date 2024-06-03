import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { UserType } from './user-type.model';

@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Post()
  async create(@Body() createUserTypeDto: UserType): Promise<UserType> {
    return this.userTypeService.create(createUserTypeDto);
  }

  @Get()
  async findAll(): Promise<UserType[]> {
    return this.userTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserType> {
    return this.userTypeService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserTypeDto: UserType): Promise<UserType> {
    return this.userTypeService.update(id, updateUserTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.userTypeService.delete(id);
  }
}
