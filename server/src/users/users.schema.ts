import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop({ required: true, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  birth: string;

  @Prop()
  @IsString()
  address: string;

  @Prop()
  @IsString()
  contact: string;

  @Prop()
  @IsString()
  photo: string;

  @Prop()
  @IsString()
  farm: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
