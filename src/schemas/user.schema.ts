import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop({unique:true})
  username: string;
  @Prop()
  password: string;
  @Prop()
  address: string;
  @Prop()
  age: string;
  @Prop()
  name: string;
  @Prop({unique:true})
  walletAddress: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
