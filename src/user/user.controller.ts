import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from 'src/user/dtos/user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    @ApiResponse({
        description : "Get all users"
    })
    findAll(): Array<any>{
        return []
    }

    @Get('/:id')
    @ApiResponse({
        description : "Get of an user"
    })
    async find(@Param('id') id: string): Promise<User>{
        return this.userService.getById(id);
    }

    @Post()
    @ApiResponse({
        description : "Create an user"
    })
    async create(@Body() body: CreateUserDto): Promise<{message: string, user: User}>{
        const user = await this.userService.create(body)

        return {message: "User Create", user: user};
    }

    @Put('/:id')
    @ApiResponse({
        description : "Update an user"
    })
    async modify(
        @Param('id') id: string,
        @Body() body: any
    ): Promise<User | {message: string}>{
        const user = await this.userService.getById(id)
        if(!user){
            return {message: "User not found"}
        }
        const res = await this.userService.deleteOneById(id)
        return this.userService.update(id, body);
    }
    
    @Delete('/:id')
    @ApiResponse({
        description : "Delete an user"
    })
    async destroy(@Param('id') id: string): Promise<{message: string}>{
        const user = await this.userService.getById(id)
        if(!user){
            return {message: "User not found"}
        }
        await this.userService.deleteOneById(id)
        return {message: "User Delete"};
    }
    
}
