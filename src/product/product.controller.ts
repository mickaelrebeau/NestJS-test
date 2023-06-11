import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
// import { UserService } from 'src/user/user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/product.dto';

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
        // private readonly userService: UserService
    ){}

    @Get()
    @ApiResponse({
        description : "Get all products"
    })
    findAll(): Array<any>{
        return []
    }

    @Get('/:id')
    @ApiResponse({
        description : "Get of an product"
    })
    async find(@Param('id') id: string): Promise<Product>{
        return this.productService.getById(id);
    }

    @Post()
    @ApiResponse({
        description : "Create an product"
    })
    async create(@Body() body: CreateProductDto): Promise<{message: string, product: Product}>{
        const product = await this.productService.create(body)

        return {message: "Product Create", product: product};
    }

    @Put('/:id')
    @ApiResponse({
        description : "Update an product"
    })
    async modify(
        @Param('id') id: string,
        @Body() body: any
    ): Promise<Product | {message: string}>{
        const product = await this.productService.getById(id)
        if(!product){
            return {message: "Product not found"}
        }
        const res = await this.productService.deleteOneById(id)
        return this.productService.update(id, body);
    }
    
    @Delete('/:id')
    @ApiResponse({
        description : "Delete an product"
    })
    async destroy(@Param('id') id: string): Promise<{message: string}>{
        const product = await this.productService.getById(id)
        if(!product){
            return {message: "Product not found"}
        }
        await this.productService.deleteOneById(id)
        return {message: "Product Delete"};
    }
    
}

