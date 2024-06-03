import { Schema, Document, model, Types } from 'mongoose';

// Define the Customer interface
export interface Customer extends Document {
    customer_id: Types.ObjectId; // This field will use Mongoose's ObjectId type
    customer_name: string;
    phone_number: string;
    email: string;
}

// Define the Customer schema
export const CustomerSchema = new Schema<Customer>({
    customer_id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), 
    },
    customer_name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// Export the Customer model
export const CustomerModel = model<Customer>('Customer', CustomerSchema);
