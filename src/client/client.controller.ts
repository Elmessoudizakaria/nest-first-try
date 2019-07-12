import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreatClientDto } from './dto/create-client.dto';
import { ClientService } from './client.service';
import { Client } from './interfaces/client.interface';


@Controller('client')
export class ClientController {
    constructor(private readonly clientService:ClientService){}

    @Post()
    async create(@Body() CreatClientDto: CreatClientDto){
        this.clientService.create(CreatClientDto);
    }

    @Get()
    async findAll():Promise<Client[]>{
        return this.clientService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') clientId:string):Promise<Client>{
        return this.clientService.findOne(clientId);
    }
}