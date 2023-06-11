import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ){}

    async create(body:any): Promise<User> {
        // const user = new this.userModel({
        //     body
        // });

        // user.save();

        // return user;
        return this.userModel.create(body)
    }

    async update(ib: string ,body:any): Promise<User> {
        return this.userModel.findOneAndUpdate(body)
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    async deleteOneById(id: string): Promise<void>{
        await this.userModel.findOneAndRemove()
    }
}
