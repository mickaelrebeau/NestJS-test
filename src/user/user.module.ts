import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { ProductModule } from 'src/product/product.module';
import { PaginationModule } from '@app/pagination';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
          name: User.name,
          schema: UserSchema
        }
      ]),
    ProductModule,
    PaginationModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
