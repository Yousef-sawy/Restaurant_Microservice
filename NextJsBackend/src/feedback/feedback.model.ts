import { Schema, Document, model } from 'mongoose';

export interface Feedback extends Document {
    readonly customer_id: string;
    readonly rating: number;
    readonly feedback: string;
}

export const FeedbackSchema = new Schema({
    customer_id: {
        type: String, // Treat customer_id as a regular string
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
});

export const FeedbackModel = model<Feedback>('Feedback', FeedbackSchema);
