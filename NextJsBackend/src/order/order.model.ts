import { Schema, Document, model } from 'mongoose';

export interface Order extends Document {
    customer_id: Schema.Types.ObjectId;
    user_id: Schema.Types.ObjectId;
    menu_id: Schema.Types.ObjectId;
    order_date: Date;
    total_amount: number;
    orderType: 'Dine in' | 'Delivery' | 'PickUp';
}

export const OrderSchema = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    menu_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    total_amount: {
        type: Number,
        required: true,
    },
    orderType: {
        type: String,
        enum: ['Dine in', 'Delivery', 'PickUp'],
        required: true,
    },
});

export const OrderModel = model<Order>('Order', OrderSchema);
