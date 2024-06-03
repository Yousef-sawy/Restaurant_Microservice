import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Controller('Feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @Post()
    async create(@Body() createFeedbackDto: Feedback): Promise<Feedback> {
        return this.feedbackService.create(createFeedbackDto);
    }

    @Get()
    async findAll(): Promise<Feedback[]> {
        return this.feedbackService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Feedback> {
        return this.feedbackService.findOne(id);
    }

    @Put('updateFeedback/:id')
    async update(@Param('id') id: string, @Body() updateFeedbackDto: Feedback): Promise<Feedback> {
        return this.feedbackService.update(id, updateFeedbackDto);
    }

    @Delete('deleteFeedback/:id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.feedbackService.delete(id);
    }
}
