import { Schema, Document, model, Types } from 'mongoose';

// Define the UserType interface
export interface UserType extends Document {
  user_type_id: Types.ObjectId;  // This field will use Mongoose's ObjectId type
  type_name: string;
}

// Define the UserType schema
export const UserTypeSchema = new Schema<UserType>({
  user_type_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),  // Automatically generate ObjectId
  },
  type_name: {
    type: String,
    required: true,
  },
});

// Export the UserType model
export const UserTypeModel = model<UserType>('UserType', UserTypeSchema);
