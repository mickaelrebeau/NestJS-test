import { IsNotEmpty, IsString, IsNumber }  from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class CreateProductDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quantity: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    user: string
}
