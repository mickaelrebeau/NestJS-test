import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({collection: "user", versionKey: false, timestamps: true})
export class User{
    @Prop({
        required: true,
        default: "John"
    })
    firstname: string;

    @Prop({
        required: true,
        default: "Smith"
    })
    lastname: string;

    @Prop({
        required: true,
    })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User)