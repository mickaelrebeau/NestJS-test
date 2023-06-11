import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>,
    ){}

    async create(body:any): Promise<Product> {
        return this.productModel.create(body)
    }

    async update(ib: string ,body:any): Promise<Product> {
        return this.productModel.findOneAndUpdate(body)
    }

    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id);
    }

    async deleteOneById(id: string): Promise<void>{
        await this.productModel.findOneAndRemove()
    }
}
