import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('product')
export class ProductController {
    constructor(private productService :ProductService){}

    @Get()
    async findAll():Promise<Product[]>{
        return await this.productService.findAll();
    }

    @Post()
    async create(@Body() CreateProductDto:CreateProductDto):Promise<Product>{
        return await this.productService.create(CreateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id:string):Promise<Product[]>{
        return await this.productService.remove(id)
    }
}
