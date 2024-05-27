import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { AppService } from '../app.service'
 

@Module({
  controllers: [ClientController],
  providers: [ClientService, AppService],
})
export class ClientModule {}