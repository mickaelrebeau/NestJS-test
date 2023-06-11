import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { User } from "src/user/schemas/user.schema";

export type ProductDocument = Product & Document;

export enum Category {
    Clothing = 'Clothing',
    Electronics = 'Electronics',
    Food = 'Food',
    Music = 'Music',
    Sports = 'Sports',
}

@Schema({collection: "product", versionKey: false, timestamps: true})
export class Product{
    @Prop({
        required: true,
        default: 0.0,
        type: Number,
    })
    price: number;
    
    @Prop({
        required: true,
        type: String,
    })
    name: string;

    @Prop({
        required: true,
        enum: Category,
        type: String,
    })
    category: Category;

    @Prop({
        required: true,
        type: String,
    })
    description: string;

    @Prop({
        required: true,
        type: Number,
    })
    quantity: number;

    @Prop({
        required: true,
        type: SchemaTypes.ObjectId,
        ref: User.name,
    })
    user: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product)