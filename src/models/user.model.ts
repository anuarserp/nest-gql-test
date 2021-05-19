import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document{
   @Field()
  @Prop({ required: true })
  username: string;
  
  @Field()
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Field({ nullable: true })
  @Prop({default: false})
  isSubscribe?: boolean;
  
  @Field()
  updatedAt: Date;
  
  @Field()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
