import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientSchema } from './schema/client.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Client',schema:ClientSchema}])
  ],
  controllers: [ClientController],
  providers:[ClientService]
})
export class ClientModule {}
