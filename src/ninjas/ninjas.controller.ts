import { Body, Controller, Get, Param, Post, Query,Put } from '@nestjs/common';
import { get } from 'http';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {

   @Get()
    getNinjas(@Query('type') type:string){
        return [{type}];
    }
    @Get(':id')
    getOneNinjas(@Param('id') id: string){
        return {
            id,
        };
    }
    @Post()
    createNinja(@Body()createNinjaDto:CreateNinjaDto){
        return {
            name: createNinjaDto.name
        };
    }
    @Put(':id')
    updateNinja(@Param('id')id:string)
    {
        return{
            id,
        };

    }
}


