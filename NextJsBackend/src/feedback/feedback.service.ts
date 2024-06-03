import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Feedback } from './feedback.model';

@Injectable()
export class FeedbackService {
    constructor(@InjectModel('Feedback') private readonly feedbackModel: Model<Feedback>) {}

    async create(feedback: Feedback): Promise<Feedback> {
        const newFeedback = new this.feedbackModel(feedback);
        return await newFeedback.save();
    }

    async findAll(): Promise<Feedback[]> {
        return await this.feedbackModel.find().exec();
    }

    async findOne(id: string): Promise<Feedback> {
        return await this.feedbackModel.findById(id).exec();
    }

    async update(id: string, feedback: Feedback): Promise<Feedback> {
        return await this.feedbackModel.findByIdAndUpdate(id, feedback, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return await this.feedbackModel.deleteOne({ _id: id }).exec();
    }
}
