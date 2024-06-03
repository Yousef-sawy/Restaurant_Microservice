import { Module } from '@nestjs/common';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTypeSchema } from './user-type.model'; // Import the schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserType', schema: UserTypeSchema }]), // Provide UserTypeModel
  ],
  controllers: [UserTypeController],
  providers: [UserTypeService],
})
export class UserTypeModule {}
