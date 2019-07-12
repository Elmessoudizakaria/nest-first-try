import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { CreatClientDto } from './dto/create-client.dto';
import { Client } from './interfaces/client.interface';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class ClientService{
  constructor(@InjectModel('Client') private readonly clientModel:Model<Client>){}
    async create(CreatClientDto: CreatClientDto): Promise<Client> {
        const createdClient = new this.clientModel(CreatClientDto);
        return await createdClient.save();
      }
    
    async findAll(): Promise<Client[]> {
      return await this.clientModel.find().exec();
    }
    async findOne(id:string):Promise<Client>{
      return await this.clientModel.findById(id)
    }
}