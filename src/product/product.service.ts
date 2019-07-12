import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from './interface/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}
    async create(CreateProductDto:CreateProductDto):Promise<Product>{
        const createdProduct = new this.productModel(CreateProductDto);
        return await createdProduct.save();
    }
    async findAll():Promise<Product[]>{
        return await this.productModel.find().exec();
    }
    async remove(id:string):Promise<Product[]>{
        await this.productModel.deleteOne({_id:id});
        return await this.findAll();
    }
}
