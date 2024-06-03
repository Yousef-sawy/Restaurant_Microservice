import { Schema, Document, model } from 'mongoose';

// Define the User interface
export interface User extends Document {
  readonly user_id: Schema.Types.ObjectId;
  readonly username: string;
  readonly password: string;
  readonly user_type: Schema.Types.ObjectId;
  readonly national_id: string;
  readonly phone_no: string;
}

// Define the User schema
export const UserSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: Schema.Types.ObjectId,
    ref: 'UserType',
    required: true,
  },
  national_id: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
});

// Export the User model
export const UserModel = model<User>('User', UserSchema);
