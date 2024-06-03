import { Schema, Document, model } from 'mongoose';

// Define the UserType interface
export interface UserType extends Document {
  readonly user_type_id: Schema.Types.ObjectId;
  readonly type_name: string;
}

// Define the UserType schema
export const UserTypeSchema = new Schema({
  user_type_id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  type_name: {
    type: String,
    required: true,
  },
});

// Export the UserType model
export const UserTypeModel = model<UserType>('UserType', UserTypeSchema);
