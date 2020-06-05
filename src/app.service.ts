import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getIndex(): string {
        return 'Hello World';
    }
    getViewName(qry): string {
        return qry;
    }
}