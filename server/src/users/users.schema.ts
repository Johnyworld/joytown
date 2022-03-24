import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions, Types } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

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
  password: string;

  @Prop()
  @IsDateString()
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
  farm: string;

  readonly readOnlyData: { id: string; email: string; name: string };
}

export const UserSchema = SchemaFactory.createForClass(User);

@Schema(options)
export class Password extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'users' })
  @Type(() => User)
  user: Types.ObjectId;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  code: string;

  @Prop()
  @IsString()
  expired: string;
}

export const PasswordSchema = SchemaFactory.createForClass(Password);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    birth: this.birth,
    address: this.address,
    contact: this.contact,
    photo: this.photo,
    farm: this.farm,
  };
});
