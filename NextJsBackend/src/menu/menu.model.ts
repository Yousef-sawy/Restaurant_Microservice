import { Schema, Document, model } from 'mongoose';

export interface Menu extends Document {
  readonly dish_name: string;
  readonly dish_description: string;
  readonly dish_price: string;
  readonly diet_type: string;
}

export const MenuSchema = new Schema({
  dish_name: {
    type: String,
    required: true,
  },
  dish_description: {
    type: String,
    required: true,
  },
  dish_price: {
    type: String,
    required: true,
  },
  diet_type: {
    type: String,
  },
});

export const MenuModel = model<Menu>('Menu', MenuSchema);
