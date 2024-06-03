import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackSchema} from './feedback.model'; // Import the schema
//import { model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feedback', schema: FeedbackSchema }]), // Provide FeedbackModel
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}

//export const FeedbackModel = model<Feedback>('Feedback', FeedbackSchema);
