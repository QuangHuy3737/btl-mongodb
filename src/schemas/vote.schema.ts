import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote {
  @Prop()
  nameCandidate: string;
  @Prop()
  address: string;
  @Prop()
  birth: string;
  @Prop()
  idNumber: string;
  @Prop()
  name: string;
  @Prop()
  updated_at: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
