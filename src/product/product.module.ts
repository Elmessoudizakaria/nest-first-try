import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {MongooseModule} from '@nestjs/mongoose';
import { productSchema } from './schema/product.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Product',schema:productSchema}])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
