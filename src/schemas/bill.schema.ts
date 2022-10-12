import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

@Schema()
export class Bill {
  
  @Prop()
  username: string;
  @Prop()
  title: string;
  @Prop()
  price: string;
  @Prop()
  quantity: string;
  @Prop()
  address: string;
  @Prop()
  image: string;
  @Prop({unique:true})
  hash_bill: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
