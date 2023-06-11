import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule,
  MongooseModule.forRoot(
    "mongodb+srv://root:root@lp-lol.guyjxlp.mongodb.net/admin?retryWrites=true&replicaSet=atlas-mx1ya4-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1",
    {
      dbName: "nestjs",
    }
  ),
  ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
