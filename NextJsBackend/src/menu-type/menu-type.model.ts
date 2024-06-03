import { Schema,Document,model } from 'mongoose';


export interface MenuType extends Document {
  readonly dish_type: string;
  readonly meal_type: string;
  readonly diet_type: string;
}

export const MenuTypeSchema = new Schema({
  dish_type: {
    type: String, 
    required: true,
  },
  meal_type: {
    type: String,
    required: true,
  },
  diet_type: {
    type: String,
  },
});

export const MenuTypeModel = model<MenuType>('MenuTypeSchema', MenuTypeSchema);
