import { IsNotEmpty, IsString, IsEmail }  from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    firstname: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    lastname: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string
}
