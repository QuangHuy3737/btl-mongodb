import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  
  @Prop()
  title: string;
  @Prop()
  describe: string;
  @Prop()
  author: string;
  @Prop()
  price: string;
  @Prop()
  quantity: string;
  @Prop()
  image:string;
  @Prop()
  date: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
