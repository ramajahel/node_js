import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service'

@Injectable()
export class ClientService {

    constructor(private readonly appService: AppService){}

    getClient(request: object): string {
        return this.appService.getHello() + ' clients'
    }

    getAllClient(): string[] {
        return ['Fist Client', 'Second client', 'Third']
    }

    saveClient(client: {}) {
        //save product to data base
        console.log('client saved')
        const clientSaved = {
            id: '1',
            ...client
        }
        return clientSaved
    }

}