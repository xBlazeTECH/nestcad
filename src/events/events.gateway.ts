import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
  
@WebSocketGateway(3001)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('action')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
      console.log('Serverbound Action:' + data);
    return from([1, 2, 3]).pipe(map(item => ({ event: 'action', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
      console.log('Identity: ' + data);
    return data;
  }
}