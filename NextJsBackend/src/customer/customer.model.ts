import { Schema, Document, model } from 'mongoose';

export interface Customer extends Document {
readonly customer_name: string;
readonly phone_number: string;
readonly email: string;
}

export const CustomerSchema = new Schema({
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



export const CustomerModel = model<Customer>('Customer', CustomerSchema);
